import type { GlossaryTerm } from "../../types";

export const termCallOptionHi: GlossaryTerm = {
  slug: "call-option",
  term: "Call Option (कॉल ऑप्शन)",
  title: "Call Option — Rising Stock Prices से Leverage के साथ Profit कैसे कमाएँ",
  shortDefinition:
    "Call option एक contract है जो holder को right देता है (obligation नहीं) 100 shares underlying stock के specified strike price पर expiration date से पहले buy करने का।",
  metaDescription:
    "Call option क्या है? Call options कैसे काम करते हैं, कब buy या sell करें, profit और loss calculations, और SEC filings में call activity institutional sentiment कैसे signal करती है।",
  wordCount: 480,
  category: "Trading",
  tags: ["call-option", "options", "bullish", "leverage", "derivatives"],
  relatedSlugs: ["put-option", "options", "strike-price", "covered-call", "implied-volatility"],
  relatedTerms: ["put-option", "options", "strike-price", "covered-call", "implied-volatility"],
  faq: [
    {
      question: "Call option buy करने पर maximum कितना loss हो सकता है?",
      answer:
        "Call option buy करने पर maximum loss 100% premium है — इससे ज़्यादा नहीं। अगर $3.00 per share ($300 per contract) का call buy किया और stock strike price से नीचे रहा, option expire worthless होगा और $300 loss। यह defined-risk feature margin पर stock buy करने से better है जहाँ losses initial investment से ज़्यादा हो सकते हैं।",
    },
    {
      question: "Call option exercise करें या sell करें — क्या better है?",
      answer:
        "ज़्यादातर cases में option sell करना better है exercise करने से। Exercise करने पर सिर्फ intrinsic value (stock price minus strike price) मिलता है। Sell करने पर intrinsic value PLUS remaining time value दोनों मिलती हैं। Exception तब होता है जब actual shares own करना है — जैसे upcoming dividend capture करने के लिए — और time value negligible है। Professional options traders rarely exercise करते हैं।",
    },
    {
      question: "'In the money' call option का क्या मतलब है?",
      answer:
        "Call option 'in the money' (ITM) होता है जब current stock price strike price से ऊपर हो। Example: $50 call जब stock $55 पर trade हो — $5 in the money। 'At the money' (ATM) मतलब stock price = strike price। 'Out of the money' (OTM) मतलब stock price strike से नीचे — कोई intrinsic value नहीं। ITM options expensive लेकिन higher probability of profit; OTM options सस्ते लेकिन expire worthless होने की ज़्यादा chances।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Call option एक bullish bet है। Call buy करने पर आप premium pay करते हैं 100 shares fixed price (strike price) पर specific date (expiration) से पहले purchase करने के right के लिए। अगर stock strike price + premium से ऊपर जाता है, profit होता है। नहीं गया तो premium loss — और कुछ नहीं।</p>

<p>यह defined-risk leverage calls को attractive बनाता है। $50 stock की 100 shares खरीदने में $5,000 लगते हैं, लेकिन call option सिर्फ $300 में same 100 shares control करता है। Stock $60 पहुँचने पर $300 call $1,000+ हो सकता है — 233% return vs 20% stock purchase पर। लेकिन stock flat रहा या गिरा तो पूरा $300 गया।</p>

<h2>Call Option कैसे काम करता है — Example</h2>

<p>आपने एक AAPL January $200 call $8.00 में buy किया:</p>
<ul>
<li><strong>Underlying:</strong> Apple (AAPL)</li>
<li><strong>Strike price:</strong> $200</li>
<li><strong>Premium:</strong> $8.00 per share = $800 total</li>
<li><strong>Breakeven:</strong> $208 ($200 strike + $8 premium)</li>
</ul>

<p><strong>AAPL $220 पर expiration पर:</strong> Call worth $20 intrinsic ($220 - $200)। Profit = $20 - $8 = $12/share = $1,200 per contract — 150% return।</p>

<p><strong>AAPL $205 पर:</strong> Call worth $5 intrinsic। $8 paid, so $3/share loss = $300।</p>

<p><strong>AAPL $195 पर:</strong> Call expire worthless। पूरा $800 premium lost।</p>

<h2>Calls Buy करना vs Sell करना</h2>

<p><strong>Call buy करना</strong> (going long) leveraged bullish bet है defined risk के साथ। Maximum loss = premium; maximum gain theoretically unlimited।</p>

<p><strong>Naked call sell (write) करना</strong> opposite है: premium collect करें और hope करें stock strike से नीचे रहे। Maximum gain = premium; maximum loss theoretically unlimited क्योंकि stock कितना भी ऊपर जा सकता है। यह highest-risk strategies में से एक है।</p>

<p><strong>Covered call sell करना</strong> popular compromise है — अपने stock पर calls sell करें। Stock strike से ऊपर गया तो shares "called away" हो जाते हैं, लेकिन premium income मिलता है।</p>

<h2>Call Prices को कौन से Factors Move करते हैं — Greeks</h2>

<ul>
<li><strong>Delta:</strong> Stock में $1 move पर call price कितना change होता है। ATM calls का delta ~0.50; deep ITM calls ~1.00 (dollar-for-dollar move)।</li>
<li><strong>Theta:</strong> Time decay — हर दिन call कितना lose करता है simply time passage से। Call buyers के against और sellers के favor में काम करता है।</li>
<li><strong>Vega:</strong> Implied volatility sensitivity। IV increase होने पर (earnings से पहले) call prices बढ़ते हैं stock move न होने पर भी। Event के बाद "IV crush" से prices deflate होते हैं।</li>
<li><strong>Gamma:</strong> Delta change की rate। High gamma = option delta rapidly shift हो रहा है। ATM options near expiration पर gamma highest होता है।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में NSE पर Nifty call options बहुत popular हैं — concept exactly same है। US market में institutional call positions 13F-HR filings में दिखती हैं। Executive stock options Form 4 पर exercise होने पर report होती हैं। Brefyr पर filings track करके institutional conviction levels और insider activity monitor करें।</p>
`,
};
