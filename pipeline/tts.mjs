#!/usr/bin/env node
// Voiceover: storyboard narration -> per-scene Kokoro audio -> narration.wav + timings.json + captions.srt
// Usage: node pipeline/tts.mjs <slug> [--voice bm_george] [--speed 0.95] [--force] [--only s03,s04] [--jobs 4]
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { ROOT, episodeDir, loadChannel, writeJSON, readJSON, hf, run, mediaDuration, hashString, log, die, rel } from "./lib/core.mjs";
import { loadStoryboard, validate, narrationHash } from "./lib/storyboard.mjs";
import { toSpeech, cleanDisplay } from "./lib/speech.mjs";

const args = process.argv.slice(2);
const slug = args.find((a) => !a.startsWith("--"));
const flag = (n) => {
  const i = args.indexOf(`--${n}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const force = args.includes("--force");
const only = flag("only")?.split(",");

const ep = episodeDir(slug);
const ch = loadChannel();
const sb = loadStoryboard(ep);
const voice = flag("voice") || sb.voice || ch.voice.id;
const speed = Number(flag("speed") || sb.voiceSpeed || ch.voice.speed);

const { errors } = validate(sb, ep);
if (errors.length) die(`Storyboard has errors — fix them first:\n  - ${errors.join("\n  - ")}`);

const audioDir = path.join(ep, "audio");
const sceneDir = path.join(audioDir, "scenes");
fs.mkdirSync(sceneDir, { recursive: true });

const scenes = [...sb.scenes];
if (ch.endCard?.enabled && !scenes.some((s) => s.kind === "endcard")) {
  scenes.push({ id: "endcard", kind: "endcard", narration: "", duration: ch.endCard.duration });
}

// Optional word-level timing (needs `hyperframes models install parakeet` or whisper-cpp)
let canTranscribe = null;
function transcribeWords(wav) {
  if (canTranscribe === false) return null;
  const out = wav.replace(/\.wav$/, ".words.json");
  if (fs.existsSync(out) && !force) return readJSON(out);
  try {
    hf(["transcribe", wav, "--optional"], { quiet: true });
    // HyperFrames 0.8 writes word timings to transcript.json next to the input (--output is only for SRT/VTT).
    const tj = path.join(path.dirname(wav), "transcript.json");
    if (fs.existsSync(tj)) fs.renameSync(tj, out);
    if (!fs.existsSync(out)) throw new Error("no output");
    canTranscribe = true;
    const data = readJSON(out);
    return Array.isArray(data) ? data : data.words || null;
  } catch {
    if (canTranscribe === null) log("  (word-level transcription unavailable — estimating word timings from text)");
    canTranscribe = false;
    return null;
  }
}

const timings = { voice, speed, narrationHash: narrationHash(sb), scenes: [], total: 0 };
const prev = readJSON(path.join(ep, "timings.json"), null);
let cursor = 0;
const parts = [];

// Pass 1: synthesize changed scenes in parallel (each call loads Kokoro, so a small pool helps a lot)
const jobs = [];
for (const s of scenes) {
  const speech = toSpeech(cleanDisplay(s.narration || ""));
  if (!speech) continue;
  const wav = path.join(sceneDir, `${s.id}.wav`);
  const key = hashString(`${voice}|${speed}|${speech}`);
  const keyFile = wav + ".key";
  const cached = fs.existsSync(wav) && fs.existsSync(keyFile) && fs.readFileSync(keyFile, "utf8") === key;
  if (!cached || (force && (!only || only.includes(s.id)))) jobs.push({ id: s.id, speech, wav, key, keyFile });
}
const POOL = Math.max(1, Number(flag("jobs") || Math.min(4, Math.max(1, Math.floor(os.cpus().length / 2)))));
if (jobs.length) log(`  synthesizing ${jobs.length} scene(s) with voice ${voice}, ${POOL} at a time…`);
await runPool(jobs, POOL, async (j) => {
  const txt = path.join(sceneDir, `${j.id}.txt`);
  fs.writeFileSync(txt, j.speech);
  await hfAsync(["tts", txt, "--voice", voice, "--speed", String(speed), "--output", j.wav]);
  fs.writeFileSync(j.keyFile, j.key);
  fs.rmSync(j.wav.replace(/\.wav$/, ".words.json"), { force: true });
  log(`  ♪ ${j.id}: ${j.speech.slice(0, 70)}${j.speech.length > 70 ? "…" : ""}`);
});

// Pass 2: measure, (optionally) align words, lay out the timeline
for (const s of scenes) {
  const display = cleanDisplay(s.narration || "");
  const lead = display ? (s.leadIn ?? ch.voice.leadIn) : 0;
  const pause = display ? (s.pauseAfter ?? ch.voice.pauseAfterScene) : 0;
  let speechDur = 0;
  let words = null;
  const wav = path.join(sceneDir, `${s.id}.wav`);

  if (display) {
    speechDur = mediaDuration(wav);
    words = transcribeWords(wav);
    if (words) words = words.map((w) => ({ text: w.text ?? w.word, start: lead + w.start, end: lead + w.end }));
  }

  const dur = display ? lead + speechDur + pause : Number(s.duration || 3);
  const minDur = s.minDuration || 0;
  const finalDur = Math.max(dur, minDur);
  timings.scenes.push({
    id: s.id,
    start: round(cursor),
    dur: round(finalDur),
    speechStart: round(lead),
    speechDur: round(speechDur),
    ...(words ? { words } : {}),
  });
  parts.push({ wav: display ? wav : null, lead, tail: finalDur - lead - speechDur });
  cursor += finalDur;
}
timings.total = round(cursor);

// Assemble narration.wav: each scene padded with silence to its exact slot (24 kHz mono)
log("  ⋯ assembling narration track");
const listFile = path.join(audioDir, "concat.txt");
const padded = [];
parts.forEach((p, i) => {
  const out = path.join(sceneDir, `_pad_${String(i).padStart(3, "0")}.wav`);
  if (p.wav) {
    run("ffmpeg", ["-y", "-v", "error", "-i", p.wav, "-af",
      `aresample=24000,aformat=channel_layouts=mono,adelay=${Math.round(p.lead * 1000)}:all=1,apad=pad_dur=${Math.max(0, p.tail).toFixed(3)}`,
      "-ar", "24000", "-ac", "1", out], { quiet: true });
  } else {
    const d = timings.scenes[i].dur;
    run("ffmpeg", ["-y", "-v", "error", "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono", "-t", d.toFixed(3), out], { quiet: true });
  }
  padded.push(out);
});
fs.writeFileSync(listFile, padded.map((f) => `file '${f}'`).join("\n"));
const narration = path.join(audioDir, "narration.wav");
run("ffmpeg", ["-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", listFile, "-c", "copy", narration], { quiet: true });
padded.forEach((f) => fs.rmSync(f, { force: true }));

const measured = mediaDuration(narration);
if (Math.abs(measured - timings.total) > 0.25) log(`  ! narration is ${measured.toFixed(2)}s vs planned ${timings.total}s`);

writeJSON(path.join(ep, "timings.json"), timings);
fs.writeFileSync(path.join(ep, "captions.srt"), buildSrt(scenes, timings));

if (prev && prev.total && Math.abs(prev.total - timings.total) > 0.5) log(`  timing changed: ${prev.total}s → ${timings.total}s (rebuild the video)`);
log(`\n✓ Voiceover: ${timings.scenes.length} scenes, ${(timings.total / 60).toFixed(2)} min, voice ${voice} @ ${speed}`);
log(`  ${rel(narration)}\n  ${rel(path.join(ep, "timings.json"))}\n  ${rel(path.join(ep, "captions.srt"))}`);

function hfAsync(args) {
  const bin = path.join(ROOT, "node_modules", ".bin", "hyperframes");
  return new Promise((resolve, reject) => {
    const p = spawn(fs.existsSync(bin) ? bin : "npx", fs.existsSync(bin) ? args : ["hyperframes", ...args], { stdio: ["ignore", "pipe", "pipe"] });
    let err = "";
    p.stdout.on("data", () => {});
    p.stderr.on("data", (d) => (err += d));
    p.on("close", (code) => (code === 0 ? resolve() : reject(new Error(`hyperframes ${args[0]} failed (${code}): ${err.slice(-400)}`))));
  });
}

async function runPool(items, n, fn) {
  let i = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) {
      const item = items[i++];
      await fn(item);
    }
  });
  await Promise.all(workers);
}

function round(n) {
  return Math.round(n * 1000) / 1000;
}

// ---- captions: sentence chunks ≤ 84 chars, timed by word timings or character share ----
function buildSrt(scenes, timings) {
  const cues = [];
  scenes.forEach((s, i) => {
    const t = timings.scenes[i];
    const text = cleanDisplay(s.narration || "");
    if (!text) return;
    const chunks = chunk(text, 84);
    let charPos = 0;
    for (const c of chunks) {
      const a = t.start + t.speechStart + (charPos / text.length) * t.speechDur;
      charPos += c.length + 1;
      const b = t.start + t.speechStart + (Math.min(charPos, text.length) / text.length) * t.speechDur;
      cues.push([a, b, wrap(c, 42)]);
    }
  });
  return cues.map(([a, b, c], i) => `${i + 1}\n${srtTime(a)} --> ${srtTime(b)}\n${c}\n`).join("\n");
}

function chunk(text, max) {
  const sentences = text.match(/[^.!?]+[.!?]*["”’)]?\s*/g) || [text];
  const out = [];
  for (let s of sentences) {
    s = s.trim();
    while (s.length > max) {
      let cut = s.lastIndexOf(", ", max);
      if (cut < max * 0.4) cut = s.lastIndexOf(" ", max);
      out.push(s.slice(0, cut + 1).trim());
      s = s.slice(cut + 1).trim();
    }
    if (s) out.push(s);
  }
  return out;
}

function wrap(s, w) {
  if (s.length <= w) return s;
  const mid = s.lastIndexOf(" ", Math.ceil(s.length / 2) + 6);
  return `${s.slice(0, mid)}\n${s.slice(mid + 1)}`;
}

function srtTime(t) {
  const ms = Math.round(t * 1000);
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  const r = ms % 1000;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")},${String(r).padStart(3, "0")}`;
}
