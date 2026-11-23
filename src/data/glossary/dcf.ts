import type { GlossaryTerm } from "../types";

export const termDCF: GlossaryTerm = {
  slug: "dcf",
  term: "Discounted Cash Flow",
  title: "Discounted Cash Flow (DCF) — The Gold Standard of Intrinsic Valuation",
  shortDefinition:
    "Discounted cash flow analysis estimates a company's value by projecting its future free cash flows and discounting them back to present value at an appropriate rate, typically the weighted average cost of capital.",
  metaDescription:
    "What is a DCF model? Learn how to build one step by step, the key inputs that drive results, common pitfalls, and when DCF works best.",
  wordCount: 490,
  category: "Financial Metrics",
  tags: ["dcf", "valuation", "intrinsic-value", "cash-flow", "financial-modeling"],
  relatedSlugs: ["terminal-value", "wacc", "fcf-yield", "intrinsic-value"],
  relatedTerms: ["terminal-value", "wacc", "fcf-yield", "intrinsic-value"],
  faq: [
    {
      question: "What are the key steps in building a DCF model?",
      answer:
        "A DCF model has five steps: (1) Project free cash flows for an explicit forecast period, typically 5-10 years, based on revenue growth, margins, capital expenditures, and working capital needs. (2) Calculate a terminal value representing all cash flows beyond the forecast period. (3) Choose a discount rate — usually WACC. (4) Discount all projected cash flows and the terminal value back to present value. (5) Sum the present values to get enterprise value, then subtract net debt to get equity value and divide by shares outstanding for per-share intrinsic value.",
    },
    {
      question: "What is the biggest weakness of DCF analysis?",
      answer:
        "Sensitivity to assumptions. Small changes in the growth rate, discount rate, or terminal value assumptions produce large changes in the output. A company valued at $80 per share with 10% growth and a 9% discount rate might be worth $55 at 7% growth and 11% discount — a 31% difference from modest input changes. This is why experienced analysts run sensitivity tables showing how value changes across a range of assumptions, and why margin of safety is essential.",
    },
    {
      question: "When should you NOT use a DCF?",
      answer:
        "DCF is unreliable for companies with highly unpredictable cash flows: early-stage startups with no history, biotech companies awaiting regulatory approval, deeply cyclical businesses at the peak or trough, and companies in financial distress. The model requires reasonable confidence in cash flow projections. When the future is genuinely unknowable, relative valuation (P/E, EV/Revenue) or option-pricing models may be more appropriate, despite their own limitations.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Discounted cash flow analysis is the most theoretically sound valuation method in finance. Its logic is irrefutable: an asset is worth the present value of all future cash flows it will generate. A dollar received today is worth more than a dollar received next year because today's dollar can be invested. By projecting a company's future free cash flows and discounting them at a rate that reflects the riskiness of those cash flows, DCF produces an estimate of what the entire business is worth right now.</p>

<h2 id="building-blocks">The Building Blocks</h2>

<p><strong>Free Cash Flow (FCF)</strong> is the cash a business generates after paying all operating expenses and reinvesting to maintain and grow its asset base. FCF = Operating Cash Flow - Capital Expenditures. This is the cash available to all capital providers — equity holders and debt holders alike.</p>

<p><strong>The Discount Rate</strong>, typically the weighted average cost of capital (WACC), reflects the opportunity cost of capital — what investors could earn in alternative investments of similar risk. Higher risk businesses require higher discount rates, which reduce the present value of future cash flows. WACC blends the cost of equity (derived from the capital asset pricing model or similar) with the after-tax cost of debt, weighted by the company's capital structure.</p>

<p><strong>The Terminal Value</strong> captures all cash flows beyond the explicit forecast period. Since projecting cash flows year by year for 50+ years is impractical, the terminal value approximates the business's value at the end of the forecast period, assuming a stable growth rate into perpetuity. The terminal value typically represents 60-80% of total DCF value, making it the single most influential component of the model.</p>

<h2 id="step-by-step">Step-by-Step Process</h2>

<p><strong>Step 1: Project free cash flows.</strong> Start with current revenue and project growth for each year of the forecast period (typically 5-10 years). Apply operating margin assumptions to get operating income. Deduct taxes, add back depreciation and amortization, subtract capital expenditures, and adjust for working capital changes. Each year produces a projected free cash flow figure.</p>

<p><strong>Step 2: Calculate terminal value.</strong> The two common methods are the perpetuity growth model (also called the Gordon growth model) and the exit multiple method. The perpetuity growth model assumes FCF grows at a constant rate forever: Terminal Value = FCF(n+1) / (WACC - g), where g is the perpetual growth rate (typically 2-3%, approximating long-term GDP growth). The exit multiple method applies an EV/EBITDA multiple to the final year's EBITDA.</p>

<p><strong>Step 3: Discount to present value.</strong> Each projected cash flow is divided by (1 + WACC) raised to the power of the number of years in the future it occurs. The terminal value is similarly discounted from the end of the forecast period to the present.</p>

<p><strong>Step 4: Sum present values.</strong> The sum of all discounted cash flows plus the discounted terminal value equals the enterprise value of the business. Subtract net debt (total debt minus cash) to get equity value. Divide by fully diluted shares outstanding to get intrinsic value per share.</p>

<h2 id="sensitivity">Sensitivity Analysis — The Critical Step</h2>

<p>A single DCF output is nearly meaningless because it reflects one specific set of assumptions. Proper DCF analysis includes a sensitivity table showing how the per-share value changes across a matrix of growth rate and discount rate assumptions. This table reveals the range of reasonable values and shows which assumptions drive the result most.</p>

<p>If the value is highly sensitive to the growth rate but insensitive to the discount rate, the investment thesis depends on whether the growth materializes. If the value is sensitive to both, the investment carries higher uncertainty and demands a wider margin of safety.</p>

<h2 id="common-errors">Common Errors</h2>

<p>The most frequent error is using an overly optimistic terminal growth rate. No company grows faster than the economy forever — if it did, it would eventually exceed global GDP. Terminal growth rates above 3-4% for dollar-denominated companies are almost certainly too high. Using 5% terminal growth can inflate DCF values by 30-50% compared to a more reasonable 2.5%.</p>

<p>Another common mistake is projecting margins that expand continuously without a logical ceiling. Margins are bounded by competition, regulation, and the laws of economics. Projecting a company's operating margin from 15% to 35% over ten years requires a compelling competitive argument, not just a spreadsheet formula.</p>

<p>On Brefyr, financial data from SEC filings provides the historical cash flows, capital expenditures, and growth rates needed to build DCF models for thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
