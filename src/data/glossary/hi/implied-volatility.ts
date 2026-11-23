import type { GlossaryTerm } from "../../types";

export const termImpliedVolatilityHi: GlossaryTerm = {
  slug: "implied-volatility",
  term: "Implied Volatility (इम्प्लाइड वोलैटिलिटी)",
  title: "Implied Volatility — Options Market Future Price Swings के बारे में क्या Expect करता है",
  shortDefinition:
    "Implied volatility (IV) market का forecast है stock की expected price movement का, options prices से derive किया जाता है। Higher IV = market larger price swings expect करता है; lower IV = smaller expected moves।",
  metaDescription:
    "Implied volatility क्या है? IV options prices से कैसे calculate होता है, IV rank और percentile, earnings के around IV crush, और trading decisions में implied volatility कैसे use करें।",
  wordCount: 490,
  category: "Trading",
  tags: ["implied-volatility", "options", "volatility", "vix", "earnings", "options-pricing"],
  relatedSlugs: ["options", "options-chain", "call-option", "put-option", "iron-condor"],
  relatedTerms: ["options", "options-chain", "call-option", "put-option", "iron-condor"],
  faq: [
    {
      question: "Implied volatility और historical volatility में क्या difference है?",
      answer:
        "Historical volatility (HV) measure करती है stock past में कितना move हुआ, historical price data से। Implied volatility (IV) measure करती है market future में कितना movement expect करता है, current options prices से। HV backward-looking है; IV forward-looking। IV significantly HV से ज़्यादा हो तो options expensive हैं — market past से ज़्यादा future movement price कर रहा है। India में India VIX same concept है — Nifty options से derive होता है।",
    },
    {
      question: "IV crush क्या है और कब होता है?",
      answer:
        "IV crush implied volatility की sharp drop है जो known event (typically earnings) pass होने के बाद होती है। Earnings से पहले IV rise होती है (market large price move expect करता है), options premiums inflate होते हैं। Earnings release के बाद uncertainty resolve होती है, IV rapidly drop होती है — अक्सर 30-60% overnight। Option lose value हो सकता है even if stock expected direction में move करे, क्योंकि IV component evaporate हो गया। India में भी Nifty options earnings season और RBI policy events में same pattern दिखता है।",
    },
    {
      question: "VIX क्या है और implied volatility से कैसे relate करता है?",
      answer:
        "VIX (CBOE Volatility Index) S&P 500 index options की implied volatility से calculate होता है। Market की 30-day volatility expectation represent करता है। VIX 20 = market expect करता है S&P 500 daily ~1.15% move। 'Fear gauge' कहलाता है क्योंकि selloffs में protective puts demand से spike करता है। India में India VIX equivalent है — Nifty options से derive होता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Implied volatility options market का collective estimate है stock कितना move करेगा। यह stock की past price history से calculate नहीं होता — वो historical volatility है। IV current options prices से extract होता है options pricing model (typically Black-Scholes) use करके। Options expensive हैं तो IV high — market large expected moves price कर रहा है। Options cheap हैं तो IV low — market calm expect करता है।</p>

<p>IV annualized percentage में express होती है। IV 30% मतलब market expect करता है stock next year plus/minus 30% range में move करे (one standard deviation)। Shorter timeframe के लिए: square root of periods से divide करें। One month के लिए sqrt(12) से divide = approximately 8.7%। One day के लिए sqrt(252) से divide = approximately 1.9%।</p>

<h2>IV Options Prices कैसे Affect करता है</h2>

<p>Stock price के बाद implied volatility options pricing का सबसे important variable है। IV rise होने पर call और put दोनों prices increase। IV fall होने पर दोनों decrease। Higher expected volatility option finishing in the money की probability बढ़ाती है, option ज़्यादा valuable बनाती है।</p>

<p>Option price की IV changes sensitivity को <strong>vega</strong> कहते हैं। At-the-money options का highest vega होता है — IV changes से सबसे ज़्यादा affect होते हैं। Deep ITM और deep OTM options का lower vega। Longer-dated options का भी higher vega shorter-dated से।</p>

<h2>Earnings Announcements के Around IV</h2>

<p>सबसे predictable IV pattern quarterly earnings announcements के around होता है। Earnings से पहले weeks में IV rise होती है (market large price move anticipate करता है)। Options premiums inflate होते हैं। Earnings release के बाद IV sharply drop होती है — यह <strong>IV crush</strong> है।</p>

<p>IV crush counterintuitive outcomes create करता है। Trader calls buy करता है expecting stock beat करे — stock 3% rise करता है — फिर भी money lose करता है क्योंकि IV component collapse premium gain से ज़्यादा था। इसलिए experienced traders earnings से पहले options sell करते हैं (inflated IV harvest करने के लिए) buy करने की बजाय।</p>

<h2>IV Rank और IV Percentile</h2>

<p>Raw IV numbers stocks across comparable नहीं — biotech normally 60% IV पर trade हो सकता है जबकि utility 15% पर। Context के लिए traders दो relative measures use करते हैं:</p>

<ul>
<li><strong>IV Rank:</strong> Current IV 52-week IV range में कहाँ है। Low 20%, high 60%, current 30% → IV Rank 25% ((30-20)/(60-20))। IV annual range का lower quarter में है।</li>
<li><strong>IV Percentile:</strong> Past year में कितने percentage days IV current level से नीचे थी। IV Percentile 85% = IV past year में 85% time current level से lower थी — IV elevated है।</li>
</ul>

<p>High IV Rank/Percentile environments options sellers favor करती हैं (premiums rich हैं)। Low environments buyers favor करती हैं (premiums cheap हैं)।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में India VIX (Nifty options से derived) same concept है। India VIX 15 से नीचे = calm market; 25+ = elevated fear। Budget, RBI policy, और election results के around India VIX spike करता है — earnings season effect same है। US market implied volatility data options chain में available है और Brefyr पर SEC filings track करने पर insider selling और institutional put positions जैसे bearish signals IV data से confirm करें।</p>
`,
};
