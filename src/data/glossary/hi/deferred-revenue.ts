import type { GlossaryTerm } from "../../types";

export const termDeferredRevenueHi: GlossaryTerm = {
  slug: "deferred-revenue",
  term: "Deferred Revenue (आस्थगित राजस्व)",
  title: "Deferred Revenue — Service Deliver होने से पहले Collect किया गया Cash",
  shortDefinition:
    "Deferred revenue (unearned revenue) balance sheet पर liability है जो customers से goods या services deliver होने से पहले received cash represent करती है, recognizing कि company को perform करने की obligation है revenue record करने से पहले।",
  metaDescription:
    "Deferred revenue क्या है? Balance sheet liability कैसे work करती है, SaaS और subscription businesses के लिए क्यों matter करती है, और SEC filings में कहाँ find करें।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["deferred-revenue", "unearned-revenue", "liability", "saas", "revenue-recognition"],
  relatedSlugs: ["revenue-recognition", "gaap", "free-cash-flow", "10-k-filing"],
  relatedTerms: ["revenue-recognition", "gaap", "free-cash-flow", "10-k-filing"],
  faq: [
    {
      question: "Deferred revenue liability क्यों है asset नहीं?",
      answer:
        "Company ने cash receive किया लेकिन अभी earn नहीं किया — goods या services deliver करने की obligation है। Fail तो refund करना होगा। Liability unfulfilled obligation represent करती है। Company deliver करती है तो deferred revenue liability decrease, revenue income statement पर recognize।",
    },
    {
      question: "Growing deferred revenue good sign है?",
      answer:
        "Generally हाँ। Growing deferred revenue indicate करता है customers future services prepay कर रहे हैं — strong demand और commitment। SaaS companies के लिए larger या longer contracts। लेकिन context matters: delivery problems के कारण grow हो रही तो negative signal। Deferred revenue growth rate और revenue recognition rate compare करें।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Deferred revenue — unearned revenue या contract liabilities — balance sheet liability है जो cash represent करती है company ने customers से collect किया products या services deliver करने से पहले। GAAP accrual accounting under revenue recognize नहीं हो सकता until performance obligation substantially fulfill हो। Customer advance pay करता है — annual software subscription, prepaid contract — तो company cash deferred revenue (liability) में record करती है, income statement पर revenue नहीं।</p>

<h2>कैसे Work करता है</h2>

<p><strong>Collection:</strong> Customer $12,000 pay करता है 12-month software subscription 1 January को। $12,000 cash (asset increase) और $12,000 deferred revenue (liability increase)। No revenue recognized।</p>

<p><strong>Recognition:</strong> हर month $1,000 revenue recognize, deferred revenue $1,000 reduce। 6 months बाद $6,000 revenue recognized, $6,000 deferred revenue remaining।</p>

<p><strong>Completion:</strong> 12 months end, सभी $12,000 revenue recognized, deferred revenue zero।</p>

<h2>SaaS Companies के लिए Importance</h2>

<p>SaaS companies के लिए deferred revenue balance sheet पर सबसे important metrics में। Contracted future revenue represent करती है essentially guaranteed (cancellations barring)। Growing deferred revenue future revenue growth का leading indicator क्योंकि coming quarters में revenue recognize होगी।</p>

<p>"Remaining performance obligations" (RPO) broader view — deferred revenue plus multi-year contracts जहाँ customer committed लेकिन invoice नहीं हुआ।</p>

<h2>Cash Flow Implications</h2>

<p>Deferred revenue cash flow और revenue के बीच critical bridge है। Increase deferred revenue operating cash flow source — company cash hold करती है जो "earned" नहीं। SaaS companies strong operating cash flow generate करती हैं modest GAAP profits report करते हुए भी। Declining deferred revenue मतलब expiring contracts replace नहीं हो रहे।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian IT companies (TCS, Infosys, Wipro) भी significant deferred revenue रखती हैं — large enterprise contracts upfront payments involve करते हैं। Indian SaaS companies (Zoho, Freshworks) US SaaS model follow करती हैं। Freshworks NYSE-listed है — इसकी 10-K में deferred revenue trends directly comparable हैं US SaaS peers से।</p>

<p>Indian investors US SaaS stocks evaluate करते समय (Salesforce, Microsoft, Adobe) deferred revenue growth track करें — revenue growth से ahead growing deferred revenue bullish signal है। Quarter-over-quarter changes ज़्यादा informative हैं year-over-year से SaaS seasonality के कारण।</p>

<p>Brefyr 10-K और 10-Q filings से deferred revenue balances extract करता है, subscription businesses के future revenue leading indicator track करने में help करता है।</p>
`,
};
