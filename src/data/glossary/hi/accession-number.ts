import type { GlossaryTerm } from "../../types";

export const termAccessionNumberHi: GlossaryTerm = {
  slug: "accession-number",
  term: "Accession Number (एक्सेशन नंबर)",
  title: "Accession Number — EDGAR पर Filing कैसे Identify करें",
  shortDefinition:
    "Accession number हर SEC filing का unique identifier है — format: 0000000000-00-000000। EDGAR पर किसी भी specific filing ढूंढने के लिए accession number fastest way है।",
  metaDescription:
    "Accession number क्या है? EDGAR filing identifier समझें — format, कैसे ढूंढें, और SEC filings research में कैसे use करें।",
  wordCount: 400,
  category: "Regulatory",
  tags: ["accession-number", "edgar", "sec", "filing-id"],
  relatedSlugs: ["sec-edgar", "10-k-filing", "10-q-filing", "8-k-filing"],
  relatedTerms: ["sec-edgar", "10-k-filing", "10-q-filing", "8-k-filing"],
  faq: [
    {
      question: "Accession number का format क्या है?",
      answer: "Format: XXXXXXXXXX-YY-ZZZZZZ। X = filer's CIK (Central Index Key), Y = year (2-digit), Z = sequential number। Example: 0000320193-24-000081 = Apple की 2024 की 81st filing। EDGAR URL में directly use कर सकते हैं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Accession number हर SEC filing का <strong>unique identifier</strong> है — जैसे हर filing का Aadhaar number। EDGAR database में millions of filings हैं, accession number किसी specific filing को instantly locate करने का fastest way है।</p>

<h2>Format</h2>

<p><strong>XXXXXXXXXX-YY-ZZZZZZ</strong></p>
<ul>
<li><strong>XXXXXXXXXX:</strong> 10-digit CIK (Central Index Key) — filer company का unique SEC identifier</li>
<li><strong>YY:</strong> Filing year (2-digit)</li>
<li><strong>ZZZZZZ:</strong> Sequential number (उस CIK की उस year की कितनीवीं filing)</li>
</ul>

<p>Example: <code>0000320193-24-000081</code> = Apple (CIK 320193) की 2024 की 81st filing।</p>

<h2>Accession Number कैसे Use करें</h2>

<p><strong>Direct EDGAR URL:</strong> <code>sec.gov/Archives/edgar/data/[CIK]/[accession-number-without-dashes]/</code></p>

<p>Brefyr पर हर filing detail page accession number show करती है और direct EDGAR link provide करती है।</p>

<h2>CIK Number</h2>

<p>CIK (Central Index Key) हर company/individual का EDGAR identifier है। Apple = 320193, Microsoft = 789019, Tesla = 1318605। EDGAR company search से CIK मिलता है।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में BSE/NSE filing numbers similar purpose serve करते हैं। US EDGAR system ज़्यादा organized है — accession number से कोई भी filing globally free access। Research papers, legal documents, analyst reports — सब accession number reference करते हैं। Brefyr automatically accession numbers track करता है और direct EDGAR links provide करता है।</p>
`,
};
