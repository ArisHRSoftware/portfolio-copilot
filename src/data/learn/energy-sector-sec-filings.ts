import type { LearnArticle } from "../types";

export const articleEnergySectorSecFilings: LearnArticle = {
  slug: "energy-sector-sec-filings",
  pillar: "sectors",
  title: "Energy Sector SEC Filing Guide: Oil, Gas, and Renewables",
  metaDescription:
    "How to analyze energy companies through SEC filings. Covers reserve disclosures, production metrics, capital allocation decisions, commodity price sensitivity, and the key differences between upstream, midstream, and downstream energy companies.",
  readingTime: 13,
  difficulty: "intermediate",
  wordCount: 1050,
  category: "Sector Deep Dives",
  tags: ["energy", "oil-gas", "renewables", "sector-analysis", "reserves", "intermediate"],
  relatedSlugs: [
    "how-to-analyze-technology-stocks",
    "healthcare-sector-sec-filings-guide",
    "financial-sector-analysis-guide",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Where do oil and gas companies disclose their reserves?",
      answer:
        "Proved reserves are disclosed annually in the supplemental information section of the 10-K, as required by SEC Regulation S-X Rule 4-10. This disclosure includes proved developed and proved undeveloped reserves by geographic area, production volumes, average prices received, and a standardized measure of discounted future net cash flows. The reserves are audited by independent petroleum engineers, whose report is referenced in the filing. Some companies also disclose probable and possible reserves voluntarily, but only proved reserves are required by the SEC.",
    },
    {
      question: "What is the difference between upstream, midstream, and downstream energy companies?",
      answer:
        "Upstream companies explore for and produce oil and gas — their revenue depends directly on commodity prices and production volumes. Midstream companies transport, store, and process hydrocarbons — they typically earn fee-based revenue that is less sensitive to commodity prices. Downstream companies refine crude oil into products (gasoline, diesel, jet fuel) and sell them — their profitability depends on the crack spread (difference between crude oil cost and refined product prices). Each subsector has different key metrics and different risk factors in SEC filings.",
    },
    {
      question: "How do commodity prices affect energy SEC filings?",
      answer:
        "Commodity prices affect energy filings in multiple ways. Revenue directly rises and falls with prices. Reserve estimates change because the SEC requires proved reserves to be calculated using trailing 12-month average prices — lower prices mean fewer reserves are economic to produce. Impairment charges may be triggered if asset carrying values exceed their estimated future cash flows at current prices. Hedging disclosures in the footnotes show how much of future production is locked in at fixed prices, providing earnings visibility.",
    },
    {
      question: "What should renewable energy investors focus on in SEC filings?",
      answer:
        "For renewable energy companies, focus on power purchase agreement (PPA) terms (contract length, price per MWh, escalation clauses), capacity factors (actual energy production versus theoretical maximum), and the distinction between owned versus contracted capacity. The tax equity financing structure — common for solar and wind projects — appears in the footnotes and can be complex. Track government subsidy and tax credit dependencies in the risk factors, as changes to the Investment Tax Credit or Production Tax Credit directly impact project economics.",
    },
  ],
  lastUpdated: "2026-11-13",
  body: `
<p>Energy companies are unlike any other sector in the public markets. Their value depends on reserves buried underground, commodity prices they don't control, capital-intensive infrastructure that takes years to build, and regulatory environments that shift with political cycles. SEC filings for energy companies contain disclosures you won't find in any other sector — proved reserve estimates, production decline curves, hedging positions, and environmental remediation liabilities.</p>

<p>This guide breaks down how to read energy company filings across the three major subsectors: upstream (exploration and production), midstream (transportation and processing), and downstream (refining and marketing), plus the growing renewable energy subsector.</p>

<h2 id="upstream-analysis">Upstream (E&P) Companies: Reserves and Production</h2>

<p>Exploration and production companies are valued primarily on their oil and gas reserves — the estimated quantities of hydrocarbons that are economically recoverable. The SEC requires detailed reserve disclosures in the 10-K that are among the most specialized disclosures in public company filings.</p>

<h3>Proved Reserve Disclosures</h3>

<p>The supplemental oil and gas information in the 10-K (required by FASB ASC 932) discloses:</p>

<ul>
<li><strong>Proved developed reserves:</strong> Reserves expected to be recovered from existing wells with existing equipment and operating methods. These are the highest-confidence reserves.</li>
<li><strong>Proved undeveloped reserves (PUDs):</strong> Reserves expected to be recovered from new wells on undrilled acreage or from existing wells that require major expenditure. PUDs require capital investment to convert to production — check whether the company has the capital and the plan to develop them within five years, as the SEC requires.</li>
<li><strong>Reserve replacement ratio:</strong> New reserves added divided by production volume. A ratio above 100% means the company is adding reserves faster than it's producing them — essential for long-term sustainability.</li>
</ul>

<p>The reserves are calculated using the SEC's pricing methodology: a trailing 12-month average of first-day-of-month commodity prices. This means reserve estimates change with commodity prices even if nothing has changed underground. In a low-price environment, reserves shrink on paper because fewer reserves are economic to produce at the lower price.</p>

<h3>Production and Cost Metrics</h3>

<p>The MD&A discloses production volumes (barrels of oil equivalent per day), average realized prices, and per-unit costs. Key cost metrics include:</p>

<ul>
<li><strong>Lease operating expense (LOE) per BOE:</strong> The cost to operate existing wells. Lower is better, but watch for rising LOE per unit, which may indicate aging wells requiring more maintenance.</li>
<li><strong>Finding and development cost (F&D) per BOE:</strong> The cost to add new reserves. Divide capital expenditure by reserve additions. An F&D cost above the current commodity price means the company is spending more to find oil than it's worth.</li>
<li><strong>All-in sustaining cost:</strong> LOE plus G&A plus maintenance capex per BOE. This tells you the commodity price at which the company breaks even.</li>
</ul>

<h3>Decline Rates and Capital Needs</h3>

<p>All oil and gas wells decline over time — production falls as reservoir pressure drops. Shale wells decline particularly rapidly, often losing 50-70% of initial production in the first year. The 10-K discloses production trends by area, and the MD&A discusses capital expenditure plans to offset declines. A company with high decline rates needs continuous capital investment just to maintain flat production — this is maintenance capex, not growth capex.</p>

<h2 id="midstream-analysis">Midstream Companies: Fee-Based Revenue and Contracts</h2>

<p>Midstream companies operate pipelines, processing plants, and storage facilities. Their business model is fundamentally different from upstream companies because revenue is typically fee-based rather than commodity-price-dependent.</p>

<h3>Contract Structure</h3>

<p>The business description and MD&A disclose the contract mix:</p>

<ul>
<li><strong>Fee-based contracts:</strong> Revenue based on volume transported or processed, regardless of commodity price. The most stable revenue type.</li>
<li><strong>Percent-of-proceeds contracts:</strong> Revenue based on a percentage of the value of hydrocarbons processed. Exposes the midstream company to commodity price risk.</li>
<li><strong>Minimum volume commitments (MVCs):</strong> Customers agree to ship minimum volumes, providing revenue floor protection. The footnotes disclose MVC terms and counterparty credit quality.</li>
</ul>

<p>A midstream company with 85%+ fee-based revenue is significantly less volatile than one with 50% commodity-exposed contracts. Check the contract mix disclosure and the weighted average remaining contract term.</p>

<h3>Distribution Coverage and Leverage</h3>

<p>Many midstream companies are structured as master limited partnerships (MLPs) or C-corps that pay significant distributions/dividends. The distribution coverage ratio — distributable cash flow divided by distributions paid — should exceed 1.0x. Below 1.0x means the company is borrowing or selling assets to fund its distribution, which is unsustainable.</p>

<p>Leverage (total debt divided by EBITDA) is the other critical metric. Midstream companies typically operate with 3.0x to 4.5x leverage. Above 5.0x raises refinancing and credit rating risk. Check the debt maturity schedule in the footnotes — a wall of maturities in the next 2-3 years with limited cash flow to repay creates refinancing risk.</p>

<h2 id="downstream-renewables">Downstream and Renewable Energy</h2>

<h3>Refining Companies</h3>

<p>Refining profitability depends on the <strong>crack spread</strong> — the difference between crude oil input costs and refined product output prices. The MD&A discloses realized crack spreads by refinery, utilization rates (actual throughput versus nameplate capacity), and maintenance turnaround schedules. Turnarounds are planned shutdowns for maintenance and can significantly impact quarterly results — check the 10-K for the turnaround schedule.</p>

<h3>Renewable Energy Companies</h3>

<p>Renewable energy filings have unique disclosures tied to the project-based nature of the business:</p>

<ul>
<li><strong>Power purchase agreements (PPAs):</strong> Long-term contracts (typically 10-25 years) to sell electricity at fixed or escalating prices. The contract terms determine revenue visibility.</li>
<li><strong>Capacity factor:</strong> Actual energy generated divided by theoretical maximum. Wind farms typically achieve 25-45% capacity factors; utility-scale solar achieves 20-30%.</li>
<li><strong>Tax equity financing:</strong> Many renewable projects are funded through tax equity structures that allow investors to capture federal tax credits. These complex arrangements are disclosed in the footnotes and affect how much of project cash flow flows to the company's shareholders versus tax equity investors.</li>
<li><strong>Government incentives:</strong> Production Tax Credits (PTC) and Investment Tax Credits (ITC) are significant revenue components. Changes to these programs — disclosed in risk factors — directly impact project economics and development pipelines.</li>
</ul>

<h2 id="energy-red-flags">Energy Sector Red Flags</h2>

<ul>
<li><strong>Proved undeveloped reserves growing without development plans.</strong> PUDs that sit on the books for years without being converted to developed reserves may be overstating the company's true reserve base. The SEC requires PUDs to have a development plan within five years.</li>
<li><strong>Finding and development costs exceeding commodity prices.</strong> A company spending $80 per barrel to find oil while crude trades at $70 is destroying value with every well drilled.</li>
<li><strong>Distribution coverage below 1.0x for midstream companies.</strong> The distribution is not supported by cash flow and will eventually be cut.</li>
<li><strong>Hedging book rolling off with no replacements.</strong> If a company's hedges expire in the next two quarters and the current commodity price is well below the hedged price, earnings are about to decline significantly.</li>
<li><strong>Environmental remediation liabilities growing.</strong> Check the contingent liabilities footnote for environmental cleanup obligations. These can escalate rapidly and represent real cash outflows.</li>
<li><strong>Asset impairments in consecutive years.</strong> Repeated write-downs of the same asset category suggest the company is systematically overpaying for assets or that commodity price assumptions were unrealistic.</li>
</ul>

<h2 id="energy-workflow">Energy Stock Analysis Workflow</h2>

<ol>
<li><strong>Identify the subsector</strong> (upstream, midstream, downstream, or renewable) and apply the appropriate framework.</li>
<li><strong>For upstream:</strong> Start with the reserve report. Calculate reserve life (proved reserves divided by annual production), F&D costs, and the all-in breakeven price.</li>
<li><strong>For midstream:</strong> Start with the contract mix. Calculate distribution coverage, leverage, and weighted average contract life.</li>
<li><strong>For all energy companies:</strong> Read the hedging disclosures to understand near-term earnings visibility, and check the capital expenditure plan to understand maintenance needs versus growth spending.</li>
<li><strong>Compare to commodity strip pricing.</strong> The current futures curve for oil, gas, and refined products tells you what the market expects. If the company's economics require prices above the strip, the market disagrees with the investment thesis.</li>
</ol>

<p>Energy sector SEC filings reward careful reading because the disclosures are dense with actionable data. Reserve estimates, production costs, contract terms, and hedging positions are all audited, specific, and forward-looking. No other information source provides this level of detail about an energy company's financial reality.</p>
`,
};
