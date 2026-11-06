import type { GlossaryTerm } from "../types";

export const term10QFiling: GlossaryTerm = {
  slug: "10-q-filing",
  term: "10-Q Filing",
  title: "10-Q Filing — What Quarterly Reports Reveal and How to Read Them",
  shortDefinition:
    "A 10-Q is the quarterly report that public companies file with the SEC three times per year, containing unaudited financial statements and a condensed management discussion.",
  metaDescription:
    "What is a 10-Q filing? A guide to the SEC's quarterly report — how it differs from the 10-K, what each section contains, and what investors should look for every quarter.",
  wordCount: 2400,
  category: "SEC Filings",
  tags: ["sec-filing", "quarterly-report", "financial-statements", "edgar"],
  relatedSlugs: ["10-k-filing", "8-k-filing", "sec-edgar", "md-and-a"],
  relatedTerms: ["10-k-filing", "8-k-filing", "sec-edgar", "md-and-a", "earnings-release"],
  faq: [
    {
      question: "How is a 10-Q different from a 10-K?",
      answer:
        "The 10-K is the annual report with audited financial statements and comprehensive disclosures. The 10-Q is the quarterly report with unaudited financials and a shorter management discussion. Companies file three 10-Qs per year (Q1, Q2, Q3) and one 10-K (which covers Q4 and the full year). The 10-Q is typically 30-60 pages; the 10-K is 100-200+.",
    },
    {
      question: "When are 10-Q filings due?",
      answer:
        "Large accelerated filers (public float above $700 million) must file within 40 days of quarter end. Accelerated filers and non-accelerated filers get 45 days. Most companies with a December fiscal year end file Q1 in mid-May, Q2 in mid-August, and Q3 in mid-November.",
    },
    {
      question: "Why aren't 10-Q financial statements audited?",
      answer:
        "Full audits are expensive and time-consuming — conducting one every quarter would be impractical for most companies. Instead, 10-Q financials undergo a 'review' by the external auditor, which is a lighter standard than a full audit. The auditor checks for material misstatements but doesn't verify every transaction. The annual 10-K is where the full audit happens.",
    },
    {
      question: "Should I read the 10-Q if I already read the 10-K?",
      answer:
        "Yes, but strategically. Don't re-read sections that haven't changed (like the business description — 10-Qs don't include it). Focus on the MD&A for the quarter, the financial statements, and any new risk factors. The 10-Q is your mid-year check — has the business trajectory changed since the annual report?",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>If the 10-K is a company's yearbook, the 10-Q is the quarterly progress report. Filed three times per year — after Q1, Q2, and Q3 — the 10-Q gives investors a regular update on financial performance without waiting for the full annual disclosure. It's shorter, less detailed, and unaudited, but it contains enough information to track whether a company is on trajectory or veering off course.</p>

<p>The fourth quarter is covered by the 10-K (annual report), not a separate 10-Q. So a company with a December fiscal year end files 10-Qs around May (Q1), August (Q2), and November (Q3), then a 10-K around March (covering Q4 and the full year).</p>

<h2 id="what-10q-contains">What the 10-Q Contains</h2>

<p>The 10-Q follows a prescribed structure, but it's noticeably slimmer than the 10-K. Several major sections of the 10-K — the business description (Item 1), risk factors (Item 1A in full), security ownership tables — are either absent or abbreviated in the 10-Q.</p>

<h3>Part I — Financial Information</h3>

<p><strong>Item 1: Financial Statements.</strong> The core of the 10-Q. You get an income statement, balance sheet, cash flow statement, and statement of stockholders' equity for the quarter and the year-to-date period. These are unaudited but have been reviewed by the company's external auditor.</p>

<p>The income statement is particularly useful because it shows quarterly performance — not annual. If a company reports $100 million in Q2 revenue versus $95 million in Q1, you can see the growth trajectory in real time. Annual figures in the 10-K smooth over quarterly variations.</p>

<p>The notes to the financial statements — while shorter than in the 10-K — contain updates on accounting changes, new debt issuances, litigation developments, and acquisitions completed during the quarter.</p>

<p><strong>Item 2: Management's Discussion and Analysis (MD&A).</strong> Management explains the quarter's results in their own words. Revenue up? They tell you why. Margins compressed? They explain the drivers. Cash flow deteriorated? They address it.</p>

<p>The 10-Q MD&A is typically 5-15 pages, compared to 20-40 pages in the 10-K. It focuses narrowly on what happened this quarter, making it faster to read. Look for phrases like "compared to the same quarter in the prior year" — management is required to explain year-over-year changes.</p>

<p><strong>Item 3: Quantitative and Qualitative Disclosures About Market Risk.</strong> How the company is exposed to interest rate changes, currency fluctuations, and commodity prices. This section often stays boilerplate from quarter to quarter unless something material has changed.</p>

<p><strong>Item 4: Controls and Procedures.</strong> Management certifies whether the company's internal controls over financial reporting are effective. A "material weakness" disclosure in this section is a serious red flag — it means the company's accounting controls have a gap that could lead to misstatement of financial results.</p>

<h3>Part II — Other Information</h3>

<p><strong>Item 1: Legal Proceedings.</strong> New lawsuits, regulatory actions, or significant developments in existing legal matters since the last filing. If a company is being investigated by the SEC or sued by a major customer, it appears here.</p>

<p><strong>Item 1A: Risk Factors.</strong> The 10-Q may update risk factors from the annual 10-K. Not every 10-Q includes this section — only when risks have materially changed. A new risk factor appearing in a 10-Q that wasn't in the 10-K is a signal worth investigating.</p>

<p><strong>Item 2: Unregistered Sales of Equity Securities and Use of Proceeds.</strong> If the company issued unregistered shares (private placement) or repurchased its own stock during the quarter, the details appear here. Share buybacks can be a positive signal; private placements dilute existing shareholders.</p>

<h2 id="how-to-read-10q">How to Read a 10-Q Efficiently</h2>

<p>You don't need to read every page. Here's a 20-minute approach for investors tracking a specific stock:</p>

<p><strong>Step 1 (3 minutes): Scan the financial statements.</strong> Compare this quarter's revenue, net income, and operating cash flow to the same quarter last year. Is the business growing, flat, or declining? Check the balance sheet for changes in debt levels and cash position.</p>

<p><strong>Step 2 (10 minutes): Read the MD&A.</strong> This is where management explains the numbers. Focus on revenue drivers, margin changes, and forward-looking statements. If management says "we expect continued pressure on margins," that's a warning.</p>

<p><strong>Step 3 (5 minutes): Check risk factors and legal proceedings.</strong> New risk factors that weren't in the 10-K are the most important items here. New lawsuits with potential damages above $10 million are also worth noting.</p>

<p><strong>Step 4 (2 minutes): Read the controls section.</strong> If Item 4 says "effective," move on. If it discloses a material weakness, stop everything and research the issue thoroughly.</p>

<h2 id="what-to-watch-for">Quarter-Over-Quarter Signals</h2>

<p>The real power of the 10-Q comes from comparing it to previous quarters. Certain changes between quarters are early warning signs:</p>

<p><strong>Revenue growth decelerating.</strong> Q1 grew 20%, Q2 grew 15%, Q3 grew 8%. The headline is still "growing," but the trajectory is deteriorating. The 10-K annual figure would show 14% growth for the year, hiding the slowdown.</p>

<p><strong>Accounts receivable growing faster than revenue.</strong> If revenue grew 10% but receivables grew 25%, the company may be booking sales to customers who haven't paid yet. This is called channel stuffing, and it's one of the most reliable early indicators of future revenue problems.</p>

<p><strong>Operating cash flow diverging from net income.</strong> A company that reports $50 million in net income but only generates $10 million in operating cash flow is using accrual accounting aggressively. The cash flow statement in the 10-Q reveals what the income statement obscures.</p>

<p><strong>Inventory building up.</strong> Rising inventory without corresponding revenue growth suggests the company is overproducing or demand is weakening. This is especially meaningful for manufacturers and retailers.</p>

<p><strong>Debt covenants approaching limits.</strong> The notes to the financial statements disclose debt covenant ratios. If the company's leverage ratio is 3.8x and the covenant limit is 4.0x, one bad quarter could trigger a default.</p>

<h2 id="10q-and-earnings">The 10-Q vs the Earnings Press Release</h2>

<p>Most companies issue an earnings press release (via an 8-K) a few days or weeks before filing the 10-Q. The press release gets the media attention. Analysts discuss it on calls. The stock moves on the headline numbers.</p>

<p>The 10-Q arrives quietly afterward and receives almost no media coverage. Yet it contains far more information than the press release — the notes to financial statements alone are typically 15-30 pages of detail that the press release doesn't mention.</p>

<p>For large-cap stocks, the press release and analyst call capture most of the material information. For small-cap stocks — especially those without analyst coverage — the 10-Q itself may be the first time anyone outside the company examines the full quarterly financial picture. Reading the 10-Q directly, rather than relying on press release headlines, gives you a genuine edge.</p>

<h2 id="small-cap-relevance">Why 10-Qs Matter for Small-Cap Investors</h2>

<p>Large companies have earnings calls with 50 analysts asking detailed questions. The information in the 10-Q is dissected publicly within hours.</p>

<p>Small-cap companies often have no earnings call, or a call with two analysts asking generic questions. The 10-Q is the only source of detailed quarterly financial information. An investor who reads the 10-Q for a $300 million market cap company may be the only person outside the company's management and auditors who has looked at the full financial picture that quarter.</p>

<p>Brefyr processes 10-Q filings for all 7,600+ tracked companies within minutes of their EDGAR publication. Each filing receives an AI-generated significance score based on the content — flagging unusual changes in revenue trajectory, new risk factors, material weaknesses, and other signals that warrant closer attention.</p>
`,
};
