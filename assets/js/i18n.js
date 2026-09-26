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

      heroTitle: "市场是一个系统，<br>不是十二个。",
      heroAtlas: "打开地图",
      heroShelf: "查看策略架",

      statMarkets: "覆盖市场",
      statMcap: "已收录市值",
      statBest: "年内最强指数",
      statWorst: "年内最弱指数",
      statStrategies: "已记录策略",

      threeTitle: "同一件事的三种视角",
      threeSub: "每个板块回答关于同一个市场的不同问题。从哪里开始都行。",
      c1Label: "01 · 策略",
      c1Head: "我能做什么",
      c1Body: "衍生品与结构性产品的工作记录，写得诚实 —— 逻辑、机制，以及出错时最痛的地方。",
      c2Label: "02 · 信号",
      c2Head: "它们如何一起运动",
      c2Body: "一张跨资产联动矩阵，加上一份持续更新的世界事件记录：发生了什么，以及这对持仓意味着什么。",
      c3Label: "03 · 地图",
      c3Head: "风险在哪里",
      c3Body: "所有主要市场汇于一张地图 —— 市值、宏观、行业构成，以及主导该市场的五家公司。",

      builtTitle: "这个网站是怎么做的",
      builtBody: "一个静态页面，没有框架，没有后端。所有内容都放在同一个数据文件里，所以新增一个市场或一个策略只是加一个对象，不需要部署流程。动效由弹簧驱动、随时可打断；完全尊重系统的「减弱动态效果」「降低透明度」与「高对比度」设置。",
      chipVanilla: "原生 JavaScript",
      chipNoBuild: "无需构建",
      chipStatic: "静态托管",
      chipFrost: "霜白配色",
      chipA11y: "键盘可访问",

      shelfLabel: "策略架",
      shelfTitle: "策略，以及它们各自的破绽",
      shelfBody: "这里每个策略都附带它的失效方式。一个你说不出它如何亏钱的收益结构，就是你还没真正理解的收益结构。点任意卡片查看机制。",
      skillLabel: "能力范围",
      skillTitle: "我实际使用的工具",

      xaLabel: "跨资产联动",
      xaTitle: "热力图",
      xaBody: "驱动多资产组合的核心资产之间的日收益率相关性。数值本身不如符号变化重要 —— 符号翻转标志着市场机制的切换。",
      readsLabel: "这张表在说什么",
      howLabel: "怎么读",
      howBody: "相关性矩阵是市场当下认为的共同风险因子的一张图像。当股债相关性翻转时，主导因素已在增长与通胀之间移动。当信用不再确认股票时，边际买家已经换人。当所有东西都趋向于 1，分散化恰好在最需要它的时候消失了。",
      howNote: "此处为示例数值。用 tools/build_correlations.py 以你自己的价格历史重新生成矩阵。",

      logLabel: "持续记录",
      logTitle: "世界事件，以及它们改变了什么",
      logBody: "只增不删。每条记录把发生的事和它对持仓的影响配在一起 —— 后半部分才是重点。",
      logRead: "解读：",

      atlasLabel: "全球地图",
      atlasTitle: "所有市场，同一张图",
      atlasBody: "按任意指标着色。点击国家查看宏观数据、基准指数的行业构成，以及主导该市场的五家公司。拖动可平移，滚轮或双指可缩放。",
      mapMetricGroup: "地图指标",
      zoomIn: "放大",
      zoomOut: "缩小",
      zoomReset: "重置视图",

      footLinksEmpty: "在 assets/js/data.js 中添加你的链接",
      footSnapshot: "数据截至 ",
      footRest: "。个人研究，非投资建议。",

      sheetStrategy: "策略",
      sheetHurts: "最痛的地方",
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
      tagline: "一份关于多资产市场的工作情报库 —— 各个部分如何运动，为何同步，以及风险在哪里被定错了价。"
    },

    disclaimerParts: [
      "数据为截至 ",
      " 的人工整理快照，取自公开来源，仅供说明与研究之用。非投资建议，非实时数据，也不代表任何雇主的观点。引用前请自行核实。"
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
        role: "多资产市场 · 新加坡",
        summary: "衍生品、结构性产品，以及「该持有多少」的算术。这更像一本工作笔记而不是作品集：每个策略都附带它的失效方式，一张跨资产联动矩阵，以及一张涵盖所有主要市场的地图。",
        chips: ["衍生品", "结构性产品", "跨资产宏观"],
        cta: "进入情报库"
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
    conf: { high: "来源可靠", medium: "部分估算", low: "谨慎对待" },

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
        name: "系统化波动率风险溢价卖方策略",
        thesis: "隐含方差长期高于已实现方差。这个优势是真实的，但它是承担尾部风险的补偿 —— 所以全部工作在于头寸规模，而不是信号。",
        detail: "以现金抵押的仓位卖出短期指数认沽期权与认沽价差。入场取决于 IV–RV 价差的历史分位与期限结构斜率，而非方向观点。曲线前端倒挂时清仓。",
        metrics: [["工具", "指数认沽 / 认沽价差"], ["期限", "7–45 天到期"], ["主要希腊字母", "空 Vega，空 Gamma"], ["强制止损", "VIX 期限结构倒挂"]],
        risks: "路径风险占主导。若跳空穿过卖出行权价两个标准差，损失会超过一整年收到的权利金 —— 如果名义规模是按平均波动率而非压力波动率设定的话。",
        tags: ["波动率", "已回测", "Python"]
      },
      autocall: {
        name: "自动赎回票据与障碍式反向可转债估值",
        thesis: "一张自动赎回票据等于卖出一个向下敲入认沽，加上卖出一个针对你自己本金的看涨期权。先给各个部件定价，再判断票息是否付得起它们。",
        detail: "在局部波动率 / Heston 曲面下做蒙特卡洛，包含离散观察日、发行人融资利差，以及最差表现型篮子的相关性。输出为公允票息、隐含敲入概率与持有期分布。",
        metrics: [["模型", "蒙特卡洛，离散障碍"], ["输入", "波动率曲面、相关性、融资成本"], ["输出", "公允票息、敲入概率"], ["关注", "最差表现型的相关性"]],
        risks: "相关性是隐藏的空头。最差表现型篮子看起来分散，在普跌时的表现却等同于一个加了杠杆的单一头寸。",
        tags: ["结构性产品", "蒙特卡洛", "定价"]
      },
      overwrite: {
        name: "备兑开仓与领口叠加",
        thesis: "卖掉右尾去补贴左尾。当委托需要现金流、且能接受上行被封顶时有用 —— 不能接受时则是破坏性的。",
        detail: "行权价选择由偏斜决定而非固定 Delta，按时间价值衰减滚动而非按价格滚动。领口的规模设定为：在委托的风险预算下，认沽的融资成本中性至略微为正。",
        metrics: [["工具", "个股 / 指数认购"], ["常用 Delta", "15–25Δ"], ["滚动", "按 Theta，而非按价格"], ["用途", "现金流与回撤控制"]],
        risks: "系统性地封住了复利。在长期趋势市场中，机会成本会超过收到的权利金。",
        tags: ["叠加策略", "现金流", "DPM"]
      },
      kelly: {
        name: "凯利公式与均值方差头寸规模",
        thesis: "大多数组合损伤是穿着信号外衣的规模错误。带收缩协方差矩阵的分数凯利胜过信念。",
        detail: "预期收益输入向先验收缩；协方差矩阵在优化前做 Ledoit-Wolf 收缩。输出上限为半凯利，并对照回撤约束复核。",
        metrics: [["方法", "分数凯利 + 均值方差"], ["协方差", "Ledoit-Wolf 收缩"], ["上限", "0.5 倍凯利"], ["约束", "最大回撤预算"]],
        risks: "对估计出来的参数使用满仓凯利接近于必然破产。优化器里的每一个数字都是带标准误的估计值，而没有人会把标准误摆给你看。",
        tags: ["量化", "风险", "资产配置"]
      },
      dispersion: {
        name: "离散度与相关性交易",
        thesis: "当隐含相关性被定得很高时，指数波动率相对成分股便宜。结构是做多个股波动率、做空指数波动率。",
        detail: "从指数与成分股曲面反推隐含相关性；当其位于历史分布最高十分位时入场，且按 Vega 匹配而非名义金额匹配。",
        metrics: [["结构", "多成分股 Vega / 空指数 Vega"], ["信号", "隐含相关性分位"], ["平衡", "Vega 中性"], ["风险", "相关性飙升"]],
        risks: "相关性恰好在你最不希望的时候趋向于 1。这笔交易是做空危机。",
        tags: ["波动率", "相对价值"]
      },
      carry: {
        name: "跨资产套息与期限结构分析",
        thesis: "套息既是风险溢价，同时也是持仓信号。跨越外汇、利率与商品去读它，是发现拥挤交易的方法。",
        detail: "比较各市场的曲线形态、展期收益与远期隐含变动，找出市场在为持有头寸付钱、以及在为回避头寸付钱的地方。",
        metrics: [["资产", "外汇、利率、商品"], ["信号", "展期收益与曲线斜率"], ["用途", "拥挤度与机制识别"], ["搭配", "波动率筛选"]],
        risks: "套息交易死于拥挤的平仓，而非缓慢的反转。持仓数据比套息数字本身更重要。",
        tags: ["宏观", "外汇", "利率"]
      },
      valuation: {
        name: "全球股票估值框架",
        thesis: "跨区域估值只有在调整行业构成、会计准则与股权成本之后才有意义。否则你是在拿一个银行指数去比一个半导体指数。",
        detail: "行业中性的估值倍数、由反向 DCF 得出的隐含股权风险溢价，以及基于本地无风险利率构建的股权成本。筛选先到区域 × 行业，再下沉到个股。",
        metrics: [["方法", "行业中性 + 反向 DCF"], ["覆盖", "发达市场与主要新兴市场"], ["输出", "各区域隐含 ERP"], ["频率", "季度更新"]],
        risks: "便宜是关于预期的陈述，不是关于结果的陈述。价值筛选持有最差头寸的时间往往最长。",
        tags: ["基本面", "研究"]
      },
      reporting: {
        name: "委托组合报告与业绩归因",
        thesis: "没有人能拆解的业绩数字，就是没有人相信的数字。归因首先是沟通工具，其次才是分析工具。",
        detail: "对各自主管理仓位做 Brinson 式的配置 / 选股拆解，并在进入客户页面之前与托管行数据核对一致。",
        metrics: [["框架", "配置 vs 选股"], ["仓位", "增长 / 平衡 / 收益"], ["核对", "托管行记录"], ["输出", "客户端概览"]],
        risks: "与托管数据对不上的归因是故事，不是结果。",
        tags: ["DPM", "客户报告"]
      }
    },

    /* Same order as window.SKILLS */
    skills: [
      ["衍生品与波动率", "期权定价、希腊字母、曲面分析、VRP 策略设计"],
      ["结构性产品", "自动赎回、BRC、FCN —— 拆解、定价、条款审阅"],
      ["量化组合构建", "凯利规模、均值方差、收缩估计、回撤预算"],
      ["Python 与数据工具", "pandas、NumPy、回测、蒙特卡洛、报告自动化"],
      ["宏观与跨资产研究", "利率、外汇、商品、机制与相关性分析"],
      ["Bloomberg / Pine Script / Excel", "终端工作流、自定义指标、模型搭建"]
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
        "股票与利率的相关性在本轮周期里已经两次变号。当10年期美债与标普的相关性转正，市场在交易通胀风险；转负时，交易的是增长风险。",
        "黄金同时在做两件事 —— 与实际利率负相关，同时与新兴市场股票正相关。这是货币贬值的买盘，不是恐慌的买盘。",
        "铜是检验新兴市场股票涨势最干净的交叉验证。如果铜不再确认，这轮上涨靠的是流动性，不是需求。",
        "信用与股票的相关性已到 0.79。信用会比股票更早停止确认；两者之中，它是更早的那个警报。"
      ]
    },

    /* Same order as window.EVENTS */
    events: [
      {
        date: "2026年8月",
        title: "存储周期主导的股市领涨走向全球",
        body: "韩国 KOSPI 年内 +64%，台湾加权指数 +62%，同期标普500 上涨 12.9%。韩国指数中信息技术已占约 50%，台湾约 74%。两个市场实际上已经变成同一笔 AI 硬件周期交易的杠杆化表达。",
        read: "国家分散不等于行业分散。同时持有美国、韩国与台湾的投资者，拥有的是同一笔交易的三种货币版本。"
      },
      {
        date: "2026年8月",
        title: "日本十年期收益率 2.93%，政策利率 1.00%",
        body: "随着日本央行推进正常化，长端定价已经远远走在政策利率前面。国内金融股占 TOPIX 的 19%，并带动指数上涨 31%。",
        read: "日元套息交易的融资成本不再免费。在任何以日元融资的地方加仓之前，先看交叉货币基差与日本国债的期限溢价。"
      },
      {
        date: "2026年8月",
        title: "印尼下跌 23.7% —— 单一市场的新兴市场错位",
        body: "在新兴市场整体上涨的一年里，印尼综合指数是表现最差的主要市场。金融股占指数 47%，因此这轮回撤是本地银行与货币的故事，而不是全球性的风险规避。",
        read: "在上涨的新兴市场指数内部出现的特异性回撤，既是被迫卖盘机会出现的地方，也是价值陷阱藏身的地方。区分二者要看融资状况，而不是估值倍数。"
      },
      {
        date: "2026年8月",
        title: "土耳其：名义 +29.6%，实际为负",
        body: "BIST 100 上涨 29.6%，同期 CPI 为 31.75%，政策利率 37%。这个名义回报是一种货币幻觉。",
        read: "任何按名义本币回报排序的筛选都会把土耳其排在前列。排序之前，务必先做通胀调整，或换算成硬通货。"
      },
      {
        date: "2026年8月",
        title: "英美长端同时高于 4.6%",
        body: "英国国债 5.05%，美国国债 4.68%，两国政策利率均为 3.75%。曲线正斜率，期限溢价在起作用。",
        read: "正的期限溢价改变了长久期股票的贴现率。成长股的估值倍数与30年期英国国债，是同一笔交易的两端。"
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
