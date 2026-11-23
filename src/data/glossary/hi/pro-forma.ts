import type { GlossaryTerm } from "../../types";

export const termProFormaHi: GlossaryTerm = {
  slug: "pro-forma",
  term: "Pro Forma Financial Statements (प्रो फॉर्मा)",
  title: "Pro Forma Financial Statements — 'What If' Scenarios दिखाने वाली Hypothetical Financials",
  shortDefinition:
    "Pro forma financial statements hypothetical data present करती हैं — company results कैसे दिखते अगर specific transaction (merger, acquisition, divestiture) earlier date पर हुई होती।",
  metaDescription:
    "Pro forma financial statements क्या हैं? Transactions effect कैसे दिखाती हैं, SEC Article 11 requirements, SEC vs company pro forma difference।",
  wordCount: 420,
  category: "Accounting & Audit",
  tags: ["pro-forma", "financial-statements", "merger", "acquisition", "hypothetical"],
  relatedSlugs: ["gaap", "non-gaap-measures", "acquisition", "merger", "regulation-sx"],
  relatedTerms: ["gaap", "non-gaap-measures", "acquisition", "merger", "regulation-sx"],
  faq: [
    { question: "SEC pro forma और company pro forma में difference?", answer: "SEC pro forma: Regulation S-X Article 11 required, specific transactions, strict rules — adjustments directly attributable, factually supportable, continuing impact। Company pro forma (non-GAAP adjusted): management self-defined metrics, broader adjustments। Different purposes: SEC = transaction effect; company = ongoing performance view।" },
    { question: "Pro forma कब required?", answer: "Significant acquisition/disposition (target >20% acquirer total assets/revenue/income)। S-4 mergers registration, S-1 IPO significant acquisitions, 8-K/A 71 days after significant acquisition complete।" },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Pro forma financial statements "what if" view — company results कैसे होते अगर specific transaction hypothetical earlier date पर। Most common: M&A — acquiring company pro forma combined entity results as if acquisition fiscal year beginning (income statement) या balance sheet date (balance sheet) close हुई होती। Transaction financial impact evaluate pro forma basis।</p>

<p>Indian context: India में भी SEBI large acquisitions/mergers pro forma financials require करती है composite scheme documents में। Same concept, SEC rules ज़्यादा prescriptive।</p>

<h2>SEC Requirements</h2>
<p>Article 11 Regulation S-X prescriptive:</p>
<p><strong>Present:</strong> Pro forma condensed balance sheet (most recent date), income statement (most recent fiscal year), income statement (most recent interim)। Historical start, each adjustment separate column।</p>
<p><strong>Permitted adjustments:</strong> (1) Transaction Accounting — conform policies, record fair value (PPA)। (2) Autonomous Entity — standalone operations reflect (carve-outs)। (3) Management's — synergies/estimates, clearly labeled management estimates, reasonable basis required।</p>

<h2>Common Transactions</h2>
<p><strong>Acquisitions:</strong> Combined entity — target revenue/expenses/assets/liabilities + acquirer + PPA adjustments (goodwill, intangible amortization, fair value)।</p>
<p><strong>Divestitures:</strong> Remaining company results as if divested business not part during periods।</p>
<p><strong>IPO predecessor transactions:</strong> Recent significant acquisitions — S-1 pro forma combined entity।</p>
<p><strong>Recapitalizations:</strong> Significant capital structure changes — interest expense, capitalization impact।</p>

<h2>Read कैसे करें</h2>
<p>Three columns: (1) historical GAAP, (2) adjustments (labeled, footnoted), (3) pro forma combined। Footnotes essential — basis, assumptions, preliminary PPA nature।</p>
<p>Focus: pro forma revenue (meaningful scale?), operating income (target margins accretive/dilutive?), interest expense (transaction debt?), goodwill (purchase price excess — synergy expectations measure)।</p>

<h2>Limitations</h2>
<p>Hypothetical — what would have, not what will। Typically exclude synergies (cost savings, revenue opportunities) unless Management's Adjustments। Actual post-transaction differ significantly — integration, customer attrition, employee turnover, complications।</p>

<h2>SEC Filings</h2>
<p><strong>8-K/A:</strong> 71 days after significant acquisition — target historicals + pro forma combined। <strong>S-4:</strong> Merger registrations extensive pro forma। <strong>S-1:</strong> IPO recent significant transactions। <strong>10-K:</strong> MD&A reference acquisition impact।</p>

<p>Brefyr pro forma data process 8-K/A, S-4 — significant transactions financial impact evaluate।</p>
`,
};
