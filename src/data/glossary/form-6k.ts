import type { GlossaryTerm } from "../types";

export const termForm6K: GlossaryTerm = {
  slug: "form-6k",
  term: "Form 6-K",
  title: "Form 6-K — Foreign Private Issuer Current Report Explained",
  shortDefinition:
    "Form 6-K is the SEC filing that foreign private issuers use to report material information between annual 20-F filings, serving as the international equivalent of the domestic 8-K and 10-Q combined.",
  metaDescription:
    "What is a 6-K filing? Learn how foreign companies report interim results and material events to U.S. investors through this SEC form.",
  wordCount: 1900,
  category: "SEC Filings",
  tags: ["sec-filing", "foreign-private-issuer", "current-report", "edgar", "interim-report"],
  relatedSlugs: ["form-20f", "8-k-filing", "10-q-filing", "sec-edgar", "10-k-filing"],
  relatedTerms: ["form-20f", "8-k-filing", "10-q-filing", "sec-edgar", "10-k-filing"],
  faq: [
    {
      question: "How is a 6-K different from an 8-K?",
      answer:
        "The 8-K is filed by domestic companies and has specific triggering events defined by the SEC — the company must file within four business days of events like executive departures, material agreements, or financial restatements. The 6-K is broader and more flexible. Foreign private issuers must furnish information they make public in their home country, file with their home-country exchange, or distribute to shareholders. There is no fixed list of triggering events and no specific filing deadline, though the SEC expects prompt furnishing. This means 6-K filings vary widely in content and timing.",
    },
    {
      question: "Why do 6-K filings say 'furnished' instead of 'filed'?",
      answer:
        "The distinction matters legally. Information 'filed' with the SEC is subject to Section 18 liability — the company can be sued for material misstatements. Information 'furnished' to the SEC is not automatically subject to Section 18 liability, providing the company with somewhat reduced legal exposure. Most 6-K reports are furnished rather than filed. However, if the company incorporates a 6-K by reference into a registration statement (like an S-3 or F-3), the information effectively becomes 'filed' and carries the higher liability standard.",
    },
    {
      question: "Do 6-K filings contain quarterly financial statements?",
      answer:
        "They can, and often do. While foreign private issuers are not required to file 10-Q quarterly reports, many voluntarily provide interim financial statements through 6-K filings — particularly those whose home-country exchange requires semi-annual or quarterly reporting. A Japanese company listed on both the Tokyo Stock Exchange and the NYSE, for example, will file its Japanese quarterly results as a 6-K exhibit. However, these interim financials may not be audited or reviewed and may follow IFRS or home-country standards rather than U.S. GAAP.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 6-K is the bridge between a foreign company's home-country disclosures and the U.S. securities market. Because foreign private issuers are exempt from filing 10-Q quarterly reports and 8-K current reports, the 6-K is their primary vehicle for communicating material developments to U.S. investors between annual 20-F filings. Without the 6-K, investors in companies like Alibaba, Shell, or Toyota would have to wait up to a year between comprehensive disclosures — an untenable gap in the age of continuous markets.</p>

<h2 id="what-triggers-6k">What Triggers a 6-K Filing</h2>

<p>The trigger for a 6-K is straightforward in principle but broad in practice. Under SEC Rule 13a-16, a foreign private issuer must promptly furnish to the SEC any material information that it makes public in its home country, files with its home-country stock exchange, or distributes to its security holders. This includes:</p>

<ul>
<li><strong>Interim financial statements</strong> — quarterly or semi-annual results required by the home-country exchange</li>
<li><strong>Press releases</strong> — earnings announcements, management changes, material contracts, and other news releases</li>
<li><strong>Annual general meeting materials</strong> — notices, agendas, and resolutions distributed to shareholders</li>
<li><strong>Regulatory filings</strong> — information filed with home-country securities regulators</li>
<li><strong>Rating agency reports</strong> — credit rating changes if publicly disclosed</li>
<li><strong>Material events</strong> — acquisitions, divestitures, restructurings, legal proceedings, and other significant developments</li>
</ul>

<p>The key principle is that any information available to the company's home-country investors must also be made available to U.S. investors through the 6-K. This prevents an information asymmetry where investors on one exchange know something material that investors on another exchange do not.</p>

<h2 id="what-6k-contains">What the 6-K Typically Contains</h2>

<p>Unlike the domestic 8-K, which has a structured format with numbered items, the 6-K is essentially a cover sheet attached to whatever document the company is furnishing. The cover page identifies the company, states the date, and references SEC Rule 13a-16. The substance of the filing appears as an exhibit — typically a press release, a set of financial statements, or a shareholder communication.</p>

<p>This flexible format means 6-K filings range from a single page (a brief press release) to hundreds of pages (a full set of semi-annual financial statements with notes). Some companies file dozens of 6-Ks per year, furnishing every press release and regulatory filing. Others file only the minimum — semi-annual results and the annual meeting notice.</p>

<h2 id="interim-financials">Interim Financial Statements in 6-K Filings</h2>

<p>For investors, the most valuable 6-K filings are those containing interim financial statements. Many foreign private issuers provide quarterly or semi-annual results, even though the SEC does not require it, because their home-country exchanges or accounting standards mandate interim reporting. The London Stock Exchange requires semi-annual reports. The Tokyo Stock Exchange requires quarterly reports. European Union regulations require semi-annual financial statements under IFRS.</p>

<p>The important caveat is that these interim financials may not meet the same standards as a 10-Q. They may be unaudited and unreviewed by the company's external auditor. They may be prepared under IFRS or home-country standards rather than U.S. GAAP. And they may contain less detailed notes and MD&A than a domestic 10-Q. Investors should check the basis of preparation before making comparisons to domestic companies.</p>

<h2 id="filed-vs-furnished">The Filed vs. Furnished Distinction</h2>

<p>Most 6-K reports are "furnished" to the SEC rather than "filed." This is not a semantic difference — it has real legal consequences. Information that is "filed" is subject to Section 18 liability under the Exchange Act, meaning investors can sue for damages if the information contains material misstatements. Information that is merely "furnished" does not automatically carry this liability.</p>

<p>However, companies can elect to have specific 6-K reports treated as "filed" by checking a box on the cover page. This is commonly done when the company wants to incorporate the 6-K by reference into an active registration statement — for example, to include updated financial data in a shelf registration. Once incorporated by reference, the information carries the same legal weight as any other filed document.</p>

<h2 id="investor-use">How Investors Use 6-K Filings</h2>

<p>Investors in foreign private issuers should monitor 6-K filings the way they would monitor 8-K and 10-Q filings for domestic companies. Set up EDGAR alerts for the company's CIK number to receive notifications when new 6-K filings appear.</p>

<p>When reviewing a 6-K, consider the context. A 6-K containing semi-annual financial statements is effectively a mid-year health check — look at revenue trends, margin changes, and cash flow development compared to the prior year and the most recent 20-F. A 6-K containing a press release about a management change, acquisition, or legal dispute requires the same attention you would give an 8-K on the same topic.</p>

<p>One common mistake is ignoring 6-K filings that appear to contain only home-country regulatory notices. Some of these contain material information — changes in regulatory approvals, government investigations, or tax rulings — that may not receive coverage from English-language financial media. For small and mid-cap foreign issuers with limited analyst coverage, the 6-K may be the only source of this information available to U.S. investors.</p>

<h2 id="frequency-patterns">Filing Frequency Patterns</h2>

<p>The frequency of 6-K filings varies dramatically across companies. Large European and Asian multinationals with active U.S. ADR programs may file 20 to 40 6-Ks per year, furnishing every quarterly report, board resolution, and regulatory notice. Smaller foreign issuers may file only 3 to 5 per year — the bare minimum of semi-annual results and an AGM notice. The filing frequency itself can be informative: a company that suddenly starts filing more 6-Ks may be experiencing a period of significant corporate activity.</p>

<h2 id="where-to-find-6k">Where to Find 6-K Filings</h2>

<p>All 6-K filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=6-K&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, 6-K filings from foreign private issuers are processed by the same AI pipeline that handles domestic filings, with summaries that extract key financial metrics and material events — bridging the gap between home-country reporting formats and what U.S. investors expect to see.</p>
`,
};
