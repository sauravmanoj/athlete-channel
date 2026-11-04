import fs from "node:fs";
import path from "node:path";

const EP_DIR = "episodes/the-mental-game-of-pickleball";
const scriptText = fs.readFileSync(path.join(EP_DIR, "script.md"), "utf8");

const rawParagraphs = [];
let currentChapter = "";

scriptText.split("\n").forEach((line) => {
  if (line.startsWith("## ")) {
    currentChapter = line.replace("## ", "").trim();
  } else if (line.trim() && !line.startsWith("#") && !line.startsWith("Promise:") && !line.startsWith("Framework:")) {
    const cleanNarration = line.replace(/\[S\d+\]/g, "").trim().replace(/\s+/g, " ");
    rawParagraphs.push({ chapter: currentChapter, narration: cleanNarration });
  }
});

console.log(`Parsed ${rawParagraphs.length} paragraphs from script.md.`);

const sId = (idx) => "s" + (idx + 1).toString().padStart(2, "0");
const scenes = [];

// ==========================================
// Chapter 1: Hook (p0 - p5)
// ==========================================

// p0: You are standing at the kitchen line, tied 9–9 in the deciding game.
scenes.push({
  id: sId(0),
  kind: "mascot",
  chapter: "Hook",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "flinch", at: "@tied" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Tied 9–9 Deciding Game", highlight: "9–9", at: 0, side: "right" },
  narration: rawParagraphs[0].narration
});

// p1: Your heart pounds against your ribs, your forearm turns to solid stone, and your partner looks over with anxious eyes.
scenes.push({
  id: sId(1),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "tired_front", at: 0 },
    { pose: "hold_back", at: "@forearm" }
  ],
  props: { r: "pbpaddle" },
  gauges: [{ label: "Heart Rate", icon: "fire", from: 95, to: 165, at: "@heart" }],
  headline: { text: "Sympathetic Surge", highlight: "Surge", at: "@heart", side: "right" },
  narration: rawParagraphs[1].narration
});

// p2: Opponents notice your panic, so they fire four consecutive drives directly at your body.
scenes.push({
  id: sId(2),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "block", at: 0 },
    { pose: "flinch", at: "@drives" }
  ],
  props: { r: "pbpaddle" },
  callouts: [{
    label: "Body Attack Zone",
    target: "chest",
    at: "@drives",
    side: "right",
    top: 280
  }],
  narration: rawParagraphs[2].narration
});

// p3: You lash out at a low bounce, dump an impatient speed-up into the tape, and watch the match slip away.
scenes.push({
  id: sId(3),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink", at: 0 },
    { pose: "facepalm", at: "@dump" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Impatient Speed-Up In The Net", highlight: "In The Net", at: "@dump", side: "right" },
  narration: rawParagraphs[3].narration
});

// p4: Every pickleball player knows this feeling: you did not lose to better strokes, you lost to your own nervous system.
scenes.push({
  id: sId(4),
  kind: "slam",
  text: "Lost To Your Nervous System",
  highlight: "Nervous System",
  style: "dark",
  icon: "cross",
  sub: "Not better strokes — autonomous panic",
  narration: rawParagraphs[4].narration
});

// p5: Mastering the mental game transforms high-pressure terror into ruthless, ice-cold tactical focus.
scenes.push({
  id: sId(5),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "pb_hands_hips", at: 0 },
    { pose: "celebrate", at: "@ice-cold" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Ice-Cold Tactical Focus", highlight: "Ice-Cold", at: 0, side: "right" },
  narration: rawParagraphs[5].narration
});

// ==========================================
// Chapter 2: The 4 mental pillars (p6 - p11)
// ==========================================

// p6: Tournament doubles is won between your ears, not just off your paddle face.
scenes.push({
  id: sId(6),
  kind: "mascot",
  chapter: "The 4 mental pillars",
  background: "dark",
  poses: [
    { pose: "think", at: 0 },
    { pose: "point_up", at: "@paddle" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Court Psychology", highlight: "Psychology", at: 0, side: "right" },
  narration: rawParagraphs[6].narration
});

// p7: We organize your court psychology around four proven pillars: the target trap, the patience threshold, the 3-second vagal reset, and closing out 9–9.
scenes.push({
  id: sId(7),
  kind: "list",
  title: "The 4 Mental Pillars",
  items: [
    { text: "The Target Trap", sub: "Defeat 80% isolation & partner disconnect", at: "@target" },
    { text: "The Patience Threshold", sub: "Prefrontal impulse control on low balls", at: "@patience" },
    { text: "The 3-Second Vagal Reset", sub: "Cyclic sighing & Quiet Eye between points", at: "@vagal" },
    { text: "Closing at 9–9", sub: "External focus to eliminate motor choking", at: "@closing" }
  ],
  narration: rawParagraphs[7].narration
});

// p8: Pillar 1 dismantles opponent isolation when 80 percent of shots target you.
scenes.push({
  id: sId(8),
  kind: "stat",
  value: 80,
  suffix: "%",
  label: "Opponent Isolation Frequency",
  sub: "Doubles teams relentlessly hunt one side",
  mascot: { pose: "block", props: { r: "pbpaddle" } },
  highlight: "80%",
  narration: rawParagraphs[8].narration
});

// p9: Pillar 2 locks down prefrontal impulse control so you never rush a low attack.
scenes.push({
  id: sId(9),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink_b", at: 0 },
    { pose: "ready", at: "@rush" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Impulse Control Under 34 Inches", highlight: "Impulse Control", at: 0, side: "right" },
  narration: rawParagraphs[9].narration
});

// p10: Pillar 3 triggers rapid autonomic calming between points inside 10 seconds.
scenes.push({
  id: sId(10),
  kind: "stat",
  value: 10,
  suffix: "s",
  label: "Rule 4.E Between-Point Envelope",
  sub: "3-second vagal reset drops pulse instantly",
  mascot: { pose: "meditate" },
  highlight: "10s",
  narration: rawParagraphs[10].narration
});

// p11: Pillar 4 shields automated motor memory from conscious choking when the score reaches match point.
scenes.push({
  id: sId(11),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "pb_drop", at: 0 },
    { pose: "celebrate", at: "@match" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Shield Motor Memory At Match Point", highlight: "Shield", at: 0, side: "right" },
  narration: rawParagraphs[11].narration
});

// ==========================================
// Chapter 3: Pillar 1: The target trap (p12 - p24)
// ==========================================

// p12: In doubles pickleball, opposing teams intentionally hunt the perceived weaker player, funneling 70 to 80 percent of shots to one side.
scenes.push({
  id: sId(12),
  kind: "mascot",
  chapter: "Pillar 1: The target trap",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "flinch", at: "@funneling" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Opponents Hunting One Player", highlight: "Hunting", at: 0, side: "right" },
  narration: rawParagraphs[12].narration
});

// p13: When 8 balls in a row fly at you, your brain sounds an alarm, viewing the bombardment as an existential threat.
scenes.push({
  id: sId(13),
  kind: "versus",
  title: "Mental State Shift Under Isolation",
  left: {
    label: "Threat State",
    pose: "flinch",
    gauge: { label: "Vascular Resistance", icon: "fire", from: 85, to: 95 }
  },
  right: {
    label: "Challenge State",
    pose: "ready",
    gauge: { label: "Cardiac Efficiency", icon: "bolt", from: 60, to: 90 }
  },
  winner: "right",
  narration: rawParagraphs[13].narration
});

// p14: Think of a goalkeeper facing a relentless penalty shootout: if you freeze up, every incoming ball feels like an ambush.
scenes.push({
  id: sId(14),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "crouch", at: 0 },
    { pose: "facepalm", at: "@ambush" }
  ],
  headline: { text: "Goalkeeper Penalty Mindset", highlight: "Penalty", at: 0, side: "right" },
  narration: rawParagraphs[14].narration
});

// p15: In competitive tennis and basketball, isolated athletes who reframe this pressure as a personal challenge immediately regain optical tracking and motor fluidity.
scenes.push({
  id: sId(15),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "think", at: 0 },
    { pose: "ready", at: "@reframe" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Reframe Pressure As Challenge", highlight: "Challenge", at: "@reframe", side: "right" },
  narration: rawParagraphs[15].narration
});

// p16: You must execute a cognitive reappraisal: repeated attacks mean you dictate match tempo, not your opponents.
scenes.push({
  id: sId(16),
  kind: "slam",
  text: "You Dictate Match Tempo",
  highlight: "Tempo",
  style: "brand",
  icon: "bolt",
  sub: "Every ball to you is an opportunity to reset",
  narration: rawParagraphs[16].narration
});

// p17: Simultaneously, you need tactile synchrony with your partner.
scenes.push({
  id: sId(17),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "pb_hands_hips", at: 0 },
    { pose: "present", at: "@tactile" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Tactile Partner Synchrony", highlight: "Synchrony", at: 0, side: "right" },
  narration: rawParagraphs[17].narration
});

// p18: Research across elite NBA teams shows frequent non-verbal physical contact, like fist bumps and paddle taps, significantly dampens cortisol and boosts cooperative coordination under stress.
scenes.push({
  id: sId(18),
  kind: "stat",
  value: 100,
  suffix: "%",
  label: "Fist Bumps & Paddle Taps",
  sub: "Dampens cortisol & restores partner trust (Kraus 2010)",
  mascot: { pose: "celebrate", props: { r: "pbpaddle" } },
  highlight: "100%",
  narration: rawParagraphs[18].narration
});

// p19: Tactically, stop spraying panic counters down the sideline.
scenes.push({
  id: sId(19),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "swing_through", at: 0 },
    { pose: "facepalm", at: "@sideline" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Eliminate Sideline Panic Counters", highlight: "Panic", at: 0, side: "right" },
  narration: rawParagraphs[19].narration
});

// p20: Channel incoming pace back into the deep center pyramid, forcing opponents to negotiate middle spacing while buying your defense balance.
scenes.push({
  id: sId(20),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "soft_hit", at: 0 },
    { pose: "ready", at: "@balance" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Reset To Deep Center Pyramid", highlight: "Pyramid", at: 0, side: "right" },
  narration: rawParagraphs[20].narration
});

// p21: Practice the 80/20 Stress Inoculation Drill.
scenes.push({
  id: sId(21),
  kind: "slam",
  text: "80/20 Stress Inoculation Drill",
  highlight: "80/20",
  style: "brand",
  icon: "target",
  sub: "Inoculate isolation under live court pressure",
  narration: rawParagraphs[21].narration
});

// p22: Have two drilling partners hit 80 percent of all feeds exclusively to you for 10 minutes while you reset everything to the deep middle kitchen.
scenes.push({
  id: sId(22),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink", at: 0 },
    { pose: "block", at: "@reset" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "80% Feeds To Isolated Target", highlight: "80% Feeds", at: 0, side: "right" },
  narration: rawParagraphs[22].narration
});

// p23: Run 3 rounds of 10 minutes with 2 minutes of rest between games.
scenes.push({
  id: sId(23),
  kind: "stat",
  value: 3,
  suffix: " Rounds",
  label: "10-Min Isolation Blocks",
  sub: "2 minutes rest between sets for cognitive recovery",
  mascot: { pose: "pb_hands_hips", props: { r: "pbpaddle" } },
  highlight: "3 Rounds",
  narration: rawParagraphs[23].narration
});

// p24: A common mistake is turning your back on your partner in silent frustration, which spikes partner anxiety and destroys court chemistry.
scenes.push({
  id: sId(24),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "arms_crossed", at: 0 },
    { pose: "shrug", at: "@frustration" }
  ],
  headline: { text: "Mistake: The Silent Back Turn", highlight: "Mistake", at: 0, side: "right" },
  narration: rawParagraphs[24].narration
});

// ==========================================
// Chapter 4: Pillar 2: The patience threshold (p25 - p36)
// ==========================================

// p25: Over 65 percent of pickleball points end on unforced errors rather than outright winners.
scenes.push({
  id: sId(25),
  kind: "stat",
  chapter: "Pillar 2: The patience threshold",
  value: 65,
  suffix: "%",
  label: "Points Ending In Unforced Errors",
  sub: "Pickleball analytics: patience wins matches",
  mascot: { pose: "think" },
  highlight: "65%",
  narration: rawParagraphs[25].narration
});

// p26: Nowhere is this truer than impatient speed-ups.
scenes.push({
  id: sId(26),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink_b", at: 0 },
    { pose: "flinch", at: "@speed-ups" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "The Impatient Speed-Up Trap", highlight: "Trap", at: 0, side: "right" },
  narration: rawParagraphs[26].narration
});

// p27: When an extended dink rally drags past 15 shots, your brain craves an immediate dopamine reward to end the tension.
scenes.push({
  id: sId(27),
  kind: "stat",
  value: 15,
  suffix: " Shots",
  label: "Dopamine Craving Trigger",
  sub: "Extended dink rallies exhaust mental restraint",
  mascot: { pose: "tired_front", props: { r: "pbpaddle" } },
  highlight: "15 Shots",
  narration: rawParagraphs[27].narration
});

// p28: Your prefrontal cortex governs response inhibition, the neurological muscle that stops you from swinging at temptation.
scenes.push({
  id: sId(28),
  kind: "mascot",
  background: "dark",
  poses: [
    { pose: "think", at: 0 },
    { pose: "point_up", at: "@neurological" }
  ],
  headline: { text: "Prefrontal Response Inhibition", highlight: "Inhibition", at: 0, side: "right" },
  narration: rawParagraphs[28].narration
});

// p29: Under acute stress, prefrontal control degrades, tempting you to pull the trigger on balls sinking below net tape level.
scenes.push({
  id: sId(29),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "swing_back", at: 0 },
    { pose: "flinch", at: "@sinking" }
  ],
  props: { r: "pbpaddle" },
  callouts: [{
    label: "Below Net Tape (34\")",
    target: "rKnee",
    at: 0,
    side: "right",
    top: 360
  }],
  narration: rawParagraphs[29].narration
});

// p30: Match analytics reveal that attacking a ball below 34 inches incurs a devastating 65 percent penalty through direct net dumps or counter-smashes.
scenes.push({
  id: sId(30),
  kind: "stat",
  value: 65,
  suffix: "%",
  label: "Attack Penalty Below Net Tape",
  sub: "Direct net errors or immediate opponent counters",
  mascot: { pose: "facepalm" },
  highlight: "65%",
  narration: rawParagraphs[30].narration
});

// p31: Picture a traffic light: green light balls bounce above net height and invite clean topspin attacks, while red light balls sit below tape height and demand patience.
scenes.push({
  id: sId(31),
  kind: "versus",
  title: "The Traffic Light Decision Boundary",
  left: {
    label: "Red Light (Below 34\")",
    pose: "dink_b",
    gauge: { label: "Error Penalty", icon: "cross", from: 65, to: 75 }
  },
  right: {
    label: "Green Light (Above 34\")",
    pose: "soft_hit",
    gauge: { label: "Attack Success", icon: "check", from: 55, to: 80 }
  },
  winner: "right",
  narration: rawParagraphs[31].narration
});

// p32: Elite padel and badminton players exhibit this exact restraint, absorbing deep defensive balls until a true attacking float appears.
scenes.push({
  id: sId(32),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "dink", at: "@restraint" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Absorbing Balls Like Padel Pros", highlight: "Padel Pros", at: 0, side: "right" },
  narration: rawParagraphs[32].narration
});

// p33: Train this discipline using the Traffic Light Dinking Drill.
scenes.push({
  id: sId(33),
  kind: "slam",
  text: "Traffic Light Dinking Drill",
  highlight: "Traffic Light",
  style: "brand",
  icon: "check",
  sub: "Rewire prefrontal discipline on low contact",
  narration: rawParagraphs[33].narration
});

// p34: Play crosscourt dink games to 11 where you earn 1 point for every unattackable red ball reset into the kitchen, but concede 2 points if you speed up any ball below net height.
scenes.push({
  id: sId(34),
  kind: "list",
  title: "Traffic Light Scoring Rules",
  items: [
    { text: "+1 Point: Red Ball Reset", sub: "Clean soft unattackable drop into the kitchen", at: "@earn" },
    { text: "-2 Points: Low Speed-Up", sub: "Attacking any contact below net tape height", at: "@concede" },
    { text: "Target Score: 11 Points", sub: "Play full crosscourt games against your partner", at: "@games" }
  ],
  narration: rawParagraphs[34].narration
});

// p35: Complete 4 games to 11, twice per week.
scenes.push({
  id: sId(35),
  kind: "stat",
  value: 4,
  suffix: " Games",
  label: "Twice Per Week Routine",
  sub: "Builds unshakeable impulse control at the kitchen",
  mascot: { pose: "pb_hands_hips", props: { r: "pbpaddle" } },
  highlight: "4 Games",
  narration: rawParagraphs[35].narration
});

// p36: A frequent mistake is confusing passive pushing with tactical patience; patience means waiting actively with your paddle loaded in neutral ready position.
scenes.push({
  id: sId(36),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "soft_hit", at: 0 },
    { pose: "ready", at: "@neutral" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Active Ready vs Passive Pushing", highlight: "Active Ready", at: 0, side: "right" },
  narration: rawParagraphs[36].narration
});

// ==========================================
// Chapter 5: Pillar 3: The 3-second vagal reset (p37 - p48)
// ==========================================

// p37: Pickleball rallies are explosive, but the match is governed during the silence between points.
scenes.push({
  id: sId(37),
  kind: "mascot",
  chapter: "Pillar 3: The 3-second vagal reset",
  background: "court",
  poses: [
    { pose: "side_stand", at: 0 },
    { pose: "meditate", at: "@silence" }
  ],
  headline: { text: "The Silence Between Points", highlight: "Silence", at: 0, side: "right" },
  narration: rawParagraphs[37].narration
});

// p38: Under USA Pickleball Rule 4.E, you have 10 full seconds to serve or receive once the score is called.
scenes.push({
  id: sId(38),
  kind: "stat",
  value: 10,
  suffix: "s",
  label: "USA Pickleball Rule 4.E Window",
  sub: "Your regulatory envelope for autonomic resets",
  mascot: { pose: "point_up" },
  highlight: "10s",
  narration: rawParagraphs[38].narration
});

// p39: Most amateur players rush immediately to the line with elevated heart rates and shallow breathing, carrying mistakes straight into the next exchange.
scenes.push({
  id: sId(39),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "tired_front", at: 0 },
    { pose: "hands_knees", at: "@shallow" }
  ],
  gauges: [{ label: "Arousal Level", icon: "fire", from: 50, to: 95, at: "@elevated" }],
  headline: { text: "The Rushed Point Penalty", highlight: "Rushed", at: 0, side: "right" },
  narration: rawParagraphs[39].narration
});

// p40: You can reset your autonomic nervous system using a physiological cyclic sigh.
scenes.push({
  id: sId(40),
  kind: "mascot",
  background: "dark",
  poses: [
    { pose: "meditate", at: 0 },
    { pose: "present", at: "@cyclic" }
  ],
  headline: { text: "Physiological Cyclic Sigh", highlight: "Cyclic Sigh", at: 0, side: "right" },
  narration: rawParagraphs[40].narration
});

// p41: Pioneering respiration research demonstrates that two rapid nasal inhales followed by one long, slow mouth exhale maximally activates the vagus nerve.
scenes.push({
  id: sId(41),
  kind: "custom",
  file: "custom/vagal_reset.html",
  narration: rawParagraphs[41].narration
});

// p42: This dual inhale re-inflates collapsed pulmonary alveoli, offloads carbon dioxide, and drops acute physiological arousal within 3 seconds.
scenes.push({
  id: sId(42),
  kind: "stat",
  value: 3,
  suffix: " Seconds",
  label: "Autonomic Reset Duration",
  sub: "Offloads CO2 & activates parasympathetic calming",
  mascot: { pose: "meditate" },
  highlight: "3 Seconds",
  narration: rawParagraphs[42].narration
});

// p43: While exhaling, implement Quiet Eye fixation by locking your visual gaze steadily onto the center of your paddle face for 2 full seconds.
scenes.push({
  id: sId(43),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "pb_drop", at: 0 },
    { pose: "think", at: "@gaze" }
  ],
  props: { r: "pbpaddle" },
  callouts: [{
    label: "Quiet Eye Gaze Anchor (2.0s)",
    target: "rHand",
    at: "@paddle",
    side: "right",
    top: 260
  }],
  narration: rawParagraphs[43].narration
});

// p44: Sports vision meta-analyses confirm that stable ocular fixation prior to movement quiets motor cortex noise and stabilizes stroke mechanics across golf, tennis, and shooting.
scenes.push({
  id: sId(44),
  kind: "stat",
  value: 2,
  suffix: "s Lock",
  label: "Quiet Eye Meta-Analysis",
  sub: "Eliminates cortical noise before stroke initiation",
  mascot: { pose: "pb_hands_hips", props: { r: "pbpaddle" } },
  highlight: "2s Lock",
  narration: rawParagraphs[44].narration
});

// p45: Drill the Between-Point Breath Protocol during practice sets.
scenes.push({
  id: sId(45),
  kind: "slam",
  text: "Between-Point Breath Protocol",
  highlight: "Breath Protocol",
  style: "brand",
  icon: "bolt",
  sub: "Automate your 10-second routine on every dead ball",
  narration: rawParagraphs[45].narration
});

// p46: After every dead ball, step 2 paces behind the baseline, perform one cyclic sigh, fixate on your paddle face, and tap paddles with your partner before stepping in.
scenes.push({
  id: sId(46),
  kind: "list",
  title: "10-Second Pre-Point Protocol",
  items: [
    { text: "Step Back", sub: "2 paces behind baseline away from net", at: "@step" },
    { text: "Cyclic Sigh", sub: "Double nasal inhale + long mouth exhale", at: "@cyclic" },
    { text: "Quiet Eye", sub: "Lock gaze onto center of paddle face", at: "@paddle" },
    { text: "Paddle Tap", sub: "Physical touch with partner before entering line", at: "@partner" }
  ],
  narration: rawParagraphs[46].narration
});

// p47: Execute this 10-second sequence on all 50 practice points during practice matches.
scenes.push({
  id: sId(47),
  kind: "stat",
  value: 50,
  suffix: " Points",
  label: "Protocol Execution Goal",
  sub: "Ingrain the routine until it operates under panic",
  mascot: { pose: "ready", props: { r: "pbpaddle" } },
  highlight: "50 Points",
  narration: rawParagraphs[47].narration
});

// p48: The biggest error is rushing to serve before your heart rate settles, gifting your opponents free unforced errors.
scenes.push({
  id: sId(48),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "serve", at: 0 },
    { pose: "facepalm", at: "@gifting" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Error: Rushing To Serve While Panicked", highlight: "Error", at: 0, side: "right" },
  narration: rawParagraphs[48].narration
});

// ==========================================
// Chapter 6: Pillar 4: Closing at 9–9 and beating the choke (p49 - p60)
// ==========================================

// p49: At 9–9 in tournament play, athletes frequently suffer from explicit motor monitoring, commonly known as choking.
scenes.push({
  id: sId(49),
  kind: "mascot",
  chapter: "Pillar 4: Closing at 9–9 and beating the choke",
  background: "court",
  poses: [
    { pose: "flinch", at: 0 },
    { pose: "tired_front", at: "@choking" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Explicit Motor Monitoring: Choking", highlight: "Choking", at: 0, side: "right" },
  narration: rawParagraphs[49].narration
});

// p50: When stakes spike, your conscious mind attempts to micromanage automatic muscle movements you have practiced thousands of times.
scenes.push({
  id: sId(50),
  kind: "mascot",
  background: "dark",
  poses: [
    { pose: "think", at: 0 },
    { pose: "hold_back", at: "@micromanage" }
  ],
  headline: { text: "Conscious Mind Micromanaging Muscles", highlight: "Micromanaging", at: 0, side: "right" },
  narration: rawParagraphs[50].narration
});

// p51: Instead of letting fluid procedural memory hit the drop, you actively guide your wrist and elbow, fracturing the kinetic chain.
scenes.push({
  id: sId(51),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink", at: 0 },
    { pose: "facepalm", at: "@fracturing" }
  ],
  props: { r: "pbpaddle" },
  callouts: [{
    label: "Fractured Kinetic Chain",
    target: "wrist",
    at: "@wrist",
    side: "right",
    top: 290
  }],
  narration: rawParagraphs[51].narration
});

// p52: Biomechanical studies reveal that acute competitive anxiety causes an involuntary 30 to 50 percent spike in grip pressure.
scenes.push({
  id: sId(52),
  kind: "stat",
  value: 50,
  suffix: "%",
  label: "Involuntary Grip Pressure Surge",
  sub: "Agonist-antagonist muscular co-contraction",
  mascot: { pose: "hold_back" },
  highlight: "50%",
  narration: rawParagraphs[52].narration
});

// p53: Squeezing the handle turns your paddle into a rigid ping pong board, launching delicate kitchen drops 3 feet beyond the baseline.
scenes.push({
  id: sId(53),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "swing_through", at: 0 },
    { pose: "shrug", at: "@baseline" }
  ],
  props: { r: "pbpaddle" },
  gauges: [{ label: "Paddle Grip Force", icon: "fire", from: 3, to: 9, at: "@turns" }],
  headline: { text: "Death Grip Launches Long Balls", highlight: "Death Grip", at: 0, side: "right" },
  narration: rawParagraphs[53].narration
});

// p54: To defeat choking, adopt an external focus of attention.
scenes.push({
  id: sId(54),
  kind: "slam",
  text: "External Focus Of Attention",
  highlight: "External Focus",
  style: "brand",
  icon: "target",
  sub: "Focus on ball trajectory and apex, never mechanics",
  narration: rawParagraphs[54].narration
});

// p55: Meta-analyses across dozens of athletic skills prove that focusing externally on ball trajectory, spin, and intended targets produces far superior accuracy and automaticity than focusing internally on your body.
scenes.push({
  id: sId(55),
  kind: "versus",
  title: "Attentional Focus Under Pressure",
  left: {
    label: "Internal Focus (Breakdown)",
    pose: "hold_back",
    gauge: { label: "Muscular Stiffness", icon: "fire", from: 70, to: 90 }
  },
  right: {
    label: "External Focus (Mastery)",
    pose: "pb_drop",
    gauge: { label: "Touch Compliance", icon: "bolt", from: 40, to: 85 }
  },
  winner: "right",
  narration: rawParagraphs[55].narration
});

// p56: Gauge your grip on a 1 to 10 scale, deliberately holding your paddle at a relaxed 3 before every crucial point.
scenes.push({
  id: sId(56),
  kind: "stat",
  value: 3,
  suffix: " / 10",
  label: "Target Paddle Grip Calibration",
  sub: "Relaxed soft wrist enables maximum touch",
  mascot: { pose: "pb_drop", props: { r: "pbpaddle" } },
  highlight: "3 / 10",
  narration: rawParagraphs[56].narration
});

// p57: Run the Pressure Match Inoculation Drill.
scenes.push({
  id: sId(57),
  kind: "slam",
  text: "Pressure Match Inoculation Drill",
  highlight: "Pressure Match",
  style: "brand",
  icon: "trophy",
  sub: "Start at 9–9 sudden death to train under real consequences",
  narration: rawParagraphs[57].narration
});

// p58: Play tiebreaker games starting at 9–9 where the server faces immediate elimination on any unforced error, forcing you to execute with consequences on the line.
scenes.push({
  id: sId(58),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "soft_hit", at: "@execute" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "9–9 Sudden Death Tiebreakers", highlight: "Sudden Death", at: 0, side: "right" },
  narration: rawParagraphs[58].narration
});

// p59: Play 5 sudden-death tiebreakers per session.
scenes.push({
  id: sId(59),
  kind: "stat",
  value: 5,
  suffix: " Tiebreakers",
  label: "Sudden Death Match Volume",
  sub: "Builds psychological immunity to match-point stakes",
  mascot: { pose: "celebrate", props: { r: "pbpaddle" } },
  highlight: "5 Tiebreakers",
  narration: rawParagraphs[59].narration
});

// p60: The fatal mistake at 9–9 is playing not to lose by steering balls gently into the net rather than committing to decisive, loose-wristed targets.
scenes.push({
  id: sId(60),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "dink", at: 0 },
    { pose: "pb_hands_hips", at: "@decisive" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Never Play Not To Lose", highlight: "Never Play", at: 0, side: "right" },
  narration: rawParagraphs[60].narration
});

// ==========================================
// Chapter 7: Safety and the weekly mental routine (p61 - p68)
// ==========================================

// p61: Competitive nerves are a completely normal biological response to meaningful challenges, not a flaw in your character.
scenes.push({
  id: sId(61),
  kind: "mascot",
  chapter: "Safety and the weekly mental routine",
  background: "court",
  poses: [
    { pose: "hands_hips", at: 0 },
    { pose: "wave", at: "@normal" }
  ],
  headline: { text: "Nerves Mean The Match Matters", highlight: "Match Matters", at: 0, side: "right" },
  narration: rawParagraphs[61].narration
});

// p62: However, if you experience dizziness, chest pain, or unmanageable panic attacks, step off the court and consult a medical professional.
scenes.push({
  id: sId(62),
  kind: "slam",
  text: "Health & Safety Triage",
  highlight: "Safety Triage",
  style: "dark",
  icon: "cross",
  sub: "Dizziness, chest pain or panic = consult a doctor",
  narration: rawParagraphs[62].narration
});

// p63: When performing cyclic sighing, limit yourself to a single breath cycle between points; rapid consecutive cycles during hot play can cause hyperventilation and lightheadedness.
scenes.push({
  id: sId(63),
  kind: "stat",
  value: 1,
  suffix: " Breath",
  label: "Cyclic Sigh Limit Per Point",
  sub: "Prevents hyperventilation and dizziness under summer heat",
  mascot: { pose: "meditate" },
  highlight: "1 Breath",
  narration: rawParagraphs[63].narration
});

// p64: Furthermore, targeted players run significantly more court yardage; stay disciplined with electrolytes and hydration between games.
scenes.push({
  id: sId(64),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "drink", at: 0 },
    { pose: "hands_hips", at: "@hydration" }
  ],
  headline: { text: "Electrolytes & Hydration Under Target Load", highlight: "Hydration", at: 0, side: "right" },
  narration: rawParagraphs[64].narration
});

// p65: Integrate this weekly routine into your training calendar.
scenes.push({
  id: sId(65),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "pb_hands_hips", at: 0 },
    { pose: "present", at: "@calendar" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Weekly Mental Training Plan", highlight: "Weekly", at: 0, side: "right" },
  narration: rawParagraphs[65].narration
});

// p66: On Tuesdays, run 20 minutes of the 80/20 Stress Inoculation Drill with your doubles partner.
scenes.push({
  id: sId(66),
  kind: "stat",
  value: 20,
  suffix: " Mins",
  label: "Tuesday: 80/20 Stress Drill",
  sub: "Dismantle target isolation with partner touch",
  mascot: { pose: "block", props: { r: "pbpaddle" } },
  highlight: "20 Mins",
  narration: rawParagraphs[66].narration
});

// p67: On Thursdays, complete 4 games of the Traffic Light Dinking Drill to cement prefrontal patience.
scenes.push({
  id: sId(67),
  kind: "stat",
  value: 4,
  suffix: " Games",
  label: "Thursday: Traffic Light Dinking",
  sub: "Prefrontal impulse control on low attacks",
  mascot: { pose: "dink", props: { r: "pbpaddle" } },
  highlight: "4 Games",
  narration: rawParagraphs[67].narration
});

// p68: On Saturdays, play competitive matches enforcing the 3-second vagal reset and 9–9 pressure tiebreakers.
scenes.push({
  id: sId(68),
  kind: "list",
  title: "Saturday Match Day Protocol",
  items: [
    { text: "3-Second Vagal Reset", sub: "Mandatory after every dead ball before the serve", at: "@vagal" },
    { text: "Grip-3 Baseline", sub: "Check forearm softness at the kitchen line", at: "@enforcing" },
    { text: "9–9 Sudden Death", sub: "Close matches with decisive loose-wristed execution", at: "@pressure" }
  ],
  narration: rawParagraphs[68].narration
});

// ==========================================
// Chapter 8: Close (p69)
// ==========================================

// p69: Next time you stand at 9–9, take your breath, loosen your grip, and let your training take over.
scenes.push({
  id: sId(69),
  kind: "mascot",
  chapter: "Close",
  background: "court",
  poses: [
    { pose: "meditate", at: 0 },
    { pose: "celebrate", at: "@training" }
  ],
  props: { r: "pbpaddle" },
  headline: { text: "Loosen Your Grip · Trust Your Training", highlight: "Trust Your Training", at: 0, side: "right" },
  narration: rawParagraphs[69].narration
});

// ==========================================
// Build and Validate Storyboard
// ==========================================

console.log(`Generated ${scenes.length} scenes.`);
if (scenes.length !== rawParagraphs.length) {
  console.error(`ERROR: Mismatch! Scenes count (${scenes.length}) != Paragraphs count (${rawParagraphs.length})`);
  process.exit(1);
}

// Validate word anchors
for (let i = 0; i < scenes.length; i++) {
  const scene = scenes[i];
  const words = scene.narration.toLowerCase().replace(/[^a-z0-9\s-]/g, "").split(/\s+/);
  
  const checkAt = (at) => {
    if (typeof at === "string" && at.startsWith("@")) {
      const target = at.slice(1).toLowerCase().replace(/[^a-z0-9-]/g, "");
      const found = words.some(w => w === target || w.includes(target) || target.includes(w));
      if (!found) {
        console.warn(`WARNING: Scene ${scene.id} cue '${at}' not found in narration words: "${words.join(" ")}"`);
      }
    }
  };

  if (scene.poses) scene.poses.forEach(p => checkAt(p.at));
  if (scene.headline) checkAt(scene.headline.at);
  if (scene.gauges) scene.gauges.forEach(g => checkAt(g.at));
  if (scene.callouts) scene.callouts.forEach(c => checkAt(c.at));
  if (scene.items) scene.items.forEach(item => checkAt(item.at));
}

const storyboard = {
  version: 1,
  channel: "athlete-channel",
  slug: "the-mental-game-of-pickleball",
  title: "The mental game of pickleball",
  youtube: {
    title: "The mental game of pickleball",
    titleOptions: [
      "The mental game of pickleball (how to stay ice-cold at 9–9)",
      "Why you choke at 9–9 in pickleball (and the 3-second fix)",
      "4 sports psychology rules that win tight pickleball matches"
    ],
    description: "Tied 9–9 in the deciding game, heart pounding, forearm turned to stone, and opponents attacking your body? Here is the complete sports psychology breakdown to mastering the mental game of pickleball: beating the 80% target trap, locking down prefrontal patience on low balls, executing the 3-second cyclic sigh vagal reset between points, and eliminating explicit motor choking at match point.",
    tags: [
      "pickleball",
      "the mental game of pickleball",
      "pickleball mental game",
      "pickleball sports psychology",
      "how to not choke in pickleball",
      "pickleball strategy",
      "pickleball tips",
      "coach ember",
      "pickleball doubles strategy",
      "pickleball pressure"
    ]
  },
  thumbnail: {
    pose: "ready",
    props: { r: "pbpaddle" },
    background: "court",
    headline: "ICE-COLD AT 9-9",
    highlight: "9-9",
    opponent: { pose: "flinch" },
    icons: [
      { icon: "bolt", pos: [1420, 260], size: 1.5 }
    ],
    side: "right"
  },
  scenes
};

fs.writeFileSync(path.join(EP_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2) + "\n");
console.log("Successfully wrote storyboard.json!");
