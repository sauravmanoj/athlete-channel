# Fact & safety check — How to never get tired in football
Checked: 60 claims · VERIFIED 40 · FIXED 20 · open 0
Safety: 9 items · FIXED 9 · open 0

**First pass (2026-10-26).** Independent reviewer; did not write the script.
**Second pass (2026-10-26).** Re-verified the rewritten `script.md` against the updated `sources.json`. All line numbers (L#) below refer to the **current** `script.md`. New rows are 57–60 and safety items S-8 and S-9.

**Sources opened:**
- Abstracts read via Europe PMC: S1, S5, S6, S8, S9, S14, S16, S18, S23, S27, S28.
- Full text: S17 (PMC, first ~100k chars), S31 (NHS page, re-read in the second pass).
- S21 (UEFA statement): the URL is now `https://doi.org/10.1136/bjsports-2019-101961` ✓. I couldn't open the full text (BJSM 403, not in PMC), so I relied on the researcher's page-by-page notes, which match the statement's known content.
- Others (S2, S3, S4, S10–S13, S20, S22, S24–S26, S29, S30): I relied on the `sources.json` notes.
- Updated notes for S1, S5, S9, S17, S23 and S28 are present and match what the first pass asked for ✓.

**Framing.** Most match numbers come from professional men. The script now says "pros", "elite" or "top-level" wherever that applies. Coach-derived doses are uncited and framed as "a good starting point" or "try".

There's no `storyboard.json` yet. When it exists, check these:
- The hook stat must read **"35–45% less"** (last 15 min vs first 15). The subs stat must read **"+25%"**, labelled as compared with players who'd played the whole game.
- The heart-rate needle should sit at **~85%** as a match *average* (not a peak). The small-sided games gauge should read **80–85% average**.
- Helgerud chart: **+11% VO2max, +20% distance, 2× sprints, +24% ball involvements**. Label it "one small study, 19 elite juniors".
- The sprint counter should read **~33 sprints**, labelled "2014 World Cup".
- Top vs lower-level bars: **+28% high-intensity running, +58% sprinting**. Don't draw total distance as equal.
- Temporary dip: **−12%** for 5 minutes, then recovery. Second-half drop in high-workrate players: **−12%** (S18). Two different "12%" numbers; don't merge them.
- The hamstring glow must be on the **back of the thigh**. Nordic curl pose: kneeling, ankles held, body lowering forward, hands ready to catch.
- Glycogen graphic: **~half (47%)** of thigh-muscle fibres empty or nearly empty.
- The sample-week calendar should show only **two hard days (Tue, Thu)** plus the match. Nordics should never appear on Thu or Fri. Apply the fixes in row 60 and S-8 first.

| # | Claim (as written) | Verdict | Evidence | Fix |
|---|---|---|---|---|
| 1 | L7 "In one classic study of pro players, high-intensity running in the last 15 minutes was 35 to 45 percent lower than in the first 15." [S1] | FIXED | S1 abstract: "lower (35–45%; P<0.05) in the last than in the first 15 min". The script now says it's a single study. | — |
| 2 | L8 "And substitutes who came on fresh ran 25 percent more at high intensity in that final spell than the players who'd been on all game." [S1] | FIXED | S1: subs ran 25% more than the other players. The comparator is now stated. | — |
| 3 | L9 "So tiredness is normal. But you can hold it off for longer." | FIXED | No longer overpromises. | — |
| 4 | L12 "More than 70 percent of a match is low intensity." [S2][S3] | VERIFIED | S3: >70% low intensity. S2 agrees. | — |
| 5 | L13 "But in top-level games, it's broken up by 150 to 250 short, intense actions…" [S3] | FIXED | S3: 150–250 brief intense actions for top-class players. The script now says "top-level". | — |
| 6 | L18 "Even while they're mostly jogging, pros' hearts average around 85 percent of maximum across a match." [S21][S2] | VERIFIED | S21: average HR ~85% of max. The peer-reviewed source is now cited first ✓. | — |
| 7 | L19 aerobic system "refilling the fuel your sprints just burned." [S2][S10] | VERIFIED | S10: aerobic fitness goes with faster PCr resynthesis. S2: PCr ~75% back 15–30 s after intense work. | — |
| 8 | L20 Phone-charger analogy | VERIFIED | Analogy. | — |
| 9 | L21 "elite junior players… twice a week for 8 weeks raised their aerobic fitness by about 11 percent." [S8] | VERIFIED | S8: VO2max 58.1→64.3 (+10.7%), 2×/wk, 8 wk. | — |
| 10 | L22 "20 percent more distance, twice as many sprints, more touches… It was a small study" [S8] | VERIFIED | S8: +20%, +100%, +24%. | — |
| 11 | L22 "a review of 33 studies also found hard intervals boost players' fitness." [S16] | VERIFIED | S16: 33 studies. HIIT improved VO2max and RSA, but not linear sprint. | Optional: "…boost male players' aerobic fitness and repeat-sprint ability." |
| 12 | L23 "FIFA 11+ cut injuries by about 39 percent in trials." [S28] | VERIFIED | S28: IRR 0.61 (0.48–0.77), recreational/sub-elite. | — |
| 13 | L25 4×4: "Run 4 minutes hard… jog easy for 3. Do 4 rounds." [S8] | VERIFIED | S8 protocol. | — |
| 14 | L26 "New to this? A good starting point is 3 rounds, once a week. Then build up gradually. [S22]" | FIXED | The tag now follows "build up gradually", which S22 supports. The dose is framed as a starting point. | — |
| 15 | L27 "Drill 2: small-sided games. A good starting point: 3 v 3 or 4 v 4, in 4-minute bouts with 2 to 3 minutes rest. Fewer players makes the game harder. [S13]" | FIXED | The tag now covers only "fewer players → harder" (S13). | — |
| 16 | L28 "Even recreational small-sided football keeps your heart rate at an average of 80 to 85 percent of max." [S14] | FIXED | S14: mean HR 80–85%. | — |
| 17 | L29 "Drill 3: an easy base. Try 30 to 45 minutes… once a week." (uncited) | FIXED | Coach-derived dose, now correctly uncited. | — |
| 18 | L30 "A stop-start running test tracked match high-intensity running in pros. Plain aerobic capacity didn't." [S6] | VERIFIED | S6: r=0.71 with Yo-Yo; not with VO2max. | — |
| 19 | L30 "You need hard, stop-start work too." [S12][S16] | VERIFIED | S12, S16. | — |
| 20 | L33 "At the 2014 World Cup, players made about 33 sprints a match, roughly one every 3 minutes." [S17] | FIXED | S17: 33 ± 11, 1 every 173 s, 2014 World Cup. | — |
| 21 | L34 "here's what separated top pros from lower-level pros. It wasn't mainly total distance." [S1] | FIXED | S1: 10.86 vs 10.33 km total. "Wasn't mainly" is accurate. The past tense ("separated") now reads as a description of the study, not a causal rule. Acceptable. | — |
| 22 | L34 "28 percent more high-intensity running and 58 percent more sprinting." [S1] | VERIFIED | S1. | — |
| 23 | L36 Sprint quality 6–8 × 20–30 m, walk back, fresh legs. "Experts recommend real sprint training as part of the mix." [S12] | VERIFIED | S12. The dose is uncited. The beginner progression is now at L37 (S-1). | — |
| 24 | L38 "Drill 2: repeated-sprint sets, after a few weeks of sprint quality. A good starting point: 1 to 2 sets of 6 sprints of 20 to 30 metres, 25 to 30 seconds rest… 3 to 4 minutes between sets. Build to 3 sets." | FIXED | Distance, entry condition and progression are all present. | — |
| 25 | L39 "Stop the set if your times clearly drop or your form breaks." | VERIFIED | Consistent with S11. | — |
| 26 | L41 "In one study, pros did a single block of these 15-second runs, plus sprints, for 10 weeks, and their aerobic running speed rose by about 8 percent." [S9] | FIXED | S9: 22 pros, 12–15 × 15 s at 120% MAS / 15 s (one ~7-min block) plus 12–15 × 40 m sprints, 10 wk, MAS +8.1%. The "single block" wording is now honest about the dose. The drill dose at L40 is a separate issue (row 58). | Optional: "…pros added one block of fast 15-second runs, plus all-out sprints, for 10 weeks…" ("these" implies the identical drill; the study pace was 120% of maximal aerobic speed). |
| 27 | L42 "…they increase toward the end of each half, when players are likely to be tired." [S23] | FIXED | S23: increase at the end of each half (p<0.01). Cause is no longer overstated. | — |
| 28 | L43 "In one trial of amateur players, they cut hamstring injuries by about two thirds." [S27] | VERIFIED | S27: 0.25 vs 0.8 per 1000 h. | — |
| 29 | L43 "a later review called the overall evidence inconclusive… promising, not magic." [S26] | VERIFIED | S26: RR 0.59 (0.27–1.29). | Optional: mention S25 (≈ halved) before S26 for balance. |
| 30 | L44 "Lower yourself slowly and catch yourself with your hands. Start with 2 sets of 5, once or twice a week, after training, and not in the 2 days before a match. Expect sore legs at first." | VERIFIED | Coach-derived and uncited. Technique and timing are now included (S-7). | — |
| 31 | L46 "sudden sharp pain in the back of your thigh, stop, and get it checked by a physio." | VERIFIED | Correct referral. | — |
| 32 | L47 "Sprint quality needs real rest." [S11][S12] | VERIFIED | S11, S12. | — |
| 33 | L51 "…fell about 12 percent below their average. Then it came back. [S1][S18]" | FIXED | S1: −12%. S18: dip "persisted for 5-min before recovering". | — |
| 34 | L52 "The second builds up. That's the drop in the last 15 minutes." [S1] | VERIFIED | S1. | — |
| 35 | L53 "Elite players with very high first-half workrates ran about 12 percent less… Moderate-workrate players didn't drop." [S18] | VERIFIED | S18. | — |
| 36 | L54–55 Battery-saver analogy | VERIFIED | Analogy. | — |
| 37 | L56 Habit 1 [S2][S10] | VERIFIED | Coach habit; tags support the recharge point; caveated at L59. | — |
| 38 | L57 Habit 2 (uncited) | VERIFIED | Coach habit, caveated. | — |
| 39 | L58 "World Cup players ran less at high intensity in hot matches, but kept their total distance and passed more accurately." [S19] | VERIFIED | S19. | — |
| 40 | L59 "Researchers still debate… no study has tested teaching amateurs to pace." [S2][S18] | VERIFIED | S18. | — |
| 41 | L60 "All-action running early may cost you late." [S18] | FIXED | Now hedged. | — |
| 42 | L64 "Carbohydrate supplies most of the energy in a match." [S21] | VERIFIED | S21: 60–70%. | — |
| 43 | L64 "about half of the thigh muscle fibres were empty or nearly empty" [S5] | VERIFIED | S5: 47 ± 7%, Danish fourth-division players. | — |
| 44 | L65 "Players who started a game low on stored carbs did much less high-speed running, especially in the second half." [S21] | VERIFIED | S21. | — |
| 45 | L66 Car fuel-tank analogy | VERIFIED | Analogy. | — |
| 46 | L67 "From UEFA's expert guidelines for players. The day before, make carbs the main part of every meal." [S21] | VERIFIED | S21: MD-1 ≥6–8 g/kg. | Optional: "UEFA's guidelines for elite players". |
| 47 | L68 pre-match meal 3–4 h, familiar, easy to digest [S21] | VERIFIED | S21. | — |
| 48 | L69 30–60 g after warm-up and at half-time [S21] | VERIFIED | S21. | — |
| 49 | L70 ≤2–3% body-mass loss; don't overdrink [S21] | VERIFIED | S21. | — |
| 50 | L71 "In the heat, give your body 1 to 2 weeks of training to adapt." [S20] | VERIFIED | S20. | — |
| 51 | L72–73 "Feel dizzy, sick or crampy in the heat? Stop, get somewhere cool, cool your skin and drink. You should feel better within 30 minutes. [S31] If you don't, or someone becomes confused, collapses or has a fit, call an ambulance, and keep cooling them while you wait. [S31]" | FIXED | Re-read S31 (NHS): move somewhere cool, cool the skin, give fluids, "should start to feel better within 30 minutes". Call 999 if still unwell after 30 min, or for heatstroke signs (confusion/lack of coordination, seizure/fit, loss of consciousness, hot skin not sweating, fast breathing). Keep cooling while you wait for help. The script matches, and it no longer leads with "stops sweating". "Call an ambulance" works for an international audience. | — |
| 52 | L74 "Playing an evening match on an empty stomach, or a morning match with no breakfast." [S21] | VERIFIED | S21. | — |
| 53 | L78–79 "Monday: easy base run plus Nordics. Tuesday: sprint quality, then 4 by 4s or small-sided games. Wednesday: rest or easy work, plus Nordics. Thursday: 15-15s or 1 to 2 sprint sets. Friday: rest, and carb-focused meals." | FIXED | The three hard days in a row are gone. Hard days are now Tue and Thu, which is consistent with "2 hard sessions a week". Tuesday's sprint quality plus 4×4/SSG is one session, with sprints done first on fresh legs ✓. There are no Nordics or hard sprints on Fri, and no Nordics on Thu ✓ (L44 rule). Nordics are 2×/wk, within the L44 dose ✓. 4×4 once a week matches L26 ✓. Sunday is no longer mentioned (minor). Two new issues: row 60 and S-8. | Optional: start with "Sunday: rest." |
| 54 | L80 "Keep it to 2 hard sessions a week, and give it 8 to 10 weeks." [S8][S9] | VERIFIED | S8: 2×/wk, 8 wk. S9: 10 wk. Internally consistent with L78–79 (Tue + Thu). | — |
| 55 | L81 "Build up gradually. Big jumps in training load raise injury risk." [S29] | VERIFIED | S29. | — |
| 56 | L24 "And if you get chest pain, fainting or unusual breathlessness when you exercise, or you have a known heart condition, see a doctor before hard training." [S30] | VERIFIED | S30: warning signs often precede cardiac events, and known CV disease affects the need for clearance. Now placed right after the warm-up line and before Drill 1 (S-6 ✓). | See row 57. |
| 57 | L24 (new) The rewrite dropped "stop": the line no longer tells someone to **stop exercising** when symptoms appear. | FIXED | Exertional chest pain or fainting means stop now, not "see a doctor before the next hard session". | "And if you ever get chest pain, feel faint or get unusually breathless when you exercise, stop, and see a doctor before any more hard training. The same goes if you have a known heart condition. [S30]" |
| 58 | L40 (new) "Drill 3: 15-15s. 15 seconds of fast striding, not all-out, then 15 seconds walking. A good starting point is 2 blocks of about 8 minutes." | FIXED | Coach-derived and uncited ✓. Problems: (a) no rest between blocks is given; (b) the "starting point" is ~2× the volume of the one study cited on the next line (S9: one ~7-min block), and is too much for a first session alongside Tuesday's sprints and 4×4s. | "Drill 3: 15-15s. 15 seconds of fast striding, not all-out, then 15 seconds walking. A good starting point is one block of about 6 to 8 minutes. Over a few weeks, build to 2 blocks, with 3 minutes of easy walking between." |
| 59 | L41 (new) "single block… plus sprints, for 10 weeks… about 8 percent" [S9] | VERIFIED | S9 notes: one ~7-min block, 40 m sprints, 10 wk, MAS +8.1%, no parallel control. "In one study" is an adequate hedge. | See the optional fix in row 26. |
| 60 | L80 (new) "If your team trains midweek, count that as one of your hard days." | FIXED | Ambiguous about which day it replaces. A Wednesday team session would recreate three hard days in a row (Tue/Wed/Thu), the exact problem fixed in row 53. Many amateur teams train twice a week, which would make 3–4 hard days. See S-9. | "If your team trains midweek, that session takes the place of Tuesday's or Thursday's work, whichever is closer, so you still have only 2 hard days, with an easy day between them." |

New sources:
- None needed. S31 was re-read in the second pass and supports L72–73 as written. S21's DOI URL resolves (BJSM).

## Safety
| # | Advice | Risk | Required change |
|---|---|---|---|
| S-1 | L36–37 Max sprints, beginner progression and pain exclusion. | Hamstring/groin/calf strain in deconditioned players. | **FIXED.** L37: "New to sprinting? For the first 2 weeks, do 4 to 6 at about 80 to 90 percent effort, then build. Skip max sprints if you have hamstring, groin or calf pain, or you're coming back from a strain, until a physio clears you." |
| S-2 | L38 Repeated-sprint sets. | Volume had no distance limit. | **FIXED.** L38 now says 20–30 m, 1–2 sets, "after a few weeks of sprint quality", build to 3. |
| S-3 | L78–79 Sample week. | Was three hard days in a row, with sprints and Nordics on MD-2. | **FIXED.** Hard days are now Tue and Thu; no Nordics Thu/Fri; Fri rest. Residual issues are tracked in S-8 and S-9. |
| S-4 | L72–73 Heat emergency. | Waiting for sweating to stop would delay an emergency call. | **FIXED.** Now covers the 30-minute rule, confusion/collapse/fit → ambulance, and keep cooling, per S31. |
| S-5 | Under-18 guidance. | Unsupervised max sprints and Nordics in 16–17-year-olds. | **FIXED.** L45: "Under 18? Do sprint sets and Nordics with a coach watching." |
| S-6 | Medical-screening line placement. | Red flags came after the drills. | **FIXED.** Moved to L24, before Drill 1, and now includes known heart conditions. The wording still needs "stop" (row 57). |
| S-7 | Nordics timing and technique. | DOMS; fatigued hamstrings on match day; uncontrolled drops. | **FIXED.** L44 now covers lowering slowly, catching with the hands, after training, not in the 2 days before a match, and sore legs at first. |
| S-8 | L78–79 (new) Nordics on Mon and Wed are each followed **the next day** by a hard sprint day (Tue sprint quality; Thu 15-15s/sprint sets). L44 warns "expect sore legs at first". | Novice Nordic soreness peaks about 24–72 h later, so in the first weeks the viewer does max sprints on sore, weakened hamstrings. That raises strain risk, and hamstring strains mostly happen while running [S23]. | **FIXED** (applied verbatim) Do Nordics *after* the hard session, so the easy day follows. L78–79: "Monday: easy base run. Tuesday: sprint quality, then 4 by 4s or small-sided games, then Nordics. Wednesday: rest or easy work. Thursday: 15-15s or 1 to 2 sprint sets. Friday: rest, and carb-focused meals." To keep twice a week, add after L79: "Once the soreness has gone, add a second Nordic session on Sunday or Monday." (Sunday or Monday Nordics are ≥5 days before the next match and 1–2 days before Tuesday. That's fine once adapted.) |
| S-9 | L80 (new) "If your team trains midweek, count that as one of your hard days." | It doesn't say which day to drop. A Wed or twice-weekly team session would give 3+ hard days, back-to-back. | **FIXED** (applied verbatim) Use the row 60 wording. |

Covered adequately, so no change needed:
- Warm-up before every drill (L23, FIFA 11+).
- "Stop the set if times drop or form breaks" (L39).
- Hamstring pain → stop and see a physio (L46); no diagnosis or treatment given.
- Gradual load increase (L81, S29).
- Hydration: both under- and over-drinking flagged (L70).
- No fasting, supplements or extreme diets.
- Heat acclimatisation (L71).


**Applied after second pass (2026-10-26):** rows 57, 58, 60 and S-8/S-9 applied verbatim; optional rows 26, 46 and 53 applied ("pros added one block…", "for elite players", "Sunday: rest"). Non-factual lines trimmed for length.
