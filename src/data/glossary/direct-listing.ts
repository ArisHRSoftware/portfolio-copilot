import type { GlossaryTerm } from "../types";

export const termDirectListing: GlossaryTerm = {
  slug: "direct-listing",
  term: "Direct Listing",
  title: "Direct Listing — Going Public Without an IPO or Underwriters",
  shortDefinition:
    "A direct listing is a method of going public where a company lists its existing shares on a stock exchange without issuing new shares, without underwriters, and without a lock-up period — allowing existing shareholders to sell immediately at market-determined prices.",
  metaDescription:
    "What is a direct listing? Learn how direct listings differ from IPOs, the advantages (no dilution, no lock-up, no underwriter fees), notable examples like Spotify and Coinbase, and SEC filing requirements.",
  wordCount: 540,
  category: "Market Structure",
  tags: ["direct-listing", "going-public", "ipo-alternative", "no-dilution", "exchange-listing"],
  relatedSlugs: ["ipo", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  relatedTerms: ["ipo", "spac", "dutch-auction", "secondary-offering", "sec-edgar"],
  faq: [
    {
      question: "Why would a company choose a direct listing over an IPO?",
      answer:
        "Three primary reasons: (1) No underwriter fees — IPO underwriting commissions are typically 5-7% of the proceeds, which on a $1 billion offering is $50-70 million saved. (2) No dilution — in a traditional IPO, the company issues new shares, diluting existing shareholders. A direct listing does not create new shares (though the SEC now allows direct listings with primary share sales). (3) No lock-up — insiders can sell immediately, while IPO lock-ups typically restrict insider sales for 180 days. Direct listings are best suited for well-known companies that do not need to raise capital and want a fair, market-driven price discovery process.",
    },
    {
      question: "What are the disadvantages of a direct listing?",
      answer:
        "Direct listings lack several IPO advantages: (1) No guaranteed capital raise — if the company needs cash, a direct listing alone does not provide it (though regulations now permit primary sales in direct listings). (2) No price stabilization — IPO underwriters support the stock price in the first weeks through 'greenshoe' options and stabilization trading. Direct listings have no such support, potentially increasing first-day volatility. (3) No institutional roadshow — without underwriters marketing the stock, the company must generate investor awareness independently. (4) Less analyst coverage — IPO underwriters provide research coverage post-offering, while direct listings may launch with minimal analyst attention.",
    },
    {
      question: "Which notable companies have done direct listings?",
      answer:
        "Spotify (2018) was the first major direct listing on the NYSE, followed by Slack (2019). Both demonstrated the concept's viability for well-known consumer brands. Palantir (2020) and Coinbase (2021) followed on the NYSE. Roblox initially planned a direct listing but switched to one after the SEC approved primary share sales in direct listings. Warby Parker and Squarespace also used direct listings in 2021. The trend has been limited to companies with strong brand recognition and no urgent need for capital — the direct listing does not provide the marketing and distribution benefits of an underwritten IPO.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A direct listing is an alternative to the traditional <a href="/glossary/ipo">IPO</a> process. Instead of hiring underwriters, conducting a roadshow, and issuing new shares at a negotiated price, the company simply registers its existing shares with the SEC and lists them on an exchange. On the first day of trading, existing shareholders — founders, employees, early investors — can sell their shares directly to the public at whatever price the market determines through the exchange's opening auction.</p>

<h2 id="how-it-works">How a Direct Listing Works</h2>

<ol>
<li><strong>Register with the SEC.</strong> The company files a registration statement (Form S-1 or Form 8-A) with the SEC, disclosing its financials, business, risks, and ownership structure. This provides the same transparency as an IPO filing.</li>
<li><strong>Exchange approval.</strong> The company applies to list on the NYSE or Nasdaq, meeting the exchange's listing requirements (minimum market cap, financial standards, governance requirements).</li>
<li><strong>Financial advisor (not underwriter).</strong> The company hires a financial advisor to help with valuation analysis, investor education, and coordination with the exchange. Unlike an underwriter, the financial advisor does not buy or sell shares, guarantee a price, or provide price stabilization.</li>
<li><strong>Reference price.</strong> The exchange sets a "reference price" the evening before trading begins. This is a valuation estimate, not a guaranteed price — it serves as a starting point for the opening auction.</li>
<li><strong>Opening auction.</strong> On the first day of trading, the exchange runs an extended opening auction. Buy and sell orders accumulate, and the exchange determines the opening price that maximizes the number of shares matched. This auction can take 30-60 minutes, with the opening price potentially far from the reference price.</li>
<li><strong>Regular trading.</strong> After the opening auction, the stock trades normally on the exchange.</li>
</ol>

<h2 id="key-differences-from-ipo">Key Differences From an IPO</h2>

<table>
<thead><tr><th>Feature</th><th>Traditional IPO</th><th>Direct Listing</th></tr></thead>
<tbody>
<tr><td>New shares issued</td><td>Yes (company raises capital)</td><td>No (unless combined with primary offering)</td></tr>
<tr><td>Underwriter fees</td><td>5-7% of proceeds</td><td>None (advisory fees are lower)</td></tr>
<tr><td>Lock-up period</td><td>180 days typically</td><td>None — insiders can sell immediately</td></tr>
<tr><td>Price discovery</td><td>Underwriter sets price</td><td>Market determines price via auction</td></tr>
<tr><td>Price stabilization</td><td>Yes (greenshoe option)</td><td>None</td></tr>
<tr><td>Investor roadshow</td><td>Yes (1-2 weeks)</td><td>Investor education but no allocation</td></tr>
</tbody>
</table>

<h2 id="primary-direct-listing">Direct Listings With Capital Raises</h2>

<p>Originally, direct listings did not allow companies to sell new shares — only existing shareholders could sell. In 2020, the SEC approved NYSE's proposal to allow primary share sales in direct listings, meaning the company can raise capital while maintaining the other advantages (no underwriter, no lock-up, market-driven pricing). This hybrid makes direct listings viable for a broader range of companies, including those that need capital.</p>

<h2 id="price-discovery">Price Discovery and First-Day Volatility</h2>

<p>Without an underwriter managing the book and stabilizing the price, direct listings can experience significant first-day volatility. Spotify opened at $165.90 (above its $132 reference price) and closed at $149.01 — a 13% swing. Coinbase opened at $381 (versus a $250 reference price) and closed at $328, a range of over $60 within a single session.</p>

<p>This volatility is the cost of genuine price discovery. In an IPO, the underwriter artificially constrains the price within a narrow range through allocation and stabilization. A direct listing lets the market determine the price without these guardrails, which can be both more efficient and more volatile.</p>

<h2 id="sec-filings">SEC Filings for Direct Listings</h2>

<p>Direct listings require the same S-1 disclosure as an IPO. Post-listing, the company files the same periodic reports: <a href="/glossary/10k-filing">10-K</a> (annual), <a href="/glossary/10q-filing">10-Q</a> (quarterly), <a href="/glossary/8k-filing">8-K</a> (material events). <a href="/glossary/form-4">Form 4</a> filings are particularly important for direct listings because there is no lock-up — insider selling can begin immediately. Monitoring Form 4 filings through Brefyr in the weeks after a direct listing reveals whether insiders are aggressively liquidating or holding their positions, providing a real-time gauge of insider confidence at the company's debut as a public company.</p>
`,
};
