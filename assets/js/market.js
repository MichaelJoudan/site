/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-03T03:29Z. */
window.MARKET = {
 "generated": "2026-11-03T03:29Z",
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
    -0.17,
    -0.07,
    -0.18,
    0.41,
    -0.57,
    0.51,
    0.37,
    -0.21,
    -0.8,
    0.51
   ],
   [
    0.9,
    1.0,
    0.85,
    0.03,
    0.06,
    -0.08,
    0.37,
    -0.41,
    0.59,
    0.39,
    -0.14,
    -0.73,
    0.43
   ],
   [
    0.69,
    0.85,
    1.0,
    0.03,
    0.03,
    -0.21,
    0.35,
    -0.28,
    0.65,
    0.39,
    -0.2,
    -0.62,
    0.36
   ],
   [
    -0.17,
    0.03,
    0.03,
    1.0,
    0.79,
    0.32,
    -0.18,
    0.4,
    -0.05,
    -0.01,
    0.24,
    0.13,
    -0.59
   ],
   [
    -0.07,
    0.06,
    0.03,
    0.79,
    1.0,
    0.4,
    -0.2,
    0.25,
    -0.02,
    0.12,
    0.26,
    0.04,
    -0.42
   ],
   [
    -0.18,
    -0.08,
    -0.21,
    0.32,
    0.4,
    1.0,
    -0.35,
    -0.03,
    -0.13,
    -0.16,
    0.58,
    0.23,
    -0.39
   ],
   [
    0.41,
    0.37,
    0.35,
    -0.18,
    -0.2,
    -0.35,
    1.0,
    -0.11,
    0.4,
    0.46,
    -0.08,
    -0.45,
    0.42
   ],
   [
    -0.57,
    -0.41,
    -0.28,
    0.4,
    0.25,
    -0.03,
    -0.11,
    1.0,
    -0.36,
    -0.19,
    0.17,
    0.48,
    -0.43
   ],
   [
    0.51,
    0.59,
    0.65,
    -0.05,
    -0.02,
    -0.13,
    0.4,
    -0.36,
    1.0,
    0.29,
    -0.14,
    -0.52,
    0.44
   ],
   [
    0.37,
    0.39,
    0.39,
    -0.01,
    0.12,
    -0.16,
    0.46,
    -0.19,
    0.29,
    1.0,
    0.05,
    -0.28,
    0.23
   ],
   [
    -0.21,
    -0.14,
    -0.2,
    0.24,
    0.26,
    0.58,
    -0.08,
    0.17,
    -0.14,
    0.05,
    1.0,
    0.23,
    -0.15
   ],
   [
    -0.8,
    -0.73,
    -0.62,
    0.13,
    0.04,
    0.23,
    -0.45,
    0.48,
    -0.52,
    -0.28,
    0.23,
    1.0,
    -0.54
   ],
   [
    0.51,
    0.43,
    0.36,
    -0.59,
    -0.42,
    -0.39,
    0.42,
    -0.43,
    0.44,
    0.23,
    -0.15,
    -0.54,
    1.0
   ]
  ],
  "asof": "2026-10-30",
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
   "v": 10.2,
   "asof": "2026-11-02",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.9,
   "asof": "2026-11-03",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 15.4,
   "asof": "2026-11-02",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -10.3,
   "asof": "2026-11-02",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 6.1,
   "asof": "2026-11-02",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.4,
   "asof": "2026-11-02",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -1.2,
   "asof": "2026-11-02",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.1,
   "asof": "2026-11-02",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.9,
   "asof": "2026-11-02",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 4.2,
   "asof": "2026-10-30",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 34.5,
   "asof": "2026-11-03",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.7,
   "asof": "2026-11-03",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.5,
   "asof": "2026-11-02",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.5,
   "asof": "2026-10-30",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -41.8,
   "asof": "2026-11-03",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.1,
   "asof": "2026-11-02",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.6,
   "asof": "2026-11-02",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 52.5,
   "asof": "2026-11-03",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -2.7,
   "asof": "2026-11-02",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 13.6,
   "asof": "2026-11-03",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -8.3,
   "asof": "2026-11-03",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.0,
   "asof": "2026-11-02",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.1,
   "asof": "2026-11-02",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.5,
   "asof": "2026-11-02",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
