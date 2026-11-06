import type { LearnArticle } from "../types";

export const articleHowToReadSecFilings: LearnArticle = {
  slug: "how-to-read-sec-filings",
  pillar: "sec-filings",
  title: "How to Read SEC Filings: A Practical Guide for Investors",
  metaDescription:
    "A step-by-step guide to reading SEC filings — which filings matter, what each section contains, and how to extract investment-relevant insights from 10-K, 10-Q, 8-K, and Form 4 reports.",
  readingTime: 18,
  difficulty: "beginner",
  wordCount: 3800,
  category: "Getting Started",
  tags: ["sec-filings", "how-to", "beginner", "edgar", "10-k", "10-q", "8-k"],
  relatedSlugs: ["sec-filing-types-explained", "how-to-use-edgar"],
  faq: [
    {
      question: "Do I need a finance degree to read SEC filings?",
      answer:
        "No. SEC filings are written in a standardized format that becomes predictable after you've read two or three. The business description and risk factors are plain English. The MD&A (Management Discussion & Analysis) is narrative prose. Financial statements require basic accounting knowledge, but you can develop that by reading the glossary terms for specific line items you encounter. Start with one 10-K for a company you know well — the familiarity with the business makes the filing much easier to parse.",
    },
    {
      question: "How long does it take to read a 10-K?",
      answer:
        "A thorough first read takes 2-3 hours for a typical 10-K. With practice, you develop a priority system: 15 minutes for risk factors and MD&A (the story), 30 minutes for financial statements (the numbers), and additional time for notes only when something flags your attention. Most experienced investors don't read every page — they know which sections matter for their investment thesis.",
    },
    {
      question: "Which SEC filing should I read first for a stock I'm researching?",
      answer:
        "Start with the most recent 10-K (annual report). It gives you the comprehensive picture: business description, full-year financials, risk factors, and management's assessment. Then check the most recent 10-Q for quarterly updates. After that, scan recent 8-K filings for any material events. Finally, review Form 4 filings to see insider trading activity.",
    },
    {
      question: "Are there tools that summarize SEC filings automatically?",
      answer:
        "Yes. Brefyr uses AI to process every SEC filing within minutes of publication, generating plain-English summaries, significance scores (1-10), and key fact extraction. This doesn't replace reading the filing yourself, but it helps you prioritize which filings warrant a deep read versus a skim.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Every publicly traded U.S. company is required to file regular reports with the Securities and Exchange Commission. These filings — available for free on the SEC's EDGAR database — contain more information about a company's financial health, risks, and management decisions than any analyst report, earnings call transcript, or financial news article. Yet most individual investors never read them.</p>

<p>That's a missed opportunity. Reading SEC filings is the closest thing to an investment superpower that doesn't require insider connections, expensive data terminals, or a finance degree. It requires patience, a systematic approach, and the willingness to read documents that weren't designed to be entertaining. This guide breaks down the process.</p>

<h2 id="filing-types">The Four Filings That Matter Most</h2>

<p>The SEC requires dozens of form types, but four account for the vast majority of investment-relevant information:</p>

<h3>10-K (Annual Report)</h3>

<p>The most comprehensive filing. Published once per year, the 10-K contains audited financial statements, a complete business description, risk factor disclosures, management's discussion and analysis (MD&A), executive compensation details, and legal proceedings. For a company you're evaluating for the first time, the 10-K is always the starting point.</p>

<p>Think of the 10-K as the company's full confession — everything material about the business, written under penalty of federal securities law.</p>

<h3>10-Q (Quarterly Report)</h3>

<p>A lighter version of the 10-K, filed three times per year (Q1, Q2, Q3 — the 10-K covers Q4). The 10-Q contains unaudited quarterly financial statements and a condensed MD&A. Use it to track whether the business trajectory is changing between annual reports.</p>

<h3>8-K (Current Report)</h3>

<p>The real-time filing. An 8-K is submitted within four business days of a material event — an acquisition, CEO departure, bankruptcy filing, auditor change, or any other significant development. 8-Ks are your early warning system for both opportunities and risks.</p>

<h3>Form 4 (Insider Transaction)</h3>

<p>Filed within two business days of any stock purchase or sale by a company insider (officers, directors, 10%+ shareholders). Form 4 tells you what the people who know the most about the company are doing with their own money. Open-market purchases by the CEO are particularly informative.</p>

<h2 id="reading-10k">How to Read a 10-K: Section by Section</h2>

<p>Don't read the 10-K front to back. Develop a priority system based on what you're looking for.</p>

<h3>First Priority: Risk Factors (Item 1A)</h3>

<p>Start here. Risk factors are where the company tells you everything that could go wrong. They're required by law to be comprehensive, which means you'll find operational risks, financial risks, regulatory risks, competitive threats, and industry-specific dangers.</p>

<p>What to do with risk factors:</p>
<ul>
<li><strong>Compare to last year.</strong> New risk factors that weren't in the previous 10-K signal emerging threats. A company that adds "we may not be able to continue as a going concern" is waving a red flag.</li>
<li><strong>Assess severity.</strong> "Competition in our industry is intense" is boilerplate that every company includes. "Our largest customer, representing 35% of revenue, has notified us of their intention to evaluate alternative suppliers" is specific and alarming.</li>
<li><strong>Count them.</strong> An increase in the number of risk factors, or a significant lengthening of existing ones, suggests management sees more uncertainty ahead.</li>
</ul>

<h3>Second Priority: MD&A (Item 7)</h3>

<p>Management's Discussion and Analysis is the narrative heart of the 10-K. Management explains what happened during the year — in their own words, but within a regulated framework. They must discuss:</p>
<ul>
<li>Revenue and expense trends, with explanations for changes</li>
<li>Cash flow and liquidity position</li>
<li>Capital expenditure plans</li>
<li>Known trends, demands, and uncertainties</li>
<li>Off-balance-sheet arrangements</li>
</ul>

<p>Read the MD&A with healthy skepticism. Management has a natural incentive to put a positive spin on results. When you see phrases like "excluding certain one-time items, adjusted operating income grew 12%," check what those "one-time items" are — and whether they recur every year.</p>

<p>The most valuable MD&A paragraphs are the ones that discuss negative results candidly. Management that directly addresses revenue declines, margin compression, or cash flow deterioration — with specific explanations and remediation plans — is more trustworthy than management that buries bad news in euphemisms.</p>

<h3>Third Priority: Financial Statements (Item 8)</h3>

<p>The income statement, balance sheet, and cash flow statement are the quantitative foundation. For investors who aren't trained accountants, focus on these five numbers:</p>

<ol>
<li><strong>Revenue</strong> (income statement, top line). Is it growing? By how much? Is growth accelerating or decelerating?</li>
<li><strong>Operating income</strong> (income statement). Revenue minus cost of goods sold minus operating expenses. This shows whether the core business is profitable before interest and taxes.</li>
<li><strong>Free cash flow</strong> (cash flow statement). Operating cash flow minus capital expenditures. This is the cash the business generates after maintaining its assets. A company that consistently generates positive free cash flow can fund growth, pay dividends, or reduce debt without issuing new shares.</li>
<li><strong>Total debt</strong> (balance sheet). How much the company owes. Compare to cash and equivalents — the difference is net debt. Compare net debt to EBITDA (typically disclosed in the MD&A) to get the leverage ratio.</li>
<li><strong>Shares outstanding</strong> (balance sheet or cover page). Is the share count increasing (dilution from stock-based compensation or equity raises) or decreasing (share buybacks)? Rising share counts mean your ownership percentage is shrinking.</li>
</ol>

<h3>Fourth Priority: Notes to Financial Statements</h3>

<p>The notes are where the real detail lives — accounting policies, debt maturities, lease obligations, contingent liabilities, segment breakdowns, and revenue recognition methods. They can run 30-50 pages. You don't need to read every note, but certain ones are worth checking:</p>

<ul>
<li><strong>Revenue recognition.</strong> How does the company count revenue? Aggressive revenue recognition (recognizing revenue before delivery, bill-and-hold arrangements) can inflate the top line.</li>
<li><strong>Debt maturities.</strong> A company with $200 million in debt maturing next year and $50 million in cash has a refinancing problem.</li>
<li><strong>Contingent liabilities.</strong> Lawsuits, regulatory investigations, and other potential future obligations. The note describes the range of possible outcomes and whether the company has reserved for them.</li>
<li><strong>Related party transactions.</strong> Business dealings between the company and its officers, directors, or their families.</li>
</ul>

<h2 id="reading-8k">How to Read an 8-K</h2>

<p>8-Ks are short — typically 1-5 pages — and structured by item number. The item number tells you the category of event. Your triage system should look like this:</p>

<p><strong>Read immediately:</strong></p>
<ul>
<li>Item 1.03 — Bankruptcy</li>
<li>Item 4.01 — Auditor change</li>
<li>Item 4.02 — Restatement (non-reliance on prior financials)</li>
<li>Item 5.02 — CEO/CFO departure</li>
</ul>

<p><strong>Read today:</strong></p>
<ul>
<li>Item 1.01/1.02 — Material contract entered into or terminated</li>
<li>Item 2.01 — Acquisition or disposition completed</li>
<li>Item 2.06 — Material impairment</li>
</ul>

<p><strong>Read when convenient:</strong></p>
<ul>
<li>Item 2.02 — Earnings release</li>
<li>Item 7.01 — Regulation FD disclosure</li>
<li>Item 8.01 — Other events</li>
</ul>

<h2 id="reading-form4">How to Read Form 4</h2>

<p>Form 4 is structured data, not narrative text. Focus on three fields:</p>

<ol>
<li><strong>Transaction code.</strong> P = purchase (bullish), S = sale (ambiguous), M = option exercise (neutral), F = tax withholding (ignore), A = grant/award (ignore).</li>
<li><strong>Dollar value.</strong> Multiply shares by price. A $2 million open-market purchase is conviction. A $10,000 purchase may be a formality.</li>
<li><strong>Footnotes.</strong> Check whether the transaction was executed under a 10b5-1 plan (pre-arranged, less informative) or discretionary (more informative).</li>
</ol>

<p>The most powerful Form 4 signal: cluster buying — three or more insiders purchasing within the same 30-day window. This is multiple informed individuals independently reaching the same conclusion about the stock's value.</p>

<h2 id="where-to-start">Where to Start: A Practical Workflow</h2>

<p>Pick a company you already know — one whose products you use or whose industry you understand. Go to <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> and pull up their most recent 10-K.</p>

<ol>
<li><strong>Read the risk factors.</strong> Time: 10 minutes. Note anything that surprises you.</li>
<li><strong>Read the MD&A.</strong> Time: 15 minutes. Note where management's tone is confident versus hedging.</li>
<li><strong>Check the five numbers</strong> from the financial statements. Time: 10 minutes. Revenue, operating income, free cash flow, total debt, shares outstanding.</li>
<li><strong>Search for red flags</strong> in the notes. Time: 10 minutes. Revenue recognition, debt maturities, related party transactions.</li>
<li><strong>Pull up recent 8-Ks.</strong> Time: 5 minutes. Any material events since the 10-K?</li>
<li><strong>Check Form 4 filings.</strong> Time: 5 minutes. Are insiders buying or selling?</li>
</ol>

<p>Total: about 55 minutes. After doing this for three or four companies, the structure becomes familiar and you'll move through filings much faster.</p>

<h2 id="common-mistakes">Common Mistakes When Reading SEC Filings</h2>

<p><strong>Reading only the press release.</strong> The earnings press release (filed as an 8-K Item 2.02) is a marketing document. It leads with the positive numbers and uses "adjusted" metrics that exclude inconvenient expenses. The 10-Q, filed days or weeks later, has the full picture including GAAP numbers and detailed notes.</p>

<p><strong>Trusting management commentary at face value.</strong> Management is required to disclose, but they're also motivated to maintain the stock price. "We see continued momentum" is not a fact — it's an opinion. Focus on the numbers and the risk factors, which have legal consequences for misrepresentation.</p>

<p><strong>Ignoring the auditor's report.</strong> Most investors skip the auditor's report because it's usually a clean opinion. But when it's not clean — when there's a going concern paragraph, a qualification, or a scope limitation — that's the single most important page in the filing.</p>

<p><strong>Comparing companies without adjusting for accounting differences.</strong> Two companies in the same industry can report vastly different numbers simply because they use different accounting methods (FIFO vs LIFO for inventory, straight-line vs accelerated for depreciation). The notes to financial statements explain each company's accounting policies — read them before comparing.</p>

<p><strong>Chasing volume instead of depth.</strong> Reading ten 10-Ks superficially is less valuable than reading two 10-Ks deeply. The insights come from the details — a specific risk factor, an unusual footnote, a trend in the quarterly numbers — not from scanning headlines.</p>

<h2 id="tools-and-resources">Tools and Resources</h2>

<p><strong>SEC EDGAR</strong> (<a href="https://www.sec.gov/edgar" target="_blank" rel="noopener noreferrer">sec.gov/edgar</a>): The primary source. Free, comprehensive, updated in real time.</p>

<p><strong>EDGAR Full-Text Search</strong> (<a href="https://efts.sec.gov/LATEST/search-index" target="_blank" rel="noopener noreferrer">efts.sec.gov</a>): Search the content of filings by keyword. Powerful for finding specific disclosures across all companies.</p>

<p><strong>Brefyr</strong>: Processes every filing for 7,600+ companies within minutes, adding AI-generated summaries, significance scores, and insider trading analysis. Particularly useful for small-cap stocks with zero analyst coverage, where the SEC filing is the only source of investment-grade information.</p>

<p><strong>Company investor relations pages</strong>: Most companies host their SEC filings on their own website under an "Investors" or "SEC Filings" section. The filings are identical to what's on EDGAR, but some companies provide supplemental materials (earnings presentations, fact sheets) alongside them.</p>
`,
};
