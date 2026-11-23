import type { GlossaryTerm } from "../types";

export const termSchedule13G: GlossaryTerm = {
  slug: "schedule-13g",
  term: "Schedule 13G",
  title: "Schedule 13G — Passive 5% Ownership Disclosure Explained",
  shortDefinition:
    "Schedule 13G is a simplified SEC filing used by passive investors who acquire more than 5% of a public company's shares without any intent to influence or control the company.",
  metaDescription:
    "What is a Schedule 13G? Learn how passive ownership disclosures work, who files them, and how they differ from the activist-focused Schedule 13D.",
  wordCount: 2000,
  category: "SEC Filings",
  tags: ["sec-filing", "beneficial-ownership", "passive-investor", "edgar", "institutional-investor"],
  relatedSlugs: ["schedule-13d", "beneficial-owner", "13f-filing", "form-4", "sec-edgar"],
  relatedTerms: ["schedule-13d", "beneficial-owner", "13f-filing", "form-4", "sec-edgar"],
  faq: [
    {
      question: "Who is eligible to file a Schedule 13G instead of a 13D?",
      answer:
        "Three categories of investors can file a 13G. Qualified institutional investors (QIIs) — including registered investment advisers, banks, broker-dealers, insurance companies, and registered investment companies — can file if they acquired shares in the ordinary course of business without the purpose of influencing control. Passive investors who own less than 20% and certify they did not acquire shares with any control intent can also file. Exempt investors who held more than 5% at the time the company went public (or the class was registered) fall into the third category. If any filer's intent changes to active engagement, they must convert to a 13D within 10 days.",
    },
    {
      question: "When are Schedule 13G filings due?",
      answer:
        "Deadlines depend on the filer category. After SEC amendments effective February 2024, qualified institutional investors must file within 5 business days of crossing 5% and within 5 business days of any month-end where their position changes by more than 5 percentage points. Passive investors must file within 5 business days of crossing 5%. All 13G filers must file an annual amendment within 45 days of year-end if any material changes occurred. These are significantly tighter than the previous deadlines, which allowed up to 45 days for initial filings.",
    },
    {
      question: "Should investors pay attention to 13G filings?",
      answer:
        "Yes, but differently than 13D filings. A 13G from a top-tier institutional investor — BlackRock, Vanguard, Fidelity — signals that professional money managers see value in the stock. It also reveals institutional ownership concentration, which affects liquidity and volatility. However, since 13G filers are passive by definition, the filing does not signal any imminent corporate action. The more important signal is when a 13G filer converts to a 13D — that means a previously passive investor has decided to get active.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Schedule 13G is the passive counterpart to the activist-focused Schedule 13D. Both filings serve the same fundamental purpose — disclosing when someone accumulates more than 5% ownership of a public company's shares — but they reflect very different investor intentions. While a 13D signals that an investor plans to influence the company, a 13G tells the market that a large position exists but the holder intends to remain a passive observer. For investors analyzing ownership structures and institutional interest, 13G filings are an important data source.</p>

<h2 id="purpose-of-13g">Purpose and Legal Basis</h2>

<p>The Schedule 13G exists because Congress and the SEC recognized that not every large shareholder is an activist. When a Vanguard index fund crosses 5% ownership in a company, it has no intention of demanding board seats or pushing for a sale — the position is a mechanical consequence of tracking an index. Requiring such investors to file the lengthy and detailed Schedule 13D would impose unnecessary costs without providing meaningful information to the market.</p>

<p>Section 13(g) of the Securities Exchange Act of 1934 and the related SEC rules allow certain categories of investors to use the abbreviated Schedule 13G, which requires significantly less disclosure than the 13D. The trade-off is clear: in exchange for a simpler filing, the investor certifies that they have no activist intentions.</p>

<h2 id="filer-categories">Three Categories of 13G Filers</h2>

<h3>Qualified Institutional Investors (QIIs)</h3>

<p>This is the largest category by far. QIIs include registered investment advisers, registered investment companies (mutual funds), banks, insurance companies, broker-dealers, pension funds, and certain other institutional entities. To qualify, the investor must have acquired the securities in the ordinary course of business and not with the purpose or effect of changing or influencing control of the company. BlackRock, Vanguard, State Street, and Fidelity are among the most frequent 13G filers in this category.</p>

<h3>Passive Investors</h3>

<p>Non-institutional investors who own between 5% and 20% of a company's shares can file a 13G if they certify that they did not acquire and do not hold the shares with any purpose or effect of changing or influencing the control of the company. If a passive investor's stake exceeds 20%, they must file a 13D regardless of their stated intent — the SEC considers a 20% position inherently influential.</p>

<h3>Exempt Investors</h3>

<p>Investors who held more than 5% at the time the company first registered its securities (or when a class of securities was first registered) can file a 13G. This category is relatively uncommon but covers situations like founders who held pre-IPO stakes that exceeded 5% when the company went public.</p>

<h2 id="what-13g-contains">What the Schedule 13G Contains</h2>

<p>The 13G is significantly shorter than the 13D — typically 2 to 5 pages rather than 10 to 20. It requires disclosure of the filer's identity, the number of shares beneficially owned, the percentage of the class, and whether the filer has sole or shared voting and dispositive power over the shares. Crucially, the 13G does not require the detailed "purpose of transaction" section that makes the 13D so informative. The absence of that section is itself the point — the filer is declaring they have no activist purpose.</p>

<h2 id="filing-deadlines">Filing Deadlines and Amendments</h2>

<p>The SEC substantially tightened 13G filing deadlines in amendments that took effect in February 2024. Under the previous rules, qualified institutional investors could wait up to 45 days after the calendar year-end to file their initial 13G. The new rules require filing within 5 business days of crossing the 5% threshold.</p>

<p>Annual amendments are due within 45 days of December 31 for any filer whose information has materially changed since the last filing. Additionally, QIIs must file amendments within 5 business days of month-end if their ownership has increased or decreased by more than 5 percentage points from the last filing. Passive investors must amend promptly upon reaching 10% and again upon each subsequent 5-percentage-point change.</p>

<p>These tighter deadlines mean that 13G data is significantly more current than it was under the old rules, making it more useful for investors tracking institutional ownership changes.</p>

<h2 id="13g-to-13d-conversion">The 13G-to-13D Conversion</h2>

<p>One of the most important signals in ownership filings is when a 13G filer converts to a 13D. This conversion means the investor has decided to move from passive holding to active engagement. It might mean they want board seats, are pushing for a strategic review, or are building a position ahead of a proxy fight.</p>

<p>The conversion must happen within 10 business days of the change in intent. Because the market recognizes the significance, a 13G-to-13D conversion often produces a stock price reaction similar to — though usually smaller than — an initial 13D filing. Investors monitoring a company's ownership filings should set alerts for this event.</p>

<h2 id="institutional-ownership">What 13G Filings Reveal About Institutional Ownership</h2>

<p>While individual 13G filings are less dramatic than 13Ds, the aggregate picture they paint is valuable. By tracking all 13G filings for a given company, investors can assess institutional ownership concentration — how many large funds hold significant stakes, whether they are increasing or decreasing their positions, and whether the shareholder base is dominated by passive index funds or active managers.</p>

<p>High institutional ownership generally improves governance and liquidity but can increase volatility during market stress if multiple institutions sell simultaneously. Low institutional ownership in a small-cap stock might indicate that the company is under-followed — a potential opportunity for investors who do their own research.</p>

<h2 id="13g-vs-13f">Schedule 13G vs. 13F Filing</h2>

<p>Both filings reveal institutional ownership, but they serve different purposes. The 13G is triggered by crossing the 5% threshold in a specific company and must be filed by any beneficial owner — institutional or individual. The 13F is a quarterly portfolio disclosure required of institutional investment managers with $100 million or more in assets. The 13F shows the full portfolio but only on a quarterly basis with a 45-day lag. The 13G provides more timely data but only for positions above 5%.</p>

<h2 id="where-to-find-13g">Where to Find Schedule 13G Filings</h2>

<p>All Schedule 13G filings are available on <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=SC+13G&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>. On Brefyr, institutional ownership data from 13G filings is integrated into company profiles, showing which major institutions hold significant stakes and how those positions have changed over time — providing the ownership context that helps investors understand who else is invested alongside them.</p>
`,
};
