---
name: make-video
description: Produce a complete mascot explainer episode end to end — research, script, fact & safety check, storyboard, voiceover, HyperFrames build, visual QA, final render, thumbnail and upload package. Use when the user says /make-video, "make a video about …", or asks to continue/resume an episode.
argument-hint: "<topic | episode-slug | next>"
---

# /make-video

Resumable: each stage writes files; `node pipeline/episode.mjs status <slug>` says where to pick up.

## 0. Resolve the episode
- Existing slug in `episodes/` → resume.
- `next` or empty → first unchecked idea in `topics/backlog.md`.
- New topic → shape it into a **desire-driven promise** using a title template from `docs/style-guide.md` ("How to never get tired in tennis"), then `node pipeline/episode.mjs new "<title>"` and add `"promise"` and `"template"` to `episode.json`.

Make a task list of the stages, run `status`, skip finished stages. Run `node pipeline/setup.mjs` if `pipeline/runtime/` is missing. Unattended? Don't ask — decide, log it in `episodes/<slug>/decisions.md`, continue. The only hard stop is stage 9.

## 1. Research → `researcher` subagent
Pass the slug, title, promise and `channel.json` audience. Read `research.md` and `sources.json` when done. If the evidence can't support the promise, change the angle now.

## 2. Script → `/write-script`

## 3. Fact & safety check → `fact-checker` subagent (fresh agent)
Apply every NEEDS FIX / UNSUPPORTED / WRONG / SAFETY item to `script.md`, add new sources, mark rows `FIXED`. Re-run the checker if you changed more than 5 claims or any drill.

## 4. Storyboard → `/storyboard`
Then `node pipeline/episode.mjs check <slug>` until no errors (treat variety and mascot-presence warnings as real).

## 5–7. Voice, build, review → `/produce`
Loop until the visual-reviewer verdict is SHIP.

## 8. Final render, thumbnail, package
```
node pipeline/render.mjs final <slug>     # background; 10–40 min
node pipeline/thumbnail.mjs <slug>         # Read publish/thumbnail.jpg — readable at phone size?
node pipeline/finalize.mjs <slug>
```
Fill `storyboard.youtube` (title from the template, 2 alternatives, 2–3 sentence hook description, 8–15 tags) and `storyboard.thumbnail` (pose that shows the problem or result, 2–4 words) before finalizing.

## 9. Stop for review
Move the topic to `topics/published.md` as "awaiting review". Tell the user in a few lines: promise, runtime, `publish/` path, anything in `REVIEW.md` needing a human decision. **Never upload or publish.**
