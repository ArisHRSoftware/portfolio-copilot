import type { GlossaryTerm } from "../../types";

export const termAssetTurnoverHi: GlossaryTerm = {
  slug: "asset-turnover",
  term: "Asset Turnover Ratio (एसेट टर्नओवर अनुपात)",
  title: "Asset Turnover Ratio — Company Assets से कितनी Efficiently Revenue Generate करती है",
  shortDefinition:
    "Asset turnover ratio measure करता है कि company total assets के हर dollar पर कितना revenue generate करती है, business अपना asset base sales produce करने के लिए कितनी efficiently deploy करता है।",
  metaDescription:
    "Asset turnover क्या है? Calculate कैसे करें, industry wise क्यों vary करता है, DuPont analysis से कैसे connect होता है, और low vs high turnover क्या reveal करता है।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["asset-turnover", "efficiency", "financial-metrics", "dupont-analysis", "revenue"],
  relatedSlugs: ["roa", "roe", "inventory-turnover", "receivables-turnover"],
  relatedTerms: ["roa", "roe", "inventory-turnover", "receivables-turnover"],
  faq: [
    {
      question: "अच्छा asset turnover ratio कितना होता है?",
      answer:
        "Asset turnover industry wise dramatically vary करता है। Retail और wholesale companies $2-4 revenue generate करती हैं per dollar assets। Technology companies $0.5-1.5 range। Utilities और real estate सिर्फ $0.2-0.5 क्योंकि assets (power plants, buildings) revenue relative बहुत expensive हैं। हमेशा same industry में compare करें।",
    },
    {
      question: "Asset turnover ROA से कैसे relate करता है?",
      answer:
        "ROA दो components में decompose होता है: net profit margin x asset turnover। Company high ROA achieve कर सकती है या तो fat margins से (software company जैसे) या high volume से (grocery store जैसे)। DuPont framework ROE को margin, turnover, और leverage में break down करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Asset turnover company के asset base की top-line productivity measure करता है। यह answer करता है: company ने assets में invest किए हर dollar — buildings, equipment, inventory, receivables, cash — पर कितना revenue generate किया? Higher ratio मतलब company assets से ज़्यादा sales squeeze कर रही है। Lower ratio मतलब assets underutilized हैं या business model inherently capital-intensive है।</p>

<h2>Calculation</h2>

<p><strong>Asset Turnover = Revenue / Average Total Assets</strong></p>

<p>Revenue income statement से आता है। Total assets balance sheet से। Average of beginning और ending total assets use करना significant asset changes smooth करता है। Asset turnover 1.5 मतलब company $1.00 assets पर $1.50 revenue generate करती है।</p>

<h2>DuPont Connection</h2>

<p>Asset turnover DuPont decomposition का second component है: <strong>ROE = Net Margin x Asset Turnover x Equity Multiplier</strong>। यह framework reveal करता है कि high returns earn करने के fundamentally दो ways हैं: high-margin products sell करना (luxury goods, software) या low-margin products high volumes में sell करना (groceries, discount retail)।</p>

<p>Walmart का business model asset turnover पर built है। Net margin thin है (2-3%), लेकिन asset turnover high (around 2.5x) क्योंकि stores inventory rapidly turn करते हैं। LVMH opposite approach लेता है: high margins (15-20%) lower turnover (around 0.6x) के साथ।</p>

<h2>Industry Patterns</h2>

<p>Service businesses — consulting, staffing, software — high turnover रखती हैं क्योंकि primary assets people (balance sheet पर नहीं) और intellectual property हैं। Capital-intensive businesses — airlines, utilities, telecom — low turnover क्योंकि billions physical infrastructure में ज़रूरी। Manufacturing middle में बैठता है, 0.8-1.5 range।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian companies और US companies compare करते समय asset turnover differences ध्यान में रखें। Indian IT companies (TCS, Infosys) high asset turnover रखती हैं क्योंकि asset-light business model है — similar to US software companies। लेकिन Indian manufacturing (Tata Steel vs US Steel) या banking (SBI vs JPMorgan) compare करते समय regulatory और market differences turnover affect करती हैं।</p>

<p>India में capital-intensive sectors (power, infrastructure, telecom) low asset turnover रखते हैं, similar to US counterparts। लेकिन growth rates different हैं — Indian infrastructure companies rapidly assets deploy कर रही हैं, तो short-term turnover low दिख सकता है लेकिन assets revenue generate करने लगें तो turnover improve होगा।</p>

<p>Brefyr पर SEC filings से financial data efficiency analysis enable करता है thousands of public companies across।</p>
`,
};
