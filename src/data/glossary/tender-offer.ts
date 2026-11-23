import type { GlossaryTerm } from "../types";

export const termTenderOffer: GlossaryTerm = {
  slug: "tender-offer",
  term: "Tender Offer",
  title: "Tender Offer — A Direct Bid to Buy Shares From Shareholders",
  shortDefinition:
    "A tender offer is a public bid to purchase some or all of shareholders' shares at a specified price, typically at a premium to the current market price, within a fixed time period.",
  metaDescription:
    "What is a tender offer? How tender offers work, the difference between third-party and self-tender offers, SEC rules governing the process, and what investors should consider.",
  wordCount: 1000,
  category: "Corporate Actions",
  tags: ["tender-offer", "m-and-a", "corporate-action", "takeover", "shareholder"],
  relatedSlugs: ["acquisition", "merger", "share-repurchase", "poison-pill", "8-k-filing"],
  relatedTerms: ["acquisition", "merger", "share-repurchase", "poison-pill", "8-k-filing"],
  faq: [
    {
      question: "Am I required to sell my shares in a tender offer?",
      answer:
        "No. Tender offers are voluntary — you choose whether to tender (sell) your shares or keep them. However, if the tender offer results in the acquirer gaining enough shares to complete a back-end merger (usually requiring a supermajority), remaining shareholders may be forced to accept the same price in the subsequent squeeze-out merger. So while tendering is optional, the practical outcome for holdouts is often the same price received later with less certainty and no interest on the delay.",
    },
    {
      question: "Can I change my mind after tendering my shares?",
      answer:
        "Yes. Under SEC rules, you can withdraw your tendered shares at any time before the offer expires. If the offer is extended, withdrawal rights are also extended. If the offeror has not accepted your shares within 60 days of the original offer, you can withdraw them. This protects shareholders from being locked into a decision while material new information may emerge.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A tender offer is a formal, public proposal to purchase shares directly from a company's shareholders at a specified price during a fixed period. The offer is typically made at a premium to the current market price — usually 20-50% above the pre-announcement trading price — to incentivize shareholders to sell (or "tender") their shares. Tender offers are a common mechanism for acquisitions, particularly hostile takeovers where the target's board has not agreed to the transaction, as well as for share repurchase programs where the company buys back its own stock.</p>

<h2 id="types">Types of Tender Offers</h2>

<p><strong>Third-party tender offer:</strong> An acquiring company (or group) offers to buy shares of a target company. This is the classic takeover mechanism. The acquirer goes directly to shareholders, bypassing the target's board of directors. If the target's board opposes the offer, it becomes a hostile tender offer. If the board supports it, the tender offer is a friendly mechanism that is often faster than a traditional merger requiring a shareholder vote.</p>

<p><strong>Self-tender offer (issuer tender):</strong> A company offers to buy back its own shares from existing shareholders. This is an alternative to open-market share repurchases. Self-tenders are used when the company wants to repurchase a large block of shares quickly at a fixed or range-bound price, rather than buying gradually on the open market over months or years.</p>

<h2 id="sec-rules">SEC Rules Governing Tender Offers</h2>

<p>Tender offers are heavily regulated under the Williams Act (Sections 13(d) and 14(d)-(e) of the Securities Exchange Act of 1934) and SEC Rules 14d and 14e. Key protections include:</p>

<p><strong>Minimum duration.</strong> A tender offer must remain open for at least 20 business days. If the terms are changed (price increase, extension, change in conditions), the offer must remain open for at least 10 additional business days.</p>

<p><strong>All-holders/best-price rule.</strong> The offer must be open to all holders of the targeted class of securities, and all tendering shareholders must receive the best price paid to any shareholder during the offer period.</p>

<p><strong>Withdrawal rights.</strong> Shareholders may withdraw tendered shares at any time before the offer expires and after 60 days if the offeror has not yet accepted the shares.</p>

<p><strong>Pro rata acceptance.</strong> If more shares are tendered than the offeror wants to buy (a partial tender offer), shares must be accepted on a pro rata basis from all tendering shareholders.</p>

<p><strong>Disclosure requirements.</strong> The offeror files a Schedule TO with the SEC (Schedule TO-T for third-party offers, Schedule TO-I for issuer tenders), disclosing the terms, financing, purpose, and plans for the target. The target company must file a Schedule 14D-9 recommending that shareholders accept, reject, or remain neutral on the offer.</p>

<h2 id="process">The Tender Offer Process</h2>

<p><strong>Announcement and filing.</strong> The offeror announces the tender offer and files Schedule TO with the SEC. The offer document is mailed or made available to all shareholders of record.</p>

<p><strong>Target response.</strong> Within 10 business days, the target's board must file Schedule 14D-9, disclosing its recommendation and the reasons behind it. The board may recommend acceptance, rejection, or express no opinion.</p>

<p><strong>Tender period.</strong> Shareholders decide whether to tender their shares during the offer period (minimum 20 business days). Shares are tendered through the shareholder's broker, who transmits the instructions to the depositary agent handling the offer.</p>

<p><strong>Expiration and settlement.</strong> At expiration, the offeror counts tendered shares. If conditions are met (minimum tender condition, regulatory approvals, etc.), the offeror accepts the shares and pays the offer price, usually within 2-3 business days after acceptance.</p>

<h2 id="strategic-considerations">Strategic Considerations for Investors</h2>

<p>When evaluating whether to tender, consider: the premium over current market price, the likelihood of a higher competing bid, what happens if you don't tender and the acquirer gains control anyway (back-end merger at the same or lower price), and the tax implications (tendering triggers a taxable sale). In a hostile offer, the target may negotiate a higher price, find a competing bidder (a "white knight"), or deploy defensive measures like a poison pill.</p>

<h2 id="sec-filings">Tender Offers in SEC Filings</h2>

<ul>
<li><strong>Schedule TO:</strong> The offeror's filing containing the full offer terms, financing, and purpose.</li>
<li><strong>Schedule 14D-9:</strong> The target board's recommendation to shareholders.</li>
<li><strong>SC 13D:</strong> Filed by any person or group acquiring more than 5% of a class of equity securities, often associated with tender offer situations.</li>
<li><strong>8-K filing:</strong> Both parties file current reports regarding material developments in the tender offer process.</li>
</ul>

<p>Brefyr monitors tender offer filings (Schedule TO and 14D-9) across all SEC-reporting companies, alerting investors when their portfolio companies become targets of tender offers or launch self-tender programs.</p>
`,
};
