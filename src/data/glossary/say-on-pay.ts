import type { GlossaryTerm } from "../types";

export const termSayOnPay: GlossaryTerm = {
  slug: "say-on-pay",
  term: "Say-on-Pay Vote",
  title: "Say-on-Pay — How Shareholders Vote on Executive Compensation",
  shortDefinition:
    "A say-on-pay vote is an advisory shareholder vote on the compensation of a company's named executive officers, required at least every three years by the Dodd-Frank Act, giving shareholders a formal channel to express approval or disapproval of executive pay practices.",
  metaDescription:
    "What is a say-on-pay vote? How advisory compensation votes work, what happens when they fail, the influence of proxy advisors, and where to find say-on-pay results in SEC filings.",
  wordCount: 850,
  category: "Regulatory & Compliance",
  tags: ["say-on-pay", "executive-compensation", "shareholder-vote", "corporate-governance", "dodd-frank"],
  relatedSlugs: ["executive-compensation", "dodd-frank", "golden-parachute", "proxy-statement", "voting-rights"],
  relatedTerms: ["executive-compensation", "dodd-frank", "golden-parachute", "proxy-statement", "voting-rights"],
  faq: [
    {
      question: "What happens if a say-on-pay vote fails?",
      answer:
        "Because the vote is advisory, a failed say-on-pay vote does not legally require the company to change anything. However, in practice, companies take failed votes very seriously. A failure (less than 50% support) typically triggers board engagement with major shareholders to understand their concerns, review and revision of the compensation program by the compensation committee, enhanced proxy disclosure explaining the changes made in response, and sometimes replacement of the compensation committee chair or compensation consultant. Proxy advisory firms track say-on-pay results and may recommend against compensation committee members if concerns are not addressed.",
    },
    {
      question: "How often do say-on-pay votes fail?",
      answer:
        "Outright failures (below 50% support) are relatively uncommon — roughly 2-3% of S&P 500 companies fail in any given year. However, low support (50-70%) is more common and can be almost as impactful, as it signals significant shareholder dissatisfaction. Companies receiving support below 70% often proactively engage with shareholders and make changes. The average say-on-pay approval rate for S&P 500 companies is approximately 90%, so anything below 80% is considered a yellow flag and below 70% a red flag.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Say-on-pay is an advisory shareholder vote on executive compensation mandated by Section 951 of the Dodd-Frank Act. At least once every three years — and annually at most companies — shareholders vote on a resolution approving (or disapproving) the compensation of the company's named executive officers as disclosed in the proxy statement's Compensation Discussion and Analysis (CD&A) and the accompanying compensation tables. The vote is non-binding: even if a majority of shareholders vote against the compensation, the company is not legally required to make changes. But the signal is powerful, and failed say-on-pay votes have driven meaningful compensation reforms across corporate America.</p>

<h2 id="how-it-works">How Say-on-Pay Works</h2>

<p><strong>Frequency vote.</strong> Dodd-Frank also requires a separate vote (at least once every six years) on how often the say-on-pay vote should be held: annually, biennially, or triennially. The overwhelming majority of companies have adopted annual say-on-pay votes, as recommended by most institutional investors and proxy advisory firms.</p>

<p><strong>What shareholders are voting on.</strong> The resolution asks shareholders to approve the compensation of the named executive officers (NEOs) — typically the CEO, CFO, and three other highest-paid executives — as disclosed in the proxy statement. Shareholders are voting on the entire compensation program as described in the CD&A, including base salary, annual bonuses, long-term incentive awards, equity grants, retirement benefits, perquisites, and severance arrangements.</p>

<p><strong>Proxy advisor influence.</strong> Institutional Shareholder Services (ISS) and Glass Lewis are the two dominant proxy advisory firms. Their say-on-pay recommendations significantly influence voting outcomes, particularly among institutional investors who rely on the advisory firms' analyses to inform their votes on hundreds or thousands of companies. An adverse recommendation from ISS typically reduces say-on-pay support by 20-25 percentage points.</p>

<h2 id="what-drives-opposition">What Drives Shareholder Opposition</h2>

<p><strong>Pay-performance disconnect.</strong> The most common reason for say-on-pay opposition is a perceived misalignment between executive pay and company performance. If the CEO received a large bonus or saw significant equity vesting while the stock price declined, revenue fell, or the company underperformed peers, shareholders may vote against the pay package.</p>

<p><strong>Excessive quantum.</strong> Absolute compensation levels that appear disproportionate to the company's size, industry, or peer group. A mid-cap company paying its CEO $30 million when the peer median is $10 million will face scrutiny.</p>

<p><strong>Poor pay practices.</strong> Specific compensation design elements that governance advocates consider problematic: single-trigger change-of-control payments, tax gross-ups, repricing of underwater stock options, lack of clawback provisions, guaranteed bonuses, and excessive perquisites.</p>

<p><strong>Lack of responsiveness.</strong> If the company received low say-on-pay support in a prior year and failed to address shareholder concerns, opposition often intensifies in subsequent votes.</p>

<h2 id="board-response">How Boards Respond</h2>

<p>Companies receiving less than 70-80% support typically engage in shareholder outreach — the compensation committee chair and lead independent director meet with the company's largest institutional shareholders to understand specific concerns. Common responses include revising performance metrics for incentive plans, adding clawback provisions, eliminating problematic pay practices (tax gross-ups, repricing), strengthening the pay-performance relationship, and enhancing proxy disclosure to explain compensation decisions more clearly.</p>

<h2 id="golden-parachute-vote">Say-on-Golden-Parachute</h2>

<p>In addition to the annual say-on-pay vote, Dodd-Frank requires a separate advisory vote on golden parachute arrangements in connection with merger proxy statements. This vote specifically addresses the change-of-control payments that named executive officers would receive as a result of the proposed transaction. Like the regular say-on-pay vote, the golden parachute vote is advisory but provides a formal channel for shareholders to express their views on executive severance.</p>

<h2 id="sec-filings">Say-on-Pay in SEC Filings</h2>

<ul>
<li><strong>DEF 14A:</strong> Contains the say-on-pay resolution, the CD&A explaining the compensation program, all required compensation tables, and the board's recommendation.</li>
<li><strong>8-K (Item 5.07):</strong> Reports the say-on-pay voting results within four business days after the annual meeting.</li>
<li><strong>10-K:</strong> May discuss the board's response to say-on-pay results in the corporate governance section.</li>
</ul>

<p>Brefyr processes proxy statements and vote result filings for all SEC-reporting companies, allowing investors to track say-on-pay approval rates and identify companies where shareholder dissatisfaction with executive compensation may signal governance concerns.</p>
`,
};
