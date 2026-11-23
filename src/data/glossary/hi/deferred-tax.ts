import type { GlossaryTerm } from "../../types";

export const termDeferredTaxHi: GlossaryTerm = {
  slug: "deferred-tax",
  term: "Deferred Tax Asset/Liability (आस्थगित कर)",
  title: "Deferred Tax — Book और Tax Accounting के बीच Timing Differences",
  shortDefinition:
    "Deferred tax assets और liabilities temporary differences से arise होती हैं financial reporting (GAAP) और tax purposes (IRS rules) में transactions कैसे treat होती हैं, balance sheet पर future tax benefits या obligations create करती हैं।",
  metaDescription:
    "Deferred tax assets और liabilities क्या हैं? Timing differences कैसे create करती हैं, valuation allowances, company के बारे में क्या signal करती हैं, और SEC filings में कहाँ find करें।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["deferred-tax", "tax-accounting", "timing-differences", "valuation-allowance", "balance-sheet"],
  relatedSlugs: ["gaap", "tax-loss-harvesting", "going-concern", "10-k-filing"],
  relatedTerms: ["gaap", "tax-loss-harvesting", "going-concern", "10-k-filing"],
  faq: [
    {
      question: "Deferred tax asset और liability में क्या difference है?",
      answer:
        "DTA मतलब company ने GAAP tax expense relative ज़्यादा taxes pay किए — future में कम tax pay करेगी। Common sources: accrued expenses, NOL carryforwards, stock compensation। DTL मतलब GAAP relative कम taxes pay किए — future में ज़्यादा pay करेगी। Common source: accelerated depreciation tax के लिए।",
    },
    {
      question: "Valuation allowance deferred tax assets पर क्या है?",
      answer:
        "Valuation allowance reserve है जो DTA value reduce करती है जब 'more likely than not' (50%+ probability) कि some या all DTA realize नहीं होगी। $500 million NOL carryforwards लेकिन सिर्फ $300 million utilize होंगे तो $200 million valuation allowance। Recording या increasing allowance negative signal — management doubts sufficient future taxable income।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Deferred taxes financial reporting में सबसे confusing topics में — लेकिन concept fundamental: GAAP और tax law often same transaction differently treat करती हैं timing में। Revenue different period recognize हो सकता है GAAP और taxes में। Expenses earlier deduct हो सकते हैं tax के लिए GAAP से (या vice versa)। ये timing differences deferred tax assets (future tax benefits) और liabilities (future tax obligations) create करती हैं balance sheet पर।</p>

<h2>कैसे Arise होते हैं</h2>

<p><strong>Deferred tax assets (DTAs):</strong> Company currently GAAP suggest से ज़्यादा tax pay करती है। Common sources: Net operating loss (NOL) carryforwards — prior years losses future taxable income offset कर सकती हैं। Stock-based compensation GAAP में over time expense, tax deduction exercise/vesting पर। Accrued liabilities (warranty reserves, restructuring reserves) GAAP में estimate पर expense, tax में actually paid पर deductible।</p>

<p><strong>Deferred tax liabilities (DTLs):</strong> Company currently GAAP suggest से कम tax pay करती है। Most common: depreciation — tax law accelerated depreciation allow (bonus depreciation, MACRS) early years larger deductions, GAAP straight-line। Company अभी कम tax pay (accelerated deduction thanks to), बाद में ज़्यादा pay।</p>

<h2>Valuation Allowance</h2>

<p>Management determine करे 'more likely than not' कि DTA portion realize नहीं होगी, तो valuation allowance record — contra-asset जो DTA reduce करती है। New allowance record करना negative signal — management questions sufficient future taxable income। Allowance release (reduce) benefit to tax expense, net income significantly boost कर सकता है।</p>

<h2>NOL Carryforwards</h2>

<p>Accumulated tax losses forward carry करके future taxable income offset — DTAs create। Post-2017 NOLs indefinitely carry forward, 80% taxable income offset per year। Large NOL balances enormous DTAs represent — billions potential future tax savings। Value taxable income generate करने पर contingent।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में भी deferred tax concept Ind-AS 12 under similar framework follow करता है — DTAs और DTLs Indian balance sheets पर दिखती हैं। Indian IT companies significant DTAs रखती हैं employee stock compensation और timing differences के कारण। US companies evaluate करते समय income tax footnote (10-K) carefully पढ़ें — DTAs, DTLs, valuation allowances, और NOL carryforwards सब disclosed हैं।</p>

<p>India-US tax rate difference (India ~25% vs US ~21%) deferred tax calculations affect करती है। US companies lower tax rate पर DTAs कम valuable, DTLs कम burdensome। Brefyr 10-K filings से deferred tax positions और NOL data extract करता है।</p>
`,
};
