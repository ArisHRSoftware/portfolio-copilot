import type { GlossaryTerm } from "../../types";

export const termStockBasedCompensationHi: GlossaryTerm = {
  slug: "stock-based-compensation",
  term: "Stock-Based Compensation / SBC (स्टॉक-बेस्ड कंपेंसेशन)",
  title: "Stock-Based Compensation — Companies Employees को Equity से कैसे Pay करती हैं और Financials पर Impact",
  shortDefinition:
    "Stock-based compensation (SBC) employees को equity instruments — stock options, RSUs, performance shares — से pay करने का method है, जिसे GAAP under fair value पर income statement में expense करना होता है।",
  metaDescription:
    "Stock-based compensation क्या है? SBC expense कैसे calculate होता है, earnings और cash flow पर impact, dilution debate, और SEC filings में SBC details कहाँ मिलते हैं।",
  wordCount: 430,
  category: "Accounting & Audit",
  tags: ["stock-based-compensation", "sbc", "rsu", "stock-options", "dilution"],
  relatedSlugs: ["rsu", "dilution", "non-gaap-measures", "executive-compensation", "gaap"],
  relatedTerms: ["rsu", "dilution", "non-gaap-measures", "executive-compensation", "gaap"],
  faq: [
    {
      question: "Tech companies SBC adjusted earnings में add back क्यों करती हैं?",
      answer:
        "Tech companies argue: SBC non-cash expense है, corporate cash outflow नहीं, comparability distort करता है। Counterargument (Warren Buffett): SBC real economic cost है — existing shareholders dilute। Equity issue न करें तो ज़्यादा cash compensation pay करनी होगी — SBC effectively cash expense different form में। SEC SBC universal exclusion से concerned है non-GAAP measures में।",
    },
    {
      question: "SBC share count कैसे affect करता है?",
      answer:
        "Options exercise या RSUs vest होने पर new shares issue (या treasury shares release) — total shares outstanding increase, existing shareholders dilute। Dilutive effect diluted EPS में reflect — all in-the-money options और RSUs convert assume। Companies often share repurchase programs से dilution offset। Total SBC share issuance vs total buyback compare करें — net dilution या net reduction determine।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Stock-based compensation (SBC) employees को — CEO से rank-and-file engineers तक — cash के बजाय (या addition में) equity instruments से pay करने की practice है। सबसे common forms: <strong>RSUs</strong> (time-based vesting, shares convert), <strong>stock options</strong> (predetermined price पर shares buy करने का right)। ASC 718 require करता है SBC fair value income statement पर expense हो vesting period में। Technology companies के लिए SBC revenue का <strong>15-30%</strong> represent कर सकता है।</p>

<h2>SBC Types</h2>

<p><strong>RSUs (Restricted Stock Units)।</strong> Large companies में सबसे common। Employee को promise: certain shares vesting period (typically 3-4 years) बाद deliver। Grant date fair value = stock price, ratably expense।</p>

<p><strong>Stock options।</strong> Fixed exercise price (usually grant date stock price) पर shares purchase right 10 years तक। Value तभी जब stock price exercise price से ऊपर। Black-Scholes/Monte Carlo models fair value estimate।</p>

<p><strong>Performance shares (PSUs)।</strong> RSUs जैसे लेकिन specific performance targets achieve करने पर vest — revenue growth, EPS targets, TSR।</p>

<h2>Income Statement Impact</h2>

<p>SBC expense operating expense flow through — operating income और net income reduce। कई technology companies के लिए SBC annually $1 billion+ — largest expense categories में से एक। Expense grant date fair value पर based, subsequent stock price movements से change नहीं होता।</p>

<h2>Cash Flow Impact</h2>

<p>SBC non-cash expense — shares vest या options exercise पर corporate cash pay नहीं होता। Net income से operating cash flow reconciliation में SBC add back। <strong>High SBC companies strong operating cash flow दिखा सकती हैं modest GAAP net income के साथ।</strong> लेकिन dilution real — हर share issued per-share calculations denominator increase।</p>

<h2>Dilution Debate</h2>

<p>"Real cost" camp: SBC shareholders dilute, eliminate करें तो cash compensation replace। "Non-cash" camp: SBC cash conserve, talent attract, incentives align करता है। Best practice: GAAP और non-GAAP दोनों results analyze करें।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में ESOP/ESAR regulations Ind AS 102 govern। US tech companies analyze करते समय SBC expense critical है — GAAP profitability significantly different non-GAAP से। Indian investors को दोनों numbers देखने चाहिए। Brefyr SBC expense data 10-K/10-Q से extract करता है।</p>
`,
};
