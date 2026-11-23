import type { GlossaryTerm } from "../../types";

export const termReceivablesTurnoverHi: GlossaryTerm = {
  slug: "receivables-turnover",
  term: "Receivables Turnover (रिसीवेबल्स टर्नओवर)",
  title: "Receivables Turnover — Company कितनी तेज़ी से अपना बकाया पैसा collect करती है",
  shortDefinition:
    "Receivables turnover measure करता है कि company अपने average accounts receivable balance को साल में कितनी बार collect करती है — credit collection की speed और effectiveness का indicator।",
  metaDescription:
    "Receivables turnover क्या है? इसे कैसे calculate करें, days sales outstanding (DSO) क्या है, और collection speed cash flow और risk को कैसे affect करती है।",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["receivables-turnover", "efficiency", "financial-metrics", "credit", "working-capital"],
  relatedSlugs: ["inventory-turnover", "asset-turnover", "cash-conversion-cycle", "working-capital"],
  relatedTerms: ["inventory-turnover", "asset-turnover", "cash-conversion-cycle", "working-capital"],
  faq: [
    {
      question: "अच्छा receivables turnover ratio कितना होता है?",
      answer:
        "Higher generally better है — इसका मतलब company payments faster collect करती है। Cash-based businesses (retail, restaurants) में बहुत high turnover होता है क्योंकि customers point of sale पर pay करते हैं। B2B companies जो net-30 या net-60 payment terms देती हैं, उनमें typically 6-12 turnover ratio होता है। Government contractors या large enterprises को sell करने वाली companies में 4-6 तक low ratio हो सकता है। Industry peers से compare करें और trend track करें।",
    },
    {
      question: "Days Sales Outstanding (DSO) क्या है?",
      answer:
        "DSO receivables turnover ratio को days में convert करता है: DSO = 365 / Receivables Turnover। अगर turnover 10 है, तो DSO 36.5 days है — average customer लगभग 37 days में pay करता है। DSO intuitive है: आप सीधे company की credit terms से compare कर सकते हैं। अगर terms net-30 हैं लेकिन DSO 55 है, तो customers average 25 days late pay कर रहे हैं — collection problems का signal।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Receivables turnover company की credit और collection processes की efficiency measure करता है। जब company credit पर sell करती है — B2B commerce में standard practice — तो accounts receivable create होता है: customer की payment promise। Receivables turnover ratio बताता है कि ये promises कितनी जल्दी actual cash में convert होती हैं। <strong>Faster collection मतलब better cash flow, lower credit risk, और कम capital outstanding invoices में tied up।</strong></p>

<h2>Calculation</h2>

<p><strong>Receivables Turnover = Net Credit Sales / Average Accounts Receivable</strong></p>

<p>Net credit sales income statement से आते हैं। Practice में, ज़्यादातर analysts total revenue use करते हैं क्योंकि companies rarely credit sales separately disclose करती हैं। Average accounts receivable balance sheet के beginning और ending receivable balances का mean है।</p>

<p>Turnover of 12 मतलब company अपना full receivable balance साल में बारह बार collect करती है — roughly हर 30 days। Days में convert करें: 365 / 12 = approximately 30 days sales outstanding।</p>

<h2>Collection Efficiency और Cash Flow</h2>

<p>हर दिन जो receivable uncollected रहता है, company ने effectively customer को interest-free पैसा उधार दिया है। अगर company के पास $50 million receivables हैं 60 days DSO के साथ, तो $50 million interest-free customer financing के रूप में deployed है। DSO 60 से 45 days पर reduce करने से approximately $12.5 million cash release होगा — बिना किसी lender या investor से पैसा raise किए।</p>

<p>India context में, अगर आप US-listed companies analyze कर रहे हैं, तो receivables turnover trend देखना बहुत important है। Working capital release efficient companies को competitive advantage देता है।</p>

<h2>Credit Risk Signals</h2>

<p>Receivables turnover credit quality problems का early warning indicator है। जब turnover decline होता है (DSO rise करता है), typically कई situations हो सकती हैं: customers pay करने में struggle कर रहे हैं, company ज़्यादा generous terms extend कर रही है, या company ऐसा revenue book कर रही है जो अभी collectible नहीं है।</p>

<p>सबसे dangerous scenario है revenue growth के साथ receivables growth और भी faster। अगर revenue 10% grow करे लेकिन receivables 25% grow करें, तो company effectively customers को ज़्यादा से ज़्यादा lend कर रही है — शायद sales slowdown छुपाने के लिए। यह pattern bad debt write-offs और revenue restatements से पहले frequently दिखता है।</p>

<p>Brefyr पर SEC filings के balance sheet data से आप thousands of public companies में collection efficiency assess कर सकते हैं — insider trading activity और AI-generated filing analysis के साथ।</p>
`,
};
