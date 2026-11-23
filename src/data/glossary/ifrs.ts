import type { GlossaryTerm } from "../types";

export const termIfrs: GlossaryTerm = {
  slug: "ifrs",
  term: "International Financial Reporting Standards (IFRS)",
  title: "IFRS — The Global Accounting Standards Used by Companies in 140+ Countries",
  shortDefinition:
    "International Financial Reporting Standards (IFRS) are accounting standards issued by the International Accounting Standards Board (IASB) and used as the primary financial reporting framework in over 140 countries, providing a common global language for financial statements.",
  metaDescription:
    "What is IFRS? How international accounting standards compare to U.S. GAAP, key differences investors should know, and how IFRS-reporting companies file with the SEC.",
  wordCount: 850,
  category: "Accounting & Audit",
  tags: ["ifrs", "accounting-standards", "iasb", "international-reporting", "gaap-comparison"],
  relatedSlugs: ["gaap", "non-gaap-measures", "regulation-sx", "audit-opinion"],
  relatedTerms: ["gaap", "non-gaap-measures", "regulation-sx", "audit-opinion"],
  faq: [
    {
      question: "Can foreign companies use IFRS when filing with the SEC?",
      answer:
        "Yes. Foreign private issuers (FPIs) can file financial statements with the SEC prepared under IFRS as issued by the IASB, without reconciliation to U.S. GAAP. This accommodation, adopted by the SEC in 2007, allows international companies to list in the U.S. and access American capital markets without maintaining a parallel set of GAAP books. U.S. domestic companies, however, must still use U.S. GAAP — the SEC has not adopted IFRS for domestic filers despite decades of convergence discussions.",
    },
    {
      question: "What are the biggest differences between IFRS and GAAP that affect investors?",
      answer:
        "Key differences include: (1) Inventory — GAAP allows LIFO (last-in, first-out) valuation; IFRS prohibits it. LIFO reduces taxable income during inflationary periods, so LIFO-using companies report lower profits. (2) Development costs — IFRS requires capitalization of development costs meeting certain criteria; GAAP expenses most R&D. Tech companies may appear more profitable under IFRS. (3) Impairment — IFRS allows reversal of asset impairments (except goodwill) if conditions improve; GAAP prohibits reversals. (4) Principles vs rules — IFRS is more principles-based, allowing more judgment; GAAP is more rules-based with more specific guidance.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>International Financial Reporting Standards (IFRS) are the accounting standards used by public companies in most countries outside the United States. Issued by the International Accounting Standards Board (IASB), based in London, IFRS provides a common framework for financial reporting that enables investors to compare companies across different countries. Over 140 jurisdictions require or permit the use of IFRS, including the European Union, United Kingdom, Australia, Canada, Japan (optional), and most of Asia, Africa, and Latin America. The United States remains the most prominent holdout — U.S. domestic companies use GAAP, though foreign companies listing in the U.S. can file IFRS statements with the SEC.</p>

<h2 id="principles-vs-rules">Principles-Based vs Rules-Based</h2>

<p>The most fundamental philosophical difference between IFRS and GAAP is the degree of specificity. IFRS is principles-based: it establishes broad principles and relies on professional judgment to apply them to specific situations. GAAP is rules-based: it provides detailed, specific guidance for many types of transactions, with bright-line tests and quantitative thresholds. The IFRS approach allows more flexibility but also more variability; the GAAP approach provides more consistency but can lead to structuring transactions to achieve specific accounting outcomes (form over substance).</p>

<h2 id="key-differences">Key Differences for Investors</h2>

<p><strong>Inventory valuation.</strong> GAAP permits LIFO (last-in, first-out), which values inventory using the most recent costs and results in lower reported profits during inflation. IFRS prohibits LIFO. Companies that report under GAAP using LIFO may show lower inventory values and lower profits than they would under IFRS.</p>

<p><strong>Research and development.</strong> Under GAAP, almost all R&D costs are expensed as incurred. Under IFRS, research costs are expensed but development costs meeting specific criteria (technical feasibility, intent to complete, ability to use or sell, etc.) must be capitalized and amortized. This means IFRS-reporting companies may show higher reported assets and higher short-term profits for the same R&D spending.</p>

<p><strong>Asset impairment.</strong> GAAP uses a two-step process: test for recoverability (undiscounted cash flows), then measure impairment at fair value. Once impaired, the write-down is permanent — no reversal is allowed (except for goodwill testing changes). IFRS uses a one-step approach comparing carrying amount to recoverable amount (higher of fair value less costs to sell and value in use), and allows reversal of prior impairments (except goodwill) if conditions improve.</p>

<p><strong>Revenue recognition.</strong> Both GAAP (ASC 606) and IFRS (IFRS 15) now use the same five-step model for revenue recognition, as this was a successful convergence project. However, interpretive differences can still arise in specific situations.</p>

<p><strong>Lease accounting.</strong> Both frameworks now require most leases on the balance sheet, but GAAP (ASC 842) distinguishes between operating and finance leases on the income statement, while IFRS (IFRS 16) treats virtually all leases as finance leases for the lessee, resulting in higher depreciation and interest expense (instead of a single operating lease expense line).</p>

<h2 id="convergence">The Convergence Effort</h2>

<p>For over two decades, the FASB and IASB worked on convergence projects to align GAAP and IFRS. These efforts produced shared standards for revenue recognition and leases, among others. However, full convergence was never achieved, and the SEC's consideration of adopting IFRS for U.S. companies has stalled. The practical reality is that two distinct frameworks will coexist for the foreseeable future, and investors analyzing cross-border companies must understand the differences.</p>

<h2 id="xbrl-and-comparability">XBRL and Cross-Framework Comparison</h2>

<p>Both GAAP and IFRS filings are tagged using XBRL (eXtensible Business Reporting Language), which allows machine-readable extraction of financial data. However, the GAAP and IFRS taxonomies use different element names and structures, complicating automated cross-framework comparison. Investors using financial data aggregators should verify whether the data has been normalized across frameworks.</p>

<h2 id="sec-filings">IFRS in SEC Filings</h2>

<ul>
<li><strong>20-F:</strong> Foreign private issuers file annual reports on Form 20-F, which may use IFRS as the reporting framework.</li>
<li><strong>6-K:</strong> Interim reports from foreign private issuers, often prepared under IFRS.</li>
<li><strong>F-1:</strong> Registration statement for foreign private issuers, using IFRS financial statements.</li>
<li><strong>Auditor's report:</strong> States compliance with "International Financial Reporting Standards as issued by the IASB."</li>
</ul>

<p>Brefyr processes financial statements filed under both GAAP and IFRS frameworks, enabling investors to analyze the full universe of SEC-reporting companies regardless of which accounting standard they follow.</p>
`,
};
