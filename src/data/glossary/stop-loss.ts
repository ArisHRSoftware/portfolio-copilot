import type { GlossaryTerm } from "../types";

export const termStopLoss: GlossaryTerm = {
  slug: "stop-loss",
  term: "Stop-Loss Order",
  title: "Stop-Loss Order — Automatically Limit Your Downside Risk",
  shortDefinition:
    "A stop-loss order is an instruction to sell a security when it drops to a specified price, converting into a market order once the stop price is triggered. It is designed to limit losses on a position.",
  metaDescription:
    "What is a stop-loss order? Learn how stop-loss and stop-limit orders work, the risks of gap-downs, trailing stops, and strategies for protecting your portfolio.",
  wordCount: 630,
  category: "Trading",
  tags: ["stop-loss", "order-types", "risk-management", "trading", "stop-limit"],
  relatedSlugs: ["market-order", "limit-order", "short-selling", "circuit-breaker"],
  relatedTerms: ["market-order", "limit-order", "short-selling", "circuit-breaker"],
  faq: [
    {
      question: "What is the difference between a stop-loss and a stop-limit order?",
      answer:
        "A stop-loss order becomes a market order when the stop price is reached, guaranteeing execution but not a specific price. A stop-limit order becomes a limit order when the stop price is reached, guaranteeing a minimum price but not execution. If a stock gaps below your stop-limit price (say from $50 to $40 overnight), the limit order at $48 will never fill because the stock is already trading at $40 — you remain stuck in the position. Stop-loss orders execute regardless, but potentially at a much worse price than the stop.",
    },
    {
      question: "Can a stop-loss order trigger during after-hours trading?",
      answer:
        "On most brokers, standard stop-loss orders are only active during regular market hours (9:30 AM - 4:00 PM ET). They do not trigger on after-hours or pre-market price movements. If a stock drops 30% on bad earnings reported after the close, your stop-loss will trigger at the opening price the next morning — which may be far below your stop price. Some brokers offer extended-hours stop orders, but liquidity is thin and execution quality is poor.",
    },
    {
      question: "How far below the current price should I set a stop-loss?",
      answer:
        "There is no universal answer. It depends on the stock's volatility, your risk tolerance, and your time horizon. A common approach is to set stops based on the stock's average true range (ATR) — 1.5 to 2 times the ATR below your entry price. For a less volatile stock, 5-8% below entry may be reasonable. For a volatile growth stock, 15-20% may be necessary to avoid being stopped out by normal price fluctuations. Setting stops too tight causes frequent whipsaws; setting them too loose defeats the purpose of risk management.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A stop-loss order is a risk management tool that automatically sells a stock when its price falls to a predetermined level. It exists to enforce discipline: rather than watching a losing position and hoping for a recovery, the stop-loss executes mechanically and limits the damage. The concept is simple — "if this stock drops to $X, get me out" — but the execution details matter enormously.</p>

<h2 id="how-it-works">How Stop-Loss Orders Work</h2>

<p>When you place a stop-loss order, you set a <strong>stop price</strong> below the current market price. The order remains dormant until the stock's price drops to or below the stop price. At that point, the stop-loss converts into a <a href="/glossary/market-order">market order</a> and executes at the next available price.</p>

<p>Example: You own shares purchased at $60. You set a stop-loss at $54 (a 10% loss limit). If the stock drops to $54, your stop triggers and becomes a market sell order. In a liquid market, it fills near $54. In a fast-moving decline, it might fill at $53.50 or lower due to slippage.</p>

<p>The critical point: a stop-loss does not guarantee you sell at exactly the stop price. It guarantees that a sell order is submitted once the stop price is reached. The actual execution price depends on market conditions at that instant.</p>

<h2 id="stop-limit">Stop-Loss vs. Stop-Limit Orders</h2>

<p>A <strong>stop-limit</strong> order adds a price floor. When the stop price is triggered, instead of becoming a market order, it becomes a <a href="/glossary/limit-order">limit order</a> at a specified limit price. This protects against selling at a terrible price during a crash — but introduces the risk that the order never fills at all.</p>

<p>Stop-loss at $54 (market): stock drops to $54, sells at next available price — might be $53.80, might be $51.00 in a gap-down. You are out of the position.</p>

<p>Stop-limit at $54 stop / $52 limit: stock drops to $54, limit sell at $52 is activated. If the stock is trading between $52 and $54, it fills. If the stock gaps to $45 (overnight earnings miss), the limit order at $52 sits unfilled. You are still holding the position at $45.</p>

<h2 id="trailing-stop">Trailing Stop Orders</h2>

<p>A trailing stop moves with the stock price. Instead of a fixed stop price, you set a trail amount (dollar or percentage) below the highest price reached since the order was placed. As the stock rises, the stop rises with it. When the stock reverses, the stop stays put.</p>

<p>Example: You buy at $50 and set a 10% trailing stop. The initial stop is at $45. The stock rises to $70 — the stop moves to $63. The stock then drops to $63, triggering the stop. You lock in a $13 gain per share instead of riding it back down to $50 or lower.</p>

<p>Trailing stops are popular because they let winners run while protecting profits. The challenge is setting the trail distance: too tight and normal volatility triggers premature exits; too loose and you give back too much of the gain.</p>

<h2 id="gap-risk">Gap Risk — The Stop-Loss Weakness</h2>

<p>The biggest vulnerability of stop-loss orders is <strong>gap risk</strong>. Stocks do not trade continuously. The market closes at 4:00 PM ET and reopens at 9:30 AM. If negative news breaks overnight — an earnings miss, a fraud allegation, an FDA rejection — the stock can open dramatically lower, completely bypassing your stop price.</p>

<p>If your stop is at $54 and the stock opens at $35 after a negative 8-K filing, your stop-loss triggers at the open and you sell near $35. The stop did not protect you at $54; it protected you from holding a stock that might drop to $20. This gap risk is particularly acute around earnings dates, FDA decision dates, and major <a href="/glossary/8k-filing">8-K events</a>.</p>

<h2 id="strategies">Stop-Loss Strategies</h2>

<ul>
<li><strong>Percentage-based.</strong> Set the stop a fixed percentage below purchase price (e.g., 7-10%). Simple and consistent, but ignores the stock's individual volatility profile.</li>
<li><strong>Volatility-based.</strong> Use the stock's average true range (ATR) to set stops. A stock with an ATR of $2 might warrant a stop $4 below entry (2x ATR). This adapts to the stock's normal price fluctuations.</li>
<li><strong>Support-based.</strong> Place the stop just below a technical support level. If the support breaks, the thesis is invalidated and the exit is justified.</li>
<li><strong>Time-based review.</strong> Rather than a hard stop, review positions weekly and manually exit if the investment thesis has changed. This avoids whipsaw but requires discipline.</li>
</ul>

<p>Investors who use Brefyr to monitor SEC filings and insider activity can combine fundamental alerts with stop-loss orders. If a company's CFO files a Form 4 showing large insider sales while the stock approaches your stop level, that is a compound signal that may warrant tightening the stop or exiting manually before it triggers.</p>
`,
};
