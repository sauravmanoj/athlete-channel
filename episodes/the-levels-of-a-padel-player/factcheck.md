# Fact & safety check — The levels of a padel player
Checked: 62 claims · VERIFIED 53 · fixes needed 9 (7 wording, 1 unsupported, 1 wrong) · SAFETY 6 — all FIXED (see bottom)

**First pass (2026-10-28).** I read `script.md` line by line against `sources.json` and `research.md`. Line numbers refer to the current `script.md`. There's no `storyboard.json` yet.

**Sources opened:**
- Full pages: S2, S8, S9, S10, S11, S12 (abstract and results), S13, S15.
- Records/abstracts: S4, S14, S19 (PEDro), S22.
- **S3 (Playtomic Help Center):** still returns HTTP 403 to WebFetch. A fresh search pulled excerpts from four official Playtomic help pages (playerhelp, helpmanager, help.playtomic.com). They all say the same thing: the level updates after each *competitive* match, from the match result, the opponents' levels, the partner's level and your reliability. Beating stronger opponents gains more. Reliability is "the biggest driver" of how much the level moves (low reliability means big swings, high reliability means small ones). Casual games don't count. That is enough support for L12 as written. Before any Playtomic *band labels* go on screen, a human should still open S3 in a browser. The script doesn't use them now, so nothing needs to change.

**Not opened:** S1 (PDF; I relied on the notes, which are detailed and quote rule numbers), S5, S6, S7, S16, S17, S18, S20, S21, S23, S24. For these I relied on the `sources.json` notes.

**Researcher's specific questions:**
- **S11, "accuracy over power":** now confirmed **verbatim** on the opened LTA page: "Padel is more about accuracy and ball placement than it is about power". The page also says "Prioritise controlled shots and placement over power". L40 is VERIFIED. Update the S11 note and remove this item from research.md "Unverified".
- **S12:** "The winning pair performed one or more attacking actions in 85 % of points" / losers "failed to perform any attacking actions in 47 % of points" / "~65 % volleys, ~23 % bandejas, ~12 % smashes". Sample: 4 men's WPT 2017 finals, 2,054 actions. The numbers are correct; the scope needs adding (row 7).
- **S13:** "On the men's side, more than 60% of the golden points finish with an error." VERIFIED.
- **S2:** every LTA descriptor quoted in the script matches the page (1.0, 2.5, 3.0, 4.0, 5.0).
- **Eyes:** the script doesn't claim the goggles are padel-certified. That's correct, because ASTM F3164 doesn't name padel [S24]. The red-flag wording is too narrow (row 59 / SF-3).
- **Medical advice:** nothing in the script diagnoses or treats. The red flags send people to a professional. See SF-3 and SF-4 for tightening.

**Notes for the storyboard (when it exists):**
- **Stats card at L16:** must say "4 men's pro finals" (or "pro men's finals, one study").
- **Shot-mix card at L58:** bandeja ~23%, smash ~12% "of attacking shots". Don't present them as shares of *all* shots.
- **Calf callout at L62:** the inner calf (medial gastrocnemius), on the back of the lower leg, between knee and ankle. Not the shin or the thigh.
- **Achilles/heel callout at L83:** the back of the heel or lower calf.
- **Elbow callout at L79–80:** the *outside* (lateral) of the elbow.
- **Bandeja:** draw the contact at about eye height, racket coming across the body. Not overhead-and-down like a serve.
- **Don't show Playtomic band names** (e.g. "Intermediate High"). They're excerpt-only [S3].

| # | Claim (as written) | Verdict | Evidence | Fix |
|---|---|---|---|---|
| 1 | L7 "the glass is not your enemy. It's your friend. And learning that is just level 1." [S1][S2] | VERIFIED | S1 Rule 12.3: the ball can hit any wall after a bounce. The LTA 3.0 descriptor "playing off the wall" marks the next tier. | — |
| 2 | L11 "The app most club players use, Playtomic…" | FIXED | No source gives market share. S6 is Playtomic's own report and has no share data. | "Playtomic, a booking app a lot of club players use, rates you from 0 to 7." |
| 3 | L11 "rates you from 0 to 7. Amateurs top out at 5.6." [S4][S5] | VERIFIED | S5: "a scale from 0 to 7". S4: "The maximum reachable scale for amateurs is 5.6." | — |
| 4 | L12 "…match results: who you played with, who you played against, and how sure the app is about you. So you can win and barely move." [S3][S5] | VERIFIED (excerpt-level for S3) | S5: results and opponent rankings. S3 excerpts (four official help pages): partner level and reliability, expected vs actual result; high reliability gives small changes. | Optional, for accuracy: add "…and only competitive matches count." |
| 5 | L13 "LTA… From 1.0 to 7.0, you pick the sentence that sounds like you." [S2] | VERIFIED | Page: "selecting one of the following statements will determine your rating". 6.0–7.0 are tied to pro rankings, which is fine as a summary. | — |
| 6 | L14 "The numbers differ by system… the names are mine." | VERIFIED | S5 notes "different organizations have their own ranking systems". The names are original. | — |
| 7 | L16 "In a study of pro finals, the winning pair played at least one attacking shot in 85% of points. The losing pair played none in 47% of points." [S12] | FIXED | The numbers are exact, but the sample was 4 men's World Padel Tour finals from 2017. "Pro finals" overgeneralises. | "In one study of four men's pro finals, the winning pair played at least one attacking shot in 85% of points. The losing pair played none in 47% of points. [S12]" |
| 8 | L17 "Every level up gives you one more tool to win the net, or keep it." | VERIFIED | Framing, consistent with S10, S11 and S9 (lob takes the net, bandeja keeps it). | — |
| 9 | L20 LTA 1.0 "still working on getting the ball in play" [S2] | VERIFIED | Verbatim. | — |
| 10 | L21 "…must land on the floor of the other side first. If it hits their glass before it bounces, you lose the point." [S1][S7] | VERIFIED | S1 Rule 13(g); S7. | — |
| 11 | L22 "after one bounce, the ball can hit any wall, and it's still in play until it bounces again." [S1][S7] | VERIFIED | S1 Rule 12.3; S7. | — |
| 12 | L23 Serve: underarm; bounce, hit at or below waist, diagonally into the box [S1][S7] | VERIFIED | S1 Rule 6; S7 "serve underarm". | — |
| 13 | L26 "The official 3-minute rally before a match isn't enough on its own." [S1] | VERIFIED | S1 Rule 2 has the 3-min courtesy rally. "Isn't enough" is coaching opinion, labelled as advice. | — |
| 14 | L26 Warm-up 6–8 min routine, overheads last | VERIFIED (coach-derived) | No padel warm-up trial exists (research.md). Sensible general practice. | See SF-5 (shoulder prep). |
| 15 | L27 "read the back glass. Prepare your racket early, let the ball come off the glass, and take the pace off it." [S11] | VERIFIED | S11: "let the ball hit the glass… give yourself more time". | — |
| 16 | L28 Toss-and-turn drill, 3 × 10, twice a week, then soft shot [S11] | VERIFIED | S11 lists back-glass returns as a drill focus. The dose is coach-derived and low. | — |
| 17 | L29 "Keep your backswing short on both sides." [S11] | VERIFIED | S11: "short backswing on both sides". | — |
| 18 | L32 LTA 2.5 "can rally with basic shots, but lacks technique" [S2] | VERIFIED | Verbatim (first-person on the page). | — |
| 19 | L34 "The LTA's two normal shapes: both up at the net, or both back defending." [S11] | VERIFIED | S11: "up at the net with your partner or both towards the back of the court defending". | — |
| 20 | L36 "be consistent, and move as a pair" [S2][S11] | VERIFIED | S2 3.0 "pretty consistent"; S11 "The best padel teams are the ones who move around the court together." | — |
| 21 | L37 Cross-court count, 3 × 3 min, 10 then 20 [S11] | VERIFIED | S11: half-court rally with a consecutive-shot target. The numbers are coach-derived. | — |
| 22 | L38 Mirror shadowing 4 × 30 s [S11] | VERIFIED (coach-derived) | S11: move with partner. | — |
| 23 | L39 Call "mine"/"yours" [S11] | VERIFIED | S11: "communicate with your partner". | — |
| 24 | L40 "Hitting hard to win the point. Placement beats power here." [S11] | VERIFIED | Verbatim on S11: "Padel is more about accuracy and ball placement than it is about power." | Update the S11 note / research.md Unverified. |
| 25 | L43 LTA 3.0 [S2] | VERIFIED | Verbatim. | — |
| 26 | L45 "The LTA calls it the most important shot in padel. It pushes the net pair back and gives you time to move forward." [S10] | VERIFIED | S10 verbatim. | — |
| 27 | L47 High, cross-court, "just past the service line and before the back glass", bend legs, low to high [S10] | VERIFIED | S10 verbatim. | — |
| 28 | L48 "Two up, two back… Swap every 2 points. First pair to 10." [S10] | VERIFIED | S10 drill. (In S10 the net pair feeds and the baseline pair lobs, which matches.) | — |
| 29 | L50 "The lob is your ticket to the net." [S10][S11] | VERIFIED | S10 "chance to move forward"; S11 "regain the net". | — |
| 30 | L53 LTA 4.0 [S2] | VERIFIED | Verbatim. | — |
| 31 | L54 "the other pair lobs you. Your answer is the bandeja." [S9] | VERIFIED | S9. | — |
| 32 | L55 Bandeja = "tray"; open face, about eye height, across the body, slice; keeps you at the net [S8][S9] | VERIFIED | S8 "tray", sliced; S9 "approximately eye height", "come across your body", underspin, defensive. | — |
| 33 | L56 "antidote to the lob" [S9] | VERIFIED | Verbatim. | — |
| 34 | L58 "In pro finals, bandejas were about 23% of attacking shots. Smashes, only about 12%." [S12] | VERIFIED | Abstract. The scope is set by the row 7 fix. | Optional: "In those finals…" |
| 35 | L59 "the víbora, or 'viper': a faster overhead with side-spin." [S8] | FIXED | S8: "An attacking shot hit at around head or shoulder height… side-spin". "Faster" isn't in the source. | "Its attacking cousin is the víbora, or "viper": an overhead hit around head or shoulder height with side-spin. [S8]" |
| 36 | L60 Shadow bandeja 3 × 10 [S9] | VERIFIED | Technique from S9; the dose is coach-derived. | — |
| 37 | L61 "Defend the net"… bandeja past the service line… first to 10; start with soft hand-fed lobs [S9] | VERIFIED | S9 drill verbatim. The progression is coach-derived. | See SF-1. |
| 38 | L62 "typical padel calf tear happens when you land on one leg after an overhead and push off to volley." [S15] | VERIFIED | S15: tennis leg (medial gastrocnemius) when going from a single-leg landing after an overhead to the volley. | — |
| 39 | L63 "build calf strength first, keep overhead drills short at the start, and if your shoulder already hurts, get it checked first." [S15] | VERIFIED | S15: eccentric calf/Achilles capacity, ankle dorsiflexion, gradual load. The shoulder line is general caution. | Make it concrete; see SF-1. |
| 40 | L64 "Smashing every lob. Then backing off to the baseline. Hit the bandeja, and step back in." [S9] | VERIFIED | S9: not "a lot of pace and power"; "push your body back towards the net". | — |
| 41 | L67 LTA 5.0 [S2] | VERIFIED | Verbatim. | — |
| 42 | L69 Chiquita: soft ball at the net players' feet so they volley up [S8] | VERIFIED | S8. | — |
| 43 | L70 Por tres: kick smash from close to the net, out over the side wall [S8] | VERIFIED | S8: "kick smash, usually played from close to the net", over the 3 m side wall. | — |
| 44 | L71 "With golden point scoring, deuce is settled by one deciding point." [S1] | VERIFIED | S1 Option 3; S8. | — |
| 45 | L71 "In men's pro golden points, more than 60% ended in an error, not a winner." [S13] | VERIFIED | S13: "On the men's side, more than 60% of the golden points finish with an error." | — |
| 46 | L72 Golden-point sets, count errors, 1 set per session [S1][S13] | VERIFIED (coach-derived) | — | — |
| 47 | L73 "The net pair may only smash balls that land in front of the service line." [S8][S9] | FIXED | Overheads are hit before the bounce, so "balls that land" doesn't describe a smashable lob, and the rule can't be refereed as worded. The drill itself is coach-derived (fine), but S8/S9 only support the shot definitions. | "Drill 2: attack or reset. The net pair may only smash short lobs they can hit without stepping back past the service line. Anything that pushes them back must be a bandeja or a víbora. Play to 10. [S8][S9]" |
| 48 | L74 "Strength train all your major muscle groups at least 2 days a week, and build up gradually." [S20] | VERIFIED | ACSM 2026 infographic. | See SF-6. |
| 49 | L75 "…strength training cut injuries to about a third, and balance training to about half. Stretching didn't. None of those trials were in padel." [S19] | FIXED | RR 0.315 / 0.55 / 0.96 are correct. But "cut injuries to about a third" reads as "by a third", and the strength estimate comes from only a few of the 25 trials. | "In a review of sports trials, strength training cut injury rates to about a third of normal, and balance training to about half — though only a handful of trials tested strength work. Stretching didn't help. None of the trials were in padel. [S19]" |
| 50 | L76 "Going for a winner on every high ball. Pick your moment." [S12] | FIXED | S12 doesn't say that going for winners is a mistake. It shows bandejas outnumber smashes about 2:1 among attacking shots, and that winners attack *more*. The citation overstates its support. | Keep the line as coaching advice and cite "[S9][S12]". Or: "The mistake? Going for a winner on every high ball. Even the pros hit about two bandejas for every smash. Pick your moment. [S9][S12]" |
| 51 | L79 "The elbow is the most injured part of the body in padel." [S14][S15] | FIXED | S14 (8 studies, mean ages 31–57): elbow is the top site. S15 says 41% of injuries are lower-limb. The youngest club sample (S17, mean age 30), closest to our 16–40 audience, has knee 18.2% top and elbow 10.5%. An absolute statement is too strong. | "In a review of padel injury studies, the elbow was the most commonly injured spot. Tennis elbow alone made up more than 20% of injuries in another review. [S14][S15]" |
| 52 | L79 "Tennis elbow alone is more than 20% of injuries in one review." [S15] | VERIFIED | S15: lateral epicondyle tendinopathy "more than 20% of all reported injuries". | Covered by the row 51 rewrite. |
| 53 | L80 Racket weight/grip; "If the outside of your elbow still hurts after a few days of rest, see a doctor." [S15][S21] | VERIFIED | S15 racket weight and grip size; S21 see a GP if pain continues after a few days of rest. | Optional: "see a GP or physio". |
| 54 | L81 "The ball is small and fast, and experience doesn't protect your eyes." [S16][S18] | VERIFIED | S16 "being an experienced player does not decrease the risk". | — |
| 55 | L81 "Sports goggles with polycarbonate lenses are worth wearing at any level." [S16][S18][S24] | VERIFIED | S16/S18 recommend eyewear; S24: polycarbonate is the most impact-resistant lens. There's no padel-certification claim, which is correct. | Optional: "Racket-sport goggles with polycarbonate lenses…" |
| 56 | L81 "at the net, don't turn round to watch your partner's shot." | VERIFIED (coach-derived) | Common coaching safety advice, consistent with S16's eye-risk framing. No citation needed. | — |
| 57 | L82 "In one club study, more hours of matches each week were linked to more injuries. Add court time gradually." [S15][S17] | VERIFIED | S17 is cross-sectional ("linked" is correct); S15 says rapid increases in hours cause amateur injuries. | — |
| 58 | L83 Achilles red flags: sudden pop/snap at the back of calf/heel, can't push up onto toes [S23] | VERIFIED | S23. | — |
| 59 | L84 "Same if a hit to the eye changes your vision, or you can't open it." [S22] | FIXED | S22 says go to A&E if "something has hit your eye at high speed", which a padel ball strike is, as well as for any change in sight, light sensitivity, nausea, or being unable to move or open the eye. The script's threshold is narrower than the source. | See SF-3. |
| 60 | L87 Self-check summary | VERIFIED | Matches the level content. | — |
| 61 | L88 "This week: warm up, then do the 2 drills for your level, twice." | FIXED | Level 1 (L28) and Level 3 (L48) have only one drill each. | "This week: warm up, then do the drills for your level, twice." |
| 62 | L89 Close | VERIFIED | Consistent with S1 and S11. | — |

New sources:
- None needed. Additional Playtomic help pages that back S3 (also 403 to fetch, seen via search excerpts): https://playerhelp.playtomic.com/hc/en-gb/articles/19831827459345-The-Playtomic-Levels-ups-downs and https://help.playtomic.com/en/articles/3112292-the-playtomic-levels-algorithm-ups-downs. Optionally add them to the S3 note.
- Update the S11 note: the verbatim quote "Padel is more about accuracy and ball placement than it is about power."
- Update the S12 note: "four men's WPT 2017 finals" is already there; just make sure the script says so.

## Safety
| # | Advice | Risk | Required change |
|---|---|---|---|
| SF-1 | L60–63 Level 4 overhead drills: "Defend the net… First to 10", plus "build calf strength first, keep overhead drills short at the start". | The overhead single-leg landing → push-off to the volley is the documented calf-tear mechanism [S15], and repeated overheads load the shoulder. "Build calf strength" gives no "how", and a game to 10 has no volume cap for someone new to overheads. Level 5 Drill 2 (L73) repeats the same smash/landing pattern. | Replace L63 with: "So before you add overhead drills, do calf raises two or three times a week: straight-knee and bent-knee, 3 sets of 10 to 15, building to one leg at a time. Keep your first overhead sessions to about 10 minutes, rest between games, and land on both feet when you can. And if your shoulder or calf already hurts, see a physio or sports doctor before you start. [S15]" Add to L61: "Only move to live lobs once your bandeja lands past the service line most of the time."  FIXED |
| SF-2 | L49 "If you're the pair being lobbed, turn and run. Don't backpedal into the glass." | "Turn and run" sends players sprinting *toward* the back glass. If they misjudge it, they hit the glass. Two partners chasing the same lob can also collide. | "If you're the pair being lobbed, turn side-on and run back, but stop short of the glass. You can let the lob bounce and come off the wall, then play it. One player chases; the other calls it." [S11 supports letting it come off the glass]  FIXED |
| SF-3 | L84 "Same if a hit to the eye changes your vision, or you can't open it." | NHS lists any high-speed hit to the eye as an A&E trigger [S22]. As written, a player with an unchanged-looking but injured eye (e.g. a hyphaema) might keep playing. S18's three cases all needed surgery. | "If the ball hits you in the eye, stop and get it checked the same day, at A&E if your vision changes, light hurts, you feel sick, or you can't open or move the eye. [S22][S18]"  FIXED |
| SF-4 | There's no general pain/build-up rule for new or returning players. Only L82 ("add court time gradually"). | Amateurs get hurt from poor preparation and rapidly increasing hours [S15]. Without a pain rule, viewers may play through warning signs. | Add after L26 or at L82: "New to padel, or back after a break? Build up your court time week by week, and don't play through pain." No citation needed (S15 supports it).  FIXED |
| SF-5 | L26 warm-up: jog, shuffles, leg swings, lunges, calf raises, then strokes, "overheads last". | Levels 4–5 are overhead-heavy, and the warm-up has no shoulder/upper-body prep. The shoulder is a common padel injury site [S14][S16]. | Add "arm circles" to the list: "…easy jogging, side shuffles, leg swings, lunges, calf raises and arm circles. Then volleys and groundstrokes, overheads last."  FIXED |
| SF-6 | L74 "Strength train all your major muscle groups at least 2 days a week, and build up gradually." | Fine for healthy amateurs. But anyone already in pain shouldn't just add load, and beginners need a light start. | "…at least 2 days a week. Start light, build up gradually, and if something already hurts, see a physio first. [S20]"  FIXED |

Covered adequately, so no change needed:
- The eyewear wording (no padel-certification claim).
- The elbow red flag (L80) and the Achilles red flags (L83). Both are non-diagnostic and refer out.
- Low drill volumes at Levels 1–3.
- No supplement, fasting, bracing or treatment advice.

Optional, not required:
- Mention that the wrist cord is compulsory and protects others [S1].
- A heat and hydration tip for outdoor courts.
- Run outside the court only where the venue allows it [S1]. The script doesn't encourage out-of-court play, so this isn't needed.


## Fixes applied (2026-10-28, writer)
All 9 claim rows and SF-1…SF-6 applied with the suggested wording (lightly shortened for length). Rows 2, 7, 35, 47, 49, 50, 51, 59, 61 → FIXED. Script then trimmed for the 10-minute cap: removed the chiquita line, the duplicate Level 1 "rebound hits you" line, the club-study load line (covered by SF-4 build-up line), the "3-minute courtesy rally" sentence, and the "two bandejas for every smash" add-on (stat already at L58). Drills changed (L49, L61, L73), so a second check was requested.

## Second pass (2026-10-28)
I re-read the current `script.md` (86 lines) line by line. **Line numbers below refer to the current script**, not the first-pass table.

**Result: 3 items (1 wording fix, 2 SAFETY), all FIXED below.** The other first-pass fixes read correctly.

**Fixed items that now read correctly:**
- Row 2 → L11.
- Row 7 → L16.
- Row 35 → L58.
- Row 47 → L71.
- Row 49 → L73. "Only a few trials tested strength work" is accurate.
- Row 50 → L74, cited [S9][S12]. It's acceptable as coaching advice, backed by the L57 shot-mix stat.
- Row 51 → L77.
- Row 61 → L85.
- SF-1, calf-prep line → L62. It's concrete and refers people out. [S19] is a reasonable extra cite for "strength work prevents injury".
- SF-4 → L26.
- SF-5 → L25 (arm circles present).
- SF-6 → L72.

**Effects of the trims:**
- **Warm-up (L25) has no citation now.** It's acceptable as coaching advice. It's a generic dynamic warm-up, presented as a recommendation and not as a factual claim. The research found no padel warm-up trial, so there's nothing better to cite. Optionally, append [S15], which lists "poor preparation" as an amateur injury risk. Not required.
- **Club-study line removed (old L82):** this is fine. L26 covers the build-up and pain advice. S17 is now cited only through row 51's reasoning, not in the script. It can stay in `sources.json` as background, or be dropped from the description's source list.
- **Chiquita removed:** fine. Nothing else depends on it. Ignore the old storyboard note about it.
- **"In those pro finals" (L57):** this still points back to L16's "four men's pro finals", so the scope holds. The storyboard card must still say "4 men's pro finals, attacking shots only".
- **Storyboard callout line refs have shifted:**
  - Calf → L61–62.
  - Achilles/heel → L80.
  - Outer elbow → L78.

| # | Claim / advice (as written) | Verdict | Evidence | Fix (exact wording) |
|---|---|---|---|---|
| 2P-1 | L49 "If you're being lobbed, turn side-on and run back, but stop short of the glass. You can let the lob come off the wall, then play it. One player chases, the other calls it." | FIXED | The shortening dropped "bounce" from the SF-2 wording. As written, it tells viewers to play a lob that comes off the wall, but a lob that hits the glass *before* bouncing is already out [S1 Rule 13(g); S7]. That contradicts Rule one at L21. It also has no citation. | "If you're being lobbed, turn side-on and run back, but stop short of the glass. Let the lob bounce and come off the wall, then play it. One player chases, the other calls it. [S1][S11]" |
| 2P-2 | L60 "Drill 2: defend the net… The net pair must land a bandeja past the service line, then play it out. First to 10. Start with soft hand-fed lobs. Go live once most of your bandejas land deep." | FIXED | The trim dropped the "swap every 2 points" rotation that is in the source drill [S9]. As written, the same pair hits every overhead in a race to 10. That's a lot of uncapped single-leg landings and push-offs, the calf-tear mechanism at L61 [S15], plus repeated shoulder load. The ~10-minute cap only arrives at L62, after the drill. | "Drill 2: defend the net. 2 at the net, 2 at the back. The back pair lobs. The net pair must land a bandeja past the service line, then play it out. Swap every 2 points. First to 10. Start with soft hand-fed lobs, and go live once most of your bandejas land deep. [S9]" (Optional: change L61's opener to "Before you start, careful:" so the calf/time cap clearly applies to the drill just described.) |
| 2P-3 | L81 "If the ball hits you in the eye, stop and get it checked the same day, at A&E if your vision changes, light hurts, you feel sick, or you can't open or move the eye." | FIXED | The first-pass wording is still softer than its own source. S22 lists "something has hit your eye at high speed" as an A&E trigger *by itself*, and a padel ball can reach ~130 km/h [S18]. "Get it checked" doesn't say by whom. "A&E" is also UK-only, and the channel's audience is international (`channel.json`). | "If the ball hits you in the eye, stop playing and get it checked by a doctor the same day, and go to A&E or the emergency room straight away if your vision changes, light hurts, you feel sick, or you can't open or move the eye. [S22][S18]" |

**Checked after the trims, no change needed:**
- **L71, Level 5 attack-or-reset:** reads as the row 47 fix. The smash volume is capped by "play to 10", and the L62 calf/time caveat covers it.
- **L68 por tres:** no drill is attached, so there's no safety issue.
- **L80 Achilles red flag:** fine.
- **L78 elbow red flag:** fine.

New sources: none.

### Second-pass fixes applied (2026-10-28, writer)
- 2P-1 FIXED — lob line now "Let the lob bounce and come off the wall" [S1][S11].
- 2P-2 FIXED — "Swap every 2 points" restored; L61 opens "Before you start, careful:".
- 2P-3 FIXED — eye line: doctor same day; emergency room straight away for the listed signs ("A&E" replaced for the international audience).
No open issues.
