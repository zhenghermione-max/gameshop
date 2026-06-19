const STORAGE_KEY = "wooshpay-gameshop-lite-v4";

const defaultState = {
  view: "home",
  language: "en",
  market: "ID",
  selectedProductId: "topup-980",
  selectedAdminProductId: "topup-980",
  couponCode: "WOOSH10",
  redeemCode: "",
  redeemStatus: "",
  redeemExpanded: false,
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
      delivery: "游戏侧发货 / API 回调",
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
      delivery: "游戏侧发货 / API 回调",
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
      delivery: "游戏侧发货 / API 回调",
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
      delivery: "游戏侧发货 / API 回调",
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
      delivery: "游戏侧发货 / API 回调",
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
      delivery: "游戏侧发货 / API 回调",
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
  { name: "印尼", share: 28 },
  { name: "巴西", share: 23 },
  { name: "美国", share: 19 },
  { name: "沙特", share: 15 },
  { name: "泰国", share: 10 },
  { name: "欧盟", share: 5 }
];

const successRows = [
  { name: "Card", region: "Global", success: 98.1 },
  { name: "Pix", region: "Brazil", success: 97.8 },
  { name: "DANA / OVO", region: "Indonesia", success: 96.9 },
  { name: "Mada", region: "Saudi Arabia", success: 96.2 }
];

const productGroups = [
  { key: "topup", types: ["固定面额充值"] },
  { key: "campaign", types: ["首充赠送", "限时礼包"] }
];

const redeemCodes = {
  GIFT300: {
    zh: "已兑换 300 💎 礼品码，权益将由游戏侧发放。",
    en: "300 💎 gift code redeemed. Rewards will be delivered by the game."
  },
  VIP7: {
    zh: "已兑换 7 天 VIP 体验卡，权益将由游戏侧发放。",
    en: "7-day VIP pass redeemed. Rewards will be delivered by the game."
  },
  SKIN2026: {
    zh: "已兑换限定皮肤兑换码，权益将由游戏侧发放。",
    en: "Limited skin code redeemed. Rewards will be delivered by the game."
  }
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

const languageOptionLabels = {
  zh: {
    en: "英语",
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

const marketLabels = {
  zh: {
    US: "🇺🇸 美国 · USD",
    BR: "🇧🇷 巴西 · BRL",
    ID: "🇮🇩 印尼 · IDR",
    SA: "🇸🇦 沙特阿拉伯 · SAR",
    TH: "🇹🇭 泰国 · THB",
    EU: "🇪🇺 德国 (EU) · EUR"
  },
  en: {
    US: "🇺🇸 United States · USD",
    BR: "🇧🇷 Brazil · BRL",
    ID: "🇮🇩 Indonesia · IDR",
    SA: "🇸🇦 Saudi Arabia · SAR",
    TH: "🇹🇭 Thailand · THB",
    EU: "🇪🇺 Germany (EU) · EUR"
  }
};

const translations = {
  zh: {
    navHome: "方案官网",
    navShop: "玩家充值站",
    navAdmin: "运营后台",
    storeSubtitle: "官方充值中心",
    language: "语言",
    region: "国家/地区",
    login: "玩家登录",
    loggedIn: "已登录 · {account}",
    switchAccount: "切换",
    loggedStatus: "已登录",
    loggedOutStatus: "未登录",
    shopEyebrow: "网页专享",
    shopTitle: "官方充值站，支持当地货币与充值好礼",
    shopHeroCopy: "选择国家后自动展示当地货币，使用 WooshPay 完成支付，固定充值档位、首充赠送和限时礼包统一结算。",
    valueCurrencyTitle: "当地货币展示",
    localPricing: "本地定价",
    valueProductTitle: "精选商品包装",
    valueProductCopy: "固定面额 · 首充赠送 · 限时礼包",
    valueCheckoutCopy: "支付方式与金额实时联动",
    catalogTitle: "精选充值商品",
    catalogCopy: "先展示最适合商业化验证的商品类型：固定面额充值、首充赠送和限时礼包。",
    catalogNote: "国家切换后价格实时换算",
    groupTopupTitle: "充值档位",
    groupTopupNote: "稳定售卖的基础充值档，适合验证区域价格和转化。",
    groupCampaignTitle: "活动推荐",
    groupCampaignNote: "首充赠送与限时礼包承接运营活动，突出权益和稀缺感。",
    itemCount: "{count} 个商品",
    selected: "已选择",
    select: "选择",
    valueCheckoutTitle: "WooshPay 支付",
    playerTitle: "玩家账号 / 游戏编号",
    playerCopy: "登录后再进入结算，游戏编号用于游戏侧发货和订单归因。",
    redeemTitle: "兑换码 / 充值卡",
    redeemHint: "如有礼品码，可在这里兑换权益",
    redeemOptional: "可选",
    redeemDone: "已兑换",
    redeemButton: "立即兑换",
    redeemDefault: "兑换码独立发放权益，不影响当前订单金额。",
    redeemInvalid: "兑换码无效，请检查后重试",
    payTitle: "立即支付",
    checkoutPowered: "由 WooshPay 提供",
    currentProduct: "当前商品",
    benefit: "到账权益",
    itemAmount: "商品金额",
    originalAmount: "商品原价",
    autoDiscount: "自动活动优惠",
    totalDue: "应付金额",
    checkoutButton: "去结算",
    checkoutCopy: "由 WooshPay 提供支付体验，到账权益以游戏侧发放结果为准。",
    noteLanguageTitle: "语言展示：",
    noteLanguageCopy: "语言切换用于演示本地化入口，不影响支付流程。",
    noteRegionTitle: "地区与货币：",
    noteRegionCopy: "国家/地区决定商品与本次支付中的展示货币。",
    noteDeliveryTitle: "权益发放：",
    noteDeliveryCopy: "实际到账以游戏侧商品体系或发货接口为准。",
    shopNotesEyebrow: "全球充值站",
    loginEyebrow: "玩家登录",
    loginTitle: "登录后继续充值",
    loginCopy: "使用邮箱、手机号或游戏账号完成演示登录；当前版本不连接真实账号系统。",
    account: "账号",
    loginLater: "稍后再说",
    loginContinue: "登录并继续",
    checkoutTitle: "去结算",
    checkoutEyebrow: "WooshPay 支付",
    choosePayment: "请选择支付方式 · {market}",
    successRateHint: "成功率实时参考",
    confirmPayment: "立即支付",
    secureNote: "🔒 256 位加密安全支付 · 由 WooshPay 提供",
    paymentSuccess: "支付成功",
    paymentEyebrow: "WooshPay 支付",
    receiptId: "订单号",
    receiptUid: "游戏编号",
    receiptProduct: "充值商品",
    receiptTotal: "支付金额",
    receiptBenefit: "到账说明",
    continueShopping: "继续逛逛",
    viewAdmin: "查看后台数据",
    deliveryDefault: "游戏侧发货 / API 回调",
    toastSelected: "已选择 {product}",
    toastLanguage: "已切换语言：{language}",
    toastRegion: "已切换国家/地区：{region}",
    toastRedeemed: "已兑换 {code}",
    toastNeedUid: "请先输入游戏编号",
    toastNoProduct: "请先上架至少一个商品",
    toastLoginFirst: "请先登录玩家账号",
    toastLoggedIn: "已登录 {account}",
    toastPaid: "WooshPay 支付成功，订单已写入后台",
    toastPaymentMethod: "已选择 {method}",
    viewHome: "方案官网",
    viewShop: "玩家充值站",
    viewAdminToast: "运营后台",
    toastView: "已切换到{view}"
  },
  en: {
    navHome: "Solution",
    navShop: "Player Top-up",
    navAdmin: "Merchant Console",
    storeSubtitle: "Official Top-up Center",
    language: "Language",
    region: "Country / Region",
    login: "Player Login",
    loggedIn: "Signed in · {account}",
    switchAccount: "Switch",
    loggedStatus: "Signed in",
    loggedOutStatus: "Not signed in",
    shopEyebrow: "WEB EXCLUSIVE",
    shopTitle: "Official top-up with local currency and bonus rewards",
    shopHeroCopy: "Choose a country to display local currency, pay with WooshPay, and check out top-up tiers, first recharge bonuses, and limited bundles in one flow.",
    valueCurrencyTitle: "Local Currency",
    localPricing: "local pricing",
    valueProductTitle: "Curated Offers",
    valueProductCopy: "Top-up tiers · First recharge · Limited bundles",
    valueCheckoutTitle: "WooshPay Checkout",
    valueCheckoutCopy: "Payment methods and totals update in real time",
    catalogTitle: "Featured Top-up Products",
    catalogCopy: "A focused catalog for commercial validation: fixed top-ups, first recharge bonus, and limited-time bundles.",
    catalogNote: "Prices update after country switch",
    groupTopupTitle: "Top-up Tiers",
    groupTopupNote: "Stable top-up packs for validating regional pricing and conversion.",
    groupCampaignTitle: "Campaign Picks",
    groupCampaignNote: "First recharge and limited bundles highlight rewards and urgency.",
    itemCount: "{count} items",
    selected: "Selected",
    select: "Select",
    playerTitle: "Player ID / Game UID",
    playerCopy: "Sign in before checkout. Player UID is used for game-side delivery and order attribution.",
    redeemTitle: "Code / Prepaid Card",
    redeemHint: "Redeem gift codes here when available",
    redeemOptional: "Optional",
    redeemDone: "Redeemed",
    redeemButton: "Redeem",
    redeemDefault: "Codes deliver separate rewards and do not change the current order amount.",
    redeemInvalid: "Invalid code. Please check and try again.",
    payTitle: "Pay Now",
    checkoutPowered: "Powered by WooshPay",
    currentProduct: "Current Item",
    benefit: "Rewards",
    itemAmount: "Item Amount",
    originalAmount: "Original Amount",
    autoDiscount: "Auto Campaign Saving",
    totalDue: "Total Due",
    checkoutButton: "Checkout",
    checkoutCopy: "Payment is powered by WooshPay. Final rewards are delivered by the game.",
    noteLanguageTitle: "Language: ",
    noteLanguageCopy: "Language switching demonstrates localization entry points and does not change the payment flow.",
    noteRegionTitle: "Region & Currency: ",
    noteRegionCopy: "Country / region controls the display currency for products and checkout.",
    noteDeliveryTitle: "Reward Delivery: ",
    noteDeliveryCopy: "Final delivery follows the game-side catalog or fulfillment API.",
    shopNotesEyebrow: "Global Web Shop",
    loginEyebrow: "Player Login",
    loginTitle: "Sign in to continue",
    loginCopy: "Use an email, phone number, or game account for this demo login. No real account system is connected.",
    account: "Account",
    loginLater: "Not now",
    loginContinue: "Sign in and continue",
    checkoutTitle: "Checkout",
    checkoutEyebrow: "WooshPay Checkout",
    choosePayment: "Choose a payment method · {market}",
    successRateHint: "Live success rate reference",
    confirmPayment: "Pay Now",
    secureNote: "🔒 256-bit encrypted payment · Powered by WooshPay",
    paymentSuccess: "Payment Successful",
    paymentEyebrow: "WooshPay Checkout",
    receiptId: "Order ID",
    receiptUid: "Player UID",
    receiptProduct: "Top-up Item",
    receiptTotal: "Paid Amount",
    receiptBenefit: "Delivery Note",
    continueShopping: "Continue",
    viewAdmin: "View Dashboard",
    deliveryDefault: "Game-side delivery / API callback",
    toastSelected: "Selected {product}",
    toastLanguage: "Language switched: {language}",
    toastRegion: "Country / region switched: {region}",
    toastRedeemed: "Redeemed {code}",
    toastNeedUid: "Please enter a player UID first",
    toastNoProduct: "Please publish at least one product first",
    toastLoginFirst: "Please sign in before checkout",
    toastLoggedIn: "Signed in as {account}",
    toastPaid: "WooshPay payment succeeded. The order was added to the dashboard.",
    toastPaymentMethod: "Selected {method}",
    viewHome: "Solution",
    viewShop: "Player Top-up",
    viewAdminToast: "Merchant Console",
    toastView: "Switched to {view}"
  }
};

const productCopies = {
  zh: {
    "topup-300": { name: "300 💎", type: "固定面额充值", tag: "基础档位", token: "300", bonus: "300 💎", benefit: "300 钻石", delivery: "游戏侧发货 / API 回调" },
    "topup-980": { name: "980 💎", type: "固定面额充值", tag: "热销", token: "980", bonus: "+15% = 1,127 💎", benefit: "980 钻石 + 赠送 147 钻石", delivery: "游戏侧发货 / API 回调" },
    "topup-1980": { name: "1,980 💎", type: "固定面额充值", tag: "高价值", token: "1980", bonus: "+20% = 2,376 💎", benefit: "1,980 钻石 + 赠送 396 钻石", delivery: "游戏侧发货 / API 回调" },
    "first-300": { name: "首充 300 💎", type: "首充赠送", tag: "首充双倍", token: "2X", bonus: "额外赠送 300 💎", benefit: "300 钻石 + 首充赠送 300 钻石", delivery: "游戏侧发货 / API 回调" },
    "starter-pack": { name: "新手礼包", type: "限时礼包", tag: "新手推荐", token: "礼包", bonus: "680 💎 + 3 天加速道具", benefit: "680 钻石 + 3 天加速道具", delivery: "游戏侧发货 / API 回调" },
    "festival-pack": { name: "节日礼包", type: "限时礼包", tag: "活动限时", token: "热卖", bonus: "1,980 💎 + 限定头像框", benefit: "1,980 钻石 + 限定头像框", delivery: "游戏侧发货 / API 回调" }
  },
  en: {
    "topup-300": { name: "300 💎", type: "Fixed Top-up", tag: "Base Tier", token: "300", bonus: "300 💎", benefit: "300 diamonds", delivery: "Game-side delivery / API callback" },
    "topup-980": { name: "980 💎", type: "Fixed Top-up", tag: "Popular", token: "980", bonus: "+15% = 1,127 💎", benefit: "980 diamonds + 147 bonus diamonds", delivery: "Game-side delivery / API callback" },
    "topup-1980": { name: "1,980 💎", type: "Fixed Top-up", tag: "High Value", token: "1980", bonus: "+20% = 2,376 💎", benefit: "1,980 diamonds + 396 bonus diamonds", delivery: "Game-side delivery / API callback" },
    "first-300": { name: "First Recharge 300 💎", type: "First Recharge Bonus", tag: "Double Bonus", token: "2X", bonus: "Extra 300 💎", benefit: "300 diamonds + first recharge bonus 300 diamonds", delivery: "Game-side delivery / API callback" },
    "starter-pack": { name: "Starter Pack", type: "Limited Bundle", tag: "Starter Pick", token: "PACK", bonus: "680 💎 + 3-day booster", benefit: "680 diamonds + 3-day booster", delivery: "Game-side delivery / API callback" },
    "festival-pack": { name: "Festival Pack", type: "Limited Bundle", tag: "Limited Time", token: "HOT", bonus: "1,980 💎 + avatar frame", benefit: "1,980 diamonds + limited avatar frame", delivery: "Game-side delivery / API callback" }
  }
};

const paymentGroupLabels = {
  zh: {
    "Cards": "银行卡",
    "Wallets": "钱包",
    "E-wallets": "电子钱包",
    "QR Payment": "扫码支付",
    "Instant payment": "即时支付",
    "Local methods": "本地支付",
    "Local cards": "本地银行卡",
    "Bank transfer": "银行转账"
  }
};

const elements = {
  viewLinks: document.querySelectorAll("[data-view-link]"),
  navLabels: document.querySelectorAll("[data-nav-label]"),
  views: {
    home: document.querySelector("#view-home"),
    shop: document.querySelector("#view-shop"),
    admin: document.querySelector("#view-admin")
  },
  storeSubtitle: document.querySelector("#store-subtitle"),
  languageLabel: document.querySelector("#language-label"),
  regionLabel: document.querySelector("#region-label"),
  languageSelect: document.querySelector("#language-select"),
  regionSelect: document.querySelector("#region-select"),
  pricingNote: document.querySelector("#pricing-note"),
  shopEyebrow: document.querySelector("#shop-eyebrow"),
  shopTitle: document.querySelector("#shop-title"),
  shopHeroCopy: document.querySelector("#shop-hero-copy"),
  valueCurrencyTitle: document.querySelector("#value-currency-title"),
  valueProductTitle: document.querySelector("#value-product-title"),
  valueProductCopy: document.querySelector("#value-product-copy"),
  valueCheckoutTitle: document.querySelector("#value-checkout-title"),
  valueCheckoutCopy: document.querySelector("#value-checkout-copy"),
  catalogTitle: document.querySelector("#catalog-title"),
  catalogCopy: document.querySelector("#catalog-copy"),
  catalogNote: document.querySelector("#catalog-note"),
  loginButton: document.querySelector("#login-button"),
  sidebarLoginButton: document.querySelector("#sidebar-login-button"),
  playerStatus: document.querySelector("#player-status"),
  playerTitle: document.querySelector("#player-title"),
  playerCopy: document.querySelector("#player-copy"),
  shopProducts: document.querySelector("#shop-products"),
  uid: document.querySelector("#uid"),
  redeemPanel: document.querySelector("#redeem-panel"),
  toggleRedeem: document.querySelector("#toggle-redeem"),
  redeemTitle: document.querySelector("#redeem-title"),
  redeemHint: document.querySelector("#redeem-hint"),
  redeemBody: document.querySelector("#redeem-body"),
  redeemCode: document.querySelector("#redeem-code"),
  applyRedeem: document.querySelector("#apply-redeem"),
  redeemStatus: document.querySelector("#redeem-status"),
  redeemMessage: document.querySelector("#redeem-message"),
  payButton: document.querySelector("#pay-button"),
  payTitle: document.querySelector("#pay-title"),
  checkoutPowered: document.querySelector("#checkout-powered"),
  summaryProduct: document.querySelector("#summary-product"),
  summaryProductLabel: document.querySelector("#summary-product-label"),
  summaryBenefit: document.querySelector("#summary-benefit"),
  summaryBenefitLabel: document.querySelector("#summary-benefit-label"),
  summarySubtotal: document.querySelector("#summary-subtotal"),
  summarySubtotalLabel: document.querySelector("#summary-subtotal-label"),
  summaryDiscountRow: document.querySelector("#summary-discount-row"),
  summaryDiscount: document.querySelector("#summary-discount"),
  summaryDiscountLabel: document.querySelector("#summary-discount-label"),
  summaryTotal: document.querySelector("#summary-total"),
  summaryTotalLabel: document.querySelector("#summary-total-label"),
  checkoutCopy: document.querySelector("#checkout-copy"),
  noteLanguageTitle: document.querySelector("#note-language-title"),
  noteLanguageCopy: document.querySelector("#note-language-copy"),
  noteRegionTitle: document.querySelector("#note-region-title"),
  noteRegionCopy: document.querySelector("#note-region-copy"),
  noteDeliveryTitle: document.querySelector("#note-delivery-title"),
  noteDeliveryCopy: document.querySelector("#note-delivery-copy"),
  shopNotesEyebrow: document.querySelector("#shop-notes-eyebrow"),
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
  loginEyebrow: document.querySelector("#login-eyebrow"),
  loginTitle: document.querySelector("#login-title"),
  loginCopy: document.querySelector(".login-panel .modal-copy"),
  loginFieldLabel: document.querySelector("#login-field-label"),
  loginLater: document.querySelector("#login-later"),
  loginAccount: document.querySelector("#login-account"),
  confirmLogin: document.querySelector("#confirm-login"),
  checkoutModal: document.querySelector("#checkout-modal"),
  checkoutEyebrow: document.querySelector("#checkout-eyebrow"),
  checkoutTitle: document.querySelector("#checkout-title"),
  modalProduct: document.querySelector("#modal-product"),
  modalProductLabel: document.querySelector("#modal-product-label"),
  modalBenefit: document.querySelector("#modal-benefit"),
  modalBenefitLabel: document.querySelector("#modal-benefit-label"),
  modalSubtotal: document.querySelector("#modal-subtotal"),
  modalSubtotalLabel: document.querySelector("#modal-subtotal-label"),
  modalDiscountRow: document.querySelector("#modal-discount-row"),
  modalDiscount: document.querySelector("#modal-discount"),
  modalDiscountLabel: document.querySelector("#modal-discount-label"),
  modalTotal: document.querySelector("#modal-total"),
  modalTotalLabel: document.querySelector("#modal-total-label"),
  modalMarket: document.querySelector("#modal-market"),
  paymentRateLabel: document.querySelector("#payment-rate-label"),
  paymentMethods: document.querySelector("#payment-methods"),
  confirmPayment: document.querySelector("#confirm-payment"),
  secureNote: document.querySelector(".secure-note"),
  paymentModal: document.querySelector("#payment-modal"),
  paymentEyebrow: document.querySelector("#payment-eyebrow"),
  paymentTitle: document.querySelector("#payment-title"),
  receiptIdLabel: document.querySelector("#receipt-id-label"),
  receiptId: document.querySelector("#receipt-id"),
  receiptUidLabel: document.querySelector("#receipt-uid-label"),
  receiptUid: document.querySelector("#receipt-uid"),
  receiptProductLabel: document.querySelector("#receipt-product-label"),
  receiptProduct: document.querySelector("#receipt-product"),
  receiptTotalLabel: document.querySelector("#receipt-total-label"),
  receiptTotal: document.querySelector("#receipt-total"),
  receiptBenefitLabel: document.querySelector("#receipt-benefit-label"),
  receiptBenefit: document.querySelector("#receipt-benefit"),
  receiptContinue: document.querySelector("#receipt-continue"),
  receiptAdmin: document.querySelector("#receipt-admin")
};

const toast = document.createElement("div");
let toastTimer;
let state = loadState();
let resumeCheckoutAfterLogin = false;

toast.className = "toast";
toast.setAttribute("role", "status");
document.body.appendChild(toast);

function languageKey() {
  return state.language === "zh" ? "zh" : "en";
}

function t(key, variables = {}) {
  const value = translations[languageKey()][key] || translations.en[key] || key;
  return value.replace(/\{(\w+)\}/g, (_, name) => variables[name] ?? "");
}

function setText(element, key, variables) {
  if (element) element.textContent = t(key, variables);
}

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (parsed && Array.isArray(parsed.products) && Array.isArray(parsed.coupons)) {
      const base = cloneDefaultState();
      return { ...base, ...parsed, player: { ...base.player, ...(parsed.player || {}) } };
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
  return cloneDefaultState();
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
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
  return { home: t("viewHome"), shop: t("viewShop"), admin: t("viewAdminToast") }[view] || view;
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

function productCopy(product) {
  const localized = productCopies[languageKey()][product.id] || productCopies.en[product.id] || {};
  return {
    name: localized.name || product.name,
    type: localized.type || product.type,
    tag: localized.tag || product.tag,
    token: localized.token || product.token,
    bonus: localized.bonus || product.bonus,
    benefit: localized.benefit || product.benefit,
    delivery: localized.delivery || product.delivery || t("deliveryDefault")
  };
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
  if (!product) return { product: null, subtotalUsd: 0, discountUsd: 0, totalUsd: 0 };
  const subtotalUsd = product.oldPriceUsd || product.priceUsd;
  const discountUsd = product.oldPriceUsd ? Math.max(product.oldPriceUsd - product.priceUsd, 0) : 0;
  return {
    product,
    subtotalUsd,
    discountUsd,
    totalUsd: product.priceUsd
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
  if (product.type === "首充赠送") return "first";
  if (product.type === "限时礼包") return "bundle";
  return "topup";
}

function paymentGroupLabel(group) {
  return paymentGroupLabels[languageKey()]?.[group] || group;
}

function renderSelectLabels() {
  elements.languageSelect.querySelectorAll("option").forEach((option) => {
    option.textContent = languageOptionLabels[languageKey()][option.value] || option.textContent;
  });
  elements.regionSelect.querySelectorAll("option").forEach((option) => {
    option.textContent = marketLabels[languageKey()][option.value] || option.textContent;
  });
}

function renderShopCopy() {
  document.documentElement.lang = languageKey() === "zh" ? "zh-CN" : "en";
  elements.navLabels.forEach((link) => {
    const key = { home: "navHome", shop: "navShop", admin: "navAdmin" }[link.dataset.navLabel];
    if (key) link.textContent = t(key);
  });
  setText(elements.storeSubtitle, "storeSubtitle");
  setText(elements.languageLabel, "language");
  setText(elements.regionLabel, "region");
  setText(elements.shopEyebrow, "shopEyebrow");
  setText(elements.shopTitle, "shopTitle");
  setText(elements.shopHeroCopy, "shopHeroCopy");
  setText(elements.valueCurrencyTitle, "valueCurrencyTitle");
  setText(elements.valueProductTitle, "valueProductTitle");
  setText(elements.valueProductCopy, "valueProductCopy");
  setText(elements.valueCheckoutTitle, "valueCheckoutTitle");
  setText(elements.valueCheckoutCopy, "valueCheckoutCopy");
  setText(elements.catalogTitle, "catalogTitle");
  setText(elements.catalogCopy, "catalogCopy");
  setText(elements.catalogNote, "catalogNote");
  setText(elements.playerTitle, "playerTitle");
  setText(elements.playerCopy, "playerCopy");
  setText(elements.redeemTitle, "redeemTitle");
  setText(elements.redeemHint, "redeemHint");
  setText(elements.payTitle, "payTitle");
  setText(elements.checkoutPowered, "checkoutPowered");
  setText(elements.summaryProductLabel, "currentProduct");
  setText(elements.summaryBenefitLabel, "benefit");
  setText(elements.summaryDiscountLabel, "autoDiscount");
  setText(elements.summaryTotalLabel, "totalDue");
  setText(elements.checkoutCopy, "checkoutCopy");
  setText(elements.noteLanguageTitle, "noteLanguageTitle");
  setText(elements.noteLanguageCopy, "noteLanguageCopy");
  setText(elements.noteRegionTitle, "noteRegionTitle");
  setText(elements.noteRegionCopy, "noteRegionCopy");
  setText(elements.noteDeliveryTitle, "noteDeliveryTitle");
  setText(elements.noteDeliveryCopy, "noteDeliveryCopy");
  setText(elements.shopNotesEyebrow, "shopNotesEyebrow");
  setText(elements.loginEyebrow, "loginEyebrow");
  setText(elements.loginTitle, "loginTitle");
  setText(elements.loginCopy, "loginCopy");
  setText(elements.loginFieldLabel, "account");
  setText(elements.loginLater, "loginLater");
  setText(elements.confirmLogin, "loginContinue");
  setText(elements.checkoutEyebrow, "checkoutEyebrow");
  setText(elements.checkoutTitle, "checkoutTitle");
  setText(elements.modalProductLabel, "currentProduct");
  setText(elements.modalBenefitLabel, "benefit");
  setText(elements.modalDiscountLabel, "autoDiscount");
  setText(elements.modalTotalLabel, "totalDue");
  setText(elements.paymentRateLabel, "successRateHint");
  setText(elements.confirmPayment, "confirmPayment");
  setText(elements.secureNote, "secureNote");
  setText(elements.paymentEyebrow, "paymentEyebrow");
  setText(elements.paymentTitle, "paymentSuccess");
  setText(elements.receiptIdLabel, "receiptId");
  setText(elements.receiptUidLabel, "receiptUid");
  setText(elements.receiptProductLabel, "receiptProduct");
  setText(elements.receiptTotalLabel, "receiptTotal");
  setText(elements.receiptBenefitLabel, "receiptBenefit");
  setText(elements.receiptContinue, "continueShopping");
  setText(elements.receiptAdmin, "viewAdmin");
  elements.payButton.textContent = t("checkoutButton");
  elements.applyRedeem.textContent = t("redeemButton");
  renderSelectLabels();
}

function loginLabel() {
  if (!state.player.loggedIn) return t("login");
  const account = state.player.account || state.player.uid;
  const shortAccount = account.includes("@") ? account.split("@")[0] : account;
  return t("loggedIn", { account: shortAccount });
}

function renderAll() {
  renderShopCopy();
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
  elements.languageSelect.value = state.language;
  elements.regionSelect.value = state.market;
  elements.pricingNote.textContent = `${marketLabels[languageKey()][state.market] || markets[state.market].label} · ${t("localPricing")}`;
  elements.uid.value = state.player.uid;
  ensurePaymentMethod();
  elements.loginButton.textContent = loginLabel();
  elements.sidebarLoginButton.textContent = state.player.loggedIn ? t("switchAccount") : t("login");
  elements.playerStatus.textContent = state.player.loggedIn ? t("loggedStatus") : t("loggedOutStatus");
  elements.playerStatus.classList.toggle("is-logged", state.player.loggedIn);
}

function renderShopProducts() {
  const products = activeProducts();
  elements.shopProducts.innerHTML = productGroups.map((group) => {
    const groupProducts = products.filter((product) => group.types.includes(product.type));
    if (!groupProducts.length) return "";
    const title = t(group.key === "topup" ? "groupTopupTitle" : "groupCampaignTitle");
    const note = t(group.key === "topup" ? "groupTopupNote" : "groupCampaignNote");
    return `
      <section class="catalog-group" aria-label="${title}">
        <div class="catalog-group-head">
          <div>
            <h3>${title}</h3>
            <p>${note}</p>
          </div>
          <span>${t("itemCount", { count: groupProducts.length })}</span>
        </div>
        <div class="catalog-grid">
          ${groupProducts.map((product) => {
            const oldPrice = product.oldPriceUsd ? `<small>${formatMarket(product.oldPriceUsd)}</small>` : "";
            const active = product.id === state.selectedProductId;
            const copy = productCopy(product);
            return `
              <button class="catalog-product ${active ? "is-active" : ""} is-${productTone(product)}" type="button" data-shop-product="${product.id}">
                <span class="product-badge">${copy.tag}</span>
                <span class="product-token">${copy.token}</span>
                <span class="product-copy">
                  <strong>${copy.name}</strong>
                  <small>${copy.type}</small>
                  <em>${copy.bonus}</em>
                </span>
                <span class="product-benefit">${copy.benefit}</span>
                <span class="product-price">
                  <span>${oldPrice}<b>${formatMarket(product.priceUsd)}</b></span>
                  <i>${active ? t("selected") : t("select")}</i>
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
      renderShopProducts();
      renderSummary();
      showToast(t("toastSelected", { product: productCopy(selectedProduct()).name }));
    });
  });
}

function renderSummary() {
  const cart = getCart();
  if (!cart.product) return;
  const copy = productCopy(cart.product);
  elements.summaryProduct.textContent = copy.name;
  elements.summaryBenefit.textContent = copy.benefit;
  elements.summarySubtotalLabel.textContent = cart.discountUsd ? t("originalAmount") : t("itemAmount");
  elements.summarySubtotal.textContent = formatMarket(cart.subtotalUsd);
  elements.summaryDiscountRow.hidden = !cart.discountUsd;
  elements.summaryDiscount.textContent = cart.discountUsd ? `- ${formatMarket(cart.discountUsd)}` : "";
  elements.summaryTotal.textContent = formatMarket(cart.totalUsd);
  renderRedeem();
  renderCheckoutModal();
}

function renderRedeem() {
  elements.redeemCode.value = state.redeemCode || "";
  elements.redeemPanel.classList.toggle("is-expanded", state.redeemExpanded || Boolean(state.redeemStatus));
  elements.toggleRedeem.setAttribute("aria-expanded", String(state.redeemExpanded || Boolean(state.redeemStatus)));
  if (state.redeemStatus && redeemCodes[state.redeemStatus]) {
    elements.redeemStatus.textContent = t("redeemDone");
    elements.redeemStatus.classList.add("is-redeemed");
    elements.redeemMessage.textContent = redeemCodes[state.redeemStatus][languageKey()];
  } else {
    elements.redeemStatus.textContent = t("redeemOptional");
    elements.redeemStatus.classList.remove("is-redeemed");
    elements.redeemMessage.textContent = t("redeemDefault");
  }
}

function renderCheckoutModal() {
  const cart = getCart();
  if (!cart.product) return;
  const market = markets[state.market] || markets.ID;
  const copy = productCopy(cart.product);
  elements.modalProduct.textContent = copy.name;
  elements.modalBenefit.textContent = copy.benefit;
  elements.modalSubtotalLabel.textContent = cart.discountUsd ? t("originalAmount") : t("itemAmount");
  elements.modalSubtotal.textContent = formatMarket(cart.subtotalUsd);
  elements.modalDiscountRow.hidden = !cart.discountUsd;
  elements.modalDiscount.textContent = cart.discountUsd ? `- ${formatMarket(cart.discountUsd)}` : "";
  elements.modalTotal.textContent = formatMarket(cart.totalUsd);
  elements.modalMarket.textContent = t("choosePayment", { market: marketLabels[languageKey()][state.market] || market.label });
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
      showToast(t("toastPaymentMethod", { method: selectedPaymentMethod().name }));
    });
  });
}

function renderProductAdmin() {
  elements.productRows.innerHTML = state.products.map((product) => `
    <div class="table-row product-record ${product.id === state.selectedAdminProductId ? "is-selected" : ""}" data-product-id="${product.id}" role="row">
      <span class="admin-product-main"><b>${product.name}</b><small>${product.type} · ${product.tag}</small></span>
      <span class="admin-product-economics"><b>${formatUsd(product.priceUsd)}</b><small>${product.bonus}</small></span>
      <span class="admin-product-benefit"><b>${product.benefit}</b><small>${product.delivery}</small></span>
      <span class="admin-product-sales"><b>${new Intl.NumberFormat("en-US").format(product.sold)}</b><small>本月销量</small></span>
      <span class="admin-product-status"><i class="${product.status === "active" ? "is-live" : "is-draft"}">${product.status === "active" ? "已上架" : "草稿"}</i></span>
      <span class="row-actions"><button type="button" data-row-action="select">编辑</button><button type="button" data-row-action="toggle">${product.status === "active" ? "下架" : "上架"}</button></span>
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
      showToast(`正在查看 ${selectedAdminProduct().name}`);
    });
  });

  const product = selectedAdminProduct();
  if (!product) return;
  elements.detailName.textContent = product.name;
  elements.editPrice.value = formatUsd(product.priceUsd);
  elements.editType.value = product.type;
  elements.editBonus.value = product.bonus;
  elements.editBenefit.value = product.benefit;
  elements.editDelivery.value = product.delivery;
  elements.toggleProductStatus.textContent = product.status === "active" ? "下架" : "上架";
}

function renderMarketing() {
  elements.marketingGrid.innerHTML = state.coupons.map((coupon) => `
    <article tabindex="0" data-coupon="${coupon.code}" class="${state.couponCode.toUpperCase() === coupon.code ? "is-picked" : ""}">
      <span class="activity-state ${coupon.active ? "live" : "paused"}">${coupon.active ? "生效中" : "已暂停"}</span>
      <h3>${coupon.code} · ${coupon.name}</h3>
      <p>${coupon.audience} · ${coupon.discount}% discount · 点击设为当前优惠码</p>
    </article>
  `).join("");

  elements.marketingGrid.querySelectorAll("[data-coupon]").forEach((card) => {
    card.addEventListener("click", () => {
      const coupon = state.coupons.find((item) => item.code === card.dataset.coupon);
      if (!coupon.active) {
        showToast(`${coupon.code} 当前已暂停`);
        return;
      }
      state.couponCode = coupon.code;
      saveState();
      renderMarketing();
      renderSummary();
      showToast(`已应用优惠码 ${coupon.code}`);
    });
  });
}

function renderDashboard() {
  const orderUsd = state.orders.reduce((sum, order) => sum + order.totalUsd, 0);
  const gmv = state.baseMetrics.gmvUsd + orderUsd;
  const orders = state.baseMetrics.orders + state.orders.length;
  elements.kpiGmv.textContent = formatUsd(gmv);
  elements.kpiOrders.textContent = new Intl.NumberFormat("en-US").format(orders);
  elements.kpiSuccess.textContent = `${state.baseMetrics.successRate.toFixed(1)}%`;
  elements.kpiArppu.textContent = formatUsd(gmv / orders);

  const liveSunday = weeklyRevenue.map((point, index) => ({
    ...point,
    value: index === weeklyRevenue.length - 1 ? point.value + orderUsd / 1000 : point.value
  }));
  const maxRevenue = Math.max(...liveSunday.map((point) => point.value));
  elements.revenueChart.innerHTML = liveSunday.map((point) => {
    const height = Math.max((point.value / maxRevenue) * 100, 16);
    return `<span style="height:${height}%"><b>$${Math.round(point.value)}k</b><em>${point.day}</em></span>`;
  }).join("");
  const weeklyTotal = liveSunday.reduce((sum, point) => sum + point.value, 0);
  const peak = liveSunday.reduce((best, point) => point.value > best.value ? point : best, liveSunday[0]);
  elements.revenueSummary.innerHTML = `
    <p><span>本周 GMV</span><strong>$${Math.round(weeklyTotal)}k</strong></p>
    <p><span>峰值日</span><strong>${peak.day} · $${Math.round(peak.value)}k</strong></p>
    <p><span>周环比</span><strong>+18.6%</strong></p>
    <p><span>订单数</span><strong>${new Intl.NumberFormat("en-US").format(orders)}</strong></p>
  `;

  elements.regionList.innerHTML = regionBreakdown.map((region) => `
    <p>
      <span>${region.name}</span>
      <strong>${region.share}%</strong>
      <i style="width:${region.share}%"></i>
    </p>
  `).join("");

  const top = [...state.products].sort((a, b) => b.sold - a.sold).slice(0, 5);
  elements.topProducts.innerHTML = `
    <div class="data-table-row data-table-head"><span>商品</span><span>销量</span><span>流水</span></div>
    ${top.map((product) => `
      <div class="data-table-row">
        <span>${product.name}<small>${product.type}</small></span>
        <span>${new Intl.NumberFormat("en-US").format(product.sold)}</span>
        <strong>${formatUsd(product.priceUsd * product.sold)}</strong>
      </div>
    `).join("")}
  `;

  elements.successMonitor.innerHTML = `
    <div class="data-table-row data-table-head"><span>方式</span><span>地区</span><span>成功率</span></div>
    ${successRows.map((row) => `
      <div class="data-table-row">
        <span>${row.name}</span>
        <span>${row.region}</span>
        <strong>${row.success.toFixed(1)}%</strong>
      </div>
    `).join("")}
  `;

  elements.orderFeed.innerHTML = state.orders.slice(0, 5).map((order) => `
    <p><span>${order.createdAt} · ${order.uid}</span><strong>${order.productName} · ${formatUsd(order.totalUsd)}</strong></p>
  `).join("");
}

function applyRedeem() {
  const code = elements.redeemCode.value.trim().toUpperCase();
  state.redeemCode = code;
  state.redeemStatus = redeemCodes[code] ? code : "";
  if (state.redeemStatus) state.redeemExpanded = true;
  saveState();
  renderRedeem();
  showToast(state.redeemStatus ? t("toastRedeemed", { code }) : t("redeemInvalid"));
}

function checkout() {
  const cart = getCart();
  const uid = elements.uid.value.trim();
  if (!uid) {
    showToast(t("toastNeedUid"));
    elements.uid.focus();
    return;
  }
  if (!cart.product) {
    showToast(t("toastNoProduct"));
    return;
  }
  state.player.uid = uid;
  if (!state.player.loggedIn) {
    resumeCheckoutAfterLogin = true;
    showLoginModal();
    showToast(t("toastLoginFirst"));
    return;
  }
  saveState();
  renderCheckoutModal();
  showCheckoutModal();
}

function confirmPayment() {
  const cart = getCart();
  const uid = elements.uid.value.trim();
  if (!uid || !cart.product) return;
  state.player.uid = uid;

  const order = {
    id: `WP-${Math.floor(1000 + Math.random() * 9000)}`,
    uid,
    productId: cart.product.id,
    productName: productCopy(cart.product).name,
    market: state.market,
    totalUsd: cart.totalUsd,
    coupon: "",
    paymentMethod: selectedPaymentMethod()?.name || "WooshPay",
    createdAt: new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })
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
  showToast(t("toastPaid"));
}

function renderReceipt(order, cart) {
  const copy = productCopy(cart.product);
  elements.receiptId.textContent = order.id;
  elements.receiptUid.textContent = order.uid;
  elements.receiptProduct.textContent = order.productName;
  elements.receiptTotal.textContent = formatMarket(order.totalUsd, order.market);
  elements.receiptBenefit.textContent = copy.delivery;
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
  elements.loginModal.classList.add("is-open");
  elements.loginModal.setAttribute("aria-hidden", "false");
}

function hideLoginModal() {
  elements.loginModal.classList.remove("is-open");
  elements.loginModal.setAttribute("aria-hidden", "true");
}

function confirmLogin() {
  const account = elements.loginAccount.value.trim() || elements.uid.value.trim();
  state.player.account = account;
  state.player.loggedIn = true;
  state.player.uid = elements.uid.value.trim() || state.player.uid;
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
  showToast("商品配置已同步到玩家站");
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
  showToast(`${product.name} 已${product.status === "active" ? "上架" : "下架"}`);
}

function addNewProduct(status) {
  const name = elements.newProductName.value.trim();
  if (!name) {
    showToast("请填写商品名称");
    elements.newProductName.focus();
    return;
  }
  const priceUsd = parsePrice(elements.newProductPrice.value);
  if (!priceUsd) {
    showToast("请填写有效价格");
    elements.newProductPrice.focus();
    return;
  }
  const product = {
    id: `product-${Date.now()}`,
    token: name.slice(0, 3).toUpperCase(),
    name,
    type: elements.newProductType.value.trim() || "限时礼包",
    priceUsd,
    tag: elements.newProductTag.value.trim() || "自定义",
    bonus: elements.newProductBenefit.value.trim() || "Custom reward",
    benefit: elements.newProductBenefit.value.trim() || "Custom reward",
    delivery: elements.newProductDelivery.value.trim() || "游戏侧发货 / API 回调",
    status,
    sold: 0
  };
  state.products.push(product);
  state.selectedAdminProductId = product.id;
  if (status === "active") state.selectedProductId = product.id;
  saveState();
  renderAll();
  hideProductModal();
  showToast(`${product.name} 已${status === "active" ? "上架" : "保存为草稿"}`);
}

function bindStaticCardSelection() {
  document.querySelectorAll(".insight-grid article, .capability-grid article, .loop div, .kpi-grid article, .banner-queue div").forEach((card) => {
    card.setAttribute("tabindex", "0");
    card.addEventListener("click", () => {
      card.classList.toggle("is-picked");
      const title = card.querySelector("h3, strong, span")?.textContent.trim() || "模块";
      showToast(`已选中 ${title}`);
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
  showToast(t("toastLanguage", { language: elements.languageSelect.selectedOptions[0].textContent }));
});

elements.regionSelect.addEventListener("change", () => {
  state.market = elements.regionSelect.value;
  saveState();
  renderAll();
  showToast(t("toastRegion", { region: elements.regionSelect.selectedOptions[0].textContent }));
});

elements.toggleRedeem.addEventListener("click", () => {
  state.redeemExpanded = !state.redeemExpanded;
  saveState();
  renderRedeem();
});
elements.applyRedeem.addEventListener("click", applyRedeem);
elements.redeemCode.addEventListener("keydown", (event) => {
  if (event.key === "Enter") applyRedeem();
});
elements.loginButton.addEventListener("click", () => {
  resumeCheckoutAfterLogin = false;
  showLoginModal();
});
elements.sidebarLoginButton.addEventListener("click", () => {
  resumeCheckoutAfterLogin = false;
  showLoginModal();
});
elements.confirmLogin.addEventListener("click", confirmLogin);
elements.loginAccount.addEventListener("keydown", (event) => {
  if (event.key === "Enter") confirmLogin();
});
elements.payButton.addEventListener("click", checkout);
elements.confirmPayment.addEventListener("click", confirmPayment);

elements.adminButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.adminTab;
    elements.adminButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    elements.adminPanels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.adminPanel === tab));
    showToast(`已打开${button.textContent.trim()}`);
  });
});

elements.addProduct.addEventListener("click", () => {
  showProductModal();
  showToast("打开添加商品配置");
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
