# Production decisions — How to never get tired in basketball

## Stage 0: Setup & Topic Selection
- Selected topic: "How to never get tired in basketball" (template: `never-get-tired`, score 29/30).
- Promise: Finish the fourth quarter with the same speed, bounce, and shot accuracy as the opening tip.
- Slug: `how-to-never-get-tired-in-basketball`.

## Stage 1: Research
- 21 peer-reviewed sources synthesized into `research.md`.
- Key bioenergetics: 2–4s explosive sprints are ATP-PCr dependent; PCr resynthesis is exclusively aerobic (~50–70% in 30–57s, 100% in 2–4 min). Stoppages make up >50% total match time.
- Shooting mechanics under fatigue: Padulo et al. (2015) documented a >20% decline in shooting accuracy above 80% HRmax.
- Recovery posture: Michaelson et al. (2019) demonstrated hands-on-knees posture significantly accelerates HR recovery, tidal volume, and CO2 expiration compared to hands-on-head.
- Tendon safety: Spanish squats (45s isometric hold) provide immediate patellar tendon analgesia (Rio et al. 2015).

## Stage 2: Scripting
- Structured into 10 chapters (Hook, 4 Pillars, Hydration, Tendon Safety, Weekly Routine, Close).
- Spoken runtime target: ~10 minutes.
- Strict anti-clickbait rule followed; every claim referenced with [S#] citations.

## Stage 3: Fact-Check & Safety
- Sports science fact-checker verified 56 claims.
- Corrected court distance: baseline to half-court is 14m (28m full court, not half-court).
- Safety adjustment: RSA shuttles scheduled for Wednesday (not Friday) to allow 48-72h recovery before weekend games.

## Stage 4: Storyboard & Custom Animation
- Hero custom scene built in `custom/recharge.html` illustrating the smartphone fast-charger analogy for PCr replenishment.
- 90 scenes designed with dynamic mascot poses, statistics, versus meters, and cues.

## Stage 5: Voiceover
- Kokoro TTS rendered 10.62 minutes of high-clarity voiceover (`narration.wav`, `timings.json`, `captions.srt`).

## Stage 6: Build
- HyperFrames project compiled cleanly with 0 lint errors and 0 warnings.

## Stage 7: Visual QA
- Two passes of visual QA completed.
- Pass 1 flagged 11 layout/contrast items. Pass 2 resolved all blockers/majors including scene `s70` head/headline spacing and `s55` Spanish squat callout placement.
- Final review notes set to `SHIP`.

## Stage 8: Final Render & Packaging
- Thumbnail generated: Coach Ember mid-air shot with tired opponent and "NEVER GET TIRED" title.
- 10.62-minute 1080p final render compiled at 30fps with loudness normalized to −14 LUFS.
- Packaged into `publish/` with all release assets.

## Stage 9: Human Review Hand-off
- Staged in `publish/` for human review prior to manual YouTube upload.
- Backlog and published tracker updated.
