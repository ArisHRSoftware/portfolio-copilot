import type { GlossaryTerm } from "../types";

export const termGrossMargin: GlossaryTerm = {
  slug: "gross-margin",
  term: "Gross Margin",
  title: "Gross Margin — How Much Profit a Company Keeps After Direct Costs",
  shortDefinition:
    "Gross margin is the percentage of revenue remaining after subtracting the cost of goods sold (COGS), showing how much profit a company makes on its products before operating expenses.",
  metaDescription:
    "What is gross margin? Learn how to calculate gross profit margin, what it reveals about pricing power, and why it varies dramatically by industry.",
  wordCount: 460,
  category: "Financial Metrics",
  tags: ["gross-margin", "profitability", "income-statement", "financial-metrics", "pricing-power"],
  relatedSlugs: ["operating-margin", "net-margin", "eps", "economic-moat"],
  relatedTerms: ["operating-margin", "net-margin", "eps", "economic-moat"],
  faq: [
    {
      question: "What is a good gross margin?",
      answer:
        "Gross margin varies enormously by industry. Software companies routinely achieve 70-90% gross margins because the cost of delivering an additional software license is near zero. Retailers operate on 25-40% margins. Grocery stores run on razor-thin 20-25% margins. Manufacturing sits at 30-50% depending on the product. What matters most is whether a company's gross margin is improving, stable, or declining — and how it compares to direct competitors in the same industry.",
    },
    {
      question: "What is the difference between gross margin and gross profit?",
      answer:
        "Gross profit is a dollar amount: revenue minus cost of goods sold. Gross margin is a percentage: gross profit divided by revenue. A company with $10 million in revenue and $6 million in COGS has $4 million in gross profit and a 40% gross margin. Both are useful — gross profit shows the absolute dollars available to cover operating expenses, while gross margin enables comparison across companies of different sizes.",
    },
    {
      question: "What causes gross margin to decline?",
      answer:
        "Common causes include rising input costs (raw materials, labor, shipping) that the company cannot pass to customers through price increases, competitive pressure forcing price reductions, a shift toward lower-margin product lines, production inefficiencies, or selling excess inventory at discounts. A declining gross margin that persists over multiple quarters is a serious warning sign because it erodes the foundation from which all other expenses must be paid.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Gross margin is the first profitability checkpoint on the income statement. It reveals how much money a company retains from each dollar of revenue after paying the direct costs of producing its products or delivering its services. A 60% gross margin means the company keeps 60 cents of every revenue dollar after covering production costs — those 60 cents must then cover salaries, rent, marketing, research, interest, taxes, and hopefully leave a profit. If gross margin is weak, everything downstream suffers.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Gross Margin = (Revenue - Cost of Goods Sold) / Revenue x 100</strong></p>

<p>Revenue (also called net sales) and COGS appear on the income statement in the 10-K and 10-Q. COGS includes the direct costs of producing goods or delivering services: raw materials, manufacturing labor, factory overhead, and shipping costs to the point of sale. It does not include selling expenses, administrative costs, research and development, or interest — those appear further down the income statement.</p>

<p>The boundary between COGS and operating expenses involves some judgment. Companies in the same industry may classify similar costs differently, which affects gross margin comparability. When comparing companies, check the notes to financial statements for the COGS accounting policy.</p>

<h2 id="pricing-power">Gross Margin as a Pricing Power Indicator</h2>

<p>Gross margin is the clearest signal of pricing power in a company's financial statements. A business that can charge significantly more than its production costs has the ability to raise prices, absorb cost increases, and invest in growth — all while maintaining healthy margins. This pricing power usually stems from brand strength, proprietary technology, regulatory barriers, or network effects.</p>

<p>Luxury goods companies exemplify extreme pricing power. The raw materials in a designer handbag might cost $50, but the finished product sells for $2,000 — a gross margin above 95%. Commodity producers sit at the opposite extreme. A copper miner's revenue is dictated by global commodity prices, and production costs are largely fixed by geology. Margins compress when copper prices fall and expand when they rise, with little the company can do to influence either side of the equation.</p>

<h2 id="software-advantage">The Software Gross Margin Advantage</h2>

<p>Software businesses achieve the highest gross margins of any industry because the marginal cost of distributing an additional copy of software is essentially zero. Once the development costs are incurred (which are classified as operating expenses, not COGS), each incremental subscription or license generates almost pure gross profit. Cloud-based SaaS companies typically show 70-85% gross margins; on-premise software can exceed 90%.</p>

<p>This structural advantage explains why software companies command premium valuations. High gross margins mean that revenue growth converts efficiently into operating profit and cash flow. A software company growing revenue at 30% with 80% gross margins throws off far more incremental profit than a retailer growing at 30% with 25% gross margins.</p>

<h2 id="trend-analysis">Trend Analysis and Warning Signs</h2>

<p>Gross margin trends reveal more than absolute levels. A technology company with a 75% gross margin that has declined from 82% over three years deserves scrutiny. Possible explanations include commoditization of the product, competitive pricing pressure, rising cloud hosting costs, or a deliberate shift toward lower-margin product lines. Each has different implications for the company's future profitability.</p>

<p>Expanding gross margins, conversely, often signal improving competitive position. A company that steadily raises prices without losing customers is demonstrating real pricing power. A manufacturer reducing input costs through scale or procurement efficiency is building a cost advantage. Either way, rising gross margins create leverage — when revenue grows, more of each incremental dollar flows through to operating profit.</p>

<p>Seasonality also affects gross margin analysis. Retailers typically see lower gross margins in Q4 as holiday promotions and discounts squeeze pricing. Agricultural companies show seasonal variation tied to harvest cycles. Comparing same-quarter margins year over year eliminates seasonal noise.</p>

<p>On Brefyr, income statement data from SEC filings is available for thousands of public companies, letting you analyze gross margin trends alongside insider trading, sector comparisons, and AI-driven filing analysis.</p>
`,
};
