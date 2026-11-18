import type { GlossaryTerm } from "../../types";

export const termDividendYieldHi: GlossaryTerm = {
  slug: "dividend-yield",
  term: "Dividend Yield (डिविडेंड यील्ड)",
  title: "Dividend Yield — Stock से Regular Income कैसे Calculate करें",
  shortDefinition:
    "Dividend yield stock price के percentage में annual dividend payment है। यह बताता है कि stock hold करने से आपको regular income कितनी मिलेगी।",
  metaDescription:
    "Dividend yield क्या है? Stock से regular income calculate करना सीखें — high yield vs low yield, dividend safety, और भारतीय निवेशकों के लिए US dividend stocks।",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["dividend", "yield", "income-investing", "passive-income"],
  relatedSlugs: ["pe-ratio", "free-cash-flow", "10-k-filing", "market-capitalization"],
  relatedTerms: ["pe-ratio", "free-cash-flow", "10-k-filing", "market-capitalization"],
  faq: [
    {
      question: "US stocks से dividends India में कैसे मिलते हैं?",
      answer:
        "Vested, INDMoney, या Groww जैसे platforms automatically dividends आपके account में credit करते हैं (USD में)। US government 25% withholding tax काटता है (India-US DTAA rate)। बाकी amount आपके brokerage account में आता है। INR में withdraw कर सकते हैं।",
    },
    {
      question: "High dividend yield हमेशा अच्छा है?",
      answer:
        "नहीं। बहुत high yield (8%+) often एक warning signal है — stock price गिर गया है इसलिए yield high दिख रहा है, या company unsustainable dividend pay कर रही है। Free cash flow check करें — FCF dividend amount से ज़्यादा होना चाहिए। 10-K में dividend sustainability की clues मिलती हैं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Dividend yield बताता है कि आपके investment पर annual dividend income कितनी मिलेगी, percentage में।</p>

<p><strong>Formula:</strong> Dividend Yield = Annual Dividend Per Share ÷ Stock Price × 100</p>

<p>Example: Company $4/share annual dividend देती है, stock price $100 है। Dividend Yield = 4/100 × 100 = <strong>4%</strong>। $10,000 invest करने पर $400/year dividend income।</p>

<h2>US Market Dividend Ranges</h2>

<ul>
<li><strong>High yield (4%+):</strong> Utilities, REITs, telecom — mature, stable businesses</li>
<li><strong>Moderate yield (2-4%):</strong> Banks, consumer staples (Coca-Cola, P&G)</li>
<li><strong>Low yield (0.5-2%):</strong> Tech companies (Apple ~0.5%, Microsoft ~0.7%)</li>
<li><strong>Zero yield:</strong> Growth stocks (Tesla, Amazon until recently) — reinvest all profits</li>
</ul>

<h2>Dividend Safety Check</h2>

<p>High yield meaningless है अगर dividend sustainable नहीं। Check करें:</p>

<p><strong>Payout ratio:</strong> Dividend ÷ Earnings। 60% से कम = safe। 80%+ = risky — company almost all earnings dividend में दे रही है, growth के लिए nothing बचता।</p>

<p><strong>FCF coverage:</strong> Free Cash Flow ÷ Total Dividends Paid। 1.5x+ = comfortable। 1x से कम = company debt से dividend fund कर रही है — unsustainable।</p>

<p><strong>Dividend history:</strong> "Dividend Aristocrats" companies हैं जिन्होंने 25+ consecutive years dividend बढ़ाया है (Coca-Cola, Johnson & Johnson, P&G)। Consistent dividend growth reliability signal है।</p>

<h2>Dividend Trap कैसे Avoid करें</h2>

<p>Stock price 50% गिरा → dividend yield automatically double दिखेगा। यह "dividend trap" है:</p>
<ul>
<li>Company struggling है, इसलिए stock गिरा</li>
<li>High yield attractive दिखता है</li>
<li>लेकिन company जल्दी dividend cut कर सकती है</li>
<li><strong>Always check 10-K</strong> — FCF trend, debt levels, management guidance</li>
</ul>

<h2>भारतीय निवेशकों के लिए US Dividends</h2>

<p><strong>Tax treatment:</strong> US government 25% withholding tax काटता है dividend income पर (India-US Double Tax Avoidance Agreement rate)। India में remaining dividend income normal income tax rate पर taxable है, लेकिन US tax paid credit मिलता है (Section 91)।</p>

<p><strong>Effective yield calculation:</strong> अगर dividend yield 4% है, US withholding के बाद 3% effective yield मिलता है। Plus INR depreciation (~3-4%/year) consider करें — total effective return higher हो सकता है।</p>

<p><strong>Quarterly dividends:</strong> US companies usually quarterly dividends pay करती हैं (India में usually annual/semi-annual)। Regular quarterly income stream Indian investors के लिए attractive है।</p>

<p>Brefyr पर 10-K financial data से dividend sustainability check करना easy है — FCF, payout ratio, और dividend history track करें।</p>
`,
};
