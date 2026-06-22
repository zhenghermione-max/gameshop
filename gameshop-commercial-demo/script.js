const STORAGE_KEY = "wooshpay-gameshop-lite-v3";

const defaultState = {
  view: "home",
  language: "zh",
  market: "ID",
  selectedProductId: "topup-980",
  selectedAdminProductId: "topup-980",
  couponCode: "WOOSH10",
  redeemCode: "",
  redeemStatus: "",
  selectedPaymentMethod: "dana",
  player: {
    uid: "MR-2048-7761",
    loggedIn: false,
    account: ""
  },
  baseMetrics: {
    gmvUsd: 48920,
    orders: 3184,
    successRate: 97.4
  },
  products: [
    {
      id: "topup-300",
      token: "300",
      name: "300 💎",
      type: "固定面额充值",
      priceUsd: 4.99,
      tag: "基础档位",
      bonus: "300 💎",
      benefit: "300 diamonds",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 776
    },
    {
      id: "topup-980",
      token: "980",
      name: "980 💎",
      type: "固定面额充值",
      priceUsd: 14.99,
      tag: "热销",
      bonus: "+15% = 1,127 💎",
      benefit: "980 diamonds + bonus 147 diamonds",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 498
    },
    {
      id: "topup-1980",
      token: "1980",
      name: "1,980 💎",
      type: "固定面额充值",
      priceUsd: 29.99,
      tag: "高价值",
      bonus: "+20% = 2,376 💎",
      benefit: "1,980 diamonds + bonus 396 diamonds",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 842
    },
    {
      id: "first-300",
      token: "2X",
      name: "首充 300 💎",
      type: "首充赠送",
      priceUsd: 4.99,
      tag: "首充双倍",
      bonus: "额外赠送 300 💎",
      benefit: "300 diamonds + first recharge bonus 300 diamonds",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 624
    },
    {
      id: "starter-pack",
      token: "PACK",
      name: "Starter Pack",
      type: "限时礼包",
      priceUsd: 9.99,
      oldPriceUsd: 19.99,
      tag: "新手推荐",
      bonus: "680 💎 + 3 天加速道具",
      benefit: "680 diamonds + 3-day booster",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 587
    },
    {
      id: "festival-pack",
      token: "HOT",
      name: "Festival Pack",
      type: "限时礼包",
      priceUsd: 24.99,
      oldPriceUsd: 39.99,
      tag: "活动限时",
      bonus: "1,980 💎 + 限定头像框",
      benefit: "1,980 diamonds + limited avatar frame",
      delivery: "游戏接口自动发放",
      status: "active",
      sold: 412
    }
  ],
  coupons: [
    { code: "WOOSH10", name: "全区 9 折", audience: "全部玩家", discount: 10, active: true },
    { code: "NEWBIE5", name: "新用户立减", audience: "首次 Web 充值玩家", discount: 5, active: true },
    { code: "FEST15", name: "节日礼包优惠", audience: "活动礼包购买玩家", discount: 15, active: true },
    { code: "RAMADAN30", name: "节日活动", audience: "MENA 玩家", discount: 30, active: false }
  ],
  orders: [
    { id: "WP-8271", uid: "MR-1972-8841", productId: "topup-1980", productName: "1,980 💎", market: "ID", totalUsd: 26.99, coupon: "WOOSH10", createdAt: "09:42" },
    { id: "WP-8268", uid: "MR-5120-3188", productId: "starter-pack", productName: "Starter Pack", market: "US", totalUsd: 8.99, coupon: "NEWBIE5", createdAt: "09:18" },
    { id: "WP-8264", uid: "MR-9081-4430", productId: "topup-980", productName: "980 💎", market: "BR", totalUsd: 14.99, coupon: "", createdAt: "08:57" }
  ]
};

const markets = {
  US: { label: "United States · USD", currency: "USD", locale: "en-US", rate: 1 },
  ID: { label: "Indonesia · IDR", currency: "IDR", locale: "id-ID", rate: 13513.5 },
  BR: { label: "Brazil · BRL", currency: "BRL", locale: "pt-BR", rate: 5.35 },
  SA: { label: "Saudi Arabia · SAR", currency: "SAR", locale: "ar-SA", rate: 3.75 },
  TH: { label: "Thailand · THB", currency: "THB", locale: "th-TH", rate: 36.6 },
  EU: { label: "Germany · EUR", currency: "EUR", locale: "de-DE", rate: 0.92 }
};

const weeklyRevenue = [
  { day: "周一", value: 31 },
  { day: "周二", value: 36 },
  { day: "周三", value: 34 },
  { day: "周四", value: 42 },
  { day: "周五", value: 39 },
  { day: "周六", value: 45 },
  { day: "周日", value: 49 }
];

const regionBreakdown = [
  { key: "ID", name: "印尼", share: 28 },
  { key: "BR", name: "巴西", share: 23 },
  { key: "US", name: "美国", share: 19 },
  { key: "SA", name: "沙特", share: 15 },
  { key: "TH", name: "泰国", share: 10 },
  { key: "EU", name: "欧盟", share: 5 }
];

const successRows = [
  { name: "Card", regionKey: "GLOBAL", region: "Global", success: 98.1 },
  { name: "Pix", regionKey: "BR", region: "Brazil", success: 97.8 },
  { name: "DANA / OVO", regionKey: "ID", region: "Indonesia", success: 96.9 },
  { name: "Mada", regionKey: "SA", region: "Saudi Arabia", success: 96.2 }
];

const productGroups = [
  { titleKey: "groupTopupTitle", noteKey: "groupTopupNote", types: ["固定面额充值"] },
  { titleKey: "groupActivityTitle", noteKey: "groupActivityNote", types: ["首充赠送", "限时礼包"] }
];

const redeemCodes = {
  GIFT300: "redeemGift300",
  VIP7: "redeemVip7",
  SKIN2026: "redeemSkin2026"
};

const paymentMethodsByMarket = {
  US: [
    { id: "visa", group: "Cards", icon: "💳", name: "Visa / Mastercard", success: 98.7 },
    { id: "amex", group: "Cards", icon: "💳", name: "American Express", success: 97.9 },
    { id: "apple-pay", group: "Wallets", icon: "◇", name: "Apple Pay", success: 99.1 },
    { id: "google-pay", group: "Wallets", icon: "G", name: "Google Pay", success: 98.8 },
    { id: "paypal", group: "Wallets", icon: "P", name: "PayPal", success: 97.2 },
    { id: "cash-app", group: "Wallets", icon: "$", name: "Cash App", success: 96.5 }
  ],
  ID: [
    { id: "dana", group: "E-wallets", icon: "D", name: "DANA", success: 97.4 },
    { id: "ovo", group: "E-wallets", icon: "O", name: "OVO", success: 96.9 },
    { id: "shopeepay", group: "E-wallets", icon: "S", name: "ShopeePay", success: 97.1 },
    { id: "qris", group: "QR Payment", icon: "QR", name: "QRIS", success: 98.2 }
  ],
  BR: [
    { id: "pix", group: "Instant payment", icon: "PX", name: "Pix", success: 98.4 },
    { id: "card-br", group: "Cards", icon: "💳", name: "Credit / Debit Card", success: 97.5 },
    { id: "boleto", group: "Local methods", icon: "B", name: "Boleto", success: 94.8 }
  ],
  SA: [
    { id: "mada", group: "Local cards", icon: "M", name: "Mada", success: 96.2 },
    { id: "stc-pay", group: "Wallets", icon: "STC", name: "STC Pay", success: 95.8 },
    { id: "apple-pay-sa", group: "Wallets", icon: "◇", name: "Apple Pay", success: 98.6 }
  ],
  TH: [
    { id: "promptpay", group: "QR Payment", icon: "PP", name: "PromptPay", success: 98.1 },
    { id: "truemoney", group: "Wallets", icon: "T", name: "TrueMoney", success: 96.7 },
    { id: "card-th", group: "Cards", icon: "💳", name: "Credit / Debit Card", success: 97.0 }
  ],
  EU: [
    { id: "sepa", group: "Bank transfer", icon: "SE", name: "SEPA", success: 96.4 },
    { id: "card-eu", group: "Cards", icon: "💳", name: "Visa / Mastercard", success: 98.3 },
    { id: "paypal-eu", group: "Wallets", icon: "P", name: "PayPal", success: 97.7 }
  ]
};

const translations = {
  zh: {
    documentTitle: "WooshPay GameShop 商业化 Demo",
    brandSubtitle: "商业化演示",
    navHome: "方案官网",
    navShop: "玩家充值站",
    navAdmin: "运营后台",
    demoBadge: "演示",
    heroEyebrow: "WooshPay 游戏充值站解决方案",
    heroTitle: "为出海游戏搭建可运营的官方充值站",
    heroLead: "WooshPay GameShop 帮助游戏团队快速上线 Web Shop，将玩家充值、WooshPay 支付、本地化展示、商品配置和营销活动整合到一套可运营的增长系统中。",
    heroPrimary: "体验玩家充值站",
    heroSecondary: "查看运营后台",
    metricRegions: "覆盖国家/地区",
    metricLaunch: "搭建演示站",
    metricModules: "核心运营模块",
    metricLaunchValue: "数小时",
    previewBanner: "Web 充值专享奖励",
    previewProduct: "1,980 钻石",
    previewPay: "WooshPay 支付体验",
    previewGmv: "今日 GMV",
    previewSuccess: "支付成功率 97.4%",
    whyEyebrow: "为什么现在",
    whyTitle: "第三方支付开放后，游戏出海进入“收入设计”阶段",
    whyLead: "竞争不再只是买量，而是商品怎么卖、价格怎么定、活动怎么做、玩家怎么长期留存。",
    insight1Title: "支付路径回到开发者手中",
    insight1Copy: "Web Shop 让官方充值、活动承接和玩家关系从平台内购之外延展开来。",
    insight2Title: "从统一定价到收入运营",
    insight2Copy: "不同地区、用户层级和活动周期需要更灵活的商品包装与展示策略。",
    insight3Title: "第二商业化系统",
    insight3Copy: "官方充值站承接利润、数据和品牌信任，为后续会员和召回运营打基础。",
    painEyebrow: "商业化痛点",
    painTitle: "商店解决覆盖，官方充值站解决利润与运营主动权",
    painCardTitle: "厂商的难点",
    painCardBadge: "业务阻碍",
    pain1: "平台抽成压缩利润，外部购买引导规则逐步变化。",
    pain2: "玩家数据难沉淀，难以做高价值玩家分层运营。",
    pain3: "自建充值站周期长，多语言、多货币、本地支付门槛高。",
    solutionCardTitle: "GameShop 的解法",
    solutionCardBadge: "优先方案",
    solution1: "官方充值站承接 Web 专享商品与活动，提升利润空间。",
    solution2: "语言、地区、活动权益和玩家订单统一沉淀，支撑运营复盘。",
    solution3: "商品、营销和数据看板后台化配置，运营团队可自助迭代。",
    loopEyebrow: "产品闭环",
    loopTitle: "从商品配置到玩家直充，再到活动优化",
    loop1Title: "商品配置",
    loop1Copy: "商品、价格、权益说明",
    loop2Title: "玩家直充",
    loop2Copy: "UID 识别、本地货币展示",
    loop3Title: "WooshPay 支付",
    loop3Copy: "本地化支付体验",
    loop4Title: "数据看板",
    loop4Copy: "GMV、地区、热销商品",
    loop5Title: "营销优化",
    loop5Copy: "优惠码、活动 banner",
    scenarioEyebrow: "全功能覆盖",
    scenarioTitle: "适配游戏充值站的关键购买场景",
    scenario1: "一次性购买",
    scenario2: "固定面额充值",
    scenario3: "礼包购买",
    scenario4: "首充赠送",
    scenario5: "限购商品",
    scenario6: "优惠码活动",
    scenario7: "限时礼包",
    scenario8: "分人群定价",
    capabilityEyebrow: "商业化能力",
    capabilityTitle: "不是只建一个网站，而是搭一套可运营的充值增长系统",
    capability1Title: "提升利润空间",
    capability1Copy: "通过官方 Web Shop 承接更多直充场景，减少对单一应用商店路径的依赖。",
    capability2Title: "提升支付转化",
    capability2Copy: "使用 WooshPay 支持本地化支付体验，降低玩家购买决策门槛。",
    capability3Title: "提升运营效率",
    capability3Copy: "运营人员可配置商品、活动和上下架状态，减少重复开发需求。",
    capability4Title: "沉淀玩家资产",
    capability4Copy: "官方站承接玩家 UID、活动参与和付费表现，为高价值玩家运营打基础。",
    shopSubtitle: "官方充值中心",
    shopSettingsAria: "充值站设置",
    languageLabel: "语言",
    regionLabel: "国家/地区",
    loginButton: "玩家登录",
    loggedIn: "已登录 · {account}",
    shopBannerEyebrow: "网页专享",
    shopBannerTitle: "官方充值站，支持当地货币与充值好礼",
    shopBannerCopy: "选择国家后自动展示当地货币，使用 WooshPay 完成支付，固定充值档位、首充赠送和限时礼包统一结算。",
    valueCurrencyTitle: "当地货币展示",
    valuePackageTitle: "精选商品包装",
    valuePackageCopy: "固定面额 · 首充赠送 · 限时礼包",
    valueCheckoutTitle: "WooshPay 支付",
    valueCheckoutCopy: "商品价格与支付方式实时联动",
    catalogTitle: "精选充值商品",
    catalogCopy: "先展示最适合商业化验证的商品类型：固定面额充值、首充赠送和限时礼包。",
    catalogRateNote: "国家切换后价格实时换算",
    couponTitle: "优惠码",
    couponAria: "优惠码",
    couponApply: "应用",
    redeemTitle: "兑换码 / 充值卡",
    redeemAria: "兑换码 / 充值卡",
    redeemOptional: "可选",
    redeemButton: "立即兑换",
    redeemMessage: "兑换码独立发放权益，不影响当前订单折扣。",
    shopNotesEyebrow: "全球充值站",
    noteLanguageTitle: "语言展示：",
    noteLanguageCopy: "语言切换用于演示本地化入口，不影响支付流程。",
    noteRegionTitle: "地区与货币：",
    noteRegionCopy: "国家/地区决定商品与结算弹窗中的展示货币。",
    noteDeliveryTitle: "权益发放：",
    noteDeliveryCopy: "实际到账以游戏侧商品体系或发货接口为准。",
    adminNavTitle: "运营",
    adminDashboard: "数据看板",
    adminProducts: "商品",
    adminMarketing: "营销中心",
    adminTitle: "WooshPay GameShop 运营后台",
    adminSubtitle: "Mythic Realm · 官方充值站 · 零代码运营",
    adminHealthy: "系统正常",
    kpiGmv: "今日流水 GMV",
    kpiGmvNote: "含当前模拟订单",
    kpiOrders: "今日订单数",
    kpiOrdersNote: "玩家直充订单",
    kpiSuccess: "支付成功率",
    kpiSuccessNote: "WooshPay 体验",
    kpiArppuNote: "近 24 小时",
    revenueTitle: "近 7 日流水趋势",
    revenueUnit: "单位：USD",
    revenueCaption: "横轴为自然日，纵轴为当日流水规模。",
    chartYAxis: "流水",
    chartXAxis: "日期",
    regionRevenue: "地区流水占比",
    topProducts: "热销商品",
    successMonitor: "支付成功率监控",
    recentOrders: "最近订单",
    productsTitle: "商品",
    productsCopy: "配置玩家充值站展示的商品、价格、权益说明和上下架状态。",
    addProduct: "添加商品",
    tableProduct: "商品",
    tableEconomics: "价格与赠送",
    tableBenefit: "权益与发放",
    tableSales: "销量",
    tableStatus: "状态",
    tableActions: "操作",
    productDetail: "商品详情",
    displayPrice: "展示价格",
    productType: "商品类型",
    bonus: "赠送",
    deliveryMethod: "发放方式",
    benefitDesc: "权益说明",
    productLogicNote: "权益说明可在充值站展示；实际到账以游戏商品配置和发放接口为准。",
    saveChanges: "保存修改",
    previewShop: "预览玩家站",
    unpublish: "下架",
    publish: "上架",
    marketingTitle: "营销中心",
    marketingCopy: "管理充值活动、优惠码和活动 Banner。",
    newActivity: "新建活动",
    campaignLive: "生效中",
    bannerQueueTitle: "玩家站活动 Banner",
    banner1: "Web 充值专享奖励",
    banner2: "新用户首充 5 折",
    banner3: "限时礼包返场",
    primary: "主推",
    secondary: "次位",
    backup: "备用",
    close: "关闭",
    modalAddProduct: "添加商品",
    productName: "商品名称",
    activityTag: "活动标签",
    saveDraft: "保存草稿",
    publishProduct: "上架商品",
    loginEyebrow: "玩家登录",
    loginTitle: "登录后继续充值",
    loginCopy: "使用邮箱、手机号或游戏账号完成演示登录；当前版本不连接真实账号系统。",
    account: "账号",
    playerUid: "玩家 ID / 游戏 UID",
    later: "稍后再说",
    loginContinue: "登录并继续",
    checkoutTitle: "去结算",
    modalProduct: "充值商品",
    modalSubtotal: "商品金额",
    modalCoupon: "优惠码",
    modalTotal: "应付金额",
    paymentSuccessHint: "成功率实时参考",
    payNow: "立即支付",
    secureNote: "256 位加密安全支付 · Powered by WooshPay",
    paymentTitle: "支付成功",
    receiptId: "订单号",
    receiptUid: "玩家 UID",
    receiptProduct: "充值商品",
    receiptTotal: "支付金额",
    receiptBenefit: "到账说明",
    continueShopping: "继续逛逛",
    viewAdminData: "查看后台数据",
    groupCount: "{count} 个商品",
    groupTopupTitle: "充值档位",
    groupTopupNote: "稳定售卖的基础充值档，适合验证区域价格和转化。",
    groupActivityTitle: "活动推荐",
    groupActivityNote: "首充赠送与限时礼包承接运营活动，突出权益和稀缺感。",
    rechargeNow: "立即充值",
    couponUnavailable: "优惠码不可用",
    couponApplied: "{code} 已优惠 {discount}%",
    couponPaused: "暂停",
    couponNotUsed: "未使用",
    couponSetCurrent: "设为当前活动",
    couponCurrent: "当前活动",
    couponAudienceDiscount: "{audience} · {discount}% 优惠",
    redeemed: "已兑换",
    redeemGift300: "已兑换 300 💎 礼品码，权益将由游戏侧发放。",
    redeemVip7: "已兑换 7 天 VIP 体验卡，权益将由游戏侧发放。",
    redeemSkin2026: "已兑换限定皮肤兑换码，权益将由游戏侧发放。",
    selectPayment: "请选择支付方式 · {market}",
    weeklyGmv: "本周 GMV",
    peakDay: "峰值日",
    weekOverWeek: "周环比",
    orderCount: "订单数",
    method: "方式",
    region: "地区",
    productRevenue: "流水",
    monthlySales: "本月销量",
    live: "已上架",
    draft: "草稿",
    published: "上架",
    unpublished: "下架",
    edit: "编辑",
    customReward: "自定义权益",
    customTag: "自定义",
    limitedBundle: "限时礼包",
    newProductDefaultName: "新节日礼包",
    newProductDefaultPrice: "$19.99",
    newProductDefaultType: "限时礼包",
    newProductDefaultTag: "限时",
    newProductDefaultBenefit: "1,980 💎 + 限定头像框",
    newProductDefaultDelivery: "游戏接口自动发放",
    marketPricing: "{market} · 本地定价",
    viewHome: "方案官网",
    viewShop: "玩家充值站",
    viewAdmin: "运营后台",
    toastView: "已切换到{view}",
    toastLanguage: "已切换语言：{language}",
    toastRegion: "已切换国家/地区：{region}",
    toastCouponApplied: "已应用 {code}，优惠 {discount}%",
    toastCouponInvalid: "优惠码无效或已暂停",
    toastRedeemed: "已兑换 {code}",
    toastRedeemInvalid: "兑换码无效，请检查后重试",
    toastNeedUid: "请先输入玩家 UID",
    toastNeedProduct: "请先上架至少一个商品",
    toastNeedLogin: "请先登录玩家账号",
    toastPaymentSuccess: "WooshPay 支付成功，订单已写入后台",
    toastLoggedIn: "已登录 {account}",
    toastProductSynced: "商品配置已同步到玩家站",
    toastProductStatus: "{product} 已{status}",
    toastNeedProductName: "请填写商品名称",
    toastNeedValidPrice: "请填写有效价格",
    toastProductSaved: "{product} 已{status}",
    toastSelected: "已选中 {title}",
    toastOpened: "已打开{title}",
    toastAddProduct: "打开添加商品配置",
    selectedPayment: "已选择 {name}",
    marketUS: "美国",
    marketID: "印尼",
    marketBR: "巴西",
    marketSA: "沙特阿拉伯",
    marketTH: "泰国",
    marketEU: "德国（欧盟）",
    marketGLOBAL: "全球",
    dayMon: "周一",
    dayTue: "周二",
    dayWed: "周三",
    dayThu: "周四",
    dayFri: "周五",
    daySat: "周六",
    daySun: "周日",
    paymentCards: "银行卡",
    paymentWallets: "电子钱包",
    paymentEwallets: "电子钱包",
    paymentQr: "扫码支付",
    paymentInstant: "即时支付",
    paymentLocal: "本地支付",
    paymentLocalCards: "本地银行卡",
    paymentBank: "银行转账",
    productTopupType: "固定面额充值",
    productFirstType: "首充赠送",
    productBundleType: "限时礼包",
    tagBasic: "基础档位",
    tagHot: "热销",
    tagHighValue: "高价值",
    tagFirstDouble: "首充双倍",
    tagStarter: "新手推荐",
    tagLimited: "活动限时",
    benefit300: "300 钻石",
    benefit980: "980 钻石 + 赠送 147 钻石",
    benefit1980: "1,980 钻石 + 赠送 396 钻石",
    benefitFirst300: "300 钻石 + 首充赠送 300 钻石",
    benefitStarter: "680 钻石 + 3 天加速道具",
    benefitFestival: "1,980 钻石 + 限定头像框",
    deliveryAuto: "游戏接口自动发放",
    first300Name: "首充 300 💎",
    starterName: "新手礼包",
    festivalName: "节日礼包",
    couponNameWOOSH10: "全区 9 折",
    couponNameNEWBIE5: "新用户立减",
    couponNameFEST15: "节日礼包优惠",
    couponNameRAMADAN30: "节日活动",
    couponAudienceWOOSH10: "全部玩家",
    couponAudienceNEWBIE5: "首次 Web 充值玩家",
    couponAudienceFEST15: "活动礼包购买玩家",
    couponAudienceRAMADAN30: "MENA 玩家"
  },
  en: {
    documentTitle: "WooshPay GameShop Commercial Demo",
    brandSubtitle: "Commercial Demo",
    navHome: "Solution Site",
    navShop: "Player Top-up",
    navAdmin: "Operations",
    demoBadge: "DEMO",
    heroEyebrow: "WooshPay Game Top-up Solution",
    heroTitle: "Build an operable official top-up site for global games",
    heroLead: "WooshPay GameShop helps game teams launch a Web Shop quickly and connect player top-up, WooshPay payments, localized display, product setup, and campaigns in one growth system.",
    heroPrimary: "Try Player Top-up",
    heroSecondary: "View Operations",
    metricRegions: "countries / regions",
    metricLaunch: "demo site setup",
    metricModules: "core operation modules",
    metricLaunchValue: "Hours",
    previewBanner: "Web top-up exclusive rewards",
    previewProduct: "1,980 diamonds",
    previewPay: "WooshPay payment experience",
    previewGmv: "Today GMV",
    previewSuccess: "Payment success rate 97.4%",
    whyEyebrow: "Why now",
    whyTitle: "After third-party payment opens, global games enter the revenue design stage",
    whyLead: "Competition is no longer only about user acquisition. It is also about packaging, pricing, campaigns, and long-term retention.",
    insight1Title: "Payment paths return to developers",
    insight1Copy: "Web Shop expands official top-up, campaign landing, and player relationships beyond in-app purchase paths.",
    insight2Title: "From uniform pricing to revenue operations",
    insight2Copy: "Different regions, player tiers, and campaign cycles need more flexible product packaging and display strategies.",
    insight3Title: "A second commercialization system",
    insight3Copy: "The official top-up site carries margin, data, and brand trust for future membership and win-back operations.",
    painEyebrow: "Commercial pain points",
    painTitle: "Stores solve reach; official top-up sites solve margin and operational control",
    painCardTitle: "Merchant pain points",
    painCardBadge: "Business blockers",
    pain1: "Platform fees compress margin while external purchase guidance rules keep changing.",
    pain2: "Player data is hard to retain, making high-value player operations difficult.",
    pain3: "Building a top-up site takes time, and localization, currencies, and local payments raise the bar.",
    solutionCardTitle: "GameShop solution",
    solutionCardBadge: "Preferred path",
    solution1: "An official top-up site hosts web-exclusive products and campaigns to improve margin.",
    solution2: "Language, region, campaign benefits, and player orders are unified for operations review.",
    solution3: "Products, marketing, and dashboards are configurable so operators can iterate independently.",
    loopEyebrow: "Product loop",
    loopTitle: "From product setup to player top-up and campaign optimization",
    loop1Title: "Product setup",
    loop1Copy: "Products, prices, and benefit copy",
    loop2Title: "Player top-up",
    loop2Copy: "UID recognition and local currency display",
    loop3Title: "WooshPay payment",
    loop3Copy: "Localized payment experience",
    loop4Title: "Dashboard",
    loop4Copy: "GMV, regions, and top products",
    loop5Title: "Marketing optimization",
    loop5Copy: "Coupons and campaign banners",
    scenarioEyebrow: "Scenario coverage",
    scenarioTitle: "Key purchase scenarios for game top-up sites",
    scenario1: "One-time purchase",
    scenario2: "Fixed top-up tier",
    scenario3: "Bundle purchase",
    scenario4: "First recharge bonus",
    scenario5: "Limited purchase",
    scenario6: "Coupon campaign",
    scenario7: "Limited-time bundle",
    scenario8: "Segmented pricing",
    capabilityEyebrow: "Commercial capabilities",
    capabilityTitle: "Not just a website, but an operable top-up growth system",
    capability1Title: "Improve margin",
    capability1Copy: "Use an official Web Shop to capture more direct top-up scenarios and reduce reliance on a single app-store path.",
    capability2Title: "Improve payment conversion",
    capability2Copy: "Use WooshPay to support localized payment experiences and reduce player purchase friction.",
    capability3Title: "Improve operating efficiency",
    capability3Copy: "Operators can configure products, campaigns, and listing status with less repeated development work.",
    capability4Title: "Build player assets",
    capability4Copy: "The official site captures player UID, campaign participation, and payment behavior for high-value operations.",
    shopSubtitle: "Official Top-up Center",
    shopSettingsAria: "Top-up site settings",
    languageLabel: "Language",
    regionLabel: "Country / Region",
    loginButton: "Player Login",
    loggedIn: "Logged in · {account}",
    shopBannerEyebrow: "WEB EXCLUSIVE",
    shopBannerTitle: "Official top-up site with local currency and rewards",
    shopBannerCopy: "After selecting a country, the site shows local currency automatically. Players pay with WooshPay and check out fixed tiers, first recharge bonuses, and limited bundles together.",
    valueCurrencyTitle: "Local currency display",
    valuePackageTitle: "Curated product packaging",
    valuePackageCopy: "Fixed tiers · First recharge · Limited bundles",
    valueCheckoutTitle: "WooshPay Checkout",
    valueCheckoutCopy: "Product prices and payment methods update in real time",
    catalogTitle: "Curated top-up products",
    catalogCopy: "Show the product types best suited for commercial validation: fixed top-up tiers, first recharge bonus, and limited-time bundles.",
    catalogRateNote: "Prices update after country switch",
    couponTitle: "Coupon Code",
    couponAria: "Coupon Code",
    couponApply: "Apply",
    redeemTitle: "Redeem Code / Top-up Card",
    redeemAria: "Redeem Code / Top-up Card",
    redeemOptional: "Optional",
    redeemButton: "Redeem Now",
    redeemMessage: "Redeem codes grant benefits separately and do not change the current order discount.",
    shopNotesEyebrow: "Global Web Shop",
    noteLanguageTitle: "Language: ",
    noteLanguageCopy: "Language switching demonstrates localization entry points and does not affect payment flow.",
    noteRegionTitle: "Region and currency: ",
    noteRegionCopy: "Country / region controls the currency shown in products and checkout.",
    noteDeliveryTitle: "Benefit delivery: ",
    noteDeliveryCopy: "Actual delivery depends on the game product system or fulfillment API.",
    adminNavTitle: "Operations",
    adminDashboard: "Dashboard",
    adminProducts: "Products",
    adminMarketing: "Marketing",
    adminTitle: "WooshPay GameShop Console",
    adminSubtitle: "Mythic Realm · Official top-up site · No-code operations",
    adminHealthy: "System normal",
    kpiGmv: "Today GMV",
    kpiGmvNote: "Includes simulated orders",
    kpiOrders: "Today orders",
    kpiOrdersNote: "Player direct top-up orders",
    kpiSuccess: "Payment success rate",
    kpiSuccessNote: "WooshPay experience",
    kpiArppuNote: "Last 24 hours",
    revenueTitle: "7-day revenue trend",
    revenueUnit: "Unit: USD",
    revenueCaption: "X-axis is calendar day; Y-axis is daily revenue scale.",
    chartYAxis: "Revenue",
    chartXAxis: "Date",
    regionRevenue: "Revenue by region",
    topProducts: "Top products",
    successMonitor: "Payment success monitor",
    recentOrders: "Recent orders",
    productsTitle: "Products",
    productsCopy: "Configure products, prices, benefit copy, and listing status shown on the player top-up site.",
    addProduct: "Add Product",
    tableProduct: "Product",
    tableEconomics: "Price & bonus",
    tableBenefit: "Benefits & delivery",
    tableSales: "Sales",
    tableStatus: "Status",
    tableActions: "Actions",
    productDetail: "Product details",
    displayPrice: "Display price",
    productType: "Product type",
    bonus: "Bonus",
    deliveryMethod: "Delivery method",
    benefitDesc: "Benefit copy",
    productLogicNote: "Benefit copy can be shown on the top-up site; actual delivery depends on the game product system or fulfillment API.",
    saveChanges: "Save Changes",
    previewShop: "Preview Player Site",
    unpublish: "Unpublish",
    publish: "Publish",
    marketingTitle: "Marketing",
    marketingCopy: "Manage top-up campaigns, coupon codes, and campaign banners.",
    newActivity: "New Campaign",
    campaignLive: "Active",
    bannerQueueTitle: "Player Site Campaign Banner",
    banner1: "Web top-up exclusive rewards",
    banner2: "New user first recharge 50% off",
    banner3: "Limited bundle return",
    primary: "Primary",
    secondary: "Secondary",
    backup: "Backup",
    close: "Close",
    modalAddProduct: "Add Product",
    productName: "Product name",
    activityTag: "Campaign tag",
    saveDraft: "Save Draft",
    publishProduct: "Publish Product",
    loginEyebrow: "Player Login",
    loginTitle: "Log in to continue top-up",
    loginCopy: "Use email, phone, or game account for demo login. This version does not connect to a real account system.",
    account: "Account",
    playerUid: "Player ID / Game UID",
    later: "Maybe Later",
    loginContinue: "Log in and Continue",
    checkoutTitle: "Checkout",
    modalProduct: "Top-up Product",
    modalSubtotal: "Product Amount",
    modalCoupon: "Coupon",
    modalTotal: "Amount Due",
    paymentSuccessHint: "Real-time success reference",
    payNow: "Pay Now",
    secureNote: "256-bit encrypted secure payment · Powered by WooshPay",
    paymentTitle: "Payment Successful",
    receiptId: "Order ID",
    receiptUid: "Player UID",
    receiptProduct: "Top-up Product",
    receiptTotal: "Paid Amount",
    receiptBenefit: "Delivery Note",
    continueShopping: "Continue Shopping",
    viewAdminData: "View Admin Data",
    groupCount: "{count} products",
    groupTopupTitle: "Top-up tiers",
    groupTopupNote: "Stable base top-up tiers for validating regional pricing and conversion.",
    groupActivityTitle: "Campaign picks",
    groupActivityNote: "First recharge and limited bundles support campaigns while highlighting benefits and scarcity.",
    rechargeNow: "Recharge Now",
    couponUnavailable: "Coupon unavailable",
    couponApplied: "{code} saved {discount}%",
    couponPaused: "Paused",
    couponNotUsed: "Not used",
    couponSetCurrent: "Set as current campaign",
    couponCurrent: "Current campaign",
    couponAudienceDiscount: "{audience} · {discount}% off",
    redeemed: "Redeemed",
    redeemGift300: "Redeemed a 300 💎 gift code. Benefits will be delivered by the game side.",
    redeemVip7: "Redeemed a 7-day VIP trial card. Benefits will be delivered by the game side.",
    redeemSkin2026: "Redeemed a limited skin code. Benefits will be delivered by the game side.",
    selectPayment: "Select a payment method · {market}",
    weeklyGmv: "Weekly GMV",
    peakDay: "Peak day",
    weekOverWeek: "WoW",
    orderCount: "Orders",
    method: "Method",
    region: "Region",
    productRevenue: "Revenue",
    monthlySales: "Monthly sales",
    live: "Live",
    draft: "Draft",
    published: "published",
    unpublished: "unpublished",
    edit: "Edit",
    customReward: "Custom reward",
    customTag: "Custom",
    limitedBundle: "Limited bundle",
    newProductDefaultName: "New Festival Pack",
    newProductDefaultPrice: "$19.99",
    newProductDefaultType: "Limited bundle",
    newProductDefaultTag: "Limited",
    newProductDefaultBenefit: "1,980 💎 + limited avatar frame",
    newProductDefaultDelivery: "Game API auto delivery",
    marketPricing: "{market} · local pricing",
    viewHome: "Solution Site",
    viewShop: "Player Top-up",
    viewAdmin: "Operations",
    toastView: "Switched to {view}",
    toastLanguage: "Language switched: {language}",
    toastRegion: "Country / region switched: {region}",
    toastCouponApplied: "Applied {code}, {discount}% off",
    toastCouponInvalid: "Coupon invalid or paused",
    toastRedeemed: "Redeemed {code}",
    toastRedeemInvalid: "Invalid redeem code. Please check and try again.",
    toastNeedUid: "Please enter player UID first",
    toastNeedProduct: "Please publish at least one product first",
    toastNeedLogin: "Please log in to the player account first",
    toastPaymentSuccess: "WooshPay payment successful. Order synced to admin.",
    toastLoggedIn: "Logged in {account}",
    toastProductSynced: "Product settings synced to player site",
    toastProductStatus: "{product} {status}",
    toastNeedProductName: "Please enter product name",
    toastNeedValidPrice: "Please enter a valid price",
    toastProductSaved: "{product} saved as {status}",
    toastSelected: "Selected {title}",
    toastOpened: "Opened {title}",
    toastAddProduct: "Opened add product setup",
    selectedPayment: "Selected {name}",
    marketUS: "United States",
    marketID: "Indonesia",
    marketBR: "Brazil",
    marketSA: "Saudi Arabia",
    marketTH: "Thailand",
    marketEU: "Germany (EU)",
    marketGLOBAL: "Global",
    dayMon: "Mon",
    dayTue: "Tue",
    dayWed: "Wed",
    dayThu: "Thu",
    dayFri: "Fri",
    daySat: "Sat",
    daySun: "Sun",
    paymentCards: "Cards",
    paymentWallets: "Wallets",
    paymentEwallets: "E-wallets",
    paymentQr: "QR Payment",
    paymentInstant: "Instant payment",
    paymentLocal: "Local methods",
    paymentLocalCards: "Local cards",
    paymentBank: "Bank transfer",
    productTopupType: "Fixed top-up tier",
    productFirstType: "First recharge bonus",
    productBundleType: "Limited bundle",
    tagBasic: "Base tier",
    tagHot: "Hot",
    tagHighValue: "High value",
    tagFirstDouble: "First recharge 2x",
    tagStarter: "Starter pick",
    tagLimited: "Campaign limited",
    benefit300: "300 diamonds",
    benefit980: "980 diamonds + bonus 147 diamonds",
    benefit1980: "1,980 diamonds + bonus 396 diamonds",
    benefitFirst300: "300 diamonds + first recharge bonus 300 diamonds",
    benefitStarter: "680 diamonds + 3-day booster",
    benefitFestival: "1,980 diamonds + limited avatar frame",
    deliveryAuto: "Game API auto delivery",
    first300Name: "First Recharge 300 💎",
    starterName: "Starter Pack",
    festivalName: "Festival Pack",
    couponNameWOOSH10: "10% off all regions",
    couponNameNEWBIE5: "New user discount",
    couponNameFEST15: "Festival bundle discount",
    couponNameRAMADAN30: "Festival campaign",
    couponAudienceWOOSH10: "All players",
    couponAudienceNEWBIE5: "First-time Web top-up players",
    couponAudienceFEST15: "Campaign bundle buyers",
    couponAudienceRAMADAN30: "MENA players"
  }
};

const languageNames = {
  en: "English",
  zh: "简体中文",
  th: "Thai",
  ar: "Arabic",
  es: "Spanish",
  pt: "Portuguese"
};

const languageOptionLabels = {
  zh: {
    en: "English",
    zh: "简体中文",
    th: "泰语",
    ar: "阿拉伯语",
    es: "西班牙语",
    pt: "葡萄牙语"
  },
  en: {
    en: "English",
    zh: "Chinese",
    th: "Thai",
    ar: "Arabic",
    es: "Spanish",
    pt: "Portuguese"
  }
};

const languageToastLabels = {
  zh: {
    en: "英文",
    zh: "简体中文",
    th: "泰语",
    ar: "阿拉伯语",
    es: "西班牙语",
    pt: "葡萄牙语"
  },
  en: languageNames
};

const marketFlags = {
  US: "🇺🇸",
  ID: "🇮🇩",
  BR: "🇧🇷",
  SA: "🇸🇦",
  TH: "🇹🇭",
  EU: "🇪🇺",
  GLOBAL: ""
};

const weekdayKeys = ["dayMon", "dayTue", "dayWed", "dayThu", "dayFri", "daySat", "daySun"];

const paymentGroupKeys = {
  Cards: "paymentCards",
  Wallets: "paymentWallets",
  "E-wallets": "paymentEwallets",
  "QR Payment": "paymentQr",
  "Instant payment": "paymentInstant",
  "Local methods": "paymentLocal",
  "Local cards": "paymentLocalCards",
  "Bank transfer": "paymentBank"
};

const productTextKeys = {
  "topup-300": {
    type: "productTopupType",
    tag: "tagBasic",
    benefit: "benefit300",
    delivery: "deliveryAuto"
  },
  "topup-980": {
    type: "productTopupType",
    tag: "tagHot",
    benefit: "benefit980",
    delivery: "deliveryAuto"
  },
  "topup-1980": {
    type: "productTopupType",
    tag: "tagHighValue",
    benefit: "benefit1980",
    delivery: "deliveryAuto"
  },
  "first-300": {
    name: "first300Name",
    type: "productFirstType",
    tag: "tagFirstDouble",
    bonus: "benefitFirst300",
    benefit: "benefitFirst300",
    delivery: "deliveryAuto"
  },
  "starter-pack": {
    name: "starterName",
    type: "productBundleType",
    tag: "tagStarter",
    bonus: "benefitStarter",
    benefit: "benefitStarter",
    delivery: "deliveryAuto"
  },
  "festival-pack": {
    name: "festivalName",
    type: "productBundleType",
    tag: "tagLimited",
    bonus: "benefitFestival",
    benefit: "benefitFestival",
    delivery: "deliveryAuto"
  }
};

const elements = {
  viewLinks: document.querySelectorAll("[data-view-link]"),
  views: {
    home: document.querySelector("#view-home"),
    shop: document.querySelector("#view-shop"),
    admin: document.querySelector("#view-admin")
  },
  languageSelect: document.querySelector("#language-select"),
  regionSelect: document.querySelector("#region-select"),
  pricingNote: document.querySelector("#pricing-note"),
  loginButton: document.querySelector("#login-button"),
  shopProducts: document.querySelector("#shop-products"),
  couponCode: document.querySelector("#coupon-code"),
  applyCoupon: document.querySelector("#apply-coupon"),
  couponChips: document.querySelector("#coupon-chips"),
  couponStatus: document.querySelector("#coupon-status"),
  redeemCode: document.querySelector("#redeem-code"),
  applyRedeem: document.querySelector("#apply-redeem"),
  redeemStatus: document.querySelector("#redeem-status"),
  redeemMessage: document.querySelector("#redeem-message"),
  adminButtons: document.querySelectorAll("[data-admin-tab]"),
  adminPanels: document.querySelectorAll("[data-admin-panel]"),
  productRows: document.querySelector("#product-rows"),
  detailName: document.querySelector("#detail-name"),
  editPrice: document.querySelector("#edit-price"),
  editType: document.querySelector("#edit-type"),
  editBonus: document.querySelector("#edit-bonus"),
  editBenefit: document.querySelector("#benefit-input"),
  editDelivery: document.querySelector("#edit-delivery"),
  saveProduct: document.querySelector("#save-product"),
  previewProduct: document.querySelector("#preview-product"),
  toggleProductStatus: document.querySelector("#toggle-product-status"),
  productModal: document.querySelector("#product-modal"),
  addProduct: document.querySelector("#add-product"),
  closeProductModal: document.querySelector("#product-modal .close-modal"),
  newProductName: document.querySelector("#new-product-name"),
  newProductPrice: document.querySelector("#new-product-price"),
  newProductType: document.querySelector("#new-product-type"),
  newProductTag: document.querySelector("#new-product-tag"),
  newProductBenefit: document.querySelector("#new-product-benefit"),
  newProductDelivery: document.querySelector("#new-product-delivery"),
  saveDraftProduct: document.querySelector("#save-draft-product"),
  publishProduct: document.querySelector("#publish-product"),
  marketingGrid: document.querySelector("#marketing-grid"),
  kpiGmv: document.querySelector("#kpi-gmv"),
  kpiOrders: document.querySelector("#kpi-orders"),
  kpiSuccess: document.querySelector("#kpi-success"),
  kpiArppu: document.querySelector("#kpi-arppu"),
  revenueChart: document.querySelector("#revenue-chart"),
  revenueSummary: document.querySelector("#revenue-summary"),
  regionList: document.querySelector("#region-list"),
  topProducts: document.querySelector("#top-products"),
  successMonitor: document.querySelector("#success-monitor"),
  orderFeed: document.querySelector("#order-feed"),
  loginModal: document.querySelector("#login-modal"),
  loginAccount: document.querySelector("#login-account"),
  loginUid: document.querySelector("#login-uid"),
  confirmLogin: document.querySelector("#confirm-login"),
  checkoutModal: document.querySelector("#checkout-modal"),
  modalProduct: document.querySelector("#modal-product"),
  modalSubtotal: document.querySelector("#modal-subtotal"),
  modalCoupon: document.querySelector("#modal-coupon"),
  modalTotal: document.querySelector("#modal-total"),
  modalMarket: document.querySelector("#modal-market"),
  paymentMethods: document.querySelector("#payment-methods"),
  confirmPayment: document.querySelector("#confirm-payment"),
  paymentModal: document.querySelector("#payment-modal"),
  receiptId: document.querySelector("#receipt-id"),
  receiptUid: document.querySelector("#receipt-uid"),
  receiptProduct: document.querySelector("#receipt-product"),
  receiptTotal: document.querySelector("#receipt-total"),
  receiptBenefit: document.querySelector("#receipt-benefit"),
  receiptAdmin: document.querySelector("#receipt-admin")
};

const toast = document.createElement("div");
let toastTimer;
let state = loadState();
let resumeCheckoutAfterLogin = false;

toast.className = "toast";
toast.setAttribute("role", "status");
document.body.appendChild(toast);

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function normalizeState(nextState) {
  nextState.products = nextState.products.map((product) => ({
    ...product,
    delivery: product.delivery === "游戏侧发货 / API 回调" ? "游戏接口自动发放" : product.delivery
  }));
  return nextState;
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && Array.isArray(parsed.products) && Array.isArray(parsed.coupons)) {
      const base = cloneDefaultState();
      return normalizeState({ ...base, ...parsed, player: { ...base.player, ...(parsed.player || {}) } });
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return normalizeState(cloneDefaultState());
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function currentLanguage() {
  return state.language === "zh" ? "zh" : "en";
}

function t(key, replacements = {}) {
  const lang = currentLanguage();
  const template = translations[lang]?.[key] ?? translations.en[key] ?? key;
  return Object.entries(replacements).reduce((text, [name, value]) => {
    return text.replaceAll(`{${name}}`, value);
  }, template);
}

function setText(selector, key, root = document) {
  const element = root.querySelector(selector);
  if (element) element.textContent = t(key);
}

function setAria(selector, key, root = document) {
  const element = root.querySelector(selector);
  if (element) element.setAttribute("aria-label", t(key));
}

function setLabel(selector, key, root = document) {
  const label = root.querySelector(selector);
  if (!label) return;
  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
  if (textNode) {
    textNode.textContent = t(key);
  } else {
    label.insertBefore(document.createTextNode(t(key)), label.firstChild);
  }
}

function formatCount(value) {
  return new Intl.NumberFormat(currentLanguage() === "zh" ? "zh-CN" : "en-US").format(value);
}

function marketName(key) {
  return t(`market${key}`);
}

function marketOptionLabel(key) {
  const market = markets[key] || markets.ID;
  const flag = marketFlags[key] ? `${marketFlags[key]} ` : "";
  return `${flag}${marketName(key)} · ${market.currency}`;
}

function paymentGroupLabel(group) {
  return t(paymentGroupKeys[group] || "paymentLocal");
}

function dayLabel(index) {
  return t(weekdayKeys[index] || "dayMon");
}

function productText(product, field) {
  const key = productTextKeys[product.id]?.[field];
  if (key) return t(key);
  if (field === "status") return product.status === "active" ? t("live") : t("draft");
  return product[field] || "";
}

function productSourceType(product) {
  const defaultType = defaultState.products.find((item) => item.id === product.id)?.type;
  if (defaultType) return defaultType;
  const typeMap = {
    [translations.zh.productTopupType]: "固定面额充值",
    [translations.en.productTopupType]: "固定面额充值",
    [translations.zh.productFirstType]: "首充赠送",
    [translations.en.productFirstType]: "首充赠送",
    [translations.zh.productBundleType]: "限时礼包",
    [translations.en.productBundleType]: "限时礼包",
    [translations.zh.limitedBundle]: "限时礼包",
    [translations.en.limitedBundle]: "限时礼包"
  };
  return typeMap[product.type] || product.type;
}

function couponText(coupon, field) {
  const keyPrefix = field === "name" ? "couponName" : "couponAudience";
  return t(`${keyPrefix}${coupon.code}`);
}

function orderProductName(order) {
  const product = state.products.find((item) => item.id === order.productId);
  return product ? productText(product, "name") : order.productName;
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function setView(nextView, silent = false) {
  const view = elements.views[nextView] ? nextView : "home";
  state.view = view;
  Object.entries(elements.views).forEach(([key, element]) => {
    element.classList.toggle("is-active", key === view);
  });
  elements.viewLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewLink === view);
  });
  if (location.hash.replace("#", "") !== view) {
    history.replaceState(null, "", `#${view}`);
  }
  saveState();
  if (!silent) showToast(t("toastView", { view: viewName(view) }));
}

function viewName(view) {
  return { home: t("viewHome"), shop: t("viewShop"), admin: t("viewAdmin") }[view] || t("viewHome");
}

function activeProducts() {
  return state.products.filter((product) => product.status === "active");
}

function selectedProduct() {
  const products = activeProducts();
  if (!products.find((product) => product.id === state.selectedProductId)) {
    state.selectedProductId = products[0]?.id || "";
  }
  return products.find((product) => product.id === state.selectedProductId) || products[0];
}

function selectedAdminProduct() {
  if (!state.products.find((product) => product.id === state.selectedAdminProductId)) {
    state.selectedAdminProductId = state.products[0]?.id || "";
  }
  return state.products.find((product) => product.id === state.selectedAdminProductId) || state.products[0];
}

function activeCoupon() {
  const code = state.couponCode.trim().toUpperCase();
  return state.coupons.find((coupon) => coupon.code === code && coupon.active);
}

function formatMarket(usd, marketKey = state.market) {
  const market = markets[marketKey] || markets.ID;
  const value = usd * market.rate;
  return new Intl.NumberFormat(market.locale, {
    style: "currency",
    currency: market.currency,
    maximumFractionDigits: market.currency === "USD" || market.currency === "BRL" ? 2 : 0
  }).format(value);
}

function formatUsd(usd) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(usd);
}

function parsePrice(value) {
  const cleaned = String(value).replace(/[^\d.]/g, "");
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function getCart() {
  const product = selectedProduct();
  if (!product) return { product: null, subtotalUsd: 0, discountUsd: 0, totalUsd: 0, coupon: null };
  const coupon = activeCoupon();
  const subtotalUsd = product.priceUsd;
  const discountUsd = coupon ? subtotalUsd * (coupon.discount / 100) : 0;
  return {
    product,
    subtotalUsd,
    discountUsd,
    totalUsd: Math.max(subtotalUsd - discountUsd, 0),
    coupon
  };
}

function paymentMethodsForMarket(marketKey = state.market) {
  return paymentMethodsByMarket[marketKey] || paymentMethodsByMarket.EU;
}

function ensurePaymentMethod() {
  const methods = paymentMethodsForMarket();
  if (!methods.find((method) => method.id === state.selectedPaymentMethod)) {
    state.selectedPaymentMethod = methods[0]?.id || "";
  }
}

function selectedPaymentMethod() {
  ensurePaymentMethod();
  return paymentMethodsForMarket().find((method) => method.id === state.selectedPaymentMethod);
}

function productTone(product) {
  const type = productSourceType(product);
  if (type === "首充赠送") return "first";
  if (type === "限时礼包") return "bundle";
  return "topup";
}

function loginLabel() {
  if (!state.player.loggedIn) return t("loginButton");
  const account = state.player.account || state.player.uid;
  const shortAccount = account.includes("@") ? account.split("@")[0] : account;
  return t("loggedIn", { account: shortAccount });
}

function renderStaticText() {
  document.documentElement.lang = currentLanguage() === "zh" ? "zh-CN" : "en";
  document.title = t("documentTitle");
  document.querySelector(".console-nav")?.scrollTo({ left: 0, top: 0 });
  setText(".brand small", "brandSubtitle");
  setText(".main-nav [data-view-link='home']", "navHome");
  setText(".main-nav [data-view-link='shop']", "navShop");
  setText(".main-nav [data-view-link='admin']", "navAdmin");
  setText(".demo-badge", "demoBadge");

  setText(".hero-copy .eyebrow", "heroEyebrow");
  setText("#home-title", "heroTitle");
  setText(".hero-copy .lead", "heroLead");
  setText(".hero-actions [data-view-link='shop']", "heroPrimary");
  setText(".hero-actions [data-view-link='admin']", "heroSecondary");
  setText(".metric-row div:nth-child(1) span", "metricRegions");
  setText(".metric-row div:nth-child(2) strong", "metricLaunchValue");
  setText(".metric-row div:nth-child(2) span", "metricLaunch");
  setText(".metric-row div:nth-child(3) span", "metricModules");
  setText(".mini-banner", "previewBanner");
  setText(".mini-product span", "previewProduct");
  setText(".mini-pay", "previewPay");
  setText(".preview-panel small", "previewGmv");
  setText(".preview-panel span", "previewSuccess");

  setText("#view-home > .section:nth-of-type(2) .eyebrow", "whyEyebrow");
  setText("#view-home > .section:nth-of-type(2) h2", "whyTitle");
  setText("#view-home > .section:nth-of-type(2) .section-heading p:last-child", "whyLead");
  setText(".insight-grid article:nth-child(1) h3", "insight1Title");
  setText(".insight-grid article:nth-child(1) p", "insight1Copy");
  setText(".insight-grid article:nth-child(2) h3", "insight2Title");
  setText(".insight-grid article:nth-child(2) p", "insight2Copy");
  setText(".insight-grid article:nth-child(3) h3", "insight3Title");
  setText(".insight-grid article:nth-child(3) p", "insight3Copy");
  setText(".problem-solution .eyebrow", "painEyebrow");
  setText(".problem-solution h2", "painTitle");
  setText(".pain-card .comparison-title span", "painCardTitle");
  setText(".pain-card .comparison-title strong", "painCardBadge");
  document.querySelectorAll(".pain-card .comparison-row p").forEach((item, index) => {
    item.textContent = t(`pain${index + 1}`);
  });
  setText(".solution-card .comparison-title span", "solutionCardTitle");
  setText(".solution-card .comparison-title strong", "solutionCardBadge");
  document.querySelectorAll(".solution-card .comparison-row p").forEach((item, index) => {
    item.textContent = t(`solution${index + 1}`);
  });
  setText(".section.band .eyebrow", "loopEyebrow");
  setText(".section.band h2", "loopTitle");
  document.querySelectorAll(".loop div").forEach((item, index) => {
    setText("strong", `loop${index + 1}Title`, item);
    setText("span", `loop${index + 1}Copy`, item);
  });
  setText("#view-home > .section:nth-of-type(5) .eyebrow", "scenarioEyebrow");
  setText("#view-home > .section:nth-of-type(5) h2", "scenarioTitle");
  document.querySelectorAll(".scenario-grid span").forEach((item, index) => {
    item.textContent = t(`scenario${index + 1}`);
  });
  setText("#view-home > .section:nth-of-type(6) .eyebrow", "capabilityEyebrow");
  setText("#view-home > .section:nth-of-type(6) h2", "capabilityTitle");
  document.querySelectorAll(".capability-grid article").forEach((item, index) => {
    setText("h3", `capability${index + 1}Title`, item);
    setText("p", `capability${index + 1}Copy`, item);
  });

  setText(".web-shop-top .game-id small", "shopSubtitle");
  setAria(".web-shop-top .shop-controls", "shopSettingsAria");
  setText(".web-shop-top .shop-controls label:nth-child(1) > span", "languageLabel");
  setText(".web-shop-top .shop-controls label:nth-child(2) > span", "regionLabel");
  setText(".web-game-banner span", "shopBannerEyebrow");
  setText("#shop-title", "shopBannerTitle");
  setText(".web-game-banner p", "shopBannerCopy");
  setText(".shop-value-strip div:nth-child(1) strong", "valueCurrencyTitle");
  setText(".shop-value-strip div:nth-child(2) strong", "valuePackageTitle");
  setText(".shop-value-strip div:nth-child(2) span", "valuePackageCopy");
  setText(".shop-value-strip div:nth-child(3) strong", "valueCheckoutTitle");
  setText(".shop-value-strip div:nth-child(3) span", "valueCheckoutCopy");
  setText(".catalog-section .shop-section-head h2", "catalogTitle");
  setText(".catalog-section .shop-section-head p", "catalogCopy");
  setText(".catalog-section .shop-section-head > span", "catalogRateNote");
  setAria(".coupon-panel", "couponAria");
  setText(".coupon-panel .shop-section-head h2", "couponTitle");
  setText("#apply-coupon", "couponApply");
  setAria("#coupon-code", "couponAria");
  setAria(".redeem-panel", "redeemAria");
  setText(".redeem-panel .shop-section-head h2", "redeemTitle");
  setText("#apply-redeem", "redeemButton");
  setAria("#redeem-code", "redeemAria");
  setText(".web-shop-notes .eyebrow", "shopNotesEyebrow");
  const noteItems = document.querySelectorAll(".web-shop-notes .clean-list li");
  const noteKeys = [
    ["noteLanguageTitle", "noteLanguageCopy"],
    ["noteRegionTitle", "noteRegionCopy"],
    ["noteDeliveryTitle", "noteDeliveryCopy"]
  ];
  noteItems.forEach((item, index) => {
    const keys = noteKeys[index];
    if (keys) item.innerHTML = `<strong>${t(keys[0])}</strong>${t(keys[1])}`;
  });

  setText(".console-nav p", "adminNavTitle");
  setText(".console-nav [data-admin-tab='dashboard']", "adminDashboard");
  setText(".console-nav [data-admin-tab='products']", "adminProducts");
  setText(".console-nav [data-admin-tab='marketing']", "adminMarketing");
  setText("#admin-title", "adminTitle");
  setText(".console-head p", "adminSubtitle");
  setText(".status-dot", "adminHealthy");
  setText(".kpi-grid article:nth-child(1) span", "kpiGmv");
  setText(".kpi-grid article:nth-child(1) small", "kpiGmvNote");
  setText(".kpi-grid article:nth-child(2) span", "kpiOrders");
  setText(".kpi-grid article:nth-child(2) small", "kpiOrdersNote");
  setText(".kpi-grid article:nth-child(3) span", "kpiSuccess");
  setText(".kpi-grid article:nth-child(3) small", "kpiSuccessNote");
  setText(".kpi-grid article:nth-child(4) small", "kpiArppuNote");
  setText(".dashboard-grid .chart-card:nth-child(1) h3", "revenueTitle");
  setText(".dashboard-grid .chart-card:nth-child(1) .card-title-row span", "revenueUnit");
  setText(".chart-caption", "revenueCaption");
  document.querySelector("#revenue-chart")?.setAttribute("data-y-axis", t("chartYAxis"));
  document.querySelector("#revenue-chart")?.setAttribute("data-x-axis", t("chartXAxis"));
  setText(".dashboard-grid .chart-card:nth-child(2) h3", "regionRevenue");
  setText(".dashboard-grid .chart-card:nth-child(3) h3", "topProducts");
  setText(".dashboard-grid .chart-card:nth-child(4) h3", "successMonitor");
  setText(".order-feed h3", "recentOrders");
  setText("[data-admin-panel='products'] .panel-title h2", "productsTitle");
  setText("[data-admin-panel='products'] .panel-title p", "productsCopy");
  setText("#add-product", "addProduct");
  const tableHead = document.querySelectorAll(".table-head span");
  ["tableProduct", "tableEconomics", "tableBenefit", "tableSales", "tableStatus", "tableActions"].forEach((key, index) => {
    if (tableHead[index]) tableHead[index].textContent = t(key);
  });
  setText(".edit-panel .eyebrow", "productDetail");
  setLabel(".edit-panel .field-grid label:nth-child(1)", "displayPrice");
  setLabel(".edit-panel .field-grid label:nth-child(2)", "productType");
  setLabel(".edit-panel .field-grid label:nth-child(3)", "bonus");
  setLabel(".edit-panel .field-grid label:nth-child(4)", "deliveryMethod");
  setLabel(".edit-panel .field-grid label:nth-child(5)", "benefitDesc");
  setText(".logic-note", "productLogicNote");
  setText("#save-product", "saveChanges");
  setText("#preview-product", "previewShop");
  setText("[data-admin-panel='marketing'] .panel-title h2", "marketingTitle");
  setText("[data-admin-panel='marketing'] .panel-title p", "marketingCopy");
  setText("[data-admin-panel='marketing'] .panel-title button", "newActivity");
  setText(".banner-queue h3", "bannerQueueTitle");
  const bannerRows = document.querySelectorAll(".banner-queue div");
  [["banner1", "primary"], ["banner2", "secondary"], ["banner3", "backup"]].forEach(([textKey, rankKey], index) => {
    const row = bannerRows[index];
    if (!row) return;
    setText("span", textKey, row);
    setText("b", rankKey, row);
  });

  document.querySelectorAll(".close-modal").forEach((button) => button.setAttribute("aria-label", t("close")));
  setText("#modal-title", "modalAddProduct");
  setLabel("#product-modal .field-grid label:nth-child(1)", "productName");
  setLabel("#product-modal .field-grid label:nth-child(2)", "displayPrice");
  setLabel("#product-modal .field-grid label:nth-child(3)", "productType");
  setLabel("#product-modal .field-grid label:nth-child(4)", "activityTag");
  setLabel("#product-modal .field-grid label:nth-child(5)", "benefitDesc");
  setLabel("#product-modal .field-grid label:nth-child(6)", "deliveryMethod");
  setText("#save-draft-product", "saveDraft");
  setText("#publish-product", "publishProduct");
  setText("#login-modal .eyebrow", "loginEyebrow");
  setText("#login-title", "loginTitle");
  setText("#login-modal .modal-copy", "loginCopy");
  setLabel("#login-modal .login-field:nth-of-type(1)", "account");
  setLabel("#login-modal .login-field:nth-of-type(2)", "playerUid");
  setText("#login-modal .panel-actions [data-close-login]", "later");
  setText("#confirm-login", "loginContinue");
  setText("#checkout-title", "checkoutTitle");
  const summaryLabels = document.querySelectorAll(".checkout-modal-summary p span");
  ["modalProduct", "modalSubtotal", "modalCoupon", "modalTotal"].forEach((key, index) => {
    if (summaryLabels[index]) summaryLabels[index].textContent = t(key);
  });
  setText(".payment-head strong", "paymentSuccessHint");
  setText("#confirm-payment", "payNow");
  setText(".secure-note", "secureNote");
  setText("#payment-title", "paymentTitle");
  const receiptLabels = document.querySelectorAll(".receipt-lines p span");
  ["receiptId", "receiptUid", "receiptProduct", "receiptTotal", "receiptBenefit"].forEach((key, index) => {
    if (receiptLabels[index]) receiptLabels[index].textContent = t(key);
  });
  setText("#payment-modal .panel-actions [data-close-payment]", "continueShopping");
  setText("#receipt-admin", "viewAdminData");
}

function renderAll() {
  renderStaticText();
  renderControls();
  renderShopProducts();
  renderSummary();
  renderProductAdmin();
  renderMarketing();
  renderDashboard();
}

function renderControls() {
  if (!markets[state.market] || !elements.regionSelect.querySelector(`[value="${state.market}"]`)) {
    state.market = "ID";
  }
  if (!elements.languageSelect.querySelector(`[value="${state.language}"]`)) {
    state.language = "en";
  }
  Array.from(elements.languageSelect.options).forEach((option) => {
    option.textContent = languageOptionLabels[currentLanguage()][option.value] || languageOptionLabels.en[option.value] || option.textContent;
  });
  elements.languageSelect.value = state.language;
  Array.from(elements.regionSelect.options).forEach((option) => {
    option.textContent = marketOptionLabel(option.value);
  });
  elements.regionSelect.value = state.market;
  elements.pricingNote.textContent = t("marketPricing", { market: marketOptionLabel(state.market) });
  if (elements.loginUid) elements.loginUid.value = state.player.uid;
  ensurePaymentMethod();
  elements.loginButton.textContent = loginLabel();
}

function renderShopProducts() {
  const products = activeProducts();
  elements.shopProducts.innerHTML = productGroups.map((group) => {
    const groupProducts = products.filter((product) => group.types.includes(productSourceType(product)));
    if (!groupProducts.length) return "";
    return `
      <section class="catalog-group" aria-label="${t(group.titleKey)}">
        <div class="catalog-group-head">
          <div>
            <h3>${t(group.titleKey)}</h3>
            <p>${t(group.noteKey)}</p>
          </div>
          <span>${t("groupCount", { count: groupProducts.length })}</span>
        </div>
        <div class="catalog-grid">
          ${groupProducts.map((product) => {
            const oldPrice = product.oldPriceUsd ? `<small>${formatMarket(product.oldPriceUsd)}</small>` : "";
            return `
              <button class="catalog-product is-${productTone(product)}" type="button" data-shop-product="${product.id}">
                <span class="product-badge">${productText(product, "tag")}</span>
                <span class="product-token">${product.token}</span>
                <span class="product-copy">
                  <strong>${productText(product, "name")}</strong>
                  <small>${productText(product, "type")}</small>
                  <em>${productText(product, "bonus")}</em>
                </span>
                <span class="product-benefit">${productText(product, "benefit")}</span>
                <span class="product-price">
                  <span>${oldPrice}<b>${formatMarket(product.priceUsd)}</b></span>
                  <i>${t("rechargeNow")}</i>
                </span>
              </button>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }).join("");

  elements.shopProducts.querySelectorAll("[data-shop-product]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedProductId = button.dataset.shopProduct;
      saveState();
      renderSummary();
      checkout();
    });
  });
}

function renderSummary() {
  const cart = getCart();
  if (!cart.product) return;
  elements.couponCode.value = state.couponCode;
  elements.couponStatus.textContent = cart.coupon
    ? t("couponApplied", { code: cart.coupon.code, discount: cart.coupon.discount })
    : t("couponUnavailable");
  renderCouponChips();
  renderRedeem();
  renderCheckoutModal();
}

function renderRedeem() {
  elements.redeemCode.value = state.redeemCode || "";
  if (state.redeemStatus) {
    elements.redeemStatus.textContent = t("redeemed");
    elements.redeemStatus.classList.add("is-redeemed");
    elements.redeemMessage.textContent = t(state.redeemStatus);
  } else {
    elements.redeemStatus.textContent = t("redeemOptional");
    elements.redeemStatus.classList.remove("is-redeemed");
    elements.redeemMessage.textContent = t("redeemMessage");
  }
}

function renderCouponChips() {
  elements.couponChips.innerHTML = state.coupons.map((coupon) => `
    <button type="button" class="${state.couponCode.toUpperCase() === coupon.code ? "is-selected" : ""}" data-coupon-chip="${coupon.code}">
      ${coupon.code} · ${coupon.discount}%${coupon.active ? "" : ` · ${t("couponPaused")}`}
    </button>
  `).join("");

  elements.couponChips.querySelectorAll("[data-coupon-chip]").forEach((button) => {
    button.addEventListener("click", () => {
      const coupon = state.coupons.find((item) => item.code === button.dataset.couponChip);
      if (!coupon.active) {
        showToast(`${coupon.code} ${t("couponPaused")}`);
        return;
      }
      state.couponCode = coupon.code;
      saveState();
      renderSummary();
      renderMarketing();
      showToast(t("toastCouponApplied", { code: coupon.code, discount: coupon.discount }));
    });
  });
}

function renderCheckoutModal() {
  const cart = getCart();
  if (!cart.product) return;
  elements.modalProduct.textContent = productText(cart.product, "name");
  elements.modalSubtotal.textContent = formatMarket(cart.subtotalUsd);
  elements.modalCoupon.textContent = cart.coupon ? `${cart.coupon.code} · -${cart.coupon.discount}%` : t("couponNotUsed");
  elements.modalTotal.textContent = formatMarket(cart.totalUsd);
  elements.modalMarket.textContent = t("selectPayment", { market: marketOptionLabel(state.market) });
  renderPaymentMethods();
}

function renderPaymentMethods() {
  ensurePaymentMethod();
  const grouped = paymentMethodsForMarket().reduce((acc, method) => {
    if (!acc[method.group]) acc[method.group] = [];
    acc[method.group].push(method);
    return acc;
  }, {});
  elements.paymentMethods.innerHTML = Object.entries(grouped).map(([group, methods]) => `
    <section class="payment-group">
      <h3>${paymentGroupLabel(group)}</h3>
      <div>
        ${methods.map((method) => `
          <button class="payment-method ${method.id === state.selectedPaymentMethod ? "is-selected" : ""}" type="button" data-payment-method="${method.id}">
            <span class="pay-icon">${method.icon}</span>
            <strong>${method.name}</strong>
            <em>${method.success.toFixed(1)}%</em>
          </button>
        `).join("")}
      </div>
    </section>
  `).join("");

  elements.paymentMethods.querySelectorAll("[data-payment-method]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPaymentMethod = button.dataset.paymentMethod;
      saveState();
      renderPaymentMethods();
      showToast(t("selectedPayment", { name: selectedPaymentMethod().name }));
    });
  });
}

function renderProductAdmin() {
  elements.productRows.innerHTML = state.products.map((product) => `
    <div class="table-row product-record ${product.id === state.selectedAdminProductId ? "is-selected" : ""}" data-product-id="${product.id}" role="row">
      <span class="admin-product-main" data-label="${t("tableProduct")}"><b>${productText(product, "name")}</b><small>${productText(product, "type")} · ${productText(product, "tag")}</small></span>
      <span class="admin-product-economics" data-label="${t("tableEconomics")}"><b>${formatUsd(product.priceUsd)}</b><small>${productText(product, "bonus")}</small></span>
      <span class="admin-product-benefit" data-label="${t("tableBenefit")}"><b>${productText(product, "benefit")}</b><small>${productText(product, "delivery")}</small></span>
      <span class="admin-product-sales" data-label="${t("tableSales")}"><b>${formatCount(product.sold)}</b><small>${t("monthlySales")}</small></span>
      <span class="admin-product-status" data-label="${t("tableStatus")}"><i class="${product.status === "active" ? "is-live" : "is-draft"}">${productText(product, "status")}</i></span>
      <span class="row-actions" data-label="${t("tableActions")}"><button type="button" data-row-action="select">${t("edit")}</button><button type="button" data-row-action="toggle">${product.status === "active" ? t("unpublish") : t("publish")}</button></span>
    </div>
  `).join("");

  elements.productRows.querySelectorAll("[data-product-id]").forEach((row) => {
    row.addEventListener("click", (event) => {
      state.selectedAdminProductId = row.dataset.productId;
      if (event.target.dataset.rowAction === "toggle") {
        const product = selectedAdminProduct();
        product.status = product.status === "active" ? "draft" : "active";
      }
      saveState();
      renderAll();
      showToast(t("toastSelected", { title: productText(selectedAdminProduct(), "name") }));
    });
  });

  const product = selectedAdminProduct();
  if (!product) return;
  elements.detailName.textContent = productText(product, "name");
  elements.editPrice.value = formatUsd(product.priceUsd);
  elements.editType.value = productText(product, "type");
  elements.editBonus.value = productText(product, "bonus");
  elements.editBenefit.value = productText(product, "benefit");
  elements.editDelivery.value = productText(product, "delivery");
  elements.toggleProductStatus.textContent = product.status === "active" ? t("unpublish") : t("publish");
}

function renderMarketing() {
  elements.marketingGrid.innerHTML = state.coupons.map((coupon) => `
    <article tabindex="0" data-coupon="${coupon.code}" class="${state.couponCode.toUpperCase() === coupon.code ? "is-picked" : ""}">
      <span class="activity-state ${coupon.active ? "live" : "paused"}">${coupon.active ? t("campaignLive") : t("couponPaused")}</span>
      <h3>${coupon.code} · ${couponText(coupon, "name")}</h3>
      <p>${t("couponAudienceDiscount", { audience: couponText(coupon, "audience"), discount: coupon.discount })}</p>
      <button type="button">${state.couponCode.toUpperCase() === coupon.code ? t("couponCurrent") : t("couponSetCurrent")}</button>
    </article>
  `).join("");

  elements.marketingGrid.querySelectorAll("[data-coupon]").forEach((card) => {
    card.addEventListener("click", () => {
      const coupon = state.coupons.find((item) => item.code === card.dataset.coupon);
      if (!coupon.active) {
        showToast(`${coupon.code} ${t("couponPaused")}`);
        return;
      }
      state.couponCode = coupon.code;
      saveState();
      renderMarketing();
      renderSummary();
      showToast(t("toastCouponApplied", { code: coupon.code, discount: coupon.discount }));
    });
  });
}

function renderDashboard() {
  const orderUsd = state.orders.reduce((sum, order) => sum + order.totalUsd, 0);
  const gmv = state.baseMetrics.gmvUsd + orderUsd;
  const orders = state.baseMetrics.orders + state.orders.length;
  elements.kpiGmv.textContent = formatUsd(gmv);
  elements.kpiOrders.textContent = formatCount(orders);
  elements.kpiSuccess.textContent = `${state.baseMetrics.successRate.toFixed(1)}%`;
  elements.kpiArppu.textContent = formatUsd(gmv / orders);

  const liveSunday = weeklyRevenue.map((point, index) => ({
    ...point,
    value: index === weeklyRevenue.length - 1 ? point.value + orderUsd / 1000 : point.value
  }));
  const maxRevenue = Math.max(...liveSunday.map((point) => point.value));
  elements.revenueChart.innerHTML = liveSunday.map((point, index) => {
    const height = Math.max((point.value / maxRevenue) * 100, 16);
    return `<span style="height:${height}%"><b>$${Math.round(point.value)}k</b><em>${dayLabel(index)}</em></span>`;
  }).join("");
  const weeklyTotal = liveSunday.reduce((sum, point) => sum + point.value, 0);
  const peak = liveSunday.reduce((best, point) => point.value > best.value ? point : best, liveSunday[0]);
  const peakIndex = liveSunday.findIndex((point) => point === peak);
  elements.revenueSummary.innerHTML = `
    <p><span>${t("weeklyGmv")}</span><strong>$${Math.round(weeklyTotal)}k</strong></p>
    <p><span>${t("peakDay")}</span><strong>${dayLabel(peakIndex)} · $${Math.round(peak.value)}k</strong></p>
    <p><span>${t("weekOverWeek")}</span><strong>+18.6%</strong></p>
    <p><span>${t("orderCount")}</span><strong>${formatCount(orders)}</strong></p>
  `;

  elements.regionList.innerHTML = regionBreakdown.map((region) => `
    <p>
      <span>${marketName(region.key)}</span>
      <strong>${region.share}%</strong>
      <i style="width:${region.share}%"></i>
    </p>
  `).join("");

  const top = [...state.products].sort((a, b) => b.sold - a.sold).slice(0, 5);
  elements.topProducts.innerHTML = `
    <div class="data-table-row data-table-head"><span>${t("tableProduct")}</span><span>${t("tableSales")}</span><span>${t("productRevenue")}</span></div>
    ${top.map((product) => `
      <div class="data-table-row">
        <span data-label="${t("tableProduct")}">${productText(product, "name")}<small>${productText(product, "type")}</small></span>
        <span data-label="${t("tableSales")}">${formatCount(product.sold)}</span>
        <strong data-label="${t("productRevenue")}">${formatUsd(product.priceUsd * product.sold)}</strong>
      </div>
    `).join("")}
  `;

  elements.successMonitor.innerHTML = `
    <div class="data-table-row data-table-head"><span>${t("method")}</span><span>${t("region")}</span><span>${t("kpiSuccess")}</span></div>
    ${successRows.map((row) => `
      <div class="data-table-row">
        <span data-label="${t("method")}">${row.name}</span>
        <span data-label="${t("region")}">${marketName(row.regionKey)}</span>
        <strong data-label="${t("kpiSuccess")}">${row.success.toFixed(1)}%</strong>
      </div>
    `).join("")}
  `;

  elements.orderFeed.innerHTML = state.orders.slice(0, 5).map((order) => `
    <p><span>${order.createdAt} · ${order.uid}</span><strong>${orderProductName(order)} · ${formatUsd(order.totalUsd)}</strong></p>
  `).join("");
}

function applyCoupon() {
  state.couponCode = elements.couponCode.value.trim().toUpperCase();
  saveState();
  renderSummary();
  renderMarketing();
  const coupon = activeCoupon();
  showToast(coupon ? t("toastCouponApplied", { code: coupon.code, discount: coupon.discount }) : t("toastCouponInvalid"));
}

function applyRedeem() {
  const code = elements.redeemCode.value.trim().toUpperCase();
  state.redeemCode = code;
  state.redeemStatus = redeemCodes[code] || "";
  saveState();
  renderRedeem();
  showToast(state.redeemStatus ? t("toastRedeemed", { code }) : t("toastRedeemInvalid"));
}

function checkout() {
  const cart = getCart();
  const uid = (state.player.uid || elements.loginUid?.value || "").trim();
  if (!uid) {
    resumeCheckoutAfterLogin = true;
    showLoginModal();
    showToast(t("toastNeedUid"));
    return;
  }
  if (!cart.product) {
    showToast(t("toastNeedProduct"));
    return;
  }
  state.player.uid = uid;
  if (!state.player.loggedIn) {
    resumeCheckoutAfterLogin = true;
    showLoginModal();
    showToast(t("toastNeedLogin"));
    return;
  }
  saveState();
  renderCheckoutModal();
  showCheckoutModal();
}

function confirmPayment() {
  const cart = getCart();
  const uid = (state.player.uid || elements.loginUid?.value || "").trim();
  if (!uid || !cart.product) return;
  state.player.uid = uid;

  const order = {
    id: `WP-${Math.floor(1000 + Math.random() * 9000)}`,
    uid,
    productId: cart.product.id,
    productName: productText(cart.product, "name"),
    market: state.market,
    totalUsd: cart.totalUsd,
    coupon: cart.coupon?.code || "",
    paymentMethod: selectedPaymentMethod()?.name || "WooshPay",
    createdAt: new Date().toLocaleTimeString(currentLanguage() === "zh" ? "zh-CN" : "en-US", { hour: "2-digit", minute: "2-digit" })
  };
  state.orders.unshift(order);
  const product = state.products.find((item) => item.id === cart.product.id);
  if (product) product.sold += 1;
  saveState();
  renderDashboard();
  renderProductAdmin();
  renderReceipt(order, cart);
  hideCheckoutModal();
  showPaymentModal();
  showToast(t("toastPaymentSuccess"));
}

function renderReceipt(order, cart) {
  elements.receiptId.textContent = order.id;
  elements.receiptUid.textContent = order.uid;
  elements.receiptProduct.textContent = order.productName;
  elements.receiptTotal.textContent = formatMarket(order.totalUsd, order.market);
  elements.receiptBenefit.textContent = productText(cart.product, "delivery");
}

function showPaymentModal() {
  elements.paymentModal.classList.add("is-open");
  elements.paymentModal.setAttribute("aria-hidden", "false");
}

function hidePaymentModal() {
  elements.paymentModal.classList.remove("is-open");
  elements.paymentModal.setAttribute("aria-hidden", "true");
}

function showCheckoutModal() {
  elements.checkoutModal.classList.add("is-open");
  elements.checkoutModal.setAttribute("aria-hidden", "false");
}

function hideCheckoutModal() {
  elements.checkoutModal.classList.remove("is-open");
  elements.checkoutModal.setAttribute("aria-hidden", "true");
}

function showLoginModal() {
  elements.loginAccount.value = state.player.account || "player@mythicrealm.com";
  if (elements.loginUid) elements.loginUid.value = state.player.uid || "MR-2048-7761";
  elements.loginModal.classList.add("is-open");
  elements.loginModal.setAttribute("aria-hidden", "false");
}

function hideLoginModal() {
  elements.loginModal.classList.remove("is-open");
  elements.loginModal.setAttribute("aria-hidden", "true");
}

function confirmLogin() {
  const uid = (elements.loginUid?.value || "").trim();
  const account = elements.loginAccount.value.trim() || uid;
  state.player.account = account;
  state.player.loggedIn = true;
  state.player.uid = uid || state.player.uid;
  saveState();
  renderControls();
  hideLoginModal();
  showToast(t("toastLoggedIn", { account }));
  if (resumeCheckoutAfterLogin) {
    resumeCheckoutAfterLogin = false;
    checkout();
  }
}

function showProductModal() {
  elements.newProductName.value = t("newProductDefaultName");
  elements.newProductPrice.value = t("newProductDefaultPrice");
  elements.newProductType.value = t("newProductDefaultType");
  elements.newProductTag.value = t("newProductDefaultTag");
  elements.newProductBenefit.value = t("newProductDefaultBenefit");
  elements.newProductDelivery.value = t("newProductDefaultDelivery");
  elements.productModal.classList.add("is-open");
  elements.productModal.setAttribute("aria-hidden", "false");
}

function hideProductModal() {
  elements.productModal.classList.remove("is-open");
  elements.productModal.setAttribute("aria-hidden", "true");
}

function saveSelectedProduct() {
  const product = selectedAdminProduct();
  if (!product) return;
  product.priceUsd = parsePrice(elements.editPrice.value) || product.priceUsd;
  product.type = elements.editType.value.trim() || product.type;
  product.bonus = elements.editBonus.value.trim() || product.bonus;
  product.benefit = elements.editBenefit.value.trim() || product.benefit;
  product.delivery = elements.editDelivery.value.trim() || product.delivery;
  saveState();
  renderAll();
  showToast(t("toastProductSynced"));
}

function toggleSelectedProductStatus() {
  const product = selectedAdminProduct();
  if (!product) return;
  product.status = product.status === "active" ? "draft" : "active";
  if (product.status === "draft" && state.selectedProductId === product.id) {
    state.selectedProductId = activeProducts().find((item) => item.id !== product.id)?.id || "";
  }
  saveState();
  renderAll();
  showToast(t("toastProductStatus", { product: productText(product, "name"), status: product.status === "active" ? t("published") : t("unpublished") }));
}

function addNewProduct(status) {
  const name = elements.newProductName.value.trim();
  if (!name) {
    showToast(t("toastNeedProductName"));
    elements.newProductName.focus();
    return;
  }
  const priceUsd = parsePrice(elements.newProductPrice.value);
  if (!priceUsd) {
    showToast(t("toastNeedValidPrice"));
    elements.newProductPrice.focus();
    return;
  }
  const product = {
    id: `product-${Date.now()}`,
    token: name.slice(0, 3).toUpperCase(),
    name,
    type: elements.newProductType.value.trim() || t("limitedBundle"),
    priceUsd,
    tag: elements.newProductTag.value.trim() || t("customTag"),
    bonus: elements.newProductBenefit.value.trim() || t("customReward"),
    benefit: elements.newProductBenefit.value.trim() || t("customReward"),
    delivery: elements.newProductDelivery.value.trim() || t("newProductDefaultDelivery"),
    status,
    sold: 0
  };
  state.products.push(product);
  state.selectedAdminProductId = product.id;
  if (status === "active") state.selectedProductId = product.id;
  saveState();
  renderAll();
  hideProductModal();
  showToast(t("toastProductSaved", { product: product.name, status: status === "active" ? t("publish") : t("saveDraft") }));
}

function bindStaticCardSelection() {
  document.querySelectorAll(".insight-grid article, .capability-grid article, .loop div, .kpi-grid article, .banner-queue div").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => {
      card.classList.toggle("is-picked");
      const title = card.querySelector("h3, strong, span")?.textContent.trim() || t("viewHome");
      showToast(t("toastSelected", { title }));
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        card.click();
      }
    });
  });
}

elements.viewLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setView(link.dataset.viewLink);
  });
});

window.addEventListener("hashchange", () => setView(location.hash.replace("#", ""), true));

elements.languageSelect.addEventListener("change", () => {
  state.language = elements.languageSelect.value;
  saveState();
  renderAll();
  showToast(t("toastLanguage", { language: languageToastLabels[currentLanguage()][state.language] || languageNames[state.language] || "English" }));
});

elements.regionSelect.addEventListener("change", () => {
  state.market = elements.regionSelect.value;
  saveState();
  renderAll();
  showToast(t("toastRegion", { region: marketOptionLabel(state.market) }));
});

elements.applyCoupon.addEventListener("click", applyCoupon);
elements.couponCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyCoupon();
});
elements.applyRedeem.addEventListener("click", applyRedeem);
elements.redeemCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyRedeem();
});
elements.loginButton.addEventListener("click", () => {
  resumeCheckoutAfterLogin = false;
  showLoginModal();
});
elements.confirmLogin.addEventListener("click", confirmLogin);
elements.loginAccount.addEventListener("keydown", (event) => {
  if (event.key === "Enter") confirmLogin();
});
elements.loginUid.addEventListener("keydown", (event) => {
  if (event.key === "Enter") confirmLogin();
});
elements.confirmPayment.addEventListener("click", confirmPayment);

elements.adminButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.adminTab;
    elements.adminButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    elements.adminPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === tab));
    showToast(t("toastOpened", { title: button.textContent.trim() }));
  });
});

elements.addProduct.addEventListener("click", () => {
  showProductModal();
  showToast(t("toastAddProduct"));
});
elements.closeProductModal.addEventListener("click", hideProductModal);
elements.productModal.addEventListener("click", (event) => {
  if (event.target === elements.productModal) hideProductModal();
});
elements.saveProduct.addEventListener("click", saveSelectedProduct);
elements.previewProduct.addEventListener("click", () => {
  saveSelectedProduct();
  const product = selectedAdminProduct();
  if (product.status !== "active") {
    product.status = "active";
    state.selectedProductId = product.id;
    saveState();
    renderAll();
  }
  setView("shop");
});
elements.toggleProductStatus.addEventListener("click", toggleSelectedProductStatus);
elements.saveDraftProduct.addEventListener("click", () => addNewProduct("draft"));
elements.publishProduct.addEventListener("click", () => addNewProduct("active"));

document.querySelectorAll("[data-close-payment]").forEach((button) => {
  button.addEventListener("click", hidePaymentModal);
});
document.querySelectorAll("[data-close-checkout]").forEach((button) => {
  button.addEventListener("click", hideCheckoutModal);
});
document.querySelectorAll("[data-close-login]").forEach((button) => {
  button.addEventListener("click", () => {
    resumeCheckoutAfterLogin = false;
    hideLoginModal();
  });
});
elements.checkoutModal.addEventListener("click", (event) => {
  if (event.target === elements.checkoutModal) hideCheckoutModal();
});
elements.loginModal.addEventListener("click", (event) => {
  if (event.target === elements.loginModal) {
    resumeCheckoutAfterLogin = false;
    hideLoginModal();
  }
});
elements.paymentModal.addEventListener("click", (event) => {
  if (event.target === elements.paymentModal) hidePaymentModal();
});
elements.receiptAdmin.addEventListener("click", () => {
  hidePaymentModal();
  setView("admin");
  elements.adminButtons.forEach((button) => {
    const isDashboard = button.dataset.adminTab === "dashboard";
    button.classList.toggle("is-active", isDashboard);
  });
  elements.adminPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === "dashboard"));
});

bindStaticCardSelection();
setView(location.hash.replace("#", "") || state.view, true);
renderAll();
