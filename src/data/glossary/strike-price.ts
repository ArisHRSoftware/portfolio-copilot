import type { GlossaryTerm } from "../types";

export const termStrikePrice: GlossaryTerm = {
  slug: "strike-price",
  term: "Strike Price",
  title: "Strike Price — The Fixed Price in Every Options Contract",
  shortDefinition:
    "The strike price (exercise price) is the fixed price at which the holder of an options contract can buy (for calls) or sell (for puts) the underlying stock upon exercising the option.",
  metaDescription:
    "What is a strike price? Learn how strike prices work for calls and puts, how to choose the right strike, the relationship between strike price and option premium, and moneyness explained.",
  wordCount: 540,
  category: "Trading",
  tags: ["strike-price", "options", "exercise-price", "moneyness", "derivatives"],
  relatedSlugs: ["options", "call-option", "put-option", "options-chain", "implied-volatility"],
  relatedTerms: ["options", "call-option", "put-option", "options-chain", "implied-volatility"],
  faq: [
    {
      question: "How are available strike prices determined for a stock?",
      answer:
        "Options exchanges set available strike prices based on the stock's price level and trading activity. For stocks under $25, strikes are typically spaced $2.50 apart. For stocks between $25 and $200, strikes are $5 apart. For stocks above $200, strikes are $10 apart. Heavily traded stocks and ETFs (like SPY and Apple) have additional strike prices at $1 intervals. Exchanges add new strikes as the stock price moves, ensuring there are always strikes above and below the current price. The options chain shows all available strikes for each expiration date.",
    },
    {
      question: "Should I buy in-the-money or out-of-the-money options?",
      answer:
        "It depends on your objective. In-the-money (ITM) options cost more but have higher delta (they move more closely with the stock), lower theta decay, and higher probability of profit. They behave more like stock. Out-of-the-money (OTM) options are cheaper but have lower delta, faster time decay, and lower probability of profit. They offer more leverage — a small stock move creates a large percentage return — but most expire worthless. For hedging, ITM or at-the-money options provide more reliable protection. For speculative bets on large moves, OTM options maximize leverage.",
    },
    {
      question: "What happens to executive stock options' strike price after a stock split?",
      answer:
        "After a stock split, both the strike price and the number of option shares are adjusted proportionally. In a 2-for-1 split, an executive with 1,000 options at a $100 strike would have 2,000 options at a $50 strike. The total value is preserved. This adjustment is automatic and applies to all listed options contracts as well. Reverse splits work the same way in reverse: a 1-for-10 reverse split turns 1,000 options at $5 into 100 options at $50.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The strike price is the most important parameter in an options contract. It determines the price at which the option holder can transact — buying stock at the strike price for <a href="/glossary/call-option">calls</a>, or selling stock at the strike price for <a href="/glossary/put-option">puts</a>. Combined with the current stock price, the strike price defines whether an option has intrinsic value and how it will respond to price changes.</p>

<h2 id="moneyness">Moneyness — ITM, ATM, and OTM</h2>

<p>The relationship between the strike price and the current stock price defines the option's "moneyness":</p>

<table>
<thead><tr><th>Moneyness</th><th>Call Option</th><th>Put Option</th></tr></thead>
<tbody>
<tr><td><strong>In the Money (ITM)</strong></td><td>Stock price > Strike price</td><td>Stock price < Strike price</td></tr>
<tr><td><strong>At the Money (ATM)</strong></td><td>Stock price = Strike price</td><td>Stock price = Strike price</td></tr>
<tr><td><strong>Out of the Money (OTM)</strong></td><td>Stock price < Strike price</td><td>Stock price > Strike price</td></tr>
</tbody>
</table>

<p>An ITM option has intrinsic value — it would be worth something if exercised right now. An ATM option is right at the boundary. An OTM option has no intrinsic value; its entire premium consists of time value and volatility premium.</p>

<p>Example: Stock trading at $75.</p>
<ul>
<li>$70 call: ITM by $5. Intrinsic value = $5.</li>
<li>$75 call: ATM. Intrinsic value = $0.</li>
<li>$80 call: OTM by $5. Intrinsic value = $0.</li>
<li>$80 put: ITM by $5. Intrinsic value = $5.</li>
<li>$75 put: ATM. Intrinsic value = $0.</li>
<li>$70 put: OTM by $5. Intrinsic value = $0.</li>
</ul>

<h2 id="strike-and-premium">How Strike Price Affects the Premium</h2>

<p>For call options, lower strike prices cost more because they offer the right to buy at a cheaper price. A $50 call on a $60 stock is worth at least $10 (intrinsic value alone); a $70 call on the same stock has zero intrinsic value and is worth only its time value. As the strike moves further out of the money, the premium drops because the probability of the option finishing ITM decreases.</p>

<p>For put options, the relationship is reversed. Higher strike prices cost more because they offer the right to sell at a higher price. A $70 put on a $60 stock is worth at least $10; a $50 put is worth only time value.</p>

<p>This relationship is visible across the <a href="/glossary/options-chain">options chain</a>, where premiums decrease progressively for call strikes above the stock price and for put strikes below it.</p>

<h2 id="choosing-a-strike">How Traders Choose Strike Prices</h2>

<p>Strike selection depends on the trader's objectives, risk tolerance, and market outlook:</p>

<ul>
<li><strong>Aggressive speculation:</strong> OTM strikes. Cheap premium, maximum leverage, but lowest probability of profit. A trader expecting a large earnings surprise might buy OTM calls or puts for the asymmetric payoff — lose $200 or make $2,000.</li>
<li><strong>Moderate directional bet:</strong> ATM or slightly ITM strikes. Higher premium but higher delta and probability of profit. The position moves meaningfully with the stock without the extreme all-or-nothing profile of OTM options.</li>
<li><strong>Stock replacement:</strong> Deep ITM strikes. The option has high delta (0.80-0.95) and behaves almost like owning the stock, but costs less capital and has a defined risk floor. Some traders use deep ITM calls instead of buying stock to free up capital.</li>
<li><strong>Income strategies:</strong> OTM strikes for <a href="/glossary/covered-call">covered calls</a>. Selling a call with a strike above the current price lets you keep the stock while collecting premium, as long as the stock stays below the strike.</li>
</ul>

<h2 id="strike-in-filings">Strike Prices in SEC Filings</h2>

<p>When executives receive stock options as compensation, the strike price is set at the market price on the grant date (at-the-money grants are standard under accounting rules to avoid recording a compensation expense for intrinsic value). This strike price appears in the proxy statement (DEF 14A) compensation tables and in <a href="/glossary/form-4">Form 4</a> filings when the options are exercised. Comparing the strike price to the exercise-date stock price reveals the executive's profit. Through Brefyr, investors can track these exercises and assess whether insiders are capturing value from options grants at prices well above the original strike, which often indicates strong business performance since the grant date.</p>
`,
};
