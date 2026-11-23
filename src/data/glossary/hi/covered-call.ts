import type { GlossaryTerm } from "../../types";

export const termCoveredCallHi: GlossaryTerm = {
  slug: "covered-call",
  term: "Covered Call Strategy (कवर्ड कॉल)",
  title: "Covered Call — अपने Stocks से Income Generate कैसे करें",
  shortDefinition:
    "Covered call एक options strategy है जहाँ investor जो shares own करता है उन पर call options sell करता है, premium income collect करता है upside potential cap करने के बदले।",
  metaDescription:
    "Covered call strategy क्या है? Covered calls कैसे काम करते हैं, कब use करें, premium income vs capped upside trade-offs, और strike prices और expirations कैसे select करें।",
  wordCount: 460,
  category: "Trading",
  tags: ["covered-call", "options-strategy", "income", "premium", "options"],
  relatedSlugs: ["options", "call-option", "strike-price", "iron-condor", "implied-volatility"],
  relatedTerms: ["options", "call-option", "strike-price", "iron-condor", "implied-volatility"],
  faq: [
    {
      question: "Stock price covered call strike से ऊपर जाए तो क्या होता है?",
      answer:
        "Call buyer exercise करेगा और आप shares strike price पर sell करेंगे। Premium + purchase price से strike तक appreciation — दोनों keep। Strike से ऊपर gains miss। Example: $50 पर stock खरीदा, $60 call $2 में sell किया, stock $75 गया → $60 पर sell, $12/share total ($10 appreciation + $2 premium), $15 missed। यह covered calls का fundamental trade-off है।",
    },
    {
      question: "Same position पर कितनी बार covered calls sell करें?",
      answer:
        "ज़्यादातर sellers monthly या 30-45 day expirations use करते हैं क्योंकि theta decay final weeks में accelerate होती है। हर expiration (या call buy back) के बाद new call sell — cycle repeat। Weekly expirations ज़्यादा frequent premium लेकिन transaction costs और monitoring ज़्यादा। Key: consistency — systematic strategy treat करें, one-time trade नहीं।",
    },
    {
      question: "Covered call bullish strategy है या bearish?",
      answer:
        "Mildly bullish to neutral। Best case: stock slightly rise (strike तक) या flat रहे — shares keep, premium collect, नया call sell। Stock sharply rise: profit लेकिन extra upside miss। Stock significantly fall: declining shares own रहते हैं — premium small cushion provide करता है। Covered calls stable, dividend-paying stocks पर best काम करती हैं जहाँ modest appreciation expected हो।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Covered call retail investors में सबसे popular options strategy है, और reason valid है: अपने stocks से income generate करती है बिना additional capital requirement या naked option risk के। Call option sell करें अपने portfolio shares पर, premium collect करें, और या तो shares keep (stock strike से नीचे) या profit पर sell (stock strike से ऊपर)। Either outcome acceptable।</p>

<h2>Covered Call कैसे काम करती है</h2>

<p>आप 500 shares XYZ own करते हैं, currently $50/share। 5 call contracts ($55 strike, 30 days expiration) sell करें, $1.50/share ($750 total) collect।</p>

<p><strong>Scenario 1: Stock $55 से नीचे:</strong> Calls expire worthless। 500 shares + $750 premium keep। Annualized: $750/month on $25,000 position = roughly 36% annual yield premiums से (stock appreciation और dividends अलग)।</p>

<p><strong>Scenario 2: Stock $60 पर:</strong> Calls exercised। 500 shares $55 पर sell → $27,500 + $750 premium = $3,250 total gain। $60 पर sell करते तो extra $2,500 मिलता — missed। Effective sale price $56.50।</p>

<p><strong>Scenario 3: Stock $44 पर:</strong> Calls expire worthless ($750 keep)। Shares lost $3,000 value। Premium cushion → net loss $2,250 vs $3,000। 2.5% downside protection, लेकिन large losses prevent नहीं कर सकता।</p>

<h2>Strike Price Selection</h2>

<ul>
<li><strong>OTM calls (current price से ऊपर):</strong> Lower premium लेकिन ज़्यादा upside room। $50 stock पर $55 call → $5 appreciation potential + premium। Most common approach।</li>
<li><strong>ATM calls (current price के near):</strong> Higher premium लेकिन minimal appreciation room। Neutral stance, maximum income। Stock likely called away।</li>
<li><strong>ITM calls (current price से नीचे):</strong> Highest premium। Stock almost certainly called away। Enhanced exit strategy — current price से better effective sale price।</li>
</ul>

<h2>Expiration Selection</h2>

<p>Time decay (theta) covered call seller का friend है। Options final 30 days में time value fastest lose करते हैं। ज़्यादातर sellers 30-45 day expirations target करते हैं accelerating decay curve capture करने के लिए। Shorter expirations (weekly) ज़्यादा frequent premium लेकिन ज़्यादा active management। Longer expirations (60-90 days) higher total premium लेकिन slower decay।</p>

<h2>कब Covered Calls Use नहीं करें</h2>

<ul>
<li><strong>High-conviction bullish thesis:</strong> Stock 30% rise expect करें upcoming catalyst पर तो covered calls upside cap करती हैं — thesis waste।</li>
<li><strong>Significant decline expected:</strong> Premium minimal protection — 2-5%/month। Stock 20% drop तो premium barely dents। Protective put use करें।</li>
<li><strong>Major events:</strong> Earnings या binary events से पहले covered calls sell करना positive surprise पर called away risk।</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में covered call concept Nifty/stock options पर apply होता है। US market में institutional covered call activity 13F filings में दिखती है। CBOE S&P 500 BuyWrite Index funds systematic covered call strategies run करते हैं। Brefyr पर filings track करके institutions income vs stock outright hold strategy identify करें — return expectations और risk posture की insight मिलती है।</p>
`,
};
