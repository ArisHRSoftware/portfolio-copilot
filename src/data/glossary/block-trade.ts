import type { GlossaryTerm } from "../types";

export const termBlockTrade: GlossaryTerm = {
  slug: "block-trade",
  term: "Block Trade",
  title: "Block Trade — How Institutions Move Millions of Shares at Once",
  shortDefinition:
    "A block trade is a privately negotiated transaction involving a large quantity of securities — typically 10,000 shares or more, or $200,000+ in value — executed outside the public order book to minimize market impact.",
  metaDescription:
    "What is a block trade? Learn how block trades work, why institutions use them, the role of block desks, how they are reported, and what they signal about institutional activity.",
  wordCount: 580,
  category: "Market Structure",
  tags: ["block-trade", "institutional-trading", "market-structure", "liquidity", "execution"],
  relatedSlugs: ["dark-pool", "market-maker", "13f-filing", "market-order"],
  relatedTerms: ["dark-pool", "market-maker", "13f-filing", "market-order"],
  faq: [
    {
      question: "How large does a trade need to be to qualify as a block trade?",
      answer:
        "The traditional definition is 10,000 shares or more, or a market value of $200,000 or more — whichever is less. However, this definition dates from an era of lower stock prices. In practice, institutional block desks typically handle orders of 50,000 shares or more, and many define 'block' by dollar value — $1 million or more is a common threshold at major brokers. The exact definition varies by broker, exchange, and context.",
    },
    {
      question: "Where do block trades execute?",
      answer:
        "Block trades execute through several channels: dark pools (private matching venues for institutional orders), block trading desks at investment banks (where the desk may commit capital to fill the order), electronic block crossing networks like Liquidnet (which match natural institutional buyers and sellers), and sometimes on public exchanges using special block order types. The choice depends on the stock's liquidity, the order size, urgency, and the institution's desire for anonymity.",
    },
    {
      question: "How can I see block trades that have already happened?",
      answer:
        "All executed block trades are reported to the consolidated tape (the real-time feed of all US equity transactions) within 10 seconds for regular-hours trades and within specified windows for after-hours trades. Many financial data platforms flag block prints — unusually large individual transactions that stand out from normal-sized trades. FINRA's ATS transparency data also provides weekly aggregate volume by dark pool venue. For longer-term tracking, institutional 13F filings reveal quarterly position changes that often correspond to block trading activity.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A block trade is a large privately negotiated securities transaction. Rather than placing an order on the public exchange — where the size of the order would be visible to all market participants and likely move the price — institutions work with specialized intermediaries to find a counterparty and execute the trade with minimal market disruption.</p>

<p>Block trades are the backbone of institutional portfolio management. When a pension fund needs to liquidate a $50 million position, or a mutual fund needs to establish a large position in a new holding, they cannot simply drop a market order onto the exchange. The resulting price impact would cost millions. Block trading infrastructure exists to solve this problem.</p>

<h2 id="how-they-work">How Block Trades Work</h2>

<p>The process varies by channel, but the typical flow involves these steps:</p>

<ol>
<li><strong>The institution contacts a block desk.</strong> At a major investment bank, the block trading desk (also called the "upstairs market") receives the order. The trader on the desk begins sourcing liquidity — finding natural counterparties among the bank's other institutional clients.</li>
<li><strong>Price negotiation.</strong> The block desk negotiates a price, typically referencing the current <a href="/glossary/bid-ask-spread">bid-ask spread</a> and recent volume-weighted average price (VWAP). The institution may accept a slight discount (for a sell) or premium (for a buy) in exchange for guaranteed execution of the full block.</li>
<li><strong>Capital commitment.</strong> In many cases, the block desk commits its own capital — it buys the block from the seller (taking the position onto the bank's balance sheet) and then works to sell it into the market over time. This "facilitation" or "principal" trade gives the institution immediate execution but transfers the market risk to the bank.</li>
<li><strong>Reporting.</strong> Once executed, the trade is reported to the consolidated tape. The print appears as a single large transaction, often at a price between the bid and ask.</li>
</ol>

<h2 id="electronic-block-networks">Electronic Block Crossing Networks</h2>

<p>Networks like Liquidnet and POSIT specialize in matching institutional block orders electronically, without a human intermediary. Institutions submit their orders into the system, which searches for natural counterparties. When a match is found — say, Fidelity wants to buy 500,000 shares and Vanguard wants to sell 400,000 — the system crosses 400,000 shares at the exchange midpoint price.</p>

<p>These networks are a type of <a href="/glossary/dark-pool">dark pool</a>, but they differ from general dark pools by focusing exclusively on large institutional orders and prohibiting high-frequency traders from participating. This creates a trusted environment where institutions can expose large orders without fear of information leakage.</p>

<h2 id="market-impact">Why Market Impact Matters</h2>

<p>Market impact is the price movement caused by the act of trading itself. For retail investors buying 100 shares, market impact is negligible. For institutions, it is the single largest transaction cost — often exceeding commissions by an order of magnitude.</p>

<p>Academic research estimates that market impact costs for institutional orders average 0.3-0.8% of the trade value for liquid large-cap stocks and 1-3% for small-cap stocks. On a $100 million trade, 0.5% market impact is $500,000 in worse execution. Block trading infrastructure exists to minimize this cost.</p>

<h2 id="signal-value">What Block Trades Signal</h2>

<p>Block trades carry informational value. When a large block print appears on the tape — say, 200,000 shares at the midpoint — it signals that an institution has made a decisive move. Combined with <a href="/glossary/13f-filing">13F filings</a> (which reveal institutional holdings quarterly), block trade data helps investors piece together what large, informed investors are doing.</p>

<p>A series of block buys in a stock, followed by a 13F showing a new position by a respected fund, is a bullish signal. A large block sell followed by a Form 4 insider sale is bearish confirmation. Investors using Brefyr to track insider and institutional filing activity can correlate unusual block activity with the filing data to build a more complete picture of who is buying and selling, and why.</p>
`,
};
