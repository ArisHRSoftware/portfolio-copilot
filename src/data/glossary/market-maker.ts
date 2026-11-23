import type { GlossaryTerm } from "../types";

export const termMarketMaker: GlossaryTerm = {
  slug: "market-maker",
  term: "Market Maker",
  title: "Market Maker — The Firms That Keep Stock Markets Liquid",
  shortDefinition:
    "A market maker is a firm or individual that continuously quotes both a buy price (bid) and a sell price (ask) for a security, profiting from the bid-ask spread while providing liquidity to the market.",
  metaDescription:
    "What is a market maker? Learn how market makers provide liquidity, earn the spread, manage inventory risk, and their role in modern electronic markets including payment for order flow.",
  wordCount: 630,
  category: "Market Structure",
  tags: ["market-maker", "liquidity", "market-structure", "order-flow", "spread"],
  relatedSlugs: ["bid-ask-spread", "dark-pool", "market-order", "block-trade"],
  relatedTerms: ["bid-ask-spread", "dark-pool", "market-order", "block-trade"],
  faq: [
    {
      question: "How do market makers make money?",
      answer:
        "Market makers earn the bid-ask spread on each round trip. If they buy at $49.98 (bid) and sell at $50.00 (ask), they earn $0.02 per share. On millions of shares per day, this adds up to significant revenue. However, market makers also face inventory risk — if the stock moves against their accumulated position, they can lose more than the spread. Sophisticated risk management, hedging, and speed (sub-microsecond execution) are essential to profitability. The largest market makers (Citadel Securities, Virtu Financial) also earn payment for order flow from retail brokers.",
    },
    {
      question: "What is payment for order flow and how does it relate to market makers?",
      answer:
        "Payment for order flow (PFOF) is a practice where wholesale market makers pay retail brokers (like Robinhood or Schwab) for the right to execute their customers' orders. The market maker benefits because retail order flow is considered 'uninformed' — retail traders are less likely to have information that would cause the stock to move against the market maker. In exchange, the market maker often provides slight price improvement over the NBBO. The SEC has scrutinized PFOF because it creates a conflict of interest: the broker may route orders to the highest-paying market maker rather than the venue with the best execution quality.",
    },
    {
      question: "Are market makers required by the exchanges?",
      answer:
        "On some exchanges, yes. The NYSE has Designated Market Makers (DMMs) who are assigned to specific stocks and are obligated to maintain continuous two-sided quotes and facilitate orderly openings and closings. Nasdaq has a voluntary market maker registration system. Options exchanges have assigned market makers who must maintain continuous quotes within specified width and size parameters. In return for these obligations, market makers receive certain privileges such as reduced fees, information advantages (seeing order flow first), or execution priority.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Market makers are the firms that stand in the middle of every stock trade, continuously willing to buy from sellers and sell to buyers. Without them, you would need to find someone who wants to buy exactly what you want to sell, at exactly the same time, for a mutually acceptable price. Market makers eliminate this coordination problem by always being available on both sides of the trade.</p>

<p>Their compensation is the <a href="/glossary/bid-ask-spread">bid-ask spread</a> — they buy at the bid and sell at the ask, earning the difference. On a heavily traded stock with a one-cent spread, this seems trivial, but at millions of shares per day across thousands of stocks, the revenue is enormous. The largest electronic market makers handle 25-40% of all US equity trading volume.</p>

<h2 id="how-they-operate">How Market Makers Operate</h2>

<p>A market maker in a stock continuously posts a bid (willingness to buy) and an ask (willingness to sell) on one or more exchanges. These quotes specify both a price and a size (the number of shares available at that price). The difference between the bid and ask is the market maker's theoretical profit per share.</p>

<p>In practice, it is far more complex. The market maker accumulates inventory as it buys from sellers and depletes inventory as it sells to buyers. If buy orders exceed sell orders, the market maker builds a long position. If sell orders dominate, it builds a short position. Both create risk — the stock could move against the accumulated position.</p>

<p>Modern market makers manage this risk through:</p>

<ul>
<li><strong>Dynamic quoting.</strong> When a market maker has accumulated too many shares (long exposure), it lowers its bid slightly to discourage further buying and may lower its ask to encourage selling. The reverse when short.</li>
<li><strong>Hedging.</strong> Market makers hedge their directional exposure using correlated instruments — ETFs, options, futures, and related stocks. A market maker long 100,000 shares of JPMorgan might short a financial sector ETF to neutralize sector risk.</li>
<li><strong>Speed.</strong> The faster a market maker can update quotes in response to changing information, the less risk it takes. This is why major market makers invest hundreds of millions in technology infrastructure, including co-located servers at exchange data centers with sub-microsecond latency.</li>
<li><strong>Statistical models.</strong> Market makers use quantitative models to estimate the probability and direction of near-term price moves, adjusting their quotes accordingly. If a model predicts high probability of a downtick, the market maker may widen the spread or pull back from the bid.</li>
</ul>

<h2 id="designated-vs-electronic">Designated vs. Electronic Market Makers</h2>

<p>The NYSE still uses <strong>Designated Market Makers (DMMs)</strong> — firms assigned to specific listed stocks with obligations to maintain fair and orderly markets. DMMs must maintain continuous two-sided quotes and are expected to stabilize the opening auction, closing auction, and volatile intraday periods. In return, they receive certain execution privileges and information about order flow.</p>

<p>On Nasdaq and most electronic venues, market making is voluntary. Any firm that meets the exchange's requirements can register as a market maker in any stock. This competition among multiple market makers is what drives spreads to the minimum tick on liquid stocks.</p>

<p>The options market has a parallel structure. Each options exchange assigns market makers to specific contracts, requiring them to maintain continuous quotes with specified maximum spread widths and minimum sizes. Options market making is more complex due to the multiple strike prices and expirations, requiring sophisticated models for pricing and risk management.</p>

<h2 id="wholesale-market-makers">Wholesale Market Makers and Retail Flow</h2>

<p>A parallel market-making ecosystem exists off-exchange. <strong>Wholesale market makers</strong> like Citadel Securities and Virtu Financial internalize retail broker order flow. When you place a <a href="/glossary/market-order">market order</a> through Robinhood or Schwab, your order is likely routed to one of these firms rather than to a public exchange.</p>

<p>The wholesale market maker fills the order from its own inventory, often providing a small price improvement over the NBBO (the best exchange quote). The retail broker receives payment for routing the order — this is <strong>payment for order flow (PFOF)</strong>. The arrangement is profitable for the market maker because retail orders are statistically less likely to be based on information that would move the stock adversely.</p>

<p>This practice is legal and disclosed, but controversial. Critics argue it creates a two-tier market where retail orders get routed based on the broker's payment arrangements rather than best execution quality. The SEC has proposed rules to increase transparency around execution quality and routing practices.</p>

<p>Understanding how market makers operate gives investors context for the prices they receive. The <a href="/glossary/bid-ask-spread">spread</a> you pay when buying a stock is not an arbitrary cost — it is the price of immediate liquidity provided by firms that take real financial risk to keep markets functioning. When analyzing companies through Brefyr, knowing that your trade's execution quality depends on the stock's liquidity ecosystem helps you plan entries and exits more effectively.</p>
`,
};
