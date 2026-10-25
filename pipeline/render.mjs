#!/usr/bin/env node
// Render + QA.
//   node pipeline/render.mjs review <slug>   -> fast stills: one per scene + seam strips (no video encode)
//   node pipeline/render.mjs draft <slug>    -> low-quality MP4 for a full watch-through
//   node pipeline/render.mjs final <slug>    -> high-quality MP4, loudness-normalized for YouTube
import fs from "node:fs";
import path from "node:path";
import { episodeDir, loadChannel, readJSON, hf, run, mediaDuration, die, log, rel } from "./lib/core.mjs";

const [mode, slug] = process.argv.slice(2);
if (!["review", "draft", "final"].includes(mode)) die("Usage: node pipeline/render.mjs <review|draft|final> <slug>");
const ep = episodeDir(slug);
const ch = loadChannel();
const proj = path.join(ep, "project");
if (!fs.existsSync(path.join(proj, "index.html"))) die(`No built project — run: node pipeline/build.mjs ${slug}`);
const timings = readJSON(path.join(ep, "timings.json"));
const renders = path.join(ep, "renders");
fs.mkdirSync(renders, { recursive: true });

if (mode === "review") {
  // Two stills per scene: just after entry (layout) and at 75% (final state of animations)
  const times = timings.scenes.flatMap((s) => [s.start + Math.min(0.9, s.dur * 0.25), s.start + s.dur * 0.75]);
  const out = path.join(ep, "review");
  fs.rmSync(out, { recursive: true, force: true });
  // snapshot in batches so each contact sheet stays readable
  const batch = 12;
  const sheets = [];
  for (let i = 0; i < times.length; i += batch) {
    const dir = path.join(out, `batch-${String(i / batch + 1).padStart(2, "0")}`);
    hf(["snapshot", proj, "--at", times.slice(i, i + batch).map((t) => t.toFixed(2)).join(","), "--no-end", "-o", dir], { quiet: true });
    // HyperFrames splits large sets into contact-sheet-1.jpg, -2.jpg …
    for (const f of fs.readdirSync(dir).filter((f) => /^contact-sheet.*\.jpg$/.test(f)).sort()) sheets.push(path.join(dir, f));
  }
  const map = timings.scenes.map((s, i) => `  ${s.id.padEnd(9)} stills ${i * 2 + 1}–${i * 2 + 2} → batch ${Math.floor((i * 2) / batch) + 1}`).join("\n");
  log(`\n✓ Review stills (2 per scene, in order):\n${map}\n\nContact sheets to inspect:\n${sheets.map((s) => "  " + rel(s)).join("\n")}`);
  process.exit(0);
}

const quality = mode === "final" ? ch.render.finalQuality : ch.render.draftQuality;
const raw = path.join(renders, `${mode}-raw.mp4`);
const outFile = path.join(renders, `${mode}.mp4`);
log(`Rendering ${mode} (${quality}, ${ch.video.fps} fps, ${(timings.total / 60).toFixed(1)} min)…`);
const t0 = Date.now();
hf(["render", proj, "--output", raw, "--quality", quality, "--fps", String(mode === "final" ? ch.video.fps : 24)]);

// Loudness: YouTube normalizes to about -14 LUFS; master there so nothing gets turned down.
log("Normalizing loudness…");
run("ffmpeg", ["-y", "-v", "error", "-i", raw, "-c:v", "copy",
  "-af", `loudnorm=I=${ch.render.loudnessLUFS}:TP=-1.5:LRA=11`, "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
  "-movflags", "+faststart", outFile], { quiet: true });
fs.rmSync(raw, { force: true });

const d = mediaDuration(outFile);
const mins = ((Date.now() - t0) / 60000).toFixed(1);
log(`\n✓ ${rel(outFile)} — ${(d / 60).toFixed(2)} min video, rendered in ${mins} min`);
if (Math.abs(d - timings.total) > 1) log(`  ! duration ${d.toFixed(1)}s differs from plan ${timings.total}s`);
