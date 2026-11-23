import type { GlossaryTerm } from "../../types";

export const termDividendPayoutRatioHi: GlossaryTerm = {
  slug: "dividend-payout-ratio",
  term: "Dividend Payout Ratio (लाभांश भुगतान अनुपात)",
  title: "Dividend Payout Ratio — Company कितना Profit Shareholders को Return करती है",
  shortDefinition: "Dividend payout ratio measure करता है net income का कितना percentage company shareholders को dividends के रूप में distribute करती है, cash return और growth reinvestment के बीच balance reveal करता है।",
  metaDescription: "Dividend payout ratio क्या है? Calculate कैसे करें, sustainable payout कैसा दिखता है, और high payouts कब danger signal हैं vs stability।",
  wordCount: 420, category: "Financial Metrics", tags: ["dividend-payout-ratio", "dividends", "income", "financial-metrics", "shareholder-returns"],
  relatedSlugs: ["eps", "fcf-yield", "net-margin", "roe"], relatedTerms: ["eps", "fcf-yield", "net-margin", "roe"],
  faq: [{ question: "Sustainable dividend payout ratio कितना है?", answer: "Most companies के लिए 30-60% sustainable माना जाता है। Utilities और REITs commonly 60-90% pay करते हैं predictable cash flows के कारण। 100% से ऊपर मतलब company earnings से ज़्यादा dividends pay कर रही है — reserves dip या borrowing, long-term unsustainable।" },
  { question: "कुछ profitable companies dividends क्यों नहीं pay करतीं?", answer: "High-growth phase companies सभी earnings retain करती हैं expansion fund करने। Company 20% return reinvest कर सकती है लेकिन shareholders elsewhere 8% earn करें, तो retaining ज़्यादा shareholder value create करता है। Berkshire Hathaway, Alphabet classic examples।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Dividend payout ratio company की capital allocation priorities reveal करता है। High ratio: "Cash return shareholders को best use।" Low ratio: "Reinvesting profits higher returns generate करता है dividends से।" Right payout ratio company के growth opportunities, cash flow stability, और industry norms पर depend करता है।</p>

<h2>Calculation</h2>
<p><strong>Payout Ratio = Dividends Per Share / Earnings Per Share x 100</strong></p>
<p>40% payout ratio मतलब हर dollar earnings में 40 cents dividends, 60 cents retained reinvestment, debt reduction, या buybacks के लिए।</p>

<h2>Industry Norms</h2>
<p>Technology: 0-25%। Consumer staples: 50-70%। Utilities: 60-80%। REITs: 70-100%+ (legally 90%+ taxable income distribute required)। Industry within payout ratio management confidence signal करता है।</p>

<h2>Dividend Safety Analysis</h2>
<p>30% payout wide safety margin — earnings half से ज़्यादा decline हो dividend threatened नहीं। 95% virtually no margin। FCF-based payout ratio ज़्यादा reliable — $4 FCF per share पर $2 dividend = 50% FCF payout, sustainable as long as FCF holds।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में dividend taxation 2020 से बदला — DDT (Dividend Distribution Tax) abolish, recipients पर tax। Indian companies traditionally lower payout ratios रखती हैं US counterparts से — growth reinvestment priority। Indian IT companies (TCS, Infosys) 50-70% payout ratios maintain करती हैं — US tech peers (Apple 15%, Microsoft 25%) से higher क्योंकि Indian IT business model less capital-intensive। US utility stocks (60-80% payout) Indian investors seeking regular income dividends attract करती हैं।</p>

<p>US stocks से dividends Indian investors को withholding tax (25% या 15% DTAA under) face होता है। Net dividend yield calculate करते समय withholding tax adjust करें — 3% dividend yield 15% withholding after effectively 2.55%। Brefyr पर dividend और earnings data payout ratio analysis enable करता है।</p>
`,
};
