# Fact & safety check — 5 mistakes killing your running stamina
Checked: 59 claims · VERIFIED 44 · fixes needed 15 (14 wording, 1 citation) · SAFETY 8 — all FIXED (see bottom)

**First pass (2026-10-28).** I read `script.md` (84 lines) line by line against `sources.json` and `research.md`. Line numbers refer to the current `script.md`. There's no `storyboard.json` yet. The notes below cover the storyboard ahead of time.

**Sources opened this pass:**
- **S2**, PMC full text. Reference group: sessions at or below the longest run of the previous 30 days, or up to 10% above it. Overuse-injury HRR was 1.64 for >10–30%, 1.52 for >30–100% and 2.28 for >100%. The week-to-week ratio showed no association (HRR 0.88–0.97, p≥0.11). ACWR spikes were linked to *fewer* injuries. The authors say that "progressions up to 10% are not necessarily safe": a 1–10% increase carried a non-significant 19% higher rate (95% CI −10% to +57%), and they suggest a cut-off below 10% may be worth considering. The cohort was mean age 45.8, 22% female, Garmin users, with self-reported injuries. The study is observational.
- **S13**, NHS Couch to 5K page. Week 1 is 7 × (run 1 min, walk 1.5 min), then a final 1-min run, which makes 8 runs and 7 walks. The page says: "Aim for a rest day between each run". It says "totally okay to repeat a week". It suggests a light carb snack (banana or toast) 1–2 h before. In hot weather, run in the morning. Speak to a GP first if you're worried about your health. Week 9 is 3 × 30 min.
- **S24**, NHS 111 Wales. It says to "drink more cold drinks, especially if you're active or exercising" and to "avoid extreme exercise". It says to call 999 if someone is still unwell after 30 min of cooling, or has hot skin that isn't sweating, confusion, a seizure or loss of consciousness.
- **NHS chest pain** (new source, below). Call 999 for sudden chest pain that doesn't go away, pain that spreads to the arm, neck, jaw or back, or chest pain with sweating, nausea, light-headedness or breathlessness.

**Not opened:** S1, S3–S12, S14–S23 and S25. For these I relied on the `sources.json` notes, which are detailed and quote the figures. The S19 strength-training subgroup is small: the 2014 abstract doesn't give a per-intervention trial count, so the script should say "only a few trials" (same as the padel episode).

**Your specific questions, in short:**
- **Spike run (S2):** the 1.6× figure is right. 2.3× is for runs *more than double* the longest, not exactly double. "Weekly % didn't predict injury" is right for the week-to-week ratio. "One sudden long run did" is too causal for an observational study. The "about 10% at most" line currently sounds like a safe limit, and the authors explicitly say it isn't. Fixes are in rows 17–19.
- **17.8 vs 7.7 per 1,000 h:** that is 2.3×, so "more than twice as often per hour" is correct. But "experienced" isn't the review's category, and the pooled data are heterogeneous. See row 15.
- **Talk test / threshold / redline:** the talk-test wording matches S7/S8. The problem is that the script's "redline" is critical speed [S9], while the talk test marks the *first* ventilatory threshold, which sits well below critical speed. Said back to back, viewers (and the hero gauge) will treat them as the same line. "Hit the wall" is also the wrong term (rows 4, 5, 8).
- **70–80%:** VERIFIED. It's elite *descriptive* data, and the script doesn't claim an outcome from it.
- **Cadence:** fair. "Less braking, less knee load" is supported by lab mechanics [S10][S11], and the script openly says injury/stamina evidence is thin. The definition of overstriding needs tightening (row 23), and the drill needs a calf/Achilles caveat (SF-4).
- **Recovery, WHO, strength:** S12 and WHO are VERIFIED. "Cut injuries to about a third" will be heard as "by a third", so it needs rewording (row 39).
- **Fuelling / RED-S:** VERIFIED, except that "protein" isn't in S17 (row 49). The doctor triggers match S17.
- **"3 weeks" (S15):** the scope needs saying: men, on exercise bikes, training at ~70% VO2max, which is harder than talk pace (row 57).

## Notes for the storyboard (when it exists)
- **Hero "redline gauge":** don't put the talk-test amber zone *at* the redline. Use green for "full sentences, below your first breathing threshold". Use amber for "choppy speech, around that threshold". The redline itself (critical speed, where the reserve drains) sits **above** amber, so red = "gasping, reserve draining". The research brief's gauge (amber = VT, red = W′) is fine as long as amber and red aren't labelled as the same line.
- **Spike stat card:** "+10–30% → 1.6×" and "more than double → 2.3×". Label it "overuse-injury rate vs longest run in the last 30 days". Don't write "2× longer = 2.3×". Small footer: "observational study, 5,205 runners".
- **17.8 vs 7.7:** label "injuries per 1,000 hours: beginners vs recreational runners (one review)".
- **Strength "~1/3":** show it as "about ⅓ as many injuries" (e.g. 3 injury icons → 1). **Not** "−33%".
- **Overstriding callout:** the foot lands well out in front of the hips/body with a near-straight knee, and the heel strikes first. Put the brake icon at the foot/ground contact. The knee-load callout goes on the knee joint (front of the leg, mid-leg), not the hip or the shin.
- **Cadence card:** "160 → 168 (+5%)". Count one foot for 30 s × 4.
- **C25K card:** "Week 1: run 1 min, walk 1½ min — 8 runs" (see row 11).
- **Shin pain callout (L76):** the front/inner edge of the shin bone, between knee and ankle, spread over a wide area. **Stress fracture callout (L75):** one small dot on the bone. Make the two visibly different.
- **Strength exercises:** glute bridge = glutes/back of hips. Calf raise = back of the lower leg. Squats and step-ups = front of the thigh (quads) plus glutes.
- **Fuelling:** no gel/sports-drink icons on the "under an hour" line. Show "30–60 g/h" only on the 60–90+ min line.
- **"3 weeks" card:** "one small study: men, exercise bikes". **Don't** show "+18%" unless it's labelled the same way.

| # | Claim (as written) | Verdict | Evidence | Fix |
|---|---|---|---|---|
| 1 | L6 "You set off fast. 4 minutes later, you're bent over, gasping…" | VERIFIED | Narrative scenario, consistent with S9 (an early effort above critical speed drains W′). | — |
| 2 | L7 "The problem usually isn't your lungs. It's a few mistakes you can fix this week." | VERIFIED (framing) | In healthy people, early breathlessness is mostly a pacing issue [S9]. "Usually" is hedged. | See SF-1: people with wheeze or tight chest need a route to a doctor, so the "not your lungs" line doesn't dismiss asthma. |
| 3 | L12 "The first one is why you gasp early. The rest are why you stop improving." | VERIFIED (framing) | Matches the research framework. | — |
| 4 | L15 "Your body has a redline speed. Below it, your breathing settles and you can keep going." [S9] | FIXED | S9: below critical speed, VO2 and lactate reach a steady state. Just below it you still tire within ~30–60 min, so "you can keep going" overstates. | "Your body has a redline speed. Below it, your breathing settles and you can keep going for a long time. [S9]" |
| 5 | L16 "…you're spending a small, fixed reserve. The further over the line you go, the faster it empties, and then you hit the wall." [S9] | FIXED | The reserve (W′) and its faster drain further above the line are correct [S9]. But "hitting the wall" in running means glycogen depletion late in long runs, which is a different mechanism. Pop-science conflation. | "…The further over the line you go, the faster it empties, and when it's gone, you have to slow right down. [S9]" |
| 6 | L17 Phone on full brightness analogy | VERIFIED | Analogy only. | — |
| 7 | L18 "the best endurance athletes do most of their training easy: around 70 to 80% of it." [S4] | VERIFIED | S4: elite athletes spend ~70%+ (often ~80%) of training time at low intensity. Descriptive. The script makes no performance promise. | Optional: "around 70 to 80% of their training time". |
| 8 | L19 "If you can speak in full sentences, you're at or below your first breathing threshold." [S7][S8] | FIXED | The wording matches S8 ("comfortable" speech is at/below VT1) and S7. But straight after L15–16 viewers will hear the "first breathing threshold" as the redline. VT1 sits well below critical speed. The talk test is also validated mostly in small and patient samples [S8], so it's a guide, not a precise meter. | "The fix is the talk test. If you can speak comfortably in full sentences, you're at or below your first breathing threshold, which is well under your redline. [S7][S8][S9]" |
| 9 | L20 "If you can only get out 2 or 3 words, slow down, or walk." [S7][S8] | VERIFIED | S7/S8: when speech isn't comfortable, you're above VT1. "2 or 3 words" is a coach-derived cue, and a safe one. | — |
| 10 | L21 "Every 5 minutes or so, say a sentence out loud." | VERIFIED (coach-derived) | Method adapted from S8 (reading a passage aloud). | — |
| 11 | L22 "Couch to 5K starts with 60 seconds of running and 90 seconds of walking, 8 times." [S13] | FIXED | Page: 7 × (run 1 min / walk 1.5 min), then a final 1-min run. That's 8 runs and 7 walks, plus a 5-min warm-up and cool-down walk. | "The NHS Couch to 5K plan starts with 8 one-minute runs, with 90 seconds of walking in between. [S13]" |
| 12 | L23 "Walking breaks are part of the official plan. They're not cheating." [S13] | VERIFIED | C25K is run-walk in weeks 1–4. | — |
| 13 | L24 Easy pace that creeps faster | VERIFIED (coach-derived) | — | — |
| 14 | L27 "Your heart and lungs adapt fast. Your bones and tendons take longer." [S20][S22] | FIXED | S20 and S22 only say that sudden increases cause shin/Achilles problems. Neither compares adaptation speeds. The claim itself is mainstream (tendons turn over more slowly than muscle; see new sources). "Lungs" is wrong-ish: lung structure barely changes with training. The fast adapters are the heart, blood and muscles. | "Your heart and muscles adapt fast. Your bones and tendons take longer to catch up. [S21][S22][NEW-2]". Or keep it as framing and drop the citation: "Your fitness builds faster than your bones and tendons can toughen up." |
| 15 | L28 "Beginners get injured more than twice as often per hour of running as experienced recreational runners." [S3] | FIXED | 17.8 vs 7.7 per 1,000 h = 2.3×, so "more than twice" is right. The review's comparison group is "recreational", not "experienced recreational", and the pooled studies are heterogeneous. | "In one review, beginners got injured more than twice as often per hour of running as regular recreational runners. [S3]" |
| 16 | L29 "And injury stops all progress." | VERIFIED (framing) | — | — |
| 17 | L30 "In a study of over 5,000 runners, the weekly increase didn't predict injury. One sudden long run did." [S2] | FIXED | n = 5,205 is correct. The week-to-week ratio showed no association. But this is observational, so "did [predict]" can't mean cause. Also, the cohort were experienced Garmin users (mean age 46), not beginners. | "In a study of over 5,000 runners, the weekly increase wasn't linked to injury. One sudden long run was. [S2]" |
| 18 | L31 "A run 10 to 30% longer than your longest in the last 30 days came with about 1.6 times the injury rate. Doubling it came with about 2.3 times." [S2] | FIXED | 1.64 for >10–30% is VERIFIED. 2.28 is for runs **more than double** (>100%). (The >30–100% band was 1.52, so the risk doesn't climb smoothly. No need to say this on screen.) | "…came with about 1.6 times the overuse-injury rate. More than doubling it came with about 2.3 times. [S2]" |
| 19 | L33 "If it is, make it only a little longer, about 10% at most." [S2] | FIXED | Viewers will hear "10% is safe". S2's authors say "progressions up to 10% are not necessarily safe": +1–10% carried a non-significant ~19% higher rate, and they suggest a cut-off below 10%. The rule is observational, not proven. | "If it is, make it only a little longer, no more than about 10%, and less is fine. That's a sensible ceiling, not a proven safe limit. [S2]" |
| 20 | L34 "If you're coming back after a break, start from your current longest run, not the one you used to do." | VERIFIED (coach-derived) | Consistent with S2 (30-day window) and S23 (returning after time off is a trigger). | Optional cite [S2][S23]. |
| 21 | L35 "Couch to 5K takes 9 weeks, 3 runs a week, and you can repeat any week that felt too hard." [S13] | VERIFIED | S13: "totally okay to repeat a week". The plan "can take longer than 9 weeks". | — |
| 22 | L36 Sensible weekly total crammed into one huge weekend run [S2] | VERIFIED | Single-session spike vs weekly ratio [S2]. | — |
| 23 | L39 "Overstriding is reaching your foot far out in front, so your heel lands ahead of your knee." | FIXED | At contact, almost every runner's foot is slightly ahead of the knee, so as a test this would label nearly everyone. The usual description is the foot landing well ahead of the body/hips with a near-straight knee. S10/S11 describe longer step length and more braking, not a heel-vs-knee rule. | "Overstriding is reaching your foot far out in front of your body, so it lands with your leg almost straight." |
| 24 | L40 "It's like pulling the handbrake a tiny bit on every step." | VERIFIED | S10: a higher step rate reduces braking impulse. | — |
| 25 | L41 "When runners take slightly quicker, shorter steps at the same speed, there's less braking and less load on the knee." [S10][S11] | VERIFIED | S10: +5% gives less knee energy absorption and less braking impulse. S11: strong evidence for reduced knee flexion, moderate for lower knee extensor moment. Lab, immediate effects. | Optional: "In lab tests, when runners take…" |
| 26 | L42 "Is it proven to prevent injuries or boost stamina? Not yet. The evidence is thin. But it's a small, low-risk tweak." [S11] | VERIFIED | S11: "insufficient evidence" (2 small studies in knee-pain patients). Fair and honest. Long-term effects are unknown [S11], so "low-risk" should come with the SF-4 caveat. | Optional: "Not proven." instead of "Not yet." |
| 27 | L43 Count one foot for 30 s, × 4 = steps per minute | VERIFIED | Arithmetic: one foot in 30 s × 2 feet × 2 = steps/min. | — |
| 28 | L44 "Add 5%. So 160 becomes 168. Use a metronome app…" [S10] | VERIFIED | 160 × 1.05 = 168. S10 used a metronome at ±5%. | — |
| 29 | L45 3–5 one-minute chunks, extend over 2–4 weeks | VERIFIED (coach-derived) | Small dose. | See SF-4. |
| 30 | L46 "Keep the same speed. Quicker, shorter steps, not faster running." [S10] | VERIFIED | S10 tested at constant speed. | — |
| 31 | L47 "If your stride is pain-free, you don't have to change it. If your knee already hurts, see a physio first." [S11] | VERIFIED | S11: the injury evidence is only in patellofemoral pain, under supervision. Refers out correctly. | — |
| 32 | L48 Magic 180; "Studies change cadence by 5 to 10% from the runner's own rhythm, and big jumps feel awkward." [S10][S11] | VERIFIED | S10 used ±5/10%. S11: +10% raised perceived exertion (very limited evidence), and ~15% raised energy cost. | — |
| 33 | L51 "Training is the stress. Recovery is where you get fitter." [S12] | VERIFIED | S12: overload plus adequate recovery leads to supercompensation. An acceptable simplification. | — |
| 34 | L52 "Pile on hard sessions without rest, and you stop improving. That can take weeks to months to recover from." [S12] | VERIFIED | S12: non-functional overreaching takes weeks to months and causes stagnation. | — |
| 35 | L53 Phone-charging analogy | VERIFIED | Analogy only. | — |
| 36 | L54 "no back-to-back run days when you're starting. Couch to 5K puts a rest day between every run." [S13] | VERIFIED | S13: "Aim for a rest day between each run". | — |
| 37 | L55 "easy cycling or swimming keeps your engine ticking with less impact." [S20] | FIXED | S20 recommends cycling/swimming as low-impact alternatives *for shin splints*. S23 recommends cross-training for runners in general. | Keep the wording and cite "[S20][S23]". |
| 38 | L56 "And strength train at least 2 days a week." [S14] | VERIFIED | WHO adults 18–64: muscle-strengthening on ≥2 days a week, all major muscle groups. (For 16–17-year-olds, WHO says ≥3 days, so "at least 2" isn't wrong.) | — |
| 39 | L56 "In a review of sports trials, strength training cut injuries to about a third. Stretching didn't." [S19] | FIXED | RR 0.315 and stretching 0.96 are correct. But "cut… to about a third" will be heard as "cut by a third", which is wrong by a factor of 2. Only a few of the 25 trials tested strength work, and none were in runners. | "In a review of sports trials, people who did strength training ended up with about a third as many injuries. Stretching didn't help. Only a few trials tested strength work, and none were in runners. [S19]" |
| 40 | L57 Squats, calf raises, glute bridges, step-ups; 2–3 × 8–15, reps in reserve | VERIFIED (coach-derived) | Standard, moderate dose. | See SF-5. |
| 41 | L58 Warning signs: easy runs unusually hard several times in a row, heavy legs, poor sleep, frequent colds | VERIFIED (coach-derived) | Consistent with S12 and the S17 symptom lists. | See SF-6. |
| 42 | L59 Rest day ≠ hard leg session / 5-a-side | VERIFIED (coach-derived) | — | — |
| 43 | L63 "The NHS suggests a light snack 1 to 2 hours before, like a banana or toast." [S13] | VERIFIED | S13 verbatim ("a banana or a slice of toast"). | — |
| 44 | L64 "For runs under an hour, you don't need gels or sports drinks. Water is enough." [S18] | VERIFIED | S18: around 1 h, carbohydrate during the run isn't required; small amounts or a mouth rinse *can* help hard efforts. "Don't need" is accurate. | — |
| 45 | L65 "On runs longer than about 60 to 90 minutes, start practising some carbohydrate… 30 to 60 grams an hour." [S18] | VERIFIED | S18: 30–60 g/h for longer sessions. Up to 90 g/h is for >2.5 h only (not mentioned, which is correct). | — |
| 46 | L66 "eating too little, day after day, for the training you do. Doctors call it low energy availability." [S16][S17] | VERIFIED | S16/S17 definitions. | — |
| 47 | L67 "It can block your body's adaptation to training… It affects men and women, at any level." [S16][S17] | VERIFIED | S17: "prevents the body's adaptation to training". S16/S17: both sexes, any level. | — |
| 48 | L68 Car on the reserve light analogy | VERIFIED | Analogy. Matches S17. | — |
| 49 | L69 "After a run, eat a normal meal with carbohydrate and protein." [S17] | FIXED | S17 supports carbohydrate before **and after** exercise. Protein isn't in S17. Protein after exercise is mainstream sports-nutrition guidance (ACSM/AND/DC 2016), but that source isn't in `sources.json`. | Either "After a run, eat a normal meal with plenty of carbohydrate. [S17]", or keep "and protein" and add NEW-3 (Thomas 2016) as the citation: "[S17][NEW-3]". |
| 50 | L70 "See a doctor if you're losing weight without trying, if your periods stop or become irregular, or if you keep getting injured." [S17] | VERIFIED | S17 red flags. | Optional: add the male sign from S17: "…or, for men, morning erections stop." |
| 51 | L71 Marathon fuelling on a 30-min jog / skipping meals while adding miles [S17][S18] | VERIFIED | S18 (not needed under ~1 h). S17 (increased load + restriction = RED-S risk). | — |
| 52 | L74 Chest pain, fainting, unusual breathlessness: "Stop and get checked…" [S25] | VERIFIED (symptom list) | S25 lists these symptoms. The urgency wording is too weak. | See SF-1. |
| 53 | L75 "Pain in one small spot on a bone, especially pain at rest or at night, needs a doctor before you run again." [S20][S21] | VERIFIED | S20: small-area pain may be a stress fracture, see a GP. S21: a specific tender spot; X-ray may be normal. | Tighten; see SF-8. |
| 54 | L76 "Shin pain that builds as you run? Don't run through it. Swap to low-impact exercise and build back gradually." [S20] | VERIFIED (as far as it goes) | S20: "important not to run through the pain"; rest 2–3 weeks, low-impact, gradual return. | Missing the refer-out; see SF-2. |
| 55 | L77 "In hot weather, run in the cool of the morning and drink cold fluids." [S13][S24] | VERIFIED | S13: morning. S24: "drink more cold drinks, especially if you're active or exercising". | Missing heat-illness signs; see SF-3. |
| 56 | L80–81 Weekly plan (runs Mon/Wed/Sat; strength Tue/Fri; rest Thu/Sun) [S2][S13][S14] | VERIFIED (coach-derived) | No back-to-back run days [S13]. 2 strength days [S14]. Long run governed by the spike rule [S2]. | See SF-7. |
| 57 | L82 "In one small lab study, aerobic fitness started rising within 3 weeks." [S15] | FIXED | S15: 16 men (8 young, 8 older), **cycling**, 45 min at ~70% VO2max 3×/week. That's harder than talk-pace. VO2max was up at the first retest (week 3). Without saying "men" and "cycling", viewers assume it applies to them running. | "In one small lab study of men on exercise bikes, aerobic fitness was already up after 3 weeks. [S15]" |
| 58 | L82 "Couch to 5K gets beginners to 30 minutes of running in 9 weeks." [S13] | FIXED | That's the plan's design (week 9 = 3 × 30 min), but the page says it can take longer. As written it sounds like a guarantee. | "Couch to 5K is built to get beginners to 30 minutes of running in about 9 weeks, and it's fine if it takes longer. [S13]" |
| 59 | L83 "start slower than you think. Talk, don't gasp…" | VERIFIED | Summary of the talk test [S7][S8]. | — |

New sources:
- **NEW-1:** NHS, "Chest pain" — https://www.nhs.uk/symptoms/chest-pain/ (for SF-1. Call 999 if: sudden chest pain that does not go away; pain spreading to the arm, neck, jaw, stomach or back; chest pain with sweating, feeling sick, light-headedness or shortness of breath.)
- **NEW-2 (row 14, pick one):** Mersmann F, Bohm S, Arampatzis A. "Imbalances in the development of muscle and tendon as risk factor for tendinopathies in youth athletes: a review." *Frontiers in Physiology* 2017;8:987 — https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2017.00987/full (muscle and tendon adapt at different rates). Or: "Functional adaptation of connective tissue by training", *German Journal of Sports Medicine* 2019 — https://www.germanjournalsportsmedicine.com/archive/archive-2019/issue-4/functional-adaptation-of-connective-tissue-by-training/. I only saw search-result summaries, not the full texts, so the researcher should open whichever one is used before citing it.
- **NEW-3 (row 49, optional):** Thomas DT, Erdman KA, Burke LM. "American College of Sports Medicine Joint Position Statement: Nutrition and Athletic Performance." *MSSE* 2016;48(3):543–568 (already named in the S18 note; abstract covers post-exercise protein). Only needed if "and protein" stays.
- **S24 note update:** add the verbatim "drink more cold drinks, especially if you're active or exercising" and "avoid extreme exercise".

## Safety
| # | Advice | Risk | Required change |
|---|---|---|---|
| SF-1 | L74 "Stop and get checked if you have chest pain, faint or nearly faint, or feel unusually breathless. Don't push through that." [S25] | "Get checked" doesn't say by whom or how fast. Chest pain during exercise can be a cardiac emergency [NEW-1]. There's also no "before you start" line. C25K itself says to speak to a GP first if you have health worries [S13], and L7 ("isn't your lungs") could make people with asthma or heart symptoms brush them off. | Replace L74 with: "Stop straight away if you get chest pain or tightness, feel faint, or get far more breathless than the effort should make you. Don't push through it. If chest pain doesn't go away when you stop, or spreads to your arm, neck or jaw, call emergency services. Otherwise, see a doctor before you run again. And if you have a heart or lung condition, or you're worried about your health, talk to a doctor before you start. [S13][S25][NEW-1]" |
| SF-2 | L76 "Shin pain that builds as you run? Don't run through it. Swap to low-impact exercise and build back gradually." [S20] | As written, it's a self-management plan with no exit. Pain that builds during every run can also be a stress fracture or another problem that needs assessment. S20 itself says to see a GP if it isn't improving. | "Shin pain that builds as you run? Don't run through it. Swap to cycling or swimming for a couple of weeks, then build back gradually. If it isn't getting better, or it's in one small spot, see a doctor or physio. [S20]" |
| SF-3 | L77 "In hot weather, run in the cool of the morning and drink cold fluids." [S13][S24] | Heat illness is the main hot-weather risk for amateurs, and the script gives no warning signs or stop rule. "Drink cold fluids" with no limit can also lead to over-drinking on long runs (low risk for <1 h). | "In hot weather, run in the cool of the morning, go easier than usual, and drink cold fluids. If you feel dizzy, sick, confused or stop sweating, stop, get into the shade and cool down. If you're not better within 30 minutes, call emergency services. [S13][S24]" |
| SF-4 | L44–46 cadence change (+5%, 3–5 × 1 min, extend over 2–4 weeks) | A quicker cadence moves some load away from the knee, and S11 reports flatter foot strikes, so calves, Achilles and feet can get sore. The long-term effects are unknown [S11]. The script calls it "low-risk" without a stop rule. Combining it with the long run on the same day adds load. | Append after L46: "Do it on easy runs only, not on your longest run. If your calves, Achilles or feet get sore, go back to your normal rhythm for a week." |
| SF-5 | L57 "Squats, calf raises, glute bridges and step-ups. 2 to 3 sets of 8 to 15, stopping with a couple of reps left in the tank." | Fine for healthy amateurs. But beginners need a bodyweight start and a pain rule, and step-ups need a safe, low step. | "Squats, calf raises, glute bridges and step-ups onto a low, stable step. Start with just your body weight: 2 to 3 sets of 8 to 15, stopping with a couple of reps left in the tank. Add weight slowly, and stop any exercise that hurts. [S14]" |
| SF-6 | L58 Warning signs (easy runs hard several times in a row, heavy legs, poor sleep, frequent colds) | These are framed only as "need more rest". Persistent fatigue plus frequent illness can also be RED-S [S17] or a medical problem that rest won't fix. There's no refer-out. | Append: "If easing off for a week or two doesn't fix it, see a doctor. [S12][S17]" |
| SF-7 | L80–81 weekly plan: "Monday: easy run-walk… Saturday: your longest run, just a little longer than last time." | (a) "Longer than last time" every week means endless growth with no easier weeks, and it conflicts with C25K, where the plan sets the durations. (b) The plan doesn't count football or other sport, so field-sport players could stack it on top of training and matches. (c) Friday strength the day before the longest run gives tired legs for the biggest load of the week. | L81: "Friday: rest or light strength. Saturday: your longest run, the same as last time or just a little longer. Sunday: rest. [S2][S13]" Add after L81: "If you're doing Couch to 5K, use its runs for Monday, Wednesday and Saturday. And if you play football or another sport, count those sessions as run days." |
| SF-8 | L75 "Pain in one small spot on a bone, especially pain at rest or at night, needs a doctor before you run again." | "Especially" makes rest/night pain sound like a mere add-on to the small-spot sign. Both are red flags on their own [S20][S21]. The most practical self-check (tender to press on one spot) is missing. | "Pain in one small spot on a bone that hurts when you press it, or pain that's there at rest or at night, needs a doctor before you run again. [S20][S21]" |

Covered adequately, so no change needed:
- Talk test with "slow down, or walk" (L20). It's a conservative intensity cap.
- Run-walk and rest days for beginners (L22–23, L54). These are directly from the NHS.
- Knee pain → physio before changing gait (L47). It refers out and doesn't treat.
- RED-S doctor triggers (L70). Non-diagnostic, with no weight-loss or body-shaming messaging and no supplements.
- Fuelling is food and drink only. No supplements, medications, braces or treatment protocols anywhere.
- No plyometrics, fasting protocols or high-intensity sessions are prescribed.

Optional, not required:
- An eating-disorder signpost at L70: "…or if food and weight have started to feel stressful."
- L65 hot-weather long runs: "drink to thirst" rather than forcing fluids.


## Fixes applied (2026-10-28, writer)
All flagged rows and SF-1…SF-8 applied with the suggested wording. L27 now reads "Your muscles get stronger fast. Your tendons take longer to catch up." citing new S26 (Mersmann 2017, opened by the writer; heart/lungs dropped). L69 "and protein" removed. New S27 NHS chest pain. Drills changed (cadence caveat, strength progression, weekly plan), so a second check was requested.

## Second pass (2026-10-28)
Re-read the current `script.md` (86 lines) line by line. Line numbers below refer to that version. I opened S26 (Mersmann 2017, full text), S24 (NHS 111 Wales) and S27 (NHS chest pain) again.

Checked: 31 changed or affected lines · OK 29 · 1 wording fix · 1 SAFETY — both FIXED

**Open issues**

| # | Line (as written) | Verdict | Evidence | Fix |
|---|---|---|---|---|
| 2P-1 | L80 "If you feel dizzy, sick or confused, or stop sweating, get into the shade and cool down. Call emergency services if you're not better within 30 minutes." [S24] | FIXED | S24 puts the heatstroke signs (confusion, hot skin that isn't sweating, seizure, loss of consciousness) in the "Call 999" list *on their own*. Only "still unwell after 30 minutes of cooling" is tied to the 30-minute wait. As written, a confused runner who has stopped sweating would wait 30 minutes. That's the heatstroke scenario, where delay is dangerous. (My first-pass SF-3 wording had the same flaw.) The line also never says to stop running. | "If you feel dizzy or sick, stop running, get into the shade and cool down. Call emergency services if you're not better within 30 minutes, or straight away if someone becomes confused, or their skin is hot but they've stopped sweating. [S24]" |
| 2P-2 | L83–84 weekly plan: "Tuesday: strength… Friday: rest or light strength." | FIXED | L56 says "strength train at least 2 days a week" [S14], but anyone who picks "rest" on Friday gets only one strength day. The plan contradicts the advice two scenes earlier. | Thursday line: "Thursday: strength, or an easy swim or bike." Friday line: "Friday: rest." Keep everything else. That gives Tue + Thu strength, with Friday clear before the long run (SF-7c still holds). If the writer prefers to keep the Friday option, add: "Aim for two strength days in the week." |

**Resolved items, all OK**
- L15, L16 (rows 4, 5): OK. "Hit the wall" is gone and "for a long time" is added.
- L19 (row 8): OK. "Well under your redline" keeps the talk test and critical speed separate. [S7][S8][S9] are correct.
- L22 (row 11): OK. Matches the S13 week 1.
- L27 (row 14), S26: OK. The full text says muscle changes "can occur as early as after 3 to 4 weeks" with "no reports of such rapid adaptations of tendon". In two 3-month adult studies, "a marked increase of muscle strength preceded significant changes of tendon stiffness by 1–2 month". It also notes tendon tissue turnover is "markedly lower". The script line fairly reflects this, and the evidence it relies on is from adults, so the "youth athletes" title doesn't limit it. Optional polish at L32: the analogy says "Your engine lays bricks fast", but L27 now talks about muscles, not the engine. "Your muscles lay bricks fast. Your tendons are the cement, and cement needs time to set." would match. Not required.
- L28 (row 15): OK. "Recreational runners" is the review's own category.
- L30, L31, L33 (rows 17–19): OK. Each matches S2 (wording linked rather than causal, 1.64/2.28 with ">100%", 10% given as a ceiling and not a proven safe limit).
- L39 (row 23): OK.
- L45 (SF-4): OK. Easy runs only, not the longest run, with a progression (2–4 weeks) and a stop rule.
- L55 (row 37): OK. [S20][S23].
- L56 (row 39): OK. Says "a third as many", gives the caveats, and S19 RR 0.315 matches.
- L57 (SF-5): OK. Bodyweight start, low stable step, gradual load, pain rule.
- L58 (SF-6): OK. Refers out to a doctor.
- L69 (row 49): OK. Carbohydrate only, matches S17.
- L74 (SF-1): OK. The "before you start" line [S13][S25] also covers the L7 "isn't your lungs" concern.
- L75 (SF-1): OK. Matches the S25 symptom list.
- L76 (SF-1), S27: OK. NHS: call 999 for chest pain "that does not go away" or that "spreads to your left or right arm, or your neck, jaw, stomach or back". "Otherwise, see a doctor before you run again" is consistent with S27 (see a GP for chest pain that comes and goes) and S25 (consult a physician before exercising). Optional: add "or back" to match the NHS list.
- L77 (SF-8): OK. Includes press-tenderness and rest/night pain as separate flags. [S20][S21].
- L78 (SF-2): OK. It refers out. The small-spot sign is covered by L77, the line before.
- L79 (SF-3, first half): OK.
- L83–84 (SF-7): OK on its own points. C25K slots, football counted as run days, the long run held or nudged up, and no strength the day before the long run. The only remaining issue is 2P-2.
- L85 (rows 57, 58): OK.
- Unchanged lines (L6–12, L17–18, L20–21, L23–24, L29, L34–36, L40–44, L46–48, L51–54, L59, L62–68, L70–71, L86): OK on re-read. Citations still match.

**Storyboard notes:** these still apply. Add one for 2P-1: if the heat scene shows symptom icons, put "confused / not sweating" under an emergency (phone) icon. Don't put it under the 30-minute timer.

New sources: none. S24 and S27 are already in `sources.json` and support the fixes above.

### Second-pass fixes applied (2026-10-28, writer)
- 2P-1 FIXED — heat line now says stop running; confusion or hot skin without sweating = call emergency services straight away.
- 2P-2 FIXED — Thursday: strength, or an easy swim or bike. Friday: rest. (Two strength days kept.)
- Optional: "Your muscles lay bricks fast"; "arm, back, neck or jaw".
No open issues.
