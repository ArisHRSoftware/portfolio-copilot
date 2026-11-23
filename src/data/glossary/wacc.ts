import type { GlossaryTerm } from "../types";

export const termWACC: GlossaryTerm = {
  slug: "wacc",
  term: "Weighted Average Cost of Capital",
  title: "WACC — The Discount Rate That Drives Every DCF Valuation",
  shortDefinition:
    "The weighted average cost of capital (WACC) blends a company's cost of equity and after-tax cost of debt, weighted by their proportions in the capital structure, to produce the discount rate used in DCF valuations.",
  metaDescription:
    "What is WACC? Learn how to calculate it, why it matters for valuation, what drives each component, and common mistakes in WACC estimation.",
  wordCount: 460,
  category: "Financial Metrics",
  tags: ["wacc", "cost-of-capital", "valuation", "dcf", "financial-metrics"],
  relatedSlugs: ["cost-of-equity", "cost-of-debt", "dcf", "roic"],
  relatedTerms: ["cost-of-equity", "cost-of-debt", "dcf", "roic"],
  faq: [
    {
      question: "Why is WACC used as the discount rate in DCF models?",
      answer:
        "WACC represents the minimum return a company must earn on its investments to satisfy all capital providers — both equity holders and debt holders. Free cash flow in a DCF model is available to all capital providers, so it should be discounted at a rate that reflects the blended cost of all capital. If a company earns exactly its WACC, equity holders receive their required return and debt holders receive their interest — nobody earns excess returns. Any return above WACC creates value; below WACC destroys value.",
    },
    {
      question: "What is a typical WACC for a public company?",
      answer:
        "For large, stable companies in developed markets, WACC typically ranges from 7-10%. Investment-grade companies with significant low-cost debt might have WACCs as low as 6-7%. Smaller, higher-risk companies or those in emerging markets may have WACCs of 10-15% or higher. Technology companies with no debt but high equity risk premiums often show WACCs of 9-12%. The specific WACC depends on the company's capital structure, business risk, and market conditions.",
    },
    {
      question: "Should WACC change over the DCF forecast period?",
      answer:
        "In theory, WACC should change as the company's capital structure and risk profile evolve. A startup that begins with 100% equity might optimally shift to 20-30% debt as it matures, lowering WACC over time. In practice, most DCF models use a constant WACC for simplicity, based on the company's target or long-term capital structure. For companies undergoing significant capital structure changes (deleveraging after an acquisition, for example), using a time-varying WACC improves accuracy.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>WACC is the discount rate at the heart of every DCF valuation. It represents the blended return that a company must generate on its invested capital to keep both its shareholders and lenders satisfied. Too high a WACC shrinks the present value of future cash flows, making the company look cheap. Too low inflates the valuation artificially. Getting WACC right is essential for any meaningful intrinsic value estimate.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>WACC = (E/V x Re) + (D/V x Rd x (1 - Tc))</strong></p>

<p>Where: <strong>E</strong> = market value of equity, <strong>D</strong> = market value of debt, <strong>V</strong> = E + D (total capital), <strong>Re</strong> = cost of equity, <strong>Rd</strong> = cost of debt, <strong>Tc</strong> = corporate tax rate.</p>

<p>The formula weights each capital component by its proportion of total value. Debt gets a tax benefit because interest payments are tax-deductible — the (1 - Tc) term captures this advantage, which is why debt financing is cheaper than equity on an after-tax basis.</p>

<h2 id="cost-of-equity">The Cost of Equity Component</h2>

<p>Cost of equity is the return shareholders require for investing in the company's stock. The standard approach uses the capital asset pricing model (CAPM): <strong>Re = Rf + Beta x (Rm - Rf)</strong>, where Rf is the risk-free rate, Beta measures the stock's sensitivity to market movements, and (Rm - Rf) is the equity risk premium.</p>

<p>Each CAPM input involves judgment. The risk-free rate is typically the 10-year government bond yield. The equity risk premium — the extra return investors demand for holding stocks instead of bonds — is estimated at 4-7% depending on methodology. Beta is calculated from historical stock price data, but historical beta may not reflect future risk.</p>

<p>For private companies or companies with limited trading history, alternative methods include building up from industry risk premiums, using comparable company betas, or applying size premiums for small-cap stocks.</p>

<h2 id="cost-of-debt">The Cost of Debt Component</h2>

<p>Cost of debt is the interest rate a company pays on its borrowings. For companies with publicly traded bonds, the yield to maturity on those bonds provides a market-based estimate. For companies with only bank debt, the weighted average interest rate on existing loans serves as an approximation. The tax adjustment (multiplying by 1 - tax rate) accounts for the tax deductibility of interest expense.</p>

<p>Investment-grade companies borrow at rates close to government bond yields plus a modest spread (1-3%). High-yield companies pay significantly more (5-10% spreads), reflecting higher default risk. The cost of debt is almost always lower than the cost of equity because debt holders have priority claims on assets and cash flows, reducing their risk relative to equity holders.</p>

<h2 id="capital-structure-weights">Capital Structure Weights</h2>

<p>WACC uses market value weights, not book value weights. The market value of equity is simply the stock price multiplied by shares outstanding (market capitalization). The market value of debt is theoretically the market price of the company's bonds, though book value is used as a practical approximation when bonds don't trade actively.</p>

<p>The choice between current capital structure and target capital structure matters. If a company is temporarily overleveraged due to a recent acquisition and plans to pay down debt over three years, using the current (high-debt) weights would produce a misleadingly low WACC. Using the target capital structure — the mix management intends to maintain long-term — produces a WACC that better reflects the company's steady-state financing cost.</p>

<h2 id="common-mistakes">Common Mistakes</h2>

<p>Using book value weights instead of market value weights is the most common WACC error. For companies where market cap significantly exceeds book equity (which is true for most healthy companies), book value weights dramatically overweight debt and underweight equity, producing an artificially low WACC.</p>

<p>Applying a single WACC across geographically diverse operations ignores country risk. A company with 50% of operations in emerging markets faces higher risk — and should use a higher discount rate — than a purely domestic operator. Adjustments for country risk premiums improve accuracy for multinational companies.</p>

<p>On Brefyr, financial data from SEC filings provides the capital structure, interest expense, and profitability inputs needed for WACC estimation across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
