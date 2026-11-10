/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-10T04:10Z. */
window.MARKET = {
 "generated": "2026-11-10T04:10Z",
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
    0.91,
    0.75,
    -0.04,
    0.12,
    -0.13,
    0.29,
    -0.49,
    0.47,
    0.47,
    -0.14,
    -0.84,
    0.51
   ],
   [
    0.91,
    1.0,
    0.87,
    0.13,
    0.22,
    -0.02,
    0.22,
    -0.34,
    0.52,
    0.45,
    -0.11,
    -0.76,
    0.44
   ],
   [
    0.75,
    0.87,
    1.0,
    0.1,
    0.16,
    -0.14,
    0.24,
    -0.32,
    0.61,
    0.44,
    -0.21,
    -0.67,
    0.36
   ],
   [
    -0.04,
    0.13,
    0.1,
    1.0,
    0.78,
    0.32,
    -0.25,
    0.37,
    -0.05,
    0.02,
    0.21,
    -0.03,
    -0.5
   ],
   [
    0.12,
    0.22,
    0.16,
    0.78,
    1.0,
    0.37,
    -0.25,
    0.13,
    0.03,
    0.17,
    0.2,
    -0.2,
    -0.35
   ],
   [
    -0.13,
    -0.02,
    -0.14,
    0.32,
    0.37,
    1.0,
    -0.39,
    0.0,
    -0.16,
    -0.18,
    0.49,
    0.09,
    -0.35
   ],
   [
    0.29,
    0.22,
    0.24,
    -0.25,
    -0.25,
    -0.39,
    1.0,
    -0.22,
    0.36,
    0.42,
    -0.03,
    -0.19,
    0.39
   ],
   [
    -0.49,
    -0.34,
    -0.32,
    0.37,
    0.13,
    0.0,
    -0.22,
    1.0,
    -0.36,
    -0.23,
    0.09,
    0.36,
    -0.31
   ],
   [
    0.47,
    0.52,
    0.61,
    -0.05,
    0.03,
    -0.16,
    0.36,
    -0.36,
    1.0,
    0.29,
    -0.15,
    -0.39,
    0.35
   ],
   [
    0.47,
    0.45,
    0.44,
    0.02,
    0.17,
    -0.18,
    0.42,
    -0.23,
    0.29,
    1.0,
    0.07,
    -0.39,
    0.29
   ],
   [
    -0.14,
    -0.11,
    -0.21,
    0.21,
    0.2,
    0.49,
    -0.03,
    0.09,
    -0.15,
    0.07,
    1.0,
    0.11,
    -0.08
   ],
   [
    -0.84,
    -0.76,
    -0.67,
    -0.03,
    -0.2,
    0.09,
    -0.19,
    0.36,
    -0.39,
    -0.39,
    0.11,
    1.0,
    -0.48
   ],
   [
    0.51,
    0.44,
    0.36,
    -0.5,
    -0.35,
    -0.35,
    0.39,
    -0.31,
    0.35,
    0.29,
    -0.08,
    -0.48,
    1.0
   ]
  ],
  "asof": "2026-11-06",
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
   "v": 10.3,
   "asof": "2026-11-09",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -13.0,
   "asof": "2026-11-10",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 14.2,
   "asof": "2026-11-10",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -4.2,
   "asof": "2026-11-09",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 7.3,
   "asof": "2026-11-09",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 8.6,
   "asof": "2026-11-09",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": 1.0,
   "asof": "2026-11-09",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 14.4,
   "asof": "2026-11-09",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 14.9,
   "asof": "2026-11-09",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 6.9,
   "asof": "2026-11-09",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 23.4,
   "asof": "2026-11-10",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": 3.6,
   "asof": "2026-11-08",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 14.1,
   "asof": "2026-11-09",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 11.7,
   "asof": "2026-11-09",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -40.6,
   "asof": "2026-11-10",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 18.8,
   "asof": "2026-11-09",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 12.7,
   "asof": "2026-11-09",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 45.5,
   "asof": "2026-11-10",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": 4.0,
   "asof": "2026-11-09",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 13.1,
   "asof": "2026-11-10",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -4.4,
   "asof": "2026-11-10",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 14.8,
   "asof": "2026-11-09",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -0.8,
   "asof": "2026-11-09",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 6.1,
   "asof": "2026-11-09",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
