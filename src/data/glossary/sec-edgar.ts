import type { GlossaryTerm } from "../types";

export const termSecEdgar: GlossaryTerm = {
  slug: "sec-edgar",
  term: "SEC EDGAR",
  title: "SEC EDGAR — The Free Database Every Investor Should Know How to Use",
  shortDefinition:
    "EDGAR (Electronic Data Gathering, Analysis, and Retrieval) is the SEC's public database where all required filings from U.S. public companies are stored and searchable for free.",
  metaDescription:
    "What is SEC EDGAR? A practical guide to the SEC's free filing database — how to search it, what you can find, and why it's the most underused tool in investing.",
  wordCount: 2500,
  category: "SEC & Regulatory",
  tags: ["sec", "edgar", "database", "filings", "research-tools"],
  relatedSlugs: ["10-k-filing", "8-k-filing", "form-4", "cik-number"],
  relatedTerms: ["10-k-filing", "8-k-filing", "form-4", "cik-number", "accession-number"],
  faq: [
    {
      question: "Is EDGAR really free to use?",
      answer:
        "Yes. EDGAR is funded by taxpayer money and maintained by the SEC as a public service. Every filing is freely accessible at sec.gov/edgar. There is no registration, no paywall, and no login required. The data is public domain — anyone can use it, redistribute it, or build products on top of it.",
    },
    {
      question: "How do I search for a specific company on EDGAR?",
      answer:
        "Go to sec.gov/cgi-bin/browse-edgar and enter the company name, ticker symbol, or CIK number in the search box. Select the filing type you want (10-K, 8-K, etc.) or leave it blank to see all filings. Results appear in reverse chronological order. You can also use the full-text search at efts.sec.gov/LATEST/search-index to search the actual content of filings by keyword.",
    },
    {
      question: "What is the difference between EDGAR and Bloomberg?",
      answer:
        "EDGAR is the original source — every filing starts here. Bloomberg, Refinitiv, and other financial data providers download filings from EDGAR, process them, and add their own analytics, formatting, and search features. Bloomberg costs $24,000+ per year. EDGAR is free. For reading the actual filings, EDGAR has everything Bloomberg has — you just don't get the charting and analytics overlay.",
    },
    {
      question: "Can I get notified when a company files something new?",
      answer:
        "EDGAR itself offers basic RSS feeds for company filings. For more sophisticated alerts — filtered by filing type, significance, or insider activity — tools like Brefyr process new EDGAR filings automatically and send email notifications based on your alert rules.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>EDGAR is where every public company's secrets stop being secret. The SEC requires all publicly traded U.S. companies to submit their financial disclosures electronically through EDGAR, and every one of those filings is immediately available for anyone to read. No subscription needed. No Bloomberg terminal. No analyst connections. Just a web browser and the ability to read.</p>

<p>The database holds over 21 million filings dating back to 1993. It receives roughly 3,000 new filings every business day. Every 10-K, 10-Q, 8-K, proxy statement, insider transaction (Form 4), and registration statement (S-1) for every U.S.-listed company lives here.</p>

<p>Despite being free and comprehensive, EDGAR remains one of the most underused research tools among retail investors. Most individual investors rely on third-party summaries or financial media instead of reading the source documents. That gap creates an advantage for anyone willing to use EDGAR directly.</p>

<h2 id="how-edgar-works">How EDGAR Works</h2>

<p>When a public company prepares a filing, it submits the document electronically to the SEC through EDGAR. The submission goes through basic validation checks (format, required fields, filing type) and is typically posted to the public database within minutes. There is no editorial review at this stage — the SEC reviews filings after they're public, not before.</p>

<p>Each filing gets a unique accession number — a 20-character identifier in the format XXXXXXXXXX-XX-XXXXXX (filer CIK, dash, year, dash, sequence number). This accession number is the permanent, unique address for that specific filing. If you ever need to reference a particular filing, the accession number is how you do it.</p>

<p>Filings appear in multiple formats. The HTML version is human-readable. The XBRL (eXtensible Business Reporting Language) version is machine-readable, with financial data tagged so that computers can extract specific numbers automatically. Some filings also include exhibits — the actual contracts, legal opinions, and supporting documents referenced in the main filing.</p>

<h2 id="searching-edgar">How to Search EDGAR</h2>

<p>EDGAR offers several search interfaces, each useful for different purposes.</p>

<h3>Company Search</h3>

<p>The most common starting point. Go to <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">EDGAR Company Search</a> and enter a company name, ticker, or CIK number. You can filter by filing type (10-K, 8-K, etc.) and date range. The results show every filing that matches your criteria, with the most recent first.</p>

<p>For example, searching for "AAPL" with filing type "10-K" returns every annual report Apple has filed. Clicking any result opens the filing index page, which links to the individual documents that make up the filing.</p>

<h3>Full-Text Search (EFTS)</h3>

<p>The <a href="https://efts.sec.gov/LATEST/search-index" target="_blank" rel="noopener noreferrer">EDGAR Full-Text Search System</a> lets you search the actual content of filings by keyword. This is enormously powerful. You can search for a specific contract term, a person's name, a legal case reference, or any phrase that appears in any SEC filing.</p>

<p>Practical example: Searching for "going concern" returns every filing in the database that mentions going concern issues. For small-cap investors, this is a way to screen for financially distressed companies without reading thousands of individual filings.</p>

<h3>XBRL Viewer</h3>

<p>For financial statement analysis, EDGAR's interactive viewer renders XBRL-tagged data as formatted financial statements. You can view income statements, balance sheets, and cash flow statements for any company that files in XBRL format (which is all large companies and most smaller ones).</p>

<h2 id="what-you-find">What You Can Find on EDGAR</h2>

<p>The breadth of information available on EDGAR surprises most first-time users:</p>

<ul>
<li><strong>Annual and quarterly financials</strong> — Every 10-K and 10-Q going back decades for most companies.</li>
<li><strong>Real-time insider transactions</strong> — Form 3 (initial ownership), Form 4 (changes in ownership), and Form 5 (annual summary). You see when the CEO buys or sells shares, how many, and at what price.</li>
<li><strong>Institutional holdings</strong> — 13F-HR filings show what stocks hedge funds, mutual funds, and pension funds own.</li>
<li><strong>Beneficial ownership</strong> — SC 13D and SC 13G filings reveal when someone acquires more than 5% of a company's shares.</li>
<li><strong>IPO documents</strong> — S-1 registration statements contain the detailed prospectus for companies going public.</li>
<li><strong>Material events</strong> — 8-K filings disclose acquisitions, CEO changes, bankruptcy, auditor changes, and other significant events.</li>
<li><strong>Proxy statements</strong> — DEF 14A filings include executive compensation, board composition, shareholder proposals, and governance policies.</li>
<li><strong>SEC comment letters</strong> — The back-and-forth correspondence between the SEC and companies about their filings. These letters often reveal questions about accounting practices or disclosure quality.</li>
</ul>

<h2 id="limitations">EDGAR's Limitations</h2>

<p>EDGAR is comprehensive but not user-friendly. The interface has improved over the years, but it's still designed for regulatory compliance rather than investor experience.</p>

<p><strong>No analysis or context.</strong> EDGAR gives you the raw filings. It doesn't tell you what's important, what changed from last year, or how the numbers compare to industry peers. That interpretation is left to the reader — or to tools like Brefyr that process filings and add significance scores.</p>

<p><strong>Rate limiting.</strong> The SEC limits automated access to 10 requests per second per user agent. This is generous for individual research but creates challenges for applications that need to process thousands of filings. Brefyr's EDGAR pipeline respects these limits while maintaining near-real-time processing.</p>

<p><strong>Filing quality varies.</strong> The SEC mandates that companies file, but the quality of disclosure varies enormously. A Fortune 500 company's 10-K is professionally drafted by a team of lawyers and accountants. A micro-cap company's 10-K might be written by the CEO on a weekend. Both are on EDGAR, but they require different levels of critical reading.</p>

<h2 id="edgar-vs-alternatives">EDGAR vs Paid Alternatives</h2>

<p>Several commercial services add value on top of EDGAR data:</p>

<ul>
<li><strong>Bloomberg Terminal ($24,000/year)</strong> — Formats EDGAR data with charts, comparisons, and real-time alerts. Used by institutional investors.</li>
<li><strong>SEC filing aggregators (various prices)</strong> — Services like Brefyr, SECFilings.com, and Last10K process EDGAR filings and add summaries, alerts, and analytics.</li>
<li><strong>Financial data APIs (Polygon, Alpha Vantage, etc.)</strong> — Provide programmatic access to EDGAR data in structured formats.</li>
</ul>

<p>The filing text is always the same — it originates from EDGAR regardless of where you read it. The paid services add search, filtering, summarization, and analysis layers on top. For investors who want the raw source, EDGAR is all you need. For those who want the analysis done for them, tools like Brefyr process the EDGAR filings and surface the key information automatically.</p>

<h2 id="tips-for-using-edgar">Practical Tips for Using EDGAR</h2>

<p><strong>Bookmark the company page.</strong> Every company on EDGAR has a permanent URL based on their CIK number. Bookmark it and you're one click away from all their filings.</p>

<p><strong>Use the full-text search for screening.</strong> Before you invest in any stock, search for the company name plus keywords like "going concern," "material weakness," "restatement," or "SEC investigation." If anything comes up, read it carefully.</p>

<p><strong>Check the filing date vs the period date.</strong> A 10-K filed on March 15 covers the fiscal year ending December 31. The three-month gap means the financial statements are already somewhat stale by the time you read them. Always note both dates.</p>

<p><strong>Read the exhibits.</strong> Material contracts, loan agreements, and acquisition documents are attached as exhibits to 8-K and 10-K filings. These are the actual legal documents — not summaries — and they contain details (pricing terms, termination clauses, change of control provisions) that don't appear in the main filing text.</p>
`,
};
