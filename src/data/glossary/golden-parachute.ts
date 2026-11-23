import type { GlossaryTerm } from "../types";

export const termGoldenParachute: GlossaryTerm = {
  slug: "golden-parachute",
  term: "Golden Parachute",
  title: "Golden Parachute — Lucrative Severance Packages for Executives During Takeovers",
  shortDefinition:
    "A golden parachute is a contractual provision guaranteeing substantial severance benefits to top executives if they lose their position following a change of control, such as a merger or acquisition.",
  metaDescription:
    "What is a golden parachute? How executive change-of-control provisions work, typical payout components, the say-on-pay vote, and where to find golden parachute details in SEC filings.",
  wordCount: 900,
  category: "Corporate Actions",
  tags: ["golden-parachute", "executive-compensation", "m-and-a", "corporate-governance", "severance"],
  relatedSlugs: ["executive-compensation", "say-on-pay", "merger", "acquisition", "proxy-statement"],
  relatedTerms: ["executive-compensation", "say-on-pay", "merger", "acquisition", "proxy-statement"],
  faq: [
    {
      question: "How large are golden parachute payouts?",
      answer:
        "Golden parachute payouts for CEOs of large public companies typically range from $10 million to over $100 million, depending on the executive's compensation package and the terms of the agreement. The payout usually includes a multiple of base salary and bonus (commonly 2-3 times), acceleration of all unvested equity awards (stock options and RSUs), continued health benefits, and sometimes tax gross-up payments. The proxy statement in a merger discloses the exact estimated payout for each named executive officer in a 'golden parachute compensation' table.",
    },
    {
      question: "Can shareholders block golden parachutes?",
      answer:
        "Dodd-Frank requires an advisory (non-binding) shareholder vote on golden parachute arrangements in connection with merger proxy statements — the 'say-on-golden-parachute' vote. However, this vote is advisory only and does not legally prevent the payouts. Shareholders can also vote against executive compensation plans that include golden parachute provisions during annual say-on-pay votes. In practice, courts have upheld golden parachutes when they were approved by an independent compensation committee and are not grossly excessive.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A golden parachute is a clause in an executive's employment agreement that provides substantial financial benefits — often millions or tens of millions of dollars — if the executive is terminated, demoted, or resigns for specified reasons following a change of control of the company. Change of control typically means a merger, acquisition, or takeover that results in a new majority owner. The term evokes the image of an executive floating safely to the ground with a golden parachute while the company goes through turbulent ownership changes below.</p>

<h2 id="typical-components">Typical Components of a Golden Parachute</h2>

<p><strong>Cash severance.</strong> The most straightforward component: a lump sum or series of payments equal to a multiple of the executive's base salary and target bonus. Multiples of 2x to 3x annual compensation are standard for CEOs of large companies. Some agreements specify the multiple; others reference the remaining term of the employment contract.</p>

<p><strong>Equity acceleration.</strong> All unvested stock options, restricted stock units, and performance share units immediately vest upon the change of control (single trigger) or upon termination following the change of control (double trigger). For executives with large equity grants, acceleration can represent the largest component of the parachute — sometimes exceeding the cash severance by a factor of 5-10x.</p>

<p><strong>Benefits continuation.</strong> Continued health insurance, life insurance, and other benefits for a specified period (typically 18-36 months) after termination.</p>

<p><strong>Tax gross-up.</strong> Section 280G of the Internal Revenue Code imposes a 20% excise tax on "excess parachute payments" (amounts exceeding three times the executive's average annual compensation over the prior five years). Some golden parachutes include a tax gross-up, meaning the company pays the executive enough extra money to cover this excise tax. Tax gross-ups have become less common due to shareholder pressure, but still exist in some agreements.</p>

<h2 id="single-vs-double-trigger">Single Trigger vs Double Trigger</h2>

<p><strong>Single trigger:</strong> Benefits are paid upon the change of control itself, regardless of whether the executive is terminated. The executive gets paid simply because the company was acquired. This is increasingly criticized by shareholders and corporate governance advocates because it rewards executives for a transaction they may not have orchestrated.</p>

<p><strong>Double trigger:</strong> Benefits are paid only if the change of control occurs AND the executive is subsequently terminated without cause or resigns for good reason (such as a demotion or significant pay cut). This is now the prevailing standard, as governance advocates argue that executives should not be paid simply for a change in ownership — only for actual job loss resulting from that change.</p>

<h2 id="arguments-for-and-against">The Debate</h2>

<p><strong>Arguments in favor:</strong> Golden parachutes encourage executives to evaluate takeover bids objectively rather than opposing them to protect their jobs. Without a parachute, executives might reject value-maximizing acquisitions because they would lose their positions. Parachutes also help companies attract and retain top talent by providing security against the career risk of a takeover.</p>

<p><strong>Arguments against:</strong> Golden parachutes can be excessively generous, transferring shareholder wealth to executives. They may incentivize executives to pursue mergers that benefit them personally (via the parachute payout) rather than shareholders. When an acquisition destroys shareholder value and the CEO walks away with $50 million in severance, the optics — and the economics — are problematic.</p>

<h2 id="section-280g">Section 280G and Tax Treatment</h2>

<p>The IRS limits the tax deductibility of golden parachute payments. Under Section 280G, if total parachute payments exceed three times the executive's base amount (average W-2 compensation over the prior five years), the excess is subject to a 20% excise tax on the executive (Section 4999) and is non-deductible by the company. Some agreements are structured with a "best-net" provision — the payment is reduced to the safe harbor amount if doing so would leave the executive with more after-tax money than receiving the full payment and paying the excise tax.</p>

<h2 id="sec-filings">Golden Parachutes in SEC Filings</h2>

<ul>
<li><strong>DEF 14A (Proxy Statement):</strong> Annual proxy statements disclose executive employment agreements including change-of-control provisions in the Compensation Discussion and Analysis section and the "Potential Payments Upon Termination or Change of Control" table.</li>
<li><strong>Merger proxy:</strong> Contains a specific "Golden Parachute Compensation" table showing estimated payouts for each named executive, broken down by cash, equity, benefits, and tax gross-ups.</li>
<li><strong>8-K:</strong> New or amended employment agreements with golden parachute provisions are filed as exhibits to 8-K reports.</li>
</ul>

<p>Brefyr processes proxy statements and merger filings for all SEC-reporting companies, making it straightforward for investors to review executive change-of-control provisions and estimated payouts before casting their shareholder vote.</p>
`,
};
