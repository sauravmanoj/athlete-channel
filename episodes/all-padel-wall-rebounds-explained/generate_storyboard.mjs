import fs from "node:fs";
import path from "node:path";

const EP_DIR = "episodes/all-padel-wall-rebounds-explained";
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
// Chapter 1: Hook (p0 - p3)
// ==========================================

// s01: Imagine an opponent smashing deep into your corner, and instead of panicking, you smile.
scenes.push({
  id: sId(0),
  kind: "mascot",
  chapter: "Hook",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "celebrate", at: "@smile" }
  ],
  props: { r: "padel" },
  headline: { text: "No Corner Panic", highlight: "Panic", at: 0, side: "right" },
  narration: rawParagraphs[0].narration
});

// s02: You step sideways, let the ball pass you, and watch the glass slow that violent smash into an easy reset.
scenes.push({
  id: sId(1),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "soft_hit", at: "@reset" }
  ],
  props: { r: "padel" },
  headline: { text: "Let The Ball Pass", highlight: "Pass", at: 0, side: "right" },
  gauges: [{ label: "Ball Speed", icon: "fire", from: 90, to: 35, at: "@slow" }],
  narration: rawParagraphs[1].narration
});

// s03: Most amateurs treat the walls like an emergency hazard, scrambling frantically and getting pinned against the glass.
scenes.push({
  id: sId(2),
  kind: "versus",
  left: { label: "Amateur", pose: "hands_knees", sub: "pinned against wall" },
  right: { label: "Pro", pose: "padel_ready", props: { r: "padel" }, sub: "calm 1m spacing" },
  vs: "VS",
  narration: rawParagraphs[2].narration
});

// s04: Today, I will show you the physics and footwork rules of all four wall rebounds, turning the glass into your ultimate defensive weapon.
scenes.push({
  id: sId(3),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@physics" }
  ],
  props: { r: "padel" },
  headline: { text: "Wall Mastery", highlight: "Mastery", at: 0, side: "right" },
  icons: [{ icon: "target", near: "rHand", offset: [40, -60], at: "@physics" }],
  narration: rawParagraphs[3].narration
});

// ==========================================
// Chapter 2: The 4 rebound families (p4 - p10)
// ==========================================

// s05: In padel, the perimeter walls are not out-of-bounds boundaries; they are active playing surfaces governed by collision physics.
scenes.push({
  id: sId(4),
  kind: "title",
  chapter: "The 4 rebound families",
  number: 1,
  heading: "The 4 rebound families",
  sub: "Perimeter collision physics",
  mascot: { pose: "present", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[4].narration
});

// s06: Every rebound you will face belongs to one of four physical families.
scenes.push({
  id: sId(5),
  kind: "lineup",
  title: "The 4 Rebound Families",
  members: [
    { label: "Back Glass", pose: "padel_ready", props: { r: "padel" }, at: "@rebound" },
    { label: "Side Glass", pose: "soft_hit", props: { r: "padel" }, at: "@belongs" },
    { label: "Double Glass", pose: "bandeja_prep", props: { r: "padel" }, at: "@physical" },
    { label: "Wire Mesh", pose: "block", props: { r: "padel" }, at: "@families" }
  ],
  narration: rawParagraphs[5].narration
});

// s07: First is the Single Back Glass, where deep balls rebound forward into the court.
scenes.push({
  id: sId(6),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "padel_ready", at: "@court" }
  ],
  props: { r: "padel" },
  headline: { text: "1. Single Back Glass", highlight: "Back Glass", at: 0, side: "right" },
  narration: rawParagraphs[6].narration
});

// s08: Second is the Side Glass, where oblique angles compress your lateral hitting space.
scenes.push({
  id: sId(7),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "block", at: "@space" }
  ],
  props: { r: "padel" },
  headline: { text: "2. Side Glass Angles", highlight: "Side Glass", at: 0, side: "right" },
  narration: rawParagraphs[7].narration
});

// s09: Third is the Double Glass corner, where the ball strikes two walls and either opens into court or traps into your body.
scenes.push({
  id: sId(8),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "think", at: 0 },
    { pose: "bandeja_prep", at: "@body" }
  ],
  props: { r: "padel" },
  headline: { text: "3. Double Glass Corner", highlight: "Double Glass", at: 0, side: "right" },
  narration: rawParagraphs[8].narration
});

// s10: And fourth is the Metallic Wire Mesh, where compliant metal grids create dead, unpredictable deflections.
scenes.push({
  id: sId(9),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "crouch", at: "@dead" }
  ],
  props: { r: "padel" },
  headline: { text: "4. Metallic Wire Mesh", highlight: "Wire Mesh", at: 0, side: "right" },
  narration: rawParagraphs[9].narration
});

// s11: Master these four families, and you will never get jammed off the walls again.
scenes.push({
  id: sId(10),
  kind: "slam",
  text: "Never get jammed",
  highlight: "jammed",
  style: "brand",
  icon: "check",
  sub: "4 Physics-Based Solutions",
  narration: rawParagraphs[10].narration
});

// ==========================================
// Chapter 3: Rebound 1: Single back glass (p11 - p22)
// ==========================================

// s12: The single back glass is the foundation of all padel defense.
scenes.push({
  id: sId(11),
  kind: "title",
  chapter: "Rebound 1: Single back glass",
  number: 2,
  heading: "Single back glass",
  sub: "The baseline reset",
  mascot: { pose: "padel_ready", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[11].narration
});

// s13: When a ball crosses the service line, three meters from the back wall, amateurs panic and short-hop it off their shoes.
scenes.push({
  id: sId(12),
  kind: "stat",
  value: 3.0,
  decimals: 1,
  suffix: " m",
  label: "service line distance from back glass",
  highlight: "3.0 meters",
  icon: "target",
  mascot: { pose: "flinch" },
  narration: rawParagraphs[12].narration
});

// s14: Tempered glass follows specular reflection: the angle of reflection equals the angle of incidence.
scenes.push({
  id: sId(13),
  kind: "slam",
  text: "Specular reflection physics",
  highlight: "physics",
  style: "dark",
  icon: "target",
  sub: "Angle in equals angle out",
  subAt: "@equals",
  narration: rawParagraphs[13].narration
});

// s15: An eighty kilometer per hour smash loses thirty-five percent of its speed on the turf bounce and twenty-five percent on the glass.
scenes.push({
  id: sId(14),
  kind: "chart",
  title: "Speed Dissipation on Back Glass Impact",
  unit: "%",
  focus: 1,
  mascot: { pose: "present" },
  bars: [
    { label: "Incoming Smash", value: 100, display: "80 km/h", color: "#EF4444" },
    { label: "After Turf Bounce", value: 65, display: "-35%", color: "#F59E0B" },
    { label: "After Glass Rebound", value: 45, display: "-25%", color: "#10B981" }
  ],
  narration: rawParagraphs[14].narration
});

// s16: It floats forward at thirty to forty kilometers per hour, buying you zero point four to zero point seven seconds of extra reaction time.
scenes.push({
  id: sId(15),
  kind: "stat",
  value: 0.7,
  decimals: 1,
  suffix: " s",
  label: "extra reaction time bought by letting the ball hit glass",
  highlight: "0.7 seconds",
  icon: "stopwatch",
  mascot: { pose: "celebrate" },
  narration: rawParagraphs[15].narration
});

// s17: Think of throwing a rubber ball against a brick wall: stand against the brick and it hits your knuckles, but take two steps back and it drops gently into your open hands.
scenes.push({
  id: sId(16),
  kind: "versus",
  left: { label: "Hugging Wall", pose: "flinch", sub: "smashes knuckles" },
  right: { label: "Two Steps Back", pose: "padel_ready", props: { r: "padel" }, sub: "soft catch in hands" },
  vs: "VS",
  narration: rawParagraphs[16].narration
});

// s18: Execute a sideways unit turn as the ball crosses the net, turning your shoulders perpendicular to the back wall.
scenes.push({
  id: sId(17),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "short_back", at: "@shoulders" }
  ],
  props: { r: "padel" },
  headline: { text: "Sideways Unit Turn", highlight: "Unit Turn", at: 0, side: "right" },
  callouts: [{ label: "Turn Shoulders", target: "rShoulder", offset: [-120, -120], at: "@shoulders" }],
  narration: rawParagraphs[17].narration
});

// s19: Track backward, stop one to one-and-a-half meters in front of the glass, and let the ball pass your body line.
scenes.push({
  id: sId(18),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "walk_b", at: 0 },
    { pose: "padel_ready", at: "@body" }
  ],
  props: { r: "padel" },
  headline: { text: "1.0–1.5m Wall Buffer", highlight: "Buffer", at: 0, side: "right" },
  callouts: [{ label: "1.2m From Glass", target: "rFoot", at: "@meters" }],
  narration: rawParagraphs[18].narration
});

// s20: As it rebounds forward, transfer your weight and strike thirty to fifty centimeters ahead of your front hip.
scenes.push({
  id: sId(19),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "soft_hit", at: "@strike" }
  ],
  props: { r: "padel" },
  headline: { text: "Ahead Of Front Hip", highlight: "Hip", at: 0, side: "right" },
  callouts: [{ label: "Contact Point", target: "rHip", offset: [40, -10], at: "@strike" }],
  narration: rawParagraphs[19].narration
});

// s21: Train this with the Self-Drop Glass Feed: stand one-and-a-half meters from the glass, drop the ball into the wall, and drive the rebound into a target cone.
scenes.push({
  id: sId(20),
  kind: "list",
  title: "Self-Drop Glass Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Stand 1.5m from back glass", icon: "target" },
    { text: "Drop ball into wall", icon: "bolt" },
    { text: "Drive rebound down the line", icon: "check" }
  ],
  narration: rawParagraphs[20].narration
});

// s22: Do four sets of twelve reps twice a week on both forehand and backhand sides.
scenes.push({
  id: sId(21),
  kind: "stat",
  value: 4,
  suffix: " sets × 12",
  label: "weekly self-drop drill prescription",
  highlight: "4 sets",
  icon: "clock",
  mascot: { pose: "point_up" },
  narration: rawParagraphs[21].narration
});

// s23: The biggest mistake is hugging the glass: standing closer than one meter suffocates your arm and ruins your swing.
scenes.push({
  id: sId(22),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "facepalm", at: "@hugging" }
  ],
  headline: { text: "Never Hug The Glass", highlight: "Never", at: 0, side: "right" },
  icons: [{ icon: "cross", near: "head", offset: [80, -90], at: "@hugging" }],
  narration: rawParagraphs[22].narration
});

// ==========================================
// Chapter 4: Rebound 2: Side glass angles (p23 - p32)
// ==========================================

// s24: The side glass introduces oblique angles that violently compress your lateral hitting space.
scenes.push({
  id: sId(23),
  kind: "title",
  chapter: "Rebound 2: Side glass angles",
  number: 3,
  heading: "Side glass angles",
  sub: "Managing lateral compression",
  mascot: { pose: "short_back", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[23].narration
});

// s25: Side glass shots strike at acute angles between thirty and sixty degrees, sliding fast across the court width.
scenes.push({
  id: sId(24),
  kind: "slam",
  text: "Acute 30° to 60° angles",
  highlight: "Angles",
  style: "dark",
  icon: "target",
  sub: "Low Friction Side Slide",
  narration: rawParagraphs[24].narration
});

// s26: Amateurs chase the ball toward the side wall, getting their arm pinned directly against the glass.
scenes.push({
  id: sId(25),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_a", at: 0 },
    { pose: "flinch", at: "@pinned" }
  ],
  props: { r: "padel" },
  headline: { text: "The Pinned Arm Trap", highlight: "Pinned", at: 0, side: "left" },
  callouts: [{ label: "Pinned Elbow", target: "rElbow", offset: [-140, -80], at: "@pinned" }],
  narration: rawParagraphs[25].narration
});

// s27: Think of a highway exit ramp: steer into the guardrail and you crash, but stay centered in your lane and you follow the curve with total control.
scenes.push({
  id: sId(26),
  kind: "versus",
  left: { label: "Steer Into Rail", pose: "flinch", sub: "crashes and stops" },
  right: { label: "Stay In Lane", pose: "padel_ready", props: { r: "padel" }, sub: "smooth exit curve" },
  vs: "VS",
  narration: rawParagraphs[26].narration
});

// s28: Maintain an active one-meter buffer from the side wall and track the ball with a stable gaze.
scenes.push({
  id: sId(27),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "short_back", at: "@stable" }
  ],
  props: { r: "padel" },
  headline: { text: "1m Side Buffer", highlight: "Buffer", at: 0, side: "right" },
  callouts: [{ label: "1m Clearance", target: "lFoot", at: "@buffer" }],
  narration: rawParagraphs[27].narration
});

// s29: Stay toward the center, let the ball strike the side glass past your hip, and step into the open court as it rebounds across.
scenes.push({
  id: sId(28),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@step" }
  ],
  props: { r: "padel" },
  headline: { text: "Step Into Open Court", highlight: "Open Court", at: 0, side: "right" },
  narration: rawParagraphs[28].narration
});

// s30: Hit early to drive down the line, or let it travel twenty centimeters into center court to open a crosscourt lob.
scenes.push({
  id: sId(29),
  kind: "versus",
  left: { label: "Hit Early", pose: "soft_hit", props: { r: "padel" }, sub: "parallel down line" },
  right: { label: "Wait 20cm", pose: "lob", props: { r: "padel" }, sub: "high crosscourt lob" },
  vs: "VS",
  narration: rawParagraphs[29].narration
});

// s31: Train this with the Side Wall Spacing Drill: place three cones one-point-two meters parallel to the side glass.
scenes.push({
  id: sId(30),
  kind: "list",
  title: "Side Wall Spacing Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Row of 3 cones 1.2m from wall", icon: "target" },
    { text: "Stay strictly inside court boundary", icon: "check" },
    { text: "Let ball slide past hip", icon: "bolt" }
  ],
  narration: rawParagraphs[30].narration
});

// s32: Feed angled balls into the glass, stay inside the cones, and drive controlled crosscourt balls.
scenes.push({
  id: sId(31),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@crosscourt" }
  ],
  props: { r: "padel" },
  headline: { text: "Stay Inside Cones", highlight: "Cones", at: 0, side: "right" },
  narration: rawParagraphs[31].narration
});

// s33: Perform four sets of ten reps per side twice a week.
scenes.push({
  id: sId(32),
  kind: "stat",
  value: 4,
  suffix: " sets × 10",
  label: "weekly side glass drill prescription",
  highlight: "4 sets",
  icon: "clock",
  mascot: { pose: "celebrate" },
  narration: rawParagraphs[32].narration
});

// ==========================================
// Chapter 5: Rebound 3: Double glass (p33 - p49)
// ==========================================

// s34: The double glass corner is where amateur players experience total sensory overload.
scenes.push({
  id: sId(33),
  kind: "title",
  chapter: "Rebound 3: Double glass and the rotation trap",
  number: 4,
  heading: "Double glass corner",
  sub: "Abre vs. Cierra & El Giro",
  mascot: { pose: "think", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[33].narration
});

// s35: In the ninety-degree corner between the back and side glass, the ball strikes two walls consecutively.
scenes.push({
  id: sId(34),
  kind: "slam",
  text: "The 90° corner junction",
  highlight: "90°",
  style: "dark",
  icon: "target",
  sub: "Consecutive Two-Wall Impacts",
  narration: rawParagraphs[34].narration
});

// s36: Coaching science divides double glass into two distinct realities: Doble Pared Que Abre, and Doble Pared Que Cierra.
scenes.push({
  id: sId(35),
  kind: "custom",
  file: "custom/corner_geometry.html",
  narration: rawParagraphs[35].narration
});

// s37: Doble Pared Que Abre means the double wall opens: the ball hits the side glass first, then the back glass second, rebounding outward toward center court.
scenes.push({
  id: sId(36),
  kind: "list",
  title: "1. Doble Pared Que Abre",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "1st impact: Side glass", icon: "target" },
    { text: "2nd impact: Back glass", icon: "target" },
    { text: "Trajectory: Opens to center court", icon: "check" }
  ],
  narration: rawParagraphs[36].narration
});

// s38: This is the only double wall where you must rotate your body.
scenes.push({
  id: sId(37),
  kind: "slam",
  text: "The only wall you spin on",
  highlight: "spin",
  style: "brand",
  icon: "bolt",
  sub: "180° Body Rotation (El Giro)",
  narration: rawParagraphs[37].narration
});

// s39: Execute a smooth one-hundred-and-eighty-degree pivot on the balls of your feet, uncoiling your shoulders so your feet face the net as you strike.
scenes.push({
  id: sId(38),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "short_back", at: 0 },
    { pose: "bandeja_finish", at: "@pivot" }
  ],
  props: { r: "padel" },
  headline: { text: "180° Rotational Giro", highlight: "Giro", at: 0, side: "right" },
  callouts: [{ label: "Balls Of Feet", target: "rFoot", at: "@pivot" }],
  narration: rawParagraphs[38].narration
});

// s40: Think of a figure skater: rotate with the ball's orbit, and you emerge facing forward right as the ball presents itself.
scenes.push({
  id: sId(39),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "present", at: 0 },
    { pose: "celebrate", at: "@orbit" }
  ],
  props: { r: "padel" },
  headline: { text: "Rotate With Orbit", highlight: "Orbit", at: 0, side: "right" },
  narration: rawParagraphs[39].narration
});

// s41: Now look at Doble Pared Que Cierra: the double wall closes.
scenes.push({
  id: sId(40),
  kind: "slam",
  text: "Doble Pared Que Cierra",
  highlight: "Cierra",
  style: "dark",
  icon: "cross",
  sub: "The Closing Corner Trap",
  narration: rawParagraphs[40].narration
});

// s42: The ball hits the back glass first, then the side glass second, trapping inward toward your body.
scenes.push({
  id: sId(41),
  kind: "list",
  title: "2. Doble Pared Que Cierra",
  mascot: { pose: "point_up" },
  items: [
    { text: "1st impact: Back glass", icon: "target" },
    { text: "2nd impact: Side glass", icon: "target" },
    { text: "Trajectory: Traps inward into body", icon: "cross" }
  ],
  narration: rawParagraphs[41].narration
});

// s43: If you spin on a closing double wall, you turn your back to the net while the ball dies behind you, increasing unforced errors by over four hundred percent.
scenes.push({
  id: sId(42),
  kind: "stat",
  value: 400,
  suffix: "%",
  label: "increase in unforced errors when spinning on closing walls",
  highlight: "400%",
  icon: "fire",
  mascot: { pose: "facepalm" },
  narration: rawParagraphs[42].narration
});

// s44: On a closing double wall, do not spin.
scenes.push({
  id: sId(43),
  kind: "slam",
  text: "Do not spin",
  highlight: "not",
  style: "dark",
  icon: "cross",
  sub: "The #1 Amateur Mistake",
  narration: rawParagraphs[43].narration
});

// s45: Stay sideways, step forward into the court away from the corner, and let the ball bounce off the side glass directly into your strike zone.
scenes.push({
  id: sId(44),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "soft_hit", at: "@forward" }
  ],
  props: { r: "padel" },
  headline: { text: "Step Forward Into Court", highlight: "Forward", at: 0, side: "right" },
  callouts: [{ label: "Step Forward", target: "rKnee", at: "@forward" }],
  narration: rawParagraphs[44].narration
});

// s46: Think of a dog in a cramped hallway: spinning makes you dizzy, but stepping into the open living room lets the dog run straight to you.
scenes.push({
  id: sId(45),
  kind: "versus",
  left: { label: "Spinning In Hall", pose: "flinch", sub: "dizzy & trapped" },
  right: { label: "Step Into Room", pose: "celebrate", props: { r: "padel" }, sub: "catches ball cleanly" },
  vs: "VS",
  narration: rawParagraphs[45].narration
});

// s47: Practice the Abre versus Cierra Recognition Drill: have a partner feed random corner balls, calling Abre or Cierra before the first impact.
scenes.push({
  id: sId(46),
  kind: "list",
  title: "Abre vs Cierra Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Partner feeds random corner balls", icon: "bolt" },
    { text: "Call Abre or Cierra early", icon: "target" },
    { text: "Abre: rotate 180° · Cierra: step forward", icon: "check" }
  ],
  narration: rawParagraphs[46].narration
});

// s48: Do four sets of twelve random feeds, targeting at least ten correct footwork executions per set.
scenes.push({
  id: sId(47),
  kind: "stat",
  value: 10,
  suffix: " / 12",
  label: "target correct footwork calls per set",
  highlight: "10 correct",
  icon: "trophy",
  mascot: { pose: "celebrate" },
  narration: rawParagraphs[47].narration
});

// s49: Beginners should first practice slow shadow footwork on the balls of your feet before full-speed ball drills, wearing herringbone turf shoes to prevent ankle rollover.
scenes.push({
  id: sId(48),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "padel_ready", at: "@shadow" }
  ],
  props: { r: "padel" },
  headline: { text: "Shadow Footwork First", highlight: "Shadow", at: 0, side: "right" },
  callouts: [{ label: "Herringbone Shoes", target: "rFoot", at: "@shadow" }],
  narration: rawParagraphs[48].narration
});

// s50: Safety caution: always unweight your feet with a light hop before pivoting; spinning with flat heels on sand turf creates violent twisting torque on knee ligaments and ankles.
scenes.push({
  id: sId(49),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "jump", at: 0 },
    { pose: "padel_ready", at: "@unweight" }
  ],
  headline: { text: "Unweight Your Feet", highlight: "Unweight", at: 0, side: "right" },
  callouts: [
    { label: "Protect Knee", target: "rKnee", at: "@torque" },
    { label: "Unweight Heels", target: "rAchilles", at: "@heels" }
  ],
  narration: rawParagraphs[49].narration
});

// ==========================================
// Chapter 6: Rebound 4: The metallic wire mesh (p50 - p60)
// ==========================================

// s51: The fourth family is the metallic wire mesh, covering the side walls and upper sections of the court.
scenes.push({
  id: sId(50),
  kind: "title",
  chapter: "Rebound 4: The metallic wire mesh",
  number: 5,
  heading: "The metallic wire mesh",
  sub: "Low-restitution chaos",
  mascot: { pose: "crouch", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[50].narration
});

// s52: While tempered glass is rigid and predictable, the wire mesh is composed of electro-welded metal wires forming fifty-millimeter grids.
scenes.push({
  id: sId(51),
  kind: "stat",
  value: 50,
  suffix: " mm",
  label: "electro-welded wire mesh grid openings",
  highlight: "50 mm",
  icon: "target",
  mascot: { pose: "present" },
  narration: rawParagraphs[51].narration
});

// s53: When a padel ball strikes the mesh, the metal wires flex and vibrate, absorbing tremendous kinetic energy.
scenes.push({
  id: sId(52),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "block", at: "@absorb" }
  ],
  props: { r: "padel" },
  headline: { text: "Wire Vibration Absorb", highlight: "Absorb", at: 0, side: "right" },
  gauges: [{ label: "Kinetic Energy", icon: "bolt", from: 85, to: 25, at: "@energy" }],
  narration: rawParagraphs[52].narration
});

// s54: The coefficient of restitution drops from zero point seven-five on glass down to zero point three-five on mesh, causing the ball to drop dead toward the turf.
scenes.push({
  id: sId(53),
  kind: "chart",
  title: "Coefficient of Restitution (COR)",
  unit: "e",
  focus: 1,
  mascot: { pose: "present" },
  bars: [
    { label: "Tempered Glass", value: 0.75, display: "0.75", color: "#38BDF8" },
    { label: "Metallic Mesh", value: 0.35, display: "0.35", color: "#EF4444" }
  ],
  narration: rawParagraphs[53].narration
});

// s55: If the ball hits a welded wire junction, it deflects upward or sideways at erratic angles of fifteen to forty-five degrees.
scenes.push({
  id: sId(54),
  kind: "slam",
  text: "±45° erratic deflections",
  highlight: "erratic",
  style: "dark",
  icon: "cross",
  sub: "Wire Node Collisions",
  narration: rawParagraphs[54].narration
});

// s56: Playing off the mesh requires an ultra-low crouch, flexing your knees so your racket head sits at shin height.
scenes.push({
  id: sId(55),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "crouch", at: "@crouch" }
  ],
  props: { r: "padel" },
  headline: { text: "Ultra-Low Crouch", highlight: "Crouch", at: 0, side: "right" },
  callouts: [{ label: "Racket At Shin", target: "rHand", at: "@crouch" }],
  narration: rawParagraphs[55].narration
});

// s57: Eliminate your backswing, hold the paddle out in front, and use a short blocking punch under thirty centimeters to lift the dead ball back into play.
scenes.push({
  id: sId(56),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "crouch", at: 0 },
    { pose: "block", at: "@punch" }
  ],
  props: { r: "padel" },
  headline: { text: "Short Blocking Punch", highlight: "Punch", at: 0, side: "left" },
  callouts: [{ label: "< 30cm Stroke", target: "rHand", offset: [80, -90], at: "@punch" }],
  narration: rawParagraphs[56].narration
});

// s58: Think of billiards versus a chain-link fence: glass rolls true like slate, but wire mesh wobbles, absorbs the punch, and drops the ball straight down.
scenes.push({
  id: sId(57),
  kind: "versus",
  left: { label: "Glass (Slate)", pose: "soft_hit", props: { r: "padel" }, sub: "predictable true roll" },
  right: { label: "Mesh (Chain-Link)", pose: "block", props: { r: "padel" }, sub: "absorbs punch & dies" },
  vs: "VS",
  narration: rawParagraphs[57].narration
});

// s59: Train this with the Mesh Drop and React Drill: wearing shatterproof protective eyewear, have a partner hit balls into the side wire fence while you react with a compact blocking scoop.
scenes.push({
  id: sId(58),
  kind: "list",
  title: "Mesh React Drill",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Wear protective polycarbonate eyewear", icon: "check" },
    { text: "Partner hits into side mesh", icon: "bolt" },
    { text: "Compact blocking scoop", icon: "target" }
  ],
  narration: rawParagraphs[58].narration
});

// s60: Start with two sets of six to eight feeds, progressing to four sets of ten as your legs adapt, and avoid prolonged deep squatting if you have knee pain.
scenes.push({
  id: sId(59),
  kind: "stat",
  value: 2,
  suffix: " sets progression",
  label: "beginner volume progression for mesh squat drills",
  highlight: "2 sets",
  icon: "clock",
  mascot: { pose: "point_up" },
  narration: rawParagraphs[59].narration
});

// s61: Never try to blast a winner off the mesh; your only goal is a safe, soft recovery.
scenes.push({
  id: sId(60),
  kind: "slam",
  text: "Safe soft recovery",
  highlight: "recovery",
  style: "brand",
  icon: "check",
  sub: "Never Blast Off The Wire",
  subAt: "@soft",
  narration: rawParagraphs[60].narration
});

// ==========================================
// Chapter 7: Safety & 3-Step Decision Flow (p61 - p73)
// ==========================================

// s62: Before taking this blueprint to the court, there are three critical safety rules every player must know.
scenes.push({
  id: sId(61),
  kind: "title",
  chapter: "Safety and the 3-step decision flow",
  number: 6,
  heading: "Safety & decision flow",
  sub: "Eyes, collisions & the golden rule",
  mascot: { pose: "present", props: { r: "padel" } },
  transition: "push",
  narration: rawParagraphs[61].narration
});

// s63: First, protect your eyes: an official padel ball measures six-point-five centimeters in diameter, matching the adult eye socket.
scenes.push({
  id: sId(62),
  kind: "stat",
  value: 6.5,
  decimals: 1,
  suffix: " cm",
  label: "padel ball diameter matches orbital socket aperture",
  highlight: "6.5 cm",
  icon: "target",
  mascot: { pose: "point_up" },
  narration: rawParagraphs[62].narration
});

// s64: Erratic deflections off the mesh can rocket toward your face with under zero point two-five seconds to react.
scenes.push({
  id: sId(63),
  kind: "stat",
  value: 0.25,
  decimals: 2,
  suffix: " s",
  label: "reaction time window on close wire fence deflections",
  highlight: "< 0.25 s",
  icon: "stopwatch",
  mascot: { pose: "flinch" },
  narration: rawParagraphs[63].narration
});

// s65: A landmark hospital registry study in Acta Ophthalmologica revealed that padel has become the leading cause of sports-related eye trauma in Sweden, causing severe hyphema and retinal tears.
scenes.push({
  id: sId(64),
  kind: "slam",
  text: "#1 sports eye trauma",
  highlight: "Eye Trauma",
  style: "dark",
  icon: "cross",
  sub: "Swedish Hospital Registry Study (Acta Ophthalmol)",
  narration: rawParagraphs[64].narration
});

// s66: Sports ophthalmologists strongly recommend wearing certified shatterproof polycarbonate sports eyewear during close-quarters wall play.
scenes.push({
  id: sId(65),
  kind: "mascot",
  background: "spotlight",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "point_up", at: "@eyewear" }
  ],
  headline: { text: "Wear Sports Eyewear", highlight: "Eyewear", at: 0, side: "right" },
  icons: [{ icon: "check", near: "head", offset: [80, -90], at: "@eyewear" }],
  callouts: [{ label: "Polycarbonate Lenses", target: "head", offset: [120, -100], at: "@eyewear" }],
  narration: rawParagraphs[65].narration
});

// s67: Second, here is a red flag warning: never back-pedal straight backward blind toward the glass with your heels dragging.
scenes.push({
  id: sId(66),
  kind: "slam",
  text: "Never back-pedal blind",
  highlight: "Never",
  style: "dark",
  icon: "cross",
  sub: "Critical Red Flag Collision Warning",
  narration: rawParagraphs[66].narration
});

// s68: Blind back-pedaling causes catastrophic backward falls, concussions, and violent collisions with the glass panels.
scenes.push({
  id: sId(67),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "run_b", at: 0 },
    { pose: "flinch", at: "@collisions" }
  ],
  headline: { text: "Avoid Wall Crashes", highlight: "Crashes", at: 0, side: "left" },
  icons: [{ icon: "cross", near: "head", offset: [-80, -90], at: "@collisions" }],
  narration: rawParagraphs[67].narration
});

// s69: Always retreat using sideways crossover steps while keeping your eyes on both the ball and the wall line.
scenes.push({
  id: sId(68),
  kind: "mascot",
  background: "court",
  mascot: { x: 480 },
  poses: [
    { pose: "walk_b", at: 0 },
    { pose: "padel_ready", at: "@crossover" }
  ],
  props: { r: "padel" },
  headline: { text: "Sideways Crossover Steps", highlight: "Crossover", at: 0, side: "right" },
  callouts: [{ label: "Sideways Travel", target: "rFoot", at: "@steps" }],
  narration: rawParagraphs[68].narration
});

// s70: Third, watch your ankles: sand buildup near the corner walls causes sudden slipping or jamming; if you roll an ankle and cannot bear weight for four steps, see a healthcare professional immediately for an evaluation.
scenes.push({
  id: sId(69),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "stand", at: 0 },
    { pose: "hold_calf", at: "@ankle" }
  ],
  headline: { text: "Ankle Sprain Check", highlight: "Ankle", at: 0, side: "right" },
  callouts: [{ label: "See Healthcare Pro", target: "rAchilles", at: "@ankle" }],
  narration: rawParagraphs[69].narration
});

// s71: To pull all four rebound families together, execute this simple three-step mental decision flow on every deep shot.
scenes.push({
  id: sId(70),
  kind: "lineup",
  title: "The 3-Step Defensive Loop",
  members: [
    { label: "1. Read Depth", pose: "ready", props: { r: "padel" }, at: "@three" },
    { label: "2. Read Wall Order", pose: "think", props: { r: "padel" }, at: "@decision" },
    { label: "3. Establish Spacing", pose: "padel_ready", props: { r: "padel" }, at: "@flow" }
  ],
  narration: rawParagraphs[70].narration
});

// s72: Step one: Read depth—if the ball crosses the service line, make the mental commitment to let it go to the glass.
scenes.push({
  id: sId(71),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "ready", at: 0 },
    { pose: "short_back", at: "@service" }
  ],
  props: { r: "padel" },
  headline: { text: "Step 1: Read Depth", highlight: "Depth", at: 0, side: "right" },
  narration: rawParagraphs[71].narration
});

// s73: Step two: Read wall order—if it hits side then back, shout Abre and pivot; if it hits back then side, shout Cierra, step forward, and do not spin.
scenes.push({
  id: sId(72),
  kind: "versus",
  left: { label: "Side → Back", pose: "bandeja_finish", props: { r: "padel" }, sub: "Abre: rotate 180°" },
  right: { label: "Back → Side", pose: "soft_hit", props: { r: "padel" }, sub: "Cierra: step forward" },
  vs: "VS",
  narration: rawParagraphs[72].narration
});

// s74: And step three: Establish spacing—remember the golden sequence: Wall, Player, Ball. Never let the ball get between your body and the glass.
scenes.push({
  id: sId(73),
  kind: "slam",
  text: "Wall · Player · Ball",
  highlight: "Sequence",
  style: "brand",
  icon: "target",
  sub: "The Golden Spacing Rule",
  narration: rawParagraphs[73].narration
});

// ==========================================
// Chapter 8: Close (p74 - p76)
// ==========================================

// s75: Never fear the walls in padel again.
scenes.push({
  id: sId(74),
  kind: "slam",
  chapter: "Close",
  text: "Never fear the glass",
  highlight: "Never",
  style: "brand",
  icon: "trophy",
  sub: "Your Ultimate Defensive Ally",
  narration: rawParagraphs[74].narration
});

// s76: Trust the glass deceleration, master your Abre pivot, step forward on Cierra, and drop low on the wire mesh.
scenes.push({
  id: sId(75),
  kind: "list",
  title: "The Wall Rebound Playbook",
  mascot: { pose: "present", props: { r: "padel" } },
  items: [
    { text: "Single: 1m buffer, strike ahead", icon: "check" },
    { text: "Abre: rotate 180° with orbit", icon: "check" },
    { text: "Cierra: step forward, do not spin", icon: "check" },
    { text: "Mesh: ultra-low crouch, punch block", icon: "check" }
  ],
  narration: rawParagraphs[75].narration
});

// s77: The court perimeter is not a cage that traps you; it is your ultimate defensive reset. See you on the court.
scenes.push({
  id: sId(76),
  kind: "mascot",
  background: "court",
  poses: [
    { pose: "padel_ready", at: 0 },
    { pose: "celebrate", at: "@reset" }
  ],
  props: { r: "padel" },
  headline: { text: "See You On Court", highlight: "Court", at: 0, side: "right" },
  narration: rawParagraphs[76].narration
});

const storyboard = {
  title: "All padel wall rebounds explained",
  voice: "am_michael",
  thumbnail: {
    pose: "bandeja_finish",
    props: { r: "padel" },
    background: "court",
    headline: "ALL WALL REBOUNDS",
    highlight: "REBOUNDS",
    opponent: { pose: "flinch" },
    side: "right"
  },
  youtube: {
    title: "All padel wall rebounds explained",
    titleOptions: [
      "The 4 padel wall rebounds (and how to play them)",
      "Never get jammed off the glass in padel"
    ],
    description: "Struggling with corner glass bounces, getting pinned by side walls, or panicking off the wire fence in padel? Here is the complete breakdown of all 4 wall rebound families—single back glass, side angles, Doble Pared Que Abre vs Cierra, and metallic mesh chaos.",
    tags: [
      "padel",
      "padel tennis",
      "padel wall rebounds",
      "padel glass defense",
      "padel doble pared",
      "padel tutorial",
      "all padel wall rebounds explained",
      "padel tips",
      "coach ember",
      "padel technique"
    ]
  },
  scenes
};

fs.writeFileSync(path.join(EP_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2), "utf8");
console.log(`Wrote storyboard.json with ${scenes.length} scenes.`);
