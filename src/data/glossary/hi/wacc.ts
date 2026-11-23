import type { GlossaryTerm } from "../../types";

export const termWACCHi: GlossaryTerm = {
  slug: "wacc",
  term: "WACC (वैक / Weighted Average Cost of Capital)",
  title: "WACC — हर DCF Valuation Drive करने वाला Discount Rate",
  shortDefinition:
    "Weighted average cost of capital (WACC) company की cost of equity और after-tax cost of debt blend करता है, capital structure में proportions से weight करके, DCF valuations में discount rate produce करने के लिए।",
  metaDescription:
    "WACC क्या है? Calculate कैसे करें, valuation के लिए क्यों matter करता है, हर component क्या drive करता है, और WACC estimation में common mistakes।",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["wacc", "cost-of-capital", "valuation", "dcf", "financial-metrics"],
  relatedSlugs: ["cost-of-equity", "cost-of-debt", "dcf", "roic"],
  relatedTerms: ["cost-of-equity", "cost-of-debt", "dcf", "roic"],
  faq: [
    {
      question: "DCF models में WACC discount rate क्यों use होता है?",
      answer:
        "WACC minimum return represent करता है जो company investments पर earn करे सभी capital providers satisfy करने — equity holders और debt holders दोनों। DCF free cash flow सभी capital providers के लिए available — blended cost rate से discount। Company exactly WACC earn करे: equity holders required return मिले, debt holders interest। WACC से ऊपर return: value create। नीचे: value destroy।",
    },
    {
      question: "Public company typical WACC?",
      answer:
        "Large stable companies developed markets: typically 7-10%। Investment-grade significant low-cost debt: 6-7% low possible। Smaller higher-risk/emerging markets: 10-15%+। Technology companies (no debt, high equity risk premium): 9-12%। Specific WACC capital structure, business risk, market conditions depend।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>WACC हर DCF valuation के heart में discount rate है। Blended return represent करता है जो company invested capital पर generate करे shareholders और lenders दोनों satisfied रहें। <strong>Too high WACC future cash flows present value shrink — company cheap दिखती। Too low inflate artificially।</strong> WACC right करना meaningful intrinsic value estimate essential।</p>

<h2>Calculation</h2>

<p><strong>WACC = (E/V × Re) + (D/V × Rd × (1 - Tc))</strong></p>

<p><strong>E</strong> = market value of equity, <strong>D</strong> = market value of debt, <strong>V</strong> = E + D, <strong>Re</strong> = cost of equity, <strong>Rd</strong> = cost of debt, <strong>Tc</strong> = corporate tax rate।</p>

<p>Formula हर capital component proportion से weight। Debt tax benefit — interest payments tax-deductible — (1 - Tc) term capture। इसलिए debt financing after-tax basis equity से cheaper।</p>

<h2>Cost of Equity Component</h2>

<p>Shareholders required return। Standard approach CAPM: <strong>Re = Rf + Beta × (Rm - Rf)</strong>। Rf risk-free rate (10-year government bond yield), Beta market sensitivity, (Rm - Rf) equity risk premium (4-7% depending methodology)।</p>

<p>हर CAPM input judgment involve। Historical beta future risk reflect नहीं necessarily। Private companies: industry risk premiums, comparable betas, size premiums।</p>

<h2>Cost of Debt Component</h2>

<p>Company borrowings interest rate। Publicly traded bonds: yield to maturity market-based estimate। Bank debt: weighted average interest rate approximation। Tax adjustment (1 - tax rate): interest expense tax deductibility account।</p>

<p>Investment-grade: government bonds plus 1-3% spread। High-yield: 5-10% spreads higher default risk। Cost of debt almost always cost of equity से lower — priority claims।</p>

<h2>Common Mistakes</h2>

<p>Book value weights market value weights बजाय use — सबसे common error। Market cap significantly book equity exceed (most healthy companies): book value weights debt overweight, equity underweight, artificially low WACC।</p>

<p>Single WACC geographically diverse operations — country risk ignore। Emerging markets operations higher risk — country risk premiums adjust।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में WACC calculate करना: higher risk-free rate (Indian government bonds), country risk premium add, different tax rates। US companies valuation: US rates use। Brefyr SEC filings financial data — capital structure, interest expense, profitability inputs WACC estimation।</p>
`,
};
