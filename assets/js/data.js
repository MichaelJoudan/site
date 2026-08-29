/* ============================================================
   data.js — everything on this site is driven from this file.
   Edit here, refresh, done. No build step.

   HOW TO KEEP IT CURRENT
   - meta.asof            : bump whenever you refresh figures.
   - COUNTRIES            : add a market by adding one object, keyed by ISO-3.
   - STRATEGIES           : your capability shelf. `payoff` names a shape
                            drawn by app.js (see PAYOFFS there).
   - HEAT.assets/matrix   : run tools/build_correlations.py to regenerate.
   - EVENTS               : append at the top; keep the oldest at the bottom.
   ============================================================ */

window.META = {
  owner: "Jay",
  role: "Portfolio Analyst",
  city: "Singapore",
  asof: "August 2026",
  tagline: "A working intelligence base for multi-asset markets — how the pieces move, why they move together, and where the risk is priced wrong.",
  email: "e0726176@u.nus.edu",            // add an address to turn on the Contact button
  linkedin: "https://www.linkedin.com/in/xujiaheng/",         // full URL
  github: "https://github.com/MichaelJoudan/"            // full URL
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
    role: "Multi-asset markets · Singapore",
    // Deliberately no employer name — see the compliance note in the launch guide.
    summary: "Derivatives, structured products, and the arithmetic of how much to hold. " +
             "A working notebook rather than a portfolio: strategies with their failure modes attached, " +
             "a cross-asset interaction grid, and every major market on one map.",
    chips: ["Derivatives", "Structured products", "Cross-asset macro"],
    cta: "Enter the intelligence base",
    route: "base",
    ready: true
  },
  {
    id: "anna",
    name: "Anna",
    initials: "A",
    tone: "b",
    role: "Her half — being written",
    summary: "This side of the site is hers, and she has not filled it in yet. " +
             "The space, the layout and the words are all still open.",
    chips: [],
    cta: "Take a look anyway",
    route: "anna",
    ready: false
  }
];

/* Anna's holding page.
   When she knows what she wants, this whole page is these four fields.
   Change the words, refresh, done. `slots` can be any number of
   [heading, body] pairs — add or remove rows freely. When it outgrows a
   placeholder, that is the point to have the page built properly. */
window.ANNA = {
  eyebrow: "Reserved",
  title: "Anna's half",
  lede: "Nothing here yet — on purpose. This page is a placeholder holding the space until Anna decides what belongs in it.",
  slots: [
    ["A first page", "Whatever she wants people to see first — an introduction, a piece of work, a single image."],
    ["Something she makes", "Writing, photographs, recipes, a project log. The layout follows the content, not the other way around."],
    ["A way to reach her", "Only if she wants one. A public page does not owe anyone an inbox."]
  ],
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
  { id:"vrp", name:"Systematic VRP option writing", payoff:"short_put",
    thesis:"Implied variance trades persistently above realised. The edge is real but it is compensation for tail risk — so the whole job is sizing, not signal.",
    detail:"Short-dated index puts and put spreads written against a cash-collateralised sleeve. Entry is gated on the IV–RV spread percentile and the term-structure slope, not on a view. Positions are cut when the front of the curve inverts.",
    metrics:[["Instrument","Index puts / put spreads"],["Horizon","7–45 DTE"],["Primary greek","Short vega, short gamma"],["Kill switch","VIX term structure inversion"]],
    risks:"Path risk dominates. A 2-sigma gap through the short strike costs more than a year of premium if notional is set off average vol rather than stressed vol.",
    tags:["Volatility","Backtested","Python"] },

  { id:"autocall", name:"Autocallable & barrier reverse convertible valuation", payoff:"autocall",
    thesis:"An autocallable is a short down-and-in put plus a short call on your own capital. Price the parts, then decide whether the coupon pays you for them.",
    detail:"Monte Carlo under a local-vol / Heston surface with discrete observation dates, issuer funding spread, and correlation for worst-of baskets. Output is a fair coupon, the implied barrier probability and the distribution of holding period.",
    metrics:[["Model","MC, discrete barriers"],["Inputs","Vol surface, corr, funding"],["Outputs","Fair coupon, P(knock-in)"],["Watch","Worst-of correlation"]],
    risks:"Correlation is the hidden short. Worst-of baskets look diversified and behave like a single leveraged position when everything sells off together.",
    tags:["Structured products","Monte Carlo","Pricing"] },

  { id:"overwrite", name:"Covered call & collar overlays", payoff:"covered_call",
    thesis:"Selling the right tail to fund the left tail. Useful when a mandate needs income and can accept a capped upside — destructive when it cannot.",
    detail:"Strike selection driven by skew rather than by a fixed delta, rolled on time decay rather than on price. Collars are sized so the put financing is neutral to slightly positive at the mandate's risk budget.",
    metrics:[["Instrument","Single stock / index calls"],["Typical delta","15–25Δ"],["Roll","On theta, not on price"],["Use","Income & drawdown control"]],
    risks:"Systematically caps compounding. Over a long horizon the opportunity cost in a trending market exceeds the premium collected.",
    tags:["Overlay","Income","DPM"] },

  { id:"kelly", name:"Kelly & mean-variance position sizing", payoff:"kelly",
    thesis:"Most portfolio damage is a sizing error wearing a signal's clothes. Fractional Kelly with a shrunk covariance matrix beats conviction.",
    detail:"Expected-return inputs are shrunk toward a prior; the covariance matrix is Ledoit-Wolf shrunk before optimisation. Output is capped at half-Kelly and re-checked against a drawdown constraint.",
    metrics:[["Method","Fractional Kelly + MVO"],["Covariance","Ledoit-Wolf shrinkage"],["Cap","0.5× Kelly"],["Constraint","Max drawdown budget"]],
    risks:"Full Kelly on estimated parameters is close to ruinous. Every number in the optimiser is an estimate with a standard error nobody shows you.",
    tags:["Quant","Risk","Allocation"] },

  { id:"dispersion", name:"Dispersion & correlation trades", payoff:"dispersion",
    thesis:"Index vol is cheap relative to the components when correlation is priced high. The trade is long single-name vol, short index vol.",
    detail:"Implied correlation is backed out from index and constituent surfaces; the position is entered when it sits in the upper decile of its trailing distribution and vega is matched, not notional-matched.",
    metrics:[["Structure","Long component / short index vega"],["Signal","Implied correlation percentile"],["Balance","Vega-neutral"],["Risk","Correlation spike"]],
    risks:"Correlation goes to one exactly when you need it not to. This trade is short the crisis.",
    tags:["Volatility","Relative value"] },

  { id:"carry", name:"Cross-asset carry & term-structure work", payoff:"carry",
    thesis:"Carry is a risk premium and a positioning signal at the same time. Reading it across FX, rates and commodities is how you spot crowding.",
    detail:"Curve shape, roll yield and forward-implied moves compared across markets to find where the market is paying to hold a position and where it is paying to avoid one.",
    metrics:[["Assets","FX, rates, commodities"],["Signal","Roll yield & curve slope"],["Use","Crowding & regime detection"],["Pair with","Vol screen"]],
    risks:"Carry trades die in crowded unwinds, not in slow reversals. Position data matters more than the carry number itself.",
    tags:["Macro","FX","Rates"] },

  { id:"valuation", name:"Global equity valuation framework", payoff:"valuation",
    thesis:"Cross-regional valuation only means something after adjusting for sector mix, accounting and cost of equity. Otherwise you are comparing a bank index to a semiconductor index.",
    detail:"Sector-neutral multiples, an implied equity risk premium from a reverse DCF, and a cost-of-equity build from the local risk-free rate. Screens run to region × sector, then down to name.",
    metrics:[["Method","Sector-neutral + reverse DCF"],["Coverage","Developed & major EM"],["Output","Implied ERP by region"],["Cadence","Quarterly refresh"]],
    risks:"Cheapness is a statement about expectations, not about outcomes. Value screens hold their worst positions the longest.",
    tags:["Fundamental","Research"] },

  { id:"reporting", name:"Mandate reporting & attribution", payoff:"attrib",
    thesis:"A performance number nobody can decompose is a number nobody trusts. Attribution is a communication tool before it is an analytical one.",
    detail:"Brinson-style allocation / selection split across the discretionary sleeves, reconciled to custodian data before anything reaches a client page.",
    metrics:[["Frame","Allocation vs selection"],["Sleeves","Growth / Balanced / Income"],["Reconciled to","Custodian records"],["Output","Client-facing overview"]],
    risks:"Attribution that does not reconcile to custody is a story, not a result.",
    tags:["DPM","Client reporting"] }
];

window.SKILLS = [
  ["Derivatives & volatility", 92, "Options pricing, greeks, surface work, VRP strategy design"],
  ["Structured products", 90, "Autocallables, BRCs, FCNs — decomposition, pricing, term-sheet review"],
  ["Quantitative portfolio construction", 85, "Kelly sizing, mean-variance, shrinkage, drawdown budgeting"],
  ["Python & data tooling", 84, "pandas, NumPy, backtesting, Monte Carlo, reporting automation"],
  ["Macro & cross-asset research", 80, "Rates, FX, commodities, regime and correlation analysis"],
  ["Bloomberg / Pine Script / Excel", 88, "Terminal workflows, custom indicators, model building"]
];

/* ------------------------------------------------------------
   HEAT — cross-asset interaction grid
   Values are correlations of daily returns, illustrative seed data.
   Regenerate from your own price history with tools/build_correlations.py.
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
    "Equity–rates has flipped sign twice this cycle. When the 10y correlation to the S&P turns positive, the market is trading inflation risk; when it is negative, it is trading growth risk.",
    "Gold is doing two jobs at once — negatively correlated to real yields and positively correlated to EM equity. That is a debasement bid, not a fear bid.",
    "Copper is the cleanest cross-check on the EM equity rally. If copper stops confirming, the rally is liquidity, not demand.",
    "Credit and equity are moving together at 0.79. Credit stops confirming before equity does; it is the earlier warning of the two."
  ]
};

/* ------------------------------------------------------------
   EVENTS — the running log. Newest first.
   tone: "" | "watch" | "risk"
   ------------------------------------------------------------ */
window.EVENTS = [
  { date:"Aug 2026", tone:"", title:"Memory-cycle equity leadership goes global",
    body:"KOSPI +64% and TAIEX +62% year-to-date against an S&P 500 up 12.9%. Korea's index is now ~50% Information Technology and Taiwan's ~74%. Both markets have effectively become one leveraged expression of the AI hardware cycle.",
    read:"Country diversification is not sector diversification. An investor holding US, Korea and Taiwan owns one trade in three currencies." },

  { date:"Aug 2026", tone:"watch", title:"Japan's 10-year at 2.93% with policy at 1.00%",
    body:"The long end has repriced well ahead of the policy rate as the BoJ normalises. Domestic financials are 19% of TOPIX and have led the index to +31%.",
    read:"The yen carry trade's funding cost is no longer free. Watch cross-currency basis and JGB term premium before adding risk anywhere funded in yen." },

  { date:"Aug 2026", tone:"risk", title:"Indonesia down 23.7% — a single-market EM dislocation",
    body:"The IDX Composite is the worst major market of the year while broad EM is up. Financials are 47% of the index, so the drawdown is a domestic banking and currency story rather than a global risk-off one.",
    read:"Idiosyncratic EM drawdowns inside a rising EM index are where forced-seller opportunities appear — and where value traps live. Separate the two on funding, not on multiples." },

  { date:"Aug 2026", tone:"watch", title:"Türkiye: +29.6% nominal, negative in real terms",
    body:"BIST 100 up 29.6% with CPI at 31.75% and the policy rate at 37%. The nominal return is a currency illusion.",
    read:"Any screen ranking markets on nominal local-currency return will put Türkiye near the top. Always deflate, or convert to a hard currency, before ranking." },

  { date:"Aug 2026", tone:"", title:"UK and US long ends both above 4.6%",
    body:"Gilts at 5.05% and Treasuries at 4.68% with policy rates at 3.75% in both. Positively sloped curves with the term premium doing the work.",
    read:"A positive term premium changes the discount rate on long-duration equity. Growth multiples and 30-year gilts are the same trade seen from two ends." }
];

/* Small print shown under data-heavy sections. */
window.DISCLAIMER = "Figures are a curated snapshot as of " + window.META.asof +
  ", assembled from public sources for illustration and research. They are not investment advice, " +
  "not a live feed, and not the views of any employer. Verify before relying on any number here.";
