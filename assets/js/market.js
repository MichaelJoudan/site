/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-17T00:33Z. */
window.MARKET = {
 "generated": "2026-10-17T00:33Z",
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
    0.86,
    0.63,
    -0.39,
    -0.28,
    -0.28,
    0.35,
    -0.56,
    0.49,
    0.37,
    -0.28,
    -0.78,
    0.55
   ],
   [
    0.86,
    1.0,
    0.84,
    -0.27,
    -0.22,
    -0.21,
    0.29,
    -0.4,
    0.54,
    0.36,
    -0.21,
    -0.66,
    0.47
   ],
   [
    0.63,
    0.84,
    1.0,
    -0.26,
    -0.23,
    -0.32,
    0.3,
    -0.27,
    0.57,
    0.36,
    -0.24,
    -0.55,
    0.43
   ],
   [
    -0.39,
    -0.27,
    -0.26,
    1.0,
    0.8,
    0.37,
    -0.39,
    0.52,
    -0.27,
    -0.18,
    0.16,
    0.39,
    -0.68
   ],
   [
    -0.28,
    -0.22,
    -0.23,
    0.8,
    1.0,
    0.45,
    -0.44,
    0.38,
    -0.23,
    -0.06,
    0.21,
    0.32,
    -0.54
   ],
   [
    -0.28,
    -0.21,
    -0.32,
    0.37,
    0.45,
    1.0,
    -0.45,
    0.03,
    -0.22,
    -0.23,
    0.58,
    0.37,
    -0.53
   ],
   [
    0.35,
    0.29,
    0.3,
    -0.39,
    -0.44,
    -0.45,
    1.0,
    -0.18,
    0.37,
    0.49,
    -0.14,
    -0.44,
    0.46
   ],
   [
    -0.56,
    -0.4,
    -0.27,
    0.52,
    0.38,
    0.03,
    -0.18,
    1.0,
    -0.34,
    -0.2,
    0.2,
    0.49,
    -0.42
   ],
   [
    0.49,
    0.54,
    0.57,
    -0.27,
    -0.23,
    -0.22,
    0.37,
    -0.34,
    1.0,
    0.3,
    -0.23,
    -0.49,
    0.48
   ],
   [
    0.37,
    0.36,
    0.36,
    -0.18,
    -0.06,
    -0.23,
    0.49,
    -0.2,
    0.3,
    1.0,
    0.01,
    -0.29,
    0.29
   ],
   [
    -0.28,
    -0.21,
    -0.24,
    0.16,
    0.21,
    0.58,
    -0.14,
    0.2,
    -0.23,
    0.01,
    1.0,
    0.34,
    -0.17
   ],
   [
    -0.78,
    -0.66,
    -0.55,
    0.39,
    0.32,
    0.37,
    -0.44,
    0.49,
    -0.49,
    -0.29,
    0.34,
    1.0,
    -0.59
   ],
   [
    0.55,
    0.47,
    0.43,
    -0.68,
    -0.54,
    -0.53,
    0.46,
    -0.42,
    0.48,
    0.29,
    -0.17,
    -0.59,
    1.0
   ]
  ],
  "asof": "2026-10-15",
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
   "v": 11.9,
   "asof": "2026-10-16",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -10.8,
   "asof": "2026-10-15",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 19.7,
   "asof": "2026-10-16",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -12.0,
   "asof": "2026-10-15",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.6,
   "asof": "2026-10-15",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 9.2,
   "asof": "2026-10-15",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -2.6,
   "asof": "2026-10-15",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 9.9,
   "asof": "2026-10-15",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.1,
   "asof": "2026-10-16",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 27.5,
   "asof": "2026-10-16",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 31.8,
   "asof": "2026-10-15",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 1.1,
   "asof": "2026-10-16",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 10.8,
   "asof": "2026-10-15",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 7.2,
   "asof": "2026-10-16",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -32.2,
   "asof": "2026-10-15",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.1,
   "asof": "2026-10-15",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 8.2,
   "asof": "2026-10-15",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 62.2,
   "asof": "2026-10-15",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 7.2,
   "asof": "2026-10-15",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 16.3,
   "asof": "2026-10-15",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -6.1,
   "asof": "2026-10-15",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 12.9,
   "asof": "2026-10-15",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.2,
   "asof": "2026-10-15",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.3,
   "asof": "2026-10-15",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
