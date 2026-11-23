import type { GlossaryTerm } from "../types";

export const termLimitOrder: GlossaryTerm = {
  slug: "limit-order",
  term: "Limit Order",
  title: "Limit Order — Control the Price You Pay or Receive for a Stock",
  shortDefinition:
    "A limit order is an instruction to buy or sell a security only at a specified price or better. It guarantees the price but does not guarantee execution.",
  metaDescription:
    "What is a limit order? Learn how limit orders work, the difference between buy and sell limits, time-in-force options, and when limit orders are better than market orders.",
  wordCount: 620,
  category: "Trading",
  tags: ["limit-order", "order-types", "trading", "price-control", "execution"],
  relatedSlugs: ["market-order", "stop-loss", "bid-ask-spread", "after-hours-trading"],
  relatedTerms: ["market-order", "stop-loss", "bid-ask-spread", "after-hours-trading"],
  faq: [
    {
      question: "What happens if my limit order price is never reached?",
      answer:
        "The order remains open (unfilled) until it expires based on its time-in-force setting. A day order expires at the end of the trading session. A good-til-canceled (GTC) order stays active for a broker-defined period, typically 60 to 90 days. If the market never reaches your limit price during that window, the order is canceled with no trade executed and no cost to you beyond the missed opportunity.",
    },
    {
      question: "Can a limit order get a better price than I specified?",
      answer:
        "Yes. A limit order guarantees your specified price or better. If you place a limit buy at $50 and the stock is trading at $48, your order will fill at $48 (or the best available ask), not $50. Similarly, a limit sell at $100 when the stock is trading at $105 will fill at or near $105. The limit price acts as a ceiling for buys and a floor for sells.",
    },
    {
      question: "Why would a limit order only partially fill?",
      answer:
        "Partial fills occur when there are not enough shares available at your limit price to complete the entire order. If you place a limit buy for 1,000 shares at $25 and only 400 shares are offered at that price, you receive 400 shares and the remaining 600 stay as an open order. The unfilled portion continues to wait at your limit price. Most brokers do not charge additional commissions for partial fills that complete within the same trading day.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A limit order gives you control over the price at which your trade executes. When you place a buy limit order, you specify the maximum price you are willing to pay. When you place a sell limit order, you specify the minimum price you are willing to accept. The order only executes if the market reaches your price or offers something better.</p>

<p>This price control comes with a trade-off: unlike a <a href="/glossary/market-order">market order</a>, a limit order does not guarantee execution. If the stock never touches your limit price, the order sits unfilled. For this reason, limit orders are the preferred tool for investors who value price precision over execution speed.</p>

<h2 id="how-it-works">How Limit Orders Work</h2>

<p>A buy limit order at $50 means: "Buy this stock only if I can get it for $50 or less." The order enters the order book and waits. If the ask price drops to $50 or below, the exchange matches and fills the order. If the ask never reaches $50, the order expires unfilled.</p>

<p>A sell limit order at $100 means: "Sell this stock only if I can get $100 or more." If the bid price reaches $100 or above, the order executes. Otherwise, it remains open.</p>

<p>Limit orders interact with the <a href="/glossary/bid-ask-spread">bid-ask spread</a>. If a stock is quoted at $49.90 bid / $50.10 ask and you place a buy limit at $50.00, your order enters the bid side at $50.00, narrowing the spread. You become the best bid, and a seller willing to accept $50.00 will trade with you.</p>

<h2 id="time-in-force">Time-in-Force Settings</h2>

<p>Every limit order has a time-in-force (TIF) instruction that tells the exchange how long to keep the order active:</p>

<ul>
<li><strong>Day order.</strong> Expires at the close of the current trading session (4:00 PM ET for US equities). This is the default on most platforms.</li>
<li><strong>Good-til-canceled (GTC).</strong> Remains active until filled or manually canceled, subject to a broker-imposed maximum (typically 60-90 days).</li>
<li><strong>Immediate-or-cancel (IOC).</strong> Fills whatever quantity is available at the limit price immediately, then cancels the remainder. Useful for large orders where you want partial execution without leaving an open order.</li>
<li><strong>Fill-or-kill (FOK).</strong> The entire order must fill at the limit price immediately, or the entire order is canceled. No partial fills.</li>
<li><strong>Extended hours.</strong> Some brokers allow limit orders during <a href="/glossary/pre-market-trading">pre-market</a> and <a href="/glossary/after-hours-trading">after-hours</a> sessions, where only limit orders are permitted (market orders are generally not accepted).</li>
</ul>

<h2 id="limit-vs-market">When to Use a Limit Order Instead of a Market Order</h2>

<p>Limit orders are superior to market orders in several situations:</p>

<ul>
<li><strong>Illiquid stocks.</strong> Small-cap and micro-cap stocks often have wide spreads. A market order on a stock with a $0.50 spread costs you $0.25 per share in implicit trading costs. A limit order lets you specify your price and wait.</li>
<li><strong>Volatile markets.</strong> During earnings releases, macro events, or market-wide selloffs, spreads widen and prices move fast. A limit order prevents you from buying at an inflated price or selling at a depressed one.</li>
<li><strong>Specific entry points.</strong> Technical traders who want to enter at a support level or exit at a resistance level use limit orders to automate execution at their target prices.</li>
<li><strong>Large orders.</strong> Placing a market order for 10,000 shares of a mid-cap stock could move the price against you. A limit order caps your cost per share.</li>
</ul>

<h2 id="partial-fills">Partial Fills and Order Priority</h2>

<p>Limit orders are matched on a price-time priority basis. At the same price level, the order that arrived first is filled first. If your limit buy at $50.00 is behind 50,000 other shares at $50.00, you will not be filled until those earlier orders execute or are canceled. This queue position matters on heavily traded stocks near key price levels.</p>

<p>Partial fills happen when there are insufficient shares available at your price. You might order 1,000 shares but receive only 300 if the stock touches your price briefly before moving away. The remaining 700 shares stay on the book. Most brokers handle partial fills without additional commission charges during the same session.</p>

<h2 id="strategic-use">Strategic Use of Limit Orders</h2>

<p>Experienced investors use limit orders to implement disciplined strategies. Set a buy limit below the current price to accumulate shares on a pullback. Set a sell limit above the current price to take profits at a predefined target. Combine a limit sell with a <a href="/glossary/stop-loss">stop-loss</a> order to bracket a position with both an upside target and a downside exit.</p>

<p>When researching stocks through SEC filings on Brefyr, translating your analysis into limit orders ensures you act on your research at the prices your analysis supports — not at whatever the market happens to be doing in the moment you click "buy."</p>
`,
};
