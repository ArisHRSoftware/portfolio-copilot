import type { GlossaryTerm } from "../types";

export const termRestatement: GlossaryTerm = {
  slug: "restatement",
  term: "Financial Restatement",
  title: "Financial Restatement — When Companies Correct Errors in Previously Reported Numbers",
  shortDefinition:
    "A financial restatement occurs when a company revises previously filed financial statements to correct material errors in accounting, revenue recognition, expense classification, or other financial reporting, requiring amended SEC filings.",
  metaDescription:
    "What is a financial restatement? Why companies restate, the difference between Big R and little r restatements, the impact on stock price and investor trust, and how to spot them in SEC filings.",
  wordCount: 900,
  category: "Accounting & Audit",
  tags: ["restatement", "accounting-error", "sec-filing", "financial-reporting", "material-weakness"],
  relatedSlugs: ["material-weakness", "gaap", "audit-opinion", "sarbanes-oxley", "clawback-provision"],
  relatedTerms: ["material-weakness", "gaap", "audit-opinion", "sarbanes-oxley", "clawback-provision"],
  faq: [
    {
      question: "What is the difference between a Big R and a little r restatement?",
      answer:
        "A 'Big R' restatement (formally, a restatement under ASC 250-10-45-23) requires the company to file amended 10-K or 10-Q reports with the SEC, restating prior period financial statements. This is triggered when the error is material to the previously issued financial statements. A 'little r' restatement (a revision) corrects errors that were immaterial to the prior period statements but would be material if corrected in the current period. The company corrects prior period figures in the current filing without filing amendments. Big R restatements are far more serious — they trigger clawback provisions, SEC scrutiny, potential securities litigation, and significant stock price impact.",
    },
    {
      question: "How do restatements affect the stock price?",
      answer:
        "Big R restatements typically cause significant stock price declines — 10-20% or more on average, with the magnitude depending on the nature and size of the error, whether fraud is suspected, and the company's disclosure clarity. The stock often continues to underperform in subsequent months as investors lose confidence in management and financial reporting. Restatements also frequently trigger securities class action lawsuits, SEC investigations, auditor changes, and management turnover — all of which create ongoing uncertainty.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A financial restatement is a formal revision of previously issued financial statements to correct errors that have been discovered after the original filing. Restatements are among the most significant negative events in corporate financial reporting — they tell investors that the numbers they relied on were wrong, that the internal controls that should have prevented the error failed, and that the audit that should have detected the error missed it. The severity ranges from minor corrections (misclassified expenses, immaterial calculation errors) to massive frauds (fabricated revenue, hidden liabilities) that result in billions of dollars of investor losses.</p>

<h2 id="causes">Common Causes of Restatements</h2>

<p><strong>Revenue recognition errors.</strong> The most frequent cause. Companies may recognize revenue prematurely (before delivery or acceptance), record revenue from side agreements or contingent arrangements, fail to properly account for returns and allowances, or use aggressive estimates for long-term contracts. Revenue errors are particularly common in technology, healthcare, and construction industries.</p>

<p><strong>Expense misclassification or omission.</strong> Capitalizing costs that should be expensed (inflating assets and understating expenses), failing to accrue liabilities, or misclassifying operating vs non-operating expenses.</p>

<p><strong>Acquisition accounting errors.</strong> Mistakes in purchase price allocation, failure to properly value acquired assets and liabilities at fair value, or errors in goodwill calculations.</p>

<p><strong>Tax accounting errors.</strong> Incorrect calculation of deferred tax assets and liabilities, improper valuation allowances, or errors in tax provision calculations. Tax accounting is complex and a frequent source of restatements.</p>

<p><strong>Fraud.</strong> Intentional manipulation of financial results — fabricating transactions, manipulating estimates, hiding expenses, inflating assets, or concealing liabilities. Fraud-driven restatements are the most severe, often involving SEC enforcement actions, criminal charges, and massive securities litigation.</p>

<h2 id="process">The Restatement Process</h2>

<p><strong>Discovery.</strong> Errors are discovered through various channels: internal audit reviews, new management scrutiny, SEC comment letters, whistleblower reports, or the annual audit process. When an error is discovered, the audit committee typically leads an investigation, often with the assistance of independent counsel and forensic accountants.</p>

<p><strong>Assessment.</strong> The company and its auditor assess whether the error is material to the previously issued financial statements (triggering a Big R restatement) or immaterial to those statements (allowing a little r revision). This materiality assessment considers both quantitative factors (the dollar amount) and qualitative factors (whether the error changes a loss to a profit, affects compliance with debt covenants, or involves management fraud).</p>

<p><strong>Disclosure and filing.</strong> For Big R restatements, the company files a non-reliance 8-K (Item 4.02) disclosing that previously issued financial statements can no longer be relied upon. The company then files amended 10-K/A and/or 10-Q/A reports with restated financial statements. For little r revisions, the company corrects prior period figures in the current filing with appropriate disclosure in the notes.</p>

<h2 id="consequences">Consequences</h2>

<p><strong>Stock price impact.</strong> Average stock price decline of 10-20% around the announcement, with larger declines for fraud-related and revenue-related restatements.</p>

<p><strong>Securities litigation.</strong> Class action lawsuits filed by investors who purchased shares during the period when the financial statements were misstated. Settlements can reach hundreds of millions or billions of dollars.</p>

<p><strong>SEC investigation.</strong> The SEC often opens a formal investigation following material restatements, particularly when fraud is suspected.</p>

<p><strong>Clawback provisions.</strong> Under Dodd-Frank mandatory clawback rules, executive incentive compensation received during the three-year lookback period must be recovered.</p>

<p><strong>Management and auditor changes.</strong> CFO turnover rates spike following restatements. Companies frequently change auditors if the prior auditor missed the error.</p>

<h2 id="sec-filings">Restatements in SEC Filings</h2>

<ul>
<li><strong>8-K (Item 4.02):</strong> Non-reliance disclosure — the company announces that previously issued financial statements contain errors and should not be relied upon.</li>
<li><strong>10-K/A, 10-Q/A:</strong> Amended annual and quarterly reports with restated financial statements.</li>
<li><strong>NT 10-K, NT 10-Q:</strong> Notification of late filing if the restatement delays the timely filing of periodic reports.</li>
<li><strong>10-K:</strong> Little r revisions appear in the current annual report with revised prior-period figures and explanatory notes.</li>
</ul>

<p>Brefyr monitors 8-K filings (Item 4.02) and amended filings for all SEC-reporting companies, flagging restatement announcements as high-significance events that require immediate investor attention.</p>
`,
};
