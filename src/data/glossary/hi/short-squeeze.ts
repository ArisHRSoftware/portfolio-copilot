import type { GlossaryTerm } from "../../types";

export const termShortSqueezeHi: GlossaryTerm = {
  slug: "short-squeeze",
  term: "Short Squeeze (शॉर्ट स्क्वीज़)",
  title: "Short Squeeze — जब Short Sellers Forced Buy करें और Prices आसमान छुएँ",
  shortDefinition:
    "Short squeeze तब होता है जब heavily shorted stock sharply rise करता है, short sellers को shares buy करने पर force करता है positions cover करने के लिए, जो price और ऊपर drive करता है self-reinforcing feedback loop में।",
  metaDescription:
    "Short squeeze क्या है? Mechanics, squeeze potential create करने वाली conditions, GameStop जैसे famous examples, candidates identify कैसे करें, और squeeze plays के risks।",
  wordCount: 480,
  category: "Trading",
  tags: ["short-squeeze", "short-selling", "short-interest", "gamma-squeeze", "volatility"],
  relatedSlugs: ["short-selling", "gamma-squeeze", "margin-trading", "circuit-breaker"],
  relatedTerms: ["short-selling", "gamma-squeeze", "margin-trading", "circuit-breaker"],
  faq: [
    {
      question: "Stock short squeeze के लिए vulnerable कब होता है?",
      answer:
        "Classic setup: (1) High short interest as percentage of float — 20% से ऊपर elevated, 40%+ extreme। (2) Low float — कम available shares = buying pressure का ज़्यादा impact। (3) High days-to-cover (short interest / avg daily volume) — 7+ = short sellers quickly exit नहीं कर सकते। (4) Positive catalyst — earnings beat, partnership, coordinated buying। (5) Hard-to-borrow shares। पाँचों conditions together = maximum squeeze potential।",
    },
    {
      question: "Short squeeze typically कितने समय तक चलता है?",
      answer:
        "ज़्यादातर short squeezes intense लेकिन short-lived — days से कुछ weeks। Initial surge rapid होती है forced covering feedback loop से। Short interest substantially reduce होने पर buying pressure fade। GameStop January 2021 में $20 से $483 और वापस $40 — roughly three weeks। कुछ squeezes single session — 50-100% gain followed by sharp reversal। Exit timing central challenge है।",
    },
    {
      question: "Short squeeze हो रहा stock buy करना risky है?",
      answer:
        "Extremely risky। जब तक squeeze widely recognized हो, ज़्यादातर move already हो चुका होता है। Momentum trade है बिना fundamental support — bet है forced buying continue होगी। Reversals violent होते हैं: squeeze end होने पर stock days में 50-80% drop। Outcomes highly skewed — कुछ participants large gains, बहुत से latecomers large losses absorb करते हैं। Speculative activity है, investment strategy नहीं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Short squeeze stock markets के सबसे dramatic events में से एक है। जब बड़ी संख्या में investors ने stock short sell किया हो — shares borrow करके sell, expecting lower price पर buy back — और stock instead rise करे, short sellers mounting losses face करते हैं। Losses grow होने पर brokers margin calls issue करते हैं। Margin call meet नहीं कर पाने वाले short sellers forced buy करते हैं market prices पर। यह forced buying price और ऊपर push करती है → more margin calls → cascading feedback loop।</p>

<h2>Short Squeeze की Mechanics</h2>

<ol>
<li><strong>High short interest build होता है:</strong> Bearish investors weeks/months में large short positions accumulate करते हैं। Short interest as percentage of float 20%, 40%, extreme cases 100%+ climb।</li>
<li><strong>Catalyst buying trigger करता है:</strong> Earnings surprise, positive news, coordinated retail buying। Fundamental catalyst ज़रूरी नहीं — कोई भी sustained buying pressure काम करता है।</li>
<li><strong>Short sellers losses face:</strong> Price rise → unrealized losses grow → brokers margin requirements raise या margin calls issue। कुछ short sellers voluntarily cover।</li>
<li><strong>Covering buying intensify करती है:</strong> Short sellers shares buy करना buying pressure add करता है → stock और rise → remaining shorts losses increase।</li>
<li><strong>Feedback loop:</strong> More covering → higher prices → more margin calls → more covering। Price fundamental justification से far beyond जा सकता है।</li>
<li><strong>Exhaustion:</strong> ज़्यादातर short sellers cover या forced out। Buying pressure fade। Stock typically violent reverse — speculative long buyers simultaneously exit attempt।</li>
</ol>

<h2>GameStop Squeeze (January 2021)</h2>

<p>GameStop (GME) market history का सबसे famous short squeeze बना। Setup extreme था: short interest float का 100%+ — public circulation में exist करने से ज़्यादा shares short sell थे। Reddit r/wallstreetbets पर retail investors ने setup identify किया और shares + call options buy करना शुरू किया। Resulting gamma squeeze (dealers call option exposure hedge करने stock buy) ने move amplify किया। GME roughly $20 से $483 — three weeks में। Hedge fund Melvin Capital ने $6 billion+ lose किए। Multiple circuit breakers trigger हुए।</p>

<h2>Short Squeeze Candidates Identify करना</h2>

<ul>
<li><strong>Short interest / float:</strong> FINRA twice monthly publish करता है 10-day delay से। 20%+ = elevated squeeze risk।</li>
<li><strong>Days to cover:</strong> Short interest / average daily volume। 7+ days = short sellers quickly exit नहीं कर सकते।</li>
<li><strong>Cost to borrow:</strong> Stock loan fee 20-50%+ = shares scarce, shorts under pressure।</li>
<li><strong>Options activity:</strong> Unusually high call volume, especially near-term OTM calls = gamma squeeze forming potential।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में short selling mechanism different है — SEBI framework under institutional short selling ज़्यादा common है। लेकिन short squeeze dynamics universal हैं। US market watchlist stock suddenly 50% surge करे बिना fundamental news → short interest data और insider filings check करें genuine re-rating vs technical squeeze distinguish करने के लिए। Brefyr पर SEC filings track करें — unusual price activity का context मिलता है।</p>
`,
};
