/* ============================================================
   app.js — shell, motion engine, routing, sheet, content render.

   Motion follows Apple's fluid-interface model:
   springs (not durations), started from the current on-screen value,
   inheriting pointer velocity, interruptible at any frame.
   ============================================================ */
(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Spring ------------------------------------------------
     Apple's two designer parameters:
       damping  1.0 = critically damped (no overshoot); <1 overshoots
       response      seconds to reach the target — NOT a duration
     Retargeting mid-flight keeps position AND velocity, so a reversal
     never produces a "brick wall".                                    */
  class Spring {
    constructor({ from = 0, damping = 1.0, response = 0.4, onFrame, onRest } = {}) {
      this.x = from; this.v = 0; this.target = from;
      this.damping = damping; this.response = response;
      this.onFrame = onFrame; this.onRest = onRest;
      this.raf = 0; this.last = 0;
    }
    set(x) { this.x = x; this.v = 0; this.target = x; this.emit(); }
    // Retarget from the presentation value, carrying velocity through.
    to(target, { velocity, damping, response } = {}) {
      this.target = target;
      if (velocity !== undefined) this.v = velocity;
      if (damping !== undefined) this.damping = damping;
      if (response !== undefined) this.response = response;
      if (REDUCED.matches) { this.x = target; this.v = 0; this.emit(); this.rest(); return; }
      this.start();
    }
    start() {
      if (this.raf) return;
      this.last = performance.now();
      const tick = (now) => {
        const dt = Math.min((now - this.last) / 1000, 1 / 30);
        this.last = now;
        const w = (2 * Math.PI) / this.response;            // natural frequency
        const a = -w * w * (this.x - this.target) - 2 * this.damping * w * this.v;
        this.v += a * dt;
        this.x += this.v * dt;
        this.emit();
        if (Math.abs(this.x - this.target) < 0.05 && Math.abs(this.v) < 0.05) {
          this.x = this.target; this.v = 0; this.emit();
          this.raf = 0; this.rest(); return;
        }
        this.raf = requestAnimationFrame(tick);
      };
      this.raf = requestAnimationFrame(tick);
    }
    stop() { if (this.raf) cancelAnimationFrame(this.raf); this.raf = 0; }
    emit() { this.onFrame && this.onFrame(this.x, this.v); }
    rest() { this.onRest && this.onRest(this.x); }
  }
  window.Spring = Spring;

  /* Momentum projection — where a flick is *going*, not where it stopped. */
  const project = (v, d = 0.998) => (v / 1000) * d / (1 - d);
  window.projectMomentum = project;

  /* Rubber-band resistance past a boundary. */
  const rubberband = (over, dim, c = 0.55) => (over * dim * c) / (dim + c * Math.abs(over));

  /* Velocity tracker — a short history, not just the last point. */
  class VelocityTracker {
    constructor() { this.pts = []; }
    add(v) { const t = performance.now(); this.pts.push([t, v]); if (this.pts.length > 6) this.pts.shift(); }
    get() {
      if (this.pts.length < 2) return 0;
      const [t0, v0] = this.pts[0], [t1, v1] = this.pts[this.pts.length - 1];
      const dt = (t1 - t0) / 1000;
      return dt > 0.001 ? (v1 - v0) / dt : 0;
    }
    reset() { this.pts.length = 0; }
  }
  window.VelocityTracker = VelocityTracker;

  /* ---------- Press feedback: on pointer-DOWN, never on release ---------- */
  document.addEventListener("pointerdown", (e) => {
    const t = e.target.closest(".tap");
    if (!t) return;
    t.classList.add("is-pressed");
    const off = () => { t.classList.remove("is-pressed"); };
    t.addEventListener("pointerup", off, { once: true });
    t.addEventListener("pointercancel", off, { once: true });
    t.addEventListener("pointerleave", off, { once: true });
  }, { passive: true });

  /* ---------- Nav: spring-driven segmented pill ---------- */
  const seg = $(".seg"), pill = $(".seg-pill");
  const pillX = new Spring({ damping: 1.0, response: 0.34, onFrame: (x) => {
    pill.style.transform = `translate3d(${x}px,0,0)`;
  }});
  let pillReady = false;
  function movePill(link, instant) {
    if (!seg || !pill || !link) return;
    const r = link.getBoundingClientRect(), b = seg.getBoundingClientRect();
    pill.style.width = r.width + "px";
    const x = r.left - b.left;
    if (instant || !pillReady) { pillX.set(x); pillReady = true; } else { pillX.to(x); }
  }

  /* ---------- Routing (hash) ------------------------------------
     "" / "#/"  → the gate
     jay's side → base | strategies | signals | atlas
     anna's side → anna                                            */
  const JAY_ROUTES = ["base", "strategies", "signals", "atlas"];
  const ROUTES = ["gate", ...JAY_ROUTES, "anna"];
  const TITLES = {
    gate: "Jay & Anna", base: "Intelligence Base", strategies: "Strategies",
    signals: "Signals", atlas: "World Atlas", anna: "Anna"
  };

  function routeFromHash() {
    const h = (location.hash || "").replace(/^#\/?/, "").split("?")[0];
    return ROUTES.includes(h) ? h : "gate";
  }

  const chrome = $("#chrome"), foot = $("#foot"), chromeWho = $("#chromeWho");

  function go(name, { push = true } = {}) {
    // Let the hash be the single source of truth: set it and let hashchange render.
    if (push && routeFromHash() !== name) {
      location.hash = name === "gate" ? "#/" : "#/" + name;
      return;
    }

    const onGate = name === "gate";
    const onJay = JAY_ROUTES.includes(name);

    chrome.hidden = onGate;
    foot.hidden = !onJay;        // the footer is Jay's; it does not belong on Anna's page
    seg.hidden = !onJay;
    chromeWho.textContent = onJay ? window.META.owner : (name === "anna" ? "Anna" : "");

    $$(".route").forEach((r) => {
      const on = r.id === "route-" + name;
      r.classList.toggle("is-active", on);
      r.classList.remove("is-entering");
      if (on && !onGate && !REDUCED.matches) { void r.offsetWidth; r.classList.add("is-entering"); }
    });

    if (onGate) resetGate();

    $$(".seg a").forEach((a) => {
      const on = a.dataset.route === name;
      a.setAttribute("aria-current", on ? "page" : "false");
      if (on && onJay) movePill(a);
    });

    document.title = TITLES[name] + (onJay ? " — " + window.META.owner : "");
    window.dispatchEvent(new CustomEvent("routechange", { detail: name }));
    if (push) window.scrollTo({ top: 0, behavior: REDUCED.matches ? "auto" : "smooth" });
  }
  window.addEventListener("hashchange", () => go(routeFromHash(), { push: false }));

  /* ---------- Sheet ------------------------------------------------
     Bottom sheet on narrow screens (drag + momentum), side panel on wide.
     Enter and exit travel the same path; grabbing it mid-flight works.  */
  const sheet = $("#sheet"), scrim = $("#scrim"), sheetBody = $("#sheetBody");
  const isWide = () => window.matchMedia("(min-width: 860px)").matches;
  let sheetOpen = false, lastTrigger = null;

  const axis = () => (isWide() ? "x" : "y");
  const extent = () => (isWide() ? sheet.offsetWidth : sheet.offsetHeight);

  const sheetSpring = new Spring({
    damping: 0.86, response: 0.34,
    onFrame: (p) => {
      sheet.style.transform = axis() === "x"
        ? `translate3d(${p}px,0,0)` : `translate3d(0,${p}px,0)`;
      const e = extent() || 1;
      scrim.style.opacity = String(Math.max(0, 1 - p / e));
    },
    onRest: (p) => { if (p >= extent() - 1) sheet.classList.add("sheet-hidden"); }
  });

  function openSheet(html, trigger) {
    sheetBody.innerHTML = html;
    sheet.classList.remove("sheet-hidden");
    lastTrigger = trigger || null;
    if (!sheetOpen) sheetSpring.set(extent());
    sheetOpen = true;
    scrim.classList.add("is-on");
    sheet.setAttribute("aria-hidden", "false");
    sheetSpring.to(0, { damping: 0.86, response: 0.34 });
    requestAnimationFrame(() => {
      $$(".sector-row .bar > i", sheetBody).forEach((b) => { b.style.width = b.dataset.w + "%"; });
      const close = $("#sheetClose", sheetBody); close && close.focus();
    });
  }
  function closeSheet(velocity) {
    if (!sheetOpen) return;
    sheetOpen = false;
    scrim.classList.remove("is-on");
    sheet.setAttribute("aria-hidden", "true");
    sheetSpring.to(extent(), { velocity, damping: 1.0, response: 0.32 });
    lastTrigger && lastTrigger.focus && lastTrigger.focus();
  }
  window.openSheet = openSheet;
  window.closeSheet = closeSheet;

  sheetSpring.set(1e4);
  sheet && sheet.classList.add("sheet-hidden");
  scrim && scrim.addEventListener("click", () => closeSheet());
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSheet(); });
  document.addEventListener("click", (e) => { if (e.target.closest("#sheetClose")) closeSheet(); });
  window.addEventListener("resize", () => { if (!sheetOpen) { sheetSpring.set(extent()); } });

  /* Drag-to-dismiss — 1:1 tracking, rubber-band past the open position,
     release decided by projected momentum, velocity handed to the spring. */
  (function dragSheet() {
    if (!sheet) return;
    const grip = $(".sheet-grip", sheet);
    let dragging = false, startP = 0, startVal = 0, tracker = new VelocityTracker();

    const coord = (e) => (axis() === "x" ? e.clientX : e.clientY);

    function down(e) {
      if (isWide() && !e.target.closest(".sheet-grip")) return;
      if (!isWide() && !e.target.closest(".sheet-grip")) return;
      dragging = true;
      sheetSpring.stop();
      startP = coord(e);
      startVal = sheetSpring.x;
      tracker.reset(); tracker.add(startVal);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    function move(e) {
      if (!dragging) return;
      const d = coord(e) - startP;
      let p = startVal + d;
      if (p < 0) p = -rubberband(-p, extent());   // resist, don't hard-stop
      sheetSpring.set(p);
      tracker.add(p);
      e.preventDefault();
    }
    function up() {
      if (!dragging) return;
      dragging = false;
      const v = tracker.get();
      const projected = sheetSpring.x + project(v);
      if (projected > extent() * 0.32) closeSheet(v);
      else sheetSpring.to(0, { velocity: v, damping: 0.86, response: 0.32 });
    }
    const host = grip || sheet;
    host.addEventListener("pointerdown", down);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerup", up);
    host.addEventListener("pointercancel", up);
  })();

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add("is-in");
      io.unobserve(en.target);
      $$(".skill-bar > i", en.target).forEach((b) => { b.style.width = b.dataset.w + "%"; });
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  const observeReveals = () => $$(".reveal:not(.is-in)").forEach((el) => io.observe(el));

  /* ---------- Payoff diagrams (pure SVG, theme-aware via currentColor) ---------- */
  const PAYOFFS = {
    short_put:    [[0,-58],[26,-58],[52,-30],[74,-2],[100,-2]],
    covered_call: [[0,-60],[38,-16],[62,10],[76,18],[100,18]],
    autocall:     [[0,-58],[20,-52],[34,14],[52,16],[70,18],[86,20],[100,22]],
    kelly:        [[0,-30],[16,4],[32,18],[48,20],[64,12],[80,-8],[100,-40]],
    dispersion:   [[0,26],[18,4],[36,-16],[50,-22],[64,-16],[82,4],[100,26]],
    carry:        [[0,-24],[24,-6],[48,8],[72,16],[88,4],[100,-26]],
    valuation:    [[0,24],[20,10],[40,-2],[60,-10],[80,-16],[100,-20]],
    attrib:       [[0,-14],[20,2],[40,-4],[60,10],[80,6],[100,20]]
  };
  function payoffSVG(kind) {
    const pts = PAYOFFS[kind] || PAYOFFS.short_put;
    const H = 96, MID = H / 2, SC = 0.62;
    const y = (v) => MID - v * SC;
    const d = pts.map((p, i) => (i ? "L" : "M") + p[0] + " " + y(p[1]).toFixed(1)).join(" ");
    const area = d + ` L100 ${MID} L0 ${MID} Z`;
    const uid = kind + "-" + Math.random().toString(36).slice(2, 7);
    // preserveAspectRatio="none" stretches x, so every stroke is non-scaling.
    return `<svg class="payoff" viewBox="0 0 100 ${H}" preserveAspectRatio="none" aria-hidden="true">
      <defs><linearGradient id="pg-${uid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="currentColor" stop-opacity="0.16"/>
        <stop offset="1" stop-color="currentColor" stop-opacity="0.01"/>
      </linearGradient></defs>
      <line x1="0" y1="${MID}" x2="100" y2="${MID}" stroke="currentColor" stroke-opacity="0.22"
            stroke-width="1" stroke-dasharray="3 4" vector-effect="non-scaling-stroke"/>
      <path d="${area}" fill="url(#pg-${uid})"/>
      <path d="${d}" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"
            stroke-linecap="round" vector-effect="non-scaling-stroke"/>
    </svg>`;
  }

  /* ---------- The gate ---------------------------------------------
     Two doors. The chosen one opens toward you and the rest recede;
     coming back reverses the same path, so the space stays coherent. */
  const ARROW = '<span class="arrow" aria-hidden="true">→</span>';
  let chosen = null;

  function renderGate() {
    $("#gateGrid").innerHTML = window.PEOPLE.map((p) => `
      <button class="door${p.ready ? "" : " is-quiet"}" type="button" data-door="${p.id}" data-route="${p.route}">
        <span class="door-top">
          <span class="door-avatar ${p.tone}" aria-hidden="true">${p.initials}</span>
          <span>
            <h2>${p.name}</h2>
            <span class="t-caption door-role">${p.role}</span>
          </span>
        </span>
        <span class="t-body door-sum">${p.summary}</span>
        ${p.chips.length
          ? `<span class="door-chips">${p.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</span>`
          : `<span class="door-empty" aria-hidden="true"><i></i><i></i><i></i></span>`}
        <span class="door-foot">${p.cta} ${ARROW}</span>
      </button>`).join("");

    $("#annaSlots").innerHTML = window.ANNA.slots.map(([h, b]) =>
      `<div class="slot reveal"><h3 class="t-head">${h}</h3>
        <p class="t-body" style="margin:0.45rem 0 0;font-size:0.9375rem">${b}</p></div>`).join("");
  }

  function resetGate() {
    const gate = $(".gate");
    if (!gate) return;
    gate.classList.remove("is-exiting");
    $$(".door", gate).forEach((d) => d.classList.remove("is-chosen", "is-returning"));
    if (chosen) {
      const d = $(`.door[data-door="${chosen}"]`, gate);
      if (d && !REDUCED.matches) { void d.offsetWidth; d.classList.add("is-returning"); }
    }
  }

  function leaveGate(door) {
    const gate = $(".gate");
    chosen = door.dataset.door;
    $$(".door", gate).forEach((d) => d.classList.toggle("is-chosen", d === door));
    gate.classList.add("is-exiting");
    const wait = REDUCED.matches ? 0 : 230;
    setTimeout(() => go(door.dataset.route), wait);
  }

  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-door]");
    if (d) { e.preventDefault(); leaveGate(d); }
  });

  /* Doors get the same press feedback as cards — on pointer-down. */
  document.addEventListener("pointerdown", (e) => {
    const d = e.target.closest(".door");
    if (!d) return;
    d.classList.add("is-pressed");
    const off = () => d.classList.remove("is-pressed");
    d.addEventListener("pointerup", off, { once: true });
    d.addEventListener("pointercancel", off, { once: true });
    d.addEventListener("pointerleave", off, { once: true });
  }, { passive: true });

  /* ---------- Render: hero stats ---------- */
  function renderStats() {
    const cs = Object.values(window.COUNTRIES);
    const mcap = cs.reduce((a, c) => a + (c.mcap || 0), 0);
    const best = cs.reduce((a, c) => (c.ytd > a.ytd ? c : a));
    const worst = cs.reduce((a, c) => (c.ytd < a.ytd ? c : a));
    const short = (n) => n
      .replace("United States", "US").replace("United Kingdom", "UK")
      .replace("South Korea", "Korea").replace("United Arab Emirates", "UAE")
      .replace(" SAR", "").replace("South Africa", "S. Africa");
    const rows = [
      ["Markets covered", cs.length, ""],
      ["Market cap mapped", "$" + mcap.toFixed(0) + "tn", ""],
      ["Best index YTD", short(best.name) + " +" + best.ytd.toFixed(0) + "%", "pos"],
      ["Worst index YTD", short(worst.name) + " " + worst.ytd.toFixed(0) + "%", "neg"],
      ["Strategies documented", window.STRATEGIES.length, ""]
    ];
    $("#statbar").innerHTML = rows.map(([k, v, cls]) =>
      `<div><div class="t-label">${k}</div><div class="v num ${cls}">${v}</div></div>`).join("");
  }

  /* ---------- Render: strategies ---------- */
  function stratCard(s) {
    return `<article class="card pad tap strat reveal" data-strat="${s.id}" tabindex="0" role="button"
              aria-label="${s.name} — open detail">
      <div style="color:var(--accent)">${payoffSVG(s.payoff)}</div>
      <h3 class="t-head">${s.name}</h3>
      <p class="t-body" style="margin:0;font-size:0.9375rem">${s.thesis}</p>
      <div class="strat-meta">${s.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>
    </article>`;
  }
  function stratSheet(s) {
    return `<div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:0.9rem">
        <div style="flex:1"><div class="t-label">Strategy</div><h2 class="t-title" style="margin-top:0.25rem">${s.name}</h2></div>
        <button class="icon-btn" id="sheetClose" aria-label="Close">✕</button>
      </div>
      <div style="color:var(--accent);margin-bottom:1rem">${payoffSVG(s.payoff)}</div>
      <p class="t-body">${s.detail}</p>
      <div class="kv" style="margin:1.1rem 0">
        ${s.metrics.map(([k, v]) => `<div><div class="t-label">${k}</div><div class="v">${v}</div></div>`).join("")}
      </div>
      <div class="t-label" style="margin-bottom:0.4rem">Where it hurts</div>
      <p class="t-body" style="margin-top:0">${s.risks}</p>
      <div class="strat-meta">${s.tags.map((t) => `<span class="chip">${t}</span>`).join("")}</div>`;
  }
  function renderStrategies() {
    $("#stratGrid").innerHTML = window.STRATEGIES.map(stratCard).join("");
    $("#skillList").innerHTML = window.SKILLS.map(([n, v, d]) =>
      `<div class="skill reveal">
        <div><div class="t-head">${n}</div><div class="t-caption">${d}</div></div>
        <div class="num t-caption">${v}</div>
        <div class="skill-bar"><i data-w="${v}"></i></div>
      </div>`).join("");
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-strat]");
    if (!c) return;
    const s = window.STRATEGIES.find((x) => x.id === c.dataset.strat);
    s && openSheet(stratSheet(s), c);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const c = e.target.closest && e.target.closest("[data-strat]");
    if (!c) return;
    e.preventDefault();
    const s = window.STRATEGIES.find((x) => x.id === c.dataset.strat);
    s && openSheet(stratSheet(s), c);
  });

  /* ---------- Render: events ---------- */
  function renderEvents() {
    $("#eventList").innerHTML = window.EVENTS.map((ev) =>
      `<li data-tone="${ev.tone}" class="reveal">
        <div class="t-label">${ev.date}</div>
        <h3 class="t-head" style="margin:0.2rem 0 0.35rem">${ev.title}</h3>
        <p class="t-body" style="margin:0 0 0.5rem;font-size:0.9375rem">${ev.body}</p>
        <p class="t-caption" style="margin:0"><strong style="color:var(--ink-2)">Read:</strong> ${ev.read}</p>
      </li>`).join("");
  }

  /* ---------- Boot ---------- */
  function boot() {
    const FILL = {
      owner: window.META.owner,
      tagline: window.META.tagline,
      asof: window.META.asof,
      role: window.META.role + " · " + window.META.city,
      disclaimer: window.DISCLAIMER,
      "gate-eyebrow": window.GATE.eyebrow,
      "gate-title": window.GATE.title,
      "gate-sub": window.GATE.sub,
      "gate-foot": window.GATE.foot,
      "anna-eyebrow": window.ANNA.eyebrow,
      "anna-title": window.ANNA.title,
      "anna-lede": window.ANNA.lede
    };
    for (const k in FILL) $$(`[data-fill='${k}']`).forEach((n) => (n.textContent = FILL[k]));

    const links = $("#footLinks");
    if (links) {
      const L = [];
      if (window.META.email) L.push(`<a href="mailto:${window.META.email}">Email</a>`);
      if (window.META.linkedin) L.push(`<a href="${window.META.linkedin}" rel="me noopener">LinkedIn</a>`);
      if (window.META.github) L.push(`<a href="${window.META.github}" rel="me noopener">GitHub</a>`);
      links.innerHTML = L.join('<span class="t-caption"> · </span>') ||
        '<span class="t-caption">Add your links in assets/js/data.js</span>';
    }

    renderGate(); renderStats(); renderStrategies(); renderEvents();
    window.renderHeat && window.renderHeat();
    window.initAtlas && window.initAtlas();

    $$(".seg a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); go(a.dataset.route);
    }));
    $$("[data-goto]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); go(a.dataset.goto);
    }));

    chosen = null;              // no "returning" animation on a cold load
    go(routeFromHash(), { push: false });
    requestAnimationFrame(() => {
      const cur = $('.seg a[aria-current="page"]'); movePill(cur, true);
      observeReveals();
    });
    window.addEventListener("routechange", () => requestAnimationFrame(observeReveals));
    window.addEventListener("resize", () => movePill($('.seg a[aria-current="page"]'), true));
    document.body.dataset.ready = "1";
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
