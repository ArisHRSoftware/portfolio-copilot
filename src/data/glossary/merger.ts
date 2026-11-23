import type { GlossaryTerm } from "../types";

export const termMerger: GlossaryTerm = {
  slug: "merger",
  term: "Merger",
  title: "Merger — When Two Companies Combine Into One Entity",
  shortDefinition:
    "A merger is a corporate transaction in which two companies combine to form a single entity, with shareholders of both companies typically receiving shares in the combined company.",
  metaDescription:
    "What is a merger? Types of mergers, how they differ from acquisitions, the regulatory approval process, merger arbitrage, and how to track merger activity in SEC filings.",
  wordCount: 1100,
  category: "Corporate Actions",
  tags: ["merger", "m-and-a", "corporate-action", "restructuring", "shareholder"],
  relatedSlugs: ["acquisition", "tender-offer", "leveraged-buyout", "poison-pill", "proxy-statement"],
  relatedTerms: ["acquisition", "tender-offer", "leveraged-buyout", "poison-pill", "proxy-statement"],
  faq: [
    {
      question: "What is the difference between a merger and an acquisition?",
      answer:
        "In a merger, two companies combine to form a new or combined entity, and shareholders of both companies receive shares in the resulting company. In an acquisition, one company purchases another — the acquirer absorbs the target, and target shareholders receive cash, acquirer stock, or a combination. In practice, most transactions described as 'mergers' are actually acquisitions structured as mergers for legal or tax reasons. The term 'merger of equals' implies roughly equal size and power-sharing, but true mergers of equals are rare.",
    },
    {
      question: "How long does a merger take to complete?",
      answer:
        "From announcement to closing, most mergers take 3-12 months. The timeline depends on regulatory approvals (antitrust review by the FTC or DOJ, plus SEC review), shareholder votes, and satisfaction of closing conditions. Simple mergers between non-competing companies in unregulated industries can close in 3-4 months. Complex transactions involving large competitors in regulated industries (banking, healthcare, telecom) can take 12-18 months and sometimes get blocked entirely.",
    },
    {
      question: "What happens to my shares in a merger?",
      answer:
        "It depends on the merger terms. In an all-stock merger, your shares in the target company are exchanged for shares in the acquirer (or the new combined entity) at a fixed or floating exchange ratio. In a cash-and-stock merger, you receive some cash plus some shares. In an all-cash merger (technically an acquisition), you receive only cash and your shares are canceled. The specific terms are detailed in the merger agreement, which is filed as an exhibit to the 8-K announcement.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A merger is a corporate transaction in which two separate companies combine their operations, assets, and liabilities into a single entity. After a merger closes, one or both of the original companies ceases to exist as an independent entity, and shareholders of both companies become shareholders of the combined company. Mergers are one of the most significant corporate events — they reshape industries, create or destroy shareholder value, and generate extensive SEC filings that investors must understand.</p>

<h2 id="types-of-mergers">Types of Mergers</h2>

<p><strong>Horizontal merger:</strong> Two companies in the same industry and at the same stage of the value chain combine. Example: two pharmaceutical companies merging. Horizontal mergers face the most antitrust scrutiny because they reduce competition in the market.</p>

<p><strong>Vertical merger:</strong> A company merges with a supplier or customer. Example: an auto manufacturer merging with a parts supplier. Vertical mergers can create efficiencies but may also raise competition concerns if the combined entity can foreclose competitors from essential inputs.</p>

<p><strong>Conglomerate merger:</strong> Two companies in unrelated industries combine. These were common in the 1960s-80s but have fallen out of favor as markets generally penalize diversified companies with a conglomerate discount.</p>

<p><strong>Merger of equals:</strong> Two companies of roughly similar size combine, often with shared leadership and blended corporate cultures. True mergers of equals are exceptionally rare — in most cases, one party has more negotiating power and effectively acquires the other.</p>

<h2 id="merger-process">The Merger Process</h2>

<p><strong>Negotiation and agreement.</strong> The boards of both companies negotiate the merger terms: exchange ratio (how many acquirer shares each target share receives), governance of the combined entity, management structure, and regulatory strategy. The definitive merger agreement is the binding contract.</p>

<p><strong>SEC filing and disclosure.</strong> Both companies file 8-Ks announcing the transaction. For stock-based mergers, the acquirer files an S-4 registration statement registering the new shares to be issued. Both companies file proxy statements seeking shareholder approval. These filings contain the full merger agreement, fairness opinions from investment banks, pro forma financial statements, and risk factors.</p>

<p><strong>Regulatory review.</strong> Depending on the size and industry, the transaction may require approval from the FTC, DOJ (antitrust), SEC, state regulators, and foreign competition authorities. The Hart-Scott-Rodino Act requires pre-merger notification for transactions above certain size thresholds. Regulators may approve the merger unconditionally, require divestitures of overlapping businesses, or block the transaction entirely.</p>

<p><strong>Shareholder vote.</strong> Both companies' shareholders must approve the merger (unless the acquirer's board can authorize the share issuance without a vote under stock exchange rules). The proxy statement provides all information shareholders need to make an informed vote, including the board's recommendation and any dissenting directors' views.</p>

<p><strong>Closing.</strong> Once all conditions are satisfied — regulatory approvals, shareholder votes, no material adverse change — the merger closes. Target shares are exchanged for the agreed consideration, the target is delisted, and the combined entity begins operating.</p>

<h2 id="merger-arbitrage">Merger Arbitrage</h2>

<p>After a merger is announced, the target's stock typically trades at a small discount to the offer price. This discount reflects the risk that the deal may not close (regulatory block, shareholder rejection, financing failure, or material adverse change). Merger arbitrage is an investment strategy that captures this spread by buying the target's stock after the announcement and holding it through closing. The return depends on the discount, the probability of closing, and the time to close.</p>

<h2 id="value-creation">Do Mergers Create Value?</h2>

<p>Research shows mixed results. Target company shareholders almost always benefit — they receive a premium over the pre-announcement price, typically 20-40%. Acquirer shareholders often see their stock decline on announcement, particularly in large acquisitions, suggesting the market believes the acquirer is overpaying. Long-term studies show that roughly half of mergers fail to deliver the promised synergies, often because of cultural integration challenges, customer attrition, or management distraction.</p>

<h2 id="sec-filings">Mergers in SEC Filings</h2>

<ul>
<li><strong>8-K filing:</strong> Initial announcement with the merger agreement as an exhibit.</li>
<li><strong>S-4:</strong> Registration statement for new shares in stock-based mergers. Contains the most comprehensive disclosure.</li>
<li><strong>DEF 14A:</strong> Proxy statements from both companies seeking shareholder approval.</li>
<li><strong>SC 13E-3:</strong> Filed for going-private mergers (where the target is taken private).</li>
<li><strong>10-K:</strong> Post-closing, the combined entity's annual report discusses the acquisition, purchase price allocation, and goodwill.</li>
</ul>

<p>Brefyr monitors all merger-related SEC filings across 7,600+ companies, flagging 8-K announcements, S-4 registrations, and proxy solicitations so investors can track deal progress from announcement through closing.</p>
`,
};
