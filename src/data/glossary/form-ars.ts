import type { GlossaryTerm } from "../types";

export const termFormARS: GlossaryTerm = {
  slug: "form-ars",
  term: "ARS",
  title: "ARS — Annual Report to Shareholders Explained",
  shortDefinition:
    "An ARS (Annual Report to Shareholders) is a document companies send to shareholders alongside the proxy statement, summarizing the year's financial results, business highlights, and management's outlook in a more accessible format than the 10-K.",
  metaDescription:
    "What is an ARS filing? Learn how the annual report to shareholders differs from the 10-K, what it contains, and how the SEC uses it.",
  wordCount: 1800,
  category: "SEC Filings",
  tags: ["sec-filing", "annual-report", "shareholder-communication", "edgar", "financial-statements"],
  relatedSlugs: ["10-k-filing", "def-14a", "proxy-statement", "sec-edgar", "8-k-filing"],
  relatedTerms: ["10-k-filing", "def-14a", "proxy-statement", "sec-edgar", "8-k-filing"],
  faq: [
    {
      question: "Is the ARS the same as the 10-K?",
      answer:
        "No, though they overlap. The 10-K is a regulatory filing required by the SEC with strict formatting, standardized sections, and comprehensive disclosure requirements. The ARS is a shareholder communication that companies prepare voluntarily — it typically includes financial highlights, a letter from the CEO, photographs, and marketing-oriented content alongside the audited financial statements. Many companies include their 10-K as a section of the ARS or distribute them together. The SEC requires that the ARS contain audited financial statements, but the rest of the content is at the company's discretion.",
    },
    {
      question: "Why do some companies still produce elaborate annual reports?",
      answer:
        "Despite the declining importance of the printed annual report, many companies — particularly those in consumer-facing industries — use the ARS as a branding tool. Berkshire Hathaway's annual report, featuring Warren Buffett's shareholder letter, is widely read and quoted. Companies like Apple, Nike, and JPMorgan produce visually sophisticated annual reports that reinforce their brand identity. For these companies, the ARS serves a dual purpose: it meets the regulatory requirement of providing financial information to shareholders and functions as a corporate marketing document.",
    },
    {
      question: "Is the ARS filed on EDGAR?",
      answer:
        "Companies are not required to file the full ARS on EDGAR as a standalone document. However, when the ARS is sent to shareholders in connection with the proxy statement, the SEC requires it to be furnished (not filed) on EDGAR as a form of the ARS. Additionally, if the company wraps its 10-K inside the ARS (a common practice called a '10-K wrap'), the 10-K portion is filed on EDGAR as the official annual report. The ARS filing appears on EDGAR under the form type 'ARS' but does not carry the same legal liability as filed documents.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The Annual Report to Shareholders (ARS) is the original disclosure document of public company life — predating the SEC's standardized filing system by decades. Before the 10-K existed in its modern form, the annual report was how companies communicated financial results to their owners. Today, the ARS occupies a unique position: it is partly a regulatory obligation (the SEC requires that certain financial information be provided to shareholders before the annual meeting) and partly a marketing document (companies use it to tell their story in a way the 10-K cannot).</p>

<h2 id="regulatory-basis">Regulatory Basis</h2>

<p>The SEC's proxy rules require that companies furnish an annual report to shareholders before or concurrently with the proxy statement for the annual meeting. This annual report must contain audited financial statements (balance sheet, income statement, cash flow statement) for the two most recent fiscal years, along with selected quarterly financial data. The company may satisfy this requirement by distributing the full 10-K, by wrapping the 10-K inside a glossy annual report (the "10-K wrap"), or by producing a separate ARS document that includes the required financial data.</p>

<p>When the ARS is sent to shareholders, a copy must be furnished to the SEC on EDGAR. The filing type is "ARS." Importantly, the ARS is "furnished" rather than "filed" — this distinction means it does not carry Section 18 liability for misstatements, though it remains subject to the general antifraud provisions of the securities laws.</p>

<h2 id="what-ars-contains">What the ARS Typically Contains</h2>

<p><strong>CEO/Chairman letter.</strong> The opening pages of most annual reports feature a letter from the CEO, the chairman, or both. This letter sets the tone — a candid assessment of the year's results, the company's strategy, and the outlook for the future. The best CEO letters are substantive and specific. Warren Buffett's annual letters to Berkshire Hathaway shareholders have become a model for transparent, educational shareholder communication. The worst are boilerplate celebrations of "another year of progress" regardless of actual results.</p>

<p><strong>Business highlights.</strong> The ARS typically includes narrative sections describing the company's operations, strategy, market position, and key achievements during the fiscal year. These sections use photographs, infographics, and marketing language that the 10-K does not contain. For investors unfamiliar with the company, the business highlights section provides a more accessible introduction than the 10-K's Item 1.</p>

<p><strong>Financial statements.</strong> The audited financial statements are the core regulatory requirement. Income statement, balance sheet, and cash flow statement for the past two years, plus the independent auditor's report. Many companies also include five-year or ten-year financial summaries showing trends in key metrics like revenue, earnings per share, dividends, and return on equity.</p>

<p><strong>Selected financial data.</strong> Charts and tables showing revenue growth, profitability margins, return metrics, and per-share data over multiple years. The presentation is designed to be visually accessible to non-specialist shareholders — trend lines, bar charts, and pie charts replace the dense tables found in the 10-K.</p>

<p><strong>Corporate information.</strong> Board of directors listing, executive officers, corporate headquarters address, transfer agent information, stock exchange listing details, and information about the annual meeting. This practical information helps shareholders participate in governance and manage their holdings.</p>

<h2 id="ars-vs-10k">ARS vs. 10-K: What Each Provides</h2>

<p>Understanding the distinction between these two documents helps investors decide where to spend their time:</p>

<p>The <strong>ARS</strong> provides context, narrative, and accessibility. It tells you what the company wants you to know about its year — presented in its best light. The CEO letter may reveal management's priorities and concerns. The business highlights explain strategy in plain language. The visual presentation makes financial trends easy to grasp at a glance.</p>

<p>The <strong>10-K</strong> provides completeness, detail, and legal accountability. It tells you everything the SEC requires the company to disclose — including things the company might prefer not to highlight. Risk factors, legal proceedings, related-party transactions, material weaknesses, and unresolved SEC staff comments appear in the 10-K but rarely in the ARS. The CEO and CFO personally certify the 10-K's accuracy under Sarbanes-Oxley; no such certification applies to the ARS.</p>

<p>Sophisticated investors read both. The ARS provides the narrative context and strategic overview. The 10-K provides the full, unvarnished disclosure. Discrepancies between the ARS's optimistic narrative and the 10-K's risk factors or MD&A are themselves informative — they reveal what management emphasizes versus what the regulation requires them to disclose.</p>

<h2 id="declining-print">The Decline of the Printed Annual Report</h2>

<p>For decades, the annual report was a prestige publication. Companies spent millions on design, photography, and printing to produce reports that functioned as corporate marketing pieces. By the 2000s, the shift to electronic delivery had reduced the prevalence of elaborate printed reports. The SEC's adoption of "notice and access" rules in 2007 — which allow companies to provide shareholders with a website link to proxy materials rather than mailing physical copies — further accelerated the decline.</p>

<p>Today, many companies satisfy the annual report requirement by posting their 10-K on the company website and directing shareholders there through the notice and access process. Others continue to produce digital annual reports with interactive features, embedded video, and responsive design. A handful — primarily consumer brands and financial institutions — still produce high-quality printed reports for major shareholders and institutional investors.</p>

<h2 id="investor-use">How Investors Use the ARS</h2>

<p>The ARS is most useful as a starting point for understanding a company. If you are new to a stock — considering a first investment or encountered the company through a screener — the ARS provides a faster, more readable introduction than diving directly into the 10-K. Use it to understand the business model, key products, and management's strategic priorities. Then turn to the 10-K for the detailed risk factors, financial statement notes, and regulatory disclosures that the ARS omits.</p>

<p>For long-term shareholders, the CEO letter is worth reading each year. Changes in tone, emphasis, or strategy from one year to the next can signal important shifts. A CEO who spent three years talking about growth and suddenly pivots to "cost discipline" and "capital allocation" may be acknowledging that the growth story is slowing.</p>

<h2 id="where-to-find-ars">Where to Find ARS Filings</h2>

<p>ARS filings that are furnished to the SEC appear on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=ARS&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> under the form type "ARS." Company websites are often a better source for the full, designed version of the annual report. On Brefyr, annual report data is aggregated alongside 10-K filings, ensuring that investors see both the regulatory disclosure and any supplementary shareholder communication the company provides.</p>
`,
};
