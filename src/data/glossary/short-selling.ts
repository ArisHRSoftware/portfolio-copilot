import type { GlossaryTerm } from "../types";

export const termShortSelling: GlossaryTerm = {
  slug: "short-selling",
  term: "Short Selling",
  title: "Short Selling — How Investors Profit From Falling Stock Prices",
  shortDefinition:
    "Short selling is borrowing shares from a broker and immediately selling them, with the obligation to buy them back later. The short seller profits if the stock price falls and loses if it rises.",
  metaDescription:
    "What is short selling? How it works mechanically, the risks (including infinite loss potential), short interest data, short squeezes, and what SEC filings reveal about short activity.",
  wordCount: 2200,
  category: "Investing Concepts",
  tags: ["short-selling", "short-interest", "short-squeeze", "borrowing", "risk"],
  relatedSlugs: ["market-capitalization", "insider-trading", "sec-edgar"],
  relatedTerms: ["market-capitalization", "insider-trading", "sec-edgar"],
  faq: [
    {
      question: "How does short selling work step by step?",
      answer: "1) You borrow 100 shares from your broker (the broker lends shares from other clients' accounts). 2) You immediately sell those 100 shares on the open market at, say, $50/share, receiving $5,000. 3) Later, you buy 100 shares back ('cover') at, say, $30/share, spending $3,000. 4) You return the 100 shares to the broker. Your profit: $5,000 - $3,000 = $2,000, minus borrowing fees and interest.",
    },
    {
      question: "Can you lose more than your initial investment when short selling?",
      answer: "Yes — theoretically unlimited losses. When you buy a stock (go long), the most you can lose is 100% (the stock goes to zero). When you short, the stock can rise infinitely. If you short at $50 and the stock goes to $500, you lose $450 per share — 900% of your original position value. This asymmetric risk is why short selling is considered advanced and why brokers require margin accounts.",
    },
    {
      question: "What is a short squeeze?",
      answer: "A short squeeze occurs when a heavily shorted stock's price rises sharply, forcing short sellers to buy shares to cover their positions (limit their losses). Their buying pushes the price up further, which forces more short sellers to cover, creating a feedback loop. GameStop in January 2021 was the most famous example — the stock rose from $20 to $483 in weeks as retail investors targeted a stock with over 100% short interest.",
    },
    {
      question: "Where can I find short interest data?",
      answer: "FINRA requires broker-dealers to report short positions twice monthly. The data is published by exchanges (NYSE, Nasdaq) with about a 10-day delay. Short interest (total shares sold short) and days-to-cover (short interest / average daily volume) are the key metrics. SEC filings don't directly disclose short interest, but 13F-HR filings from institutional investors may reveal put option positions that indicate bearish bets.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Most investors make money when stocks go up. Short sellers make money when stocks go down. They borrow shares they don't own, sell them immediately, and hope to buy them back later at a lower price — pocketing the difference. It's a bet against a company, and it carries risks that don't exist in conventional investing.</p>

<p>Short selling plays a legitimate role in financial markets. Short sellers are often the first to identify overvalued stocks, accounting fraud, and deteriorating business fundamentals. Research firms like Muddy Waters, Citron Research, and Hindenburg Research have exposed billions in shareholder value destruction by publishing detailed short reports backed by SEC filing analysis. At the same time, short selling can be predatory — short-and-distort campaigns spread false information to drive prices down for profit.</p>

<h2 id="mechanics">The Mechanics of a Short Sale</h2>

<p>Short selling requires a margin account (not available in cash accounts or most retirement accounts). Here's the sequence:</p>

<ol>
<li><strong>Locate shares to borrow.</strong> Your broker finds shares in other clients' accounts or from institutional lenders. For liquid, large-cap stocks, borrowing is easy. For small-caps and heavily shorted stocks, shares may be "hard to borrow" — available only at elevated borrowing fees or not at all.</li>
<li><strong>Sell the borrowed shares.</strong> The shares are sold on the open market at the current price. The cash proceeds go into your margin account as collateral.</li>
<li><strong>Wait.</strong> You hold the short position, paying a daily borrowing fee (the "borrow rate" or "stock loan fee"). For easy-to-borrow stocks, this is typically 0.25-1% annually. For hard-to-borrow stocks, it can exceed 50% annually.</li>
<li><strong>Buy to cover.</strong> When you decide to close the position (or are forced to by a margin call), you buy the same number of shares on the open market. If the stock fell, you buy at a lower price and profit. If it rose, you buy at a higher price and lose.</li>
<li><strong>Return the shares.</strong> The purchased shares are returned to the lender. The position is closed.</li>
</ol>

<h3>Profit/Loss Calculation</h3>

<p>Profit = (Sell Price - Buy Price) × Shares - Borrowing Fees - Commissions</p>

<p>Short 1,000 shares at $40, cover at $25:</p>
<p>($40 - $25) × 1,000 = $15,000 profit (minus fees)</p>

<p>Short 1,000 shares at $40, cover at $60:</p>
<p>($40 - $60) × 1,000 = -$20,000 loss (plus fees)</p>

<h2 id="risks">The Risks of Short Selling</h2>

<h3>Unlimited Loss Potential</h3>

<p>A long position can lose at most 100% — the stock goes to zero. A short position has no mathematical ceiling on losses. A stock shorted at $10 that rises to $100 represents a 900% loss. A stock that rises to $1,000 represents a 9,900% loss. This asymmetry is fundamental. One bad short position can wipe out an entire portfolio of winning shorts.</p>

<h3>Short Squeezes</h3>

<p>When a heavily shorted stock rises, short sellers face mounting losses. Brokers issue margin calls requiring additional collateral. Short sellers who can't meet the margin call are forced to buy shares at market prices to close their positions. This forced buying pushes the price up further, triggering more margin calls, creating a cascading feedback loop.</p>

<p>The conditions for a short squeeze:</p>
<ul>
<li><strong>High short interest.</strong> When more than 20-30% of the float is sold short, the squeeze potential increases dramatically.</li>
<li><strong>Low float.</strong> A small number of tradable shares means buying pressure has a larger impact on price.</li>
<li><strong>Positive catalyst.</strong> An earnings beat, FDA approval, or viral social media attention can trigger the initial price rise.</li>
<li><strong>Hard-to-borrow shares.</strong> When no additional shares are available to borrow, short sellers can be forced to cover even without a margin call (a "buy-in").</li>
</ul>

<p>GameStop (January 2021) remains the definitive example. Short interest exceeded 100% of the float — more shares were sold short than actually existed. When retail investors coordinated buying on Reddit's r/wallstreetbets, the resulting squeeze drove the stock from $20 to $483 in three weeks, inflicting billions in losses on hedge funds.</p>

<h3>Borrowing Risk</h3>

<p>The broker can recall borrowed shares at any time, forcing you to cover or find alternative shares to borrow. This typically happens when the original share owner wants to sell. For hard-to-borrow stocks, recalls are unpredictable and can force you out of a position at the worst possible time.</p>

<h3>Dividend Risk</h3>

<p>Short sellers are responsible for paying any dividends distributed while the position is open. If you're short 1,000 shares and the company pays a $1/share dividend, you owe $1,000 to the share lender — regardless of what happens to the stock price.</p>

<h2 id="short-interest">Short Interest Data</h2>

<p>Short interest — the total number of shares currently sold short — is reported twice monthly by FINRA. Exchanges publish the data with approximately a 10-day delay. Two metrics matter:</p>

<p><strong>Short Interest Ratio (Days to Cover):</strong> Short Interest / Average Daily Volume. A ratio of 10 means it would take 10 average trading days for all short sellers to cover. High days-to-cover (above 7-10) increases squeeze risk because short sellers can't exit quickly.</p>

<p><strong>Short Interest as % of Float:</strong> Short Interest / Public Float. Above 20% is considered high. Above 40% is extreme. Above 100% (as with GameStop) is a structural anomaly that occurs because the same shares can be borrowed and re-sold short multiple times.</p>

<h2 id="sec-filings-and-shorts">What SEC Filings Reveal About Short Activity</h2>

<p>The SEC doesn't directly require short position disclosure. However, several filing types provide indirect signals:</p>

<ul>
<li><strong>13F-HR filings.</strong> Institutional investors' quarterly holdings reports include put options, which are bearish bets. A hedge fund holding $50 million in puts on a stock is likely shorting it or hedging a short position.</li>
<li><strong>SC 13D/13G amendments.</strong> If an activist investor who previously held a long position files an amendment showing a reduced position, and short interest simultaneously increases, the activist may have reversed their thesis.</li>
<li><strong>Form 4 insider selling.</strong> Heavy insider selling combined with high short interest is a compound bearish signal — both insiders and outside investors are betting the stock will decline.</li>
<li><strong>Company 10-K risk factors.</strong> Some companies acknowledge short selling pressure in their risk factors, noting that short sellers may publish negative reports that could impact the stock price.</li>
</ul>

<h2 id="legitimate-vs-abusive">Legitimate Short Selling vs Short-and-Distort</h2>

<p>Legitimate short selling based on fundamental analysis — identifying overvalued stocks through SEC filing research, forensic accounting, and industry analysis — serves a valuable market function. It improves price discovery, adds liquidity, and holds companies accountable for their disclosures.</p>

<p>Short-and-distort is the illegal inverse: taking a short position and then spreading false or misleading negative information to drive the price down. The SEC prosecutes this under Rule 10b-5 (anti-fraud), but enforcement is challenging because it's difficult to distinguish genuine short reports from manipulative ones.</p>

<p>For small-cap investors, understanding short activity adds context to stock price movements. A stock declining on high volume with increasing short interest faces genuine skepticism from informed investors. Brefyr tracks insider trading and filing activity that, combined with publicly available short interest data, helps investors assess whether bearish pressure is fundamental or technical.</p>
`,
};
