import type { GlossaryTerm } from "../types";

export const termCarveOut: GlossaryTerm = {
  slug: "carve-out",
  term: "Equity Carve-Out",
  title: "Equity Carve-Out — Selling a Minority Stake in a Subsidiary Through an IPO",
  shortDefinition:
    "An equity carve-out is a corporate action in which a parent company sells a minority ownership stake in a subsidiary through an initial public offering, raising cash while retaining majority control.",
  metaDescription:
    "What is an equity carve-out? How carve-outs differ from spin-offs, why companies sell partial stakes in subsidiaries, and how to track these transactions in SEC filings.",
  wordCount: 900,
  category: "Corporate Actions",
  tags: ["carve-out", "ipo", "divestiture", "corporate-action", "subsidiary"],
  relatedSlugs: ["spin-off", "merger", "acquisition", "leveraged-buyout", "8-k-filing"],
  relatedTerms: ["spin-off", "merger", "acquisition", "leveraged-buyout", "8-k-filing"],
  faq: [
    {
      question: "What is the difference between a carve-out and a spin-off?",
      answer:
        "In a spin-off, the parent distributes all subsidiary shares to existing shareholders for free — the parent retains zero ownership and receives no cash. In a carve-out, the parent sells a minority stake (typically 10-30%) to new public investors through an IPO, raising cash while keeping majority control. Carve-outs often precede spin-offs: the parent does the carve-out to establish a public market value for the subsidiary, then later spins off its remaining stake. The parent gets both cash (from the carve-out) and eventual full separation (from the spin-off).",
    },
    {
      question: "Why would a company do a carve-out instead of selling the whole subsidiary?",
      answer:
        "A carve-out lets the parent raise cash while retaining strategic control. The parent still owns 70-90% and can consolidate the subsidiary's financials. It also establishes a public market valuation for the subsidiary, which can be useful for a later full spin-off or sale. Additionally, the subsidiary gains access to its own publicly traded stock, which can be used for employee compensation and acquisitions without diluting the parent's equity.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An equity carve-out — sometimes called a partial IPO or partial spin-off — is a transaction in which a parent company takes a subsidiary public by selling a minority stake through an initial public offering. The parent retains majority ownership (typically 70-90%) while the minority stake begins trading on a public exchange. Unlike a full spin-off, where the parent distributes all subsidiary shares to its shareholders and receives nothing in return, a carve-out generates cash proceeds for the parent company.</p>

<h2 id="how-carve-outs-work">How Carve-Outs Work</h2>

<p>The parent company files an S-1 registration statement with the SEC on behalf of the subsidiary, disclosing the subsidiary's standalone financial statements, business description, risk factors, and the terms of the offering. Investment banks underwrite the IPO, pricing the minority stake and distributing it to public investors. After the offering, the subsidiary trades independently on the exchange while the parent continues to consolidate it in its financial statements (since it still holds a controlling interest).</p>

<p><strong>Typical structure:</strong> The parent sells 15-25% of the subsidiary's shares in the IPO, retaining 75-85%. The IPO raises cash that may go to the parent (a secondary offering of existing shares) or to the subsidiary (a primary offering of newly issued shares to fund subsidiary growth), or some combination of both.</p>

<h2 id="strategic-reasons">Why Companies Choose Carve-Outs</h2>

<p><strong>Cash generation.</strong> Unlike a spin-off, which is a distribution and generates no cash, a carve-out raises money. The parent can use the proceeds to pay down debt, fund other investments, or return capital to shareholders.</p>

<p><strong>Price discovery.</strong> By establishing a public trading price for the subsidiary, the parent gets market validation of the subsidiary's value. This can reveal whether the subsidiary is worth more or less than the internal estimates used for strategic planning.</p>

<p><strong>Step toward full separation.</strong> Many carve-outs are explicitly structured as the first step in a two-step separation. The carve-out establishes the subsidiary as a public company with its own reporting, management, and valuation. The parent then completes a tax-free spin-off of its remaining stake, distributing those shares to its own shareholders. This two-step approach maximizes both cash proceeds and tax efficiency.</p>

<p><strong>Subsidiary independence.</strong> The carved-out subsidiary gains its own publicly traded stock, which can be used for employee compensation plans and acquisition currency. It also gets an independent board of directors and its own analyst coverage, which can improve strategic decision-making and capital allocation.</p>

<h2 id="risks">Risks and Complications</h2>

<p>Carve-outs create complex structures. The parent and subsidiary share operational overlaps — shared services, intercompany transactions, and sometimes conflicting interests. Related-party transactions between the parent and subsidiary must be conducted at arm's length and disclosed in SEC filings. Minority shareholders in the subsidiary may have interests that conflict with the parent's majority control.</p>

<p>Tax structure is critical. If the parent later wants to spin off its remaining stake tax-free under Section 355, it must comply with IRS requirements, including holding the remaining stake for a minimum period and demonstrating a valid business purpose for the separation.</p>

<h2 id="sec-filings">Carve-Outs in SEC Filings</h2>

<ul>
<li><strong>S-1 Registration Statement:</strong> The subsidiary's IPO prospectus, containing full standalone financial statements, risk factors, and the relationship with the parent.</li>
<li><strong>8-K filing:</strong> The parent announces the carve-out transaction and terms.</li>
<li><strong>10-K:</strong> The parent's annual report consolidates the subsidiary but discloses the minority interest on the balance sheet and in the notes.</li>
<li><strong>Related-party disclosures:</strong> Both the parent's and subsidiary's filings must detail transactions between the two entities.</li>
</ul>

<p>Brefyr tracks S-1 filings and 8-K announcements for all SEC filers, flagging carve-out IPOs and related transactions so investors can monitor these complex but potentially value-creating corporate events.</p>
`,
};
