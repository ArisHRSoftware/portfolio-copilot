import type { GlossaryTerm } from "../types";

export const termRegulationSK: GlossaryTerm = {
  slug: "regulation-sk",
  term: "Regulation S-K",
  title: "Regulation S-K — The Blueprint for Non-Financial Disclosure in SEC Filings",
  shortDefinition:
    "Regulation S-K is the SEC regulation that prescribes the requirements for non-financial disclosure in registration statements and periodic reports, covering business descriptions, risk factors, management discussion, executive compensation, and corporate governance.",
  metaDescription:
    "What is Regulation S-K? How it governs non-financial disclosures in 10-K, 10-Q, and S-1 filings, the key items investors should know, and how Reg S-K shapes the information companies must reveal.",
  wordCount: 900,
  category: "Regulatory & Compliance",
  tags: ["regulation-sk", "sec-regulation", "disclosure-requirements", "10-k-filing", "risk-factors"],
  relatedSlugs: ["regulation-sx", "10-k-filing", "10-q-filing", "sarbanes-oxley", "executive-compensation"],
  relatedTerms: ["regulation-sx", "10-k-filing", "10-q-filing", "sarbanes-oxley", "executive-compensation"],
  faq: [
    {
      question: "What is the difference between Regulation S-K and Regulation S-X?",
      answer:
        "Regulation S-K covers non-financial disclosures — the narrative and descriptive portions of SEC filings: business description, risk factors, management's discussion and analysis (MD&A), executive compensation, corporate governance, and legal proceedings. Regulation S-X covers financial statement requirements — the specific accounting rules for balance sheets, income statements, cash flow statements, and their notes. Together, they define the complete content requirements for SEC filings.",
    },
    {
      question: "Has Regulation S-K changed recently?",
      answer:
        "Yes. The SEC has modernized Reg S-K multiple times, with significant updates in 2020 that revised the business description (Item 101), legal proceedings (Item 103), and risk factor (Item 105) requirements. The updates encourage principles-based disclosure focused on material information rather than rigid checklists. The SEC also updated the human capital disclosure requirements, requiring companies to describe their human capital resources and measures that are material to their business. Climate-related disclosures have also been a focus of recent rulemaking.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Regulation S-K is the master regulation governing what non-financial information companies must include in their SEC filings. While Regulation S-X specifies the financial statement requirements (numbers, accounting policies, notes), Regulation S-K specifies everything else: the business description, risk factors, properties, legal proceedings, management's discussion and analysis, executive compensation, corporate governance, and dozens of other disclosure categories. Virtually every word in a 10-K filing that is not a financial statement or its footnotes is governed by Regulation S-K.</p>

<h2 id="key-items">Key Items in Regulation S-K</h2>

<p><strong>Item 101 — Description of Business.</strong> Requires a comprehensive overview of the company's business, including principal products and services, competitive conditions, customers, seasonality, working capital requirements, government regulation, and human capital resources. This is typically the first substantive section of a 10-K and gives investors a foundational understanding of what the company does and how it makes money.</p>

<p><strong>Item 103 — Legal Proceedings.</strong> Requires disclosure of material pending legal proceedings — lawsuits, regulatory actions, environmental claims, and investigations. Companies must describe the nature of the proceeding, the parties involved, the relief sought, and the potential financial impact. The 2020 amendments raised the quantitative threshold for environmental proceedings from $100,000 to $300,000.</p>

<p><strong>Item 105 — Risk Factors.</strong> One of the most valuable sections for investors. Companies must disclose the most significant factors that make an investment in the company risky or speculative. The 2020 amendments require companies to organize risk factors by relevant headings, place the most significant risks first, and include a summary if the risk factor section exceeds 15 pages. Generic boilerplate risk factors are discouraged.</p>

<p><strong>Item 303 — Management's Discussion and Analysis (MD&A).</strong> Requires management to discuss the company's financial condition, results of operations, and liquidity through the eyes of management. MD&A is intended to give investors management's perspective on the numbers — what drove revenue changes, why margins expanded or contracted, what capital expenditure plans are, and what known trends or uncertainties might affect future results. This is often the most informative narrative section for fundamental investors.</p>

<p><strong>Item 402 — Executive Compensation.</strong> One of the most detailed disclosure requirements. Specifies the Summary Compensation Table format, requires a Compensation Discussion and Analysis (CD&A) section explaining how and why the board made compensation decisions, and mandates disclosure of outstanding equity awards, retirement benefits, severance arrangements, and pay-versus-performance comparisons.</p>

<p><strong>Item 407 — Corporate Governance.</strong> Requires disclosure of director independence, board committee composition, nomination processes, board leadership structure, and the board's role in risk oversight. The audit committee must disclose its financial expert and its charter.</p>

<h2 id="principles-based">The Shift to Principles-Based Disclosure</h2>

<p>Historically, Regulation S-K was prescriptive — it specified exactly what to disclose in a checklist format. Recent modernization efforts have shifted toward principles-based disclosure, requiring companies to disclose information that is material to their specific business rather than following a one-size-fits-all checklist. This approach reduces disclosure of immaterial boilerplate while encouraging deeper, more company-specific analysis. For example, the revised Item 101 no longer requires disclosure of the number of employees as a specific line item — instead, companies must describe the human capital measures or objectives they focus on in managing the business, which may or may not include headcount.</p>

<h2 id="materiality">Materiality Standard</h2>

<p>Regulation S-K's disclosure requirements are generally subject to a materiality qualifier — companies must disclose information that would be important to a reasonable investor's decision-making. This prevents trivial disclosures from burying material ones, but it also gives companies discretion in determining what is material. This judgment call is a frequent source of SEC enforcement actions and private securities litigation.</p>

<h2 id="sec-filings">Regulation S-K in Practice</h2>

<ul>
<li><strong>10-K:</strong> The annual report is the primary Reg S-K disclosure vehicle, containing all major items.</li>
<li><strong>10-Q:</strong> Contains quarterly MD&A and updates to risk factors and legal proceedings.</li>
<li><strong>S-1/S-3:</strong> Registration statements incorporate Reg S-K items for IPO and secondary offering disclosures.</li>
<li><strong>DEF 14A:</strong> Proxy statements contain the executive compensation and corporate governance disclosures required by Items 402 and 407.</li>
</ul>

<p>Brefyr processes every section of 10-K and 10-Q filings governed by Regulation S-K, using AI to identify material changes in risk factors, business descriptions, and management analysis across reporting periods for 7,600+ companies.</p>
`,
};
