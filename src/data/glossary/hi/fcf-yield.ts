import type { GlossaryTerm } from "../../types";

export const termFCFYieldHi: GlossaryTerm = {
  slug: "fcf-yield",
  term: "Free Cash Flow Yield (फ्री कैश फ्लो यील्ड)",
  title: "FCF Yield — Stock Actually कितना Real Cash Return Offer करती है",
  shortDefinition: "Free cash flow yield company की free cash flow per share को stock price से divide करती है, investors price pay relative cash return दिखाती है — earnings-based valuations reality check।",
  metaDescription: "Free cash flow yield क्या है? FCF yield calculate, earnings yield से ज़्यादा क्यों matter करता है, और stock selection कैसे use करें।",
  wordCount: 420, category: "Financial Metrics", tags: ["fcf-yield", "free-cash-flow", "valuation", "financial-metrics", "cash-flow"],
  relatedSlugs: ["pe-ratio", "dcf", "dividend-payout-ratio", "eps"], relatedTerms: ["pe-ratio", "dcf", "dividend-payout-ratio", "eps"],
  faq: [{ question: "अच्छी free cash flow yield कितनी है?", answer: "Mature companies 5%+ attractive — $1 market value पर $0.05 free cash। 8-10%+ deep value opportunities या deteriorating fundamentals market perceive। High-growth companies low/negative FCF yield — heavy expansion investment। 10-year Treasury yield और same industry peers compare meaningful context।" },
  { question: "Free cash flow earnings से ज़्यादा reliable क्यों है?", answer: "Earnings accounting construct — depreciation methods, revenue recognition, expense classification affect। FCF actual cash movements based — harder manipulate। Cash either came या didn't। Company growing earnings report कर सकती है declining FCF — capitalizing expenses, stretching payables। Earnings और FCF diverge तो FCF truer story।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Free cash flow yield earnings yield (P/E inverse) का cash-based alternative। Earnings accounting choices manipulate, FCF actual cash measure business generate after asset base maintain/grow। FCF yield investors बताती है: invest किए हर dollar पर business कितने cents real, spendable cash produce हर year? सबसे honest valuation metrics में।</p>

<h2>Calculation</h2>
<p><strong>FCF Yield = Free Cash Flow Per Share / Stock Price x 100</strong></p>
<p><strong>FCF = Operating Cash Flow - Capital Expenditures</strong></p>
<p>Operating cash flow और capex cash flow statement 10-K/10-Q। 6% FCF yield मतलब $1 market value पर $0.06 free cash flow annually।</p>

<h2>FCF vs Earnings — Reliability Gap</h2>
<p>Net income consistently FCF exceed — company expenses capitalize जो income statement flow करने चाहिए, aggressive revenue recognition, rising working capital cash consume। Red flags। FCF net income exceed — non-cash charges actual capex needs exceed, conservative earnings। 5+ years cumulative gap track — total net income significantly exceeds total FCF तो earnings quality suspect।</p>

<h2>Valuation Screening</h2>
<p>FCF yield powerful value opportunities identify — mature, cash-generative businesses। Screen: 7%+ FCF yield, stable/growing FCF, reasonable debt। Company 7% FCF yield generate annually — attractive dividends, buybacks, debt reduce, growth fund — all internally generated cash।</p>
<p>FCF yield risk-free rate (10-year Treasury) compare — equity risk premium assess। Treasury 4% stable company FCF yield 8% = 4-point premium equity risk।</p>

<h2>Growth Companies और Negative FCF</h2>
<p>High-growth companies low/negative FCF yields — aggressive expansion investment। Amazon years negative FCF logistics network build। FCF yield poor standalone tool growth companies। DCF model project future FCF maturity, revenue-based metrics (P/S, EV/Revenue) use।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>Indian investors FCF yield India और US stocks दोनों evaluate करने use कर सकते हैं। Indian IT companies (TCS, Infosys) consistently high FCF yields रखती हैं (5-8%) — asset-light model, strong cash generation। US tech peers (Apple, Microsoft) similar characteristics। Indian FMCG vs US Consumer Staples FCF yield comparison meaningful peer analysis।</p>

<p>India-specific nuance: Indian companies higher capex India growth stage के कारण — lower FCF yields mature US companies vs। Same sector compare: Reliance Industries (high capex, lower FCF yield) vs ExxonMobil (mature, higher FCF yield) — growth stage consideration important।</p>

<p>Brefyr पर SEC filings cash flow statement data FCF yield calculate और cash generation track thousands public companies।</p>
`,
};
