import type { GlossaryTerm } from "../types";

export const termForm5: GlossaryTerm = {
  slug: "form-5",
  term: "Form 5",
  title: "Form 5 — Annual Insider Ownership Statement Explained",
  shortDefinition:
    "Form 5 is an annual SEC filing that company insiders use to report any securities transactions from the past fiscal year that were not previously disclosed on Form 4, including exempt transactions and late reports.",
  metaDescription:
    "What is SEC Form 5? Learn how the annual insider ownership catch-all filing works, what it covers, and why investors should monitor it.",
  wordCount: 1900,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-ownership", "annual-filing", "edgar", "insider-trading"],
  relatedSlugs: ["form-3", "form-4", "insider-trading", "beneficial-owner", "10-k-filing"],
  relatedTerms: ["form-3", "form-4", "insider-trading", "beneficial-owner", "10-k-filing"],
  faq: [
    {
      question: "When is Form 5 due?",
      answer:
        "Form 5 must be filed within 45 calendar days of the company's fiscal year-end. For companies with a December 31 fiscal year, that means the deadline is February 14. If an insider has no transactions to report — because all transactions were already reported on Form 4 during the year — they may be exempt from filing Form 5, though many companies require their insiders to file a Form 5 or a written representation confirming no filing is due.",
    },
    {
      question: "What types of transactions appear on Form 5 instead of Form 4?",
      answer:
        "Certain transactions are exempt from the two-business-day Form 4 reporting requirement and may instead be reported annually on Form 5. These include small acquisitions (under $10,000 in a six-month period under old rules), gifts of securities, transactions pursuant to employee benefit plans that meet specific SEC exemptions, and inheritances. Additionally, any transactions that should have been reported on Form 4 but were missed or filed late may appear on Form 5 as catch-up disclosures.",
    },
    {
      question: "Is a Form 5 filing a red flag?",
      answer:
        "Not necessarily. Many Form 5 filings contain routine exempt transactions like small gifts or employee benefit plan transactions. However, a Form 5 that reveals large transactions that should have been reported on Form 4 suggests sloppy compliance or deliberate delay. If a CEO sold a large block of shares and the transaction only appears on Form 5 months later, that raises questions about why the two-business-day Form 4 deadline was missed — and whether the delayed disclosure affected the market's ability to price the stock accurately.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 5 is the annual safety net in the SEC's insider ownership disclosure system. Filed under Section 16(a) of the Securities Exchange Act of 1934, it captures any insider transactions that slipped through the more frequent Form 4 reporting process — either because the transaction was exempt from Form 4 requirements or because the insider failed to file Form 4 on time. For investors tracking insider activity, Form 5 is the year-end reconciliation that ensures no transaction goes permanently unreported.</p>

<h2 id="role-in-section16">Role in the Section 16 Filing System</h2>

<p>The Section 16 filing system works in three layers. Form 3 establishes an insider's initial holdings. Form 4 reports changes within two business days of each transaction. Form 5 is the annual catch-all that fills in any gaps. Together, these three forms are designed to create a complete, continuous public record of every insider's ownership position and trading activity.</p>

<p>In practice, the increasing adoption of electronic filing and corporate compliance programs means that most insider transactions are reported on Form 4 in real time. Form 5 has become less prominent as a primary disclosure vehicle. However, it retains its importance as the mechanism for reporting exempt transactions and as a compliance backstop.</p>

<h2 id="exempt-transactions">Transactions Reported on Form 5</h2>

<p>Several categories of transactions may be deferred from Form 4 and reported instead on Form 5:</p>

<p><strong>Gifts of securities.</strong> When an insider gives shares to a family member, charity, or trust, the transaction may be eligible for deferred reporting on Form 5 rather than the two-business-day Form 4 deadline. However, the SEC has tightened its view on this — many practitioners now recommend reporting gifts on Form 4 voluntarily to avoid any appearance of delayed disclosure.</p>

<p><strong>Small acquisitions.</strong> Certain acquisitions of securities that do not exceed specified thresholds under SEC Rule 16a-6 may qualify for deferred reporting. These involve minor accumulations through employee benefit plans or dividend reinvestment programs.</p>

<p><strong>Inheritances.</strong> Securities acquired through inheritance or bequest are exempt from Form 4 reporting and are reported on Form 5.</p>

<p><strong>Transactions under employee benefit plans.</strong> Some transactions pursuant to tax-qualified retirement plans, employee stock purchase plans, and similar benefit arrangements are eligible for deferred Form 5 reporting under SEC Rule 16b-3, provided specific conditions are met.</p>

<p><strong>Late Form 4 transactions.</strong> If an insider failed to file a Form 4 within the required two-business-day window, the missed transaction should appear on the next Form 5. This catch-up function is what makes Form 5 a compliance backstop — it surfaces transactions that the market should have learned about earlier but did not.</p>

<h2 id="what-form5-contains">What Form 5 Contains</h2>

<p>The format of Form 5 closely mirrors Form 4. It contains two tables:</p>

<p><strong>Table I: Non-derivative securities.</strong> Reports transactions in common stock, preferred stock, and other non-derivative equity securities. Each row shows the date of the transaction, the type (purchase, sale, gift, etc.), the number of shares, the price, and the insider's resulting ownership.</p>

<p><strong>Table II: Derivative securities.</strong> Reports transactions in options, warrants, convertible securities, and other derivatives. Each row shows similar transaction details plus the derivative's exercise price and expiration date.</p>

<p>Each transaction is coded to indicate whether it was exempt from Form 4 reporting (and which exemption applied) or whether it represents a late Form 4 disclosure. These codes help investors distinguish between routine exempt transactions and compliance failures.</p>

<h2 id="late-filing-disclosure">Late Filing Disclosures</h2>

<p>Companies are required to disclose Form 5 delinquencies in their annual proxy statement (DEF 14A) under the heading "Delinquent Section 16(a) Reports." This section lists any officers, directors, or 10% owners who failed to file Form 3, Form 4, or Form 5 on time during the fiscal year. Many investors scan this section as a quick governance check — persistent late filers suggest either careless management or inadequate corporate legal resources.</p>

<p>The SEC can also bring enforcement actions against insiders who chronically fail to file or who fail to file altogether. While enforcement for late Section 16 filings is relatively rare compared to other securities law violations, the risk is not zero — and the reputational cost of an enforcement action far exceeds the cost of timely compliance.</p>

<h2 id="investor-analysis">How Investors Use Form 5</h2>

<p>Form 5 is most useful as a reconciliation tool. At year-end, an investor who has been tracking a company's Form 4 filings throughout the year can review the Form 5 to check for any transactions that were not previously disclosed. If the Form 5 reveals a large sale or acquisition that was not reported on a timely Form 4, that is a governance concern worth noting.</p>

<p>Form 5 is also the primary source for tracking insider gifts. While gifts of stock do not involve a sale, they can be meaningful. A CEO gifting a large block of shares to a family trust may be engaging in estate planning — or may be reducing their direct ownership in anticipation of future stock price declines. The context matters, and Form 5 provides the data needed to ask the right questions.</p>

<p>For small-cap investors, Form 5 filings occasionally reveal transactions that the market missed entirely. If an insider at a thinly traded company made a significant purchase that was exempt from Form 4 and only appears on Form 5, that is actionable information — the insider was buying, and nobody knew about it for months.</p>

<h2 id="declining-relevance">The Declining Relevance of Form 5</h2>

<p>As corporate compliance has improved and electronic filing has made Form 4 easier to submit quickly, Form 5 has become less important as a primary disclosure vehicle. Many insiders now report all transactions — including those technically eligible for Form 5 deferral — on Form 4 voluntarily. Some companies have adopted policies requiring insiders to file Form 4 for all transactions, eliminating the need for Form 5 entirely. When this happens, the insider files a written representation that no Form 5 is required, and the company discloses this in its proxy statement.</p>

<h2 id="where-to-find-form5">Where to Find Form 5 Filings</h2>

<p>All Form 5 filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=5&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, Form 5 data is integrated into the insider activity timeline alongside Form 3 and Form 4 filings, ensuring investors see the complete picture of insider ownership changes — including transactions that only surface at year-end.</p>
`,
};
