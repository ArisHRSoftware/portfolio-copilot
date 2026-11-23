import type { GlossaryTerm } from "../types";

export const termSarbanesOxley: GlossaryTerm = {
  slug: "sarbanes-oxley",
  term: "Sarbanes-Oxley Act (SOX)",
  title: "Sarbanes-Oxley Act — The Post-Enron Law That Transformed Corporate Accountability",
  shortDefinition:
    "The Sarbanes-Oxley Act of 2002 (SOX) is a federal law enacted after the Enron and WorldCom scandals that established strict financial reporting, internal control, and corporate governance requirements for all public companies and their auditors.",
  metaDescription:
    "What is the Sarbanes-Oxley Act? Key provisions of SOX including internal controls, CEO/CFO certifications, auditor independence, and whistleblower protections for public companies.",
  wordCount: 1000,
  category: "Regulatory & Compliance",
  tags: ["sarbanes-oxley", "sox", "internal-controls", "corporate-governance", "audit", "sec-regulation"],
  relatedSlugs: ["material-weakness", "audit-opinion", "gaap", "10-k-filing", "executive-compensation"],
  relatedTerms: ["material-weakness", "audit-opinion", "gaap", "10-k-filing", "executive-compensation"],
  faq: [
    {
      question: "What is a SOX Section 302 certification?",
      answer:
        "Section 302 requires the CEO and CFO to personally certify each quarterly (10-Q) and annual (10-K) report filed with the SEC. They certify that: they have reviewed the report; it does not contain material misstatements or omissions; the financial statements fairly present the company's financial condition; they are responsible for internal controls; they have disclosed any significant deficiencies or material weaknesses; and they have disclosed any fraud involving management or employees with significant internal control roles. These certifications carry personal criminal liability for knowingly false statements.",
    },
    {
      question: "What happens if a company has a material weakness in internal controls?",
      answer:
        "A material weakness is a deficiency in internal control over financial reporting that creates a reasonable possibility that a material misstatement of the financial statements will not be prevented or detected on a timely basis. When a material weakness exists, the company must disclose it in its 10-K under Section 404, the auditor's internal control opinion will be adverse (stating controls are NOT effective), and the company must describe its remediation plan. Material weakness disclosures are significant negative signals — they suggest the financial statements may not be reliable.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The Sarbanes-Oxley Act of 2002 — commonly known as SOX — was enacted in response to the massive corporate accounting scandals at Enron, WorldCom, Tyco, and other companies that wiped out billions of dollars in investor wealth and shattered public confidence in financial reporting. Named after its sponsors, Senator Paul Sarbanes and Representative Michael Oxley, the act imposed sweeping reforms on public company financial reporting, internal controls, corporate governance, and the accounting profession. SOX is arguably the most significant piece of securities legislation since the original Securities Act of 1933 and Securities Exchange Act of 1934.</p>

<h2 id="key-provisions">Key Provisions</h2>

<p><strong>Section 302 — CEO/CFO Certifications.</strong> The CEO and CFO must personally certify each 10-Q and 10-K filing, attesting that the financial statements are accurate, that they have evaluated internal controls, and that they have disclosed any deficiencies. False certifications carry criminal penalties of up to $5 million in fines and 20 years in prison. This provision personalizes accountability — executives can no longer claim they did not know about financial irregularities in their own reports.</p>

<p><strong>Section 404 — Internal Controls Assessment.</strong> Management must annually assess and report on the effectiveness of the company's internal control over financial reporting (ICFR). For accelerated filers, the independent auditor must also audit the internal controls and issue a separate opinion on their effectiveness. Section 404 is the most expensive SOX provision — initial compliance costs for large companies reached $4-10 million, though ongoing costs have decreased as processes matured.</p>

<p><strong>Section 906 — Criminal Certifications.</strong> Supplements Section 302 with explicit criminal penalties for knowing and willful false certifications: up to $5 million in fines and 20 years imprisonment for knowing violations, up to $1 million and 10 years for certifying while aware of non-compliance.</p>

<p><strong>Section 301 — Audit Committee Independence.</strong> Every member of the audit committee must be independent — no financial ties to the company beyond their director compensation. The audit committee must have direct responsibility for appointing, compensating, and overseeing the independent auditor. At least one member must be a "financial expert" as defined by the SEC.</p>

<p><strong>Section 201 — Auditor Independence.</strong> Prohibits accounting firms from providing certain non-audit services (consulting, internal audit outsourcing, financial information system design, etc.) to their audit clients. This addresses the conflict of interest that existed at Arthur Andersen, which provided both audit and highly lucrative consulting services to Enron.</p>

<p><strong>Section 802 — Document Destruction.</strong> Makes it a crime to destroy, alter, or falsify documents with the intent to obstruct a federal investigation. This directly addressed the Arthur Andersen shredding scandal. Penalties include fines and up to 20 years imprisonment.</p>

<p><strong>Section 806 — Whistleblower Protection.</strong> Protects employees of public companies who report fraud or securities violations from retaliation (termination, demotion, harassment). Whistleblowers who suffer retaliation can file complaints with the Department of Labor and are entitled to reinstatement, back pay, and compensatory damages.</p>

<h2 id="pcaob">The PCAOB</h2>

<p>Title I of SOX created the Public Company Accounting Oversight Board (PCAOB), a nonprofit corporation that oversees the audits of public companies. The PCAOB registers public accounting firms, establishes auditing and quality control standards, conducts inspections of audit firms, and enforces compliance. Before SOX, the auditing profession was self-regulated — SOX replaced self-regulation with government oversight in response to the profession's failure to prevent the Enron-era frauds.</p>

<h2 id="impact">Impact on Companies and Markets</h2>

<p><strong>Compliance costs.</strong> SOX compliance is expensive, particularly Section 404 internal control audits. Critics argue that the costs disproportionately burden smaller companies and have contributed to fewer U.S. IPOs as companies choose to stay private or list on foreign exchanges. The JOBS Act of 2012 addressed this by exempting emerging growth companies from Section 404(b) auditor attestation requirements for up to five years.</p>

<p><strong>Financial reporting quality.</strong> Research shows that SOX improved financial reporting quality. Restatement rates declined, earnings management decreased, and audit quality improved in the years following SOX implementation. The Section 302 certifications have made executives more personally engaged in the accuracy of financial reporting.</p>

<p><strong>Corporate culture.</strong> SOX shifted corporate culture toward greater emphasis on internal controls, compliance, and ethical conduct. The personal liability provisions for CEOs and CFOs created strong incentives for top management to invest in robust control environments.</p>

<h2 id="sec-filings">SOX in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> Contains the management's assessment of internal controls (Section 404(a)), the auditor's internal control opinion (Section 404(b) for accelerated filers), and the CEO/CFO certifications (Sections 302 and 906) as exhibits.</li>
<li><strong>10-Q:</strong> Contains Section 302 certifications and discusses any changes in internal controls during the quarter.</li>
<li><strong>8-K:</strong> Reports material weaknesses, auditor changes, and other SOX-relevant events.</li>
<li><strong>DEF 14A:</strong> Discloses audit committee composition, financial expert designation, and audit fees (separating audit from non-audit services).</li>
</ul>

<p>Brefyr processes SOX-related disclosures from 10-K filings, flagging material weakness identifications, adverse internal control opinions, and changes in auditors — critical risk indicators for investors evaluating the reliability of a company's financial statements.</p>
`,
};
