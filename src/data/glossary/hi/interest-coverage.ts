import type { GlossaryTerm } from "../../types";

export const termInterestCoverageHi: GlossaryTerm = {
  slug: "interest-coverage",
  term: "Interest Coverage Ratio (इंटरेस्ट कवरेज रेशियो)",
  title: "Interest Coverage Ratio — क्या यह Company अपनी Debt Payments Afford कर सकती है?",
  shortDefinition:
    "Interest coverage ratio operating income (EBIT) को interest expense से divide करती है — measure करती है कि company operating profits से कितनी बार debt interest pay कर सकती है।",
  metaDescription:
    "Interest coverage ratio क्या है? Calculate कैसे करें, कौन सा ratio financial distress signal करता है, और lenders credit analysis में कैसे use करते हैं।",
  wordCount: 420,
  category: "Financial Metrics",
  tags: ["interest-coverage", "leverage", "debt", "financial-metrics", "credit-analysis"],
  relatedSlugs: ["debt-to-equity", "cost-of-debt", "operating-margin", "current-ratio"],
  relatedTerms: ["debt-to-equity", "cost-of-debt", "operating-margin", "current-ratio"],
  faq: [
    {
      question: "अच्छा interest coverage ratio कितना है?",
      answer:
        "3.0+ generally healthy — earnings interest obligations 3 times cover करती हैं। 5.0+ very comfortable। 1.5 से नीचे concerning — modest earnings decline interest payments unaffordable बना सकती है। 1.0 से नीचे severe distress — earnings interest cover नहीं कर पा रहीं।",
    },
    {
      question: "Credit rating agencies interest coverage कैसे use करती हैं?",
      answer:
        "S&P, Moody's, Fitch — primary indicator of creditworthiness। Investment-grade (BBB-/Baa3+) typically 3.0-4.0+। High-yield 1.5-3.0। Deteriorating interest coverage most common trigger rating downgrades का।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Interest coverage ratio company की debt service ability का सबसे direct measure है। Debt fixed obligations create करती है — interest pay करना होता है business performance regardless। Operating profits decline हों interest payments cover नहीं कर सकें तो potential default, restructuring, bankruptcy। Interest coverage quantify करती है कि current earnings और danger zone के बीच कितना room है।</p>

<p>Indian context: India में भी banks और NBFCs credit analysis में interest coverage ratio use करती हैं — RBI guidelines भी reference करती हैं। US stocks evaluate करते समय same metric critical है debt-heavy companies के लिए।</p>

<h2>Calculation</h2>

<p><strong>Interest Coverage Ratio = EBIT / Interest Expense</strong></p>

<p>EBIT (operating income) income statement से। Interest expense भी income statement separate line item। कुछ analysts EBITDA numerator में use करते हैं cash-flow approximation के लिए।</p>

<p>5.0 ratio = earnings 80% drop हो तो भी interest meet। 1.2 ratio = 20% earnings decline distress push करे।</p>

<h2>Debt Capacity Assessment</h2>

<p>Lenders और bond investors primary metric। Banks loan agreements में minimum interest coverage covenants set करती हैं — typically 2.0-4.0। Ratio covenant threshold से नीचे गिरे = technical default trigger, lenders accelerate repayment या renegotiate।</p>

<p>Fixed charge coverage ratio concept extend करती है beyond interest — principal repayments, lease payments, preferred dividends सब include।</p>

<h2>Cyclical Stress Testing</h2>

<p>Economic downturns में value apparent। Revenue decline → operating income disproportionately fall (operating leverage) → interest payments constant (fixed by debt terms) → scissors effect rapidly compress interest coverage।</p>

<p>Smart analysis current ratio नहीं, recession scenario test। Company 6.0x today, recession में EBIT 30% decline = 4.2x — safe। Company 2.5x today → 1.75x recession — dangerous।</p>

<p>2008-09 crisis: 2.0-3.0x वाली companies debt service unable। 5.0x+ वाली companies weathered same storm।</p>

<h2>Industry Context</h2>

<p>Norms vary by earnings stability। Utilities regulated revenues — 2.0-3.0x safe। Technology volatile earnings — 5.0x+ चाहिए। Cyclical industries (energy, mining) — even higher peak vs trough earnings difference।</p>

<p>REITs और MLPs special case — heavy debt integral business model। Interest + debt service coverage evaluate contractual cash flows context में।</p>

<p>Brefyr पर income statement data SEC filings से interest coverage analysis enable — leverage metrics, insider trading signals, filing history alongside।</p>
`,
};
