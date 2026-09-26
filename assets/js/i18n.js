/* ============================================================
   i18n.js — the Chinese layer.

   data.js stays the English source of truth and is NEVER touched by
   translation. Everything below is an override map with the same shape.
   Anything missing here quietly falls back to the English original, so a
   new market or strategy added to data.js still works — it just shows in
   English until you add its line here.

   TO ADD A TRANSLATION
   - a country  : zh.countries.XXX  (ISO-3 key, same as data.js)
   - a strategy : zh.strategies.<id>  (the `id` field from data.js)
   - an event   : zh.events[n]  — n is the position in window.EVENTS
   - UI text    : zh.ui.<key>  — the key comes from data-i18n="..." in index.html
   ============================================================ */

window.I18N = {
  langs: [["en", "EN"], ["zh", "中文"]],

  zh: {
    /* ---------- Static interface copy (data-i18n keys in index.html) ---------- */
    ui: {
      langLabel: "语言",
      back: "返回首页",

      navBase: "概览",
      navStrategies: "策略",
      navSignals: "信号",
      navAtlas: "地图",

      heroTitle: "跨资产研究<br>与策略文档。",
      heroAtlas: "市场地图",
      heroShelf: "策略库",

      statMarkets: "覆盖市场",
      statMcap: "市值合计",
      statBest: "年内最强指数",
      statWorst: "年内最弱指数",
      statStrategies: "已记录策略",

      threeTitle: "栏目",
      threeSub: "策略文档、跨资产分析，以及各国市场结构。",
      c1Label: "策略",
      c1Head: "策略库",
      c1Body: "衍生品与结构性产品策略，每一项均载明目标、执行方式与主要风险。",
      c2Label: "信号",
      c2Head: "跨资产分析",
      c2Body: "覆盖驱动多资产持仓的十三个标的的滚动相关性矩阵，并附注明日期的评述。",
      c3Label: "地图",
      c3Head: "市场地图",
      c3Body: "二十六个股票市场：市值、宏观指标、基准指数行业构成与最大成分股。",

      shelfLabel: "覆盖范围",
      shelfTitle: "衍生品与结构性产品策略",
      shelfBody: "每一项均载明目标、执行方式与主要风险。所列策略取自实际经手的委托，而非对整个领域的综述。点击任一条目查看详情。",
      skillLabel: "能力范围",
      skillTitle: "技术覆盖",

      xaLabel: "跨资产分析",
      xaTitle: "滚动相关性矩阵",
      xaBody: "驱动多资产持仓的十三个标的之间的日收益率两两相关性。符号的变化比数值的变化含有更多信息。",
      readsLabel: "观察",
      howLabel: "方法",
      howBody: "基于十三个序列共有的最近六十个观测值计算。收益率与隐含波动率序列取差分而非收益率，因为水平值与价格之间的相关性不具可解释性。矩阵整体趋向于 1，意味着分散化在最需要它的时刻被收回。",
      howNote: "源数据为收盘价。若某一序列不可得，则保留前值并作标记。",

      logLabel: "评述",
      logTitle: "市场评述",
      logBody: "按日期记录市场变化及其对持仓的影响。人工维护。",
      logRead: "含义：",

      atlasLabel: "市场地图",
      atlasTitle: "各市场覆盖情况",
      atlasBody: "二十六个股票市场。选择指标为地图着色，或选择某一市场查看其宏观指标、基准指数行业构成与按市值计的五大成分股。",
      mapMetricGroup: "地图指标",
      zoomIn: "放大",
      zoomOut: "缩小",
      zoomReset: "重置视图",

      footLinksEmpty: "在 assets/js/data.js 中添加你的链接",
      footSnapshot: "参考数据截至 ",
      footRest: "。个人研究；非投资建议，亦不代表任何雇主的观点。",

      sheetStrategy: "策略",
      sheetHurts: "主要风险",
      sheetClose: "关闭",
      sheetSectors: "行业构成",
      sheetCompanies: "最大上市公司",
      sheetNote: "注：",
      sheetQuality: "数据质量",
      sheetAsOf: "数据截至",

      freshDataTo: "数据截至",
      freshFetched: "抓取于",
      freshProxy: "替代标的",
      freshUpdated: "更新于",
      freshDaysOld: "天前",
      freshSnapshot: "人工快照",
      freshStaleWhy: "更新任务未运行 —— 此数值并非最新"
    },


    meta: {
      role: "投资组合分析师",
      city: "新加坡",
      asof: "2026年8月",
      tagline: "二十六个股票市场、每个交易日刷新的相关性框架，以及一套完整记录的衍生品与结构性产品策略库。"
    },

    disclaimerParts: [
      "数据由自动刷新的收盘序列与人工维护的参考数据组成，均取自公开来源，截至 ",
      "。仅供研究与说明之用。非投资建议，亦不代表任何雇主的观点。使用前须自行独立核实。"
    ],


    /* ---------- The gate ---------- */
    gate: {
      eyebrow: "两个人，一个网址",
      title: "你想找谁？",
      sub: "选一边。这里没有共用的内容 —— 每一半都属于名字所在的那个人。",
      foot: "个人网站。非投资建议，亦不代表任何雇主的观点。"
    },

    people: {
      jay: {
        role: "多资产研究 · 新加坡",
        summary: "跨资产研究与衍生品策略文档。二十六个股票市场、一套滚动相关性框架，以及涵盖波动率、结构性产品与组合构建的策略库。",
        chips: ["衍生品", "结构性产品", "跨资产宏观"],
        cta: "查看研究"
      },
      anna: {
        role: "她的那一半 —— 正在书写",
        summary: "网站的这一半属于她，她还没有填上内容。空间、版式和文字都还是开放的。",
        chips: [],
        cta: "还是看看吧"
      }
    },


    anna: {
      eyebrow: "预留",
      title: "Anna 的那一半",
      lede: "这里还什么都没有 —— 这是有意的。这个页面先占住位置，等 Anna 决定该放什么。",
      slots: [
        ["第一个页面", "她希望别人最先看到的东西 —— 一段自我介绍、一件作品，或者一张图。"],
        ["她做的东西", "文字、照片、食谱、项目记录。版式跟着内容走，而不是反过来。"],
        ["联系方式", "只有在她想要的时候。一个公开的页面并不欠任何人一个收件箱。"]
      ]
    },

    /* ---------- Atlas ---------- */
    metrics: {
      mcap: "市值", ytd: "年初至今", rate: "政策利率", cpi: "通胀率",
      growth: "GDP 增速", y10: "十年期收益率", gdp: "GDP"
    },
    sheetKeys: {
      "Index YTD": "年初至今", "Market cap": "市值", "GDP": "GDP", "GDP growth": "GDP 增速",
      "Inflation": "通胀率", "Policy rate": "政策利率", "10y yield": "十年期收益率",
      "Unemployment": "失业率"
    },
    conf: { high: "已核源", medium: "部分估算", low: "置信度低" },

    countries: {
      USA: "美国", CHN: "中国", JPN: "日本", IND: "印度", DEU: "德国", GBR: "英国",
      FRA: "法国", ITA: "意大利", CAN: "加拿大", BRA: "巴西", KOR: "韩国", AUS: "澳大利亚",
      ESP: "西班牙", MEX: "墨西哥", IDN: "印度尼西亚", NLD: "荷兰", SAU: "沙特阿拉伯",
      CHE: "瑞士", TWN: "台湾", TUR: "土耳其", SGP: "新加坡", HKG: "香港",
      SWE: "瑞典", POL: "波兰", ZAF: "南非", ARE: "阿联酋"
    },

    sectors: {
      "Information Technology": "信息技术", "Financials": "金融", "Health Care": "医疗保健",
      "Consumer Discretionary": "非必需消费品", "Communication Services": "通信服务",
      "Industrials": "工业", "Consumer Staples": "必需消费品", "Energy": "能源",
      "Utilities": "公用事业", "Real Estate": "房地产", "Materials": "原材料"
    },

    countryNotes: {
      CHN: "行业权重取自在岸市场（沪深300代理）；前五大公司按注册地跨越在岸与香港上市。",
      SAU: "已公布的 2026 年二季度 GDP 收缩与指数全年上涨并不协调 —— 引用前请核实。",
      TUR: "在此地不做通胀调整的名义指数回报没有意义 —— BIST 上涨 29.6%，而 CPI 约 32%，实际为负。",
      SGP: "新加坡金管局通过新元名义有效汇率区间执行政策，而非政策利率 —— 此处显示的是短端利率代理。",
      HKG: "按香港注册地口径列示。恒生指数本身约 55% 为内地注册公司，那样统计会与中国重复计算。"
    },

    /* ---------- Strategies (keyed by the `id` in data.js) ---------- */
    strategies: {
      vrp: {
        name: "系统化波动率风险溢价",
        thesis: "通过短期指数期权获取隐含方差与已实现方差之间的价差，并将规模控制在尾部事件不致损害委托的水平。",
        detail: "以现金抵押方式卖出主要指数的认沽期权与认沽价差，到期日为七至四十五天。入场条件取决于隐含—已实现价差的历史分位与波动率期限结构的斜率，而非方向性观点。曲线前端倒挂时平仓。",
        metrics: [["工具", "指数认沽与认沽价差"], ["期限", "7–45 天"], ["主要敞口", "空 Vega，空 Gamma"], ["退出条件", "期限结构倒挂"]],
        risks: "路径依赖主导了结果的离散度。若名义规模按平均波动率而非压力波动率设定，一次穿越卖出行权价两个标准差的跳空可能超过一整年所收取的权利金。",
        tags: ["波动率", "已回测", "Python"]
      },
      autocall: {
        name: "自动赎回票据与障碍式反向可转债估值",
        thesis: "将发行人结构拆解为其组成敞口，并判断所报票息是否足以补偿这些敞口。",
        detail: "在局部波动率或 Heston 曲面下进行蒙特卡洛估值，纳入离散观察日、发行人融资利差，以及最差表现型篮子的成分相关性。输出为公允票息、隐含敲入概率与持有期分布。",
        metrics: [["方法", "蒙特卡洛，离散障碍"], ["输入", "波动率曲面、相关性、融资成本"], ["输出", "公允票息、敲入概率"], ["关键敏感性", "最差表现型相关性"]],
        risks: "相关性是主要的未对冲敞口。最差表现型篮子表面上分散，在普跌行情中的表现等同于单一加杠杆头寸。",
        tags: ["结构性产品", "蒙特卡洛", "估值"]
      },
      overwrite: {
        name: "备兑开仓与领口叠加",
        thesis: "在委托可接受上行封顶的前提下，为既有股票敞口创造合约性收入并约束回撤。",
        detail: "行权价选择依据实际观察到的偏斜而非固定 Delta，按时间价值衰减滚动而非按现价滚动。领口的规模设定使认沽的融资成本在委托既定风险预算下保持中性至略为正值。",
        metrics: [["工具", "个股与指数认购"], ["常用 Delta", "15–25Δ"], ["滚动依据", "Theta，而非现价"], ["用途", "收入与回撤控制"]],
        risks: "该结构系统性地封住了复利。在多年期的趋势行情中，放弃的上行收益会超过所收取的权利金。",
        tags: ["叠加策略", "收入", "自主管理委托"]
      },
      kelly: {
        name: "凯利与均值方差头寸规模",
        thesis: "由估计的优势与估计误差决定头寸规模，而非由信念决定。",
        detail: "预期收益向先验收缩，协方差矩阵在优化前作 Ledoit-Wolf 收缩。输出上限为半凯利，并对照明确的最大回撤约束进行检验。",
        metrics: [["方法", "分数凯利结合均值方差"], ["协方差", "Ledoit-Wolf 收缩"], ["上限", "0.5 倍凯利"], ["约束", "回撤预算"]],
        risks: "将满仓凯利用于估计得到的参数接近于必然破产。每一项输入都是带标准误的估计值，而优化器不会报告该标准误。",
        tags: ["量化", "风险", "资产配置"]
      },
      dispersion: {
        name: "离散度与隐含相关性",
        thesis: "通过指数波动率与其成分股波动率之间的交易表达对隐含相关性的观点。",
        detail: "由指数与个股波动率曲面反推隐含相关性。当其处于历史分布的最高十分位时建仓，并按 Vega 而非名义金额进行平衡。",
        metrics: [["结构", "多成分股 Vega，空指数 Vega"], ["信号", "隐含相关性分位"], ["平衡", "Vega 中性"], ["主要风险", "相关性骤升"]],
        risks: "该头寸做空相关性冲击。已实现相关性恰好在整体组合本已承压的回撤中趋向于 1。",
        tags: ["波动率", "相对价值"]
      },
      carry: {
        name: "跨资产套息与期限结构",
        thesis: "识别市场在何处为持有敞口付费，以及该笔付费反映的是拥挤而非风险溢价。",
        detail: "在外汇、利率与商品之间比较曲线形态、展期收益与远期隐含变动。信号须与持仓数据一并解读，而非孤立使用。",
        metrics: [["资产类别", "外汇、利率、商品"], ["信号", "展期收益与曲线斜率"], ["用途", "拥挤度与机制识别"], ["配合", "波动率筛选"]],
        risks: "套息头寸通过拥挤的出场而非渐进的反转来平仓。持仓数据比套息本身的水平更具信息量。",
        tags: ["宏观", "外汇", "利率"]
      },
      valuation: {
        name: "全球股票估值框架",
        thesis: "在能够消除行业构成、会计准则与股权成本差异的基础上，跨区域比较股票估值。",
        detail: "行业中性的估值倍数、由反向 DCF 得出的隐含股权风险溢价，以及基于本地无风险利率构建的股权成本。筛选依次落到区域、行业、个股。",
        metrics: [["方法", "行业中性结合反向 DCF"], ["覆盖", "发达市场与主要新兴市场"], ["输出", "各区域隐含 ERP"], ["频率", "季度"]],
        risks: "估值描述的是预期而非结果。以此方式构建的筛选，持有其最差头寸的时间往往最长。",
        tags: ["基本面", "研究"]
      },
      reporting: {
        name: "委托组合报告与业绩归因",
        thesis: "产出可按来源拆解、并可与独立记录核对的委托组合业绩。",
        detail: "对各自主管理仓位进行 Brinson 配置与选股归因，任何数字对外发布前均与托管行记录核对一致。",
        metrics: [["框架", "配置与选股"], ["仓位", "增长、平衡、收益"], ["核对对象", "托管行记录"], ["输出", "客户业绩概览"]],
        risks: "无法与托管记录核对一致的归因是叙述，而非结果。",
        tags: ["自主管理委托", "客户报告"]
      }
    },


    /* Same order as window.SKILLS */
    skills: [
      ["衍生品与波动率", "期权定价、希腊字母、曲面构建、波动率溢价策略设计"],
      ["结构性产品", "自动赎回票据、障碍式反向可转债、固定票息票据：拆解、估值、条款审阅"],
      ["量化组合构建", "凯利规模、均值方差优化、协方差收缩、回撤预算"],
      ["Python 与数据工具", "pandas、NumPy、回测、蒙特卡洛、报告自动化"],
      ["宏观与跨资产研究", "利率、外汇、商品、机制与相关性分析"],
      ["Bloomberg、Pine Script、Excel", "终端工作流、自定义指标、估值模型"]
    ],


    heat: {
      window: "60 日滚动，日收益率",
      assets: {
        "S&P 500": "标普500", "Nasdaq 100": "纳斯达克100", "MSCI EM": "MSCI 新兴市场",
        "US 10y yield": "美债10年", "US 2y yield": "美债2年", "DXY": "美元指数",
        "Gold": "黄金", "Brent": "布伦特原油", "Copper": "铜", "Bitcoin": "比特币",
        "USDJPY": "美元兑日元", "VIX": "VIX", "HY credit": "高收益债"
      },
      short: {
        "S&P 500": "标普", "Nasdaq 100": "纳指", "MSCI EM": "新兴", "US 10y yield": "美债10Y",
        "US 2y yield": "美债2Y", "DXY": "美元", "Gold": "黄金", "Brent": "原油",
        "Copper": "铜", "Bitcoin": "BTC", "USDJPY": "日元", "VIX": "VIX", "HY credit": "高收益"
      },
      reads: [
        "股票与利率的相关性在本轮周期中已两次变号。十年期美债与标普之间的正相关表明市场正在为通胀风险定价；负相关则表明其定价的是增长风险。",
        "黄金同时与实际利率负相关、与新兴市场股票正相关。这一组合符合货币贬值买盘的特征，而非避险买盘。",
        "铜仍是新兴市场股票涨势最干净的确认指标。若出现背离，则表明该行情由流动性而非需求驱动。",
        "信用与股票的相关性为 0.79。历史上信用会先于股票停止确认，因而是两者之中更早的信号。"
      ]


    },

    /* Same order as window.EVENTS */
    events: [
      {
        date: "2026年8月",
        title: "存储周期主导的领涨在亚洲扩散",
        body: "KOSPI 年内上涨 64%，台湾加权指数上涨 62%，同期标普500 上涨 12.9%。信息技术目前约占韩国指数的 50%、台湾指数的 74%。两个市场实质上都是同一轮 AI 硬件周期的杠杆化表达。",
        read: "国家分散并不带来行业分散。同时持有美国、韩国与台湾股票的组合，持有的是以三种货币计价的同一笔敞口。"
      },
      {
        date: "2026年8月",
        title: "日本长端定价大幅领先政策利率",
        body: "十年期日本国债收益率为 2.93%，政策利率为 1.00%。随着日本央行推进正常化，长端已远远走在政策之前。国内金融股占 TOPIX 的 19%，并带动指数上涨 31%。",
        read: "日元融资不再是无成本的。在增加任何以日元融资的敞口之前，应先审视交叉货币基差与日本国债的期限溢价。"
      },
      {
        date: "2026年8月",
        title: "印尼股市与新兴市场贝塔脱钩",
        body: "在新兴市场股票整体上涨之际，印尼综合指数年内下跌 23.7%。金融股占该指数 47%，将这轮回撤定位于本地银行与货币，而非全球性的风险规避。",
        read: "上涨指数内部的特异性回撤，正是被迫卖盘机会与价值陷阱并存之处。二者的区分依据融资状况，而非估值倍数。"
      },
      {
        date: "2026年8月",
        title: "土耳其股市：名义为正，实际为负",
        body: "BIST 100 上涨 29.6%，同期 CPI 为 31.75%，政策利率为 37%。该名义回报在实际意义上为负。",
        read: "任何按名义本币回报排序的筛选都会把土耳其排在前列。排序之前须先作通胀调整，或换算为硬通货。"
      },
      {
        date: "2026年8月",
        title: "英美长端同时高于 4.6%",
        body: "英国国债收益率为 5.05%，美国国债为 4.68%，两国政策利率均为 3.75%。曲线呈正斜率，期限溢价为主要贡献项。",
        read: "正的期限溢价抬高了适用于长久期股票的贴现率。成长股估值倍数与三十年期英国国债，是同一笔敞口的两端。"
      }
    ]


  }
};

/* ============================================================
   Runtime helpers. Loaded before every other script that uses them.
   ============================================================ */
(() => {
  "use strict";

  const KEY = "ib-lang";
  const VALID = window.I18N.langs.map((l) => l[0]);

  function initial() {
    try {
      const saved = localStorage.getItem(KEY);
      if (VALID.includes(saved)) return saved;
    } catch {}
    // First visit: follow the browser, but only for an explicit Chinese locale.
    const nav = (navigator.language || "").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }

  window.LANG = initial();

  /* Dotted-path lookup. Returns `fallback` for English or anything missing. */
  window.t = function (path, fallback) {
    if (window.LANG === "en") return fallback;
    let cur = window.I18N[window.LANG];
    for (const k of String(path).split(".")) {
      if (cur == null) return fallback;
      cur = cur[k];
    }
    return cur == null ? fallback : cur;
  };

  /* Map lookup for keys that contain dots or spaces (sector names, assets). */
  window.tm = function (group, key, fallback) {
    if (window.LANG === "en") return fallback;
    let g = window.I18N[window.LANG];
    for (const part of String(group).split(".")) {   // "heat.short" walks two levels
      if (g == null) return fallback;
      g = g[part];
    }
    const v = g && g[key];
    return v == null ? fallback : v;
  };

  /* Localised money. English: $8.70tn / $253bn. Chinese: 8.70万亿美元 / 2530亿美元.
     1tn = 1万亿, 1bn = 10亿 — the conversion is done, not fudged. */
  window.money = function (billions) {
    const b = Number(billions);
    if (window.LANG === "zh") {
      return b >= 1000
        ? (b / 1000).toFixed(2) + "万亿美元"
        : Math.round(b * 10).toLocaleString("en-US") + "亿美元";
    }
    return "$" + (b >= 1000 ? (b / 1000).toFixed(2) + "tn" : b + "bn");
  };
  window.moneyTn = function (trillions) {
    const v = Number(trillions);
    return window.LANG === "zh" ? v.toFixed(2) + "万亿美元" : "$" + v.toFixed(2) + "tn";
  };

  window.setLang = function (l) {
    if (!VALID.includes(l) || l === window.LANG) return;
    window.LANG = l;
    try { localStorage.setItem(KEY, l); } catch {}
    document.documentElement.lang = l === "zh" ? "zh-Hans" : "en";
    window.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  };

  document.documentElement.lang = window.LANG === "zh" ? "zh-Hans" : "en";
})();
