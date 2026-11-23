import type { GlossaryTerm } from "../../types";

export const termEPSHi: GlossaryTerm = {
  slug: "eps",
  term: "Earnings Per Share — EPS (प्रति शेयर आय)",
  title: "EPS — Stock Prices Drive करने वाला Metric",
  shortDefinition: "Earnings per share company का net income outstanding shares से divide करता है, हर share common stock पर कितना profit attributable है दिखाता है।",
  metaDescription: "EPS क्या है? Basic और diluted EPS difference, SEC filings में कैसे find करें, और earnings per share stock prices क्यों drive करता है।",
  wordCount: 430, category: "Financial Metrics", tags: ["eps", "earnings", "per-share", "financial-metrics", "income-statement", "valuation"],
  relatedSlugs: ["pe-ratio", "net-margin", "peg-ratio", "price-to-sales"], relatedTerms: ["pe-ratio", "net-margin", "peg-ratio", "price-to-sales"],
  faq: [{ question: "Basic EPS और diluted EPS में क्या difference है?", answer: "Basic EPS net income divide weighted average common shares outstanding। Diluted EPS share count adjust stock options, convertible bonds, RSUs, warrants — potential dilution include। Diluted EPS हमेशा basic EPS से less या equal। Analysts primarily diluted EPS use worst-case dilution reflect करने।" },
  { question: "Net income flat हो तो भी EPS grow कैसे हो सकता है?", answer: "Share buybacks। Company अपना stock repurchase — shares outstanding decrease। Same profit fewer slices। Legitimate value return, लेकिन distinguish करें genuine profit improvement vs financial engineering। Net income और revenue भी grow कर रहे check करें, सिर्फ EPS नहीं।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Earnings per share Wall Street पर single most watched metric है। Company quarterly results report करती है, analysts first question: EPS beat, met, या missed? Stock prices immediately respond। EPS matter करता है not because best measure business quality — it's not — लेकिन P/E ratio numerator और consensus estimates basis जो short-term stock price movements drive।</p>

<h2>Calculation</h2>
<p><strong>Basic EPS = (Net Income - Preferred Dividends) / Weighted Average Shares Outstanding</strong></p>
<p><strong>Diluted EPS</strong> potentially dilutive securities (options, RSUs, convertibles) denominator add — treasury stock method और if-converted method use।</p>
<p>दोनों basic और diluted EPS required disclosures हर 10-K और 10-Q income statement।</p>

<h2>GAAP EPS vs Adjusted EPS</h2>
<p>Gap significantly widened past two decades। Technology companies adjusted EPS 50-100% higher GAAP — stock-based compensation exclude। $3.00 adjusted EPS लेकिन $1.50 GAAP — difference real economic costs adjusted ignore।</p>
<p>Practical approach: GAAP EPS valuation comparisons, adjusted EPS core operating trends। Adjusted grows 20% लेकिन GAAP 5% — difference ballooning stock compensation — yellow flag investigate।</p>

<h2>EPS Growth — Organic vs Manufactured</h2>
<p>तीन mechanisms: revenue growth (more sales), margin expansion (more profit per sale), share count reduction (fewer shares same profit)। First two genuine value create। Third existing value redistribute।</p>
<p>Healthiest: revenue-driven expansion। Company 15% revenue grow stable margins stable shares = ~15% EPS growth, organic sustainable।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>Indian investors EPS concept familiar — Nifty 50 PE ratio Nifty EPS based। लेकिन US EPS reporting significant differences: quarterly earnings releases US में much more market-moving, "earnings season" defined period, pre-market/after-hours trading EPS surprises पर। India में quarterly results less immediate price impact।</p>

<p>US stocks evaluate करते समय diluted EPS use करें, GAAP और adjusted दोनों compare करें। Indian IT companies (Infosys, TCS) US reporting standards follow करती हैं जब US-listed — same EPS framework। Currency consideration: USD-denominated EPS INR convert करते समय exchange rate fluctuations EPS trends distort कर सकते हैं।</p>

<p>Brefyr पर SEC filings से earnings data thousands of public companies available, EPS trends track और valuations compare insider trading activity alongside।</p>
`,
};
