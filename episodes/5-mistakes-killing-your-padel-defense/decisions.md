# Production Decisions: 5 mistakes killing your padel defense

## Stage 0: Setup
- **Slug:** `5-mistakes-killing-your-padel-defense`
- **Template:** `N-mistakes`
- **Promise:** "Master the 5 critical defensive keys in padel — corner turns, service-line positioning, reset lobs, the chiquita, and center communication — to survive heavy pressure and turn defense into attack."
- **Target Audience:** Amateur and club athletes, 16–40, wanting to improve padel defense and win back the net.

## Stage 1: Research
- **Researcher Subagent ID:** `5f8569db-2441-4af6-a789-f0b1da32ed42`
- **Sources:** 15 peer-reviewed and authoritative sources ([S1]–[S15]).
- **Key Framework:** 5 mistakes:
  1. Late Corner Turns (Double Glass Rebound: side-to-back 180° hip pivot vs back-to-side forward step without spinning).
  2. Hugging the Back Glass (The "Safety Illusion" vs the Defensive Sweet Spot: 0.8m behind service line, 1m from side glass).
  3. Blasting Flat Counter-Punches at Net Predators (Feeding solid composite rackets vs the 4-second high defensive reset lob).
  4. Forgetting the Chiquita (The floor-level dip forcing opponents to volley upward below the 0.88m net tape).
  5. The Center Ball Freeze & Breakdown (Middle priority rules, early verbal triggers "Mine/Yours", and the 3-meter synchronized string).

## Stage 2: Script
- **Narration Words:** 1,512 words (~10.0 min estimated at 160 wpm).
- **Structure:** 9 chapters (Hook, The five defensive traps, Mistake 1–5, Weekly Blueprint, Close).
- **Tone & Style:** Second-person ("you"), punchy visual beats, concrete drills with sets/reps/rest, biomechanics analogies (revolving door, soccer goalkeeper, skipping stones, armored knight).

## Stage 3: Fact-Check & Safety Audit
- **Fact-Checker Subagent ID:** `ab95412f-7342-40d1-84a1-c03eca7b9878`
- **Audit Results:** 52 claims audited (45 VERIFIED, 2 FIXED, 5 SAFETY resolved).
- **Key Fixes Applied:**
  1. Corrected corner double wall bounce terminology to prevent confusion with official two-bounce fault rule.
  2. Clarified lob statistical claim to specify rally continuity and attack neutralization (65.9%) per Courel-Ibáñez & Sánchez-Alcaraz.
  3. Added unweighting mini split-step, flexed knees, and 1-meter wall clearance to Open-the-Door drill to protect medial meniscus and ACL.
  4. Specified lateral crossover or chassé glide steps and 1.0m deceleration safety buffer in Service-Line Tether drill to prevent ankle inversion sprains.
  5. Required confirming ball dip below net tape and establishing chest-high ready paddle before transition zone advance.
  6. Enforced early call-or-yield rule down the middle seam to eliminate composite racket clashes and hand injuries.
  7. Detailed 8-minute warm-up (ankle calf lunges, lateral hip openers, thoracic rotations) and added Ottawa Ankle Rule fracture triage and TFCC wrist shock to medical referral guidance.

## Stage 4: Storyboard & Custom Hero Scene
- **Scenes:** 87 scenes across 9 chapters.
- **Mascot Presence:** ~72% featuring Coach Ember with padel props and court poses.
- **Hero Scene:** `custom/corner_trajectories.html` visualizes the physical contrast between the Opening Double (side glass first, 180° hip pivot) and Closing Double (back glass first, forward step, 0° spin).
- **Validation:** `pipeline/episode.mjs check` passed with 0 errors and 0 warnings.

## Stage 5–7: Voice, Build & Review
- **Voiceover:** Kokoro TTS (`am_michael`, 88 scenes including endcard, 10.33 min).
- **Build:** HyperFrames build completed with 0 errors, 0 warnings.
- **Visual QA:** Audited by `visual-reviewer` subagents (`99bf0073-a11e-46d5-abd9-679a50364955`, `180bdefc-d2d5-4fd6-be0f-5460020cba4d`):
  - Moved headlines in s26, s41, s64 to `side: "left"` eliminating callout collisions.
  - Simplified versus scene center labels to "VS" preventing text-character collisions in s42 and s68.
  - Set `decimals: 2` on s58 stat card to display exact "0.88m" net height.
  - Removed late `@word` cues in stat cards (s43, s47, s69) ensuring immediate card visibility.
  - Removed duplicate numbering from s08 list items.
  - Added intermediate secondary poses in s01, s13, s30, s51, s83, s85 breaking holds >5s.
  - Verified across snapshot contact sheets; final visual verdict: **SHIP**.

## Stage 8: Thumbnail, Render & Finalize
- **Thumbnail:** High-contrast thumbnail generated in `publish/thumbnail.jpg` ("FIX YOUR DEFENSE", Coach Ember pinned on defense, opponent attacking).
- **Final Render:** 1080p 30fps render normalized to −14.0 LUFS integrated loudness (`renders/final.mp4`, 10m 20s).
- **Release Bundle:** Packaged in `publish/` including video, subtitles (`.srt`), metadata, YouTube description, tags, and `REVIEW.md`.

## Stage 9: Channel Bookkeeping
- Marked `[x]` on `5 mistakes killing your padel defense` in `topics/backlog.md`.
- Added episode to `topics/published.md` as "awaiting review".
- Next unchecked backlog topic: `How to never get tired in padel` (Score: 27/30).
