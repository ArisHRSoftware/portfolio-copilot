import type { GlossaryTerm } from "../types";

export const termNT10Q: GlossaryTerm = {
  slug: "nt-10q",
  term: "NT 10-Q",
  title: "NT 10-Q — Notification of Late Quarterly Filing Explained",
  shortDefinition:
    "An NT 10-Q (Form 12b-25) is a notification filed with the SEC when a company cannot submit its quarterly 10-Q report on time, requesting a 5-calendar-day extension for the quarterly filing deadline.",
  metaDescription:
    "What is an NT 10-Q filing? Learn why companies miss quarterly deadlines, what investors should watch for, and how it differs from NT 10-K.",
  wordCount: 1800,
  category: "SEC Filings",
  tags: ["sec-filing", "late-filing", "quarterly-report", "edgar", "compliance"],
  relatedSlugs: ["10-q-filing", "nt-10k", "10-k-filing", "material-weakness", "sec-edgar"],
  relatedTerms: ["10-q-filing", "nt-10k", "10-k-filing", "material-weakness", "sec-edgar"],
  faq: [
    {
      question: "How much extra time does an NT 10-Q provide?",
      answer:
        "An NT 10-Q grants a 5-calendar-day extension beyond the original 10-Q filing deadline. This is shorter than the 15-day extension granted for NT 10-K filings, reflecting the SEC's view that quarterly reports — which contain unaudited financials and involve less complex procedures than annual audits — should require less additional time to complete. If the company cannot file within the extended 5-day window, it becomes delinquent.",
    },
    {
      question: "Is an NT 10-Q more or less serious than an NT 10-K?",
      answer:
        "Both are warning signs, but the context differs. The 10-K involves audited financial statements, so a late 10-K often indicates auditor-related issues. The 10-Q involves unaudited financial statements that only receive a limited review from the auditor. If a company cannot produce even unaudited quarterly financials on time, it may indicate that the financial close process itself is broken — which can be a more fundamental problem than an audit complication. Additionally, the shorter extension period (5 days vs. 15 days) means the margin for error is tighter.",
    },
    {
      question: "How often do companies file NT 10-Qs?",
      answer:
        "NT 10-Q filings are relatively uncommon among large-cap companies but more frequent among small-cap and micro-cap issuers with limited accounting resources. During periods of market stress or regulatory change — such as the adoption of new accounting standards — the number of NT filings tends to increase across all company sizes. A single NT 10-Q from a company with a clean history may be a one-time issue. Multiple NT filings across consecutive quarters are a persistent compliance problem.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An NT 10-Q serves the same function as the NT 10-K but for quarterly reports. Filed on Form 12b-25 with the Securities and Exchange Commission, it notifies the market that a company will not meet its 10-Q filing deadline and requests a brief extension. While a late quarterly report may seem less significant than a late annual report, it often points to the same underlying issues — accounting complications, internal control problems, or management disruption — and deserves the same investor attention.</p>

<h2 id="how-nt10q-works">How the NT 10-Q Process Works</h2>

<p>The mechanics mirror the NT 10-K process. The company must file the NT 10-Q no later than one business day after the original 10-Q deadline. The form is identical — Form 12b-25 — with the company checking the box for 10-Q rather than 10-K. The company must provide a narrative explanation for the delay and disclose whether it expects any significant changes in results compared to the corresponding period of the prior year.</p>

<p>The key difference is the extension period. While an NT 10-K grants 15 calendar days, an NT 10-Q grants only 5 calendar days. This compressed window reflects the nature of quarterly reporting: since 10-Q financial statements are unaudited (subject only to a limited review by the external auditor), the SEC expects that the company should need less additional time than it would for a full annual audit.</p>

<h2 id="common-reasons">Common Reasons for Late 10-Q Filings</h2>

<p><strong>Restatement of prior periods.</strong> If a company discovers an error in a prior quarter's financials, it may need to restate those results before filing the current quarter's 10-Q. The restatement process — identifying the error, quantifying its impact, and revising the comparative financial statements — can push the current quarter's filing past its deadline.</p>

<p><strong>Internal control issues.</strong> A company that has identified a material weakness in its internal controls may need additional time to assess whether the weakness has affected the current quarter's financial statements. The company's audit committee may require extra procedures before allowing management to certify the 10-Q under Sarbanes-Oxley.</p>

<p><strong>Complex transactions.</strong> A major acquisition, divestiture, or restructuring during the quarter can complicate the financial close process. Consolidating a newly acquired subsidiary's results, calculating restructuring charges, or accounting for discontinued operations all add time and complexity.</p>

<p><strong>Personnel disruptions.</strong> The departure of a CFO, controller, or other key financial officer during the quarter can disrupt the close process. If the replacement has not yet started or is still learning the company's accounting systems, the quarterly filing may slip.</p>

<p><strong>Accounting standard changes.</strong> When major new accounting standards take effect — such as the recent revenue recognition (ASC 606) and lease accounting (ASC 842) standards — companies must implement new processes, systems, and disclosures. The first quarter of adoption is particularly prone to delays.</p>

<h2 id="consequences">Consequences of a Late 10-Q</h2>

<p>The consequences of a late quarterly filing parallel those of a late annual filing, though they may accumulate more quickly because quarterly deadlines recur every three months:</p>

<p><strong>Loss of S-3 eligibility.</strong> A company that is not current on its Exchange Act filings loses the ability to use the short-form S-3 registration statement. This cuts off access to the shelf registration process, making future capital raises slower and more expensive.</p>

<p><strong>Exchange compliance notices.</strong> NASDAQ and NYSE monitor filing compliance and will issue deficiency notices to companies that miss quarterly deadlines. The exchanges typically provide a cure period, but persistent delinquency can lead to suspension of trading or delisting.</p>

<p><strong>Credit agreement defaults.</strong> Many loan agreements require the company to deliver quarterly financial statements within a specified number of days after quarter-end. A late 10-Q can trigger a technical default, even if the company is otherwise meeting its financial covenants.</p>

<p><strong>Investor confidence erosion.</strong> For small-cap companies especially, a late quarterly filing can trigger a sharp selloff as investors interpret the delay as a sign of hidden problems. The uncertainty created by not having current financials makes it difficult for analysts to maintain estimates and for institutional investors to justify holding the position.</p>

<h2 id="reading-nt10q">How to Read an NT 10-Q</h2>

<p>When evaluating an NT 10-Q, apply the same framework as for an NT 10-K:</p>

<p>Read the stated reason. Administrative delays (system implementations, acquisitions) are less alarming than accounting issues (restatements, control weaknesses, auditor concerns). Check the box on the form that indicates whether the company expects significant changes in results — if the company signals that revenue or earnings will differ materially from prior expectations, the late filing may be delaying bad news.</p>

<p>Look at the company's filing history. A first-time NT 10-Q from a company that has filed on time for years is a different situation than a third consecutive late filing. Cross-reference with any recent 8-K filings about management changes, accounting issues, or auditor changes.</p>

<p>Consider the company's size and resources. Small-cap companies with lean accounting teams are more susceptible to filing delays caused by personnel changes or complex transactions. Large-cap companies have the resources to file on time under almost any circumstances, so a late filing from a large company is proportionally more concerning.</p>

<h2 id="nt10q-vs-nt10k">NT 10-Q vs. NT 10-K</h2>

<p>Both filings use the same Form 12b-25 and trigger similar consequences. The practical differences are the extension period (5 days for 10-Q vs. 15 days for 10-K) and the nature of the underlying report (unaudited quarterly vs. audited annual). An NT 10-Q that is followed by an NT 10-K in the same fiscal year is a particularly strong warning signal — it suggests a persistent problem in the company's financial reporting infrastructure rather than a one-time issue.</p>

<h2 id="where-to-find-nt10q">Where to Find NT 10-Q Filings</h2>

<p>All NT 10-Q filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=NT+10-Q&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> under the filing type "NT 10-Q." On Brefyr, late quarterly filing notifications are flagged alongside other compliance events, alerting investors to potential issues before they appear in the financial statements themselves.</p>
`,
};
