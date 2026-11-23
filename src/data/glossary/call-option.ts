import type { GlossaryTerm } from "../types";

export const termCallOption: GlossaryTerm = {
  slug: "call-option",
  term: "Call Option",
  title: "Call Option — Profiting From Rising Stock Prices With Leverage",
  shortDefinition:
    "A call option is a contract that gives the holder the right, but not the obligation, to buy 100 shares of an underlying stock at a specified strike price before the expiration date.",
  metaDescription:
    "What is a call option? Learn how call options work, when to buy or sell calls, profit and loss calculations, and how call activity in SEC filings signals institutional sentiment.",
  wordCount: 580,
  category: "Trading",
  tags: ["call-option", "options", "bullish", "leverage", "derivatives"],
  relatedSlugs: ["put-option", "options", "strike-price", "covered-call", "implied-volatility"],
  relatedTerms: ["put-option", "options", "strike-price", "covered-call", "implied-volatility"],
  faq: [
    {
      question: "What is the maximum I can lose buying a call option?",
      answer:
        "The maximum loss when buying a call option is 100% of the premium you paid — nothing more. If you buy a call for $3.00 per share ($300 per contract), and the stock stays below the strike price through expiration, the option expires worthless and you lose $300. This defined-risk characteristic is one of the primary advantages of buying calls versus buying stock on margin, where losses can exceed your initial investment.",
    },
    {
      question: "When should I exercise a call option versus selling it?",
      answer:
        "In most cases, selling the call option in the market is better than exercising it. When you exercise, you capture only the intrinsic value (stock price minus strike price). When you sell, you capture both intrinsic value and any remaining time value. The only common exception is when you want to own the actual shares — for example, to capture an upcoming dividend — and the remaining time value is negligible (typically very close to expiration). Most professional options traders rarely exercise; they close positions by selling.",
    },
    {
      question: "What does it mean when a call option is 'in the money'?",
      answer:
        "A call option is 'in the money' (ITM) when the current stock price is above the strike price. For example, a $50 call on a stock trading at $55 is $5 in the money. 'At the money' (ATM) means the stock price equals the strike price. 'Out of the money' (OTM) means the stock price is below the strike — the call has no intrinsic value and would expire worthless if the stock stayed there. ITM options are more expensive but have higher probability of profit; OTM options are cheaper but more likely to expire worthless.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A call option is a bullish bet. When you buy a call, you are paying a premium for the right to purchase 100 shares of a stock at a fixed price (the <a href="/glossary/strike-price">strike price</a>) before a specific date (the expiration). If the stock rises above the strike price by more than the premium you paid, you profit. If it does not, you lose the premium — and nothing more.</p>

<p>This defined-risk leverage is what makes calls attractive. Instead of spending $5,000 to buy 100 shares of a $50 stock, you might spend $300 on a call option that controls the same 100 shares. If the stock rises to $60, your $300 call could be worth $1,000 or more — a 233% return versus a 20% return on the stock purchase. But if the stock stays flat or falls, you lose the $300 entirely while the stock buyer still holds shares worth $5,000 or more.</p>

<h2 id="mechanics">How a Call Option Works</h2>

<p>You buy one AAPL January $200 call for $8.00. This means:</p>
<ul>
<li><strong>Underlying:</strong> Apple (AAPL)</li>
<li><strong>Strike price:</strong> $200</li>
<li><strong>Expiration:</strong> Third Friday of January</li>
<li><strong>Premium:</strong> $8.00 per share = $800 total (100 shares per contract)</li>
<li><strong>Breakeven:</strong> $208 ($200 strike + $8 premium)</li>
</ul>

<p><strong>If AAPL is at $220 at expiration:</strong> The call is worth $20 intrinsic value ($220 - $200). Your profit is $20 - $8 = $12 per share, or $1,200 per contract — a 150% return on your $800 investment.</p>

<p><strong>If AAPL is at $205 at expiration:</strong> The call is worth $5 intrinsic value. You paid $8, so you lose $3 per share, or $300 per contract.</p>

<p><strong>If AAPL is at $195 at expiration:</strong> The call expires worthless. You lose the entire $800 premium.</p>

<h2 id="buying-vs-selling">Buying Calls vs. Selling Calls</h2>

<p><strong>Buying a call</strong> (going long) is a leveraged bullish bet with defined risk. You pay the premium and hope the stock rises. Your maximum loss is the premium; your maximum gain is theoretically unlimited as the stock can rise indefinitely.</p>

<p><strong>Selling (writing) a naked call</strong> is the opposite: you collect the premium and hope the stock stays below the strike. Your maximum gain is the premium received; your maximum loss is theoretically unlimited because if the stock soars, you must deliver shares at the strike price regardless of how high the market price goes. Naked call writing is one of the highest-risk strategies in options trading and requires significant margin.</p>

<p><strong>Selling a <a href="/glossary/covered-call">covered call</a></strong> is a popular compromise — you sell calls against stock you already own. If the stock rises above the strike, your shares are "called away" (sold at the strike price), capping your upside but keeping the premium as income. If the stock stays below the strike, you keep the shares and the premium.</p>

<h2 id="factors-affecting-calls">What Moves Call Prices</h2>

<p>Call option prices are influenced by the "Greeks" — mathematical sensitivities to various factors:</p>

<ul>
<li><strong>Delta:</strong> How much the call price changes per $1 move in the stock. ATM calls have a delta around 0.50; deep ITM calls approach 1.00 (they move dollar-for-dollar with the stock).</li>
<li><strong>Theta:</strong> Time decay — the amount the call loses each day simply due to the passage of time. Theta accelerates as expiration approaches. This works against call buyers and in favor of call sellers.</li>
<li><strong>Vega:</strong> Sensitivity to <a href="/glossary/implied-volatility">implied volatility</a>. When implied volatility increases (e.g., before earnings), call prices rise even if the stock hasn't moved. After the event, volatility drops ("IV crush") and call prices deflate.</li>
<li><strong>Gamma:</strong> The rate of change of delta. High gamma means the option's delta is shifting rapidly, making the position more sensitive to stock price changes. Gamma is highest for ATM options near expiration.</li>
</ul>

<h2 id="calls-in-filings">Call Options in SEC Filings</h2>

<p>When institutional investors report their quarterly holdings in <a href="/glossary/13f-filing">13F-HR</a> filings, call option positions appear alongside stock holdings. A hedge fund reporting 50,000 call contracts (representing 5 million shares) is making a large leveraged bullish bet. Tracking these filings through Brefyr reveals which institutions are using calls for leveraged upside versus simply owning stock, providing a nuanced view of institutional conviction levels.</p>

<p>Executive stock <a href="/glossary/options">options</a> are a form of call option — the company grants the executive the right to buy shares at a fixed price. When these vest and are exercised, the resulting <a href="/glossary/form-4">Form 4</a> filing reveals the strike price, the market price at exercise, and whether the executive held or sold the acquired shares.</p>
`,
};
