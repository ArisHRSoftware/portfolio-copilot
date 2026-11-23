import type { GlossaryTerm } from "../types";

export const termDeferredRevenue: GlossaryTerm = {
  slug: "deferred-revenue",
  term: "Deferred Revenue",
  title: "Deferred Revenue — Cash Collected Before the Service Is Delivered",
  shortDefinition: "Deferred revenue (also called unearned revenue) is a liability on the balance sheet representing cash received from customers for goods or services that have not yet been delivered, recognizing that the company has an obligation to perform before it can record the revenue.",
  metaDescription: "What is deferred revenue? How it works as a balance sheet liability, why it matters for SaaS and subscription businesses, and where to find it in SEC filings.",
  wordCount: 850, category: "Accounting & Audit", tags: ["deferred-revenue", "unearned-revenue", "liability", "saas", "revenue-recognition"],
  relatedSlugs: ["revenue-recognition", "gaap", "free-cash-flow", "10-k-filing"], relatedTerms: ["revenue-recognition", "gaap", "free-cash-flow", "10-k-filing"],
  faq: [{ question: "Why is deferred revenue a liability and not an asset?", answer: "Because the company has received cash but has not yet earned it — it has an obligation to deliver the promised goods or services. If the company fails to deliver, it would need to refund the cash. The liability represents this unfulfilled obligation. As the company delivers the product or service over time, the deferred revenue liability decreases and revenue is recognized on the income statement. For subscription businesses, deferred revenue is constantly being created (new subscriptions) and released (delivery of service), creating a rolling balance." },
  { question: "Is growing deferred revenue a good sign?", answer: "Generally, yes. Growing deferred revenue indicates that customers are prepaying for future services — a sign of strong demand and customer commitment. For SaaS companies, increasing deferred revenue typically means the company is signing larger or longer contracts. However, context matters: if deferred revenue is growing because the company is unable to deliver (backlog pile-up due to production problems), that is a negative signal. Also, compare the rate of deferred revenue growth to the rate of revenue recognition — healthy companies convert deferred revenue into recognized revenue at a predictable pace." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Deferred revenue — also called unearned revenue or contract liabilities — is a balance sheet liability that represents cash a company has collected from customers for products or services it has not yet delivered. Under accrual accounting (which GAAP requires), revenue cannot be recognized until the company has substantially fulfilled its performance obligation. When a customer pays in advance — an annual software subscription, a prepaid maintenance contract, a magazine subscription, or an upfront payment for a construction project — the company records the cash received as a liability (deferred revenue) rather than as revenue on the income statement.</p>

<h2 id="how-it-works">How Deferred Revenue Works</h2>

<p><strong>Collection:</strong> Customer pays $12,000 for a 12-month software subscription on January 1. The company receives $12,000 in cash (asset increases) and records $12,000 in deferred revenue (liability increases). No revenue is recognized yet.</p>

<p><strong>Recognition:</strong> Each month, as the company provides the software service, it recognizes $1,000 of revenue on the income statement and reduces the deferred revenue liability by $1,000. After six months, the company has recognized $6,000 in revenue and has $6,000 remaining in deferred revenue.</p>

<p><strong>Completion:</strong> At the end of 12 months, all $12,000 has been recognized as revenue, the deferred revenue liability is zero, and the full economic transaction is reflected in the financial statements.</p>

<h2 id="saas-importance">Why Deferred Revenue Matters for SaaS Companies</h2>

<p>For subscription and SaaS (Software-as-a-Service) companies, deferred revenue is one of the most important metrics on the balance sheet. It represents contracted future revenue that is essentially guaranteed (barring cancellations) — the company has already collected the cash and simply needs to deliver the service. Growing deferred revenue is a leading indicator of future revenue growth because the deferred balance will be recognized as revenue in coming quarters.</p>

<p>Many SaaS companies report "remaining performance obligations" (RPO) or "contracted but not yet recognized revenue," which includes deferred revenue plus the portion of multi-year contracts where the customer has committed but has not yet been invoiced. RPO provides an even broader view of the company's contracted revenue backlog than deferred revenue alone.</p>

<h2 id="current-vs-noncurrent">Current vs Non-Current Deferred Revenue</h2>

<p>Deferred revenue that will be recognized within the next 12 months is classified as a current liability. Deferred revenue extending beyond 12 months (from multi-year contracts) is classified as a non-current liability. The split between current and non-current tells investors about the company's contract duration — a company with significant non-current deferred revenue has long-term customer commitments, reducing churn risk.</p>

<h2 id="cash-flow-implications">Cash Flow Implications</h2>

<p>Deferred revenue is a critical bridge between cash flow and revenue. Because cash is collected before revenue is recognized, an increase in deferred revenue represents a source of operating cash flow — the company has cash it has not yet "earned." This is why some SaaS companies generate strong operating cash flow even when they report modest GAAP profits — their deferred revenue balance is growing as they sign new contracts. Conversely, a declining deferred revenue balance may mean the company is not replacing expiring contracts with new ones.</p>

<h2 id="industries">Industries with Significant Deferred Revenue</h2>

<p>Deferred revenue is particularly important in SaaS and enterprise software (subscription prepayments), airlines (tickets sold for future flights), media and publishing (subscription prepayments), insurance (premiums collected before coverage periods), construction (progress payments before milestone completion), and professional services (retainers and prepaid engagement fees). In each case, the matching principle requires that revenue recognition be deferred until the service or product is delivered.</p>

<h2 id="sec-filings">Deferred Revenue in SEC Filings</h2>

<ul>
<li><strong>Balance sheet:</strong> Appears as "Deferred revenue," "Unearned revenue," or "Contract liabilities" in current and non-current liabilities.</li>
<li><strong>Notes to financial statements:</strong> Revenue recognition policies describe when deferred revenue is recognized. The revenue note may include a contract liability rollforward showing beginning balance, cash collected, revenue recognized, and ending balance.</li>
<li><strong>Cash flow statement:</strong> Changes in deferred revenue appear in the operating activities section as an adjustment to reconcile net income to cash flow.</li>
<li><strong>MD&A:</strong> Management discusses trends in deferred revenue and remaining performance obligations.</li>
</ul>

<p>Brefyr extracts deferred revenue balances from 10-K and 10-Q filings, helping investors track this leading indicator of future revenue for subscription and contract-based businesses across their portfolio.</p>
`,
};
