import type { GlossaryTerm } from "../../types";

export const termSicCodeHi: GlossaryTerm = {
  slug: "sic-code",
  term: "SIC Code (एसआईसी कोड)",
  title: "SIC Code — Company की Industry Category कैसे Identify करें",
  shortDefinition:
    "SIC (Standard Industrial Classification) code 4-digit number है जो SEC company की industry classify करने के लिए use करता है। EDGAR पर SIC code से same industry companies search कर सकते हैं।",
  metaDescription:
    "SIC code क्या है? SEC industry classification system समझें — SIC code से peer companies कैसे ढूंढें और sector-wise analysis कैसे करें।",
  wordCount: 350,
  category: "Regulatory",
  tags: ["sic-code", "industry", "classification", "sector", "edgar"],
  relatedSlugs: ["sec-edgar", "10-k-filing", "market-capitalization", "pe-ratio"],
  relatedTerms: ["sec-edgar", "10-k-filing", "market-capitalization", "pe-ratio"],
  faq: [
    {
      question: "Company का SIC code कहाँ मिलता है?",
      answer: "EDGAR company search results में SIC code दिखता है। 10-K cover page पर भी mentioned होता है। Example: SIC 7372 = Prepackaged Software (Microsoft), SIC 3674 = Semiconductors (NVIDIA), SIC 6022 = State Banks (JPMorgan)।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>SIC (Standard Industrial Classification) code SEC का industry classification system है। हर US public company को एक 4-digit SIC code assign होता है जो बताता है कि company primarily कौन सी industry में operate करती है।</p>

<h2>SIC Code Structure</h2>

<p>4-digit hierarchical system:</p>
<ul>
<li>First 2 digits: Major industry group (20-39 = Manufacturing, 60-67 = Finance)</li>
<li>Third digit: Industry group within major group</li>
<li>Fourth digit: Specific industry</li>
</ul>

<p><strong>Examples:</strong></p>
<ul>
<li><strong>7372</strong> — Prepackaged Software (Microsoft, Adobe)</li>
<li><strong>3674</strong> — Semiconductors (NVIDIA, AMD, Intel)</li>
<li><strong>5912</strong> — Drug Stores (CVS, Walgreens)</li>
<li><strong>6022</strong> — State-chartered Banks (JPMorgan)</li>
<li><strong>2834</strong> — Pharmaceutical Preparations (Pfizer, Johnson & Johnson)</li>
</ul>

<h2>SIC Code कैसे Use करें</h2>

<p><strong>Peer comparison:</strong> EDGAR full-text search में SIC code से same industry की सभी companies find कर सकते हैं। Peer company P/E ratios, margins, growth rates compare करना valuation analysis का foundation है।</p>

<p><strong>Sector analysis:</strong> SIC code से industry trends track करें — कितनी companies same industry में 10-K file कर रही हैं, aggregate financial performance कैसा है।</p>

<h2>SIC vs NAICS</h2>

<p>NAICS (North American Industry Classification System) newer है और government statistics में SIC replace कर रहा है। लेकिन SEC अभी भी SIC codes use करता है EDGAR filings categorize करने के लिए। Brefyr SIC codes से automatic sector mapping करता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में NIC (National Industrial Classification) codes similar purpose serve करते हैं। US SIC codes Indian investors के लिए useful peer company discovery tool है — same SIC code वाली companies automatically comparable peers हैं। Brefyr sector pages SIC code-based grouping use करती हैं।</p>
`,
};
