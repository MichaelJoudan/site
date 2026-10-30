/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-30T02:00Z. */
window.MARKET = {
 "generated": "2026-10-30T02:00Z",
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
    0.89,
    0.67,
    -0.23,
    -0.13,
    -0.23,
    0.36,
    -0.58,
    0.48,
    0.37,
    -0.22,
    -0.79,
    0.52
   ],
   [
    0.89,
    1.0,
    0.84,
    -0.04,
    -0.02,
    -0.13,
    0.32,
    -0.41,
    0.57,
    0.39,
    -0.15,
    -0.7,
    0.44
   ],
   [
    0.67,
    0.84,
    1.0,
    -0.03,
    -0.04,
    -0.25,
    0.32,
    -0.27,
    0.64,
    0.39,
    -0.21,
    -0.6,
    0.37
   ],
   [
    -0.23,
    -0.04,
    -0.03,
    1.0,
    0.78,
    0.33,
    -0.24,
    0.4,
    -0.1,
    -0.07,
    0.25,
    0.19,
    -0.62
   ],
   [
    -0.13,
    -0.02,
    -0.04,
    0.78,
    1.0,
    0.42,
    -0.27,
    0.24,
    -0.08,
    0.05,
    0.26,
    0.11,
    -0.46
   ],
   [
    -0.23,
    -0.13,
    -0.25,
    0.33,
    0.42,
    1.0,
    -0.39,
    -0.03,
    -0.15,
    -0.2,
    0.57,
    0.28,
    -0.42
   ],
   [
    0.36,
    0.32,
    0.32,
    -0.24,
    -0.27,
    -0.39,
    1.0,
    -0.09,
    0.38,
    0.48,
    -0.08,
    -0.41,
    0.42
   ],
   [
    -0.58,
    -0.41,
    -0.27,
    0.4,
    0.24,
    -0.03,
    -0.09,
    1.0,
    -0.35,
    -0.19,
    0.17,
    0.47,
    -0.42
   ],
   [
    0.48,
    0.57,
    0.64,
    -0.1,
    -0.08,
    -0.15,
    0.38,
    -0.35,
    1.0,
    0.29,
    -0.14,
    -0.5,
    0.44
   ],
   [
    0.37,
    0.39,
    0.39,
    -0.07,
    0.05,
    -0.2,
    0.48,
    -0.19,
    0.29,
    1.0,
    0.05,
    -0.28,
    0.25
   ],
   [
    -0.22,
    -0.15,
    -0.21,
    0.25,
    0.26,
    0.57,
    -0.08,
    0.17,
    -0.14,
    0.05,
    1.0,
    0.24,
    -0.15
   ],
   [
    -0.79,
    -0.7,
    -0.6,
    0.19,
    0.11,
    0.28,
    -0.41,
    0.47,
    -0.5,
    -0.28,
    0.24,
    1.0,
    -0.55
   ],
   [
    0.52,
    0.44,
    0.37,
    -0.62,
    -0.46,
    -0.42,
    0.42,
    -0.42,
    0.44,
    0.25,
    -0.15,
    -0.55,
    1.0
   ]
  ],
  "asof": "2026-10-28",
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
   "v": 12.8,
   "asof": "2026-10-29",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -14.3,
   "asof": "2026-10-30",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.1,
   "asof": "2026-10-30",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.2,
   "asof": "2026-10-29",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 6.3,
   "asof": "2026-10-29",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.0,
   "asof": "2026-10-29",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -2.2,
   "asof": "2026-10-29",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.3,
   "asof": "2026-10-29",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.3,
   "asof": "2026-10-29",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 5.0,
   "asof": "2026-10-29",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 34.0,
   "asof": "2026-10-30",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 2.6,
   "asof": "2026-10-30",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.0,
   "asof": "2026-10-29",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 8.5,
   "asof": "2026-10-29",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -41.0,
   "asof": "2026-10-29",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 20.1,
   "asof": "2026-10-29",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.2,
   "asof": "2026-10-29",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 55.8,
   "asof": "2026-10-30",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -0.9,
   "asof": "2026-10-28",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 15.7,
   "asof": "2026-10-30",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -9.7,
   "asof": "2026-10-30",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.8,
   "asof": "2026-10-29",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.7,
   "asof": "2026-10-29",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 0.6,
   "asof": "2026-10-29",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
