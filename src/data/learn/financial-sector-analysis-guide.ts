import type { LearnArticle } from "../types";

export const articleFinancialSectorAnalysisGuide: LearnArticle = {
  slug: "financial-sector-analysis-guide",
  pillar: "sectors",
  title: "Financial Sector SEC Filing Analysis: Banks, Insurance, and Fintech",
  metaDescription:
    "How to analyze financial sector companies through SEC filings. Covers bank-specific metrics like net interest margin and loan loss provisions, insurance reserve analysis, fintech unit economics, and regulatory capital requirements.",
  readingTime: 14,
  difficulty: "advanced",
  wordCount: 1100,
  category: "Sector Deep Dives",
  tags: ["financials", "banking", "insurance", "fintech", "sector-analysis", "advanced"],
  relatedSlugs: [
    "how-to-analyze-technology-stocks",
    "healthcare-sector-sec-filings-guide",
    "energy-sector-sec-filings",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Why are bank financial statements so different from other companies?",
      answer:
        "Banks have fundamentally different business models from non-financial companies. A bank's primary asset is its loan portfolio (where most companies hold property, equipment, and inventory), and its primary liability is customer deposits (where most companies have accounts payable and debt). Interest income replaces product revenue, and the spread between interest earned and interest paid — net interest margin — replaces gross margin. Banks also have unique regulatory capital requirements that constrain how much business they can do relative to their equity base.",
    },
    {
      question: "What is the most important line item in a bank's 10-K?",
      answer:
        "The provision for credit losses. This line item represents management's estimate of how much of the loan portfolio will default. It directly reduces earnings and builds the allowance for loan losses on the balance sheet. Increasing provisions signal that management expects more borrowers to default — a leading indicator of credit deterioration. Decreasing provisions can boost earnings in the short term but may mean the bank is under-reserving for future losses. Compare the provision to net charge-offs (actual defaults) to see whether the bank is building or releasing reserves.",
    },
    {
      question: "How do I compare insurance companies using SEC filings?",
      answer:
        "The combined ratio is the key metric for property and casualty insurers. It's disclosed in the MD&A and equals the loss ratio (claims paid divided by premiums earned) plus the expense ratio (operating expenses divided by premiums earned). A combined ratio below 100% means the insurer is profitable on underwriting alone, before investment income. For life insurers, focus on the quality and duration of the investment portfolio, reserve adequacy, and persistency ratios (policyholder retention). Both types of insurers require careful reading of the reserve footnotes.",
    },
    {
      question: "What should I look for in fintech SEC filings that differs from traditional banks?",
      answer:
        "Fintech companies often generate revenue from transaction fees rather than interest income, so focus on take rate (revenue per dollar of transaction volume), net revenue per active account, and customer acquisition cost. Many fintechs originate loans and sell them — check the gain-on-sale margin and whether the company retains servicing rights or credit risk. The risk factors section should disclose whether the company operates under a bank charter or relies on partner banks, which has implications for regulatory oversight and cost structure.",
    },
  ],
  lastUpdated: "2026-11-13",
  body: `
<p>Financial sector companies — banks, insurance companies, asset managers, and fintech firms — have fundamentally different financial statements from companies in other sectors. A bank's balance sheet looks nothing like a retailer's. An insurance company's income statement includes line items that don't exist anywhere else. And fintech companies often blend traditional financial metrics with technology metrics, making comparisons difficult without knowing what to look for.</p>

<p>This guide breaks down the financial sector into its major subsectors and explains what to focus on in each type of company's SEC filings.</p>

<h2 id="bank-analysis">Analyzing Bank SEC Filings</h2>

<p>Banks earn money primarily by borrowing cheaply (customer deposits) and lending at higher rates (mortgages, commercial loans, credit cards). The difference between these rates — net interest margin — is the foundation of bank profitability.</p>

<h3>Net Interest Margin (NIM)</h3>

<p>NIM is disclosed in the MD&A of every bank's 10-K and 10-Q. It represents net interest income divided by average earning assets. A typical community bank operates with NIM between 3.0% and 3.5%; large money center banks may operate at 2.0% to 2.5% due to their funding mix.</p>

<p>Track NIM over time and compare to the interest rate environment. When the Federal Reserve raises rates, banks generally benefit because loan yields increase faster than deposit costs — at least initially. But if rates stay elevated, deposit competition eventually compresses NIM as customers move money to higher-yielding accounts.</p>

<h3>Credit Quality and Loan Loss Provisions</h3>

<p>The provision for credit losses is the most important line item in a bank's income statement. It represents management's estimate of future loan defaults. This provision flows into the <strong>allowance for loan losses</strong> (ALLL) on the balance sheet — a reserve account that absorbs actual defaults.</p>

<p>Key metrics to extract from the footnotes:</p>

<ul>
<li><strong>Allowance as a percentage of total loans:</strong> Typically 1.0% to 1.5% for a well-reserved bank. Below 0.8% may indicate under-reserving.</li>
<li><strong>Net charge-offs as a percentage of average loans:</strong> Actual losses recognized. Compare to the provision — if provisions exceed charge-offs, the bank is building reserves (expecting worse conditions ahead).</li>
<li><strong>Non-performing loans (NPLs) as a percentage of total loans:</strong> Loans that are 90+ days past due or on non-accrual status. Rising NPLs are a leading indicator of future charge-offs.</li>
<li><strong>Criticized and classified loans:</strong> Banks with regulatory exam data disclose these categories in the 10-K. They represent loans that examiners have flagged as having elevated risk.</li>
</ul>

<h3>Regulatory Capital Ratios</h3>

<p>Banks are required to maintain minimum capital ratios, disclosed in the 10-K. The three primary ratios are:</p>

<ul>
<li><strong>Common Equity Tier 1 (CET1) ratio:</strong> Minimum 4.5%, plus a capital conservation buffer of 2.5%, for an effective minimum of 7.0%. Large banks face additional surcharges.</li>
<li><strong>Tier 1 capital ratio:</strong> Minimum 6.0% plus buffers.</li>
<li><strong>Total capital ratio:</strong> Minimum 8.0% plus buffers.</li>
</ul>

<p>Banks that fall close to minimum requirements are constrained — they cannot grow their loan portfolio, pay dividends, or buy back shares without raising additional capital. Check the capital ratios and the cushion above minimums.</p>

<h2 id="insurance-analysis">Analyzing Insurance Company Filings</h2>

<p>Insurance companies collect premiums, invest the proceeds, and pay claims. The timing mismatch between premium collection and claims payment creates the <strong>float</strong> — money that the insurer can invest before it's needed for claims.</p>

<h3>Property and Casualty (P&C) Insurers</h3>

<p>The combined ratio is the essential metric:</p>

<ul>
<li><strong>Loss ratio:</strong> Claims and loss adjustment expenses divided by net premiums earned. A loss ratio of 65% means 65 cents of every premium dollar goes to claims.</li>
<li><strong>Expense ratio:</strong> Underwriting expenses divided by net premiums earned. Includes commissions, salaries, and administrative costs.</li>
<li><strong>Combined ratio = loss ratio + expense ratio.</strong> Below 100% means the insurer is profitable from underwriting alone. Above 100% means the insurer depends on investment income to be profitable overall.</li>
</ul>

<p>Check catastrophe loss disclosures in the MD&A. Hurricanes, wildfires, and other natural disasters create lumpy claims. Reserve development — adjustments to estimates for prior-year claims — is disclosed in the footnotes. Favorable reserve development (reducing prior-year reserves) boosts current earnings; adverse development reduces them.</p>

<h3>Life Insurers</h3>

<p>Life insurance companies carry long-duration liabilities (policy obligations that may not come due for decades). Their investment portfolios — disclosed in exhaustive detail in the footnotes — must be managed to match these long-term obligations. Focus on:</p>

<ul>
<li><strong>Investment portfolio quality:</strong> What percentage is investment-grade bonds versus below-investment-grade? Are there significant holdings in commercial real estate or alternatives?</li>
<li><strong>Unrealized gains/losses:</strong> Life insurers hold large bond portfolios. Rising interest rates create unrealized losses, which appear in other comprehensive income (OCI) on the balance sheet. While these losses don't flow through the income statement, they reduce book value.</li>
<li><strong>Policy reserve adequacy:</strong> The actuarial assumptions (mortality rates, lapse rates, discount rates) underlying policy reserves are disclosed in the footnotes. Changes to these assumptions can materially impact reported results.</li>
</ul>

<h2 id="fintech-analysis">Analyzing Fintech Filings</h2>

<p>Fintech companies are a hybrid — they use technology company business models (platforms, networks, subscription services) to deliver financial services. Their SEC filings require reading through both a technology lens and a financial services lens.</p>

<h3>Revenue Model</h3>

<p>Identify the primary revenue source in the business description and revenue footnotes:</p>

<ul>
<li><strong>Transaction fees:</strong> Revenue scales with payment volume or transaction count. Metric: take rate (revenue divided by total payment volume).</li>
<li><strong>Interest income:</strong> Revenue from lending. Requires loan loss provisioning and credit quality analysis, just like a bank.</li>
<li><strong>Subscription fees:</strong> Revenue from platform access. Analyze like a SaaS company — retention, expansion, churn.</li>
<li><strong>Gain on sale:</strong> Revenue from originating loans and selling them. This is volatile and depends on capital markets conditions.</li>
</ul>

<h3>Regulatory Status</h3>

<p>Check the risk factors for the company's regulatory framework. A fintech with a bank charter (like some neobanks) faces different capital and compliance requirements than one that operates through partner bank arrangements. Companies relying on partner banks face the risk that their banking partner could terminate the relationship, which has happened to several fintechs.</p>

<h3>Unit Economics</h3>

<p>Fintech MD&A sections increasingly disclose unit economics: revenue per active account, cost to acquire a customer, and lifetime value. These metrics determine whether the company can achieve profitability at scale. If the company doesn't disclose these voluntarily, you can approximate them by dividing total revenue by active accounts and dividing sales/marketing expense by new accounts added in the period.</p>

<h2 id="financial-red-flags">Financial Sector Red Flags</h2>

<ul>
<li><strong>Declining loan loss provisions during an economic slowdown.</strong> If the economy is weakening but the bank is reducing provisions, management may be prioritizing short-term earnings over prudent reserving.</li>
<li><strong>Rapid loan growth in a single category.</strong> A bank growing its commercial real estate portfolio by 30% annually is concentrating risk. The footnotes should disclose the loan portfolio composition by type.</li>
<li><strong>Insurance reserve releases driving earnings growth.</strong> If an insurer's earnings growth comes primarily from reducing prior-year reserves rather than underwriting new profitable business, the growth isn't sustainable.</li>
<li><strong>Fintech reporting surging revenue alongside surging losses.</strong> Growth at any cost works until capital markets close. Check the cash runway and burn rate.</li>
<li><strong>Capital ratios declining toward minimums.</strong> A bank whose CET1 ratio has dropped from 12% to 8% over three years is approaching the regulatory floor, which constrains future growth and capital returns.</li>
</ul>

<h2 id="comparative-framework">Comparative Framework</h2>

<p>When comparing financial sector companies, use the right metrics for the right subsector:</p>

<ul>
<li><strong>Banks:</strong> Return on equity, return on assets, NIM, efficiency ratio (non-interest expense / revenue), credit quality ratios.</li>
<li><strong>P&C Insurance:</strong> Combined ratio, premium growth, reserve adequacy, investment yield.</li>
<li><strong>Life Insurance:</strong> Book value growth, investment portfolio quality, policy persistency, embedded value (for companies that disclose it).</li>
<li><strong>Fintech:</strong> Revenue growth, take rate or revenue per account, contribution margin, customer acquisition cost, active user growth.</li>
</ul>

<p>Financial sector analysis through SEC filings demands specialized knowledge, but the payoff is significant. These filings contain the exact data needed to evaluate credit risk, capital adequacy, underwriting profitability, and growth sustainability. No analyst report or earnings call transcript provides the same level of detail — the 10-K is the definitive source.</p>
`,
};
