#!/usr/bin/env node
// Package everything for upload into episodes/<slug>/publish/ and stop for human review.
// Needs: renders/final.mp4, publish/thumbnail.jpg, storyboard.youtube {title, description, tags}, sources.json, credits.json
import fs from "node:fs";
import path from "node:path";
import { episodeDir, loadChannel, readJSON, fmtTime, die, log, rel } from "./lib/core.mjs";
import { loadStoryboard } from "./lib/storyboard.mjs";

const slug = process.argv[2];
const ep = episodeDir(slug);
const ch = loadChannel();
const sb = loadStoryboard(ep);
const yt = sb.youtube || die('storyboard.json needs a "youtube" block: {title, titleOptions[], description, tags[]}');
const timings = readJSON(path.join(ep, "timings.json"));
const sources = readJSON(path.join(ep, "sources.json"), []);
const factcheck = path.join(ep, "factcheck.md");

const pub = path.join(ep, "publish");
fs.mkdirSync(pub, { recursive: true });
const video = path.join(ep, "renders", "final.mp4");
if (!fs.existsSync(video)) die(`Missing ${rel(video)} — run: node pipeline/render.mjs final ${slug}`);
fs.copyFileSync(video, path.join(pub, `${slug}.mp4`));
fs.copyFileSync(path.join(ep, "captions.srt"), path.join(pub, `${slug}.en.srt`));

// Chapters: first must be 0:00, at least 3, each ≥ 10 s (YouTube rules)
const tmap = new Map(timings.scenes.map((t) => [t.id, t]));
let chapters = sb.scenes.filter((s) => s.chapter).map((s) => ({ t: tmap.get(s.id).start, title: s.chapter }));
if (chapters.length && chapters[0].t > 0) chapters[0].t = 0;
chapters = chapters.filter((c, i, a) => i === 0 || c.t - a[i - 1].t >= 10);
const chapterBlock = chapters.length >= 3 ? `Chapters\n${chapters.map((c) => `${fmtTime(c.t)} ${c.title}`).join("\n")}\n\n` : "";

// Full citations first; if that pushes the description past YouTube's 5,000-char limit,
// fall back to a compact list (first author et al., year, link). Full details stay in sources.json.
const fullSrc = (s) => `• ${s.author ? s.author + ", " : ""}${s.title}${s.publisher ? " (" + s.publisher + ")" : ""}${s.url ? " — " + s.url : ""}`;
const shortSrc = (s) => {
  const first = (s.author || s.publisher || s.title || "").split(",")[0].trim();
  const etal = (s.author || "").includes(",") ? " et al." : "";
  return `• ${first}${etal}${s.year && s.year !== "n.d." ? " (" + s.year + ")" : ""}${s.url ? " " + s.url : ""}`;
};
const promo = ch.promo ? `${ch.promo.trim()}\n\n` : "";
const build = (fmt) => {
  const srcBlock = sources.length ? `Sources\n${sources.map(fmt).join("\n")}\n\n` : "";
  return `${yt.description.trim()}

${promo}${chapterBlock}${srcBlock}This channel shares general education, not medical advice. Check with a qualified coach or physio before changing your training, especially if you're injured.
Narration is AI-generated (Kokoro TTS). Script researched and fact-checked against the sources above.
${ch.name} — ${ch.tagline}
`;
};
let description = build(fullSrc);
if (description.length > 5000) description = build(shortSrc);
fs.writeFileSync(path.join(pub, "description.txt"), description);
fs.writeFileSync(path.join(pub, "title.txt"), [yt.title, ...(yt.titleOptions || []).filter((t) => t !== yt.title)].join("\n") + "\n");
fs.writeFileSync(path.join(pub, "tags.txt"), (yt.tags || []).join(", ") + "\n");

const titleWarn = yt.title.length > 70 ? ` (⚠ ${yt.title.length} chars — keep under ~70)` : "";
const descLen = description.length > 5000 ? `⚠ description is ${description.length} chars; YouTube max is 5000` : `description ${description.length}/5000 chars`;
const fcExists = fs.existsSync(factcheck);
const fcOpen = fcExists ? (fs.readFileSync(factcheck, "utf8").match(/\b(UNSUPPORTED|WRONG|NEEDS FIX)\b/g) || []).length : -1;

const checklist = `# Review before upload — ${sb.title}

Everything below was produced automatically. Watch the video once before publishing.

- [ ] Watch \`${slug}.mp4\` start to finish (${(timings.total / 60).toFixed(1)} min)
- [ ] Pronunciation of names and places (add fixes to pipeline/lexicon.json, then re-run tts → build → render)
- [ ] Fact-check report: ${fcExists ? (fcOpen ? `⚠ ${fcOpen} open issue(s) in factcheck.md` : "all claims verified") : "⚠ factcheck.md missing"}
- [ ] Safety: no drill or claim that could injure a beginner without a caveat (see factcheck.md → Safety)
- [ ] Title${titleWarn}: ${yt.title}
- [ ] Thumbnail readable at phone size (publish/thumbnail.jpg)
- [ ] ${descLen}; ${chapters.length >= 3 ? `${chapters.length} chapters` : "⚠ fewer than 3 chapters — YouTube won't show them"}
- [ ] Upload: animated character + AI narration is not "realistic altered content"; disclosure is in the description
- [ ] Upload captions file \`${slug}.en.srt\`
`;
fs.writeFileSync(path.join(pub, "REVIEW.md"), checklist);

log(`\n✓ Ready for review: ${rel(pub)}/`);
for (const f of fs.readdirSync(pub)) log(`   ${f}`);
log(`\n${checklist}`);
