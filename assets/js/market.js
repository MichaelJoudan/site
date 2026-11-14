/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-14T02:29Z. */
window.MARKET = {
 "generated": "2026-11-14T02:29Z",
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
    0.93,
    0.78,
    0.02,
    0.13,
    -0.21,
    0.26,
    -0.51,
    0.48,
    0.42,
    -0.08,
    -0.85,
    0.51
   ],
   [
    0.93,
    1.0,
    0.88,
    0.16,
    0.2,
    -0.08,
    0.19,
    -0.42,
    0.53,
    0.39,
    -0.04,
    -0.78,
    0.46
   ],
   [
    0.78,
    0.88,
    1.0,
    0.1,
    0.13,
    -0.21,
    0.23,
    -0.43,
    0.63,
    0.4,
    -0.16,
    -0.7,
    0.4
   ],
   [
    0.02,
    0.16,
    0.1,
    1.0,
    0.82,
    0.43,
    -0.33,
    0.3,
    -0.07,
    -0.06,
    0.27,
    -0.09,
    -0.5
   ],
   [
    0.13,
    0.2,
    0.13,
    0.82,
    1.0,
    0.42,
    -0.34,
    0.08,
    -0.02,
    0.07,
    0.24,
    -0.22,
    -0.37
   ],
   [
    -0.21,
    -0.08,
    -0.21,
    0.43,
    0.42,
    1.0,
    -0.49,
    0.18,
    -0.24,
    -0.22,
    0.46,
    0.18,
    -0.44
   ],
   [
    0.26,
    0.19,
    0.23,
    -0.33,
    -0.34,
    -0.49,
    1.0,
    -0.29,
    0.38,
    0.45,
    -0.08,
    -0.18,
    0.43
   ],
   [
    -0.51,
    -0.42,
    -0.43,
    0.3,
    0.08,
    0.18,
    -0.29,
    1.0,
    -0.4,
    -0.32,
    0.14,
    0.4,
    -0.33
   ],
   [
    0.48,
    0.53,
    0.63,
    -0.07,
    -0.02,
    -0.24,
    0.38,
    -0.4,
    1.0,
    0.3,
    -0.14,
    -0.4,
    0.39
   ],
   [
    0.42,
    0.39,
    0.4,
    -0.06,
    0.07,
    -0.22,
    0.45,
    -0.32,
    0.3,
    1.0,
    0.03,
    -0.34,
    0.3
   ],
   [
    -0.08,
    -0.04,
    -0.16,
    0.27,
    0.24,
    0.46,
    -0.08,
    0.14,
    -0.14,
    0.03,
    1.0,
    0.06,
    -0.08
   ],
   [
    -0.85,
    -0.78,
    -0.7,
    -0.09,
    -0.22,
    0.18,
    -0.18,
    0.4,
    -0.4,
    -0.34,
    0.06,
    1.0,
    -0.48
   ],
   [
    0.51,
    0.46,
    0.4,
    -0.5,
    -0.37,
    -0.44,
    0.43,
    -0.33,
    0.39,
    0.3,
    -0.08,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-12",
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
   "v": 10.5,
   "asof": "2026-11-13",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.4,
   "asof": "2026-11-12",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 16.1,
   "asof": "2026-11-13",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -3.8,
   "asof": "2026-11-13",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 9.2,
   "asof": "2026-11-13",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 9.8,
   "asof": "2026-11-13",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 2.7,
   "asof": "2026-11-13",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 15.4,
   "asof": "2026-11-13",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 13.9,
   "asof": "2026-11-13",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 7.0,
   "asof": "2026-11-13",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 25.5,
   "asof": "2026-11-13",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 4.2,
   "asof": "2026-11-13",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 15.7,
   "asof": "2026-11-13",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 10.7,
   "asof": "2026-11-13",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -38.2,
   "asof": "2026-11-13",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 19.9,
   "asof": "2026-11-13",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 13.9,
   "asof": "2026-11-13",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 50.8,
   "asof": "2026-11-13",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 5.2,
   "asof": "2026-11-13",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 12.6,
   "asof": "2026-11-13",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -7.8,
   "asof": "2026-11-13",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 16.4,
   "asof": "2026-11-13",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -3.2,
   "asof": "2026-11-13",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 10.4,
   "asof": "2026-11-12",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
