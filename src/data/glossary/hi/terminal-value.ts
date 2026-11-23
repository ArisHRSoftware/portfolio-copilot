import type { GlossaryTerm } from "../../types";

export const termTerminalValueHi: GlossaryTerm = {
  slug: "terminal-value",
  term: "Terminal Value (टर्मिनल वैल्यू)",
  title: "Terminal Value — Forecast Period के बाद Company की Worth Capture करना",
  shortDefinition:
    "Terminal value DCF model की explicit forecast period के बाद company generate करेगी सभी cash flows की value estimate करता है — typically total enterprise value का 60-80% represent करता है।",
  metaDescription:
    "Terminal value क्या है? दो calculation methods, DCF valuations dominate क्यों करता है, और सबसे common terminal value mistakes avoid कैसे करें।",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["terminal-value", "dcf", "valuation", "financial-modeling", "perpetuity"],
  relatedSlugs: ["dcf", "wacc", "intrinsic-value", "fcf-yield"],
  relatedTerms: ["dcf", "wacc", "intrinsic-value", "fcf-yield"],
  faq: [
    {
      question: "Terminal value DCF result dominate क्यों करता है?",
      answer:
        "Terminal value forecast period end से infinity तक सभी cash flows represent करता है। Companies indefinitely operate assume — year 10 बाद value enormous in aggregate। Typical 10-year forecast DCF में terminal value total enterprise value का 60-80%। इसलिए terminal value assumptions — growth rate, exit multiple — DCF model के सबसे critical inputs हैं।",
    },
    {
      question: "कौन सा terminal growth rate use करें?",
      answer:
        "Terminal growth rate long-term nominal GDP growth exceed नहीं करना चाहिए — developed economies approximately 2-3%। Company economy से faster forever grow करे तो eventually entire economy बन जाएगी — impossible। Mature industries: 2-2.5%। Pricing power growing markets: 2.5-3.5%। 4% से ऊपर exceptional justification require — skeptically देखें।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Terminal value DCF model का सबसे influential और least intuitive component है। Explicit forecast period — typically 5-10 years — end से company की बाकी operating life तक value capture करता है। Going concern assumption — companies indefinitely live — infinite value generate करती हैं। <strong>Terminal value right करना individual year's cash flow से ज़्यादा matter करता है।</strong></p>

<h2>Method 1: Perpetuity Growth Model</h2>

<p><strong>Terminal Value = FCF(n+1) / (WACC - g)</strong></p>

<p>FCF(n+1) forecast period बाद first year free cash flow, WACC discount rate, g perpetual growth rate। Gordon growth model — company cash flows constant rate forever grow करे assume।</p>

<p>Math elegant लेकिन dangerously sensitive। WACC 9%, terminal growth 3%: denominator 6%। Growth 4%: denominator 5% — 20% terminal value increase from just one percentage point। <strong>Extreme sensitivity — experienced analysts terminal growth rate पर सबसे ज़्यादा agonize करते हैं।</strong></p>

<p>Terminal growth rate indefinitely sustainable होनी चाहिए। Long-term nominal GDP growth 4-5% (real + inflation) — terminal growth rate इससे at/below। ज़्यादातर analysts mature companies के लिए 2-3% use।</p>

<h2>Method 2: Exit Multiple Method</h2>

<p><strong>Terminal Value = EBITDA(n) × Exit Multiple</strong></p>

<p>Final year financial metric पर valuation multiple (typically EV/EBITDA) apply। Exit multiple comparable companies के current trading multiples या historical averages से।</p>

<p>Appeal: simplicity और market-grounding। Weakness: current market conditions embed। Market euphoric — overstate; depressed — understate।</p>

<h2>Cross-Checking</h2>

<p>Best practice: दोनों methods calculate करें, results compare। Perpetuity $5 billion, exit multiple $4.8 billion — assumptions consistent, estimate reliable। $5 billion vs $8 billion — something off, assumptions review।</p>

<p>Implied exit multiple check: Terminal Value / EBITDA(n)। Mature industrial company implied 25x जबकि peers 10x — terminal growth rate too aggressive।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors DCF valuations करते हैं — terminal value concepts same apply। India-listed companies के लिए higher WACC (country risk) और potentially higher terminal growth rate (developing economy)। US companies valuation: 2-3% terminal growth standard। Brefyr पर historical financial data growth rates, margins, cash flow trends provide — terminal value assumptions validate।</p>
`,
};
