import type { GlossaryTerm } from "../types";

export const termForm20F: GlossaryTerm = {
  slug: "form-20f",
  term: "Form 20-F",
  title: "Form 20-F — Foreign Private Issuer Annual Report Explained",
  shortDefinition:
    "Form 20-F is the annual report that foreign private issuers listed on U.S. exchanges must file with the SEC, serving as the international equivalent of the 10-K with additional disclosures about home-country practices.",
  metaDescription:
    "What is a 20-F filing? Learn how foreign companies report to the SEC, what the 20-F contains, and how it compares to the domestic 10-K.",
  wordCount: 2100,
  category: "SEC Filings",
  tags: ["sec-filing", "foreign-private-issuer", "annual-report", "edgar", "international"],
  relatedSlugs: ["10-k-filing", "form-6k", "sec-edgar", "going-concern", "revenue-recognition"],
  relatedTerms: ["10-k-filing", "form-6k", "sec-edgar", "going-concern", "revenue-recognition"],
  faq: [
    {
      question: "What is a foreign private issuer?",
      answer:
        "A foreign private issuer (FPI) is a non-U.S. company whose securities are registered and traded in the United States, but which meets specific criteria under SEC rules. To qualify, the company must be incorporated outside the U.S. and either have less than 50% of its outstanding voting securities held by U.S. residents, or — if more than 50% are U.S.-held — the majority of its executive officers and directors must not be U.S. citizens, more than 50% of its assets must be outside the U.S., and its business must be administered principally outside the U.S. Major FPIs include companies like Toyota, Alibaba, SAP, and BHP.",
    },
    {
      question: "When is the 20-F due?",
      answer:
        "Foreign private issuers must file the 20-F within four months of their fiscal year-end. For companies with a December 31 fiscal year, the deadline is April 30. This is significantly more generous than the 60-to-90-day deadline for domestic 10-K filers, reflecting the additional complexity of reconciling non-U.S. accounting standards with SEC requirements. The longer deadline also means investors must wait longer for audited financial data from foreign issuers compared to domestic companies.",
    },
    {
      question: "Can a 20-F use IFRS instead of U.S. GAAP?",
      answer:
        "Yes. Foreign private issuers may prepare their financial statements under IFRS as issued by the International Accounting Standards Board, U.S. GAAP, or their home-country accounting standards. If they use IFRS as issued by the IASB, no reconciliation to U.S. GAAP is required. If they use home-country standards, they must include a reconciliation to U.S. GAAP. This flexibility means investors reading a 20-F need to check which accounting framework is being used — IFRS and U.S. GAAP can produce materially different results for the same business.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 20-F is how the global economy meets U.S. securities regulation. When a company based in Germany, Japan, Brazil, or any other country outside the United States lists its shares on a U.S. exchange — or registers a class of securities with the SEC — it enters the American disclosure regime through the 20-F. This annual report is the foreign private issuer's equivalent of the 10-K, providing U.S. investors with the financial and operational information they need to evaluate a company that operates under different laws, accounting standards, and corporate governance norms.</p>

<h2 id="dual-purpose">The Dual Purpose of the 20-F</h2>

<p>The 20-F serves two distinct functions depending on the context. For companies that are registering securities for the first time — either in connection with a U.S. listing or as a reporting obligation — the 20-F acts as a registration statement, similar to what an S-1 provides for a domestic IPO company. For companies that are already reporting, the 20-F is their annual report, filed each year with updated financial statements and business disclosures.</p>

<p>This dual-use design reflects the SEC's approach to foreign issuers: rather than creating entirely separate forms for registration and ongoing reporting, the 20-F covers both. The practical effect is that a company's first 20-F tends to be significantly longer and more detailed than subsequent annual filings, as it must include the full registration-level disclosures plus the annual report content.</p>

<h2 id="what-20f-contains">What the 20-F Contains</h2>

<p>The 20-F is organized into four parts with 19 items. While the structure differs from the 10-K, the substance is comparable — with additional disclosures reflecting the cross-border nature of the issuer.</p>

<h3>Part I — Business and Risk</h3>

<p><strong>Key information.</strong> The company provides selected financial data, capitalization and indebtedness tables, and an explanation of reasons for the offer and use of proceeds (for registration statements). Risk factors specific to the company's business, its industry, and the countries in which it operates are disclosed here — including political risks, currency risks, and regulatory risks that domestic companies typically do not face.</p>

<p><strong>Company information.</strong> Detailed descriptions of the business, organizational structure, property and equipment, and any unresolved SEC staff comments. This section parallels the 10-K's business description but often includes additional context about the regulatory environment in the company's home country.</p>

<h3>Part II — Financial Information</h3>

<p><strong>Operating and financial review.</strong> This is the 20-F's version of MD&A. Management discusses the company's results of operations, liquidity and capital resources, and known trends and uncertainties. For investors accustomed to reading 10-K MD&A sections, the 20-F's operating review serves the same purpose — explaining what happened and why.</p>

<p><strong>Financial statements.</strong> Audited financial statements for the two most recent fiscal years, prepared under IFRS (as issued by the IASB), U.S. GAAP, or home-country standards with a U.S. GAAP reconciliation. The choice of accounting framework is one of the most important things to check when reading a 20-F — IFRS and U.S. GAAP differ on revenue recognition, lease accounting, inventory valuation, and other areas that can materially affect reported results.</p>

<h3>Part III — Governance and Ownership</h3>

<p><strong>Directors and senior management.</strong> Biographical information about directors and officers, their compensation, board practices, and the company's audit committee. This section often highlights differences between the company's home-country governance practices and U.S. standards — many foreign issuers are exempt from certain NYSE or NASDAQ governance requirements.</p>

<p><strong>Major shareholders.</strong> Disclosure of significant shareholders (typically 5% or more), related-party transactions, and the company's share capital structure. For companies with controlling shareholders — common among non-U.S. issuers — this section reveals the ownership dynamics that influence corporate decisions.</p>

<h3>Part IV — Financial Statements and Exhibits</h3>

<p>The full audited financial statements, the auditor's report, and all exhibits (articles of incorporation, material contracts, certifications) are included here. The Sarbanes-Oxley certifications required of domestic issuers also apply to 20-F filers — the CEO and CFO must personally certify the accuracy of the report.</p>

<h2 id="fpi-advantages">Advantages of Foreign Private Issuer Status</h2>

<p>Foreign private issuers receive several accommodations from the SEC that domestic companies do not enjoy. They are not required to file quarterly 10-Q reports — instead, they file interim reports on Form 6-K when material events occur. They are exempt from the SEC's proxy rules, meaning they do not need to file proxy statements on Schedule 14A. Their insiders are exempt from Section 16 reporting (Form 3, Form 4, Form 5) and the short-swing profit disgorgement rules of Section 16(b).</p>

<p>These exemptions mean that investors in foreign private issuers receive less frequent and less granular information than investors in domestic companies. There are no quarterly earnings reports, no proxy-mandated executive compensation tables, and no real-time insider trading disclosures. The 20-F, filed once a year, and the 6-K, filed as needed, are the primary disclosure vehicles.</p>

<h2 id="accounting-frameworks">Navigating Different Accounting Frameworks</h2>

<p>The accounting framework question is not academic. Under IFRS, companies can revalue property upward on the balance sheet — U.S. GAAP does not permit this. IFRS permits LIFO inventory accounting in limited circumstances while historically handling development costs differently. Revenue recognition, while converging under IFRS 15 and ASC 606, still produces different results in edge cases.</p>

<p>Investors comparing a 20-F filer (using IFRS) to a domestic 10-K filer (using U.S. GAAP) need to understand these differences to make apples-to-apples comparisons. The notes to the financial statements usually explain the significant accounting policies, and sophisticated investors read these notes before looking at any reported numbers.</p>

<h2 id="loss-of-fpi-status">What Happens When a Company Loses FPI Status</h2>

<p>If a foreign company no longer qualifies as a foreign private issuer — typically because U.S. shareholders now hold more than 50% of its voting shares and it fails the secondary tests — the company must transition to domestic reporting. This means filing 10-Ks, 10-Qs, proxy statements, and Section 16 insider reports. The transition typically occurs on the first day of the fiscal year following the loss of FPI status and significantly increases the company's disclosure obligations.</p>

<h2 id="where-to-find-20f">Where to Find 20-F Filings</h2>

<p>All 20-F filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=20-F&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, foreign private issuers are tracked alongside domestic companies, with AI-generated summaries that account for the differences in reporting structure and accounting standards — ensuring investors get comparable insights regardless of where a company is headquartered.</p>
`,
};
