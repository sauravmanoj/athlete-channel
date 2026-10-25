// Posable mascot: an original flat-style character drawn as nested SVG groups.
// A pose is a set of joint angles (degrees). Every joint group has
//   transform="translate(px py) rotate(a)"
// so GSAP can tween poses by interpolating that attribute string.
//
// Angle convention (screen space, SVG): 0 = limb points straight DOWN,
// +90 = points to screen-LEFT, -90 = points to screen-RIGHT, 180 = UP.
// Child angles (forearm, shin, foot, head) are RELATIVE to their parent.
// Torso: positive leans the chest toward screen-RIGHT (forward when facing right).
// "L" limbs are drawn behind the body, "R" limbs in front.
import fs from "node:fs";
import path from "node:path";
import { PIPE, loadChannel } from "../lib/core.mjs";

// ---- skeleton dimensions (figure units; pelvis at 0,0; ~520 tall standing) ----
export const DIM = {
  upperArm: 98, foreArm: 90, hand: 19,
  thigh: 122, shin: 116, footLen: 46,
  neckY: -182, headR: 54, headCy: -50, // head center relative to neck pivot
  limbW: 34, legW: 40, outline: 7,
};
const VIEW = {
  front: { sx: 64, sy: -156, hx: 27, torsoW: 1, face: 0, footL: -0.72, footR: 0.72 },
  side: { sx: 9, sy: -158, hx: 7, torsoW: 0.64, face: 20, footL: 1, footR: 1 },
};
export const JOINTS = ["torso", "head", "lUpper", "lFore", "rUpper", "rFore", "lThigh", "lShin", "lFoot", "rThigh", "rShin", "rFoot"];

let POSES;
export function poseLibrary() {
  if (!POSES) POSES = JSON.parse(fs.readFileSync(path.join(PIPE, "mascot", "poses.json"), "utf8"));
  return POSES;
}

/** Resolve a pose name or object (optionally {pose:"name", ...overrides}) into a full pose. */
export function resolvePose(p) {
  const lib = poseLibrary();
  let base = {};
  let over = {};
  if (typeof p === "string") base = lib[p] || throwUnknown(p);
  else if (p && typeof p === "object") {
    if (p.pose) base = lib[p.pose] || throwUnknown(p.pose);
    over = { ...p };
    delete over.pose;
    delete over.at;
    delete over.dur;
  }
  const out = { view: "front", rot: 0, air: 0, face: "normal", ...stripMeta(base), ...over };
  for (const j of JOINTS) out[j] = Number(out[j] || 0);
  return out;
}
function stripMeta(o) {
  const { _desc, ...rest } = o;
  return rest;
}
function throwUnknown(n) {
  throw new Error(`unknown pose "${n}" — see pipeline/mascot/poses.json (or pass an inline joint-angle object)`);
}

// ---- forward kinematics (to keep feet on the ground) ----
const rad = (d) => (d * Math.PI) / 180;
function rotV(x, y, a) {
  const c = Math.cos(rad(a)), s = Math.sin(rad(a));
  return [x * c - y * s, x * s + y * c];
}
function chainEnd(origin, angles, lengths) {
  let [x, y] = origin;
  let acc = 0;
  const pts = [];
  angles.forEach((a, i) => {
    acc += a;
    const [dx, dy] = rotV(0, lengths[i], acc);
    x += dx;
    y += dy;
    pts.push([x, y]);
  });
  return pts;
}
/** Lowest y (largest) of the figure in root space before root rotation is applied → then rotated. */
export function lowestPoint(pose) {
  const v = VIEW[pose.view] || VIEW.front;
  const pts = [];
  for (const side of ["l", "r"]) {
    const s = side === "l" ? -1 : 1;
    const hip = [s * v.hx, 0];
    const t = pose[side + "Thigh"], sh = pose[side + "Shin"], f = pose[side + "Foot"];
    const [knee, ankle] = chainEnd(hip, [t, sh], [DIM.thigh, DIM.shin]);
    pts.push(knee, [ankle[0], ankle[1] + 16]);
    const toe = chainEnd(ankle, [t + sh + f - 90], [DIM.footLen])[0];
    pts.push([toe[0], toe[1] + 14]);
    // arms (in torso frame)
    const sp = rotV(s * v.sx, v.sy, pose.torso);
    const [elbow, wrist] = chainEnd(sp, [pose.torso + pose[side + "Upper"], pose[side + "Fore"]], [DIM.upperArm, DIM.foreArm]);
    pts.push(elbow, [wrist[0], wrist[1] + DIM.hand]);
  }
  const neck = rotV(0, DIM.neckY, pose.torso);
  const hc = rotV(0, DIM.headCy, pose.torso + pose.head);
  pts.push([neck[0] + hc[0], neck[1] + hc[1] + DIM.headR]);
  // apply root rotation
  return Math.max(...pts.map(([x, y]) => rotV(x, y, pose.rot)[1]));
}

// ---- transform strings ----
const f1 = (n) => (Math.round(n * 10) / 10).toString();
export function jointTransforms(pose) {
  const v = VIEW[pose.view] || VIEW.front;
  const T = (x, y, a) => `translate(${f1(x)} ${f1(y)}) rotate(${f1(a)})`;
  return {
    torso: T(0, 0, pose.torso),
    torso2: T(0, 0, pose.torso),
    body: `translate(0 0) scale(${f1(v.torsoW * 100) / 100} 1)`,
    head: T(0, DIM.neckY, pose.head),
    faceShift: `translate(${f1(v.face)} 0)`,
    lUpper: T(-v.sx, v.sy, pose.lUpper),
    lFore: T(0, DIM.upperArm, pose.lFore),
    rUpper: T(v.sx, v.sy, pose.rUpper),
    rFore: T(0, DIM.upperArm, pose.rFore),
    lThigh: T(-v.hx, 0, pose.lThigh),
    lShin: T(0, DIM.thigh, pose.lShin),
    lFoot: T(0, DIM.shin, pose.lFoot),
    rThigh: T(v.hx, 0, pose.rThigh),
    rShin: T(0, DIM.thigh, pose.rShin),
    rFoot: T(0, DIM.shin, pose.rFoot),
    lFootDir: `scale(${v.footL} 1)`,
    rFootDir: `scale(${v.footR} 1)`,
  };
}
/** Root transform: puts the lowest point on the ground line (y = 0 in mascot space), minus air. */
export function rootTransform(pose) {
  const low = lowestPoint(pose);
  return `translate(0 ${f1(-low - (pose.air || 0))}) rotate(${f1(pose.rot)})`;
}

// ---- drawing ----
function colors() {
  const m = loadChannel().mascot || {};
  return {
    skin: m.body || "#F2913D",
    ink: m.outline || "#1C2140",
    shorts: m.shorts || "#1C2140",
    band: m.accent || "#E8423A",
    shoe: m.shoes || "#FFFFFF",
    sole: m.outline || "#1C2140",
    eye: m.outline || "#1C2140",
    ...m,
  };
}
function capsule(len, w, fill, ink, ol) {
  return `<line x1="0" y1="0" x2="0" y2="${len}" stroke="${ink}" stroke-width="${w + ol * 2}" stroke-linecap="round"/>` +
    `<line x1="0" y1="0" x2="0" y2="${len}" stroke="${fill}" stroke-width="${w}" stroke-linecap="round"/>`;
}

const FACES = {
  normal: (c) => eyes(c, 9, 13) + mouth(c, "M-14 18 Q0 26 14 18"),
  happy: (c) => `<path d="M-30 -2 Q-21 -12 -12 -2 M12 -2 Q21 -12 30 -2" stroke="${c.eye}" stroke-width="6" fill="none" stroke-linecap="round"/>` + mouth(c, "M-18 14 Q0 34 18 14"),
  determined: (c) => eyes(c, 9, 11) + `<path d="M-34 -18 L-10 -10 M34 -18 L10 -10" stroke="${c.eye}" stroke-width="7" stroke-linecap="round"/>` + mouth(c, "M-12 22 L12 22"),
  tired: (c) => `<path d="M-32 0 L-12 0 M12 0 L32 0" stroke="${c.eye}" stroke-width="6" stroke-linecap="round"/>` + `<path d="M-30 -12 L-14 -6 M30 -12 L14 -6" stroke="${c.eye}" stroke-width="5" stroke-linecap="round"/>` + `<ellipse cx="0" cy="24" rx="9" ry="7" fill="${c.eye}"/>` + `<path d="M40 -26 q6 10 0 14 q-6 -4 0 -14z" fill="#7cc4ff" stroke="${c.eye}" stroke-width="2"/>`,
  sleep: (c) => `<path d="M-32 2 Q-22 10 -12 2 M12 2 Q22 10 32 2" stroke="${c.eye}" stroke-width="6" fill="none" stroke-linecap="round"/>` + mouth(c, "M-8 22 Q0 26 8 22"),
  surprised: (c) => eyes(c, 11, 15) + `<ellipse cx="0" cy="24" rx="9" ry="11" fill="${c.eye}"/>`,
  focused: (c) => eyes(c, 8, 8) + `<path d="M-32 -14 L-10 -14 M32 -14 L10 -14" stroke="${c.eye}" stroke-width="6" stroke-linecap="round"/>` + mouth(c, "M-10 21 L10 21"),
};
function eyes(c, rx, ry) {
  return `<ellipse cx="-21" cy="0" rx="${rx}" ry="${ry}" fill="${c.eye}"/><ellipse cx="21" cy="0" rx="${rx}" ry="${ry}" fill="${c.eye}"/>` +
    `<circle cx="-18" cy="-4" r="3" fill="#fff"/><circle cx="24" cy="-4" r="3" fill="#fff"/>`;
}
function mouth(c, d) {
  return `<path d="${d}" stroke="${c.eye}" stroke-width="5" fill="none" stroke-linecap="round"/>`;
}
export const FACE_NAMES = Object.keys(FACES);

/**
 * SVG markup for one mascot. Coordinates: (x,y) is the point on the ground under the pelvis.
 * opts: {id, pose, x, y, scale, facing:"right"|"left", props:{r?, l?}, tint?:"opponent", colors?}
 */
export function mascotSvg(opts) {
  const id = opts.id;
  const pose = resolvePose(opts.pose || "stand");
  const c = { ...colors(), ...(opts.colors || {}) };
  if (opts.tint === "opponent") Object.assign(c, { skin: "#A9B0BE", band: "#5B6375", shorts: "#4A5060" });
  const ol = DIM.outline;
  const jt = jointTransforms(pose);
  const J = (name, inner) => `<g id="${id}-j-${name}" transform="${jt[name]}">${inner}</g>`;
  const s = opts.scale || 1;
  const flip = opts.facing === "left" ? -1 : 1;

  const hand = `<circle cx="0" cy="${DIM.foreArm}" r="${DIM.hand}" fill="${c.skin}" stroke="${c.ink}" stroke-width="${ol}"/>`;
  const prop = (side) => `<g id="${id}-prop-${side}" transform="translate(0 ${DIM.foreArm})">${propSvg(opts.props?.[side], c)}</g>`;
  const arm = (side) =>
    J(side + "Upper", capsule(DIM.upperArm, DIM.limbW, c.skin, c.ink, ol) +
      J(side + "Fore", capsule(DIM.foreArm, DIM.limbW - 4, c.skin, c.ink, ol) + hand + prop(side)));
  const shoe = `<path d="M-14 -6 Q-16 14 -6 16 L${DIM.footLen} 16 Q${DIM.footLen + 8} 4 ${DIM.footLen - 6} -4 Q20 -12 -14 -6Z" fill="${c.shoe}" stroke="${c.ink}" stroke-width="${ol - 1}"/>` +
    `<path d="M-10 13 L${DIM.footLen + 2} 13" stroke="${c.sole}" stroke-width="5" stroke-linecap="round"/>`;
  const leg = (side) =>
    J(side + "Thigh", capsule(DIM.thigh, DIM.legW, c.skin, c.ink, ol) +
      `<path d="M${-DIM.legW / 2 - 6} -6 L${DIM.legW / 2 + 6} -6 L${DIM.legW / 2 + 8} 62 L${-DIM.legW / 2 - 8} 62 Z" fill="${c.shorts}" stroke="${c.ink}" stroke-width="${ol - 2}" stroke-linejoin="round"/>` +
      J(side + "Shin", capsule(DIM.shin, DIM.legW - 6, c.skin, c.ink, ol) + J(side + "Foot", J(side + "FootDir", shoe))));

  // Torso: V-taper chest, drawn around pelvis origin
  const torsoBody = `<g id="${id}-j-body" transform="${jt.body}">
      <path d="M-74 -162 Q-82 -178 -58 -186 L58 -186 Q82 -178 74 -162 L50 -40 Q46 -8 30 4 L-30 4 Q-46 -8 -50 -40 Z" fill="${c.skin}" stroke="${c.ink}" stroke-width="${ol}" stroke-linejoin="round"/>
      <path d="M-30 -120 Q0 -108 30 -120 M-22 -70 L22 -70 M0 -112 L0 -40" stroke="${c.ink}" stroke-width="4" fill="none" stroke-linecap="round" opacity=".35"/>
      <path d="M-54 -26 L54 -26 L60 30 L-60 30 Z" fill="${c.shorts}" stroke="${c.ink}" stroke-width="${ol}" stroke-linejoin="round"/>
      <rect x="-56" y="-30" width="112" height="12" rx="4" fill="${c.band}" stroke="${c.ink}" stroke-width="4"/>
    </g>`;
  const faces = FACE_NAMES.map((f) => `<g id="${id}-face-${f}" opacity="${f === pose.face ? 1 : 0}">${FACES[f](c)}</g>`).join("");
  const head = J("head", `<g id="${id}-breath">` +
    `<rect x="-16" y="-20" width="32" height="26" fill="${c.skin}" stroke="${c.ink}" stroke-width="${ol}"/>` +
    `<g transform="translate(0 ${DIM.headCy})">
       <circle r="${DIM.headR}" fill="${c.skin}" stroke="${c.ink}" stroke-width="${ol}"/>
       <path d="M${-DIM.headR + 3} -22 Q0 -36 ${DIM.headR - 3} -22 L${DIM.headR - 1} -8 Q0 -22 ${-DIM.headR + 1} -8 Z" fill="${c.band}" stroke="${c.ink}" stroke-width="5" stroke-linejoin="round"/>
       <g id="${id}-j-faceShift" transform="${jt.faceShift}"><g transform="translate(0 10)">${faces}</g></g>
     </g></g>`);

  const inner =
    `<g id="${id}-j-torso2" transform="${jt.torso2}">${arm("l")}</g>` +
    leg("l") + leg("r") +
    `<g id="${id}-j-torso" transform="${jt.torso}">${torsoBody}${head}${arm("r")}</g>`;

  return `<g id="${id}" transform="translate(${f1(opts.x || 0)} ${f1(opts.y || 0)}) scale(${f1(s * flip * 1000) / 1000} ${f1(s * 1000) / 1000})">
    <ellipse id="${id}-shadow" cx="0" cy="4" rx="110" ry="16" fill="rgba(20,25,50,.16)"/>
    <g id="${id}-j-root" transform="${rootTransform(pose)}">${inner}</g>
  </g>`;
}

/** GSAP code tweening a mascot from pose A to pose B starting at time t (seconds). */
export function poseTweenJs(id, a, b, t, dur = 0.45, ease = "power2.inOut") {
  const A = resolvePose(a), B = resolvePose(b);
  const ta = { ...jointTransforms(A), root: rootTransform(A) };
  const tb = { ...jointTransforms(B), root: rootTransform(B) };
  let js = "";
  for (const k of Object.keys(tb)) {
    if (ta[k] === tb[k]) continue;
    js += `tl.fromTo("#${id}-j-${k}",{attr:{transform:"${ta[k]}"}},{attr:{transform:"${tb[k]}"},duration:${dur},ease:"${ease}",immediateRender:false},${t.toFixed(3)});`;
  }
  if (A.face !== B.face) {
    js += `tl.fromTo("#${id}-face-${A.face}",{opacity:1},{opacity:0,duration:.12,immediateRender:false},${(t + dur * 0.3).toFixed(3)});`;
    js += `tl.fromTo("#${id}-face-${B.face}",{opacity:0},{opacity:1,duration:.12,immediateRender:false},${(t + dur * 0.3).toFixed(3)});`;
  }
  // shadow shrinks when airborne
  const sa = 1 - Math.min(0.6, (A.air || 0) / 300), sb = 1 - Math.min(0.6, (B.air || 0) / 300);
  if (sa !== sb) js += `tl.fromTo("#${id}-shadow",{scale:${sa},transformOrigin:"50% 50%"},{scale:${sb},duration:${dur},immediateRender:false},${t.toFixed(3)});`;
  return js;
}

/**
 * Full motion for one mascot in a scene.
 *  keys: [{pose, at(sec)}] — first key is the starting pose
 *  cycle: {poses:[a,b,...], period, from, to} — loops through poses (running, dribbling…)
 */
export function mascotMotionJs(id, keys, D, cycle) {
  let js = "";
  // Pose active at time t (the cycle starts from it and the first key after the cycle tweens out of the cycle's last pose).
  const poseAt = (t) => {
    let p = keys.length ? keys[0].pose : null;
    for (const k of keys) if (k.t <= t + 1e-6) p = k.pose;
    return p;
  };
  let cyc = null;
  if (cycle && cycle.poses?.length >= 2) {
    const per = cycle.period || 0.32;
    const from = cycle.from ?? 0;
    const to = Math.min(cycle.to ?? D, D);
    const seq = cycle.poses;
    let prev = poseAt(from) ?? seq[0];
    let k = 0, t = from;
    let cjs = "";
    for (; t + per <= to + 0.001; t += per) {
      const next = seq[k % seq.length];
      cjs += poseTweenJs(id, prev, next, t, per, "sine.inOut");
      prev = next;
      k++;
    }
    if (k) cyc = { end: t, last: prev, js: cjs };
  }
  let afterCycleDone = false;
  for (let i = 1; i < keys.length; i++) {
    const d = Math.min(keys[i].dur || 0.45, Math.max(0.15, (keys[i + 1]?.t ?? D) - keys[i].t - 0.05));
    let fromPose = keys[i - 1].pose;
    // First key at/after the cycle ends: start from where the cycle left the body, so every joint is reset.
    if (cyc && !afterCycleDone && keys[i].t >= cyc.end - 0.05) {
      fromPose = cyc.last;
      afterCycleDone = true;
    }
    js += poseTweenJs(id, fromPose, keys[i].pose, keys[i].t, d);
  }
  if (cyc) js += cyc.js;
  // gentle breathing so a held pose never looks frozen
  js += `tl.fromTo("#${id}-breath",{y:0},{y:3,duration:1.1,ease:"sine.inOut",repeat:${Math.max(0, Math.floor(D / 1.1) - 1)},yoyo:true},0);`;
  return js;
}

// ---- props ----
export function propSvg(name, c = colors()) {
  if (!name) return "";
  const ink = c.ink;
  const P = {
    racket: `<g transform="rotate(180)"><rect x="-6" y="-8" width="12" height="70" rx="5" fill="#333" stroke="${ink}" stroke-width="4"/>
      <ellipse cx="0" cy="118" rx="44" ry="56" fill="rgba(255,255,255,.35)" stroke="${ink}" stroke-width="7"/>
      <path d="M-30 90 L30 90 M-38 110 L38 110 M-38 130 L38 130 M-30 150 L30 150 M-20 70 L-20 168 M0 64 L0 172 M20 70 L20 168" stroke="${ink}" stroke-width="2" opacity=".55"/></g>`,
    badminton: `<g transform="rotate(20)"><rect x="-4" y="-8" width="9" height="34" rx="4" fill="#333" stroke="${ink}" stroke-width="4"/><path d="M0 26 L0 92" stroke="${ink}" stroke-width="5"/>
      <ellipse cx="0" cy="128" rx="30" ry="38" fill="rgba(255,255,255,.35)" stroke="${ink}" stroke-width="6"/>
      <path d="M-22 108 L22 108 M-28 128 L28 128 M-22 148 L22 148 M-12 92 L-12 164 M0 90 L0 166 M12 92 L12 164" stroke="${ink}" stroke-width="2" opacity=".55"/></g>`,
    paddle: `<g transform="rotate(180)"><rect x="-7" y="-8" width="14" height="44" rx="5" fill="#8a5a2b" stroke="${ink}" stroke-width="4"/><circle cx="0" cy="78" r="46" fill="#d33" stroke="${ink}" stroke-width="7"/></g>`,
    tennisball: `<g transform="translate(0 -6)"><circle r="20" fill="#D7F03A" stroke="${ink}" stroke-width="5"/><path d="M-14 -12 Q0 0 -14 14 M14 -14 Q0 0 14 12" stroke="#fff" stroke-width="3" fill="none"/></g>`,
    basketball: `<g transform="translate(0 -10)"><circle r="34" fill="#E8762B" stroke="${ink}" stroke-width="6"/><path d="M-34 0 L34 0 M0 -34 L0 34 M-24 -24 Q0 0 -24 24 M24 -24 Q0 0 24 24" stroke="${ink}" stroke-width="3" fill="none"/></g>`,
    football: `<g transform="translate(0 -10)"><circle r="32" fill="#fff" stroke="${ink}" stroke-width="6"/><path d="M0 -12 L11 -4 L7 10 L-7 10 L-11 -4 Z" fill="${ink}"/></g>`,
    dumbbell: `<g><rect x="-6" y="-4" width="12" height="10" fill="${ink}"/><rect x="-46" y="-8" width="92" height="12" rx="5" fill="#888" stroke="${ink}" stroke-width="4"/><rect x="-62" y="-26" width="20" height="48" rx="5" fill="#333" stroke="${ink}" stroke-width="4"/><rect x="42" y="-26" width="20" height="48" rx="5" fill="#333" stroke="${ink}" stroke-width="4"/></g>`,
    bottle: `<g transform="translate(0 -40)"><rect x="-16" y="0" width="32" height="70" rx="10" fill="#5BB8F0" stroke="${ink}" stroke-width="5"/><rect x="-9" y="-12" width="18" height="14" rx="3" fill="#fff" stroke="${ink}" stroke-width="4"/></g>`,
    phone: `<g transform="translate(0 -30)"><rect x="-18" y="0" width="36" height="64" rx="7" fill="#222" stroke="${ink}" stroke-width="4"/><rect x="-13" y="6" width="26" height="48" rx="3" fill="#7cc4ff"/></g>`,
  };
  return P[name] || "";
}

/** Named body points in mascot space (ground under pelvis = 0,0; before outer scale/flip). */
export function bodyPoints(p) {
  const pose = resolvePose(p);
  const v = VIEW[pose.view] || VIEW.front;
  const pts = {};
  for (const side of ["l", "r"]) {
    const s = side === "l" ? -1 : 1;
    const hip = [s * v.hx, 0];
    const [knee, ankle] = chainEnd(hip, [pose[side + "Thigh"], pose[side + "Shin"]], [DIM.thigh, DIM.shin]);
    const sp = rotV(s * v.sx, v.sy, pose.torso);
    const [elbow, wrist] = chainEnd(sp, [pose.torso + pose[side + "Upper"], pose[side + "Fore"]], [DIM.upperArm, DIM.foreArm]);
    Object.assign(pts, { [side + "Hip"]: hip, [side + "Knee"]: knee, [side + "Foot"]: ankle, [side + "Shoulder"]: sp, [side + "Elbow"]: elbow, [side + "Hand"]: wrist });
    const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    pts[side + "Thigh"] = mid(hip, knee);
    pts[side + "Calf"] = mid(knee, ankle);
    // Achilles: low on the shin, just above the heel, nudged to the back of the leg (side poses face right).
    pts[side + "Achilles"] = [ankle[0] + (knee[0] - ankle[0]) * 0.2 - (pose.view === "side" ? 10 : 0), ankle[1] + (knee[1] - ankle[1]) * 0.2];
    pts[side + "Arm"] = mid(sp, elbow);
    pts[side + "Forearm"] = mid(elbow, wrist);
  }
  const neck = rotV(0, DIM.neckY, pose.torso);
  const hc = rotV(0, DIM.headCy, pose.torso + pose.head);
  pts.head = [neck[0] + hc[0], neck[1] + hc[1]];
  pts.chest = rotV(0, -125, pose.torso);
  pts.core = rotV(0, -60, pose.torso);
  pts.hips = [0, 0];
  pts.back = rotV(-30 * v.torsoW, -110, pose.torso);
  const low = lowestPoint(pose);
  const out = {};
  for (const [k, [x, y]] of Object.entries(pts)) {
    const [rx, ry] = rotV(x, y, pose.rot);
    out[k] = [rx, ry - low - (pose.air || 0)];
  }
  return out;
}
