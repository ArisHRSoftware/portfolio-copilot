import type { LearnArticle } from "../types";

export const articleHowToTrackInsiderTrading: LearnArticle = {
  slug: "how-to-track-insider-trading",
  pillar: "sec-filings",
  title: "How to Track Insider Trading: A Practical Guide Using Form 4 Filings",
  metaDescription:
    "Step-by-step guide to tracking insider buying and selling using SEC Form 4 filings. How to find insider trades on EDGAR, interpret transaction codes, and build a systematic watchlist.",
  readingTime: 12,
  difficulty: "intermediate",
  wordCount: 2800,
  category: "Research Strategies",
  tags: ["insider-trading", "form-4", "research", "intermediate", "strategy"],
  relatedSlugs: ["how-to-read-sec-filings", "sec-filing-types-explained", "how-to-use-edgar"],
  faq: [
    {
      question: "Is it legal to trade based on insider buying data?",
      answer: "Yes, absolutely. Form 4 filings are public information available on EDGAR. Using publicly disclosed insider transaction data to inform your investment decisions is completely legal. What's illegal is trading on material non-public information — information that hasn't been disclosed to the public. Form 4 data is, by definition, already public.",
    },
    {
      question: "How quickly after an insider trade can I see the Form 4?",
      answer: "Insiders must file Form 4 within two business days of the transaction. The filing appears on EDGAR almost immediately after electronic submission. In practice, you can typically see an insider's trade within 48-72 hours of it occurring. Brefyr processes Form 4 filings within minutes of their EDGAR publication.",
    },
    {
      question: "Should I copy every insider purchase?",
      answer: "No. Insider buying is a useful signal, not a guaranteed winner. Not every insider purchase is informative — small purchases by newly appointed directors, purchases required by board policies, and purchases by low-ranking officers carry less weight. Focus on large-dollar open-market purchases by CEOs and CFOs, cluster buying by multiple insiders, and purchases made after significant stock price declines.",
    },
    {
      question: "Which insiders' trades matter most?",
      answer: "CEO and CFO purchases are the strongest signals because these individuals have the most comprehensive view of the company's financial position and prospects. Board members' purchases are meaningful but less informed. VP-level officers have narrower visibility. 10%+ shareholders' trades reflect conviction but not necessarily insider knowledge of operations.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Insider trading data is one of the few legal edges available to retail investors. When a CEO spends $2 million of their own money buying shares on the open market, that's not a stock tip — it's a revealed preference backed by real dollars. Academic research consistently shows that insider purchases precede above-average returns, particularly for small-cap stocks where the signal has time to develop before the broader market catches on.</p>

<p>This guide walks through the mechanics of tracking insider trades systematically: where to find the data, how to filter noise from signal, and how to incorporate insider activity into your research process.</p>

<h2 id="where-to-find">Where to Find Insider Trading Data</h2>

<h3>SEC EDGAR (Primary Source)</h3>

<p>Every insider transaction is filed on Form 4, available for free on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=4&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">EDGAR</a>. To see insider trades for a specific company:</p>

<ol>
<li>Go to EDGAR Company Search</li>
<li>Enter the company name or ticker</li>
<li>Set filing type to "4"</li>
<li>Click Search</li>
</ol>

<p>Results show every Form 4 filing in reverse chronological order. Each filing represents one or more transactions by a single insider. Click into a filing to see the transaction details: who traded, what they did, how many shares, at what price, and their resulting ownership.</p>

<h3>Brefyr (Processed Data)</h3>

<p>Brefyr processes every Form 4 filing for 7,600+ companies within minutes of EDGAR publication. Each stock page displays insider trading history in a structured format — no need to read individual Form 4 documents. The platform extracts transaction type, dollar value, and the insider's remaining position, and factors this data into the filing significance score.</p>

<h2 id="reading-form4">Reading a Form 4 Filing</h2>

<p>Form 4 is a structured document with specific fields. Here's what to focus on:</p>

<h3>Table I: Non-Derivative Securities</h3>

<p>This table shows transactions in common stock — the most relevant section for most investors. Key columns:</p>

<ul>
<li><strong>Transaction Date.</strong> When the trade occurred.</li>
<li><strong>Transaction Code.</strong> The single most important field.
  <ul>
  <li><strong>P = Purchase.</strong> Open-market buy. The strongest bullish signal. The insider chose to spend their own money.</li>
  <li><strong>S = Sale.</strong> Open-market sell. Ambiguous — insiders sell for many non-investment reasons.</li>
  <li><strong>A = Award/Grant.</strong> Company gave the insider shares or options as compensation. Not a market signal.</li>
  <li><strong>M = Exercise.</strong> Insider exercised stock options. Often immediately followed by an S (cashless exercise). Neutral.</li>
  <li><strong>F = Tax withholding.</strong> Shares surrendered to cover taxes on vesting equity awards. Automatic, not meaningful.</li>
  <li><strong>G = Gift.</strong> Insider donated shares. Tax planning, not a bearish signal.</li>
  </ul>
</li>
<li><strong>Amount.</strong> Number of shares transacted.</li>
<li><strong>Price.</strong> Price per share. Multiply by amount for dollar value.</li>
<li><strong>Shares Owned Following Transaction.</strong> The insider's total position after the trade. Critical context — selling 5,000 shares out of 500,000 is noise; selling 5,000 out of 6,000 is an exit.</li>
</ul>

<h3>Table II: Derivative Securities</h3>

<p>Shows transactions in options, warrants, and other derivative securities. Most relevant when insiders exercise options (code M) — check whether they held the shares or immediately sold (code S in Table I for the same date).</p>

<h3>Footnotes</h3>

<p>Always check the footnotes. They disclose whether the transaction was executed under a <strong>10b5-1 plan</strong> (pre-arranged trading schedule). Transactions under 10b5-1 plans are set up in advance and don't reflect the insider's current view of the stock. Non-10b5-1 transactions are discretionary and more informative.</p>

<h2 id="signal-framework">The Signal Hierarchy: What Matters Most</h2>

<p>Not all insider trades are created equal. Here's a ranking from most to least informative:</p>

<h3>Tier 1: Highest Signal (Act on It)</h3>

<p><strong>Cluster buying.</strong> Three or more insiders purchasing within a 30-day window. Multiple informed individuals independently concluding the stock is worth buying at current prices is the strongest insider signal. Studies show cluster buying predicts 12-month outperformance of 5-8% above the market.</p>

<p><strong>CEO/CFO large purchases after a decline.</strong> When the stock has fallen 20%+ and the CEO or CFO buys $500,000+ in shares, they're putting real money behind their belief that the market overreacted. These contrarian purchases have the highest predictive value of any single-transaction signal.</p>

<h3>Tier 2: Strong Signal (Research Further)</h3>

<p><strong>CEO/CFO purchases at any time.</strong> Even without a price decline, open-market purchases by the CEO or CFO indicate management confidence. Weight by dollar amount — $1 million means more than $50,000.</p>

<p><strong>First-ever purchase by a long-tenured insider.</strong> An executive who has been at the company for 10 years and never bought stock on the open market suddenly purchasing shares represents a regime change in their thinking.</p>

<p><strong>Director purchases above board minimums.</strong> Many boards require directors to hold a minimum stock position. Purchases beyond that minimum are voluntary and meaningful.</p>

<h3>Tier 3: Moderate Signal (Note for Context)</h3>

<p><strong>Single purchases by VP-level officers.</strong> Informative but these individuals have narrower visibility than C-suite. Weight less heavily.</p>

<p><strong>10%+ shareholder purchases.</strong> Indicates conviction from a large holder but doesn't carry the same inside-knowledge signal as officer purchases.</p>

<h3>Tier 4: Low/No Signal (Usually Ignore)</h3>

<p><strong>Option exercises (M) followed by sales (S).</strong> Cashless exercises are compensation collection, not market bets.</p>

<p><strong>Tax withholding (F).</strong> Automatic shares surrendered for tax. Not discretionary.</p>

<p><strong>Grants and awards (A).</strong> Company giving equity as compensation. The insider didn't choose to buy.</p>

<p><strong>10b5-1 plan transactions.</strong> Pre-arranged, not reflective of current views.</p>

<p><strong>Small purchases by newly appointed directors.</strong> Often required by board policy within the first year of service.</p>

<h2 id="selling-signals">What Insider Selling Tells You (and Doesn't)</h2>

<p>Insider selling is inherently ambiguous. Insiders sell for legitimate personal reasons: diversification, tax planning, home purchases, tuition, charitable giving, divorce. A single insider selling is almost never informative.</p>

<p>The selling patterns that do warrant attention:</p>

<ul>
<li><strong>Cluster selling (3+ insiders in 30 days).</strong> The collective action suggests shared pessimism, not personal financial needs.</li>
<li><strong>Accelerating pace.</strong> An insider who sold $100K/quarter for years suddenly selling $2M in one quarter.</li>
<li><strong>Complete exits.</strong> An insider who sells their entire remaining position is definitively done.</li>
<li><strong>Selling before scheduled catalysts.</strong> Heavy insider sales in the weeks before an earnings report, FDA decision, or product launch.</li>
<li><strong>CFO selling.</strong> The CFO has the most detailed view of the company's financial trajectory. CFO sales carry more weight than other officers' sales.</li>
</ul>

<h2 id="building-watchlist">Building an Insider Trading Watchlist</h2>

<p>Here's a systematic approach for incorporating insider data into your investment process:</p>

<h3>Screening for Opportunities</h3>

<ol>
<li><strong>Identify cluster buying.</strong> Look for companies where 3+ insiders purchased in the last 30 days. Use EDGAR's full-text search or a service like Brefyr that aggregates Form 4 data across all companies.</li>
<li><strong>Filter for dollar value.</strong> Ignore transactions below $100,000. Focus on $500,000+ for the strongest signal.</li>
<li><strong>Filter for transaction type.</strong> Only open-market purchases (code P). Exclude exercises, awards, gifts, and 10b5-1 plan transactions.</li>
<li><strong>Check the business fundamentals.</strong> Insider buying in a company with deteriorating fundamentals might mean the insider is wrong (it happens). Combine the insider signal with your own analysis of the 10-K, 10-Q, and recent 8-K filings.</li>
</ol>

<h3>Monitoring Positions</h3>

<p>For stocks you already own, watch for:</p>
<ul>
<li>New insider purchases (confirmation of your thesis)</li>
<li>Cluster selling (potential warning)</li>
<li>CFO selling accelerating (review the fundamentals)</li>
<li>Large 10b5-1 plan initiations (insider expects to sell a lot — review why)</li>
</ul>

<h3>Red Flag Checklist</h3>

<p>Before buying any stock based on insider activity:</p>
<ul>
<li>Is this a P (purchase) or something else? Only P counts.</li>
<li>Is the dollar amount meaningful? $1M+ for CEOs, $200K+ for directors.</li>
<li>Is it under a 10b5-1 plan? If yes, less informative.</li>
<li>What percentage of their holdings does this represent?</li>
<li>Are other insiders also buying (cluster)?</li>
<li>Do the fundamentals support the thesis? Read the latest 10-K/10-Q.</li>
<li>Is the stock price at an unusual level (post-decline = stronger signal)?</li>
</ul>

<h2 id="academic-evidence">What the Research Says</h2>

<p>The academic literature on insider trading profitability is extensive and largely consistent:</p>

<ul>
<li><strong>Lakonishok & Lee (2001):</strong> Insider purchases predict abnormal returns of 7.5% over 12 months. Insider sales have minimal predictive power.</li>
<li><strong>Jeng, Metrick & Zeckhauser (2003):</strong> Insider purchases earn abnormal returns of 11.2% over the year following the purchase.</li>
<li><strong>Cohen, Malloy & Pomorski (2012):</strong> "Opportunistic" insider trades (non-routine, not under 10b5-1 plans) predict future returns. "Routine" trades do not.</li>
<li><strong>Cziraki, De Goeij & Renneboog (2014):</strong> Insider trading profits are larger for smaller firms, consistent with the information advantage being greater when less external analysis exists.</li>
</ul>

<p>The consistent finding: insider buying is predictive, especially for small-caps, especially when the buying is discretionary (not 10b5-1), and especially in clusters. Insider selling is much less predictive due to the many non-investment reasons for selling.</p>

<p>Brefyr was built specifically for this use case — processing every Form 4 filing for 7,600+ companies within minutes of EDGAR publication, extracting the key transaction data, and presenting it alongside AI-generated significance scores and filing history on each stock page.</p>
`,
};
