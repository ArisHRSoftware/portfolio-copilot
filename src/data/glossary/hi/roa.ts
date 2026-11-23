import type { GlossaryTerm } from "../../types";

export const termROAHi: GlossaryTerm = {
  slug: "roa",
  term: "Return on Assets (रिटर्न ऑन एसेट्स)",
  title: "Return on Assets (ROA) — Company अपने Assets को Profit में कितनी Efficiently Convert करती है",
  shortDefinition:
    "Return on assets (ROA) net income को total assets से divide करता है — यह measure करता है कि company अपनी सारी assets को profit generate करने में कितनी effectively use करती है, चाहे financing कैसे भी हो।",
  metaDescription:
    "ROA क्या है? Return on assets calculate करना सीखें, industry benchmarks समझें, ROA vs ROE compare करें, और Indian investors के लिए asset efficiency कैसे evaluate करें।",
  wordCount: 480,
  category: "Financial Metrics",
  tags: ["roa", "profitability", "asset-efficiency", "financial-metrics", "fundamental-analysis"],
  relatedSlugs: ["roe", "roic", "asset-turnover", "net-margin"],
  relatedTerms: ["roe", "roic", "asset-turnover", "net-margin"],
  faq: [
    {
      question: "ROA और ROE में क्या difference है?",
      answer:
        "ROA profitability measure करता है total assets (equity और debt दोनों से funded) के relative। ROE profitability measure करता है सिर्फ shareholders' equity के relative। ROA capital structure से unaffected है — heavy debt और no debt वाली company identical ROA रख सकती हैं अगर operating efficiency same हो। ROE leverage बढ़ने पर बढ़ता है। ROA operational efficiency की cleaner picture देता है।",
    },
    {
      question: "Banks का ROA tech companies से कम क्यों होता है?",
      answer:
        "Banks enormous asset bases hold करते हैं क्योंकि deposits लेकर loans देना उनका primary business model है। $2 trillion assets पर $20 billion net income = 1% ROA। Technology companies comparatively कम physical assets hold करती हैं — value software, patents, और human capital में है — तो modest profits भी high ROA produce करते हैं। Bank के लिए 1-2% ROA excellent है; tech company के लिए 10-15%+ common है।",
    },
    {
      question: "ROA negative हो सकता है?",
      answer:
        "हाँ। ROA negative होता है जब company net loss report करती है। Pre-profit startups, turnaround situations, या cyclical businesses bottom पर common है। Persistently negative ROA signal करता है कि company की assets value destroy कर रही हैं — serious red flag है unless company heavily invest कर रही है future growth के लिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Return on assets capital structure की complexity हटाकर सबसे simple efficiency question पूछता है: company जो कुछ भी own करती है, उससे कितना profit produce करती है? $10 million assets वाली company जो $1 million net income earn करती है उसका ROA 10% है। मतलब assets का हर dollar — factories, inventory, cash, receivables, intellectual property — collectively साल भर में 10 cents profit generate करता है।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>ROA = Net Income / Total Assets</strong></p>

<p>Net income income statement से आती है। Total assets balance sheet से। ROE की तरह, कुछ analysts average total assets use करते हैं (period की beginning और ending assets का average) ताकि acquisitions, disposals, या capital expenditures से asset changes account हो सकें।</p>

<p>Result percentage में express होता है। Total assets हमेशा shareholders' equity से बड़े होते हैं (assets = equity + liabilities), इसलिए profitable company का ROA हमेशा ROE से कम या equal होता है।</p>

<h2>ROA क्यों Matter करता है</h2>

<p>ROA की greatest strength capital structure के प्रति indifference है। Same industry में identical operations वाली दो companies same ROA रखेंगी चाहे एक debt-free हो और दूसरी 3x levered। ROE dramatically differ होगा क्योंकि leverage returns on equity amplify करता है। यह ROA को different financing strategies वाली companies across operational efficiency compare करने के लिए superior बनाता है।</p>

<p>ROA asset-light versus asset-heavy business models भी reveal करता है। Minimal physical assets वाली consulting firm 25% ROA generate कर सकती है। Billions in plant और equipment वाली steel manufacturer 4% ROA earn कर सकती है — industry के लिए perfectly respectable। इन दो ROAs को directly compare करना meaningless है, लेकिन industry peers से compare करना reveal करता है कौन better operator है।</p>

<h2>Industry Benchmarks</h2>

<p>ROA sector by sector enormously vary करता है क्योंकि industries asset intensity में differ करती हैं:</p>
<ul>
<li><strong>Technology & Software:</strong> 15%+ ROA common है</li>
<li><strong>Consumer Staples & Healthcare:</strong> 8-12% range</li>
<li><strong>Industrial & Manufacturing:</strong> 4-8%</li>
<li><strong>Financial Institutions (Banks):</strong> 0.5-2% (massive asset bases)</li>
</ul>

<p>Financial services में ROA actually preferred profitability metric है ROE पर क्योंकि bank leverage इतना extreme (10:1 या higher) है कि ROE interpret करना difficult हो जाता है।</p>

<h2>भारतीय निवेशकों के लिए ROA</h2>

<p>India में Nifty 50 companies evaluate करते समय investors अक्सर ROE देखते हैं, लेकिन US stocks invest करते समय ROA equally important है। Vested, INDMoney, या Groww जैसे platforms पर US stocks screen करते समय ROA filter add करना smart approach है — especially जब different capital structures वाली companies compare कर रहे हों।</p>

<p>RBI LRS ($250,000/year limit) के तहत invest करते समय, limited capital deploy कर रहे हैं तो asset-efficient companies (high ROA) better investment choices हो सकती हैं क्योंकि वो कम capital से ज़्यादा profit generate करती हैं।</p>

<h2>Limitations</h2>

<p>ROA की meaningful blind spots हैं। पहला, <strong>intangible assets</strong>: accounting rules knowledge-intensive businesses की true asset base understate करती हैं। Pharmaceutical company की most valuable asset — drug pipeline — balance sheet पर economic value पर नहीं दिखती। दूसरा, <strong>asset age और depreciation</strong>: fully depreciated equipment वाली company lower reported assets दिखाती है, ROA inflate होता है। तीसरा, <strong>acquisitions और goodwill</strong>: acquisition premium goodwill के रूप में record होता है जो total assets inflate करता है बिना earning capacity improve किए।</p>

<p>इन limitations के बावजूद, ROA management quality का best single-number indicator बना रहता है। Brefyr पर company financial pages SEC filings से directly data pull करते हैं, जहाँ ROA और efficiency metrics track कर सकते हैं।</p>
`,
};
