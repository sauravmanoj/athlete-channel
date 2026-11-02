import fs from "fs";
import path from "path";

const EP_DIR = "episodes/how-to-react-faster-at-the-kitchen-line";

const storyboard = {
  title: "How to react faster at the kitchen line",
  sport: "pickleball",
  thumbnail: {
    pose: "block",
    props: { r: "pbpaddle" },
    background: "court",
    headline: "REACT 2X FASTER",
    highlight: "FASTER",
    icons: [{ icon: "bolt", pos: [1420, 260], size: 1.5 }],
    side: "right"
  },
  youtube: {
    title: "How to react faster at the kitchen line",
    titleOptions: [
      "How to react faster at the kitchen line (the neuro-physics)",
      "Why your kitchen hand speed is slow (and how to fix it)",
      "How to never get jammed at the kitchen line"
    ],
    description: "At the pickleball kitchen line, a 40 mph ball crosses 14 feet in just 238 milliseconds—faster than human visual-motor reaction time. Here is the sports science of Quiet Eye gaze anchoring, compact lever mechanics, and split-step timing to win fast-hands firefights.",
    tags: [
      "pickleball",
      "pickleball kitchen line",
      "pickleball reaction speed",
      "kitchen firefight",
      "pickleball hand speed",
      "pickleball tips",
      "pickleball strategy",
      "quiet eye",
      "pickleball dinking",
      "pickleball speed up",
      "the orange athlete"
    ]
  },
  scenes: [
    // ==========================================
    // CHAPTER 1: HOOK (s01–s06)
    // ==========================================
    {
      id: "s01",
      kind: "mascot",
      chapter: "The Kitchen Firefight",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "block", at: "@speed-up" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "40 MPH Firefight", highlight: "40 MPH", at: "@speed-up", side: "right", top: 200 },
      narration: "You are in a quiet dink rally when your opponent suddenly fires a forty-mile-per-hour speed-up straight at your chest."
    },
    {
      id: "s02",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "flinch", at: 0 },
        { pose: "pb_shrug", at: "@ceiling" }
      ],
      props: { r: "pbpaddle" },
      icons: [{ icon: "cross", pos: [1350, 280], size: 1.4 }],
      narration: "You flinch, your elbow jams against your ribs, and the ball ricochets off your frame into the ceiling."
    },
    {
      id: "s03",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "tired_front", at: 0 },
        { pose: "think", at: "@slow" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Too Slow?", highlight: "Slow", at: "@slow", side: "right", top: 200 },
      narration: "You walk back convinced your reflexes are too slow."
    },
    {
      id: "s04",
      kind: "slam",
      text: "Genetics Are Not The Reason",
      highlight: "Genetics",
      style: "brand",
      icon: "brain",
      sub: "Lab reaction tests show identical scores",
      narration: "Here is the truth: elite players do not have superhuman nervous systems."
    },
    {
      id: "s05",
      kind: "stat",
      value: 200,
      suffix: "ms",
      label: "Visual Reaction Time Floor",
      sub: "Identical across pros and club players (Pain & Hibbs)",
      mascot: { pose: "block", r: "pbpaddle" },
      highlight: "200ms",
      narration: "In laboratory reaction tests, professional racket athletes score virtually identically to casual club players, averaging around two hundred milliseconds."
    },
    {
      id: "s06",
      kind: "lineup",
      title: "The 4 Kitchen Reaction Systems",
      grow: true,
      members: [
        { pose: "flinch", label: "240ms Trap", sub: "Part 1" },
        { pose: "block", label: "Quiet Eye", sub: "Part 2", props: { r: "pbpaddle" } },
        { pose: "pb_drop", label: "Compact Lever", sub: "Part 3", props: { r: "pbpaddle" } },
        { pose: "land", label: "Split Step", sub: "Part 4" }
      ],
      narration: "The difference is four trainable systems: the two-hundred-and-forty-millisecond trap, kinematic anticipation, compact lever mechanics, and the pre-contact split step."
    },

    // ==========================================
    // CHAPTER 2: THE 240-MS TRAP (s07–s20)
    // ==========================================
    {
      id: "s07",
      kind: "title",
      chapter: "The 240ms Trap",
      number: 1,
      heading: "The 240ms Trap",
      sub: "The Neuro-Physics of the NVZ",
      mascot: { pose: "think" },
      transition: "push",
      narration: "To react faster at the kitchen line, you must understand the brutal math of the non-volley zone."
    },
    {
      id: "s08",
      kind: "stat",
      value: 14,
      suffix: "ft",
      label: "Separation Across Kitchen",
      sub: "7 feet non-volley depth per side",
      mascot: { pose: "dink", r: "pbpaddle" },
      highlight: "14ft",
      narration: "Opposite kitchen lines separate you by fourteen feet."
    },
    {
      id: "s09",
      kind: "stat",
      value: 238,
      suffix: "ms",
      label: "Ball Transit Time at 40 MPH",
      sub: "Shrinks to 212 ms at 45 mph",
      mascot: { pose: "block", r: "pbpaddle" },
      highlight: "238ms",
      narration: "A forty-mile-per-hour speed-up crosses that distance in just two hundred and thirty-eight milliseconds, shrinking to two hundred and twelve at forty-five."
    },
    {
      id: "s10",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "stand", at: 0 },
        { pose: "think", at: "@timeline" }
      ],
      headline: { text: "The Neurological Clock", highlight: "Clock", at: "@neurological", side: "right", top: 200 },
      narration: "Now examine your body's neurological reaction timeline."
    },
    {
      id: "s11",
      kind: "custom",
      file: "custom/reaction_timeline.html",
      narration: "Retinal conversion takes thirty milliseconds, optic transmission takes twenty, visual cortex classification takes one hundred, motor selection adds one hundred and fifty, spinal conduction takes fifteen, muscle electromechanical delay takes thirty, and paddle movement takes one hundred and fifty milliseconds."
    },
    {
      id: "s12",
      kind: "stat",
      value: 495,
      suffix: "ms",
      label: "Unprepared Visual-Motor Loop",
      sub: "Double the 238ms ball flight window",
      mascot: { pose: "flinch" },
      highlight: "495ms",
      narration: "Add those up: an unprepared visual-motor loop takes four hundred and ninety-five milliseconds."
    },
    {
      id: "s13",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "crouch", at: 0 },
        { pose: "flinch", at: "@collision" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "The Headlights Dilemma", highlight: "Headlights", at: "@sixty", side: "right", top: 200 },
      narration: "It is like swerving around a deer five feet in front of your car at sixty miles per hour: momentum causes collision before the brake pads can bite."
    },
    {
      id: "s14",
      kind: "slam",
      text: "Read Before The Strike",
      highlight: "Read",
      style: "brand",
      icon: "target",
      sub: "Do not wait for airborne ball flight",
      narration: "You cannot react to the airborne ball; you must read the cues before the paddle strikes."
    },
    {
      id: "s15",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "flinch", at: "@jammed" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Waiting Guarantees Jamming", highlight: "Jamming", at: "@jammed", side: "right", top: 200 },
      narration: "Waiting to see the ball fly guarantees you get jammed."
    },
    {
      id: "s16",
      kind: "title",
      chapter: "Occluded Reaction Drill",
      number: 1,
      heading: "Occluded Recognition Drill",
      sub: "Trigger On Forward Swing",
      mascot: { pose: "block", r: "pbpaddle" },
      transition: "push",
      narration: "Train your brain with the occluded speed-up recognition drill."
    },
    {
      id: "s17",
      kind: "versus",
      left: { label: "You (NVZ)", pose: "block", props: { r: "pbpaddle" } },
      right: { label: "Feeder", pose: "swing_through", props: { r: "pbpaddle" } },
      vs: "14 FT",
      narration: "Have a partner feed alternating dinks and speed-ups across the kitchen."
    },
    {
      id: "s18",
      kind: "slam",
      text: "Call Go On Forward Swing",
      highlight: "Go",
      style: "dark",
      icon: "bolt",
      sub: "Identify the pre-impact strike",
      narration: "Shout 'GO' the instant your partner starts their forward swing, before ball contact."
    },
    {
      id: "s19",
      kind: "list",
      title: "Drill Dosage: Occluded Calling",
      items: [
        "3 sets of 20 live feeds",
        "60 seconds rest between sets",
        "3 sessions per week"
      ],
      mascot: { pose: "point_up" },
      narration: "Perform three sets of twenty feeds, resting sixty seconds, three times per week."
    },
    {
      id: "s20",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "think", at: 0 },
        { pose: "tired_front", at: "@beaten" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Don't Wait For The Bounce", highlight: "Bounce", at: "@bounce", side: "right", top: 200 },
      narration: "The mistake is staring passively at the bounce: visual classification takes one hundred and fifty milliseconds; if you wait for flight, you are already beaten."
    },

    // ==========================================
    // CHAPTER 3: KINEMATIC ANTICIPATION & QUIET EYE (s21–s35)
    // ==========================================
    {
      id: "s21",
      kind: "title",
      chapter: "Kinematic Anticipation",
      number: 2,
      heading: "Kinematic Anticipation",
      sub: "The Quiet Eye Gaze Anchor",
      mascot: { pose: "block", r: "pbpaddle" },
      transition: "push",
      narration: "If you cannot react to the ball in the air, how do elite players survive forty-mile-per-hour firefights?"
    },
    {
      id: "s22",
      kind: "stat",
      value: 150,
      suffix: "ms",
      label: "Advance Kinematic Window",
      sub: "Extract cues before ball collision (Abernethy & Russell)",
      mascot: { pose: "think" },
      highlight: "150ms",
      narration: "They use kinematic anticipation: reading body cues one hundred to one hundred and fifty milliseconds before paddle strike."
    },
    {
      id: "s23",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "point_up", at: "@tape" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Net Tape Height Rule", highlight: "Tape", at: "@tape", side: "right", top: 200 },
      narration: "First, check ball height relative to the net tape."
    },
    {
      id: "s24",
      kind: "versus",
      left: { label: "Below Tape (Upward)", pose: "dink", props: { r: "pbpaddle" } },
      right: { label: "Above Tape (Attack)", pose: "smash", props: { r: "pbpaddle" } },
      vs: "34 IN",
      narration: "If your opponent contacts the ball below the tape, physics forces them to hit upward; any high-speed drive will crash into the net or fly out."
    },
    {
      id: "s25",
      kind: "slam",
      text: "Above Net Equals Red Alert",
      highlight: "Alert",
      style: "brand",
      icon: "bolt",
      sub: "Downward attack angle available",
      narration: "Only when the ball floats above the net tape can your opponent hit downward with aggressive pace."
    },
    {
      id: "s26",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "stand", at: 0 },
        { pose: "block", at: "@probable" }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "lShoulder", label: "Shoulder Dip", side: "left" },
        { target: "back", label: "Spinal Coil", side: "left" }
      ],
      headline: { text: "Shoulder Dip & Coil", highlight: "Dip", at: "@dips", side: "right", top: 120 },
      narration: "Second, watch torso torque: a soft dink is struck upright, but when their hitting shoulder dips and spine coils backward, an aggressive speed-up is highly probable."
    },
    {
      id: "s27",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "block", at: "@closed" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Paddle Face Angle", highlight: "Angle", at: "@face", side: "right", top: 200 },
      narration: "Third, watch paddle face tilt: a dropped head with a closed face signals a topspin roll, while an open face indicates a soft reset."
    },
    {
      id: "s28",
      kind: "title",
      chapter: "The Quiet Eye",
      number: 2,
      heading: "The Quiet Eye",
      sub: "Eliminating Saccadic Suppression",
      mascot: { pose: "block", r: "pbpaddle" },
      transition: "push",
      narration: "To read these cues, master the Quiet Eye."
    },
    {
      id: "s29",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "think", at: 0 },
        { pose: "flinch", at: "@suppression" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Saccadic Suppression", highlight: "Suppression", at: "@suppression", side: "right", top: 200 },
      narration: "Amateurs dart their eyes between ball and paddle, triggering saccadic suppression that shuts down vision for twenty to fifty milliseconds per jump."
    },
    {
      id: "s30",
      kind: "stat",
      value: 150,
      suffix: "ms",
      label: "Blindness From 3 Eye Flicks",
      sub: "Brain suppresses visual motion blur",
      mascot: { pose: "tired_front" },
      highlight: "150ms",
      narration: "Three eye flicks leave you functionally blind for up to one hundred and fifty milliseconds."
    },
    {
      id: "s31",
      kind: "mascot",
      background: "spotlight",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Lock Gaze On Sternum", highlight: "Sternum", at: "@sternum", side: "right", top: 200 },
      narration: "Elite athletes lock a stable gaze on a central anchor—the opponent's contact window and sternum—for one hundred to four hundred milliseconds."
    },
    {
      id: "s32",
      kind: "stat",
      value: 1.04,
      label: "Quiet Eye Effect Size (d)",
      sub: "Meta-analysis of 36 trials (Lebeau et al.)",
      mascot: { pose: "point_up" },
      highlight: "1.04",
      narration: "Experts maintain longer Quiet Eye durations with an effect size of one point zero four, while Quiet Eye training boosts motor accuracy with an effect size of zero point eight four."
    },
    {
      id: "s33",
      kind: "slam",
      text: "Dampen Neurological Noise",
      highlight: "Noise",
      style: "brand",
      icon: "brain",
      sub: "Wide peripheral tracking without blur",
      narration: "A stable gaze anchor dampens neurological noise and lets peripheral vision detect ball flight without saccadic blindness."
    },
    {
      id: "s34",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "dink", at: "@drill" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Quiet Eye Gaze Drill", highlight: "Gaze", at: "@drill", side: "right", top: 200 },
      narration: "Practice the Quiet Eye gaze-lock drill: lock vision on your opponent's paddle face and sternum until fifty milliseconds after contact; complete four sets of fifteen sequences, three times weekly."
    },
    {
      id: "s35",
      kind: "slam",
      text: "Stop Tracking Like A Spectator",
      highlight: "Spectator",
      style: "dark",
      icon: "cross",
      sub: "Costs 50ms of reaction time per flick",
      narration: "The mistake is tracking the ball back and forth like a spectator, which blurs vision and costs fifty milliseconds of reaction time."
    },

    // ==========================================
    // CHAPTER 4: COMPACT LEVER MECHANICS (s36–s50)
    // ==========================================
    {
      id: "s36",
      kind: "title",
      chapter: "Compact Lever Mechanics",
      number: 3,
      heading: "Compact Lever Mechanics",
      sub: "Pruning Hick's Law",
      mascot: { pose: "block", r: "pbpaddle" },
      transition: "push",
      narration: "Once your brain anticipates the attack, physical hand speed comes down to lever mechanics and decision pruning."
    },
    {
      id: "s37",
      kind: "stat",
      value: 180,
      suffix: "ms",
      label: "Hick's Law Choice Delay",
      sub: "Hesitation between forehand and backhand",
      mascot: { pose: "pb_shrug", r: "pbpaddle" },
      highlight: "180ms",
      narration: "First, Hick's Law: holding your paddle flat at twelve o'clock forces a two-way choice that costs one hundred to one hundred and eighty milliseconds of hesitation."
    },
    {
      id: "s38",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "11 O'Clock Backhand Bias", highlight: "11 O'Clock", at: "@eleven", side: "right", top: 200 },
      narration: "Elite players eliminate that delay by defaulting to a backhand-biased ready position: eleven o'clock for right-handers, or one o'clock for lefties."
    },
    {
      id: "s39",
      kind: "stat",
      value: 80,
      suffix: "%",
      label: "Body Defense Coverage",
      sub: "Single backhand wing covers shoulder to hip",
      mascot: { pose: "block", r: "pbpaddle" },
      highlight: "80%",
      narration: "The backhand wing comfortably defends seventy-five to eighty percent of your body space—protecting from your left shoulder across your chest and right hip."
    },
    {
      id: "s40",
      kind: "slam",
      text: "Prune The Decision Tree",
      highlight: "Prune",
      style: "brand",
      icon: "bolt",
      sub: "Forehand only triggers wide of shoulder",
      narration: "By defaulting to the backhand punch, you prune your decision tree to a single pre-programmed reflex; the forehand triggers only on balls wide of your dominant shoulder."
    },
    {
      id: "s41",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "swing_back", at: 0 },
        { pose: "swing_through", at: "@inertia" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Rotational Inertia (I = m r²)", highlight: "Inertia", at: "@inertia", side: "right", top: 200 },
      narration: "Second, rotational inertia: moment of inertia equals mass times radius squared."
    },
    {
      id: "s42",
      kind: "versus",
      left: { label: "Straight Arm (70cm)", pose: "swing_back", props: { r: "pbpaddle" } },
      right: { label: "Bent Elbow (30cm)", pose: "block", props: { r: "pbpaddle" } },
      vs: "75% LESS",
      narration: "A straight-arm swing increases lever radius to seventy centimeters, quadrupling inertia and taking over two hundred milliseconds to swing."
    },
    {
      id: "s43",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "rElbow", label: "90° Elbow Flexion", side: "right" }
      ],
      headline: { text: "90° Compact Elbow", highlight: "90°", at: "@ninety", side: "right", top: 200 },
      narration: "Instead, flex your elbow to ninety degrees, keeping your paddle twelve to eighteen inches in front of your sternum."
    },
    {
      id: "s44",
      kind: "stat",
      value: 50,
      suffix: "ms",
      label: "Compact Punch Volley Stroke",
      sub: "Rotational inertia reduced by >75%",
      mascot: { pose: "block", r: "pbpaddle" },
      highlight: "<50ms",
      narration: "This compact lever shrinks rotational inertia by over seventy-five percent, cutting stroke transit time under fifty milliseconds."
    },
    {
      id: "s45",
      kind: "slam",
      text: "Four Inch Piston Punch",
      highlight: "Piston",
      style: "dark",
      icon: "bolt",
      sub: "Rigid wrist extensor stabilization",
      narration: "Push through the ball four to six inches as a compact piston with rigid wrist extensor stabilization."
    },
    {
      id: "s46",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "rForearm", label: "Extensor Co-Contraction", side: "right" }
      ],
      headline: { text: "Grip Tension Dynamics", highlight: "Grip", at: "@grip", side: "right", top: 200 },
      narration: "Third, control your grip tension: a ten-out-of-ten death grip triggers antagonist co-contraction, locking your wrist and slowing movement speed."
    },
    {
      id: "s47",
      kind: "stat",
      value: 3,
      suffix: "ms",
      label: "Ball-Paddle Collision Duration",
      sub: "Squeezing harder cannot increase speed (Liu 1983)",
      mascot: { pose: "block", r: "pbpaddle" },
      highlight: "2-4ms",
      narration: "Because ball impact lasts only two to four milliseconds, squeezing harder does not increase outgoing speed."
    },
    {
      id: "s48",
      kind: "versus",
      left: { label: "Ready: 3/10 Relaxed", pose: "block", props: { r: "pbpaddle" } },
      right: { label: "Impact: 8/10 Firm", pose: "dink", props: { r: "pbpaddle" } },
      vs: "PUNCH",
      narration: "Hold a relaxed three-to-four out of ten grip tension in your ready stance, firming to eight-out-of-ten only during ball impact."
    },
    {
      id: "s49",
      kind: "slam",
      text: "Boxer's Jab Not Broadsword",
      highlight: "Jab",
      style: "brand",
      icon: "bolt",
      sub: "Snaps in milliseconds without backswing",
      narration: "Think of a boxer's jab: a four-inch piston punch snaps out in milliseconds, while a broadsword swing takes half a second."
    },
    {
      id: "s50",
      kind: "list",
      title: "Wall Punch Volley Protocol",
      items: [
        "6 feet from smooth rebound wall",
        "90° bent elbow at 11 o'clock",
        "Zero backswing behind nose plane",
        "4 sets of 50 reps (3-4x/week)"
      ],
      mascot: { pose: "point_up" },
      narration: "Run the wall punch volley drill: stand six feet from a smooth wall in an eleven o'clock backhand ready position and volley with zero backswing; do four sets of fifty reps, three to four times weekly."
    },

    // ==========================================
    // CHAPTER 5: THE PRE-CONTACT SPLIT STEP (s51–s65)
    // ==========================================
    {
      id: "s51",
      kind: "mascot",
      chapter: "The Pre-Contact Split Step",
      background: "court",
      position: "left",
      poses: [
        { pose: "dink", at: 0 },
        { pose: "flinch", at: "@drop" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Dropped Paddle Syndrome", highlight: "Dropped", at: "@drop", side: "right", top: 200 },
      narration: "The common mistake is letting your paddle drop to waist level between shots, adding one hundred and fifty milliseconds of upward transit delay."
    },
    {
      id: "s52",
      kind: "title",
      number: 4,
      heading: "The Split Step Engine",
      sub: "Stretch-Shortening Cycle",
      mascot: { pose: "jump" },
      transition: "push",
      narration: "Lightning-fast hands are useless if your lower body is frozen or falling off balance."
    },
    {
      id: "s53",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "crouch", at: 0 },
        { pose: "jump", at: "@spring" }
      ],
      callouts: [
        { target: "rAchilles", label: "Achilles Elastic Recoil", side: "left" },
        { target: "rThigh", label: "Quad Pre-Stretch", side: "right" }
      ],
      headline: { text: "Stretch-Shortening Cycle", highlight: "Stretch", at: "@stretch", side: "right", top: 200 },
      narration: "At the kitchen line, footwork is driven by the stretch-shortening cycle: rapid muscle pre-stretch stores elastic strain energy in your Achilles tendon and quadriceps like a compressed spring."
    },
    {
      id: "s54",
      kind: "stat",
      value: 104,
      suffix: "ms",
      label: "Reaction Step-And-Reach Saved",
      sub: "14% faster initiation (Uzu, Shinya & Oda 2009)",
      mascot: { pose: "sprint" },
      highlight: "104ms",
      narration: "Timing a synchronized split-step reduces choice reaction step-and-reach time by one hundred and four milliseconds—a fourteen percent speed boost before your paddle even moves."
    },
    {
      id: "s55",
      kind: "slam",
      text: "The Split Step Golden Window",
      highlight: "Golden",
      style: "brand",
      icon: "stopwatch",
      sub: "Millisecond-precise ground timing",
      narration: "Here is the exact split-step timeline you must groove."
    },
    {
      id: "s56",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "jump", at: 0 },
        { pose: "land", at: "@inches" }
      ],
      headline: { text: "Low 1–2 Inch Hop", highlight: "1–2 Inch", at: "@inches", side: "right", top: 200 },
      narration: "Keep the hop low: elevate the balls of your feet just one to two inches off the court; jumping six inches leaves you airborne for three hundred milliseconds."
    },
    {
      id: "s57",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Apex At Forward Swing", highlight: "Apex", at: "@apex", side: "right", top: 200 },
      narration: "Time the apex of your hop to coincide with your opponent's forward paddle strike."
    },
    {
      id: "s58",
      kind: "stat",
      value: 50,
      suffix: "ms",
      label: "Touchdown Window After Strike",
      sub: "Balls of feet land 0-50ms post-contact",
      mascot: { pose: "land" },
      highlight: "0-50ms",
      narration: "Your feet must touch down zero to fifty milliseconds after your opponent contacts the ball."
    },
    {
      id: "s59",
      kind: "slam",
      text: "Register Direction Airborne",
      highlight: "Airborne",
      style: "dark",
      icon: "target",
      sub: "Rebound instantaneously upon landing",
      narration: "Landing slightly after contact allows your visual system to register shot direction while you are unweighted."
    },
    {
      id: "s60",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "land", at: 0 },
        { pose: "sprint", at: "@rebound" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Elastic Tendon Recoil", highlight: "Recoil", at: "@tendons", side: "right", top: 200 },
      narration: "The millisecond your feet land, your stretched Achilles tendons rebound into an explosive lateral push."
    },
    {
      id: "s61",
      kind: "stat",
      value: 150,
      suffix: "ms",
      label: "Amortization Energy Loss Threshold",
      sub: "Landing too early bleeds elastic energy as heat",
      mascot: { pose: "tired_front" },
      highlight: "150ms",
      narration: "If you land too early—more than one hundred and fifty milliseconds before contact—that stored elastic energy dissipates as heat, leaving you flat-footed."
    },
    {
      id: "s62",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "rKnee", label: "45° Knee Flexion", side: "right" },
        { target: "core", label: "15° Forward Lean", side: "left" }
      ],
      headline: { text: "1.5x Shoulder Base", highlight: "Base", at: "@base", side: "right", top: 200 },
      narration: "Maintain an athletic base with feet one point five times shoulder width, knees bent forty-five degrees, and chest leaned forward to lower your center of mass and prevent kitchen foot faults."
    },
    {
      id: "s63",
      kind: "slam",
      text: "Auditory Coupled Split Step",
      highlight: "Auditory",
      style: "brand",
      icon: "stopwatch",
      sub: "Touch down on the paddle pop",
      narration: "Perform the auditory-coupled split-step drill: initiate your one-inch hop during your partner's forward swing, timing your touchdown with the pop of their paddle hitting the ball."
    },
    {
      id: "s64",
      kind: "list",
      title: "Split-Step Dosage & Protocol",
      items: [
        "4 sets of 25 dink-to-drive feeds",
        "45 seconds rest between sets",
        "3 sessions per week"
      ],
      mascot: { pose: "point_up" },
      narration: "Do four sets of twenty-five reps, three times per week."
    },
    {
      id: "s65",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "tired_front", at: 0 },
        { pose: "pb_shrug", at: "@latency" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Don't Stand Flat-Footed", highlight: "Flat-Footed", at: "@flat-footed", side: "right", top: 200 },
      narration: "The biggest mistake is standing flat-footed with straight knees, which kills the stretch-shortening cycle and adds over one hundred milliseconds of latency."
    },

    // ==========================================
    // CHAPTER 6: BLUEPRINT & SAFETY (s66–s75)
    // ==========================================
    {
      id: "s66",
      kind: "title",
      chapter: "4-Week Blueprint & Safety",
      number: 5,
      heading: "4-Week Speed Blueprint",
      sub: "Motor Memory Integration",
      mascot: { pose: "point_up" },
      transition: "push",
      narration: "To turn these four systems into permanent motor memory, dedicate twenty minutes three times weekly across four weeks."
    },
    {
      id: "s67",
      kind: "list",
      title: "Your 4-Week Kitchen Blueprint",
      items: [
        "Week 1: Quiet Eye Gaze-Lock Drill",
        "Week 2: 11 O'Clock Lever & Wall Volleys",
        "Week 3: Auditory-Coupled Split Steps",
        "Week 4: Live Firefight Pressure Drills"
      ],
      mascot: { pose: "present", props: { r: "pbpaddle" } },
      narration: "Week one grooves Quiet Eye gaze-locking; week two builds eleven o'clock lever volleys; week three synchronizes split-step timing; and week four combines all systems under live firefight speed-ups."
    },
    {
      id: "s68",
      kind: "slam",
      text: "Dynamic Mobility Warmup",
      highlight: "Warmup",
      style: "dark",
      icon: "heart",
      sub: "Wrist rolls, ankle circles, pogo hops",
      narration: "Always spend three to five minutes performing dynamic wrist rolls, ankle circles, and light pogo hops before drilling."
    },
    {
      id: "s69",
      kind: "slam",
      text: "Mandatory Eye Protection",
      highlight: "Eye",
      style: "brand",
      icon: "cross",
      sub: "40 mph deflections beat the human blink reflex",
      narration: "A critical medical warning: kitchen firefights bring forty-mile-per-hour balls within fourteen feet of your face."
    },
    {
      id: "s70",
      kind: "stat",
      value: 15,
      suffix: "k+",
      label: "Annual Emergency Eye Injuries",
      sub: "NEISS trauma study (Zheng et al. 2024)",
      mascot: { pose: "flinch" },
      highlight: "Surge",
      narration: "Hospital emergency studies report an alarming surge in severe pickleball eye trauma, including corneal abrasions and retinal detachments."
    },
    {
      id: "s71",
      kind: "slam",
      text: "ASTM F3164 Eyewear",
      highlight: "ASTM",
      style: "brand",
      icon: "check",
      sub: "Shatterproof sports-rated protection",
      narration: "A deflection reaches your eye faster than a human blink reflex; always wear shatterproof protective eyewear rated to ASTM F-three-one-six-four during kitchen play."
    },
    {
      id: "s72",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "rElbow", label: "Tendon Strain Relief", side: "right", dy: 50 }
      ],
      headline: { text: "Prevent Pickleball Elbow", highlight: "Elbow", at: "@elbow", side: "right", top: 120 },
      narration: "To protect your elbow from tendon strain, keep your ready grip relaxed at three to four out of ten, and never flick your wrist under heavy pace; if you have elbow pain, start with twenty-five reps and never drill through an active flare-up."
    },
    {
      id: "s73",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "run_b", at: 0 },
        { pose: "sprint", at: "@pivot" }
      ],
      props: { r: "pbpaddle" },
      callouts: [
        { target: "rAchilles", label: "Achilles Protection", side: "left" }
      ],
      headline: { text: "Never Backpedal Straight", highlight: "Never", at: "@never", side: "right", top: 200 },
      narration: "And when retreating for high lobs, never backpedal straight backward on flat heels; always drop-step and pivot into a forward sprint to prevent Achilles ruptures."
    },
    {
      id: "s74",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "crouch", at: 0 },
        { pose: "land", at: "@tendinopathy" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Tendinopathy Regression", highlight: "Regression", at: "@tendinopathy", side: "right", top: 200 },
      narration: "If you experience acute Achilles tendinopathy or knee pain, substitute low-impact heel unweighting, and always perform a dynamic lower-leg warm-up first."
    },
    {
      id: "s75",
      kind: "slam",
      text: "Consult A Medical Pro",
      highlight: "Medical",
      style: "dark",
      icon: "heart",
      sub: "Stop immediately if in pain",
      narration: "If you experience persistent joint pain, visual disturbance, or calf stiffness, stop playing immediately and consult a sports medical professional."
    },

    // ==========================================
    // CHAPTER 7: THE CLOSE (s76–s78)
    // ==========================================
    {
      id: "s76",
      kind: "mascot",
      chapter: "Take Control Of The Kitchen",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "celebrate", at: "@speed-up" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "No More Panic", highlight: "Panic", at: "@flinch", side: "right", top: 200 },
      narration: "Next time you face a violent speed-up at the kitchen line, you will not flinch or wonder why your reflexes feel slow."
    },
    {
      id: "s77",
      kind: "mascot",
      background: "court",
      position: "left",
      poses: [
        { pose: "block", at: 0 },
        { pose: "swing_through", at: "@punch" }
      ],
      props: { r: "pbpaddle" },
      headline: { text: "Read, Spring, Punch", highlight: "Punch", at: "@punch", side: "right", top: 200 },
      narration: "You will read their shoulder dip, lock your Quiet Eye, spring off a split-step, and punch the ball into their feet."
    },
    {
      id: "s78",
      kind: "slam",
      text: "Take Control Of The Kitchen",
      highlight: "Kitchen",
      style: "brand",
      icon: "bolt",
      sub: "The Orange Athlete • Train Smarter",
      narration: "Train smarter, protect your eyes, and take control of the kitchen."
    }
  ]
};

fs.writeFileSync(path.join(EP_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2), "utf8");
console.log(`✓ Wrote storyboard.json with ${storyboard.scenes.length} scenes`);
