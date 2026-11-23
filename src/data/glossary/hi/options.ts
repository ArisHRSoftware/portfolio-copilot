import type { GlossaryTerm } from "../../types";

export const termOptionsHi: GlossaryTerm = {
  slug: "options",
  term: "Options (ऑप्शंस — Calls और Puts)",
  title: "Options — Stock खरीदने या बेचने का Right देने वाले Contracts",
  shortDefinition:
    "Options financial derivatives हैं जो holder को right देते हैं (obligation नहीं) एक underlying asset को specified price पर certain date से पहले buy (call) या sell (put) करने का।",
  metaDescription:
    "Options क्या हैं? Call और put options कैसे काम करते हैं, buyers और sellers का difference, intrinsic vs time value, और SEC filings में options activity कैसे दिखती है — सब समझें।",
  wordCount: 550,
  category: "Trading",
  tags: ["options", "calls", "puts", "derivatives", "hedging", "speculation"],
  relatedSlugs: ["call-option", "put-option", "strike-price", "implied-volatility", "options-chain", "covered-call", "iron-condor"],
  relatedTerms: ["call-option", "put-option", "strike-price", "implied-volatility", "options-chain", "covered-call", "iron-condor"],
  faq: [
    {
      question: "Option buy करने और sell (write) करने में क्या difference है?",
      answer:
        "Buyer premium pay करता है और exercise करने का right पाता है। Maximum loss premium तक limited है; potential profit calls के लिए theoretically unlimited है। Seller (writer) premium collect करता है और obligation लेता है। Seller का maximum profit premium है; potential loss naked calls के लिए theoretically unlimited है। Approximately 70-80% options expire worthless, इसलिए professional traders selling side prefer करते हैं — लेकिन एक bad trade months का premium income wipe कर सकता है।",
    },
    {
      question: "भारत से US options trade कर सकते हैं?",
      answer:
        "Indian retail brokerages (Vested, INDMoney, Groww) US options trading support नहीं करतीं। Interactive Brokers जैसे US-based broker से possible है लेकिन LRS (Liberalized Remittance Scheme) under $250,000/year limit apply होती है। India में NSE/BSE पर Nifty और Bank Nifty options बहुत popular हैं — concept same है, underlying market अलग है। US market options data research tool के रूप में valuable है।",
    },
    {
      question: "SEC filings में options कैसे दिखते हैं?",
      answer:
        "Institutional investors quarterly 13F-HR filings में options positions report करते हैं — type (call/put), shares controlled, और position value दिखता है। Hedge funds की large put positions bearish bets signal करती हैं। Executive stock options proxy statements (DEF 14A) में appear होती हैं और exercise होने पर Form 4 insider trading filings में report होती हैं। Brefyr पर 13F filings track करके institutional sentiment दिखता है जो stock-only analysis में visible नहीं होता।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Options ऐसे contracts हैं जो underlying asset — ज़्यादातर stock — से अपनी value derive करते हैं। ये दो types के होते हैं: <strong>calls</strong> (buy करने का right) और <strong>puts</strong> (sell करने का right)। Stock directly खरीदने की बजाय, options leveraged exposure देते हैं defined risk के साथ, जो speculation, hedging, और income generation के लिए powerful tools बनाते हैं।</p>

<p>हर options contract 100 shares control करता है। अगर Apple पर call option $5.00 है, तो एक contract $500 (100 shares x $5.00) cost होगा। यह leverage options की appeal भी है और danger भी — stock price में छोटी movement option value में बड़ा percentage change create करती है।</p>

<h2>Calls और Puts Explained</h2>

<p><strong>Call option</strong> holder को right देता है 100 shares strike price पर expiration से पहले buy करने का। Call buy करना bullish bet है — profit तब होता है जब stock strike price + premium से ऊपर जाता है। अगर stock strike से नीचे रहा, call expire worthless हो जाता है और loss सिर्फ premium तक limited है।</p>

<p><strong>Put option</strong> holder को right देता है 100 shares strike price पर expiration से पहले sell करने का। Put buy करना bearish bet है — profit तब होता है जब stock strike price - premium से नीचे गिरता है। Puts insurance का काम भी करते हैं: 1,000 shares hold करने वाला investor 10 put contracts buy करके decline से protect कर सकता है।</p>

<h2>Option Price कैसे Determine होता है</h2>

<p>Option price (premium) दो components से बनता है:</p>

<ul>
<li><strong>Intrinsic value:</strong> Option कितना "in the money" है। $50 strike call जब stock $55 पर trade हो रहा हो तो $5 intrinsic value है। Out-of-the-money option की intrinsic value zero है।</li>
<li><strong>Time value (extrinsic value):</strong> Intrinsic value से ऊपर additional premium, जो reflect करता है कि option expiration से पहले और profitable हो सकता है। Time value expiration approach होने पर decay होती है — इसे "theta decay" कहते हैं।</li>
</ul>

<p>Premium को कई factors influence करते हैं: stock price vs strike price, time to expiration, implied volatility (higher volatility = higher prices), interest rates और dividends।</p>

<h2>Options के Common Uses</h2>

<ul>
<li><strong>Speculation:</strong> Calls buy करें stock rise पर bet लगाने के लिए, puts buy करें decline पर — leverage और defined risk के साथ।</li>
<li><strong>Hedging:</strong> Portfolio managers holdings पर puts buy करते हैं market decline से protect करने के लिए — portfolio insurance।</li>
<li><strong>Income generation:</strong> Covered call strategy — अपने stock पर calls sell करना — premium income generate करती है upside cap करने के बदले।</li>
<li><strong>Volatility trading:</strong> Straddle (same strike पर call + put buy करना) large move से profit करती है, direction चाहे कुछ भी हो।</li>
<li><strong>Multi-leg strategies:</strong> Iron condor जैसी strategies multiple options combine करके defined risk और reward positions create करती हैं।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में NSE पर Nifty, Bank Nifty, और individual stock options बहुत actively trade होते हैं। Concept exactly same है — calls, puts, strikes, expiration। US options data 13F filings के through available है जो institutional sentiment reveal करता है। Brefyr पर SEC filings analyze करके options activity track करें — यह stock-only research से deeper insight देती है।</p>
`,
};
