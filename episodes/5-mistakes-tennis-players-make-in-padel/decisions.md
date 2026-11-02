# Production Decisions: 5 mistakes tennis players make in padel

## Stage 0: Setup
- **Slug:** `5-mistakes-tennis-players-make-in-padel`
- **Template:** `N-mistakes`
- **Promise:** "Unlearn the 5 ingrained tennis habits that sabotage your padel game, master the physics of the glass, and dominate the net with padel-specific mechanics."
- **Target Audience:** Amateur and club athletes (especially transitioning tennis players, squash players, and padel intermediates).

## Stage 1: Research
- **Researcher Subagent ID:** `0490fc8a-2c63-44a7-baae-e14427f6f539`
- **Sources:** 16 peer-reviewed and official governing sources ([S1]–[S16]).
- **Key Framework:** 5 mistakes:
  1. The Power Trap (Over-hitting & Flat Smashes) — tempered glass coefficient of restitution ($e \approx 0.65\text{--}0.70$) rebounds hard shots into easy sitters.
  2. The Lob Misunderstanding — lob is padel's primary offensive weapon (>60% of net recoveries), not a defensive bail-out.
  3. Baseline Camping — >80–83% of points won at the net in padel vs >75–80% baseline play in tennis.
  4. Wall Panic & Glass Misjudgment — rushing to hit before the glass vs letting the wall decelerate and redirect the ball into the strike zone ("open the door").
  5. Big Tennis Swings & Overheads — large take-backs jam volleys and cause lateral epicondylitis (>20% of padel injuries); tennis flat smashes cause shoulder impingement (14.8%) instead of bandeja/víbora.
- **Safety Flags:** Lateral epicondylitis from solid non-stringed composite rackets + wrist flicking; subacromial shoulder impingement from full-extension flat smashes. Recommended round shape racket, soft EVA core, and continental grip.

## Stage 2: Script
- **Narration Words:** 1,486 words (~9.3 min at 160 wpm, ~9.6 min with scene pauses).
- **Structure:** 9 chapters (Hook, 5 transition traps, Mistake 1–5, Transition Plan, Close).
- **Tone & Style:** Second-person ("you"), punchy sentences, 5 concrete drills with dosage, visual metaphors (fireplace rebound, chess castling, soccer 11-man box, revolving door, 18-wheel truck in go-kart track), medical caveats.

## Stage 3: Fact-Check & Safety Audit
- **Fact-Checker Subagent ID:** `3af056ee-c882-43f6-8824-f56af9fe6ca2`
- **Audit Results:** 70 claims audited (62 VERIFIED, 4 NEEDS FIX, 4 SAFETY, 0 WRONG).
- **Key Fixes Applied:**
  1. Scoped smash breakdown to attacking shots in pro finals [S2].
  2. Scoped volley (65%) and bandeja (23%) percentages strictly to attacking shots [S2].
  3. Added lane-calling and lock-in at 3-meter line for Lob & Charge drill to prevent net cord and partner collision.
  4. Eliminated physical elastic cord from Invisible Rope drill during live play to eliminate eye-trauma, snapback, and trip risks.
  5. Specified mandatory turf bounce prior to glass contact in Catch and Hit drill per FIP Rule 13g.
  6. Replaced absolute medical claim ("eliminates shoulder impingement") with "drastically reduces shoulder impingement stress".
  7. Increased distance in Wall Behind the Back drill to 30–40 cm with shadow/soft feeds first to protect composite rackets and elbow tendons.
  8. Added volume cap to week 1 overheads in the transition plan to prevent acute rotator cuff fatigue and calf strains.
- **Status:** All 8 items resolved and marked `FIXED`; 0 open issues.

## Stage 4: Storyboard & Custom Hero Scene
- **Scenes:** 90 scenes across 9 chapters.
- **Mascot Presence:** 64 / 90 scenes feature Coach Ember (~71%), with padel props and specific padel poses (`padel_ready`, `bandeja_prep`, `bandeja`, `bandeja_finish`, `lob`, `lob_load`, `short_back`, `soft_hit`, `block`).
- **Hero Scene:** `custom/rebound_physics.html` visualizes the physical contrast between the Tennis Power Trap (100% velocity into $e \approx 0.70$ tempered glass rebounding waist-high into mid-court) vs. the Padel Low-Rebound Rule (65% controlled underspin biting downward and dying before the service line).
- **Validation:** `pipeline/episode.mjs check` passed with 0 errors, 0 warnings (1,491 words, estimated runtime ~9.8 min).

## Stage 5–7: Voice, Build & Visual QA
- **Voiceover:** Kokoro TTS (Voice `am_michael`), 90 scenes + endcard, 9.98 min runtime, audio synchronized to `narration.wav` and `timings.json`.
- **Build:** `pipeline/build.mjs` built with 0 errors, 0 warnings.
- **Visual QA:** Audited by `visual-reviewer` subagent (`a45885a5-5196-4bdf-910d-1a980e57f55c`). Fixed 1 blocker, 17 majors, and 7 minors:
  - Repositioned mascot from center to left in 11 scenes to eliminate text-on-character collisions.
  - Corrected callout dot positioning and timing in s32, s67, s69, and s75.
  - Adjusted speech token cues for Whisper word splits ("top spin" and "scar").
  - Broken up static holds with dynamic intermediate poses in s46, s73, s78, s80.
  - Removed racket prop in s59–s60 for "without a racket" drill.
  - Verified across 10 snapshot frames. Final verdict: **SHIP**.

## Stage 8: Thumbnail, Render & Finalize
- **Thumbnail:** High-contrast mascot thumbnail generated in `publish/thumbnail.jpg` ("STOP HITTING HARD").
- **Final Render:** 1080p, 60fps render normalized to −14.0 LUFS integrated loudness (`renders/final.mp4`, 9.99 min).
- **Package:** Release bundle generated in `publish/` including `5-mistakes-tennis-players-make-in-padel.mp4`, `.srt` subtitles, metadata, chapters, and `REVIEW.md`.

## Stage 9: Backlog & Channel Log
- Marked `[x]` on `5 mistakes tennis players make in padel` in `topics/backlog.md`.
- Added episode to `topics/published.md` as "awaiting review".
- Next unchecked backlog topic: `Your pickleball drop shot is weak (here's why)` (Score: 29/30).






