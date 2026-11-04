# Production Decisions: All padel wall rebounds explained

## Stage 0: Setup
- **Slug:** `all-padel-wall-rebounds-explained`
- **Template:** `all-explained`
- **Promise:** "Master the 4 core wall rebounds in padel—from single back glass and side angles to complex double glass rotations and wire fence chaos—using rebound physics, body rotation rules, and reading drills so you never get jammed or panic off the walls."
- **Target Audience:** Amateur and club athletes, 16–40, transitioning into or advancing in padel who panic, get jammed, misread bounces, or struggle with spatial orientation off the walls.

## Stage 1: Research
- **Researcher Subagent ID:** `28b1c761-9157-4ace-96e0-3831658f25eb`
- **Sources Compiled:** 16 peer-reviewed studies, physics papers, FIP regulations, and FEP coaching manuals in `sources.json`.
- **Research Brief:** Written in `research.md` covering the 4 Core Rebound Families (Single Back Glass, Side Glass Rebounds, Double Glass [Abre vs Cierra & El Giro], Metallic Wire Mesh) plus the 3-Step Decision Flow (Read Depth, Read Wall Order, Establish Spacing).
- **Core Numbers Established:** Court 10x20m; glass height 3m (total wall 4m); service line 3.0m from back wall; incoming ball speed 40–100 km/h; glass restitution $e \approx 0.70\text{--}0.78$ vs mesh $e \approx 0.35\text{--}0.55$; rebound projection 1.0–2.5m; optimal player spacing 1.0–1.5m from glass; reaction window 0.4–0.8s; padel ball diameter 6.35–6.77 cm.
- **Safety Flags:**
  - Ocular trauma hazard (ball diameter matches orbital socket aperture; unpredictable wire fence deflections; Kasiga & Bro 2024 *Acta Ophthalmologica*; polycarbonate sports eyewear advised).
  - RED FLAG: Running backward head-first toward glass (blind back-pedaling risk; must use sideways crossover steps).
  - Ankle inversion shear on sand turf (Ottawa Ankle Rules screening).
  - Meniscal/ACL rotational torque during double-wall pivots (must unweight feet before turning).

## Stage 2: Script
- **Narration word count:** 1,460 words (~9.1 minutes at 160 wpm).
- **Visual beats:** 76 distinct paragraphs.
- **Structure:**
  - Hook (4 beats)
  - The 4 rebound families framework (7 beats)
  - Rebound 1: Single back glass (12 beats)
  - Rebound 2: Side glass angles (10 beats)
  - Rebound 3: Double glass & rotation trap (17 beats)
  - Rebound 4: Metallic wire mesh (11 beats)
  - Safety & 3-step decision flow (12 beats)
  - Close (3 beats)
- **Citations:** Every factual statement cites [S1]–[S16].

## Stage 3: Fact-Check
- **Fact-Checker Subagent ID:** `fcc1be89-4cd5-44e1-a080-56c91446ab27`
- **Claims Checked:** 58 total claims.
- **Audit Results:** VERIFIED 54 · FIXED 4 · OPEN 0.
- **Audited Items Resolved:**
  - Claim 50 (Eye Trauma Epidemiology): Geographically qualified to Swedish hospital registry finding (Kasiga & Bro 2024 *Acta Ophthalmologica*).
  - Claim 55 (Ottawa Ankle Rules): Rephrased to professional clinical consultation standard without patient self-diagnosis.
  - Claim 37 (Corner Pivot Shear): Added beginner progression (dry-run shadow footwork on balls of feet before live feeds) and herringbone turf footwear caveat.
  - Claim 46 (Mesh Drill Safety): Added mandatory protective eyewear requirement and 2-set beginner volume progression.
- **Output File:** `episodes/all-padel-wall-rebounds-explained/factcheck.md` written and validated.

## Stage 4: Storyboard
- **Scene Count:** 77 scenes across 8 chapters.
- **Visual Variety:** Mascot scenes (29, ~38%), Slams (13), Stats (10), Lists (7), Versus cards (7), Title cards (6), Lineups (2), Charts (2), Custom interactive hero (1). Mascot present in >70% of scenes.
- **Custom Visual Component:** `custom/corner_geometry.html` rendering interactive side-by-side comparison of Doble Pared Que Abre (rotational pivot / El Giro) vs Doble Pared Que Cierra (step forward / do not spin) with court vector diagrams.
- **Validation:** Storyboard validated cleanly with zero schema errors or warnings.

## Stage 5: Voiceover
- **Engine:** Kokoro TTS (`am_michael`, speed 1.0).
- **Output Files:** `audio/narration.wav`, `timings.json`, `captions.srt`.
- **Duration:** 10.24 minutes (614.4s).
- **Phonetics:** Automatic word-level alignment across all 77 scenes.

## Stage 6: Build
- **HyperFrames Project:** Built cleanly into `episodes/all-padel-wall-rebounds-explained/project`.
- **Lint:** 0 errors, 0 warnings.

## Stage 7: Visual QA & Review
- **Visual Reviewer Subagent ID:** `16322f56-3d44-437b-b2c5-cda3bf1daecc`
- **Initial Pass:** Flagged 2 blockers (s06 lineup left-boundary clipping, s66 callout off-screen clipping) and 7 majors (callout overlaps in s18, s26, s57; custom hero SVG text collision in s36; headline/racket collision in s69; slam speech-sync pacing in s14, s61).
- **Fixes Applied:**
  - `s06`: Lineup member 0 changed to `padel_ready` (contained within frame).
  - `s66`: Shortened callout to "Polycarbonate Lenses" with offset `[120, -100]`.
  - `s18`, `s26`, `s57`: Added clean directional offsets to callout badges to avoid racket and limb overlaps.
  - `s36`: Updated `custom/corner_geometry.html` raising impact labels to `y=380` and shifting wall label to `x=490` (zero collision).
  - `s69`: Positioned Coach Ember at `x: 480` to provide clean 60px clearance to right headline.
  - `s14`: Slam text adjusted to "Specular reflection physics" cued with speech.
  - `s61`: Slam text adjusted to "Safe soft recovery" with `subAt: "@soft"`.
  - Minor timing and static hold fixes applied to s20, s29, s49, s50, s56, s72.
- **Verification Pass:** All 156 review stills re-rendered and verified; visual reviewer confirmed **SHIP** verdict.
- **Notes File:** `episodes/all-padel-wall-rebounds-explained/review/notes.md`.

## Stage 8: Thumbnail & Final Render
- **Thumbnail:** Generated at `publish/thumbnail.jpg` (140 KB, Coach Ember in `bandeja_finish` with "ALL WALL REBOUNDS" headline vs flinching opponent).
- **Final Render:** Completed high-quality MP4 encode (10.24 min, 18,427 frames at 1080p, 181.2 MB) with YouTube loudness normalization (-0.8 dBTP) in 15.8 min.

## Stage 9: Packaging & Bookkeeping
- **Release Directory:** `episodes/all-padel-wall-rebounds-explained/publish/` assembled with `all-padel-wall-rebounds-explained.mp4`, `thumbnail.jpg`, `all-padel-wall-rebounds-explained.en.srt`, `title.txt`, `description.txt`, `tags.txt`, and `REVIEW.md`.
- **Topic Backlog:** Marked `[x]` on `All padel wall rebounds explained` in `topics/backlog.md`.
- **Published Index:** Added `all-padel-wall-rebounds-explained` (10:14 runtime) to `topics/published.md` as "awaiting review".
- **Pipeline Status:** All stages verified complete; awaiting user human review prior to manual upload.







