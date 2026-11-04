import fs from "node:fs";
import path from "node:path";

const EP_DIR = "episodes/how-to-never-get-tired-in-padel";
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

// Scene 01 (Hook): Imagine walking into the third set...
scenes.push({
  id: sId(0),
  kind: "mascot",
  chapter: "Hook",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "celebrate", at: "@explosive" }
  ],
  props: { r: "padel" },
  headline: { text: "Third-Set Energy", highlight: "Energy", at: 0, side: "right" },
  gauges: [{ label: "Energy", icon: "bolt", from: 40, to: 95, at: "@third" }],
  narration: rawParagraphs[0].narration
});

// Scene 02: Your legs feel light, your split-step is sharp...
scenes.push({
  id: sId(1),
  kind: "versus",
  left: { label: "You", pose: "padel_ready", props: { r: "padel" }, sub: "legs light & ready" },
  right: { label: "Opponents", pose: "hands_knees", sub: "bent over gasping" },
  vs: "VS",
  narration: rawParagraphs[1].narration
});

// Scene 03: Today, I will show you why traditional cardio fails...
scenes.push({
  id: sId(2),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@science" }
  ],
  props: { r: "padel" },
  headline: { text: "Padel Endurance", highlight: "Endurance", at: "@science", side: "right" },
  icons: [{ icon: "target", near: "rHand", offset: [40, -60], at: "@science" }],
  narration: rawParagraphs[2].narration
});

// Scene 04: Chapter "The 4 engines of padel endurance" - Most players train for padel like it is a 5k...
scenes.push({
  id: sId(3),
  kind: "mascot",
  chapter: "The 4 engines of padel endurance",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "shrug", at: "@5k" }
  ],
  headline: { text: "Not A 5K Race", highlight: "Not", at: 0, side: "right" },
  icons: [{ icon: "cross", near: "head", offset: [80, -90], at: "@5k" }],
  narration: rawParagraphs[3].narration
});

// Scene 05: They go for long, steady jogs, but when match day comes...
scenes.push({
  id: sId(4),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_b", at: 0 },
    { pose: "tired_front", at: "@concrete" }
  ],
  headline: { text: "Concrete Legs", highlight: "Concrete", at: "@concrete", side: "right" },
  callouts: [{ label: "Heavy Quads", target: "rThigh", at: "@concrete" }],
  narration: rawParagraphs[4].narration
});

// Scene 06: Padel is not a marathon; it is an intermittent combat sport...
scenes.push({
  id: sId(5),
  kind: "slam",
  text: "Padel is combat",
  highlight: "combat",
  style: "dark",
  icon: "fire",
  sub: "10×20m Glass Cage",
  narration: rawParagraphs[5].narration
});

// Scene 07: An average rally lasts only 6 to 12 seconds...
scenes.push({
  id: sId(6),
  kind: "stat",
  value: 12,
  suffix: "s",
  label: "average padel rally duration",
  highlight: "12 seconds",
  icon: "stopwatch",
  mascot: { pose: "present" },
  narration: rawParagraphs[6].narration
});

// Scene 08: In a full match, you cover up to 4,000 meters...
scenes.push({
  id: sId(7),
  kind: "stat",
  value: 400,
  suffix: "+",
  label: "braking stops and direction changes per match",
  highlight: "400",
  icon: "bolt",
  mascot: { pose: "flinch" },
  narration: rawParagraphs[7].narration
});

// Scene 09: To never get tired, you need 4 specific engines...
scenes.push({
  id: sId(8),
  kind: "list",
  title: "The 4 stamina engines",
  mascot: { pose: "point_up" },
  items: [
    { text: "Metabolic Recharger", icon: "bolt" },
    { text: "Eccentric Brake Pads", icon: "target" },
    { text: "Positional Geometry", icon: "check" },
    { text: "Between-Point Reset", icon: "heart" }
  ],
  narration: rawParagraphs[8].narration
});

// Scene 10: Chapter "Pillar 1: The metabolic engine" - When you scramble...
scenes.push({
  id: sId(9),
  kind: "title",
  chapter: "Pillar 1: The metabolic engine",
  number: 1,
  heading: "The metabolic engine",
  sub: "ATP-PCr bursts & aerobic refill",
  mascot: { pose: "padel_ready", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[9].narration
});

// Scene 11: The first 6 to 8 seconds of every sprint...
scenes.push({
  id: sId(10),
  kind: "stat",
  value: 8,
  suffix: "s",
  label: "pure phosphocreatine battery duration",
  highlight: "8 seconds",
  icon: "bolt",
  mascot: { pose: "present" },
  narration: rawParagraphs[10].narration
});

// Scene 12: This is your alactic battery: instant explosive power...
scenes.push({
  id: sId(11),
  kind: "slam",
  text: "Alactic battery",
  highlight: "Alactic",
  style: "brand",
  icon: "bolt",
  sub: "Zero lactic acid buildup",
  narration: rawParagraphs[11].narration
});

// Scene 13: When a point drags past 15 seconds, your anaerobic glycolysis kicks in...
scenes.push({
  id: sId(12),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "hands_knees", at: "@hydrogen" }
  ],
  headline: { text: "Lactic Burn", highlight: "Lactic", at: "@glycolysis", side: "right" },
  gauges: [{ label: "Lactate", icon: "fire", from: 20, to: 85, at: "@glycolysis" }],
  narration: rawParagraphs[12].narration
});

// Scene 14: This is where your aerobic system enters the game.
scenes.push({
  id: sId(13),
  kind: "slam",
  text: "The aerobic recharger",
  highlight: "Aerobic",
  style: "dark",
  icon: "heart",
  sub: "The between-point generator",
  narration: rawParagraphs[13].narration
});

// Scene 15: Your aerobic ceiling does not power the sprint...
scenes.push({
  id: sId(14),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@recharger" }
  ],
  props: { r: "padel" },
  headline: { text: "Rapid Recharger", highlight: "Recharger", at: "@recharger", side: "right" },
  narration: rawParagraphs[14].narration
});

// Scene 16: Think of a hybrid sports car...
scenes.push({
  id: sId(15),
  kind: "custom",
  file: "custom/hybrid_engine.html",
  narration: rawParagraphs[15].narration
});

// Scene 17: If your aerobic generator is small, your explosive battery only recharges...
scenes.push({
  id: sId(16),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "think", at: 0 },
    { pose: "shrug", at: "@halfway" }
  ],
  props: { r: "padel" },
  headline: { text: "Half-Charged Battery", highlight: "Half-Charged", at: "@halfway", side: "right" },
  icons: [{ icon: "battery", level: 0.5, pos: [1500, 260], size: 1.4 }],
  narration: rawParagraphs[16].narration
});

// Scene 18: To train this, ditch steady-state jogging and use Padel Court Shuttles...
scenes.push({
  id: sId(17),
  kind: "list",
  title: "Padel Court Shuttles",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Sprint baseline to net tape", icon: "bolt" },
    { text: "Backpedal to service line", icon: "target" },
    { text: "Lateral shuffle to side glass", icon: "check" }
  ],
  narration: rawParagraphs[17].narration
});

// Scene 19: Perform 8 to 10 seconds of all-out effort...
scenes.push({
  id: sId(18),
  kind: "chart",
  title: "Padel interval work-to-rest",
  unit: "s",
  focus: 1,
  mascot: { pose: "present" },
  bars: [
    { label: "Sprint Burst", value: 10, display: "10s", color: "#EF4444" },
    { label: "Walking Recovery", value: 25, display: "25s", color: "#10B981" }
  ],
  narration: rawParagraphs[18].narration
});

// Scene 20: Complete 2 blocks of 6 to 8 reps...
scenes.push({
  id: sId(19),
  kind: "list",
  title: "Shuttle Training Dosage",
  mascot: { pose: "point_up" },
  items: [
    { text: "2 blocks of 6–8 reps", icon: "stopwatch" },
    { text: "3 minutes rest between blocks", icon: "clock" },
    { text: "1–2 sessions per week", icon: "check" }
  ],
  narration: rawParagraphs[19].narration
});

// Scene 21: Chapter "Pillar 2: The deceleration debt" - Have you ever noticed...
scenes.push({
  id: sId(20),
  kind: "title",
  chapter: "Pillar 2: The deceleration debt",
  number: 2,
  heading: "The deceleration debt",
  sub: "Eccentric leg braking",
  mascot: { pose: "calf_pain" },
  transition: "push",
  narration: rawParagraphs[20].narration
});

// Scene 22: That heaviness is not a lack of cardio...
scenes.push({
  id: sId(21),
  kind: "slam",
  text: "Deceleration debt",
  highlight: "Debt",
  style: "dark",
  icon: "bolt",
  sub: "Legs wear out before lungs",
  subAt: "@cardio",
  narration: rawParagraphs[21].narration
});

// Scene 23: Unlike tennis or football on open turf...
scenes.push({
  id: sId(22),
  kind: "versus",
  left: { label: "Open Turf", pose: "run_a", sub: "linear cruising" },
  right: { label: "Padel Sand Turf", pose: "block", props: { r: "padel" }, sub: "sudden braking stops" },
  vs: "VS",
  narration: rawParagraphs[22].narration
});

// Scene 24: Every time you sprint forward and slam the brakes...
scenes.push({
  id: sId(23),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "block", at: "@brakes" }
  ],
  props: { r: "padel" },
  headline: { text: "Eccentric Braking", highlight: "Braking", at: "@brakes", side: "left" },
  callouts: [{ label: "Braking Quads", target: "rThigh", offset: [0, -20], at: "@quadriceps" }],
  narration: rawParagraphs[23].narration
});

// Scene 25: Your muscles are forced to lengthen under immense load...
scenes.push({
  id: sId(24),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "crouch", at: "@lengthen" }
  ],
  headline: { text: "Lengthen Under Load", highlight: "Load", at: "@lengthen", side: "right" },
  callouts: [{ label: "Eccentric Load", target: "rKnee", at: "@immense" }],
  narration: rawParagraphs[24].narration
});

// Scene 26: Over 90 minutes, absorbing 400 braking stops...
scenes.push({
  id: sId(25),
  kind: "stat",
  value: 400,
  suffix: " stops",
  label: "high-force decelerations per 90-minute match",
  highlight: "400",
  icon: "cross",
  mascot: { pose: "hold_back" },
  narration: rawParagraphs[25].narration
});

// Scene 27: Think of the brake pads on a race car...
scenes.push({
  id: sId(26),
  kind: "slam",
  text: "Brake pads to bare metal",
  highlight: "metal",
  style: "dark",
  icon: "fire",
  sub: "Fuel in tank · Brakes shot",
  subAt: "@fuel",
  narration: rawParagraphs[26].narration
});

// Scene 28: To build indestructible brake pads, train tempo Eccentric Box Step-Downs...
scenes.push({
  id: sId(27),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "lunge", at: "@lower" }
  ],
  headline: { text: "Box Step-Downs", highlight: "Downs", at: "@tempo", side: "left" },
  callouts: [{ label: "3–4s Descent", target: "rKnee", at: "@lower" }],
  narration: rawParagraphs[27].narration
});

// Scene 29: Do 3 sets of 8 to 10 reps per leg twice a week...
scenes.push({
  id: sId(28),
  kind: "list",
  title: "Step-Down Protocol",
  mascot: { pose: "present" },
  items: [
    { text: "3 sets × 8–10 reps per leg", icon: "target" },
    { text: "2 sessions per week", icon: "clock" },
    { text: "Wall sits if knees hurt", icon: "check" }
  ],
  narration: rawParagraphs[28].narration
});

// Scene 30: Pair this with Loaded Deficit Calf Raises...
scenes.push({
  id: sId(29),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "calf_raise", at: 0 },
    { pose: "stand", at: "@lowering" }
  ],
  headline: { text: "Deficit Calf Raises", highlight: "Calf", at: "@deficit", side: "right" },
  callouts: [{ label: "3s Lowering", target: "rCalf", at: "@lowering" }],
  narration: rawParagraphs[29].narration
});

// Scene 31: Do 3 sets of 12 to 15 reps to protect your Achilles tendons...
scenes.push({
  id: sId(30),
  kind: "list",
  title: "Achilles Durability",
  mascot: { pose: "point_up" },
  items: [
    { text: "Start flat ground two legs", icon: "check" },
    { text: "Progress to single-leg deficit", icon: "target" },
    { text: "3 sets × 12–15 reps", icon: "stopwatch" }
  ],
  narration: rawParagraphs[30].narration
});

// Scene 32: Chapter "Pillar 3: Tactical energy conservation" - Here is a shocking stat...
scenes.push({
  id: sId(31),
  kind: "title",
  chapter: "Pillar 3: Tactical energy conservation",
  number: 3,
  heading: "Tactical conservation",
  sub: "Positional geometry & the reset lob",
  mascot: { pose: "point_up", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[31].narration
});

// Scene 33: Amateur players waste up to 30 percent of their court movement...
scenes.push({
  id: sId(32),
  kind: "stat",
  value: 30,
  suffix: "%",
  label: "court movement wasted in no-man's land",
  highlight: "30 percent",
  icon: "cross",
  mascot: { pose: "shrug" },
  narration: rawParagraphs[32].narration
});

// Scene 34: Elite stamina is about positional geometry.
scenes.push({
  id: sId(33),
  kind: "slam",
  text: "Positional geometry",
  highlight: "geometry",
  style: "brand",
  icon: "target",
  sub: "Run less · Anticipate more",
  narration: rawParagraphs[33].narration
});

// Scene 35: First, anchor your base in the defensive sweet spot...
scenes.push({
  id: sId(34),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@defensive" }
  ],
  props: { r: "padel" },
  headline: { text: "The Sweet Spot", highlight: "Sweet", at: "@defensive", side: "right" },
  callouts: [
    { label: "0.8m Behind Line", target: "rFoot", at: "@service" },
    { label: "1m Inside Wall", target: "lFoot", at: "@glass" }
  ],
  narration: rawParagraphs[34].narration
});

// Scene 36: From this home base, you can cover the vast majority of opponent attacking balls...
scenes.push({
  id: sId(35),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@cover" }
  ],
  props: { r: "padel" },
  headline: { text: "One Or Two Steps", highlight: "Steps", at: 0, side: "right" },
  narration: rawParagraphs[35].narration
});

// Scene 37: Second, move with your partner as a synchronized unit...
scenes.push({
  id: sId(36),
  kind: "slam",
  text: "The 3-meter string",
  highlight: "String",
  style: "brand",
  icon: "target",
  sub: "Synchronized Partner Unit",
  subAt: "@synchronized",
  narration: rawParagraphs[36].narration
});

// Scene 38: When your partner slides wide to dig out a corner ball...
scenes.push({
  id: sId(37),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "ready", at: "@middle" }
  ],
  props: { r: "padel" },
  headline: { text: "Cut Wasted Sprints", highlight: "Sprints", at: "@channel", side: "right" },
  narration: rawParagraphs[37].narration
});

// Scene 39: Third, when you are under suffocating pressure...
scenes.push({
  id: sId(38),
  kind: "slam",
  text: "The parachute lob",
  highlight: "Parachute",
  style: "dark",
  icon: "trophy",
  sub: "In-Point Biological Timeout",
  narration: rawParagraphs[38].narration
});

// Scene 40: A properly lofted lob reaches 5 to 8 meters high...
scenes.push({
  id: sId(39),
  kind: "stat",
  value: 4,
  suffix: "s",
  label: "hang time created by a 5 to 8 meter lob",
  highlight: "4.5 seconds",
  icon: "stopwatch",
  mascot: { pose: "present" },
  narration: rawParagraphs[39].narration
});

// Scene 41: Those 4 seconds act like an aerial parachute...
scenes.push({
  id: sId(40),
  kind: "versus",
  left: { label: "You", pose: "walk_a", props: { r: "padel" }, sub: "calm in-point recovery" },
  right: { label: "Opponents", pose: "run_b", props: { r: "padel" }, sub: "sprinting 7m back" },
  vs: "VS",
  narration: rawParagraphs[40].narration
});

// Scene 42: Practice the 4-Second Lob drill...
scenes.push({
  id: sId(41),
  kind: "list",
  title: "4-Second Lob Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Scoop deep lobs off back glass", icon: "target" },
    { text: "Partner times airtime with watch", icon: "stopwatch" },
    { text: "Target ≥3.5s hang time", icon: "check" }
  ],
  narration: rawParagraphs[41].narration
});

// Scene 43: Chapter "Pillar 4: The 15-second between-point reset" - The official rules of padel...
scenes.push({
  id: sId(42),
  kind: "title",
  chapter: "Pillar 4: The 15-second between-point reset",
  number: 4,
  heading: "The between-point reset",
  sub: "Vagus nerve activation in 15 seconds",
  mascot: { pose: "ready" },
  transition: "push",
  narration: rawParagraphs[42].narration
});

// Scene 44: How you spend those 20 seconds determines...
scenes.push({
  id: sId(43),
  kind: "slam",
  text: "20-second window",
  highlight: "window",
  style: "dark",
  icon: "clock",
  sub: "Redline vs Recovery",
  narration: rawParagraphs[43].narration
});

// Scene 45: When amateurs finish a hard rally, they drop their head...
scenes.push({
  id: sId(44),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "hands_knees", at: 0 },
    { pose: "tired_front", at: "@mouth" }
  ],
  headline: { text: "The Gasping Rush", highlight: "Rush", at: "@head", side: "right" },
  narration: rawParagraphs[44].narration
});

// Scene 46: Rapid mouth panting prolongs sympathetic fight-or-flight adrenaline...
scenes.push({
  id: sId(45),
  kind: "stat",
  value: 175,
  suffix: "+ bpm",
  label: "heart rate maintained during mouth panting",
  highlight: "175",
  icon: "heart",
  mascot: { pose: "flinch" },
  narration: rawParagraphs[45].narration
});

// Scene 47: Elite competitors use a structured 15-second pit stop routine...
scenes.push({
  id: sId(46),
  kind: "slam",
  text: "The F1 pit stop",
  highlight: "Pit stop",
  style: "brand",
  icon: "bolt",
  sub: "15-Second Vagal Reset",
  narration: rawParagraphs[46].narration
});

// Scene 48: In the first 3 seconds after the point...
scenes.push({
  id: sId(47),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "stand", at: "@drop" }
  ],
  props: { r: "padel" },
  headline: { text: "Disengage The Rally", highlight: "Disengage", at: 0, side: "right" },
  narration: rawParagraphs[47].narration
});

// Scene 49: From second 4 to 12, stand tall with hands on hips...
scenes.push({
  id: sId(48),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "hands_hips", at: 0 },
    { pose: "stand", at: "@exhale" }
  ],
  headline: { text: "4 In · 6 Out", highlight: "Out", at: "@inhale", side: "right" },
  callouts: [
    { label: "Nasal Inhale (4s)", target: "head", at: "@nose" },
    { label: "Smooth Exhale (6s)", target: "chest", at: "@exhale" }
  ],
  narration: rawParagraphs[48].narration
});

// Scene 50: Just two cycles of slow breathing activate your parasympathetic brake...
scenes.push({
  id: sId(49),
  kind: "mascot",
  background: "court",
  mascot: { x: 480 },
  poses: [
    { pose: "stand", at: 0 },
    { pose: "padel_ready", at: "@rapidly" }
  ],
  props: { r: "padel" },
  headline: { text: "Pulse Drops Fast", highlight: "Drops", at: "@parasympathetic", side: "right" },
  gauges: [{ label: "Heart Rate", icon: "heart", from: 90, to: 55, at: "@rapidly" }],
  narration: rawParagraphs[49].narration
});

// Scene 51: In the final 5 seconds, turn back to the court...
scenes.push({
  id: sId(50),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@cue" }
  ],
  props: { r: "padel" },
  headline: { text: "Tactical Cue", highlight: "Cue", at: "@partner", side: "right" },
  narration: rawParagraphs[50].narration
});

// Scene 52: Never rush to serve when your heart is pounding...
scenes.push({
  id: sId(51),
  kind: "slam",
  text: "Never rush to serve",
  highlight: "Never",
  style: "dark",
  icon: "cross",
  sub: "Use 12–15 seconds every point",
  narration: rawParagraphs[51].narration
});

// Scene 53: Chapter "The weekly padel stamina blueprint" - To lock this stamina framework...
scenes.push({
  id: sId(52),
  kind: "title",
  chapter: "The weekly padel stamina blueprint",
  number: 5,
  heading: "Padel stamina blueprint",
  sub: "3-day weekly protocol",
  mascot: { pose: "point_up" },
  transition: "push",
  narration: rawParagraphs[52].narration
});

// Scene 54: On Tuesday, complete your 25-minute Court Shuttle session...
scenes.push({
  id: sId(53),
  kind: "list",
  title: "Tuesday: Court Shuttles",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "25 minutes total session", icon: "clock" },
    { text: "2 blocks of 8 reps", icon: "target" },
    { text: "10s sprint / 20s recovery", icon: "bolt" }
  ],
  narration: rawParagraphs[53].narration
});

// Scene 55: On Thursday, dedicate 35 minutes to Eccentric Strength...
scenes.push({
  id: sId(54),
  kind: "list",
  title: "Thursday: Eccentric Strength",
  mascot: { pose: "present" },
  items: [
    { text: "35 minutes total session", icon: "clock" },
    { text: "Tempo Box Step-Downs", icon: "target" },
    { text: "Loaded Deficit Calf Raises", icon: "bolt" }
  ],
  narration: rawParagraphs[54].narration
});

// Scene 56: On Saturday, take the court for match play...
scenes.push({
  id: sId(55),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@sweet" }
  ],
  props: { r: "padel" },
  headline: { text: "Saturday: Match Day", highlight: "Match", at: "@match", side: "right" },
  narration: rawParagraphs[55].narration
});

// Scene 57: Always complete an 8-minute dynamic warm-up...
scenes.push({
  id: sId(56),
  kind: "list",
  title: "8-Minute Warm-Up",
  mascot: { pose: "present" },
  items: [
    { text: "Lateral shuffles & lunges", icon: "target" },
    { text: "Submaximal braking stops", icon: "bolt" },
    { text: "Reposition feet, don't twist", icon: "check" }
  ],
  narration: rawParagraphs[56].narration
});

// Scene 58: Remember hydration: covered glass courts create greenhouse humidity...
scenes.push({
  id: sId(57),
  kind: "stat",
  value: 1.5,
  decimals: 1,
  suffix: " L/h",
  label: "sweat rate in covered glass courts",
  highlight: "1.5 liters",
  icon: "water",
  mascot: { pose: "drink", props: { r: "bottle" } },
  narration: rawParagraphs[57].narration
});

// Scene 59: If you ever feel a sudden sharp snap or kick in the back of your heel...
scenes.push({
  id: sId(58),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "hold_back", at: "@heel" }
  ],
  headline: { text: "Achilles Red Flag", highlight: "Red Flag", at: "@heel", side: "right" },
  callouts: [{ label: "Emergency Evaluation", target: "rAchilles", at: "@heel" }],
  narration: rawParagraphs[58].narration
});

// Scene 60: Chapter "Close" - Never getting tired in padel is not about running endless road miles.
scenes.push({
  id: sId(59),
  kind: "slam",
  chapter: "Close",
  text: "Train the 4 engines",
  highlight: "engines",
  style: "brand",
  icon: "trophy",
  sub: "Not endless road miles",
  narration: rawParagraphs[59].narration
});

// Scene 61: Recharge your explosive battery, bulletproof your eccentric brake pads...
scenes.push({
  id: sId(60),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "celebrate", at: "@reset" }
  ],
  props: { r: "padel" },
  headline: { text: "Padel Stamina Blueprint", highlight: "Blueprint", at: 0, side: "right" },
  narration: rawParagraphs[60].narration
});

const storyboard = {
  title: "How to never get tired in padel",
  voice: "am_michael",
  thumbnail: {
    pose: "hands_knees",
    props: {},
    background: "court",
    headline: "NEVER GET TIRED",
    highlight: "TIRED",
    icons: [{ icon: "battery", level: 0.1, pos: [960, 260], size: 1.3 }],
    opponent: { pose: "celebrate", props: { r: "padel" } },
    side: "right"
  },
  youtube: {
    title: "How to never get tired in padel",
    titleOptions: [
      "Why you gas out in padel (and how to fix it)",
      "The 4 engines of padel endurance"
    ],
    description: "Wondering why your legs feel like lead in the third set of padel even if you run 5ks? Here is the sports science behind padel stamina — eccentric deceleration debt, repeated sprint ability, and the 4-second recovery lob.",
    tags: [
      "padel",
      "padel tennis",
      "padel stamina",
      "padel endurance",
      "padel fitness",
      "how to never get tired in padel",
      "padel conditioning",
      "padel lob",
      "padel footwork",
      "coach ember"
    ]
  },
  scenes
};

fs.writeFileSync(path.join(EP_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2), "utf8");
console.log(`Wrote storyboard.json with ${scenes.length} scenes.`);
