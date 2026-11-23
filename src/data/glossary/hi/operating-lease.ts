import type { GlossaryTerm } from "../../types";

export const termOperatingLeaseHi: GlossaryTerm = {
  slug: "operating-lease",
  term: "Operating Lease (ऑपरेटिंग लीज़)",
  title: "Operating Lease — सबसे Common Lease Type और Financial Statements में कैसे दिखती है",
  shortDefinition:
    "Operating lease arrangement है जिसमें lessee asset use करती है useful life के portion के लिए ownership risks/rewards बिना — ASC 842 के under balance sheet पर right-of-use asset और lease liability recognize।",
  metaDescription:
    "Operating lease क्या है? ASC 842 ने lease accounting कैसे बदली, operating vs finance lease difference, SEC filings में lease details कहाँ।",
  wordCount: 410,
  category: "Accounting & Audit",
  tags: ["operating-lease", "asc-842", "right-of-use", "lease-liability", "balance-sheet"],
  relatedSlugs: ["finance-lease", "right-of-use-asset", "gaap", "10-k-filing"],
  relatedTerms: ["finance-lease", "right-of-use-asset", "gaap", "10-k-filing"],
  faq: [
    { question: "ASC 842 से क्या बदला?", answer: "पहले operating leases entirely off-balance-sheet — सिर्फ़ rent expense income statement, future obligations footnotes में। ASC 842 (2019) balance sheet पर लाई — right-of-use asset + lease liability 12 months+ leases। Trillions dollars assets/liabilities globally added। Income statement treatment largely unchanged — single straight-line expense।" },
    { question: "Operating और finance lease में difference?", answer: "Operating = rental — temporarily use, return। Single straight-line expense। Finance = purchase-like — depreciation + interest separate, higher early years expense (front-loaded)। Both balance sheet ASC 842, income statement patterns differ।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Operating lease contractual arrangement — lessee lessor को pay करती है asset use right के लिए specified period, ownership बिना। Retailers store locations, airlines aircraft, tech companies office/data centers, manufacturers equipment lease करती हैं। ASC 842 (current standard) operating leases balance sheet recognize — right-of-use assets + lease liabilities, prior standard की off-balance-sheet treatment eliminate।</p>

<p>Indian context: India में Ind AS 116 similar standard — IFRS 16 based। Indian companies (retail chains, airlines) भी balance sheet पर lease liabilities show करती हैं अब। Same concept, same principles।</p>

<h2>Balance Sheet Recognition</h2>
<p><strong>Right-of-use (ROU) asset:</strong> Lessee right represent — present value lease payments + initial direct costs + prepaid payments - lease incentives। Asset use right lease term।</p>
<p><strong>Lease liability:</strong> Obligation make payments — present value remaining payments, incremental borrowing rate discount। ROU और liability equal inception (before adjustments), decline over term payments made।</p>
<p>Significant leased real estate portfolios = enormous impact — retailers, airlines, hospitality billions added ASC 842 effective।</p>

<h2>Income Statement</h2>
<p>Single straight-line lease expense — total cost evenly spread over term। Finance lease contrast: front-loaded (separate depreciation + interest)। Straight-line = lease liability declines slower than ROU early years — accounting quirk।</p>

<h2>Common Scenarios</h2>
<p><strong>Office/retail:</strong> Commercial real estate 5-15 year terms। Retailers aggregate obligation major financial commitment।</p>
<p><strong>Equipment:</strong> Upfront capital avoid, flexibility upgrade retain, useful life > lease term।</p>
<p><strong>Aircraft:</strong> Airlines large leased fleets — owned vs leased mix balance sheet composition significantly affect।</p>

<h2>Analysis</h2>
<p>Examine: total obligations (undiscounted future minimum payments, maturity table lease footnote), weighted-average remaining term (locked in कितना), weighted-average discount rate (present value affect), annual expense relative revenue (lease-dependency)। Large portfolios + thin margins = vulnerable lease cost inflation।</p>

<h2>SEC Filings</h2>
<p><strong>Balance sheet:</strong> ROU assets non-current; lease liabilities current + non-current split। <strong>Lease footnote (10-K):</strong> Maturity analysis by year, weighted-average term/rate, expense by type, cash paid। <strong>Cash flow:</strong> Operating activities। <strong>MD&A:</strong> Significant commitments, liquidity impact।</p>

<p>Brefyr lease data extract 10-K — ROU balances, total liabilities, payment schedules — portfolio companies lease obligations assess।</p>
`,
};
