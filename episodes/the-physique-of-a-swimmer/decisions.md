# Production decisions — The physique of a swimmer

## Stage 0: Setup & Topic Selection
- Selected topic: "The physique of a swimmer" (template: `physique`, score 29/30 from `topics/backlog.md`).
- Slug: `the-physique-of-a-swimmer`.
- Promise: Understand the functional biomechanics behind the swimmer's V-taper, and how to build elite pulling power, bulletproof shoulder health, and a rigid hollow core on land and in the water.
- Framework: Hydrodynamics & form drag (the V-taper / streamlined cylinder), continuous overhead pulling hypertrophy (lats, teres major, rear delts), rotational & isometric core stabilization (the hollow body / anti-extension), the cold-water appetite paradox & dryland gym translation.

## Stage 1: Research
- 22 peer-reviewed scientific citations ([S1]–[S22]) covering hydrodynamics, biomechanical electromyography (EMG), rotator cuff internal/external strength imbalances, spinal unloading, appetite endocrinology (ghrelin response), and dryland training transfers.
- Key findings incorporated:
  - Form drag accounts for 85–90% of hydrodynamic resistance; power required scales with velocity cubed ($P \propto v^3$).
  - Archimedes' buoyancy counteracts 80–90% of body weight, permitting high rotational volume (~16,000 arm rotations/week) without ground-based axial disc compression (3,000–7,000 N).
  - Rotator cuff internal-to-external imbalance (<50–60% ER:IR ratio) triggers subacromial impingement and supraspinatus tendinopathy (up to 69% in elite cohorts).
  - Water thermal conductivity is 24x higher than air, inducing cold-water peripheral vasoconstriction and post-swim active ghrelin spikes (+44% spontaneous caloric intake).

## Stage 2 & 3: Script & Fact-Check
- 1,494 spoken words across 10 chapters.
- 61 factual claims audited by sports science fact-checker (52 initial verified, 9 items refined/safety-caveated, 0 unresolved).
- Phrasing clarified for drag force ($v^2$) vs power required ($v^3$), internal muscle contractions vs external ground spinal compression, and amateur safety boundaries (capping beginner dryland/swim volume at 4 days/week).

## Stage 4: Storyboard & Hero Scene
- 85 scenes across 11 chapters following visual grammar rules.
- Mascot Coach Ember present in ~80% of scenes (well exceeding the 50% brand baseline).
- Custom hero scene `custom/evf.html` developed to render Early Vertical Forearm (EVF, 90° high elbow catch, 90% propulsive force) vs Dropped Elbow (amateur 35° elbow angle, 25% thrust, drag vector).

## Stage 5: Voiceover
- High-fidelity Kokoro TTS voice synthesis (`am_adam` model) at 160 wpm.
- Total audio duration: 673.0 seconds (11.22 minutes), aligned to word-level timestamps in `timings.json` and `the-physique-of-a-swimmer.en.srt`.

## Stage 6 & 7: Build & Visual QA Review
- HyperFrames composition compiled with 0 lint errors and 0 warnings.
- 15 review batches rendered (30 contact sheets).
- Initial visual QA audit flagged 1 blocker (s85 mascot/headline collision), 5 majors (s38, s59, s60 callout line overlaps, s61 cue phonetic token mismatch, s82 late cue), and minor timing synchronizations.
- All fixes applied in `generate-storyboard.mjs` and verified with frame snapshots at exact seconds (255s, 403s, 411s, 430s, 644s, 667.5s). Final visual audit verdict updated to `SHIP`.

## Stage 8 & 9: Final Render, Packaging & Hand-off
- Final 1080p 30fps video rendered in 16.1 min via beginframe hardware GPU encoding.
- Audio loudness normalized to −14 LUFS.
- High-contrast mobile-friendly thumbnail generated (`publish/thumbnail.jpg`).
- All release artifacts staged in `episodes/the-physique-of-a-swimmer/publish/`.
- Channel topic backlog updated with `[x]` and entered into `topics/published.md` as "awaiting review".
- Hard stop observed: human review required before publishing.
