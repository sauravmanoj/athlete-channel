# Production Decisions: The mental game of pickleball

## Stage 0: Setup
- **Slug:** `the-mental-game-of-pickleball`
- **Template:** `mental-game`
- **Promise:** "Stay ice-cold under pressure, defeat opponent target traps, eliminate impulsive speed-ups, and close out tight 9–9 games using sports psychology, between-point vagal resets, and attentional control."
- **Target Audience:** Amateur and club athletes, 16–50, playing pickleball (DUPR 2.5 to 4.5) who suffer from mental collapse, frustration when targeted, impatience at the kitchen line, and choking on game points.

## Stage 1: Research
- **Framework:** The 4 Mental Pillars
  1. *The Target Trap & Challenge Appraisal:* Reappraising 80% isolation from a threat to a challenge state; tactile partner synchrony (Kraus 2010); tactical deep middle resets.
  2. *The Patience Threshold & Prefrontal Inhibition:* Response inhibition suppressing dopamine-driven speed-ups on balls below 34-inch net tape (>65% error penalty).
  3. *The 3-Second Vagal Reset & Quiet Eye:* Respiration science (Balban et al., 2023) cyclic sighing within the USA Pickleball Rule 4.E 10-second envelope; 2.0s paddle gaze anchoring (Lebeau 2016).
  4. *Closing at 9–9 & Explicit Monitoring Mitigation:* Masters (1992) reinvestment theory; mitigating 30%–50% involuntary grip pressure surges (Pijpers 2005) via external focus on ball apex trajectory (Wulf 2021).
- **Sources:** 16 peer-reviewed studies ([S1]–[S16]) cataloged in `sources.json`.

## Stage 2: Script
- **Narration Words:** 1,208 clean words.
- **Visual Beats (Paragraphs):** 70 paragraphs across 8 chapters.
- **Mascot Acting:** Coach Ember written with expressive physical actions (paddle drops, dinks, blocks, cyclic breathing, flinches, facepalms, celebrations).
- **Safety & Caveats:** Scope-of-practice triage for panic attacks/clinical anxiety vs competitive nerves; single-cycle breath limit to prevent hyperventilation/dizziness; target player hydration discipline.

## Stage 3: Fact & Safety Check
- **Audit Result:** 60 claims checked · 58 VERIFIED · 2 FIXED · 0 OPEN.
- **Editorial Fixes:** Corrected "paddle strings" to "paddle face" (pickleball paddles are stringless); removed minor text duplication ("target targets" -> "intended targets").

## Stage 4: Storyboard & Custom Hero Scene
- **Custom Scene:** Built `custom/vagal_reset.html` displaying the 3-step cyclic sigh mechanics (Nasal Inhale, Top-Off Sniff, Prolonged Exhale) alongside autonomic biometric outputs (Vagus stimulation, -30 BPM pulse drop, Quiet Eye lock).
- **Scene Composition:** 70 scenes generated via `generate_storyboard.mjs` with Coach Ember present in >50% of frames (`props: { r: "pbpaddle" }`), dynamic stats, slams, lists, versus cards, and biometric gauges.

## Stage 5: Voiceover
- **Voice:** Kokoro TTS `am_michael` at 1.0x speed.
- **Runtime:** 9.43 minutes (within the strict <10.0 minute ceiling).
- **Artifacts:** `narration.wav`, `timings.json`, `captions.srt`.

## Stage 6: Build
- **Tool:** HyperFrames project compiler.
- **Lint Result:** 71 scenes compiled, 0 errors, 0 warnings.

## Stage 7: Visual QA Pass
- **Review Passes:** 2 cycles with `visual-reviewer` subagent.
- **Fixes Applied:**
  - Anchored s30 callout to `rKnee` and advanced timing to 0.
  - Anchored s44 Quiet Eye callout to `rHand` on the right side.
  - Removed duplicate body callout in s21 to restore clean mascot framing.
  - Advanced s37 and s70 headline cues to 0 to prevent delayed title pop-ins.
  - Expanded `vagal_reset.html` card-top container height to 350px and tightened line-height to contain the duration badge cleanly.
  - Removed redundant list item numbering in s08 and s47.
  - Upgraded versus scenes s14, s32, s56 with expressive poses and dual biometric gauges.
- **Final Verdict:** SHIP.

## Stage 8: Thumbnail & Final Render
- **Thumbnail:** Custom generated at `publish/thumbnail.jpg` (Coach Ember ready stance, pickleball paddle, opponent flinch, bolt icon, headline "ICE-COLD AT 9-9").
- **Final Render:** 1080p @ 30fps MP4 rendered via HyperFrames beginframe hardware GPU capture and loudness normalized to -14 LUFS (`renders/final.mp4`, 149.5 MB, 9m 26s).

## Stage 9: Release Packaging & Bookkeeping
- **Package:** `publish/REVIEW.md`, `publish/the-mental-game-of-pickleball.mp4`, `publish/thumbnail.jpg`, `publish/the-mental-game-of-pickleball.en.srt`, `publish/title.txt`, `publish/description.txt`, `publish/tags.txt`.
- **Status:** Backlog marked checked; `topics/published.md` updated as "awaiting review". Hard stop at Stage 9 (no automatic upload).
