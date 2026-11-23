import type { GlossaryTerm } from "../types";

export const termIntrinsicValue: GlossaryTerm = {
  slug: "intrinsic-value",
  term: "Intrinsic Value",
  title: "Intrinsic Value — What a Company Is Actually Worth Beyond Its Market Price",
  shortDefinition:
    "Intrinsic value is the estimated true economic worth of a business based on its fundamentals — expected future cash flows, growth, and risk — independent of its current market price.",
  metaDescription:
    "What is intrinsic value? Learn how to estimate it using DCF and other methods, why it differs from market price, and how value investors use it.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["intrinsic-value", "valuation", "value-investing", "dcf", "fundamental-analysis"],
  relatedSlugs: ["dcf", "margin-of-safety", "economic-moat", "wacc"],
  relatedTerms: ["dcf", "margin-of-safety", "economic-moat", "wacc"],
  faq: [
    {
      question: "How do you calculate intrinsic value?",
      answer:
        "The most rigorous method is a discounted cash flow (DCF) analysis: project the company's future free cash flows, then discount them back to present value using an appropriate discount rate (typically WACC). Simpler approaches include applying a reasonable P/E multiple to normalized earnings, using an earnings power value based on current earnings with no growth, or calculating the net asset value of the company's holdings. No method produces a precise number — intrinsic value is always an estimate within a range.",
    },
    {
      question: "Why does intrinsic value differ from market price?",
      answer:
        "Market price reflects what investors are willing to pay at a specific moment, driven by supply and demand, sentiment, momentum, and short-term factors. Intrinsic value reflects the underlying economic worth of the business regardless of market conditions. The two diverge because markets are influenced by fear and greed — stocks get bid up during euphoria and sold off during panic. Value investing is built on the belief that market prices eventually converge toward intrinsic value, creating opportunities when the gap is wide.",
    },
    {
      question: "Is intrinsic value objective or subjective?",
      answer:
        "Intrinsic value is fundamentally subjective — it depends on assumptions about future cash flows, growth rates, discount rates, and terminal values. Two competent analysts can examine the same company and arrive at intrinsic value estimates that differ by 30% or more. This is why Benjamin Graham emphasized the margin of safety: buy only when the market price is significantly below your estimate of intrinsic value, so that even if your estimate is wrong, you still have protection.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Intrinsic value is the central concept in fundamental investing. It represents what a business is truly worth based on its ability to generate cash for its owners over its remaining lifetime. The idea is straightforward: a business is worth the sum of all the cash it will ever produce, adjusted for the time value of money. If you could know the exact amount and timing of every future dollar a company will generate, you could calculate its intrinsic value precisely. In reality, the future is uncertain, so intrinsic value is always an estimate — a range of reasonable values rather than a single definitive number.</p>

<h2 id="foundations">The Conceptual Foundation</h2>

<p>The concept of intrinsic value dates to Benjamin Graham and David Dodd's 1934 masterwork "Security Analysis." Graham argued that every security has an intrinsic value determined by its fundamentals — earnings power, assets, growth prospects, and financial stability — that exists independently of market price. Market prices fluctuate around intrinsic value, sometimes above (overvalued) and sometimes below (undervalued). The disciplined investor estimates intrinsic value and buys only when the market price offers a sufficient discount.</p>

<p>Warren Buffett refined this concept further: "Intrinsic value is the discounted value of the cash that can be taken out of a business during its remaining life." This definition makes clear that intrinsic value is about cash, not earnings, revenue, or any other accounting construct. Cash is what owners actually receive. Everything else is an approximation.</p>

<h2 id="estimation-methods">Methods of Estimation</h2>

<p>The <strong>discounted cash flow (DCF) model</strong> is the most theoretically rigorous approach. Project free cash flows for 5-10 years, calculate a terminal value for all cash flows beyond that period, and discount everything back to the present using the weighted average cost of capital (WACC). The sum equals intrinsic value. The challenge: small changes in growth rate or discount rate assumptions produce large changes in the result, making DCF sensitive to input assumptions.</p>

<p><strong>Earnings power value (EPV)</strong> takes a simpler approach: assume the company earns its current normalized earnings forever with no growth, and capitalize those earnings at the cost of capital. EPV = Normalized EBIT x (1 - Tax Rate) / WACC. This method ignores growth entirely, providing a floor estimate of intrinsic value. If the market price is below EPV, the stock is cheap even with zero growth — a strong margin of safety.</p>

<p><strong>Asset-based valuation</strong> estimates intrinsic value by appraising the company's assets and subtracting liabilities. This works for holding companies, real estate firms, and distressed situations where the company might be worth more in liquidation than as a going concern. For operating businesses with significant intangible assets, asset-based approaches dramatically understate value.</p>

<p><strong>Comparable company analysis</strong> values a business by applying multiples (P/E, EV/EBITDA, P/S) derived from similar publicly traded companies. While technically a relative valuation rather than an intrinsic value calculation, it provides a sanity check: if your DCF says a company is worth 50x earnings but peers trade at 15x, your assumptions may be too aggressive.</p>

<h2 id="range-not-point">A Range, Not a Point Estimate</h2>

<p>The most important insight about intrinsic value is that it's inherently imprecise. Buffett has said: "It is better to be approximately right than precisely wrong." A reasonable intrinsic value analysis might conclude that a stock is worth between $60 and $85 per share. If the stock trades at $45, the discount to even the low end of the range provides a margin of safety. If it trades at $90, it's above even the optimistic estimate. If it trades at $70, it's within the range of fair value and doesn't offer a clear opportunity.</p>

<p>This range-based thinking protects against the false precision trap. An analyst who concludes a stock is worth "exactly $72.50" is expressing unjustified confidence in assumptions about events years into the future. The honest answer is always a range, with the width of the range reflecting the uncertainty of the forecast.</p>

<p>On Brefyr, financial data from SEC filings provides the fundamental inputs — earnings, cash flows, growth rates, and balance sheet items — needed to estimate intrinsic value across thousands of public companies alongside insider trading and AI-driven filing analysis.</p>
`,
};
