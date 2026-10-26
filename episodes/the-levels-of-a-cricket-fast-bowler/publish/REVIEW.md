# Review before upload — The levels of a cricket fast bowler

Everything below was produced automatically. Watch the video once before publishing.

- [ ] Watch `the-levels-of-a-cricket-fast-bowler.mp4` start to finish (9.9 min)
- [ ] Pronunciation of names and places (add fixes to pipeline/lexicon.json, then re-run tts → build → render)
- [ ] Fact-check report: all claims verified
- [ ] Safety: no drill or claim that could injure a beginner without a caveat (see factcheck.md → Safety)
- [ ] Title: The levels of a cricket fast bowler
- [ ] Thumbnail readable at phone size (publish/thumbnail.jpg)
- [ ] description 3593/5000 chars; 9 chapters
- [ ] Upload: animated character + AI narration is not "realistic altered content"; disclosure is in the description
- [ ] Upload captions file `the-levels-of-a-cricket-fast-bowler.en.srt`

## Needs a human decision
- **No background music.** `music/` is empty, same as the last episodes. Add a royalty-free bed and re-run `build.mjs` + `render.mjs final`, or upload narration-only.
- **The 5 levels are our coaching ladder, not an official classification.** The script says so on screen and in narration. The research behind it is mostly small, correlational studies of male bowlers. The script hedges throughout ("in one small study", "in studies of men").
- **Runtime is 9:53**, near the 10-minute ceiling.
- **Adult workload advice is coaching guidance.** "2 bowling days a week, 3 at most" and "never double your usual week" come from elite and junior data. No official adult club limits exist.
- **Fastest-ever figure (160+ km/h)** comes from Guinness (Shoaib Akhtar, 2003). The ICC doesn't formally recognise speed-gun records.

## Pipeline changes made during this episode (shared code)
- New poses `bowl_gather`, `bowl_brace`, `bowl_release`, `bowl_follow`, `arm_sling`, `hold_back`, and a `cricketball` prop.
- `rig.mjs`: the `back` body point moved down to the lower back. This changes where "back" callouts land in future builds of any episode.
- `tts.mjs`: now uses `pipeline/runtime/venv` for Kokoro automatically when `HYPERFRAMES_PYTHON` isn't set. TTS failed without this.
- `lexicon.json`: "under-17s" → "under-seventeens".
