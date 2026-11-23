import type { GlossaryTerm } from "../../types";

export const termRightOfUseAssetHi: GlossaryTerm = {
  slug: "right-of-use-asset",
  term: "Right-of-Use Asset (राइट-ऑफ-यूज़ एसेट)",
  title: "Right-of-Use Asset — Lease Accounting से बनने वाला Balance Sheet Asset",
  shortDefinition:
    "Right-of-use (ROU) asset एक balance sheet asset है जो lessee के lease term के दौरान leased asset use करने के right को represent करता है — ASC 842 के under operating और finance दोनों leases के लिए record किया जाता है।",
  metaDescription:
    "Right-of-use asset क्या है? ROU assets कैसे measure होते हैं, balance sheet पर impact, lease liabilities से relationship, और SEC filings में कहाँ मिलते हैं।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["right-of-use", "rou-asset", "asc-842", "lease-accounting", "balance-sheet"],
  relatedSlugs: ["operating-lease", "finance-lease", "gaap", "10-k-filing"],
  relatedTerms: ["operating-lease", "finance-lease", "gaap", "10-k-filing"],
  faq: [
    {
      question: "Right-of-use asset कैसे measure होता है?",
      answer:
        "Lease commencement पर, ROU asset measure होता है: lease liability की initial amount, plus commencement पर या पहले किए गए lease payments, plus initial direct costs, minus lessor से मिले lease incentives। Operating lease ROU assets straight-line lease expense pattern से reduce होते हैं। Finance lease ROU assets straight-line depreciation से reduce होते हैं। ROU asset impairment testing भी subject होता है।",
    },
    {
      question: "Right-of-use assets financial ratios affect करते हैं?",
      answer:
        "Significantly। ROU assets total assets increase करते हैं — asset turnover ratios और ROA reduce। Corresponding lease liabilities total liabilities increase करती हैं — debt-to-equity ratio, interest coverage affect। ASC 842 effective होने पर कई companies के total assets और liabilities 10-30% jump हुए previously off-balance-sheet operating leases recognition से।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Right-of-use (ROU) asset lessee के lease term पर leased asset use करने के right की balance sheet representation है। ASC 842 द्वारा introduce किया गया (public companies के लिए 2019 से effective), ROU assets ने trillions of dollars की previously off-balance-sheet lease rights corporate balance sheets पर पहली बार लाए। <strong>12 months से ज़्यादा की हर lease — operating या finance — अब balance sheet पर ROU asset generate करती है</strong>, corresponding lease liability के साथ।</p>

<h2>Initial Measurement</h2>

<p>Lease commencement date पर, ROU asset measure होता है: lease liability की initial amount plus prepaid rent plus initial direct costs (legal fees, broker commissions) minus lessor से मिले lease incentives (tenant improvement allowances, rent-free periods)।</p>

<p>Lease liability — entry की दूसरी side — remaining lease payments की present value है, rate implicit in the lease या lessee's incremental borrowing rate से discounted।</p>

<h2>Subsequent Measurement</h2>

<p><strong>Operating lease ROU assets</strong> lease term पर amortize होते हैं straight-line total lease expense result करने वाले pattern में।</p>

<p><strong>Finance lease ROU assets</strong> shorter of lease term या underlying asset's useful life पर straight-line depreciate होते हैं।</p>

<h2>ROU Asset Impairment</h2>

<p>ROU assets ASC 360 (long-lived asset impairment) के under impairment testing subject हैं। अगर company leased facility close करे, leased space abandon करे, या below-market rates पर sublease करे, तो ROU asset impaired हो सकता है। COVID-19 pandemic के दौरान और बाद में ROU asset impairments common हो गए जब companies ने physical footprints reduce किए।</p>

<h2>Balance Sheet पर Impact</h2>

<p>Corporate balance sheets पर ROU assets का magnitude substantial है। Major retailers $10-30 billion operating lease ROU assets रख सकते हैं। Airlines billions finance lease ROU assets carry करती हैं। कई companies के लिए ROU assets सबसे बड़ी asset categories में से एक हैं।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Ind AS 116 similar lease accounting standard है। US companies analyze करते समय, ROU assets और lease liabilities समझना critical है financial ratios सही interpret करने के लिए — especially pre और post-ASC 842 comparisons।</p>

<p>Brefyr 10-K filings से ROU asset balances और lease liability schedules extract करता है — investors को lease-related balance sheet items clear view provide करता है।</p>
`,
};
