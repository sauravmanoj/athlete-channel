// Turn display narration into text a TTS engine reads like a documentary narrator.
// "In 1453, c. 80% of..." -> "In fourteen fifty-three, around eighty percent of..."
import fs from "node:fs";
import path from "node:path";
import { PIPE } from "./core.mjs";

const ONES = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve",
  "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const ORD_IRREG = { one: "first", two: "second", three: "third", five: "fifth", eight: "eighth", nine: "ninth", twelve: "twelfth" };

function under100(n) {
  if (n < 20) return ONES[n];
  const t = TENS[Math.floor(n / 10)];
  return n % 10 ? `${t}-${ONES[n % 10]}` : t;
}

function under1000(n) {
  if (n < 100) return under100(n);
  const h = `${ONES[Math.floor(n / 100)]} hundred`;
  return n % 100 ? `${h} ${under100(n % 100)}` : h;
}

export function cardinal(n) {
  if (n < 0) return `minus ${cardinal(-n)}`;
  if (n < 1000) return under1000(n);
  const scales = [
    [1e12, "trillion"],
    [1e9, "billion"],
    [1e6, "million"],
    [1e3, "thousand"],
  ];
  for (const [v, name] of scales) {
    if (n >= v) {
      const head = Math.floor(n / v);
      const rest = n % v;
      return rest ? `${cardinal(head)} ${name} ${cardinal(rest)}` : `${cardinal(head)} ${name}`;
    }
  }
  return String(n);
}

export function ordinal(n) {
  const words = cardinal(n).split(/([ -])/);
  const last = words.pop();
  let o;
  if (ORD_IRREG[last]) o = ORD_IRREG[last];
  else if (last.endsWith("y")) o = last.slice(0, -1) + "ieth";
  else o = last + "th";
  return words.join("") + o;
}

/** Read a 3–4 digit number as a year: 1453 -> fourteen fifty-three, 1900 -> nineteen hundred, 2008 -> two thousand eight. */
export function yearWords(n) {
  if (n < 1000) return cardinal(n);
  if (n >= 2000 && n < 2010) return n === 2000 ? "two thousand" : `two thousand ${ONES[n % 10]}`;
  const hi = Math.floor(n / 100);
  const lo = n % 100;
  if (lo === 0) return `${under100(hi)} hundred`;
  if (lo < 10) return `${under100(hi)} oh ${ONES[lo]}`;
  return `${under100(hi)} ${under100(lo)}`;
}

let lexiconCache;
function lexicon() {
  if (lexiconCache) return lexiconCache;
  const f = path.join(PIPE, "lexicon.json");
  lexiconCache = fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {};
  return lexiconCache;
}

/** Strip citation markers and markdown the writer may leave in narration. */
export function cleanDisplay(text = "") {
  return text
    .replace(/\[(?:S|s)\d+(?:\s*,\s*(?:S|s)?\d+)*\]/g, "")
    .replace(/[*_`#>]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

export function toSpeech(display) {
  let t = cleanDisplay(display);

  // User pronunciation lexicon first: { "Mehmed": "Meh-med" }
  for (const [from, to] of Object.entries(lexicon())) {
    if (from.startsWith("_")) continue;
    t = t.replace(new RegExp(`\\b${from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "g"), to);
  }

  t = t
    .replace(/\bc\.\s*(?=\d)/g, "around ")
    .replace(/\bca\.\s*(?=\d)/g, "around ")
    .replace(/\bvs\.?\s/gi, "versus ")
    .replace(/\bSt\.\s(?=[A-Z])/g, "Saint ")
    .replace(/\bMt\.\s(?=[A-Z])/g, "Mount ")
    .replace(/\be\.g\.,?/gi, "for example,")
    .replace(/\bi\.e\.,?/gi, "that is,")
    .replace(/\betc\./gi, "et cetera")
    .replace(/\bkm\b/g, "kilometers")
    .replace(/\bmi\b/g, "miles")
    .replace(/(\d)\s?%/g, "$1 percent");

  // Ranges between years before dashes are turned into pauses: 1914–1918 / 1914-18
  t = t.replace(/\b(1\d{3}|20\d{2})\s?(?:-|–|—|to)\s?(\d{2,4})\b/g, (_, a, b) => {
    const A = Number(a);
    const B = b.length === 2 ? Number(String(A).slice(0, 2) + b) : Number(b);
    return `${yearWords(A)} to ${yearWords(B)}`;
  });
  t = t.replace(/\s*[—–]\s*/g, ", ");

  // Regnal and war numerals: World War II -> World War Two, Mehmed II -> Mehmed the Second
  const ROMAN = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7, VIII: 8, IX: 9, X: 10, XI: 11, XII: 12, XIII: 13, XIV: 14, XV: 15, XVI: 16, XVII: 17, XVIII: 18 };
  t = t.replace(/\bWorld War (I{1,2})\b/g, (_, r) => `World War ${cardinal(ROMAN[r])}`);
  t = t.replace(/\b([A-Z][a-z]+) (XVIII|XVII|XVI|XV|XIV|XIII|XII|XI|IX|X|VIII|VII|VI|IV|V|III|II|I)\b/g, (m, name, r) =>
    (r === "I" && NOT_NAMES.has(name)) ? m : `${name} the ${ordinal(ROMAN[r])}`.replace(/the (\w)/, (x, c) => "the " + c.toUpperCase()),
  );

  // Decades: 1920s -> nineteen twenties, 80s stays
  t = t.replace(/\b(\d{2})(\d0)s\b/g, (_, hi, lo) => {
    const w = yearWords(Number(hi + lo));
    return w.replace(/(\w+)$/, (m) => (m.endsWith("y") ? m.slice(0, -1) + "ies" : m + "s"));
  });

  // Ordinals: 15th -> fifteenth
  t = t.replace(/\b(\d+)(st|nd|rd|th)\b/g, (_, n) => ordinal(Number(n)));

  // Currency: $1,200 -> one thousand two hundred dollars ; £5 -> five pounds
  t = t.replace(/([$£€])\s?(\d[\d,]*)(?:\.(\d+))?\s?(million|billion|trillion|thousand)?/g, (_, sym, num, dec, scale) => {
    const unit = { $: "dollars", "£": "pounds", "€": "euros" }[sym];
    let n = cardinal(Number(num.replace(/,/g, "")));
    if (dec) n += ` point ${dec.split("").map((d) => ONES[Number(d)]).join(" ")}`;
    return `${n}${scale ? " " + scale : ""} ${unit}`;
  });

  // Era-tagged years: 44 BC, AD 476, 300 BCE
  t = t.replace(/\b(\d{1,4})\s?(BCE|BC|CE|AD)\b/g, (_, n, era) => `${yearWords(Number(n))} ${spellEra(era)}`);
  t = t.replace(/\b(AD|CE)\s?(\d{1,4})\b/g, (_, era, n) => `${spellEra(era)} ${yearWords(Number(n))}`);

  // Plain 4-digit years (1000–2099) not part of a larger number
  t = t.replace(/(?<![\d,.])\b(1\d{3}|20\d{2})\b(?![\d,.]*\d)/g, (_, y) => yearWords(Number(y)));

  // Remaining numbers with commas / decimals
  t = t.replace(/\b(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d+))?\b/g, (_, int, dec) => {
    const n = cardinal(Number(int.replace(/,/g, "")));
    return dec ? `${n} point ${dec.split("").map((d) => ONES[Number(d)]).join(" ")}` : n;
  });

  return t.replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1").replace(/,\s*,/g, ",").trim();
}

// Capitalized words that precede the pronoun "I" rather than a regnal numeral.
const NOT_NAMES = new Set(("Then And But So When If What Where How Now Here There As Today Yes No Because Before After " +
  "Once Still Yet Perhaps Maybe Why Who While Though Although Since Until Unless Or Nor Did Do Can Could Should Would " +
  "Will Shall May Might Must Am Was Were Have Had Let Tell Ask Said Say Think Know Hope Wish Guess Believe Suppose").split(" "));

function spellEra(e) {
  return { BC: "B C", BCE: "B C E", AD: "A D", CE: "C E" }[e];
}

export function wordCount(text) {
  return cleanDisplay(text).split(/\s+/).filter(Boolean).length;
}
