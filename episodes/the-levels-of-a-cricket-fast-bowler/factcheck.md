# Fact & safety check — The levels of a cricket fast bowler
Checked: 58 claims · VERIFIED 38 · FIXED 20 · open 0
Safety: 7 items · FIXED 7 · open 0

**First pass (2026-10-26).** Independent reviewer; did not write the script.
**Second pass (2026-10-26).** Re-verified the rewritten `script.md` (line numbers below refer to the current version) against `sources.json` incl. S31 and updated S8/S15 notes. Re-opened full texts of S15 (RR for both high-load bands, 93% contralateral, L4/L5) and S28 (warm-up protocol, subject experience), and the S9 secondary summary (front knee in women).
- Five first-pass claims are no longer in the script and are dropped from the count: old rows 23 (fractures at bottom of spine), 35 (leg power/shoulder strength), 39 (general strength 2–4 × 8–12), 49 (juniors <3.5 days RR 3.1), 52 (injured juniors weaker back endurance). Their removal introduces no accuracy problem.
- New claims checked: rows 58–62.

**Sources opened (both passes):**
- Full text: S6, S8, S13, S15, S28.
- Official page: S23.
- Abstracts / summaries: S5, S7, S9 (secondary summary), S11, S14, S16, S21, S22.
- Others: relied on `sources.json` notes, consistent with the research brief.

There's no `storyboard.json` yet. When it exists, check these:
- The spike stat must say "3–4×" and the county stat **"~3×", not "11×"** (row 45).
- The hook speedometer: 130–145 labelled "elite", and a separate "160+" marker for the quickest ever (row 3). Do not label 130–145 "the best in the world".
- The lower-back glow belongs at the **bottom of the lumbar spine** (L4–L5, just above the pelvis), not the mid-back, on the side **opposite the bowling arm** (93% of fractures [S15]; matches "especially on one side", L77).
- The front-knee callout must point at the **front (landing) leg**, not the back leg.
- "Hips vs shoulders" arrows must sit on the pelvis and the shoulder line.
- Sample-week calendar must match the fixed wording in row 62 (no jumps the day before a bowling day).

| # | Claim (as written) | Verdict | Evidence | Fix |
|---|---|---|---|---|
| 1 | L7 "In one study, club bowlers averaged about 90 kilometres an hour." [S8] | VERIFIED | S8: baseline 91 ± 7 and 87 ± 8 km/h, 18 SA club bowlers. | — |
| 2 | L7 "Australian first-class bowlers averaged a top speed of about 127." [S7] | FIXED | S7: senior mean Vpeak 126.7 km/h. Now worded as an average of top speeds. | — |
| 3 | L8 "Elite fast bowlers usually sit around 130 to 145. [S6] And the very quickest have been clocked above 160. [S31]" | FIXED | S6: elite 129–145.8 km/h, "express" >145.8. S31: Akhtar 161.3 km/h (Guinness). Plural "the very quickest" is fine (Lee and Tait were also gunned at 161.1, though S31 only lists Akhtar). | — |
| 4 | L9 "That gap isn't just talent. It's a ladder with five levels…" | VERIFIED | Framing; L12 calls it a coaching ladder. | — |
| 5 | L12 "It's a coaching ladder, not an official scale." [S2][S4] | VERIFIED | Phase model from S2/S4. | — |
| 6 | L14 "Each level builds on the one before, so it pays to climb in order." (uncited) | FIXED | Was "Skip one, and you'll either stay slow or get hurt." Now framing only, uncited. | — |
| 7 | L18 "Across 18 studies, faster bowlers tended to have quicker run-ups and stronger, more powerful bodies." [S1] | FIXED | S1: physical characteristics r = 0.65, run-up r = 0.50, shoulder strength r = 0.58. "Tended to" keeps it correlational. | — |
| 8 | L20 Phases: run-up, gather, back foot, front foot, release, follow-through [S4][S6] | VERIFIED | S4, S6. | — |
| 9 | L21 Side-on or front-on, "Both are fine." [S17] | VERIFIED | S17. | — |
| 10 | L22 Walk-throughs, 3 × 6 at half effort, filmed (uncited) | FIXED | Wrong [S17] citation removed; presented as a coaching drill. | — |
| 11 | L23 Stand and deliver: "Front foot lands first, then the arm comes over late." [S2][S3] | VERIFIED | S2 "delaying the bowling arm"; S3 delayed arm circumduction. | — |
| 12 | L24 "The speed lives in the run-up, the brace and the sequence." [S1][S2] | VERIFIED | S2 consensus. | — |
| 13 | L27 "Run-up speed is one of the most consistent predictors of ball speed." [S1][S2][S3] | VERIFIED | S1 r = 0.50; S2; S3. | — |
| 14 | L28 "In one review, speed over that final stretch tracked ball speed closely." [S6] | VERIFIED | S6: final 5 m r = 0.72. | — |
| 15 | L30 "Your run-up has to match the action you can hold together." [S6][S9] | VERIFIED | S6, S9. | — |
| 16 | L32 Mark your run-up, 8–12 strides, 6–8 run-throughs (uncited) | VERIFIED | Coach-derived, low risk. | — |
| 17 | L33 Build-up runs 4–6 × 20–25 m, last 5 m fastest [S6] | VERIFIED | S6. Dose coach-derived. Warm-up now precedes it (row 58). | — |
| 18 | L34 "count every one in your weekly total." [S24] | VERIFIED | S24: near-match-intensity training deliveries count. | — |
| 19 | L35 Over-long/over-fast run-up → stutter and brake [S6][S9] | VERIFIED | S6, S9. | — |
| 20 | L38 "the most important level, because this is where you protect your back." | VERIFIED | Framing. | — |
| 21 | L39 Mixed action: hips one way, shoulders twist the other [S17] | VERIFIED | S17. | — |
| 22 | L41 "That twist is linked to lower back pain and to stress fractures in the low back." [S4][S18] | VERIFIED | S4 p = 0.01; S18 moderate evidence. | — |
| 24 | L42 "in one small study of high-performance bowlers, more twist didn't go with more ball speed. [S5] So the twist seems to buy you risk, not pace." | FIXED | S5: 17 bowlers, no association velocity vs counter-rotation. Hedged appropriately. | — |
| 25 | L43 "In studies of men, the fastest bowlers tend to land on a firm, straighter front knee. [S1][S3][S4] In women, the picture is more mixed. [S9][S10]" | FIXED | S9 (11 women): straighter knee went with speed only after controlling for height (raw r = 0.49, ns). S10: faster elite women had *more* knee flexion. "More mixed" is accurate. | — |
| 26 | L44 Pole-vault plant; "A collapsing knee leaks that energy." [S2] | VERIFIED | Analogy; S2. | — |
| 27 | L45 "The front foot absorbs roughly 5 to 9 times your body weight on landing." [S6] | VERIFIED | S6 p.6–7. | — |
| 28 | L46 Phone check; "Changing an action is a coach's job." [S4][S17][S16] | VERIFIED | S16: technique change not shown to cut LSF risk prospectively → coach-led. | — |
| 29 | L47 Step and brace, 3 × 6, 2×/wk, no ball at first (uncited) | VERIFIED | Low-intensity coach drill; L45 "don't just lock your knee". | — |
| 30 | L48 Split squats, 3-s lowering, 2–3 × 8–12/leg, 2×/wk [S27][S6] | VERIFIED | S27; S6. Optional: "New to lifting? Start with 1 set." (S27 single set for novices) — the old general-strength line that carried this is gone. | Optional only |
| 31 | L49 "The twist is hard to judge by eye." [S16][S19] | VERIFIED | Inference from S19 (amount matters more than label; screening). | — |
| 32 | L53 Plant → hips open → chest forward/down → arm late [S3][S4] | VERIFIED | S3, S4. | — |
| 33 | L55 "Faster bowlers open up between hips and shoulders late, at front-foot contact, not by twisting early." [S4] | VERIFIED | S4: max hip–shoulder separation later in faster bowlers. | Optional: "around front-foot contact" |
| 34 | L56 "Side-bend is linked to back injury." [S19][S20] | VERIFIED | S20 50° vs 40°; S19. | — |
| 36 | L57 "plyometrics, the best-supported speed method so far. In a review of small fast-bowling studies, jump training had a moderate effect on bowling speed." [S11] | FIXED | S11: SMD 0.75, 8 pooled low–moderate quality studies. | — |
| 37 | L58 "Start low: about 60 easy foot contacts, like pogo hops, twice a week with 2 days between. Over a few weeks, add bounds and skater jumps, and stay at or under about 100." [S28] | FIXED | S28: novice guideline 80–100 contacts/session; effective periodised 60–100, 2×/wk, 48–96 h apart. Starting at 60 is below the novice guideline — conservative. | — |
| 38 | L60 "club bowlers did med-ball throws, squats and split squats twice a week, plus bowling slightly heavier and lighter balls. They gained about 5 kilometres an hour in 4 weeks." [S8] | FIXED | S8 full text: +5.1 km/h; programme included ±10–15% balls. Now disclosed. | — |
| 40 | L62 Under 18 / new: coach supervision. Back pain or growth spurt → get checked first. [S23] | VERIFIED | S23. | — |
| 41 | L63 "Lifting on its own showed only a small, uncertain effect on speed." [S11][S8] | FIXED | S11: SMD 0.40, ns. | — |
| 42 | L67 "Fast bowlers are the most injured players in cricket." [S16] | VERIFIED | S16: 20.6% vs 12.5% (elite). | Optional: "in elite cricket" |
| 43 | L67 Low-back stress fractures cost most playing time; hit young bowlers hardest [S15][S16] | VERIFIED | S16; S15. | — |
| 44 | L68 "In one study of elite bowlers, a week of more than double their usual load, meaning their average over the last month, came with 3 to 4 times the injury risk the following week." [S13] | FIXED | S13: >200% of 4-week chronic → RR 3.3 / 4.5. | — |
| 45 | L69 "In English county pros, weeks of 234 balls or more, about 39 overs, came with roughly 3 times the risk of a back stress fracture." [S15] | FIXED | S15 full text: 234–293 RR 3.18 (1.68–3.86); ≥294 RR 3.06 (1.72–3.63), both vs <197. "234 or more → ~3×" holds for both bands. 234/6 = 39 overs ✓. | Optional clarity: "…roughly 3 times the risk of a back stress fracture, compared with weeks under about 200." |
| 46 | L70 "Think of your body's load tolerance like a savings account… the bill can arrive a week or more later." [S13] | FIXED | S13: next-week risk; Orchard 2009 (cited) 3–4 week delay. | — |
| 47 | L71 "Bowlers with too little regular bowling were also more likely to get hurt." [S13][S16] | VERIFIED | S13; S16. | — |
| 48 | L72 "Build up gradually, never jump to double your usual week, and borrow the junior rule: a lighter week every 4 to 6 weeks." [S13][S23] | FIXED | S13; S23 junior guideline, now framed as such. | — |
| 50 | L73 "Elite bowlers had the lowest injury risk with about 3 to 4 days between bowling sessions. [S13] So a good starting point for adults is 2 bowling days a week, well spaced, and 3 at most." | FIXED | S13 (citing Dennis 2003): <2 days RR 2.4, >5 days RR 1.8 vs the 3–4-day reference. Add "lowest risk at 3–4 days between sessions" to the S13 notes in `sources.json` so the note matches the script. | sources.json note only |
| 51 | L74 Cricket Australia caps under-17s at 5-over spells and 3 bowling days a week [S23][S24] | VERIFIED | S23. | — |
| 53 | L75–76 "An 8-week exercise programme made 14 to 17 year old bowlers stronger, with better back endurance, and slightly reduced the twist without slowing the ball. [S21][S22] It didn't test injuries. A good starting point: back holds, side planks and single-leg squats, 2 to 3 times a week. Keep it pain-free." | FIXED | S21: 14–17 y, strength + back endurance +20 s, no injury outcome. S22: counter-rotation −3.8°, speed ns. Exercises now presented as a separate, uncited suggestion. | — |
| 54 | L77 "if you get low back pain while or after bowling, especially on one side, stop bowling and see a sports doctor or physio before you bowl again. These bone injuries can start before the pain does." [S23][S15] | VERIFIED | S23: stop bowling and see a sports doctor/physio; bone stress injuries often develop before pain. S15 full text: "93% of LSF occurring contralateral to the bowling arm" supports "especially on one side". Add the 93% contralateral figure to the S15 notes in `sources.json`. | sources.json note only |
| 55 | L80–81 Sample week: plyos and back circuit frequency [S27][S28][S23] | FIXED | First-pass issue resolved: plyos now Mon + Thu (2 days between), back circuit Wed + Thu (2×), strength Mon/Thu (≥48 h), bowling Tue/Sat each followed by a non-bowling day (S23). New scheduling problem → row 62. | — |
| 56 | L82 "before the season, build up over 6 to 10 weeks." [S23] | VERIFIED | S23. | — |
| 57 | L85–86 Close | VERIFIED | Aspirational. | Optional: "…give yourself the best shot at bowling faster…" |
| 58 | L31 "Before any of these drills, warm up for 5 to 10 minutes: easy jogging, skips, walking lunges and a few easy run-throughs." [S28] | FIXED | Content OK: S28's standardised warm-up (light cardio, walking lunges, skips, a build-up sprint, a few jumps) is comparable, so the citation is acceptable as an example protocol. Problem is **scope**: placed in Level 2, "these drills" doesn't cover Level 1 stand-and-deliver at 60–70% (L23) or the Level 4 plyometrics/med-ball work (L57–60), which are the drills that most need it. | L31: "Before any bowling, running or jumping drill in this video, warm up for 5 to 10 minutes: easy jogging, skips, walking lunges and a few easy run-throughs. [S28]" |
| 59 | L61 "If you try modified balls, keep them within about 10 to 15 percent of normal weight, use them with a coach, and count them in your total." [S8][S11] | VERIFIED | S8: ±10–15%, 24–30 balls/session. S11: modified-ball weight small, non-significant effect (consistent with not overselling it). "With a coach" and "count them" are safety framing consistent with S24. | — |
| 60 | L59 "Land softly, on grass or a sprung floor, and not the day before you bowl hard." (uncited) | VERIFIED | Coach-derived safety caveat (closes first-pass S-2). Consistent with S28's 48–96 h spacing. | — |
| 61 | L52 "At Level 4, power flows through the whole chain." [S2] | VERIFIED | S2 consensus: efficient sequential transfer of linear to angular momentum. | — |
| 62 | L80–81 "Monday: strength and jumps. Tuesday: nets, run-up rhythm, 4 to 6 overs." | FIXED | Contradicts the script's own rule at L59 ("not the day before you bowl hard"): Monday jumps + lower-body strength land the day before Tuesday's nets. See Safety S-7. | Replace L80–81 with: "A simple week. Monday: strength and jumps. Tuesday: rest, plus the back circuit. Wednesday: nets, run-up rhythm, 4 to 6 overs. [S27][S28]" / "Thursday: lighter strength, a few jumps and the back circuit again. Friday: rest. Saturday: match. Sunday: rest. [S23]" (Jumps Mon/Thu, 2 days apart, never the day before bowling; strength ≥72 h apart; back circuit 2×; each bowling day followed by a non-bowling day; bowling days 2–3 days apart.) |

New sources:
- **S31: Guinness World Records** (added): Shoaib Akhtar 161.3 km/h, 2003. Used at L8.
- No other new sources. `sources.json` note updates requested: S13 (lowest risk at 3–4 days between sessions, Dennis 2003 via S13), S15 (93% contralateral; ≥294 RR 3.06, 1.72–3.63).

## Safety
| # | Advice | Risk | Required change | Status |
|---|---|---|---|---|
| S-1 | No warm-up before sprints, bowling and jumps. | Strains when done cold. | Warm-up line added at L31 [S28]. Still scoped to Level 2 only — Level 1 (60–70% deliveries) and Level 4 plyos/med-ball aren't covered. | **FIXED** (applied verbatim) — use row 58 wording. |
| S-2 | Plyo volume 60–100 for novices incl. bounds/skater jumps. | Too much too soon; bone-stress window. | L58–59 now: start ~60 easy contacts, progress over weeks, ≤100, 2 days between, land softly on grass/sprung floor, not the day before bowling hard. L62 supervision line retained. | FIXED |
| S-3 | "Never jump to double your normal week." | Reads as a safe ceiling; "normal" undefined. | L68 defines usual = last-month average; L72 "Build up gradually". | FIXED |
| S-4 | Adults 2–3 bowling days with a day off between. | Higher-risk spacing. | L73: 2 days well spaced, 3 at most, backed by the 3–4-day finding. | FIXED |
| S-5 | Back-pain red flag lacked return rule; back circuit lacked pain caveat. | Continued bowling on a bone stress injury. | L77 "…before you bowl again"; L76 "Keep it pain-free." No diagnosis or treatment given. | FIXED |
| S-6 | Weighted balls named without limits. | Shoulder/back overload, uncounted load. | L61: 10–15%, with a coach, count in total. | FIXED |
| S-7 | L80 sample week: jumps + strength Monday, nets Tuesday. | Contradicts L59; fatigued legs going into hard bowling, plus extra front-leg impact on consecutive days. | Use row 62 wording (nets moved to Wednesday, Tuesday rest + back circuit). | **FIXED** (applied verbatim) |

Covered adequately, so no change needed:
- Action changes go to a coach (L46, L49).
- Front-knee "earn it, don't lock it" (L45).
- Under-18 / growth-spurt checks (L62); board limits (L74).
- Pre-season build-up (L82).
- No supplements, fasting, heat or medical treatment advice.


**Applied after second pass (2026-10-26):** row 58 warm-up line moved to the start of the Level 1 drills with the suggested "any bowling, running or jumping drill in this video" wording; row 62 sample week replaced verbatim; optional L69 comparator ("compared with weeks under about 200") added; S13/S15 notes updated in sources.json.
