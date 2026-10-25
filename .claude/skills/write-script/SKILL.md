---
name: write-script
description: Write the narration script for a mascot explainer episode from its research brief — hook, framework, one chapter per part with concrete drills, [S#] citations. Use at the script stage of /make-video or when rewriting an episode script.
---

# Writing the script

Read: `docs/style-guide.md`, `channel.json` (audience, `video.idealMinutes`, `voice.wordsPerMinute`), `episodes/<slug>/episode.json`, `research.md`, `sources.json`.

**Length:** minutes × 160 words (7 min ≈ 1,100 words). Limits 600–1,500.

## Format: `episodes/<slug>/script.md`
```markdown
# How to never get tired in tennis
Promise: finish long matches with energy left
Framework: three energy systems

## Hook
Imagine walking onto court for the third set and feeling fresher than your opponent. [S2]
Today I'll show you exactly how to train for that.

## The sprint engine
…
```
- `##` = chapter (4–7). One paragraph = one visual beat (1–3 short sentences).
- `[S#]` after every factual sentence.
- Digits for numbers ("10 seconds", "3 sets of 8"). Spell out tricky acronyms once ("V-O-2 max, your aerobic ceiling"), and add to `pipeline/lexicon.json` if needed.

## Craft checklist
- First line is a picture of the outcome or the pain — no "Hey guys", no channel intro.
- The framework is named in the first ~40 seconds and each chapter maps to one part.
- Every chapter: plain explanation → one analogy → a real moment in a sport → 2–3 drills with dosage → one common mistake.
- Speak to "you". Short sentences. Translate every term the first time.
- Write *for the mascot*: sentences that can be acted out ("you're bent over, gasping" → `hands_knees`). Think in visuals.
- Name 2–4 sports in examples so viewers of each feel included (unless the episode is sport-specific).
- A simple plan near the end ("this week: …").
- Close with a one-line callback to the hook. No like/subscribe begging.
- No promises biology can't keep. Caveats for beginners on hard drills. "If it hurts, see a physio" when pain is mentioned.

Report word count and estimated runtime, then hand off to the fact-checker.
