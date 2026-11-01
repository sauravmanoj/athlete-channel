# Production decisions — How to react faster than anyone

## Stage 0: Setup & Topic Selection
- Selected topic: "How to react faster than anyone" (template: `how-to-X-faster`, score 29/30 from `topics/backlog.md`).
- Slug: `how-to-react-faster-than-anyone`.
- Promise: Understand the biological limits of human reaction time, and master the perceptual anticipation, kinematic cue reading, and Quiet Eye techniques elite athletes use to initiate movement hundreds of milliseconds faster.
- Framework:
  1. The Biological Hard Limit (The Mathematical Trap of Ball Flight)
  2. The Anticipation Engine (Kinematic Cue Extraction)
  3. The Quiet Eye (The Visuomotor Anchor)
  4. Visual Search Architecture (Gaze Anchoring & Peripheral Vision)
  5. The Reactive Training Protocol (What Works vs Sports Science Myths)

## Stage 1: Research
- 22 peer-reviewed sources ([S1]–[S22]) covering motor control, visual neuroscience, Hick's Law, electromechanical delay (EMD), temporal occlusion studies (Abernethy, Farrow), Joan Vickers' Quiet Eye, Vater's visual pivot/gaze anchoring, and reactive agility transfer.
- Key findings incorporated:
  - Simple visual RT biological floor is 190–250 ms; choice RT is 350–500+ ms; bat swing / dive takes 150–180 ms / 600–800 ms. Reacting to ball flight alone is physically impossible on 95 mph pitches (400 ms) or 130 mph serves (450 ms).
  - Human smooth pursuit caps at ~70°/s; near home plate, ball angular speed exceeds 500°/s, causing batters to lose sight 5.5 feet before contact.
  - Saccades take 20–50 ms and cause saccadic suppression (functional blindness for 150–200 ms/s during rapid scanning); elite athletes use central gaze pivots (sternum/core) to eliminate eye jumps.
  - Light pods (BlazePod/Fitlight) have near-zero correlation ($r \approx 0$) with field reactive agility because they lack human kinematics and perception-action coupling.

## Stage 2 & 3: Script & Fact-Check
- 1,480 words across 10 chapters.
- 72 claims audited by sports science fact-checker (65 initial verified, 7 items refined and cleared).
- Refined colloquial hyperbole ("react twice as fast" → "initiate movement hundreds of milliseconds faster"), clarified Quiet Eye effect sizes ($d = 1.04$ expert vs novice duration; $d = 0.84$ performance improvement), and added distance safety boundaries (2–3 meters, strictly non-contact) for the Sternum Anchor drill.

## Stage 4: Storyboard & Hero Scene
- 86 scenes across 10 chapters.
- Mascot Coach Ember present in ~80% of scenes.
- Custom hero scene `custom/timeline.html` created comparing Amateur Ball-Flight Reaction (530 ms required vs 400 ms flight = −130 ms deficit) against Elite Anticipation (265 ms required with −150 ms pre-cue = +135 ms surplus).

## Stage 5: Voiceover
- High-fidelity Kokoro TTS voice synthesis (`am_michael` model) at 160 wpm.
- Total audio duration: 703.2 seconds (11.72 minutes), aligned to word-level timestamps in `timings.json` and `captions.srt`.

## Stage 6 & 7: Build & Visual QA Review
- HyperFrames composition compiled with 0 lint errors and 0 warnings.
- 15 review batches rendered (30 contact sheets).
- Initial visual QA audit flagged callout overlaps in s13, s14, s28, s31, and s41, blank cue timing in s33, slam whisper transcription delay in s53, list item cue mismatches in s70, and visual rhythm in s81–s83.
- All fixes applied in `generate-storyboard.mjs` and verified with frame snapshots at exact seconds (86.6s, 97.6s, 209.4s, 229.8s, 248.5s, 329.7s, 432.0s, 576.1s). Final visual audit verdict updated to `SHIP`.

## Stage 8 & 9: Final Render, Packaging & Hand-off
- Final 1080p 30fps video rendered in 18.4 min via beginframe hardware GPU encoding.
- Audio loudness normalized to −14 LUFS.
- High-contrast mobile-friendly thumbnail generated (`publish/thumbnail.jpg`).
- All release artifacts staged in `episodes/how-to-react-faster-than-anyone/publish/`.
- Channel topic backlog updated with `[x]` and entered into `topics/published.md` as "awaiting review".
- Hard stop observed: human review required before publishing.
