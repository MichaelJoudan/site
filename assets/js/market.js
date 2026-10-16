/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-16T00:28Z. */
window.MARKET = {
 "generated": "2026-10-16T00:28Z",
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
    0.87,
    0.64,
    -0.37,
    -0.27,
    -0.28,
    0.35,
    -0.55,
    0.51,
    0.34,
    -0.26,
    -0.78,
    0.55
   ],
   [
    0.87,
    1.0,
    0.85,
    -0.25,
    -0.2,
    -0.21,
    0.29,
    -0.4,
    0.55,
    0.33,
    -0.18,
    -0.67,
    0.48
   ],
   [
    0.64,
    0.85,
    1.0,
    -0.27,
    -0.23,
    -0.34,
    0.31,
    -0.28,
    0.58,
    0.34,
    -0.22,
    -0.56,
    0.46
   ],
   [
    -0.37,
    -0.25,
    -0.27,
    1.0,
    0.79,
    0.33,
    -0.37,
    0.52,
    -0.3,
    -0.2,
    0.18,
    0.37,
    -0.65
   ],
   [
    -0.27,
    -0.2,
    -0.23,
    0.79,
    1.0,
    0.44,
    -0.43,
    0.38,
    -0.24,
    -0.07,
    0.22,
    0.3,
    -0.52
   ],
   [
    -0.28,
    -0.21,
    -0.34,
    0.33,
    0.44,
    1.0,
    -0.43,
    0.02,
    -0.25,
    -0.23,
    0.6,
    0.36,
    -0.51
   ],
   [
    0.35,
    0.29,
    0.31,
    -0.37,
    -0.43,
    -0.43,
    1.0,
    -0.18,
    0.39,
    0.49,
    -0.15,
    -0.43,
    0.45
   ],
   [
    -0.55,
    -0.4,
    -0.28,
    0.52,
    0.38,
    0.02,
    -0.18,
    1.0,
    -0.35,
    -0.2,
    0.2,
    0.49,
    -0.42
   ],
   [
    0.51,
    0.55,
    0.58,
    -0.3,
    -0.24,
    -0.25,
    0.39,
    -0.35,
    1.0,
    0.28,
    -0.21,
    -0.51,
    0.54
   ],
   [
    0.34,
    0.33,
    0.34,
    -0.2,
    -0.07,
    -0.23,
    0.49,
    -0.2,
    0.28,
    1.0,
    -0.01,
    -0.26,
    0.29
   ],
   [
    -0.26,
    -0.18,
    -0.22,
    0.18,
    0.22,
    0.6,
    -0.15,
    0.2,
    -0.21,
    -0.01,
    1.0,
    0.32,
    -0.18
   ],
   [
    -0.78,
    -0.67,
    -0.56,
    0.37,
    0.3,
    0.36,
    -0.43,
    0.49,
    -0.51,
    -0.26,
    0.32,
    1.0,
    -0.59
   ],
   [
    0.55,
    0.48,
    0.46,
    -0.65,
    -0.52,
    -0.51,
    0.45,
    -0.42,
    0.54,
    0.29,
    -0.18,
    -0.59,
    1.0
   ]
  ],
  "asof": "2026-10-14",
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
   "asof": "2026-10-15",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -9.7,
   "asof": "2026-10-14",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 19.2,
   "asof": "2026-10-16",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.4,
   "asof": "2026-10-14",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.3,
   "asof": "2026-10-14",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.0,
   "asof": "2026-10-14",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.4,
   "asof": "2026-10-14",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 10.7,
   "asof": "2026-10-14",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.0,
   "asof": "2026-10-15",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 26.8,
   "asof": "2026-10-15",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 34.1,
   "asof": "2026-10-16",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.0,
   "asof": "2026-10-16",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.1,
   "asof": "2026-10-14",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 5.2,
   "asof": "2026-10-15",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -31.3,
   "asof": "2026-10-14",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.5,
   "asof": "2026-10-14",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 6.5,
   "asof": "2026-10-14",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 67.9,
   "asof": "2026-10-14",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 7.6,
   "asof": "2026-10-14",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.7,
   "asof": "2026-10-14",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -5.1,
   "asof": "2026-10-14",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.6,
   "asof": "2026-10-14",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -6.7,
   "asof": "2026-10-14",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.1,
   "asof": "2026-10-14",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
