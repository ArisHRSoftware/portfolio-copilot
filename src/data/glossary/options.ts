import type { GlossaryTerm } from "../types";

export const termOptions: GlossaryTerm = {
  slug: "options",
  term: "Options (Calls and Puts)",
  title: "Options — Contracts That Give You the Right to Buy or Sell Stock",
  shortDefinition:
    "Options are financial derivatives that give the holder the right, but not the obligation, to buy (call) or sell (put) an underlying asset at a specified price before a certain date.",
  metaDescription:
    "What are options? Learn how call and put options work, the difference between buyers and sellers, intrinsic vs. time value, and how options relate to SEC filings and institutional activity.",
  wordCount: 680,
  category: "Trading",
  tags: ["options", "calls", "puts", "derivatives", "hedging", "speculation"],
  relatedSlugs: ["call-option", "put-option", "strike-price", "implied-volatility", "options-chain", "covered-call", "iron-condor"],
  relatedTerms: ["call-option", "put-option", "strike-price", "implied-volatility", "options-chain", "covered-call", "iron-condor"],
  faq: [
    {
      question: "What is the difference between buying and selling (writing) an option?",
      answer:
        "The buyer pays a premium and receives the right to exercise. Their maximum loss is the premium paid; their potential profit is theoretically unlimited for calls and substantial for puts. The seller (writer) collects the premium and takes on the obligation to fulfill the contract if the buyer exercises. The seller's maximum profit is the premium received; their potential loss is theoretically unlimited for naked calls. Approximately 70-80% of options expire worthless, which is why many professional traders prefer the selling side — but the risk of large losses on a single bad trade can wipe out months of premium income.",
    },
    {
      question: "Why do options have an expiration date?",
      answer:
        "Options are time-limited contracts. The expiration date creates the concept of 'time value' — the possibility that the option could become profitable before it expires. As expiration approaches, time value decays (this is called 'theta decay'). At expiration, an option is worth only its intrinsic value (the difference between the stock price and strike price, if favorable) or nothing at all. Weekly options expire every Friday; monthly options expire on the third Friday of each month; LEAPS (Long-term Equity Anticipation Securities) can expire up to two or three years out.",
    },
    {
      question: "How do options appear in SEC filings?",
      answer:
        "Institutional investors report options positions in their quarterly 13F-HR filings. The filing shows the type (call or put), the number of shares controlled, and the value of the position. Large put positions by hedge funds can signal bearish bets. Employee stock options granted to executives appear in proxy statements (DEF 14A) and are reported when exercised on Form 4 insider trading filings. Tracking options activity in 13F filings through tools like Brefyr reveals institutional sentiment that is not visible in stock-only analysis.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Options are contracts that derive their value from an underlying asset — most commonly a stock. They come in two types: <a href="/glossary/call-option">calls</a> (the right to buy) and <a href="/glossary/put-option">puts</a> (the right to sell). Unlike buying stock directly, options give you leveraged exposure with defined risk, making them powerful tools for speculation, hedging, and income generation.</p>

<p>Each options contract controls 100 shares of the underlying stock. If a call option on Apple costs $5.00, one contract costs $500 (100 shares x $5.00). This leverage is both the appeal and the danger of options — small moves in the stock price create large percentage moves in the option's value.</p>

<h2 id="calls-and-puts">Calls and Puts Explained</h2>

<p>A <strong><a href="/glossary/call-option">call option</a></strong> gives the holder the right to buy 100 shares at the <a href="/glossary/strike-price">strike price</a> before expiration. Buying a call is a bullish bet — you profit if the stock rises above the strike price plus the premium you paid. If the stock stays below the strike, the call expires worthless and you lose only the premium.</p>

<p>A <strong><a href="/glossary/put-option">put option</a></strong> gives the holder the right to sell 100 shares at the strike price before expiration. Buying a put is a bearish bet — you profit if the stock drops below the strike price minus the premium. Puts also serve as insurance: an investor holding 1,000 shares of a stock can buy 10 put contracts to protect against a decline.</p>

<h2 id="option-pricing">What Determines an Option's Price</h2>

<p>An option's price (premium) consists of two components:</p>

<ul>
<li><strong>Intrinsic value.</strong> The amount by which the option is "in the money." A call with a $50 strike on a stock trading at $55 has $5 of intrinsic value. An out-of-the-money option has zero intrinsic value.</li>
<li><strong>Time value (extrinsic value).</strong> The additional premium above intrinsic value, reflecting the probability that the option could move further into the money before expiration. Time value is highest for at-the-money options with distant expirations. It decays as expiration approaches — this is "theta decay."</li>
</ul>

<p>Several factors influence the premium:</p>

<ul>
<li><strong>Stock price vs. strike price.</strong> How far in or out of the money the option is.</li>
<li><strong>Time to expiration.</strong> More time means more opportunity for the stock to move, increasing the premium.</li>
<li><strong><a href="/glossary/implied-volatility">Implied volatility</a>.</strong> Higher expected volatility increases option prices because the probability of a large move (favorable for the option holder) is higher.</li>
<li><strong>Interest rates and dividends.</strong> Higher rates slightly increase call prices and decrease put prices. Upcoming dividends decrease call prices and increase put prices because the stock price drops by the dividend amount on the ex-date.</li>
</ul>

<h2 id="options-strategies">Common Uses of Options</h2>

<p>Options support strategies impossible with stock alone:</p>

<ul>
<li><strong>Speculation.</strong> Buy calls to bet on a stock rising or puts to bet on it falling, with leverage and defined risk (you can never lose more than the premium).</li>
<li><strong>Hedging.</strong> Portfolio managers buy puts on their holdings to protect against market declines. This is portfolio insurance — the put gains value as the stock loses value.</li>
<li><strong>Income generation.</strong> The <a href="/glossary/covered-call">covered call</a> strategy — selling calls against stock you own — generates premium income in exchange for capping your upside. This is the most common options strategy among retail investors.</li>
<li><strong>Volatility trading.</strong> Strategies like the straddle (buy a call and a put at the same strike) profit from large moves in either direction, regardless of whether the stock goes up or down. The trader is betting on the magnitude of the move, not the direction.</li>
<li><strong>Multi-leg strategies.</strong> The <a href="/glossary/iron-condor">iron condor</a> and similar strategies combine multiple options to create positions with defined risk and reward that profit from stocks staying within a range.</li>
</ul>

<h2 id="sec-filings">Options in SEC Filings</h2>

<p>Options activity appears throughout SEC filings. Institutional investors must report options positions in their quarterly <a href="/glossary/13f-filing">13F-HR</a> filings, disclosing whether they hold calls or puts, the number of shares controlled, and the position's value. A hedge fund filing a 13F showing $200 million in put options on a stock is an unmistakable bearish signal.</p>

<p>Executive stock options — compensation granted by the company — appear in proxy statements (DEF 14A) with details on vesting schedules and strike prices. When executives exercise these options (buying company stock at a discounted strike price), they must file a <a href="/glossary/form-4">Form 4</a> within two business days. Tracking option exercises through Brefyr reveals when insiders convert their options into actual stock positions and whether they hold or immediately sell the acquired shares.</p>

<p>The <a href="/glossary/options-chain">options chain</a> for any stock shows all available contracts, their prices, and key metrics like <a href="/glossary/implied-volatility">implied volatility</a> and open interest. Understanding this information is essential for anyone who uses options as part of their investment strategy.</p>
`,
};
