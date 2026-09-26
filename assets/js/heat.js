/* ============================================================
   heat.js — cross-asset interaction grid.
   A diverging matrix: what is moving with what, and how hard.
   ============================================================ */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);

  const DIV = ["--div-n3", "--div-n2", "--div-n1", "--div-0", "--div-p1", "--div-p2", "--div-p3"];
  const cssVar = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

  // Correlations are bounded [-1,1], so fixed edges beat quantiles here.
  const EDGES = [-0.6, -0.3, -0.1, 0.1, 0.3, 0.6];
  const bucket = (v) => { let i = 0; while (i < EDGES.length && v > EDGES[i]) i++; return i; };

  // Short labels keep the header readable without a tooltip.
  const shortEn = (s) => s
    .replace("S&P 500", "SPX").replace("Nasdaq 100", "NDX").replace("MSCI EM", "EM")
    .replace("US 10y yield", "UST10y").replace("US 2y yield", "UST2y")
    .replace("HY credit", "HY").replace("USDJPY", "JPY");
  const shorten = (s) => window.tm("heat.short", s, shortEn(s));
  const full    = (s) => window.tm("heat.assets", s, s);

  function build() {
    const H = window.HEAT;
    const n = H.assets.length;
    let html = "<thead><tr><th></th>" +
      H.assets.map((a) => `<th scope="col">${shorten(a)}</th>`).join("") + "</tr></thead><tbody>";
    for (let i = 0; i < n; i++) {
      html += `<tr><th scope="row">${shorten(H.assets[i])}</th>`;
      for (let j = 0; j < n; j++) {
        const v = H.matrix[i][j];
        const self = i === j;
        const bg = cssVar(DIV[bucket(v)]);
        const txt = v.toFixed(2).replace("0.", ".").replace("-.", "−.");
        html += `<td class="${self ? "self" : ""}" style="background:${bg}"
          title="${full(H.assets[i])} / ${full(H.assets[j])}: ${v.toFixed(2)}">${self ? "" : txt}</td>`;
      }
      html += "</tr>";
    }
    return html + "</tbody>";
  }

  window.renderHeat = function renderHeat() {
    const t = $("#heatTable");
    if (!t || !window.HEAT) return;
    t.innerHTML = build();
    const f = (window.FRESH && window.FRESH.heat) || null;
    t.classList.toggle("is-stale", !!f && f.state === "stale");
    $("#heatWindow").innerHTML =
      `<span>${window.t("heat.window", window.HEAT.window)}</span>` +
      (window.freshChip ? window.freshChip(f) : "");
    $("#heatLegend").innerHTML = DIV.map((v) => `<i style="background:${cssVar(v)}"></i>`).join("");
    const reads = $("#heatReads");
    if (reads) reads.innerHTML = window.t("heat.reads", window.HEAT.reads)
      .map((r) => `<li class="t-body" style="margin-bottom:0.7rem">${r}</li>`).join("");
  };

})();
