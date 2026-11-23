import type { GlossaryTerm } from "../../types";

export const termCostOfEquityHi: GlossaryTerm = {
  slug: "cost-of-equity",
  term: "Cost of Equity (इक्विटी की लागत)",
  title: "Cost of Equity — Shareholders Risk Bear करने के लिए कितना Return Demand करते हैं",
  shortDefinition:
    "Cost of equity वो return है जो shareholders company के stock में invest करने के लिए require करते हैं, company के assets और cash flows पर residual claimants के रूप में bear किया risk reflect करता है।",
  metaDescription:
    "Cost of equity क्या है? CAPM कैसे calculate करता है, number higher या lower क्या drive करता है, और WACC और company valuation के लिए क्यों matter करता है।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["cost-of-equity", "capm", "risk", "valuation", "financial-metrics"],
  relatedSlugs: ["wacc", "cost-of-debt", "beta", "dcf"],
  relatedTerms: ["wacc", "cost-of-debt", "beta", "dcf"],
  faq: [
    {
      question: "CAPM से cost of equity कैसे calculate करें?",
      answer:
        "CAPM formula: Cost of Equity = Risk-Free Rate + Beta x Equity Risk Premium। Risk-free rate typically 10-year government bond yield (3-5%)। Beta stock की market sensitivity (1.0 average)। Equity risk premium stocks over bonds extra return (historically 4-7%)। Beta 1.2, risk-free rate 4%, ERP 5.5% stock: 4% + 1.2 x 5.5% = 10.6%।",
    },
    {
      question: "Cost of equity cost of debt से higher क्यों है?",
      answer:
        "Equity holders ज़्यादा risk bear करते हैं। Bankruptcy में debt holders पहले repay होते हैं; equity holders जो बचे वो receive करते हैं (often nothing)। Dividends discretionary while interest contractual। Higher risk means equity investors higher returns demand करते हैं। Interest tax-deductible while dividends नहीं, after-tax cost of debt और lower।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Cost of equity invisible लेकिन essential number है। Debt के उलट, जो contractual interest rate carry करती है, equity का explicit price tag नहीं। लेकिन shareholders expectations रखते हैं — अगर expectations meet नहीं होतीं, वो stock sell करते हैं, price drop होता है। Cost of equity उन expectations quantify करता है।</p>

<h2>Capital Asset Pricing Model (CAPM)</h2>

<p><strong>Cost of Equity (Re) = Rf + Beta x (Rm - Rf)</strong></p>

<p><strong>Risk-free rate (Rf):</strong> Zero risk पर earn — typically 10-year government bond yield। Risk-free rates low हों (2020-2021) तो सब companies का cost of equity lower। Rates rise (2022-2023) तो cost of equity rise, stock prices justify lower।</p>

<p><strong>Beta:</strong> Stock overall market relative कितना move करता है। 1.0 market lockstep। Utilities 0.5-0.7; volatile tech 1.2-1.8।</p>

<p><strong>Equity risk premium (Rm - Rf):</strong> Stocks over bonds extra return demand। Historical estimates 4-7%। Finance का most debated input।</p>

<h2>CAPM से Beyond</h2>

<p><strong>Fama-French three-factor model:</strong> Size premium (small-caps outperform) और value premium (high book-to-market outperform) add करता है CAPM में।</p>

<p><strong>Dividend discount model:</strong> Re = (D1 / P0) + g — observable market data से। सिर्फ dividend-paying companies के लिए works।</p>

<p><strong>Build-up method:</strong> Private companies के लिए — risk-free rate + equity premium + size premium + company-specific risk premium।</p>

<h2>Valuation पर Practical Impact</h2>

<p>Cost of equity directly company valuation affect करता है WACC role से। One-percentage-point increase — 10% से 11% — DCF valuation 10-15% reduce कर सकता है। Growth stocks ज़्यादा sensitive interest rate changes के — distant future cash flows most heavily discounted।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में cost of equity typically higher है US से क्योंकि: higher risk-free rate (India 10-year bond ~7% vs US ~4%), higher country risk premium, और higher equity risk premium। Indian equity market ERP approximately 6-8% estimated है vs US 4-6%। इसका मतलब Indian companies higher return hurdle face करती हैं।</p>

<p>US stocks evaluate करते समय lower cost of equity (lower WACC) मतलब higher DCF valuations justify होती हैं — यह partially explain करता है US stocks Indian stocks से higher PE multiples क्यों trade करती हैं। Same company India में listed होने पर lower valuation justified हो सकती है higher discount rate के कारण।</p>

<p>Brefyr पर SEC filings से financial data risk और valuation assess करने के inputs provide करता है।</p>
`,
};
