import type { GlossaryTerm } from "../types";

export const termCostOfDebt: GlossaryTerm = {
  slug: "cost-of-debt",
  term: "Cost of Debt",
  title: "Cost of Debt — What a Company Pays to Borrow Money",
  shortDefinition:
    "Cost of debt is the effective interest rate a company pays on its borrowings, typically expressed as an after-tax rate because interest payments are tax-deductible.",
  metaDescription:
    "What is cost of debt? Learn how to calculate pre-tax and after-tax cost of debt, why it matters for WACC, and what drives borrowing costs higher or lower.",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["cost-of-debt", "debt", "interest-rates", "valuation", "financial-metrics"],
  relatedSlugs: ["wacc", "cost-of-equity", "debt-to-equity", "interest-coverage"],
  relatedTerms: ["wacc", "cost-of-equity", "debt-to-equity", "interest-coverage"],
  faq: [
    {
      question: "How do you calculate cost of debt?",
      answer:
        "Pre-tax cost of debt can be calculated as total interest expense divided by total debt outstanding. For companies with publicly traded bonds, the yield to maturity on those bonds provides a more market-based estimate. The after-tax cost of debt — used in WACC — multiplies the pre-tax rate by (1 - tax rate). If a company pays 5% interest and faces a 25% tax rate, its after-tax cost of debt is 5% x (1 - 0.25) = 3.75%.",
    },
    {
      question: "Why is cost of debt usually lower than cost of equity?",
      answer:
        "Three reasons: (1) Debt holders have priority claims on assets in bankruptcy, so they face less risk and accept lower returns. (2) Interest payments are contractual obligations while dividends are discretionary, giving debt holders more certainty. (3) Interest expense is tax-deductible, reducing the effective cost to the company. A 6% pre-tax cost of debt at a 25% tax rate is only 4.5% after tax — typically well below the 8-12% cost of equity for the same company.",
    },
    {
      question: "What factors determine a company's cost of debt?",
      answer:
        "The main factors are: prevailing interest rates (the base rate set by the central bank and reflected in government bond yields), credit quality (measured by credit ratings — investment grade companies borrow cheaply while junk-rated companies pay steep premiums), debt maturity (longer-term debt usually costs more), debt seniority (secured debt is cheaper than unsecured), and overall market conditions (credit spreads widen during economic stress).",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Cost of debt is the most straightforward component of WACC because it's based on observable market data rather than theoretical models. When a company borrows money — through bank loans, corporate bonds, or other instruments — it agrees to pay a specific interest rate. That rate, adjusted for the tax benefit of interest deductions, is the cost of debt. It represents the minimum return the company must earn on debt-financed investments just to break even on the borrowing.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Pre-Tax Cost of Debt = Interest Expense / Average Total Debt</strong></p>

<p><strong>After-Tax Cost of Debt = Pre-Tax Cost of Debt x (1 - Tax Rate)</strong></p>

<p>Interest expense comes from the income statement. Total debt includes short-term borrowings, current portion of long-term debt, and long-term debt — all from the balance sheet. The tax adjustment reflects that interest payments reduce taxable income, effectively sharing the cost of debt with the tax authority.</p>

<p>For companies with traded bonds, the yield to maturity (YTM) on those bonds is a superior estimate because it reflects current market conditions and the market's assessment of the company's credit risk, rather than historical coupon rates that may not represent today's borrowing cost.</p>

<h2 id="credit-quality">Credit Quality and Borrowing Costs</h2>

<p>A company's credit quality — summarized by its credit rating from agencies like S&P, Moody's, and Fitch — is the primary determinant of its borrowing cost relative to the risk-free rate. The difference between a company's bond yield and the government bond yield of similar maturity is called the credit spread, and it reflects the market's assessment of default risk.</p>

<p>Investment-grade companies (rated BBB-/Baa3 or higher) borrow at tight spreads — typically 0.5-2.5% above government bonds. These companies have strong cash flows, manageable leverage, and low default risk. High-yield companies (rated BB+/Ba1 or below) pay wider spreads of 3-8% or more, reflecting higher default probability. At the extreme, distressed companies may face borrowing costs of 15-20% or more, if they can access credit markets at all.</p>

<p>The practical implication: improving credit quality directly reduces cost of debt, which reduces WACC and increases company valuation. A company that deleverages from BB to BBB might see its borrowing cost drop by 2-3 percentage points — a meaningful reduction that flows through to lower WACC and higher intrinsic value estimates.</p>

<h2 id="fixed-vs-floating">Fixed vs Floating Rate Debt</h2>

<p>Companies borrow at either fixed or floating rates, and the mix affects how cost of debt changes over time. Fixed-rate bonds lock in a borrowing cost for the life of the bond — the company knows exactly what it will pay regardless of interest rate movements. Floating-rate loans (typically bank credit facilities) adjust with market rates, usually benchmarked to a reference rate plus a credit spread.</p>

<p>When interest rates rise, companies with floating-rate debt see their cost of debt increase immediately, while fixed-rate borrowers are insulated until their bonds mature and must be refinanced. When rates fall, the reverse applies. The debt footnotes in SEC filings disclose the mix of fixed and floating rate debt and the maturity schedule, allowing investors to assess how sensitive a company's cost of debt is to interest rate changes.</p>

<h2 id="tax-shield">The Tax Shield Value</h2>

<p>The tax deductibility of interest creates a "tax shield" — a real economic benefit of debt financing that equity financing doesn't provide. For a company in a 25% tax bracket, every dollar of interest expense saves 25 cents in taxes. This tax shield is why the after-tax cost of debt is significantly lower than the pre-tax cost and why the optimal capital structure includes some debt.</p>

<p>However, the tax shield has limits. As debt increases, the probability of financial distress rises. At some point, the costs of potential bankruptcy — legal fees, lost customers, supplier reluctance, management distraction — exceed the tax benefits of additional debt. The optimal capital structure balances the tax shield benefit against financial distress costs.</p>

<p>On Brefyr, debt disclosures from SEC filings enable borrowing cost analysis across thousands of public companies alongside insider trading and filing history.</p>
`,
};
