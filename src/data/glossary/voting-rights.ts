import type { GlossaryTerm } from "../types";

export const termVotingRights: GlossaryTerm = {
  slug: "voting-rights",
  term: "Voting Rights",
  title: "Voting Rights — The Power Shareholders Have to Influence Corporate Decisions",
  shortDefinition:
    "Voting rights are the entitlements of shareholders to vote on corporate matters such as board elections, executive compensation, mergers, and charter amendments, typically with one vote per share of common stock.",
  metaDescription:
    "What are shareholder voting rights? How proxy voting works, what matters shareholders vote on, cumulative vs statutory voting, and how to track voting results in SEC filings.",
  wordCount: 900,
  category: "Corporate Actions",
  tags: ["voting-rights", "shareholder-rights", "proxy-voting", "corporate-governance", "annual-meeting"],
  relatedSlugs: ["dual-class-shares", "supermajority", "proxy-statement", "say-on-pay", "staggered-board"],
  relatedTerms: ["dual-class-shares", "supermajority", "proxy-statement", "say-on-pay", "staggered-board"],
  faq: [
    {
      question: "What do shareholders typically vote on?",
      answer:
        "Common voting matters include: election of directors, ratification of the independent auditor, advisory vote on executive compensation (say-on-pay), approval of equity compensation plans, approval of mergers and acquisitions, charter and bylaw amendments, shareholder proposals on governance or social issues, and authorization of additional shares. The annual proxy statement (DEF 14A) lists all items on the agenda with the board's recommendation for each.",
    },
    {
      question: "What is the difference between a binding and advisory vote?",
      answer:
        "A binding vote has legal force — if shareholders vote to approve a merger, the company must proceed (or not proceed, if rejected). An advisory vote expresses shareholder sentiment but is not legally binding. The most common advisory vote is say-on-pay. Even though advisory votes don't force action, boards take them seriously — a say-on-pay vote that fails (gets less than 50% support) typically triggers board engagement with shareholders and compensation changes.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Voting rights are the fundamental mechanism through which shareholders exercise control over the companies they own. Each share of common stock typically carries one vote, and shareholders use these votes to influence major corporate decisions — from who sits on the board of directors to whether the company should merge with another entity. Voting rights are what distinguish equity ownership from debt: creditors are owed money, but only shareholders have a voice in governance. The power and exercise of these rights are central to corporate democracy and are extensively documented in SEC filings.</p>

<h2 id="how-voting-works">How Shareholder Voting Works</h2>

<p><strong>Record date.</strong> The company sets a record date — typically 30-60 days before the annual meeting. Only shareholders who own stock as of the record date are eligible to vote, regardless of whether they still hold the stock on the meeting date.</p>

<p><strong>Proxy statement.</strong> The company files a DEF 14A (definitive proxy statement) with the SEC and distributes it to all shareholders. The proxy statement contains the agenda, the board's recommendations, background information on each proposal, and a proxy card for voting.</p>

<p><strong>Voting methods.</strong> Shareholders can vote by attending the meeting (in person or virtually), by mailing the proxy card, by calling a toll-free number, or by voting online. Most votes are cast by proxy — the shareholder authorizes a designated person (usually company management) to vote their shares according to their instructions.</p>

<p><strong>Vote counting.</strong> Votes are tabulated by an independent inspector of elections. Results are reported on a Form 8-K within four business days after the meeting.</p>

<h2 id="voting-standards">Voting Standards</h2>

<p><strong>Plurality voting.</strong> In director elections under plurality voting, the candidates receiving the most votes win, regardless of whether they receive a majority. A director can be elected with a single vote if running unopposed and all other shareholders abstain. Most S&P 500 companies have moved away from plurality voting for uncontested elections.</p>

<p><strong>Majority voting.</strong> In majority voting, a director must receive more "for" votes than "against" votes to be elected. If a director fails to receive a majority, they typically must submit their resignation, which the board then decides whether to accept. This gives shareholders meaningful power to reject underperforming or unqualified directors.</p>

<p><strong>Supermajority voting.</strong> Some corporate actions require more than a simple majority — commonly 66.7% or 75% of outstanding shares. Charter amendments, bylaw changes, and mergers may require supermajority approval depending on the company's governing documents.</p>

<p><strong>Cumulative voting.</strong> Under cumulative voting, shareholders can concentrate all their votes on a single director candidate rather than distributing them across all seats. If you own 1,000 shares and three directors are being elected, you can cast all 3,000 votes for one candidate. This helps minority shareholders elect at least one representative to the board. Cumulative voting is mandatory in some states and optional in others.</p>

<h2 id="proxy-contests">Proxy Contests</h2>

<p>When a dissident shareholder group believes the current board is not acting in shareholders' best interest, they can run a proxy contest — nominating their own slate of directors and soliciting other shareholders' votes. The dissidents file their own proxy statement (DEFC14A) with the SEC. Both sides campaign for votes, and the results are determined at the annual meeting. Proxy contests are expensive — the dissident group may spend millions on legal fees, proxy solicitors, and advertising — but they are the ultimate expression of shareholder democracy.</p>

<h2 id="beneficial-vs-registered">Beneficial vs Registered Ownership</h2>

<p>Most individual investors hold shares in "street name" through a brokerage. The broker is the registered holder; the investor is the beneficial owner. Beneficial owners vote through their broker, who is required to forward proxy materials and collect voting instructions. Brokers can vote uninstructed shares on routine matters (like auditor ratification) but cannot vote on contested matters (director elections, executive compensation) without the beneficial owner's instructions — these "broker non-votes" are counted for quorum but not for or against the proposal.</p>

<h2 id="sec-filings">Voting Rights in SEC Filings</h2>

<ul>
<li><strong>DEF 14A (Proxy Statement):</strong> The primary disclosure document for all shareholder voting matters, containing proposals, board recommendations, and voting instructions.</li>
<li><strong>8-K:</strong> Voting results are filed within four business days after the annual meeting under Item 5.07.</li>
<li><strong>Certificate of Incorporation:</strong> Defines the voting rights of each share class and any supermajority requirements.</li>
<li><strong>DEFC14A:</strong> Dissident proxy solicitation materials in a contested election.</li>
</ul>

<p>Brefyr processes proxy statements and vote result filings for all SEC-reporting companies, allowing investors to review proposals, track how their portfolio companies handle governance votes, and monitor contested elections in real time.</p>
`,
};
