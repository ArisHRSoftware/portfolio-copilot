import type { GlossaryTerm } from "../types";

export const termAssetTurnover: GlossaryTerm = {
  slug: "asset-turnover",
  term: "Asset Turnover Ratio",
  title: "Asset Turnover Ratio — How Efficiently a Company Uses Assets to Generate Revenue",
  shortDefinition:
    "The asset turnover ratio measures how much revenue a company generates for each dollar of total assets, indicating how efficiently the business deploys its asset base to produce sales.",
  metaDescription:
    "What is asset turnover? Learn how to calculate it, why it varies by industry, how it connects to DuPont analysis, and what low vs high turnover reveals.",
  wordCount: 440,
  category: "Financial Metrics",
  tags: ["asset-turnover", "efficiency", "financial-metrics", "dupont-analysis", "revenue"],
  relatedSlugs: ["roa", "roe", "inventory-turnover", "receivables-turnover"],
  relatedTerms: ["roa", "roe", "inventory-turnover", "receivables-turnover"],
  faq: [
    {
      question: "What is a good asset turnover ratio?",
      answer:
        "Asset turnover varies dramatically by industry. Retail and wholesale companies generate $2-4 of revenue per dollar of assets because they turn inventory quickly. Technology companies range from $0.5-1.5 depending on whether they are hardware-intensive or software-focused. Utilities and real estate companies generate only $0.2-0.5 because their assets (power plants, buildings) are extremely expensive relative to the revenue they produce. Always compare within the same industry.",
    },
    {
      question: "How does asset turnover relate to ROA?",
      answer:
        "ROA can be decomposed into two components: net profit margin multiplied by asset turnover. This means a company can achieve a high ROA either through fat margins (high net margin, low turnover — like a software company) or through high volume (low margin, high turnover — like a grocery store). Both paths lead to the same destination. This decomposition is part of the DuPont framework that also breaks down ROE into margin, turnover, and leverage.",
    },
    {
      question: "Why might asset turnover decline over time?",
      answer:
        "Common causes include major capital expenditures (new factories or equipment) that haven't yet generated proportional revenue, acquisitions that add assets faster than they add revenue, slowing sales growth while assets remain on the books, or a strategic shift toward a more asset-intensive business model. A declining asset turnover isn't necessarily bad if the investments will generate future revenue, but it warrants investigation.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Asset turnover measures the top-line productivity of a company's asset base. It answers: for every dollar the company has invested in assets — buildings, equipment, inventory, receivables, cash — how much revenue does it generate? A higher ratio means the company squeezes more sales from its asset base. A lower ratio means assets are underutilized or the business model is inherently capital-intensive.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Asset Turnover = Revenue / Average Total Assets</strong></p>

<p>Revenue comes from the income statement. Total assets come from the balance sheet. Using the average of beginning and ending total assets smooths out the effect of significant asset changes during the period (acquisitions, disposals, major capital expenditures).</p>

<p>An asset turnover of 1.5 means the company generates $1.50 of revenue for every $1.00 of assets. The ratio is not a percentage — it's a multiple that shows how many dollars of revenue each dollar of assets produces.</p>

<h2 id="dupont-connection">The DuPont Connection</h2>

<p>Asset turnover is the second component of the DuPont decomposition of ROE: <strong>ROE = Net Margin x Asset Turnover x Equity Multiplier</strong>. This framework reveals that there are fundamentally two ways to earn high returns: sell high-margin products (luxury goods, software, pharmaceuticals) or sell high volumes of low-margin products (groceries, discount retail, commodity trading).</p>

<p>Walmart's business model is built on asset turnover. Its net margin is thin (2-3%), but its asset turnover is high (around 2.5x) because stores turn inventory rapidly. The combination produces a respectable ROA. Luxury conglomerate LVMH takes the opposite approach: high margins (15-20% net margin) with lower asset turnover (around 0.6x). Both strategies can generate attractive returns, but through completely different mechanisms.</p>

<p>When evaluating management performance, determine which lever they should be pulling. A luxury brand cutting prices to boost turnover is usually destroying value. A discount retailer investing in premium fixtures that lower turnover without raising margins is similarly misguided. Strategy and asset turnover should align.</p>

<h2 id="industry-patterns">Industry Patterns</h2>

<p>Asset turnover follows predictable industry patterns based on the capital intensity of the business model. Service businesses — consulting, staffing, software — have high turnover because their primary assets are people (not on the balance sheet) and intellectual property (often undervalued on the books). Their reported asset bases are small relative to revenue.</p>

<p>Capital-intensive businesses — airlines, utilities, telecommunications, shipping — have low turnover because they require billions in physical infrastructure to generate revenue. A utility builds a power plant for $3 billion and generates $500 million in annual revenue from it — asset turnover of less than 0.2x. This isn't inefficiency; it's the nature of the business.</p>

<p>Manufacturing sits in the middle, with turnover ratios typically between 0.8 and 1.5 depending on the type of manufacturing. Light manufacturing (electronics assembly) has higher turnover than heavy manufacturing (steel, chemicals) because the latter requires more expensive plant and equipment per unit of revenue.</p>

<h2 id="asset-intensity">Asset Intensity and Competitive Advantage</h2>

<p>Companies that achieve higher asset turnover than their peers within the same industry often have genuine operational advantages. Superior supply chain management, better inventory control, faster receivable collection, or more efficient facility utilization all show up as higher asset turnover. These advantages compound over time because the company needs less capital to grow, freeing cash for shareholder returns or additional investments.</p>

<p>Conversely, a company with declining asset turnover relative to peers may be losing competitive ground. Its assets are becoming less productive, which either reflects deteriorating operations or a failure to divest underperforming assets. The discipline of monitoring asset turnover forces management to justify every asset on the balance sheet.</p>

<p>On Brefyr, financial data from SEC filings enables efficiency analysis across thousands of public companies, letting you track asset productivity alongside insider trading and filing history.</p>
`,
};
