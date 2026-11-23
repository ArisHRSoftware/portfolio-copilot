import type { GlossaryTerm } from "../types";

export const termDarkPool: GlossaryTerm = {
  slug: "dark-pool",
  term: "Dark Pool",
  title: "Dark Pool — Private Exchanges Where Large Trades Happen Invisibly",
  shortDefinition:
    "A dark pool is a private, off-exchange trading venue where institutional investors can buy and sell large blocks of stock without publicly displaying their orders, reducing market impact.",
  metaDescription:
    "What is a dark pool? Learn how dark pools work, why institutions use them, ATS regulation, the controversy around transparency, and how dark pool activity affects stock prices.",
  wordCount: 620,
  category: "Market Structure",
  tags: ["dark-pool", "market-structure", "institutional-trading", "ats", "liquidity"],
  relatedSlugs: ["market-maker", "block-trade", "bid-ask-spread", "market-order"],
  relatedTerms: ["market-maker", "block-trade", "bid-ask-spread", "market-order"],
  faq: [
    {
      question: "Why do institutions use dark pools instead of regular exchanges?",
      answer:
        "When a large institution wants to buy or sell millions of shares, placing that order on a public exchange reveals their intention to the entire market. Other traders see the large order and trade ahead of it (front-running), pushing the price up before the institution finishes buying (or down before they finish selling). Dark pools hide the order until after execution, allowing the institution to complete the trade at prices closer to the prevailing market rate. The price impact savings on a large order can be millions of dollars.",
    },
    {
      question: "How much trading volume goes through dark pools?",
      answer:
        "Dark pools account for approximately 40-45% of US equity trading volume as of 2025, up from about 15% a decade earlier. The largest dark pools include Citadel Connect, Virtu Financial, UBS ATS, and Morgan Stanley's MS Pool. FINRA publishes weekly dark pool volume data with a two-week delay, broken down by security and ATS venue. This data is public and available through FINRA's ATS Transparency Data portal.",
    },
    {
      question: "Are dark pools regulated?",
      answer:
        "Yes. Dark pools are registered as Alternative Trading Systems (ATS) with the SEC and must comply with Regulation ATS. They must file Form ATS and Form ATS-N (for NMS stock ATSs), which disclose their operations, order types, subscriber eligibility, and potential conflicts of interest. FINRA also oversees dark pool operations and publishes aggregate volume data. However, critics argue that the regulatory framework is insufficient because the lack of pre-trade transparency makes it difficult to detect manipulation and ensure fair pricing.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Dark pools are private trading venues where buyers and sellers are matched without publicly displaying their orders. The name comes from the lack of pre-trade transparency — unlike public exchanges where every bid and offer is visible, dark pool orders are invisible until after they execute. They were created to solve a specific problem: how can large institutions trade enormous blocks of stock without moving the market against themselves?</p>

<h2 id="why-they-exist">Why Dark Pools Exist</h2>

<p>Imagine a mutual fund that needs to sell 5 million shares of a $50 stock — a $250 million trade. If that order appears on the NYSE order book, every algorithmic trader, market maker, and opportunistic trader sees it. They know the fund must sell, so they sell first (or pull their bids), causing the stock to drop before the fund completes its order. This is called <strong>information leakage</strong>, and it can cost the fund tens of millions of dollars in worse execution prices.</p>

<p>Dark pools solve this by hiding the order. The fund submits a sell order to the dark pool, where it sits invisibly. When a buyer with matching interest appears (another institution wanting to buy a large block), the orders are matched at a reference price — typically the midpoint of the <a href="/glossary/bid-ask-spread">bid-ask spread</a> on the public exchange. Neither party sees the other's order until the trade is done.</p>

<h2 id="types">Types of Dark Pools</h2>

<p>Not all dark pools operate the same way:</p>

<ul>
<li><strong>Broker-dealer operated.</strong> Major banks (Goldman Sachs, Morgan Stanley, JP Morgan) run dark pools for their clients. These internalize order flow — matching client orders against each other or against the firm's own trading desk. Conflicts of interest are inherent: the operator may prioritize its own trading interests.</li>
<li><strong>Electronic market maker dark pools.</strong> Firms like Citadel Securities and Virtu Financial operate dark pools that primarily internalize retail order flow. These overlap with the payment-for-order-flow ecosystem described in <a href="/glossary/market-maker">market maker</a>.</li>
<li><strong>Independent crossing networks.</strong> Venues like Liquidnet specialize in matching institutional block orders with no proprietary trading. These are the closest to the original dark pool concept — a pure meeting place for large institutions seeking to avoid market impact.</li>
<li><strong>Exchange-operated dark pools.</strong> Some public exchanges operate dark pool tiers within their platform, offering a midpoint peg or hidden order type alongside their regular displayed book.</li>
</ul>

<h2 id="regulation">Regulation and Transparency</h2>

<p>Dark pools are classified as <strong>Alternative Trading Systems (ATS)</strong> under SEC Regulation ATS. They must register with the SEC, become FINRA members, and file detailed operational disclosures via Form ATS-N. This form describes the pool's matching logic, subscriber eligibility, potential conflicts of interest, and safeguards against information leakage.</p>

<p>FINRA publishes weekly aggregate volume data for each ATS, broken down by individual stock, with a two-week delay. This data reveals which dark pools are most active in specific stocks but does not reveal individual orders or the identity of participants.</p>

<p>Despite this regulatory framework, dark pools remain controversial. Critics point to several concerns:</p>

<ul>
<li><strong>Reduced price discovery.</strong> When 40%+ of volume trades in the dark, public exchange prices may not fully reflect supply and demand. The NBBO is based only on displayed orders, potentially making it less informative.</li>
<li><strong>Conflicts of interest.</strong> Bank-operated dark pools may favor the bank's proprietary trading or preferred clients. The SEC has brought enforcement actions against several dark pool operators for misleading subscribers about how orders were handled.</li>
<li><strong>Information asymmetry.</strong> Some dark pools allow high-frequency traders as subscribers, who may exploit slower institutional participants. The original purpose of protecting institutions from information leakage is undermined if the dark pool itself becomes a source of leakage.</li>
</ul>

<h2 id="detecting-dark-pool-activity">Detecting Dark Pool Activity</h2>

<p>While individual dark pool orders are invisible before execution, their effects can be inferred. Large <a href="/glossary/block-trade">block trades</a> reported to the consolidated tape with no corresponding visible order on the exchange book likely occurred in a dark pool. Spikes in FINRA's ATS volume data for a specific stock around the date of a major <a href="/glossary/13f-filing">13F filing</a> change may indicate institutional repositioning via dark pools.</p>

<p>For investors using Brefyr to track SEC filings, understanding dark pools provides context for large volume days with no apparent news catalyst. When a stock trades 3x its average volume but the price barely moves, institutional block matching in dark pools is a likely explanation — large buyers and sellers found each other off-exchange without competing in the public market.</p>
`,
};
