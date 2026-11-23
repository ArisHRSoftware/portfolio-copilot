import type { GlossaryTerm } from "../types";

export const termGammaSqueeze: GlossaryTerm = {
  slug: "gamma-squeeze",
  term: "Gamma Squeeze",
  title: "Gamma Squeeze — How Options Market Mechanics Can Amplify Stock Moves",
  shortDefinition:
    "A gamma squeeze occurs when market makers who have sold call options must buy increasing amounts of stock to hedge their exposure as the stock price rises, creating a feedback loop that amplifies the price move.",
  metaDescription:
    "What is a gamma squeeze? Learn how dealer hedging through gamma creates self-reinforcing stock price moves, how gamma squeezes differ from short squeezes, and their role in events like GameStop.",
  wordCount: 560,
  category: "Market Structure",
  tags: ["gamma-squeeze", "options", "gamma", "delta-hedging", "market-maker", "volatility"],
  relatedSlugs: ["short-squeeze", "options", "call-option", "market-maker", "implied-volatility"],
  relatedTerms: ["short-squeeze", "options", "call-option", "market-maker", "implied-volatility"],
  faq: [
    {
      question: "What is gamma in the context of options?",
      answer:
        "Gamma is the rate at which an option's delta changes as the stock price moves. Delta measures how much an option's price changes per $1 move in the stock. Gamma tells you how fast that sensitivity is changing. A call option with 0.30 delta and 0.05 gamma will have a delta of 0.35 after a $1 stock price increase. Gamma is highest for at-the-money options near expiration. When a market maker sells call options, they are 'short gamma' — as the stock rises, they need to buy progressively more stock to stay hedged, which is the mechanism that drives a gamma squeeze.",
    },
    {
      question: "How is a gamma squeeze different from a short squeeze?",
      answer:
        "A short squeeze is driven by short sellers being forced to buy stock to cover their positions. A gamma squeeze is driven by market makers being forced to buy stock to hedge their options exposure. Both create feedback loops of forced buying, and they often happen simultaneously — the GameStop event was both a short squeeze and a gamma squeeze. The key difference is the trigger: short squeezes require high short interest; gamma squeezes require high call option open interest and volume, particularly near-term at-the-money or slightly out-of-the-money calls that have the highest gamma.",
    },
    {
      question: "Can a gamma squeeze happen in reverse (downward)?",
      answer:
        "Yes. If market makers are short put options (which is common), a declining stock price increases the delta of those puts, forcing market makers to sell stock to hedge. This selling pushes the price lower, increasing gamma exposure further, creating a downward spiral. This dynamic contributed to the speed of the February 2018 'Volmageddon' selloff and the March 2020 COVID crash. When large numbers of protective puts become at-the-money during a decline, the gamma-driven selling by dealers can accelerate the move far beyond what fundamentals would justify.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A gamma squeeze is a market-structure phenomenon where the mechanics of options hedging create a self-reinforcing cycle of stock buying (or selling). It occurs when <a href="/glossary/market-maker">market makers</a> who have sold <a href="/glossary/call-option">call options</a> must continuously buy increasing amounts of stock to stay delta-neutral as the stock price rises. Their buying pushes the price higher, which requires even more buying — a feedback loop driven by the mathematics of options hedging, not by fundamental news or investor sentiment.</p>

<h2 id="delta-hedging">Delta Hedging — The Mechanism</h2>

<p>When a market maker sells a call option to a customer, they take on exposure: if the stock rises, they lose money on the call. To neutralize this risk, they buy shares of the underlying stock in proportion to the option's delta. If the delta is 0.30, they buy 30 shares per contract (each contract represents 100 shares). This is called <strong>delta hedging</strong>.</p>

<p>As the stock price rises, the call's delta increases (the option becomes more sensitive to stock price changes). The market maker must buy additional shares to maintain a delta-neutral position. If the stock rises further, delta increases again, requiring more buying. This is the gamma effect — gamma measures how fast delta changes.</p>

<p>When there is an unusually large amount of open call interest (many call options have been sold by dealers), this hedging flow becomes a significant percentage of total stock volume. The dealers' forced buying moves the stock price, which requires more buying, creating the squeeze.</p>

<h2 id="conditions">What Creates a Gamma Squeeze</h2>

<p>Several conditions amplify gamma squeeze potential:</p>

<ul>
<li><strong>High call option volume and open interest.</strong> The more calls dealers have sold, the more stock they need to buy as the price rises. Unusual call buying — especially from retail traders buying short-dated, out-of-the-money calls — creates the conditions.</li>
<li><strong>Near-term expiration.</strong> Options near expiration have the highest gamma. A call that is 2% out of the money with one day to expiration can go from 0.20 delta to 1.00 delta with a 3% stock move, requiring the dealer to buy 80 additional shares per contract in a single session.</li>
<li><strong>Low stock float and volume.</strong> When the stock has fewer freely tradable shares, the dealer's hedging flow represents a larger fraction of total volume and has more price impact.</li>
<li><strong>Momentum-driven call buying.</strong> When retail traders see a stock rising and buy more calls, the dealers sell more calls, increasing their short gamma exposure. This positive feedback loop is what made the GameStop event so explosive — retail call buying forced dealer hedging, which pushed the stock up, which attracted more call buying.</li>
</ul>

<h2 id="gamestop-gamma">Gamma's Role in GameStop</h2>

<p>The GameStop event in January 2021 combined a <a href="/glossary/short-squeeze">short squeeze</a> (over 100% short interest) with a gamma squeeze (massive retail call buying). Analysis of options data showed that dealers were short tens of thousands of call contracts across multiple strike prices. As the stock moved through each strike — $20, $30, $40, $60, $100, $200 — the gamma exposure at each level forced additional hedging purchases. The stock did not rise in a straight line; it accelerated through clusters of call strikes where dealer hedging was most intense.</p>

<h2 id="gex">Gamma Exposure (GEX) as a Market Indicator</h2>

<p>Some market analysts calculate aggregate <strong>gamma exposure (GEX)</strong> — the total delta-hedging volume that dealers would need to execute for a given stock price change. High positive GEX means dealers are long gamma (they sell into rallies and buy into dips, dampening volatility). High negative GEX means dealers are short gamma (they buy into rallies and sell into dips, amplifying volatility). Negative GEX environments are where gamma squeezes occur.</p>

<p>GEX data is derived from the <a href="/glossary/options-chain">options chain</a> and is published by several analytics providers. While it requires assumptions about dealer positioning, it provides a useful framework for understanding why some stocks exhibit explosive, non-linear price moves that seem disconnected from any fundamental news.</p>

<p>For investors tracking SEC filings on Brefyr, understanding gamma dynamics explains the disconnect between a company's fundamentals (reflected in filings) and its short-term price action. When a stock doubles in a week without any new filing or disclosure, gamma squeeze mechanics — visible in the options chain — are often the explanation.</p>
`,
};
