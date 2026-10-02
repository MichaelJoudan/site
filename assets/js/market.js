/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-10-02T01:43Z. */
window.MARKET = {
 "generated": "2026-10-02T01:43Z",
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
    -0.45,
    -0.29,
    -0.29,
    0.28,
    -0.5,
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
    -0.33,
    -0.17,
    -0.2,
    0.24,
    -0.33,
    0.54,
    0.28,
    -0.17,
    -0.69,
    0.5
   ],
   [
    0.62,
    0.85,
    1.0,
    -0.33,
    -0.17,
    -0.27,
    0.25,
    -0.19,
    0.54,
    0.27,
    -0.19,
    -0.57,
    0.45
   ],
   [
    -0.45,
    -0.33,
    -0.33,
    1.0,
    0.79,
    0.33,
    -0.22,
    0.59,
    -0.24,
    -0.16,
    0.18,
    0.45,
    -0.75
   ],
   [
    -0.29,
    -0.17,
    -0.17,
    0.79,
    1.0,
    0.48,
    -0.29,
    0.38,
    -0.19,
    -0.05,
    0.24,
    0.32,
    -0.6
   ],
   [
    -0.29,
    -0.2,
    -0.27,
    0.33,
    0.48,
    1.0,
    -0.46,
    0.03,
    -0.33,
    -0.28,
    0.62,
    0.32,
    -0.38
   ],
   [
    0.28,
    0.24,
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
    -0.5,
    -0.33,
    -0.19,
    0.59,
    0.38,
    0.03,
    -0.11,
    1.0,
    -0.24,
    -0.16,
    0.18,
    0.44,
    -0.44
   ],
   [
    0.45,
    0.54,
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
    0.28,
    0.27,
    -0.16,
    -0.05,
    -0.28,
    0.49,
    -0.16,
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
    0.24,
    0.62,
    -0.19,
    0.18,
    -0.23,
    -0.04,
    1.0,
    0.29,
    -0.18
   ],
   [
    -0.8,
    -0.69,
    -0.57,
    0.45,
    0.32,
    0.32,
    -0.29,
    0.44,
    -0.42,
    -0.22,
    0.29,
    1.0,
    -0.61
   ],
   [
    0.57,
    0.5,
    0.45,
    -0.75,
    -0.6,
    -0.38,
    0.34,
    -0.44,
    0.45,
    0.27,
    -0.18,
    -0.61,
    1.0
   ]
  ],
  "asof": "2026-09-30",
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
   "v": 12.0,
   "asof": "2026-10-01",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -6.8,
   "asof": "2026-09-30",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 20.3,
   "asof": "2026-10-02",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -14.2,
   "asof": "2026-10-01",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 1.8,
   "asof": "2026-10-01",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 5.0,
   "asof": "2026-10-01",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -3.9,
   "asof": "2026-10-01",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.8,
   "asof": "2026-10-01",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 10.9,
   "asof": "2026-10-01",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 16.2,
   "asof": "2026-10-01",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 65.3,
   "asof": "2026-10-02",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -0.9,
   "asof": "2026-10-02",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.8,
   "asof": "2026-10-01",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": -0.7,
   "asof": "2026-10-01",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -30.5,
   "asof": "2026-10-01",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 15.9,
   "asof": "2026-10-01",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 2.7,
   "asof": "2026-10-01",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 66.9,
   "asof": "2026-10-02",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 8.8,
   "asof": "2026-10-01",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 21.6,
   "asof": "2026-10-02",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.0,
   "asof": "2026-09-30",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 11.9,
   "asof": "2026-10-01",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -7.2,
   "asof": "2026-10-01",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 3.6,
   "asof": "2026-10-01",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
