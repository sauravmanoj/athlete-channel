#!/usr/bin/env node
// Build the HyperFrames project for an episode: storyboard.json + timings.json -> episodes/<slug>/project/
// Usage: node pipeline/build.mjs <slug> [--no-lint]
import fs from "node:fs";
import path from "node:path";
import { episodeDir, loadChannel, readJSON, RUNTIME, ROOT, hf, run, mediaDuration, hashString, die, log, rel } from "./lib/core.mjs";
import { loadStoryboard, validate, makeResolver, narrationHash } from "./lib/storyboard.mjs";
import { renderScene } from "./scenes/index.mjs";
import { W, H } from "./scenes/common.mjs";

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--"));
const ep = episodeDir(slug);
const ch = loadChannel();
const sb = loadStoryboard(ep);

if (!fs.existsSync(path.join(RUNTIME, "gsap.min.js"))) die("Run `node pipeline/setup.mjs` first.");

const { errors, warnings } = validate(sb, ep);
warnings.forEach((w) => log(`  ! ${w}`));
if (errors.length) die(`Storyboard errors:\n  - ${errors.join("\n  - ")}`);

const timings = readJSON(path.join(ep, "timings.json"));
if (timings.narrationHash && timings.narrationHash !== narrationHash(sb)) {
  die(`Narration, pauses or voice changed since the last voiceover — run: node pipeline/tts.mjs ${slug}`);
}
const scenes = [...sb.scenes];
if (timings.scenes.some((t) => t.id === "endcard") && !scenes.some((s) => s.id === "endcard")) {
  scenes.push({ id: "endcard", kind: "endcard", narration: "" });
}
const tmap = new Map(timings.scenes.map((t) => [t.id, t]));
const missing = scenes.filter((s) => !tmap.has(s.id)).map((s) => s.id);
if (missing.length) die(`No timing for ${missing.join(", ")} — run: node pipeline/tts.mjs ${slug}`);

const proj = path.join(ep, "project");
fs.rmSync(path.join(proj, "scenes"), { recursive: true, force: true });
for (const d of ["scenes", "assets", "audio", "vendor"]) fs.mkdirSync(path.join(proj, d), { recursive: true });

// Vendor runtime (gsap, fonts, theme, textures)
fs.cpSync(RUNTIME, path.join(proj, "vendor"), { recursive: true });

const ctxBase = { epDir: ep, channel: ch };

const hosts = [];
for (const s of scenes) {
  const t = tmap.get(s.id);
  const ctx = { ...ctxBase, at: makeResolver(s, t) };
  let html;
  try {
    html = renderScene(s, t, ctx);
  } catch (e) {
    die(`Scene ${s.id} (${s.kind}) failed to build: ${e.message}`);
  }
  fs.writeFileSync(path.join(proj, "scenes", `${s.id}.html`), html);
  hosts.push(
    `  <div id="host-${s.id}" data-composition-id="${s.id}" data-composition-src="scenes/${s.id}.html" data-start="${t.start}" data-duration="${t.dur}" data-width="${W}" data-height="${H}" data-track-index="1"></div>`,
  );
}
// Custom scenes may reference any image in assets/images as assets/<file>
const imgDir = path.join(ep, "assets", "images");
if (fs.existsSync(imgDir)) for (const f of fs.readdirSync(imgDir)) fs.copyFileSync(path.join(imgDir, f), path.join(proj, "assets", f));

// Audio
fs.copyFileSync(path.join(ep, "audio", "narration.wav"), path.join(proj, "audio", "narration.wav"));
const total = timings.total;
let musicTag = "";
const musicDir = path.join(ROOT, ch.music.dir || "music");
const tracks = fs.existsSync(musicDir) ? fs.readdirSync(musicDir).filter((f) => /\.(mp3|m4a|wav|ogg|flac)$/i.test(f)).sort() : [];
const chosen = sb.music ? path.join(musicDir, sb.music) : tracks.length ? path.join(musicDir, tracks[parseInt(hashString(slug), 16) % tracks.length]) : null;
if (chosen && fs.existsSync(chosen)) {
  const bed = path.join(proj, "audio", "music-bed.m4a");
  log(`  ♫ music bed: ${path.basename(chosen)}`);
  run("ffmpeg", ["-y", "-v", "error", "-stream_loop", "-1", "-i", chosen, "-t", total.toFixed(2),
    "-af", `afade=t=in:d=${ch.music.fadeIn},afade=t=out:st=${Math.max(0, total - ch.music.fadeOut).toFixed(2)}:d=${ch.music.fadeOut}`,
    "-c:a", "aac", "-b:a", "160k", bed], { quiet: true });
  musicTag = `  <audio id="music" src="audio/music-bed.m4a" data-start="0" data-duration="${total}" data-volume="${sb.musicVolume ?? ch.music.volume}"></audio>`;
} else {
  log("  (no music in ./music — narration only)");
}

const mc = ch.mascot || {};
const brandCss = `:root{--brand:${mc.body || "#F2913D"};--accent:${mc.accent || "#E8423A"};--ink:${mc.outline || "#1C2140"}}`;

const index = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=${W}, height=${H}">
<title>${sb.title.replace(/</g, "")}</title>
<link rel="stylesheet" href="vendor/fonts.css">
<link rel="stylesheet" href="vendor/theme.css">
<style>${brandCss}</style>
<script src="vendor/gsap.min.js"></script>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${total}" data-width="${W}" data-height="${H}">
${hosts.join("\n")}
  <audio id="narration" src="audio/narration.wav" data-start="0" data-duration="${total}" data-volume="1"></audio>
${musicTag}
</div>
<script>
  window.__timelines = window.__timelines || {};
  var tl = gsap.timeline({ paused: true });
  tl.set({}, {}, ${total});
  window.__timelines["main"] = tl;
</script>
</body>
</html>
`;
fs.writeFileSync(path.join(proj, "index.html"), index);

log(`\n✓ Built ${rel(proj)} — ${scenes.length} scenes, ${(total / 60).toFixed(2)} min`);

if (!args.includes("--no-lint")) {
  try {
    const r = hf(["lint", proj, "--json"], { quiet: true });
    reportLint(r.stdout);
  } catch (e) {
    const out = String(e.message);
    const j = out.slice(out.indexOf("{"));
    reportLint(j);
    die("Lint found errors — fix the storyboard or custom scene and rebuild.");
  }
}

function reportLint(out) {
  try {
    const j = JSON.parse(out.slice(out.indexOf("{")));
    const f = (j.findings || []).filter((x) => x.severity !== "info");
    const ignore = new Set(["nested_structure_needs_subcomposition"]);
    const shown = f.filter((x) => !ignore.has(x.code));
    log(`  lint: ${j.errorCount ?? 0} errors, ${shown.filter((x) => x.severity === "warning").length} warnings`);
    shown.slice(0, 20).forEach((x) => log(`   ${x.severity === "error" ? "✗" : "!"} ${x.code}: ${x.message?.slice(0, 160)}`));
  } catch {
    log(out.slice(0, 1500));
  }
}
