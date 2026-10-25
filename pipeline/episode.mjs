#!/usr/bin/env node
// Episode bookkeeping.
//   node pipeline/episode.mjs new "The Fall of Constantinople"   -> episodes/<slug>/ with episode.json
//   node pipeline/episode.mjs status [slug]                       -> stage checklist (what's done, what's next)
//   node pipeline/episode.mjs check <slug>                        -> validate storyboard: errors, warnings, runtime, variety
import fs from "node:fs";
import path from "node:path";
import { ROOT, slugify, readJSON, writeJSON, die, log } from "./lib/core.mjs";
import { validate, narrationHash } from "./lib/storyboard.mjs";

const [cmd, arg] = process.argv.slice(2);
const EP = path.join(ROOT, "episodes");

const STAGES = [
  ["research", "research.md + sources.json", (d) => has(d, "research.md") && has(d, "sources.json")],
  ["script", "script.md", (d) => has(d, "script.md")],
  ["factcheck", "factcheck.md with no open issues", (d) => has(d, "factcheck.md") && !/\b(UNSUPPORTED|WRONG|NEEDS FIX)\b/.test(read(d, "factcheck.md"))],
  ["storyboard", "storyboard.json validates", (d) => has(d, "storyboard.json") && !validate(readJSON(path.join(d, "storyboard.json")), d).errors.length],
  ["voice", "timings.json + narration.wav match the storyboard narration", (d) => has(d, "timings.json") && has(d, "audio/narration.wav") &&
    readJSON(path.join(d, "timings.json")).narrationHash === narrationHash(readJSON(path.join(d, "storyboard.json")))],
  ["build", "project/index.html", (d) => has(d, "project/index.html") && newer(d, "project/index.html", "timings.json")],
  ["review", "review stills inspected (review/ exists)", (d) => has(d, "review") && newer(d, "review", "project/index.html")],
  ["render", "renders/final.mp4", (d) => has(d, "renders/final.mp4") && newer(d, "renders/final.mp4", "project/index.html")],
  ["thumbnail", "publish/thumbnail.jpg", (d) => has(d, "publish/thumbnail.jpg")],
  ["package", "publish/REVIEW.md", (d) => has(d, "publish/REVIEW.md") && newer(d, "publish/REVIEW.md", "renders/final.mp4")],
];

function has(d, f) {
  return fs.existsSync(path.join(d, f));
}
function read(d, f) {
  return fs.readFileSync(path.join(d, f), "utf8");
}
function newer(d, a, b) {
  if (!has(d, b)) return true;
  return fs.statSync(path.join(d, a)).mtimeMs >= fs.statSync(path.join(d, b)).mtimeMs - 1000;
}

if (cmd === "new") {
  if (!arg) die('Usage: node pipeline/episode.mjs new "Topic title"');
  const slug = slugify(arg);
  const dir = path.join(EP, slug);
  if (fs.existsSync(dir)) die(`episodes/${slug} already exists`);
  fs.mkdirSync(dir, { recursive: true });
  writeJSON(path.join(dir, "episode.json"), { title: arg, slug, created: new Date().toISOString().slice(0, 10) });
  log(slug);
} else if (cmd === "demo") {
  const dir = path.join(EP, "demo");
  if (fs.existsSync(dir)) die("episodes/demo already exists");
  fs.cpSync(path.join(ROOT, "examples", "demo"), dir, { recursive: true });
  writeJSON(path.join(dir, "episode.json"), { title: "Demo", slug: "demo", created: new Date().toISOString().slice(0, 10), demo: true });
  log("episodes/demo created. Next:\n  node pipeline/tts.mjs demo && node pipeline/build.mjs demo\n  node pipeline/render.mjs review demo   (stills)\n  node pipeline/render.mjs draft demo    (video)");
} else if (cmd === "status") {
  const slugs = arg ? [arg] : fs.existsSync(EP) ? fs.readdirSync(EP).filter((s) => fs.statSync(path.join(EP, s)).isDirectory()) : [];
  if (!slugs.length) log("No episodes yet.");
  for (const slug of slugs) {
    const d = path.join(EP, slug);
    if (!fs.existsSync(d)) die(`No episode ${slug}`);
    let next = null;
    const lines = STAGES.map(([name, what, ok]) => {
      let done = false;
      try {
        done = ok(d);
      } catch {
        done = false;
      }
      if (!done && !next) next = name;
      return `  ${done ? "✓" : "·"} ${name.padEnd(10)} ${what}`;
    });
    log(`\n${slug}\n${lines.join("\n")}\n  → next: ${next || "done — waiting for your review in publish/"}`);
  }
} else if (cmd === "check") {
  const d = path.join(EP, arg || die("Usage: check <slug>"));
  const sb = readJSON(path.join(d, "storyboard.json"));
  const { errors, warnings, stats } = validate(sb, d);
  log(`\n${sb.title}: ${stats.scenes} scenes, ${stats.words} words ≈ ${stats.estMinutes.toFixed(1)} min, ${stats.chapters} chapters`);
  log(`  kinds: ${Object.entries(stats.kindCounts).map(([k, n]) => `${k}×${n}`).join(", ")}`);
  warnings.forEach((w) => log(`  ! ${w}`));
  errors.forEach((e) => log(`  ✗ ${e}`));
  if (errors.length) process.exit(1);
  log(errors.length ? "" : "  ✓ storyboard valid");
} else {
  die("Usage: node pipeline/episode.mjs <new|demo|status|check> …");
}
