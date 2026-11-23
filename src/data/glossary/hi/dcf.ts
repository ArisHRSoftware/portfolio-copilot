import type { GlossaryTerm } from "../../types";

export const termDCFHi: GlossaryTerm = {
  slug: "dcf",
  term: "Discounted Cash Flow (डिस्काउंटेड कैश फ्लो)",
  title: "DCF — Intrinsic Valuation का Gold Standard",
  shortDefinition:
    "Discounted cash flow analysis company की value estimate करता है future free cash flows project करके और appropriate rate पर present value में discount करके, typically weighted average cost of capital।",
  metaDescription:
    "DCF model क्या है? Step by step build करना, key inputs जो results drive करते हैं, common pitfalls, और DCF कब best work करता है।",
  wordCount: 440,
  category: "Financial Metrics",
  tags: ["dcf", "valuation", "intrinsic-value", "cash-flow", "financial-modeling"],
  relatedSlugs: ["terminal-value", "wacc", "fcf-yield", "intrinsic-value"],
  relatedTerms: ["terminal-value", "wacc", "fcf-yield", "intrinsic-value"],
  faq: [
    {
      question: "DCF model build करने के key steps क्या हैं?",
      answer:
        "पाँच steps: (1) Free cash flows project करें 5-10 years forecast period। (2) Terminal value calculate करें forecast period beyond सभी cash flows represent करने। (3) Discount rate choose करें — usually WACC। (4) Projected cash flows और terminal value present value में discount करें। (5) Present values sum करें enterprise value के लिए, net debt subtract करें equity value, shares outstanding से divide per-share intrinsic value।",
    },
    {
      question: "DCF analysis की biggest weakness क्या है?",
      answer:
        "Assumptions sensitivity। Growth rate, discount rate, terminal value assumptions में small changes output में large changes produce करते हैं। $80 per share valued company 10% growth 9% discount पर $55 worth हो सकती है 7% growth 11% discount पर — modest input changes से 31% difference।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Discounted cash flow analysis finance में theoretically सबसे sound valuation method है। Logic irrefutable है: asset worth है all future cash flows की present value जो वो generate करेगा। आज का dollar next year के dollar से ज़्यादा worth है क्योंकि invest हो सकता है। Company के future free cash flows project करके और risk reflect करने वाले rate पर discount करके, DCF estimate produce करता है business right now कितनी worth है।</p>

<h2>Building Blocks</h2>

<p><strong>Free Cash Flow (FCF):</strong> Operating Cash Flow - Capital Expenditures। Business generate करता है cash after operating expenses pay करने और asset base maintain/grow करने। सभी capital providers को available cash।</p>

<p><strong>Discount Rate:</strong> Typically WACC — capital का opportunity cost। Higher risk businesses higher discount rates, lower present value।</p>

<p><strong>Terminal Value:</strong> Forecast period beyond सभी cash flows capture करता है। Typically total DCF value का 60-80% represent करता है — single most influential component।</p>

<h2>Step-by-Step Process</h2>

<p><strong>Step 1:</strong> Free cash flows project — revenue growth, margins, capex, working capital assumptions। हर year projected FCF figure produce।</p>

<p><strong>Step 2:</strong> Terminal value calculate — perpetuity growth model (FCF(n+1) / (WACC - g), g typically 2-3%) या exit multiple method (EV/EBITDA multiple final year)।</p>

<p><strong>Step 3:</strong> Present value discount — हर projected cash flow (1 + WACC)^n से divide।</p>

<p><strong>Step 4:</strong> Sum — discounted cash flows + discounted terminal value = enterprise value। Net debt subtract = equity value। Shares divide = intrinsic value per share।</p>

<h2>Common Errors</h2>

<p>सबसे frequent: overly optimistic terminal growth rate। कोई company economy से faster forever grow नहीं करती। 5% terminal growth DCF values 30-50% inflate कर सकता है vs reasonable 2.5%।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian analysts DCF models Indian companies के लिए INR में build करते हैं higher WACC (India risk premium) use करके। US companies evaluate करते समय USD-denominated DCF use करें lower WACC। Key difference: US risk-free rate (~4%) vs India (~7%) — same company different currencies में materially different DCF values produce करती है। Indian investors INR returns consider करते समय expected INR depreciation factor करें।</p>

<p>Practical tip: Screener.in, Tijori Finance जैसे Indian platforms Indian stocks DCF provide करते हैं। US stocks के लिए Brefyr SEC filings से historical cash flows, capital expenditures, growth rates provide करता है DCF models build करने।</p>
`,
};
