# Decisions — How to never get tired in badminton

- 2026-10-25 · Topic picked by `/make-video next` (first unchecked backlog item).
- 2026-10-25 · Promise: "Train the two energy systems badminton actually uses so you stay fast and sharp deep into the third game." Can change if research doesn't support the two-system framing.
- 2026-10-25 · Setup: `node_modules` was incomplete (gsap missing), so I ran `npm install`. Kokoro TTS is installed in a project-local venv at `pipeline/runtime/venv` (gitignored). Run TTS with `HYPERFRAMES_PYTHON=$PWD/pipeline/runtime/venv/bin/python`.
- 2026-10-25 · Music: `music/` has no tracks. I did not download any, because licences need a human to check them. The episode builds without a music bed. Flag this in REVIEW.md.
- 2026-10-25 · Fact-check: two passes, 25 claims and all 10 safety items fixed. S24–S26 added (S26 swapped to the St George's NHS leaflet in pass 2). The script grew to 1,458 words (~9.6 min) because of the safety lines, still inside the 10-min limit.
- 2026-10-25 · New poses: `calf_raise`, `drink` (pipeline/mascot/poses.json).
- 2026-10-25 · Pipeline fixes made while producing this episode:
  - `tts.mjs`: HyperFrames 0.8 writes word timings to `transcript.json` next to the input (`--output` is SRT only). The file is now renamed to `<scene>.words.json`, so word-level cue sync works.
  - `scenes/common.mjs`: per-pose `"facing"` in `poses[]` now flips the mascot at that key (it was silently ignored).
  - `mascot/rig.mjs`: the first pose after a motion cycle now tweens from the cycle's last pose, so joints are reset (fixes leftover lean). Cycles start from the pose active at `from`. New body points `lAchilles`/`rAchilles`. New prop `badminton` (thinner racket).
  - `scenes/kinds.mjs`: stat numbers stay hidden until their cue, instead of showing "0".
- 2026-10-25 · Hero scene `custom/s33.html`: weak vs strong charger batteries across 4 rallies, labelled "Illustration", no percentages (fact-check row 23).
