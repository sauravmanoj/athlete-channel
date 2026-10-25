// Shared scene helpers: mascot placement/motion, transitions, text highlighting.
import { esc } from "../lib/core.mjs";
import { mascotSvg, mascotMotionJs, bodyPoints, resolvePose } from "../mascot/rig.mjs";

export const W = 1920;
export const H = 1080;
export const GROUND = 930;
export const POS = { left: 560, center: 960, right: 1360, farleft: 380, farright: 1540 };

export function transitionJs(id, kind) {
  switch (kind) {
    case "fade": return `tl.fromTo("#${id}-root",{opacity:0},{opacity:1,duration:.3,ease:"none"},0);`;
    case "push": return `tl.fromTo("#${id}-root",{xPercent:8},{xPercent:0,duration:.4,ease:"power3.out"},0);`;
    case "zoom": return `tl.fromTo("#${id}-root",{scale:1.12,opacity:0},{scale:1,opacity:1,duration:.4,ease:"power3.out"},0);`;
    case "pop": return `tl.fromTo("#${id}-root",{scale:.92},{scale:1,duration:.35,ease:"back.out(2)"},0);`;
    default: return "";
  }
}

/**
 * Place and animate one mascot.
 * spec: {pose | poses:[{pose,at}], cycle:{poses,period,from,to}, facing, x, y, scale, props:{r,l}, tint, move:{to, at, dur}}
 * returns {svg, js, point(name, time) -> [x,y] screen coords}
 */
export function mascot(mid, spec, t, ctx, defaults = {}) {
  const s = { ...defaults, ...spec };
  const list = s.poses?.length ? s.poses : [s.pose || "stand"];
  const keys = list.map((p, i) => ({
    pose: typeof p === "string" ? p : p,
    t: i === 0 ? 0 : ctx.at(typeof p === "object" ? p.at : undefined, t.speechStart + (i / list.length) * t.speechDur),
    dur: typeof p === "object" ? p.dur : undefined,
    facing: typeof p === "object" ? p.facing : undefined,
  }));
  for (let i = 1; i < keys.length; i++) keys[i].t = Math.max(keys[i].t, keys[i - 1].t + 0.3);
  let cycle = null;
  if (s.cycle) {
    cycle = { ...s.cycle, from: ctx.at(s.cycle.from, 0), to: s.cycle.to !== undefined ? ctx.at(s.cycle.to, t.dur) : t.dur };
  }
  const x = typeof s.x === "number" ? s.x : POS[s.position || s.x || "center"] ?? 960;
  const y = s.y ?? GROUND;
  const scale = s.scale ?? 1.05;
  const flip = s.facing === "left" ? -1 : 1;
  const svg = `<g id="${mid}-mv"><g id="${mid}-fl">${mascotSvg({ id: mid, pose: keys[0].pose, x, y, scale, facing: s.facing, props: s.props, tint: s.tint, colors: s.colors })}</g></g>`;
  let js = mascotMotionJs(mid, keys, t.dur, cycle);
  // Per-key facing: a pose key may turn the mascot around ({"pose":"sprint","facing":"left","at":"@back"}).
  // Keys without "facing" keep the scene's facing. Flips are instant, around the mascot's own x.
  const base = s.facing === "left" ? "left" : "right";
  const keyFlip = (k) => (k.facing && k.facing !== base ? -1 : 1);
  if (keys.some((k) => keyFlip(k) === -1)) {
    let cur = 1;
    keys.forEach((k) => {
      const f = keyFlip(k);
      if (f !== cur) js += `tl.set("#${mid}-fl",{scaleX:${f},svgOrigin:"${x} ${y}"},${k.t.toFixed(3)});`;
      cur = f;
    });
  }
  let dx = 0;
  if (s.move) {
    const at = ctx.at(s.move.at, 0);
    const to = typeof s.move.to === "number" ? s.move.to : POS[s.move.to] ?? x;
    dx = to - x;
    js += `tl.fromTo("#${mid}-mv",{x:0},{x:${dx},duration:${s.move.dur || Math.max(0.6, t.dur - at - 0.3)},ease:"${s.move.ease || "none"}"},${at.toFixed(3)});`;
  }
  const poseAt = (time) => {
    let p = keys[0].pose;
    for (const k of keys) if (k.t <= time) p = k.pose;
    return p;
  };
  const keyAt = (time) => {
    let k = keys[0];
    for (const kk of keys) if (kk.t <= time) k = kk;
    return k;
  };
  const point = (name, time = t.dur) => {
    const bp = bodyPoints(poseAt(time));
    const v = bp[name] || bp.chest;
    const moved = s.move && time >= ctx.at(s.move.at, 0) ? dx : 0;
    return [x + flip * keyFlip(keyAt(time)) * scale * v[0] + moved, y + scale * v[1]];
  };
  return { svg, js, point, keys, x, scale };
}

/** Escape text and wrap highlighted phrases in <span class="hl">. */
export function highlightHtml(text, phrases) {
  let html = esc(text);
  for (const p of [].concat(phrases || []).filter(Boolean)) {
    const e = esc(p);
    const i = html.toLowerCase().indexOf(e.toLowerCase());
    if (i >= 0) html = `${html.slice(0, i)}<span class="hl">${html.slice(i, i + e.length)}</span>${html.slice(i + e.length)}`;
  }
  return html;
}

export function at(ctx, v, fallback) {
  return ctx.at(v, fallback);
}
