/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-07T01:59Z. */
window.MARKET = {
 "generated": "2026-11-07T01:59Z",
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
    0.92,
    0.75,
    -0.06,
    0.1,
    -0.17,
    0.32,
    -0.5,
    0.49,
    0.48,
    -0.15,
    -0.85,
    0.52
   ],
   [
    0.92,
    1.0,
    0.87,
    0.11,
    0.18,
    -0.07,
    0.25,
    -0.36,
    0.54,
    0.47,
    -0.11,
    -0.76,
    0.45
   ],
   [
    0.75,
    0.87,
    1.0,
    0.09,
    0.14,
    -0.21,
    0.26,
    -0.32,
    0.63,
    0.45,
    -0.19,
    -0.66,
    0.37
   ],
   [
    -0.06,
    0.11,
    0.09,
    1.0,
    0.78,
    0.33,
    -0.26,
    0.38,
    -0.06,
    0.01,
    0.22,
    -0.02,
    -0.5
   ],
   [
    0.1,
    0.18,
    0.14,
    0.78,
    1.0,
    0.37,
    -0.26,
    0.15,
    0.01,
    0.17,
    0.23,
    -0.16,
    -0.37
   ],
   [
    -0.17,
    -0.07,
    -0.21,
    0.33,
    0.37,
    1.0,
    -0.4,
    0.03,
    -0.17,
    -0.19,
    0.55,
    0.17,
    -0.38
   ],
   [
    0.32,
    0.25,
    0.26,
    -0.26,
    -0.26,
    -0.4,
    1.0,
    -0.26,
    0.38,
    0.43,
    -0.06,
    -0.23,
    0.41
   ],
   [
    -0.5,
    -0.36,
    -0.32,
    0.38,
    0.15,
    0.03,
    -0.26,
    1.0,
    -0.39,
    -0.24,
    0.12,
    0.38,
    -0.34
   ],
   [
    0.49,
    0.54,
    0.63,
    -0.06,
    0.01,
    -0.17,
    0.38,
    -0.39,
    1.0,
    0.3,
    -0.17,
    -0.42,
    0.37
   ],
   [
    0.48,
    0.47,
    0.45,
    0.01,
    0.17,
    -0.19,
    0.43,
    -0.24,
    0.3,
    1.0,
    0.06,
    -0.41,
    0.3
   ],
   [
    -0.15,
    -0.11,
    -0.19,
    0.22,
    0.23,
    0.55,
    -0.06,
    0.12,
    -0.17,
    0.06,
    1.0,
    0.11,
    -0.1
   ],
   [
    -0.85,
    -0.76,
    -0.66,
    -0.02,
    -0.16,
    0.17,
    -0.23,
    0.38,
    -0.42,
    -0.41,
    0.11,
    1.0,
    -0.5
   ],
   [
    0.52,
    0.45,
    0.37,
    -0.5,
    -0.37,
    -0.38,
    0.41,
    -0.34,
    0.37,
    0.3,
    -0.1,
    -0.5,
    1.0
   ]
  ],
  "asof": "2026-11-05",
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
   "v": 7.8,
   "asof": "2026-11-06",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -11.7,
   "asof": "2026-11-05",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 8.6,
   "asof": "2026-11-06",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -4.2,
   "asof": "2026-11-06",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 5.4,
   "asof": "2026-11-06",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 7.5,
   "asof": "2026-11-06",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -0.1,
   "asof": "2026-11-06",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 11.4,
   "asof": "2026-11-06",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 12.9,
   "asof": "2026-11-06",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 4.6,
   "asof": "2026-11-06",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 20.1,
   "asof": "2026-11-06",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 3.5,
   "asof": "2026-11-06",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 11.9,
   "asof": "2026-11-06",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 11.0,
   "asof": "2026-11-06",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -41.6,
   "asof": "2026-11-06",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 17.8,
   "asof": "2026-11-06",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 11.5,
   "asof": "2026-11-06",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 37.1,
   "asof": "2026-11-06",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 2.0,
   "asof": "2026-11-06",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 11.5,
   "asof": "2026-11-06",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.5,
   "asof": "2026-11-06",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 13.4,
   "asof": "2026-11-06",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -3.0,
   "asof": "2026-11-06",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 2.8,
   "asof": "2026-11-05",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
