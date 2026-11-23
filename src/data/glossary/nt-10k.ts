import type { GlossaryTerm } from "../types";

export const termNT10K: GlossaryTerm = {
  slug: "nt-10k",
  term: "NT 10-K",
  title: "NT 10-K — Notification of Late Annual Filing Explained",
  shortDefinition:
    "An NT 10-K (Form 12b-25) is a notification filed with the SEC when a company cannot submit its annual 10-K report by the original deadline, requesting a 15-calendar-day extension.",
  metaDescription:
    "What is an NT 10-K filing? Learn why companies file late-filing notifications, what it signals to investors, and what happens next.",
  wordCount: 1900,
  category: "SEC Filings",
  tags: ["sec-filing", "late-filing", "annual-report", "edgar", "compliance"],
  relatedSlugs: ["10-k-filing", "nt-10q", "going-concern", "material-weakness", "sec-edgar"],
  relatedTerms: ["10-k-filing", "nt-10q", "going-concern", "material-weakness", "sec-edgar"],
  faq: [
    {
      question: "How much extra time does an NT 10-K provide?",
      answer:
        "An NT 10-K grants a 15-calendar-day extension beyond the original 10-K filing deadline. For a large accelerated filer with a December 31 fiscal year, the original deadline is 60 days (around March 1). With an NT 10-K, the extended deadline would be approximately March 16. If the company still cannot file by the extended deadline, it becomes delinquent — there is no second extension available through the NT process. The SEC may then issue a delinquency letter, and the company's stock exchange may begin delisting proceedings.",
    },
    {
      question: "Is an NT 10-K always a red flag?",
      answer:
        "Usually, yes — though severity varies. Sometimes the delay is administrative: the company completed a large acquisition near year-end and needs extra time to finalize the purchase price allocation. Other times it signals serious problems: the auditor found issues requiring a restatement, the company discovered a material weakness in internal controls, or there is a disagreement between management and the audit committee. Investors should read the NT 10-K's explanation carefully and cross-reference it with any recent 8-K filings about auditor changes or accounting issues.",
    },
    {
      question: "What happens to the stock when an NT 10-K is filed?",
      answer:
        "The market reaction depends on context. For large-cap companies, an NT 10-K due to a complex acquisition may produce a minimal stock reaction. For small-cap companies, an NT 10-K can trigger a significant selloff — especially if the reason given is vague or if the company has a history of late filings. Stock exchanges also take notice: both NYSE and NASDAQ have rules that can lead to trading suspension or delisting if annual reports are not filed within specified timeframes.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An NT 10-K is a warning light on the dashboard of a public company. Filed on Form 12b-25 with the Securities and Exchange Commission, it tells the market that the company cannot meet its annual reporting deadline and needs more time. While the filing itself is brief — typically one to two pages — the implications can be significant. A company that cannot produce its audited financial statements on time may be dealing with accounting problems, internal control weaknesses, auditor disagreements, or other issues that investors need to understand.</p>

<h2 id="how-nt10k-works">How the NT 10-K Process Works</h2>

<p>When a company determines it will miss its 10-K filing deadline, it must file an NT 10-K (notification of late filing) no later than one business day after the original due date. The form is filed under Rule 12b-25 of the Securities Exchange Act of 1934 and serves two purposes: it formally notifies the SEC and the market that the annual report will be late, and it requests a 15-calendar-day extension.</p>

<p>The company must explain why it cannot file on time. The SEC requires a "narrative description" of the reasons for the delay, which may include discussions of ongoing audit procedures, pending accounting determinations, the effect of any anticipated changes in results from the most recent period, and whether the company expects to report any changes from previously reported figures.</p>

<p>The 15-day extension is automatic — the SEC does not review or approve the NT filing before granting the extension. However, if the company fails to file the 10-K within the extended deadline, it becomes delinquent with no further NT remedy available.</p>

<h2 id="common-reasons">Common Reasons for Filing an NT 10-K</h2>

<p>The reasons companies give for late filings cluster into several categories:</p>

<p><strong>Audit complications.</strong> The most common reason. The company's external auditor has not completed its audit procedures — perhaps because of complex accounting issues, the need to audit a newly acquired subsidiary, or disagreements over accounting treatment. If the auditor is unwilling to issue an opinion, the 10-K cannot be filed.</p>

<p><strong>Restatements.</strong> If the company has determined that prior-year financial statements need to be restated, the restatement process can delay the current year's filing. Restatements require additional audit work, revised financial statements, and new management certifications under Sarbanes-Oxley.</p>

<p><strong>Material weaknesses.</strong> The company or its auditor identified a material weakness in internal controls over financial reporting. Remediating the weakness and assessing its impact on the financial statements takes time — time that may not fit within the original filing window.</p>

<p><strong>Management changes.</strong> The departure of a CFO, controller, or other key financial officer near the filing deadline can disrupt the financial close process. The replacement may need time to review and understand the financials before certifying them.</p>

<p><strong>Mergers and acquisitions.</strong> Large acquisitions completed near year-end require purchase price allocations, fair value assessments, and potentially separate audits of the acquired entity — all of which can push the timeline beyond the original deadline.</p>

<p><strong>Going concern issues.</strong> If there is substantial doubt about the company's ability to continue as a going concern, additional negotiations with creditors, restructuring discussions, or going concern assessments may delay the filing. This is the most serious category and often precedes significant financial distress.</p>

<h2 id="reading-the-nt">How to Read an NT 10-K</h2>

<p>NT 10-K filings are short, but investors should read them carefully. The key questions to ask:</p>

<p><strong>What reason is given?</strong> Administrative reasons (acquisition accounting, system conversions) are less concerning than accounting reasons (restatements, material weaknesses, auditor disagreements). Vague explanations like "additional time needed to complete audit procedures" without further detail are themselves a yellow flag.</p>

<p><strong>Does the company expect changes to previously reported results?</strong> The NT form includes a checkbox and narrative space for the company to disclose whether it anticipates changes in revenue, net income, or earnings per share from the same period in the prior year. If the company signals that results will differ materially from what was previously reported or expected, the late filing may be masking bad news.</p>

<p><strong>Is this a first-time NT filing or a pattern?</strong> A single NT 10-K from a company with a clean compliance history is very different from a third consecutive late filing. Chronic late filers face increased scrutiny from the SEC, potential delisting, and erosion of investor confidence.</p>

<h2 id="consequences">Consequences of Late Filing</h2>

<p>The consequences escalate the longer the delay continues:</p>

<ul>
<li><strong>Loss of S-3 eligibility.</strong> Companies that file late lose their eligibility to use the short-form S-3 registration statement. This means they cannot access the shelf registration process and must use the more cumbersome S-1 for any future capital raises — a significant operational disadvantage.</li>
<li><strong>Exchange action.</strong> Both NYSE and NASDAQ monitor filing compliance. NASDAQ, for example, can send a deficiency notice if the 10-K is not filed within the prescribed timeframe and may ultimately delist the company's shares if the delinquency is not cured.</li>
<li><strong>SEC enforcement.</strong> The SEC can revoke a company's registration or suspend trading in its securities for persistent non-filing. While the SEC typically provides warnings before taking such action, the possibility is real.</li>
<li><strong>Loan covenant violations.</strong> Many credit agreements require the company to deliver audited financial statements by a specified date. A late 10-K can trigger a default under these covenants, potentially accelerating debt repayment.</li>
</ul>

<h2 id="investor-action">What Investors Should Do</h2>

<p>When a company you own files an NT 10-K, treat it as a prompt to investigate — not necessarily to sell immediately, but to understand what is happening. Read the NT 10-K narrative. Check for recent 8-K filings about auditor changes, management departures, or restatements. Review the most recent 10-Q for any hints of accounting issues. If the company provides no satisfactory explanation and has a history of late filings, reducing your position may be prudent until the annual report is actually filed and you can assess the financials.</p>

<h2 id="where-to-find-nt10k">Where to Find NT 10-K Filings</h2>

<p>All NT 10-K filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=NT+10-K&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> under the filing type "NT 10-K." On Brefyr, late-filing notifications are flagged as material events on company pages, with AI-generated context explaining the stated reason for the delay and its potential significance.</p>
`,
};
