import type { GlossaryTerm } from "../types";

export const term10KFiling: GlossaryTerm = {
  slug: "10-k-filing",
  term: "10-K Filing",
  title: "10-K Filing — What It Is, What It Contains, and How Investors Use It",
  shortDefinition:
    "A 10-K is the annual report that every publicly traded U.S. company must file with the SEC, containing audited financial statements, risk factors, and a management discussion of the business.",
  metaDescription:
    "What is a 10-K filing? A deep guide to the SEC's annual report requirement — what each section contains, why investors read it, and how to find a company's 10-K on EDGAR.",
  wordCount: 2800,
  category: "SEC Filings",
  tags: ["sec-filing", "annual-report", "financial-statements", "edgar"],
  relatedSlugs: ["10-q-filing", "8-k-filing", "sec-edgar", "annual-report"],
  relatedTerms: ["10-q-filing", "8-k-filing", "sec-edgar", "annual-report", "md-and-a"],
  faq: [
    {
      question: "How is a 10-K different from an annual report?",
      answer:
        "A 10-K is a regulatory filing required by the SEC with strict formatting rules and audited financials. An annual report is a voluntary, marketing-oriented document companies send to shareholders. The 10-K contains everything the annual report does — and significantly more. Many investors skip the glossy annual report entirely and go straight to the 10-K because the SEC mandates full disclosure without the PR spin.",
    },
    {
      question: "Where can I find a company's 10-K for free?",
      answer:
        "Every 10-K is freely available on the SEC's EDGAR database at sec.gov/edgar. Search by company name or ticker symbol. The filing appears within one business day of submission. Brefyr also provides direct links to each company's EDGAR filing page and adds AI-generated summaries on top of the raw filing.",
    },
    {
      question: "When are 10-K filings due?",
      answer:
        "The deadline depends on the company's size. Large accelerated filers (public float above $700 million) must file within 60 days of their fiscal year end. Accelerated filers ($75M–$700M float) get 75 days. Non-accelerated filers and smaller reporting companies have 90 days. Most fiscal years end December 31, so the heaviest filing season runs from late February through March.",
    },
    {
      question: "What happens if a company doesn't file its 10-K on time?",
      answer:
        "The company must file an NT 10-K (notification of late filing) requesting a 15-day extension. If it still misses the deadline, the SEC can issue a delinquency notice and, eventually, suspend or revoke the company's registration. Chronic late filers often face delisting from stock exchanges. A late 10-K is a warning sign — it can indicate accounting problems, auditor disagreements, or material weaknesses in internal controls.",
    },
    {
      question: "How long is a typical 10-K?",
      answer:
        "Most 10-Ks run between 60 and 200 pages, though some exceed 400. Large financial institutions like JPMorgan or Berkshire Hathaway file particularly lengthy reports due to complex subsidiary structures. Smaller companies typically file shorter 10-Ks. The length is not, by itself, a red flag — what matters is the substance in the risk factors, MD&A, and notes to financial statements.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>A 10-K is the most comprehensive public document any U.S.-listed company produces. Filed annually with the Securities and Exchange Commission, it lays out the full story of a business — its operations, finances, risks, legal proceedings, and management's own assessment of how things are going. For investors willing to read it, the 10-K is the single most valuable source of information about a public company.</p>

<p>The SEC requires every company registered under the Securities Exchange Act of 1934 to file a 10-K. There are no exceptions for size, profitability, or industry. If a company's stock trades on a U.S. exchange, its 10-K is public and free to read on EDGAR.</p>

<h2 id="what-the-10k-contains">What the 10-K Contains</h2>

<p>The SEC divides the 10-K into four parts. Each part serves a distinct purpose, and experienced investors develop habits about which sections they read first.</p>

<h3>Part I — The Business</h3>

<p><strong>Item 1: Business.</strong> This section describes what the company does. Not in marketing language — in plain, factual terms. You learn about the company's products, services, customers, suppliers, competitive landscape, seasonality, intellectual property, and employees. For a company you've never heard of, this is where you start.</p>

<p><strong>Item 1A: Risk Factors.</strong> This is where management lists everything that could go wrong. Companies are legally required to be thorough here. A pharmaceutical company will list clinical trial failures. A retailer will list supply chain disruptions. A tech company will list dependency on a single customer. Read the risk factors of any stock you own — they tell you what the insiders are worried about.</p>

<p>Seasoned investors pay special attention to <em>new</em> risk factors that weren't in last year's 10-K. A freshly added risk factor about "liquidity concerns" or "going concern" is a signal that something has changed.</p>

<p><strong>Item 1B: Unresolved Staff Comments.</strong> If the SEC has sent comment letters to the company and the company hasn't resolved them, those comments appear here. Most companies show nothing in this section. When something does appear, it means the SEC's Division of Corporation Finance has identified a potential problem with the company's disclosures.</p>

<h3>Part II — Financial Data</h3>

<p><strong>Item 6: Selected Financial Data.</strong> A five-year summary of key financial metrics — revenue, net income, total assets, long-term debt, and dividends per share. This gives you a fast snapshot of whether the company is growing, stagnating, or declining.</p>

<p><strong>Item 7: Management's Discussion and Analysis (MD&A).</strong> Many investors consider this the most important section. Management explains, in their own words, what happened during the fiscal year — why revenue went up or down, what drove expenses, how cash flow changed, and what they expect going forward. Unlike the financial statements (which are numbers), the MD&A is narrative. It reveals management's thought process.</p>

<p>Pay attention to the tone. A management team that directly addresses poor results ("revenue declined 12% because we lost our largest customer") is more trustworthy than one that buries bad news in vague language ("certain market conditions created headwinds").</p>

<p><strong>Item 8: Financial Statements.</strong> The audited income statement, balance sheet, cash flow statement, and statement of stockholders' equity. These are the hard numbers — prepared according to GAAP and reviewed by an independent auditor. The notes to the financial statements (often running 30-50 pages) contain critical details about accounting policies, debt terms, lease obligations, and contingent liabilities.</p>

<h3>Part III — Governance</h3>

<p><strong>Item 10: Directors, Executive Officers, and Corporate Governance.</strong> Who runs the company and who sits on the board. You learn about directors' backgrounds, committee assignments, and the company's code of ethics.</p>

<p><strong>Item 11: Executive Compensation.</strong> How much the CEO, CFO, and other named executives are paid — including salary, bonuses, stock awards, and option grants. This section answers whether management's incentives are aligned with shareholders. A CEO who earns $20 million while the stock drops 40% is a governance red flag.</p>

<p><strong>Item 12: Security Ownership.</strong> Who owns the stock. You'll find tables showing how many shares directors and officers own, plus any institutional holders above 5%. Large insider ownership is generally a positive signal — it means management has skin in the game.</p>

<h3>Part IV — Exhibits and Certifications</h3>

<p><strong>Item 15: Exhibits.</strong> The legal documents that underpin the business — articles of incorporation, bylaws, material contracts, loan agreements, and subsidiary lists. Most investors skip this section unless they're doing deep due diligence on a specific legal issue.</p>

<p>The CEO and CFO personally certify that the 10-K is accurate under Sections 302 and 906 of the Sarbanes-Oxley Act. These certifications carry criminal penalties for fraud — executives can and do go to prison for signing false certifications.</p>

<h2 id="how-to-read-a-10k">How to Read a 10-K Efficiently</h2>

<p>Reading a 10-K cover to cover takes hours. Most investors develop a priority system.</p>

<p><strong>First pass (15 minutes):</strong> Read the risk factors and MD&A. These tell you the story — what went right, what went wrong, and what management is worried about.</p>

<p><strong>Second pass (30 minutes):</strong> Review the financial statements. Focus on revenue growth, operating margins, free cash flow, and debt levels. Compare to the prior year.</p>

<p><strong>Third pass (as needed):</strong> Dig into the notes to financial statements for specifics — revenue recognition policies, lease commitments, legal proceedings, and related party transactions.</p>

<p>If something in the MD&A doesn't match the numbers in the financial statements, that's a red flag worth investigating further.</p>

<h2 id="10k-vs-other-filings">How the 10-K Relates to Other SEC Filings</h2>

<p>The 10-K is the foundation, but it doesn't exist in isolation.</p>

<p>The <strong>10-Q</strong> (quarterly report) is a lighter version of the 10-K, filed three times per year for Q1, Q2, and Q3. It contains unaudited financial statements and a shorter MD&A. The 10-K covers Q4 and the full year.</p>

<p>The <strong>8-K</strong> (current report) covers material events between regular filings — CEO departures, acquisitions, bankruptcy filings, auditor changes. If you're tracking a company, 8-Ks are your real-time news feed.</p>

<p><strong>Form 4</strong> filings reveal insider buying and selling. When the CEO buys $2 million worth of stock on the open market after the 10-K is published, that's a meaningful signal about management's confidence in the company's prospects.</p>

<p>The <strong>proxy statement (DEF 14A)</strong> provides the governance details that the 10-K often summarizes by reference — full compensation tables, director nominations, shareholder proposals, and voting procedures.</p>

<h2 id="red-flags-in-10k">Red Flags to Watch For</h2>

<p>Certain patterns in a 10-K signal potential trouble:</p>

<ul>
<li><strong>Going concern language</strong> — If the auditor's report mentions "substantial doubt about the company's ability to continue as a going concern," the company may be at risk of bankruptcy.</li>
<li><strong>Auditor change</strong> — Switching audit firms, especially from a Big 4 to a smaller firm, can indicate disagreements over accounting practices.</li>
<li><strong>Restatements</strong> — If a company restates prior-year financials, something was wrong with the original numbers.</li>
<li><strong>Increasing accounts receivable relative to revenue</strong> — This can signal channel stuffing (booking sales to customers who haven't actually paid).</li>
<li><strong>Related party transactions</strong> — When the company does business with entities owned by its executives or their family members, conflicts of interest are possible.</li>
<li><strong>Growing non-GAAP adjustments</strong> — If the gap between GAAP net income and the company's "adjusted" metrics keeps widening, management may be hiding deteriorating fundamentals.</li>
</ul>

<h2 id="where-to-find-10k">Where to Find a Company's 10-K</h2>

<p>Every 10-K is available for free on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=10-K&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. Search by company name, ticker symbol, or CIK number. The full text of the filing, along with all exhibits, is available in both HTML and XBRL formats.</p>

<p>On Brefyr, every stock page includes a direct link to the company's EDGAR filings, plus AI-generated summaries that highlight the key facts from each 10-K — saving you the hours of reading while still giving you the critical information.</p>

<h2 id="small-cap-investors">Why 10-Ks Matter More for Small-Cap Investors</h2>

<p>Large-cap stocks like Apple or Microsoft have dozens of analysts parsing every filing within hours. The information reaches the market quickly and gets priced in fast.</p>

<p>Small-cap and micro-cap stocks are different. Many have zero analyst coverage. Their 10-Ks can sit unread for days or weeks. An investor who reads a small-cap 10-K closely — and spots a risk factor change, a revenue inflection, or unusual insider activity — has an information advantage that doesn't exist in large-cap investing.</p>

<p>This is exactly the gap Brefyr exists to close. The AI pipeline processes every 10-K within minutes of publication and assigns a significance score (1-10) based on the content. You get the same depth of analysis that institutional investors pay thousands for, applied to the stocks nobody else is watching.</p>
`,
};
