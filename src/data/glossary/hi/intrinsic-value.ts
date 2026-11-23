import type { GlossaryTerm } from "../../types";

export const termIntrinsicValueHi: GlossaryTerm = {
  slug: "intrinsic-value",
  term: "Intrinsic Value (इंट्रिन्सिक वैल्यू)",
  title: "Intrinsic Value — Company Actually Worth कितनी है Market Price से परे",
  shortDefinition:
    "Intrinsic value business की estimated true economic worth है fundamentals पर based — expected future cash flows, growth, और risk — current market price से independent।",
  metaDescription:
    "Intrinsic value क्या है? DCF और दूसरे methods से estimate कैसे करें, market price से क्यों different, और value investors कैसे use करते हैं।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["intrinsic-value", "valuation", "value-investing", "dcf", "fundamental-analysis"],
  relatedSlugs: ["dcf", "margin-of-safety", "economic-moat", "wacc"],
  relatedTerms: ["dcf", "margin-of-safety", "economic-moat", "wacc"],
  faq: [
    {
      question: "Intrinsic value calculate कैसे करें?",
      answer:
        "सबसे rigorous: DCF analysis — future free cash flows project, appropriate discount rate (WACC) पर present value discount। Simpler: reasonable PE multiple normalized earnings पर, earnings power value no growth assume करके, net asset value। कोई method precise number produce नहीं करता — always estimate within range।",
    },
    {
      question: "Intrinsic value market price से different क्यों होती है?",
      answer:
        "Market price supply-demand, sentiment, momentum, short-term factors reflect करती है। Intrinsic value underlying economic worth regardless of market conditions। Fear और greed — euphoria में bid up, panic में sell off। Value investing believe करती है prices eventually intrinsic value converge करती हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Intrinsic value fundamental investing का central concept है। Represent करती है कि business truly worth कितनी है — remaining lifetime में owners के लिए generate होने वाली cash के sum पर based, time value of money adjust करके। Exact amount और timing पता हो तो precise calculate possible। Reality में future uncertain — intrinsic value always estimate है, single number नहीं reasonable range।</p>

<p>Indian context: India में भी value investing popular है — Rakesh Jhunjhunwala, Parag Parikh जैसे investors intrinsic value based decisions लेते थे। Same principles US stocks पर apply — SEC filings fundamental inputs provide करती हैं।</p>

<h2>Conceptual Foundation</h2>

<p>Benjamin Graham और David Dodd "Security Analysis" (1934) — हर security की intrinsic value fundamentals determine करती है — earnings power, assets, growth, stability — market price से independent। Market prices fluctuate around intrinsic value — above (overvalued) और below (undervalued)।</p>

<p>Warren Buffett: "Intrinsic value is the discounted value of the cash that can be taken out of a business during its remaining life." Cash matter करती है, earnings/revenue/accounting constructs नहीं।</p>

<h2>Estimation Methods</h2>

<p><strong>DCF model:</strong> सबसे theoretically rigorous। Free cash flows 5-10 years project, terminal value calculate, WACC पर present value discount। Challenge: small changes growth rate/discount rate = large result changes।</p>

<p><strong>Earnings Power Value (EPV):</strong> Simpler — current normalized earnings forever, no growth, cost of capital capitalize। EPV = Normalized EBIT x (1-Tax Rate) / WACC। Floor estimate — market price EPV से नीचे = zero growth पर भी cheap।</p>

<p><strong>Asset-based valuation:</strong> Assets appraise, liabilities subtract। Holding companies, real estate, distressed situations के लिए। Operating businesses significant intangibles वाली — dramatically understate।</p>

<p><strong>Comparable company analysis:</strong> Peer multiples (PE, EV/EBITDA, P/S) apply। Technically relative valuation — sanity check: DCF says 50x earnings लेकिन peers 15x — assumptions too aggressive?</p>

<h2>Range, Not Point Estimate</h2>

<p>सबसे important insight: inherently imprecise। Buffett: "Better to be approximately right than precisely wrong." Reasonable analysis conclude करे stock worth $60-$85। $45 पर trades = discount even low end से। $90 = above optimistic estimate। $70 = within fair value range, no clear opportunity।</p>

<p>"Exactly $72.50" unjustified confidence express करता है years future assumptions पर। Honest answer always range — width uncertainty reflect करती है।</p>

<p>Brefyr पर SEC filings से financial data — earnings, cash flows, growth rates, balance sheet items — intrinsic value estimate करने के fundamental inputs thousands of companies के लिए।</p>
`,
};
