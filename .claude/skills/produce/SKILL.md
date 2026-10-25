---
name: produce
description: Voice, build and visually QA an episode whose storyboard is ready — Kokoro voiceover, HyperFrames build, review stills, visual-reviewer pass, fixes — up to the final render. Use at stages 6–8 of /make-video or after any storyboard/narration change.
---

# Producing the video

## 1. Voiceover
`node pipeline/tts.mjs <slug>` — local Kokoro per scene (cached; only changed scenes re-run), then `narration.wav`, `timings.json`, `captions.srt`. Check runtime vs `channel.json → video.targetMinutes`. Read `audio/scenes/<id>.txt` for scenes with acronyms/numbers to see what the TTS was actually given; fix via `pipeline/lexicon.json` and `--only s04 --force`.

## 2. Build
`node pipeline/build.mjs <slug>` — fails on storyboard errors, unknown poses, stale audio, or lint errors. Fix the storyboard (or custom scene / template), never `project/` (regenerated each build). Warnings like `"@word" not found` mean a cue word isn't in that scene's narration — fix the cue.

## 3. Visual QA (always)
`node pipeline/render.mjs review <slug>` → two stills per scene. Read every contact sheet, then spawn the `visual-reviewer` subagent → `review/notes.md`. Fix blockers/majors, rebuild, re-check affected scenes with `npx hyperframes snapshot episodes/<slug>/project --at <t1>,<t2> --no-end` (times from `timings.json`). Repeat until SHIP.

Motion check: `node pipeline/render.mjs draft <slug>` and sample a strip of frames from a moving scene: `ffmpeg -ss <t> -i episodes/<slug>/renders/draft.mp4 -vf "fps=6,scale=480:-1,tile=4x2" -frames:v 1 strip.jpg`, then Read it.

## 4. Final render
`node pipeline/render.mjs final <slug>` in the background (10–40 min). Loudness-normalized to −14 LUFS.

## Troubleshooting
- Chrome missing → `npx hyperframes browser ensure` (or set `HYPERFRAMES_BROWSER_PATH`).
- A scene renders blank → `npx hyperframes check episodes/<slug>/project` for console errors.
- Limbs at odd angles mid-transition → two poses too far apart; add an intermediate pose key.
- Exact word sync → `npx hyperframes models install parakeet`.
