import type { GlossaryTerm } from "../types";

export const termSpinOff: GlossaryTerm = {
  slug: "spin-off",
  term: "Spin-Off",
  title: "Spin-Off — When Companies Separate a Business Unit Into a New Public Company",
  shortDefinition:
    "A spin-off is a corporate action in which a company distributes shares of a subsidiary or business unit to its existing shareholders, creating a new independent publicly traded company.",
  metaDescription:
    "What is a corporate spin-off? How spin-offs work, why companies spin off divisions, historical performance of spin-off stocks, and how to track them in SEC filings.",
  wordCount: 1050,
  category: "Corporate Actions",
  tags: ["spin-off", "corporate-action", "divestiture", "restructuring", "shareholder"],
  relatedSlugs: ["carve-out", "merger", "acquisition", "8-k-filing", "special-dividend"],
  relatedTerms: ["carve-out", "merger", "acquisition", "8-k-filing", "special-dividend"],
  faq: [
    {
      question: "Are spin-offs good for shareholders?",
      answer:
        "Historically, yes. Academic research consistently shows that both the parent company and the spun-off entity tend to outperform the broader market in the 1-3 years following the spin-off. The theory is that conglomerates trade at a discount because the market has difficulty valuing diverse business lines together. Once separated, each company attracts investors and analysts who specialize in that industry, leading to more efficient pricing and focused management. However, not every spin-off succeeds — the specific business quality and management matter enormously.",
    },
    {
      question: "How are spin-off shares taxed?",
      answer:
        "Most spin-offs are structured as tax-free distributions under Section 355 of the Internal Revenue Code. Shareholders do not owe tax on the spin-off shares received. Instead, the original cost basis in the parent company is allocated between the parent and the spin-off based on their relative market values after the transaction. When you eventually sell either stock, your gain or loss is calculated from this allocated basis. The company provides the allocation percentages in the spin-off documentation.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>A spin-off occurs when a parent company distributes shares of a subsidiary or division to its existing shareholders as a pro rata dividend, creating a new standalone public company. If you own 100 shares of the parent company and the spin-off distributes one share of the new company for every five parent shares, you receive 20 shares of the new company without paying anything. The parent company's ownership stake in the subsidiary drops to zero (in a full spin-off), and the new entity begins trading independently on a stock exchange.</p>

<h2 id="why-companies-spin-off">Why Companies Execute Spin-Offs</h2>

<p><strong>Conglomerate discount.</strong> Diversified companies often trade at a discount to the sum of their parts because investors and analysts find it difficult to value multiple disparate business lines under one umbrella. A technology company with a healthcare division may attract neither pure tech investors nor pure healthcare investors effectively. Separating the businesses allows each to be valued independently by specialists.</p>

<p><strong>Strategic focus.</strong> When a subsidiary has different growth characteristics, capital needs, or market dynamics than the parent, managing both under one roof creates competing priorities. A slow-growth, cash-generating parent may underinvest in a high-growth subsidiary — or vice versa. Separation allows each management team to pursue its own strategy without internal resource competition.</p>

<p><strong>Regulatory compliance.</strong> Sometimes regulatory changes make combined ownership problematic. Financial services companies have spun off divisions to comply with regulatory requirements. Media companies have separated content and distribution businesses in response to antitrust pressure.</p>

<p><strong>Unlocking shareholder value.</strong> If management believes the market undervalues a subsidiary, a spin-off forces the market to assign an independent value. This is the most commonly cited reason in proxy statements. The parent company retains no ownership, so there is no ongoing conflict of interest.</p>

<h2 id="how-spin-offs-work">The Spin-Off Process</h2>

<p>A spin-off is a multi-month process involving substantial regulatory and legal steps:</p>

<p><strong>Board approval.</strong> The parent's board of directors approves the transaction, often after months of strategic review by investment bankers and lawyers.</p>

<p><strong>SEC filing.</strong> The subsidiary files a Form 10 registration statement with the SEC, containing audited financial statements, management's discussion and analysis, risk factors, and all the information required of a new public company. The Form 10 goes through SEC review and comment cycles.</p>

<p><strong>IRS ruling.</strong> To ensure tax-free treatment, the company typically obtains a private letter ruling from the IRS confirming that the spin-off qualifies under Section 355 of the Internal Revenue Code.</p>

<p><strong>Distribution.</strong> On the distribution date, shares of the new company are credited to existing shareholders' brokerage accounts. No cash changes hands. The new stock begins trading on the designated exchange — sometimes on a "when-issued" basis before the official separation date.</p>

<p><strong>Cost basis allocation.</strong> The parent provides guidance on how shareholders should allocate their cost basis between the parent and spin-off shares, based on the relative market values on the distribution date.</p>

<h2 id="performance">Historical Performance of Spin-Offs</h2>

<p>Spin-offs are one of the most studied corporate actions in finance, and the research is remarkably consistent. Studies by academics and practitioners — including Joel Greenblatt's well-known analysis — show that spun-off companies outperform the S&P 500 by an average of 10-15% in the first year of independent trading, and both parents and spin-offs outperform over three years.</p>

<p>Several factors explain this outperformance. Institutional selling creates temporary price pressure — many index funds and large holders must sell spin-off shares if the new company falls outside their mandate (wrong size, wrong sector, no analyst coverage). This selling depresses the spin-off's price below fair value, creating opportunities for investors who do their homework. Additionally, newly independent management teams are often highly motivated, with compensation tied to the new company's stock price.</p>

<h2 id="sec-filings">Spin-Offs in SEC Filings</h2>

<ul>
<li><strong>Form 10:</strong> The spin-off's registration statement — the most detailed source, containing full standalone financial statements and risk factors for the new entity.</li>
<li><strong>8-K filing:</strong> The parent announces the spin-off, including the distribution ratio and timeline.</li>
<li><strong>DEF 14A:</strong> If shareholder approval is required, the proxy statement contains the board's rationale and analysis of the transaction.</li>
<li><strong>10-K:</strong> The parent's annual report discusses the spin-off in the notes to financial statements and may present restated financials excluding the spun-off segment.</li>
</ul>

<p>Brefyr tracks Form 10 filings and 8-K announcements, flagging spin-off events across 7,600+ SEC filers so investors can identify these historically value-creating events early in the process.</p>
`,
};
