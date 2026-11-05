/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-05T02:33Z. */
window.MARKET = {
 "generated": "2026-11-05T02:33Z",
 "heat": {
  "window": "60-day rolling, daily returns",
  "assets": [
   "S&P 500",
   "Nasdaq 100",
   "MSCI EM",
   "US 10y yield",
   "US 2y yield",
   "DXY",
   "Gold",
   "Brent",
   "Copper",
   "Bitcoin",
   "USDJPY",
   "VIX",
   "HY credit"
  ],
  "matrix": [
   [
    1.0,
    0.9,
    0.69,
    -0.14,
    -0.05,
    -0.15,
    0.4,
    -0.48,
    0.48,
    0.4,
    -0.2,
    -0.79,
    0.52
   ],
   [
    0.9,
    1.0,
    0.84,
    0.06,
    0.07,
    -0.05,
    0.34,
    -0.32,
    0.55,
    0.4,
    -0.12,
    -0.72,
    0.45
   ],
   [
    0.69,
    0.84,
    1.0,
    0.04,
    0.05,
    -0.19,
    0.34,
    -0.27,
    0.64,
    0.39,
    -0.19,
    -0.6,
    0.34
   ],
   [
    -0.14,
    0.06,
    0.04,
    1.0,
    0.78,
    0.32,
    -0.19,
    0.39,
    -0.08,
    -0.0,
    0.24,
    0.1,
    -0.52
   ],
   [
    -0.05,
    0.07,
    0.05,
    0.78,
    1.0,
    0.38,
    -0.2,
    0.19,
    -0.02,
    0.12,
    0.25,
    0.03,
    -0.41
   ],
   [
    -0.15,
    -0.05,
    -0.19,
    0.32,
    0.38,
    1.0,
    -0.36,
    -0.02,
    -0.14,
    -0.16,
    0.58,
    0.18,
    -0.35
   ],
   [
    0.4,
    0.34,
    0.34,
    -0.19,
    -0.2,
    -0.36,
    1.0,
    -0.18,
    0.41,
    0.43,
    -0.08,
    -0.41,
    0.35
   ],
   [
    -0.48,
    -0.32,
    -0.27,
    0.39,
    0.19,
    -0.02,
    -0.18,
    1.0,
    -0.35,
    -0.18,
    0.16,
    0.34,
    -0.25
   ],
   [
    0.48,
    0.55,
    0.64,
    -0.08,
    -0.02,
    -0.14,
    0.41,
    -0.35,
    1.0,
    0.28,
    -0.14,
    -0.48,
    0.36
   ],
   [
    0.4,
    0.4,
    0.39,
    -0.0,
    0.12,
    -0.16,
    0.43,
    -0.18,
    0.28,
    1.0,
    0.06,
    -0.31,
    0.24
   ],
   [
    -0.2,
    -0.12,
    -0.19,
    0.24,
    0.25,
    0.58,
    -0.08,
    0.16,
    -0.14,
    0.06,
    1.0,
    0.22,
    -0.14
   ],
   [
    -0.79,
    -0.72,
    -0.6,
    0.1,
    0.03,
    0.18,
    -0.41,
    0.34,
    -0.48,
    -0.31,
    0.22,
    1.0,
    -0.57
   ],
   [
    0.52,
    0.45,
    0.34,
    -0.52,
    -0.41,
    -0.35,
    0.35,
    -0.25,
    0.36,
    0.24,
    -0.14,
    -0.57,
    1.0
   ]
  ],
  "asof": "2026-11-03",
  "obs": 60,
  "sources": {
   "S&P 500": "yahoo:^GSPC",
   "Nasdaq 100": "yahoo:^NDX",
   "MSCI EM": "yahoo:EEM",
   "US 10y yield": "fred:DGS10",
   "US 2y yield": "fred:DGS2",
   "DXY": "yahoo:DX-Y.NYB",
   "Gold": "yahoo:GC=F",
   "Brent": "yahoo:BZ=F",
   "Copper": "yahoo:HG=F",
   "Bitcoin": "yahoo:BTC-USD",
   "USDJPY": "yahoo:JPY=X",
   "VIX": "fred:VIXCLS",
   "HY credit": "yahoo:HYG"
  }
 },
 "ytd": {
  "USA": {
   "v": 12.3,
   "asof": "2026-11-04",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -11.6,
   "asof": "2026-11-05",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.3,
   "asof": "2026-11-05",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -8.3,
   "asof": "2026-11-04",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 8.0,
   "asof": "2026-11-04",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 9.0,
   "asof": "2026-11-04",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 0.3,
   "asof": "2026-11-04",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 13.5,
   "asof": "2026-11-04",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.6,
   "asof": "2026-11-04",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 4.0,
   "asof": "2026-11-04",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 30.4,
   "asof": "2026-11-05",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 3.3,
   "asof": "2026-11-05",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.9,
   "asof": "2026-11-04",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 10.1,
   "asof": "2026-11-04",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -41.6,
   "asof": "2026-11-05",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.4,
   "asof": "2026-11-04",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 13.2,
   "asof": "2026-11-04",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 46.1,
   "asof": "2026-11-05",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 1.9,
   "asof": "2026-11-04",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 14.1,
   "asof": "2026-11-05",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -3.9,
   "asof": "2026-11-05",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.9,
   "asof": "2026-11-04",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.3,
   "asof": "2026-11-03",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 5.6,
   "asof": "2026-11-04",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
