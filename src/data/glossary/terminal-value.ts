import type { GlossaryTerm } from "../types";

export const termTerminalValue: GlossaryTerm = {
  slug: "terminal-value",
  term: "Terminal Value",
  title: "Terminal Value — Capturing a Company's Worth Beyond the Forecast Period",
  shortDefinition:
    "Terminal value estimates the value of all cash flows a company will generate beyond the explicit forecast period of a DCF model, typically representing 60-80% of total enterprise value.",
  metaDescription:
    "What is terminal value? Learn the two methods to calculate it, why it dominates DCF valuations, and how to avoid the most common terminal value mistakes.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["terminal-value", "dcf", "valuation", "financial-modeling", "perpetuity"],
  relatedSlugs: ["dcf", "wacc", "intrinsic-value", "fcf-yield"],
  relatedTerms: ["dcf", "wacc", "intrinsic-value", "fcf-yield"],
  faq: [
    {
      question: "Why does terminal value dominate the DCF result?",
      answer:
        "Terminal value represents all cash flows from the end of the forecast period to infinity. Since companies are assumed to operate indefinitely, the value generated after year 10 (or whenever the forecast ends) is enormous in aggregate, even though each individual year is discounted more heavily. For a typical DCF with a 10-year forecast, terminal value accounts for 60-80% of total enterprise value. This is why the terminal value assumptions — growth rate and exit multiple — are the most critical inputs in any DCF model.",
    },
    {
      question: "Which method is better: perpetuity growth or exit multiple?",
      answer:
        "Neither is objectively superior. The perpetuity growth model is more theoretically rigorous because it doesn't rely on market multiples, but it's extremely sensitive to the terminal growth rate assumption. The exit multiple method is more intuitive and grounded in observable market data, but it embeds current market conditions (which may be euphoric or depressed) into a long-term valuation. Best practice is to use both methods and check whether they produce consistent results. Large discrepancies suggest one or both sets of assumptions need revision.",
    },
    {
      question: "What terminal growth rate should I use?",
      answer:
        "The terminal growth rate should not exceed long-term nominal GDP growth, which is approximately 2-3% for developed economies. A company growing faster than the economy forever would eventually become the entire economy — which is impossible. For companies in mature industries, 2-2.5% is appropriate. For companies with pricing power in growing markets, 2.5-3.5% may be justified. Anything above 4% requires exceptional justification and should be viewed skeptically.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Terminal value is the most influential and least intuitive component of a discounted cash flow model. It captures the value of a business from the end of your explicit forecast period — typically 5 to 10 years out — through the rest of the company's operating life. Because companies are assumed to live indefinitely (the going concern assumption), this remaining life generates an enormous amount of value, even when discounted heavily for time and risk. Getting the terminal value right often matters more than getting any individual year's cash flow right.</p>

<h2 id="perpetuity-growth">Method 1: Perpetuity Growth Model</h2>

<p><strong>Terminal Value = FCF(n+1) / (WACC - g)</strong></p>

<p>Where FCF(n+1) is the free cash flow in the first year after the forecast period, WACC is the discount rate, and g is the perpetual growth rate. This formula, also called the Gordon growth model, assumes the company grows its cash flows at a constant rate forever.</p>

<p>The math is elegant but dangerously sensitive. With a WACC of 9% and a terminal growth rate of 3%, the denominator is 6%. With a growth rate of 4%, the denominator shrinks to 5% — a 20% increase in terminal value from just one percentage point of additional growth. With a growth rate of 5%, the denominator is only 4%, doubling the terminal value compared to the 3% assumption. This extreme sensitivity explains why experienced analysts agonize over the terminal growth rate more than any other DCF input.</p>

<p>The terminal growth rate must be sustainable indefinitely. No company grows faster than the broader economy forever. If long-term nominal GDP growth is 4-5% (real growth plus inflation), the terminal growth rate should be at or below this level. Most analysts use 2-3% for mature companies in developed markets.</p>

<h2 id="exit-multiple">Method 2: Exit Multiple Method</h2>

<p><strong>Terminal Value = EBITDA(n) x Exit Multiple</strong></p>

<p>This method applies a valuation multiple — typically EV/EBITDA — to the final year's financial metric. The exit multiple is usually drawn from current trading multiples of comparable companies or from historical averages for the sector.</p>

<p>The appeal is simplicity and market-grounding: rather than making abstract assumptions about perpetual growth, you assume the company will be valued at a specific multiple when the forecast ends. If similar companies currently trade at 10x EBITDA, applying 10x to the final year's EBITDA gives a terminal value that's consistent with observable market prices.</p>

<p>The weakness: this method embeds current market conditions. If the market is euphoric and multiples are historically elevated, the exit multiple will overstate terminal value. If the market is depressed, it will understate it. Using a historical average multiple (the median over 10-15 years) partially mitigates this issue.</p>

<h2 id="cross-checking">Cross-Checking the Two Methods</h2>

<p>Best practice is to calculate terminal value using both methods and compare the results. If the perpetuity growth model produces a terminal value of $5 billion and the exit multiple method produces $4.8 billion, the assumptions are consistent and the estimate is more reliable. If one produces $5 billion and the other $8 billion, something is off — either the growth rate is too high, the exit multiple is too generous, or the two sets of assumptions are internally inconsistent.</p>

<p>You can also check the implied exit multiple from a perpetuity growth terminal value: Terminal Value / EBITDA(n) gives the implied multiple. If this implied multiple is 25x for a mature industrial company when peers trade at 10x, the terminal growth rate is too aggressive.</p>

<h2 id="reducing-terminal-weight">Reducing Terminal Value's Dominance</h2>

<p>Since terminal value typically represents 60-80% of total DCF value, the model's output is essentially a bet on terminal assumptions. Extending the explicit forecast period from 5 years to 10 or 15 years reduces terminal value's weight by giving more value to the explicit (and presumably more reliable) forecast years. This is especially important for high-growth companies whose growth rate will normalize over time — a longer forecast captures the transition from high growth to mature growth explicitly rather than burying it in the terminal value.</p>

<p>Another approach is to solve for the implied terminal growth rate at the current stock price and assess whether that growth rate is reasonable. If the market price implies a 5% perpetual growth rate for a mature utility, the stock is overvalued by this measure. If it implies only 1% for a growing technology platform, the stock may be undervalued.</p>

<p>On Brefyr, historical financial data from SEC filings provides the growth rates, margins, and cash flow trends needed to build and validate terminal value assumptions across thousands of public companies.</p>
`,
};
