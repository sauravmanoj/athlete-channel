import fs from "node:fs";
import path from "node:path";

const EP_DIR = "episodes/5-mistakes-killing-your-padel-defense";
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

// Scene 01 (Hook): Imagine standing at the back of a padel court...
scenes.push({
  id: sId(0),
  kind: "mascot",
  chapter: "Hook",
  background: "court",
  poses: [
    { pose: "hands_knees", at: 0 },
    { pose: "tired_front", at: "@pinned" }
  ],
  props: {},
  headline: { text: "Pinned on Defense", highlight: "Pinned", at: "@pinned", side: "right" },
  gauges: [{ label: "Pressure", icon: "bolt", from: 20, to: 95, at: "@pinned" }],
  narration: rawParagraphs[0].narration
});

// Scene 02: Every ball feels like a blur, your racket clips the wall...
scenes.push({
  id: sId(1),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "block", at: 0 },
    { pose: "flinch", at: "@clips" }
  ],
  props: { r: "padel" },
  headline: { text: "Zero Reaction Time", highlight: "Zero", at: "@blur", side: "right" },
  narration: rawParagraphs[1].narration
});

// Scene 03: Today, I will show you the 5 mistakes...
scenes.push({
  id: sId(2),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@show" }
  ],
  props: { r: "padel" },
  headline: { text: "5 Defensive Keys", highlight: "Defensive", at: "@show", side: "right" },
  icons: [{ icon: "target", near: "rHand", offset: [40, -60], at: "@show" }],
  narration: rawParagraphs[2].narration
});

// Scene 04: Chapter "The five defensive traps" - In padel, over 80 percent...
scenes.push({
  id: sId(3),
  kind: "stat",
  chapter: "The five defensive traps",
  value: 80,
  suffix: "%+",
  label: "of points won by the team at the net",
  highlight: "net",
  icon: "trophy",
  mascot: { pose: "present" },
  narration: rawParagraphs[3].narration
});

// Scene 05: Defending is not about surviving indefinitely at the baseline.
scenes.push({
  id: sId(4),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "arms_crossed", at: "@surviving" }
  ],
  headline: { text: "The Baseline Trap", highlight: "Trap", at: "@Defending", side: "right" },
  icons: [{ icon: "cross", near: "head", offset: [80, -90], at: "@surviving" }],
  narration: rawParagraphs[4].narration
});

// Scene 06: Defense has one goal: neutralize the attack...
scenes.push({
  id: sId(5),
  kind: "slam",
  text: "Evict the net",
  highlight: "Evict",
  style: "dark",
  icon: "fire",
  sub: "Neutralize · Displace · Counter",
  narration: rawParagraphs[5].narration
});

// Scene 07: Most players fail because they bring habits from tennis, squash, or pickleball...
scenes.push({
  id: sId(6),
  kind: "lineup",
  title: "Racket sport habits in padel",
  highlight: 3,
  dimPrevious: true,
  members: [
    { pose: "serve", label: "Tennis", sub: "big backswing", at: "@tennis" },
    { pose: "lunge", label: "Squash", sub: "corner flick", at: "@squash" },
    { pose: "dink", props: { r: "pbpaddle" }, label: "Pickleball", sub: "kitchen dink", at: "@pickleball" },
    { pose: "padel_ready", props: { r: "padel" }, label: "Padel", sub: "glass reads", at: "@glass" }
  ],
  narration: rawParagraphs[6].narration
});

// Scene 08: Here are the 5 traps keeping you locked at the back.
scenes.push({
  id: sId(7),
  kind: "list",
  title: "The 5 defensive traps",
  mascot: { pose: "point_up" },
  items: [
    { text: "Late corner turns", icon: "cross" },
    { text: "Hugging back glass", icon: "cross" },
    { text: "Flat panic drives", icon: "cross" },
    { text: "Forgetting the chiquita", icon: "cross" },
    { text: "Center seam freeze", icon: "cross" }
  ],
  narration: rawParagraphs[7].narration
});

// Scene 09: Chapter "Mistake 1: Late corner turns" - The hardest place to defend...
scenes.push({
  id: sId(8),
  kind: "title",
  chapter: "Mistake 1: Late corner turns",
  number: 1,
  heading: "Late corner turns",
  sub: "The 90° corner trap",
  mascot: { pose: "padel_ready", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[8].narration
});

// Scene 10: When a ball enters this corner...
scenes.push({
  id: sId(9),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@double" }
  ],
  props: { r: "padel" },
  headline: { text: "Double Glass Rebound", highlight: "Double", at: "@double", side: "right" },
  narration: rawParagraphs[9].narration
});

// Scene 11: The fatal mistake is running straight into the corner...
scenes.push({
  id: sId(10),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "flinch", at: "@facing" }
  ],
  props: { r: "padel" },
  headline: { text: "Facing The Glass", highlight: "Facing", at: "@facing", side: "right" },
  icons: [{ icon: "cross", near: "head", offset: [80, -90], at: "@fatal" }],
  narration: rawParagraphs[10].narration
});

// Scene 12: By then, the ball bounces off the second wall directly into your hip...
scenes.push({
  id: sId(11),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "crouch", at: "@hip" }
  ],
  props: { r: "padel" },
  headline: { text: "Pinned With Zero Room", highlight: "Zero", at: "@pinning", side: "right" },
  callouts: [{ label: "Crowded Hip", target: "hips", at: "@hip" }],
  narration: rawParagraphs[11].narration
});

// Scene 13: Trying to pivot on high-traction turf with your foot planted twists your knee...
scenes.push({
  id: sId(12),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "hold_back", at: 0 },
    { pose: "calf_pain", at: "@meniscus" }
  ],
  headline: { text: "Rotational Knee Shear", highlight: "Knee", at: "@knee", side: "right" },
  callouts: [
    { label: "Plant Foot", target: "rFoot", at: "@planted" },
    { label: "Meniscus Shear", target: "rKnee", at: "@meniscus" }
  ],
  narration: rawParagraphs[12].narration
});

// Scene 14: To fix this, read which glass the ball strikes first.
scenes.push({
  id: sId(13),
  kind: "slam",
  text: "Read first glass",
  highlight: "Read",
  style: "brand",
  icon: "target",
  sub: "Side Wall vs Back Glass",
  narration: rawParagraphs[13].narration
});

// Scene 15: If the ball hits the side wall first, that is an opening double.
scenes.push({
  id: sId(14),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@opening" }
  ],
  props: { r: "padel" },
  headline: { text: "Opening Double Wall", highlight: "Opening", at: "@opening", side: "right" },
  caption: { text: "Side Glass Hits First", at: 0.3 },
  narration: rawParagraphs[14].narration
});

// Scene 16: Open the door immediately: take a mini split-step...
scenes.push({
  id: sId(15),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "short_back", at: "@pivot" },
    { pose: "soft_hit", at: "@clearance" }
  ],
  props: { r: "padel" },
  headline: { text: "Open The Door", highlight: "Door", at: "@door", side: "right" },
  callouts: [{ label: "180° Pivot", target: "hips", at: "@pivot" }],
  narration: rawParagraphs[15].narration
});

// Scene 17: Think of a revolving door...
scenes.push({
  id: sId(16),
  kind: "custom",
  file: "custom/corner_trajectories.html",
  narration: rawParagraphs[16].narration
});

// Scene 18: If the ball hits the back wall first, that is a closing double.
scenes.push({
  id: sId(17),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@closing" }
  ],
  props: { r: "padel" },
  headline: { text: "Closing Double Wall", highlight: "Closing", at: "@closing", side: "right" },
  caption: { text: "Back Glass Hits First", at: 0.3 },
  narration: rawParagraphs[17].narration
});

// Scene 19: Do not spin in circles here.
scenes.push({
  id: sId(18),
  kind: "slam",
  text: "Do not spin",
  highlight: "not",
  style: "dark",
  icon: "cross",
  sub: "Stay Square · Step Forward",
  narration: rawParagraphs[18].narration
});

// Scene 20: Keep your chest facing the side wall, take two small steps forward...
scenes.push({
  id: sId(19),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@forward" }
  ],
  props: { r: "padel" },
  headline: { text: "Step Forward", highlight: "Forward", at: "@forward", side: "right" },
  narration: rawParagraphs[19].narration
});

// Scene 21: Train this with the Open-the-Door drill...
scenes.push({
  id: sId(20),
  kind: "list",
  title: "Open-The-Door Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Feeder plays side-first", icon: "target", at: "@feed" },
    { text: "4 sets of 10 balls", icon: "stopwatch", at: "@sets" },
    { text: "Start at gentle pace", icon: "check", at: "@gentle" }
  ],
  narration: rawParagraphs[20].narration
});

// Scene 22: Pivot on the balls of your feet with soft knees...
scenes.push({
  id: sId(21),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "drive_finish", at: "@guiding" }
  ],
  props: { r: "padel" },
  headline: { text: "Down The Line", highlight: "Line", at: "@Pivot", side: "right" },
  callouts: [{ label: "Soft Knees", target: "rKnee", at: "@soft" }],
  narration: rawParagraphs[21].narration
});

// Scene 23: Chapter "Mistake 2: Hugging the back glass" - When heavy smashes rain down...
scenes.push({
  id: sId(22),
  kind: "title",
  chapter: "Mistake 2: Hugging the back glass",
  number: 2,
  heading: "Hugging the back glass",
  sub: "The safety illusion",
  mascot: { pose: "crouch" },
  transition: "push",
  narration: rawParagraphs[22].narration
});

// Scene 24: This is called the safety illusion.
scenes.push({
  id: sId(23),
  kind: "slam",
  text: "The safety illusion",
  highlight: "Safety",
  style: "dark",
  icon: "brain",
  sub: "Distance does not mean safety",
  narration: rawParagraphs[23].narration
});

// Scene 25: You think standing farther away gives you more time...
scenes.push({
  id: sId(24),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "think", at: "@destroys" }
  ],
  headline: { text: "False Security", highlight: "False", at: "@destroys", side: "right" },
  narration: rawParagraphs[24].narration
});

// Scene 26: First, you have zero backswing room...
// Set side: "left" to prevent callout badge collision
scenes.push({
  id: sId(25),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "flinch", at: "@smacks" }
  ],
  props: { r: "padel" },
  headline: { text: "Zero Backswing", highlight: "Zero", at: "@zero", side: "left" },
  callouts: [{ label: "Glass Collision", target: "rHand", at: "@smacks" }],
  narration: rawParagraphs[25].narration
});

// Scene 27: Second, tempered glass rebounds about 70 percent of incoming speed...
scenes.push({
  id: sId(26),
  kind: "stat",
  value: 70,
  suffix: "%",
  label: "incoming speed rebounded by tempered glass",
  highlight: "70 percent",
  icon: "bolt",
  mascot: { pose: "present" },
  narration: rawParagraphs[26].narration
});

// Scene 28: If you are standing against the wall...
scenes.push({
  id: sId(27),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "flinch", at: "@behind" }
  ],
  props: { r: "padel" },
  headline: { text: "Trapped Behind", highlight: "Trapped", at: "@behind", side: "right" },
  narration: rawParagraphs[27].narration
});

// Scene 29: Third, standing against the wall creates a massive 7-meter empty desert...
scenes.push({
  id: sId(28),
  kind: "stat",
  value: 7,
  suffix: "m",
  label: "unprotected desert between baseline and net",
  highlight: "7-meter",
  icon: "target",
  mascot: { pose: "shrug" },
  narration: rawParagraphs[28].narration
});

// Scene 30: The fix is anchoring yourself in the defensive sweet spot...
scenes.push({
  id: sId(29),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@sweet" }
  ],
  props: { r: "padel" },
  headline: { text: "The Sweet Spot", highlight: "Sweet", at: "@sweet", side: "right" },
  callouts: [
    { label: "0.8m Behind Line", target: "rFoot", at: "@service" },
    { label: "1m From Side", target: "lFoot", at: "@side" }
  ],
  narration: rawParagraphs[29].narration
});

// Scene 31: Standing here is like a soccer goalkeeper...
scenes.push({
  id: sId(30),
  kind: "versus",
  left: { label: "Goalkeeper", pose: "ready", sub: "cuts angles off line" },
  right: { label: "Padel Defender", pose: "padel_ready", props: { r: "padel" }, sub: "anchored in sweet spot" },
  vs: "VS",
  narration: rawParagraphs[30].narration
});

// Scene 32: When a short ball comes, step forward across the line.
scenes.push({
  id: sId(31),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "lunge", at: "@step" }
  ],
  props: { r: "padel" },
  headline: { text: "Attack Short Balls", highlight: "Short", at: "@short", side: "right" },
  narration: rawParagraphs[31].narration
});

// Scene 33: When a deep ball comes, track backward with crossover steps...
scenes.push({
  id: sId(32),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "ready", at: "@track" }
  ],
  props: { r: "padel" },
  headline: { text: "Track Backward", highlight: "Backward", at: "@backward", side: "right" },
  narration: rawParagraphs[32].narration
});

// Scene 34: Strike it at waist height as it rebounds forward into the court.
scenes.push({
  id: sId(33),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "soft_hit", at: "@waist" }
  ],
  props: { r: "padel" },
  headline: { text: "Waist-Height Strike", highlight: "Strike", at: "@Strike", side: "right" },
  callouts: [{ label: "Rebound Hit", target: "rHand", at: "@waist" }],
  narration: rawParagraphs[33].narration
});

// Scene 35: Train this with the Service-Line Tether drill...
scenes.push({
  id: sId(34),
  kind: "list",
  title: "Service-Line Tether Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Mark cones 0.8m behind line", icon: "target", at: "@cones" },
    { text: "Sweet spot home base", icon: "bolt", at: "@sweet" },
    { text: "Anchor behind service line", icon: "stopwatch", at: "@service" }
  ],
  narration: rawParagraphs[34].narration
});

// Scene 36: Have a feeder alternate between a short ball and a deep glass ball...
scenes.push({
  id: sId(35),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@short" }
  ],
  props: { r: "padel" },
  headline: { text: "4 Sets of 8", highlight: "Sets", at: "@feeder", side: "right" },
  narration: rawParagraphs[35].narration
});

// Scene 37: Strike the short ball, and glide backward using controlled crossover steps...
scenes.push({
  id: sId(36),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "soft_hit", at: 0 },
    { pose: "ready", at: "@glide" }
  ],
  props: { r: "padel" },
  headline: { text: "Reset To Cone", highlight: "Cone", at: "@Strike", side: "right" },
  narration: rawParagraphs[36].narration
});

// Scene 38: Track both ball and wall, letting the glass feed the rebound...
scenes.push({
  id: sId(37),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "drive_finish", at: "@strike" }
  ],
  props: { r: "padel" },
  headline: { text: "Strike Zone", highlight: "Zone", at: "@Track", side: "right" },
  narration: rawParagraphs[37].narration
});

// Scene 39: Chapter "Mistake 3: Blasting flat counter-punches" - When players are pinned deep...
scenes.push({
  id: sId(38),
  kind: "title",
  chapter: "Mistake 3: Blasting flat counter-punches",
  number: 3,
  heading: "Blasting flat counter-punches",
  sub: "The speed-up trap",
  mascot: { pose: "smash", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[38].narration
});

// Scene 40: This is the single most self-destructive shot in padel.
scenes.push({
  id: sId(39),
  kind: "slam",
  text: "The speed-up trap",
  highlight: "Trap",
  style: "dark",
  icon: "cross",
  sub: "Panic pace kills defense",
  narration: rawParagraphs[39].narration
});

// Scene 41: At 7 meters away, net players hold solid composite rackets with no strings.
scenes.push({
  id: sId(40),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "block", at: "@solid" }
  ],
  props: { r: "padel" },
  headline: { text: "Solid Composite Face", highlight: "Solid", at: "@solid", side: "left" },
  callouts: [{ label: "No Strings", target: "rHand", at: "@composite" }],
  narration: rawParagraphs[40].narration
});

// Scene 42: A hard flat shot hits their racket and rebounds with devastating pace...
scenes.push({
  id: sId(41),
  kind: "versus",
  left: { label: "Flat Drive", pose: "drive_finish", props: { r: "padel" }, sub: "high incoming pace" },
  right: { label: "Reflex Block", pose: "block", props: { r: "padel" }, sub: "effortless redirection" },
  vs: "VS",
  narration: rawParagraphs[41].narration
});

// Scene 43: Attempting flat speed-ups from deep court increases your unforced errors by over 4-fold.
scenes.push({
  id: sId(42),
  kind: "stat",
  value: 4,
  suffix: "x",
  label: "increase in unforced errors from baseline speed-ups",
  highlight: "4-fold",
  icon: "cross",
  mascot: { pose: "shrug" },
  narration: rawParagraphs[42].narration
});

// Scene 44: Firing hard at net players is like throwing rocks at a tank...
scenes.push({
  id: sId(43),
  kind: "slam",
  text: "Don't feed the tank",
  highlight: "tank",
  style: "dark",
  icon: "fire",
  sub: "Pace gives net attackers winners",
  narration: rawParagraphs[43].narration
});

// Scene 45: The true weapon of padel defense is the high reset lob.
scenes.push({
  id: sId(44),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@reset" }
  ],
  props: { r: "padel" },
  headline: { text: "The Reset Lob", highlight: "Reset", at: "@reset", side: "right" },
  icons: [{ icon: "trophy", near: "rHand", offset: [40, -60], at: "@weapon" }],
  narration: rawParagraphs[44].narration
});

// Scene 46: In professional padel, players choose the lob in over 60 percent...
scenes.push({
  id: sId(45),
  kind: "chart",
  title: "Defensive transition efficacy",
  unit: "%",
  focus: 0,
  mascot: { pose: "present" },
  bars: [
    { label: "High Reset Lob", value: 66, display: "66%", color: "#10B981" },
    { label: "Baseline Drive", value: 47, display: "47%", color: "#EF4444" }
  ],
  narration: rawParagraphs[45].narration
});

// Scene 47: A proper defensive lob arches 5 to 8 meters into the air...
scenes.push({
  id: sId(46),
  kind: "stat",
  value: 4,
  suffix: "s",
  label: "hang time created by a 5 to 8 meter lob",
  highlight: "4.5 seconds",
  icon: "stopwatch",
  mascot: { pose: "present" },
  narration: rawParagraphs[46].narration
});

// Scene 48: Those 4 seconds break opponents' rhythm, force both volleyers to sprint 7 meters backward...
scenes.push({
  id: sId(47),
  kind: "versus",
  left: { label: "Defenders", pose: "walk_a", props: { r: "padel" }, sub: "marching to the net" },
  right: { label: "Attackers", pose: "run_b", props: { r: "padel" }, sub: "sprinting 7m back" },
  vs: "VS",
  narration: rawParagraphs[47].narration
});

// Scene 49: To hit it, bend your knees, open your paddle face 25 degrees...
scenes.push({
  id: sId(48),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "lob_load", at: 0 },
    { pose: "lob", at: "@lift" }
  ],
  props: { r: "padel" },
  headline: { text: "Leg Drive Lift", highlight: "Leg", at: "@legs", side: "right" },
  callouts: [
    { label: "Bent Knees", target: "rKnee", at: "@knees" },
    { label: "Upward Lift", target: "chest", at: "@lift" }
  ],
  narration: rawParagraphs[48].narration
});

// Scene 50: Practice the Stopwatch Lob drill...
scenes.push({
  id: sId(49),
  kind: "list",
  title: "Stopwatch Lob Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Partner times ball in air", icon: "stopwatch", at: "@timing" },
    { text: "Baseline lob execution", icon: "clock", at: "@baseline" },
    { text: "Practice defensive lobs", icon: "target", at: "@partner" }
  ],
  narration: rawParagraphs[49].narration
});

// Scene 51: Do 4 sets of 10 repetitions, counting only lobs that hang for at least 3.5 seconds...
scenes.push({
  id: sId(50),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "celebrate", at: "@land" }
  ],
  props: { r: "padel" },
  headline: { text: "Deep Back Third", highlight: "Deep", at: "@land", side: "right" },
  icons: [{ icon: "check", near: "head", offset: [80, -90], at: "@third" }],
  narration: rawParagraphs[50].narration
});

// Scene 52: Chapter "Mistake 4: Forgetting the chiquita" - Sometimes opponents anticipate your lob...
scenes.push({
  id: sId(51),
  kind: "title",
  chapter: "Mistake 4: Forgetting the chiquita",
  number: 4,
  heading: "Forgetting the chiquita",
  sub: "The floor-level trap",
  mascot: { pose: "think" },
  transition: "push",
  narration: rawParagraphs[51].narration
});

// Scene 53: Or you play in an indoor club with a low ceiling...
scenes.push({
  id: sId(52),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@low" }
  ],
  props: { r: "padel" },
  headline: { text: "Low Indoor Ceilings", highlight: "Low", at: "@low", side: "right" },
  narration: rawParagraphs[52].narration
});

// Scene 54: When amateurs cannot lob, they usually hit a medium-pace drive...
scenes.push({
  id: sId(53),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "flinch", at: "@chest" }
  ],
  props: { r: "padel" },
  headline: { text: "Mid-Chest Sitter", highlight: "Sitter", at: "@medium", side: "right" },
  narration: rawParagraphs[53].narration
});

// Scene 55: This lets net players lean forward and punch an aggressive angle...
scenes.push({
  id: sId(54),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "hands_knees", at: "@punch" }
  ],
  props: {},
  headline: { text: "Punished By The Fence", highlight: "Fence", at: "@punch", side: "right" },
  narration: rawParagraphs[54].narration
});

// Scene 56: The secret weapon here is the chiquita...
scenes.push({
  id: sId(55),
  kind: "slam",
  text: "The chiquita",
  highlight: "chiquita",
  style: "brand",
  icon: "target",
  sub: "Spanish for 'The Little One'",
  narration: rawParagraphs[55].narration
});

// Scene 57: A chiquita is a slow, dipping slice that crosses inches over the net...
scenes.push({
  id: sId(56),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "soft_hit", at: "@dipping" }
  ],
  props: { r: "padel" },
  headline: { text: "Dipping Slice", highlight: "Dipping", at: "@dipping", side: "right" },
  narration: rawParagraphs[56].narration
});

// Scene 58: Padel net height is 0.88 meters at the center.
scenes.push({
  id: sId(57),
  kind: "stat",
  value: 0.88,
  decimals: 2,
  suffix: "m",
  label: "center net height threshold in padel",
  highlight: "0.88 meters",
  icon: "target",
  mascot: { pose: "present" },
  narration: rawParagraphs[57].narration
});

// Scene 59: If opponents contact the ball above the net...
scenes.push({
  id: sId(58),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "smash", at: "@spike" }
  ],
  props: { r: "padel" },
  headline: { text: "Above Net: Spiked", highlight: "Spiked", at: "@spike", side: "right" },
  caption: { text: "Offensive Downward Angle", at: 0.3 },
  narration: rawParagraphs[58].narration
});

// Scene 60: When your chiquita dips below net height, physics forces them to volley upward...
scenes.push({
  id: sId(59),
  kind: "versus",
  left: { label: "Above Net Tape", pose: "smash", props: { r: "padel" }, sub: "hit downward with power" },
  right: { label: "Below Net Tape", pose: "crouch", props: { r: "padel" }, sub: "forced to volley upward" },
  vs: "VS",
  narration: rawParagraphs[59].narration
});

// Scene 61: The instant they hit that floating upward ball...
scenes.push({
  id: sId(60),
  kind: "slam",
  text: "Defense into attack",
  highlight: "attack",
  style: "dark",
  icon: "bolt",
  sub: "The upward volley pop-up",
  narration: rawParagraphs[60].narration
});

// Scene 62: To execute it, cushion the ball with a compact slice backswing...
scenes.push({
  id: sId(61),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "soft_hit", at: "@cushion" }
  ],
  props: { r: "padel" },
  headline: { text: "Gentle Backspin", highlight: "Backspin", at: "@backspin", side: "right" },
  callouts: [{ label: "Compact Deceleration", target: "rHand", at: "@compact" }],
  narration: rawParagraphs[61].narration
});

// Scene 63: Most importantly, only advance once the ball visibly dips below net tape height.
scenes.push({
  id: sId(62),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@visibly" }
  ],
  props: { r: "padel" },
  headline: { text: "Confirm The Dip", highlight: "Confirm", at: "@visibly", side: "right" },
  narration: rawParagraphs[62].narration
});

// Scene 64: Take two quick steps forward into the transition zone...
// Set side: "left" to eliminate callout overlap
scenes.push({
  id: sId(63),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "padel_ready", at: "@split-step" },
    { pose: "drive_finish", at: "@pounce" }
  ],
  props: { r: "padel" },
  headline: { text: "Pounce And Put Away", highlight: "Pounce", at: "@pounce", side: "left" },
  callouts: [{ label: "Chest-High Paddle", target: "rHand", at: "@chest-high" }],
  narration: rawParagraphs[63].narration
});

// Scene 65: Train this with the Shoelace Drop drill...
scenes.push({
  id: sId(64),
  kind: "list",
  title: "Shoelace Drop Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Target hoops 1.5m past net", icon: "target", at: "@target" },
    { text: "Drop at opponents' feet", icon: "bolt", at: "@hoops" },
    { text: "Dipping below net height", icon: "stopwatch", at: "@net" }
  ],
  narration: rawParagraphs[64].narration
});

// Scene 66: Feed balls from the baseline, alternating between high reset lobs and soft dipping chiquitas...
scenes.push({
  id: sId(65),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "lob", at: 0 },
    { pose: "soft_hit", at: "@dipping" }
  ],
  props: { r: "padel" },
  headline: { text: "High Lob · Low Chiquita", highlight: "Chiquita", at: "@dipping", side: "right" },
  narration: rawParagraphs[65].narration
});

// Scene 67: Chapter "Mistake 5: The center ball freeze" - The padel court is 10 meters wide...
scenes.push({
  id: sId(66),
  kind: "title",
  chapter: "Mistake 5: The center ball freeze",
  number: 5,
  heading: "The center ball freeze",
  sub: "The 10-meter seam",
  mascot: { pose: "padel_ready", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[66].narration
});

// Scene 68: Amateur pairs either both freeze...
// Use "VS" to eliminate text collision across characters
scenes.push({
  id: sId(67),
  kind: "versus",
  left: { label: "Both Freeze", pose: "hands_knees", sub: "ball rolls off rear wall" },
  right: { label: "Both Clash", pose: "flinch", props: { r: "padel" }, sub: "rackets strike together" },
  vs: "VS",
  narration: rawParagraphs[67].narration
});

// Scene 69: Even worse, when one player gets pulled wide into a corner...
scenes.push({
  id: sId(68),
  kind: "stat",
  value: 4,
  suffix: "m",
  label: "open canyon down the middle when partner freezes",
  highlight: "4-meter",
  icon: "cross",
  mascot: { pose: "hands_knees" },
  narration: rawParagraphs[68].narration
});

// Scene 70: Spatial tracking shows that elite pairs move as a synchronized unit...
scenes.push({
  id: sId(69),
  kind: "slam",
  text: "The 3-meter string",
  highlight: "string",
  style: "brand",
  icon: "target",
  sub: "Synchronized Partner Spacing",
  narration: rawParagraphs[69].narration
});

// Scene 71: When your partner slides wide to the right corner, you must slide right...
scenes.push({
  id: sId(70),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "ready", at: "@slides" }
  ],
  props: { r: "padel" },
  headline: { text: "Seal The Seam", highlight: "Seal", at: "@slides", side: "right" },
  narration: rawParagraphs[70].narration
});

// Scene 72: Next, establish middle priority before the point begins.
scenes.push({
  id: sId(71),
  kind: "slam",
  text: "Establish priority",
  highlight: "priority",
  style: "dark",
  icon: "check",
  sub: "Before the point begins",
  narration: rawParagraphs[71].narration
});

// Scene 73: The default rule is forehand in the middle...
scenes.push({
  id: sId(72),
  kind: "versus",
  left: { label: "Left-Side Player", pose: "drive_finish", props: { r: "padel" }, sub: "forehand takes the middle" },
  right: { label: "Right-Side Player", pose: "padel_ready", props: { r: "padel" }, sub: "clears hitting corridor" },
  vs: "VS",
  narration: rawParagraphs[72].narration
});

// Scene 74: If you are playing cross-court, the player diagonally opposite the hitter covers the drive.
scenes.push({
  id: sId(73),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@cross-court" }
  ],
  props: { r: "padel" },
  headline: { text: "Cross-Court Rule", highlight: "Cross-Court", at: "@cross-court", side: "right" },
  narration: rawParagraphs[73].narration
});

// Scene 75: Above all, enforce the early call-or-yield rule: the moment the ball crosses the net tape, shout "Mine."
scenes.push({
  id: sId(74),
  kind: "slam",
  text: "Call early: Mine!",
  highlight: "Mine",
  style: "brand",
  icon: "bolt",
  sub: "Shout while ball is in the air",
  narration: rawParagraphs[74].narration
});

// Scene 76: If no call is heard, the secondary partner must immediately yield and clear the hitting corridor.
scenes.push({
  id: sId(75),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "stand", at: "@yield" }
  ],
  headline: { text: "Yield And Clear", highlight: "Yield", at: "@yield", side: "right" },
  narration: rawParagraphs[75].narration
});

// Scene 77: Calling early eliminates hesitation and lets your partner step aside to cover the next angle.
scenes.push({
  id: sId(76),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@early" }
  ],
  props: { r: "padel" },
  headline: { text: "Cover Next Angle", highlight: "Cover", at: "@early", side: "right" },
  narration: rawParagraphs[76].narration
});

// Scene 78: Practice the Center Calling drill: have a feeder fire rapid groundstrokes...
scenes.push({
  id: sId(77),
  kind: "list",
  title: "Center Calling Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Rapid feeds down center line", icon: "bolt", at: "@rapid" },
    { text: "Call 'Mine' before bounce", icon: "target", at: "@center" },
    { text: "4 sets of 12 balls", icon: "stopwatch", at: "@balls" }
  ],
  narration: rawParagraphs[77].narration
});

// Scene 79: Call "Mine" while the ball is airborne over the net, scoop a defensive lob...
scenes.push({
  id: sId(78),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "lob", at: "@scoop" }
  ],
  props: { r: "padel" },
  headline: { text: "Zero Collisions", highlight: "Zero", at: "@airborne", side: "right" },
  icons: [{ icon: "check", near: "head", offset: [80, -90], at: "@collision" }],
  narration: rawParagraphs[78].narration
});

// Scene 80: Chapter "The complete defensive blueprint" - To lock these 5 fixes into your muscle memory...
scenes.push({
  id: sId(79),
  kind: "title",
  chapter: "The complete defensive blueprint",
  number: 6,
  heading: "The defensive blueprint",
  sub: "Weekly training plan",
  mascot: { pose: "point_up" },
  transition: "push",
  narration: rawParagraphs[79].narration
});

// Scene 81: In session one, spend 15 minutes on corner glass reads...
scenes.push({
  id: sId(80),
  kind: "list",
  title: "Session 1: Corner Reads",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "15 minutes corner work", icon: "clock", at: "@15" },
    { text: "4 sets × 10 reps Open-the-Door", icon: "target", at: "@sets" },
    { text: "Side-first & back-first reads", icon: "check", at: "@rebounds" }
  ],
  narration: rawParagraphs[80].narration
});

// Scene 82: In session two, dedicate 15 minutes to transition mastery...
scenes.push({
  id: sId(81),
  kind: "list",
  title: "Session 2: Transition Mastery",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "15 minutes transition drills", icon: "clock", at: "@15" },
    { text: "4 sets × 10 Stopwatch Lobs", icon: "stopwatch", at: "@lobs" },
    { text: "4 sets × 8 Chiquita-and-Pounce", icon: "bolt", at: "@sequences" }
  ],
  narration: rawParagraphs[81].narration
});

// Scene 83: During match play, make the sweet spot your home base...
scenes.push({
  id: sId(82),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "padel_ready", at: "@home" }
  ],
  props: { r: "padel" },
  headline: { text: "Home Base", highlight: "Home", at: "@home", side: "right" },
  callouts: [{ label: "0.8m Behind Service Line", target: "rFoot", at: "@service" }],
  narration: rawParagraphs[82].narration
});

// Scene 84: Always complete an 8-minute warm-up with dynamic ankle calf lunges...
scenes.push({
  id: sId(83),
  kind: "list",
  title: "8-Minute Warm-Up Routine",
  mascot: { pose: "present" },
  items: [
    { text: "Dynamic ankle calf lunges", icon: "heart", at: "@ankle" },
    { text: "Lateral hip openers", icon: "target", at: "@hip" },
    { text: "Thoracic spine rotations", icon: "bolt", at: "@thoracic" }
  ],
  narration: rawParagraphs[83].narration
});

// Scene 85: If you feel sudden knee locking, sharp wrist shock after contact...
scenes.push({
  id: sId(84),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@physiotherapist" }
  ],
  headline: { text: "Safety First", highlight: "Safety", at: "@locking", side: "right" },
  callouts: [
    { label: "Knee Locking", target: "rKnee", at: "@locking" },
    { label: "Wrist Shock", target: "rHand", at: "@wrist" },
    { label: "Ankle Sprain", target: "rFoot", at: "@ankle" }
  ],
  narration: rawParagraphs[84].narration
});

// Scene 86: Chapter "Close" - Padel defense is not about panic, scrambling, or hitting harder.
scenes.push({
  id: sId(85),
  kind: "slam",
  chapter: "Close",
  text: "Master the glass",
  highlight: "glass",
  style: "brand",
  icon: "trophy",
  sub: "Turn defense into your greatest weapon",
  narration: rawParagraphs[85].narration
});

// Scene 87: Master the geometry of the glass, command the defensive sweet spot...
scenes.push({
  id: sId(86),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "celebrate", at: "@ally" }
  ],
  props: { r: "padel" },
  headline: { text: "See You On Court", highlight: "Court", at: "@Master", side: "right" },
  narration: rawParagraphs[86].narration
});

const storyboard = {
  title: "5 mistakes killing your padel defense",
  voice: "am_michael",
  thumbnail: {
    pose: "hands_knees",
    props: {},
    background: "court",
    headline: "FIX YOUR DEFENSE",
    highlight: "DEFENSE",
    icons: [{ icon: "cross", pos: [960, 260], size: 1.2 }],
    opponent: { pose: "smash", props: { r: "padel" } },
    side: "right"
  },
  youtube: {
    title: "5 mistakes killing your padel defense",
    titleOptions: [
      "How to defend off the glass in padel",
      "Stop losing points in padel defense"
    ],
    description: "Struggling to defend off the glass in padel? Here are the 5 biggest mistakes amateur players make on defense — and the exact court science to turn wall balls into counter-attacks.",
    tags: [
      "padel",
      "padel tennis",
      "padel defense",
      "padel tips",
      "padel tutorial",
      "padel court positioning",
      "padel glass",
      "padel lob",
      "chiquita padel",
      "coach ember"
    ]
  },
  scenes
};

fs.writeFileSync(path.join(EP_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2), "utf8");
console.log(`Wrote storyboard.json with ${scenes.length} scenes.`);
