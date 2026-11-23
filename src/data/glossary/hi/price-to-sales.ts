import type { GlossaryTerm } from "../../types";

export const termPriceToSalesHi: GlossaryTerm = {
  slug: "price-to-sales",
  term: "Price-to-Sales Ratio (प्राइस-टू-सेल्स रेशियो)",
  title: "Price-to-Sales Ratio (P/S) — Earnings न हों तब भी Companies Value करना",
  shortDefinition:
    "P/S ratio company market capitalization को annual revenue से divide करती है — valuation metric जो earnings न होने पर भी काम करती है।",
  metaDescription:
    "P/S ratio क्या है? PE बजाय कब use, growth companies interpret कैसे, reasonable P/S कितना, और EV/Revenue comparison।",
  wordCount: 410,
  category: "Financial Metrics",
  tags: ["price-to-sales", "valuation", "revenue", "financial-metrics", "growth-stocks"],
  relatedSlugs: ["pe-ratio", "price-to-book", "peg-ratio", "gross-margin"],
  relatedTerms: ["pe-ratio", "price-to-book", "peg-ratio", "gross-margin"],
  faq: [
    { question: "P/E बजाय P/S कब use?", answer: "Negative earnings companies (PE meaningless) — pre-profit growth, early biotech, turnarounds। Same industry different margin profiles compare (pure revenue basis)। Limitation: P/S profitability ignore — low P/S terrible margins = actually overvalued earnings potential relative।" },
    { question: "अच्छा P/S ratio कितना?", answer: "Mature companies: <2.0 reasonable, >10.0 expensive। High-growth SaaS 80%+ gross margins, 30%+ growth: 10-20 bull markets common। Key: P/S + gross margins context evaluate। P/S 5 + 80% margins = price-to-gross-profit 6.25। P/S 5 + 30% margins = price-to-gross-profit 16.7 — far more expensive।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>P/S ratio investor toolkit में critical gap fill: earnings नहीं हैं तो value कैसे? High-growth tech, biotech, turnarounds — substantial revenue लेकिन net losses report। PE breaks down — negative earnings divide नहीं हो सकती। P/S step in — हर revenue dollar investors कितना pay करने willing, profit regardless।</p>

<p>Indian context: India में भी loss-making growth companies (Zomato, Paytm IPO time) P/S ratio पर value हुईं। US tech stocks same approach — Indian investors familiar concept।</p>

<h2>Calculation</h2>
<p><strong>P/S = Market Capitalization / Annual Revenue</strong></p>
<p>Market cap = stock price x shares outstanding। Annual revenue typically TTM income statement। P/S 5.0 = investors $5 pay हर $1 annual revenue। Forward P/S: forward revenue estimates use।</p>

<h2>Revenue Quality Matters</h2>
<p>सभी revenue equal नहीं — P/S fundamental limitation। Recurring subscription SaaS revenue far more valuable than one-time hardware sales। Subscription = predictable, sticky, high margins। Hardware = cyclical, non-recurring, thin margins।</p>
<p>Cloud software 40% growth, 80% margins → P/S 15। Hardware 5% growth, 25% margins → P/S 0.5। Both rational — revenue economics completely different।</p>
<p>Always consider: recurring vs one-time %, gross margin, revenue growth rate, net revenue retention। Qualitative factors determine P/S cheap/fair/expensive।</p>

<h2>P/S vs EV/Revenue</h2>
<p>EV/Revenue = more sophisticated, capital structure adjust। EV = market cap + debt - cash।</p>
<p>Two companies: $500M revenue, $3B market cap (P/S 6.0)। Company A: $1B cash, no debt → EV $2B (EV/Rev 4.0)। Company B: no cash, $1B debt → EV $4B (EV/Rev 8.0)। B twice as expensive EV basis even though P/S identical। P/S completely misses — serious analysis EV/Revenue prefer।</p>

<h2>Historical Context</h2>
<p>Dot-com bubble 1999-2000: some internet companies P/S 100x+ negligible revenue — stocks collapsed 80-99%। 2020-21: SaaS P/S 40-60x — 2022 correction compressed 5-10x, rising rates reduced present value distant profits।</p>
<p>P/S highly sensitive to sentiment + interest rates। Low-rate = higher multiples stretched for growth। High-rate = discount rate increase, compression。</p>

<p>Brefyr revenue data SEC filings — P/S ratios calculate, compare thousands companies, filing history, insider trading, AI analysis alongside।</p>
`,
};
