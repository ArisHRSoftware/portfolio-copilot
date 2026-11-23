import type { GlossaryTerm } from "../../types";

export const termHedgeFundHi: GlossaryTerm = {
  slug: "hedge-fund",
  term: "Hedge Fund (हेज फंड)",
  title: "Hedge Fund — Wealthy Investors के लिए Complex Strategies वाले Exclusive Investment Partnerships",
  shortDefinition:
    "Hedge fund एक private investment partnership है जो accredited और institutional investors से capital pool करती है, sophisticated strategies — leverage, short selling, derivatives, concentrated positions — employ करती है absolute returns pursuit करने के लिए market direction से independent।",
  metaDescription:
    "Hedge fund क्या है? Mutual funds से कैसे different, common strategies, fee structure, 13F disclosure, और भारतीय निवेशकों को क्या जानना चाहिए।",
  wordCount: 420,
  category: "Investment Strategy",
  tags: ["hedge-fund", "alternative-investment", "accredited-investor", "short-selling", "13f-filing"],
  relatedSlugs: ["private-equity", "accredited-investor", "13f-filing", "short-selling", "qualified-institutional-buyer"],
  relatedTerms: ["private-equity", "accredited-investor", "13f-filing", "short-selling", "qualified-institutional-buyer"],
  faq: [
    {
      question: "Hedge fund typical fee structure क्या है?",
      answer:
        "Traditional '2 and 20' — 2% annual management fee AUM पर + 20% performance fee profits पर। High-water mark (previous peak से ऊपर ही performance fee) और hurdle rate (minimum return exceed करने पर ही fee) भी हो सकते हैं। Fee pressure ने industry average 1.4% management, 16% performance तक लाई है।",
    },
    {
      question: "Hedge funds क्या buy/sell कर रहे हैं कैसे देखें?",
      answer:
        "$100M+ assets वाले managers SEC के साथ quarterly Form 13F file करते हैं — long equity positions disclose। EDGAR पर public। लेकिन limitations: सिर्फ़ long positions (short नहीं), 45 days delay, positions बदल सकती हैं filing के बाद।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Hedge fund private investment vehicle है, typically limited partnership structure, जो wealthy individuals और institutional investors से capital pool करती है investment returns pursue करने के लिए strategies use करके जो traditional mutual funds को available नहीं। "Hedge fund" नाम original strategy से आया — undervalued stocks buy (long) और overvalued stocks short sell करके market risk hedge करना। Modern hedge funds vast range of strategies employ करती हैं — कई में कोई hedging नहीं।</p>

<p>Indian context: India में PMS (Portfolio Management Services) और AIFs (Alternative Investment Funds) somewhat similar structures हैं। लेकिन US hedge funds significantly larger scale पर operate करती हैं और 13F filings से publicly trackable हैं।</p>

<h2>Mutual Funds से कैसे Different</h2>

<p><strong>Investor restrictions:</strong> Accredited investors और qualified purchasers तक limited। Investment Company Act 1940 से exempt।</p>

<p><strong>Strategy flexibility:</strong> Leverage use, short sell, derivatives trade, concentrated positions, illiquid assets — mutual funds पर regulatory limits हैं इन सब पर।</p>

<p><strong>Liquidity:</strong> Mutual funds daily redemptions। Hedge funds typically quarterly या annual windows, 30-90 day notice, 1-3 year lock-up periods।</p>

<p><strong>Fee structure:</strong> Management fee (1-2%) + performance fee (15-20%)। Mutual funds सिर्फ़ management fee charge करती हैं।</p>

<h2>Common Strategies</h2>

<p><strong>Long/short equity:</strong> Undervalued stocks buy, overvalued short sell — stock selection से profit, market exposure reduce।</p>

<p><strong>Global macro:</strong> Currencies, interest rates, commodities, equity markets पर large directional bets macroeconomic analysis based। Soros ने 1992 में British pound short करके famous profit बनाया।</p>

<p><strong>Event-driven:</strong> Corporate events — mergers, restructurings, bankruptcies, spin-offs — के around invest। Merger arbitrage सबसे common।</p>

<p><strong>Quantitative:</strong> Mathematical models और algorithms से trading opportunities identify। High-frequency से systematic macro तक।</p>

<p><strong>Distressed:</strong> Financially troubled companies के debt या equity में invest — restructuring, recovery से profit।</p>

<h2>Performance Reality</h2>

<p>Average hedge fund returns disappointing रहे simple index funds relative — 2023 तक decade average ~6-7% annually vs S&P 500 12%+। Warren Buffett ने famous bet जीती। लेकिन averages enormous dispersion mask करती हैं — top performers extraordinary returns, bottom performers loss। Challenge: advance में top managers identify करना।</p>

<h2>SEC Filings</h2>

<p><strong>Form 13F:</strong> Quarterly, $100M+ managers, long equity positions। <strong>Schedule 13D/13G:</strong> 5%+ stake acquire करने पर। Activist 13D filings market-moving। <strong>Form ADV:</strong> Registered advisers, fees, conflicts। <strong>Form PF:</strong> Confidential, systemic risk data।</p>

<p>Brefyr 13F filings process करती है thousands of hedge funds और institutional investors से — visibility into sophisticated market participants' activity।</p>
`,
};
