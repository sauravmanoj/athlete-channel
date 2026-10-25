#!/usr/bin/env node
// One-time setup: vendor GSAP + fonts + theme, check the render toolchain.
import fs from "node:fs";
import path from "node:path";
import { ROOT, RUNTIME, hf, log } from "./lib/core.mjs";

fs.mkdirSync(path.join(RUNTIME, "fonts"), { recursive: true });
fs.copyFileSync(path.join(ROOT, "node_modules/gsap/dist/gsap.min.js"), path.join(RUNTIME, "gsap.min.js"));
let css = "";
for (const [family, pkg, weights] of [["Oswald", "oswald", [500, 700]], ["Inter", "inter", [400, 600, 700, 800]]]) {
  for (const w of weights) {
    const file = `${pkg}-latin-${w}-normal.woff2`;
    fs.copyFileSync(path.join(ROOT, "node_modules/@fontsource", pkg, "files", file), path.join(RUNTIME, "fonts", file));
    css += `@font-face{font-family:"${family}";font-weight:${w};font-display:block;src:url("fonts/${file}") format("woff2");}\n`;
  }
}
fs.writeFileSync(path.join(RUNTIME, "fonts.css"), css);
fs.copyFileSync(path.join(ROOT, "pipeline/theme/theme.css"), path.join(RUNTIME, "theme.css"));
for (const d of ["episodes", "music", "topics"]) fs.mkdirSync(path.join(ROOT, d), { recursive: true });
log("Checking HyperFrames toolchain…");
try { hf(["doctor"]); } catch { /* doctor prints its own hints */ }
log(`
✓ Setup done.
  Preview the character:              node pipeline/poses.mjs        (writes a pose sheet you can open)
  If doctor says Chrome is missing:   npx hyperframes browser ensure
  Optional word-level sync:           npx hyperframes models install parakeet
`);
