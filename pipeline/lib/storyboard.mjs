// Storyboard loading, validation, and in-scene timing resolution.
import fs from "node:fs";
import path from "node:path";
import { readJSON, loadChannel, hashString } from "./core.mjs";
import { cleanDisplay, wordCount } from "./speech.mjs";
import { poseLibrary } from "../mascot/rig.mjs";
import { ICONS, BACKGROUNDS } from "./art.mjs";

export const KINDS = ["mascot", "slam", "lineup", "versus", "list", "chart", "stat", "title", "custom", "endcard"];

export function loadStoryboard(epDir) {
  return readJSON(path.join(epDir, "storyboard.json"));
}

export function saveStoryboard(epDir, sb) {
  fs.writeFileSync(path.join(epDir, "storyboard.json"), JSON.stringify(sb, null, 2) + "\n");
}

/** Validate a storyboard. Returns { errors, warnings, stats }. */
export function validate(sb, epDir) {
  const ch = loadChannel();
  const lib = poseLibrary();
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const scenes = sb.scenes || [];
  if (!sb.title) errors.push("storyboard.title is missing");
  if (!scenes.length) errors.push("storyboard.scenes is empty");

  let words = 0;
  const kindCounts = {};
  let prevKind = null;
  let run = 0;
  let mascotScenes = 0;

  const checkPose = (where, p) => {
    if (!p) return;
    const name = typeof p === "string" ? p : p.pose;
    if (name && !lib[name]) errors.push(`${where}: unknown pose "${name}" (see pipeline/mascot/poses.json or add one with /new-pose)`);
  };
  const checkMascot = (where, m) => {
    if (!m) return;
    checkPose(where, m.pose);
    (m.poses || []).forEach((p) => checkPose(where, p));
    (m.cycle?.poses || []).forEach((p) => checkPose(where, p));
  };

  scenes.forEach((s, i) => {
    const where = `scene[${i}]${s.id ? ` (${s.id})` : ""}`;
    if (!s.id || !/^[a-z][a-z0-9-]*$/.test(s.id)) errors.push(`${where}: id must be lowercase letters/digits/dashes, e.g. "s07"`);
    else if (ids.has(s.id)) errors.push(`${where}: duplicate id`);
    ids.add(s.id);
    if (!KINDS.includes(s.kind)) errors.push(`${where}: unknown kind "${s.kind}" (allowed: ${KINDS.join(", ")})`);
    const w = wordCount(s.narration || "");
    words += w;
    if (!w && !s.duration) errors.push(`${where}: needs narration or an explicit duration`);
    if (w > 55) warnings.push(`${where}: ${w} words on one visual — split it (change the picture every 3–8 s)`);
    if (s.background && !BACKGROUNDS.includes(s.background)) errors.push(`${where}: unknown background "${s.background}" (${BACKGROUNDS.join(", ")})`);

    kindCounts[s.kind] = (kindCounts[s.kind] || 0) + 1;
    run = s.kind === prevKind && s.kind !== "mascot" ? run + 1 : 1;
    if (run === 3) warnings.push(`${where}: third "${s.kind}" scene in a row — vary the visual grammar`);
    prevKind = s.kind;

    const need = (cond, msg) => cond || errors.push(`${where}: ${msg}`);
    switch (s.kind) {
      case "mascot":
        mascotScenes++;
        need(s.poses?.length || s.pose || s.cycle, "mascot scene needs pose, poses[] or cycle");
        checkMascot(where, s);
        (s.icons || []).forEach((ic) => ICONS.includes(ic.icon) || errors.push(`${where}: unknown icon "${ic.icon}" (${ICONS.join(", ")})`));
        break;
      case "slam":
        need(s.text, "slam scene needs text");
        if (s.text && s.text.split(/\s+/).length > 7) warnings.push(`${where}: slam text over 7 words — keep it punchy`);
        break;
      case "lineup":
        need(Array.isArray(s.members) && s.members.length >= 2 && s.members.length <= 5, "lineup needs 2–5 members");
        (s.members || []).forEach((m) => checkPose(where, m.pose));
        mascotScenes++;
        break;
      case "versus":
        need(s.left && s.right, "versus needs left and right");
        checkPose(where, s.left?.pose);
        checkPose(where, s.right?.pose);
        mascotScenes++;
        break;
      case "list":
        need(Array.isArray(s.items) && s.items.length >= 2 && s.items.length <= 6, "list needs 2–6 items");
        checkMascot(where, s.mascot);
        break;
      case "chart":
        need(Array.isArray(s.bars) && s.bars.length >= 2 && s.bars.length <= 7, "chart needs 2–7 bars");
        checkMascot(where, s.mascot);
        break;
      case "stat":
        need(typeof s.value === "number", "stat scene needs numeric value");
        checkMascot(where, s.mascot);
        break;
      case "title":
        need(s.heading, "title scene needs heading");
        checkMascot(where, s.mascot);
        break;
      case "custom":
        need(s.file, "custom scene needs file (relative to the episode folder)");
        if (s.file && epDir && !fs.existsSync(path.join(epDir, s.file))) errors.push(`${where}: custom file ${s.file} not found`);
        break;
    }
  });

  const wpm = ch.voice.wordsPerMinute || 160;
  const estMinutes = words / wpm + (scenes.length * (ch.voice.pauseAfterScene + ch.voice.leadIn)) / 60;
  const [lo, hi] = ch.video.targetMinutes;
  if (estMinutes < lo) warnings.push(`estimated runtime ${estMinutes.toFixed(1)} min is under the ${lo}-min target`);
  if (estMinutes > hi) errors.push(`estimated runtime ${estMinutes.toFixed(1)} min exceeds the ${hi}-min limit — cut the script`);
  if (scenes.length && mascotScenes / scenes.length < 0.35) warnings.push(`the mascot appears in only ${mascotScenes}/${scenes.length} scenes — the character IS the brand; aim for half or more`);
  const chapters = scenes.filter((s) => s.chapter).length;
  if (chapters < 3) warnings.push(`only ${chapters} chapter markers — YouTube needs 3+ chapters (set "chapter" on the first scene of each section)`);

  return { errors, warnings, stats: { scenes: scenes.length, words, estMinutes, kindCounts, chapters } };
}

/**
 * Resolve an "at" value to seconds within a scene.
 *   number      -> seconds from scene start
 *   "40%"       -> fraction of scene duration
 *   "@Venice"   -> when the narrator says "Venice" (word timings if available, else estimated)
 *   "@Venice+0.5" -> half a second after that
 */
export function makeResolver(scene, timing) {
  const dur = timing.dur;
  const speechStart = timing.speechStart ?? 0;
  const speechDur = timing.speechDur ?? dur;
  const display = cleanDisplay(scene.narration || "");
  const lower = display.toLowerCase();
  const words = timing.words || null;

  function wordTime(phrase) {
    const p = phrase.toLowerCase().trim();
    if (words && words.length) {
      const first = p.split(/\s+/)[0].replace(/[^\p{L}\p{N}']/gu, "");
      const hit = words.find((w) => w.text.toLowerCase().replace(/[^\p{L}\p{N}']/gu, "") === first) ||
        words.find((w) => w.text.toLowerCase().includes(first));
      if (hit) return hit.start;
    }
    const idx = lower.indexOf(p);
    if (idx < 0) return null;
    return speechStart + (idx / Math.max(1, display.length)) * speechDur;
  }

  return function resolve(at, fallback = 0, quiet = false) {
    if (at === undefined || at === null || at === "") return clamp(fallback);
    if (typeof at === "number") return clamp(at);
    const s = String(at).trim();
    if (s.endsWith("%")) return clamp((parseFloat(s) / 100) * dur);
    if (s.startsWith("@")) {
      const m = s.slice(1).match(/^(.*?)(?:\s*([+-])\s*(\d+(?:\.\d+)?))?$/);
      const t = wordTime(m[1]);
      if (t === null) {
        if (!quiet) console.warn(`  ! ${scene.id}: "${m[1]}" not found in narration; using fallback time`);
        return clamp(fallback);
      }
      const off = m[3] ? (m[2] === "-" ? -1 : 1) * parseFloat(m[3]) : 0;
      return clamp(t + off);
    }
    const n = parseFloat(s);
    return Number.isFinite(n) ? clamp(n) : clamp(fallback);
  };

  function clamp(t) {
    return Math.max(0, Math.min(dur - 0.2, t));
  }
}

/** Hash of everything that affects audio timing (scene ids, narration, pauses, voice). */
export function narrationHash(sb) {
  const ch = loadChannel();
  const parts = sb.scenes.map((s) => [s.id, s.narration || "", s.pauseAfter ?? "", s.leadIn ?? "", s.duration ?? "", s.minDuration ?? ""].join("|"));
  return hashString([sb.voice || ch.voice.id, sb.voiceSpeed || ch.voice.speed, ch.voice.pauseAfterScene, ch.voice.leadIn, ...parts].join("\n"));
}
