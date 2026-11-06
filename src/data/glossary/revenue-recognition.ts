import type { GlossaryTerm } from "../types";

export const termRevenueRecognition: GlossaryTerm = {
  slug: "revenue-recognition",
  term: "Revenue Recognition",
  title: "Revenue Recognition — The Accounting Rule That Determines When Revenue Is Real",
  shortDefinition:
    "Revenue recognition is the accounting principle that determines when a company can record revenue on its income statement — not when cash is received, but when the performance obligation is satisfied.",
  metaDescription:
    "What is revenue recognition? How ASC 606 works, the five-step model for recognizing revenue in SEC filings, common manipulation tactics, and what investors should watch for.",
  wordCount: 2300,
  category: "Accounting & Financial",
  tags: ["revenue-recognition", "asc-606", "accounting", "financial-statements", "red-flags"],
  relatedSlugs: ["10-k-filing", "ebitda", "free-cash-flow", "material-weakness"],
  relatedTerms: ["10-k-filing", "ebitda", "free-cash-flow", "material-weakness"],
  faq: [
    {
      question: "What is ASC 606?",
      answer:
        "ASC 606 (Revenue from Contracts with Customers) is the current U.S. GAAP standard governing revenue recognition, effective since 2018. It replaced a patchwork of industry-specific rules with a single five-step model applicable to all industries. The standard requires companies to recognize revenue when they transfer control of goods or services to the customer, in the amount they expect to receive.",
    },
    {
      question: "Why is revenue recognition important for investors?",
      answer:
        "Revenue is the top line of the income statement — it drives every other metric. If revenue is recognized too early (before the obligation is fulfilled) or in the wrong amount, every financial ratio built on it is distorted. Revenue recognition manipulation was central to major frauds at Enron, WorldCom, and Luckin Coffee. Understanding how a company recognizes revenue helps you assess whether reported growth is real.",
    },
    {
      question: "Where do companies disclose their revenue recognition policies?",
      answer:
        "In Note 1 or Note 2 of the financial statements in the 10-K, under 'Summary of Significant Accounting Policies — Revenue Recognition.' The disclosure describes the company's performance obligations, transaction price determination, and the timing of revenue recognition for each product/service category. ASC 606 also requires disaggregated revenue disclosures showing revenue by product line, geography, and timing.",
    },
    {
      question: "What are common revenue recognition red flags?",
      answer:
        "Accounts receivable growing much faster than revenue (suggesting sales booked but not collected), a large spike in revenue in the final quarter or final month (quarter-end stuffing), significant related party revenue, frequent changes in revenue recognition policies, and a growing gap between reported revenue and cash collected from customers.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Revenue recognition answers a deceptively simple question: when does a dollar of revenue become real? Not when the contract is signed. Not when the invoice is sent. Not even when the cash arrives. Revenue is recognized when the company has fulfilled its obligation to the customer — when control of the goods or services has transferred.</p>

<p>This distinction matters enormously because revenue is the foundation of every financial metric. Earnings per share, profit margins, growth rates, and valuation multiples all start with revenue. If revenue is recognized in the wrong period or the wrong amount, the entire financial picture is distorted. More accounting restatements involve revenue recognition than any other issue — it's the single most common area of financial reporting fraud.</p>

<h2 id="five-step-model">The Five-Step Model (ASC 606)</h2>

<p>Since 2018, all U.S. public companies follow ASC 606, which prescribes a five-step process for recognizing revenue:</p>

<h3>Step 1: Identify the Contract</h3>
<p>A contract exists when both parties have approved it, the rights and payment terms are identifiable, the contract has commercial substance, and it's probable that the company will collect what it's owed. No contract, no revenue — even if a handshake deal exists.</p>

<h3>Step 2: Identify Performance Obligations</h3>
<p>A performance obligation is a distinct promise to transfer a good or service. A single contract might contain multiple obligations. A software company that sells a license plus a year of support has two performance obligations. Each must be accounted for separately.</p>

<p>This step is where complexity arises. Is the installation service a separate obligation or part of the product delivery? Is the free upgrade included in the original sale price or a separate obligation? The answers determine how much revenue is allocated to each component and when it's recognized.</p>

<h3>Step 3: Determine the Transaction Price</h3>
<p>The transaction price is the amount the company expects to receive. This seems straightforward but gets complicated with variable consideration (performance bonuses, volume discounts, right of return), significant financing components (payment plans extending beyond 12 months), and non-cash consideration (barter arrangements).</p>

<h3>Step 4: Allocate the Transaction Price</h3>
<p>If there are multiple performance obligations, the total price is allocated to each based on its standalone selling price. If the company sells the license for $100 standalone and the support for $50 standalone, a $120 bundle would allocate $80 to the license and $40 to the support (proportional to standalone prices).</p>

<h3>Step 5: Recognize Revenue When (or As) Each Obligation Is Satisfied</h3>
<p>Revenue for each obligation is recognized either at a point in time (when control transfers — for goods shipped, for example) or over time (as the service is performed — for a 12-month support contract, recognized monthly).</p>

<p>This final step determines the timing. A construction company recognizing revenue over time on a 3-year project will show steady revenue growth. The same company recognizing at a point in time (upon completion) would show nothing for 3 years, then a massive spike. Same economics, dramatically different financial statements.</p>

<h2 id="real-world-examples">How Revenue Recognition Works in Practice</h2>

<h3>Software Company (SaaS)</h3>
<p>A SaaS company charges $1,200/year for its platform. Under ASC 606, the performance obligation (access to the platform) is satisfied over time. Revenue is recognized at $100/month. On January 1, a customer pays $1,200 upfront. The company records $100 in revenue and $1,100 in deferred revenue (a liability). Each subsequent month, $100 moves from deferred revenue to recognized revenue.</p>

<p>This is why SaaS companies watch "deferred revenue" closely — it represents committed future revenue that will be recognized over the subscription period.</p>

<h3>Hardware Manufacturer</h3>
<p>A manufacturer ships $500,000 of equipment to a customer with a 30-day payment term. Revenue is recognized when control transfers — typically upon shipment or delivery, depending on the shipping terms (FOB shipping point vs FOB destination). The $500,000 appears as revenue immediately, with a $500,000 accounts receivable until payment.</p>

<h3>Long-Term Construction</h3>
<p>A construction company has a $50 million, 2-year contract. Revenue is recognized over time using an input method (percentage of costs incurred) or output method (milestones completed). If the company has incurred 40% of estimated total costs by quarter end, it recognizes $20 million in revenue — even though the project isn't finished and the client may not have paid that much yet.</p>

<h2 id="manipulation-tactics">Revenue Recognition Manipulation Tactics</h2>

<p>Aggressive revenue recognition is the most common form of earnings manipulation. Patterns to watch for:</p>

<h3>Channel Stuffing</h3>
<p>Shipping excess product to distributors at quarter end to inflate revenue. The goods sit in the distributor's warehouse, and many get returned in Q1. The signal: accounts receivable growing much faster than revenue, followed by unusually high returns or sales allowances in the next quarter. Sunbeam (1998) and Bristol-Myers Squibb (2002) are textbook examples.</p>

<h3>Bill-and-Hold Arrangements</h3>
<p>The company "sells" product but retains physical possession — billing the customer but holding the goods in its own warehouse. Revenue is recognized even though nothing has been delivered. ASC 606 permits bill-and-hold only under strict conditions (customer requests the arrangement, risks transfer, the product is separately identified).</p>

<h3>Round-Tripping</h3>
<p>Two companies sell goods or services to each other at inflated prices, creating artificial revenue for both. The net economic effect is zero, but both companies' top lines increase. This was part of the Enron fraud and has appeared at multiple telecom companies.</p>

<h3>Premature Recognition</h3>
<p>Recognizing revenue before the performance obligation is satisfied — booking a multi-year contract upfront instead of over time, recognizing revenue on shipments that haven't left the warehouse, or recording conditional sales as final. Luckin Coffee fabricated $300 million in revenue through fictitious transactions that never occurred at all.</p>

<h2 id="investor-detection">How to Detect Revenue Recognition Issues</h2>

<p><strong>Compare revenue growth to cash collected.</strong> The cash flow statement shows "cash received from customers" (or you can approximate it: revenue minus change in accounts receivable). If revenue is growing 20% but cash collected is flat, the company is booking sales it isn't collecting.</p>

<p><strong>Watch the accounts receivable turnover ratio.</strong> Revenue / Average Accounts Receivable tells you how quickly customers are paying. A declining ratio (customers paying slower) combined with accelerating revenue is a warning sign.</p>

<p><strong>Read the revenue recognition note.</strong> In Note 1 or 2 of the 10-K, the company describes its policies. Look for complexity, vagueness, or changes from the prior year. A company that changes its revenue recognition methodology without a clear accounting standard change deserves scrutiny.</p>

<p><strong>Check for unusual seasonality.</strong> If Q4 revenue is disproportionately large relative to Q1-Q3, the company may be pulling forward sales or stuffing the channel at year end. Consistent quarterly revenue is generally healthier than a hockey stick pattern.</p>

<p><strong>Look at deferred revenue trends.</strong> For subscription businesses, declining deferred revenue while reported revenue grows can signal that new customer acquisition is slowing and the company is recognizing more from existing contracts than it's adding.</p>

<p>Brefyr's AI filing analysis flags unusual revenue patterns — including significant accounts receivable changes, revenue spikes, and changes to accounting policies — as part of the significance scoring for each 10-K and 10-Q filing across all 7,600+ tracked companies.</p>
`,
};
