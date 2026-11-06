import type { GlossaryTerm } from "../types";

export const termAccessionNumber: GlossaryTerm = {
  slug: "accession-number",
  term: "Accession Number",
  title: "Accession Number — The Unique Identifier for Every SEC Filing",
  shortDefinition:
    "An accession number is a unique 20-character identifier assigned to every SEC filing on EDGAR, formatted as filer-CIK-year-sequence (e.g., 0001193125-24-012345).",
  metaDescription:
    "What is an SEC accession number? How to read the format, where to find it on EDGAR, and how to use accession numbers to reference specific SEC filings.",
  wordCount: 2000,
  category: "SEC & Regulatory",
  tags: ["accession-number", "sec", "edgar", "filing-reference", "research-tools"],
  relatedSlugs: ["sec-edgar", "10-k-filing", "filer-category"],
  relatedTerms: ["sec-edgar", "10-k-filing", "filer-category"],
  faq: [
    {
      question: "What does an accession number look like?",
      answer:
        "An accession number follows the format XXXXXXXXXX-YY-ZZZZZZ, where X is the filer's CIK number (padded to 10 digits), Y is the 2-digit year, and Z is a 6-digit sequence number. Example: 0001193125-24-012345 means CIK 1193125 filed a document in 2024, sequence number 012345. The CIK in the accession number is usually the filing agent's CIK, not the company's, which can be confusing.",
    },
    {
      question: "Where do I find a filing's accession number?",
      answer:
        "On EDGAR, the accession number appears on the filing index page — the page that lists all documents within a specific filing. It also appears in the URL. When you click on a filing from a company's EDGAR page, the accession number is embedded in the URL structure. You can also find it in EDGAR's full-text search results.",
    },
    {
      question: "Why would I need an accession number?",
      answer:
        "Accession numbers are the permanent, unique address for a filing. Use them to: (1) reference a specific filing in research notes or reports, (2) construct direct EDGAR URLs, (3) retrieve filings programmatically via the EDGAR API, and (4) verify that you're looking at the correct version of a filing (companies sometimes file amendments, which get new accession numbers).",
    },
    {
      question: "Can two filings have the same accession number?",
      answer:
        "No. Every filing submitted to EDGAR receives a unique accession number. If a company files an amended 10-K (10-K/A), the amendment gets its own accession number — it doesn't overwrite the original. Both the original and the amendment remain accessible on EDGAR permanently.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Every document submitted to the SEC's EDGAR system receives a permanent, unique identifier: the accession number. Think of it as a filing's fingerprint — no two filings share the same one, and it never changes after assignment. For anyone doing serious SEC filing research, accession numbers are the reference system that keeps everything organized.</p>

<h2 id="format">The Format Explained</h2>

<p>An accession number consists of 20 characters in the format:</p>

<p><code>XXXXXXXXXX-YY-ZZZZZZ</code></p>

<ul>
<li><strong>XXXXXXXXXX</strong> (10 digits): The CIK (Central Index Key) of the entity that submitted the filing. This is usually the CIK of the filing agent (like Edgar Filing Services or the company's law firm), not the company itself. This catches people off guard — if Apple files through a third-party agent, the accession number starts with the agent's CIK, not Apple's.</li>
<li><strong>YY</strong> (2 digits): The calendar year the filing was submitted.</li>
<li><strong>ZZZZZZ</strong> (6 digits): A sequential number assigned in order of receipt. The first filing of the day might be 000001, the thousandth might be 001000.</li>
</ul>

<p>Example: <code>0001193125-24-075802</code></p>
<p>This tells you: CIK 1193125 (which is the filing agent Edgar Filing Services, LLC) submitted a document in 2024, and it was the 75,802nd filing accepted through that agent that year.</p>

<h2 id="how-to-use">How to Use Accession Numbers</h2>

<h3>Direct EDGAR URLs</h3>

<p>You can construct a direct link to any filing on EDGAR using the accession number. The URL pattern is:</p>

<p><code>https://www.sec.gov/Archives/edgar/data/{company-CIK}/{accession-number-no-dashes}/{document-name}</code></p>

<p>The accession number in the URL has dashes removed. For example, accession number 0001193125-24-075802 becomes 000119312524075802 in the URL.</p>

<p>The filing index page (which lists all documents in the filing) is at:</p>
<p><code>https://www.sec.gov/Archives/edgar/data/{company-CIK}/{accession-number-no-dashes}/</code></p>

<h3>EDGAR API Access</h3>

<p>The SEC's EDGAR API accepts accession numbers as query parameters. Developers building financial research tools can retrieve specific filings, their metadata, and their XBRL data using the accession number as the primary key. Brefyr's filing pipeline uses accession numbers internally to track which filings have been processed and to link analysis results back to the source document.</p>

<h3>Research Citations</h3>

<p>When referencing a specific SEC filing in research notes, investor letters, or due diligence reports, the accession number is the correct citation. Instead of "Apple's 10-K filed in November 2024," you write "Apple Inc. Form 10-K, filed 2024-11-01 (accession no. 0000320193-24-000123)." This removes all ambiguity — anyone can retrieve the exact document you're referencing.</p>

<h3>Tracking Amendments</h3>

<p>When a company files an amended 10-K (form type 10-K/A), the amendment gets a new accession number. Both the original and the amendment live on EDGAR permanently. By comparing accession numbers, you can identify which version is current and what changed between the original filing and the amendment.</p>

<h2 id="related-identifiers">Related Identifiers on EDGAR</h2>

<h3>CIK Number (Central Index Key)</h3>
<p>Every entity on EDGAR — companies, individuals, filing agents — has a unique CIK. Unlike accession numbers (which identify filings), CIK numbers identify entities. Apple's CIK is 0000320193. You can search EDGAR by CIK to find all filings from a specific company.</p>

<h3>File Number</h3>
<p>Also called the SEC file number (e.g., 001-36743). This identifies the company's registration with the SEC, not a specific filing. The file number appears on the cover page of SEC filings and stays the same across all of a company's filings.</p>

<h3>Document Control Number (DCN)</h3>
<p>An internal SEC tracking number used for filing management. Rarely referenced by investors but sometimes visible in EDGAR metadata.</p>

<h2 id="practical-tips">Practical Tips</h2>

<p><strong>Bookmark the filing index, not the document.</strong> The filing index page (identified by accession number) lists all documents within a filing — the main form, exhibits, certifications, and XBRL data. Bookmarking the index ensures you can access any component of the filing.</p>

<p><strong>Use the accession number to compare versions.</strong> If you're reading a 10-K/A (amendment), find the original 10-K by searching EDGAR for the same company and form type. The original has an earlier accession number. Compare the two to identify what was changed.</p>

<p><strong>Check the accession number's date.</strong> The year in the accession number (positions 12-13) tells you when the filing was submitted to EDGAR, which may differ from the period the filing covers. A 10-K for fiscal year ending December 2023 might have a 2024 accession number because it was filed in March 2024.</p>

<p>On Brefyr, accession numbers are used internally to deduplicate filings, link analyses to source documents, and provide direct EDGAR links on each stock page. When you click "View on SEC EDGAR" from any filing on Brefyr, you're navigating to the EDGAR page identified by that filing's accession number.</p>
`,
};
