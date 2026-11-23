import type { GlossaryTerm } from "../types";

export const termBigFour: GlossaryTerm = {
  slug: "big-four",
  term: "Big 4 Accounting Firms",
  title: "Big 4 Accounting Firms — The Four Global Firms That Audit Most Public Companies",
  shortDefinition: "The Big 4 accounting firms — Deloitte, PricewaterhouseCoopers (PwC), Ernst & Young (EY), and KPMG — are the four largest professional services firms in the world, collectively auditing over 80% of S&P 500 companies and the vast majority of large public companies globally.",
  metaDescription: "What are the Big 4 accounting firms? Who they are, what they do, their market dominance, the significance of auditor choice, and what auditor changes signal to investors.",
  wordCount: 850, category: "Accounting & Audit", tags: ["big-four", "audit-firms", "deloitte", "pwc", "ey", "kpmg"],
  relatedSlugs: ["audit-opinion", "sarbanes-oxley", "material-weakness", "gaap"], relatedTerms: ["audit-opinion", "sarbanes-oxley", "material-weakness", "gaap"],
  faq: [{ question: "Why do most large companies use Big 4 auditors?", answer: "Three primary reasons: (1) Capability — Big 4 firms have the global reach, industry expertise, and staffing resources to audit the largest and most complex organizations. Auditing a multinational corporation with operations in 50 countries requires a firm with offices and trained staff in all those jurisdictions. (2) Credibility — a Big 4 audit opinion carries more weight with investors, lenders, and regulators. (3) Regulatory expectation — while not legally required, the SEC and stock exchanges effectively expect large public companies to use major audit firms. Using a small or unknown audit firm can itself be a red flag for investors." },
  { question: "What does it mean when a company changes its auditor?", answer: "Auditor changes are disclosed in 8-K filings (Item 4.01) and must include whether there were disagreements with the former auditor on accounting matters. A change from a Big 4 to a smaller firm is generally a negative signal — it may indicate that the Big 4 firm resigned due to concerns about the company's accounting, or that the company is seeking a more accommodating auditor. A change between Big 4 firms is more routine and may reflect cost, industry expertise, or relationship considerations. Investors should always read the 8-K disclosure carefully for any mention of disagreements or reportable events." }],
  lastUpdated: "2026-11-18",
  body: `
<p>The Big 4 accounting firms — Deloitte, PricewaterhouseCoopers (PwC), Ernst & Young (EY), and KPMG — dominate the audit of publicly traded companies worldwide. They audit over 80% of S&P 500 companies and a similar proportion of large-cap companies in every major market. Their collective annual revenues exceed $200 billion, and they employ over 1.5 million people globally. For investors, the identity and opinion of the auditor is a critical quality indicator — a Big 4 audit provides a baseline level of assurance that the financial statements have been examined by a firm with the resources, expertise, and reputation to detect material errors.</p>

<h2 id="the-four-firms">The Four Firms</h2>

<p><strong>Deloitte (Deloitte Touche Tohmatsu Limited).</strong> The largest by revenue. Headquartered in London with significant U.S. operations. Known for strong technology industry practice. Audits major companies including Microsoft, Procter & Gamble, and MetLife.</p>

<p><strong>PricewaterhouseCoopers (PwC).</strong> The second largest globally. Headquartered in London. Known for financial services expertise. Audits major companies including Apple, Alphabet, and JPMorgan Chase.</p>

<p><strong>Ernst & Young (EY).</strong> The third largest. Headquartered in London. Known for technology and media practices. Audits major companies including Amazon, Coca-Cola, and AT&T. EY explored splitting its audit and consulting businesses in 2023 but abandoned the plan.</p>

<p><strong>KPMG.</strong> The smallest of the Big 4. Headquartered in Amstelveen, Netherlands. Known for financial services and healthcare practices. Audits major companies including Citigroup, General Electric, and Intel.</p>

<h2 id="services">Services Beyond Audit</h2>

<p>While audit is the highest-profile service, the Big 4 derive the majority of their revenue from non-audit services: tax advisory and compliance, management consulting, risk advisory, deal advisory (transaction support, valuation), technology consulting and implementation, and forensic and dispute services. The Sarbanes-Oxley Act restricted the non-audit services that audit firms can provide to their audit clients to preserve auditor independence, but the firms continue to provide these services to non-audit clients.</p>

<h2 id="audit-quality">Audit Quality and Oversight</h2>

<p>Big 4 firms are subject to oversight by the Public Company Accounting Oversight Board (PCAOB), created by the Sarbanes-Oxley Act. The PCAOB conducts annual inspections of each major audit firm, reviewing a sample of audit engagements for compliance with auditing standards. Inspection reports are publicly available and can reveal deficiencies in specific audits or firm-wide quality control issues. While Big 4 audit quality is generally considered superior to smaller firms, PCAOB inspections regularly identify deficiencies, and Big 4 firms have been involved in notable audit failures.</p>

<h2 id="market-concentration">Market Concentration Concerns</h2>

<p>The dominance of four firms in auditing thousands of public companies raises concentration risk concerns. If one Big 4 firm were to fail (as Arthur Andersen did in 2002), the remaining three would struggle to absorb its clients. Some regulators and academics have proposed reforms including mandatory audit firm rotation (changing auditors every 10-20 years), joint audits (using two firms simultaneously), or measures to strengthen mid-tier firms as viable alternatives for large-company audits. The UK has been most active in pursuing these structural reforms.</p>

<h2 id="auditor-changes">Auditor Changes as Signals</h2>

<p>Changes in auditor are significant events requiring 8-K disclosure. The filing must state whether the change was initiated by the company or the auditor, whether there were any disagreements on accounting matters, and whether there were any "reportable events" (material weaknesses, limitations on the audit). Investors should view auditor resignations — where the auditor initiates the departure — as serious red flags. Auditor dismissals by the company warrant scrutiny, particularly if the new auditor is a smaller, less reputable firm.</p>

<h2 id="sec-filings">Big 4 and Auditors in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> The auditor's report is the opening section of the financial statements, identifying the audit firm, the opinion type, and any emphasis paragraphs.</li>
<li><strong>DEF 14A:</strong> Discloses audit and non-audit fees paid to the audit firm, broken down by category (audit fees, audit-related fees, tax fees, all other fees). Includes the ratification vote for the auditor.</li>
<li><strong>8-K (Item 4.01):</strong> Discloses changes in the company's certifying accountant, including any disagreements or reportable events.</li>
</ul>

<p>Brefyr monitors auditor changes (8-K Item 4.01) and audit opinions from 10-K filings for all SEC-reporting companies, flagging auditor resignations and adverse opinions as critical risk indicators for investors.</p>
`,
};
