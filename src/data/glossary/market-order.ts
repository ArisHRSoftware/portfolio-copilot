import type { GlossaryTerm } from "../types";

export const termMarketOrder: GlossaryTerm = {
  slug: "market-order",
  term: "Market Order",
  title: "Market Order — The Fastest Way to Buy or Sell a Stock",
  shortDefinition:
    "A market order is an instruction to buy or sell a security immediately at the best available current price. It guarantees execution but not a specific price.",
  metaDescription:
    "What is a market order? Learn how market orders work, when to use them, the risks of slippage, and how they compare to limit orders and stop-loss orders.",
  wordCount: 650,
  category: "Trading",
  tags: ["market-order", "order-types", "trading", "execution", "slippage"],
  relatedSlugs: ["limit-order", "stop-loss", "bid-ask-spread", "market-maker"],
  relatedTerms: ["limit-order", "stop-loss", "bid-ask-spread", "market-maker"],
  faq: [
    {
      question: "When should I use a market order instead of a limit order?",
      answer:
        "Use a market order when speed of execution matters more than price precision. If you are buying a highly liquid large-cap stock during regular trading hours, the spread is typically a penny or two, so the price you receive will be very close to the quote you see. Market orders are also appropriate when exiting a losing position quickly. Avoid market orders on illiquid stocks, during after-hours sessions, or around volatile news events where the spread can widen dramatically.",
    },
    {
      question: "Can a market order execute at a very different price than I expected?",
      answer:
        "Yes. This is called slippage. Between the time you submit the order and the time it reaches the exchange, the price can move. On thinly traded stocks or during fast-moving markets, the best available price may be significantly different from the last quoted price. For example, if a stock is quoted at $50 but only 100 shares are offered there and you submit a market buy for 5,000 shares, the order will sweep through multiple price levels, and you may pay $50.50 or more for the later fills.",
    },
    {
      question: "Are market orders executed instantly?",
      answer:
        "Market orders are executed as quickly as possible, typically within milliseconds during normal market hours for liquid securities. However, 'immediately' does not mean 'at the price you see on screen.' The displayed quote may already be stale by the time your order arrives. During pre-market or after-hours sessions, liquidity is thinner and execution may take longer with wider price variation.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A market order is the most basic and common type of trade instruction. When you place a market order, you are telling your broker: "Buy (or sell) this security right now, at whatever the best available price is." There is no price condition attached. The exchange matches your order against the best existing limit orders on the opposite side of the order book, and the trade executes.</p>

<p>Market orders prioritize speed over price. They are the default order type on most brokerage platforms because they virtually guarantee execution during normal market hours for liquid securities. The trade-off is that you surrender control over the exact price you pay or receive.</p>

<h2 id="how-it-works">How a Market Order Works</h2>

<p>When you submit a market buy order, the exchange fills it against the lowest-priced sell (ask) orders currently available. When you submit a market sell order, it fills against the highest-priced buy (bid) orders. The order executes at the <strong>national best bid and offer (NBBO)</strong> — the best prices aggregated across all exchanges.</p>

<p>For a stock quoted at $100.00 bid / $100.02 ask:</p>
<ul>
<li>A market buy order fills at approximately $100.02 (the ask price)</li>
<li>A market sell order fills at approximately $100.00 (the bid price)</li>
</ul>

<p>The difference between these two prices is the <a href="/glossary/bid-ask-spread">bid-ask spread</a>, which represents an implicit cost of trading.</p>

<h2 id="slippage">Slippage and Price Risk</h2>

<p>The primary risk of a market order is <strong>slippage</strong> — the difference between the expected execution price and the actual fill price. Slippage occurs because prices move continuously, and the quote you see is a snapshot from milliseconds (or longer) ago.</p>

<p>Slippage is minimal for large-cap, heavily traded stocks during regular hours. Apple, Microsoft, and Amazon typically have spreads of a penny with enormous depth at each price level. But slippage can be substantial in these situations:</p>

<ul>
<li><strong>Low-volume stocks.</strong> Small-cap and micro-cap stocks may have only a few hundred shares available at the best price. A larger market order sweeps through multiple price levels.</li>
<li><strong>Volatile moments.</strong> Earnings announcements, FDA decisions, and breaking news can cause the order book to thin out as <a href="/glossary/market-maker">market makers</a> widen their quotes.</li>
<li><strong>After-hours and pre-market.</strong> Liquidity is a fraction of regular-hours volume. Spreads of $0.10 to $1.00+ are common on mid-cap stocks during extended hours.</li>
<li><strong>Large orders.</strong> An order that exceeds the size available at the best price will fill across multiple price levels, resulting in a volume-weighted average price above (for buys) or below (for sells) the quoted price.</li>
</ul>

<h2 id="market-vs-limit">Market Orders vs. Limit Orders</h2>

<p>The key distinction is certainty of execution versus certainty of price. A market order guarantees you will buy or sell the shares — but not at what price. A <a href="/glossary/limit-order">limit order</a> guarantees the price — but the trade may never execute if the market does not reach your limit.</p>

<table>
<thead><tr><th>Feature</th><th>Market Order</th><th>Limit Order</th></tr></thead>
<tbody>
<tr><td>Execution guarantee</td><td>Yes (during market hours, with liquidity)</td><td>No — only if price is reached</td></tr>
<tr><td>Price guarantee</td><td>No</td><td>Yes — limit price or better</td></tr>
<tr><td>Best for</td><td>Liquid stocks, urgent trades</td><td>Illiquid stocks, specific entry/exit points</td></tr>
<tr><td>Slippage risk</td><td>Higher</td><td>None (but risk of non-execution)</td></tr>
</tbody>
</table>

<h2 id="when-to-use">When Market Orders Make Sense</h2>

<p>Market orders are appropriate when you need certainty that the trade will happen. If you are rebalancing a portfolio of large-cap ETFs, the spread is negligible, and a market order gets the job done in seconds. If a stock you own just reported a fraud scandal and is dropping 20%, a market sell order gets you out immediately — waiting for a limit fill could cost more than the slippage.</p>

<p>Conversely, never use a market order on a stock with a wide spread, during a halt-and-resume sequence, or when placing a very large order relative to average volume. In those cases, a limit order or an algorithmic execution strategy protects you from adverse fills.</p>

<h2 id="sec-context">Regulatory Context</h2>

<p>The SEC's Regulation NMS (National Market System) requires brokers to route market orders to the venue offering the NBBO, ensuring you receive the best publicly available price. However, many retail brokers route orders to wholesale market makers (like Citadel Securities or Virtu Financial) through payment-for-order-flow arrangements. These market makers typically provide slight price improvement over the NBBO, but the practice remains controversial because the broker's economic incentive is to route to the highest-paying market maker, not necessarily the venue with the best execution quality.</p>

<p>Understanding order types is foundational to managing trading costs. The difference between a market order and a <a href="/glossary/limit-order">limit order</a> can mean pennies on a blue-chip trade or dollars on a volatile small-cap. For investors using Brefyr to track SEC filings and insider activity, knowing when to use each order type helps translate research into well-executed trades.</p>
`,
};
