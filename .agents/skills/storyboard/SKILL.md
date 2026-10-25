---
name: storyboard
description: Turn a checked script into storyboard.json — scene-by-scene mascot poses, motion cycles, callouts, gauges, slams, lineups, lists and charts with word-synced cues. Use at the storyboard stage of /make-video or when revising an episode's visuals.
---

# Storyboarding

Read: `docs/storyboard-schema.md`, `docs/style-guide.md` (visual grammar), `script.md`. Look at the character's poses once: `node pipeline/poses.mjs` then Read `pose-sheet/poses.png`.

## Procedure
1. **Beats.** Split each paragraph into scenes of 6–35 words; copy narration verbatim minus `[S#]`.
2. **Pick the scene kind** with the grammar table. At least half the scenes show the mascot (mascot, lineup, versus, or `mascot` inside list/chart/stat/title).
3. **Act it out.** Choose poses that perform the sentence. Use `poses` with `@word` cues to change pose mid-sentence, and `cycle` for continuous action (`run_a/run_b`, `walk_a/walk_b`, `swing_back/swing_through`, `crouch/jump`). Use `move` for travel. Props for the sport.
4. **Point at the body** with `callouts` when muscles/joints are mentioned. Remember side poses face right: the front of the thigh is on the right side of the leg.
5. **Show the invisible** with gauges (energy, fatigue, focus), battery/heart/brain icons, and `slam` for named concepts.
6. **Missing pose?** Use an inline override (`{"pose":"stand","rUpper":-120}`) or run `/new-pose`.
7. **One custom hero scene** for the episode's core idea when a template can't show it well (`docs/custom-scene-example.html`).
8. **Chapters:** `chapter` on each section's first scene; a `title` card at most chapter starts (`transition: "push"`).
9. **Pacing:** cold open scenes 3–5 s; `pauseAfter: 0.6–1.0` after punchlines; never more than ~8 s without a visual change.
10. **Thumbnail + youtube** blocks (see schema).
11. `node pipeline/episode.mjs check <slug>` → fix errors and warnings.

## Quality bar
- No generic filler: every scene shows what's being said at that moment.
- No more than 2 static holds over 5 s in the whole episode.
- Numbers on stat/chart scenes match the checked script exactly.
