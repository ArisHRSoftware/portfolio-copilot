import type { GlossaryTerm } from "../types";

export const termReceivablesTurnover: GlossaryTerm = {
  slug: "receivables-turnover",
  term: "Receivables Turnover",
  title: "Receivables Turnover — How Quickly a Company Collects What It's Owed",
  shortDefinition:
    "Receivables turnover measures how many times per year a company collects its average accounts receivable balance, indicating the speed and effectiveness of credit collection.",
  metaDescription:
    "What is receivables turnover? Learn how to calculate it, what days sales outstanding means, and why collection speed affects cash flow and risk.",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["receivables-turnover", "efficiency", "financial-metrics", "credit", "working-capital"],
  relatedSlugs: ["inventory-turnover", "asset-turnover", "cash-conversion-cycle", "working-capital"],
  relatedTerms: ["inventory-turnover", "asset-turnover", "cash-conversion-cycle", "working-capital"],
  faq: [
    {
      question: "What is a good receivables turnover ratio?",
      answer:
        "Higher is generally better — it means the company collects payments faster. Cash-based businesses (retail, restaurants) have very high turnover because customers pay at the point of sale. B2B companies with net-30 or net-60 payment terms typically have turnover ratios of 6-12. Government contractors or companies selling to large enterprises may see ratios as low as 4-6 due to slow-paying customers. Compare to industry peers and track the trend over time.",
    },
    {
      question: "What is days sales outstanding (DSO)?",
      answer:
        "DSO converts the receivables turnover ratio into days: DSO = 365 / Receivables Turnover. If turnover is 10, DSO is 36.5 days — the average customer takes about 37 days to pay. DSO is widely used because it's intuitive: you can directly compare DSO to the company's credit terms. If terms are net-30 but DSO is 55, customers are paying 25 days late on average, which signals collection problems or deliberate extensions of credit.",
    },
    {
      question: "Why would receivables turnover decrease?",
      answer:
        "Common causes include extending more generous credit terms to win customers, deteriorating customer creditworthiness, poor collection practices, revenue recognized but not yet billable, or booking sales near period-end that haven't had time to be collected. A declining trend is a warning sign that may precede bad debt write-offs and cash flow deterioration. Check the allowance for doubtful accounts in the balance sheet footnotes for additional insight.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Receivables turnover measures the efficiency of a company's credit and collection processes. When a company sells on credit — which is standard in B2B commerce — it creates an accounts receivable: a promise from the customer to pay later. The receivables turnover ratio reveals how quickly those promises convert to actual cash. Faster collection means better cash flow, lower credit risk, and less capital tied up in outstanding invoices.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Receivables Turnover = Net Credit Sales / Average Accounts Receivable</strong></p>

<p>Net credit sales come from the income statement. In practice, most analysts use total revenue because companies rarely disclose credit sales separately. Average accounts receivable is the mean of beginning and ending receivable balances from the balance sheet.</p>

<p>A turnover of 12 means the company collects its full receivable balance twelve times per year — roughly every 30 days. Converting to days: 365 / 12 = approximately 30 days sales outstanding.</p>

<h2 id="collection-efficiency">Collection Efficiency and Cash Flow</h2>

<p>Every day a receivable sits uncollected is a day the company has effectively lent money to its customer interest-free. If a company has $50 million in receivables with a DSO of 60 days, it has $50 million deployed as interest-free customer financing. Reducing DSO from 60 to 45 days would release approximately $12.5 million in cash — money available for operations, investment, or shareholder returns without raising a single dollar from lenders or investors.</p>

<p>This working capital release is one of the most accessible sources of cash flow improvement for any business. Companies with strong collection processes, automated billing systems, and disciplined credit policies consistently outperform competitors in cash conversion. The difference compounds over years as the faster collector reinvests freed capital while the slower collector's cash remains trapped in receivables.</p>

<h2 id="credit-risk-signal">Credit Risk Signals</h2>

<p>Receivables turnover is an early warning indicator for credit quality problems. When turnover declines (DSO rises), one or more of these situations is typically occurring: customers are struggling to pay, the company is extending more generous terms to maintain sales, or the company is booking revenue that isn't yet collectible.</p>

<p>The most dangerous scenario is revenue growth accompanied by even faster receivables growth. If revenue grows 10% but receivables grow 25%, the company is effectively lending more and more to customers — perhaps to avoid showing a sales slowdown. This pattern frequently precedes bad debt write-offs and revenue restatements. It's one of the classic signs of aggressive accounting that short-sellers monitor closely.</p>

<p>The allowance for doubtful accounts (disclosed in balance sheet footnotes) provides additional context. If this reserve is growing as a percentage of gross receivables, management itself is acknowledging that an increasing share of receivables may never be collected.</p>

<h2 id="industry-and-business-model">Industry and Business Model Effects</h2>

<p>Receivables turnover is entirely a function of business model and customer type. Direct-to-consumer businesses (retailers, restaurants, subscription services) have minimal receivables because customers pay upfront. These companies show extremely high turnover ratios that aren't meaningful to compare with B2B companies.</p>

<p>Within B2B, payment norms vary by industry and geography. Technology companies selling to enterprises typically see 30-60 day payment cycles. Construction companies dealing with slow-paying general contractors may see 60-90 days. Government contractors face notoriously long payment cycles — 90-120 days is common for federal contracts. Healthcare providers billing insurance companies often wait 60-90 days for reimbursement.</p>

<p>International differences add another layer. Payment terms in many European and Asian markets extend to 60-90 days as standard business practice, compared to 30-day norms in the United States. Companies with significant international revenue may show lower receivables turnover without any collection quality issues.</p>

<p>On Brefyr, balance sheet data from SEC filings lets you assess collection efficiency across thousands of public companies alongside insider trading activity and AI-generated filing analysis.</p>
`,
};
