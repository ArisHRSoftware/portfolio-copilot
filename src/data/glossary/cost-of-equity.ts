import type { GlossaryTerm } from "../types";

export const termCostOfEquity: GlossaryTerm = {
  slug: "cost-of-equity",
  term: "Cost of Equity",
  title: "Cost of Equity — The Return Shareholders Demand for Bearing Risk",
  shortDefinition:
    "Cost of equity is the return that shareholders require for investing in a company's stock, reflecting the risk they bear as residual claimants on the company's assets and cash flows.",
  metaDescription:
    "What is cost of equity? Learn how CAPM calculates it, what drives the number higher or lower, and why it matters for WACC and company valuation.",
  wordCount: 440,
  category: "Financial Metrics",
  tags: ["cost-of-equity", "capm", "risk", "valuation", "financial-metrics"],
  relatedSlugs: ["wacc", "cost-of-debt", "beta", "dcf"],
  relatedTerms: ["wacc", "cost-of-debt", "beta", "dcf"],
  faq: [
    {
      question: "How is cost of equity calculated using CAPM?",
      answer:
        "CAPM formula: Cost of Equity = Risk-Free Rate + Beta x Equity Risk Premium. The risk-free rate is typically the 10-year government bond yield (around 3-5% in most periods). Beta measures the stock's sensitivity to overall market movements (1.0 is average market risk). The equity risk premium is the extra return investors demand for stocks over bonds (historically 4-7%). A stock with beta 1.2, risk-free rate 4%, and ERP 5.5% has a cost of equity of 4% + 1.2 x 5.5% = 10.6%.",
    },
    {
      question: "Why is cost of equity higher than cost of debt?",
      answer:
        "Equity holders bear more risk than debt holders. In bankruptcy, debt holders are repaid first from asset liquidation; equity holders receive whatever remains (often nothing). Dividends are discretionary while interest payments are contractual obligations. This higher risk means equity investors demand higher returns. Additionally, interest on debt is tax-deductible while dividends are not, making the after-tax cost of debt even lower relative to equity.",
    },
    {
      question: "What are alternatives to CAPM for estimating cost of equity?",
      answer:
        "Alternatives include the dividend discount model approach (cost of equity = dividend yield + expected dividend growth rate), the Fama-French three-factor model (adds size and value factors to CAPM), the build-up method (risk-free rate + equity premium + size premium + company-specific risk premium), and implied cost of equity from the current stock price and analyst earnings estimates. Each method has strengths and weaknesses. Using multiple methods and averaging the results reduces reliance on any single model's assumptions.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Cost of equity is an invisible but essential number. Unlike debt, which carries a contractual interest rate, equity has no explicit price tag. Shareholders don't send invoices. But they do have expectations — if those expectations aren't met over time, they sell the stock, the price drops, and the company's ability to raise future capital erodes. The cost of equity quantifies those expectations: the return shareholders require to keep their capital invested in this particular company rather than investing it elsewhere.</p>

<h2 id="capm">The Capital Asset Pricing Model (CAPM)</h2>

<p><strong>Cost of Equity (Re) = Rf + Beta x (Rm - Rf)</strong></p>

<p>CAPM is the standard model taught in every finance program and used by most practitioners. It's built on a simple insight: investors should be compensated for two things — the time value of money (the risk-free rate) and the systematic risk they bear by investing in stocks rather than government bonds (beta times the equity risk premium).</p>

<p><strong>The risk-free rate (Rf)</strong> represents what investors can earn with zero risk — typically the yield on a 10-year government bond. This sets the floor for all other expected returns. When risk-free rates are low (as in 2020-2021), cost of equity is lower across all companies. When rates rise (as in 2022-2023), cost of equity rises too, reducing the present value of future cash flows and justifying lower stock prices.</p>

<p><strong>Beta</strong> measures how much a stock's price moves relative to the overall market. A beta of 1.0 means the stock moves in lockstep with the market. A beta of 1.5 means the stock is 50% more volatile than the market — it goes up more in bull markets and down more in bear markets. Conservative utilities might have betas of 0.5-0.7; volatile technology stocks might have betas of 1.2-1.8.</p>

<p><strong>The equity risk premium (Rm - Rf)</strong> is the extra return investors expect from stocks above the risk-free rate. Historical estimates range from 4-7% depending on the time period analyzed and the methodology used. The equity risk premium is the most debated input in all of finance — small changes in this assumption ripple through every valuation that uses CAPM.</p>

<h2 id="alternative-models">Beyond CAPM</h2>

<p>CAPM has well-known limitations. It assumes beta captures all relevant risk, which empirical research has shown is incomplete. The <strong>Fama-French three-factor model</strong> adds two additional risk factors: a size premium (small-cap stocks outperform large-caps historically) and a value premium (high book-to-market stocks outperform growth stocks). These additions improve explanatory power but add complexity and require additional data inputs.</p>

<p>The <strong>dividend discount model (DDM)</strong> approach estimates cost of equity from observable market data: Re = (D1 / P0) + g, where D1 is next year's expected dividend, P0 is the current stock price, and g is the expected long-term dividend growth rate. This model is intuitive and grounded in market prices but only works for companies that pay dividends and have predictable growth rates.</p>

<p>The <strong>build-up method</strong> is used for private companies or small-caps where beta estimation is unreliable. It starts with the risk-free rate and adds premiums for equity market risk, size risk, industry risk, and company-specific risk. While more subjective than CAPM, it explicitly accounts for risk factors that CAPM subsumes into a single beta coefficient.</p>

<h2 id="practical-impact">Practical Impact on Valuation</h2>

<p>Cost of equity directly affects company valuation through its role in WACC. A one-percentage-point increase in cost of equity — from 10% to 11% — can reduce a DCF valuation by 10-15% because all future cash flows are discounted more heavily. This sensitivity means that interest rate changes, shifts in market risk premiums, and changes in a company's risk profile can materially impact intrinsic value estimates even when the underlying business hasn't changed.</p>

<p>This is one reason growth stocks are more sensitive to interest rate changes than value stocks. Growth stocks derive most of their value from cash flows far in the future, which are discounted most heavily. When cost of equity rises, those distant cash flows lose more present value, compressing the stock's worth disproportionately.</p>

<p>On Brefyr, financial data from SEC filings provides the fundamental inputs needed to assess risk and valuation across thousands of public companies alongside insider trading and filing analysis.</p>
`,
};
