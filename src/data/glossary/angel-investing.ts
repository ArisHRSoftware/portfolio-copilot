import type { GlossaryTerm } from "../types";

export const termAngelInvesting: GlossaryTerm = {
  slug: "angel-investing",
  term: "Angel Investing",
  title: "Angel Investing — High-Net-Worth Individuals Funding Startups at the Earliest Stage",
  shortDefinition: "Angel investing is the practice of high-net-worth individuals providing seed capital to early-stage startups in exchange for equity or convertible debt, typically at the pre-seed or seed stage before venture capital firms get involved.",
  metaDescription: "What is angel investing? How angel investors fund startups, typical deal structures, risks and returns, angel groups and syndicates, and the connection to public markets.",
  wordCount: 850, category: "Investment Strategy", tags: ["angel-investing", "seed-funding", "startup", "accredited-investor", "early-stage"],
  relatedSlugs: ["venture-capital", "accredited-investor", "regulation-d", "regulation-cf"], relatedTerms: ["venture-capital", "accredited-investor", "regulation-d", "regulation-cf"],
  faq: [{ question: "How much do angel investors typically invest?", answer: "Individual angel investments typically range from $5,000 to $500,000 per deal, with most falling in the $25,000-$100,000 range. Angel groups and syndicates pool multiple angels' capital to make larger investments of $250,000-$1 million. The total angel investment market in the U.S. is estimated at $20-25 billion annually across approximately 60,000-70,000 deals. Angels are typically the first outside investors in a company, investing at the pre-seed or seed stage when the company's valuation is lowest — and the risk is highest." },
  { question: "What returns do angel investors typically earn?", answer: "Angel investing follows a power law distribution similar to venture capital. Studies show that the average angel investment returns approximately 2.5x over 3-5 years, but this average masks enormous variance. Research from the Angel Capital Association indicates that roughly 50-70% of angel investments return less than the original capital (including total losses), while 5-10% generate returns of 10x or more. The winners must compensate for the losers, which is why experienced angels build portfolios of 10-20+ investments to increase their chances of capturing an outsized winner." }],
  lastUpdated: "2026-11-18",
  body: `
<p>Angel investors are wealthy individuals who provide capital to startup companies at the earliest stages of development — often before the company has significant revenue, customers, or even a finished product. The term "angel" originated in Broadway theater, where wealthy patrons financed productions, and was adopted by the startup ecosystem to describe individuals who fund high-risk, early-stage ventures that professional investors consider too risky or too small. Angel investing fills a critical gap in the startup funding ecosystem between self-funding (bootstrapping) and institutional venture capital, providing the capital that transforms ideas into companies.</p>

<h2 id="who-are-angels">Who Are Angel Investors</h2>

<p>Angel investors are typically accredited investors — individuals with income exceeding $200,000 annually or net worth exceeding $1 million (excluding primary residence). Many are successful entrepreneurs who have sold their own companies and reinvest their wealth and expertise into the next generation of startups. Others are executives, professionals, or inheritors with the financial capacity to absorb losses and the interest in participating in early-stage innovation. The defining characteristics are personal risk tolerance, relevant expertise or networks, and willingness to invest at the riskiest stage of a company's lifecycle.</p>

<h2 id="deal-structures">Common Deal Structures</h2>

<p><strong>Priced equity round.</strong> The angel purchases shares (usually preferred stock) at a negotiated valuation. For example, an angel invests $100,000 for 10% of the company at a $1 million pre-money valuation. This is straightforward but requires the parties to agree on a valuation — which is challenging for a company with no revenue.</p>

<p><strong>Convertible note.</strong> The angel lends money to the startup, and the note converts to equity at the next priced funding round (typically the Series A) at a discount to the Series A price (usually 15-25%) and/or subject to a valuation cap. This defers the valuation question to a time when the company has more data.</p>

<p><strong>SAFE (Simple Agreement for Future Equity).</strong> Created by Y Combinator, a SAFE is similar to a convertible note but is not debt — it has no interest rate, maturity date, or repayment obligation. The SAFE converts to equity at the next priced round, subject to a valuation cap and/or discount. SAFEs have become the dominant early-stage investment instrument due to their simplicity.</p>

<h2 id="angel-groups">Angel Groups and Syndicates</h2>

<p>Individual angels increasingly invest through organized groups and online syndicates rather than acting alone. Angel groups (like the Tech Coast Angels, New York Angels, or Golden Seeds) pool capital from multiple members, share due diligence, and invest collectively — typically deploying $250,000-$1 million per deal. Online platforms like AngelList, SeedInvest, and Republic allow lead investors to organize syndicates that co-invest alongside them, democratizing access to angel-stage deals.</p>

<h2 id="risks-and-returns">Risks and Portfolio Approach</h2>

<p>Angel investing is among the riskiest investment activities available to individuals. The majority of startups fail — estimates range from 50-90% depending on stage and sector. The capital is illiquid for years (there is no secondary market for most angel investments), and exits take 5-10+ years. Unlike public market investments, angels cannot cut their losses by selling — they are locked in until the company either succeeds (acquisition or IPO) or fails.</p>

<p>Experienced angels mitigate this risk through portfolio diversification — investing smaller amounts across 15-25+ companies rather than concentrating in a few. This increases the probability of capturing an outsized winner that can compensate for the many losses. The optimal angel portfolio size, according to research, is at least 20 investments to have a reasonable probability of including a 10x+ return.</p>

<h2 id="sec-filings">Angel Investing in SEC Filings</h2>

<ul>
<li><strong>Form D:</strong> Filed for Regulation D offerings, including angel rounds. Discloses the amount raised and type of exemption used.</li>
<li><strong>S-1:</strong> When angel-backed companies eventually IPO, the S-1 discloses early investors, their ownership, and conversion terms.</li>
<li><strong>Regulation CF:</strong> Some early-stage companies now raise through SEC-regulated equity crowdfunding platforms, making angel-stage investing accessible to non-accredited investors (with investment limits).</li>
</ul>

<p>Brefyr monitors S-1 filings from companies with angel investor backgrounds and Form D notices of early-stage capital raises, providing context on the shareholder base and capitalization history of companies entering the public markets.</p>
`,
};
