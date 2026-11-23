import type { GlossaryTerm } from "../types";

export const termGaap: GlossaryTerm = {
  slug: "gaap",
  term: "Generally Accepted Accounting Principles (GAAP)",
  title: "GAAP — The Accounting Rulebook Behind Every U.S. Public Company's Financial Statements",
  shortDefinition:
    "Generally Accepted Accounting Principles (GAAP) are the standardized set of accounting rules, standards, and procedures established by the Financial Accounting Standards Board (FASB) that all U.S. public companies must follow when preparing their financial statements.",
  metaDescription:
    "What is GAAP? How U.S. accounting standards work, who sets them, key principles investors should know, the difference between GAAP and IFRS, and why GAAP matters for financial analysis.",
  wordCount: 950,
  category: "Accounting & Audit",
  tags: ["gaap", "accounting-standards", "fasb", "financial-statements", "reporting"],
  relatedSlugs: ["ifrs", "non-gaap-measures", "regulation-sx", "audit-opinion", "restatement"],
  relatedTerms: ["ifrs", "non-gaap-measures", "regulation-sx", "audit-opinion", "restatement"],
  faq: [
    {
      question: "Who sets GAAP standards?",
      answer:
        "The Financial Accounting Standards Board (FASB) is the independent, private-sector organization that establishes GAAP for U.S. public and private companies. The FASB issues Accounting Standards Updates (ASUs) that codify new rules into the Accounting Standards Codification (ASC) — the single authoritative source of U.S. GAAP. The SEC has statutory authority over financial reporting standards for public companies and has historically delegated standard-setting to the FASB while retaining oversight and the ability to issue its own guidance.",
    },
    {
      question: "Why do companies report non-GAAP measures if GAAP exists?",
      answer:
        "Many companies believe GAAP measures alone do not fully convey their operating performance. For example, GAAP requires expensing stock-based compensation, amortization of acquired intangibles, and certain restructuring charges that management may consider non-recurring or non-cash. Companies report non-GAAP measures (like adjusted EBITDA or adjusted earnings) to present what they view as a clearer picture of core operations. The SEC permits non-GAAP measures but requires that they be clearly labeled, reconciled to the nearest GAAP measure, and not given greater prominence than GAAP figures.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Generally Accepted Accounting Principles — universally known as GAAP — are the common set of accounting rules and standards that U.S. public companies must follow when preparing their financial statements. GAAP ensures that financial statements are prepared on a consistent, comparable basis, allowing investors to compare the financial performance of different companies with confidence that the same measurement rules apply. Without GAAP, every company could use its own accounting methods, making cross-company comparison impossible and financial analysis meaningless.</p>

<h2 id="core-principles">Core GAAP Principles</h2>

<p><strong>Accrual basis.</strong> Revenue is recognized when earned (not when cash is received) and expenses are recognized when incurred (not when paid). This matching principle pairs revenue with the costs that generated it in the same period, providing a more accurate picture of economic activity than cash-basis accounting.</p>

<p><strong>Going concern.</strong> Financial statements are prepared assuming the company will continue operating indefinitely — assets are valued at cost or fair value, not liquidation value. If this assumption is in doubt, the auditor issues a going concern warning.</p>

<p><strong>Consistency.</strong> Companies must apply the same accounting methods from period to period. If a method changes, the company must disclose the change, justify it, and in many cases restate prior periods for comparability.</p>

<p><strong>Materiality.</strong> GAAP requires disclosure of information that would influence a reasonable investor's decisions. Immaterial items can be aggregated or omitted. This principle prevents trivial details from obscuring important information.</p>

<p><strong>Conservatism.</strong> When uncertainty exists, GAAP favors the approach that results in lower asset values and higher liabilities — recognizing losses when probable but gains only when realized. This asymmetry protects investors from overly optimistic financial statements.</p>

<p><strong>Full disclosure.</strong> Financial statements must include all information necessary for an informed reader to understand the company's financial position. The notes to financial statements — often 50-100 pages in a 10-K — are where much of this detailed disclosure resides.</p>

<h2 id="key-standards">Key GAAP Standards Investors Encounter</h2>

<p><strong>ASC 606 — Revenue Recognition.</strong> The revenue standard that governs when and how companies recognize revenue. It replaced a patchwork of industry-specific rules with a single five-step framework applicable to all industries. Revenue recognition is the most common area of financial statement manipulation and restatement.</p>

<p><strong>ASC 842 — Leases.</strong> Requires companies to recognize most leases on the balance sheet as right-of-use assets and lease liabilities. Before this standard, operating leases were off-balance-sheet, hiding billions of dollars of obligations.</p>

<p><strong>ASC 350 — Intangibles and Goodwill.</strong> Governs accounting for goodwill and intangible assets from acquisitions, including annual impairment testing. Goodwill impairment charges can be billions of dollars and signal that an acquisition did not deliver expected value.</p>

<p><strong>ASC 718 — Stock Compensation.</strong> Requires companies to expense the fair value of stock options and restricted stock units over the vesting period. This standard brought stock-based compensation onto the income statement, significantly increasing reported expenses for technology companies.</p>

<p><strong>ASC 740 — Income Taxes.</strong> Governs accounting for current and deferred tax assets and liabilities. Deferred tax accounting is complex and can create significant balance sheet items that investors must understand.</p>

<h2 id="gaap-hierarchy">The GAAP Hierarchy</h2>

<p>Not all GAAP guidance carries equal weight. The hierarchy (from most to least authoritative) is: FASB Accounting Standards Codification (ASC), SEC rules and interpretive releases, AICPA guidance cleared by the FASB, and widely accepted industry practices. When a specific transaction is not addressed by the ASC, companies look to lower levels of the hierarchy or use analogies to existing standards.</p>

<h2 id="gaap-vs-ifrs">GAAP vs IFRS</h2>

<p>International Financial Reporting Standards (IFRS) are used by most countries outside the United States. While GAAP and IFRS share many principles, significant differences exist in areas like lease accounting, inventory valuation (GAAP allows LIFO; IFRS does not), development costs (IFRS capitalizes; GAAP expenses), and the degree of principles-based vs rules-based guidance. The SEC accepts IFRS financial statements from foreign private issuers without reconciliation to GAAP.</p>

<h2 id="sec-filings">GAAP in SEC Filings</h2>

<ul>
<li><strong>10-K and 10-Q:</strong> Financial statements must be prepared in accordance with GAAP. The first note to financial statements typically confirms GAAP compliance and describes significant accounting policies.</li>
<li><strong>Auditor's report:</strong> States that financial statements are presented fairly "in accordance with accounting principles generally accepted in the United States of America."</li>
<li><strong>Non-GAAP reconciliation:</strong> When companies present non-GAAP measures, they must include a reconciliation to the nearest GAAP figure.</li>
</ul>

<p>Brefyr processes GAAP financial statements from 10-K and 10-Q filings for 7,600+ companies, extracting standardized financial data that enables consistent cross-company comparison — the exact purpose GAAP was designed to serve.</p>
`,
};
