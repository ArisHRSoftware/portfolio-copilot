import type { GlossaryTerm } from "../types";

export const termSCTO: GlossaryTerm = {
  slug: "sc-to",
  term: "SC TO",
  title: "SC TO — Tender Offer Statement Explained for Investors",
  shortDefinition:
    "SC TO (Schedule TO) is an SEC filing required when a person or entity makes a tender offer to purchase shares directly from a public company's shareholders, disclosing the terms, conditions, financing, and purpose of the offer.",
  metaDescription:
    "What is an SC TO filing? Learn how tender offer statements work, what they contain, and how investors should evaluate a tender offer.",
  wordCount: 2100,
  category: "SEC Filings",
  tags: ["sec-filing", "tender-offer", "mergers-acquisitions", "edgar", "takeover"],
  relatedSlugs: ["schedule-13d", "8-k-filing", "def-14a", "sec-edgar", "beneficial-owner"],
  relatedTerms: ["schedule-13d", "8-k-filing", "def-14a", "sec-edgar", "beneficial-owner"],
  faq: [
    {
      question: "What is a tender offer?",
      answer:
        "A tender offer is a public proposal to buy shares of a company directly from its shareholders at a specified price, usually at a premium above the current market price. Unlike open-market purchases, tender offers bypass the stock exchange — the bidder goes directly to shareholders and asks them to 'tender' (deliver) their shares in exchange for the stated consideration (cash, stock, or a combination). Tender offers are commonly used in acquisitions, going-private transactions, and self-tenders (where a company buys back its own shares).",
    },
    {
      question: "How long does a tender offer remain open?",
      answer:
        "SEC rules require that a tender offer remain open for a minimum of 20 business days from the date it is first published or sent to shareholders. If the bidder changes a material term — the price, the percentage sought, or the form of consideration — the offer must remain open for at least 10 additional business days after the change. Shareholders who have already tendered their shares can withdraw them at any time before the offer expires. This withdrawal right is a critical investor protection — it allows shareholders to change their mind if a competing bid appears or circumstances change.",
    },
    {
      question: "What happens if more shares are tendered than the bidder wants?",
      answer:
        "If the tender offer is for less than all outstanding shares (a partial tender offer) and more shares are tendered than sought, the bidder must purchase shares on a pro rata basis from all tendering shareholders. This means each shareholder who tenders gets the same percentage of their tendered shares purchased. For example, if the bidder seeks 30% of outstanding shares and 60% are tendered, each tendering shareholder will have half of their tendered shares purchased. This pro rata requirement prevents the bidder from cherry-picking which shareholders to buy from.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Schedule TO is the SEC filing that launches — and governs — a tender offer. When a bidder decides to bypass the board of directors and go directly to shareholders with an offer to purchase their shares, the Schedule TO is the official opening move. It puts the terms on the table, discloses the bidder's financing and intentions, and starts the regulatory clock that governs how the offer will proceed. For shareholders in the target company, the SC TO and the accompanying offer to purchase are the documents that determine whether to tender their shares, hold them, or wait for a better offer.</p>

<h2 id="when-sc-to-filed">When Schedule TO Is Filed</h2>

<p>Schedule TO must be filed with the SEC on the date the tender offer commences — the same day the offer is first published, announced, or sent to shareholders. The filing must include the offer to purchase (the detailed terms), the letter of transmittal (the form shareholders use to tender their shares), and any other materials distributed to shareholders in connection with the offer.</p>

<p>Tender offers occur in several contexts:</p>

<p><strong>Third-party acquisitions.</strong> The most dramatic use case. A corporate acquirer or private equity firm makes an unsolicited (or hostile) bid to buy a company's shares directly from shareholders, often after the target's board has rejected a negotiated deal. Carl Icahn's bid for Clorox, Kraft's offer for Cadbury, and Broadcom's bid for Qualcomm are examples of high-profile third-party tender offers.</p>

<p><strong>Negotiated acquisitions.</strong> Even friendly deals sometimes use the tender offer mechanism. After the boards agree on terms, the acquirer launches a tender offer to collect shares from dispersed shareholders more quickly than a traditional merger proxy vote. If enough shares are tendered (typically a majority), the acquirer completes a short-form merger to acquire the remaining shares.</p>

<p><strong>Self-tenders.</strong> Companies sometimes use tender offers to repurchase their own shares. This is an alternative to open-market share buyback programs. Self-tenders are filed on a modified version of Schedule TO and are common when the company wants to repurchase a large block of shares quickly, often at a fixed price or through a Dutch auction.</p>

<p><strong>Going-private transactions.</strong> When a controlling shareholder or a private equity firm takes a company private, the transaction may involve a tender offer for the publicly held shares, followed by a squeeze-out merger for any remaining shares.</p>

<h2 id="what-sc-to-contains">What Schedule TO Contains</h2>

<p>Schedule TO requires disclosure across 13 items. The key sections for investors are:</p>

<p><strong>Terms of the offer.</strong> The price per share (or the consideration offered), the number of shares sought, the expiration date, any conditions that must be satisfied before the bidder is obligated to purchase shares, and the method of payment. The conditions section is critical — it lists the circumstances under which the bidder can walk away. Common conditions include a minimum tender threshold (e.g., a majority of shares must be tendered), regulatory approvals, absence of material adverse changes, and no pending litigation challenging the offer.</p>

<p><strong>Source and amount of funds.</strong> How the bidder plans to pay for the shares. This discloses whether the acquisition is financed with cash on hand, debt financing (and the terms of that financing), equity, or a combination. Heavily leveraged offers carry more risk of financing failure — if the debt markets seize up between the offer date and the closing date, the bidder may not be able to close.</p>

<p><strong>Purpose of the tender offer.</strong> The bidder's intentions for the company after acquiring the shares. This includes plans for mergers, reorganizations, liquidations, changes in the board, changes in management, changes in dividend policy, and changes in the company's capital structure. For shareholders evaluating the offer, this section answers the question: what happens to the company if the tender offer succeeds?</p>

<p><strong>Bidder's interest in the target.</strong> The bidder's current ownership of the target's shares, any transactions in the target's shares during the past 60 days, and any arrangements with other persons regarding the target's securities. This reveals whether the bidder has been accumulating a toehold position before launching the offer.</p>

<p><strong>Financial statements.</strong> If the offer involves non-cash consideration (stock or securities of the bidder), the bidder must provide financial statements so that target shareholders can evaluate the value of the consideration being offered.</p>

<h2 id="target-response">The Target Company's Response</h2>

<p>Within 10 business days of the tender offer commencement, the target company's board must file a Schedule 14D-9 — the solicitation/recommendation statement. This filing discloses the board's recommendation: accept the offer, reject the offer, express no opinion, or state that it is unable to take a position. The board's recommendation is typically accompanied by a fairness opinion from a financial advisor and a detailed analysis of the offer's terms relative to the company's standalone value.</p>

<p>In hostile situations, the board may recommend that shareholders reject the offer and implement defensive measures — a poison pill (shareholder rights plan), a search for a competing bidder (a "white knight"), or litigation challenging the offer's terms or the bidder's disclosures.</p>

<h2 id="evaluating-tender-offer">How Investors Should Evaluate a Tender Offer</h2>

<p>When a tender offer lands on a stock you own, the analysis framework involves several questions:</p>

<p><strong>What is the premium?</strong> Compare the offer price to the undisturbed stock price (before the offer was announced). Premiums of 20-40% are typical for change-of-control transactions. A low premium may indicate a lowball offer; an unusually high premium may reflect the bidder's desperation or the target's strong negotiating position.</p>

<p><strong>What are the conditions?</strong> A highly conditional offer — requiring financing, regulatory approval in multiple jurisdictions, and minimal litigation — carries more risk of not closing than a cash offer with minimal conditions. The fewer the conditions, the more certain the outcome.</p>

<p><strong>Is competing interest likely?</strong> Evaluate whether other potential acquirers might make a superior offer. The existence of a "go-shop" period (a window where the target can solicit competing bids) or a low break-up fee increases the probability of a competing offer.</p>

<p><strong>What happens if the offer fails?</strong> If the tender offer does not succeed — because too few shares are tendered, a condition is not met, or the bidder withdraws — the stock price typically declines toward its pre-offer level. Assess the downside risk before tendering.</p>

<h2 id="where-to-find-sc-to">Where to Find SC TO Filings</h2>

<p>All Schedule TO filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=SC+TO&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, tender offer filings are highlighted as material events on company pages, with AI-generated summaries that extract the offer price, premium, conditions, and financing structure — giving investors the essential decision-making data within minutes of the filing.</p>
`,
};
