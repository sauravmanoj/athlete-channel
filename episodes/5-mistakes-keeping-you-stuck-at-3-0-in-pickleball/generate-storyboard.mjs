import fs from "node:fs";

const storyboard = {
  title: "5 mistakes keeping you stuck at 3.0 in pickleball",
  thumbnail: {
    pose: "pb_drop",
    face: "focus",
    background: "court",
    headline: "Stuck At 3.0?",
    highlight: "3.0",
    icons: [
      {
        icon: "cross",
        size: 1.3
      }
    ],
    side: "left"
  },
  youtube: {
    title: "5 mistakes keeping you stuck at 3.0 in pickleball",
    titleOptions: [
      "Why you are stuck at 3.0 in pickleball (and how to hit 4.0)",
      "5 pickleball mistakes keeping you in the 3.0 rating trap"
    ],
    description: "Stuck in the 3.0–3.49 pickleball rating plateau? We break down the 5 hidden mechanical and tactical mistakes keeping 29% of players locked at intermediate: the banger trap on low balls, rushing through the transition zone without split-stepping, dropped paddle reaction lag at the kitchen, premature speed-ups below the net tape, and the 8-foot middle court canyon. Learn the evidence-backed fixes and drills to reach 4.0+.",
    tags: [
      "pickleball 3.0 to 4.0",
      "pickleball mistakes",
      "pickleball strategy",
      "pickleball tips",
      "pickleball transition zone",
      "pickleball split step",
      "pickleball ready position",
      "pickleball dink",
      "pickleball doubles strategy",
      "pickleball rating plateau"
    ]
  },
  scenes: [
    // ==========================================
    // CHAPTER 1: INTRO / HOOK (s01 - s06)
    // ==========================================
    {
      id: "s01",
      kind: "title",
      chapter: "The 3.0 Bottleneck",
      heading: "5 Mistakes Keeping You Stuck at 3.0",
      subtitle: "The biomechanics and geometry of reaching 4.0",
      style: "bold",
      transition: "fade",
      narration: "Right now, twenty-nine percent of all rated pickleball players are locked in the three-point-zero to three-point-four-nine bracket."
    },
    {
      id: "s02",
      kind: "stat",
      background: "spotlight",
      value: 29,
      suffix: "%",
      label: "Players Stuck at 3.0–3.49",
      sub: "Global DUPR doubles rating distribution",
      narration: "Only sixteen percent ever break through to four-point-zero or higher."
    },
    {
      id: "s03",
      kind: "stat",
      background: "spotlight",
      value: 16,
      suffix: "%",
      label: "Players Reaching 4.0+",
      sub: "The advanced breakthrough tier",
      narration: "You have the shots, you play every week, but your rating will not budge."
    },
    {
      id: "s04",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "think", at: 0 },
        { pose: "facepalm", at: "@athleticism" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Rating Won't Budge", highlight: "Budge", at: "@athleticism", side: "right", top: 200 },
      narration: "The problem is not your athleticism."
    },
    {
      id: "s05",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "arms_crossed", at: "@better" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "5 Hidden Habits", highlight: "Habits", at: "@hidden", side: "right", top: 200 },
      narration: "It is five hidden habits that work against beginners, but get brutally punished by better players."
    },
    {
      id: "s06",
      kind: "slam",
      text: "5 Plateau Mistakes",
      highlight: "5",
      style: "brand",
      icon: "bolt",
      sub: "The biomechanics & court geometry",
      narration: "Today, we break down the biomechanics and court geometry behind the five mistakes keeping you stuck at three-point-zero, and the exact drills to reach four-point-zero."
    },

    // ==========================================
    // CHAPTER 2: MISTAKE 1: THE BANGER TRAP (s07 - s21)
    // ==========================================
    {
      id: "s07",
      kind: "title",
      chapter: "Mistake 1: The Banger Trap",
      heading: "Mistake 1: The Banger Trap",
      subtitle: "Driving low balls from below the tape",
      style: "brand",
      transition: "push",
      narration: "The clearest sign of a three-point-zero player is hitting every ball as hard as possible."
    },
    {
      id: "s08",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_back", at: 0 },
        { pose: "drive_finish", at: "@feels" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Banging Every Ball", highlight: "Banging", at: "@bounces", side: "right", top: 200 },
      narration: "When a ball bounces below your knees, hitting a hard flat drive feels powerful."
    },
    {
      id: "s09",
      kind: "slam",
      text: "It Is A Trap",
      highlight: "Trap",
      style: "dark",
      icon: "cross",
      sub: "Upward launch angle geometry",
      narration: "Biomechanically, it is a trap."
    },
    {
      id: "s10",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "point_up", at: "@center" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "34\" Center vs 36\" Posts", highlight: "34\"", at: "@specify", side: "right", top: 200 },
      narration: "USA Pickleball rules specify that the net is thirty-six inches high at the posts and thirty-four inches at the center strap."
    },
    {
      id: "s11",
      kind: "stat",
      background: "spotlight",
      value: 34,
      suffix: " in",
      label: "Center Strap Net Height",
      sub: "USA Pickleball Rule 2.C.2",
      narration: "Striking a ball eighteen inches off the ground means you must launch it upward between five and twenty degrees just to clear the tape."
    },
    {
      id: "s12",
      kind: "chart",
      title: "Required Launch Angle by Contact Height",
      bars: [
        { label: "12 in (Ankle)", value: 20, color: "bad" },
        { label: "18 in (Knee)", value: 12, color: "bad" },
        { label: "34 in (Net)", value: 0, color: "good" }
      ],
      narration: "Because a pickleball weighs under one ounce and has high aerodynamic drag, a forty-mile-per-hour drive does not have enough distance for gravity to pull it down."
    },
    {
      id: "s13",
      kind: "stat",
      background: "spotlight",
      value: 0.65,
      decimals: 2,
      suffix: " Cd",
      label: "Aerodynamic Drag Coefficient",
      sub: "Quadratic velocity decay prevents dipping",
      narration: "Your low drive either sails past the baseline, or rises directly into the chest of a net defender who smashes it downward."
    },
    {
      id: "s14",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "flinch", at: "@crash" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Crashing The Barrier", highlight: "Barrier", at: "@car", side: "right", top: 200 },
      narration: "Trying to blast a knee-high ball is like driving a car through an uphill tollgate at a hundred miles per hour: you cannot defy the ramp angle, and you crash into the barrier."
    },
    {
      id: "s15",
      kind: "slam",
      text: "One Rule: Do Not Attack",
      highlight: "Attack",
      style: "dark",
      icon: "cross",
      sub: "Below net level = soft drop only",
      narration: "Four-point-zero players follow one rule: when the ball is below the net, you do not attack."
    },
    {
      id: "s16",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "pb_drop", at: "@soft" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Soft 3rd Shot Drop", highlight: "Drop", at: "@soft", side: "right", top: 200 },
      narration: "You lift a soft third-shot drop that lands gently in the seven-foot kitchen."
    },
    {
      id: "s17",
      kind: "slam",
      text: "Drop vs Drive Drill",
      highlight: "Drill",
      style: "brand",
      icon: "bolt",
      sub: "Binary decision training",
      narration: "Train this with the Drop Versus Drive Decision Drill."
    },
    {
      id: "s18",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@random" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Baseline Feed Drill", highlight: "Baseline", at: "@feed", side: "right", top: 200 },
      narration: "Have a partner feed random high and low balls to the baseline."
    },
    {
      id: "s19",
      kind: "versus",
      vs: "VS",
      left: { label: "Above Waist: Drive", pose: "swing_through", props: { r: "pbpaddle" }, at: "@waist" },
      right: { label: "Below Knees: Drop", pose: "dink", props: { r: "pbpaddle" }, at: "@knees" },
      narration: "If the bounce is above your waist, drive with topspin; if it bounces below your knees, drop softly into the kitchen."
    },
    {
      id: "s20",
      kind: "stat",
      background: "spotlight",
      value: 80,
      suffix: "%",
      label: "Decision Accuracy Benchmark",
      sub: "3 sets × 20 repetitions",
      narration: "Hit three sets of twenty balls, aiming for eighty percent accuracy."
    },
    {
      id: "s21",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "hold_back", at: "@physiotherapist" }
      ],
      callouts: [
        { target: "rElbow", label: "Extensor Tendon", side: "right" }
      ],
      headline: { text: "Protect Your Elbow", highlight: "Elbow", at: "@elbow", side: "right", top: 200 },
      narration: "If you feel elbow pain, stop high-impact drives immediately; if lateral tenderness or grip weakness lasts over two weeks, see a physiotherapist."
    },

    // ==========================================
    // CHAPTER 3: MISTAKE 2: RUSHING THE TRANSITION ZONE (s22 - s36)
    // ==========================================
    {
      id: "s22",
      kind: "title",
      chapter: "Mistake 2: Rushing Transition",
      heading: "Mistake 2: Rushing Transition",
      subtitle: "The 15-foot no-man's-land trap",
      style: "brand",
      transition: "push",
      narration: "The second mistake happens in no-man's-land: the fifteen feet between the baseline and the kitchen line."
    },
    {
      id: "s23",
      kind: "stat",
      background: "spotlight",
      value: 15,
      suffix: " ft",
      label: "Transition Zone Depth",
      sub: "Baseline to Non-Volley Zone line",
      narration: "Three-point-zero players hit a third shot and sprint full speed toward the net."
    },
    {
      id: "s24",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "sprint", at: 0 },
        { pose: "flinch", at: "@fastest" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Blind Charging", highlight: "Charging", at: "@running", side: "right", top: 200 },
      narration: "Running while your opponent strikes the ball is the fastest way to lose the point."
    },
    {
      id: "s25",
      kind: "slam",
      text: "Momentum Traps Feet",
      highlight: "Momentum",
      style: "dark",
      icon: "cross",
      sub: "Forward inertia kills agility",
      narration: "When you sprint forward, your center of mass carries heavy forward momentum."
    },
    {
      id: "s26",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "lunge", at: 0 },
        { pose: "facepalm", at: "@cannot" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Cannot Change Direction", highlight: "Cannot", at: "@cannot", side: "right", top: 200 },
      narration: "If your opponent strikes the ball while you are mid-stride, you cannot change direction."
    },
    {
      id: "s27",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "crouch", at: 0 },
        { pose: "tired_front", at: "@popping" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Off-Balance Pop-Ups", highlight: "Pop-Ups", at: "@lunge", side: "right", top: 200 },
      narration: "Hitting on the run forces an off-balance lunge, popping the ball high into the air."
    },
    {
      id: "s28",
      kind: "stat",
      background: "spotlight",
      value: 30.9,
      decimals: 1,
      suffix: "%",
      label: "Lower-Limb Lunge Trauma",
      sub: "AAOS Foot & Ankle Registry (Kingston 2025)",
      narration: "Orthopedic data shows that over thirty percent of lower-limb pickleball injuries happen during uncontrolled forward lunges in this transition zone."
    },
    {
      id: "s29",
      kind: "slam",
      text: "The Split-Step Solution",
      highlight: "Split-Step",
      style: "brand",
      icon: "bolt",
      sub: "Uzu et al. 2009 Trial (J Sports Sci)",
      narration: "A landmark study by Uzu and colleagues demonstrated that performing a preparatory split-step saves one hundred and four milliseconds of movement time."
    },
    {
      id: "s30",
      kind: "stat",
      background: "spotlight",
      value: 104,
      suffix: " ms",
      label: "Movement Latency Saved",
      sub: "764 ms vs 868 ms (p < 0.01)",
      narration: "A small hop onto the balls of both feet pre-tenses the stretch-shortening cycle in your calves and quads, storing elastic energy to explode in any direction."
    },
    {
      id: "s31",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "sprint", at: 0 },
        { pose: "jump", at: "@split" },
        { pose: "ready", at: "@brake" }
      ],
      headline: { text: "Brake & Steering Wheel", highlight: "Brake", at: "@split", side: "right", top: 200 },
      narration: "Sprinting without stopping is like running across a busy highway with your eyes closed; the split-step is your emergency brake and steering wheel combined."
    },
    {
      id: "s32",
      kind: "slam",
      text: "Move • Split • Hit • Move",
      highlight: "Split",
      style: "brand",
      icon: "bolt",
      sub: "Certified transition cadence",
      narration: "Adopt the certified coaching cadence: move, split-step, hit, move."
    },
    {
      id: "s33",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "sprint", at: 0 },
        { pose: "ready", at: "@split-step" },
        { pose: "dink", at: "@advance" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Plant Before Contact", highlight: "Plant", at: "@balanced", side: "right", top: 200 },
      narration: "Take two forward steps, split-step the moment your opponent begins their swing, hit a balanced reset, and only then advance."
    },
    {
      id: "s34",
      kind: "slam",
      text: "Freeze & Split Drill",
      highlight: "Freeze",
      style: "brand",
      icon: "bolt",
      sub: "Anticipatory deceleration",
      narration: "Practice the Freeze and Split Ladder Drill: advance through the transition zone while a partner feeds drives, shouting freeze on every forward swing."
    },
    {
      id: "s35",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@planted" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "4 Sets of 10 Approaches", highlight: "4 Sets", at: "@sets", side: "right", top: 200 },
      narration: "Complete four sets of ten approaches, ensuring your feet are planted before every strike."
    },
    {
      id: "s36",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "calf_raise", at: "@calves" }
      ],
      callouts: [
        { target: "rCalf", label: "Warm Up Calves", side: "right" }
      ],
      headline: { text: "Court Shoes & Warm Up", highlight: "Shoes", at: "@shoes", side: "right", top: 200 },
      narration: "Wear court shoes with lateral outriggers—not running shoes—and warm up your calves before performing sudden deceleration stops."
    },

    // ==========================================
    // CHAPTER 4: MISTAKE 3: DROPPED PADDLE SYNDROME (s37 - s50)
    // ==========================================
    {
      id: "s37",
      kind: "title",
      chapter: "Mistake 3: Dropped Paddle",
      heading: "Mistake 3: Dropped Paddle",
      subtitle: "The 200 ms reaction gap",
      style: "brand",
      transition: "push",
      narration: "At the kitchen line, intermediate players routinely let their paddle drop down to their hip."
    },
    {
      id: "s38",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "pb_shrug", at: "@fourteen" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "14 Feet Apart", highlight: "14 Feet", at: "@fourteen", side: "right", top: 200 },
      narration: "At the non-volley zone, opposing players stand just fourteen feet apart."
    },
    {
      id: "s39",
      kind: "stat",
      background: "spotlight",
      value: 14,
      suffix: " ft",
      label: "Distance Between Opponents",
      sub: "Non-Volley Zone line to line",
      narration: "A fast kitchen volley travels at thirty-five to forty-five miles per hour and crosses that fourteen-foot gap in just two hundred and ten to two hundred and seventy-five milliseconds."
    },
    {
      id: "s40",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "think", at: 0 },
        { pose: "point_up", at: "@milliseconds" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "280-380 ms Choice RT", highlight: "Choice RT", at: "@choice", side: "right", top: 200 },
      narration: "Human choice reaction time alone requires two hundred and eighty to three hundred and eighty milliseconds."
    },
    {
      id: "s41",
      kind: "stat",
      background: "spotlight",
      value: 330,
      suffix: " ms",
      label: "Visual Choice Reaction Time",
      sub: "Schmidt & Lee Motor Control (280–380 ms)",
      narration: "If your paddle is down at your hip, lifting it twenty inches to your chest adds one hundred and fifty to two hundred and fifty milliseconds of travel time."
    },
    {
      id: "s42",
      kind: "stat",
      background: "spotlight",
      value: 200,
      suffix: " ms",
      label: "Paddle Travel Lag",
      sub: "Lifting from hip to chest height",
      narration: "Together, a dropped paddle creates over five hundred milliseconds of total delay: twice as long as the ball takes to reach you."
    },
    {
      id: "s43",
      kind: "chart",
      title: "Total Response Latency vs Ball Flight",
      bars: [
        { label: "Ball Flight (14 ft)", value: 239, color: "good" },
        { label: "Paddle Up (Ready)", value: 330, color: "hl" },
        { label: "Dropped Paddle Lag", value: 530, color: "bad" }
      ],
      narration: "Playing at the kitchen with your paddle down is like a soccer goalie standing on the line with hands in their pockets."
    },
    {
      id: "s44",
      kind: "stat",
      background: "spotlight",
      value: 3112,
      suffix: "",
      label: "Pickleball Eye Injuries",
      sub: "JAMA Ophthalmology 2025 Registry",
      narration: "Emergency data reveals over three thousand pickleball eye injuries, with forty-three percent caused by direct close-range ball strikes."
    },
    {
      id: "s45",
      kind: "stat",
      background: "spotlight",
      value: 43,
      suffix: "%",
      label: "Direct Ball Strike Rate",
      sub: "Close-range Non-Volley Zone impact",
      narration: "Always wear shatterproof sports glasses meeting ASTM F-three-one-six-four standards at the kitchen line."
    },
    {
      id: "s46",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "padel_ready", at: "@chest" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Chest Shield Ready", highlight: "Chest Shield", at: "@chest", side: "right", top: 200 },
      narration: "The four-point-zero fix is the Chest Shield Ready Position."
    },
    {
      id: "s47",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "padel_ready", at: "@chest" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Chest Shield Home Base", highlight: "Home Base", at: "@sternum", side: "right", top: 200 },
      narration: "Hold your paddle tip up at chest height, eight to twelve inches in front of your sternum, biased to a backhand angle."
    },
    {
      id: "s48",
      kind: "stat",
      background: "spotlight",
      value: 65,
      suffix: " ms",
      label: "Paddle Travel Time",
      sub: "Reduced displacement (4–6 inches)",
      narration: "Because your paddle only travels four inches, your paddle travel time drops under eighty milliseconds."
    },
    {
      id: "s49",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "soft_hit", at: "@relaxed" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "3-4 / 10 Grip Pressure", highlight: "3-4", at: "@grip", side: "right", top: 200 },
      narration: "Keep your grip relaxed at three to four out of ten; death-gripping locks your wrist and slows your hands."
    },
    {
      id: "s50",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "soft_hit", at: "@wall" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Chest Shield Wall Drill", highlight: "Wall Drill", at: "@wall", side: "right", top: 200 },
      narration: "Build this reflex with the Chest Shield Wall Drill: volley twenty to thirty consecutive balls against a wall from seven feet away, keeping your elbows relaxed in front of your ribs."
    },

    // ==========================================
    // CHAPTER 5: MISTAKE 4: PREMATURE SPEED-UPS (s51 - s65)
    // ==========================================
    {
      id: "s51",
      kind: "title",
      chapter: "Mistake 4: Premature Speed-Ups",
      heading: "Mistake 4: Premature Speed-Ups",
      subtitle: "The Traffic Light Rule",
      style: "brand",
      transition: "push",
      narration: "Three-point-zero players suffer from dink impatience."
    },
    {
      id: "s52",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "tired_front", at: "@restless" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Dink Impatience", highlight: "Impatience", at: "@dinks", side: "right", top: 200 },
      narration: "After three or four soft dinks, they get restless and try to speed up a ball that bounced ankle-high."
    },
    {
      id: "s53",
      kind: "slam",
      text: "Mathematical Disaster",
      highlight: "Disaster",
      style: "dark",
      icon: "cross",
      sub: "Low contact = upward launch",
      narration: "Attacking a dead dink from below the net is a mathematical disaster."
    },
    {
      id: "s54",
      kind: "custom",
      file: "custom/traffic_light.html",
      narration: "Elite coaches teach the Traffic Light System."
    },
    {
      id: "s55",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "point_up", at: "@tape" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Red Light: Below 34\"", highlight: "Red Light", at: "@red", side: "right", top: 200 },
      narration: "Red Light balls are any ball contacted below the thirty-four-inch net tape."
    },
    {
      id: "s56",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "flinch", at: "@counter" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Forced Upward Trajectory", highlight: "Upward", at: "@rises", side: "right", top: 200 },
      narration: "Because you must hit upward to clear the net, the ball rises directly into the opponent's counter zone."
    },
    {
      id: "s57",
      kind: "stat",
      background: "spotlight",
      value: 70,
      suffix: "%+",
      label: "Defender Counter Win Rate",
      sub: "Defending speed-ups struck below tape",
      narration: "Match tracking shows that over seventy percent of speed-ups initiated on Red Light balls are won by the defending team."
    },
    {
      id: "s58",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "facepalm", at: "@block" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Feeding An Easy Block", highlight: "Block", at: "@center", side: "right", top: 200 },
      narration: "Speeding up from below the net is like shooting a basketball beneath the backboard with a center standing over you: you are handing them an easy block."
    },
    {
      id: "s59",
      kind: "versus",
      vs: "VS",
      left: { label: "Yellow Light (34\")", pose: "ready", props: { r: "pbpaddle" }, at: "@yellow" },
      right: { label: "Green Light (>34\")", pose: "smash", props: { r: "pbpaddle" }, at: "@tape" },
      narration: "Yellow Light balls sit level with the tape and require an advanced topspin roll."
    },
    {
      id: "s60",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "smash", at: "@tape" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Green Light Above Tape", highlight: "Green Light", at: "@cleanly", side: "right", top: 200 },
      narration: "Green Light balls bounce cleanly above the tape."
    },
    {
      id: "s61",
      kind: "slam",
      text: "Attack Only On Green",
      highlight: "Green",
      style: "brand",
      icon: "bolt",
      sub: "Downward attack velocity",
      narration: "Only on Green Light balls do four-point-zero players unleash attack speed."
    },
    {
      id: "s62",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "dink_b", at: "@appears" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Dink Patience", highlight: "Patience", at: "@patience", side: "right", top: 200 },
      narration: "Four-point-zero players have the patience to sustain dinks until a genuine Green Light appears."
    },
    {
      id: "s63",
      kind: "slam",
      text: "Traffic Light Scoring Game",
      highlight: "Scoring Game",
      style: "brand",
      icon: "bolt",
      sub: "Discipline reinforcement drill",
      narration: "Master this with the Traffic Light Scoring Game."
    },
    {
      id: "s64",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@forfeits" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "-2 Point Penalty on Red", highlight: "Penalty", at: "@rallies", side: "right", top: 200 },
      narration: "Play dink rallies to fifteen points where speeding up a Red Light ball forfeits two penalty points."
    },
    {
      id: "s65",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "squat", at: 0 },
        { pose: "soft_hit", at: "@tendons" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Lift With Legs & Shoulder", highlight: "Legs", at: "@shoulder", side: "right", top: 200 },
      narration: "Lift with your legs and shoulder rather than aggressive wrist-snapping to protect your tendons."
    },
    {
      id: "s66",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "celebrate", at: "@disciplined" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Disciplined Patience", highlight: "Patience", at: "@attack", side: "right", top: 200 },
      narration: "You only attack when the ball floats above the tape, ingraining disciplined patience."
    },

    // ==========================================
    // CHAPTER 6: MISTAKE 5: THE MIDDLE COURT GAP (s67 - s82)
    // ==========================================
    {
      id: "s67",
      kind: "title",
      chapter: "Mistake 5: The Middle Gap",
      heading: "Mistake 5: The Middle Gap",
      subtitle: "The 10-foot invisible rope",
      style: "brand",
      transition: "push",
      narration: "In intermediate doubles, partners often play as two individuals rather than a connected unit."
    },
    {
      id: "s68",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "lunge", at: "@slides" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Wide Retrieval Decoupling", highlight: "Decoupling", at: "@wide", side: "right", top: 200 },
      narration: "When an opponent hits a wide shot to the right sideline, the right-side player slides over, but their partner stays frozen on the left sideline."
    },
    {
      id: "s69",
      kind: "stat",
      background: "spotlight",
      value: 8,
      suffix: " ft",
      label: "Middle Canyon Gap",
      sub: "Unprotected center court corridor",
      narration: "This opens an eight-foot canyon right down the middle of the court."
    },
    {
      id: "s70",
      kind: "slam",
      text: "The Middle Is Gold",
      highlight: "Middle",
      style: "brand",
      icon: "bolt",
      sub: "Highest percentage target",
      narration: "The middle of the court is the highest-percentage target in pickleball."
    },
    {
      id: "s71",
      kind: "stat",
      background: "spotlight",
      value: 2,
      suffix: " in",
      label: "Center Net Clearance",
      sub: "34\" Center vs 36\" Sideline Posts",
      narration: "The net is thirty-four inches high at the center strap: two inches lower than at the sideline posts."
    },
    {
      id: "s72",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "pb_shrug", at: "@hesitation" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Partner Hesitation", highlight: "Hesitation", at: "@hesitation", side: "right", top: 200 },
      narration: "Middle drives also trigger hesitation between partners, causing clashed paddles, late swings, or balls dropped untouched."
    },
    {
      id: "s73",
      kind: "slam",
      text: "Tandem Movement Only",
      highlight: "Tandem",
      style: "dark",
      icon: "cross",
      sub: "Two-person kayak analogy",
      narration: "Playing doubles without synchronized movement is like rowing a two-person kayak where one person paddles forward and the other backward; you spin in circles and take on water."
    },
    {
      id: "s74",
      kind: "slam",
      text: "10-Foot Invisible Rope",
      highlight: "Invisible Rope",
      style: "brand",
      icon: "bolt",
      sub: "The partner tether rule",
      narration: "Advanced teams follow the Ten-Foot Invisible Rope Rule."
    },
    {
      id: "s75",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "padel_ready", at: "@tied" }
      ],
      headline: { text: "Tethered Between Hips", highlight: "Tethered", at: "@elastic", side: "right", top: 200 },
      narration: "Imagine an elastic ten-foot rope tied between your hips."
    },
    {
      id: "s76",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "walk_a", at: 0 },
        { pose: "ready", at: "@seal" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Slide Into Middle Seam", highlight: "Seam", at: "@middle", side: "right", top: 200 },
      narration: "When your partner slides wide to cover the sideline, you must slide into the middle of the court to seal the center seam."
    },
    {
      id: "s77",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@diagonal" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Low-Risk Sideline Concession", highlight: "Low-Risk", at: "@diagonal", side: "right", top: 200 },
      narration: "Leaving the far sideline temporarily open is safe because an extreme diagonal winner from a wide position is an exceedingly low-percentage shot."
    },
    {
      id: "s78",
      kind: "slam",
      text: "Forehand Middle Priority",
      highlight: "Forehand",
      style: "brand",
      icon: "bolt",
      sub: "Default middle ownership rule",
      narration: "Always establish a default team rule before the match: forehand in the middle takes priority on contested balls."
    },
    {
      id: "s79",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "present", at: "@tether" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Rope Tether Tandem Drill", highlight: "Tether", at: "@tether", side: "right", top: 200 },
      narration: "Train this with the Rope Tether Tandem Drill."
    },
    {
      id: "s80",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "side_stand", at: "@loosely" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Loose Hand Release", highlight: "Release", at: "@loosely", side: "right", top: 200 },
      narration: "Hold a nine-foot elastic band loosely between your non-paddle hands so it releases instantly if you stumble."
    },
    {
      id: "s81",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "walk_b", at: 0 },
        { pose: "ready", at: "@ankles" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "No Crossing Feet", highlight: "Crossing", at: "@crossing", side: "right", top: 200 },
      narration: "Use compact side-shuffles without crossing your feet to protect your ankles."
    },
    {
      id: "s82",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "celebrate", at: "@sealed" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Sealing The Canyon", highlight: "Sealing", at: "@pair", side: "right", top: 200 },
      narration: "Slide laterally as a pair for four ninety-second rounds, keeping the middle canyon sealed."
    },

    // ==========================================
    // CHAPTER 7: 4-WEEK BREAKTHROUGH BLUEPRINT (s83 - s90)
    // ==========================================
    {
      id: "s83",
      kind: "title",
      chapter: "4-Week Blueprint",
      heading: "4-Week Breakthrough Blueprint",
      subtitle: "From 3.0 to 4.0 in 30 Days",
      style: "bold",
      transition: "fade",
      narration: "To turn these five fixes into permanent instincts, structure your next month of training into three weekly sessions."
    },
    {
      id: "s84",
      kind: "list",
      title: "Your 4-Week 4.0 Blueprint",
      items: [
        "Week 1: Drop vs Drive decision drill (80% accuracy)",
        "Week 2: Split-step cadence (move, split, hit, move)",
        "Week 3: Chest shield & Traffic Light dink patience",
        "Week 4: Rope tether drill (seal middle seam)"
      ],
      mascot: {
        pose: "present",
        r: "pbpaddle"
      },
      narration: "In week one, eliminate the banger trap: spend twenty minutes each session on third-shot drops off low feeds until you hit eighty percent into the kitchen."
    },
    {
      id: "s85",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "sprint", at: 0 },
        { pose: "ready", at: "@cadence" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Week 2: Split-Step Cadence", highlight: "Week 2", at: "@two", side: "right", top: 200 },
      narration: "In week two, install the split-step: advance through no-man's-land using the move-split-hit cadence, never striking a reset while moving forward."
    },
    {
      id: "s86",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "padel_ready", at: 0 },
        { pose: "present", at: "@traffic" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Week 3: Chest Shield & Traffic Light", highlight: "Week 3", at: "@three", side: "right", top: 200 },
      narration: "In week three, master the chest shield: keep your paddle tip above your navel at all times and play dink games respecting the traffic light rule."
    },
    {
      id: "s87",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "celebrate", at: "@seams" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Week 4: Tandem Seam Sealing", highlight: "Week 4", at: "@four", side: "right", top: 200 },
      narration: "In week four, tie the rope: practice tandem court shifting with your partner to slam the door on middle-court seams."
    },
    {
      id: "s88",
      kind: "slam",
      text: "No More Free Points",
      highlight: "Free Points",
      style: "brand",
      icon: "bolt",
      sub: "Control the kitchen line",
      narration: "Break these five habits, and you will stop giving away free points."
    },
    {
      id: "s89",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "ready", at: 0 },
        { pose: "flex", at: "@plateau" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Leave 3.0 Behind", highlight: "3.0", at: "@neutralize", side: "right", top: 200 },
      narration: "You will control the kitchen line, neutralize aggressive bangers, and leave the three-point-zero plateau behind for good."
    },
    {
      id: "s90",
      kind: "slam",
      text: "See You At 4.0",
      highlight: "4.0",
      style: "brand",
      icon: "bolt",
      sub: "The Orange Athlete • Train Smarter",
      narration: "See you on the four-point-zero courts."
    }
  ]
};

fs.writeFileSync(
  "episodes/5-mistakes-keeping-you-stuck-at-3-0-in-pickleball/storyboard.json",
  JSON.stringify(storyboard, null, 2)
);
console.log(`✓ Wrote storyboard.json with ${storyboard.scenes.length} scenes`);
