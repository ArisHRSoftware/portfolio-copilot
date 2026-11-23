import type { GlossaryTerm } from "../types";

export const termCoveredCall: GlossaryTerm = {
  slug: "covered-call",
  term: "Covered Call Strategy",
  title: "Covered Call — Generating Income From Stocks You Already Own",
  shortDefinition:
    "A covered call is an options strategy where an investor who owns shares of a stock sells call options against those shares, collecting premium income in exchange for capping the upside potential.",
  metaDescription:
    "What is a covered call strategy? Learn how covered calls work, when to use them, the trade-offs of premium income vs. capped upside, and how to select strike prices and expirations.",
  wordCount: 560,
  category: "Trading",
  tags: ["covered-call", "options-strategy", "income", "premium", "options"],
  relatedSlugs: ["options", "call-option", "strike-price", "iron-condor", "implied-volatility"],
  relatedTerms: ["options", "call-option", "strike-price", "iron-condor", "implied-volatility"],
  faq: [
    {
      question: "What happens if the stock price rises above my covered call strike price?",
      answer:
        "If the stock rises above your strike price at expiration, the call buyer will exercise, and you will sell your shares at the strike price. You keep the premium you collected plus the appreciation from your purchase price to the strike price. You miss out on any gains above the strike. For example, if you bought stock at $50, sold a $60 call for $2, and the stock goes to $75, you sell at $60, keeping $12 per share ($10 appreciation + $2 premium) but missing the $15 above your strike. This is the fundamental trade-off of covered calls.",
    },
    {
      question: "How often should I sell covered calls on the same position?",
      answer:
        "Most covered call sellers use monthly or 30-45 day expirations because time decay (theta) accelerates in the final weeks before expiration. After each expiration (or after buying back the call), you sell a new one — repeating the cycle. Some traders use weekly expirations for more frequent premium collection, but transaction costs and the need to monitor more closely offset the theoretical advantage. The key is consistency: treat covered call income as a systematic strategy, not a one-time trade.",
    },
    {
      question: "Is a covered call a bullish or bearish strategy?",
      answer:
        "A covered call is a mildly bullish to neutral strategy. You benefit most when the stock rises slightly (up to the strike price) or stays flat — you keep the shares, collect the premium, and can sell another call. If the stock rises sharply, you profit but miss the extra upside. If the stock falls significantly, you still own the declining shares — the premium provides only a small cushion. Covered calls are not appropriate for stocks you expect to rise dramatically or fall sharply. They work best on stable, dividend-paying stocks where you expect modest appreciation.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The covered call is the most popular options strategy among retail investors, and for good reason: it generates income from stocks you already own with no additional capital requirement and no naked option risk. You sell a <a href="/glossary/call-option">call option</a> against shares in your portfolio, collect the premium, and either keep your shares (if the stock stays below the <a href="/glossary/strike-price">strike</a>) or sell them at a profit (if the stock rises above the strike). Either outcome is acceptable.</p>

<h2 id="mechanics">How a Covered Call Works</h2>

<p>You own 500 shares of XYZ, currently trading at $50 per share. You sell 5 call contracts (each covering 100 shares) with a $55 strike price expiring in 30 days, collecting $1.50 per share ($750 total).</p>

<p><strong>Scenario 1: Stock stays below $55.</strong> The calls expire worthless. You keep the 500 shares and the $750 premium. You can immediately sell new calls for the next month. Annualized, $750/month on a $25,000 position is roughly 36% annual yield from premiums alone (before considering stock appreciation or dividends).</p>

<p><strong>Scenario 2: Stock rises to $60.</strong> The calls are exercised. You sell your 500 shares at $55, receiving $27,500 plus the $750 premium — a total gain of $3,250 on a $25,000 investment. You miss the additional $2,500 you would have earned selling at $60 instead of $55. Your effective sale price is $56.50 ($55 strike + $1.50 premium).</p>

<p><strong>Scenario 3: Stock drops to $44.</strong> The calls expire worthless (you keep the $750). But your shares lost $3,000 in value. The premium cushions the loss — your net loss is $2,250 instead of $3,000. The covered call provided 2.5% of downside protection, but cannot prevent large losses.</p>

<h2 id="strike-selection">Choosing the Strike Price</h2>

<p>Strike selection defines the risk-reward balance:</p>

<ul>
<li><strong>Out-of-the-money calls (above current price).</strong> Lower premium but more room for the stock to appreciate before being called away. A $55 call on a $50 stock gives you $5 of upside potential plus the premium. This is the most common approach.</li>
<li><strong>At-the-money calls (near current price).</strong> Higher premium but very little room for appreciation. The stock is likely to be called away, turning the position into a one-time premium-collection trade. Used when the investor is neutral and wants maximum income.</li>
<li><strong>In-the-money calls (below current price).</strong> Highest premium but the stock will almost certainly be called away. This is essentially an enhanced exit strategy — you sell the stock at the strike price plus a richer premium than you would get from an OTM call. Used when you want to exit but would like a bit more than the current price.</li>
</ul>

<h2 id="expiration-selection">Choosing the Expiration</h2>

<p>Time decay (theta) is the covered call seller's friend. Options lose time value every day, and this decay accelerates in the final 30 days before expiration. Most covered call sellers target 30-45 day expirations to capture this accelerating decay curve. Shorter expirations (weekly) offer more frequent premium collection but require more active management. Longer expirations (60-90 days) offer higher total premium but slower time decay and tie up the position longer.</p>

<h2 id="when-not-to-use">When Not to Use Covered Calls</h2>

<p>Covered calls are inappropriate in several situations:</p>

<ul>
<li><strong>High-conviction bullish thesis.</strong> If you expect a stock to rise 30% on an upcoming catalyst (earnings, FDA approval, product launch), selling covered calls caps your upside and wastes the thesis.</li>
<li><strong>Stocks you expect to decline significantly.</strong> The premium provides minimal protection — typically 2-5% per month. If the stock drops 20%, the premium barely dents the loss. Use a protective <a href="/glossary/put-option">put</a> instead.</li>
<li><strong>Around major events.</strong> Selling covered calls before earnings or other binary events risks being called away on a positive surprise and capturing only a fraction of the move.</li>
</ul>

<h2 id="tax-and-filing">Tax Considerations and SEC Filings</h2>

<p>Covered call premiums are taxed as short-term capital gains regardless of how long you have held the underlying stock. If you are called away, the premium is added to the sale price for calculating the gain on the stock. If the call expires worthless, the premium is a standalone short-term gain. These tax implications make covered calls more efficient in tax-advantaged accounts (IRAs).</p>

<p>Institutional covered call activity appears in <a href="/glossary/13f-filing">13F filings</a>. Funds that run systematic covered call strategies — like the CBOE S&P 500 BuyWrite Index funds — report their call positions alongside their stock holdings. Tracking these filings through Brefyr reveals which institutions are using covered calls for income versus holding stock outright, providing insight into their return expectations and risk posture.</p>
`,
};
