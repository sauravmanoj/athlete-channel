# Production Decisions: How to never get tired in padel

## Stage 0: Setup
- **Slug:** `how-to-never-get-tired-in-padel`
- **Template:** `never-get-tired`
- **Promise:** "Build repeated-sprint stamina, eliminate eccentric deceleration burn, and master tactical recovery lobs and court gliding to outlast opponents in 90-minute padel matches."
- **Target Audience:** Amateur and club athletes, 16–40, who experience gassing out in 3rd sets, heavy legs, and unforced errors in long padel rallies.

## Stage 1: Research
- **Researcher Subagent ID:** `44a711d8-dc42-4613-8362-0eca0c46027a`
- **Sources Compiled:** 16 peer-reviewed studies, reviews, and governing body documents in `sources.json`.
- **Research Brief:** Written in `research.md` covering the 4 pillars (Metabolic Engine, Deceleration Debt, Tactical Energy Conservation, Padel Stamina Protocol).
- **Core Numbers Established:** Rally duration 6–12s; rest interval 15–25s (1:1.5–1:2.5 ratio); match distance 2,500–4,000m; 300–500 braking stops; mean HR 140–165 bpm (65–80% HRmax); blood lactate 2.40–3.38 mmol/L (spiking to 6–8 mmol/L); lob hang time 3.5–4.5s; defensive sweet spot 0.8m behind service line.
- **Safety Flags:** Patellar and Achilles tendinitis from repetitive eccentric deceleration on sand turf (Achilles rupture red flag noted); greenhouse heat dehydration in covered glass clubs.

## Stage 2: Script
- Narration word count: 1,234 words (~7.7 min at 160 wpm).
- Structure: Hook, 4 Engines / Framework, Pillar 1–4, Weekly Blueprint, Close.
- Citations: [S1]–[S16] on all factual claims.

## Stage 3: Fact-Check
- **Fact-Checker Subagent ID:** `3dfc3526-448b-444a-b41a-5e7df816d317`
- **Claims Checked:** 62 total claims.
- **Audit Results:** VERIFIED 55 · FIXED 7 · OPEN 0.
- **Safety Audit:** All 9 safety items addressed and resolved (cardiovascular screening caution added before maximal sprints, beginner volume progressions for court shuttles, step-downs and calf raises, turf traction cues, acute Achilles rupture red flag verified, hydration and weekly session spacing confirmed).
- **Output File:** `episodes/how-to-never-get-tired-in-padel/factcheck.md` written and validated.

## Stage 4: Storyboard
- **Scene Count:** 61 scenes across 8 chapters.
- **Visual Variety:** Mascot scenes (22, ~36%), Slam titles (12), Lists (9), Stat callouts (8), Title cards (5), Versus cards (3), Custom interactive hero (1), Chart (1).
- **Custom Visual Component:** `custom/hybrid_engine.html` rendering interactive dual ATP-PCr + Aerobic energy dials with real-time rally / rest pulsing indicators.
- **Validation:** Storyboard validated cleanly with zero schema errors or warnings.

## Stage 5: Voiceover
- **Engine:** Kokoro TTS (`am_michael`, speed 1.0).
- **Output Files:** `audio/narration.wav`, `timings.json`, `captions.srt`.
- **Duration:** 8.89 minutes (533.19s).
- **Phonetics:** Automatic word-level alignment across all 61 narration passages.

## Stage 6: Build
- **HyperFrames Project:** Built successfully into `episodes/how-to-never-get-tired-in-padel/project`.
- **Lint:** 0 errors, 0 warnings.

## Stage 7: Visual QA & Review
- **Visual Reviewer Subagent ID:** `9fc3abc2-9f1d-4f11-9946-1526c75e031c`
- **Initial Pass:** Flagged 4 blockers (s36 cue fallback, s28 static pose, s30 static calf raise, s61 late headline) and 4 majors (s01 late hook headline, s48 late headline, s58 missing bottle prop, s05 anatomical callout location).
- **Fixes Implemented:**
  - `s36`: Headline brought in immediately (`at: 0`), soft hit pose triggered on `@cover`, word cues synced.
  - `s28`: Step-down lunge pose and 3-4s descent callout brought forward to `@lower`.
  - `s30`: Eccentric lowering phase and 3s lowering callout triggered dynamically at `@lowering`.
  - `s61`: Permanent headline "Padel Stamina Blueprint" set across recap, celebrate pose synced to `@reset`.
  - `s01`: Hook headline active from 0s, celebrate pose aligned with `@explosive`.
  - `s48`: Disengage headline active from 0s.
  - `s58`: Water bottle prop `{ r: "bottle" }` added to drinking pose.
  - `s05`: Changed pose to `tired_front` so quad callout dot targets anterior quadriceps cleanly.
  - `s49`/`s50`: Background changed to spotlight for breathing focus; mascot shifted left to ensure headline clearance.
- **Verification Pass:** All 124 review stills re-rendered; visual reviewer verified and issued final **SHIP** verdict.
- **Notes File:** `episodes/how-to-never-get-tired-in-padel/review/notes.md`.

## Stage 8: Thumbnail & Final Render
- **Thumbnail:** Generated at `publish/thumbnail.jpg` (Coach Ember in exhausted `hands_knees` pose with low battery icon vs celebrating opponent, bold "NEVER GET TIRED" title).
- **Final Render:** Completed high-quality MP4 encode (8.89 min, 15,996 frames at 1080p, 143.6 MB) with YouTube loudness normalization (-1.1 dBTP) in 12.2 min.

## Stage 9: Packaging & Bookkeeping
- **Release Directory:** `episodes/how-to-never-get-tired-in-padel/publish/` assembled with `how-to-never-get-tired-in-padel.mp4`, `thumbnail.jpg`, `how-to-never-get-tired-in-padel.en.srt`, `title.txt`, `description.txt`, `tags.txt`, and `REVIEW.md`.
- **Topic Backlog:** Marked `[x]` on `How to never get tired in padel` in `topics/backlog.md`.
- **Published Index:** Added `how-to-never-get-tired-in-padel` (8:53 runtime) to `topics/published.md` as "awaiting review".
- **Pipeline Status:** All stages verified complete; awaiting user human review prior to manual upload.





