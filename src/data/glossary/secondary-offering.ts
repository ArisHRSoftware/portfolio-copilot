import type { GlossaryTerm } from "../types";

export const termSecondaryOffering: GlossaryTerm = {
  slug: "secondary-offering",
  term: "Secondary Offering",
  title: "Secondary Offering — When Companies or Insiders Sell Additional Stock",
  shortDefinition:
    "A secondary offering is the sale of stock by a company (follow-on offering) or its existing shareholders after the initial public offering, typically conducted through a registered public offering at a fixed price.",
  metaDescription:
    "What is a secondary offering? Learn the difference between primary and secondary offerings, follow-on offerings, the dilutive impact, pricing mechanics, and how to find secondary offering filings.",
  wordCount: 540,
  category: "Market Structure",
  tags: ["secondary-offering", "follow-on", "dilution", "capital-raising", "stock-offering"],
  relatedSlugs: ["ipo", "shelf-registration", "at-the-market-offering", "dilution", "direct-listing"],
  relatedTerms: ["ipo", "shelf-registration", "at-the-market-offering", "dilution", "direct-listing"],
  faq: [
    {
      question: "What is the difference between a primary and a secondary offering?",
      answer:
        "In a primary offering (also called a follow-on offering), the company issues and sells new shares, receiving the proceeds. This increases the total share count and dilutes existing shareholders but adds cash to the company's balance sheet. In a secondary offering, existing shareholders (insiders, early investors, venture capital firms) sell their shares to the public. The company receives no proceeds — the money goes to the selling shareholders. The share count does not increase, but the increased supply of sellable shares can still depress the price. Many offerings combine both: the company issues some new shares and existing shareholders sell some of their holdings.",
    },
    {
      question: "Why do secondary offerings usually price at a discount?",
      answer:
        "To attract enough buyers for a large block of shares sold all at once, the offering price is typically set 2-7% below the previous day's closing price. Institutional buyers expect this discount as compensation for absorbing a large supply of shares and for the commitment to hold (many offerings have lock-up provisions). The discount also accounts for the dilutive impact of new shares. Overnight offerings (priced after the close for delivery the next morning) are the most common structure and typically price at a 3-5% discount.",
    },
    {
      question: "How does a secondary offering differ from an at-the-market offering?",
      answer:
        "A secondary offering is a discrete, one-time event: a fixed number of shares at a fixed price, typically with underwriter support, completed in a day or two. An at-the-market offering is a continuous program where shares are sold gradually at prevailing market prices over weeks or months. Secondary offerings create an immediate, visible dilution event (the stock often drops on the announcement). ATMs create gradual dilution that may not be noticed until quarterly filings reveal the increased share count. Secondary offerings raise large amounts quickly; ATMs raise money slowly but with less market impact.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>After a company goes public through an <a href="/glossary/ipo">IPO</a>, it may need to raise additional capital or its early investors may want to sell their stakes. Secondary offerings serve both purposes. They are one of the most common — and most closely watched — events in public markets because they directly affect the supply of available shares and, often, the stock price.</p>

<h2 id="types">Types of Secondary Offerings</h2>

<p><strong>Follow-on offering (primary):</strong> The company creates and sells new shares, increasing the total outstanding share count. This is <a href="/glossary/dilution">dilutive</a> — existing shareholders own a smaller percentage of the company after the offering. The company receives the proceeds.</p>

<p><strong>Secondary sale (pure secondary):</strong> Existing shareholders sell their shares to the public. No new shares are created. The company receives no proceeds. Common sellers include venture capital firms, private equity funds, and insiders whose lock-up periods have expired.</p>

<p><strong>Mixed offering:</strong> The most common structure. The company issues some new shares (raising capital) and existing shareholders sell some of their shares (gaining liquidity). The prospectus supplement details how many shares come from each source.</p>

<h2 id="process">The Offering Process</h2>

<ol>
<li><strong>Announcement.</strong> The company files a prospectus supplement (Form 424B) under its existing <a href="/glossary/shelf-registration">shelf registration</a>, or files a new S-1 registration if no shelf is active. The filing discloses the number of shares, the selling shareholders (if any), and the underwriters.</li>
<li><strong>Marketing (book-building).</strong> The underwriters contact institutional investors over 1-2 days (or overnight for accelerated offerings). Investors indicate interest at various prices.</li>
<li><strong>Pricing.</strong> The offering price is set after the close of trading, typically at a 2-7% discount to the closing price. The discount compensates buyers for the risk of absorbing a large block.</li>
<li><strong>Settlement.</strong> Shares are delivered and proceeds are distributed within 1-2 business days.</li>
</ol>

<h2 id="market-impact">Market Impact</h2>

<p>Secondary offerings typically cause the stock to decline, both on the announcement and at pricing. The decline reflects several forces:</p>

<ul>
<li><strong>Supply increase.</strong> More shares competing for the same pool of investor capital means each share is worth less.</li>
<li><strong>Dilution (for primary offerings).</strong> New shares reduce earnings per share, book value per share, and every other per-share metric. Even if the company invests the proceeds productively, the dilution is immediate while the returns take time to materialize.</li>
<li><strong>Signal value.</strong> When insiders sell in a secondary, it may signal that they believe the stock is fully valued. When the company raises capital, it may signal that internal cash generation is insufficient to fund operations — a bearish indicator for cash-burning companies.</li>
<li><strong>Overhang.</strong> Even after the offering completes, the market knows that selling shareholders may have additional shares to sell in future offerings. This "overhang" creates persistent downward pressure.</li>
</ul>

<h2 id="evaluating-offerings">Evaluating Secondary Offerings</h2>

<p>Not all secondary offerings are negative. Key questions for investors:</p>

<ul>
<li><strong>Who is selling?</strong> Venture capital firms selling after a lock-up expiry is routine — they need to return capital to their investors. The CEO selling 50% of their stake is a stronger bearish signal.</li>
<li><strong>What is the use of proceeds?</strong> "To fund our $2 billion acquisition of XYZ" is constructive. "General corporate purposes" is vague and potentially concerning. "To repay outstanding debt" may be neutral or positive depending on the terms.</li>
<li><strong>What is the dilution?</strong> A 5% increase in share count is modest. A 30% increase for a money-losing company is severe. Calculate the new fully diluted share count and divide the company's enterprise value by the new count to assess whether the stock is still attractive.</li>
</ul>

<p>Secondary offering filings (424B prospectus supplements) are among the most actionable SEC filings available. They appear on <a href="/glossary/sec-edgar">EDGAR</a> within hours of announcement, and tracking them through Brefyr enables investors to react quickly — either by selling before the offering prices at a discount, or by buying the dip if the company's fundamentals remain strong and the dilution is manageable.</p>
`,
};
