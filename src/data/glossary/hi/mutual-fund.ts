import type { GlossaryTerm } from "../../types";

export const termMutualFundHi: GlossaryTerm = {
  slug: "mutual-fund",
  term: "Mutual Fund (म्यूचुअल फंड)",
  title: "Mutual Fund — Professional Portfolio Managers द्वारा Managed Pooled Investment Vehicles",
  shortDefinition:
    "Mutual fund investment vehicle है जो बहुत investors से money pool करती है diversified portfolio of stocks, bonds, या securities purchase करने के लिए — professional manager manage करता है, daily NAV पर price।",
  metaDescription:
    "Mutual fund क्या है? कैसे काम करता है, types, fees, active vs index funds difference, और investors को क्या जानना चाहिए।",
  wordCount: 410,
  category: "Investment Strategy",
  tags: ["mutual-fund", "investment-vehicle", "active-management", "diversification", "nav"],
  relatedSlugs: ["index-fund", "etf", "hedge-fund", "asset-allocation", "portfolio-diversification"],
  relatedTerms: ["index-fund", "etf", "hedge-fund", "asset-allocation", "portfolio-diversification"],
  faq: [
    { question: "Mutual funds कौन सी fees charge करती हैं?", answer: "Expense ratio (annual management fee: 0.03% index → 1.5%+ active), front-end load (up to 5.75% deducted initial investment), back-end load (sell पर, declining), 12b-1 fees (marketing, expense ratio में)। No-load funds industry standard direct-sold। Prospectus में total expense ratio check करें।" },
    { question: "Mutual fund gains पर tax कैसे लगती है?", answer: "Capital gains और income annually distribute — shares sell न करें तो भी tax। Short-term gains ordinary income rate, long-term lower rate, qualified dividends capital gains rate। ETFs vs key disadvantage — other shareholders redemptions force fund sell appreciated securities → आपको tax।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Mutual fund professionally managed investment vehicle है जो multiple investors से money pool करती है diversified securities portfolio invest करने। हर investor shares own करता है proportional, net asset value (NAV) daily market close पर calculate। US में $23 trillion+ assets। Individual investors को diversified, professionally managed portfolios access — individual security purchases से impractical replicate।</p>

<p>Indian context: India mutual fund industry बहुत बड़ी — AMFI registered, SEBI regulated। Indian investors mutual fund concept well familiar। US mutual funds similar structure लेकिन larger scale, SEC regulated, और 13F filings से institutional holdings publicly visible।</p>

<h2>कैसे काम करती हैं</h2>
<p><strong>Pooling:</strong> Investors shares purchase, fund pooled capital invest investment objective अनुसार (growth, value, income, balanced, sector)।</p>
<p><strong>Professional management:</strong> Portfolio manager securities select, position sizes determine, buy/sell decide।</p>
<p><strong>Daily pricing:</strong> NAV = (total assets - liabilities) / shares outstanding। All orders closing NAV पर execute।</p>
<p><strong>Distributions:</strong> Income (dividends, interest) और realized capital gains distribute — typically annually/quarterly। Taxable even if reinvested — ETF comparison structural tax disadvantage।</p>

<h2>Types</h2>
<p><strong>Equity funds:</strong> Large-cap, mid-cap, small-cap, growth, value, international, sector। <strong>Bond funds:</strong> Government, corporate, municipal, high-yield। <strong>Balanced:</strong> Stocks + bonds fixed ratio (60/40)। Target-date retirement approach conservative। <strong>Money market:</strong> Short-term high-quality debt, stable $1 NAV। <strong>Index funds:</strong> Passively track market index — same strategy as ETFs, mutual fund structure।</p>

<h2>Active vs Passive</h2>
<p>Profound shift active → passive। Active managers — research/judgment select — losing assets to passive index funds/ETFs decade+। Data consistently: majority active managers underperform benchmarks long periods after fees। SPIVA scorecard: 15-year periods ~85-90% active US large-cap underperform S&P 500। Active value add possible less efficient markets (small-cap, international, fixed income)।</p>

<h2>Selecting</h2>
<p>Key factors: expense ratio (lower better comparable strategies), performance relative benchmark (not absolute), manager tenure/track record, turnover ratio (high = more taxable events), style consistency (style drift red flag)। Fund prospectus और semi-annual report SEC file।</p>

<p>Brefyr fundamental financial data SEC filings से — mutual fund managers और individual investors दोनों 7,600+ public companies evaluate।</p>
`,
};
