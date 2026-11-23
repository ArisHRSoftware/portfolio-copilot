import type { GlossaryTerm } from "../types";

export const termPutOption: GlossaryTerm = {
  slug: "put-option",
  term: "Put Option",
  title: "Put Option — Profiting From or Hedging Against Falling Stock Prices",
  shortDefinition:
    "A put option is a contract that gives the holder the right, but not the obligation, to sell 100 shares of an underlying stock at a specified strike price before the expiration date.",
  metaDescription:
    "What is a put option? Learn how put options work, how they differ from short selling, their use as portfolio insurance, profit calculations, and how put activity appears in SEC filings.",
  wordCount: 580,
  category: "Trading",
  tags: ["put-option", "options", "bearish", "hedging", "portfolio-insurance"],
  relatedSlugs: ["call-option", "options", "strike-price", "short-selling", "implied-volatility"],
  relatedTerms: ["call-option", "options", "strike-price", "short-selling", "implied-volatility"],
  faq: [
    {
      question: "How is buying a put different from short selling?",
      answer:
        "Both are bearish strategies, but the risk profiles are fundamentally different. When you short sell, your potential loss is unlimited — the stock can rise indefinitely, and you must eventually buy shares to return them. When you buy a put, your maximum loss is the premium paid, regardless of how high the stock goes. Puts also do not require a margin account, do not involve borrowing shares, and have no ongoing borrow fees. The trade-off is that puts have an expiration date — if the stock doesn't decline before expiration, you lose the premium. Short positions can be held indefinitely (as long as you meet margin requirements and the shares remain available to borrow).",
    },
    {
      question: "What happens to a put option if the stock goes to zero?",
      answer:
        "A put option reaches its maximum value when the underlying stock goes to zero. The put is worth the strike price times 100 shares. If you own a $50 put and the stock goes to zero, the put is worth $50 per share ($5,000 per contract). Your profit is $5,000 minus the premium you paid. This defined maximum gain contrasts with call options, which have theoretically unlimited upside. The maximum value of a put is always the strike price.",
    },
    {
      question: "Why would someone sell a put option?",
      answer:
        "Selling (writing) a put is a strategy used by investors who want to either generate income or acquire stock at a lower price. When you sell a put, you collect the premium and take on the obligation to buy 100 shares at the strike price if the buyer exercises. If the stock stays above the strike, the put expires worthless and you keep the premium. If the stock drops below the strike, you buy shares at the strike price — but your effective cost is reduced by the premium received. Many value investors sell puts on stocks they want to own as a way to get paid while waiting for a pullback.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A put option is a bearish instrument or a defensive one, depending on how it is used. Speculators buy puts to profit from a stock's decline. Portfolio managers buy puts as insurance to protect existing positions against market drops. In both cases, the put gives the holder the right to sell 100 shares at the <a href="/glossary/strike-price">strike price</a> before expiration — regardless of how far the stock has fallen.</p>

<p>Unlike <a href="/glossary/short-selling">short selling</a>, buying puts carries defined risk. You can never lose more than the premium you paid. This makes puts an accessible bearish tool for investors who don't want the unlimited-loss exposure of a short position.</p>

<h2 id="mechanics">How a Put Option Works</h2>

<p>You buy one XYZ March $80 put for $4.00. This means:</p>
<ul>
<li><strong>Underlying:</strong> XYZ stock</li>
<li><strong>Strike price:</strong> $80</li>
<li><strong>Expiration:</strong> Third Friday of March</li>
<li><strong>Premium:</strong> $4.00 per share = $400 total</li>
<li><strong>Breakeven:</strong> $76 ($80 strike - $4 premium)</li>
</ul>

<p><strong>If XYZ is at $65 at expiration:</strong> The put is worth $15 intrinsic value ($80 - $65). Your profit is $15 - $4 = $11 per share, or $1,100 per contract — a 275% return.</p>

<p><strong>If XYZ is at $78 at expiration:</strong> The put is worth $2 intrinsic value. You paid $4, so you lose $2 per share ($200 per contract).</p>

<p><strong>If XYZ is at $85 at expiration:</strong> The put expires worthless. You lose the entire $400 premium.</p>

<h2 id="portfolio-insurance">Puts as Portfolio Insurance</h2>

<p>The most sophisticated use of put options is as hedging instruments. An investor holding 10,000 shares of a stock worth $100 each ($1 million position) can buy 100 put contracts at a $90 strike for, say, $3.00 each ($30,000 total). This establishes a price floor: no matter how far the stock falls, the investor can sell at $90. The $30,000 premium is the cost of insurance — 3% of the portfolio value for downside protection.</p>

<p>This is called a <strong>protective put</strong> strategy. It is widely used by institutional portfolio managers, particularly before high-risk events like earnings announcements, elections, or Federal Reserve decisions. The cost of puts increases before such events due to rising <a href="/glossary/implied-volatility">implied volatility</a>, making insurance more expensive precisely when it is most needed.</p>

<h2 id="selling-puts">Selling Puts — The Cash-Secured Put Strategy</h2>

<p>Selling puts flips the risk profile. The put seller collects premium and takes on the obligation to buy shares at the strike price if the stock declines. A <strong>cash-secured put</strong> means the seller has sufficient cash in the account to buy the shares if assigned.</p>

<p>This strategy is popular among value investors. If you believe a stock worth $60 would be an excellent purchase at $50, you can sell a $50 put and collect a $2 premium. If the stock drops to $50, you buy at $50 — but your effective cost is $48 ($50 strike minus $2 premium received). If the stock stays above $50, you keep the $2 premium as income without ever buying the stock. Either way, you are satisfied with the outcome.</p>

<p>The risk is that the stock drops far below the strike. If it falls to $30, you are obligated to buy at $50 — a $20 unrealized loss per share, partially offset by the $2 premium. Cash-secured puts work best on high-quality stocks that you genuinely want to own at lower prices.</p>

<h2 id="put-call-ratio">The Put/Call Ratio as a Sentiment Indicator</h2>

<p>The ratio of put volume to call volume (the put/call ratio) is a widely tracked sentiment indicator. When the ratio is high (above 1.0), more puts are being traded than calls, indicating bearish sentiment or heavy hedging demand. When the ratio is low (below 0.7), bullish sentiment dominates. Contrarian investors use extreme readings as signals — very high put/call ratios sometimes mark market bottoms because maximum fear has already been priced in.</p>

<h2 id="puts-in-filings">Put Options in SEC Filings</h2>

<p>Institutional put positions are disclosed in <a href="/glossary/13f-filing">13F-HR</a> filings. When a prominent hedge fund reports a large put position on a stock, it signals conviction in a bearish thesis. Some of the most famous short campaigns have been accompanied by massive put positions visible in 13F data months before the short thesis was publicly disclosed. Tracking put activity through Brefyr alongside insider selling on <a href="/glossary/form-4">Form 4</a> filings provides a multi-layered view of bearish institutional sentiment.</p>
`,
};
