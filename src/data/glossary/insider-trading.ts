import type { GlossaryTerm } from "../types";

export const termInsiderTrading: GlossaryTerm = {
  slug: "insider-trading",
  term: "Insider Trading",
  title: "Insider Trading — Legal vs Illegal, How to Track It, and What It Signals",
  shortDefinition:
    "Insider trading refers to buying or selling a public company's stock by someone who has access to non-public information about the company. Legal insider trading is disclosed via SEC Form 4; illegal insider trading is a federal crime.",
  metaDescription:
    "What is insider trading? The difference between legal and illegal insider trading, how Form 4 filings work, and how to use insider buying/selling data as an investment signal.",
  wordCount: 2600,
  category: "Investing Concepts",
  tags: ["insider-trading", "form-4", "insider-buying", "insider-selling", "sec"],
  relatedSlugs: ["form-4", "beneficial-owner", "sec-edgar", "13f-filing"],
  relatedTerms: ["form-4", "beneficial-owner", "sec-edgar", "13f-filing"],
  faq: [
    {
      question: "Is all insider trading illegal?",
      answer:
        "No. Legal insider trading happens constantly. Company officers and directors regularly buy and sell their own company's stock and report these transactions on SEC Form 4 within two business days. This is perfectly legal as long as they don't trade based on material non-public information. Illegal insider trading is when someone trades on information that hasn't been disclosed to the public — that's a federal crime with penalties up to 20 years in prison.",
    },
    {
      question: "How do I find insider trading data for a specific stock?",
      answer:
        "SEC EDGAR is the primary source — search for the company and filter by Form 4 filings. Brefyr processes every Form 4 filing for 7,600+ companies and displays insider buying and selling activity directly on each stock page, with transaction details and significance scores.",
    },
    {
      question: "What is the difference between insider buying and insider selling?",
      answer:
        "Insider buying (transaction code P) is when an insider purchases shares on the open market using their own money. It's generally a bullish signal. Insider selling (transaction code S) is when an insider sells shares. Selling is more ambiguous because insiders sell for many non-investment reasons — diversification, taxes, personal expenses. The most meaningful sell signals are clusters of multiple insiders selling simultaneously.",
    },
    {
      question: "How quickly does insider trading data become public?",
      answer:
        "Under current SEC rules, insiders must file Form 4 within two business days of the transaction. The filing appears on EDGAR almost immediately after submission. This means retail investors typically have access to insider trading data within 48-72 hours of the actual trade. Brefyr processes these filings within minutes of their appearance on EDGAR.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>The phrase "insider trading" carries an instant connotation of fraud. That reputation is only half earned. Most insider trading is legal, disclosed, and freely available for anyone to analyze. The illegal kind — trading on material non-public information — is a federal crime that the SEC prosecutes aggressively. Understanding the distinction is fundamental to using insider data as an investment tool.</p>

<h2 id="legal-insider-trading">Legal Insider Trading</h2>

<p>Every publicly traded company has insiders: the CEO, CFO, board members, senior vice presidents, and any individual who owns more than 10% of the company's outstanding shares. These people buy and sell their company's stock regularly, and that activity is entirely legal — provided they follow two rules.</p>

<p>First, they cannot trade while in possession of material non-public information (MNPI). If the CEO knows the company is about to announce a massive contract win or a devastating earnings miss, they must wait until that information is public before trading.</p>

<p>Second, they must report every transaction to the SEC on Form 4 within two business days. This filing is publicly available on EDGAR, which means every retail investor can see exactly what insiders are doing with their own money.</p>

<p>The volume of legal insider trading is substantial. In a typical year, U.S. public company insiders file over 200,000 Form 4 transactions. The vast majority are routine — option exercises, planned sales under 10b5-1 plans, and small open-market purchases by new directors. But within that volume, certain transactions stand out as meaningful signals.</p>

<h2 id="signals-that-matter">The Insider Signals That Matter</h2>

<h3>Open-Market Purchases (Transaction Code P)</h3>

<p>When an insider buys shares on the open market — at the prevailing market price, using their own money — they're making an unambiguous statement. They believe the stock is undervalued. Unlike option exercises or stock awards (which are forms of compensation), an open-market purchase is voluntary. The insider chose to write a check.</p>

<p>Research supports the signal. A widely cited study by Lakonishok and Lee (2001, "Are Insider Trades Informative?") found that stocks with heavy insider purchasing outperformed the market by 7.5% over the following year. More recent studies using post-2002 data (after the two-day filing rule) confirm the pattern, though with slightly smaller effect sizes as information reaches the market faster.</p>

<p>The strongest buying signals share certain characteristics:</p>
<ul>
<li><strong>Large dollar amounts.</strong> A $50,000 purchase is interesting. A $2 million purchase is conviction.</li>
<li><strong>Multiple insiders buying simultaneously.</strong> Cluster buying — three or more insiders purchasing within a 30-day window — is more predictive than a single purchase.</li>
<li><strong>Purchases after price declines.</strong> Insiders who buy after a 30%+ stock decline are often signaling that the market has overreacted to bad news.</li>
<li><strong>CEO or CFO purchases.</strong> These individuals have the most comprehensive view of the company's financial position. Their transactions carry more weight than those of lower-ranking officers.</li>
</ul>

<h3>Open-Market Sales (Transaction Code S)</h3>

<p>Insider selling is harder to interpret. There's an asymmetry: insiders buy for only one reason (they think the stock will go up), but they sell for dozens of reasons — diversification, tax planning, funding a home purchase, exercising expiring options, charitable giving, divorce settlements.</p>

<p>The selling patterns that carry the most information:</p>
<ul>
<li><strong>Cluster selling.</strong> When the CEO, CFO, and three board members all sell within the same month, the collective action suggests shared pessimism rather than personal financial needs.</li>
<li><strong>Accelerating pace.</strong> If an insider has sold $100,000 per quarter for three years and suddenly sells $2 million in a single quarter, something changed.</li>
<li><strong>Selling ahead of known catalysts.</strong> Heavy insider selling in the weeks before an earnings report or FDA decision can indicate that insiders expect bad news.</li>
<li><strong>Complete exits.</strong> An insider who sells their entire position — every last share — is definitively saying "I'm done here."</li>
</ul>

<h2 id="illegal-insider-trading">Illegal Insider Trading</h2>

<p>Illegal insider trading is the buying or selling of a security based on material non-public information, in breach of a duty to keep that information confidential. The SEC defines materiality broadly: information is material if a reasonable investor would consider it important when making an investment decision.</p>

<p>The classic case: an executive learns that the company's quarterly revenue will miss estimates by 30%. Before the earnings announcement, the executive sells all their shares. After the announcement, the stock drops 25%. The executive avoided a $500,000 loss using information that no other investor had access to.</p>

<p>Illegal insider trading extends beyond corporate officers. It includes:</p>
<ul>
<li><strong>Tippees.</strong> The CEO tells their spouse, who tells their broker, who trades on the information. Everyone in the chain can be liable.</li>
<li><strong>Misappropriation.</strong> A lawyer working on a merger deal buys stock in the target company before the deal is announced. The lawyer wasn't a company insider, but they misappropriated confidential information.</li>
<li><strong>Front-running.</strong> A broker receives a large client order that will move the stock price and trades their personal account first.</li>
</ul>

<h3>Penalties</h3>

<p>Under the Securities Exchange Act of 1934 and the Insider Trading Sanctions Act of 1984, penalties for illegal insider trading include:</p>
<ul>
<li>Criminal fines up to $5 million for individuals ($25 million for entities)</li>
<li>Prison sentences up to 20 years</li>
<li>Civil disgorgement of profits plus a penalty up to three times the profit gained or loss avoided</li>
<li>Permanent bars from serving as an officer or director of a public company</li>
</ul>

<p>The SEC maintains an <a href="https://www.sec.gov/enforce/sec-enforcement-actions-insider-trading" target="_blank" rel="noopener noreferrer">enforcement actions page</a> listing insider trading cases. In fiscal year 2024, the SEC brought 40 insider trading actions, the most in five years.</p>

<h2 id="using-insider-data">Using Legal Insider Trading Data as an Investment Tool</h2>

<p>The practical value of insider trading data comes from systematic analysis, not individual transactions. Here's a framework:</p>

<p><strong>Step 1: Filter for meaningful transactions.</strong> Ignore option exercises (M), tax withholding (F), and gifts (G). Focus on open-market purchases (P) and sales (S).</p>

<p><strong>Step 2: Weight by dollar amount and seniority.</strong> A $1 million purchase by the CEO matters more than a $25,000 purchase by a VP. Normalize transactions by the insider's total holdings — buying $500,000 worth when you already own $50 million is less significant than buying $500,000 when you own $200,000.</p>

<p><strong>Step 3: Look for patterns, not single transactions.</strong> Cluster buying (multiple insiders) and trend reversals (an insider who switches from selling to buying) are stronger signals than any individual trade.</p>

<p><strong>Step 4: Check for 10b5-1 plans.</strong> Transactions under pre-arranged 10b5-1 plans are set up in advance and don't reflect the insider's current view. Form 4 footnotes disclose when a transaction was made pursuant to a plan.</p>

<p><strong>Step 5: Combine with fundamental analysis.</strong> Insider buying in a stock with improving fundamentals (revenue growth, margin expansion, debt reduction) is a stronger signal than insider buying in a deteriorating business. The insider data tells you what management thinks; the fundamentals tell you whether they're right.</p>

<p>Brefyr automates much of this workflow. Every Form 4 filing is processed, the transaction type and dollar amount are extracted, and the data appears on each stock page alongside the company's filing history and significance scores. For small-cap stocks with limited analyst coverage, this insider data is often the most valuable signal available.</p>
`,
};
