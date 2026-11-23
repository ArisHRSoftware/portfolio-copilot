import type { GlossaryTerm } from "../types";

export const termInterestCoverage: GlossaryTerm = {
  slug: "interest-coverage",
  term: "Interest Coverage Ratio",
  title: "Interest Coverage Ratio — Can This Company Afford Its Debt Payments?",
  shortDefinition:
    "The interest coverage ratio divides operating income (EBIT) by interest expense, measuring how many times over a company can pay its debt interest from operating profits.",
  metaDescription:
    "What is the interest coverage ratio? Learn how to calculate it, what ratio signals financial distress, and how lenders use it in credit analysis.",
  wordCount: 440,
  category: "Financial Metrics",
  tags: ["interest-coverage", "leverage", "debt", "financial-metrics", "credit-analysis"],
  relatedSlugs: ["debt-to-equity", "cost-of-debt", "operating-margin", "current-ratio"],
  relatedTerms: ["debt-to-equity", "cost-of-debt", "operating-margin", "current-ratio"],
  faq: [
    {
      question: "What is a good interest coverage ratio?",
      answer:
        "An interest coverage ratio above 3.0 is generally considered healthy — the company earns three times its interest obligations. Above 5.0 indicates very comfortable coverage. Below 1.5 is concerning because a modest earnings decline could make interest payments unaffordable. Below 1.0 means the company is not earning enough to cover interest, which is a severe distress signal. Credit rating agencies use interest coverage as a key factor in determining creditworthiness.",
    },
    {
      question: "How do credit rating agencies use interest coverage?",
      answer:
        "Credit agencies like S&P, Moody's, and Fitch consider interest coverage a primary indicator of creditworthiness. Investment-grade companies (BBB-/Baa3 and above) typically maintain interest coverage ratios above 3.0-4.0. High-yield (junk bond) companies may operate at 1.5-3.0. Each agency has its own thresholds and considers interest coverage alongside other metrics like debt-to-EBITDA and free cash flow coverage. Deteriorating interest coverage is one of the most common triggers for rating downgrades.",
    },
    {
      question: "What is the EBITDA coverage ratio and how does it differ?",
      answer:
        "The EBITDA coverage ratio uses EBITDA instead of EBIT: EBITDA / Interest Expense. Because EBITDA adds back depreciation and amortization (non-cash charges), it's higher than EBIT and produces a more generous coverage ratio. EBITDA coverage better approximates cash-based debt service capacity because D&A doesn't require cash payments. However, it ignores the fact that capital expenditures (which partly replace depreciated assets) do require cash, so it may overstate true coverage for capital-intensive businesses.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The interest coverage ratio is the most direct measure of a company's ability to service its debt. Debt creates fixed obligations — interest must be paid regardless of business performance. If operating profits decline to the point where they can't cover interest payments, the company faces potential default, restructuring, or bankruptcy. The interest coverage ratio quantifies how much room exists between current earnings and that danger zone.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Interest Coverage Ratio = EBIT / Interest Expense</strong></p>

<p>EBIT (earnings before interest and taxes), also called operating income, comes from the income statement. Interest expense is also on the income statement, typically as a separate line item. Some analysts use EBITDA in the numerator for a cash-flow-approximation version of the ratio.</p>

<p>A ratio of 5.0 means operating profits cover interest payments five times over. Even if earnings dropped 80%, the company could still meet its interest obligations. A ratio of 1.2 means earnings barely exceed interest — a 20% earnings decline would push the company into distress.</p>

<h2 id="debt-capacity">Debt Capacity Assessment</h2>

<p>Interest coverage is the primary metric lenders and bond investors use to assess whether a company can safely take on additional debt. Banks set minimum interest coverage covenants in loan agreements — typically requiring ratios of 2.0-4.0 depending on industry and risk profile. If the company's ratio falls below the covenant threshold, it triggers technical default, which gives lenders the right to accelerate repayment or renegotiate terms.</p>

<p>The fixed charge coverage ratio extends this concept beyond just interest to include all mandatory payments: interest, principal repayments, lease payments, and preferred dividends. This broader metric captures the total burden of fixed financial commitments and is often required in private loan covenants.</p>

<h2 id="cyclical-stress">Cyclical Stress Testing</h2>

<p>The interest coverage ratio's value becomes most apparent during economic downturns. When revenue declines, operating income falls disproportionately due to operating leverage (fixed costs that don't decrease with revenue). Interest payments, however, remain constant — they're fixed by the terms of the debt agreement. This creates a scissors effect that rapidly compresses interest coverage during recessions.</p>

<p>Smart credit analysis doesn't just look at current interest coverage — it stress-tests the ratio under recessionary conditions. If a company's EBIT has historically declined 30% during recessions, what would its interest coverage look like in that scenario? A company with 6.0x coverage today that drops to 4.2x in a recession is comfortably safe. A company with 2.5x coverage that drops to 1.75x is living dangerously.</p>

<p>The 2008-2009 financial crisis demonstrated this principle dramatically. Companies that entered the crisis with 2.0-3.0x coverage frequently found themselves unable to service debt as EBIT collapsed. Companies with 5.0x+ coverage weathered the same storm without debt concerns. The margin of safety in interest coverage directly correlates with survival probability during severe downturns.</p>

<h2 id="industry-context">Industry Context</h2>

<p>Interest coverage norms vary by industry based on earnings stability. Utilities, with regulated revenues and highly predictable earnings, can safely operate at 2.0-3.0x coverage because their EBIT rarely fluctuates dramatically. Technology companies, with volatile earnings driven by product cycles and competitive dynamics, should maintain 5.0x+ coverage to absorb earnings swings. Cyclical industries — energy, mining, industrials — need even higher coverage ratios because their peak earnings may be several multiples of their trough earnings.</p>

<p>REITs and MLPs present a special case because their structures involve heavy debt loads as an integral part of the business model. These entities should be evaluated using both interest coverage and debt service coverage (which includes principal repayments) in the context of their contractual cash flows, not compared to typical corporate benchmarks.</p>

<p>On Brefyr, income statement data from SEC filings enables interest coverage analysis across thousands of public companies, alongside leverage metrics, insider trading signals, and filing history.</p>
`,
};
