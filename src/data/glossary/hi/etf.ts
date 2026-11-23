import type { GlossaryTerm } from "../../types";

export const termEtfHi: GlossaryTerm = {
  slug: "etf",
  term: "Exchange-Traded Fund — ETF (एक्सचेंज-ट्रेडेड फंड)",
  title: "ETF — Index Investing जो Stock जैसे Trade होती है",
  shortDefinition: "ETF investment fund है जो securities basket (stocks, bonds, commodities) hold करता है और stock exchange पर दिन भर individual stock जैसे trade होता है, mutual fund diversification और stock trading flexibility combine करता है।",
  metaDescription: "ETF क्या है? ETFs कैसे work करती हैं, ETFs और mutual funds difference, types of ETFs, creation/redemption, और ETFs dominant investment vehicle क्यों बनी हैं।",
  wordCount: 430, category: "Investment Strategy", tags: ["etf", "exchange-traded-fund", "passive-investing", "diversification", "investment-vehicle"],
  relatedSlugs: ["index-fund", "mutual-fund", "factor-investing", "portfolio-diversification", "asset-allocation"],
  relatedTerms: ["index-fund", "mutual-fund", "factor-investing", "portfolio-diversification", "asset-allocation"],
  faq: [{ question: "ETFs mutual funds से कैसे different हैं?", answer: "Key differences: (1) Trading — ETFs exchanges पर throughout day market prices; mutual funds once daily closing NAV। (2) Tax efficiency — ETFs creation/redemption mechanism minimize capital gains; mutual funds sell trigger taxable gains। (3) Minimum investment — ETFs one share; mutual funds $1,000-3,000 minimums। (4) Transparency — most ETFs daily holdings; mutual funds quarterly। (5) Costs — दोनों low-cost index strategies; ETFs no load fees।" },
  { question: "Creation और redemption process क्या है?", answer: "Authorized participants (APs) — large broker-dealers — ETF shares create/redeem। Demand exceed supply: APs underlying securities basket deliver, new ETF shares receive (creation)। Excess supply: APs ETF shares return, underlying securities receive (redemption)। In-kind process keeps price near NAV, minimal taxable events = structural tax advantage over mutual funds।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>ETF diversified portfolio of securities hold करता है और stock exchange पर trade, intraday market-determined prices पर buy/sell allow करता है। Global assets $10 trillion exceed। Index mutual funds (broad diversification, low cost) और individual stocks (intraday trading, transparency, tax efficiency) best features combine। First ETF — SPDR S&P 500 (SPY) — 1993 launched, अभी भी most heavily traded securities में।</p>

<h2>ETFs कैसे Work करती हैं</h2>
<p><strong>Index tracking:</strong> Most ETFs specific index track — S&P 500, Nasdaq-100, bond index, sector। ETF index securities hold, return match before fees।</p>
<p><strong>Intraday trading:</strong> Mutual funds (once daily priced) unlike, ETFs continuously trade। Limit orders, short selling possible।</p>
<p><strong>Creation/redemption:</strong> ETF prices underlying securities NAV aligned रखता है। Authorized participants arbitrage premium/discount।</p>

<h2>Types of ETFs</h2>
<p><strong>Broad market:</strong> S&P 500, total market। Core building blocks, lowest fees (0.03%)।</p>
<p><strong>Sector:</strong> Technology, healthcare, financials। Specific industry overweight/underweight।</p>
<p><strong>Factor/smart beta:</strong> Value, momentum, quality, low volatility target। Systematic strategies index-fund costs।</p>
<p><strong>Bond ETFs:</strong> Government, corporate, municipal bonds। Fixed-income democratize।</p>
<p><strong>Thematic:</strong> AI, clean energy, cybersecurity। More speculative, higher fees।</p>
<p><strong>Active ETFs:</strong> Portfolio managers actively select। Active management + ETF tax efficiency। Fastest-growing category।</p>

<h2>Tax Efficiency</h2>
<p>ETFs structurally ज़्यादा tax-efficient mutual funds से in-kind creation/redemption — fund sell underlying securities need नहीं investor sell पर, embedded capital gains purge without taxable events।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में ETFs rapidly growing — Nifty 50 ETFs, Gold ETFs, Bharat Bond ETFs। लेकिन Indian ETF market AUM और liquidity US से much smaller। Indian investors US ETFs directly access कर सकते हैं — VOO (Vanguard S&P 500), QQQ (Nasdaq-100), VTI (Total US Market) most popular। Vested, INDMoney, Groww platforms through fractional US ETF shares available।</p>

<p>US ETFs Indian mutual funds से advantage: lower expense ratios (0.03% vs 0.5-1%), intraday trading, USD exposure (INR depreciation hedge)। Disadvantage: 25% withholding tax dividends, LRS limit ($250,000/year), estate tax risk ($60,000 threshold non-resident aliens)। Indian investors UCITS ETFs (Ireland-domiciled) consider कर सकते हैं lower withholding tax।</p>

<p>Brefyr SEC filings से financial data provide जो ETF underlying indexes और individual securities analysis support करता है।</p>
`,
};
