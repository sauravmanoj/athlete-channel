// Scene templates. Each returns {html, css, js} for one HyperFrames sub-composition.
import { esc } from "../lib/core.mjs";
import { icon, background, isDark } from "../lib/art.mjs";
import { mascot, highlightHtml, W, H, GROUND, POS } from "./common.mjs";

const svgWrap = (inner) => `<svg class="full" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">${inner}</svg>`;
const f = (n) => Number(n).toFixed(3);

// ---------------------------------------------------------------- mascot
/**
 * The workhorse: the character on a background doing something, with optional
 * headline, callouts pointing at body parts, gauges, icons and a caption chip.
 */
export function mascotScene(s, t, ctx) {
  const id = s.id;
  const bg = s.background || "plain";
  const hasText = !!s.headline;
  const m = mascot(`${id}-m`, s, t, ctx, { position: hasText ? (s.headline.side === "left" ? "right" : "left") : "center" });
  let svg = background(bg) + m.svg;
  let html = "";
  let css = "";
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:${s.zoom ?? 1.04},duration:${f(t.dur)},ease:"none"},0);`;

  if (hasText) {
    const h = s.headline;
    const side = h.side || "right";
    const a = ctx.at(h.at, Math.max(0.15, t.speechStart));
    html += `<div class="headline" id="${id}-hd" style="${side === "right" ? "left:1000px;right:120px" : "left:120px;right:1000px"};top:${h.top ?? 300}px;font-size:${h.size || (h.text.length > 26 ? 84 : 110)}px">${highlightHtml(h.text, h.highlight)}</div>`;
    js += `tl.fromTo("#${id}-hd",{opacity:0,y:40,scale:.94},{opacity:1,y:0,scale:1,duration:.4,ease:"back.out(1.8)"},${f(a)});`;
  }

  (s.icons || []).forEach((ic, i) => {
    const a = ctx.at(ic.at, t.speechStart + 0.3 + i * 0.6);
    const [x, y] = ic.pos || ic.near ? (ic.near ? offset(m.point(ic.near, a), ic.offset || [0, -150]) : ic.pos) : [m.x + 330, 300];
    const sc = ic.size || 1;
    const level = ic.level ?? 1;
    svg += `<g transform="translate(${x} ${y}) scale(${sc})"><g id="${id}-ic${i}">${icon(ic.icon, { id: `${id}-ic${i}`, level, color: ic.color })}</g></g>`;
    js += `tl.fromTo("#${id}-ic${i}",{scale:0,opacity:0,transformOrigin:"50% 50%"},{scale:1,opacity:1,duration:.35,ease:"back.out(2.4)"},${f(a)});`;
    if (ic.icon === "battery" && ic.levelTo !== undefined) {
      const la = ctx.at(ic.levelAt, a + 0.8);
      const col = ic.levelTo > 0.5 ? "var(--good)" : ic.levelTo > 0.2 ? "var(--hl)" : "var(--bad)";
      js += `tl.fromTo("#${id}-ic${i}-lvl",{attr:{width:${92 * level}}},{attr:{width:${92 * ic.levelTo}},fill:"${col}",duration:${ic.levelDur || 1.4},ease:"power1.inOut",immediateRender:false},${f(la)});`;
    }
    if (ic.pulse) js += `tl.to("#${id}-ic${i}",{scale:1.12,duration:.35,yoyo:true,repeat:${Math.max(1, Math.floor((t.dur - a) / 0.35) - 2)},ease:"sine.inOut"},${f(a + 0.4)});`;
  });

  (s.callouts || []).forEach((c, i) => {
    const a = ctx.at(c.at, t.speechStart + 0.4 + i * 0.8);
    const [px, py] = m.point(c.target || "chest", a + 0.5);
    const side = c.side || (px > m.x ? "right" : "left");
    const lx = side === "right" ? Math.min(px + (c.dist || 260), 1500) : Math.max(px - (c.dist || 260), 420);
    const ly = py + (c.dy || -40);
    svg += `<g id="${id}-co${i}"><circle cx="${px}" cy="${py}" r="16" fill="var(--hl)" stroke="var(--ink)" stroke-width="5"/>
      <path id="${id}-col${i}" d="M${px} ${py} L${lx} ${ly}" stroke="var(--ink)" stroke-width="5" stroke-dasharray="1000" stroke-dashoffset="1000"/></g>`;
    html += `<div class="callout" id="${id}-cb${i}" style="left:${lx}px;top:${ly}px;transform:translate(${side === "right" ? "0" : "-100%"},-50%)">${esc(c.label)}</div>`;
    js += `tl.fromTo("#${id}-co${i}",{opacity:0},{opacity:1,duration:.2},${f(a)});`;
    js += `tl.fromTo("#${id}-col${i}",{strokeDashoffset:1000},{strokeDashoffset:0,duration:.4,ease:"power2.out"},${f(a)});`;
    js += `tl.fromTo("#${id}-cb${i}",{opacity:0,scale:.7},{opacity:1,scale:1,duration:.3,ease:"back.out(2)"},${f(a + 0.3)});`;
  });

  (s.gauges || []).forEach((g, i) => {
    const a = ctx.at(g.at, t.speechStart + 0.3);
    const from = g.from ?? 100, to = g.to ?? from;
    const col = (v) => (v > 50 ? "var(--good)" : v > 25 ? "var(--hl)" : "var(--bad)");
    html += `<div class="gauge" id="${id}-g${i}" style="right:${g.right ?? 110}px;top:${(g.top ?? 110) + i * 110}px">
      <div class="gl">${g.icon ? `<svg width="44" height="44" viewBox="-60 -60 120 120">${icon(g.icon)}</svg>` : ""}${esc(g.label || "")}</div>
      <div class="track"><div class="fill" id="${id}-gf${i}" style="transform:scaleX(${from / 100});background:${col(from)}"></div></div></div>`;
    js += `tl.fromTo("#${id}-g${i}",{opacity:0,x:40},{opacity:1,x:0,duration:.35,ease:"power3.out"},${f(a)});`;
    if (to !== from) js += `tl.fromTo("#${id}-gf${i}",{scaleX:${from / 100},background:"${col(from)}"},{scaleX:${to / 100},background:"${col(to)}",duration:${g.dur || 1.6},ease:"power1.inOut",immediateRender:false},${f(ctx.at(g.changeAt, a + 0.6))});`;
  });

  if (s.caption) {
    const a = ctx.at(s.caption.at, 0.3);
    html += `<div id="${id}-cap" style="position:absolute;left:90px;bottom:70px"><span class="chip brand">${esc(s.caption.text)}</span></div>`;
    js += `tl.fromTo("#${id}-cap",{opacity:0,x:-30},{opacity:1,x:0,duration:.35,ease:"power3.out"},${f(a)});`;
  }

  return {
    html: `<div class="stage ${isDark(bg) ? "on-dark" : ""}" id="${id}-stage">${svgWrap(svg)}${html}</div>`,
    css,
    js: js + m.js,
  };
}
function offset([x, y], [dx, dy]) {
  return [x + dx, y + dy];
}

// ---------------------------------------------------------------- slam
/** Big punchy words ("THE LACTIC SYSTEM"). Each word lands when spoken. */
export function slam(s, t, ctx) {
  const id = s.id;
  const style = s.style || "plain";
  const bgc = style === "dark" ? "#1B1F36" : style === "brand" ? "var(--brand)" : "var(--bg)";
  const fg = style === "plain" ? "var(--ink)" : "#fff";
  const words = s.text.split(/\s+/);
  const hl = new Set([].concat(s.highlight || []).flatMap((h) => h.toUpperCase().split(/\s+/)));
  const size = s.size || (s.text.length > 22 ? 150 : s.text.length > 12 ? 190 : 240);
  const html = `<div class="full" style="background:${bgc}"></div>
  <div class="stage" id="${id}-stage"><div class="wrap">
    ${s.icon ? `<svg id="${id}-ic" width="200" height="200" viewBox="-70 -70 140 140" style="display:block;margin:0 auto 30px">${icon(s.icon)}</svg>` : ""}
    <div class="words">${words.map((w, i) => `<span class="w ${hl.has(w.toUpperCase().replace(/[^\w]/g, "")) ? "hl" : ""}" id="${id}-w${i}">${esc(w)}</span>`).join(" ")}</div>
    ${s.sub ? `<div class="sub" id="${id}-sub">${esc(s.sub)}</div>` : ""}
  </div></div>`;
  const css = `
  #${id}-root .wrap{position:absolute;left:120px;right:120px;top:50%;transform:translateY(-50%);text-align:center}
  #${id}-root .words{font:700 ${size}px/1.02 var(--display);text-transform:uppercase;color:${fg};letter-spacing:.01em}
  #${id}-root .w{display:inline-block}
  #${id}-root .w.hl{color:${style === "brand" ? "var(--ink)" : "var(--accent)"}}
  #${id}-root .sub{margin-top:30px;font:600 46px/1.3 var(--sans);color:${style === "plain" ? "var(--ink-2)" : "rgba(255,255,255,.85)"}}`;
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.05,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.icon) js += `tl.fromTo("#${id}-ic",{scale:0},{scale:1,duration:.35,ease:"back.out(2.4)"},.05);`;
  let prev = 0;
  words.forEach((w, i) => {
    const clean = w.replace(/[^\w']/g, "");
    let a = ctx.at(`@${clean}`, t.speechStart + i * 0.18, true);
    a = Math.max(a, prev + 0.08);
    if (i === 0) a = Math.min(a, 0.25);
    prev = a;
    js += `tl.fromTo("#${id}-w${i}",{opacity:0,scale:1.6,y:20},{opacity:1,scale:1,y:0,duration:.22,ease:"power3.out"},${f(a)});`;
  });
  if (s.sub) js += `tl.fromTo("#${id}-sub",{opacity:0,y:20},{opacity:1,y:0,duration:.4},${f(ctx.at(s.subAt, prev + 0.5))});`;
  return { html, css, js };
}

// ---------------------------------------------------------------- lineup
/** 2–5 characters side by side: levels, types, stages, phases. */
export function lineup(s, t, ctx) {
  const id = s.id;
  const n = s.members.length;
  const bg = s.background || "plain";
  const span = n <= 3 ? 1300 : 1560;
  const xs = s.members.map((_, i) => 960 - span / 2 + (span / (n - 1 || 1)) * i);
  const baseScale = n <= 2 ? 0.95 : n === 3 ? 0.82 : n === 4 ? 0.68 : 0.58;
  let svg = background(bg, 880);
  let html = "";
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.03,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.title) {
    html += `<div id="${id}-title" style="position:absolute;left:0;right:0;top:56px;text-align:center"><span class="chip">${esc(s.title)}</span></div>`;
    js += `tl.fromTo("#${id}-title",{opacity:0,y:-20},{opacity:1,y:0,duration:.3},.1);`;
  }
  const spread = Math.max(0.6, t.speechDur * 0.85);
  s.members.forEach((mem, i) => {
    const sc = s.grow ? baseScale * (0.82 + (0.3 * i) / Math.max(1, n - 1)) : baseScale * (mem.scale || 1);
    const m = mascot(`${id}-m${i}`, { ...mem, x: xs[i], y: 880, scale: sc }, t, ctx);
    svg += `<g id="${id}-grp${i}">${m.svg}</g>`;
    const a = ctx.at(mem.at, t.speechStart + 0.1 + (i / n) * spread);
    js += `tl.fromTo("#${id}-grp${i}",{opacity:0,y:40},{opacity:1,y:0,duration:.35,ease:"back.out(1.6)"},${f(a)});` + m.js;
    html += `<div class="lab" id="${id}-l${i}" style="left:${xs[i]}px"><span class="chip ${s.highlight === i ? "brand" : ""}">${esc(mem.label || "")}</span>${mem.sub ? `<div class="ls">${esc(mem.sub)}</div>` : ""}</div>`;
    js += `tl.fromTo("#${id}-l${i}",{opacity:0},{opacity:1,duration:.3},${f(a + 0.2)});`;
    if (s.dimPrevious && i > 0) js += `tl.to(["#${id}-grp${i - 1}","#${id}-l${i - 1}"],{opacity:.35,duration:.3},${f(a)});`;
  });
  const css = `#${id}-root .lab{position:absolute;top:905px;transform:translateX(-50%);text-align:center;white-space:nowrap}
  #${id}-root .ls{margin-top:10px;font:600 24px var(--sans);color:var(--ink-2)}`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(svg)}${html}</div>`, css, js };
}

// ---------------------------------------------------------------- versus
/** You vs opponent (or before vs after) with optional gauges above each. */
export function versus(s, t, ctx) {
  const id = s.id;
  const bg = s.background || "plain";
  let svg = background(bg);
  let html = "";
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.03,duration:${f(t.dur)},ease:"none"},0);`;
  [["left", 520, "right"], ["right", 1400, "left"]].forEach(([k, x, facing]) => {
    const side = s[k];
    const m = mascot(`${id}-${k}`, { facing, ...side, x, scale: side.scale ?? 0.92, tint: side.tint ?? (k === "right" && s.opponentTint !== false ? "opponent" : undefined) }, t, ctx);
    svg += m.svg;
    js += m.js;
    const a = ctx.at(side.at, k === "left" ? 0.1 : Math.max(0.3, t.speechStart + t.speechDur * 0.3));
    js += `tl.fromTo("#${id}-${k}-mv",{opacity:0,x:${k === "left" ? -80 : 80}},{opacity:1,x:0,duration:.4,ease:"power3.out"},${f(a)});`;
    html += `<div class="vl" id="${id}-${k}-l" style="left:${x}px"><span class="chip ${k === "left" ? "brand" : ""}">${esc(side.label || "")}</span></div>`;
    js += `tl.fromTo("#${id}-${k}-l",{opacity:0},{opacity:1,duration:.3},${f(a + 0.2)});`;
    if (side.gauge) {
      const g = side.gauge;
      const from = g.from ?? 100, to = g.to ?? from;
      const col = (v) => (v > 50 ? "var(--good)" : v > 25 ? "var(--hl)" : "var(--bad)");
      html += `<div class="gauge" id="${id}-${k}-g" style="left:${x - 210}px;top:140px"><div class="gl">${g.icon ? `<svg width="44" height="44" viewBox="-60 -60 120 120">${icon(g.icon)}</svg>` : ""}${esc(g.label || "")}</div>
        <div class="track"><div class="fill" id="${id}-${k}-gf" style="transform:scaleX(${from / 100});background:${col(from)}"></div></div></div>`;
      js += `tl.fromTo("#${id}-${k}-g",{opacity:0},{opacity:1,duration:.3},${f(a + 0.3)});`;
      if (to !== from) js += `tl.fromTo("#${id}-${k}-gf",{scaleX:${from / 100},background:"${col(from)}"},{scaleX:${to / 100},background:"${col(to)}",duration:${g.dur || 1.8},ease:"power1.inOut",immediateRender:false},${f(ctx.at(g.at, a + 0.8))});`;
    }
  });
  if (s.vs !== false) {
    html += `<div id="${id}-vs" class="vs">${esc(s.vs || "VS")}</div>`;
    js += `tl.fromTo("#${id}-vs",{scale:0,opacity:0},{scale:1,opacity:1,duration:.35,ease:"back.out(2.5)"},${f(Math.max(0.5, t.speechStart + t.speechDur * 0.3))});`;
  }
  const css = `#${id}-root .vl{position:absolute;top:960px;transform:translateX(-50%)}
  #${id}-root .vs{position:absolute;left:960px;top:520px;transform:translate(-50%,-50%);font:700 110px var(--display);color:var(--accent);-webkit-text-stroke:4px var(--ink)}`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(svg)}${html}</div>`, css, js };
}

// ---------------------------------------------------------------- side mascot (list/chart/stat/title)
function sideMascot(id, s, t, ctx, x = 1520, scale = 0.82, bg = null) {
  if (!s.mascot) return { svg: bg ? background(bg) : "", js: "" };
  const m = mascot(`${id}-sm`, { x, scale, ...s.mascot }, t, ctx);
  return { svg: (bg ? background(bg) : "") + m.svg, js: m.js };
}

// ---------------------------------------------------------------- list
/** Numbered points revealed as they are spoken. */
export function list(s, t, ctx) {
  const id = s.id;
  const sm = sideMascot(id, s, t, ctx, 1540, 0.8, s.background || "plain");
  const n = s.items.length;
  const rowH = n <= 3 ? 170 : n <= 4 ? 150 : 124;
  const top = s.title ? 250 : 180;
  let html = s.title ? `<div class="headline" id="${id}-t" style="left:110px;top:80px;font-size:84px">${highlightHtml(s.title, s.highlight)}</div>` : "";
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.025,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.title) js += `tl.fromTo("#${id}-t",{opacity:0,y:20},{opacity:1,y:0,duration:.35},.05);`;
  const spread = Math.max(0.6, t.speechDur * 0.85);
  s.items.forEach((it, i) => {
    const item = typeof it === "string" ? { text: it } : it;
    const a = ctx.at(item.at, t.speechStart + 0.2 + (i / n) * spread);
    html += `<div class="card row" id="${id}-r${i}" style="top:${top + i * rowH}px;height:${rowH - 28}px">
      <div class="num">${i + 1}</div>
      ${item.icon ? `<svg class="ico" viewBox="-62 -62 124 124">${icon(item.icon)}</svg>` : ""}
      <div class="txt">${highlightHtml(item.text, item.highlight)}</div></div>`;
    js += `tl.fromTo("#${id}-r${i}",{opacity:0,x:-60},{opacity:1,x:0,duration:.35,ease:"power3.out"},${f(a)});`;
    if (s.focus !== false && i > 0) js += `tl.to("#${id}-r${i - 1}",{opacity:.5,duration:.25},${f(a)});`;
  });
  const css = `
  #${id}-root .row{position:absolute;left:110px;width:${s.mascot ? 1150 : 1600}px;display:flex;align-items:center;gap:26px;padding:0 28px;box-sizing:border-box}
  #${id}-root .num{flex:none;width:64px;height:64px;border-radius:50%;background:var(--accent);color:#fff;font:700 40px/64px var(--display);text-align:center;border:4px solid var(--ink)}
  #${id}-root .ico{flex:none;width:70px;height:70px}
  #${id}-root .txt{font:700 ${n <= 4 ? 44 : 38}px/1.15 var(--sans);color:var(--ink)}
  #${id}-root .txt .hl{color:var(--accent)}`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(sm.svg)}${html}</div>`, css, js: js + sm.js };
}

// ---------------------------------------------------------------- chart
/** Horizontal bars (comparisons, zones, percentages). */
export function chart(s, t, ctx) {
  const id = s.id;
  const sm = sideMascot(id, s, t, ctx, 1560, 0.78, s.background || "plain");
  const max = s.max ?? Math.max(...s.bars.map((b) => b.value));
  const n = s.bars.length;
  const rowH = n <= 3 ? 170 : n <= 5 ? 130 : 108;
  const top = s.title ? 260 : 190;
  const barMax = s.mascot ? 760 : 1100;
  let html = s.title ? `<div class="headline" id="${id}-t" style="left:110px;top:80px;font-size:80px">${highlightHtml(s.title, s.highlight)}</div>` : "";
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.025,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.title) js += `tl.fromTo("#${id}-t",{opacity:0,y:20},{opacity:1,y:0,duration:.35},.05);`;
  const spread = Math.max(0.6, t.speechDur * 0.8);
  s.bars.forEach((b, i) => {
    const a = ctx.at(b.at, t.speechStart + 0.2 + (i / n) * spread);
    const w = Math.max(30, (b.value / max) * barMax);
    const color = b.color ? (b.color.startsWith("#") ? b.color : `var(--${b.color})`) : i === s.focus ? "var(--accent)" : "var(--brand)";
    html += `<div class="br" id="${id}-b${i}" style="top:${top + i * rowH}px">
      <div class="bl">${esc(b.label)}</div>
      <div class="bar" id="${id}-bb${i}" style="width:${w}px;background:${color}"></div>
      <div class="bv" id="${id}-bv${i}" style="left:${370 + w + 20}px">${esc(b.display ?? `${b.value}${s.unit || ""}`)}</div></div>`;
    js += `tl.fromTo("#${id}-b${i}",{opacity:0},{opacity:1,duration:.2},${f(a)});`;
    js += `tl.fromTo("#${id}-bb${i}",{scaleX:0},{scaleX:1,duration:.7,ease:"power2.out"},${f(a)});`;
    js += `tl.fromTo("#${id}-bv${i}",{opacity:0},{opacity:1,duration:.3},${f(a + 0.5)});`;
  });
  const css = `
  #${id}-root .br{position:absolute;left:110px;height:${rowH - 30}px;width:1500px}
  #${id}-root .bl{position:absolute;left:0;width:340px;top:50%;transform:translateY(-50%);font:700 38px/1.1 var(--display);text-transform:uppercase;text-align:right}
  #${id}-root .bar{position:absolute;left:370px;top:0;bottom:0;border:5px solid var(--ink);border-radius:12px;transform-origin:0 50%;box-sizing:border-box}
  #${id}-root .bv{position:absolute;top:50%;transform:translateY(-50%);font:700 44px var(--display)}`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(sm.svg)}${html}</div>`, css, js: js + sm.js };
}

// ---------------------------------------------------------------- stat
export function stat(s, t, ctx) {
  const id = s.id;
  const sm = sideMascot(id, s, t, ctx, 1450, 0.95, s.background || "plain");
  const dec = s.decimals || 0;
  const a = ctx.at(s.at, Math.max(0.15, t.speechStart));
  const html = `<div class="wrap">
    ${s.icon ? `<svg id="${id}-ic" width="150" height="150" viewBox="-70 -70 140 140">${icon(s.icon)}</svg>` : ""}
    <div class="num" id="${id}-num"><span>${esc(s.prefix || "")}</span><span id="${id}-n">0</span><span class="suf">${esc(s.suffix || "")}</span></div>
    <div class="lab" id="${id}-lab">${highlightHtml(s.label || "", s.highlight)}</div></div>`;
  const css = `
  #${id}-root .wrap{position:absolute;left:140px;width:${s.mascot ? 1000 : 1640}px;top:50%;transform:translateY(-55%)}
  #${id}-root .num{font:700 ${String(s.value).length > 6 ? 200 : 260}px/1 var(--display);color:var(--ink)}
  #${id}-root .num{white-space:nowrap}
  #${id}-root .suf{color:var(--accent);font-size:.42em;margin-left:.15em}
  #${id}-root .lab{margin-top:10px;font:700 52px/1.2 var(--sans);color:var(--ink-2)}
  #${id}-root .lab .hl{color:var(--accent)}`;
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.03,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.icon) js += `tl.fromTo("#${id}-ic",{scale:0},{scale:1,duration:.35,ease:"back.out(2.4)"},${f(Math.max(0, a - 0.2))});`;
  js += `tl.fromTo("#${id}-num",{opacity:0},{opacity:1,duration:.2},${f(Math.max(0, a - 0.1))});`;
  js += `(function(){var el=document.querySelector("#${id}-n");var o={v:0};tl.fromTo(o,{v:0},{v:${s.value},duration:1.3,ease:"power2.out",onUpdate:function(){if(el)el.textContent=o.v.toLocaleString("en-US",{minimumFractionDigits:${dec},maximumFractionDigits:${dec}})}},${f(a)});})();`;
  js += `tl.fromTo("#${id}-lab",{opacity:0,y:20},{opacity:1,y:0,duration:.4},${f(a + 0.5)});`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(sm.svg)}${html}</div>`, css, js: js + sm.js };
}

// ---------------------------------------------------------------- title (chapter card)
export function title(s, t, ctx) {
  const id = s.id;
  const m = mascot(`${id}-m`, { pose: "point_up", x: 1430, scale: 1, ...(s.mascot || {}) }, t, ctx);
  const svg = background("brand") + m.svg;
  const html = `<div class="wrap">
    ${s.number !== undefined ? `<div class="no" id="${id}-no">${esc(String(s.number).padStart(2, "0"))}</div>` : ""}
    <div class="hd" id="${id}-hd">${esc(s.heading)}</div>
    ${s.sub ? `<div class="sb" id="${id}-sb">${esc(s.sub)}</div>` : ""}</div>`;
  const css = `
  #${id}-root .wrap{position:absolute;left:130px;width:1020px;top:50%;transform:translateY(-50%)}
  #${id}-root .no{font:700 150px/1 var(--display);color:rgba(28,33,64,.25)}
  #${id}-root .hd{font:700 ${s.heading.length > 24 ? 104 : 132}px/1 var(--display);text-transform:uppercase;color:var(--ink)}
  #${id}-root .sb{margin-top:24px;font:600 42px/1.3 var(--sans);color:var(--ink)}`;
  let js = `tl.fromTo("#${id}-stage",{scale:1},{scale:1.04,duration:${f(t.dur)},ease:"none"},0);`;
  if (s.number !== undefined) js += `tl.fromTo("#${id}-no",{opacity:0,x:-40},{opacity:1,x:0,duration:.35},.05);`;
  js += `tl.fromTo("#${id}-hd",{opacity:0,y:40},{opacity:1,y:0,duration:.45,ease:"back.out(1.6)"},.15);`;
  if (s.sub) js += `tl.fromTo("#${id}-sb",{opacity:0},{opacity:1,duration:.4},.6);`;
  js += `tl.fromTo("#${id}-m-mv",{x:300},{x:0,duration:.5,ease:"power3.out"},.05);`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(svg)}${html}</div>`, css, js: js + m.js };
}

// ---------------------------------------------------------------- endcard
export function endcard(s, t, ctx) {
  const id = s.id;
  const ch = ctx.channel;
  const m = mascot(`${id}-m`, { poses: [{ pose: "stand" }, { pose: "wave", at: 0.5 }], x: 1450, scale: 0.95 }, t, ctx);
  const svg = background("spotlight") + m.svg;
  const html = `<div class="wrap"><div class="nm" id="${id}-nm">${esc(ch.name)}</div><div class="tg" id="${id}-tg">${esc(ch.tagline || "")}</div>
    <div class="nt" id="${id}-nt">${esc(ch.endCard?.text || "")}</div></div>`;
  const css = `#${id}-root .wrap{position:absolute;left:150px;width:950px;top:50%;transform:translateY(-50%)}
  #${id}-root .nm{font:700 120px/1 var(--display);text-transform:uppercase}
  #${id}-root .tg{margin-top:20px;font:600 46px var(--sans);color:var(--accent)}
  #${id}-root .nt{margin-top:50px;font:500 30px var(--sans);color:var(--ink-2)}`;
  let js = `tl.fromTo("#${id}-nm",{opacity:0,y:30},{opacity:1,y:0,duration:.5,ease:"power3.out"},.15);
  tl.fromTo(["#${id}-tg","#${id}-nt"],{opacity:0},{opacity:1,duration:.5,stagger:.3},.6);
  tl.to("#${id}-root",{opacity:0,duration:.6},${f(Math.max(1.4, t.dur - 0.6))});`;
  return { html: `<div class="stage" id="${id}-stage">${svgWrap(svg)}${html}</div>`, css, js: js + m.js };
}

export const BUILDERS = { mascot: mascotScene, slam, lineup, versus, list, chart, stat, title, endcard };
export { POS, GROUND };
