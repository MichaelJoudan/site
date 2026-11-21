/* GENERATED FILE — do not edit by hand.
   Written by tools/fetch_market.py via .github/workflows/update-market.yml.
   Any edit here is overwritten on the next run. Curated fallbacks live in data.js.
   Generated 2026-11-21T03:15Z. */
window.MARKET = {
 "generated": "2026-11-21T03:15Z",
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
    0.78,
    0.1,
    0.22,
    -0.13,
    0.27,
    -0.36,
    0.41,
    0.5,
    0.14,
    -0.91,
    0.52
   ],
   [
    0.92,
    1.0,
    0.87,
    0.23,
    0.29,
    0.02,
    0.16,
    -0.3,
    0.44,
    0.46,
    0.18,
    -0.83,
    0.45
   ],
   [
    0.78,
    0.87,
    1.0,
    0.18,
    0.22,
    -0.11,
    0.21,
    -0.32,
    0.56,
    0.46,
    0.03,
    -0.73,
    0.38
   ],
   [
    0.1,
    0.23,
    0.18,
    1.0,
    0.81,
    0.44,
    -0.28,
    0.28,
    -0.01,
    -0.03,
    0.34,
    -0.11,
    -0.47
   ],
   [
    0.22,
    0.29,
    0.22,
    0.81,
    1.0,
    0.42,
    -0.29,
    0.06,
    0.02,
    0.11,
    0.29,
    -0.26,
    -0.34
   ],
   [
    -0.13,
    0.02,
    -0.11,
    0.44,
    0.42,
    1.0,
    -0.48,
    0.12,
    -0.2,
    -0.24,
    0.4,
    0.1,
    -0.41
   ],
   [
    0.27,
    0.16,
    0.21,
    -0.28,
    -0.29,
    -0.48,
    1.0,
    -0.24,
    0.39,
    0.47,
    -0.04,
    -0.16,
    0.41
   ],
   [
    -0.36,
    -0.3,
    -0.32,
    0.28,
    0.06,
    0.12,
    -0.24,
    1.0,
    -0.28,
    -0.28,
    0.02,
    0.36,
    -0.31
   ],
   [
    0.41,
    0.44,
    0.56,
    -0.01,
    0.02,
    -0.2,
    0.39,
    -0.28,
    1.0,
    0.36,
    -0.0,
    -0.32,
    0.32
   ],
   [
    0.5,
    0.46,
    0.46,
    -0.03,
    0.11,
    -0.24,
    0.47,
    -0.28,
    0.36,
    1.0,
    0.02,
    -0.37,
    0.3
   ],
   [
    0.14,
    0.18,
    0.03,
    0.34,
    0.29,
    0.4,
    -0.04,
    0.02,
    -0.0,
    0.02,
    1.0,
    -0.09,
    -0.05
   ],
   [
    -0.91,
    -0.83,
    -0.73,
    -0.11,
    -0.26,
    0.1,
    -0.16,
    0.36,
    -0.32,
    -0.37,
    -0.09,
    1.0,
    -0.49
   ],
   [
    0.52,
    0.45,
    0.38,
    -0.47,
    -0.34,
    -0.41,
    0.41,
    -0.31,
    0.32,
    0.3,
    -0.05,
    -0.49,
    1.0
   ]
  ],
  "asof": "2026-11-19",
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
   "v": 0.9,
   "asof": "2026-11-20",
   "src": "yahoo:^GSPC"
  },
  "CHN": {
   "v": -14.6,
   "asof": "2026-11-19",
   "src": "yahoo:510300.SS"
  },
  "JPN": {
   "v": 7.9,
   "asof": "2026-11-20",
   "src": "yahoo:1306.T",
   "proxy": "TOPIX tracker"
  },
  "IND": {
   "v": -1.3,
   "asof": "2026-11-20",
   "src": "yahoo:^NSEI"
  },
  "DEU": {
   "v": 1.3,
   "asof": "2026-11-20",
   "src": "yahoo:^GDAXI"
  },
  "GBR": {
   "v": 4.2,
   "asof": "2026-11-20",
   "src": "yahoo:^FTSE"
  },
  "FRA": {
   "v": -2.7,
   "asof": "2026-11-20",
   "src": "yahoo:^FCHI"
  },
  "ITA": {
   "v": 8.4,
   "asof": "2026-11-20",
   "src": "yahoo:FTSEMIB.MI"
  },
  "CAN": {
   "v": 4.7,
   "asof": "2026-11-20",
   "src": "yahoo:^GSPTSE"
  },
  "BRA": {
   "v": 3.3,
   "asof": "2026-11-19",
   "src": "yahoo:^BVSP"
  },
  "KOR": {
   "v": 15.6,
   "asof": "2026-11-20",
   "src": "yahoo:^KS11"
  },
  "AUS": {
   "v": -1.4,
   "asof": "2026-11-20",
   "src": "yahoo:^AXJO"
  },
  "ESP": {
   "v": 9.0,
   "asof": "2026-11-20",
   "src": "yahoo:^IBEX"
  },
  "MEX": {
   "v": 6.7,
   "asof": "2026-11-20",
   "src": "yahoo:^MXX"
  },
  "IDN": {
   "v": -40.5,
   "asof": "2026-11-20",
   "src": "yahoo:^JKSE"
  },
  "NLD": {
   "v": 12.1,
   "asof": "2026-11-20",
   "src": "yahoo:^AEX"
  },
  "CHE": {
   "v": 9.8,
   "asof": "2026-11-20",
   "src": "yahoo:^SSMI"
  },
  "TWN": {
   "v": 24.4,
   "asof": "2026-11-20",
   "src": "yahoo:^TWII"
  },
  "TUR": {
   "v": -1.2,
   "asof": "2026-11-20",
   "src": "yahoo:XU100.IS"
  },
  "SGP": {
   "v": 7.1,
   "asof": "2026-11-20",
   "src": "yahoo:^STI"
  },
  "HKG": {
   "v": -12.6,
   "asof": "2026-11-20",
   "src": "yahoo:^HSI"
  },
  "SWE": {
   "v": 10.1,
   "asof": "2026-11-20",
   "src": "yahoo:^OMX"
  },
  "ZAF": {
   "v": -10.3,
   "asof": "2026-11-20",
   "src": "yahoo:^J200.JO"
  },
  "ARE": {
   "v": 8.8,
   "asof": "2026-11-20",
   "src": "yahoo:UAE",
   "proxy": "MSCI UAE ETF proxy"
  }
 },
 "failed": [
  "POL",
  "SAU"
 ]
};
