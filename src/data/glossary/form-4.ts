import type { GlossaryTerm } from "../types";

export const termForm4: GlossaryTerm = {
  slug: "form-4",
  term: "Form 4",
  title: "Form 4 — How to Track Insider Buying and Selling",
  shortDefinition:
    "Form 4 is an SEC filing that company insiders (officers, directors, and 10%+ shareholders) must submit within two business days of buying or selling company stock.",
  metaDescription:
    "What is SEC Form 4? A complete guide to insider trading disclosures — who must file, what the form reveals, and how investors use insider buying and selling signals.",
  wordCount: 2700,
  category: "SEC Filings",
  tags: ["sec-filing", "insider-trading", "form-4", "insider-buying", "insider-selling"],
  relatedSlugs: ["insider-trading", "10-k-filing", "sec-edgar", "beneficial-owner"],
  relatedTerms: ["insider-trading", "10-k-filing", "sec-edgar", "beneficial-owner"],
  faq: [
    {
      question: "Who counts as an insider for Form 4 purposes?",
      answer:
        "The SEC defines insiders as officers (CEO, CFO, COO, etc.), directors (board members), and any person who beneficially owns more than 10% of a company's shares. This includes both direct ownership and indirect ownership through trusts, family members, or entities the person controls.",
    },
    {
      question: "Is insider buying always a bullish signal?",
      answer:
        "Insider buying is generally considered positive because insiders are using their own money to purchase shares — they presumably believe the stock is undervalued. However, context matters. A small purchase by a newly appointed director (often required by board policy) means less than a large open-market purchase by the CEO. Look at the dollar amount, not just the transaction.",
    },
    {
      question: "Why do insiders sell stock?",
      answer:
        "Insider selling is more ambiguous than buying. Insiders sell for many legitimate reasons: diversification, tax planning, home purchases, charitable giving, or exercising options before expiration. However, a cluster of insiders selling simultaneously — especially ahead of bad news — can indicate that management is bailing out. The pattern and timing matter more than any single transaction.",
    },
    {
      question: "What is a 10b5-1 plan?",
      answer:
        "A 10b5-1 plan is a pre-arranged trading schedule that an insider sets up in advance. The plan specifies dates, quantities, and price thresholds for automatic trades. Because the plan was created when the insider didn't have material non-public information, trades executed under a 10b5-1 plan are generally exempt from insider trading accusations. Form 4 filings note when a transaction was made pursuant to a 10b5-1 plan.",
    },
    {
      question: "How soon after a trade must Form 4 be filed?",
      answer:
        "Within two business days of the transaction. This tight deadline means investors get near-real-time visibility into insider trading activity. Before the Sarbanes-Oxley Act of 2002, insiders had up to 40 days to report — the two-day rule was a major improvement in transparency.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Form 4 is the SEC's window into what corporate insiders are doing with their own money. When a CEO buys 50,000 shares on the open market, you know about it within two business days. When the entire C-suite starts selling simultaneously, you see that too. No other SEC filing gives individual investors this level of real-time visibility into management behavior.</p>

<p>Academic research has consistently shown that insider transactions — particularly insider purchases — contain predictive value. A 2022 study in the Journal of Financial Economics found that stocks with significant insider buying outperformed the market by an average of 4.5% over the following 12 months. The signal is not foolproof, but it's one of the few legal edges available to retail investors.</p>

<h2 id="what-form-4-contains">What Form 4 Contains</h2>

<p>Each Form 4 filing discloses a specific transaction. The key fields are:</p>

<p><strong>Reporting Person.</strong> The insider's name and their relationship to the company — officer title, director status, or 10%+ owner designation. Knowing who is trading matters. A purchase by the CEO carries more weight than one by a mid-level VP, because the CEO has the most complete picture of the company's prospects.</p>

<p><strong>Transaction Date.</strong> The exact date the trade occurred. Combined with the two-business-day filing requirement, you typically see the filing within 48-72 hours of the actual trade.</p>

<p><strong>Transaction Code.</strong> A single letter that tells you the nature of the trade:</p>

<ul>
<li><strong>P</strong> — Open market or private purchase. This is the strongest bullish signal. The insider chose to spend their own money buying shares at the current market price.</li>
<li><strong>S</strong> — Open market or private sale. The insider is reducing their position.</li>
<li><strong>A</strong> — Grant or award. The company gave the insider shares or options as compensation. Not a market signal — the insider didn't choose to buy.</li>
<li><strong>M</strong> — Exercise of options. The insider converted stock options into shares. Often followed by an S transaction if they immediately sell the shares (a cashless exercise).</li>
<li><strong>F</strong> — Tax withholding. Shares surrendered to cover tax obligations on vesting stock awards. Not a meaningful sell signal — it's an automatic process.</li>
<li><strong>G</strong> — Gift. The insider gave shares to a charity or family member. Tax-motivated, not a bearish signal.</li>
</ul>

<p>The most informative transactions are P (purchase) and S (sale). Everything else is either automatic or administrative.</p>

<p><strong>Shares Traded and Price.</strong> The number of shares bought or sold and the price per share. Multiply to get the dollar value. A $10,000 purchase means less than a $2 million purchase.</p>

<p><strong>Shares Owned After Transaction.</strong> The insider's total position after the trade. This context is critical. If the CEO sells 5,000 shares but still holds 500,000, that's routine diversification. If the CEO sells 5,000 out of 6,000, that's an exit.</p>

<p><strong>Direct vs Indirect Ownership.</strong> Shares held directly by the insider versus shares held through trusts, LLCs, or family accounts. Insiders sometimes use indirect entities for tax or estate planning purposes.</p>

<h2 id="reading-insider-patterns">Reading Insider Trading Patterns</h2>

<p>Individual Form 4 filings tell you about single transactions. Patterns across multiple filings tell you about management sentiment. The patterns that matter most:</p>

<h3>Cluster Buying</h3>

<p>When three or more insiders purchase shares within the same 30-day period, it's called cluster buying. This is one of the strongest positive signals in insider analysis. Multiple insiders, each with their own information, independently reaching the same conclusion — that the stock is worth buying — is more significant than any single purchase.</p>

<h3>Cluster Selling</h3>

<p>The reverse: multiple insiders selling within a short window. This is harder to interpret than cluster buying because insiders sell for many legitimate reasons. But when the CEO, CFO, and three board members all sell in the same month — particularly before a scheduled earnings report — the coincidence strains credulity.</p>

<h3>Contrarian Buying</h3>

<p>An insider who buys after the stock has fallen significantly is making a stronger statement than one who buys at all-time highs. If the stock drops 40% on bad earnings and the CEO immediately purchases $1 million in shares, that insider is putting real money behind their belief that the market has overreacted.</p>

<h3>First Purchase</h3>

<p>When an insider who has never previously purchased shares (beyond initial option exercises or grants) makes their first open-market purchase, it often marks a turning point. Something changed their mind from "I'll hold what the company gives me" to "I want to own more."</p>

<h2 id="common-mistakes">Common Mistakes When Analyzing Form 4</h2>

<p><strong>Mistake 1: Treating all insider sales as bearish.</strong> Most insider selling is routine. Executives receive the majority of their compensation in stock. They have to sell to pay taxes, fund their children's education, or diversify their net worth. Only unusual selling patterns — accelerating pace, multiple insiders simultaneously, or sales ahead of known catalysts — are meaningful.</p>

<p><strong>Mistake 2: Ignoring transaction codes.</strong> An "A" (award) or "M" (option exercise) followed by "S" (sale) is typically a cashless exercise — the insider received options, exercised them, and immediately sold to lock in the spread. The net economic effect is just collecting their compensation. It's not a bearish signal.</p>

<p><strong>Mistake 3: Looking at share count without dollar value.</strong> An insider buying 100 shares of a $500 stock ($50,000) is more meaningful than one buying 10,000 shares of a $0.50 penny stock ($5,000). Dollar value normalizes the signal across different stock prices.</p>

<p><strong>Mistake 4: Not checking the 10b5-1 footnote.</strong> Transactions executed under a pre-arranged 10b5-1 plan were set up weeks or months in advance. They don't reflect the insider's current view of the stock. Always check the footnotes for "10b5-1" or "Rule 10b5-1" references.</p>

<h2 id="how-to-find-form-4">How to Find Form 4 Filings</h2>

<p>Form 4 filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=4&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. Search by company name or ticker to see all insider transactions. Each filing is also linked from the company's EDGAR page alongside their 10-K, 10-Q, and 8-K filings.</p>

<p>The raw EDGAR data is free but difficult to parse. Brefyr processes every Form 4 filing automatically, extracts the transaction details (buyer/seller, shares, price, dollar value, transaction type), and presents them on each stock page alongside significance scores. You can see at a glance whether insiders are net buyers or sellers — without reading dozens of individual forms.</p>

<h2 id="legal-vs-illegal">Legal Insider Trading vs Illegal Insider Trading</h2>

<p>Form 4 covers <em>legal</em> insider trading — transactions that insiders are permitted to make, as long as they disclose them promptly. Insiders can legally buy and sell their company's stock when they don't possess material non-public information (MNPI).</p>

<p><em>Illegal</em> insider trading is when someone trades based on MNPI — information that hasn't been disclosed to the public yet. This is a federal crime prosecuted by the SEC and the Department of Justice. Notable cases include Raj Rajaratnam (Galleon Group, sentenced to 11 years in 2011) and Martha Stewart (ImClone, sentenced to 5 months in 2004).</p>

<p>The existence of Form 4 actually helps regulators detect illegal activity. Unusual trading patterns filed on Form 4 — such as a large purchase days before a positive earnings surprise — can trigger SEC investigations.</p>

<h2 id="small-cap-insider-signals">Why Insider Signals Are Stronger for Small-Caps</h2>

<p>In large-cap stocks, dozens of insiders trade regularly and the market absorbs the information quickly. Institutional investors have algorithms scanning Form 4 filings in real time.</p>

<p>In small-caps and micro-caps, insider transactions are rarer and more meaningful. When the CEO of a $200 million market cap company buys $500,000 in stock, that represents real conviction — and few other investors are watching. The signal has time to develop before the market catches on.</p>

<p>Brefyr tracks insider trading across all 7,600+ U.S.-listed companies, including the thousands of small-caps that institutional scanners ignore. Each Form 4 is processed within minutes and reflected on the relevant stock page with context: who traded, how much, whether it was a purchase or sale, and what the insider's total position looks like afterward.</p>
`,
};
