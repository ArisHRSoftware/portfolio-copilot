import type { GlossaryTerm } from "../../types";

export const termPeRatioHi: GlossaryTerm = {
  slug: "pe-ratio",
  term: "P/E Ratio (प्राइस-टू-अर्निंग्स अनुपात)",
  title: "P/E Ratio — Stock Valuation का सबसे Popular Metric कैसे समझें",
  shortDefinition:
    "P/E ratio (Price-to-Earnings ratio) बताता है कि investors company की हर $1 earnings के लिए कितना pay कर रहे हैं। यह stock valuation का सबसे widely used metric है।",
  metaDescription:
    "P/E ratio क्या है? Stock valuation का सबसे popular metric समझें — high vs low P/E का मतलब, forward vs trailing P/E, और भारतीय निवेशक इसे US stocks के लिए कैसे use करें।",
  wordCount: 700,
  category: "Financial Metrics",
  tags: ["valuation", "pe-ratio", "earnings", "stock-analysis"],
  relatedSlugs: ["ebitda", "enterprise-value", "market-capitalization", "free-cash-flow"],
  relatedTerms: ["ebitda", "enterprise-value", "market-capitalization", "free-cash-flow"],
  faq: [
    {
      question: "High P/E ratio अच्छा है या बुरा?",
      answer:
        "High P/E (30+) मतलब investors company की future growth के लिए premium pay कर रहे हैं। Tech companies (Tesla, NVIDIA) often high P/E पर trade करती हैं। Low P/E (5-15) मतलब stock 'cheap' हो सकता है — या market को growth की उम्मीद नहीं। Context ज़रूरी है: sector average से compare करें, absolute number से judge न करें।",
    },
    {
      question: "Trailing P/E और Forward P/E में क्या difference है?",
      answer:
        "Trailing P/E पिछले 12 months की actual earnings use करता है — factual लेकिन backward-looking। Forward P/E analysts के future earnings estimates use करता है — forward-looking लेकिन estimate गलत हो सकता है। ज़्यादातर professional investors दोनों देखते हैं।",
    },
    {
      question: "India के stocks और US stocks का P/E compare कर सकते हैं?",
      answer:
        "Carefully. Nifty 50 का average P/E ~22 है और S&P 500 का ~21-25। लेकिन sector mix अलग है — India tech-heavy नहीं है जबकि S&P 500 में tech 30%+ है। Same sector within same market compare करना ज़्यादा meaningful है।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>P/E ratio (Price-to-Earnings ratio) stock valuation का सबसे basic और widely used metric है। Formula simple है:</p>

<p><strong>P/E = Stock Price ÷ Earnings Per Share (EPS)</strong></p>

<p>अगर किसी company का stock $100 पर trade हो रहा है और EPS $5 है, तो P/E ratio 20x है। इसका मतलब: investors company की हर $1 earnings के लिए $20 pay कर रहे हैं।</p>

<h2>P/E Ratio कैसे Interpret करें</h2>

<h3>High P/E (25+)</h3>
<p>High P/E usually मतलब है कि market expect करता है company fast grow करेगी। Tesla (P/E 60+), NVIDIA (P/E 50+) जैसी tech companies high P/E पर trade करती हैं क्योंकि investors future earnings growth के लिए premium pay कर रहे हैं।</p>

<p><strong>Risk:</strong> High P/E stocks ज़्यादा volatile होते हैं। अगर company expected growth deliver नहीं करती, stock price sharply fall हो सकता है।</p>

<h3>Low P/E (5-15)</h3>
<p>Low P/E मतलब stock relatively "cheap" हो सकता है — लेकिन सस्ता मतलब हमेशा अच्छा नहीं। कभी-कभी low P/E इसलिए होता है क्योंकि company declining है, industry disruption face कर रही है, या legal issues हैं।</p>

<p><strong>Value trap:</strong> एक stock P/E 8 पर दिख रहा है, लेकिन earnings अगले साल 50% गिर सकती हैं — तब actual forward P/E 16 होगा। 10-K और 10-Q पढ़कर verify करें कि earnings sustainable हैं।</p>

<h3>Negative P/E</h3>
<p>जब company losses report करती है, P/E negative होता है — technically meaningless। Growth-stage companies (many biotech, early-stage tech) often negative P/E पर trade करती हैं। इनके लिए P/S (Price-to-Sales) या EV/Revenue ज़्यादा useful metric है।</p>

<h2>Trailing vs Forward P/E</h2>

<p><strong>Trailing P/E (TTM):</strong> पिछले 12 months की actual reported earnings use करता है। Factual और reliable, लेकिन backward-looking — recent changes reflect नहीं करता।</p>

<p><strong>Forward P/E:</strong> Analysts के next 12 months earnings estimates use करता है। Forward-looking लेकिन estimate-based — analysts अक्सर गलत होते हैं।</p>

<p><strong>Tip:</strong> दोनों compare करें। अगर forward P/E trailing P/E से काफी कम है, तो analysts expect करते हैं earnings बढ़ेंगी। अगर forward P/E ज़्यादा है, तो market earnings decline expect कर रहा है।</p>

<h2>Sector-Wise P/E Comparison</h2>

<p>P/E हमेशा same sector within compare करें:</p>
<ul>
<li><strong>Technology:</strong> Average P/E 25-40 (high growth expectations)</li>
<li><strong>Financial Services:</strong> Average P/E 10-15 (stable, mature businesses)</li>
<li><strong>Healthcare:</strong> Average P/E 15-25 (mix of growth and value)</li>
<li><strong>Energy:</strong> Average P/E 8-15 (cyclical, commodity-dependent)</li>
</ul>

<p>Apple (P/E ~30) expensive लग सकता है, लेकिन tech sector average से slightly above normal है। Same P/E एक bank stock में extremely expensive होगा।</p>

<h2>भारतीय निवेशकों के लिए P/E</h2>

<p>Indian investors P/E ratio Indian market (Nifty, Sensex) में use करने से familiar हैं। US stocks में P/E use करते समय कुछ differences ध्यान में रखें:</p>

<ul>
<li><strong>Currency effect:</strong> US stocks dollar-denominated हैं। P/E currency-neutral metric है (price और earnings दोनों same currency), तो direct comparison possible है।</li>
<li><strong>Sector mix:</strong> S&P 500 tech-heavy है (30%+) vs Nifty 50 financial-heavy (35%+)। Index-level P/E compare carefully करें।</li>
<li><strong>Growth rates:</strong> India GDP growth ~6-7% vs US ~2-3%। Higher growth usually higher P/E justify करता है।</li>
</ul>

<p>Brefyr पर हर stock page पर key financial metrics दिखते हैं, और 10-K/10-Q filings से earnings data automatically extract होती है। P/E changes quarter-over-quarter track करें — अचानक P/E expansion या contraction एक important signal है।</p>
`,
};
