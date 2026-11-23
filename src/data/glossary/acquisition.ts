import type { GlossaryTerm } from "../types";

export const termAcquisition: GlossaryTerm = {
  slug: "acquisition",
  term: "Acquisition",
  title: "Acquisition — When One Company Purchases Another",
  shortDefinition:
    "An acquisition is a corporate transaction in which one company (the acquirer) purchases a controlling interest in another company (the target), absorbing the target's operations, assets, and liabilities.",
  metaDescription:
    "What is an acquisition? How acquisitions work, the difference between friendly and hostile takeovers, deal structures, and how to track acquisitions through SEC filings.",
  wordCount: 1050,
  category: "Corporate Actions",
  tags: ["acquisition", "m-and-a", "corporate-action", "takeover", "due-diligence"],
  relatedSlugs: ["merger", "tender-offer", "leveraged-buyout", "goodwill", "8-k-filing"],
  relatedTerms: ["merger", "tender-offer", "leveraged-buyout", "goodwill", "8-k-filing"],
  faq: [
    {
      question: "What is the difference between a friendly and hostile acquisition?",
      answer:
        "In a friendly acquisition, the target's board of directors agrees to the transaction and recommends it to shareholders. In a hostile acquisition, the acquirer goes directly to shareholders (usually through a tender offer) without the board's approval, or launches a proxy fight to replace the board with directors who will approve the deal. Hostile bids typically require higher premiums to persuade shareholders to override their board's recommendation. Many hostile bids ultimately become friendly when the target negotiates a higher price.",
    },
    {
      question: "How is the acquisition price determined?",
      answer:
        "The price is negotiated between the acquirer and target, informed by financial analysis including discounted cash flow models, comparable company analysis, precedent transaction analysis, and strategic value. The acquirer's investment bankers build a valuation model; the target's bankers do the same. The final price usually includes a premium of 20-50% over the target's pre-announcement stock price. The board obtains a fairness opinion from an independent bank confirming the price is fair to shareholders.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An acquisition occurs when one company purchases a controlling interest in another. The acquirer absorbs the target's operations, assets, employees, and liabilities. After closing, the target company typically ceases to exist as an independent entity — it either becomes a subsidiary of the acquirer or is fully integrated into the acquirer's operations. Acquisitions range from small bolt-on purchases of niche businesses to transformational deals worth hundreds of billions of dollars that reshape entire industries.</p>

<h2 id="deal-structures">Deal Structures</h2>

<p><strong>All-cash deal:</strong> The acquirer pays target shareholders entirely in cash. Target shareholders receive a fixed dollar amount per share and lose all future exposure to the business. Cash deals are simpler and more certain for target shareholders but require the acquirer to have or raise significant capital.</p>

<p><strong>All-stock deal:</strong> Target shareholders receive shares in the acquirer at a specified exchange ratio. They become shareholders of the combined entity and participate in its future upside (and downside). Stock deals are common when the acquirer wants to conserve cash or when both parties want shared ownership of the combined company.</p>

<p><strong>Cash-and-stock deal:</strong> A combination of cash and acquirer shares. This is the most common structure for large acquisitions, balancing certainty (cash) with participation (stock).</p>

<p><strong>Leveraged acquisition:</strong> The acquirer finances the purchase largely with borrowed money (debt). The target's own assets and cash flows often serve as collateral for the borrowing. Private equity firms typically use this structure, with 60-80% of the purchase price funded by debt.</p>

<h2 id="process">The Acquisition Process</h2>

<p><strong>Target identification and approach.</strong> The acquirer identifies potential targets through strategic analysis, industry mapping, or investment bank referrals. Initial contact may be through a formal letter of intent or informal discussions between CEOs.</p>

<p><strong>Due diligence.</strong> Once the target agrees to explore a sale, the acquirer conducts extensive due diligence — financial audits, legal reviews, tax analysis, operational assessments, and customer/employee evaluations. Due diligence typically takes 4-12 weeks and involves dozens of professional advisors.</p>

<p><strong>Negotiation and agreement.</strong> The parties negotiate price, structure, representations and warranties, indemnification, closing conditions, and termination provisions. The definitive agreement is the legally binding contract governing the transaction.</p>

<p><strong>Regulatory approval.</strong> Depending on transaction size and industry, regulatory approvals may be required from antitrust authorities (FTC/DOJ in the U.S., the European Commission for cross-border deals), industry-specific regulators (banking regulators for bank acquisitions, the FCC for telecom), and foreign investment review bodies (CFIUS for deals involving U.S. national security interests).</p>

<p><strong>Shareholder approval and closing.</strong> Target shareholders vote on the transaction (the proxy statement provides all material information). If the acquirer is issuing a significant amount of stock, its shareholders may also vote. Once all conditions are met, the transaction closes and the target's shares are converted into the agreed consideration.</p>

<h2 id="purchase-price-allocation">Purchase Price Allocation</h2>

<p>After closing, the acquirer allocates the purchase price across the target's identifiable assets and liabilities at fair value. Any excess of the purchase price over the fair value of net identifiable assets is recorded as goodwill on the acquirer's balance sheet. This purchase price allocation is a critical accounting exercise — it determines the amount of goodwill, which must be tested annually for impairment, and the values of intangible assets, which are amortized over their useful lives.</p>

<h2 id="success-rates">Do Acquisitions Create Value?</h2>

<p>Acquisition success rates are sobering. Research suggests 50-70% of acquisitions fail to create the expected value. Common causes of failure include overpayment (bidding wars drive up prices), cultural integration challenges (different corporate cultures clash), customer attrition (customers leave during the disruption), management departures (key talent exits), and integration costs exceeding estimates. The acquiring company's stock often declines on the announcement of large acquisitions, reflecting market skepticism about value creation.</p>

<p>However, well-executed acquisitions — particularly those with clear strategic logic, disciplined pricing, and experienced integration teams — can create enormous value. Serial acquirers like Berkshire Hathaway, Danaher, and Constellation Software have built their entire business models on disciplined acquisition strategies.</p>

<h2 id="sec-filings">Acquisitions in SEC Filings</h2>

<ul>
<li><strong>8-K filing:</strong> Announces the definitive agreement, with the full agreement typically attached as an exhibit.</li>
<li><strong>DEF 14A:</strong> Proxy statement seeking shareholder approval, with detailed description of the transaction, fairness opinions, and financial analysis.</li>
<li><strong>S-4:</strong> Filed when the acquirer issues shares as consideration, registering the new shares.</li>
<li><strong>10-K:</strong> Post-closing, the acquirer's annual report contains the purchase price allocation, goodwill calculation, and pro forma financial impact.</li>
<li><strong>SC TO-T/SC TO-I:</strong> Filed when the acquisition is structured as a tender offer.</li>
</ul>

<p>Brefyr tracks all acquisition-related filings across 7,600+ SEC-reporting companies, alerting investors to new deal announcements, proxy filings, and regulatory developments that may affect companies in their portfolio.</p>
`,
};
