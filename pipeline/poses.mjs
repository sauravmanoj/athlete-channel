#!/usr/bin/env node
// Pose sheet: renders every pose in pipeline/mascot/poses.json (or the ones you name) to poses.png so you can see them.
//   node pipeline/poses.mjs                 -> pose-sheet/poses.png
//   node pipeline/poses.mjs run_a run_b lie  -> only those
import fs from "node:fs";
import path from "node:path";
import { ROOT, RUNTIME, hf, die, log, rel } from "./lib/core.mjs";
import { mascotSvg, poseLibrary } from "./mascot/rig.mjs";
import { loadChannel } from "./lib/core.mjs";

const want = process.argv.slice(2);
const names = (want.length ? want : Object.keys(poseLibrary())).filter((n) => !n.startsWith("_"));
const cols = Math.min(6, names.length), cw = 320, chh = 420;
let g = "";
names.forEach((n, i) => {
  const x = (i % cols) * cw + cw / 2, y = Math.floor(i / cols) * chh + chh - 70;
  g += mascotSvg({ id: `p${i}`, pose: n, x, y, scale: 0.58 });
  g += `<line x1="${x - 140}" x2="${x + 140}" y1="${y}" y2="${y}" stroke="#c5cad6" stroke-width="3"/><text x="${x}" y="${y + 40}" font-size="26" font-family="Oswald" text-anchor="middle" fill="#1C2140">${n}</text>`;
});
const Wd = cols * cw, Hd = Math.ceil(names.length / cols) * chh;
const dir = path.join(ROOT, "pose-sheet");
fs.rmSync(dir, { recursive: true, force: true });
fs.mkdirSync(dir, { recursive: true });
fs.cpSync(RUNTIME, path.join(dir, "vendor"), { recursive: true });
const mc = loadChannel().mascot || {};
fs.writeFileSync(path.join(dir, "index.html"), `<!doctype html><html><head><meta charset="UTF-8"><link rel="stylesheet" href="vendor/fonts.css"><link rel="stylesheet" href="vendor/theme.css">
<style>:root{--accent:${mc.accent || "#E8423A"}}</style></head><body><div id="root" data-composition-id="sheet" data-start="0" data-duration="1" data-width="${Wd}" data-height="${Hd}" data-no-timeline style="width:${Wd}px;height:${Hd}px;background:#EEF0F5">
<svg width="${Wd}" height="${Hd}" viewBox="0 0 ${Wd} ${Hd}">${g}</svg></div></body></html>`);
hf(["snapshot", dir, "--at", "0.5", "--no-end", "-o", path.join(dir, "snap")], { quiet: true });
const png = fs.readdirSync(path.join(dir, "snap")).find((f) => f.startsWith("frame-"));
if (!png) die("snapshot failed");
fs.renameSync(path.join(dir, "snap", png), path.join(dir, "poses.png"));
log(`✓ ${rel(path.join(dir, "poses.png"))} — ${names.length} poses`);
