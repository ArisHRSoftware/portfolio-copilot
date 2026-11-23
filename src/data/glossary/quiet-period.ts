import type { GlossaryTerm } from "../types";

export const termQuietPeriod: GlossaryTerm = {
  slug: "quiet-period",
  term: "Quiet Period",
  title: "Quiet Period — When Companies Must Stay Silent About Their Business",
  shortDefinition:
    "A quiet period is a time window during which a company and its insiders are restricted from making public statements that could influence investor decisions, most commonly during the IPO process and the weeks before earnings announcements.",
  metaDescription:
    "What is a quiet period? When it applies during IPOs and before earnings, what companies can and cannot say, SEC rules, and why quiet periods matter for investors.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["quiet-period", "ipo", "earnings", "sec-regulation", "disclosure"],
  relatedSlugs: ["regulation-fd", "blackout-period", "securities-act-1933", "insider-trading"],
  relatedTerms: ["regulation-fd", "blackout-period", "securities-act-1933", "insider-trading"],
  faq: [
    {
      question: "What is the difference between a quiet period and a blackout period?",
      answer:
        "A quiet period restricts what a company can say publicly — it limits communications and promotional activity. A blackout period restricts what insiders can do with their shares — it prohibits insiders from trading the company's stock. The two often overlap: during the pre-earnings quiet period, insiders are also typically in a trading blackout. But they serve different purposes: quiet periods protect the market from premature or selective disclosure; blackout periods prevent insiders from trading on nonpublic information.",
    },
    {
      question: "Can a company issue a press release during a quiet period?",
      answer:
        "During an IPO quiet period, the company can continue normal business communications and report regular financial results as required by SEC filings, but cannot make forward-looking promotional statements or discuss the IPO beyond what is in the prospectus. During a pre-earnings quiet period (which is voluntary, not SEC-mandated), companies typically avoid commenting on current-quarter financial performance to prevent selective disclosure. Routine SEC filings (10-K, 10-Q, 8-K) continue to be filed on schedule regardless of any quiet period.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A quiet period is a window of time during which a company and its representatives restrict their public communications about financial performance, business prospects, or securities offerings. There are two distinct types of quiet periods: the SEC-mandated quiet period during the IPO process and the voluntary (but widely observed) quiet period before quarterly earnings announcements. Both serve the same fundamental purpose — preventing selective or premature disclosure of material information that could advantage certain investors over others.</p>

<h2 id="ipo-quiet-period">IPO Quiet Period</h2>

<p>The most strictly enforced quiet period occurs during the initial public offering process. Under Section 5 of the Securities Act of 1933, once a company files its registration statement (S-1) with the SEC, it enters a period during which promotional communications about the company are restricted. The prospectus filed with the SEC should be the primary source of information for investors evaluating the offering.</p>

<p><strong>Pre-filing period.</strong> Before the S-1 is filed, the company should avoid any communications that could be viewed as "conditioning the market" — generating public interest in an upcoming securities offering. This includes media interviews, blog posts, and social media activity that promotes the company's growth or value in ways that could influence investor interest in the upcoming IPO.</p>

<p><strong>Waiting period.</strong> After the S-1 is filed but before the SEC declares it effective, the company can make oral offers and distribute a preliminary prospectus (the "red herring") but cannot issue written selling materials beyond the prospectus itself. The IPO roadshow — presentations to institutional investors — occurs during this period under specific SEC rules.</p>

<p><strong>Post-effective period.</strong> After the IPO prices and shares begin trading, the quiet period continues for a traditional 25-40 day period (the exact duration is not SEC-mandated but is industry convention). During this time, the company and its underwriters refrain from publishing research reports or making earnings projections. The rationale is to prevent investment bank analysts who underwrote the IPO from immediately issuing "buy" recommendations before independent analysis has been conducted.</p>

<h2 id="earnings-quiet-period">Pre-Earnings Quiet Period</h2>

<p>Most public companies voluntarily observe a quiet period before each quarterly earnings announcement, typically beginning 2-4 weeks before the expected release date. During this window, the company refrains from making public comments about current-quarter financial performance, participating in investor conferences, or holding one-on-one meetings with analysts.</p>

<p>This practice is not SEC-mandated but is considered best practice for Regulation FD compliance. The risk during the pre-earnings period is that a company executive might inadvertently disclose material financial information — confirming or denying expectations — in a private conversation. By instituting a blanket quiet period, the company reduces the risk of selective disclosure violations.</p>

<p>The quiet period typically ends when the company publicly announces its earnings results (via 8-K and press release) and holds its earnings conference call, which is webcast to all investors simultaneously.</p>

<h2 id="analyst-research">Impact on Analyst Research</h2>

<p>During the post-IPO quiet period, the underwriting banks' research analysts cannot publish research or initiate coverage of the newly public company. When the quiet period expires, multiple analysts typically initiate coverage simultaneously — often with favorable "buy" or "overweight" ratings. This "initiation cluster" can generate significant trading activity and price movements. Investors should be aware that these initial ratings come from analysts whose firms profited from underwriting the IPO, which creates a potential conflict of interest.</p>

<h2 id="violations">Quiet Period Violations</h2>

<p>Violations of the IPO quiet period — sometimes called "gun-jumping" — can have serious consequences. The SEC may delay or halt the offering, require a cooling-off period before the registration can become effective, or bring enforcement actions. In practice, most quiet period issues arise from careless public statements by company executives (interviews, social media posts, conference appearances) rather than deliberate violations.</p>

<h2 id="sec-filings">Quiet Periods in SEC Filings</h2>

<ul>
<li><strong>S-1:</strong> The prospectus serves as the primary disclosure document during the IPO quiet period.</li>
<li><strong>8-K:</strong> The earnings announcement that ends the pre-earnings quiet period.</li>
<li><strong>FWP (Free Writing Prospectus):</strong> Filed if the company makes written communications beyond the statutory prospectus during the IPO process.</li>
</ul>

<p>Brefyr tracks earnings announcement dates from 8-K filings and monitors the cadence of company communications, helping investors anticipate when quiet periods begin and end for companies in their portfolio.</p>
`,
};
