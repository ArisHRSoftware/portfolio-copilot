import type { GlossaryTerm } from "../types";

export const termForm15: GlossaryTerm = {
  slug: "form-15",
  term: "Form 15",
  title: "Form 15 — Deregistration and Going Dark Explained for Investors",
  shortDefinition:
    "Form 15 is an SEC filing that terminates a company's registration under the Securities Exchange Act, suspending its obligation to file 10-Ks, 10-Qs, 8-Ks, and proxy statements — a process commonly known as going dark.",
  metaDescription:
    "What is Form 15? Learn how companies deregister from the SEC, what 'going dark' means for shareholders, and what rights investors retain.",
  wordCount: 2100,
  category: "SEC Filings",
  tags: ["sec-filing", "deregistration", "going-dark", "edgar", "delisting"],
  relatedSlugs: ["form-8a", "10-k-filing", "8-k-filing", "sec-edgar", "small-cap"],
  relatedTerms: ["form-8a", "10-k-filing", "8-k-filing", "sec-edgar", "small-cap"],
  faq: [
    {
      question: "What are the requirements to file Form 15?",
      answer:
        "A company can file Form 15 to terminate its Section 12(g) registration if it has fewer than 300 holders of record of the class of securities (or fewer than 500 holders of record if the company's total assets have not exceeded $10 million on the last day of each of its most recent three fiscal years). For Section 12(b) registration (exchange-listed securities), the company must first delist from the exchange and then can file Form 15 if it meets the holder-of-record thresholds. The 'holder of record' count typically undercounts actual shareholders because shares held in street name through a broker are counted as a single holder of record.",
    },
    {
      question: "Can shareholders prevent a company from going dark?",
      answer:
        "In most cases, no. The decision to file Form 15 is made by the company's board of directors and does not require shareholder approval. This means the board can unilaterally cut off the information flow to shareholders by ending SEC reporting. Some states' corporate laws may provide limited remedies — shareholders can sometimes demand books and records under state law — but these rights are far narrower than the continuous disclosure provided by SEC reporting. Shareholder lawsuits challenging going-dark transactions have had mixed success, primarily succeeding only when the deregistration is part of a broader scheme to defraud minority shareholders.",
    },
    {
      question: "Can a company that filed Form 15 still have its shares traded?",
      answer:
        "Yes. Filing Form 15 terminates SEC reporting obligations, but it does not by itself make the shares untradeable. Shares of deregistered companies can continue to trade on the OTC (over-the-counter) markets — specifically on OTC Pink, the lowest tier of the OTC marketplace. However, without current SEC filings, the shares become far less liquid, analyst coverage disappears, institutional investors typically sell, and the bid-ask spread widens dramatically. Some Form 15 companies eventually become completely illiquid, with no active market for their shares.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Form 15 is the exit door from public company life. When a company files Form 15 — formally the "Certification and Notice of Termination of Registration" — it is telling the SEC and the market that it will stop filing annual reports, quarterly reports, current reports, proxy statements, and insider ownership disclosures. The continuous flow of public information that investors rely on goes dark. For shareholders who remain invested, this is one of the most consequential corporate events possible — not because it changes the business, but because it changes everything they can know about it.</p>

<h2 id="what-going-dark-means">What Going Dark Means</h2>

<p>Going dark is the colloquial term for the process of deregistering securities and suspending SEC reporting obligations. After a Form 15 is filed, the company is no longer required to file 10-Ks, 10-Qs, 8-Ks, proxy statements, or any other periodic reports. Insiders are no longer required to file Forms 3, 4, or 5. Beneficial owners are no longer required to file Schedules 13D or 13G. The entire public disclosure infrastructure that enables informed investing disappears.</p>

<p>The company still exists. Its shares may still trade. But investors must operate in an information vacuum — relying on whatever voluntary disclosures the company chooses to make, if any.</p>

<h2 id="why-companies-go-dark">Why Companies Go Dark</h2>

<p>Companies file Form 15 for a range of reasons, some legitimate and some concerning:</p>

<p><strong>Cost savings.</strong> SEC compliance is expensive. For small public companies, the annual cost of maintaining SEC reporting — auditor fees, legal fees, Sarbanes-Oxley compliance, transfer agent fees, and internal accounting staff — can run $1 million to $3 million or more. For a company with $20 million in revenue and thin margins, these costs represent a meaningful drag on profitability. Going dark eliminates these costs and redirects resources to the business.</p>

<p><strong>Low trading volume.</strong> Some companies find that being public provides no benefit because their shares trade so infrequently that the stock price does not function as a reliable valuation signal, the company cannot raise equity capital through the public markets, and institutional investors have no interest in such illiquid positions. For these companies, the costs of public reporting outweigh the benefits.</p>

<p><strong>Merger or acquisition completion.</strong> After a company is acquired and its shares are delisted, the surviving entity files Form 15 to formally terminate the acquired company's reporting obligations. This is a routine housekeeping step that follows virtually every completed acquisition.</p>

<p><strong>Going-private transactions.</strong> When a controlling shareholder takes a company private — through a buyout, reverse stock split, or other mechanism that reduces shareholders of record below the threshold — Form 15 is the final step in the process. The go-private transaction squeezes out minority shareholders, and Form 15 terminates the reporting obligations.</p>

<p><strong>Avoidance of disclosure.</strong> In less benign cases, companies go dark to avoid disclosing unfavorable information. A company facing SEC investigations, accounting scandals, or deteriorating financial performance may find it advantageous to escape the reporting obligations that would force continued disclosure. This is the scenario that most concerns investor advocates.</p>

<h2 id="how-form15-works">How Form 15 Works</h2>

<p>The mechanics of Form 15 vary depending on how the company's securities are registered:</p>

<p><strong>Section 12(g) companies</strong> (registered by virtue of having 2,000+ shareholders of record and $10 million in assets) can file Form 15 when their holder-of-record count drops below 300 (or below 500 if assets are under $10 million). The duty to file reports is immediately suspended upon filing Form 15. The registration terminates 90 days later unless the SEC objects.</p>

<p><strong>Section 12(b) companies</strong> (registered for exchange listing via Form 8-A) must first delist from the exchange and file a Form 25 (Notification of Removal from Listing). After delisting, if the company meets the holder-of-record thresholds, it can file Form 15 to terminate its reporting obligations entirely.</p>

<p><strong>Section 15(d) reporting companies</strong> (obligated to report because they filed a Securities Act registration statement, like an S-1) can suspend their reporting duties by filing Form 15 when the class of securities has fewer than 300 holders of record on the first day of any fiscal year.</p>

<p>The important nuance is "immediately suspended." Once Form 15 is filed, the company stops filing — it does not need to wait for SEC approval. The SEC can deny the termination within 90 days if it determines the company does not meet the requirements, but this is uncommon.</p>

<h2 id="impact-on-shareholders">Impact on Remaining Shareholders</h2>

<p>Shareholders who hold shares in a company that goes dark face several challenges:</p>

<p><strong>Information disappears.</strong> No more 10-Ks, 10-Qs, or 8-Ks. No more audited financial statements. No more insider trading disclosures. The company may voluntarily post some financial information on its website, but it is not required to and may stop at any time.</p>

<p><strong>Liquidity evaporates.</strong> Without exchange listing and regular SEC filings, most institutional investors sell their positions. The shares move to the OTC Pink market or become completely untradeable. Bid-ask spreads widen dramatically — it is not uncommon for spreads to reach 20% or more of the share price on thinly traded OTC stocks.</p>

<p><strong>Valuation becomes impossible.</strong> Without current financial data, investors cannot calculate earnings per share, book value, free cash flow, or any other fundamental metric. The stock price, to the extent there is one, becomes detached from intrinsic value and driven by speculation.</p>

<p><strong>Governance protections weaken.</strong> Without proxy statements, there are no annual shareholder votes on director elections, executive compensation, or other matters. Without insider trading disclosures, insiders can trade with significantly reduced oversight. State corporate law still provides some protections, but they are far weaker than the federal securities law framework.</p>

<h2 id="holder-of-record-manipulation">The Holder-of-Record Issue</h2>

<p>The holder-of-record threshold is controversial because it dramatically undercounts actual shareholders. When shares are held through a brokerage account (in "street name"), the broker — not the individual investor — is the holder of record. A single holder of record at a large broker can represent thousands of beneficial owners. This means a company with 300 holders of record may have 10,000 or more actual shareholders — all of whom lose access to SEC-mandated disclosures when Form 15 is filed.</p>

<p>The SEC has acknowledged this problem but has not changed the holder-of-record definition, which dates back to 1964. Investor advocates have called for reforms that would base the threshold on beneficial owners rather than holders of record, which would make it significantly harder for companies to go dark while still having a dispersed shareholder base.</p>

<h2 id="where-to-find-form15">Where to Find Form 15 Filings</h2>

<p>All Form 15 filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=15&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. When a company files Form 15, it is typically the last filing that will appear in the company's EDGAR history — a fitting symbol of the information blackout that follows. On Brefyr, Form 15 filings are flagged as critical events on company pages, alerting investors that the company is exiting the public reporting system and that all future information access will be limited.</p>
`,
};
