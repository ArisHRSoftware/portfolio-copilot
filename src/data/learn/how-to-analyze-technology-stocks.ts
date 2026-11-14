import type { LearnArticle } from "../types";

export const articleHowToAnalyzeTechnologyStocks: LearnArticle = {
  slug: "how-to-analyze-technology-stocks",
  pillar: "sectors",
  title: "How to Analyze Technology Stocks Using SEC Filings",
  metaDescription:
    "Learn how to evaluate technology companies through SEC filings. Covers revenue recognition for SaaS, R&D capitalization, stock-based compensation, deferred revenue, and key metrics that separate growing tech firms from those burning cash.",
  readingTime: 14,
  difficulty: "intermediate",
  wordCount: 1100,
  category: "Sector Deep Dives",
  tags: ["technology", "saas", "sector-analysis", "revenue-recognition", "10-k", "intermediate"],
  relatedSlugs: [
    "healthcare-sector-sec-filings-guide",
    "financial-sector-analysis-guide",
    "energy-sector-sec-filings",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "What is the most important metric in a technology company's 10-K?",
      answer:
        "Recurring revenue growth rate and net revenue retention are the two numbers that matter most for subscription-based tech companies. Revenue growth tells you whether the company is acquiring new customers, while net revenue retention — disclosed in the MD&A or business overview — tells you whether existing customers are spending more or less over time. A net retention rate above 110% means existing customers are expanding faster than others are churning, which compounds growth without proportional sales and marketing spend.",
    },
    {
      question: "How do I spot aggressive revenue recognition in tech filings?",
      answer:
        "Look at the revenue recognition note in the financial statement footnotes. Warning signs include front-loading multi-year contracts into a single period, recognizing license revenue before the customer has access to the software, and classifying professional services revenue as product revenue to inflate gross margins. Compare the growth of deferred revenue to reported revenue — if reported revenue is growing but deferred revenue is flat or declining, the company may be pulling forward future revenue.",
    },
    {
      question: "Why does stock-based compensation matter for tech investors?",
      answer:
        "Stock-based compensation (SBC) is a real cost that dilutes shareholders. Many tech companies report 'adjusted' earnings that exclude SBC, which can make unprofitable companies look profitable. Check the cash flow statement where SBC is added back to net income, and look at the diluted share count on the income statement. If the share count is growing 3-5% per year, existing shareholders are being diluted by that same amount annually.",
    },
    {
      question: "How should I compare a SaaS company to a hardware company in SEC filings?",
      answer:
        "These are fundamentally different business models. SaaS companies generate recurring subscription revenue with high gross margins (70-85%) but often have large upfront customer acquisition costs. Hardware companies recognize revenue at the point of sale with lower gross margins (30-50%) but less customer concentration risk. Compare SaaS companies to SaaS peers using ARR growth, net retention, and rule of 40. Compare hardware companies using inventory turnover, gross margin trends, and backlog disclosures.",
    },
  ],
  lastUpdated: "2026-11-13",
  body: `
<p>Technology stocks dominate public markets, but the sector spans everything from trillion-dollar cloud platforms to unprofitable pre-revenue startups. SEC filings are the great equalizer — they force every public tech company to disclose the same financial realities, regardless of how compelling the pitch deck was. This guide breaks down how to read tech company filings with the skepticism and precision the sector demands.</p>

<h2 id="revenue-recognition">Revenue Recognition: Where Tech Accounting Gets Creative</h2>

<p>Revenue recognition is the single most important accounting concept for technology investors. The way a tech company recognizes revenue determines when revenue shows up on the income statement — and companies have meaningful latitude in how they apply the rules.</p>

<h3>SaaS and Subscription Revenue</h3>

<p>Subscription-based companies recognize revenue ratably over the contract term. A $120,000 annual contract is recognized as $10,000 per month. This creates <strong>deferred revenue</strong> — cash collected but not yet recognized — which appears as a liability on the balance sheet. Growing deferred revenue is a leading indicator: it means the company has sold contracts that will convert to recognized revenue in future quarters.</p>

<p>Watch the relationship between billings (cash collected) and revenue (recognized). If billings growth is decelerating while revenue growth holds steady, the company is living off its backlog, and revenue growth will eventually slow to match.</p>

<h3>License vs. Subscription Revenue Mix</h3>

<p>Some tech companies sell both perpetual licenses and subscriptions. License revenue is recognized upfront; subscription revenue is recognized over time. A company transitioning from licenses to subscriptions will show a temporary revenue decline even if total bookings are growing. The MD&A should explain this transition — if it doesn't, that's a red flag.</p>

<h3>Professional Services Revenue</h3>

<p>Implementation and consulting fees are typically lower-margin than software revenue. Some companies bundle professional services with software to inflate total revenue. Check the gross margin breakdown by segment — professional services margins below 20% are common and drag down overall profitability.</p>

<h2 id="key-metrics">Key Metrics to Extract from Tech 10-Ks</h2>

<p>Beyond standard financial statement analysis, technology filings contain sector-specific metrics that reveal the health of the business.</p>

<h3>Annual Recurring Revenue (ARR) and Net Revenue Retention</h3>

<p>ARR represents the annualized value of active subscription contracts. Net revenue retention (NRR) measures the revenue from a cohort of customers after accounting for expansions, contractions, and churn. An NRR above 120% means the company is growing from existing customers alone — even without acquiring a single new customer. This metric appears in the MD&A or business overview section of the 10-K.</p>

<h3>Customer Concentration</h3>

<p>Check the risk factors and revenue footnotes for customer concentration disclosures. A tech company where one customer represents 25% of revenue is a different risk profile than one with thousands of small accounts. Losing that single customer would be catastrophic.</p>

<h3>Remaining Performance Obligations (RPO)</h3>

<p>RPO represents contracted but unrecognized revenue — essentially the order backlog. It includes both deferred revenue and amounts that will be invoiced in the future under existing contracts. Growing RPO provides visibility into future revenue, but check the footnotes for how much RPO is expected to be recognized within the next 12 months versus beyond.</p>

<h2 id="rnd-spending">R&D Spending and Capitalization</h2>

<p>Research and development spending is the lifeblood of technology companies. In the income statement, R&D expense shows what the company spent in the period. However, some companies capitalize certain development costs — moving them to the balance sheet as intangible assets and amortizing them over time. This reduces current-period R&D expense and increases reported earnings.</p>

<p>Look for <strong>capitalized software development costs</strong> in the footnotes. Compare R&D expense as a percentage of revenue to peers. If a company reports significantly lower R&D intensity than competitors, check whether they're capitalizing costs that peers expense. Neither approach is wrong, but they make direct comparisons misleading without adjustment.</p>

<h3>Acquired Technology</h3>

<p>Acquisitive tech companies often carry large goodwill and intangible asset balances. When a company acquires another for $500 million, the purchase price is allocated to identifiable assets (technology, customer relationships, brand) and the residual becomes goodwill. A goodwill impairment charge — disclosed in the 10-K — means the acquired business was worth less than what was paid. This is a concrete admission that an acquisition destroyed value.</p>

<h2 id="stock-compensation">Stock-Based Compensation: The Hidden Cost</h2>

<p>Technology companies rely heavily on stock-based compensation (SBC) to attract talent. Under GAAP, SBC is a real expense on the income statement. However, many tech companies report "non-GAAP" or "adjusted" earnings that add SBC back, arguing it's a non-cash expense.</p>

<p>The problem: SBC dilutes existing shareholders by increasing the share count. Check two numbers in the filing:</p>

<ul>
<li><strong>SBC expense</strong> (cash flow statement, listed as an add-back to net income). Compare SBC as a percentage of revenue to peers. Above 20% is aggressive.</li>
<li><strong>Diluted share count</strong> (income statement or cover page). If shares outstanding grow 3-5% per year, free cash flow per share is growing 3-5% slower than total free cash flow.</li>
</ul>

<p>Some companies offset dilution with share buybacks. Check the cash flow from financing activities — share repurchases are listed there. Net dilution (new shares issued minus shares repurchased) is the real shareholder impact.</p>

<h2 id="cash-flow">Cash Flow Analysis for Tech Companies</h2>

<p>For technology companies, free cash flow is often more informative than earnings. Many growing tech firms are GAAP unprofitable but generate positive free cash flow because subscription revenue is collected upfront while costs are spread over time.</p>

<h3>Operating Cash Flow vs. Net Income</h3>

<p>A large gap between operating cash flow and net income is common in tech. The primary drivers are SBC (non-cash expense added back) and changes in working capital (especially deferred revenue growth). As long as the gap is explained by these factors, it's a sign of a healthy subscription business. If operating cash flow exceeds net income for reasons not explained by SBC or deferred revenue, investigate further.</p>

<h3>Capital Expenditure Intensity</h3>

<p>Cloud infrastructure companies (data centers, network equipment) have high capex. Pure software companies have minimal capex. Free cash flow (operating cash flow minus capex) captures this difference. A software company with high capex relative to revenue may be building infrastructure that will eventually generate returns — or may have a cost structure problem. The MD&A should explain the capital spending plan.</p>

<h2 id="red-flags">Technology-Specific Red Flags in SEC Filings</h2>

<ul>
<li><strong>Deferred revenue declining while reported revenue grows.</strong> This suggests the company is recognizing backlog faster than it's replenishing it — future quarters may disappoint.</li>
<li><strong>Non-GAAP earnings materially diverging from GAAP earnings.</strong> If adjusted earnings are positive but GAAP net income is deeply negative, examine what's being excluded. Recurring "non-recurring" charges and excessive SBC exclusion are warning signs.</li>
<li><strong>Customer acquisition cost rising faster than revenue.</strong> Disclosed in sales and marketing expense. If a company is spending progressively more to acquire each dollar of new revenue, the market may be saturating or competition intensifying.</li>
<li><strong>Related party transactions with founders.</strong> Check the proxy statement for transactions between the company and entities controlled by executives — leasing office space from the CEO's real estate holdings, for example.</li>
<li><strong>Auditor changes.</strong> A technology company switching from a Big Four auditor to a smaller firm warrants investigation. Check the 8-K filing that discloses the auditor change for any disagreements.</li>
</ul>

<h2 id="practical-workflow">Practical Workflow: Analyzing a Tech Stock</h2>

<ol>
<li><strong>Start with the business description (Item 1).</strong> Understand the product, customers, and revenue model before touching the numbers.</li>
<li><strong>Read the MD&A (Item 7).</strong> Focus on revenue growth drivers, key metrics (ARR, NRR, RPO), and management's explanation of trends.</li>
<li><strong>Examine the revenue recognition footnote.</strong> Understand how and when revenue is counted.</li>
<li><strong>Check SBC and dilution.</strong> Calculate SBC as a percentage of revenue and net share dilution.</li>
<li><strong>Analyze free cash flow.</strong> Compare to GAAP net income and understand the drivers of any difference.</li>
<li><strong>Review risk factors for competitive and technology risks.</strong> New entrants, platform migration risks, and customer concentration are tech-specific concerns.</li>
</ol>

<p>Technology companies file the same forms as every other public company. The difference is in knowing which line items matter most. Revenue quality, cash flow generation, dilution management, and R&D efficiency are the four pillars of tech stock analysis through SEC filings. Master these, and you can evaluate any tech company from its public disclosures.</p>
`,
};
