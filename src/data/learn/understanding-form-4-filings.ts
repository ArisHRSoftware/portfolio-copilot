import type { LearnArticle } from "../types";

export const articleUnderstandingForm4Filings: LearnArticle = {
  slug: "understanding-form-4-filings",
  pillar: "insider-trading",
  title: "Understanding Form 4 Filings: The Complete Investor's Guide",
  metaDescription:
    "A comprehensive guide to reading SEC Form 4 insider transaction filings. Covers transaction codes, ownership types, derivative securities, 10b5-1 plans, and how to extract actionable signals from insider trading disclosures.",
  readingTime: 14,
  difficulty: "beginner",
  wordCount: 1100,
  category: "Insider Trading Basics",
  tags: ["form-4", "insider-trading", "sec-filings", "beginner", "transaction-codes"],
  relatedSlugs: [
    "insider-buying-signals",
    "insider-selling-analysis",
    "cluster-buying-patterns",
    "how-to-track-insider-trading",
  ],
  faq: [
    {
      question: "Who is required to file a Form 4?",
      answer:
        "Three categories of people must file Form 4: officers (CEO, CFO, COO, and other C-suite executives, plus vice presidents and anyone performing a similar policy-making function), directors (all members of the board), and beneficial owners of more than 10% of a class of the company's equity securities. These individuals are collectively known as 'insiders' under Section 16 of the Securities Exchange Act. The filing requirement applies to all transactions in the company's equity securities, including stock purchases, sales, option exercises, and certain gifts.",
    },
    {
      question: "How quickly must a Form 4 be filed after a transaction?",
      answer:
        "Form 4 must be filed with the SEC within two business days of the transaction. For example, a trade executed on Monday must be filed by Wednesday. The filing appears on EDGAR almost immediately after electronic submission. Late filings are flagged by the SEC, and a pattern of late filings can indicate governance problems. Some companies assist their insiders with timely filing — others leave it to the individual, which can result in delays.",
    },
    {
      question: "What is the difference between Form 3, Form 4, and Form 5?",
      answer:
        "Form 3 is the initial statement of beneficial ownership, filed when a person first becomes an insider (appointed as officer or director, or acquires more than 10% of a class of shares). Form 4 reports changes in ownership — every subsequent purchase, sale, or derivative transaction. Form 5 is an annual report of transactions that should have been reported on Form 4 but were exempt from the two-day filing requirement, or that were reported late. For investment research, Form 4 is by far the most useful because it shows real-time trading activity.",
    },
    {
      question: "Can I trade a stock immediately after seeing an insider buy on Form 4?",
      answer:
        "You can, but rushing to trade on a single Form 4 filing is not a sound strategy. Academic research shows that insider buying signals perform best over 3-12 month holding periods, not in the days immediately following the filing. A single insider purchase may reflect a personal financial decision rather than a view on the company's prospects. The signal strength increases significantly when multiple insiders buy in the same period (cluster buying), when the purchase amount is large relative to the insider's compensation, and when the insider is the CEO or CFO rather than a lower-ranking officer.",
    },
  ],
  lastUpdated: "2026-11-13",
  body: `
<p>Form 4 is the SEC filing that discloses insider trading — the legal kind. Every time a company officer, director, or major shareholder buys or sells stock, they must report the transaction to the SEC within two business days. These filings are publicly available on EDGAR and contain a wealth of information about what the people who know a company best are doing with their own money.</p>

<p>For individual investors, Form 4 filings are among the most actionable SEC documents. Unlike 10-K and 10-Q filings, which are backward-looking, insider transactions provide a real-time signal about how insiders view the company's current value and future prospects. This guide explains how to read every field on a Form 4 and extract the information that matters for investment decisions.</p>

<h2 id="form-4-structure">Form 4 Structure: What Each Section Contains</h2>

<p>A Form 4 has a standardized structure with several key sections. Understanding the layout saves time when you're scanning dozens of filings.</p>

<h3>Header Information</h3>

<p>The top of the form identifies the <strong>reporting person</strong> (the insider), the <strong>issuer</strong> (the company), and the <strong>relationship</strong> (officer, director, 10% owner, or other). If the insider holds multiple roles — for example, a director who is also a 10% owner — all applicable boxes are checked.</p>

<p>The <strong>date of earliest transaction reported</strong> tells you when the trade actually happened. Compare this to the filing date to see whether the insider filed promptly (within two business days) or late. Late filings may indicate disorganized governance or an attempt to delay disclosure.</p>

<h3>Table I: Non-Derivative Securities</h3>

<p>Table I covers transactions in common stock and other non-derivative securities. Each row represents a transaction with these columns:</p>

<ul>
<li><strong>Title of Security:</strong> Usually "Common Stock."</li>
<li><strong>Transaction Date:</strong> When the trade occurred.</li>
<li><strong>Transaction Code:</strong> A single letter indicating the type of transaction (see below).</li>
<li><strong>Shares:</strong> Number of shares in the transaction, with an (A) for acquisition or (D) for disposition.</li>
<li><strong>Price:</strong> Per-share price. For gifts, this is typically blank or $0.</li>
<li><strong>Shares Owned Following Transaction:</strong> The insider's total holdings after the trade.</li>
<li><strong>Ownership Form:</strong> Direct (D) or Indirect (I). Indirect ownership means the shares are held through a trust, family member, or entity controlled by the insider.</li>
</ul>

<h3>Table II: Derivative Securities</h3>

<p>Table II covers stock options, restricted stock units (RSUs), warrants, and other derivative securities. This table is more complex because derivative transactions involve both the derivative instrument and the underlying security. Key fields include the exercise or conversion price, the expiration date, and the number of shares acquired or disposed of upon exercise.</p>

<h2 id="transaction-codes">Transaction Codes: What Each Letter Means</h2>

<p>The transaction code is the most important field for interpreting an insider's action. Here are the codes that matter for investment analysis:</p>

<h3>Codes That Signal Conviction</h3>

<ul>
<li><strong>P — Open-market purchase.</strong> The insider used their own money to buy shares on the open market, at the prevailing market price. This is the strongest bullish signal because it represents a voluntary, discretionary investment. The insider is putting personal capital at risk because they believe the stock is undervalued.</li>
<li><strong>S — Open-market sale.</strong> The insider sold shares on the open market. Sales are more ambiguous than purchases because insiders sell for many reasons unrelated to their view of the company: portfolio diversification, tax obligations, large purchases (houses, tuition), or estate planning.</li>
</ul>

<h3>Codes That Are Informational But Less Conclusive</h3>

<ul>
<li><strong>M — Exercise or conversion of derivative security.</strong> Usually an option exercise. The insider may exercise and hold (bullish — they want more shares) or exercise and sell (neutral to bearish — they're monetizing compensation). Check whether the exercise is paired with a sale on the same date.</li>
<li><strong>A — Grant or award.</strong> The company granted securities to the insider, typically stock options or RSUs. This is a compensation event, not a market transaction. Not informative for investment analysis.</li>
<li><strong>F — Payment of exercise price or tax liability using securities.</strong> The insider surrendered shares to cover the tax withholding on vesting RSUs. This is automatic and not a discretionary sale — ignore it for investment signal purposes.</li>
<li><strong>G — Gift.</strong> The insider gave shares to someone (family member, charity). Not indicative of market view, though a pattern of gifts by multiple insiders before a stock decline has been observed.</li>
</ul>

<h3>Codes That Warrant Investigation</h3>

<ul>
<li><strong>J — Other acquisition or disposition.</strong> Catch-all code for transactions that don't fit standard categories. Check the footnotes for explanation.</li>
<li><strong>C — Conversion of derivative security.</strong> Convertible securities being converted to common stock. Check whether the conversion was voluntary or mandatory.</li>
</ul>

<h2 id="10b5-1-plans">10b5-1 Plans: Pre-Arranged Trading</h2>

<p>A 10b5-1 plan is a written plan for trading securities that the insider establishes while not in possession of material non-public information. Once established, trades execute automatically according to the plan's predetermined parameters (quantity, price, and date).</p>

<p>Form 4 footnotes indicate whether a transaction was executed under a 10b5-1 plan. Trades under these plans are <strong>less informative</strong> than discretionary trades because they were arranged in advance and don't reflect the insider's current view of the company's value. When analyzing insider selling, always check for a 10b5-1 footnote before drawing conclusions.</p>

<p>However, establishing or terminating a 10b5-1 plan can be informative. Recent SEC rules (effective 2023) require a cooling-off period of at least 90 days between plan adoption and the first trade, and they limit plan modifications. The 10-K's proxy statement discloses 10b5-1 plan adoption and termination events.</p>

<h2 id="dollar-value">Evaluating Dollar Value and Context</h2>

<p>Not all insider purchases are equal. A $50,000 purchase by a CEO earning $15 million per year is a token gesture. A $2 million purchase by the same CEO represents meaningful conviction. Context matters:</p>

<ul>
<li><strong>Purchase size relative to compensation.</strong> An insider spending 50% or more of their annual base salary on open-market purchases is making a statement. The proxy statement (DEF 14A) discloses executive compensation for this comparison.</li>
<li><strong>Purchase size relative to existing holdings.</strong> An insider who owns $10 million in stock and buys another $500,000 is increasing their position by 5%. An insider who owns $100,000 and buys $500,000 is making a dramatically larger bet.</li>
<li><strong>Purchase timing.</strong> Buying after a significant stock price decline is more informative than buying at all-time highs. The insider is signaling that the market has overreacted to bad news.</li>
<li><strong>Multiple purchases over time.</strong> A series of purchases over weeks or months — not a single token buy — indicates sustained conviction. Check previous Form 4 filings for the same insider.</li>
</ul>

<h2 id="reading-footnotes">Reading the Footnotes</h2>

<p>Form 4 footnotes contain essential context that the table data alone doesn't convey:</p>

<ul>
<li><strong>10b5-1 plan disclosure:</strong> Whether the transaction was pre-planned or discretionary.</li>
<li><strong>Indirect ownership details:</strong> The name of the trust, LLC, or family member through which shares are held indirectly.</li>
<li><strong>Transaction conditions:</strong> Vesting schedules for RSUs, exercise conditions for options, conversion terms for convertible securities.</li>
<li><strong>Price details:</strong> For block trades or weighted average prices, the footnotes may disclose the price range and number of transactions aggregated into the reported line.</li>
</ul>

<p>Never skip the footnotes. A Form 4 showing a large sale might look alarming in Table I, but the footnote may reveal it was an automatic 10b5-1 execution or an F-code tax withholding that was misclassified. The footnotes resolve ambiguity.</p>

<h2 id="getting-started">Getting Started with Form 4 Analysis</h2>

<ol>
<li><strong>Start with companies you own or are researching.</strong> Pull up their recent Form 4 filings on EDGAR. Look for P (purchase) and S (sale) transactions specifically.</li>
<li><strong>Filter out noise.</strong> Ignore A (grants), F (tax withholding), and G (gifts). Focus on open-market transactions.</li>
<li><strong>Calculate dollar values.</strong> Multiply shares by price for each transaction to see the actual investment amount.</li>
<li><strong>Check 10b5-1 status.</strong> Read the footnotes to determine whether sales were pre-planned.</li>
<li><strong>Look for patterns.</strong> A single purchase is interesting. Multiple insiders buying in the same period is a much stronger signal. That pattern — cluster buying — is covered in detail in our separate guide.</li>
</ol>

<p>Form 4 is the only SEC filing that tells you what insiders are doing with their own money in real time. Learning to read it systematically transforms a raw data feed into an investment research edge.</p>
`,
};
