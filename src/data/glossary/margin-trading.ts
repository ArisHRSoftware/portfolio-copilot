import type { GlossaryTerm } from "../types";

export const termMarginTrading: GlossaryTerm = {
  slug: "margin-trading",
  term: "Margin Trading",
  title: "Margin Trading — Borrowing Money From Your Broker to Buy Stocks",
  shortDefinition:
    "Margin trading is borrowing money from your broker to purchase securities, using your existing holdings as collateral. It amplifies both gains and losses, and brokers can force you to sell if your account value drops too low.",
  metaDescription:
    "What is margin trading? Learn how margin accounts work, initial and maintenance margin requirements, margin calls, Regulation T rules, and the amplified risks of leveraged trading.",
  wordCount: 580,
  category: "Trading",
  tags: ["margin-trading", "leverage", "margin-call", "regulation-t", "borrowing", "risk"],
  relatedSlugs: ["leverage", "short-selling", "market-order", "stop-loss"],
  relatedTerms: ["leverage", "short-selling", "market-order", "stop-loss"],
  faq: [
    {
      question: "What is a margin call and what happens if I get one?",
      answer:
        "A margin call occurs when your account equity falls below the broker's maintenance margin requirement (typically 25-30% of the total position value, though brokers can set higher requirements). The broker demands that you deposit additional cash or securities to bring the account back to compliance. If you do not meet the margin call promptly (often within 2-5 business days, though brokers can act immediately), the broker can sell your securities without your consent to cover the shortfall. These forced liquidations often happen at the worst possible time — when markets are falling — locking in losses.",
    },
    {
      question: "How much can I borrow on margin?",
      answer:
        "Under Federal Reserve Regulation T, you can borrow up to 50% of the purchase price of marginable securities. This means for every $10,000 in cash, you can buy up to $20,000 in stock. However, not all securities are marginable — penny stocks, IPOs in their first 30 days, and certain volatile securities may not be eligible. Brokers can also set stricter requirements than Regulation T. After purchase, the maintenance margin requirement (typically 25%) determines how far the position can decline before triggering a margin call.",
    },
    {
      question: "How much does it cost to borrow on margin?",
      answer:
        "Brokers charge interest on margin loans, typically based on the broker call rate plus a markup. As of 2025-2026, margin rates at major brokers range from 5-12% annually depending on the loan balance (larger balances get lower rates). This interest accrues daily and is charged monthly. If you hold a $50,000 margin loan at 8% annually, you pay approximately $4,000 per year — or about $333 per month — regardless of whether your investments are profitable. This carrying cost is a drag on returns that must be factored into any margin strategy.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Margin trading means borrowing money from your broker to buy more securities than you could with your cash alone. If you have $50,000 and use margin, you might buy $100,000 worth of stock — with the broker lending you the other $50,000 at interest, using your securities as collateral. This <a href="/glossary/leverage">leverage</a> doubles your buying power, doubling both your potential gains and your potential losses.</p>

<p>Margin accounts are required for <a href="/glossary/short-selling">short selling</a>, options trading, and buying on credit. They are distinct from cash accounts, where you can only trade with the money you have deposited.</p>

<h2 id="how-it-works">How Margin Works</h2>

<p>When you open a margin account, the broker sets two critical thresholds:</p>

<ul>
<li><strong>Initial margin (Regulation T).</strong> You must deposit at least 50% of the purchase price when buying securities on margin. To buy $100,000 of stock, you need at least $50,000 in equity. The broker lends you the rest.</li>
<li><strong>Maintenance margin.</strong> After purchase, your equity must remain above a minimum percentage of the total position value — typically 25% at the exchange level, though many brokers require 30-40%. If your equity drops below this threshold, you receive a margin call.</li>
</ul>

<p><strong>Example:</strong> You have $50,000 cash and buy $100,000 of stock on margin. Your equity is $50,000 (50%). The stock drops 20% to $80,000. Your equity is now $30,000 ($80,000 position - $50,000 loan = $30,000). That is 37.5% equity — still above the 25% maintenance requirement. But if the stock drops another 15% to $68,000, your equity is $18,000 (26.5%) — approaching the threshold. At $66,667, your equity hits exactly 25% and a margin call is triggered.</p>

<h2 id="margin-calls">Margin Calls and Forced Liquidation</h2>

<p>A margin call is a demand from your broker to restore your account to compliance. You can meet it by depositing additional cash, depositing additional marginable securities, or selling existing positions to reduce the loan balance. If you fail to act, the broker will sell securities in your account — typically the most liquid ones — without your approval.</p>

<p>Forced liquidation is especially painful because it typically occurs during market declines. The broker sells your best, most liquid stocks to cover the margin shortfall, leaving you with the least liquid and potentially worst-performing positions. This is the margin spiral: declining prices trigger margin calls, which trigger forced selling, which further depresses prices.</p>

<h2 id="costs">The Cost of Margin</h2>

<p>Margin loans carry interest rates that vary by broker and loan size. Rates of 6-12% annually are typical. This interest accrues daily and compounds, creating a constant drag on returns. To justify using margin, your investments must earn more than the margin interest rate after taxes. If you are paying 8% on a margin loan and your portfolio returns 10%, your net benefit from leverage is only 2% — before accounting for the amplified risk of a drawdown.</p>

<h2 id="portfolio-margin">Regulation T vs. Portfolio Margin</h2>

<p>Regulation T margin (50% initial, 25% maintenance) applies to most retail accounts. Sophisticated investors with accounts above $100,000-$150,000 may qualify for <strong>portfolio margin</strong>, which calculates margin requirements based on the overall risk of the portfolio rather than position-by-position. Portfolio margin can provide significantly more leverage — sometimes 6:1 or higher — for well-diversified or hedged portfolios. However, the increased leverage amplifies the consequences of being wrong.</p>

<h2 id="risks">Risks of Margin Trading</h2>

<ul>
<li><strong>Amplified losses.</strong> A 20% market decline on a 2:1 leveraged portfolio is a 40% loss of equity. With enough leverage, a relatively normal market correction can wipe out an account.</li>
<li><strong>Interest costs.</strong> Margin interest accrues regardless of performance. During flat or declining markets, interest costs accelerate losses.</li>
<li><strong>Forced selling at the worst time.</strong> Margin calls force liquidation during declines, locking in losses and preventing recovery.</li>
<li><strong>No deposit insurance.</strong> Unlike bank deposits, margin loans are not FDIC-insured. If your broker fails, your margin debt remains but your assets may be tied up in bankruptcy proceedings.</li>
</ul>

<p>When evaluating companies through SEC filings on Brefyr, margin considerations add context to stock selection. A stock purchased on margin must generate returns that exceed the margin interest rate plus the risk of forced liquidation. Conservative investors use margin sparingly, if at all; aggressive traders treat it as a core tool for amplifying conviction trades while understanding the asymmetric downside risk.</p>
`,
};
