import type { GlossaryTerm } from "../types";

export const termSpac: GlossaryTerm = {
  slug: "spac",
  term: "SPAC (Special Purpose Acquisition Company)",
  title: "SPAC — Blank-Check Companies That Take Private Firms Public",
  shortDefinition:
    "A SPAC (Special Purpose Acquisition Company) is a shell company that raises money through an IPO with the sole purpose of acquiring a private company, thereby taking it public without a traditional IPO process.",
  metaDescription:
    "What is a SPAC? Learn how Special Purpose Acquisition Companies work, the SPAC lifecycle from IPO to de-SPAC merger, investor protections, redemption rights, and the SEC filings that govern SPAC transactions.",
  wordCount: 600,
  category: "Market Structure",
  tags: ["spac", "blank-check", "ipo", "merger", "de-spac", "sec-filings"],
  relatedSlugs: ["ipo", "reverse-merger", "sec-edgar", "8k-filing", "shelf-registration"],
  relatedTerms: ["ipo", "reverse-merger", "sec-edgar", "8k-filing", "shelf-registration"],
  faq: [
    {
      question: "What happens to my money if the SPAC does not find a company to acquire?",
      answer:
        "If the SPAC does not complete an acquisition within its deadline (typically 18-24 months from the IPO), it must liquidate and return the trust funds to shareholders, plus any interest earned. This trust protection is a key feature of SPACs — your money is held in a trust account (usually invested in US Treasury bills) until a deal is completed or the SPAC is liquidated. This means your downside risk on the common shares is roughly limited to the IPO price ($10 per share for most SPACs) minus any trust interest, as long as you are holding before the de-SPAC merger vote.",
    },
    {
      question: "What is a de-SPAC transaction?",
      answer:
        "A de-SPAC is the merger between the SPAC and its target company. After the SPAC's management identifies and negotiates an acquisition, shareholders vote on the deal. If approved, the target company merges with the SPAC, the SPAC's ticker changes to reflect the new company, and the former target is now a publicly traded company. The de-SPAC process involves extensive SEC filings, including proxy statements, S-4 registration statements, and 8-K filings announcing the transaction. Shareholders who do not want to participate in the merger can redeem their shares for approximately the trust value ($10 per share plus interest).",
    },
    {
      question: "Why have many SPACs performed poorly after their mergers?",
      answer:
        "Several factors contribute: (1) SPAC sponsors have an incentive to complete a deal (they receive 20% of the shares for free, the 'promote') even if the target is mediocre. (2) The targets are often early-stage companies with optimistic revenue projections that do not materialize. (3) High dilution from the sponsor promote, warrants, and PIPE (Private Investment in Public Equity) financing reduces the value per share for original investors. (4) Many SPAC targets were private companies that could not have gone public through a traditional IPO due to their financial profiles. Research shows the average SPAC has significantly underperformed the market in the two years following its merger.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A SPAC is a publicly traded company with no commercial operations. It exists for one purpose: to raise money from investors through an <a href="/glossary/ipo">IPO</a> and then use that money to acquire a private company, taking it public through a merger rather than a traditional IPO process. The SPAC is sometimes called a "blank-check company" because investors give their money to the SPAC's management team (the "sponsors") trusting them to find and execute a good acquisition.</p>

<h2 id="lifecycle">The SPAC Lifecycle</h2>

<ol>
<li><strong>SPAC IPO.</strong> The sponsors file an S-1 registration statement with the SEC and conduct an IPO, typically pricing units at $10 each. Each unit usually includes one share of common stock and a fraction of a warrant (the right to buy additional shares at $11.50 in the future). The IPO proceeds go into a trust account invested in US Treasury bills.</li>
<li><strong>Target search.</strong> The sponsors have 18-24 months to identify and announce an acquisition target. During this period, the SPAC shares trade on the exchange, and the trust money sits safely. SPAC shares typically trade near $10 (the trust value) unless rumors or announcements about a target emerge.</li>
<li><strong>Deal announcement.</strong> When a target is identified, the SPAC files an <a href="/glossary/8k-filing">8-K</a> announcing the definitive agreement. The stock price may surge or decline depending on market reaction to the target. Additional financing (PIPE deals) is often arranged to supplement the trust money.</li>
<li><strong>Proxy/registration statement.</strong> The SPAC files a detailed proxy statement or S-4 registration statement with the SEC, disclosing the target's financials, the deal terms, and projections. This is the most informative filing in the SPAC process.</li>
<li><strong>Shareholder vote and redemptions.</strong> Shareholders vote on the merger. Any shareholder can redeem their shares for the trust value (approximately $10 per share plus interest) regardless of whether they vote for or against the deal. High redemption rates reduce the cash available to the combined company.</li>
<li><strong>De-SPAC merger.</strong> If approved, the merger closes. The SPAC's ticker changes to the target company's new ticker. The previously private company is now public.</li>
</ol>

<h2 id="economics">SPAC Economics and Dilution</h2>

<p>Understanding SPAC dilution is essential. The sponsors typically receive a 20% "promote" — 20% of the post-IPO shares for a nominal investment (often $25,000). This means that for every $10 an IPO investor puts in, only about $8 of value remains after the sponsor's promote dilution. Additional dilution comes from warrants (which allow the purchase of shares at $11.50, increasing the share count) and PIPE financing (which issues new shares to private investors at or below market price).</p>

<p>This dilution structure explains why many SPACs underperform after the merger. Even if the target company is fairly valued, the sponsor promote and warrant dilution erode value for public shareholders. The de-SPAC financial analysis in the proxy statement discloses these dilution effects, but investors must read the filing carefully — the headline valuation often does not account for all dilutive instruments.</p>

<h2 id="sec-filings">SEC Filings in the SPAC Process</h2>

<p>SPACs generate extensive SEC filings at every stage:</p>

<ul>
<li><strong>S-1:</strong> Initial IPO registration — SPAC structure, sponsor background, trust terms.</li>
<li><strong>8-K:</strong> Deal announcement — target identification, merger terms, expected timeline.</li>
<li><strong>S-4 / Proxy Statement:</strong> Full merger details — target financials, projections, dilution analysis, risk factors. This is the most important document for investors evaluating the deal.</li>
<li><strong>10-K and 10-Q:</strong> After the merger, the combined company files regular periodic reports like any public company.</li>
<li><strong>Form 4:</strong> Insider transactions by SPAC sponsors and target company executives reveal selling patterns post-merger.</li>
</ul>

<h2 id="spac-era">The SPAC Boom and Bust</h2>

<p>The SPAC market peaked in 2020-2021, when over 600 SPACs raised more than $160 billion. The frenzy was driven by low interest rates, abundant liquidity, and the appeal of taking companies public faster and with less regulatory scrutiny than traditional IPOs. By 2022-2023, the bubble deflated: SEC enforcement increased, the agency proposed new rules requiring more disclosure and liability for projections, and many post-merger SPACs traded far below their $10 trust value. The median de-SPAC company lost over 50% of its value within a year of the merger.</p>

<p>For investors using Brefyr to track SEC filings, SPAC analysis relies heavily on the proxy statement and S-4 filings. The revenue projections, comparable company analysis, and dilution tables in these documents are where the investment thesis — or its weaknesses — are found.</p>
`,
};
