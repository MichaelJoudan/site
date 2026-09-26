/* ============================================================
   data.js — content and reference data for the site.

   Curated figures live here. Automatically refreshed series arrive in
   market.js and overlay these at runtime; anything not covered there falls
   back to what is written below and is labelled as a snapshot.

   MAINTENANCE
   - meta.asof    : bump when reference data is refreshed.
   - COUNTRIES    : one object per market, keyed by ISO-3.
   - STRATEGIES   : one object per strategy. `payoff` names a shape in app.js.
   - HEAT.reads   : commentary. Maintained by hand; does not auto-update.
   - EVENTS       : newest first.
   ============================================================ */

window.META = {
  owner: "Jay",
  role: "Portfolio Analyst",
  city: "Singapore",
  asof: "August 2026",
  tagline: "Twenty-six equity markets, a correlation framework refreshed each session, "
         + "and a documented library of derivative and structured-product strategies.",
  email: "",            // an address here turns on the footer link
  linkedin: "",         // full URL
  github: ""            // full URL
};

/* ------------------------------------------------------------
   THE GATE — the first screen. Two people, one address.
   `ready: false` gives a door the quieter, reserved treatment.
   ------------------------------------------------------------ */
window.GATE = {
  eyebrow: "Two people, one address",
  title: "Who are you here for?",
  sub: "Pick a side. Nothing here is shared — each half belongs to the person whose name is on it.",
  foot: "Personal sites. Not investment advice, and not the views of any employer."
};

window.PEOPLE = [
  {
    id: "jay",
    name: "Jay",
    initials: "J",
    tone: "a",
    role: "Multi-asset research · Singapore",
    // No employer name by design — see the compliance note in the launch guide.
    summary: "Cross-asset research and derivative strategy documentation. Twenty-six equity "
           + "markets, a rolling correlation framework, and a strategy library covering "
           + "volatility, structured products and portfolio construction.",
    chips: ["Derivatives", "Structured products", "Cross-asset macro"],
    cta: "View research",
    route: "base",
    ready: true
  },
  {
    id: "anna",
    name: "Anna",
    initials: "A",
    tone: "b",
    role: "Her half — being written",
    summary: "This side of the site is hers, and she has not filled it in yet. "
           + "The space, the layout and the words are all still open.",
    chips: [],
    cta: "Take a look anyway",
    route: "anna",
    ready: false
  }
];

/* Anna's holding page.
   When she knows what she wants, this whole page is these four fields.
   Change the words, refresh, done. `slots` can be any number of
   [heading, body] pairs — add or remove rows freely. */
window.ANNA = {
  eyebrow: "Reserved",
  title: "Anna's half",
  lede: "Nothing here yet — on purpose. This page is a placeholder holding the space until Anna decides what belongs in it.",
  slots: [
    ["A first page", "Whatever she wants people to see first — an introduction, a piece of work, a single image."],
    ["Something she makes", "Writing, photographs, recipes, a project log. The layout follows the content, not the other way around."],
    ["A way to reach her", "Only if she wants one. A public page does not owe anyone an inbox."]
  ]
};

/* ------------------------------------------------------------
   BACKDROP — optional photographic background.

   Drop one or more images into assets/img/ and list them here. Two or more
   images cross-fade slowly; one image drifts on its own. An empty list (or a
   file that fails to load) leaves the plain colour wash in place, so the site
   is never broken by a missing image.

   opacity  1 means the photograph is the page — there is no white wash over
            it. Legibility is carried entirely by the frosted panels the text
            sits on, and every text element was measured against the darkest
            representative pixel behind it: worst case 4.66:1 against the
            4.5:1 WCAG AA threshold, primary ink never below 13.8:1. Swap the
            photograph and that measurement no longer holds — re-check, or
            drop opacity below 1 to reintroduce a wash.
   cycle    seconds each image holds before the cross-fade begins.
   blur     px of blur on the photograph. 0 keeps it sharp.
   ------------------------------------------------------------ */
window.BACKDROP = {
  // Two framings of the same Lower Manhattan photograph, so the cross-fade
  // has something to say. Shadows are lifted and saturation reduced in the
  // files themselves; the CSS filter handles the rest.
  images: ["assets/img/skyline-wide.jpg", "assets/img/skyline-close.jpg"],
  opacity: 1,
  cycle: 14,
  blur: 0                        // px; the panels carry legibility, so the image stays sharp
};

/* ------------------------------------------------------------
   COUNTRIES — macro + equity market structure
   Figures are a curated snapshot, not a live feed. `conf` flags how
   much weight to put on a row: high / medium / low.
   ------------------------------------------------------------ */
window.COUNTRIES = {
  USA: { name:"United States", cur:"USD", gdp:32.38, growth:2.1, cpi:3.4, rate:3.75, unemp:4.1, y10:4.68, mcap:77.95, index:"S&P 500", ytd:12.9, conf:"high",
    sectors:{"Information Technology":38.0,"Financials":12.3,"Communication Services":9.5,"Health Care":9.3,"Consumer Discretionary":9.0,"Industrials":8.4,"Consumer Staples":4.5,"Energy":3.4,"Utilities":2.0,"Real Estate":1.8,"Materials":1.8},
    top5:[["NVIDIA","NVDA","Information Technology",5505],["Apple","AAPL","Information Technology",4591],["Alphabet","GOOGL","Communication Services",4130],["Microsoft","MSFT","Information Technology",3750],["Amazon.com","AMZN","Consumer Discretionary",2764]] },

  CHN: { name:"China", cur:"CNY", gdp:20.85, growth:4.3, cpi:0.5, rate:3.0, unemp:5.2, y10:1.70, mcap:17.75, index:"CSI 300", ytd:-0.3, conf:"medium",
    sectors:{"Information Technology":30.6,"Financials":19.3,"Industrials":14.1,"Materials":12.2,"Consumer Staples":6.7,"Health Care":4.4,"Consumer Discretionary":4.3,"Energy":3.3,"Utilities":3.3,"Communication Services":1.3,"Real Estate":0.5},
    top5:[["ChangXin Memory (CXMT)","688825.SS","Information Technology",618],["Tencent Holdings","0700.HK","Communication Services",521],["China Construction Bank","601939.SS","Financials",416],["Agricultural Bank of China","601288.SS","Financials",354],["ICBC","601398.SS","Financials",339]],
    note:"Sector weights are onshore (CSI 300 proxy); the top-5 spans onshore and HK listings by domicile." },

  JPN: { name:"Japan", cur:"JPY", gdp:4.38, growth:0.7, cpi:1.9, rate:1.0, unemp:2.4, y10:2.93, mcap:8.70, index:"TOPIX", ytd:30.9, conf:"high",
    sectors:{"Industrials":24.7,"Financials":19.0,"Information Technology":17.9,"Consumer Discretionary":15.0,"Communication Services":6.6,"Health Care":5.5,"Materials":3.9,"Consumer Staples":3.7,"Real Estate":1.8,"Utilities":1.0,"Energy":0.9},
    top5:[["Mitsubishi UFJ Financial","8306.T","Financials",253],["Toyota Motor","7203.T","Consumer Discretionary",227],["SoftBank Group","9984.T","Communication Services",184],["Kioxia Holdings","285A.T","Information Technology",164],["Sumitomo Mitsui Financial","8316.T","Financials",161]] },

  IND: { name:"India", cur:"INR", gdp:4.15, growth:7.8, cpi:4.45, rate:5.25, unemp:5.1, y10:6.91, mcap:4.92, index:"Nifty 50", ytd:-7.2, conf:"high",
    sectors:{"Financials":30.3,"Consumer Discretionary":12.7,"Industrials":11.0,"Materials":8.9,"Energy":8.2,"Information Technology":7.0,"Health Care":6.4,"Consumer Staples":5.3,"Communication Services":5.1,"Utilities":3.7,"Real Estate":1.4},
    top5:[["Reliance Industries","RELIANCE","Energy",182],["Bharti Airtel","BHARTIARTL","Communication Services",123],["HDFC Bank","HDFCBANK","Financials",118],["ICICI Bank","ICICIBANK","Financials",107],["State Bank of India","SBIN","Financials",101]] },

  DEU: { name:"Germany", cur:"EUR", gdp:5.45, growth:1.0, cpi:2.8, rate:2.4, unemp:6.4, y10:3.26, mcap:3.04, index:"DAX 40", ytd:9.2, conf:"high",
    sectors:{"Industrials":29.8,"Financials":22.9,"Information Technology":15.9,"Health Care":6.9,"Consumer Discretionary":6.9,"Communication Services":6.1,"Materials":4.9,"Utilities":4.4,"Consumer Staples":1.4,"Real Estate":0.8,"Energy":0.0},
    top5:[["Siemens","SIE","Industrials",262],["SAP","SAP","Information Technology",256],["Allianz","ALV","Financials",200],["Deutsche Telekom","DTE","Communication Services",158],["Siemens Energy","ENR","Industrials",147]] },

  GBR: { name:"United Kingdom", cur:"GBP", gdp:4.26, growth:1.2, cpi:2.9, rate:3.75, unemp:4.9, y10:5.05, mcap:3.99, index:"FTSE 100", ytd:9.7, conf:"high",
    sectors:{"Financials":27.4,"Industrials":14.0,"Consumer Staples":14.0,"Health Care":12.6,"Energy":11.2,"Materials":8.9,"Utilities":4.7,"Consumer Discretionary":3.5,"Communication Services":2.0,"Information Technology":1.0,"Real Estate":0.7},
    top5:[["HSBC Holdings","HSBA","Financials",354],["Arm Holdings","ARM","Information Technology",258],["AstraZeneca","AZN","Health Care",251],["Shell","SHEL","Energy",250],["Rolls-Royce","RR","Industrials",171]] },

  FRA: { name:"France", cur:"EUR", gdp:3.60, growth:0.7, cpi:2.4, rate:2.4, unemp:8.3, y10:4.11, mcap:3.50, index:"CAC 40", ytd:3.7, conf:"high",
    sectors:{"Industrials":32.7,"Financials":13.3,"Consumer Discretionary":11.3,"Health Care":8.6,"Consumer Staples":8.3,"Energy":8.0,"Materials":7.2,"Utilities":3.3,"Information Technology":3.2,"Communication Services":2.8,"Real Estate":1.3},
    top5:[["LVMH","MC","Consumer Discretionary",262],["L'Oréal","OR","Consumer Staples",240],["Schneider Electric","SU","Industrials",197],["Hermès","RMS","Consumer Discretionary",194],["TotalEnergies","TTE","Energy",191]] },

  ITA: { name:"Italy", cur:"EUR", gdp:2.74, growth:1.0, cpi:2.9, rate:2.4, unemp:5.7, y10:4.09, mcap:0.95, index:"FTSE MIB", ytd:16.3, conf:"high",
    sectors:{"Financials":54.9,"Utilities":16.4,"Consumer Discretionary":8.8,"Industrials":7.3,"Energy":6.9,"Communication Services":2.5,"Health Care":1.3,"Consumer Staples":1.0,"Materials":0.9,"Information Technology":0.0,"Real Estate":0.0},
    top5:[["UniCredit","UCG","Financials",148],["Intesa Sanpaolo","ISP","Financials",137],["Enel","ENEL","Utilities",109],["Generali","G","Financials",77],["Eni","ENI","Energy",76]] },

  CAN: { name:"Canada", cur:"CAD", gdp:2.51, growth:-0.1, cpi:3.0, rate:2.25, unemp:6.4, y10:3.71, mcap:4.50, index:"S&P/TSX Composite", ytd:16.2, conf:"high",
    sectors:{"Financials":39.1,"Energy":17.1,"Materials":16.7,"Information Technology":8.9,"Industrials":8.8,"Consumer Staples":3.1,"Consumer Discretionary":2.9,"Utilities":2.4,"Communication Services":0.8,"Real Estate":0.2,"Health Care":0.0},
    top5:[["Royal Bank of Canada","RY","Financials",283],["Shopify","SHOP","Information Technology",200],["Toronto-Dominion Bank","TD","Financials",198],["Bank of Montreal","BMO","Financials",120],["Bank of Nova Scotia","BNS","Financials",113]] },

  BRA: { name:"Brazil", cur:"BRL", gdp:2.64, growth:1.8, cpi:4.44, rate:14.0, unemp:5.3, y10:14.59, mcap:1.10, index:"Ibovespa", ytd:9.2, conf:"high",
    sectors:{"Financials":36.8,"Energy":15.1,"Materials":14.5,"Utilities":13.1,"Industrials":9.2,"Consumer Staples":5.6,"Consumer Discretionary":2.7,"Communication Services":1.8,"Health Care":1.2,"Information Technology":0.0,"Real Estate":0.0},
    top5:[["Petrobras","PETR4","Energy",116],["Itaú Unibanco","ITUB4","Financials",83],["Nu Holdings","NU","Financials",71],["Vale","VALE3","Materials",65],["BTG Pactual","BPAC11","Financials",50]] },

  KOR: { name:"South Korea", cur:"KRW", gdp:1.93, growth:3.7, cpi:2.8, rate:3.0, unemp:2.8, y10:4.30, mcap:4.89, index:"KOSPI", ytd:64.4, conf:"high",
    sectors:{"Information Technology":49.7,"Industrials":19.9,"Financials":11.3,"Consumer Discretionary":6.2,"Health Care":4.0,"Communication Services":3.3,"Consumer Staples":2.4,"Materials":1.5,"Energy":1.4,"Utilities":0.3,"Real Estate":0.0},
    top5:[["Samsung Electronics","005930","Information Technology",1223],["SK Hynix","000660","Information Technology",851],["SK Square","402340","Information Technology",98],["Hyundai Motor","005380","Consumer Discretionary",76],["LG Energy Solution","373220","Industrials",63]] },

  AUS: { name:"Australia", cur:"AUD", gdp:2.12, growth:2.5, cpi:3.5, rate:4.35, unemp:4.5, y10:5.07, mcap:1.97, index:"S&P/ASX 200", ytd:4.3, conf:"high",
    sectors:{"Financials":38.6,"Materials":26.6,"Consumer Discretionary":6.6,"Health Care":6.1,"Industrials":5.0,"Real Estate":4.6,"Energy":4.1,"Consumer Staples":3.9,"Communication Services":1.8,"Utilities":1.7,"Information Technology":1.0},
    top5:[["BHP Group","BHP","Materials",242],["Commonwealth Bank","CBA","Financials",188],["National Australia Bank","NAB","Financials",84],["Westpac Banking","WBC","Financials",83],["ANZ Group","ANZ","Financials",80]] },

  ESP: { name:"Spain", cur:"EUR", gdp:2.09, growth:2.7, cpi:4.3, rate:2.4, unemp:9.9, y10:3.71, mcap:1.36, index:"IBEX 35", ytd:16.7, conf:"medium",
    sectors:{"Financials":46.1,"Utilities":22.5,"Industrials":12.1,"Consumer Discretionary":8.6,"Communication Services":4.7,"Energy":4.6,"Information Technology":1.4,"Health Care":0.0,"Consumer Staples":0.0,"Materials":0.0,"Real Estate":0.0},
    top5:[["Banco Santander","SAN","Financials",213],["Inditex","ITX","Consumer Discretionary",210],["BBVA","BBVA","Financials",160],["Iberdrola","IBE","Utilities",157],["CaixaBank","CABK","Financials",106]] },

  MEX: { name:"Mexico", cur:"MXN", gdp:2.12, growth:2.1, cpi:3.12, rate:6.5, unemp:2.9, y10:9.19, mcap:0.61, index:"S&P/BMV IPC", ytd:-0.2, conf:"medium",
    sectors:{"Materials":27.6,"Consumer Staples":24.3,"Financials":18.4,"Industrials":11.4,"Communication Services":9.3,"Real Estate":7.9,"Consumer Discretionary":0.7,"Health Care":0.4,"Information Technology":0.0,"Energy":0.0,"Utilities":0.0},
    top5:[["Grupo México","GMEXICOB","Materials",110],["América Móvil","AMXB","Communication Services",70],["Walmex","WALMEX","Consumer Staples",49],["FEMSA","FEMSAUBD","Consumer Staples",43],["Banorte","GFNORTEO","Financials",32]] },

  IDN: { name:"Indonesia", cur:"IDR", gdp:1.54, growth:5.29, cpi:2.88, rate:5.75, unemp:4.68, y10:6.97, mcap:0.94, index:"IDX Composite", ytd:-23.7, conf:"medium",
    sectors:{"Financials":47.0,"Materials":14.2,"Energy":11.1,"Communication Services":10.0,"Consumer Staples":8.0,"Industrials":4.4,"Health Care":1.5,"Real Estate":1.4,"Utilities":1.3,"Consumer Discretionary":1.1,"Information Technology":0.0},
    top5:[["Bank Central Asia","BBCA","Financials",44],["Bayan Resources","BYAN","Energy",28],["DCI Indonesia","DCII","Information Technology",27],["Bank Rakyat Indonesia","BBRI","Financials",27],["Bank Mandiri","BMRI","Financials",22]] },

  NLD: { name:"Netherlands", cur:"EUR", gdp:1.45, growth:1.3, cpi:3.2, rate:2.4, unemp:4.0, y10:3.34, mcap:2.12, index:"AEX", ytd:18.2, conf:"high",
    sectors:{"Information Technology":35.0,"Financials":23.4,"Industrials":13.0,"Consumer Staples":10.0,"Consumer Discretionary":5.6,"Materials":4.3,"Communication Services":3.9,"Health Care":2.5,"Energy":1.6,"Real Estate":0.7,"Utilities":0.0},
    top5:[["ASML Holding","ASML","Information Technology",652],["Prosus","PRX","Consumer Discretionary",196],["Airbus","AIR","Industrials",186],["ING Groep","INGA","Financials",101],["argenx","ARGX","Health Care",64]] },

  SAU: { name:"Saudi Arabia", cur:"SAR", gdp:1.39, growth:-4.8, cpi:1.8, rate:4.25, unemp:3.1, y10:5.40, mcap:2.63, index:"Tadawul All Share", ytd:6.8, conf:"low",
    sectors:{"Financials":41.8,"Materials":13.3,"Energy":12.3,"Communication Services":8.1,"Utilities":4.7,"Health Care":4.2,"Consumer Discretionary":3.8,"Consumer Staples":3.8,"Industrials":3.2,"Real Estate":3.1,"Information Technology":1.7},
    top5:[["Saudi Aramco","2222","Energy",1686],["Al Rajhi Bank","1120","Financials",110],["Ma'aden","1211","Materials",73],["Saudi National Bank","1180","Financials",68],["stc","7010","Communication Services",59]],
    note:"Reported Q2-2026 GDP contraction sits oddly against a positive index year — verify before quoting." },

  CHE: { name:"Switzerland", cur:"CHF", gdp:1.15, growth:0.3, cpi:0.4, rate:0.0, unemp:3.0, y10:0.38, mcap:1.79, index:"SMI", ytd:8.7, conf:"high",
    sectors:{"Health Care":37.8,"Financials":18.2,"Consumer Staples":13.5,"Industrials":13.2,"Materials":7.3,"Consumer Discretionary":6.5,"Communication Services":1.2,"Information Technology":1.0,"Real Estate":0.9,"Utilities":0.4,"Energy":0.0},
    top5:[["Roche Holding","ROG","Health Care",370],["Novartis","NOVN","Health Care",294],["Nestlé","NESN","Consumer Staples",251],["ABB","ABBN","Industrials",178],["UBS Group","UBSG","Financials",166]] },

  TWN: { name:"Taiwan", cur:"TWD", gdp:0.98, growth:12.93, cpi:2.54, rate:2.0, unemp:3.33, y10:1.90, mcap:4.95, index:"TAIEX", ytd:62.3, conf:"high",
    sectors:{"Information Technology":73.7,"Financials":14.1,"Materials":4.2,"Industrials":3.2,"Communication Services":2.0,"Health Care":1.4,"Consumer Staples":1.0,"Consumer Discretionary":0.4,"Energy":0.0,"Utilities":0.0,"Real Estate":0.0},
    top5:[["TSMC","2330","Information Technology",2165],["MediaTek","2454","Information Technology",201],["Delta Electronics","2308","Information Technology",150],["Wiwynn","6669","Information Technology",127],["Hon Hai (Foxconn)","2317","Information Technology",112]] },

  TUR: { name:"Türkiye", cur:"TRY", gdp:1.64, growth:2.5, cpi:31.75, rate:37.0, unemp:7.6, y10:31.89, mcap:0.285, index:"BIST 100", ytd:29.6, conf:"medium",
    sectors:{"Industrials":28.1,"Financials":17.3,"Consumer Staples":13.5,"Materials":11.7,"Energy":9.0,"Real Estate":6.0,"Consumer Discretionary":4.6,"Utilities":3.4,"Communication Services":2.9,"Health Care":2.5,"Information Technology":1.0},
    top5:[["Aselsan","ASELS","Industrials",38],["QNB Finansbank","QNBTR","Financials",22],["Tüpraş","TUPRS","Energy",15],["Garanti BBVA","GARAN","Financials",12],["Koç Holding","KCHOL","Industrials",11]],
    note:"Nominal index returns are meaningless here without an inflation adjustment — BIST +29.6% against ~32% CPI is a real-terms loss." },

  SGP: { name:"Singapore", cur:"SGD", gdp:0.66, growth:5.9, cpi:2.2, rate:1.3, unemp:2.0, y10:2.32, mcap:0.82, index:"Straits Times Index", ytd:22.4, conf:"high", ll:[103.8,1.35],
    sectors:{"Financials":55.4,"Industrials":20.9,"Real Estate":7.8,"Consumer Discretionary":5.2,"Consumer Staples":3.7,"Communication Services":3.5,"Utilities":3.5,"Information Technology":0.0,"Health Care":0.0,"Energy":0.0,"Materials":0.0},
    top5:[["DBS Group","D05","Financials",169],["OCBC","O39","Financials",109],["Sea Limited","SE","Communication Services",72],["Singtel","Z74","Communication Services",58],["United Overseas Bank","U11","Financials",53]],
    note:"MAS runs policy through the S$NEER band, not a policy rate — the rate shown is a short-rate proxy." },

  HKG: { name:"Hong Kong SAR", cur:"HKD", gdp:0.47, growth:4.3, cpi:1.7, rate:4.0, unemp:3.7, y10:3.58, mcap:7.25, index:"MSCI Hong Kong", ytd:-0.9, conf:"medium", ll:[114.17,22.32],
    sectors:{"Financials":42.4,"Industrials":19.8,"Real Estate":17.9,"Utilities":11.9,"Consumer Discretionary":4.0,"Consumer Staples":2.3,"Communication Services":1.7,"Information Technology":0.0,"Health Care":0.0,"Energy":0.0,"Materials":0.0},
    top5:[["AIA Group","1299","Financials",98],["HKEX","0388","Financials",68],["BOC Hong Kong","2388","Financials",67],["Zijin Gold International","2259","Materials",53],["Swire Pacific","0019","Real Estate",49]],
    note:"Shown on an HK-domiciled basis. The Hang Seng itself is ~55% mainland-domiciled, which would double-count China." },

  SWE: { name:"Sweden", cur:"SEK", gdp:0.76, growth:3.3, cpi:0.2, rate:1.75, unemp:7.8, y10:3.05, mcap:1.41, index:"OMX Stockholm 30", ytd:16.9, conf:"high",
    sectors:{"Industrials":45.2,"Financials":25.3,"Communication Services":13.0,"Information Technology":6.6,"Materials":3.0,"Consumer Discretionary":2.5,"Consumer Staples":2.2,"Health Care":1.2,"Real Estate":1.0,"Energy":0.0,"Utilities":0.0},
    top5:[["Investor AB","INVE-B","Financials",134],["Spotify","SPOT","Communication Services",108],["Atlas Copco","ATCO-A","Industrials",93],["AB Volvo","VOLV-B","Industrials",74],["Sandvik","SAND","Industrials",52]] },

  POL: { name:"Poland", cur:"PLN", gdp:1.13, growth:3.8, cpi:3.0, rate:3.75, unemp:5.8, y10:5.96, mcap:0.292, index:"WIG20", ytd:26.6, conf:"medium",
    sectors:{"Financials":45.6,"Energy":13.3,"Consumer Discretionary":12.9,"Materials":7.2,"Consumer Staples":5.0,"Communication Services":4.9,"Industrials":4.2,"Utilities":4.1,"Information Technology":2.2,"Health Care":0.6,"Real Estate":0.0},
    top5:[["ORLEN","PKN","Energy",46],["PKO Bank Polski","PKO","Financials",38],["Erste Bank Polska","EBP","Financials",20],["KGHM","KGH","Materials",19],["Bank Pekao","PEO","Financials",18]] },

  ZAF: { name:"South Africa", cur:"ZAR", gdp:0.48, growth:1.9, cpi:4.3, rate:7.0, unemp:33.6, y10:8.62, mcap:1.53, index:"FTSE/JSE Top 40", ytd:1.1, conf:"medium",
    sectors:{"Materials":42.1,"Financials":32.8,"Consumer Discretionary":10.4,"Consumer Staples":6.0,"Communication Services":5.6,"Real Estate":1.7,"Industrials":1.4,"Information Technology":0.0,"Health Care":0.0,"Energy":0.0,"Utilities":0.0},
    top5:[["AngloGold Ashanti","ANG","Materials",60],["Gold Fields","GFI","Materials",43],["Naspers","NPN","Consumer Discretionary",36],["Capitec Bank","CPI","Financials",34],["FirstRand","FSR","Financials",34]] },

  ARE: { name:"United Arab Emirates", cur:"AED", gdp:0.62, growth:3.0, cpi:2.04, rate:3.65, unemp:2.17, y10:5.00, mcap:1.05, index:"MSCI UAE", ytd:0.5, conf:"medium",
    sectors:{"Financials":40.2,"Real Estate":17.8,"Communication Services":12.1,"Industrials":10.1,"Energy":9.1,"Consumer Discretionary":4.9,"Utilities":3.9,"Consumer Staples":1.5,"Information Technology":0.3,"Materials":0.1,"Health Care":0.0},
    top5:[["International Holding Co","IHC","Industrials",222],["TAQA","TAQA","Utilities",81],["ADNOC Gas","ADNOCGAS","Energy",67],["First Abu Dhabi Bank","FAB","Financials",59],["Emirates NBD","EMIRATESNBD","Financials",53]] }
};

/* Metrics the map can colour by. `dir` decides ramp direction,
   `type` decides sequential vs diverging. */
window.METRICS = [
  { key:"mcap",   label:"Market cap",   unit:"$tn",  type:"seq",  fmt:v=>"$"+v.toFixed(2)+"tn", log:true },
  { key:"ytd",    label:"Index YTD",    unit:"%",    type:"div",  fmt:v=>(v>=0?"+":"")+v.toFixed(1)+"%" },
  { key:"rate",   label:"Policy rate",  unit:"%",    type:"seq",  fmt:v=>v.toFixed(2)+"%" },
  { key:"cpi",    label:"Inflation",    unit:"%",    type:"seq",  fmt:v=>v.toFixed(1)+"%" },
  { key:"growth", label:"GDP growth",   unit:"%",    type:"div",  fmt:v=>(v>=0?"+":"")+v.toFixed(1)+"%" },
  { key:"y10",    label:"10y yield",    unit:"%",    type:"seq",  fmt:v=>v.toFixed(2)+"%" },
  { key:"gdp",    label:"GDP",          unit:"$tn",  type:"seq",  fmt:v=>"$"+v.toFixed(2)+"tn", log:true }
];

/* ------------------------------------------------------------
   STRATEGIES — the capability shelf
   payoff: one of the shapes drawn in app.js (PAYOFFS)
   ------------------------------------------------------------ */
window.STRATEGIES = [
  { id:"vrp", name:"Systematic volatility risk premium", payoff:"short_put",
    thesis:"Harvest the spread between implied and realised variance through short-dated index optionality, sized so that a tail event does not impair the mandate.",
    detail:"Cash-collateralised short puts and put spreads on major indices, seven to forty-five days to expiry. Entry is conditioned on the percentile of the implied-realised spread and the slope of the volatility term structure rather than on a directional view. Positions are closed when the front of the curve inverts.",
    metrics:[["Instrument","Index puts and put spreads"],["Tenor","7–45 days"],["Primary exposure","Short vega, short gamma"],["Exit condition","Term-structure inversion"]],
    risks:"Path dependency dominates outcome dispersion. A two-standard-deviation gap through the short strike can exceed a year of collected premium where notional has been sized on average rather than stressed volatility.",
    tags:["Volatility","Backtested","Python"] },

  { id:"autocall", name:"Autocallable and barrier reverse convertible valuation", payoff:"autocall",
    thesis:"Decompose issuer structures into their component exposures and establish whether the quoted coupon compensates for them.",
    detail:"Monte Carlo valuation under a local-volatility or Heston surface, with discrete observation dates, issuer funding spread and constituent correlation for worst-of baskets. Outputs are a fair coupon, the implied knock-in probability and the distribution of holding period.",
    metrics:[["Method","Monte Carlo, discrete barriers"],["Inputs","Volatility surface, correlation, funding"],["Outputs","Fair coupon, P(knock-in)"],["Key sensitivity","Worst-of correlation"]],
    risks:"Correlation is the dominant unhedged exposure. Worst-of baskets present as diversified and behave as a single leveraged position in a broad drawdown.",
    tags:["Structured products","Monte Carlo","Valuation"] },

  { id:"overwrite", name:"Covered call and collar overlays", payoff:"covered_call",
    thesis:"Generate contractual income and constrain drawdown on existing equity exposure where the mandate tolerates a capped upside.",
    detail:"Strike selection is driven by observed skew rather than a fixed delta, and positions are rolled on time decay rather than on spot. Collars are sized so that put financing is neutral to marginally positive at the mandate's stated risk budget.",
    metrics:[["Instrument","Single-stock and index calls"],["Typical delta","15–25Δ"],["Roll basis","Theta, not spot"],["Application","Income and drawdown control"]],
    risks:"The structure systematically caps compounding. Across a multi-year trending market the foregone upside exceeds the premium collected.",
    tags:["Overlay","Income","Discretionary mandates"] },

  { id:"kelly", name:"Kelly and mean-variance position sizing", payoff:"kelly",
    thesis:"Determine position size from estimated edge and estimation error rather than from conviction.",
    detail:"Expected returns are shrunk toward a prior and the covariance matrix is Ledoit-Wolf shrunk before optimisation. Output is capped at half-Kelly and tested against an explicit maximum-drawdown constraint.",
    metrics:[["Method","Fractional Kelly with mean-variance"],["Covariance","Ledoit-Wolf shrinkage"],["Cap","0.5× Kelly"],["Constraint","Drawdown budget"]],
    risks:"Full Kelly applied to estimated parameters approaches ruin. Every input is an estimate carrying a standard error that the optimiser does not report.",
    tags:["Quantitative","Risk","Allocation"] },

  { id:"dispersion", name:"Dispersion and implied correlation", payoff:"dispersion",
    thesis:"Express a view on implied correlation by trading index volatility against the volatility of its constituents.",
    detail:"Implied correlation is inferred from the index and single-name surfaces. Positions are entered when it sits in the upper decile of its trailing distribution, and are balanced on vega rather than notional.",
    metrics:[["Structure","Long constituent vega, short index vega"],["Signal","Implied correlation percentile"],["Balance","Vega neutral"],["Key risk","Correlation shock"]],
    risks:"The position is short a correlation shock. Realised correlation converges toward one precisely in the drawdowns the wider book is already exposed to.",
    tags:["Volatility","Relative value"] },

  { id:"carry", name:"Cross-asset carry and term structure", payoff:"carry",
    thesis:"Identify where the market is paying to hold exposure, and where that payment reflects crowding rather than risk premium.",
    detail:"Curve shape, roll yield and forward-implied moves are compared across FX, rates and commodities. Signals are read alongside positioning data rather than in isolation.",
    metrics:[["Asset classes","FX, rates, commodities"],["Signal","Roll yield and curve slope"],["Application","Crowding and regime detection"],["Read with","Volatility screen"]],
    risks:"Carry positions unwind through crowded exits rather than gradual reversals. Positioning data is more informative than the level of carry itself.",
    tags:["Macro","FX","Rates"] },

  { id:"valuation", name:"Global equity valuation framework", payoff:"valuation",
    thesis:"Compare equity valuation across regions on a basis that survives differences in sector composition, accounting convention and cost of equity.",
    detail:"Sector-neutral multiples, an implied equity risk premium derived from a reverse DCF, and a cost-of-equity build from the local risk-free rate. Screens resolve to region, then sector, then security.",
    metrics:[["Method","Sector-neutral with reverse DCF"],["Coverage","Developed and major emerging"],["Output","Implied ERP by region"],["Cadence","Quarterly"]],
    risks:"Valuation describes expectations rather than outcomes. Screens constructed this way hold their worst positions longest.",
    tags:["Fundamental","Research"] },

  { id:"reporting", name:"Mandate reporting and attribution", payoff:"attrib",
    thesis:"Produce mandate performance that can be decomposed by source and reconciled to an independent record.",
    detail:"Brinson allocation and selection attribution across the discretionary sleeves, reconciled to custodian records before any figure is distributed.",
    metrics:[["Framework","Allocation versus selection"],["Sleeves","Growth, Balanced, Income"],["Reconciled to","Custodian records"],["Output","Client performance overview"]],
    risks:"Attribution that does not reconcile to custody is narrative rather than result.",
    tags:["Discretionary mandates","Client reporting"] }
];

window.SKILLS = [
  ["Derivatives and volatility", 92, "Option pricing, greeks, surface construction, volatility premium strategy design"],
  ["Structured products", 90, "Autocallables, barrier reverse convertibles, fixed coupon notes: decomposition, valuation, term-sheet review"],
  ["Quantitative portfolio construction", 85, "Kelly sizing, mean-variance optimisation, covariance shrinkage, drawdown budgeting"],
  ["Python and data tooling", 84, "pandas, NumPy, backtesting, Monte Carlo, reporting automation"],
  ["Macro and cross-asset research", 80, "Rates, FX, commodities, regime and correlation analysis"],
  ["Bloomberg, Pine Script, Excel", 88, "Terminal workflows, custom indicators, valuation models"]
];

/* ------------------------------------------------------------
   HEAT — cross-asset correlation.
   The matrix below is the fallback used before the daily job has run.
   `reads` is commentary and is maintained by hand.
   ------------------------------------------------------------ */
window.HEAT = {
  window: "60-day rolling, daily returns",
  assets: ["S&P 500","Nasdaq 100","MSCI EM","US 10y yield","US 2y yield","DXY","Gold","Brent","Copper","Bitcoin","USDJPY","VIX","HY credit"],
  matrix: [
    [ 1.00, 0.96, 0.71,-0.28,-0.22,-0.34, 0.11, 0.29, 0.48, 0.44, 0.18,-0.84, 0.79],
    [ 0.96, 1.00, 0.68,-0.31,-0.25,-0.30, 0.09, 0.22, 0.44, 0.49, 0.21,-0.81, 0.73],
    [ 0.71, 0.68, 1.00,-0.24,-0.18,-0.52, 0.26, 0.31, 0.62, 0.38, 0.05,-0.61, 0.68],
    [-0.28,-0.31,-0.24, 1.00, 0.88, 0.41,-0.36,-0.05,-0.11,-0.15, 0.55, 0.23,-0.30],
    [-0.22,-0.25,-0.18, 0.88, 1.00, 0.47,-0.41,-0.02,-0.08,-0.12, 0.61, 0.17,-0.24],
    [-0.34,-0.30,-0.52, 0.41, 0.47, 1.00,-0.44,-0.12,-0.35,-0.20, 0.66, 0.28,-0.37],
    [ 0.11, 0.09, 0.26,-0.36,-0.41,-0.44, 1.00, 0.14, 0.33, 0.22,-0.24,-0.06, 0.12],
    [ 0.29, 0.22, 0.31,-0.05,-0.02,-0.12, 0.14, 1.00, 0.46, 0.13, 0.02,-0.24, 0.31],
    [ 0.48, 0.44, 0.62,-0.11,-0.08,-0.35, 0.33, 0.46, 1.00, 0.27,-0.03,-0.39, 0.46],
    [ 0.44, 0.49, 0.38,-0.15,-0.12,-0.20, 0.22, 0.13, 0.27, 1.00, 0.09,-0.42, 0.40],
    [ 0.18, 0.21, 0.05, 0.55, 0.61, 0.66,-0.24, 0.02,-0.03, 0.09, 1.00,-0.09, 0.14],
    [-0.84,-0.81,-0.61, 0.23, 0.17, 0.28,-0.06,-0.24,-0.39,-0.42,-0.09, 1.00,-0.72],
    [ 0.79, 0.73, 0.68,-0.30,-0.24,-0.37, 0.12, 0.31, 0.46, 0.40, 0.14,-0.72, 1.00]
  ],
  reads: [
    "Equity–rates correlation has changed sign twice in this cycle. A positive correlation between the 10-year and the S&P indicates the market is pricing inflation risk; a negative correlation indicates growth risk.",
    "Gold is simultaneously negatively correlated to real yields and positively correlated to emerging-market equity. That combination is consistent with a debasement bid rather than a defensive one.",
    "Copper remains the cleanest confirmation of the emerging-market equity rally. A divergence would indicate the move is liquidity-driven rather than demand-driven.",
    "Credit and equity are moving together at 0.79. Credit has historically ceased to confirm before equity does, making it the earlier of the two signals."
  ]
};

/* ------------------------------------------------------------
   EVENTS — dated commentary. Newest first.
   tone: "" | "watch" | "risk"
   ------------------------------------------------------------ */
window.EVENTS = [
  { date:"Aug 2026", tone:"", title:"Memory-cycle leadership broadens across Asia",
    body:"KOSPI is up 64% and TAIEX 62% year to date, against 12.9% for the S&P 500. Information technology now represents approximately 50% of the Korean index and 74% of the Taiwanese. Both markets function as leveraged expressions of the same AI hardware cycle.",
    read:"Country diversification does not deliver sector diversification. A book holding US, Korean and Taiwanese equity holds one exposure denominated in three currencies." },

  { date:"Aug 2026", tone:"watch", title:"Japanese long end repricing ahead of policy",
    body:"The 10-year Japanese government bond yields 2.93% against a policy rate of 1.00%. The long end has moved well ahead of policy as the Bank of Japan normalises. Domestic financials represent 19% of TOPIX and have led the index to a 31% gain.",
    read:"Yen funding is no longer costless. Cross-currency basis and JGB term premium warrant review before adding any yen-funded exposure." },

  { date:"Aug 2026", tone:"risk", title:"Indonesian equity dislocates from emerging-market beta",
    body:"The IDX Composite is down 23.7% year to date while broad emerging-market equity is higher. Financials represent 47% of the index, locating the drawdown in domestic banking and currency rather than in global risk aversion.",
    read:"Idiosyncratic drawdowns inside a rising index are where forced-seller opportunities and value traps coexist. The distinction is made on funding conditions, not on multiples." },

  { date:"Aug 2026", tone:"watch", title:"Turkish equity: positive nominal, negative real",
    body:"BIST 100 is up 29.6% against CPI of 31.75% and a policy rate of 37%. The nominal return is negative in real terms.",
    read:"Any screen ranking markets on nominal local-currency return will place Türkiye near the top. Deflate, or convert to a hard currency, before ranking." },

  { date:"Aug 2026", tone:"", title:"UK and US long ends above 4.6%",
    body:"Gilts yield 5.05% and Treasuries 4.68%, against policy rates of 3.75% in both markets. Curves are positively sloped with term premium the dominant contributor.",
    read:"A positive term premium raises the discount rate applied to long-duration equity. Growth multiples and 30-year gilts express the same exposure from opposite ends." }
];

/* Shown beneath data-heavy sections. */
window.DISCLAIMER = "Figures combine automatically refreshed end-of-day series with manually "
  + "maintained reference data, both drawn from public sources, as of " + window.META.asof + ". "
  + "Provided for research and illustration only. Not investment advice, and not the views of "
  + "any employer. Independent verification is required before use.";
