import type { GlossaryTerm } from "../types";

export const termPoisonPill: GlossaryTerm = {
  slug: "poison-pill",
  term: "Poison Pill (Shareholder Rights Plan)",
  title: "Poison Pill — The Anti-Takeover Defense That Dilutes Hostile Acquirers",
  shortDefinition:
    "A poison pill, formally known as a shareholder rights plan, is an anti-takeover defense mechanism that allows existing shareholders to purchase additional shares at a steep discount if any single investor acquires more than a specified percentage of the company, massively diluting the hostile acquirer.",
  metaDescription:
    "What is a poison pill? How shareholder rights plans work, types of poison pills, famous examples, legal challenges, and how to identify poison pill provisions in SEC filings.",
  wordCount: 950,
  category: "Corporate Actions",
  tags: ["poison-pill", "anti-takeover", "shareholder-rights-plan", "corporate-governance", "hostile-takeover"],
  relatedSlugs: ["staggered-board", "tender-offer", "merger", "acquisition", "voting-rights"],
  relatedTerms: ["staggered-board", "tender-offer", "merger", "acquisition", "voting-rights"],
  faq: [
    {
      question: "Has a poison pill ever actually been triggered?",
      answer:
        "Poison pills are almost never triggered because their purpose is deterrence, not execution. The threat of massive dilution is so severe that hostile acquirers either negotiate with the board (which can waive the pill for an approved deal) or abandon the attempt. In the rare cases where a pill was tested, the resulting dilution made the acquisition economically unfeasible. The effectiveness of poison pills lies in their deterrent power — they force acquirers to negotiate with the board rather than going directly to shareholders.",
    },
    {
      question: "Can a company adopt a poison pill without shareholder approval?",
      answer:
        "Yes. The board of directors can adopt a poison pill unilaterally, without a shareholder vote. This is one of the most controversial aspects of poison pills — the board can entrench itself against takeover attempts without shareholder consent. However, proxy advisory firms like ISS and Glass Lewis generally recommend that shareholders vote against directors who adopt long-term poison pills without shareholder ratification. Some companies now adopt 'short-duration' pills (12-18 months) that expire if not ratified by shareholders at the next annual meeting.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A poison pill — technically called a shareholder rights plan — is the most common anti-takeover defense used by publicly traded companies. It works by granting existing shareholders the right to purchase additional shares at a deep discount (typically 50% below market price) if any single investor or group acquires more than a specified ownership threshold (usually 10-20% of outstanding shares) without board approval. The resulting flood of discounted shares massively dilutes the hostile acquirer's stake, making the takeover prohibitively expensive. The pill does not prevent friendly acquisitions — the board can waive the pill for any acquirer it approves.</p>

<h2 id="how-pills-work">How Poison Pills Work</h2>

<p><strong>Rights distribution.</strong> The board declares a dividend of one "right" per share to all existing shareholders. These rights are attached to the common stock and trade together with it. Under normal circumstances, the rights are dormant and have no practical effect.</p>

<p><strong>Trigger event.</strong> If any person or group acquires beneficial ownership exceeding the trigger threshold (typically 10-20% of outstanding shares) without board approval, the rights become exercisable.</p>

<p><strong>Flip-in provision.</strong> Once triggered, all rights holders except the hostile acquirer can purchase additional shares of the target company at 50% below market price. If the target has 100 million shares outstanding and the rights allow each holder to buy shares at half price, the acquirer's percentage ownership is dramatically diluted.</p>

<p><strong>Flip-over provision.</strong> If the hostile acquirer manages to complete a merger despite the flip-in, the rights allow target shareholders to purchase shares of the acquiring company at 50% below market price, further penalizing the acquirer.</p>

<h2 id="types">Types of Poison Pills</h2>

<p><strong>Traditional pill.</strong> The standard shareholder rights plan described above, with a typical duration of 10 years. Increasingly rare due to governance concerns about board entrenchment.</p>

<p><strong>Short-duration pill.</strong> Adopted for 12-18 months, often in response to a specific threat. Governance advocates prefer these because they expire relatively quickly. Some are structured to terminate if not ratified by shareholders at the next annual meeting.</p>

<p><strong>Net operating loss (NOL) pill.</strong> Specifically designed to protect valuable tax assets. Companies with large net operating losses can carry those losses forward to offset future taxable income, but an ownership change exceeding 50% (under Section 382 of the IRC) can severely limit the use of these NOLs. NOL pills set very low trigger thresholds (often 4.99%) to prevent ownership changes that would impair the tax asset.</p>

<p><strong>Dead-hand pill.</strong> Can only be redeemed by the directors who adopted it (not by any new directors elected by a hostile acquirer through a proxy contest). Dead-hand pills are considered the most aggressive form and have been struck down by courts in some jurisdictions as a breach of fiduciary duty.</p>

<h2 id="arguments">The Governance Debate</h2>

<p><strong>In favor:</strong> Poison pills prevent coercive two-tier tender offers (where the acquirer offers a premium for the first 51% of shares and a lower price for the rest), force acquirers to negotiate with the board (which can extract a higher price), and give the board time to explore alternatives. Studies show that companies with poison pills receive higher premiums in negotiated deals.</p>

<p><strong>Against:</strong> Poison pills can entrench underperforming boards and management teams, preventing beneficial ownership changes. They were adopted without shareholder approval, and they may allow boards to reject bids that shareholders would accept. Critics argue that shareholders — not directors — should decide whether to sell their shares at a premium.</p>

<h2 id="legal-landscape">Legal Framework</h2>

<p>Delaware courts (which govern most U.S. public companies) have upheld poison pills as valid under the business judgment rule, provided the board can demonstrate a reasonable threat to corporate policy and effectiveness, and that the response is proportional to the threat (the Unocal standard from 1985). However, courts have struck down extreme variations like dead-hand pills and have scrutinized pills adopted for entrenchment purposes rather than genuine threat response.</p>

<h2 id="sec-filings">Poison Pills in SEC Filings</h2>

<ul>
<li><strong>8-K and 8-A:</strong> The adoption of a shareholder rights plan is filed as a current report. The rights agreement itself is attached as an exhibit.</li>
<li><strong>DEF 14A:</strong> Proxy statements may discuss the poison pill in the corporate governance section or in proposals related to its ratification.</li>
<li><strong>10-K:</strong> The annual report's risk factors and equity description sections reference the shareholder rights plan and its terms.</li>
<li><strong>SC 13D:</strong> Investors approaching the trigger threshold must file beneficial ownership reports, which often reference the target's poison pill.</li>
</ul>

<p>Brefyr tracks 8-K filings and registration statements, flagging poison pill adoptions and modifications so investors can monitor the anti-takeover landscape for companies in their portfolio.</p>
`,
};
