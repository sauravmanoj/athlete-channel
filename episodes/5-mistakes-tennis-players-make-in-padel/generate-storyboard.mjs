import fs from "node:fs";

const storyboard = {
  title: "5 mistakes tennis players make in padel",
  thumbnail: {
    pose: "flinch",
    face: "tired",
    background: "court",
    headline: "Stop Hitting Hard",
    highlight: "Hard",
    icons: [
      {
        icon: "cross",
        size: 1.3
      }
    ],
    opponent: {
      pose: "celebrate"
    },
    side: "right"
  },
  youtube: {
    title: "5 mistakes tennis players make in padel (and how to fix them)",
    titleOptions: [
      "Why tennis players struggle in padel: the 5 transition mistakes",
      "How to transition from tennis to padel without destroying your game"
    ],
    description: "Are your tennis instincts sabotaging your padel game? We break down the 5 biggest mistakes tennis players make when stepping onto a padel court: the glass power trap, the lob misunderstanding, baseline camping, wall panic, and excessive backswings. Discover the physics of tempered glass rebounds, net dominance data (>80% win rate), and the biomechanics of the bandeja to protect your elbow and dominate the court.",
    tags: [
      "padel for tennis players",
      "padel mistakes",
      "padel tactics",
      "padel bandeja tutorial",
      "padel wall defense",
      "how to play padel",
      "tennis vs padel",
      "padel tips",
      "padel elbow prevention",
      "padel net strategy",
      "padel lob tutorial",
      "padel beginner mistakes"
    ]
  },
  scenes: [
    // ==========================================
    // CHAPTER 1: HOOK (s01 - s05)
    // ==========================================
    {
      id: "s01",
      kind: "mascot",
      chapter: "Intro",
      background: "court",
      transition: "fade",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "serve", at: "@serve" }
      ],
      props: { r: "padel" },
      headline: { text: "15 Years of Tennis", highlight: "Tennis", at: "@fifteen", side: "right" },
      narration: "You step onto a padel court with fifteen years of tennis experience and a heavy serve."
    },
    {
      id: "s02",
      kind: "versus",
      background: "court",
      left: {
        label: "You (Tennis Pro)",
        pose: "tired_front"
      },
      right: {
        label: "Recreational Pair",
        pose: "celebrate"
      },
      vs: "VS",
      narration: "Ten minutes in, you are losing to two recreational players who barely look athletic."
    },
    {
      id: "s03",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_back", at: 0 },
        { pose: "drive_finish", at: "@crush" },
        { pose: "flinch", at: "@winner" }
      ],
      props: { r: "padel" },
      headline: { text: "The Easy Winner", highlight: "Winner", at: "@winner", side: "right" },
      narration: "Every time you crush a forehand, they smile and tap an easy winner into an open court."
    },
    {
      id: "s04",
      kind: "slam",
      text: "Instincts sabotaging you",
      highlight: "sabotaging",
      style: "dark",
      icon: "cross",
      sub: "Tennis reflexes fail in a glass box",
      narration: "Your tennis instincts are actively sabotaging your game."
    },
    {
      id: "s05",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "think", at: 0 },
        { pose: "present", at: "@Today" },
        { pose: "point_up", at: "@fix" }
      ],
      props: { r: "padel" },
      headline: { text: "The 5 Fixes", highlight: "Fixes", at: "@five", side: "right" },
      narration: "Today, I will show you the five tennis habits killing your progress, the physics behind them, and how to fix them."
    },

    // ==========================================
    // CHAPTER 2: THE 5 TRANSITION TRAPS (s06 - s11)
    // ==========================================
    {
      id: "s06",
      kind: "title",
      chapter: "The 5 transition traps",
      number: 1,
      heading: "The 5 transition traps",
      sub: "Why tennis rules fail in padel",
      mascot: { pose: "present" },
      transition: "push",
      narration: "Padel looks like tennis in a glass box, but tactically, it is almost the exact opposite."
    },
    {
      id: "s07",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_through", at: 0 },
        { pose: "celebrate", at: "@ends" }
      ],
      props: { r: "padel" },
      headline: { text: "Tennis: Open Court", highlight: "Open", at: "@open", side: "right" },
      narration: "In tennis, hitting hard into open court ends the point."
    },
    {
      id: "s08",
      kind: "mascot",
      background: "court",
      position: "right",
      facing: "left",
      poses: [
        { pose: "flinch", at: 0 },
        { pose: "hands_knees", at: "@counter" }
      ],
      props: { r: "padel" },
      headline: { text: "Padel: Glass Rebound", highlight: "Glass", at: "@glass", side: "left" },
      narration: "In padel, hitting hard against the glass feeds your opponent an easy counter."
    },
    {
      id: "s09",
      kind: "slam",
      text: "Baseline is a death sentence",
      highlight: "death",
      style: "brand",
      icon: "cross",
      sub: "Tennis comfort zone becomes padel prison",
      narration: "In tennis, the baseline is home. In padel, camping back there is a statistical death sentence."
    },
    {
      id: "s10",
      kind: "lineup",
      title: "The 5 transition habits to unlearn",
      highlight: 1,
      members: [
        { pose: "smash", label: "1. Power", sub: "over-hitting" },
        { pose: "lob", label: "2. Lob", sub: "misunderstood" },
        { pose: "tired_front", label: "3. Baseline", sub: "camping deep" },
        { pose: "flinch", label: "4. Glass", sub: "wall panic" },
        { pose: "swing_back", label: "5. Swings", sub: "huge loops" }
      ],
      narration: "To unlock your skills, you must unlearn five habits: the power trap, the lob misunderstanding, baseline camping, wall panic, and large looping swings."
    },
    {
      id: "s11",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "arms_crossed", at: 0 },
        { pose: "flex", at: "@unfair" }
      ],
      props: { r: "padel" },
      headline: { text: "Unfair Advantage", highlight: "Advantage", at: "@five", side: "right" },
      narration: "Master these five shifts, and your tennis background becomes an unfair advantage."
    },

    // ==========================================
    // CHAPTER 3: MISTAKE 1: THE POWER TRAP (s12 - s24)
    // ==========================================
    {
      id: "s12",
      kind: "title",
      chapter: "Mistake 1: The power trap",
      number: 2,
      heading: "Mistake 1: The power trap",
      sub: "Why hitting hard feeds your opponents",
      mascot: { pose: "smash" },
      transition: "push",
      narration: "In tennis, hitting hard and deep wins points because the court ends at the baseline."
    },
    {
      id: "s13",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@tempered" }
      ],
      props: { r: "padel" },
      headline: { text: "10mm Tempered Glass", highlight: "Glass", at: "@tempered", side: "right" },
      narration: "In padel, the court ends in 10-millimeter tempered glass."
    },
    {
      id: "s14",
      kind: "stat",
      value: 70,
      suffix: "%",
      label: "Ball speed returned off the glass (e ≈ 0.70)",
      highlight: "speed returned",
      icon: "bolt",
      mascot: { pose: "think" },
      at: "@70",
      narration: "Tempered glass returns up to 70 percent of incoming ball speed back into the court."
    },
    {
      id: "s15",
      kind: "custom",
      file: "custom/rebound_physics.html",
      narration: "When you blast a flat drive or smash, the ball hits the turf, slams the back glass, and rebounds waist-high into the court."
    },
    {
      id: "s16",
      kind: "mascot",
      background: "court",
      position: "right",
      facing: "left",
      poses: [
        { pose: "facepalm", at: 0 },
        { pose: "shrug", at: "@sitter" }
      ],
      props: { r: "padel" },
      headline: { text: "The Easy Sitter", highlight: "Sitter", at: "@sitter", side: "left" },
      narration: "You served an easy sitter to two waiting opponents."
    },
    {
      id: "s17",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_through", at: 0 },
        { pose: "flinch", at: "@kicks" }
      ],
      props: { r: "padel" },
      headline: { text: "Topspin Kicks Up", highlight: "Topspin", at: "@top", side: "right" },
      narration: "Topspin makes it worse: it grips the vertical glass and kicks upward into an easy kill."
    },
    {
      id: "s18",
      kind: "slam",
      text: "Brick fireplace rebound",
      highlight: "fireplace",
      style: "dark",
      icon: "fire",
      sub: "Harder in = faster out",
      narration: "Crushing the ball into the glass is like throwing a rubber ball at a brick fireplace; it ricochets straight back at you."
    },
    {
      id: "s19",
      kind: "chart",
      title: "Attacking shot breakdown (Pro Finals)",
      unit: "%",
      focus: 2,
      mascot: { pose: "present" },
      bars: [
        { label: "Volleys", value: 65, color: "#2B6CB0" },
        { label: "Bandejas", value: 23, color: "#10B981" },
        { label: "All Smashes", value: 12, color: "#EF4444" }
      ],
      narration: "In one study of pro finals, smashes made up only 12 percent of attacking shots—and flat smashes were only a fraction of those."
    },
    {
      id: "s20",
      kind: "stat",
      value: 65,
      suffix: "%",
      label: "Volleys dominate attacking actions",
      highlight: "Volleys dominate",
      icon: "target",
      mascot: { pose: "point_up" },
      at: "@65",
      narration: "Volleys account for roughly 65 percent of attacking shots, and slice bandejas make up 23 percent."
    },
    {
      id: "s21",
      kind: "slam",
      text: "The low-rebound rule",
      highlight: "low-rebound",
      style: "brand",
      icon: "target",
      sub: "60-70% pace + heavy underspin",
      narration: "The fix is the low-rebound rule: keep groundstrokes at 60 to 70 percent pace with heavy underspin."
    },
    {
      id: "s22",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "short_back", at: 0 },
        { pose: "soft_hit", at: "@Slice" }
      ],
      props: { r: "padel" },
      headline: { text: "Slice Dies Low", highlight: "Dies", at: "@dies", side: "right" },
      narration: "Slice bites the glass and dies downward onto the turf."
    },
    {
      id: "s23",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "soft_hit", at: "@slice" },
        { pose: "point_up", at: "@twice" }
      ],
      props: { r: "padel" },
      headline: { text: "Glass Rebound Drill", highlight: "Rebound", at: "@Rebound", side: "right" },
      narration: "Train the Glass Rebound Gauge drill: hit baseline slice drives so the glass rebound bounces twice before the service line."
    },
    {
      id: "s24",
      kind: "list",
      title: "Glass rebound gauge protocol",
      mascot: { pose: "point_up" },
      items: [
        { text: "4 sets of 10 reps per side", icon: "stopwatch", at: "@4" },
        { text: "60 seconds rest between sets", icon: "clock", at: "@60" },
        { text: "Double bounce before service line", icon: "target", at: "@side" }
      ],
      narration: "Do 4 sets of 10 reps on each side, resting 60 seconds."
    },

    // ==========================================
    // CHAPTER 4: MISTAKE 2: THE LOB MISUNDERSTANDING (s25 - s37)
    // ==========================================
    {
      id: "s25",
      kind: "title",
      chapter: "Mistake 2: The lob",
      number: 3,
      heading: "Mistake 2: The lob misunderstanding",
      sub: "Padel's ultimate offensive weapon",
      mascot: { pose: "lob" },
      transition: "push",
      narration: "In tennis, the lob is a defensive bail-out when stretched wide."
    },
    {
      id: "s26",
      kind: "slam",
      text: "#1 Offensive Weapon",
      highlight: "Offensive",
      style: "brand",
      icon: "target",
      sub: "The lob is not an emergency hail mary",
      narration: "In padel, the lob is the single most important offensive weapon in the sport."
    },
    {
      id: "s27",
      kind: "stat",
      value: 60,
      suffix: "%",
      label: "of successful net recoveries use the lob",
      highlight: "net recoveries",
      icon: "bolt",
      mascot: { pose: "point_up" },
      at: "@60",
      narration: "Match data shows players choose the lob in over 60 percent of successful transitions from defense to offense."
    },
    {
      id: "s28",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "present", at: "@guarded" }
      ],
      props: { r: "padel" },
      headline: { text: "10m Court Width", highlight: "10m", at: "@ten", side: "right" },
      narration: "A padel court is only 10 meters wide, guarded by two net players."
    },
    {
      id: "s29",
      kind: "mascot",
      background: "court",
      position: "right",
      facing: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "shrug", at: "@rebound" }
      ],
      props: { r: "padel" },
      headline: { text: "Passing Shots Fail", highlight: "Fail", at: "@Passing", side: "left" },
      narration: "Blasting passing shots gives them easy reflex volleys, and missed balls rebound off the glass anyway."
    },
    {
      id: "s30",
      kind: "stat",
      value: 3,
      suffix: " s",
      label: "Airtime of a 7m lob to steal the net",
      highlight: "Airtime",
      icon: "stopwatch",
      mascot: { pose: "sprint" },
      at: "@3",
      narration: "A high lob stays airborne for 3 seconds, giving you and your partner time to sprint forward and steal the net."
    },
    {
      id: "s31",
      kind: "slam",
      text: "Castling in chess",
      highlight: "Castling",
      style: "dark",
      icon: "trophy",
      sub: "Evicts opponents from the high ground",
      narration: "A padel lob is like castling in chess: it evicts opponents from the high ground and flips court control."
    },
    {
      id: "s32",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "lob_load", at: 0 },
        { pose: "lob", at: "@knees" }
      ],
      props: { r: "padel" },
      callouts: [
        { label: "Knee Extension", target: "rKnee", at: "@knees" },
        { label: "20° Face Tilt", target: "rHand", at: "@degrees" },
        { label: "Shoulder Lift", target: "rShoulder", at: "@shoulder" }
      ],
      narration: "The fix is the high-arc baseline eviction. Bend your knees, tilt the paddle face up 20 degrees, and lift with your legs and shoulder rather than flicking your wrist."
    },
    {
      id: "s33",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "point_up", at: 0 },
        { pose: "present", at: "@deep" }
      ],
      props: { r: "padel" },
      headline: { text: "Deep Target Zone", highlight: "Target", at: "@deep", side: "right" },
      narration: "Aim deep, between the service line and the back glass."
    },
    {
      id: "s34",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "lob", at: "@lobs" }
      ],
      props: { r: "padel" },
      headline: { text: "Lob Target Box", highlight: "Box", at: "@drill", side: "right" },
      narration: "Practice the Lob Target Box drill: mark a 2-meter box in the back corner and hit high lobs off fed volleys."
    },
    {
      id: "s35",
      kind: "list",
      title: "Lob target box dosage",
      mascot: { pose: "point_up" },
      items: [
        { text: "4 sets of 12 reps", icon: "stopwatch", at: 0.3 },
        { text: "45 seconds rest", icon: "clock", at: "@twelve" },
        { text: "Apex height > 6 meters", icon: "target", at: "@resting" }
      ],
      narration: "Do 4 sets of 12 reps, resting 45 seconds."
    },
    {
      id: "s36",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "lob", at: 0 },
        { pose: "sprint", at: "@sprint" }
      ],
      props: { r: "padel" },
      headline: { text: "Lob and Charge", highlight: "Charge", at: "@Charge", side: "right" },
      narration: "Then run the Lob and Charge drill: lob deep, and the instant it clears the net players, call your lanes and sprint forward to lock in at the 3-meter net line together."
    },

    // ==========================================
    // CHAPTER 5: MISTAKE 3: BASELINE CAMPING (s37 - s48)
    // ==========================================
    {
      id: "s37",
      kind: "title",
      chapter: "Mistake 3: Baseline camping",
      number: 4,
      heading: "Mistake 3: Baseline camping",
      sub: "Why you must claim the net",
      mascot: { pose: "tired_front" },
      transition: "push",
      narration: "Modern tennis is dominated by baseline rallies, with players contesting over 75 to 80 percent of points from behind the baseline."
    },
    {
      id: "s38",
      kind: "slam",
      text: "Baseline destroys your win rate",
      highlight: "destroys",
      style: "dark",
      icon: "cross",
      sub: "Statistical trap for tennis players",
      narration: "In padel, staying back destroys your win rate."
    },
    {
      id: "s39",
      kind: "stat",
      value: 80,
      suffix: "%+",
      label: "of all points in padel are won at the net",
      highlight: "won at the net",
      icon: "trophy",
      mascot: { pose: "celebrate" },
      at: "@80",
      narration: "Research shows over 80 percent of all points in padel are won by the team occupying the net."
    },
    {
      id: "s40",
      kind: "versus",
      background: "court",
      left: {
        label: "Winners (85% Attacks)",
        pose: "celebrate"
      },
      right: {
        label: "Losers (<50% Attacks)",
        pose: "tired_front"
      },
      vs: "VS",
      narration: "Winning pairs attack in 85 percent of points, while losing pairs attack in barely half."
    },
    {
      id: "s41",
      kind: "stat",
      value: 70,
      suffix: "%",
      label: "of court geometry surrendered at baseline",
      highlight: "geometry surrendered",
      icon: "target",
      mascot: { pose: "facepalm" },
      at: "@70",
      narration: "Staying back surrenders 70 percent of the court geometry to your opponents."
    },
    {
      id: "s42",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "flinch", at: "@diagonal" }
      ],
      props: { r: "padel" },
      headline: { text: "The Split Pair Hole", highlight: "Hole", at: "@diagonal", side: "right" },
      narration: "Worse, if one partner rushes forward while the other camps back, you open a huge diagonal channel down the middle."
    },
    {
      id: "s43",
      kind: "slam",
      text: "The 11-man penalty box",
      highlight: "penalty",
      style: "dark",
      icon: "football",
      sub: "You can defend, but you cannot score",
      narration: "Camping on the baseline is like packing all eleven soccer players inside your own penalty box; you cannot score from there."
    },
    {
      id: "s44",
      kind: "slam",
      text: "The 3-meter net lock",
      highlight: "3-meter",
      style: "brand",
      icon: "target",
      sub: "Stand 2.5 to 3.0 meters behind the net",
      narration: "The fix is the 3-meter net lock: position yourself 2.5 to 3 meters behind the net cord."
    },
    {
      id: "s45",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "block", at: "@intercept" }
      ],
      props: { r: "padel" },
      headline: { text: "The Volley Sweet Spot", highlight: "Sweet", at: "@Sweet", side: "right" },
      narration: "This sweet spot lets you intercept volleys above net level while leaving room to backpedal for lobs."
    },
    {
      id: "s46",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "present", at: "@Invisible" },
        { pose: "padel_ready", at: "@shadow" }
      ],
      props: { r: "padel" },
      headline: { text: "The Invisible Rope", highlight: "Rope", at: "@Invisible", side: "right" },
      narration: "Train the Invisible Rope drill: connect yourselves with an imaginary 3-meter cord during shadow footwork or mirror rallies without physical tethering."
    },
    {
      id: "s47",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "sprint", at: "@forward" },
        { pose: "padel_ready", at: "@retreats" }
      ],
      props: { r: "padel" },
      headline: { text: "Tandem Synchrony", highlight: "Tandem", at: "@forward", side: "right" },
      narration: "When one moves forward, both move forward; when one retreats, both retreat."
    },
    {
      id: "s48",
      kind: "list",
      title: "Tandem movement protocol",
      mascot: { pose: "point_up" },
      items: [
        { text: "3 sets of 5-minute continuous rallies", icon: "stopwatch", at: "@3" },
        { text: "90 seconds rest between sets", icon: "clock", at: "@90" },
        { text: "Maintain matched depth at all times", icon: "target", at: "@rallies" }
      ],
      narration: "Do 3 sets of 5-minute continuous rallies, resting 90 seconds."
    },

    // ==========================================
    // CHAPTER 6: MISTAKE 4: WALL PANIC (s49 - s60)
    // ==========================================
    {
      id: "s49",
      kind: "title",
      chapter: "Mistake 4: Wall panic",
      number: 5,
      heading: "Mistake 4: Wall panic",
      sub: "How the glass becomes your best friend",
      mascot: { pose: "flinch" },
      transition: "push",
      narration: "In tennis, if the ball gets behind you, the point is over."
    },
    {
      id: "s50",
      kind: "mascot",
      background: "court",
      position: "right",
      facing: "left",
      poses: [
        { pose: "flinch", at: 0 },
        { pose: "hands_knees", at: "@panic" }
      ],
      props: { r: "padel" },
      headline: { text: "Shoelace Half-Volleys", highlight: "Shoelace", at: "@shoelaces", side: "left" },
      narration: "When a fast ball travels deep toward the corners, tennis players panic and try awkward half-volleys off their shoelaces."
    },
    {
      id: "s51",
      kind: "slam",
      text: "The glass is your ally",
      highlight: "ally",
      style: "brand",
      icon: "check",
      sub: "Let the ball pass you by design",
      narration: "In padel, the back glass is your ultimate ally."
    },
    {
      id: "s52",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@absorbs" }
      ],
      props: { r: "padel" },
      headline: { text: "Momentum Absorption", highlight: "Absorption", at: "@absorbs", side: "right" },
      narration: "When a fast ball passes you, letting it strike the turf and glass absorbs its forward momentum."
    },
    {
      id: "s53",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "soft_hit", at: "@strike" }
      ],
      props: { r: "padel" },
      headline: { text: "Manageable Speed", highlight: "Speed", at: "@speed", side: "right" },
      narration: "The ball rebounds forward into your strike zone at a slower, manageable speed."
    },
    {
      id: "s54",
      kind: "slam",
      text: "Angle In = Angle Out",
      highlight: "Angle",
      style: "dark",
      icon: "target",
      sub: "Law of reflection: specular rebound",
      narration: "By the law of reflection, the angle of entry matches the angle of exit."
    },
    {
      id: "s55",
      kind: "mascot",
      background: "court",
      position: "right",
      facing: "left",
      poses: [
        { pose: "flinch", at: 0 },
        { pose: "facepalm", at: "@sandwiching" }
      ],
      props: { r: "padel" },
      headline: { text: "Sandwiched on the Wall", highlight: "Sandwiched", at: "@sandwiching", side: "left" },
      narration: "Tennis players get trapped because they face the net and backpedal straight back, sandwiching themselves against the wall."
    },
    {
      id: "s56",
      kind: "slam",
      text: "The revolving door",
      highlight: "revolving",
      style: "dark",
      icon: "clock",
      sub: "Don't fight the spin—step aside",
      narration: "Fighting the glass is like trying to jump through a revolving door at full sprint. Step aside, let it turn, and walk through smoothly."
    },
    {
      id: "s57",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "short_back", at: "@rotate" }
      ],
      props: { r: "padel" },
      headline: { text: "Open the Door", highlight: "Door", at: "@door", side: "right" },
      narration: "The fix is to open the door. The moment the ball crosses the service line, rotate your shoulders 90 degrees sideways."
    },
    {
      id: "s58",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "short_back", at: 0 },
        { pose: "soft_hit", at: "@strike" }
      ],
      props: { r: "padel" },
      headline: { text: "Strike Out in Front", highlight: "Front", at: "@front", side: "right" },
      narration: "Let the ball pass your hips, bounce off the glass, and strike it on its forward path out in front."
    },
    {
      id: "s59",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@Catch" }
      ],
      props: {},
      headline: { text: "Catch & Hit Glass", highlight: "Catch", at: "@Catch", side: "right" },
      narration: "Train the Catch and Hit Glass drill: without a racket, have a partner feed deep balls into the back corner."
    },
    {
      id: "s60",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "dink", at: "@catch" }
      ],
      props: {},
      headline: { text: "Catch at Hip Height", highlight: "Hip", at: "@turf", side: "right" },
      narration: "Turn sideways, let the ball bounce on the turf, strike the glass, and catch it in front of your hip."
    },
    {
      id: "s61",
      kind: "list",
      title: "Catch and hit progression",
      mascot: { pose: "point_up" },
      items: [
        { text: "Phase 1: 2 sets of 10 catches per side", icon: "check", at: 0.3 },
        { text: "Phase 2: 4 sets of 12 slice drives", icon: "target", at: "@each" },
        { text: "Dynamic forward adjustment steps", icon: "stopwatch", at: "@four" }
      ],
      narration: "Do 2 sets of 10 catches on each side, then hit 4 sets of 12 slice drives off the rebound."
    },

    // ==========================================
    // CHAPTER 7: MISTAKE 5: BIG SWINGS & BANDEJA (s62 - s78)
    // ==========================================
    {
      id: "s62",
      kind: "title",
      chapter: "Mistake 5: Big swings & bandeja",
      number: 6,
      heading: "Mistake 5: Big tennis swings",
      sub: "The biomechanical fix for elbow and shoulder",
      mascot: { pose: "bandeja_prep" },
      transition: "push",
      narration: "This is the most dangerous mistake for a tennis player, both for your score and your body."
    },
    {
      id: "s63",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_back", at: 0 },
        { pose: "drive_finish", at: "@top" }
      ],
      props: { r: "padel" },
      headline: { text: "Looped Backswings", highlight: "Looped", at: "@looping", side: "right" },
      narration: "Tennis players use huge, looping backswings with Western grips to generate topspin."
    },
    {
      id: "s64",
      kind: "stat",
      value: 12,
      suffix: " s",
      label: "Average padel point duration (rapid exchanges)",
      highlight: "point duration",
      icon: "stopwatch",
      mascot: { pose: "ready" },
      at: "@10",
      narration: "Padel points average 10 to 15 seconds with rapid exchanges."
    },
    {
      id: "s65",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_back", at: 0 },
        { pose: "flinch", at: "@late" }
      ],
      props: { r: "padel" },
      headline: { text: "Late Contact Jam", highlight: "Late", at: "@late", side: "right" },
      narration: "A big backswing means your racket is still traveling backward when the ball arrives, forcing late contact and wrist flicking."
    },
    {
      id: "s66",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "present", at: 0 },
        { pose: "point_up", at: "@solid" }
      ],
      props: { r: "padel" },
      headline: { text: "Solid Composite Plate", highlight: "Solid", at: "@solid", side: "right" },
      narration: "A padel racket is a solid composite plate with no strings to absorb vibration."
    },
    {
      id: "s67",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "flinch", at: 0 },
        { pose: "hold_back", at: "@shock" }
      ],
      props: { r: "padel" },
      callouts: [
        { label: "ECRB Tendon Shock", target: "rElbow", at: "@shock" }
      ],
      narration: "Striking off-center with a loose wrist sends harsh impact shocks straight into your forearm extensor tendon."
    },
    {
      id: "s68",
      kind: "stat",
      value: 20,
      suffix: "%+",
      label: "of all padel injuries are lateral epicondylitis",
      highlight: "padel injuries",
      icon: "muscle",
      mascot: { pose: "flinch" },
      at: "@20",
      narration: "Lateral epicondylitis, or padel elbow, accounts for over 20 percent of all padel injuries."
    },
    {
      id: "s69",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "serve", at: 0 },
        { pose: "flinch", at: "@pinches" }
      ],
      props: { r: "padel" },
      callouts: [
        { label: "Rotator Cuff Impingement", target: "rShoulder", at: "@pinches", dy: -60, dist: 300 }
      ],
      narration: "And when tennis players jump for high balls with a tennis service motion, violent internal shoulder rotation pinches the rotator cuff, causing 15 percent of injuries."
    },
    {
      id: "s70",
      kind: "slam",
      text: "Semi-truck in a go-kart track",
      highlight: "go-kart",
      style: "dark",
      icon: "fire",
      sub: "The turning radius is too wide",
      narration: "Playing padel with a tennis swing is like driving an 18-wheel truck through an indoor go-kart track; the turning radius is too wide."
    },
    {
      id: "s71",
      kind: "slam",
      text: "Punch volley & bandeja",
      highlight: "bandeja",
      style: "brand",
      icon: "target",
      sub: "Compact levers beat big swings",
      narration: "The fix has two parts: the compact punch volley and the bandeja."
    },
    {
      id: "s72",
      kind: "stat",
      value: 80,
      suffix: "%",
      label: "of padel shots use the Continental hammer grip",
      highlight: "Continental hammer grip",
      icon: "target",
      mascot: { pose: "point_up" },
      at: "@80",
      narration: "Use a continental hammer grip for 80 percent of your shots."
    },
    {
      id: "s73",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "short_back", at: "@never" },
        { pose: "soft_hit", at: "@punch" }
      ],
      props: { r: "padel" },
      headline: { text: "Compact Punch Volley", highlight: "Punch", at: "@Turn", side: "right" },
      narration: "On volleys, never let the racket head travel behind your lead shoulder. Turn your chest, step forward, and punch down with slice."
    },
    {
      id: "s74",
      kind: "slam",
      text: "Replace smash with bandeja",
      highlight: "bandeja",
      style: "brand",
      icon: "target",
      sub: "Control overheads at ear height",
      narration: "On overheads, replace the flat smash with the bandeja."
    },
    {
      id: "s75",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja_prep", at: 0 }
      ],
      props: { r: "padel" },
      callouts: [
        { label: "Ear Height Tray", target: "rHand", at: "@ear", dy: -90, dist: 340 },
        { label: "120° Elbow Flexion", target: "rElbow", at: "@tray", dy: 70, dist: 300 }
      ],
      narration: "Set your racket up like a tray at ear height with an open face."
    },
    {
      id: "s76",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "bandeja", at: 0 },
        { pose: "bandeja_finish", at: "@wrapping" }
      ],
      props: { r: "padel" },
      headline: { text: "The Scarf Follow-Through", highlight: "Scarf", at: "@wrapping", side: "right" },
      narration: "Slice across the bottom of the ball and finish wrapping your racket around your neck like a scarf."
    },
    {
      id: "s77",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "arms_crossed", at: 0 },
        { pose: "flex", at: "@reduces" }
      ],
      props: { r: "padel" },
      headline: { text: "Joint-Friendly Overhead", highlight: "Joint-Friendly", at: "@reduces", side: "right" },
      narration: "The bandeja keeps your elbow bent, drastically reduces shoulder impingement stress, and keeps the ball low off the back glass."
    },
    {
      id: "s78",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "short_back", at: 0 },
        { pose: "soft_hit", at: "@shadow" },
        { pose: "flinch", at: "@clips" }
      ],
      props: { r: "padel" },
      headline: { text: "Wall Behind the Back", highlight: "Wall", at: "@Wall", side: "right" },
      narration: "Practice the Wall Behind the Back drill: stand 30 to 40 centimeters in front of the wall and start with shadow swings or soft hand feeds. If your racket clips the wall on your takeback, reset."
    },
    {
      id: "s79",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "short_back", at: 0 },
        { pose: "soft_hit", at: "@compact" }
      ],
      props: { r: "padel" },
      headline: { text: "4 Sets of 15 Volleys", highlight: "15", at: "@fifteen", side: "right" },
      narration: "Progress to 4 sets of 15 compact volleys."
    },
    {
      id: "s80",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "hold_back", at: 0 },
        { pose: "shrug", at: "@consult" }
      ],
      props: { r: "padel" },
      headline: { text: "Consult a Physio", highlight: "Physio", at: "@stop", side: "right" },
      narration: "If you ever feel burning pain in your outer elbow or sharp catching in your shoulder, stop and consult a sports physiotherapist."
    },

    // ==========================================
    // CHAPTER 8: YOUR TRANSITION PLAN (s81 - s87)
    // ==========================================
    {
      id: "s81",
      kind: "title",
      chapter: "Your transition plan",
      number: 7,
      heading: "Your 4-week transition plan",
      sub: "Reprogramming tennis muscle memory",
      mascot: { pose: "present" },
      transition: "push",
      narration: "Here is how to reprogram your tennis muscle memory over the next 4 weeks."
    },
    {
      id: "s82",
      kind: "list",
      title: "Week 1 & 2 Focus",
      mascot: { pose: "point_up" },
      items: [
        { text: "Week 1: Bandejas at 60% speed", icon: "target", at: "@week" },
        { text: "Cap overhead volume to protect tendons", icon: "muscle", at: "@volume" },
        { text: "Controlled pace on all overheads", icon: "stopwatch", at: "@controlled" }
      ],
      narration: "In week 1, eliminate the flat power smash, cap your overhead volume, and play all overheads as controlled bandejas at 60 percent speed."
    },
    {
      id: "s83",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "lob_load", at: 0 },
        { pose: "lob", at: "@lobs" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 2: Master the Lob", highlight: "Lob", at: "@lobs", side: "right" },
      narration: "In week 2, master the lob: hit at least 5 deep lobs per set to push opponents off the net."
    },
    {
      id: "s84",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@tandem" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 3: Net Lock & Tandem", highlight: "Net", at: "@net", side: "right" },
      narration: "In week 3, implement the 3-meter net rule and tandem movement with your partner."
    },
    {
      id: "s85",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "soft_hit", at: "@rebounds" }
      ],
      props: { r: "padel" },
      headline: { text: "Week 4: Automatic Glass", highlight: "Glass", at: "@glass", side: "right" },
      narration: "In week 4, drill the Catch and Hit off the back glass until wall rebounds feel automatic."
    },
    {
      id: "s86",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "present", at: 0 },
        { pose: "flex", at: "@foam" }
      ],
      props: { r: "padel" },
      headline: { text: "Round Racket + Overgrip", highlight: "Overgrip", at: "@overgrip", side: "right" },
      narration: "To protect your elbow, use a round racket with a soft foam core and add an extra overgrip to reduce forearm strain."
    },

    // ==========================================
    // CHAPTER 9: CLOSE (s87 - s90)
    // ==========================================
    {
      id: "s87",
      kind: "slam",
      chapter: "Summary",
      text: "Tactical chess on glass",
      highlight: "chess",
      style: "brand",
      icon: "trophy",
      sub: "Padel is not mini-tennis",
      narration: "Padel is not mini-tennis; it is tactical chess on a glass board."
    },
    {
      id: "s88",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "point_up", at: "@start" }
      ],
      props: { r: "padel" },
      headline: { text: "Own the Net", highlight: "Net", at: "@start", side: "right" },
      narration: "Stop fighting the glass, stop smashing from deep, and start owning the net."
    },
    {
      id: "s89",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "celebrate", at: 0 },
        { pose: "flex", at: "@skills" }
      ],
      props: { r: "padel" },
      headline: { text: "Work for You", highlight: "Work", at: "@work", side: "right" },
      narration: "The next time you walk onto the court, your tennis skills will finally work for you, not against you."
    },
    {
      id: "s90",
      kind: "mascot",
      background: "brand",
      position: "left",
      poses: [
        { pose: "present", at: 0 },
        { pose: "wave", at: "@description" }
      ],
      props: { r: "padel" },
      headline: { text: "Sources in Description", highlight: "Sources", at: "@Sources", side: "right" },
      narration: "All sources are cited in the description below."
    }
  ]
};

fs.writeFileSync("episodes/5-mistakes-tennis-players-make-in-padel/storyboard.json", JSON.stringify(storyboard, null, 2));
console.log("Generated storyboard.json with", storyboard.scenes.length, "scenes");
