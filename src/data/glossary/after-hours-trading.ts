import type { GlossaryTerm } from "../types";

export const termAfterHoursTrading: GlossaryTerm = {
  slug: "after-hours-trading",
  term: "After-Hours Trading",
  title: "After-Hours Trading — Buying and Selling Stocks After the Market Closes",
  shortDefinition:
    "After-hours trading is the buying and selling of stocks on electronic exchanges after the regular market closes at 4:00 PM Eastern Time, typically available until 8:00 PM ET through ECN (Electronic Communication Network) platforms.",
  metaDescription:
    "What is after-hours trading? Learn how extended-hours sessions work, the risks of wider spreads and low liquidity, why earnings reactions happen after hours, and practical tips for after-hours trades.",
  wordCount: 540,
  category: "Trading",
  tags: ["after-hours-trading", "extended-hours", "ecn", "liquidity", "earnings"],
  relatedSlugs: ["pre-market-trading", "limit-order", "bid-ask-spread", "market-order"],
  relatedTerms: ["pre-market-trading", "limit-order", "bid-ask-spread", "market-order"],
  faq: [
    {
      question: "Why do stocks move so much after hours?",
      answer:
        "Most after-hours price moves are reactions to earnings announcements. The majority of US companies report quarterly earnings after the 4:00 PM close (or before the 9:30 AM open) to give investors time to analyze results before the next full trading session. Because after-hours liquidity is a fraction of regular-hours volume, even modest buying or selling pressure causes exaggerated price swings. A stock that might move 3% on the same news during regular hours can move 8-10% after hours due to thin order books and wider spreads.",
    },
    {
      question: "Can I use market orders during after-hours trading?",
      answer:
        "Most brokers only accept limit orders during after-hours sessions. Market orders are either rejected or held until the next regular session opens. This protects you from the wide spreads and thin liquidity that characterize extended hours. If a stock has a $1.00 spread after hours (versus $0.02 during regular hours), a market order could fill at a terrible price. Always use limit orders during extended hours and be conservative with pricing — the last trade may not reflect the current best available price.",
    },
    {
      question: "Is after-hours trading available to all investors?",
      answer:
        "Most major online brokers now offer after-hours trading to all account holders, though some require you to opt in or acknowledge the additional risks. The typical after-hours session runs from 4:00 PM to 8:00 PM ET, though some brokers extend hours to 11:59 PM. Not all securities are available — after-hours trading is generally limited to stocks listed on major exchanges (NYSE, Nasdaq). Options, mutual funds, and many ETFs cannot be traded after hours. Fees are the same as regular-hours trades at most brokers.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>After-hours trading extends the stock market day beyond the regular 9:30 AM to 4:00 PM ET session. Through Electronic Communication Networks (ECNs), investors can trade stocks from 4:00 PM until 8:00 PM ET (some brokers allow even later). This window captures some of the most significant stock moves of the year — earnings reactions, breaking news, and after-close announcements all play out in the after-hours session.</p>

<h2 id="how-it-works">How After-Hours Trading Works</h2>

<p>During regular hours, orders are routed to public exchanges (NYSE, Nasdaq) where the full ecosystem of <a href="/glossary/market-maker">market makers</a>, institutional traders, and retail investors provides deep liquidity. After 4:00 PM, the main exchanges close but ECNs continue matching orders electronically.</p>

<p>The key differences from regular-hours trading:</p>

<ul>
<li><strong>Lower volume.</strong> After-hours volume is typically 5-10% of regular-hours volume. Some stocks that trade millions of shares during the day may see only tens of thousands after hours.</li>
<li><strong>Wider <a href="/glossary/bid-ask-spread">spreads</a>.</strong> With fewer participants, the gap between bid and ask prices expands dramatically. A stock with a $0.01 spread during the day may have a $0.10 to $1.00 spread after hours.</li>
<li><strong>Limit orders only.</strong> Most brokers require <a href="/glossary/limit-order">limit orders</a> during extended hours to protect investors from poor fills in thin markets. No <a href="/glossary/market-order">market orders</a> are accepted.</li>
<li><strong>No <a href="/glossary/stop-loss">stop-loss</a> orders.</strong> Stop orders typically do not function during extended hours. You cannot rely on automatic sell protection.</li>
<li><strong>Price volatility.</strong> Individual trades can move the price significantly because of thin order books. The price you see may not represent where you can actually execute.</li>
</ul>

<h2 id="earnings-reactions">Earnings Season and After-Hours Activity</h2>

<p>The primary reason after-hours trading matters is earnings. Approximately 70% of S&P 500 companies report quarterly results after the 4:00 PM close. The initial reaction — the first 15-30 minutes of after-hours trading following the release — sets the tone for the next regular session's opening price.</p>

<p>These reactions can be dramatic. A company that beats earnings expectations by a wide margin might jump 10-15% in after-hours trading. A miss can cause a similar decline. The <a href="/glossary/8k-filing">8-K filing</a> associated with the earnings release often hits the SEC's EDGAR system during or shortly after the after-hours session, providing the official record.</p>

<p>However, the after-hours reaction is not always the final word. Many large moves reverse partially or completely by the next day's close as the full market processes the results. Studies show that the after-hours reaction to earnings tends to overreact — stocks that jump 10% after hours may settle to a 6-7% gain by the close of the following session.</p>

<h2 id="risks">Risks Specific to After-Hours Trading</h2>

<ul>
<li><strong>Unfavorable fills.</strong> Even with limit orders, the thin liquidity means you may wait a long time for a fill or not get filled at all. If you do get filled, there may not be another buyer or seller at a reasonable price to exit the position.</li>
<li><strong>Information asymmetry.</strong> Professional traders and institutional investors have faster access to earnings releases and news. By the time retail investors see the headline and place an order, the initial after-hours move may already be reflected in the price.</li>
<li><strong>Price gaps.</strong> The after-hours session closes and the <a href="/glossary/pre-market-trading">pre-market session</a> opens the next morning. Between these sessions, there is no trading at all. Overnight developments can create price gaps between the after-hours close and the pre-market open.</li>
</ul>

<h2 id="practical-tips">Practical Guidance</h2>

<p>If you trade after hours, use limit orders with realistic prices (at or near the current bid for sells, at or near the current ask for buys). Avoid chasing after-hours earnings reactions — the initial move often overshoots. Consider waiting until the <a href="/glossary/pre-market-trading">pre-market session</a> or the regular open when liquidity improves. Use after-hours prices as a gauge of market sentiment, not as a signal to trade immediately.</p>

<p>When monitoring companies through Brefyr, the timing of SEC filings relative to after-hours trading matters. A filing that hits EDGAR at 5:30 PM during the after-hours session can trigger immediate price moves. Understanding the reduced liquidity and wider spreads during this window helps you decide whether to react immediately or wait for the next regular session.</p>
`,
};
