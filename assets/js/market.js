/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-01T01:19Z. */
window.MARKET = {
 "generated": "2026-10-01T01:19Z",
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
    0.62,
    -0.43,
    -0.28,
    -0.28,
    0.28,
    -0.47,
    0.45,
    0.32,
    -0.27,
    -0.8,
    0.57
   ],
   [
    0.87,
    1.0,
    0.85,
    -0.3,
    -0.16,
    -0.19,
    0.23,
    -0.28,
    0.53,
    0.29,
    -0.17,
    -0.68,
    0.49
   ],
   [
    0.62,
    0.85,
    1.0,
    -0.31,
    -0.17,
    -0.26,
    0.25,
    -0.17,
    0.54,
    0.27,
    -0.19,
    -0.57,
    0.45
   ],
   [
    -0.43,
    -0.3,
    -0.31,
    1.0,
    0.79,
    0.33,
    -0.22,
    0.6,
    -0.24,
    -0.15,
    0.18,
    0.44,
    -0.75
   ],
   [
    -0.28,
    -0.16,
    -0.17,
    0.79,
    1.0,
    0.48,
    -0.29,
    0.39,
    -0.19,
    -0.04,
    0.23,
    0.32,
    -0.6
   ],
   [
    -0.28,
    -0.19,
    -0.26,
    0.33,
    0.48,
    1.0,
    -0.46,
    0.04,
    -0.33,
    -0.28,
    0.62,
    0.32,
    -0.38
   ],
   [
    0.28,
    0.23,
    0.25,
    -0.22,
    -0.29,
    -0.46,
    1.0,
    -0.11,
    0.49,
    0.49,
    -0.19,
    -0.29,
    0.34
   ],
   [
    -0.47,
    -0.28,
    -0.17,
    0.6,
    0.39,
    0.04,
    -0.11,
    1.0,
    -0.24,
    -0.15,
    0.17,
    0.43,
    -0.44
   ],
   [
    0.45,
    0.53,
    0.54,
    -0.24,
    -0.19,
    -0.33,
    0.49,
    -0.24,
    1.0,
    0.3,
    -0.23,
    -0.42,
    0.45
   ],
   [
    0.32,
    0.29,
    0.27,
    -0.15,
    -0.04,
    -0.28,
    0.49,
    -0.15,
    0.3,
    1.0,
    -0.04,
    -0.22,
    0.27
   ],
   [
    -0.27,
    -0.17,
    -0.19,
    0.18,
    0.23,
    0.62,
    -0.19,
    0.17,
    -0.23,
    -0.04,
    1.0,
    0.29,
    -0.17
   ],
   [
    -0.8,
    -0.68,
    -0.57,
    0.44,
    0.32,
    0.32,
    -0.29,
    0.43,
    -0.42,
    -0.22,
    0.29,
    1.0,
    -0.6
   ],
   [
    0.57,
    0.49,
    0.45,
    -0.75,
    -0.6,
    -0.38,
    0.34,
    -0.44,
    0.45,
    0.27,
    -0.17,
    -0.6,
    1.0
   ]
  ],
  "asof": "2026-09-29",
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
   "v": 11.8,
   "asof": "2026-09-30",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -7.1,
   "asof": "2026-09-29",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.1,
   "asof": "2026-10-01",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -13.1,
   "asof": "2026-09-29",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 3.7,
   "asof": "2026-09-29",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.1,
   "asof": "2026-09-29",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -1.4,
   "asof": "2026-09-29",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.3,
   "asof": "2026-09-29",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 11.1,
   "asof": "2026-09-30",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 15.6,
   "asof": "2026-09-30",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 62.1,
   "asof": "2026-10-01",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.5,
   "asof": "2026-10-01",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 12.8,
   "asof": "2026-09-29",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": -0.1,
   "asof": "2026-09-30",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -29.2,
   "asof": "2026-09-29",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.8,
   "asof": "2026-09-29",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 4.9,
   "asof": "2026-09-29",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 64.5,
   "asof": "2026-09-29",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 9.1,
   "asof": "2026-09-29",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 21.8,
   "asof": "2026-10-01",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.3,
   "asof": "2026-09-29",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.0,
   "asof": "2026-09-29",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -5.8,
   "asof": "2026-09-29",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 5.6,
   "asof": "2026-09-29",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
