# storyboard.json reference

`episodes/<slug>/storyboard.json` is the single source of truth: each scene's exact narration plus what's on screen. `pipeline/build.mjs` turns it into a HyperFrames project.

```jsonc
{
  "title": "How to never get tired in tennis",
  "voice": "am_michael",     // optional override of channel.json
  "music": "track.mp3",      // optional file in ./music
  "thumbnail": { … },        // see bottom
  "youtube": { … },          // see bottom
  "scenes": [ … ]
}
```

## Fields on every scene

| field | notes |
|---|---|
| `id` | `s01`, `s02`… stable once audio exists (audio is cached per id + text) |
| `kind` | `mascot` `slam` `lineup` `versus` `list` `chart` `stat` `title` `custom` |
| `narration` | Exact words spoken over this visual. 6–35 words (≈ 2–12 s). Digits for numbers ("10 seconds", "80%"). |
| `chapter` | On the first scene of each section → YouTube chapter. First scene needs one; 3+ total. |
| `background` | `plain` `spotlight` `dark` `night` `court` `field` `track` `gym` `brand` |
| `transition` | `cut` (default) `fade` `push` `zoom` `pop` |
| `pauseAfter` | Extra silence after narration (default 0.25 s). 0.6–1.0 after a punchline. |
| `duration` | Only for a scene with no narration. |

**Timing (`at`, `…At`)**: `"@word"` = when that word is spoken in this scene (`"@tired+0.3"` adds an offset), a number = seconds from scene start, `"60%"` = fraction of the scene. Prefer `@word`.

## The mascot spec (used by mascot scenes and as `mascot` inside list/chart/stat/title)

```jsonc
{
  "pose": "stand",                                   // single pose, or…
  "poses": [{"pose": "stand"}, {"pose": "point_up", "at": "@key"}, {"pose": "flex", "at": "@strong"}],
  "cycle": {"poses": ["run_a", "run_b"], "period": 0.3, "from": 0, "to": "@stop"},   // looping motion
  "facing": "right",            // side-view poses face right; "left" mirrors
  "position": "center",         // left | center | right | farleft | farright, or "x": 700
  "scale": 1.05,
  "props": {"r": "racket"},     // in the right (front) hand: racket badminton paddle tennisball basketball football dumbbell bottle phone
  "tint": "opponent",           // grey "other player"
  "move": {"to": "right", "at": "@ran", "dur": 1.5}   // travel across the frame (combine with a run cycle)
}
```
A pose entry may override joints inline: `{"pose": "stand", "head": 15, "face": "happy", "at": "@yes"}`.
Faces: `normal happy determined tired sleep surprised focused`.
Poses live in `pipeline/mascot/poses.json` — run `node pipeline/poses.mjs` to see them all. New pose? Use `/new-pose`.

---

## mascot — the workhorse (use for ~half the scenes)
```json
{"id":"s04","kind":"mascot","background":"court",
 "poses":[{"pose":"ready"},{"pose":"swing_back","at":"@load"},{"pose":"swing_through","at":"@through"}],
 "props":{"r":"racket"},
 "headline":{"text":"Load the legs","highlight":"legs","at":"@load","side":"right"},
 "callouts":[{"label":"Hips","target":"hips","at":"@hips"},{"label":"Front knee","target":"rKnee","at":"@knee"}],
 "gauges":[{"label":"Energy","icon":"bolt","from":90,"to":20,"at":"@start","changeAt":"@drain"}],
 "icons":[{"icon":"battery","level":0.9,"levelTo":0.1,"levelAt":"@empty","pos":[1500,260],"size":1.4},
          {"icon":"zzz","near":"head","offset":[90,-120],"at":"@sleep"}],
 "caption":{"text":"Phase 1","at":0.3},
 "narration":"…"}
```
- `headline` puts big text on one side (mascot moves to the other side automatically). ≤ 5 words.
- `callouts[].target`: `head chest core hips back lShoulder rShoulder lArm rArm lElbow rElbow lForearm rForearm lHand rHand lHip rHip lThigh rThigh lKnee rKnee lCalf rCalf lAchilles rAchilles lFoot rFoot`. The point is computed from the pose at that moment. Max 3 per scene.
- `icons[]`: `battery heart bolt brain moon zzz clock stopwatch fire water check cross trophy muscle target lungs question food`. Place with `pos:[x,y]` (1920×1080 frame) or `near: <body point>` + `offset`. `pulse: true` for a heartbeat effect. Battery: `level` 0–1, animate with `levelTo` + `levelAt`.
- `gauges[]`: stacked bars at top-right (0–100), green → yellow → red as they drop.
- `zoom`: slow camera push amount (default 1.04).

## slam — big words
```json
{"id":"s06","kind":"slam","text":"The lactic system","highlight":"lactic","style":"dark","icon":"fire","sub":"30 seconds to 2 minutes","narration":"…"}
```
Words punch in as they're spoken. ≤ 6 words. `style`: `plain` `dark` `brand`. Use to name a concept or land a punchline.

## lineup — 2–5 characters (levels, types, stages, mistakes)
```json
{"id":"s08","kind":"lineup","title":"The levels of a tennis player","grow":true,"highlight":3,"dimPrevious":true,
 "members":[{"pose":"stand","label":"Beginner","sub":"just hits it back","at":"@beginner"},
            {"pose":"ready","label":"Intermediate","at":"@intermediate"},
            {"pose":"swing_through","props":{"r":"racket"},"label":"Advanced","at":"@advanced"},
            {"pose":"celebrate","label":"Pro","at":"@pro"}],
 "narration":"…"}
```
`grow`: later members slightly bigger (good for levels). Members accept any mascot-spec fields (poses, cycle, props, tint).

## versus — you vs them / before vs after
```json
{"id":"s10","kind":"versus",
 "left":{"label":"You","pose":"ready","gauge":{"label":"Energy","icon":"bolt","from":90,"to":75,"at":"@third"}},
 "right":{"label":"Opponent","pose":"hands_knees","gauge":{"label":"Energy","icon":"bolt","from":90,"to":10,"at":"@third"}},
 "vs":"VS","narration":"…"}
```
Right side is grey-tinted by default (`"opponentTint": false` to disable). Characters face each other.

## list — numbered points
```json
{"id":"s12","kind":"list","title":"Your weekly plan","mascot":{"pose":"point_up"},
 "items":[{"text":"2 sprint sessions","icon":"bolt","at":"@sprint"},{"text":"1 interval day","icon":"stopwatch","at":"@interval"},{"text":"1 long easy run","icon":"heart","at":"@easy"}],
 "narration":"…"}
```
2–6 items, ≤ 7 words each. Earlier items dim when the next appears (`"focus": false` to keep all bright).

## chart — horizontal bars
```json
{"id":"s14","kind":"chart","title":"Energy by effort length","unit":"%","focus":1,"mascot":{"pose":"think"},
 "bars":[{"label":"10 s","value":90,"at":"@ten"},{"label":"1 min","value":60,"display":"~60%"},{"label":"10 min","value":20}],
 "narration":"…"}
```
Only real, sourced numbers. `display` overrides the value label; `max` fixes the scale; `color` per bar.

## stat — one number
```json
{"id":"s16","kind":"stat","value":72,"suffix":"%","label":"of points last under 10 seconds","highlight":"10 seconds","icon":"stopwatch","mascot":{"pose":"shrug"},"at":"@72","narration":"…"}
```

## title — chapter card
```json
{"id":"s05","kind":"title","chapter":"Engine 1","number":1,"heading":"The sprint engine","sub":"0–10 seconds","mascot":{"pose":"sprint"},"transition":"push","narration":"…"}
```

## custom — hand-built hero scene (1–2 per episode)
```json
{"id":"s18","kind":"custom","file":"custom/s18.html","narration":"…"}
```
A HyperFrames sub-composition (see `docs/custom-scene-example.html`): everything in `<template>`, root `id="__ID__-root"` with `data-composition-id="__ID__"`, one paused GSAP timeline registered as `window.__timelines["__ID__"]`, element ids prefixed `__ID__-`. `__DURATION__` is replaced with the scene length. Theme CSS variables: `--bg --ink --brand --accent --hl --good --bad --display --sans`; classes `.headline .chip .card .callout`.

---

## thumbnail
```json
"thumbnail":{"pose":"hands_knees","props":{},"background":"court","headline":"Never get tired","highlight":"tired",
             "icons":[{"icon":"battery","level":0.1}],"opponent":{"pose":"celebrate"},"side":"right"}
```
2–4 words, one highlighted. The pose must show the problem or the result at a glance.

## youtube
```json
"youtube":{"title":"How to never get tired in tennis","titleOptions":["…","…"],"description":"2–3 sentence hook. Chapters/sources/disclaimer are appended automatically.","tags":["tennis fitness","tennis endurance","…"]}
```
