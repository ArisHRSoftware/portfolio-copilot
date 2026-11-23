import type { GlossaryTerm } from "../types";

export const termROE: GlossaryTerm = {
  slug: "roe",
  term: "Return on Equity",
  title: "Return on Equity (ROE) — Measuring How Efficiently a Company Uses Shareholder Capital",
  shortDefinition:
    "Return on equity (ROE) measures how much net income a company generates for each dollar of shareholder equity, revealing how efficiently management deploys investor capital.",
  metaDescription:
    "What is return on equity? Learn how to calculate ROE, what good ROE looks like by industry, DuPont analysis, and when ROE misleads investors.",
  wordCount: 520,
  category: "Financial Metrics",
  tags: ["roe", "profitability", "financial-metrics", "shareholder-equity", "investing-basics"],
  relatedSlugs: ["roa", "roic", "net-margin", "debt-to-equity"],
  relatedTerms: ["roa", "roic", "net-margin", "debt-to-equity"],
  faq: [
    {
      question: "What is a good ROE?",
      answer:
        "A good ROE depends on the industry. For most sectors, an ROE above 15% is considered strong. Technology companies often exceed 20-30% because they require relatively little physical capital. Utilities and banks tend to have lower ROEs in the 8-12% range due to heavy asset bases or regulatory constraints. Always compare ROE to industry peers rather than using a single absolute threshold.",
    },
    {
      question: "Can a high ROE be misleading?",
      answer:
        "Yes. A company can artificially inflate ROE by taking on excessive debt. Debt reduces equity (the denominator), which raises ROE even if profitability hasn't improved. A company with $1 million in net income and $2 million in equity has a 50% ROE, but if that low equity is caused by massive borrowing, the business carries significant financial risk. Always pair ROE with the debt-to-equity ratio to check whether leverage is driving the number.",
    },
    {
      question: "What is DuPont analysis and how does it relate to ROE?",
      answer:
        "DuPont analysis breaks ROE into three components: net profit margin (how much profit per dollar of revenue), asset turnover (how efficiently assets generate revenue), and the equity multiplier (how much leverage the company uses). The formula is ROE = Net Margin x Asset Turnover x Equity Multiplier. This decomposition reveals whether a high ROE comes from genuine operational efficiency, strong sales productivity, or simply high leverage.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Return on equity is one of the most important profitability metrics in fundamental analysis. It answers a straightforward question: for every dollar that shareholders have invested in this company, how much profit does the business generate? A company with a 20% ROE earns $0.20 of net income for each dollar of equity on the balance sheet. The higher the ROE, the more efficiently management converts shareholder capital into profit.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>ROE = Net Income / Shareholders' Equity</strong></p>

<p>Net income comes from the income statement in the 10-K or 10-Q. Shareholders' equity comes from the balance sheet and equals total assets minus total liabilities. Some analysts use average shareholders' equity — the average of the beginning and ending equity for the period — to smooth out the effect of equity changes during the year from share issuances, buybacks, or retained earnings accumulation.</p>

<p>The result is expressed as a percentage. An ROE of 18% means the company generated 18 cents of profit for every dollar of shareholder equity.</p>

<h2 id="dupont-decomposition">DuPont Decomposition</h2>

<p>The DuPont framework breaks ROE into three drivers, each revealing a different aspect of business performance:</p>

<p><strong>ROE = Net Profit Margin x Asset Turnover x Equity Multiplier</strong></p>

<p><strong>Net Profit Margin</strong> (Net Income / Revenue) shows how much of each revenue dollar becomes profit. High margins indicate pricing power or cost discipline. A software company with 30% net margins converts far more revenue into profit than a grocery chain with 2% margins.</p>

<p><strong>Asset Turnover</strong> (Revenue / Total Assets) measures how efficiently the company uses its assets to generate sales. Retailers typically have high asset turnover — they cycle inventory quickly. Capital-intensive manufacturers have lower turnover because they hold expensive equipment. A high turnover compensates for thin margins.</p>

<p><strong>Equity Multiplier</strong> (Total Assets / Shareholders' Equity) captures financial leverage. A multiplier of 2.0 means the company has $2 of assets for every $1 of equity — the other dollar was funded by debt. Higher leverage amplifies both returns and risk.</p>

<p>This decomposition matters because two companies can have identical ROEs for completely different reasons. Company A might earn a 20% ROE through fat margins and modest leverage. Company B might earn the same 20% ROE through thin margins but aggressive borrowing. The first is a healthier business; the second is fragile under stress.</p>

<h2 id="interpreting-roe">Interpreting ROE Across Industries</h2>

<p>ROE varies dramatically by sector. Technology companies regularly post ROEs above 25% because their businesses require little physical capital — a software company's primary asset is intellectual property, which doesn't appear on the balance sheet at its true economic value. This deflates reported equity and inflates ROE.</p>

<p>Banks operate in a narrow ROE band (typically 10-15%) because regulators require them to hold minimum capital ratios, which sets a floor under equity. Utilities earn steady but modest ROEs of 8-12% because regulators cap the rates they can charge, limiting profitability in exchange for monopoly protection.</p>

<p>Cyclical industries (energy, mining, construction) show volatile ROE that swings with commodity prices and economic conditions. A mining company might post a 30% ROE at the peak of a commodity supercycle and a negative ROE two years later when prices collapse.</p>

<h2 id="pitfalls">When ROE Misleads</h2>

<p>ROE has three major blind spots. First, <strong>leverage distortion</strong>: companies can boost ROE simply by taking on more debt, which reduces equity without improving operations. Share buybacks funded by debt have the same effect — they shrink equity and inflate ROE. Second, <strong>negative equity</strong>: some companies have accumulated so many losses or executed such large buybacks that shareholders' equity turns negative, making ROE mathematically meaningless. Third, <strong>one-time items</strong>: a large asset sale or legal settlement can spike net income for a single year, producing an unsustainably high ROE.</p>

<p>For these reasons, experienced investors use ROE alongside the debt-to-equity ratio, return on invested capital (ROIC), and free cash flow metrics. ROIC is especially valuable because it includes both equity and debt capital in the denominator, neutralizing the leverage distortion that plagues ROE.</p>

<p>On Brefyr, company pages display profitability data sourced from SEC filings for thousands of public companies, allowing you to compare ROE across peers and track the metric over time alongside filing history and insider trading activity.</p>
`,
};
