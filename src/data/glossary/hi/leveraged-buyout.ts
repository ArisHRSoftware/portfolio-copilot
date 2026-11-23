import type { GlossaryTerm } from "../../types";

export const termLeveragedBuyoutHi: GlossaryTerm = {
  slug: "leveraged-buyout",
  term: "Leveraged Buyout (लीवरेज्ड बायआउट)",
  title: "Leveraged Buyout (LBO) — Borrowed Money से Companies Acquire करना",
  shortDefinition:
    "Leveraged buyout एक acquisition है जिसमें buyer purchase price का significant portion borrowed money से finance करता है, target company की assets और cash flows debt के collateral के रूप में use करके।",
  metaDescription:
    "LBO क्या है? कैसे काम करता है, PE firms leverage क्यों use करती हैं, target company के risks, और SEC filings में LBO-related filings identify कैसे करें।",
  wordCount: 440,
  category: "Corporate Actions",
  tags: ["leveraged-buyout", "lbo", "private-equity", "corporate-action", "debt-financing"],
  relatedSlugs: ["management-buyout", "acquisition", "tender-offer", "private-equity", "8-k-filing"],
  relatedTerms: ["management-buyout", "acquisition", "tender-offer", "private-equity", "8-k-filing"],
  faq: [
    {
      question: "PE firms LBOs में इतनी debt क्यों use करती हैं?",
      answer:
        "Debt returns amplify करती है। $1B purchase, $300M equity + $700M debt। 5 years बाद $1.5B sell, debt $400M paid down — equity $300M → $1.1B = 3.7x return। Without leverage same purchase entirely equity = only 1.5x। Plus interest tax-deductible। Risk: business deteriorate और debt service impossible = default/bankruptcy।",
    },
    {
      question: "Public company shareholders को LBO में क्या होता है?",
      answer:
        "Cash buyout premium पर — typically 20-50% above pre-announcement price। Company private हो जाती है (delisted)। PE firm sole equity owner। Shareholder approval proxy vote से required। Public debt outstanding हो तो SEC filings continue।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Leveraged buyout (LBO) acquisition strategy है जिसमें buyer — typically PE firm — purchase price majority debt से finance करती है equity बजाय। Typical LBO: 60-80% borrowed money, target company assets और future cash flows collateral। बाकी 20-40% buyer equity। Transaction close होने के बाद target company debt bear करती है balance sheet पर, cash flows interest service और principal repay।</p>

<p>Indian context: India में भी LBO-style transactions हुई हैं — Piramal Enterprises, Hinduja Group acquisitions। लेकिन US scale पर PE-driven LBOs ज़्यादा common और larger हैं। Indian investors US markets में PE activity SEC filings से track कर सकते हैं।</p>

<h2>LBO कैसे काम करता है</h2>

<p><strong>Target selection:</strong> Stable predictable cash flows, strong market position, undervalued assets, operational improvement potential, manageable existing debt। Healthcare services, business services, food & beverage, industrial manufacturing — frequent targets।</p>

<p><strong>Financing structure:</strong> Debt layered tranches में — Senior secured (lowest rate, highest priority), subordinated/mezzanine (higher rate, lower priority), equity (most junior, all upside capture)।</p>

<p><strong>Value creation:</strong> Operational improvements (cost reduction, revenue growth), strategic repositioning, financial engineering (capital structure optimize), multiple expansion (better valuation sell पर)।</p>

<p><strong>Exit:</strong> 3-7 years hold, then trade sale, secondary buyout, IPO, या dividend recapitalization।</p>

<h2>Typical Debt Structure</h2>

<p>$1B acquisition example: Senior secured term loan $500M (SOFR + 300-400bps), revolving credit $100M, high-yield bonds $150M (8-10% fixed), equity $250M (25%)।</p>

<h2>Risks</h2>

<p><strong>Financial distress:</strong> Heavy debt load — less margin for error। Economic downturn, industry disruption, operational misstep — conservatively financed company manageable लेकिन leveraged company default push। ~20% LBOs eventually financial distress experience।</p>

<p><strong>Employee/operational impact:</strong> Cost-cutting, layoffs, reduced R&D investment। Near-term profitability improve, long-term competitiveness undermine possible।</p>

<p><strong>Interest rate risk:</strong> Floating rate debt — rising rates interest burden increase। Hedging adds cost।</p>

<h2>SEC Filings में LBOs</h2>

<p><strong>SC 13E-3:</strong> Going-private transactions, terms, fairness, conflicts। <strong>DEF 14A:</strong> Shareholder approval proxy। <strong>Schedule TO:</strong> Tender offer structure। <strong>10-K/10-Q:</strong> Post-closing, public debt outstanding — debt load, interest expense, covenant compliance। <strong>8-K:</strong> Transaction announcement।</p>

<p>Brefyr going-private filings, proxy statements, 8-K announcements track करती है — investors alert होते हैं portfolio companies LBO targets बनें या debt filings financial stress reveal करें।</p>
`,
};
