/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-09-26T03:06Z. */
window.MARKET = {
 "generated": "2026-09-26T03:06Z",
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
    -0.42,
    -0.26,
    -0.27,
    0.39,
    -0.52,
    0.48,
    0.36,
    -0.25,
    -0.84,
    0.6
   ],
   [
    0.89,
    1.0,
    0.87,
    -0.31,
    -0.16,
    -0.2,
    0.34,
    -0.35,
    0.55,
    0.35,
    -0.18,
    -0.75,
    0.54
   ],
   [
    0.67,
    0.87,
    1.0,
    -0.33,
    -0.17,
    -0.26,
    0.31,
    -0.23,
    0.56,
    0.31,
    -0.18,
    -0.63,
    0.51
   ],
   [
    -0.42,
    -0.31,
    -0.33,
    1.0,
    0.8,
    0.28,
    -0.1,
    0.59,
    -0.17,
    -0.12,
    0.17,
    0.43,
    -0.72
   ],
   [
    -0.26,
    -0.16,
    -0.17,
    0.8,
    1.0,
    0.46,
    -0.18,
    0.37,
    -0.14,
    -0.02,
    0.24,
    0.3,
    -0.59
   ],
   [
    -0.27,
    -0.2,
    -0.26,
    0.28,
    0.46,
    1.0,
    -0.45,
    0.06,
    -0.34,
    -0.27,
    0.61,
    0.31,
    -0.36
   ],
   [
    0.39,
    0.34,
    0.31,
    -0.1,
    -0.18,
    -0.45,
    1.0,
    -0.2,
    0.52,
    0.49,
    -0.21,
    -0.4,
    0.27
   ],
   [
    -0.52,
    -0.35,
    -0.23,
    0.59,
    0.37,
    0.06,
    -0.2,
    1.0,
    -0.31,
    -0.18,
    0.14,
    0.46,
    -0.48
   ],
   [
    0.48,
    0.55,
    0.56,
    -0.17,
    -0.14,
    -0.34,
    0.52,
    -0.31,
    1.0,
    0.31,
    -0.26,
    -0.46,
    0.41
   ],
   [
    0.36,
    0.35,
    0.31,
    -0.12,
    -0.02,
    -0.27,
    0.49,
    -0.18,
    0.31,
    1.0,
    -0.05,
    -0.28,
    0.26
   ],
   [
    -0.25,
    -0.18,
    -0.18,
    0.17,
    0.24,
    0.61,
    -0.21,
    0.14,
    -0.26,
    -0.05,
    1.0,
    0.27,
    -0.19
   ],
   [
    -0.84,
    -0.75,
    -0.63,
    0.43,
    0.3,
    0.31,
    -0.4,
    0.46,
    -0.46,
    -0.28,
    0.27,
    1.0,
    -0.63
   ],
   [
    0.6,
    0.54,
    0.51,
    -0.72,
    -0.59,
    -0.36,
    0.27,
    -0.48,
    0.41,
    0.26,
    -0.19,
    -0.63,
    1.0
   ]
  ],
  "asof": "2026-09-22",
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
   "v": 13.1,
   "asof": "2026-09-25",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -5.0,
   "asof": "2026-09-24",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.2,
   "asof": "2026-09-25",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -11.4,
   "asof": "2026-09-25",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.7,
   "asof": "2026-09-25",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.7,
   "asof": "2026-09-25",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.9,
   "asof": "2026-09-25",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.4,
   "asof": "2026-09-25",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.9,
   "asof": "2026-09-25",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 13.9,
   "asof": "2026-09-25",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 68.0,
   "asof": "2026-09-23",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.6,
   "asof": "2026-09-25",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 13.8,
   "asof": "2026-09-25",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 1.1,
   "asof": "2026-09-25",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -27.8,
   "asof": "2026-09-25",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 16.9,
   "asof": "2026-09-25",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 5.1,
   "asof": "2026-09-25",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 65.8,
   "asof": "2026-09-24",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 14.5,
   "asof": "2026-09-25",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 22.9,
   "asof": "2026-09-25",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.4,
   "asof": "2026-09-25",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.3,
   "asof": "2026-09-25",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -4.5,
   "asof": "2026-09-25",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 5.9,
   "asof": "2026-09-25",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
