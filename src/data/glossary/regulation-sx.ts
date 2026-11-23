import type { GlossaryTerm } from "../types";

export const termRegulationSX: GlossaryTerm = {
  slug: "regulation-sx",
  term: "Regulation S-X",
  title: "Regulation S-X — The Rules Governing Financial Statements in SEC Filings",
  shortDefinition:
    "Regulation S-X is the SEC regulation that prescribes the form, content, and requirements for financial statements filed with the SEC, including the balance sheet, income statement, cash flow statement, and notes.",
  metaDescription:
    "What is Regulation S-X? How it governs financial statements in SEC filings, key articles investors should know, the relationship with GAAP, and why Reg S-X matters for financial analysis.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["regulation-sx", "sec-regulation", "financial-statements", "accounting", "audit"],
  relatedSlugs: ["regulation-sk", "gaap", "10-k-filing", "audit-opinion", "sarbanes-oxley"],
  relatedTerms: ["regulation-sk", "gaap", "10-k-filing", "audit-opinion", "sarbanes-oxley"],
  faq: [
    {
      question: "How does Regulation S-X differ from GAAP?",
      answer:
        "GAAP (Generally Accepted Accounting Principles) defines how transactions are recorded and measured — revenue recognition, asset valuation, lease accounting, etc. Regulation S-X defines how financial statements must be presented in SEC filings — which statements are required, how many years of comparative data, what line items must appear, and what notes must accompany the statements. Think of GAAP as the accounting rules and Reg S-X as the presentation and filing rules. A company follows GAAP to prepare its financial statements and follows Reg S-X to format and file them with the SEC.",
    },
    {
      question: "Does Regulation S-X apply to all SEC filings?",
      answer:
        "Reg S-X applies to any SEC filing that includes financial statements: annual reports (10-K), quarterly reports (10-Q), registration statements (S-1, S-3, S-4), proxy statements with financial data, and certain other filings. It does not apply to 8-K filings (which generally do not include full financial statements) or to narrative-only filings. Different types of registrants (commercial companies, banks, insurance companies, investment companies) have specific articles within Reg S-X that apply to their unique financial statement requirements.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Regulation S-X is the SEC regulation that governs the form, content, and requirements for financial statements included in filings with the Securities and Exchange Commission. While companies follow Generally Accepted Accounting Principles (GAAP) to measure and record their financial transactions, they follow Regulation S-X to present and file those financial statements with the SEC. Reg S-X specifies which financial statements must be filed, how many years of comparative data are required, what line items must be presented, the requirements for the auditor's report, and the rules for interim (quarterly) financial statements.</p>

<h2 id="key-articles">Key Articles of Regulation S-X</h2>

<p><strong>Article 1 — Application.</strong> Defines the scope and applicability of Reg S-X. It applies to all financial statements required to be filed as part of registration statements, annual reports, and other SEC filings.</p>

<p><strong>Article 2 — Qualifications and Reports of Accountants.</strong> Specifies the independence requirements for auditors, the form and content of the auditor's report, and when accountant's reports are required. Auditor independence is a cornerstone of financial reporting integrity — the auditor must have no financial interest in or business relationship with the client that could compromise objectivity.</p>

<p><strong>Article 3 — General Instructions for Financial Statements.</strong> Specifies which financial statements must be filed (balance sheet, income statement, statement of changes in equity, cash flow statement), how many years of data are required (two years for balance sheets, three years for income statements and cash flows in annual filings), and materiality thresholds for combining line items.</p>

<p><strong>Article 3A — Consolidated and Combined Financial Statements.</strong> Provides rules for when and how subsidiaries must be consolidated in the parent's financial statements. The general rule is that a majority-owned subsidiary must be consolidated, with exceptions for certain financial entities.</p>

<p><strong>Article 4 — Rules of General Application.</strong> Contains detailed instructions on the form and content of specific line items, including requirements for related-party disclosures, intercompany transactions, and the basis for presenting financial information.</p>

<p><strong>Article 5 — Commercial and Industrial Companies.</strong> The article most relevant to typical public companies. Specifies the line items required on the balance sheet and income statement for non-financial companies, including current assets, property and equipment, revenue, cost of goods sold, and operating expenses.</p>

<p><strong>Article 10 — Interim Financial Statements.</strong> Governs the requirements for quarterly financial statements filed in 10-Q reports. Interim statements may be condensed (less detail than annual statements) and are reviewed but not fully audited by the independent accountant.</p>

<p><strong>Article 11 — Pro Forma Financial Information.</strong> Specifies when and how companies must present pro forma financial statements — hypothetical financial data showing the effect of a transaction (such as an acquisition) as if it had occurred at an earlier date. Pro forma requirements are triggered by significant acquisitions, dispositions, and other transformative transactions.</p>

<h2 id="practical-impact">Practical Impact for Investors</h2>

<p>Regulation S-X ensures that financial statements filed with the SEC follow a consistent format, making cross-company comparisons possible. When you compare Apple's income statement to Microsoft's, both follow the same Reg S-X presentation requirements, supplemented by GAAP accounting standards. This standardization is what makes fundamental analysis across thousands of companies feasible.</p>

<p>The regulation also sets minimum disclosure thresholds. If a line item exceeds a specified percentage of total assets, revenue, or another benchmark, it must be separately presented rather than bundled into an "other" category. This prevents companies from hiding significant items in aggregated line items.</p>

<h2 id="relationship-with-gaap">Relationship with GAAP and IFRS</h2>

<p>Regulation S-X works alongside GAAP — it does not replace it. GAAP defines how to measure revenue, expense, assets, and liabilities. Reg S-X defines how to present those measured amounts in an SEC filing. For foreign private issuers, the SEC accepts financial statements prepared under International Financial Reporting Standards (IFRS) as issued by the IASB, without reconciliation to U.S. GAAP — a significant accommodation for international companies listing in the United States.</p>

<h2 id="sec-filings">Regulation S-X in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> Annual financial statements prepared in full compliance with Reg S-X, including auditor's report.</li>
<li><strong>10-Q:</strong> Interim condensed financial statements under Article 10 of Reg S-X, with accountant's review report.</li>
<li><strong>S-1:</strong> IPO registration statements include financial statements prepared under both Reg S-X and GAAP.</li>
<li><strong>S-4:</strong> Merger registration statements include pro forma financial information under Article 11.</li>
</ul>

<p>Brefyr processes financial statements from all SEC filings, leveraging the standardized format required by Regulation S-X to extract, compare, and analyze financial data across 7,600+ companies.</p>
`,
};
