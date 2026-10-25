#!/usr/bin/env node
// Thumbnail: storyboard.thumbnail -> episodes/<slug>/publish/thumbnail.jpg (1280x720)
// storyboard.thumbnail = { pose, props?, face?, background, headline (2–4 words), highlight?, icons?:[{icon, level?, pos?, size?}],
//                          opponent?: {pose, label?}, labels?: {you?, opponent?}, side?: "left"|"right", file?: "custom/thumb.html" }
import fs from "node:fs";
import path from "node:path";
import { episodeDir, loadChannel, RUNTIME, hf, run, esc, die, log, rel } from "./lib/core.mjs";
import { loadStoryboard } from "./lib/storyboard.mjs";
import { mascotSvg } from "./mascot/rig.mjs";
import { icon, background } from "./lib/art.mjs";

const slug = process.argv[2];
const ep = episodeDir(slug);
const sb = loadStoryboard(ep);
const ch = loadChannel();
const th = sb.thumbnail || die('storyboard.json has no "thumbnail" block');

const dir = path.join(ep, "thumb");
fs.rmSync(dir, { recursive: true, force: true });
fs.mkdirSync(dir, { recursive: true });
fs.cpSync(RUNTIME, path.join(dir, "vendor"), { recursive: true });

let body;
if (th.file) body = fs.readFileSync(path.join(ep, th.file), "utf8");
else {
  const textRight = (th.side || "right") === "right";
  const mx = textRight ? 560 : 1360;
  let svg = background(th.background || "spotlight", 1000);
  if (th.opponent) svg += mascotSvg({ id: "opp", pose: th.opponent.pose || "stand", x: textRight ? 250 : 1670, y: 1000, scale: 0.85, tint: "opponent", facing: textRight ? "right" : "left" });
  svg += mascotSvg({ id: "hero", pose: th.pose || "flex", x: mx, y: 1000, scale: th.scale || 1.45, props: th.props, facing: th.facing });
  (th.icons || []).forEach((ic, i) => {
    const [x, y] = ic.pos || [mx + (textRight ? 330 : -330), 230 + i * 190];
    svg += `<g transform="translate(${x} ${y}) scale(${ic.size || 1.6})">${icon(ic.icon, { level: ic.level ?? 0.8, color: ic.color })}</g>`;
  });
  const words = String(th.headline || sb.title).toUpperCase();
  const hl = String(th.highlight || "").toUpperCase();
  const headline = hl && words.includes(hl) ? esc(words).replace(esc(hl), `<span class="hl">${esc(hl)}</span>`) : esc(words);
  body = `<svg width="1920" height="1080" viewBox="0 0 1920 1080" style="position:absolute;inset:0">${svg}</svg>
  <div class="t" style="${textRight ? "right:80px;text-align:right" : "left:80px"}">${headline}</div>
  <style>.t{position:absolute;top:110px;width:900px;font:700 ${words.length > 18 ? 150 : 180}px/.95 var(--display);color:var(--ink);text-transform:uppercase;
     -webkit-text-stroke:0;text-shadow:6px 6px 0 #fff,-3px -3px 0 #fff,3px -3px 0 #fff,-3px 3px 0 #fff}
   .t .hl{color:var(--accent)}</style>`;
}
const mc = ch.mascot || {};
fs.writeFileSync(path.join(dir, "index.html"), `<!doctype html><html><head><meta charset="UTF-8">
<link rel="stylesheet" href="vendor/fonts.css"><link rel="stylesheet" href="vendor/theme.css">
<style>:root{--brand:${mc.body || "#F2913D"};--accent:${mc.accent || "#E8423A"};--ink:${mc.outline || "#1C2140"}}</style><script src="vendor/gsap.min.js"></script></head>
<body><div id="root" data-composition-id="thumb" data-start="0" data-duration="1" data-width="1920" data-height="1080" data-no-timeline>${body}</div></body></html>`);

const snap = path.join(dir, "snap");
hf(["snapshot", dir, "--at", "0.5", "--no-end", "-o", snap], { quiet: true });
const png = fs.readdirSync(snap).find((f) => f.startsWith("frame-") && f.endsWith(".png"));
if (!png) die("Thumbnail snapshot failed");
const pub = path.join(ep, "publish");
fs.mkdirSync(pub, { recursive: true });
const out = path.join(pub, "thumbnail.jpg");
run("ffmpeg", ["-y", "-v", "error", "-i", path.join(snap, png), "-vf", "scale=1280:720:flags=lanczos", "-q:v", "2", out], { quiet: true });
log(`✓ ${rel(out)} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
