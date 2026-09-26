/* ============================================================
   app.js — shell, motion engine, routing, sheet, content render.

   Motion follows Apple's fluid-interface model:
   springs (not durations), started from the current on-screen value,
   inheriting pointer velocity, interruptible at any frame.

   Language: data.js holds English; i18n.js holds the Chinese overrides.
   Anything untranslated falls back to English rather than going blank.
   ============================================================ */
(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");
  const t  = (p, f) => window.t(p, f);
  const tm = (g, k, f) => window.tm(g, k, f);

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
        const w = (2 * Math.PI) / this.response;
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

  const project = (v, d = 0.998) => (v / 1000) * d / (1 - d);
  const rubberband = (over, dim, c = 0.55) => (over * dim * c) / (dim + c * Math.abs(over));

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
    const el = e.target.closest(".tap, .door");
    if (!el) return;
    el.classList.add("is-pressed");
    const off = () => el.classList.remove("is-pressed");
    el.addEventListener("pointerup", off, { once: true });
    el.addEventListener("pointercancel", off, { once: true });
    el.addEventListener("pointerleave", off, { once: true });
  }, { passive: true });

  /* ---------- Language switch ---------------------------------------
     Two instances — one in the chrome, one floating on the gate.
     Same segmented grammar as the section nav, same spring.           */
  function buildLangSwitches() {
    $$("[data-lang-switch]").forEach((host) => {
      if (host.dataset.built) return;
      host.dataset.built = "1";
      host.innerHTML = '<span class="lang-pill" aria-hidden="true"></span>' +
        window.I18N.langs.map(([code, label]) =>
          `<button type="button" data-lang="${code}" lang="${code === "zh" ? "zh-Hans" : "en"}"
             aria-pressed="${code === window.LANG}">${label}</button>`).join("");
      const pill = $(".lang-pill", host);
      host._pill = pill;
      host._spring = new Spring({ damping: 1.0, response: 0.32,
        onFrame: (x) => { pill.style.transform = `translate3d(${x}px,0,0)`; } });
      host._first = true;
    });
  }
  function syncLangSwitches() {
    $$("[data-lang-switch]").forEach((host) => {
      const btns = $$("button", host);
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === window.LANG)));
      const active = btns.find((b) => b.dataset.lang === window.LANG);
      if (!active || !host._pill) return;
      const r = active.getBoundingClientRect(), h = host.getBoundingClientRect();
      if (!r.width) return;                       // hidden route — measured when shown
      host._pill.style.width = r.width + "px";
      const x = r.left - h.left;
      if (host._first) { host._spring.set(x); host._first = false; }
      else host._spring.to(x);
    });
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang-switch] button");
    if (b) window.setLang(b.dataset.lang);
  });

  /* ---------- Static copy -------------------------------------------
     The English in index.html is the fallback; we cache it once so a
     switch back to English restores the original exactly.            */
  const EN = new Map();
  function applyStatic() {
    $$("[data-i18n]").forEach((n) => {
      if (!EN.has(n)) EN.set(n, n.textContent);
      n.textContent = t("ui." + n.dataset.i18n, EN.get(n));
    });
    $$("[data-i18n-html]").forEach((n) => {
      if (!EN.has(n)) EN.set(n, n.innerHTML);
      n.innerHTML = t("ui." + n.dataset.i18nHtml, EN.get(n));
    });
    const mark = $("#chromeMark");
    if (mark) mark.title = t("ui.back", "Back to the front");
    ["zoomIn:Zoom in", "zoomOut:Zoom out", "zoomReset:Reset view"].forEach((pair) => {
      const [id, en] = pair.split(":");
      const el = $("#" + id);
      if (el) el.setAttribute("aria-label", t("ui." + id, en));
    });
  }

  const asof = () => t("meta.asof", window.META.asof);

  function fillDynamic() {
    const M = window.META;
    const FILL = {
      owner: M.owner,
      tagline: t("meta.tagline", M.tagline),
      asof: asof(),
      role: t("meta.role", M.role) + " · " + t("meta.city", M.city),
      footnote: window.LANG === "zh"
        ? t("ui.footSnapshot", "") + asof() + t("ui.footRest", "")
        : "Reference data as of " + asof() + ". Personal research; not investment advice, "
          + "and not the views of any employer.",
      disclaimer: window.LANG === "zh"
        ? t("disclaimerParts.0", "") + asof() + t("disclaimerParts.1", "")
        : window.DISCLAIMER,
      "gate-eyebrow": t("gate.eyebrow", window.GATE.eyebrow),
      "gate-title":   t("gate.title",   window.GATE.title),
      "gate-sub":     t("gate.sub",     window.GATE.sub),
      "gate-foot":    t("gate.foot",    window.GATE.foot),
      "anna-eyebrow": t("anna.eyebrow", window.ANNA.eyebrow),
      "anna-title":   t("anna.title",   window.ANNA.title),
      "anna-lede":    t("anna.lede",    window.ANNA.lede)
    };
    for (const k in FILL) $$(`[data-fill='${k}']`).forEach((n) => (n.textContent = FILL[k]));

    const links = $("#footLinks");
    if (links) {
      const L = [];
      if (window.META.email) L.push(`<a href="mailto:${window.META.email}">Email</a>`);
      if (window.META.linkedin) L.push(`<a href="${window.META.linkedin}" rel="me noopener">LinkedIn</a>`);
      if (window.META.github) L.push(`<a href="${window.META.github}" rel="me noopener">GitHub</a>`);
      links.innerHTML = L.join('<span class="t-caption"> · </span>') ||
        `<span class="t-caption">${t("ui.footLinksEmpty", "Add your links in assets/js/data.js")}</span>`;
    }
  }

  /* ---------- Photographic backdrop ---------------------------------
     Reads window.BACKDROP. Images that fail to load are skipped; if none
     load, the page keeps its plain colour wash and nothing is broken.
     Two or more images cross-fade; one drifts on its own.             */
  function initBackdrop() {
    const cfg = window.BACKDROP || {};
    const srcs = Array.isArray(cfg.images) ? cfg.images.filter(Boolean) : [];
    const host = $("#backdrop");
    if (!host || !srcs.length) return;

    const root = document.documentElement;
    root.style.setProperty("--photo-opacity", String(cfg.opacity ?? 0.18));
    root.style.setProperty("--photo-blur", (cfg.blur ?? 2) + "px");

    // Only images that actually load are used.
    Promise.all(srcs.map((src) => new Promise((res) => {
      const im = new Image();
      im.onload = () => res(src);
      im.onerror = () => res(null);
      im.src = src;
    }))).then((loaded) => {
      const ok = loaded.filter(Boolean);
      if (!ok.length) return;

      document.body.classList.add("has-photo");
      const layers = [0, 1].map((i) => {
        const el = document.createElement("div");
        el.className = "backdrop-layer";
        el.style.animationDelay = (i * -26) + "s";   // desynchronise the drift
        host.appendChild(el);
        return el;
      });

      let i = 0, front = 0;
      layers[0].style.backgroundImage = `url("${ok[0]}")`;
      requestAnimationFrame(() => layers[0].classList.add("is-on"));
      if (ok.length < 2 || REDUCED.matches) return;

      const cycle = Math.max(6, Number(cfg.cycle) || 14) * 1000;
      setInterval(() => {
        if (document.hidden) return;               // no work in a background tab
        i = (i + 1) % ok.length;
        const next = 1 - front;
        layers[next].style.backgroundImage = `url("${ok[i]}")`;
        layers[next].classList.add("is-on");
        layers[front].classList.remove("is-on");
        front = next;
      }, cycle);
    });
  }

  /* ---------- Live market overlay -----------------------------------
     market.js (generated daily by tools/fetch_market.py) is an OVERLAY on
     the curated figures in data.js. Three honest states per number:

       live    — fetched, within STALE_DAYS        → shows its date
       stale   — fetched, but the job stopped      → shown greyed, with its age
       curated — never fetched, or not covered     → labelled as a snapshot

     A number is never silently presented as fresher than it is.            */
  const STALE_DAYS = 5;    // the job runs every weekday — silence beyond this means it died
  const LAG_DAYS   = 14;   // one series frozen while the rest keep moving

  const dayAge = (iso) => {
    if (!iso) return null;
    const then = Date.parse(String(iso).slice(0, 10) + "T00:00:00Z");
    return Number.isNaN(then) ? null : Math.floor((Date.now() - then) / 86400000);
  };

  /* Staleness is about PIPELINE HEALTH, not data lag.
     A 60-day correlation whose last common date is a few days back is normal —
     it is set by the slowest series in the basket, not by anything being wrong.
     What actually warrants greying a number out is the job having stopped, or
     one series freezing while the others carry on.                          */
  const stateOf = (asof, jobAge) => {
    if (jobAge !== null && jobAge > STALE_DAYS) return "stale";
    const a = dayAge(asof);
    return a !== null && a > LAG_DAYS ? "stale" : "live";
  };

  window.FRESH = { heat: { state: "curated" }, ytd: {} };

  function applyMarket() {
    const M = window.MARKET;
    if (!M || typeof M !== "object") return;

    const jobAge = dayAge(M.generated);

    if (M.heat && Array.isArray(M.heat.assets) && Array.isArray(M.heat.matrix)
        && M.heat.assets.length === M.heat.matrix.length) {
      window.HEAT = Object.assign({}, window.HEAT, {
        assets: M.heat.assets, matrix: M.heat.matrix,
        window: M.heat.window || window.HEAT.window
      });
      window.FRESH.heat = { state: stateOf(M.heat.asof, jobAge), asof: M.heat.asof,
                            age: dayAge(M.heat.asof), ran: M.generated };
    }

    for (const iso in (M.ytd || {})) {
      const e = M.ytd[iso];
      if (!window.COUNTRIES[iso] || typeof e.v !== "number") continue;
      window.COUNTRIES[iso].ytd = e.v;      // stale values still show — greyed, not hidden
      window.FRESH.ytd[iso] = {
        state: stateOf(e.asof, jobAge), asof: e.asof, age: dayAge(e.asof),
        src: e.src, proxy: e.proxy || null, ran: M.generated
      };
    }
  }

  function fmtDay(iso) {
    const d = new Date(String(iso).slice(0, 10) + "T00:00:00Z");
    if (Number.isNaN(+d)) return iso;
    return d.toLocaleDateString(window.LANG === "zh" ? "zh-CN" : "en-GB",
      { day: "numeric", month: "short", timeZone: "UTC" });
  }

  /* One chip, used by the heat map, the atlas legend and the country sheet. */
  window.freshChip = function (f, opts) {
    const showProxy = !(opts && opts.proxy === false);
    const withProxy = (html) => html + ((showProxy && f && f.proxy)
      ? `<span class="fresh is-proxy" title="${f.proxy}${f.src ? " · " + f.src : ""}">`
        + `${t("ui.freshProxy", "proxy")}</span>` : "");

    if (!f || f.state === "curated")
      return `<span class="fresh is-curated">${t("ui.freshSnapshot", "Snapshot")} · ${asof()}</span>`;

    if (f.state === "stale")
      return withProxy(
        `<span class="fresh is-stale" title="${t("ui.freshStaleWhy", "The update job has not run — this figure is not current")}">`
        + `${f.age} ${t("ui.freshDaysOld", "days old")}</span>`);

    const tip = [
      f.ran ? `${t("ui.freshFetched", "Fetched")} ${fmtDay(f.ran)}` : "",
      f.src || ""
    ].filter(Boolean).join(" · ");
    return withProxy(
      `<span class="fresh is-live" title="${tip}"><i aria-hidden="true"></i>`
      + `${t("ui.freshDataTo", "Data to")} ${fmtDay(f.asof)}</span>`);
  };

  /* ---------- Nav: spring-driven segmented pill ---------- */
  const seg = $("#seg"), pill = $(".seg-pill");
  const pillX = new Spring({ damping: 1.0, response: 0.34,
    onFrame: (x) => { pill.style.transform = `translate3d(${x}px,0,0)`; } });
  let pillReady = false;
  function movePill(link, instant) {
    if (!seg || !pill || !link) return;
    const r = link.getBoundingClientRect(), b = seg.getBoundingClientRect();
    if (!r.width) return;
    pill.style.width = r.width + "px";
    const x = r.left - b.left;
    if (instant || !pillReady) { pillX.set(x); pillReady = true; } else { pillX.to(x); }
  }

  /* ---------- Routing (hash) ---------- */
  const JAY_ROUTES = ["base", "strategies", "signals", "atlas"];
  const ROUTES = ["gate", ...JAY_ROUTES, "anna"];
  const TITLES_EN = {
    gate: "Jay & Anna", base: "Intelligence Base", strategies: "Strategies",
    signals: "Signals", atlas: "World Atlas", anna: "Anna"
  };
  const TITLES_ZH = {
    gate: "Jay & Anna", base: "情报库", strategies: "策略",
    signals: "信号", atlas: "全球地图", anna: "Anna"
  };

  function routeFromHash() {
    const h = (location.hash || "").replace(/^#\/?/, "").split("?")[0];
    return ROUTES.includes(h) ? h : "gate";
  }

  const chrome = $("#chrome"), foot = $("#foot"), chromeWho = $("#chromeWho");
  let prevRoute = null;

  function go(name, { push = true } = {}) {
    if (push && routeFromHash() !== name) {
      location.hash = name === "gate" ? "#/" : "#/" + name;
      return;                                   // let hashchange render
    }
    const onGate = name === "gate";
    const onJay = JAY_ROUTES.includes(name);

    chrome.hidden = onGate;
    foot.hidden = !onJay;                       // the footer is Jay's
    seg.hidden = !onJay;
    chromeWho.textContent = onJay ? window.META.owner : (name === "anna" ? "Anna" : "");

    $$(".route").forEach((r) => {
      const on = r.id === "route-" + name;
      r.classList.toggle("is-active", on);
      r.classList.remove("is-entering");
      if (on && !onGate && !REDUCED.matches) { void r.offsetWidth; r.classList.add("is-entering"); }
    });

    if (onGate) resetGate(prevRoute !== null && prevRoute !== "gate");

    $$(".seg a").forEach((a) => {
      const on = a.dataset.route === name;
      a.setAttribute("aria-current", on ? "page" : "false");
      if (on && onJay) movePill(a);
    });

    const T = window.LANG === "zh" ? TITLES_ZH : TITLES_EN;
    document.title = T[name] + (onJay ? " — " + window.META.owner : "");
    prevRoute = name;
    window.dispatchEvent(new CustomEvent("routechange", { detail: name }));
    requestAnimationFrame(syncLangSwitches);
    if (push) window.scrollTo({ top: 0, behavior: REDUCED.matches ? "auto" : "smooth" });
  }
  window.addEventListener("hashchange", () => go(routeFromHash(), { push: false }));

  /* ---------- Sheet ---------- */
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
  window.addEventListener("resize", () => { if (!sheetOpen) sheetSpring.set(extent()); });

  (function dragSheet() {
    if (!sheet) return;
    const grip = $(".sheet-grip", sheet);
    let dragging = false, startP = 0, startVal = 0;
    const tracker = new VelocityTracker();
    const coord = (e) => (axis() === "x" ? e.clientX : e.clientY);

    function down(e) {
      if (!e.target.closest(".sheet-grip")) return;
      dragging = true;
      sheetSpring.stop();
      startP = coord(e); startVal = sheetSpring.x;
      tracker.reset(); tracker.add(startVal);
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    function move(e) {
      if (!dragging) return;
      let p = startVal + (coord(e) - startP);
      if (p < 0) p = -rubberband(-p, extent());
      sheetSpring.set(p); tracker.add(p);
      e.preventDefault();
    }
    function up() {
      if (!dragging) return;
      dragging = false;
      const v = tracker.get();
      if (sheetSpring.x + project(v) > extent() * 0.32) closeSheet(v);
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

  /* ---------- Payoff diagrams ---------- */
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

  /* ---------- The gate ---------- */
  const ARROW = '<span class="arrow" aria-hidden="true">→</span>';
  let chosen = null;

  function renderGate() {
    $("#gateGrid").innerHTML = window.PEOPLE.map((p) => {
      const role = t(`people.${p.id}.role`, p.role);
      const sum  = t(`people.${p.id}.summary`, p.summary);
      const cta  = t(`people.${p.id}.cta`, p.cta);
      const chips = t(`people.${p.id}.chips`, p.chips) || [];
      return `<button class="door${p.ready ? "" : " is-quiet"}" type="button"
                data-door="${p.id}" data-route="${p.route}">
        <span class="door-top">
          <span class="door-avatar ${p.tone}" aria-hidden="true">${p.initials}</span>
          <span><h2>${p.name}</h2><span class="t-caption door-role">${role}</span></span>
        </span>
        <span class="t-body door-sum">${sum}</span>
        ${chips.length
          ? `<span class="door-chips">${chips.map((c) => `<span class="chip">${c}</span>`).join("")}</span>`
          : `<span class="door-empty" aria-hidden="true"><i></i><i></i><i></i></span>`}
        <span class="door-foot">${cta} ${ARROW}</span>
      </button>`;
    }).join("");

    const slots = t("anna.slots", window.ANNA.slots);
    $("#annaSlots").innerHTML = slots.map(([h, b]) =>
      `<div class="slot reveal"><h3 class="t-head">${h}</h3>
        <p class="t-body" style="margin:0.45rem 0 0;font-size:0.9375rem">${b}</p></div>`).join("");
  }

  function resetGate(animateReturn) {
    const gate = $(".gate");
    if (!gate) return;
    gate.classList.remove("is-exiting");
    $$(".door", gate).forEach((d) => d.classList.remove("is-chosen", "is-returning"));
    if (animateReturn && chosen && !REDUCED.matches) {
      const d = $(`.door[data-door="${chosen}"]`, gate);
      if (d) { void d.offsetWidth; d.classList.add("is-returning"); }
    }
  }

  function leaveGate(door) {
    const gate = $(".gate");
    chosen = door.dataset.door;
    $$(".door", gate).forEach((d) => d.classList.toggle("is-chosen", d === door));
    gate.classList.add("is-exiting");
    setTimeout(() => go(door.dataset.route), REDUCED.matches ? 0 : 230);
  }
  document.addEventListener("click", (e) => {
    const d = e.target.closest("[data-door]");
    if (d) { e.preventDefault(); leaveGate(d); }
  });

  /* ---------- Hero stats ---------- */
  function renderStats() {
    const entries = Object.entries(window.COUNTRIES);
    const mcap = entries.reduce((a, [, c]) => a + (c.mcap || 0), 0);
    const best  = entries.reduce((a, e) => (e[1].ytd > a[1].ytd ? e : a));
    const worst = entries.reduce((a, e) => (e[1].ytd < a[1].ytd ? e : a));
    const shortEn = (n) => n
      .replace("United States", "US").replace("United Kingdom", "UK")
      .replace("South Korea", "Korea").replace("United Arab Emirates", "UAE")
      .replace(" SAR", "").replace("South Africa", "S. Africa");
    const label = ([iso, c]) => tm("countries", iso, shortEn(c.name));
    const cap = window.LANG === "zh"
      ? Math.round(mcap) + "万亿美元" : "$" + mcap.toFixed(0) + "tn";

    const rows = [
      [t("ui.statMarkets", "Markets covered"), entries.length, ""],
      [t("ui.statMcap", "Aggregate market cap"), cap, ""],
      [t("ui.statBest", "Strongest index YTD"),  label(best)  + " +" + best[1].ytd.toFixed(0)  + "%", "pos"],
      [t("ui.statWorst", "Weakest index YTD"), label(worst) + " "  + worst[1].ytd.toFixed(0) + "%", "neg"],
      [t("ui.statStrategies", "Strategies documented"), window.STRATEGIES.length, ""]
    ];
    $("#statbar").innerHTML = rows.map(([k, v, cls]) =>
      `<div><div class="t-label">${k}</div><div class="v num ${cls}">${v}</div></div>`).join("");
  }

  /* ---------- Strategies ---------- */
  const S = (s, field) => t(`strategies.${s.id}.${field}`, s[field]);

  function stratCard(s) {
    const tags = t(`strategies.${s.id}.tags`, s.tags);
    return `<article class="card pad tap strat reveal" data-strat="${s.id}" tabindex="0" role="button"
              aria-label="${S(s, "name")}">
      <div style="color:var(--accent)">${payoffSVG(s.payoff)}</div>
      <h3 class="t-head">${S(s, "name")}</h3>
      <p class="t-body" style="margin:0;font-size:0.9375rem">${S(s, "thesis")}</p>
      <div class="strat-meta">${tags.map((x) => `<span class="chip">${x}</span>`).join("")}</div>
    </article>`;
  }
  function stratSheet(s) {
    const tags = t(`strategies.${s.id}.tags`, s.tags);
    const metrics = t(`strategies.${s.id}.metrics`, s.metrics);
    return `<div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:0.9rem">
        <div style="flex:1"><div class="t-label">${t("ui.sheetStrategy", "Strategy")}</div>
          <h2 class="t-title" style="margin-top:0.25rem">${S(s, "name")}</h2></div>
        <button class="icon-btn" id="sheetClose" aria-label="${t("ui.sheetClose", "Close")}">✕</button>
      </div>
      <div style="color:var(--accent);margin-bottom:1rem">${payoffSVG(s.payoff)}</div>
      <p class="t-body">${S(s, "detail")}</p>
      <div class="kv" style="margin:1.1rem 0">
        ${metrics.map(([k, v]) => `<div><div class="t-label">${k}</div><div class="v">${v}</div></div>`).join("")}
      </div>
      <div class="t-label" style="margin-bottom:0.4rem">${t("ui.sheetHurts", "Principal risks")}</div>
      <p class="t-body" style="margin-top:0">${S(s, "risks")}</p>
      <div class="strat-meta">${tags.map((x) => `<span class="chip">${x}</span>`).join("")}</div>`;
  }
  function renderStrategies() {
    $("#stratGrid").innerHTML = window.STRATEGIES.map(stratCard).join("");
    const zhSkills = t("skills", null);
    $("#skillList").innerHTML = window.SKILLS.map(([n, v, d], i) => {
      const tr = zhSkills && zhSkills[i];
      return `<div class="skill reveal">
        <div><div class="t-head">${tr ? tr[0] : n}</div><div class="t-caption">${tr ? tr[1] : d}</div></div>
        <div class="num t-caption">${v}</div>
        <div class="skill-bar"><i data-w="${v}"></i></div>
      </div>`;
    }).join("");
  }
  function openStrat(el) {
    const s = window.STRATEGIES.find((x) => x.id === el.dataset.strat);
    s && openSheet(stratSheet(s), el);
  }
  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-strat]");
    if (c) openStrat(c);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const c = e.target.closest && e.target.closest("[data-strat]");
    if (!c) return;
    e.preventDefault(); openStrat(c);
  });

  /* ---------- Events ---------- */
  function renderEvents() {
    const zh = t("events", null);
    const readLabel = t("ui.logRead", "Implication:");
    $("#eventList").innerHTML = window.EVENTS.map((ev, i) => {
      const e = (zh && zh[i]) || ev;
      return `<li data-tone="${ev.tone}" class="reveal">
        <div class="t-label">${e.date || ev.date}</div>
        <h3 class="t-head" style="margin:0.2rem 0 0.35rem">${e.title}</h3>
        <p class="t-body" style="margin:0 0 0.5rem;font-size:0.9375rem">${e.body}</p>
        <p class="t-caption" style="margin:0"><strong style="color:var(--ink-2)">${readLabel}</strong> ${e.read}</p>
      </li>`;
    }).join("");
  }

  /* ---------- Render everything ---------- */
  function renderAll() {
    applyStatic();
    fillDynamic();
    renderGate(); renderStats(); renderStrategies(); renderEvents();
    window.renderHeat && window.renderHeat();
    window.relabelAtlas && window.relabelAtlas();
  }

  window.addEventListener("langchange", () => {
    closeSheet();                       // its contents are in the old language
    renderAll();
    go(routeFromHash(), { push: false });
    requestAnimationFrame(() => {
      movePill($('.seg a[aria-current="page"]'), true);
      syncLangSwitches();
      observeReveals();
    });
  });

  /* ---------- Boot ---------- */
  function boot() {
    initBackdrop();
    applyMarket();          // overlay live data before anything renders
    buildLangSwitches();
    renderAll();
    window.initAtlas && window.initAtlas();

    $$(".seg a").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); go(a.dataset.route);
    }));
    $$("[data-goto]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault(); go(a.dataset.goto);
    }));

    chosen = null;
    go(routeFromHash(), { push: false });
    requestAnimationFrame(() => {
      movePill($('.seg a[aria-current="page"]'), true);
      syncLangSwitches();
      observeReveals();
    });
    window.addEventListener("routechange", () => requestAnimationFrame(observeReveals));
    window.addEventListener("resize", () => {
      movePill($('.seg a[aria-current="page"]'), true);
      syncLangSwitches();
    });
    document.body.dataset.ready = "1";
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
