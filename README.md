# Mascot Explainer Channel Pipeline

A Claude Code project that produces animated, mascot-led explainer videos (4–10 min, 1080p) end to end, in the "illustrated character explains how to train" format:

**topic → research → script → fact & safety check → storyboard → local AI voiceover → animated HyperFrames video → visual QA → final render → thumbnail + upload package**

Everything runs on your machine, no paid APIs. The character is drawn in code as a posable skeleton, so it stays perfectly consistent in every frame and Claude can make it run, jump, swing a racket, collapse from fatigue or sleep — and move smoothly between poses.

## Requirements
Claude Code · Node.js 22+ · FFmpeg · ~3 GB disk · 8 GB RAM recommended · internet for research.

## Setup (once)
```bash
npm install
node pipeline/setup.mjs                    # fonts, GSAP, theme; runs `hyperframes doctor`
npx hyperframes browser ensure             # if doctor says Chrome is missing
npx hyperframes models install parakeet    # optional: exact word-level sync
node pipeline/poses.mjs                    # see the character: pose-sheet/poses.png
```
Edit `channel.json`: channel `name`, `tagline`, `niche`, `audience`, `contact`, an optional `promo` line (e.g., your training plan link), and the **mascot** — `name` and colours (`body`, `outline`, `shorts`, `accent`, `shoes`). Re-run `node pipeline/poses.mjs` to see the new look.

### Smoke test (45-second demo)
```bash
node pipeline/episode.mjs demo
node pipeline/tts.mjs demo && node pipeline/build.mjs demo
node pipeline/render.mjs draft demo        # → episodes/demo/renders/draft.mp4
```

## Making videos
In Claude Code, in this folder:
```
/new-topics                                  # rank ideas into topics/backlog.md
/make-video next                             # produce the top idea end to end
/make-video "How to never get tired in badminton"
/new-pose smash "badminton smash at the top of the jump"
```
`/make-video` stops at `episodes/<slug>/publish/` with the MP4, thumbnail, title options, description (chapters, sources, disclaimer, AI disclosure, your promo line), tags, captions and a `REVIEW.md` checklist. You watch, tick, upload.

Unattended: `claude -p "/make-video next"`, or ask Claude to set it up as a scheduled task.

## What's inside
```
CLAUDE.md                     pipeline + rules Claude follows
.claude/skills/               make-video, new-topics, write-script, storyboard, produce, new-pose
.claude/agents/               researcher, fact-checker (facts + safety), visual-reviewer
docs/style-guide.md           the formula: title templates, script structure, visual grammar, safety
docs/storyboard-schema.md     scene kinds, mascot spec, body points, icons, backgrounds
pipeline/mascot/rig.mjs       the character: drawing, skeleton, forward kinematics, pose tweens
pipeline/mascot/poses.json    36 poses (stand, flex, run cycle, sprint, jump, squat, swing, serve, shoot, kick, lie…)
pipeline/scenes/kinds.mjs     mascot · slam · lineup · versus · list · chart · stat · title · endcard
pipeline/lib/art.mjs          18 icons + 9 backgrounds, all code-drawn
pipeline/tts.mjs build.mjs render.mjs thumbnail.mjs finalize.mjs episode.mjs poses.mjs setup.mjs
```

## Making the character yours
- **Quick:** colours and name in `channel.json`.
- **Deeper:** shapes live in `mascotSvg()` in `pipeline/mascot/rig.mjs` (head, headband, torso, shorts, shoes, faces). Ask Claude for "give the mascot a cap and a ponytail", "make it a robot", etc. — poses keep working because they're joint angles.
- **Commissioned art later:** if you hire an illustrator, ask for the character split into body parts (head, torso, upper/lower arms and legs, hands, feet) as SVGs; they can replace the drawn shapes in the rig without touching any poses or storyboards.

## Time per episode (rough)
Research + script + checks 10–20 min · storyboard 10 min · voice 1–3 min · build + QA 5–10 min · final render 5–25 min for 7 minutes of video (flat art renders much faster than photo-heavy video).

## YouTube notes
- The Partner Program rejects mass-produced, repetitive content. What protects you: real research, specific drills, a consistent original character, varied scenes, your review. Don't push out ten near-identical videos a day.
- The description includes a not-medical-advice line and AI narration disclosure.
- Monetize beyond ads with something genuinely useful (a training plan, a guide) — put the link in `channel.json → promo`.
