import type { LearnArticle } from "../types";

export const articleHowToUseEdgar: LearnArticle = {
  slug: "how-to-use-edgar",
  pillar: "sec-filings",
  title: "How to Use SEC EDGAR: A Step-by-Step Walkthrough for Investors",
  metaDescription:
    "A practical walkthrough of SEC EDGAR — how to search for companies, find specific filings, use full-text search, read filing indexes, and set up alerts. With screenshots and examples.",
  readingTime: 14,
  difficulty: "beginner",
  wordCount: 3000,
  category: "Getting Started",
  tags: ["edgar", "sec", "how-to", "research-tools", "beginner"],
  relatedSlugs: ["how-to-read-sec-filings", "sec-filing-types-explained"],
  faq: [
    {
      question: "Is SEC EDGAR free?",
      answer:
        "Yes, completely free. EDGAR is maintained by the SEC using public funds. There is no registration, no login, no paywall, and no usage limit for manual browsing. The data is public domain — anyone can access, download, and redistribute SEC filings. Automated access is limited to 10 requests per second per user agent.",
    },
    {
      question: "Can I search the actual text inside SEC filings?",
      answer:
        "Yes. EDGAR's Full-Text Search System (EFTS) at efts.sec.gov/LATEST/search-index lets you search the content of filings by keyword. You can search for a specific phrase ('going concern'), a person's name, a contract term, or any text that appears in any filing. This is one of the most powerful and underused features of EDGAR.",
    },
    {
      question: "How do I find a company's most recent 10-K on EDGAR?",
      answer:
        "Go to sec.gov/cgi-bin/browse-edgar, enter the company name or ticker in the search box, set filing type to '10-K', and click Search. The most recent 10-K appears at the top. Click the filing date to open the filing index, then click the main document (usually the first .htm file) to read the full 10-K.",
    },
    {
      question: "Can I get email alerts when a company files with the SEC?",
      answer:
        "EDGAR offers RSS feeds per company, but no native email alerts. Third-party services like Brefyr process EDGAR filings and provide email notifications filtered by company, filing type, and significance level. You can also use EDGAR's RSS feeds with an RSS reader to get near-real-time notifications.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>SEC EDGAR is the most comprehensive free financial research tool available to individual investors. Every SEC filing from every U.S. public company — 10-Ks, 10-Qs, 8-Ks, insider transactions, institutional holdings, proxy statements, and registration documents — is stored here and searchable. Yet most retail investors have never used it directly, relying instead on third-party summaries that filter and interpret the raw data.</p>

<p>This walkthrough takes you through EDGAR's core features, step by step. By the end, you'll know how to find any filing for any company, search across all filings by keyword, and build a basic research workflow using the primary source.</p>

<h2 id="company-search">Step 1: Finding a Company's Filings</h2>

<p>Start at the <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">EDGAR Company Search page</a>.</p>

<h3>Search by Company Name or Ticker</h3>

<p>In the "Company name" field, enter either the full company name or ticker symbol. EDGAR is not case-sensitive. Searching "apple" or "AAPL" both work.</p>

<p>If you search by name, EDGAR returns all companies matching your search term. "Apple" returns Apple Inc., Apple Hospitality REIT, and several other entities. Click the company name to access their filing page.</p>

<p>If you search by ticker, EDGAR returns the exact company. Tickers are faster and more precise.</p>

<h3>Filter by Filing Type</h3>

<p>The "Filing type" field narrows results to a specific form. Enter "10-K" to see only annual reports, "8-K" for material events, or "4" for insider transactions. Leave it blank to see all filings.</p>

<p>Useful filing type searches:</p>
<ul>
<li><strong>10-K</strong> — Annual reports (includes 10-K/A amendments)</li>
<li><strong>10-Q</strong> — Quarterly reports</li>
<li><strong>8-K</strong> — Material events</li>
<li><strong>4</strong> — Insider trading (Form 4)</li>
<li><strong>DEF 14A</strong> — Proxy statements</li>
<li><strong>SC 13D</strong> — Activist ownership disclosures</li>
<li><strong>13F-HR</strong> — Institutional holdings</li>
<li><strong>S-1</strong> — IPO registration statements</li>
</ul>

<h3>Reading the Results</h3>

<p>Search results appear in reverse chronological order (newest first). Each row shows the filing date, form type, and a link to the filing. The "Documents" column links to the filing index page, which lists all individual files within the filing — the main document, exhibits, certifications, and XBRL data.</p>

<h2 id="reading-filing">Step 2: Reading a Specific Filing</h2>

<p>From the search results, click the filing date or document link. This opens the filing index page.</p>

<h3>Understanding the Filing Index</h3>

<p>The filing index page shows metadata at the top (company name, CIK, accession number, filing date) and a table of documents below. Each filing contains multiple documents:</p>

<ul>
<li><strong>The main filing document.</strong> Usually the first .htm file. For a 10-K, this is the actual annual report — potentially 100+ pages. Click it to read the full filing in your browser.</li>
<li><strong>Exhibits.</strong> Supporting documents like material contracts, legal opinions, and certifications. Numbered as ex-21 (subsidiary list), ex-31 (CEO/CFO certifications), ex-32 (SOX certifications), etc.</li>
<li><strong>XBRL files.</strong> Machine-readable financial data. These end in .xml or .xsd. Unless you're doing programmatic analysis, you can skip these.</li>
</ul>

<p>For most research, you only need the main document. The exhibits are useful when you want to read the actual text of a contract, loan agreement, or legal settlement referenced in the filing.</p>

<h2 id="full-text-search">Step 3: Searching Filing Content (Full-Text Search)</h2>

<p>This is EDGAR's most powerful feature and the least known. The <a href="https://efts.sec.gov/LATEST/search-index" target="_blank" rel="noopener noreferrer">EDGAR Full-Text Search System (EFTS)</a> lets you search the actual content of every filing in the database.</p>

<h3>Basic Keyword Search</h3>

<p>Enter any keyword or phrase. EFTS searches across all filings and returns results ranked by relevance, showing the filing type, company name, date, and a snippet of the matching text.</p>

<p>Practical examples:</p>
<ul>
<li><strong>"going concern"</strong> — Finds every filing that mentions going concern issues. Filter by date range to find recent warnings.</li>
<li><strong>"material weakness"</strong> — Surfaces all companies disclosing internal control failures.</li>
<li><strong>"cybersecurity incident"</strong> — Identifies companies that have disclosed data breaches or cyber attacks.</li>
<li><strong>"significant customer"</strong> — Finds companies discussing customer concentration risk.</li>
<li><strong>[Person's name]</strong> — Search for a specific executive, board member, or related party across all filings.</li>
</ul>

<h3>Advanced Filters</h3>

<p>EFTS supports filtering by:</p>
<ul>
<li><strong>Date range:</strong> Narrow to filings from the last year, quarter, or any custom range.</li>
<li><strong>Form type:</strong> Search only within 10-Ks, only within 8-Ks, etc.</li>
<li><strong>Company name or CIK:</strong> Limit the search to a specific company.</li>
</ul>

<p>Combining these filters creates powerful screening capabilities. For example: search for "going concern" within 10-K filings from the last 12 months, filtered to companies in SIC codes 2830-2836 (pharmaceutical manufacturing). You've just screened for financially distressed pharma companies — a task that would take hours on any other platform.</p>

<h2 id="insider-transactions">Step 4: Tracking Insider Transactions</h2>

<p>Search for a company and filter by filing type "4" to see all Form 4 filings (insider transactions). Each filing shows who traded, what they did (buy/sell/exercise), how many shares, and at what price.</p>

<p>To see the full insider trading picture, you need to look at multiple Form 4 filings over time. EDGAR displays them chronologically, but extracting the data into a spreadsheet requires manual effort. This is one area where tools like Brefyr add significant value — the platform parses every Form 4 filing automatically and displays insider trading history on each stock page in a structured format.</p>

<h2 id="institutional-holdings">Step 5: Checking Institutional Holdings</h2>

<p>Search for a company and look for 13F-HR filings (or SC 13D/13G filings for 5%+ holders). Alternatively, search for a specific institution by name to see their 13F-HR filings and full portfolio holdings.</p>

<p>Want to know what Berkshire Hathaway owns? Search for "Berkshire Hathaway" on EDGAR, filter by filing type "13F-HR," and open the most recent filing. You'll find a table listing every U.S. stock they hold, with share counts and approximate values.</p>

<h2 id="sec-comment-letters">Step 6: Reading SEC Comment Letters</h2>

<p>One of EDGAR's hidden gems. The SEC's Division of Corporation Finance reviews filings and sends comment letters to companies, asking questions or requesting additional disclosure. The company's responses are also filed on EDGAR under form type "CORRESP."</p>

<p>To find comment letters: search the company, filter by "CORRESP." The results show the back-and-forth correspondence between the SEC and the company. These letters reveal what the SEC questioned — accounting treatments, revenue recognition, executive compensation, related party transactions — and how the company responded.</p>

<p>If the SEC is asking pointed questions about a company's revenue recognition methodology, that's information most investors never see. The questions often foreshadow issues that surface later in restatements or enforcement actions.</p>

<h2 id="rss-feeds">Step 7: Setting Up Filing Alerts</h2>

<p>EDGAR provides RSS feeds for individual companies. On any company's EDGAR page, look for the RSS icon. Subscribe to the feed in an RSS reader (Feedly, Inoreader, or built into many email clients) to get notified whenever the company files anything new.</p>

<p>The RSS feed includes all filing types, so you'll see 10-Ks, 8-Ks, Form 4s, and everything else. For more filtered alerts — only material events above a certain significance threshold, only insider purchases, only specific filing types — you'll need a processing layer on top of EDGAR's raw feed. Brefyr provides this filtering through its alert rule system.</p>

<h2 id="research-workflow">Putting It Together: A Research Workflow</h2>

<p>Here's a complete workflow for researching a stock you're considering buying:</p>

<ol>
<li><strong>Company search.</strong> Find the company on EDGAR. Note their CIK, SIC code, and filer category.</li>
<li><strong>Read the latest 10-K.</strong> Focus on risk factors (Item 1A), MD&A (Item 7), and financial statements (Item 8).</li>
<li><strong>Check the latest 10-Q.</strong> Has anything changed since the annual report? New risk factors? Revenue trajectory shifting?</li>
<li><strong>Scan recent 8-Ks.</strong> Any material events — acquisitions, management changes, covenant breaches?</li>
<li><strong>Review Form 4 filings.</strong> Are insiders buying or selling? Any cluster activity?</li>
<li><strong>Read the proxy statement (DEF 14A).</strong> Is executive compensation reasonable? Is the board independent?</li>
<li><strong>Full-text search.</strong> Search for the company name plus "going concern," "material weakness," "restatement," and "SEC investigation." Clear results mean the company has a clean track record.</li>
<li><strong>Check comment letters.</strong> Has the SEC questioned the company's disclosures? How did they respond?</li>
</ol>

<p>This process takes 2-3 hours for a thorough initial assessment. After the first research session, ongoing monitoring — checking new 8-Ks and Form 4s as they're filed — takes minutes per week.</p>

<h2 id="edgar-limitations">What EDGAR Can't Do</h2>

<p>EDGAR is a filing repository, not an analysis platform. It stores the raw documents but doesn't interpret them. You won't find:</p>
<ul>
<li>Stock price charts or trading data</li>
<li>Analyst estimates or consensus forecasts</li>
<li>Peer comparison tools</li>
<li>Financial ratio calculations</li>
<li>Filing summaries or significance ratings</li>
</ul>

<p>These gaps are where third-party tools add value. Brefyr, for example, processes EDGAR filings within minutes of publication and adds AI-generated summaries, significance scores, and structured data extraction — turning the raw filing into actionable intelligence for each of 7,600+ tracked companies.</p>

<p>But EDGAR remains the source. Every financial data provider, every research platform, and every analyst ultimately gets their data from the same EDGAR filings you can read for free. The difference between professional and retail investors is not access to data — it's the willingness to read it.</p>
`,
};
