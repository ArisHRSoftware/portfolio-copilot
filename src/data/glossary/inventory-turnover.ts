import type { GlossaryTerm } from "../types";

export const termInventoryTurnover: GlossaryTerm = {
  slug: "inventory-turnover",
  term: "Inventory Turnover",
  title: "Inventory Turnover — How Fast a Company Sells Through Its Stock",
  shortDefinition:
    "Inventory turnover measures how many times a company sells and replaces its entire inventory during a period, indicating the efficiency of inventory management and demand strength.",
  metaDescription:
    "What is inventory turnover? Learn how to calculate it, what days inventory outstanding means, and why turnover speed matters for cash flow and profits.",
  wordCount: 440,
  category: "Financial Metrics",
  tags: ["inventory-turnover", "efficiency", "financial-metrics", "operations", "working-capital"],
  relatedSlugs: ["asset-turnover", "receivables-turnover", "cash-conversion-cycle", "working-capital"],
  relatedTerms: ["asset-turnover", "receivables-turnover", "cash-conversion-cycle", "working-capital"],
  faq: [
    {
      question: "What is a good inventory turnover ratio?",
      answer:
        "It depends entirely on the industry. Grocery stores turn inventory 12-20 times per year because food is perishable. Fashion retailers target 4-8 turns. Auto dealers operate at 6-10 turns. Heavy equipment manufacturers may turn inventory only 2-4 times. High turnover generally indicates efficient inventory management and strong demand, but excessively high turnover might mean the company is understocked and losing sales. Compare to direct industry peers.",
    },
    {
      question: "What is days inventory outstanding (DIO)?",
      answer:
        "Days inventory outstanding converts the turnover ratio into the number of days it takes to sell through the entire inventory: DIO = 365 / Inventory Turnover. If turnover is 10, DIO is 36.5 days — the company sells its full inventory roughly every 37 days. DIO is easier to interpret intuitively than the turnover ratio and directly feeds into the cash conversion cycle calculation.",
    },
    {
      question: "What causes inventory turnover to drop?",
      answer:
        "Declining demand (products sitting on shelves longer), overproduction or over-ordering, product quality issues leading to returns, seasonal inventory buildup before a peak selling period, or introduction of new product lines that haven't gained traction. A sudden drop in turnover is a red flag that may precede inventory write-downs, margin compression from discounting, or working capital strain.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Inventory turnover is a critical efficiency metric for any company that holds physical products. It measures how quickly a company converts its inventory investment into sales. Fast turnover means products move quickly from warehouse to customer, freeing up cash for other uses. Slow turnover means capital is trapped in unsold goods that may eventually need to be marked down or written off — a direct hit to profitability.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Inventory Turnover = Cost of Goods Sold / Average Inventory</strong></p>

<p>COGS comes from the income statement. Average inventory is the mean of beginning and ending inventory from the balance sheet. Using COGS (rather than revenue) in the numerator is more accurate because inventory is carried at cost on the balance sheet, not at selling price. Some simplified versions use revenue, but this inflates the ratio by the gross margin percentage.</p>

<p>An inventory turnover of 8 means the company sold and replaced its entire inventory eight times during the year. Converting to days: 365 / 8 = approximately 46 days of inventory on hand at any given time.</p>

<h2 id="cash-flow-impact">Cash Flow Impact</h2>

<p>Inventory is cash sitting on shelves. Every dollar tied up in unsold goods is a dollar unavailable for paying suppliers, investing in growth, or returning to shareholders. Faster inventory turnover directly improves cash flow because the company recycles its inventory investment more frequently, generating cash from sales before the next purchase cycle begins.</p>

<p>The working capital impact is especially significant for growing companies. If a company doubles revenue and maintains the same inventory turnover, its inventory investment doubles as well — consuming cash even as profits grow. If turnover improves alongside growth, the inventory investment grows more slowly than revenue, releasing cash. This is why operational improvements to inventory management often have an outsized impact on a company's cash position.</p>

<p>Retailers are acutely sensitive to inventory turnover because their capital is overwhelmingly tied up in merchandise. A retailer with $500 million in inventory and 6x turnover has approximately $83 million locked up at any time. If turnover improves to 8x, the same revenue can be supported with $62.5 million in inventory — freeing over $20 million in cash.</p>

<h2 id="quality-implications">Quality and Obsolescence</h2>

<p>Slow-moving inventory carries rising obsolescence risk. Technology products become outdated within months. Fashion items go out of style seasonally. Food products expire. Even durable goods can become obsolete as new models are released. The longer inventory sits, the greater the risk that it will need to be sold at a discount or written off entirely — both painful hits to profitability.</p>

<p>Tracking inventory turnover by product category or SKU reveals which products are selling well and which are accumulating. Aggregate company-level turnover can mask problems — overall turnover might look healthy even if 20% of inventory is dead stock, because fast-selling products compensate for slow movers. The footnotes to financial statements sometimes disclose inventory reserves (provisions for obsolescence), which indicate how much slow-moving stock the company is carrying.</p>

<h2 id="just-in-time">Just-in-Time and Supply Chain Strategy</h2>

<p>Some companies pursue deliberately high inventory turnover through just-in-time (JIT) manufacturing, where components arrive precisely when needed for production, minimizing on-hand inventory. Toyota pioneered this approach, achieving extraordinarily high turnover ratios that freed billions in working capital. The trade-off: JIT systems are fragile. Supply chain disruptions — natural disasters, pandemics, shipping bottlenecks — can halt production entirely because there is no buffer stock.</p>

<p>The 2020-2022 supply chain crisis caused many companies to deliberately build inventory buffers, accepting lower turnover for supply security. This strategic choice reduced turnover ratios across industries without indicating operational deterioration. When evaluating turnover declines, consider whether the change reflects lost efficiency or a deliberate strategic shift in inventory policy.</p>

<p>On Brefyr, financial statement data from SEC filings allows you to track inventory efficiency across thousands of public companies alongside insider activity and AI-driven filing analysis.</p>
`,
};
