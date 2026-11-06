import type { GlossaryTerm } from "../types";

export const termProxyStatement: GlossaryTerm = {
  slug: "proxy-statement",
  term: "Proxy Statement (DEF 14A)",
  title: "Proxy Statement (DEF 14A) — Executive Pay, Board Votes, and Corporate Governance",
  shortDefinition:
    "A proxy statement (DEF 14A) is the SEC filing companies send to shareholders before an annual meeting, disclosing executive compensation, director nominees, shareholder proposals, and voting procedures.",
  metaDescription:
    "What is a proxy statement? A guide to the DEF 14A filing — executive compensation tables, board elections, shareholder proposals, and what governance details investors should review.",
  wordCount: 2400,
  category: "SEC Filings",
  tags: ["sec-filing", "proxy-statement", "def-14a", "executive-compensation", "corporate-governance"],
  relatedSlugs: ["10-k-filing", "8-k-filing", "beneficial-owner", "sec-edgar"],
  relatedTerms: ["10-k-filing", "8-k-filing", "beneficial-owner", "sec-edgar"],
  faq: [
    {
      question: "What is the difference between DEF 14A and PRE 14A?",
      answer:
        "DEF 14A is the definitive (final) proxy statement filed with the SEC and distributed to shareholders. PRE 14A is the preliminary proxy, filed before the definitive version for SEC review. Most companies file the PRE 14A, wait for SEC comments, and then file the DEF 14A. Investors should focus on the DEF 14A as it contains the final, approved information.",
    },
    {
      question: "When are proxy statements filed?",
      answer:
        "Companies must send proxy materials to shareholders at least 40 days before the annual meeting. Most annual meetings occur in April through June, so proxy statements are typically filed between February and April. The filing appears on EDGAR under the form type DEF 14A.",
    },
    {
      question: "Why should investors read the proxy statement?",
      answer:
        "The proxy statement is the only place you get full executive compensation details (salary, bonus, stock awards, options, perks, severance terms), the composition and independence of the board, related party transactions, and shareholder proposals. If you want to know whether management's incentives are aligned with yours as a shareholder, the proxy is where you find out.",
    },
    {
      question: "What are say-on-pay votes?",
      answer:
        "The Dodd-Frank Act of 2010 requires public companies to hold a non-binding shareholder vote on executive compensation at least once every three years (most do it annually). Shareholders vote to approve or disapprove the compensation packages disclosed in the proxy statement. While the vote is advisory (non-binding), a failed say-on-pay vote is a significant governance red flag that often leads to compensation changes.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>The proxy statement is corporate America's governance report card. It discloses what executives are paid, who sits on the board, how the board is structured, what shareholders get to vote on, and whether insiders have conflicts of interest. For investors who care about governance — and every investor should — the proxy statement is required reading at least once a year for each stock they own.</p>

<p>Filed under the form code DEF 14A (Definitive Proxy Statement, Schedule 14A), this document is distributed to shareholders before the annual meeting. Its primary purpose is to provide the information shareholders need to cast informed votes on director elections, executive compensation, auditor ratification, and any shareholder proposals.</p>

<h2 id="what-proxy-contains">What the Proxy Statement Contains</h2>

<h3>Executive Compensation</h3>

<p>This is the section that gets headlines. The Summary Compensation Table (SCT) shows each Named Executive Officer's (NEO) total compensation for the past three fiscal years, broken into:</p>

<ul>
<li><strong>Base salary.</strong> The fixed annual cash payment. For Fortune 500 CEOs, this is typically $1-2 million — a small fraction of total compensation.</li>
<li><strong>Bonus.</strong> Annual cash incentive payments tied to performance metrics (revenue targets, EPS goals, strategic milestones).</li>
<li><strong>Stock awards.</strong> Restricted stock units (RSUs) and performance share units (PSUs) that vest over 3-4 years. This is usually the largest component of executive pay.</li>
<li><strong>Option awards.</strong> Stock options with exercise prices set at the grant-date market price. Less common than RSUs in recent years.</li>
<li><strong>Non-equity incentive plan compensation.</strong> Cash payouts from formal incentive plans, separate from discretionary bonuses.</li>
<li><strong>Change in pension value.</strong> Increases in the present value of accumulated pension benefits.</li>
<li><strong>All other compensation.</strong> Perks — personal use of corporate aircraft, security services, club memberships, tax gross-ups. The footnotes here can be illuminating.</li>
</ul>

<p>Beyond the SCT, the proxy includes detailed tables showing outstanding equity awards, option exercises, pension benefits, potential payments upon termination or change of control, and the CEO pay ratio (the CEO's total compensation divided by the median employee's compensation).</p>

<p>What to look for: Is total compensation reasonable relative to the company's size and performance? Are incentive metrics tied to shareholder-relevant outcomes (revenue growth, ROIC, TSR) or to easily gamed metrics (adjusted EBITDA with liberal add-backs)? Is the CEO pay ratio extreme?</p>

<h3>Director Nominees and Board Composition</h3>

<p>The proxy lists each director nominee with their biography, qualifications, other board memberships, tenure, and independence status. The SEC requires disclosure of each director's specific experience, qualifications, attributes, or skills that led the board to conclude the person should serve.</p>

<p>Key governance indicators:</p>
<ul>
<li><strong>Board independence.</strong> NYSE and Nasdaq rules require that a majority of directors be independent (no material relationship with the company). A board dominated by insiders or the CEO's personal associates is a governance concern.</li>
<li><strong>Committee composition.</strong> The audit committee, compensation committee, and nominating/governance committee should consist entirely of independent directors.</li>
<li><strong>Director overboarding.</strong> If a director sits on 4-5 other public company boards, they may not have time to fulfill their duties effectively.</li>
<li><strong>Tenure diversity.</strong> A mix of long-tenured directors (institutional memory) and newer directors (fresh perspective) is healthier than either extreme.</li>
<li><strong>Skills matrix.</strong> Many companies include a grid showing which directors bring which skills (finance, technology, industry experience, cybersecurity, etc.). Gaps in the matrix signal potential blind spots.</li>
</ul>

<h3>Shareholder Proposals</h3>

<p>Any shareholder who has held at least $25,000 of stock for one year can submit a proposal for inclusion in the proxy statement. Common proposal topics include:</p>
<ul>
<li>Environmental and climate disclosures</li>
<li>Political spending transparency</li>
<li>Board declassification (moving from staggered to annual elections)</li>
<li>Shareholder right to call special meetings</li>
<li>Executive compensation reforms</li>
<li>Diversity and inclusion reporting</li>
</ul>

<p>Management includes its recommendation (almost always "Against") and the voting results from the previous year's meeting. Proposals that receive majority support — even on an advisory basis — typically pressure the board into action.</p>

<h3>Related Party Transactions</h3>

<p>If the company does business with entities controlled by its directors, officers, or 5%+ shareholders, those transactions must be disclosed. Examples: the company leases office space from the CEO's real estate firm, or the company hires the CFO's spouse as a consultant.</p>

<p>Related party transactions are not inherently improper, but they create conflicts of interest. The proxy statement discloses the nature, amount, and terms of each transaction, plus the board's process for reviewing and approving them. Investors should assess whether the terms are arm's-length (fair market value) or sweetheart deals.</p>

<h3>Auditor Ratification</h3>

<p>Shareholders vote to ratify the board's selection of the external auditor. This vote is almost always a formality — auditors are rarely rejected. However, the proxy discloses the fees paid to the auditor, broken into audit fees, audit-related fees, tax fees, and "all other fees." If non-audit fees (consulting, tax, advisory) significantly exceed audit fees, the auditor's independence may be compromised.</p>

<h2 id="reading-proxy-efficiently">How to Read a Proxy Statement Efficiently</h2>

<p>Proxy statements for large companies can exceed 100 pages. A focused approach takes 30 minutes:</p>

<p><strong>5 minutes:</strong> Read the compensation discussion and analysis (CD&A) — the narrative section before the compensation tables. It explains the board's rationale for pay decisions.</p>

<p><strong>10 minutes:</strong> Study the Summary Compensation Table and the CEO pay ratio. Compare total CEO compensation to the company's stock performance over the same period.</p>

<p><strong>5 minutes:</strong> Review the board nominee biographies. Check for independence, overboarding, and skills diversity.</p>

<p><strong>5 minutes:</strong> Scan related party transactions for anything unusual.</p>

<p><strong>5 minutes:</strong> Read shareholder proposals and prior-year voting results. Proposals that received 40%+ support signal real shareholder concern.</p>

<h2 id="governance-red-flags">Governance Red Flags in Proxy Statements</h2>

<ul>
<li><strong>CEO also serves as board chair.</strong> Combining the CEO and chair roles means the person running the company also runs the board that oversees them. Many governance advocates consider this a conflict.</li>
<li><strong>Failed say-on-pay vote.</strong> If shareholders voted against the compensation plan, it signals widespread dissatisfaction with pay practices.</li>
<li><strong>Excessive perks and tax gross-ups.</strong> Companies paying for the CEO's personal security, private jet usage, and then grossing up the tax bill on those perks are spending shareholder money on executive lifestyle.</li>
<li><strong>Golden parachute provisions.</strong> Severance packages that pay 3-5x annual compensation upon a change of control can entrench management and deter beneficial acquisitions.</li>
<li><strong>Classified board.</strong> A staggered board (where only one-third of directors stand for election each year) makes it nearly impossible for shareholders to replace the full board in response to poor performance.</li>
</ul>

<h2 id="small-cap-proxy">Proxy Statements and Small-Cap Investing</h2>

<p>Governance matters more in small-caps. Large-cap companies face scrutiny from institutional shareholders, proxy advisory firms (ISS, Glass Lewis), and financial media. Small-cap companies often face none of this. A micro-cap company with a board consisting of the founder, the founder's college roommate, and the founder's attorney is not uncommon — and it's not a governance structure that protects minority shareholders.</p>

<p>Reading the proxy statement for a small-cap investment takes 15 minutes and can reveal deal-breakers: excessive related party transactions, a CEO paid more than the company earns in revenue, or a board with zero independent oversight. These are risks that don't appear in the financial statements but directly affect shareholder value.</p>

<p>Brefyr processes DEF 14A filings alongside 10-K, 10-Q, 8-K, and Form 4 filings for all tracked companies, ensuring that governance disclosures are surfaced with the same timeliness as financial results.</p>
`,
};
