import type { GlossaryTerm } from "../types";

export const termBidAskSpread: GlossaryTerm = {
  slug: "bid-ask-spread",
  term: "Bid-Ask Spread",
  title: "Bid-Ask Spread — The Hidden Cost of Every Stock Trade",
  shortDefinition:
    "The bid-ask spread is the difference between the highest price a buyer is willing to pay (bid) and the lowest price a seller is willing to accept (ask) for a security. It represents an implicit transaction cost.",
  metaDescription:
    "What is the bid-ask spread? Learn how spreads work, why they widen during volatility, what determines spread size, and how to minimize trading costs from the spread.",
  wordCount: 620,
  category: "Market Structure",
  tags: ["bid-ask-spread", "market-structure", "trading-costs", "liquidity", "order-book"],
  relatedSlugs: ["market-order", "limit-order", "market-maker", "dark-pool"],
  relatedTerms: ["market-order", "limit-order", "market-maker", "dark-pool"],
  faq: [
    {
      question: "Why do some stocks have wider spreads than others?",
      answer:
        "Spread width is primarily determined by liquidity and risk. Heavily traded large-cap stocks like Apple or Microsoft have spreads of one cent because thousands of market participants compete to provide the best prices. Small-cap stocks with low volume have fewer participants and wider spreads — often $0.05 to $0.50 or more. Stocks with higher volatility also carry wider spreads because market makers face greater risk of adverse price moves between the time they quote a price and the time a trade executes.",
    },
    {
      question: "How does the bid-ask spread affect my returns?",
      answer:
        "The spread is a round-trip cost. If a stock has a $0.10 spread, you lose approximately $0.05 when you buy (paying the ask) and $0.05 when you sell (receiving the bid). On a $50 stock, that is a 0.2% implicit cost — before commissions. For frequent traders, spread costs compound significantly. On 100 round-trip trades per year of a $50 stock with a $0.10 spread, the spread alone costs $1,000 on 1,000-share trades. Long-term investors who trade rarely are less affected.",
    },
    {
      question: "What causes the bid-ask spread to widen suddenly?",
      answer:
        "Spreads widen when uncertainty increases. Common triggers include earnings announcements (market makers widen quotes before unpredictable results), breaking news (geopolitical events, executive departures), low liquidity periods (pre-market, after-hours, lunch hour), market-wide volatility spikes (VIX surges), and trading halts (spreads are extremely wide at the reopening). During the March 2020 COVID selloff, even large-cap spreads widened 5-10x as market makers reduced their exposure.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Every stock has two prices at any moment: the <strong>bid</strong> (the highest price someone is willing to pay) and the <strong>ask</strong> (the lowest price someone is willing to sell for). The gap between them is the bid-ask spread. It is a fundamental feature of market microstructure and represents the implicit cost of executing a trade.</p>

<p>If a stock shows a bid of $49.95 and an ask of $50.00, the spread is $0.05. A buyer using a <a href="/glossary/market-order">market order</a> pays $50.00. A seller using a market order receives $49.95. The $0.05 difference is captured by whoever provided liquidity on the other side of each trade — typically a <a href="/glossary/market-maker">market maker</a>.</p>

<h2 id="what-determines-spread">What Determines Spread Width</h2>

<p>Several factors determine how wide or narrow a stock's spread is:</p>

<ul>
<li><strong>Trading volume.</strong> High-volume stocks attract more market participants competing to provide the best bid and ask, compressing the spread. Low-volume stocks have fewer participants and wider spreads.</li>
<li><strong>Number of market makers.</strong> Stocks covered by many market makers have tighter spreads due to competition. Thinly covered stocks have wider spreads.</li>
<li><strong>Volatility.</strong> When a stock's price is moving rapidly, market makers widen their spreads to compensate for the risk that the price moves against them between quoting and execution. The VIX index (a volatility measure) correlates directly with average market spreads.</li>
<li><strong>Tick size.</strong> US equities have a minimum tick increment of $0.01. Stocks that would naturally have sub-penny spreads are floored at $0.01. This is why the most liquid stocks (Apple, Amazon) often show a one-cent spread — competition has compressed the spread to the regulatory minimum.</li>
<li><strong>Information asymmetry.</strong> If market makers suspect that informed traders (insiders, hedge funds with superior research) are active in a stock, they widen spreads to protect against trading with someone who knows something they don't.</li>
</ul>

<h2 id="spread-as-cost">The Spread as a Trading Cost</h2>

<p>Commissions are explicit costs — you see them on your confirmation. The spread is an implicit cost that is equally real but often overlooked. When you buy at the ask and later sell at the bid, the spread is a round-trip cost deducted from your profit.</p>

<p>For a stock with a $0.02 spread trading at $100, the spread cost is 0.02% per round trip — negligible. For a stock with a $0.50 spread trading at $10, the spread cost is 5% per round trip — a substantial drag on returns, especially for short-term traders.</p>

<p>This is why spread analysis matters for trade sizing and instrument selection. Active traders deliberately avoid illiquid stocks not because the stocks are bad investments, but because the spread makes frequent trading unprofitable.</p>

<h2 id="reading-order-book">Reading the Order Book</h2>

<p>The order book (also called Level 2 data or market depth) shows all outstanding limit orders at each price level. The best bid and best ask form the NBBO (National Best Bid and Offer). Below the best bid are progressively lower buy orders; above the best ask are progressively higher sell orders.</p>

<p>The <strong>depth</strong> at each level indicates how many shares are available. A stock might have a one-cent spread but only 100 shares at the best bid. A market sell of 10,000 shares would blow through that level and several below it, receiving an effective spread much wider than one cent. This is why large institutional orders use algorithmic execution strategies or route through <a href="/glossary/dark-pool">dark pools</a> rather than submitting a single market order.</p>

<h2 id="spread-and-time">Spread Variation Throughout the Day</h2>

<p>Spreads follow a predictable intraday pattern. They are widest at the market open (9:30 AM ET) as market makers assess overnight information and order flow. Spreads tighten through the late morning as liquidity builds. They widen slightly during the lunch hour (12:00-1:00 PM) as trading activity drops. Spreads tighten again in the afternoon and are narrowest between 2:00 and 3:30 PM when volume peaks. In the final minutes before the close, spreads can widen again as market makers reduce exposure ahead of overnight risk.</p>

<p>For <a href="/glossary/after-hours-trading">after-hours</a> and <a href="/glossary/pre-market-trading">pre-market</a> sessions, spreads are dramatically wider — often 10-50x the regular-hours spread for mid-cap stocks. Only <a href="/glossary/limit-order">limit orders</a> are accepted during extended hours for this reason.</p>

<p>When evaluating stocks on Brefyr, consider the bid-ask spread as part of your total cost analysis. A stock that looks attractive based on SEC filing analysis may carry hidden costs if it trades with a wide spread, eroding the edge your research provides.</p>
`,
};
