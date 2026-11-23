import type { GlossaryTerm } from "../types";

export const termNetMargin: GlossaryTerm = {
  slug: "net-margin",
  term: "Net Profit Margin",
  title: "Net Profit Margin — The Bottom Line of Profitability",
  shortDefinition:
    "Net profit margin is the percentage of revenue remaining after all expenses — cost of goods sold, operating expenses, interest, and taxes — have been deducted, representing the company's true bottom-line profitability.",
  metaDescription:
    "What is net profit margin? Learn how to calculate it, compare net vs gross vs operating margins, and understand what drives bottom-line profitability.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["net-margin", "profitability", "income-statement", "financial-metrics", "bottom-line"],
  relatedSlugs: ["gross-margin", "operating-margin", "eps", "roe"],
  relatedTerms: ["gross-margin", "operating-margin", "eps", "roe"],
  faq: [
    {
      question: "What is a good net profit margin?",
      answer:
        "Net profit margins vary enormously by industry. Software and technology companies often achieve 20-35% net margins. Financial services range from 15-30%. Healthcare and pharmaceuticals average 10-20%. Retail and food service typically operate at 2-8%. The industry average is what matters — a 5% net margin is excellent for a grocery chain but mediocre for a software company. The S&P 500 average net margin has historically been around 8-10%.",
    },
    {
      question: "Why is net margin lower than operating margin?",
      answer:
        "Net margin includes two additional expense categories that operating margin excludes: interest expense (the cost of debt financing) and income taxes. A company with a 20% operating margin might show only a 13% net margin after paying 4% of revenue in interest and 3% in taxes. For companies with little debt and favorable tax treatment, the gap between operating and net margins is small. For heavily leveraged companies in high-tax jurisdictions, the gap can be substantial.",
    },
    {
      question: "Can a company have positive revenue but negative net margin?",
      answer:
        "Yes, this is extremely common. Any company whose total expenses exceed total revenue has a negative net margin — it is operating at a loss. Early-stage companies investing heavily in growth, cyclical businesses at the bottom of their cycle, and companies undergoing restructuring often report negative net margins for extended periods. Amazon was famously unprofitable for years while investing in growth, reporting negative net margins that have since turned strongly positive.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Net profit margin is the ultimate measure of a company's profitability. It captures everything — the cost of making products, running operations, paying interest on debt, and paying taxes — and tells you what percentage of revenue actually becomes profit for shareholders. A 15% net margin means that after every expense is paid, the company keeps 15 cents of each revenue dollar. Those retained earnings can be reinvested in the business, paid as dividends, or used for share buybacks.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Net Profit Margin = Net Income / Revenue x 100</strong></p>

<p>Net income is the bottom line of the income statement — the final number after all revenues, costs, expenses, interest, taxes, and other items have been accounted for. Revenue is the top line. Both appear in the 10-K and 10-Q filings.</p>

<p>Some analysts prefer to use net income attributable to common shareholders, which excludes preferred dividends and minority interests. For companies with simple capital structures, the difference is negligible. For companies with preferred stock or significant minority interests in subsidiaries, the distinction matters.</p>

<h2 id="margin-waterfall">The Margin Waterfall</h2>

<p>Understanding net margin requires seeing how it relates to the other margin metrics. The income statement flows from top to bottom, and each margin captures a different layer of costs.</p>

<p><strong>Revenue</strong> (100%) minus COGS gives <strong>gross profit</strong> (gross margin). Subtract operating expenses to get <strong>operating income</strong> (operating margin). Subtract interest expense and add other income to get <strong>pre-tax income</strong>. Subtract taxes to get <strong>net income</strong> (net margin).</p>

<p>Each step down the waterfall represents a different category of cost. Gross margin reflects production efficiency. Operating margin reflects business management. Net margin adds the impact of financial structure and tax strategy. A company can have healthy gross and operating margins but weak net margins if it carries too much debt (high interest expense) or faces unfavorable tax treatment.</p>

<h2 id="leverage-effect">The Leverage Effect on Net Margin</h2>

<p>Net margin is the most leverage-sensitive of the three margin metrics because interest expense sits between operating income and net income. Consider two identical companies with $100 million in revenue and $20 million in operating income (20% operating margin). Company A has no debt and pays $4 million in taxes — net margin of 16%. Company B has $50 million in debt at 8% interest, paying $4 million in interest plus $3.2 million in taxes — net margin of 12.8%.</p>

<p>The businesses are operationally identical, but their net margins differ by over 3 percentage points purely due to capital structure. This is why operating margin is preferred for comparing companies with different leverage, while net margin is better for assessing the absolute profitability available to equity shareholders.</p>

<h2 id="quality-of-earnings">Quality of Earnings</h2>

<p>Not all net income is created equal. The quality of a company's net margin depends on what drives it. Sustainable net margin comes from core operations — recurring revenue, controlled costs, and efficient tax planning. Low-quality net margin includes one-time gains (selling a building, winning a lawsuit, benefiting from a tax law change) that inflate the number temporarily.</p>

<p>Check the income statement for unusual items that boost or depress net income. Gains on asset sales, favorable lawsuit settlements, and insurance recoveries inflate net margin in a way that won't recur. Restructuring charges, write-downs, and legal settlements depress it temporarily. Adjusting for these items reveals the sustainable run-rate net margin that investors should use for valuation.</p>

<h2 id="trend-and-comparison">Trend Analysis</h2>

<p>Net margin trends over five to ten years reveal a company's long-term earnings trajectory. A steadily improving net margin — from 8% to 12% to 15% over a decade — signals a business that is gaining scale advantages, improving operational efficiency, or strengthening pricing power. A declining trend raises questions about competitive erosion, cost inflation, or margin-dilutive growth strategies.</p>

<p>Compare net margin trends between competitors in the same industry to identify which company is gaining or losing competitive advantage. If Company A's net margin is rising from 12% to 18% while competitor Company B's margin is falling from 15% to 10%, Company A is likely taking market share or operating more efficiently — or both.</p>

<p>On Brefyr, income statement data sourced from SEC filings allows you to track profitability margins across thousands of companies, with comparisons alongside insider trading data and AI-generated filing analysis.</p>
`,
};
