import type { GlossaryTerm } from "../../types";

export const termBidAskSpreadHi: GlossaryTerm = {
  slug: "bid-ask-spread",
  term: "Bid-Ask Spread (बिड-आस्क स्प्रेड)",
  title: "Bid-Ask Spread — हर Stock Trade की Hidden Cost",
  shortDefinition:
    "Bid-ask spread buyer की highest willing price (bid) और seller की lowest willing price (ask) का difference है। यह हर trade की implicit transaction cost represent करता है।",
  metaDescription:
    "Bid-ask spread क्या है? Spreads कैसे काम करते हैं, volatility में क्यों widen होते हैं, spread size किससे determine होता है, और trading costs minimize कैसे करें।",
  wordCount: 450,
  category: "Market Structure",
  tags: ["bid-ask-spread", "market-structure", "trading-costs", "liquidity", "order-book"],
  relatedSlugs: ["market-order", "limit-order", "market-maker", "dark-pool"],
  relatedTerms: ["market-order", "limit-order", "market-maker", "dark-pool"],
  faq: [
    {
      question: "कुछ stocks का spread wide क्यों होता है?",
      answer:
        "Spread width primarily liquidity और risk से determine होती है। Apple, Microsoft जैसे heavily traded large-cap stocks का spread 1 cent है क्योंकि हज़ारों market participants compete करते हैं। Small-cap stocks में कम participants होते हैं — spread $0.05 से $0.50+ हो सकता है। Higher volatility वाले stocks का spread भी wider होता है क्योंकि market makers को adverse price moves का risk compensate करना होता है।",
    },
    {
      question: "Bid-ask spread मेरी returns कैसे affect करता है?",
      answer:
        "Spread round-trip cost है। $0.10 spread वाले stock पर buy करते समय ~$0.05 lose (ask pay करें) और sell करते समय ~$0.05 (bid receive करें)। $50 stock पर 0.2% implicit cost — commissions से पहले। Frequent traders के लिए spread costs significantly compound होती हैं। Indian investors के लिए INR→USD conversion + spread = total hidden cost जो returns erode करती है।",
    },
    {
      question: "Spread अचानक wide क्यों हो जाता है?",
      answer:
        "Uncertainty बढ़ने पर spreads widen होते हैं। Common triggers: earnings announcements (unpredictable results से पहले), breaking news (geopolitical events), low liquidity periods (pre-market, after-hours, lunch hour), market-wide volatility spikes (VIX surge), और trading halts (reopening पर extremely wide)। March 2020 COVID selloff में large-cap spreads भी 5-10x widen हुए थे।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>हर stock की हर moment दो prices होती हैं: <strong>bid</strong> (highest price जो कोई pay करने को तैयार है) और <strong>ask</strong> (lowest price जिस पर कोई sell करने को तैयार है)। इन दोनों का gap bid-ask spread है। यह market microstructure की fundamental feature है और हर trade execute करने की implicit cost represent करता है।</p>

<p>अगर stock $49.95 bid और $50.00 ask दिखाता है, spread $0.05 है। <a href="/glossary/market-order">Market order</a> से buy करने वाला $50.00 pay करता है। Market order से sell करने वाला $49.95 receive करता है। $0.05 difference उसे मिलता है जो liquidity provide करता है — typically <a href="/glossary/market-maker">market maker</a>।</p>

<h2>Spread Width किससे Determine होती है</h2>

<ul>
<li><strong>Trading volume:</strong> High-volume stocks ज़्यादा participants attract करते हैं जो best bid/ask compete करते हैं → spread compress होता है। Low-volume stocks में fewer participants → wider spread।</li>
<li><strong>Market makers की संख्या:</strong> ज़्यादा market makers = tighter spreads (competition)। कम coverage = wider spread।</li>
<li><strong>Volatility:</strong> Rapidly moving price में market makers spreads widen करते हैं adverse move risk compensate करने के लिए। VIX (volatility measure) directly market spreads से correlate करता है।</li>
<li><strong>Tick size:</strong> US equities का minimum tick $0.01 है। Most liquid stocks (Apple, Amazon) often 1-cent spread दिखाते हैं — competition ने spread regulatory minimum तक compress कर दिया है।</li>
<li><strong>Information asymmetry:</strong> अगर market makers suspect करते हैं कि informed traders (insiders, hedge funds) active हैं, वे spreads widen करते हैं protection के लिए।</li>
</ul>

<h2>Spread as Trading Cost</h2>

<p>Commissions explicit costs हैं — confirmation पर दिखती हैं। Spread implicit cost है जो equally real है लेकिन overlooked होती है। Ask पर buy और bid पर sell करने पर spread round-trip cost है।</p>

<p>$100 stock, $0.02 spread: 0.02% per round trip — negligible। $10 stock, $0.50 spread: 5% per round trip — significant drag on returns, especially short-term traders के लिए।</p>

<h2>Order Book कैसे Read करें</h2>

<p>Order book (Level 2 data) सभी outstanding limit orders दिखाता है। Best bid और best ask NBBO form करते हैं। <strong>Depth</strong> बताता है हर level पर कितने shares available हैं। Stock का 1-cent spread हो सकता है लेकिन best bid पर सिर्फ 100 shares। 10,000 shares का market sell order उस level blow through करेगा — effective spread 1 cent से बहुत wider। इसीलिए large institutional orders <a href="/glossary/dark-pool">dark pools</a> या algorithmic execution use करते हैं।</p>

<h2>दिन भर Spread कैसे बदलता है</h2>

<p>Spreads predictable intraday pattern follow करते हैं। Market open (9:30 AM ET) पर widest — market makers overnight information assess करते हैं। Late morning तक tighten। Lunch hour (12-1 PM) slight widen। Afternoon tighten — 2:00-3:30 PM narrowest जब volume peak। Close से पहले फिर widen।</p>

<p><a href="/glossary/after-hours-trading">After-hours</a> और <a href="/glossary/pre-market-trading">pre-market</a> में spreads dramatically wider — mid-cap stocks पर 10-50x regular-hours spread। Extended hours में सिर्फ <a href="/glossary/limit-order">limit orders</a> accepted हैं इसी reason से।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>NSE/BSE पर भी bid-ask spread exist करता है लेकिन high-volume Nifty 50 stocks में minimal है। US market में Indian investors spread को total cost analysis में include करें — INR→USD conversion + broker fees + spread = real cost। Brefyr पर SEC filing analysis से attractive लगने वाला stock wide spread carry करता हो तो research edge erode हो सकता है।</p>
`,
};
