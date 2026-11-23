import type { GlossaryTerm } from "../../types";

export const termExecutiveCompensationHi: GlossaryTerm = {
  slug: "executive-compensation",
  term: "Executive Compensation (कार्यकारी मुआवज़ा)",
  title: "Executive Compensation — CEOs कैसे Paid होते हैं और SEC Filings में Details कहाँ Find करें",
  shortDefinition: "Executive compensation top officers को provided सभी forms pay और benefits — base salary, bonuses, stock options, RSUs, retirement benefits, perquisites — proxy statement में disclosed।",
  metaDescription: "Executive compensation क्या है? CEO pay packages कैसे structured, Summary Compensation Table, pay-versus-performance, और SEC filings में सब details कहाँ।",
  wordCount: 440, category: "Regulatory & Compliance", tags: ["executive-compensation", "ceo-pay", "proxy-statement", "say-on-pay", "corporate-governance"],
  relatedSlugs: ["say-on-pay", "golden-parachute", "clawback-provision", "rsu", "proxy-statement"],
  relatedTerms: ["say-on-pay", "golden-parachute", "clawback-provision", "rsu", "proxy-statement"],
  faq: [{ question: "Summary Compensation Table क्या है?", answer: "Primary disclosure table proxy statement में — total compensation हर named executive officer (NEO) past three years। Columns: salary, bonus, stock awards (grant date fair value), option awards, non-equity incentive compensation, pension value change, all other compensation (perquisites)। 'Total' column headline CEO pay number।" },
  { question: "Reported CEO pay कभी-कभी misleading क्यों?", answer: "SCT grant date fair value equity awards year of grant report — vest या sell नहीं। CEO $50 million reported primarily large equity grant — vests 3-4 years, ultimate value stock price dependent। Stock decline = far less realize। 'Pay versus performance' table (2022 new) 'compensation actually paid' show attempt।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Executive compensation corporate governance में most heavily disclosed और scrutinized topics। SEC detailed disclosure require करता है five highest-paid executives — named executive officers (NEOs) — कैसे compensated, हर component, rationale, और pay-performance relationship। Proxy statement (DEF 14A) primarily, 30-60 pages typical large company। Management incentives, board governance quality, और potential agency costs reveal।</p>

<h2>Components of Executive Pay</h2>
<p><strong>Base salary:</strong> Fixed annual cash। S&P 500 CEOs $1-1.5 million — often smallest component। कुछ CEOs $1 nominal salary।</p>
<p><strong>Annual incentive (bonus):</strong> Short-term performance metrics tied cash payments — revenue growth, EPS, operating income। Target 100-200% salary CEOs।</p>
<p><strong>Long-term incentive (equity):</strong> Largest component — RSUs, PSUs, stock options। 3-5 year horizons shareholder interests align।</p>
<p><strong>Retirement benefits:</strong> Pension plans, SERPs, 401(k) contributions। कुछ CEOs $20-50 million accrued pension।</p>
<p><strong>Perquisites:</strong> Corporate aircraft, car allowances, security, financial planning। $10,000+ individual, $25,000+ aggregate disclosure required।</p>
<p><strong>Severance/change-of-control:</strong> "Golden parachute" — termination/acquisition payments।</p>

<h2>Key Disclosure Tables</h2>
<p>Summary Compensation, Grants of Plan-Based Awards, Outstanding Equity Awards, Option Exercises and Stock Vested, Pension Benefits, Nonqualified Deferred Compensation, Pay Versus Performance, CEO Pay Ratio।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में executive compensation disclosure Companies Act Section 197 और SEBI LODR govern करती हैं। Indian listed companies annual report में top management remuneration disclose करती हैं, लेकिन US proxy statement जैसा detailed CD&A narrative, pay-vs-performance table, और CEO pay ratio typically available नहीं। US compensation packages magnitude different — S&P 500 median CEO compensation $15+ million vs Nifty 50 median ₹5-15 crore (much lower absolute terms)।</p>

<p>Indian investors US stocks evaluate करते समय proxy statement compensation section check करें — excessive compensation shareholder value destroy indicator हो सकता है। Pay tied to easily manipulated short-term metrics (like adjusted EPS) vs genuine long-term value creation metrics (TSR, ROIC) distinguish करें। Say-on-pay vote results company governance quality signal।</p>

<p>Brefyr proxy statements process करता है executive compensation data extract, management incentives shareholder interests alignment evaluate।</p>
`,
};
