import type { LearnArticle } from "../types";

export const articleSecFilingTypes: LearnArticle = {
  slug: "sec-filing-types-explained",
  pillar: "sec-filings",
  title: "SEC Filing Types Explained: Every Form Investors Need to Know",
  metaDescription:
    "A complete reference guide to SEC filing types — 10-K, 10-Q, 8-K, Form 4, DEF 14A, S-1, 13F, SC 13D/G, and more. When each is filed, what it contains, and why investors care.",
  readingTime: 15,
  difficulty: "beginner",
  wordCount: 3200,
  category: "Getting Started",
  tags: ["sec-filings", "filing-types", "reference", "beginner", "edgar"],
  relatedSlugs: ["how-to-read-sec-filings", "how-to-use-edgar"],
  faq: [
    {
      question: "How many SEC filing types exist?",
      answer:
        "The SEC's EDGAR system accepts over 150 different form types. However, most investors only need to know 8-10 of them. The core filings — 10-K, 10-Q, 8-K, Form 4, DEF 14A, S-1, 13F-HR, and SC 13D/13G — account for the vast majority of investment-relevant disclosures.",
    },
    {
      question: "Which SEC filing is most important for investors?",
      answer:
        "The 10-K (annual report) is the single most important filing because it contains the most comprehensive information: audited financial statements, full business description, risk factors, management discussion, and governance disclosures. If you can only read one filing per company per year, read the 10-K.",
    },
    {
      question: "What is the difference between 'filed' and 'furnished' with the SEC?",
      answer:
        "When a document is 'filed' with the SEC, the company assumes full legal liability for its contents under the Securities Exchange Act. When a document is 'furnished' (like an earnings press release under Item 2.02 of an 8-K), the company faces somewhat reduced liability — it's providing the information to the public but with less formal legal exposure. This distinction matters because companies are more careful with filed documents than furnished ones.",
    },
    {
      question: "Can I get alerts when a specific company files with the SEC?",
      answer:
        "EDGAR offers basic RSS feeds per company. Brefyr goes further — processing each filing with AI to generate summaries and significance scores, then sending email alerts filtered by filing type, significance level, or insider activity based on your custom rules.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>The SEC's filing system is a taxonomy of corporate disclosure. Each form type serves a specific purpose — annual financials, quarterly updates, material events, insider transactions, institutional holdings, beneficial ownership, and registration for new securities. Knowing the form types and what triggers each one is the foundation of filing-based investment research.</p>

<p>This reference covers every filing type that matters for equity investors, organized from most to least frequently encountered.</p>

<h2 id="periodic-filings">Periodic Filings: The Regular Reports</h2>

<h3>10-K — Annual Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Once per year, after fiscal year end</td></tr>
<tr><td><strong>Deadline</strong></td><td>60 days (large accelerated), 75 days (accelerated), 90 days (others)</td></tr>
<tr><td><strong>Audited?</strong></td><td>Yes — full external audit</td></tr>
<tr><td><strong>Typical length</strong></td><td>80-250 pages</td></tr>
</tbody>
</table>

<p>The 10-K is the most comprehensive filing. It contains four parts covering the business description, risk factors, selected financial data, management's discussion and analysis (MD&A), audited financial statements, governance information, and executive compensation (often by reference to the proxy statement).</p>

<p>Every investment thesis for a U.S. public company should start with the most recent 10-K. If you haven't read it, you're operating on secondhand information.</p>

<h3>10-Q — Quarterly Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Three times per year (Q1, Q2, Q3)</td></tr>
<tr><td><strong>Deadline</strong></td><td>40 days (large accelerated), 45 days (others)</td></tr>
<tr><td><strong>Audited?</strong></td><td>No — reviewed, not audited</td></tr>
<tr><td><strong>Typical length</strong></td><td>30-80 pages</td></tr>
</tbody>
</table>

<p>A condensed update between annual reports. Contains unaudited quarterly financials, a shorter MD&A, and updates to risk factors and legal proceedings. The fourth quarter is covered by the 10-K rather than a separate 10-Q.</p>

<p>Use the 10-Q to track quarter-over-quarter trends: Is revenue accelerating? Are margins expanding or compressing? Has management's tone changed?</p>

<h3>20-F — Annual Report (Foreign Private Issuers)</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Once per year</td></tr>
<tr><td><strong>Who files</strong></td><td>Non-U.S. companies listed on U.S. exchanges</td></tr>
<tr><td><strong>Deadline</strong></td><td>Four months after fiscal year end</td></tr>
</tbody>
</table>

<p>The equivalent of a 10-K for foreign companies. Contains similar information but may follow IFRS instead of U.S. GAAP. Companies like Alibaba, Shopify (before domestication), and BHP file 20-Fs.</p>

<h2 id="event-driven-filings">Event-Driven Filings: Material Developments</h2>

<h3>8-K — Current Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>As needed, within 4 business days of a triggering event</td></tr>
<tr><td><strong>Common triggers</strong></td><td>Acquisitions, CEO changes, earnings releases, bankruptcy, auditor changes</td></tr>
<tr><td><strong>Typical length</strong></td><td>1-10 pages (plus exhibits)</td></tr>
</tbody>
</table>

<p>The real-time disclosure mechanism. An 8-K is filed when something significant happens between regular filings. The SEC defines nine categories of reportable events (Items 1.01 through 8.01), each with a specific item number. The item number is your triage tool — Item 4.01 (auditor change) and Item 4.02 (restatement) demand immediate attention. Item 2.02 (earnings release) and Item 8.01 (other events) are usually lower urgency.</p>

<h3>6-K — Current Report (Foreign Private Issuers)</h3>

<p>The foreign equivalent of an 8-K. Non-U.S. companies listed in the U.S. use the 6-K to report material events, earnings releases, and other developments between 20-F filings.</p>

<h2 id="insider-filings">Insider and Ownership Filings</h2>

<h3>Form 3 — Initial Statement of Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>New officers, directors, and 10%+ shareholders</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 10 days of becoming an insider</td></tr>
</tbody>
</table>

<p>Establishes the insider's initial ownership position. Filed once when someone becomes a reporting person.</p>

<h3>Form 4 — Changes in Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Officers, directors, and 10%+ shareholders</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 2 business days of any transaction</td></tr>
</tbody>
</table>

<p>The most actionable insider filing. Every purchase, sale, option exercise, grant, and gift by an insider is disclosed here. Transaction codes (P = purchase, S = sale, M = option exercise) tell you the nature of the trade. Open-market purchases (P) by the CEO or CFO are among the strongest positive signals in public market investing.</p>

<h3>Form 5 — Annual Statement of Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Insiders who had transactions exempt from Form 4 reporting</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 45 days of fiscal year end</td></tr>
</tbody>
</table>

<p>A catch-all for transactions that weren't reported on Form 4 during the year — typically small gifts, inheritance transfers, and certain exempt transactions. Less informative than Form 4 for investment purposes.</p>

<h3>SC 13D — Beneficial Ownership (Activist)</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Anyone who acquires 5%+ of a company's shares with the intent to influence</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 10 business days of crossing the 5% threshold</td></tr>
</tbody>
</table>

<p>The activist investor's announcement. A SC 13D signals that someone has built a significant position and may push for changes — board seats, a sale of the company, strategic shifts, or management changes. The filing includes the investor's identity, the source of funds, the purpose of the acquisition, and any plans to change the company's governance or operations.</p>

<p>SC 13D filings from well-known activist investors (Carl Icahn, Elliott Management, Starboard Value) routinely move stock prices 5-15% on the filing date.</p>

<h3>SC 13G — Beneficial Ownership (Passive)</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Passive investors who cross the 5% ownership threshold</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 45 days of calendar year end (for passive investors)</td></tr>
</tbody>
</table>

<p>The passive version of SC 13D. Filed by investors who crossed 5% ownership but have no intention to influence the company — typically index funds, mutual funds, and pension funds. Less market-moving than SC 13D because it doesn't signal activist intent.</p>

<h3>13F-HR — Institutional Holdings</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Institutional investment managers with $100M+ in AUM</td></tr>
<tr><td><strong>Deadline</strong></td><td>Within 45 days of quarter end</td></tr>
</tbody>
</table>

<p>The hedge fund disclosure filing. Every institutional investor managing more than $100 million must report their U.S. equity holdings quarterly on Form 13F. This is how you track what Berkshire Hathaway, Bridgewater, Renaissance Technologies, and other major investors own.</p>

<p>Caveats: 13F filings are delayed (up to 45 days old), report long equity positions only (no shorts, options strategies may be partially visible), and cover U.S. exchange-listed securities only. The data shows where the money was, not necessarily where it is now.</p>

<h2 id="governance-filings">Governance Filings</h2>

<h3>DEF 14A — Definitive Proxy Statement</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Once per year, before the annual shareholders' meeting</td></tr>
<tr><td><strong>Deadline</strong></td><td>At least 40 days before the meeting date</td></tr>
<tr><td><strong>Typical length</strong></td><td>40-120 pages</td></tr>
</tbody>
</table>

<p>The governance filing. Contains executive compensation tables (the Summary Compensation Table showing CEO pay), director biographies, board committee composition, related party transactions, shareholder proposals, and voting procedures. If you care about how much the CEO makes, whether the board is independent, or what shareholders are proposing — read the proxy.</p>

<h2 id="registration-filings">Registration and Offering Filings</h2>

<h3>S-1 — Registration Statement (IPO)</h3>

<table>
<tbody>
<tr><td><strong>Who files</strong></td><td>Companies going public for the first time</td></tr>
<tr><td><strong>Contains</strong></td><td>Prospectus with full business description, financials, risk factors, use of proceeds</td></tr>
</tbody>
</table>

<p>The IPO filing. Before a company can sell shares to the public, it must register them with the SEC via an S-1. The filing contains everything a prospective investor needs to evaluate the offering: business description, financial statements (often 2-3 years of audited data), risk factors, management bios, ownership structure, planned use of IPO proceeds, and the offering price range.</p>

<p>S-1 filings are treasure troves of information because companies going public must disclose their full history, including details they might later summarize or omit in subsequent 10-Ks.</p>

<h3>S-3 — Shelf Registration</h3>

<p>A streamlined registration statement that allows companies to register securities for future issuance. Once an S-3 is effective, the company can issue shares at any time without filing a new registration statement. An S-3 filing doesn't mean the company will issue shares — it means they can. However, a surprise S-3 from a company that doesn't need capital raises questions about management's plans.</p>

<h2 id="other-filings">Other Notable Filings</h2>

<h3>NT 10-K / NT 10-Q — Notification of Late Filing</h3>
<p>Filed when a company can't meet its 10-K or 10-Q deadline. Grants a 15-day extension. A late filing is a mild yellow flag — it can indicate accounting complications, auditor disagreements, or staffing issues.</p>

<h3>Form 144 — Notice of Proposed Sale of Securities</h3>
<p>Filed when an insider intends to sell restricted or control securities under SEC Rule 144. The filing is a notice of intent, not confirmation that the sale occurred. Follow up with Form 4 to see the actual transaction.</p>

<h3>CORRESP — SEC Comment Letters</h3>
<p>The correspondence between the SEC's Division of Corporation Finance and the company about its filings. These letters reveal what the SEC questioned — often accounting treatments, disclosure completeness, or revenue recognition methods. Available on EDGAR and invaluable for understanding regulatory scrutiny of specific companies.</p>

<h2 id="quick-reference">Quick Reference Table</h2>

<table>
<thead><tr><th>Filing</th><th>Type</th><th>Frequency</th><th>Key Content</th></tr></thead>
<tbody>
<tr><td>10-K</td><td>Periodic</td><td>Annual</td><td>Full audited financials, business description, risks</td></tr>
<tr><td>10-Q</td><td>Periodic</td><td>Quarterly (x3)</td><td>Unaudited quarterly financials, condensed MD&A</td></tr>
<tr><td>8-K</td><td>Event</td><td>As needed</td><td>Material events (acquisitions, CEO changes, etc.)</td></tr>
<tr><td>Form 4</td><td>Insider</td><td>Per transaction</td><td>Insider buys/sells within 2 days</td></tr>
<tr><td>DEF 14A</td><td>Governance</td><td>Annual</td><td>Executive pay, board, shareholder votes</td></tr>
<tr><td>SC 13D</td><td>Ownership</td><td>Trigger-based</td><td>5%+ activist ownership disclosure</td></tr>
<tr><td>SC 13G</td><td>Ownership</td><td>Trigger-based</td><td>5%+ passive ownership disclosure</td></tr>
<tr><td>13F-HR</td><td>Institutional</td><td>Quarterly</td><td>Institutional holdings ($100M+ managers)</td></tr>
<tr><td>S-1</td><td>Registration</td><td>One-time</td><td>IPO prospectus with full history</td></tr>
</tbody>
</table>

<p>For small-cap investors, the four core filings — 10-K, 10-Q, 8-K, and Form 4 — provide 90%+ of the investment-relevant information. Brefyr monitors all of these across 7,600+ companies, assigning significance scores to each filing so you can prioritize the ones that matter most for your portfolio.</p>
`,
};
