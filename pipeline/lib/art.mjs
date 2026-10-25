// Code-drawn icons and backgrounds (no external assets, nothing to license).
import { esc } from "./core.mjs";

const INK = "var(--ink)";

/** Icon centred at 0,0 with ~100px size. */
export function icon(name, o = {}) {
  const c = o.color || "var(--accent)";
  const lvl = o.level ?? 0.8;
  const I = {
    battery: `<g><rect x="-60" y="-32" width="112" height="64" rx="12" fill="#fff" stroke="${INK}" stroke-width="8"/><rect x="54" y="-14" width="12" height="28" rx="4" fill="${INK}"/>
      <rect id="${o.id || ""}-lvl" x="-50" y="-22" width="${92 * lvl}" height="44" rx="6" fill="${lvl > 0.5 ? "var(--good)" : lvl > 0.2 ? "var(--hl)" : "var(--bad)"}"/></g>`,
    heart: `<path d="M0 40 C-60 0 -58 -46 -24 -46 C-8 -46 0 -32 0 -24 C0 -32 8 -46 24 -46 C58 -46 60 0 0 40Z" fill="${o.color || "var(--bad)"}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>`,
    bolt: `<path d="M10 -54 L-34 8 L-4 8 L-14 54 L34 -10 L4 -10 Z" fill="${o.color || "var(--hl)"}" stroke="${INK}" stroke-width="8" stroke-linejoin="round"/>`,
    brain: `<g fill="#F7A8C4" stroke="${INK}" stroke-width="7" stroke-linejoin="round"><path d="M-6 -44 C-34 -50 -54 -30 -50 -10 C-64 0 -58 30 -36 34 C-30 48 -10 50 -6 40 Z"/><path d="M6 -44 C34 -50 54 -30 50 -10 C64 0 58 30 36 34 C30 48 10 50 6 40 Z"/></g>
      <path d="M-30 -20 Q-18 -10 -30 2 M30 -20 Q18 -10 30 2 M-24 18 Q-12 14 -18 30 M24 18 Q12 14 18 30" stroke="${INK}" stroke-width="5" fill="none"/>`,
    moon: `<path d="M18 -50 A52 52 0 1 0 50 26 A40 40 0 1 1 18 -50Z" fill="#FFE27A" stroke="${INK}" stroke-width="7"/>`,
    zzz: `<g font-family="Oswald" font-weight="700" fill="${INK}"><text x="-40" y="30" font-size="54">Z</text><text x="0" y="0" font-size="40">Z</text><text x="30" y="-26" font-size="28">Z</text></g>`,
    clock: `<circle r="52" fill="#fff" stroke="${INK}" stroke-width="8"/><path d="M0 -34 L0 0 L24 14" stroke="${INK}" stroke-width="8" fill="none" stroke-linecap="round"/>`,
    stopwatch: `<circle cy="6" r="48" fill="#fff" stroke="${INK}" stroke-width="8"/><rect x="-10" y="-62" width="20" height="14" fill="${INK}"/><path d="M0 6 L0 -24" stroke="${c}" stroke-width="8" stroke-linecap="round"/>`,
    fire: `<path d="M0 54 C-40 54 -50 20 -36 -6 C-30 10 -18 12 -18 0 C-18 -26 0 -40 4 -60 C24 -40 46 -12 40 18 C36 42 22 54 0 54Z" fill="#FF8A2B" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/><path d="M0 50 C-16 48 -20 30 -10 16 C-4 26 6 22 6 12 C18 24 22 46 0 50Z" fill="#FFD23F"/>`,
    water: `<path d="M0 -56 C20 -24 40 0 40 20 A40 40 0 0 1 -40 20 C-40 0 -20 -24 0 -56Z" fill="#5BB8F0" stroke="${INK}" stroke-width="7"/>`,
    check: `<circle r="50" fill="var(--good)" stroke="${INK}" stroke-width="8"/><path d="M-22 2 L-6 18 L24 -14" stroke="#fff" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`,
    cross: `<circle r="50" fill="var(--bad)" stroke="${INK}" stroke-width="8"/><path d="M-18 -18 L18 18 M18 -18 L-18 18" stroke="#fff" stroke-width="12" stroke-linecap="round"/>`,
    trophy: `<path d="M-34 -50 L34 -50 L30 0 Q0 26 -30 0 Z" fill="#FFD23F" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/><path d="M-34 -40 Q-62 -40 -54 -14 Q-48 0 -30 -4 M34 -40 Q62 -40 54 -14 Q48 0 30 -4" stroke="${INK}" stroke-width="7" fill="none"/><rect x="-8" y="14" width="16" height="22" fill="${INK}"/><rect x="-30" y="34" width="60" height="16" rx="4" fill="${INK}"/>`,
    muscle: `<path d="M-50 30 Q-56 -6 -30 -20 Q-28 -46 -6 -52 Q12 -54 14 -38 Q4 -30 -6 -30 Q-2 -14 14 -10 Q40 -26 56 -4 Q60 30 26 40 Z" fill="var(--brand)" stroke="${INK}" stroke-width="7" stroke-linejoin="round"/>`,
    target: `<circle r="52" fill="#fff" stroke="${INK}" stroke-width="7"/><circle r="34" fill="var(--bad)" stroke="${INK}" stroke-width="6"/><circle r="16" fill="#fff" stroke="${INK}" stroke-width="6"/>`,
    lungs: `<g fill="#F7A8C4" stroke="${INK}" stroke-width="7"><path d="M-8 -30 C-40 -40 -56 20 -50 40 C-40 50 -10 44 -8 30 Z"/><path d="M8 -30 C40 -40 56 20 50 40 C40 50 10 44 8 30 Z"/></g><path d="M0 -56 L0 -20" stroke="${INK}" stroke-width="8"/>`,
    question: `<circle r="50" fill="var(--hl)" stroke="${INK}" stroke-width="8"/><text y="22" text-anchor="middle" font-family="Oswald" font-weight="700" font-size="70" fill="${INK}">?</text>`,
    food: `<circle r="50" fill="#fff" stroke="${INK}" stroke-width="7"/><path d="M-30 -10 Q0 -40 30 -10 Q0 10 -30 -10Z" fill="var(--good)" stroke="${INK}" stroke-width="5"/><circle cx="-14" cy="20" r="14" fill="var(--bad)" stroke="${INK}" stroke-width="5"/><rect x="6" y="10" width="26" height="20" rx="5" fill="#E8C27A" stroke="${INK}" stroke-width="5"/>`,
  };
  return I[name] || `<text text-anchor="middle" font-size="40">${esc(name)}</text>`;
}
export const ICONS = ["battery", "heart", "bolt", "brain", "moon", "zzz", "clock", "stopwatch", "fire", "water", "check", "cross", "trophy", "muscle", "target", "lungs", "question", "food"];

/** Full-frame SVG background. groundY = where the mascot stands. */
export function background(name = "plain", groundY = 930) {
  const W = 1920, H = 1080;
  switch (name) {
    case "spotlight":
      return `<rect width="${W}" height="${H}" fill="var(--bg)"/>` +
        [520, 400, 290, 190].map((r, i) => `<circle cx="960" cy="${groundY - 300}" r="${r}" fill="${i % 2 ? "var(--bg)" : "var(--bg-2)"}"/>`).join("") + ground(groundY, "var(--bg-2)");
    case "dark":
      return `<rect width="${W}" height="${H}" fill="#1B1F36"/><circle cx="960" cy="${groundY - 280}" r="480" fill="#232845"/>` + ground(groundY, "#232845");
    case "night":
      return `<rect width="${W}" height="${H}" fill="#2B3166"/>` +
        Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 467) % W}" cy="${(i * 211) % 560 + 20}" r="${(i % 3) + 2}" fill="#fff" opacity=".7"/>`).join("") +
        `<g transform="translate(1620 170) scale(1.3)">${icon("moon")}</g>` + `<rect y="${groundY}" width="${W}" height="${H - groundY}" fill="#232857"/>`;
    case "court":
      return `<rect width="${W}" height="${H}" fill="#7FB3E8"/><rect y="${groundY - 140}" width="${W}" height="${H - groundY + 140}" fill="#3F7FC6"/>
        <path d="M0 ${groundY + 60} L${W} ${groundY + 60} M200 ${groundY - 140} L60 ${H} M1720 ${groundY - 140} L1860 ${H} M960 ${groundY - 140} L960 ${H}" stroke="#fff" stroke-width="8" opacity=".85"/>
        <rect x="0" y="${groundY - 330}" width="${W}" height="190" fill="#2F4F87"/>`;
    case "field":
      return `<rect width="${W}" height="${H}" fill="#9ED6F0"/>` +
        Array.from({ length: 8 }, (_, i) => `<rect x="${i * 240}" y="${groundY - 160}" width="120" height="${H}" fill="#4FA64F"/><rect x="${i * 240 + 120}" y="${groundY - 160}" width="120" height="${H}" fill="#5CB85C"/>`).join("") +
        `<path d="M0 ${groundY - 160} L${W} ${groundY - 160}" stroke="#fff" stroke-width="8"/>`;
    case "track":
      return `<rect width="${W}" height="${H}" fill="#BFE3F5"/><rect y="${groundY - 120}" width="${W}" height="${H}" fill="#C8553D"/>` +
        [0, 1, 2, 3].map((i) => `<path d="M0 ${groundY - 90 + i * 60} L${W} ${groundY - 90 + i * 60}" stroke="#fff" stroke-width="5" opacity=".8"/>`).join("");
    case "gym":
      return `<rect width="${W}" height="${H}" fill="#D9DDE6"/><rect y="${groundY}" width="${W}" height="${H - groundY}" fill="#3C3F4E"/>` +
        `<rect x="140" y="220" width="420" height="300" rx="12" fill="#C8CDD8"/><rect x="1360" y="220" width="420" height="300" rx="12" fill="#C8CDD8"/>`;
    case "brand":
      return `<rect width="${W}" height="${H}" fill="var(--brand)"/>` + ground(groundY, "rgba(0,0,0,.12)");
    default:
      return `<rect width="${W}" height="${H}" fill="var(--bg)"/>` + ground(groundY, "var(--bg-2)");
  }
}
function ground(y, fill) {
  return `<rect y="${y}" width="1920" height="${1080 - y}" fill="${fill}"/>`;
}
export const BACKGROUNDS = ["plain", "spotlight", "dark", "night", "court", "field", "track", "gym", "brand"];
export const isDark = (b) => ["dark", "night"].includes(b);
