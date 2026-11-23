import type { GlossaryTerm } from "../../types";

export const termStrikePriceHi: GlossaryTerm = {
  slug: "strike-price",
  term: "Strike Price (स्ट्राइक प्राइस)",
  title: "Strike Price — हर Options Contract की Fixed Price",
  shortDefinition:
    "Strike price (exercise price) वो fixed price है जिस पर options contract holder underlying stock buy (calls के लिए) या sell (puts के लिए) कर सकता है option exercise करके।",
  metaDescription:
    "Strike price क्या है? Calls और puts के लिए strike prices कैसे काम करते हैं, सही strike कैसे choose करें, strike price और option premium का relationship, और moneyness explained।",
  wordCount: 450,
  category: "Trading",
  tags: ["strike-price", "options", "exercise-price", "moneyness", "derivatives"],
  relatedSlugs: ["options", "call-option", "put-option", "options-chain", "implied-volatility"],
  relatedTerms: ["options", "call-option", "put-option", "options-chain", "implied-volatility"],
  faq: [
    {
      question: "Stock के लिए available strike prices कैसे decide होती हैं?",
      answer:
        "Options exchanges stock price level और trading activity के basis पर available strikes set करते हैं। $25 से कम stocks पर strikes $2.50 apart, $25-$200 पर $5 apart, $200+ पर $10 apart। Heavily traded stocks (SPY, Apple) पर $1 intervals पर additional strikes होते हैं। India में NSE पर भी similar pattern है — Nifty options पर 50/100 point intervals पर strikes available होते हैं।",
    },
    {
      question: "In-the-money या out-of-the-money options buy करें?",
      answer:
        "Objective पर depend करता है। ITM options expensive हैं लेकिन higher delta, lower theta decay, higher probability of profit — stock जैसा behave करते हैं। OTM options सस्ते हैं लेकिन lower delta, faster time decay, lower probability — ज़्यादा leverage लेकिन mostly expire worthless। Hedging के लिए ITM/ATM reliable protection। Speculative bets के लिए OTM maximum leverage।",
    },
    {
      question: "Stock split के बाद executive stock options की strike price का क्या होता है?",
      answer:
        "Stock split के बाद strike price और option shares proportionally adjust होते हैं। 2-for-1 split में $100 strike पर 1,000 options → $50 strike पर 2,000 options हो जाते हैं। Total value preserved रहता है। Reverse split उल्टा: 1-for-10 reverse split में $5 पर 1,000 options → $50 पर 100 options।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Strike price options contract का सबसे important parameter है। यह determine करता है कि option holder किस price पर transact कर सकता है — calls के लिए strike price पर stock buy, puts के लिए strike price पर stock sell। Current stock price के साथ combine करके, strike price define करता है कि option की intrinsic value है या नहीं और price changes पर कैसे respond करेगा।</p>

<h2>Moneyness — ITM, ATM, और OTM</h2>

<p>Strike price और current stock price का relationship option की "moneyness" define करता है:</p>

<table>
<thead><tr><th>Moneyness</th><th>Call Option</th><th>Put Option</th></tr></thead>
<tbody>
<tr><td><strong>In the Money (ITM)</strong></td><td>Stock price > Strike price</td><td>Stock price < Strike price</td></tr>
<tr><td><strong>At the Money (ATM)</strong></td><td>Stock price = Strike price</td><td>Stock price = Strike price</td></tr>
<tr><td><strong>Out of the Money (OTM)</strong></td><td>Stock price < Strike price</td><td>Stock price > Strike price</td></tr>
</tbody>
</table>

<p>ITM option की intrinsic value होती है — अभी exercise करें तो कुछ worth है। ATM boundary पर है। OTM की कोई intrinsic value नहीं; पूरा premium time value और volatility premium से बना है।</p>

<p>Example: Stock $75 पर trading:</p>
<ul>
<li>$70 call: ITM by $5। Intrinsic value = $5।</li>
<li>$75 call: ATM। Intrinsic value = $0।</li>
<li>$80 call: OTM by $5। Intrinsic value = $0।</li>
<li>$80 put: ITM by $5। Intrinsic value = $5।</li>
<li>$70 put: OTM by $5। Intrinsic value = $0।</li>
</ul>

<h2>Strike Price Premium को कैसे Affect करती है</h2>

<p>Call options के लिए lower strike = ज़्यादा expensive (सस्ते price पर buy करने का right)। $60 stock पर $50 call minimum $10 worth (intrinsic value alone); $70 call सिर्फ time value worth है। Strike जितनी ज़्यादा OTM, premium उतना कम — probability of finishing ITM decrease होती है।</p>

<p>Put options में relationship reverse है। Higher strike = ज़्यादा expensive (ज़्यादा price पर sell करने का right)। Options chain में यह relationship clearly visible है।</p>

<h2>Traders Strike Prices कैसे Choose करते हैं</h2>

<ul>
<li><strong>Aggressive speculation:</strong> OTM strikes। Cheap premium, maximum leverage, lowest probability of profit। Earnings surprise पर big bet — $200 lose करें या $2,000 बनाएँ।</li>
<li><strong>Moderate directional bet:</strong> ATM या slightly ITM strikes। Higher premium लेकिन higher delta और probability of profit।</li>
<li><strong>Stock replacement:</strong> Deep ITM strikes। High delta (0.80-0.95), stock जैसा behave करता है लेकिन कम capital cost और defined risk floor।</li>
<li><strong>Income strategies:</strong> OTM strikes covered calls के लिए। Current price से ऊपर call sell करें — premium income stock keep करते हुए।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में NSE पर Nifty options strikes 50-point intervals पर available हैं। Concept exactly same है — ITM, ATM, OTM logic universal है। US market में executive stock options की strike price proxy statement (DEF 14A) और Form 4 filings में appear होती है। Brefyr पर filings track करके executives का profit calculate कर सकते हैं — strike price vs exercise-date stock price comparison strong business performance indicate करता है।</p>
`,
};
