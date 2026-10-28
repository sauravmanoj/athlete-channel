# Review before upload — How to never get tired in football

Everything below was produced automatically. Watch the video once before publishing.

- [ ] Watch `how-to-never-get-tired-in-football.mp4` start to finish (9.8 min)
- [ ] Pronunciation of names and places (add fixes to pipeline/lexicon.json, then re-run tts → build → render)
- [ ] Fact-check report: all claims verified
- [ ] Safety: no drill or claim that could injure a beginner without a caveat (see factcheck.md → Safety)
- [ ] Title: How to never get tired in football
- [ ] Thumbnail readable at phone size (publish/thumbnail.jpg)
- [ ] description 3261/5000 chars; 8 chapters
- [ ] Upload: animated character + AI narration is not "realistic altered content"; disclosure is in the description
- [ ] Upload captions file `how-to-never-get-tired-in-football.en.srt`

## Needs a human decision
- **No background music.** `music/` is still empty.
- **Almost all match data is from professional men.** The script says so ("in one classic study of pro players", "at the 2014 World Cup"). No peer-reviewed amateur 11-a-side running data could be found.
- **Drill doses are coaching starting points, not tested protocols** (except the 4×4, which follows Helgerud's study). The script labels them "a good starting point".
- **Nordic curls are presented as "promising, not magic":** one amateur trial cut injuries by about two thirds, but a later review called the overall evidence inconclusive.
- **Fuelling numbers are UEFA's guidelines for elite players.** The script says "elite players".
- **The thumbnail headline is the same as the badminton episode's** ("Never get tired"). That's consistent with the series, but change it if you want them to look different in a feed.

## Pipeline changes made during this episode (shared code)
- `kinds.mjs`: gauge and battery colours are now hex values. GSAP can't animate CSS variables, so gauges went blank mid-change. This fixes gauges in all future builds.
- `kinds.mjs`: slam highlights now ignore punctuation, so "stop-start" and "wasting." highlight correctly.
- `rig.mjs`: new `lHamstring`/`rHamstring` callout targets.
- `art.mjs`: new `football` icon. The hand-held football prop looked wrong in running and kicking poses.
- `poses.json`: new `nordic` pose.
- `lexicon.json`: "15-15s", "4 by 4" and "4 by 4s" now read correctly.
