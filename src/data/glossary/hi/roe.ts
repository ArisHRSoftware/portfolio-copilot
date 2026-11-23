import type { GlossaryTerm } from "../../types";

export const termROEHi: GlossaryTerm = {
  slug: "roe",
  term: "Return on Equity (रिटर्न ऑन इक्विटी)",
  title: "Return on Equity (ROE) — Company Shareholder Capital कितनी Efficiently Use करती है",
  shortDefinition:
    "Return on equity (ROE) measure करता है कि company shareholders की equity के हर dollar पर कितनी net income generate करती है — management investor capital कितनी efficiently deploy करता है यह दिखाता है।",
  metaDescription:
    "ROE क्या है? Return on equity calculate करना सीखें — अच्छा ROE कितना होता है, DuPont analysis कैसे करें, और Indian investors US stocks में ROE कैसे use करें।",
  wordCount: 520,
  category: "Financial Metrics",
  tags: ["roe", "profitability", "financial-metrics", "shareholder-equity", "investing-basics"],
  relatedSlugs: ["roa", "roic", "net-margin", "debt-to-equity"],
  relatedTerms: ["roa", "roic", "net-margin", "debt-to-equity"],
  faq: [
    {
      question: "अच्छा ROE कितना होता है?",
      answer:
        "अच्छा ROE industry पर depend करता है। ज़्यादातर sectors में 15% से ऊपर ROE strong माना जाता है। Technology companies अक्सर 20-30% exceed करती हैं क्योंकि उन्हें relatively कम physical capital चाहिए। Utilities और banks 8-12% range में रहते हैं। Vested या INDMoney पर US stocks देखते समय, हमेशा ROE को industry peers से compare करें, single absolute threshold use न करें।",
    },
    {
      question: "High ROE misleading हो सकता है?",
      answer:
        "हाँ। Company excessive debt लेकर ROE artificially inflate कर सकती है। Debt equity (denominator) को कम करता है, जिससे ROE बढ़ जाता है भले ही profitability improve न हुई हो। $1 million net income और $2 million equity वाली company का ROE 50% है, लेकिन अगर low equity massive borrowing की वजह से है, तो business में significant financial risk है। हमेशा ROE के साथ debt-to-equity ratio check करें।",
    },
    {
      question: "DuPont analysis क्या है और ROE से कैसे related है?",
      answer:
        "DuPont analysis ROE को तीन components में break करता है: net profit margin (revenue के हर dollar में कितना profit), asset turnover (assets कितनी efficiently revenue generate करते हैं), और equity multiplier (company कितना leverage use करती है)। Formula है ROE = Net Margin x Asset Turnover x Equity Multiplier। यह decomposition reveal करता है कि high ROE genuine operational efficiency से आ रहा है, strong sales productivity से, या simply high leverage से।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Return on equity fundamental analysis में सबसे important profitability metrics में से एक है। यह एक straightforward question answer करता है: shareholders ने company में जो हर dollar invest किया है, उस पर business कितना profit generate करता है? 20% ROE वाली company balance sheet पर equity के हर dollar के लिए $0.20 net income earn करती है। जितना higher ROE, management उतनी efficiently shareholder capital को profit में convert करता है।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>ROE = Net Income / Shareholders' Equity</strong></p>

<p>Net income income statement से आती है 10-K या 10-Q filing में। Shareholders' equity balance sheet से आती है और total assets minus total liabilities के equal होती है। कुछ analysts average shareholders' equity use करते हैं — period की beginning और ending equity का average — ताकि share issuances, buybacks, या retained earnings accumulation से equity changes का effect smooth हो जाए।</p>

<p>Result percentage में express होता है। 18% ROE मतलब company ने shareholder equity के हर dollar पर 18 cents profit generate किया।</p>

<h2>DuPont Decomposition</h2>

<p>DuPont framework ROE को तीन drivers में break करता है, हर एक business performance का अलग aspect reveal करता है:</p>

<p><strong>ROE = Net Profit Margin x Asset Turnover x Equity Multiplier</strong></p>

<p><strong>Net Profit Margin</strong> (Net Income / Revenue) दिखाता है कि revenue के हर dollar में से कितना profit बनता है। High margins pricing power या cost discipline indicate करते हैं। 30% net margins वाली software company grocery chain (2% margins) से कहीं ज़्यादा revenue को profit में convert करती है।</p>

<p><strong>Asset Turnover</strong> (Revenue / Total Assets) measure करता है कि company अपने assets को sales generate करने में कितनी efficiently use करती है। Retailers में typically high asset turnover होता है — inventory quickly cycle होती है। Capital-intensive manufacturers में lower turnover होता है क्योंकि expensive equipment hold करते हैं।</p>

<p><strong>Equity Multiplier</strong> (Total Assets / Shareholders' Equity) financial leverage capture करता है। 2.0 multiplier मतलब company के पास equity के हर $1 के लिए $2 assets हैं — दूसरा dollar debt से fund हुआ। Higher leverage returns और risk दोनों amplify करता है।</p>

<p>यह decomposition इसलिए matter करता है क्योंकि दो companies identical ROE completely different reasons से रख सकती हैं। Company A fat margins और modest leverage से 20% ROE earn कर सकती है। Company B thin margins लेकिन aggressive borrowing से same 20% ROE earn कर सकती है। पहली healthier business है; दूसरी stress में fragile है।</p>

<h2>Industries Across ROE Interpret करें</h2>

<p>ROE sector by sector dramatically vary करता है। Technology companies regularly 25% से ऊपर ROE post करती हैं क्योंकि उनके businesses को कम physical capital चाहिए — software company की primary asset intellectual property है। Banks narrow ROE band (typically 10-15%) में operate करते हैं क्योंकि regulators minimum capital ratios maintain करने require करते हैं। Utilities steady लेकिन modest 8-12% ROEs earn करते हैं।</p>

<p>Cyclical industries (energy, mining, construction) volatile ROE दिखाती हैं जो commodity prices और economic conditions के साथ swing करता है।</p>

<h2>भारतीय निवेशकों के लिए ROE</h2>

<p>Indian investors ROE से पहले से familiar हैं — Nifty 50 और Sensex stocks में ROE widely tracked metric है। US stocks evaluate करते समय कुछ बातें ध्यान रखें:</p>

<ul>
<li><strong>Currency neutral:</strong> ROE currency-neutral metric है (price और earnings दोनों same currency में), तो direct India-US comparison possible है।</li>
<li><strong>Sector mix difference:</strong> S&P 500 tech-heavy (30%+) है vs Nifty financial-heavy। Index-level ROE comparison carefully करें।</li>
<li><strong>LRS limit:</strong> RBI की Liberalised Remittance Scheme (LRS) के तहत $250,000/year invest कर सकते हैं। Vested और INDMoney जैसे platforms पर US stocks buy करते समय ROE filter use करना smart screening strategy है।</li>
</ul>

<h2>ROE कब Mislead करता है</h2>

<p>ROE के तीन major blind spots हैं। पहला, <strong>leverage distortion</strong>: companies ज़्यादा debt लेकर ROE boost कर सकती हैं जो equity reduce करता है बिना operations improve किए। दूसरा, <strong>negative equity</strong>: कुछ companies ने इतने losses accumulate किए या इतने बड़े buybacks execute किए कि shareholders' equity negative हो गई, ROE mathematically meaningless बन जाता है। तीसरा, <strong>one-time items</strong>: large asset sale या legal settlement एक single year में net income spike कर सकती है।</p>

<p>इन reasons से experienced investors ROE के साथ debt-to-equity ratio, ROIC, और free cash flow metrics use करते हैं। Brefyr पर company pages SEC filings से sourced profitability data display करते हैं, जहाँ ROE को peers और time series के across compare कर सकते हैं।</p>
`,
};
