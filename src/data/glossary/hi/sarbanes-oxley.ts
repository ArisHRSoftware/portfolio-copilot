import type { GlossaryTerm } from "../../types";

export const termSarbanesOxleyHi: GlossaryTerm = {
  slug: "sarbanes-oxley",
  term: "Sarbanes-Oxley Act / SOX (सार्बेन्स-ऑक्सले एक्ट)",
  title: "Sarbanes-Oxley Act — Post-Enron Law जिसने Corporate Accountability Transform कर दी",
  shortDefinition:
    "Sarbanes-Oxley Act of 2002 (SOX) एक federal law है जो Enron और WorldCom scandals के बाद बनी — सभी public companies और उनके auditors के लिए strict financial reporting, internal control, और corporate governance requirements establish किए।",
  metaDescription:
    "Sarbanes-Oxley Act क्या है? SOX की key provisions — internal controls, CEO/CFO certifications, auditor independence, whistleblower protections — public companies के लिए।",
  wordCount: 480,
  category: "Regulatory & Compliance",
  tags: ["sarbanes-oxley", "sox", "internal-controls", "corporate-governance", "audit", "sec-regulation"],
  relatedSlugs: ["material-weakness", "audit-opinion", "gaap", "10-k-filing", "executive-compensation"],
  relatedTerms: ["material-weakness", "audit-opinion", "gaap", "10-k-filing", "executive-compensation"],
  faq: [
    {
      question: "SOX Section 302 certification क्या है?",
      answer:
        "Section 302 CEO और CFO को personally certify करना require करता है हर quarterly (10-Q) और annual (10-K) report। वे certify करते हैं: report review किया, material misstatements/omissions नहीं हैं, financial statements fairly present करती हैं, internal controls के responsible हैं, significant deficiencies/material weaknesses disclose किए। Knowingly false certifications पर criminal liability — $5 million fines और 20 years prison तक।",
    },
    {
      question: "Company में material weakness हो तो क्या होता है?",
      answer:
        "Material weakness internal control में ऐसी deficiency है जो material misstatement prevent/detect न होने की reasonable possibility create करे। Company को 10-K में Section 404 under disclose करना होगा, auditor's internal control opinion adverse होगी (controls NOT effective), और remediation plan describe करना होगा। Material weakness disclosure significant negative signal है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Sarbanes-Oxley Act of 2002 — commonly SOX — Enron, WorldCom, Tyco जैसे massive corporate accounting scandals के response में बनी जिन्होंने billions of dollars investor wealth destroy किया। <strong>SOX ने public company financial reporting, internal controls, corporate governance, और accounting profession पर sweeping reforms impose किए।</strong> Securities Act of 1933 और Securities Exchange Act of 1934 के बाद arguably सबसे significant piece of securities legislation।</p>

<h2>Key Provisions</h2>

<p><strong>Section 302 — CEO/CFO Certifications।</strong> CEO और CFO personally certify करें हर 10-Q और 10-K filing। Financial statements accurate हैं, internal controls evaluate किए, deficiencies disclose किए। False certifications: $5 million fines, 20 years prison। Executives अब claim नहीं कर सकते कि financial irregularities नहीं जानते थे।</p>

<p><strong>Section 404 — Internal Controls Assessment।</strong> Management annually internal control over financial reporting (ICFR) effectiveness assess और report करे। Accelerated filers के लिए independent auditor भी internal controls audit करे। SOX की सबसे expensive provision — initial compliance costs large companies के लिए $4-10 million।</p>

<p><strong>Section 301 — Audit Committee Independence।</strong> Audit committee का हर member independent हो — company से director compensation के अलावा कोई financial ties नहीं। कम से कम एक member "financial expert" हो।</p>

<p><strong>Section 201 — Auditor Independence।</strong> Accounting firms audit clients को certain non-audit services (consulting, internal audit outsourcing) provide करने से prohibit। Arthur Andersen conflict of interest address।</p>

<p><strong>Section 806 — Whistleblower Protection।</strong> Public companies के employees जो fraud report करें, retaliation (termination, demotion) से protect। Reinstatement, back pay, compensatory damages entitled।</p>

<h2>PCAOB</h2>

<p>SOX ने Public Company Accounting Oversight Board (PCAOB) create किया — nonprofit corporation जो public companies के audits oversee करता है। Before SOX, auditing profession self-regulated थी — SOX ने government oversight से replace किया।</p>

<h2>Impact</h2>

<p><strong>Financial reporting quality improve हुई।</strong> Restatement rates decline, earnings management decrease, audit quality improve। <strong>Compliance costs:</strong> Expensive, particularly smaller companies के लिए। JOBS Act ने emerging growth companies को Section 404(b) exemption दी up to five years।</p>

<h2>भारतीय निवेशकों के लिए SOX</h2>

<p>India में Companies Act 2013 और SEBI regulations similar corporate governance requirements लागू करती हैं। US stocks invest करने वाले Indian investors के लिए SOX compliance एक quality signal है — companies strict internal controls follow करती हैं। 10-K में material weakness disclosures और adverse internal control opinions red flags हैं।</p>

<p>Brefyr SOX-related disclosures 10-K filings से process करता है — material weakness identifications, adverse internal control opinions, auditor changes flag करता है।</p>
`,
};
