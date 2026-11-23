import type { GlossaryTerm } from "../../types";

export const termBlockTradeHi: GlossaryTerm = {
  slug: "block-trade",
  term: "Block Trade (ब्लॉक ट्रेड)",
  title: "Block Trade — Institutions लाखों Shares एक बार में कैसे Move करते हैं",
  shortDefinition:
    "Block trade एक privately negotiated transaction है जिसमें बड़ी quantity में securities — typically 10,000 shares या $200,000+ value — public order book के बाहर execute होती है ताकि market impact कम रहे।",
  metaDescription:
    "Block trade क्या है? जानें block trades कैसे काम करते हैं, institutions क्यों use करते हैं, block desks की role, reporting process, और institutional activity के signals।",
  wordCount: 480,
  category: "Market Structure",
  tags: ["block-trade", "institutional-trading", "market-structure", "liquidity", "execution"],
  relatedSlugs: ["dark-pool", "market-maker", "13f-filing", "market-order"],
  relatedTerms: ["dark-pool", "market-maker", "13f-filing", "market-order"],
  faq: [
    {
      question: "Block trade qualify करने के लिए कितनी बड़ी trade होनी चाहिए?",
      answer:
        "Traditional definition है 10,000 shares या $200,000 market value — जो भी कम हो। लेकिन practice में institutional block desks typically 50,000+ shares handle करते हैं। Major brokers पर $1 million+ common threshold है। India में NSE/BSE पर भी block deal window (8:45-9:00 AM) है जहाँ minimum ₹10 crore की deals होती हैं — concept same है, scale अलग।",
    },
    {
      question: "Block trades कहाँ execute होती हैं?",
      answer:
        "Block trades कई channels से execute होती हैं: dark pools (private matching venues), investment banks की block trading desks (जहाँ desk अपना capital commit करता है), electronic block crossing networks जैसे Liquidnet, और कभी-कभी public exchanges पर special block order types से। India में NSE की block deal window dedicated mechanism है — US में ये infrastructure ज़्यादा varied है।",
    },
    {
      question: "भारतीय निवेशक block trade data कैसे देख सकते हैं?",
      answer:
        "US में सभी executed block trades consolidated tape पर 10 seconds में report होती हैं। FINRA का ATS transparency data weekly aggregate volume provide करता है। Longer-term tracking के लिए 13F filings quarterly position changes दिखाती हैं जो block trading activity से correspond करती हैं। India में NSE/BSE block deal data daily available होता है exchange websites पर।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Block trade एक large privately negotiated securities transaction है। Public exchange पर order place करने की बजाय — जहाँ order size सभी market participants को visible होता और price move हो जाता — institutions specialized intermediaries से counterparty find करवाते हैं और trade execute करते हैं minimal market disruption के साथ।</p>

<p>Block trades institutional portfolio management की backbone हैं। जब एक pension fund को $50 million position liquidate करना हो, या mutual fund को नई holding में large position establish करना हो, तो वो simply exchange पर market order नहीं डाल सकते। Resulting price impact millions cost करता। Block trading infrastructure यही problem solve करती है।</p>

<h2>Block Trades कैसे काम करती हैं</h2>

<ol>
<li><strong>Institution block desk contact करती है:</strong> Major investment bank पर block trading desk (जिसे "upstairs market" भी कहते हैं) order receive करता है। Trader liquidity source करता है — bank के दूसरे institutional clients में natural counterparties ढूँढता है।</li>
<li><strong>Price negotiation:</strong> Block desk price negotiate करता है, typically current bid-ask spread और recent VWAP (Volume-Weighted Average Price) reference करके। Institution slight discount (sell पर) या premium (buy पर) accept कर सकती है guaranteed full block execution के बदले।</li>
<li><strong>Capital commitment:</strong> कई cases में block desk अपना capital commit करता है — seller से block खरीद लेता है (bank की balance sheet पर position लेकर) और फिर market में time के साथ बेचता है। यह "facilitation" या "principal" trade institution को immediate execution देती है।</li>
<li><strong>Reporting:</strong> Execute होने पर trade consolidated tape पर report होती है। Print एक single large transaction की तरह appear होता है, अक्सर bid और ask के बीच price पर।</li>
</ol>

<h2>Electronic Block Crossing Networks</h2>

<p>Liquidnet और POSIT जैसे networks institutional block orders electronically match करते हैं, बिना human intermediary के। ये dark pool का एक type हैं, लेकिन exclusively large institutional orders पर focus करते हैं और high-frequency traders को participate करने से रोकते हैं।</p>

<h2>Market Impact क्यों Matter करता है</h2>

<p>Market impact वो price movement है जो trading act से ही होता है। Retail investors के लिए 100 shares खरीदने पर market impact negligible है। Institutions के लिए यह single largest transaction cost है — अक्सर commissions से 10 गुना ज़्यादा। Research बताती है कि institutional orders का average market impact large-cap stocks पर 0.3-0.8% और small-cap पर 1-3% होता है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में NSE/BSE पर block deal window (morning 8:45-9:00 AM) institutional block trades के लिए dedicated mechanism है। Minimum ₹10 crore (approximately $1.2 million) deal size requirement है। FIIs और domestic institutions regular block deals करती हैं — यह data NSE website पर daily available है। US market block trade data publicly available है और Brefyr पर 13F filings track करके institutional activity का complete picture बनता है।</p>
`,
};
