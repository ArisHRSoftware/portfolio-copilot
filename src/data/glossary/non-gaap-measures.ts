import type { GlossaryTerm } from "../types";

export const termNonGaapMeasures: GlossaryTerm = {
  slug: "non-gaap-measures",
  term: "Non-GAAP Financial Measures",
  title: "Non-GAAP Measures — The Adjusted Numbers Companies Report Alongside Official Results",
  shortDefinition:
    "Non-GAAP financial measures are financial metrics that exclude or include items not required or permitted under GAAP, such as adjusted earnings, adjusted EBITDA, or free cash flow, presented alongside GAAP results to provide management's view of core operating performance.",
  metaDescription:
    "What are non-GAAP financial measures? Why companies report adjusted numbers, SEC rules for non-GAAP disclosure, common adjustments, and how investors should evaluate them.",
  wordCount: 900,
  category: "Accounting & Audit",
  tags: ["non-gaap", "adjusted-earnings", "ebitda", "financial-reporting", "sec-regulation"],
  relatedSlugs: ["gaap", "adjusted-earnings", "ebitda", "pro-forma", "free-cash-flow"],
  relatedTerms: ["gaap", "adjusted-earnings", "ebitda", "pro-forma", "free-cash-flow"],
  faq: [
    {
      question: "Are non-GAAP measures misleading?",
      answer:
        "They can be. The SEC has repeatedly expressed concern that non-GAAP measures may mislead investors by excluding real, recurring expenses. For example, many tech companies exclude stock-based compensation from adjusted earnings — but stock compensation is a real cost (it dilutes shareholders). Companies that consistently exclude 'non-recurring' restructuring charges year after year are arguably excluding a recurring expense. The key is whether the adjustments are transparent (clearly disclosed), consistent (the same items are excluded each period), and reasonable (the excluded items are genuinely unusual). Investors should always start with GAAP and then evaluate whether non-GAAP adjustments add insight.",
    },
    {
      question: "What are the SEC's rules for non-GAAP measures?",
      answer:
        "Regulation G and Item 10(e) of Regulation S-K require that any non-GAAP measure: (1) be accompanied by the most directly comparable GAAP measure, (2) include a quantitative reconciliation showing each adjustment and its amount, (3) not be presented with greater prominence than the GAAP measure, and (4) not exclude charges that require cash settlement. The SEC also prohibits 'individually tailored recognition and measurement' — companies cannot create non-GAAP measures that make specific transactions appear more favorable than GAAP would show. The SEC has issued comment letters to hundreds of companies for non-GAAP disclosure deficiencies.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Non-GAAP financial measures are performance metrics that companies report alongside their official GAAP financial results. These adjusted metrics exclude (or include) certain items that management believes obscure the company's underlying operating performance. Common exclusions include stock-based compensation, amortization of acquired intangible assets, restructuring charges, acquisition-related costs, impairment charges, and litigation settlements. The resulting "adjusted" figures are intended to give investors a clearer view of recurring, core business performance — but they can also be used to present a rosier picture than GAAP results support.</p>

<h2 id="common-measures">Common Non-GAAP Measures</h2>

<p><strong>Adjusted EBITDA.</strong> EBITDA (earnings before interest, taxes, depreciation, and amortization) adjusted for additional items like stock-based compensation, restructuring, and one-time charges. Widely used by technology and growth companies because it focuses on cash-generating operating performance before capital structure and non-cash charges.</p>

<p><strong>Adjusted EPS (Earnings Per Share).</strong> GAAP EPS adjusted for items management considers non-recurring or non-operational. This is the most commonly reported non-GAAP measure and is what many analysts use for valuation and earnings estimates.</p>

<p><strong>Free cash flow (FCF).</strong> Operating cash flow minus capital expenditures. While FCF is not defined by GAAP, it is universally used and generally considered a legitimate performance measure because it represents the cash available for shareholder returns, debt reduction, and investments.</p>

<p><strong>Adjusted operating income/margin.</strong> Operating income excluding items like amortization of acquired intangibles, stock compensation, and restructuring charges. Used to compare operating efficiency across companies with different acquisition histories and compensation structures.</p>

<h2 id="why-companies-use">Why Companies Use Non-GAAP</h2>

<p><strong>Comparability.</strong> GAAP results can vary significantly based on factors unrelated to operating performance — acquisition accounting creates amortization charges, different compensation structures create different stock-based compensation expenses, and one-time events create charges that distort period-over-period trends. Non-GAAP adjustments can improve comparability across companies and time periods.</p>

<p><strong>Management perspective.</strong> Executives manage the business based on certain operating metrics that may not map directly to GAAP line items. Non-GAAP measures give investors the same metrics management uses to evaluate performance and make capital allocation decisions.</p>

<p><strong>Analyst alignment.</strong> Wall Street analysts typically forecast and value companies using non-GAAP metrics. Companies report non-GAAP measures to align with the metrics their analyst community uses, reducing confusion and enabling cleaner comparison of results to expectations.</p>

<h2 id="concerns">Legitimate Concerns</h2>

<p><strong>Cherry-picking adjustments.</strong> Some companies exclude expenses that are genuinely recurring — restructuring charges that appear every year, acquisition costs for serial acquirers, or stock compensation that is a standard part of the compensation program. These are not truly "non-recurring" and excluding them overstates performance.</p>

<p><strong>Magnitude of adjustments.</strong> When non-GAAP earnings are 50-100% higher than GAAP earnings, the adjustments are massive and warrant extreme scrutiny. If the bridge from GAAP to non-GAAP contains numerous large items, the non-GAAP figure may bear little resemblance to economic reality.</p>

<p><strong>Asymmetric adjustments.</strong> Some companies exclude losses but not gains — removing write-downs in bad years but keeping recoveries in good years. The SEC has flagged this practice as potentially misleading.</p>

<h2 id="evaluating">How to Evaluate Non-GAAP Measures</h2>

<p>Investors should follow a systematic approach. First, always start with GAAP — it is the audited, standardized measure. Second, examine the reconciliation table to understand each adjustment. Third, assess whether each adjustment is genuinely non-recurring (appeared once) or effectively recurring (appears every year). Fourth, compare the non-GAAP measure to GAAP over multiple years — if the gap is widening, the company may be adjusting away an increasing share of real expenses. Fifth, compare the company's adjustments to peers — if the company excludes stock compensation but peers do not, the comparison is not apples-to-apples.</p>

<h2 id="sec-filings">Non-GAAP Measures in SEC Filings</h2>

<ul>
<li><strong>8-K:</strong> Earnings releases (furnished under Item 2.02) are the primary vehicle for non-GAAP disclosures, including the GAAP-to-non-GAAP reconciliation tables.</li>
<li><strong>10-K and 10-Q:</strong> Some companies include non-GAAP measures in Management's Discussion and Analysis, with required reconciliations.</li>
<li><strong>S-1:</strong> IPO prospectuses may include non-GAAP measures, subject to SEC review and comment.</li>
</ul>

<p>Brefyr processes both GAAP financial data from 10-K/10-Q filings and non-GAAP measures from earnings releases, allowing investors to evaluate companies on both bases and assess whether non-GAAP adjustments are adding clarity or masking weakness.</p>
`,
};
