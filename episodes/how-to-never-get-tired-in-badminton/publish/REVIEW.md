# Review before upload — How to never get tired in badminton

Everything below was produced automatically. Watch the video once before publishing.

- [ ] Watch `how-to-never-get-tired-in-badminton.mp4` start to finish (9.6 min)
- [ ] Pronunciation of names and places (add fixes to pipeline/lexicon.json, then re-run tts → build → render)
- [ ] Fact-check report: all claims verified
- [ ] Safety: no drill or claim that could injure a beginner without a caveat (see factcheck.md → Safety)
- [ ] Title: How to never get tired in badminton
- [ ] Thumbnail readable at phone size (publish/thumbnail.jpg)
- [ ] description 3163/5000 chars; 8 chapters
- [ ] Upload: animated character + AI narration is not "realistic altered content"; disclosure is in the description
- [ ] Upload captions file `how-to-never-get-tired-in-badminton.en.srt`

## Production notes (needs a human decision)
- **No background music.** `music/` is empty and I didn't download tracks, because licences need checking. Add a royalty-free bed to `music/`, then re-run `node pipeline/build.mjs` and `node pipeline/render.mjs final`, or upload narration-only.
- **Loudness** came out at −14.7 LUFS (target −14). That's fine for YouTube.
- **Drill dosages** are coaching starting points built from match work:rest data, and the script says so. They aren't tested badminton protocols. See factcheck.md (all 67 claims resolved, 10/10 safety items fixed).
- **Third game:** BWF moves to 3×15 scoring in Jan 2027. The script avoids break timings, and "third game" still applies.
- **Visual QA:** two reviewer passes. Every blocker and major was fixed and checked on screen. Minor leftovers: grey gym window panels sit behind some headlines, and a few short holds.
