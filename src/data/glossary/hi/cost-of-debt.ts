import type { GlossaryTerm } from "../../types";

export const termCostOfDebtHi: GlossaryTerm = {
  slug: "cost-of-debt",
  term: "Cost of Debt (ऋण की लागत)",
  title: "Cost of Debt — Company Borrowing के लिए कितना Pay करती है",
  shortDefinition:
    "Cost of debt वो effective interest rate है जो company अपने borrowings पर pay करती है, typically after-tax rate में express होता है क्योंकि interest payments tax-deductible हैं।",
  metaDescription:
    "Cost of debt क्या है? Pre-tax और after-tax cost of debt calculate करना, WACC के लिए क्यों matter करता है, और borrowing costs higher या lower क्या drive करता है।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["cost-of-debt", "debt", "interest-rates", "valuation", "financial-metrics"],
  relatedSlugs: ["wacc", "cost-of-equity", "debt-to-equity", "interest-coverage"],
  relatedTerms: ["wacc", "cost-of-equity", "debt-to-equity", "interest-coverage"],
  faq: [
    {
      question: "Cost of debt कैसे calculate करें?",
      answer:
        "Pre-tax cost of debt = total interest expense / total debt outstanding। After-tax cost of debt — WACC में use होता है — pre-tax rate multiply करें (1 - tax rate) से। Company 5% interest pay करे और 25% tax rate face करे, after-tax cost of debt 5% x 0.75 = 3.75%।",
    },
    {
      question: "Cost of debt usually cost of equity से कम क्यों है?",
      answer:
        "तीन reasons: (1) Debt holders bankruptcy में priority claims रखते हैं — कम risk, कम returns। (2) Interest payments contractual obligations हैं while dividends discretionary — ज़्यादा certainty। (3) Interest expense tax-deductible है, effective cost reduce करता है। 6% pre-tax cost of debt 25% tax rate पर सिर्फ 4.5% after tax — typically 8-12% cost of equity से well below।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Cost of debt WACC का सबसे straightforward component है क्योंकि observable market data पर based है। Company जब money borrow करती है — bank loans, corporate bonds, या other instruments से — specific interest rate pay करने agree करती है। वो rate, interest deductions के tax benefit adjust करके, cost of debt है। यह minimum return represent करता है जो company debt-financed investments पर earn करे just to break even।</p>

<h2>Calculation</h2>

<p><strong>Pre-Tax Cost of Debt = Interest Expense / Average Total Debt</strong></p>
<p><strong>After-Tax Cost of Debt = Pre-Tax Cost of Debt x (1 - Tax Rate)</strong></p>

<p>Interest expense income statement से। Total debt balance sheet से — short-term borrowings, current portion of long-term debt, और long-term debt include। Tax adjustment reflect करता है कि interest payments taxable income reduce करती हैं।</p>

<h2>Credit Quality और Borrowing Costs</h2>

<p>Credit rating — S&P, Moody's, Fitch — primary determinant है borrowing cost का। Credit spread (company bond yield minus government bond yield) default risk reflect करता है।</p>

<p>Investment-grade companies (BBB-/Baa3+) tight spreads पर borrow — 0.5-2.5% above government bonds। High-yield companies (BB+/Ba1 या below) 3-8%+ spreads। Credit quality improve करना directly cost of debt reduce करता है, WACC reduce, valuation increase।</p>

<h2>Fixed vs Floating Rate Debt</h2>

<p>Fixed-rate bonds borrowing cost lock करती हैं life के लिए। Floating-rate loans market rates से adjust — reference rate plus credit spread। Interest rates rise करें, floating-rate debt companies immediately affected; fixed-rate borrowers insulated। SEC filings debt footnotes fixed/floating mix और maturity schedule disclose करती हैं।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में cost of debt typically higher है US से — RBI repo rate, India sovereign rating, और domestic credit conditions influence करती हैं। Indian companies जो US markets में borrow करती हैं (dollar-denominated bonds) lower interest rates access कर सकती हैं लेकिन currency risk face करती हैं। Reliance Industries, Tata Group, Bharti Airtel ने international bond markets use किए हैं।</p>

<p>US companies evaluate करते समय after-tax cost of debt compare करें — US corporate tax rate 21% (India 25.17% effective)। Lower US tax rate means smaller tax shield benefit comparatively। India-US interest rate differential भी currency carry trade implications रखता है।</p>

<p>Brefyr पर SEC filings से debt disclosures borrowing cost analysis enable करती हैं thousands of public companies across।</p>
`,
};
