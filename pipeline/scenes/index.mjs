// Scene registry + sub-composition wrapper.
import fs from "node:fs";
import path from "node:path";
import { BUILDERS } from "./kinds.mjs";
import { transitionJs, W, H } from "./common.mjs";

/** Returns the full sub-composition HTML for one scene. */
export function renderScene(scene, timing, ctx) {
  const id = scene.id;
  const D = timing.dur;

  if (scene.kind === "custom") {
    // Claude-authored scene: a HyperFrames sub-composition using the tokens __ID__ and __DURATION__.
    let src = fs.readFileSync(path.join(ctx.epDir, scene.file), "utf8");
    src = src.replaceAll("__ID__", id).replaceAll("__DURATION__", D.toFixed(3));
    if (!src.includes("<template")) throw new Error(`${id}: custom scene must be wrapped in <template> … </template>`);
    if (!src.includes(`window.__timelines["${id}"]`)) throw new Error(`${id}: custom scene must register window.__timelines["__ID__"]`);
    return src;
  }

  const build = BUILDERS[scene.kind];
  if (!build) throw new Error(`${id}: unknown scene kind ${scene.kind}`);
  const { html, css, js } = build(scene, timing, ctx);
  return `<template>
<div id="${id}-root" class="scene scene--${scene.kind}" data-composition-id="${id}" data-start="0" data-duration="${D.toFixed(3)}" data-width="${W}" data-height="${H}">
<style>${css}</style>
${html}
</div>
<script>
(function () {
  var D = ${D.toFixed(3)};
  var tl = gsap.timeline({ paused: true });
  ${transitionJs(id, scene.transition)}
  ${js}
  tl.set({}, {}, D);
  window.__timelines = window.__timelines || {};
  window.__timelines["${id}"] = tl;
})();
</script>
</template>
`;
}
