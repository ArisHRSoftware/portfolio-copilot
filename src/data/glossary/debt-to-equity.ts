import type { GlossaryTerm } from "../types";

export const termDebtToEquity: GlossaryTerm = {
  slug: "debt-to-equity",
  term: "Debt-to-Equity Ratio",
  title: "Debt-to-Equity Ratio — How Much of a Company's Funding Comes From Borrowing",
  shortDefinition:
    "The debt-to-equity ratio divides total liabilities by shareholders' equity, showing how aggressively a company uses debt financing relative to its own capital.",
  metaDescription:
    "What is the debt-to-equity ratio? Learn how to calculate D/E, what it means by industry, when high leverage is dangerous, and how to use it in analysis.",
  wordCount: 480,
  category: "Financial Metrics",
  tags: ["debt-to-equity", "leverage", "financial-metrics", "balance-sheet", "solvency"],
  relatedSlugs: ["roe", "interest-coverage", "current-ratio", "cost-of-debt"],
  relatedTerms: ["roe", "interest-coverage", "current-ratio", "cost-of-debt"],
  faq: [
    {
      question: "What is a good debt-to-equity ratio?",
      answer:
        "It depends on the industry. For most non-financial companies, a D/E ratio below 1.0 (meaning less debt than equity) is considered conservative. Ratios between 1.0 and 2.0 are common for capital-intensive industries like manufacturing, telecoms, and utilities. Financial institutions routinely operate at D/E ratios of 5.0-10.0 or higher because leverage is fundamental to their business model. The key is whether the company's cash flows can comfortably service the debt, not the ratio in isolation.",
    },
    {
      question: "How does debt-to-equity affect stock returns?",
      answer:
        "Moderate leverage amplifies returns for shareholders when things go well — the company earns more on borrowed capital than it pays in interest, and the excess accrues to equity holders. But leverage is a double-edged sword: in downturns, fixed interest payments consume cash regardless of business performance, magnifying losses. Highly leveraged companies experience more volatile stock prices and face greater bankruptcy risk during economic stress.",
    },
    {
      question: "Why do some companies have negative equity?",
      answer:
        "Accumulated losses, aggressive share buybacks, or large special dividends can erode equity below zero. When equity is negative, the D/E ratio becomes meaningless (division by a negative number). Companies like Starbucks and McDonald's have had negative equity not because they are financially distressed but because they returned more capital to shareholders than they retained. In these cases, other metrics like interest coverage and cash flow coverage are more informative.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The debt-to-equity ratio is the most common measure of financial leverage. It tells you how much of a company's capital structure is funded by creditors versus owners. A ratio of 1.0 means the company has equal amounts of debt and equity — for every dollar investors contributed, lenders contributed another dollar. Higher ratios indicate more aggressive use of borrowed money, which amplifies both returns and risk.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Debt-to-Equity Ratio = Total Liabilities / Shareholders' Equity</strong></p>

<p>Some versions use only interest-bearing debt (short-term and long-term borrowings) rather than total liabilities. The total-liabilities version captures all obligations including accounts payable, deferred revenue, and pension liabilities. The interest-bearing-debt version focuses specifically on financial leverage from borrowing. Both appear in SEC filings on the balance sheet.</p>

<p>A D/E ratio of 0.5 means the company has 50 cents of debt for every dollar of equity. A ratio of 2.0 means two dollars of debt for every dollar of equity — the company is funded more by lenders than by owners.</p>

<h2 id="leverage-spectrum">The Leverage Spectrum</h2>

<p>Companies fall along a spectrum from zero-leverage (fully equity-funded) to extreme leverage (almost entirely debt-funded). Where a company sits on this spectrum reflects its industry, growth stage, management philosophy, and market conditions.</p>

<p><strong>Low leverage (D/E under 0.5)</strong>: Common among cash-rich technology companies and businesses with uncertain cash flows that cannot reliably service debt. These companies prioritize financial flexibility and resilience. The trade-off is that they may leave returns on the table by not using cheap debt to fund growth.</p>

<p><strong>Moderate leverage (D/E 0.5-1.5)</strong>: The sweet spot for most industrial and consumer companies. Enough debt to benefit from the tax deductibility of interest payments and to amplify returns, but not so much that a downturn threatens solvency. Most investment-grade companies fall in this range.</p>

<p><strong>High leverage (D/E above 2.0)</strong>: Common in capital-intensive industries like utilities, telecoms, and real estate, where stable cash flows support heavy debt loads. Also characteristic of leveraged buyouts and private equity-backed companies that deliberately use debt to maximize equity returns. The risk: if cash flows decline, the company may struggle to meet fixed interest payments.</p>

<h2 id="industry-norms">Industry Norms</h2>

<p>Comparing D/E ratios across industries is pointless because industries have fundamentally different capital structures. Banks operate at D/E ratios of 8-12 because taking deposits (a form of debt) and lending them out is their core business. Utilities run at 1.0-2.5 because regulators allow them to earn regulated returns on rate base, making debt service predictable. Technology companies often run at 0.1-0.5 because their asset-light models require little external financing.</p>

<p>Within an industry, the D/E ratio reveals relative aggressiveness. If the industry median is 1.0 and a company operates at 2.5, it has taken on meaningfully more financial risk than its peers. This may be justified by stronger cash flows or a temporary acquisition-related spike, but it warrants investigation.</p>

<h2 id="leverage-and-roe">Leverage and ROE</h2>

<p>The debt-to-equity ratio has a direct mathematical relationship to return on equity through the DuPont framework. The equity multiplier (total assets divided by equity, which is 1 + D/E when using total liabilities) is one of three ROE drivers. Higher leverage increases the multiplier, which increases ROE — as long as the return on assets exceeds the after-tax cost of debt.</p>

<p>This is why investors should never evaluate ROE without also checking D/E. A company showing a 25% ROE with a D/E of 3.0 is generating those returns primarily through leverage. A company showing a 20% ROE with a D/E of 0.3 is generating returns through genuine operational excellence. The second company is far higher quality despite the lower headline ROE.</p>

<h2 id="limitations">Limitations</h2>

<p>The D/E ratio has several blind spots. Off-balance-sheet obligations like operating leases (now largely capitalized under ASC 842), purchase commitments, and guarantees can represent significant financial obligations that the basic D/E ratio misses. Pension obligations and post-retirement benefit liabilities can also create material hidden leverage.</p>

<p>The book value of equity is an accounting number that may bear little resemblance to economic reality. Companies with significant intangible assets, accumulated other comprehensive losses, or large treasury stock positions may show misleading equity figures. Market-cap-based leverage ratios (debt divided by market capitalization) provide a market perspective that complements the book-value view.</p>

<p>On Brefyr, company balance sheets from SEC filings enable leverage analysis across thousands of public companies, alongside insider trading data and AI-driven filing analysis.</p>
`,
};
