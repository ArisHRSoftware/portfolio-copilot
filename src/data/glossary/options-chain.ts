import type { GlossaryTerm } from "../types";

export const termOptionsChain: GlossaryTerm = {
  slug: "options-chain",
  term: "Options Chain",
  title: "Options Chain — Reading the Full Menu of Available Options Contracts",
  shortDefinition:
    "An options chain is a table listing all available options contracts for a stock, organized by expiration date and strike price, showing prices, volume, open interest, and key metrics for each contract.",
  metaDescription:
    "What is an options chain? Learn how to read an options chain, understand bid/ask, open interest, volume, the Greeks, and how to use the chain to make informed options trading decisions.",
  wordCount: 560,
  category: "Trading",
  tags: ["options-chain", "options", "open-interest", "volume", "greeks", "trading"],
  relatedSlugs: ["options", "strike-price", "implied-volatility", "call-option", "put-option"],
  relatedTerms: ["options", "strike-price", "implied-volatility", "call-option", "put-option"],
  faq: [
    {
      question: "What does open interest tell me in an options chain?",
      answer:
        "Open interest is the total number of outstanding options contracts that have been opened but not yet closed, exercised, or expired. High open interest at a particular strike price indicates significant existing positions — many traders have bets concentrated there. When a stock approaches a strike with very high open interest, the price action can become 'sticky' because dealers hedging those options dynamically buy and sell stock around that level (this is related to gamma exposure). Open interest changes daily: it increases when new contracts are created and decreases when contracts are closed or expire.",
    },
    {
      question: "What is the difference between volume and open interest?",
      answer:
        "Volume is the number of contracts traded today; open interest is the total number of outstanding contracts. High volume on low open interest means new positions are being opened. High volume on decreasing open interest means existing positions are being closed. For example, if a contract has 500 open interest and 2,000 volume today with open interest rising to 1,500, it means 1,000 new contracts were opened. This distinction matters because new positions signal fresh conviction while closing positions signal profit-taking or capitulation.",
    },
    {
      question: "How do I find the most liquid options contracts in a chain?",
      answer:
        "Look for contracts with the highest open interest and volume combined with the tightest bid-ask spreads. At-the-money options typically have the most liquidity. Near-term expirations (the current month and the next month) are more liquid than distant expirations. For broad market ETFs like SPY, options at nearly every strike are liquid. For individual stocks, liquidity concentrates at round-number strikes ($50, $100) and at strikes near the current price. Avoid contracts with less than 100 open interest or spreads wider than 10% of the mid-price.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An options chain is the complete inventory of <a href="/glossary/options">options contracts</a> available for a stock. It shows every combination of <a href="/glossary/strike-price">strike price</a> and expiration date, along with the price, volume, open interest, and calculated Greeks for each contract. Reading an options chain is the essential skill for options trading — it tells you what the market is pricing, where the liquidity is, and how other traders are positioned.</p>

<h2 id="anatomy">Anatomy of an Options Chain</h2>

<p>A typical options chain is organized with calls on the left and puts on the right, with strike prices running vertically down the center. For each contract, the chain displays:</p>

<ul>
<li><strong>Bid/Ask.</strong> The current bid (highest price a buyer will pay) and ask (lowest price a seller will accept) for the contract. The spread between them is the implicit cost of entering the trade.</li>
<li><strong>Last price.</strong> The price of the most recent trade. This may be stale for illiquid contracts.</li>
<li><strong>Volume.</strong> The number of contracts traded today. High volume indicates active trading interest.</li>
<li><strong>Open interest.</strong> The total number of outstanding contracts. This represents cumulative positioning at that strike and expiration.</li>
<li><strong><a href="/glossary/implied-volatility">Implied volatility</a>.</strong> The market's expected annualized volatility for the stock, derived from the option's price. Each contract has its own IV, and IV varies across strikes (the volatility skew).</li>
<li><strong>Greeks.</strong> Delta (price sensitivity to stock movement), gamma (rate of delta change), theta (daily time decay), and vega (sensitivity to IV changes). These quantify the risk exposures of each contract.</li>
</ul>

<h2 id="reading-the-chain">How to Read an Options Chain</h2>

<p>Start by selecting an expiration date. The chain shows all strikes for that expiration. Strikes above the current stock price are out-of-the-money for calls (highlighted differently on most platforms); strikes below the current price are out-of-the-money for puts.</p>

<p>The at-the-money (ATM) strike — the one closest to the current stock price — is the focal point. ATM options have the highest time value, the most liquidity, and a delta near 0.50 for calls (or -0.50 for puts). Moving away from ATM in either direction, options become cheaper but less likely to profit.</p>

<p>The chain reveals market expectations. If the ATM straddle (call + put) costs $10 on a $100 stock, the market expects approximately a 10% move by expiration. If open interest is concentrated at a particular strike, that level acts as a magnet or barrier for the stock price due to dealer hedging dynamics.</p>

<h2 id="open-interest-analysis">Using Open Interest for Analysis</h2>

<p>Open interest concentration reveals where traders have placed their bets. A large cluster of open interest at the $50 call strike means many traders expect the stock to reach or exceed $50. A large cluster at the $40 put strike means many traders are protecting against or betting on a decline to $40.</p>

<p>The "max pain" theory posits that stocks tend to gravitate toward the strike price where the total value of expiring options is minimized — where the most options expire worthless. While not a reliable prediction tool, it reflects the reality that dealers with large option inventories dynamically hedge in ways that can pin stock prices near high open-interest strikes at expiration.</p>

<h2 id="unusual-activity">Spotting Unusual Options Activity</h2>

<p>Scanning the options chain for unusual activity is a popular trading strategy. When a contract that normally trades 50 contracts per day suddenly trades 5,000, something has changed. Combined with checking whether the trades are opening or closing (by comparing volume to open interest changes), and whether they were bought at the ask (bullish intent) or sold at the bid (bearish or income-seeking), unusual activity can signal institutional conviction before it appears in SEC filings.</p>

<p>When an institution builds a large options position, it may not appear in <a href="/glossary/13f-filing">13F filings</a> for weeks or months. But the footprint in the options chain — elevated volume, rising open interest, widening skew — is visible in real time. Investors using Brefyr to track filings can combine filing-based institutional analysis with options chain data to identify stocks where smart money is positioning ahead of catalysts.</p>
`,
};
