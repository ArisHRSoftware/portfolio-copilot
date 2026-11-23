import type { GlossaryTerm } from "../types";

export const termSupermajority: GlossaryTerm = {
  slug: "supermajority",
  term: "Supermajority Voting",
  title: "Supermajority Voting — When a Simple Majority Isn't Enough",
  shortDefinition:
    "Supermajority voting is a corporate governance provision requiring more than a simple majority — typically 66.7% or 75% of outstanding shares — to approve certain fundamental corporate actions such as mergers, charter amendments, or the removal of anti-takeover defenses.",
  metaDescription:
    "What is supermajority voting? How it works, which corporate actions require it, the anti-takeover effect, and where to find supermajority provisions in SEC filings.",
  wordCount: 850,
  category: "Corporate Actions",
  tags: ["supermajority", "voting", "corporate-governance", "anti-takeover", "charter-amendment"],
  relatedSlugs: ["voting-rights", "staggered-board", "poison-pill", "dual-class-shares", "proxy-statement"],
  relatedTerms: ["voting-rights", "staggered-board", "poison-pill", "dual-class-shares", "proxy-statement"],
  faq: [
    {
      question: "Why do companies require supermajority votes for certain actions?",
      answer:
        "The stated purpose is to protect the company from fundamental changes that could harm minority shareholders or long-term value — ensuring that only actions supported by a broad consensus of shareholders can proceed. In practice, supermajority requirements also serve as anti-takeover defenses. A hostile acquirer who accumulates 51% of the shares cannot unilaterally amend the charter, remove a poison pill, or force a merger if those actions require 75% approval. The acquirer would need support from a supermajority of all other shareholders, which is very difficult to achieve.",
    },
    {
      question: "What is the trend regarding supermajority provisions?",
      answer:
        "The governance trend strongly favors eliminating supermajority requirements. Shareholder proposals to remove supermajority voting provisions routinely pass with 70-90% support. Proxy advisory firms ISS and Glass Lewis recommend voting in favor of removing supermajority requirements and against boards that maintain them. Many S&P 500 companies have eliminated these provisions in response to shareholder pressure. However, the irony is that eliminating a supermajority provision often requires meeting the supermajority threshold itself — making removal structurally difficult.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A supermajority voting requirement demands that a corporate action receive approval from more than a simple majority (50%+1) of outstanding shares. The most common thresholds are two-thirds (66.67%) and three-quarters (75%) of all outstanding shares — not just those voting, but all shares outstanding. This is a critical distinction: if only 60% of shares are voted at the meeting, a 75% supermajority requirement effectively requires that nearly all voting shareholders approve the proposal. Supermajority provisions are embedded in the company's certificate of incorporation or bylaws and apply to specified categories of corporate actions.</p>

<h2 id="common-applications">Common Applications of Supermajority Voting</h2>

<p><strong>Charter and bylaw amendments.</strong> Modifying the company's fundamental governing documents may require supermajority approval. This protects governance structures (like staggered boards or dual class shares) from being easily removed by a slim majority of shareholders.</p>

<p><strong>Merger approval.</strong> Some charters require supermajority approval for mergers, particularly mergers with a shareholder who already holds a significant stake. This prevents a 51% shareholder from forcing through a merger at an unfair price to the minority.</p>

<p><strong>Removal of directors.</strong> Requiring a supermajority to remove directors between annual meetings protects the board from abrupt changes by a narrow majority of shareholders. Combined with a staggered board, this makes hostile board takeovers extremely difficult.</p>

<p><strong>Elimination of anti-takeover provisions.</strong> Some companies require supermajority approval to remove or modify their poison pill, staggered board, or other defensive measures. This creates a self-reinforcing defense: the defense mechanism can only be removed with a supermajority vote, which the defense mechanism itself makes harder to achieve.</p>

<h2 id="anti-takeover-effect">Anti-Takeover Effect</h2>

<p>Supermajority provisions are powerful anti-takeover tools when combined with other defenses. Consider a company with a poison pill, a staggered board, and a 75% supermajority requirement to amend the charter. A hostile acquirer faces a triple lock: they cannot accumulate shares beyond the pill's threshold, they cannot replace the board in a single election, and they cannot amend the charter to remove these defenses without 75% shareholder approval. Even if the acquirer buys 51% of the shares, they are locked out of control unless they can convince another 24% of shareholders to join them in amending the charter.</p>

<p>This is why governance advocates view supermajority provisions as the linchpin of entrenching governance structures. If a simple majority could amend the charter, shareholders could remove a staggered board, eliminate a poison pill, or switch from plurality to majority voting. The supermajority requirement prevents this, even when a clear majority of shareholders want the change.</p>

<h2 id="structural-catch-22">The Structural Catch-22</h2>

<p>Eliminating a supermajority provision requires meeting the supermajority threshold itself. If the charter requires 75% to amend any charter provision, then removing the 75% requirement needs 75% approval. At many companies, achieveing this threshold is structurally impossible due to low voter turnout. If only 70% of shares are voted at the meeting, a 75% supermajority requirement can never be met — even with 100% of the votes cast in favor. This creates a situation where the provision is effectively permanent.</p>

<p>Some companies address this by holding the vote at the same time as a contested election or major transaction, when turnout is naturally higher. Others put the question on the ballot repeatedly, hoping to build momentum. Some boards, recognizing the governance trend, voluntarily propose amendments to reduce or eliminate their own supermajority requirements.</p>

<h2 id="state-law">State Law Considerations</h2>

<p>Delaware General Corporation Law (which governs most public companies) requires a majority vote to amend the certificate of incorporation unless the certificate itself specifies a higher threshold. This means supermajority requirements are not legally required — they are voluntarily adopted by companies (usually at the IPO stage or through charter amendments) and can theoretically be removed by meeting the specified threshold.</p>

<h2 id="sec-filings">Supermajority Voting in SEC Filings</h2>

<ul>
<li><strong>Certificate of Incorporation:</strong> The definitive source, filed as an exhibit to the 10-K or S-1. Specifies which actions require supermajority approval and the threshold.</li>
<li><strong>DEF 14A:</strong> Proxy statements disclose supermajority requirements and may contain shareholder proposals to eliminate them, along with the board's recommendation.</li>
<li><strong>10-K:</strong> The governance section of the annual report references supermajority provisions and their effect on shareholder rights.</li>
<li><strong>8-K:</strong> Reports the results of any shareholder vote on supermajority-related proposals.</li>
</ul>

<p>Brefyr processes proxy statements and charter documents for all SEC-reporting companies, allowing investors to identify supermajority provisions and track shareholder proposals to eliminate them across their portfolio.</p>
`,
};
