/* ============================================================
   atlas.js — interactive world map.
   Miller cylindrical projection, discrete colour buckets,
   spring-driven zoom, 1:1 pan with momentum projection on release.
   ============================================================ */
(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const NS = "http://www.w3.org/2000/svg";
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");

  const LAT_MIN = -56, LAT_MAX = 84;   // clipped: Antarctica adds nothing here
  const DEG = 180 / Math.PI;
  // Miller cylindrical, returned in degree-equivalent units so x and y share a scale.
  const miller = (lat) => {
    const p = Math.max(LAT_MIN, Math.min(LAT_MAX, lat)) * Math.PI / 180;
    return 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * p)) * DEG;
  };

  const SEQ = ["--ramp-0", "--ramp-1", "--ramp-2", "--ramp-3", "--ramp-4", "--ramp-5"];
  const DIV = ["--div-n3", "--div-n2", "--div-n1", "--div-0", "--div-p1", "--div-p2", "--div-p3"];
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  let svg, gRoot, tip, mapFrame;
  let metric = window.METRICS[0];
  let buckets = [];
  const paths = {};    // iso3 -> element
  let view = { x: 0, y: 0, k: 1 };
  let W = 1000, H = 520;

  /* ---------- Buckets ---------- */
  function computeBuckets(m) {
    const vals = Object.values(window.COUNTRIES).map((c) => c[m.key]).filter((v) => typeof v === "number");
    if (m.type === "div") {
      const mx = Math.max(...vals.map(Math.abs)) || 1;
      return { type: "div", edges: [-mx * 0.6, -mx * 0.25, -0.0001, 0.0001, mx * 0.25, mx * 0.6] };
    }
    const use = m.log ? vals.map((v) => Math.log10(Math.max(v, 1e-3))) : vals.slice();
    use.sort((a, b) => a - b);
    const q = (p) => use[Math.min(use.length - 1, Math.max(0, Math.round(p * (use.length - 1))))];
    return { type: "seq", edges: [q(0.17), q(0.34), q(0.5), q(0.67), q(0.84)], log: !!m.log };
  }
  function bucketIndex(v) {
    if (typeof v !== "number") return -1;
    const b = buckets;
    const x = b.type === "seq" && b.log ? Math.log10(Math.max(v, 1e-3)) : v;
    let i = 0;
    while (i < b.edges.length && x > b.edges[i]) i++;
    return i;
  }
  function colorFor(v) {
    const i = bucketIndex(v);
    if (i < 0) return cssVar("--ramp-0");
    return cssVar(buckets.type === "div" ? DIV[i] : SEQ[i]);
  }

  /* ---------- Build ---------- */
  function build() {
    const geo = window.WORLD_GEO;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    const pre = {};
    for (const iso in geo) {
      const polys = geo[iso].p.map((rings) =>
        rings.map((ring) => ring.map(([lon, lat]) => {
          const x = lon, y = -miller(lat);
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
          return [x, y];
        })));
      pre[iso] = polys;
    }
    const sx = W / (maxX - minX);
    const sy = sx;                                  // equal scale keeps the projection honest
    const PAD_T = 58, PAD_B = 14;                   // clear air under the floating toolbar
    H = Math.round((maxY - minY) * sy) + PAD_T + PAD_B;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const px = ([x, y]) => [((x - minX) * sx).toFixed(1), ((y - minY) * sy + PAD_T).toFixed(1)];

    const frag = document.createDocumentFragment();
    for (const iso in pre) {
      const d = pre[iso].map((rings) =>
        rings.map((ring) => "M" + ring.map((p) => px(p).join(" ")).join("L") + "Z").join("")).join("");
      const el = document.createElementNS(NS, "path");
      el.setAttribute("d", d);
      el.setAttribute("class", "country");
      el.dataset.iso = iso;
      if (window.COUNTRIES[iso]) {
        el.classList.add("has-data");
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "button");
        el.setAttribute("aria-label", window.COUNTRIES[iso].name);
        paths[iso] = el;
      } else {
        el.setAttribute("aria-hidden", "true");
      }
      frag.appendChild(el);
    }
    gRoot.appendChild(frag);

    // City-states are smaller than the map's resolution — give them a marker.
    for (const iso in window.COUNTRIES) {
      const c = window.COUNTRIES[iso];
      if (!c.ll || paths[iso]) continue;
      const [cx, cy] = px([c.ll[0], -miller(c.ll[1])]);
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", cx); dot.setAttribute("cy", cy); dot.setAttribute("r", 4.5);
      dot.setAttribute("class", "dot");
      dot.dataset.iso = iso;
      dot.setAttribute("tabindex", "0");
      dot.setAttribute("role", "button");
      dot.setAttribute("aria-label", c.name);
      gRoot.appendChild(dot);
      paths[iso] = dot;
    }
  }

  function paint() {
    buckets = computeBuckets(metric);
    for (const iso in paths) {
      const c = window.COUNTRIES[iso];
      const col = colorFor(c[metric.key]);
      paths[iso].style[paths[iso].tagName === "circle" ? "fill" : "fill"] = col;
    }
    const ramp = buckets.type === "div" ? DIV : SEQ;
    $("#legendSwatches").innerHTML = ramp.map((v) => `<i style="background:${cssVar(v)}"></i>`).join("");
    const vals = Object.values(window.COUNTRIES).map((c) => c[metric.key]).filter((v) => typeof v === "number");
    $("#legendRange").textContent = metric.fmt(Math.min(...vals)) + "  →  " + metric.fmt(Math.max(...vals));
    $("#legendLabel").textContent = metric.label;
  }

  /* ---------- View transform ---------- */
  function applyView() {
    gRoot.setAttribute("transform", `translate(${view.x.toFixed(2)} ${view.y.toFixed(2)}) scale(${view.k.toFixed(4)})`);
  }
  function clampView() {
    const maxX = 0, maxY = 0;
    const minX = W - W * view.k, minY = H - H * view.k;
    view.x = Math.min(maxX, Math.max(minX, view.x));
    view.y = Math.min(maxY, Math.max(minY, view.y));
  }
  function zoomAbout(k2, cx, cy) {
    k2 = Math.max(1, Math.min(8, k2));
    const r = k2 / view.k;
    view.x = cx - (cx - view.x) * r;
    view.y = cy - (cy - view.y) * r;
    view.k = k2;
    clampView(); applyView();
  }

  /* ---------- Interaction ---------- */
  function wire() {
    let dragging = false, moved = false, sx0 = 0, sy0 = 0, vx = new window.VelocityTracker(), vy = new window.VelocityTracker();
    let inertia = 0;

    const toSvg = (e) => {
      const r = svg.getBoundingClientRect();
      return [(e.clientX - r.left) * (W / r.width), (e.clientY - r.top) * (H / r.height)];
    };

    svg.addEventListener("pointerdown", (e) => {
      if (inertia) { cancelAnimationFrame(inertia); inertia = 0; }
      dragging = true; moved = false;
      sx0 = e.clientX; sy0 = e.clientY;
      vx.reset(); vy.reset(); vx.add(view.x); vy.add(view.y);
      svg.setPointerCapture(e.pointerId);
      svg.classList.add("is-dragging");
    });
    svg.addEventListener("pointermove", (e) => {
      if (dragging) {
        const r = svg.getBoundingClientRect();
        const scale = W / r.width;
        const dx = (e.clientX - sx0) * scale, dy = (e.clientY - sy0) * scale;
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) moved = true;   // hysteresis
        sx0 = e.clientX; sy0 = e.clientY;
        view.x += dx; view.y += dy;
        clampView(); applyView();
        vx.add(view.x); vy.add(view.y);
        e.preventDefault();
        return;
      }
      hover(e);
    });
    const release = () => {
      if (!dragging) return;
      dragging = false; svg.classList.remove("is-dragging");
      if (REDUCED.matches) return;
      let ux = vx.get(), uy = vy.get();
      if (Math.abs(ux) < 40 && Math.abs(uy) < 40) return;
      // Decay toward the projected endpoint rather than stopping dead.
      const t0 = performance.now();
      const step = (t) => {
        const dt = Math.min((t - t0) / 1000, 1 / 30);
        ux *= 0.94; uy *= 0.94;
        view.x += ux * dt; view.y += uy * dt;
        clampView(); applyView();
        if (Math.abs(ux) > 12 || Math.abs(uy) > 12) inertia = requestAnimationFrame(step);
        else inertia = 0;
      };
      inertia = requestAnimationFrame(step);
    };
    svg.addEventListener("pointerup", (e) => { release(); if (!moved) pick(e); });
    svg.addEventListener("pointercancel", release);
    svg.addEventListener("pointerleave", () => { release(); hideTip(); });

    svg.addEventListener("wheel", (e) => {
      e.preventDefault();
      const [cx, cy] = toSvg(e);
      zoomAbout(view.k * Math.pow(1.0016, -e.deltaY), cx, cy);
    }, { passive: false });

    $("#zoomIn").addEventListener("click", () => zoomAbout(view.k * 1.6, W / 2, H / 2));
    $("#zoomOut").addEventListener("click", () => zoomAbout(view.k / 1.6, W / 2, H / 2));
    $("#zoomReset").addEventListener("click", () => { view = { x: 0, y: 0, k: 1 }; applyView(); });

    svg.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const iso = e.target.dataset && e.target.dataset.iso;
      if (iso && window.COUNTRIES[iso]) { e.preventDefault(); show(iso, e.target); }
    });
    svg.addEventListener("focusin", (e) => {
      const iso = e.target.dataset && e.target.dataset.iso;
      if (iso && window.COUNTRIES[iso]) highlight(iso);
    });

    $$("#metricSeg button").forEach((b) => b.addEventListener("click", () => {
      metric = window.METRICS.find((m) => m.key === b.dataset.metric);
      $$("#metricSeg button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      paint();
    }));

  }

  let hot = null;
  function highlight(iso) {
    if (hot && paths[hot]) paths[hot].classList.remove("is-hot");
    hot = iso;
    if (iso && paths[iso]) paths[iso].classList.add("is-hot");
  }
  function hover(e) {
    const iso = e.target.dataset && e.target.dataset.iso;
    const c = iso && window.COUNTRIES[iso];
    if (!c) { highlight(null); hideTip(); return; }
    highlight(iso);
    const r = mapFrame.getBoundingClientRect();
    tip.innerHTML = `<strong>${c.name}</strong><br><span class="t-caption">${metric.label}: </span>
      <span class="num">${metric.fmt(c[metric.key])}</span>`;
    tip.classList.add("is-on");
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const w = tip.offsetWidth, h = tip.offsetHeight;
    tip.style.left = Math.max(6, Math.min(r.width - w - 6, x + 14)) + "px";
    tip.style.top = Math.max(6, y - h - 12) + "px";
  }
  const hideTip = () => tip.classList.remove("is-on");
  function pick(e) {
    // Pointer capture retargets events to the <svg>, so resolve the real hit.
    const el = document.elementFromPoint(e.clientX, e.clientY);
    const iso = el && el.dataset && el.dataset.iso;
    if (iso && window.COUNTRIES[iso]) show(iso, el);
  }

  /* ---------- Country sheet ---------- */
  const SECTOR_ORDER = ["Information Technology","Financials","Health Care","Consumer Discretionary",
    "Communication Services","Industrials","Consumer Staples","Energy","Utilities","Real Estate","Materials"];

  function show(iso, trigger) {
    const c = window.COUNTRIES[iso];
    const sec = SECTOR_ORDER.map((k) => [k, c.sectors[k] || 0]).sort((a, b) => b[1] - a[1]).filter((s) => s[1] > 0);
    const conf = { high: "Well sourced", medium: "Partly estimated", low: "Treat with care" }[c.conf] || "";
    const html = `
      <div style="display:flex;align-items:flex-start;gap:1rem;margin-bottom:0.9rem">
        <div style="flex:1">
          <div class="t-label">${c.index} · ${c.cur}</div>
          <h2 class="t-title" style="margin-top:0.25rem">${c.name}</h2>
        </div>
        <button class="icon-btn" id="sheetClose" aria-label="Close">✕</button>
      </div>

      <div class="kv" style="margin-bottom:1.2rem">
        <div><div class="t-label">Index YTD</div><div class="v num ${c.ytd >= 0 ? "pos" : "neg"}">${(c.ytd >= 0 ? "+" : "") + c.ytd.toFixed(1)}%</div></div>
        <div><div class="t-label">Market cap</div><div class="v num">$${c.mcap.toFixed(2)}tn</div></div>
        <div><div class="t-label">GDP</div><div class="v num">$${c.gdp.toFixed(2)}tn</div></div>
        <div><div class="t-label">GDP growth</div><div class="v num ${c.growth >= 0 ? "" : "neg"}">${(c.growth >= 0 ? "+" : "") + c.growth.toFixed(1)}%</div></div>
        <div><div class="t-label">Inflation</div><div class="v num">${c.cpi.toFixed(1)}%</div></div>
        <div><div class="t-label">Policy rate</div><div class="v num">${c.rate.toFixed(2)}%</div></div>
        <div><div class="t-label">10y yield</div><div class="v num">${c.y10.toFixed(2)}%</div></div>
        <div><div class="t-label">Unemployment</div><div class="v num">${c.unemp.toFixed(1)}%</div></div>
      </div>

      <div class="t-label" style="margin-bottom:0.55rem">Sector mix — ${c.index}</div>
      ${sec.map(([k, v]) => `<div class="sector-row">
          <span style="font-size:0.8125rem">${k}</span>
          <span class="num t-caption">${v.toFixed(1)}%</span>
          <span class="bar"><i data-w="${Math.min(100, v * 1.9).toFixed(1)}"></i></span>
        </div>`).join("")}

      <div class="t-label" style="margin:1.3rem 0 0.35rem">Largest listed companies</div>
      ${c.top5.map(([n, t, s, m], i) => `<div class="co">
          <span class="rank num">${i + 1}</span>
          <span><span style="font-size:0.875rem;font-weight:560">${n}</span>
            <span class="t-caption"> · ${t}</span><br><span class="t-caption">${s}</span></span>
          <span class="num" style="font-size:0.8125rem">$${m >= 1000 ? (m / 1000).toFixed(2) + "tn" : m + "bn"}</span>
        </div>`).join("")}

      ${c.note ? `<p class="t-caption" style="margin-top:1.1rem;padding:0.7rem 0.85rem;border-radius:12px;background:var(--surface-2)">
        <strong style="color:var(--ink-2)">Note.</strong> ${c.note}</p>` : ""}

      <p class="t-caption" style="margin-top:1rem">Data quality: ${conf}. Snapshot as of ${window.META.asof}.</p>`;
    window.openSheet(html, trigger);
  }

  /* ---------- Init ---------- */
  window.initAtlas = function initAtlas() {
    svg = $("#map"); if (!svg || !window.WORLD_GEO) return;
    mapFrame = $(".map-frame");
    tip = $("#mapTip");
    gRoot = document.createElementNS(NS, "g");
    svg.appendChild(gRoot);

    $("#metricSeg").innerHTML = window.METRICS.map((m, i) =>
      `<button type="button" data-metric="${m.key}" aria-pressed="${i === 0}">${m.label}</button>`).join("");

    build(); paint(); wire(); applyView();

    // Country list — a keyboard- and search-friendly way in that doesn't need the map.
    const list = $("#countryList");
    if (list) {
      list.innerHTML = Object.entries(window.COUNTRIES)
        .sort((a, b) => b[1].mcap - a[1].mcap)
        .map(([iso, c]) => `<button class="chip tap" data-open="${iso}" type="button">${c.name}
          <span class="num" style="opacity:0.6">$${c.mcap.toFixed(1)}tn</span></button>`).join("");
      list.addEventListener("click", (e) => {
        const b = e.target.closest("[data-open]");
        if (b) show(b.dataset.open, b);
      });
    }
  };
})();
