import type { GlossaryTerm } from "../types";

export const termAtTheMarketOffering: GlossaryTerm = {
  slug: "at-the-market-offering",
  term: "At-the-Market Offering",
  title: "At-the-Market Offering (ATM) — Selling Stock Gradually Into the Open Market",
  shortDefinition:
    "An at-the-market offering (ATM) is a method of raising capital where a company sells newly issued shares directly into the open market at prevailing market prices through a designated broker-dealer, rather than through a fixed-price offering.",
  metaDescription:
    "What is an at-the-market offering? Learn how ATM programs work, why companies prefer them over traditional offerings, how to detect ATM dilution in SEC filings, and their impact on stock prices.",
  wordCount: 540,
  category: "Market Structure",
  tags: ["atm-offering", "capital-raising", "dilution", "shelf-registration", "secondary-offering"],
  relatedSlugs: ["shelf-registration", "secondary-offering", "dilution", "ipo", "sec-edgar"],
  relatedTerms: ["shelf-registration", "secondary-offering", "dilution", "ipo", "sec-edgar"],
  faq: [
    {
      question: "How is an ATM offering different from a traditional stock offering?",
      answer:
        "In a traditional offering, the company announces a fixed number of shares at a fixed price (usually at a discount to the market), sold all at once through underwriters. This creates an immediate, visible dilution event and typically causes the stock to drop on the announcement. An ATM offering sells shares gradually over days, weeks, or months at prevailing market prices. There is no fixed price, no bulk sale, and the dilution occurs slowly. The stock may decline gradually rather than experiencing a one-day shock. ATMs are more flexible but less transparent — investors may not know exactly how many shares have been sold until the company reports it.",
    },
    {
      question: "How can I tell if a company is actively selling shares through an ATM?",
      answer:
        "Watch for: (1) A prospectus supplement (Form 424B) establishing the ATM program — this is the initial disclosure. (2) Quarterly 10-Q or annual 10-K filings that report the number of shares sold and proceeds received under the ATM during the period. (3) Rising share count in quarterly earnings releases. (4) Unusual selling volume patterns — consistent low-level selling that is slightly above normal daily volume. Some companies voluntarily disclose ATM sales monthly or quarterly through 8-K filings, but this varies.",
    },
    {
      question: "Why do biotech and cannabis companies use ATMs so frequently?",
      answer:
        "These companies are typically pre-revenue or early-revenue businesses that burn cash on research, development, and operations. They need regular capital infusions but their stock prices are volatile and investor sentiment can shift rapidly. A traditional offering requires locking in a price at a specific moment — risky for volatile stocks. An ATM lets them sell shares on good days and pause on bad days, achieving a better average price. It also avoids the negative signal of repeated traditional offerings, which the market associates with desperation. ATMs have become the default capital-raising tool for small-cap biotech, cannabis, and technology companies.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>An at-the-market offering (ATM) is a capital-raising mechanism that lets a public company sell newly issued shares into the regular trading market at whatever price the stock happens to be trading. Unlike a traditional <a href="/glossary/secondary-offering">secondary offering</a> where shares are priced and sold in a single event, an ATM program runs continuously — the company instructs its broker-dealer agent to sell shares opportunistically, usually in small quantities that blend into normal trading volume.</p>

<h2 id="how-it-works">How ATM Programs Work</h2>

<p>An ATM program operates under an existing <a href="/glossary/shelf-registration">shelf registration</a> (Form S-3). The company files a prospectus supplement (Form 424B) establishing the ATM, naming the sales agent (typically a major investment bank), and specifying the maximum dollar amount of shares that can be sold.</p>

<p>Once established, the company controls the pace. It can instruct the agent to sell a specific number of shares on a given day, set minimum price thresholds (don't sell below $X), or pause the program entirely. The agent sells shares into the open market, blending the orders with normal trading activity. The sales look like ordinary sell orders — there is no announcement of each individual sale.</p>

<p>The company pays the agent a commission (typically 2-3% of gross proceeds), significantly less than the 5-7% underwriting fee on a traditional offering.</p>

<h2 id="advantages">Why Companies Use ATMs</h2>

<ul>
<li><strong>Price optimization.</strong> Sell on strong days, pause on weak days. Over weeks or months, the company can achieve a volume-weighted average sale price that is better than a single-day fixed-price offering would provide.</li>
<li><strong>Minimal market impact.</strong> Selling 50,000 shares per day across a stock that trades 2 million shares daily is invisible. A traditional offering that dumps 5 million shares at once at a discount creates an immediate price shock.</li>
<li><strong>No pricing risk.</strong> Traditional offerings are priced the night before trading, and the stock may gap down on the announcement. ATMs sell at the market, eliminating this risk.</li>
<li><strong>Flexibility.</strong> The company chooses when and how much to sell. If the stock price doubles, they can accelerate sales. If it drops, they can pause. If they close an acquisition and need capital, they can ramp up. If cash flow improves, they can halt the program entirely.</li>
</ul>

<h2 id="dilution-impact">The Dilution Impact</h2>

<p>ATMs create <a href="/glossary/dilution">dilution</a> — new shares increase the total share count, reducing each existing share's claim on earnings and assets. But the dilution is gradual and often difficult for retail investors to track in real time. The share count changes are reported in quarterly filings (10-Q and 10-K), and the cumulative ATM sales are disclosed in a table or footnote.</p>

<p>For example, a company with 100 million shares outstanding that sells 10 million shares through an ATM over six months has diluted shareholders by 10%. If the proceeds are invested in value-creating activities (R&D that leads to revenue, acquisitions that are accretive), the dilution may be justified. If the proceeds fund operating losses — covering payroll and rent for a money-losing business — the dilution destroys value.</p>

<h2 id="detecting-atm-activity">Detecting ATM Activity in SEC Filings</h2>

<p>The initial ATM establishment is disclosed in a prospectus supplement (424B filing). Look for language like "at the market offering" or "equity distribution agreement" in the filing title or summary. This filing specifies the maximum program size, the sales agent, and the commission rate.</p>

<p>Subsequent sales are reported in quarterly filings. The 10-Q's "Stockholders' Equity" section and the notes to the financial statements disclose the number of shares sold and proceeds received during the quarter. Compare the beginning and ending share count to quantify the dilution rate.</p>

<p>Some companies also file 8-K reports disclosing ATM sales, particularly when large amounts are raised in a short period. These 8-Ks are the most timely indicator of ATM activity, since quarterly filings lag by 40-60 days.</p>

<p>Investors using Brefyr to track SEC filings should flag companies with active ATM programs and monitor their dilution rate quarter over quarter. A company diluting shareholders by 15-20% per year through an ATM while insiders are simultaneously selling (visible on <a href="/glossary/form-4">Form 4</a>) raises serious red flags about whether the business can sustain itself without perpetual capital market access.</p>
`,
};
