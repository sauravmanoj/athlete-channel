import fs from "node:fs";

const storyboard = {
  title: "Your padel bandeja is weak (here's why)",
  thumbnail: {
    pose: "bandeja",
    face: "focus",
    background: "court",
    headline: "Fix Your Bandeja",
    highlight: "Bandeja",
    icons: [
      {
        icon: "cross",
        size: 1.3
      }
    ],
    props: { r: "padel" },
    side: "left"
  },
  youtube: {
    title: "Your padel bandeja is weak (here's why)",
    titleOptions: [
      "The 5 bandeja mistakes killing your padel game",
      "Why your padel bandeja is weak (and how to fix it)"
    ],
    description: "Struggling to hit a consistent, unattackable bandeja? We break down the 5 hidden mistakes ruining your padel overhead: the flat tennis smash trap, dropping the non-dominant tracking arm, striking behind your head in the wrong plane, snapping your wrist instead of slicing, and freezing in mid-court. Learn the biomechanics and glass rebound physics to master padel's signature stroke.",
    tags: [
      "padel bandeja",
      "padel bandeja tutorial",
      "padel tips",
      "padel technique",
      "how to hit a bandeja",
      "padel overhead",
      "padel strategy",
      "tennis to padel",
      "padel glass rebound",
      "padel training"
    ]
  },
  scenes: [
    // ==========================================
    // CHAPTER 1: INTRO / HOOK (s01 - s07)
    // ==========================================
    {
      id: "s01",
      kind: "title",
      chapter: "The Defining Shot",
      heading: "Your Padel Bandeja Is Weak",
      subtitle: "The biomechanics & glass physics of padel's signature shot",
      style: "bold",
      transition: "fade",
      narration: "In padel, whoever controls the net zone wins eighty to eighty-three percent of all points."
    },
    {
      id: "s02",
      kind: "stat",
      background: "spotlight",
      value: 82,
      suffix: "%",
      label: "Points Won at the Net",
      sub: "World Padel Tour match analytics (Courel-Ibáñez)",
      narration: "That is why opponents constantly lob deep into your backcourt: to push you off the net."
    },
    {
      id: "s03",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "smash", at: "@smash" }
      ],
      props: { r: "padel" },
      headline: { text: "The Smash Reflex", highlight: "Smash", at: "@instinct", side: "right", top: 200 },
      narration: "If you come from tennis, your instinct is to jump, wind up with full force, and try to smash the ball into the turf."
    },
    {
      id: "s04",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "facepalm", at: "@celebrate" }
      ],
      props: { r: "padel" },
      headline: { text: "Opponents Punish It", highlight: "Punish", at: "@watching", side: "right", top: 200 },
      narration: "Two seconds later, you are watching your opponents celebrate an easy winner."
    },
    {
      id: "s05",
      kind: "slam",
      text: "Not About Power",
      highlight: "Power",
      style: "dark",
      icon: "cross",
      sub: "Stop treating it like a smash",
      narration: "Your bandeja is not weak because you lack power; it is weak because you are treating it like a smash."
    },
    {
      id: "s06",
      kind: "stat",
      background: "spotlight",
      value: 69,
      suffix: "%",
      label: "Bandeja Share of Overheads",
      sub: "Professional match play (Sánchez-Alcaraz)",
      narration: "In professional padel, the bandeja accounts for up to sixty-nine percent of all overheads."
    },
    {
      id: "s07",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "bandeja_prep", at: "@tactical" }
      ],
      props: { r: "padel" },
      headline: { text: "A Tactical Reset", highlight: "Reset", at: "@reset", side: "right", top: 200 },
      narration: "It is not an attack designed to end the point; it is a tactical reset to keep you at the net."
    },
    {
      id: "s08",
      kind: "slam",
      text: "The 5 Bandeja Secrets",
      highlight: "5",
      style: "brand",
      icon: "bolt",
      sub: "Biomechanics & glass physics",
      narration: "Today, we break down the physics behind the five mistakes ruining your bandeja, and the exact drills to make it unattackable."
    },

    // ==========================================
    // CHAPTER 2: MISTAKE 1: THE TENNIS SMASH TRAP (s09 - s22)
    // ==========================================
    {
      id: "s09",
      kind: "title",
      chapter: "Mistake 1: Tennis Smash Trap",
      heading: "Mistake 1: The Tennis Smash Trap",
      subtitle: "Why flat power feeds the glass rebound",
      style: "brand",
      transition: "push",
      narration: "The biggest trap in padel is trying to crush a deep lob with flat power."
    },
    {
      id: "s10",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "smash", at: 0 },
        { pose: "ready", at: "@wins" }
      ],
      props: { r: "padel" },
      headline: { text: "Downward Power Smash", highlight: "Smash", at: "@tennis", side: "right", top: 200 },
      narration: "In tennis, a hard downward smash wins the point outright."
    },
    {
      id: "s11",
      kind: "stat",
      background: "spotlight",
      value: 0.72,
      decimals: 2,
      suffix: " e",
      label: "Glass Coefficient of Restitution",
      sub: "Tempered glass wall elasticity (Cross 2005)",
      narration: "In padel, the court is surrounded by rigid tempered glass walls with a high rebound coefficient of zero-point-seven-zero to zero-point-seven-five."
    },
    {
      id: "s12",
      kind: "custom",
      file: "custom/glass_rebound.html",
      narration: "When you hit a flat overhead from deep court, the ball slams into the rear glass with high kinetic energy."
    },
    {
      id: "s13",
      kind: "stat",
      background: "spotlight",
      value: 1.4,
      decimals: 1,
      suffix: " m",
      label: "Flat Rebound Bounce Height",
      sub: "Pops up into opponent strike zone",
      narration: "Because the glass is rigid and the ball has no backspin, it explodes outward at waist-to-chest height into the center of the court."
    },
    {
      id: "s14",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "flinch", at: "@feet" }
      ],
      props: { r: "padel" },
      headline: { text: "Opponent Counter Bajada", highlight: "Counter", at: "@hanging", side: "right", top: 200 },
      narration: "You have just fed your opponents a hanging setup that they crush with an offensive wall smash right at your feet."
    },
    {
      id: "s15",
      kind: "stat",
      background: "spotlight",
      value: 4,
      suffix: "x",
      label: "Deep Smash Error Multiplier",
      sub: "Escudero-Tena match tracking",
      narration: "Match analytics show that attempting flat smashes from deep court leads to a four-fold increase in unforced errors compared to a controlled bandeja."
    },
    {
      id: "s16",
      kind: "slam",
      text: "Brute Force Fails",
      highlight: "Fails",
      style: "dark",
      icon: "cross",
      sub: "Rubber ball vs concrete wall",
      narration: "Hitting a flat smash against the glass is like throwing a rubber ball at a concrete wall: the harder you throw it, the faster it flies back at you."
    },
    {
      id: "s17",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "bandeja_prep", at: "@neutralizing" }
      ],
      props: { r: "padel" },
      headline: { text: "Neutralize The Lob", highlight: "Neutralize", at: "@mindset", side: "right", top: 200 },
      narration: "The bandeja shifts your mindset from winning the point to neutralizing the lob."
    },
    {
      id: "s18",
      kind: "stat",
      background: "spotlight",
      value: 0.4,
      decimals: 1,
      suffix: " m",
      label: "Sliced Post-Glass Bounce",
      sub: "Dies harmlessly along the turf",
      narration: "Your goal is to slice the ball so it hits the back glass softly and dies along the floor."
    },
    {
      id: "s19",
      kind: "slam",
      text: "Glass Ceiling Drill",
      highlight: "Ceiling",
      style: "brand",
      icon: "bolt",
      sub: "Target line under 0.8 meters",
      narration: "Master this with the Glass Ceiling Drill."
    },
    {
      id: "s20",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@target" }
      ],
      props: { r: "padel" },
      headline: { text: "0.8m Target Tape", highlight: "0.8m", at: "@tape", side: "right", top: 200 },
      narration: "Place target tape on the back glass zero-point-eight meters above the turf."
    },
    {
      id: "s21",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja", at: "@strike" }
      ],
      props: { r: "padel" },
      headline: { text: "Below The Tape", highlight: "Below", at: "@below", side: "right", top: 200 },
      narration: "Have a partner feed deep lobs while you hit bandejas, aiming for every ball to strike the glass below the tape."
    },
    {
      id: "s22",
      kind: "stat",
      background: "spotlight",
      value: 75,
      suffix: "%",
      label: "Target Accuracy Benchmark",
      sub: "4 sets × 12 repetitions",
      narration: "Perform four sets of twelve balls, aiming for seventy-five percent accuracy."
    },

    // ==========================================
    // CHAPTER 3: MISTAKE 2: DROPPING THE TRACKING ARM (s23 - s36)
    // ==========================================
    {
      id: "s23",
      kind: "title",
      chapter: "Mistake 2: Dropped Tracking Arm",
      heading: "Mistake 2: Dropped Tracking Arm",
      subtitle: "The non-dominant arm kinetic anchor",
      style: "brand",
      transition: "push",
      narration: "The second mistake happens before you even swing: letting your non-dominant arm hang down by your hip."
    },
    {
      id: "s24",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "dink", at: "@dangling" }
      ],
      props: { r: "padel" },
      headline: { text: "Dangling Left Arm", highlight: "Dangling", at: "@amateur", side: "right", top: 200 },
      narration: "When a lob goes up, amateur players turn their bodies but leave their left arm dangling."
    },
    {
      id: "s25",
      kind: "slam",
      text: "The Kinetic Counterweight",
      highlight: "Counterweight",
      style: "dark",
      icon: "cross",
      sub: "Dropping it collapses the shoulder plane",
      narration: "Biomechanically, that dropped arm ruins your entire stroke."
    },
    {
      id: "s26",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "bandeja_prep", at: "@counterweight" }
      ],
      props: { r: "padel" },
      headline: { text: "Kinetic Counterweight", highlight: "Counterweight", at: "@counterweight", side: "right", top: 200 },
      narration: "Your non-dominant arm acts as a critical kinetic counterweight."
    },
    {
      id: "s27",
      kind: "stat",
      background: "spotlight",
      value: 45,
      suffix: "°",
      label: "Tracking Arm Elevation Angle",
      sub: "Activates serratus anterior & trapezius",
      narration: "Extending your non-hitting arm upward at a forty-five-degree angle activates the serratus anterior and trapezius muscles."
    },
    {
      id: "s28",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "point_up", at: "@scapular" }
      ],
      props: { r: "padel" },
      headline: { text: "Scapular Plane Upward Rotation", highlight: "Scapular", at: "@anchors", side: "right", top: 200 },
      narration: "This anchors upward scapular rotation, keeping your hitting shoulder elevated in the scapular plane."
    },
    {
      id: "s29",
      kind: "stat",
      background: "spotlight",
      value: 20,
      suffix: "°",
      label: "Shoulder Drop When Arm Lowers",
      sub: "Trunk collapses into anterior flexion",
      narration: "When you drop your non-dominant arm, your upper torso collapses forward and your hitting shoulder dips by fifteen to twenty-five degrees."
    },
    {
      id: "s30",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "flinch", at: "@dumps" }
      ],
      props: { r: "padel" },
      headline: { text: "Premature Chest Rotation", highlight: "Chest", at: "@uncoils", side: "right", top: 200 },
      narration: "Your chest uncoils prematurely toward the net, turning your cutting stroke into an off-balance push that dumps the ball into the net."
    },
    {
      id: "s31",
      kind: "slam",
      text: "The Archer's Bow",
      highlight: "Archer",
      style: "brand",
      icon: "bolt",
      sub: "Left hand holds target steady",
      narration: "Extending your left arm is like an archer holding a bow: the bow hand holds the target steady while the draw hand pulls the string."
    },
    {
      id: "s32",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "point_up", at: "@track" }
      ],
      props: { r: "padel" },
      headline: { text: "Track The Falling Ball", highlight: "Track", at: "@point", side: "right", top: 200 },
      narration: "Point your left hand directly at the falling ball to track its flight."
    },
    {
      id: "s33",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja", at: 0 },
        { pose: "bandeja_finish", at: "@rotation" }
      ],
      props: { r: "padel" },
      headline: { text: "Tuck Arm To Decelerate", highlight: "Tuck", at: "@tuck", side: "right", top: 200 },
      narration: "Keep that arm extended until contact begins, then tuck it into your chest as you swing to control your rotation."
    },
    {
      id: "s34",
      kind: "slam",
      text: "Left-Hand Catch Drill",
      highlight: "Catch",
      style: "brand",
      icon: "bolt",
      sub: "Stereoscopic tracking training",
      narration: "Practice the Left-Hand Catch Drill: move back on high lobs with your paddle prepared, and catch the falling ball with your extended left hand at eye level."
    },
    {
      id: "s35",
      kind: "stat",
      background: "spotlight",
      value: 10,
      suffix: " reps",
      label: "Clean Catches at 45°",
      sub: "3 sets × 10 reps",
      narration: "Complete three sets of ten catches, ensuring your left arm stays locked at forty-five degrees until the catch."
    },

    // ==========================================
    // CHAPTER 4: MISTAKE 3: THE BEHIND-THE-HEAD STRIKE (s36 - s50)
    // ==========================================
    {
      id: "s36",
      kind: "title",
      chapter: "Mistake 3: Behind-The-Head Strike",
      heading: "Mistake 3: Behind-The-Head Strike",
      subtitle: "The 1 o'clock scapular strike zone",
      style: "brand",
      transition: "push",
      narration: "Watch where amateur players strike the ball on a bandeja."
    },
    {
      id: "s37",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "tired_front", at: "@swat" }
      ],
      props: { r: "padel" },
      headline: { text: "Hyperextending The Spine", highlight: "Hyperextending", at: "@hyperextend", side: "right", top: 200 },
      narration: "Most let the lob float directly over their crown, hyperextend their spine, reach up behind their head, and swat at the ball."
    },
    {
      id: "s38",
      kind: "slam",
      text: "Destroys Your Shoulder",
      highlight: "Shoulder",
      style: "dark",
      icon: "cross",
      sub: "Horizontal abduction impingement",
      subAt: "@control",
      narration: "Striking behind your head destroys both your control and your shoulder health."
    },
    {
      id: "s39",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "smash", at: 0 },
        { pose: "ready", at: "@twelve" }
      ],
      props: { r: "padel" },
      headline: { text: "Tennis 12 O'Clock Extension", highlight: "12 O'Clock", at: "@tennis", side: "right", top: 200 },
      narration: "In tennis, you strike an overhead at full vertical extension at twelve o'clock."
    },
    {
      id: "s40",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "flinch", at: "@trap" }
      ],
      props: { r: "padel" },
      headline: { text: "Triggers Glass Rebound", highlight: "Rebound", at: "@downward", side: "right", top: 200 },
      narration: "In padel, reaching for full vertical extension forces a downward attack angle that triggers the high glass rebound trap."
    },
    {
      id: "s41",
      kind: "stat",
      background: "spotlight",
      value: 8.8,
      decimals: 1,
      suffix: "%",
      label: "Rotator Cuff Pathology Share",
      sub: "Supraspinatus tendon impingement (Demeco 2022)",
      narration: "Worse, striking behind your coronal plane forces the shoulder into extreme horizontal abduction, pinching the supraspinatus tendon against bone."
    },
    {
      id: "s42",
      kind: "chart",
      title: "Top Injury Locations in Padel",
      bars: [
        { label: "Lateral Elbow (20.3%)", value: 20.3, color: "bad" },
        { label: "Ankle / Calf (13.5%)", value: 13.5, color: "hl" },
        { label: "Rotator Cuff (8.8%)", value: 8.8, color: "bad" }
      ],
      narration: "Clinical data shows that rotator cuff tendinitis accounts for over seven percent of all padel injuries."
    },
    {
      id: "s43",
      kind: "stat",
      background: "spotlight",
      value: 2.0,
      decimals: 1,
      suffix: " m",
      label: "Optimal Contact Height",
      sub: "Eye to forehead level (1.8–2.2 m)",
      narration: "The optimal contact point is at eye-to-forehead level, about one-point-eight to two-point-two meters off the ground."
    },
    {
      id: "s44",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "point_up", at: "@dominant" }
      ],
      props: { r: "padel" },
      headline: { text: "1 O'Clock Strike Zone", highlight: "1 O'Clock", at: "@one", side: "right", top: 200 },
      narration: "You want the ball twelve to eighteen inches in front of you, positioned at the one o'clock angle to the side of your dominant shoulder."
    },
    {
      id: "s45",
      kind: "stat",
      background: "spotlight",
      value: 120,
      suffix: "°",
      label: "Flexed Elbow Angle",
      sub: "Between 110° and 130° at contact",
      narration: "Unlike a tennis smash, your hitting elbow should remain flexed between one hundred and ten and one hundred and thirty degrees."
    },
    {
      id: "s46",
      kind: "slam",
      text: "La Bandeja: The Serving Tray",
      highlight: "Tray",
      style: "brand",
      icon: "bolt",
      sub: "Palm up, paddle flat beside head",
      narration: "In Spanish, bandeja means serving tray: hold your paddle flat beside your head like a waiter balancing a tray of drinks."
    },
    {
      id: "s47",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja", at: "@bent" }
      ],
      props: { r: "padel" },
      headline: { text: "Serving Tray Balance", highlight: "Tray", at: "@holding", side: "right", top: 200 },
      narration: "Holding the tray at eye level with a bent elbow gives you complete leverage without straining your shoulder capsule."
    },
    {
      id: "s48",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "hold_back", at: 0 },
        { pose: "flinch", at: "@pain" },
        { pose: "point_up", at: "@immediately" }
      ],
      callouts: [
        { target: "lShoulder", label: "Rotator Cuff Protection", side: "left" }
      ],
      headline: { text: "Painful Arc Warning", highlight: "Warning", at: "@shoulder", side: "right", top: 200 },
      narration: "If you feel shoulder pain lifting your arm between seventy and one hundred and twenty degrees, stop overheads immediately and see a physiotherapist."
    },

    // ==========================================
    // CHAPTER 5: MISTAKE 4: WRIST SNAPPING VS THE SLICED CARVE (s49 - s64)
    // ==========================================
    {
      id: "s49",
      kind: "title",
      chapter: "Mistake 4: Wrist Snap vs Slice",
      heading: "Mistake 4: Wrist Snap vs Slice",
      subtitle: "The 25-degree skidding wall rebound",
      style: "brand",
      transition: "push",
      narration: "To generate spin, amateur players frequently snap their wrist violently downward through contact."
    },
    {
      id: "s50",
      kind: "slam",
      text: "Dwell Time: 4 Milliseconds",
      highlight: "4 ms",
      style: "dark",
      icon: "cross",
      sub: "Ball leaves paddle before wrist can snap",
      narration: "This is a massive mechanical mistake."
    },
    {
      id: "s51",
      kind: "stat",
      background: "spotlight",
      value: 4,
      suffix: " ms",
      label: "Ball-Paddle Dwell Time",
      sub: "Carbon face & EVA core impact (Cross 2005)",
      narration: "The ball contacts your carbon paddle for just three to five milliseconds."
    },
    {
      id: "s52",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "flinch", at: "@five" }
      ],
      props: { r: "padel" },
      headline: { text: "Wild Trajectory Errors", highlight: "Errors", at: "@trajectory", side: "right", top: 200 },
      narration: "Trying to snap your wrist during that tiny window creates wild trajectory errors, where a three-degree wrist tilt changes landing depth by over five feet."
    },
    {
      id: "s53",
      kind: "stat",
      background: "spotlight",
      value: 20.3,
      decimals: 1,
      suffix: "%",
      label: "Padel Elbow Prevalence",
      sub: "#1 most common injury in padel (Demeco 2022)",
      narration: "Even worse, repetitive eccentric wrist snapping is the leading cause of tennis elbow, which represents over twenty percent of all injuries in padel."
    },
    {
      id: "s54",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "bandeja_prep", at: "@continental" }
      ],
      props: { r: "padel" },
      headline: { text: "Locked Continental Grip", highlight: "Continental", at: "@continental", side: "right", top: 200 },
      narration: "To protect your tendons and control the ball, lock your wrist in a firm Continental grip and generate slice with your entire arm unit."
    },
    {
      id: "s55",
      kind: "stat",
      background: "spotlight",
      value: 20,
      suffix: "°",
      label: "Open Paddle Face Tilt",
      sub: "Between 15° and 25° relative to vertical",
      narration: "The paddle must follow a high-to-low, outside-to-inside diagonal cutting path with the paddle face open fifteen to twenty-five degrees."
    },
    {
      id: "s56",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja", at: "@carve" }
      ],
      props: { r: "padel" },
      headline: { text: "Cut 2 to 7 O'Clock", highlight: "2 to 7", at: "@clock", side: "right", top: 200 },
      narration: "Visualize the ball as a clock face: cut across the ball starting at two o'clock and carve underneath toward seven o'clock."
    },
    {
      id: "s57",
      kind: "slam",
      text: "Horizontal Back Spin",
      highlight: "Back Spin",
      style: "brand",
      icon: "bolt",
      sub: "Magnus stability & wall friction",
      subAt: "@action",
      narration: "This cutting action generates horizontal backspin."
    },
    {
      id: "s58",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@friction" }
      ],
      props: { r: "padel" },
      headline: { text: "Friction Drags Ball Down", highlight: "Friction", at: "@friction", side: "right", top: 200 },
      narration: "When a ball with backspin hits the vertical glass, friction pulls the ball downward along the wall face."
    },
    {
      id: "s59",
      kind: "stat",
      background: "spotlight",
      value: 0.35,
      decimals: 2,
      suffix: " m",
      label: "Dead Skid Bounce Height",
      sub: "Exits glass at angle < 25 degrees",
      narration: "Instead of rebounding outward at waist height, the sliced ball slides down the glass and bounces under zero-point-five meters off the turf, dying in the corner."
    },
    {
      id: "s60",
      kind: "slam",
      text: "Carve Like A Bread Knife",
      highlight: "Carve",
      style: "brand",
      icon: "bolt",
      sub: "Draw blade smoothly across crust",
      narration: "Slicing the bandeja is like carving a thin slice off a loaf of bread: you do not chop down with a cleaver; you draw the blade smoothly across the crust."
    },
    {
      id: "s61",
      kind: "slam",
      text: "Two-to-Seven Clock Drill",
      highlight: "Clock Drill",
      style: "brand",
      icon: "bolt",
      sub: "Grooving outside-to-inside cutting path",
      narration: "Train this with the Two-to-Seven Clock Drill."
    },
    {
      id: "s62",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "present", at: "@feed" }
      ],
      props: { r: "padel" },
      headline: { text: "Service Line Feeds", highlight: "Service Line", at: "@service", side: "right", top: 200 },
      narration: "From the service line, have a partner feed chest-high floaters."
    },
    {
      id: "s63",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja_finish", at: "@corner" }
      ],
      props: { r: "padel" },
      headline: { text: "Aiming For Corner Glass", highlight: "Corner", at: "@corner", side: "right", top: 200 },
      narration: "Carve across the bottom-outside of the ball with a firm wrist, aiming deep into the opposite corner glass."
    },
    {
      id: "s64",
      kind: "stat",
      background: "spotlight",
      value: 73,
      suffix: "%",
      label: "Rebound Retention Target",
      sub: "11/15 dying within 1 meter of back glass",
      narration: "Hit four sets of fifteen balls, aiming for eleven out of fifteen to rebound within one meter of the back wall."
    },

    // ==========================================
    // CHAPTER 6: MISTAKE 5: THE MID-COURT FREEZE (s65 - s78)
    // ==========================================
    {
      id: "s65",
      kind: "title",
      chapter: "Mistake 5: The Mid-Court Freeze",
      heading: "Mistake 5: The Mid-Court Freeze",
      subtitle: "The chassé and net recovery loop",
      style: "brand",
      transition: "push",
      narration: "The final mistake is not about how you swing; it is about what you do after you hit."
    },
    {
      id: "s66",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_finish", at: 0 },
        { pose: "tired_front", at: "@freeze" }
      ],
      props: { r: "padel" },
      headline: { text: "Frozen in Mid-Court", highlight: "Frozen", at: "@freeze", side: "right", top: 200 },
      narration: "Most intermediate players hit their bandeja and freeze in the middle of the court to admire their shot."
    },
    {
      id: "s67",
      kind: "stat",
      background: "spotlight",
      value: 4.5,
      decimals: 1,
      suffix: " m",
      label: "Transition Zone Depth",
      sub: "No-man's land (3 to 6 meters from net)",
      narration: "Standing three to six meters from the net puts you in no-man's-land, surrendering the net advantage."
    },
    {
      id: "s68",
      kind: "slam",
      text: "Never Backpedal Upright",
      highlight: "Backpedal",
      style: "dark",
      icon: "cross",
      sub: "High fall risk & Achilles rupture hazard",
      narration: "Furthermore, backpedaling heel-to-toe shifts your center of gravity behind your heels, risking severe falls and acute Achilles tendon ruptures."
    },
    {
      id: "s69",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "walk_b", at: "@chassé" }
      ],
      props: { r: "padel" },
      headline: { text: "90° Pivot & Backward Chassé", highlight: "Chassé", at: "@pivot", side: "right", top: 200 },
      narration: "The proper footwork is the backward chassé: pivot your feet ninety degrees sideways on the first frame of the lob, and glide backward on the balls of your feet with knees flexed."
    },
    {
      id: "s70",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja", at: "@turf" }
      ],
      props: { r: "padel" },
      headline: { text: "Plant Rear Foot Solidly", highlight: "Plant", at: "@plant", side: "right", top: 200 },
      narration: "Plant your back foot into the turf to establish a stable kinetic base."
    },
    {
      id: "s71",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_finish", at: 0 },
        { pose: "sprint", at: "@forward" }
      ],
      props: { r: "padel" },
      headline: { text: "Weight Transfer Launch", highlight: "Transfer", at: "@transfer", side: "right", top: 200 },
      narration: "As you cut through the ball, transfer your weight onto your front foot, pushing you naturally forward into a recovery sprint."
    },
    {
      id: "s72",
      kind: "stat",
      background: "spotlight",
      value: 2.0,
      decimals: 1,
      suffix: " m",
      label: "Net Dominance Boundary",
      sub: "2.0 to 2.5 meters from net tape",
      narration: "Your stroke is not finished until you sprint forward and split-step at the net dominance line, two to two-point-five meters from the net tape."
    },
    {
      id: "s73",
      kind: "slam",
      text: "Bandeja-to-Volley Shuttle",
      highlight: "Shuttle",
      style: "brand",
      icon: "bolt",
      sub: "Complete tactical loop training",
      narration: "Master this with the Bandeja-to-Volley Shuttle Drill."
    },
    {
      id: "s74",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja", at: 0 },
        { pose: "sprint", at: "@immediately" },
        { pose: "padel_ready", at: "@blocking" }
      ],
      props: { r: "padel" },
      headline: { text: "Sprint To 2-Meter Line", highlight: "2-Meter", at: "@sprint", side: "right", top: 200 },
      narration: "Start at the net line, chassé backward behind the service line to hit a bandeja, and immediately sprint forward to the two-meter net dominance line before blocking a low volley."
    },
    {
      id: "s75",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "present", at: "@shuttle" }
      ],
      props: { r: "padel" },
      headline: { text: "5 Sets of 6 Shuttles", highlight: "5 Sets", at: "@five", side: "right", top: 200 },
      narration: "Complete five sets of six full shuttle sequences, keeping your backward footwork sideways and your forward sprint explosive."
    },

    // ==========================================
    // CHAPTER 7: 4-WEEK MASTERY PLAN (s76 - s83)
    // ==========================================
    {
      id: "s76",
      kind: "title",
      chapter: "4-Week Mastery Plan",
      heading: "4-Week Bandeja Mastery Plan",
      subtitle: "From weak overhead to net dominance",
      style: "bold",
      transition: "fade",
      narration: "To turn these five fixes into permanent instincts, dedicate your next month of training to three weekly sessions."
    },
    {
      id: "s77",
      kind: "list",
      title: "Your 4-Week Bandeja Blueprint",
      items: [
        "Week 1: Glass ceiling drill (75% under target line)",
        "Week 2: Left-hand catch drill (45° tracking arm)",
        "Week 3: 1 o'clock contact with Continental slice",
        "Week 4: Chassé & sprint shuttle to 2m net line"
      ],
      mascot: {
        pose: "present",
        r: "padel"
      },
      narration: "In week one, eliminate the flat smash: practice the glass ceiling drill until seventy-five percent of your overheads stay below the target line."
    },
    {
      id: "s78",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "point_up", at: "@tracking" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 2: Lock The Tracking Arm", highlight: "Week 2", at: "@two", side: "right", top: 200 },
      narration: "In week two, lock the tracking arm: practice the left-hand catch drill to keep your shoulder plane elevated and your eye on the ball."
    },
    {
      id: "s79",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 },
        { pose: "bandeja", at: "@carve" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 3: 1 O'Clock Slice Carve", highlight: "Week 3", at: "@three", side: "right", top: 200 },
      narration: "In week three, groove the contact point: pre-set the serving tray at one o'clock with a flexed elbow and carve with a firm Continental grip."
    },
    {
      id: "s80",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "walk_b", at: 0 },
        { pose: "sprint", at: "@recovery" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 4: Connect Footwork Loop", highlight: "Week 4", at: "@four", side: "right", top: 200 },
      narration: "In week four, connect the footwork loop: combine backward chassé steps with an immediate recovery sprint back to the two-meter net dominance line."
    },
    {
      id: "s81",
      kind: "slam",
      text: "Master The Deep Lob",
      highlight: "Deep Lob",
      style: "brand",
      icon: "bolt",
      sub: "No longer pushed around at the net",
      subAt: "@longer",
      narration: "Master the bandeja, and deep lobs will no longer push you around."
    },
    {
      id: "s82",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "celebrate", at: "@dominate" }
      ],
      props: { r: "padel" },
      headline: { text: "Control The Glass & Net", highlight: "Control", at: "@neutralize", side: "right", top: 200 },
      narration: "You will neutralize aggressive attacks, control the glass, and dominate the net in every single match."
    },
    {
      id: "s83",
      kind: "slam",
      text: "See You On The Courts",
      highlight: "Padel",
      style: "brand",
      icon: "bolt",
      sub: "The Orange Athlete • Train Smarter",
      narration: "See you on the padel courts."
    }
  ]
};

fs.writeFileSync(
  "episodes/your-padel-bandeja-is-weak-here-s-why/storyboard.json",
  JSON.stringify(storyboard, null, 2)
);
console.log(`✓ Wrote storyboard.json with ${storyboard.scenes.length} scenes`);
