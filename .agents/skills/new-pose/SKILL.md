---
name: new-pose
description: Add a new pose to the mascot's pose library by setting joint angles, rendering it and iterating until it reads clearly. Use when a storyboard needs an action the library doesn't have, or the user says /new-pose.
argument-hint: "<pose-name> <description, e.g. 'badminton smash at the top of the jump'>"
---

# Adding a pose

The character is a skeleton of joint angles (`pipeline/mascot/rig.mjs`). Poses are data in `pipeline/mascot/poses.json`.

**Convention** (screen space): 0 = limb points straight down, +90 = screen-left, −90 = screen-right, 180 = up. `lFore`, `lShin`, `lFoot`, `head` (and r-) are *relative to their parent*. `torso` positive leans the chest toward screen-right. `view: "side"` poses face right; `view: "front"` faces camera. `L` limbs draw behind the body, `R` in front (in side view, R = near side). `rot` rotates the whole body (90 = lying head-right face-down… try it), `air` lifts it (px), `face` sets the expression.

## Procedure
1. Start from the closest existing pose (`node pipeline/poses.mjs` → Read `pose-sheet/poses.png`). Copy its angles.
2. Add `"<name>": {"_desc": "…", …}` to `poses.json`.
3. Render just it next to its neighbour: `node pipeline/poses.mjs <name> <neighbour>` → Read `pose-sheet/poses.png`.
4. Adjust 2–4 joints at a time, re-render, until the silhouette reads instantly at thumbnail size. Check: feet on the ground (auto unless `air`), no forearm through the head, weight looks balanced.
5. For motion, make paired frames (`<name>_a`, `<name>_b`) and use them as a `cycle`.
6. Add the name and one-line description to the pose list in `docs/storyboard-schema.md` if it's broadly useful.
