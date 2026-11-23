import type { GlossaryTerm } from "../types";

export const termVentureCapital: GlossaryTerm = {
  slug: "venture-capital",
  term: "Venture Capital",
  title: "Venture Capital — Funding the Next Generation of Innovative Companies",
  shortDefinition: "Venture capital (VC) is a form of private equity financing in which firms invest in early-stage, high-growth-potential startups and emerging companies in exchange for equity ownership, providing capital, mentorship, and industry connections to help these companies scale.",
  metaDescription: "What is venture capital? How VC funding rounds work, the stages from seed to IPO, how VC firms make money, and the connection between VC-backed companies and public markets.",
  wordCount: 850, category: "Investment Strategy", tags: ["venture-capital", "startup-funding", "early-stage", "ipo", "alternative-investment"],
  relatedSlugs: ["angel-investing", "private-equity", "accredited-investor", "regulation-d"], relatedTerms: ["angel-investing", "private-equity", "accredited-investor", "regulation-d"],
  faq: [{ question: "What is the difference between venture capital and private equity?", answer: "Venture capital invests in early-stage, high-growth companies (startups) with equity; private equity typically acquires controlling stakes in mature companies using leverage. VC investments are smaller ($1M-$100M per round), higher risk (most startups fail), and aim for 10-100x returns on the winners. PE investments are larger ($100M-$10B+), lower risk (buying profitable businesses), and aim for 2-3x returns. VC firms take minority stakes; PE firms take majority or full control. VC is about building new companies; PE is about optimizing existing ones." },
  { question: "How do VC-backed companies affect public market investors?", answer: "VC-backed companies enter public markets through IPOs, creating new investment opportunities. The S-1 filing reveals the company's history, pre-IPO investors, and financial trajectory. Post-IPO, lock-up expirations (when VC firms can sell their shares — typically 180 days after the IPO) often create selling pressure. 13F filings by VC firms with public holdings and Form 4 filings by VC-affiliated board members provide ongoing visibility into these major shareholders' actions." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Venture capital is the financial engine behind innovation in the technology, biotechnology, healthcare, and clean energy sectors. VC firms raise funds from institutional investors and deploy that capital into startups and early-stage companies with the potential for rapid growth and outsized returns. In exchange for capital, VC firms receive equity — typically preferred stock with liquidation preferences, anti-dilution protections, and board representation rights. The VC model is high risk (most portfolio companies fail) but can generate extraordinary returns when a portfolio company succeeds — a single investment in a company that becomes a major public corporation can return the entire fund multiple times over.</p>

<h2 id="funding-stages">Funding Stages</h2>

<p><strong>Pre-seed/seed.</strong> The earliest stage — the company may have little more than an idea, a founding team, and a prototype. Investment amounts range from $100,000 to $3 million. Investors include angel investors, seed-stage VC funds, and accelerators.</p>

<p><strong>Series A.</strong> The company has demonstrated product-market fit — it has a working product and early customer traction. Series A rounds typically raise $5-20 million and fund the company's first significant scaling effort.</p>

<p><strong>Series B.</strong> The company has proven its business model and needs capital to scale operations, expand into new markets, or build out its team. Rounds of $20-50 million are typical.</p>

<p><strong>Series C and beyond.</strong> Later-stage funding for companies approaching profitability or preparing for an IPO. Rounds can exceed $100 million. At this stage, investors include growth equity firms, hedge funds, and sovereign wealth funds alongside traditional VC firms.</p>

<p><strong>Pre-IPO/crossover.</strong> The final private round before the company goes public. Crossover investors (funds that invest in both private and public companies) often participate at this stage, valuing the company close to its expected IPO price.</p>

<h2 id="how-vc-firms-work">How VC Firms Work</h2>

<p>VC firms raise funds from limited partners (pension funds, university endowments, foundations, family offices) with a typical fund life of 10 years. The firm invests in 20-40 companies per fund, knowing that the return distribution follows a power law: a small number of winners generate the majority of returns. The industry rule of thumb is that 50% of investments lose money, 30% return 1-3x, and 20% generate the outsized returns (10x+) that make the fund profitable overall.</p>

<p>Beyond capital, VC firms provide portfolio companies with strategic guidance, industry connections, recruiting assistance, follow-on funding, and board-level governance. The best VC firms add significant value beyond money — their involvement can be the difference between a startup that scales successfully and one that fails despite having a good product.</p>

<h2 id="vc-economics">VC Fund Economics</h2>

<p>VC firms charge a management fee (typically 2% of committed capital) and carried interest (typically 20% of profits above a hurdle rate). A $500 million fund generates $10 million annually in management fees. If the fund returns $1.5 billion (3x), the $1 billion in profit is split: $200 million to the GP as carried interest and $800 million to LPs. The carried interest mechanism aligns VC firm incentives with LP returns — the really lucrative compensation comes from performance, not fees.</p>

<h2 id="sec-filings">Venture Capital in SEC Filings</h2>

<ul>
<li><strong>S-1:</strong> IPO prospectuses for VC-backed companies list all pre-IPO investors, their ownership stakes, and the terms of their preferred stock.</li>
<li><strong>Form D:</strong> Filed for each private funding round under Regulation D, disclosing the amount raised and the exemption used.</li>
<li><strong>SC 13D/13G:</strong> Filed by VC firms that retain 5%+ ownership in portfolio companies after the IPO.</li>
<li><strong>Form 4:</strong> VC-affiliated board members file insider transaction reports when they buy or sell shares.</li>
</ul>

<p>Brefyr tracks S-1 filings from VC-backed IPOs, Form D private placement notices, and post-IPO insider transaction reports, helping investors understand the VC shareholder base and potential selling pressure at newly public companies.</p>
`,
};
