import type { GlossaryTerm } from "../types";

export const termBlackoutPeriod: GlossaryTerm = {
  slug: "blackout-period",
  term: "Blackout Period",
  title: "Blackout Period — When Company Insiders Are Banned From Trading Their Own Stock",
  shortDefinition:
    "A blackout period is a time window during which company insiders — officers, directors, and designated employees — are prohibited from buying or selling the company's stock, typically occurring before earnings releases and during major corporate events.",
  metaDescription:
    "What is a trading blackout period? When insiders cannot trade company stock, SEC rules under Regulation BTR, the relationship to insider trading laws, and what investors should know.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["blackout-period", "insider-trading", "trading-restrictions", "corporate-governance", "earnings"],
  relatedSlugs: ["quiet-period", "insider-trading", "section-16", "form-4", "rule-10b5"],
  relatedTerms: ["quiet-period", "insider-trading", "section-16", "form-4", "rule-10b5"],
  faq: [
    {
      question: "How long does a typical blackout period last?",
      answer:
        "Pre-earnings blackout periods typically begin 2-4 weeks before the expected earnings announcement date and end 1-2 business days after the earnings release and conference call. Event-driven blackout periods (mergers, restatements, material developments) last until the material nonpublic information is publicly disclosed. Some companies maintain an 'open window' policy where insiders can only trade during specific periods — typically the 2-4 weeks immediately following an earnings release — with the rest of the quarter treated as a blackout.",
    },
    {
      question: "Can insiders trade during a blackout if they have a pre-arranged trading plan?",
      answer:
        "Yes. Rule 10b5-1 trading plans, adopted when the insider does not possess material nonpublic information, allow pre-planned trades to execute automatically during blackout periods. However, SEC amendments in 2023 added requirements: a 90-day cooling-off period between adopting a plan and the first trade, a prohibition on overlapping plans, limits on single-trade plans, and mandatory disclosure of 10b5-1 plans in SEC filings. These changes addressed abuses where insiders appeared to time plan adoptions and modifications around nonpublic information.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A blackout period is a corporate-imposed restriction that prohibits company insiders from trading the company's securities during specified time windows. While insider trading laws already prohibit trading on material nonpublic information at all times, blackout periods go further — they create prophylactic trading bans during periods when insiders are most likely to possess material nonpublic information, regardless of whether any particular insider actually does. The purpose is both legal protection (reducing the risk of insider trading violations) and reputational protection (avoiding the appearance of trading on inside information).</p>

<h2 id="types">Types of Blackout Periods</h2>

<p><strong>Pre-earnings blackout.</strong> The most common type. Companies impose a trading blackout starting 2-4 weeks before the expected quarterly earnings announcement. During this window, management and other insiders are likely to know (or suspect) the quarter's financial results before they are publicly released. The blackout lifts 1-2 days after the earnings are released and the market has had time to absorb the information.</p>

<p><strong>Event-driven blackout.</strong> Imposed when a material corporate event creates inside information — a pending merger, significant restructuring, product recall, regulatory action, or other development that is not yet public. These blackouts begin when the event creates material nonpublic information and end when the information is publicly disclosed through an 8-K or press release.</p>

<p><strong>Retirement plan blackout (Regulation BTR).</strong> Sarbanes-Oxley Section 306(a) and SEC Regulation BTR impose specific requirements when a company's 401(k) or pension plan restricts participants from trading company stock in their retirement accounts (typically during a plan administrator change or restructuring). During these blackouts, directors and executive officers are also prohibited from trading, ensuring they don't trade while rank-and-file employees cannot. The company must provide 30 days' advance notice and file an 8-K disclosing the blackout.</p>

<h2 id="who-is-covered">Who Is Covered</h2>

<p>Blackout policies typically cover a broad group of insiders beyond the Section 16 officers and directors: senior management, finance and accounting staff, board members, employees involved in earnings preparation or material transactions, and sometimes extended family members and controlled entities. The specific list varies by company and is defined in the company's insider trading policy, which is filed with or described in SEC filings.</p>

<h2 id="enforcement">Enforcement and Consequences</h2>

<p>Companies enforce blackout periods through their legal and compliance departments. Insiders must pre-clear all trades through the company's general counsel or compliance officer, who verifies that the trade is not during a blackout and that the insider does not possess material nonpublic information. Violations of the company's blackout policy can result in disciplinary action (up to termination), mandatory disgorgement of profits, and referral to the SEC for investigation.</p>

<p>If an insider trades during a blackout and it is later determined that they possessed material nonpublic information, the trade may constitute insider trading — a federal criminal offense carrying penalties of up to $5 million in fines and 20 years imprisonment for individuals. Even if the insider did not possess inside information, trading during a blackout creates the appearance of impropriety and may trigger SEC scrutiny.</p>

<h2 id="10b5-1-plans">Rule 10b5-1 Trading Plans</h2>

<p>The primary exception to blackout restrictions is the Rule 10b5-1 trading plan. These plans are adopted in advance — when the insider does not possess material nonpublic information — and specify a predetermined schedule of trades (dates, amounts, prices). Once adopted, the trades execute automatically, even during blackout periods. The theory is that since the trading decision was made when the insider lacked inside information, the actual execution during a blackout does not constitute insider trading.</p>

<p>Recent SEC amendments (effective 2023) addressed widespread concerns about 10b5-1 plan abuse by requiring a 90-day cooling-off period after adoption, prohibiting overlapping plans, limiting single-trade plans to one per year, requiring insider certification that they do not possess MNPI when adopting the plan, and mandating disclosure of plan adoption and termination in quarterly and annual filings.</p>

<h2 id="sec-filings">Blackout Periods in SEC Filings</h2>

<ul>
<li><strong>10-K:</strong> Companies describe their insider trading policies and blackout procedures in the corporate governance section.</li>
<li><strong>8-K:</strong> Required notice of retirement plan blackout periods under Regulation BTR.</li>
<li><strong>Form 4:</strong> Insider transaction reports indicate whether trades were made pursuant to a 10b5-1 plan.</li>
<li><strong>DEF 14A:</strong> Proxy statements may describe the company's insider trading policy and blackout windows.</li>
</ul>

<p>Brefyr monitors Form 4 filings and 8-K disclosures, flagging insider trades and noting whether they were made under 10b5-1 plans, helping investors evaluate the timing and context of insider trading activity.</p>
`,
};
