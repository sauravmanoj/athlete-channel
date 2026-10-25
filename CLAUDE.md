# Mascot explainer channel — production pipeline

This repo turns a topic into a finished 4–10 minute animated explainer (1920×1080) starring the channel's mascot, using Claude Code + HyperFrames + local Kokoro narration. Claude runs every stage; a human watches the result and uploads it.

**Start here:** `/make-video <topic | slug | next>` runs everything and resumes where an episode stopped. `/new-topics` fills the backlog. `/new-pose` adds a pose to the character.

The niche, audience, mascot name and colours are in `channel.json`. The formula (title templates, script structure, visual grammar) is in `docs/style-guide.md`.

## Pipeline

| # | Stage | Who / command | Output in `episodes/<slug>/` |
|---|---|---|---|
| 1 | Topic | `/new-topics`, `node pipeline/episode.mjs new "<title>"` | `episode.json` |
| 2 | Research | **researcher** subagent | `research.md`, `sources.json` |
| 3 | Script | `/write-script` (you) | `script.md` |
| 4 | Fact & safety check | **fact-checker** subagent (independent) | `factcheck.md` |
| 5 | Storyboard | `/storyboard` (you) | `storyboard.json` (+ `custom/*.html`) |
| 6 | Voiceover | `node pipeline/tts.mjs <slug>` | `audio/narration.wav`, `timings.json`, `captions.srt` |
| 7 | Build | `node pipeline/build.mjs <slug>` | `project/` (HyperFrames) |
| 8 | Visual QA | `node pipeline/render.mjs review <slug>` + **visual-reviewer** subagent | `review/` |
| 9 | Render | `node pipeline/render.mjs final <slug>` | `renders/final.mp4` |
| 10 | Thumbnail | `node pipeline/thumbnail.mjs <slug>` | `publish/thumbnail.jpg` |
| 11 | Package | `node pipeline/finalize.mjs <slug>` → **STOP for human review** | `publish/` |

`node pipeline/episode.mjs status <slug>` shows progress; `node pipeline/episode.mjs check <slug>` validates the storyboard.

## Hard rules
1. **Accurate and safe.** Every claim has a source in `sources.json`. Drills are safe for healthy amateurs, with progressions/caveats. No medical diagnosis or treatment advice. The fact-checker's verdicts (including the Safety section) must be resolved before voiceover.
2. **Never publish.** Stop at `publish/REVIEW.md`. No uploads, posts or scheduling.
3. **Original.** Our mascot, our colours, our words. Learn from other channels' formats; never copy their characters, thumbnails, scripts or exact titles.
4. **The mascot acts.** It appears in at least half the scenes and its pose always acts out the sentence. Prefer motion (pose changes, cycles, moves) over static holds.
5. **Look before you ship.** Read the review contact sheets; fix overlaps, off-screen labels, wrong body-part callouts, poses that don't match the narration — then render.

## Where things live
- `channel.json` — channel/mascot identity, voice (`am_michael` default; `npx hyperframes tts --list`), pacing, music, render settings, `promo` line for the description.
- `docs/style-guide.md` — formula, title templates, script structure, visual grammar, accuracy/safety rules.
- `docs/storyboard-schema.md` — every scene kind, mascot spec, body points, icons, backgrounds.
- `pipeline/mascot/rig.mjs` — the character (drawing + skeleton). `pipeline/mascot/poses.json` — pose library (joint angles). `node pipeline/poses.mjs [names…]` renders `pose-sheet/poses.png`.
- `pipeline/scenes/kinds.mjs` — scene templates; `pipeline/lib/art.mjs` — icons and backgrounds.
- `pipeline/lexicon.json` — pronunciation fixes. `topics/` — backlog and published list. `music/` — royalty-free beds.

## Conventions
- Scene ids `s01…` stay stable once audio exists. Narration change → `tts.mjs` → `build.mjs`. Visual-only change → `build.mjs`.
- Side-view poses face right; mirror with `"facing": "left"`. Joint-angle convention is documented at the top of `poses.json`.
- Long renders (10–40 min) run in the background.
- If a tool fails, say exactly what failed and the fix (`npx hyperframes doctor`, `npx hyperframes browser ensure`).
