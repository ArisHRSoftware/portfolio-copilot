import type { GlossaryTerm } from "../../types";

export const termCashConversionCycleHi: GlossaryTerm = {
  slug: "cash-conversion-cycle",
  term: "Cash Conversion Cycle (कैश कन्वर्शन साइकल)",
  title: "Cash Conversion Cycle — Inventory को Cash में Convert होने में कितना Time लगता है",
  shortDefinition:
    "Cash conversion cycle inventory के लिए pay करने और customers से cash collect करने के बीच days measure करता है, company working capital cycle कितनी efficiently manage करती है reveal करता है।",
  metaDescription:
    "Cash conversion cycle क्या है? तीन components, negative CCC क्यों powerful है, और working capital analysis के लिए CCC कैसे use करें।",
  wordCount: 430,
  category: "Financial Metrics",
  tags: ["cash-conversion-cycle", "working-capital", "efficiency", "financial-metrics", "cash-flow"],
  relatedSlugs: ["inventory-turnover", "receivables-turnover", "working-capital", "current-ratio"],
  relatedTerms: ["inventory-turnover", "receivables-turnover", "working-capital", "current-ratio"],
  faq: [
    {
      question: "Cash conversion cycle के तीन components क्या हैं?",
      answer:
        "CCC = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payable Outstanding (DPO)। DIO measure करता है inventory sale होने से पहले कितने दिन रहती है। DSO measure करता है sale के बाद customers pay करने में कितने दिन लगाते हैं। DPO measure करता है company suppliers को pay करने में कितने दिन लगाती है।",
    },
    {
      question: "Negative cash conversion cycle का क्या मतलब है?",
      answer:
        "Negative CCC मतलब company customers से cash collect करती है suppliers को pay करने से पहले — business operating cycle से cash generate करता है consume करने के बजाय। Amazon classic example है: customers immediately pay करते हैं (low DSO), लेकिन Amazon suppliers से 60-90 day payment terms negotiate करता है (high DPO)। Negative CCC significant competitive advantage है, especially rapidly growing businesses के लिए।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Cash conversion cycle working capital efficiency का सबसे comprehensive single metric है। यह business में cash की entire journey capture करता है: raw materials pay करने से, production और sale के through, customer payment collect करने तक। Shorter cycle मतलब कम capital operations में locked है। Negative cycle मतलब business actually operating process से cash generate करता है — rare और powerful advantage।</p>

<h2>Calculation</h2>

<p><strong>CCC = Days Inventory Outstanding + Days Sales Outstanding - Days Payable Outstanding</strong></p>

<p><strong>DIO</strong> = (Average Inventory / COGS) x 365</p>
<p><strong>DSO</strong> = (Average Accounts Receivable / Revenue) x 365</p>
<p><strong>DPO</strong> = (Average Accounts Payable / COGS) x 365</p>

<p>CCC 45 days मतलब suppliers को cash outflow और customers से cash inflow के बीच 45 दिन लगते हैं।</p>

<h2>तीन Levers</h2>

<p><strong>DIO reduce करना:</strong> Inventory faster sell करना — better demand forecasting, leaner supply chains। Risk: aggressive inventory cutting stockouts lead कर सकती है।</p>

<p><strong>DSO reduce करना:</strong> Customers से faster collect करना — tighter credit terms, early payment discounts, automated invoicing। Risk: aggressive collection customer relationships damage कर सकती है।</p>

<p><strong>DPO increase करना:</strong> Suppliers को slower pay करना — longer payment terms negotiate करना। Risk: supplier relationships damage, supply disruptions।</p>

<h2>Negative CCC की Power</h2>

<p>Negative CCC सबसे powerful financial characteristics में से है। Company customer cash receive करती है suppliers pay करने से पहले। Faster company grow करती है, ज़्यादा cash generate करती है — typical businesses का exact opposite जहाँ growth working capital consume करता है। Amazon की negative CCC उसकी strategy का central pillar रही है।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>Indian companies में CCC analysis equally important है। Indian IT companies (TCS, Infosys) low DSO maintain करती हैं — clients typically 30-60 days में pay करते हैं। Indian FMCG companies (HUL, ITC) negative या near-zero CCC operate करती हैं — similar to Amazon model। Indian manufacturing companies higher CCC रखती हैं supply chain complexities के कारण।</p>

<p>US stocks evaluate करते समय Indian investors CCC compare कर सकते हैं Indian peers से। Example: Walmart (negative CCC) vs D-Mart (Avenue Supermarts) — दोनों retail giants similar working capital efficiency strategies use करते हैं। ₹1 billion revenue company के लिए CCC 10 days reduce करना approximately ₹27 crore working capital free करता है।</p>

<p>Brefyr पर SEC filings से working capital data CCC analysis enable करता है thousands of public companies across।</p>
`,
};
