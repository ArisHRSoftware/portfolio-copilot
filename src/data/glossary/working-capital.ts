import type { GlossaryTerm } from "../types";

export const termWorkingCapital: GlossaryTerm = {
  slug: "working-capital",
  term: "Working Capital",
  title: "Working Capital — The Operating Cash Cushion Every Business Needs",
  shortDefinition:
    "Working capital is the difference between current assets and current liabilities, representing the short-term financial cushion available to fund day-to-day operations.",
  metaDescription:
    "What is working capital? Learn how to calculate it, why it matters for operations, what negative working capital means, and how to interpret changes.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["working-capital", "liquidity", "operations", "financial-metrics", "balance-sheet"],
  relatedSlugs: ["current-ratio", "quick-ratio", "cash-conversion-cycle", "operating-margin"],
  relatedTerms: ["current-ratio", "quick-ratio", "cash-conversion-cycle", "operating-margin"],
  faq: [
    {
      question: "Is negative working capital always bad?",
      answer:
        "No. Negative working capital means current liabilities exceed current assets. While this sounds alarming, some highly efficient businesses operate this way by design. Amazon, Walmart, and many subscription-based companies collect cash from customers before they pay suppliers, creating a natural negative working capital position. These companies effectively use supplier credit to fund operations — their operating model generates cash rather than consuming it. Negative working capital is concerning only when it results from an inability to pay obligations rather than superior cash management.",
    },
    {
      question: "How does working capital differ from cash?",
      answer:
        "Cash is one component of working capital, but working capital also includes accounts receivable, inventory, and prepaid expenses on the asset side, minus accounts payable, accrued expenses, and short-term debt on the liability side. A company can have strong working capital but little actual cash if most current assets are tied up in receivables and inventory. Conversely, a company can have lots of cash but weak working capital if it also carries large current liabilities.",
    },
    {
      question: "Why do investors watch changes in working capital?",
      answer:
        "Changes in working capital directly affect cash flow from operations. When working capital increases (receivables or inventory growing faster than payables), cash is being consumed — the company is tying up more money in operations. When working capital decreases, cash is being released. Rapid growth companies often burn cash through rising working capital even while reporting strong profits, which can create unexpected liquidity pressure.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>Working capital is one of the most practical financial metrics because it measures something tangible: does this company have enough short-term resources to keep the lights on? Every business needs working capital to bridge the gap between paying suppliers and collecting from customers. Too little working capital creates liquidity crises. Too much signals inefficiency. The right amount keeps operations running smoothly while deploying excess capital productively.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>Working Capital = Current Assets - Current Liabilities</strong></p>

<p>Current assets include cash, accounts receivable, inventory, and prepaid expenses — resources expected to convert to cash within one year. Current liabilities include accounts payable, short-term debt, accrued wages, taxes payable, and the current portion of long-term debt — obligations due within one year. Both figures come from the balance sheet.</p>

<p>The result is a dollar amount, not a ratio. Positive working capital means the company has a buffer of short-term assets above its short-term obligations. The current ratio expresses the same relationship as a multiple rather than a dollar figure.</p>

<h2 id="operating-cycle">Working Capital and the Operating Cycle</h2>

<p>Every business has an operating cycle: purchase raw materials or inventory, convert them into goods or services, deliver to customers, and collect payment. Working capital funds this cycle. The length and cash intensity of the cycle determines how much working capital a business needs.</p>

<p>A bakery buys flour, bakes bread, sells it the same day for cash. Its operating cycle is short and cash-efficient — minimal working capital needed. An aircraft manufacturer buys titanium, spends 18 months building a plane, delivers it, then waits 60 days for payment. Its operating cycle is long and capital-intensive — it needs substantial working capital to cover costs between purchasing raw materials and receiving payment.</p>

<p>The cash conversion cycle quantifies this dynamic precisely: how many days elapse between paying for inputs and receiving cash from customers. Companies with short cash conversion cycles need less working capital. Companies with long cycles need more. The industry you operate in largely determines your baseline working capital requirements.</p>

<h2 id="negative-working-capital">The Negative Working Capital Advantage</h2>

<p>Some of the world's most successful companies operate with negative working capital. Amazon collects payment from customers immediately (via credit card charges) but negotiates 60-90 day payment terms with suppliers. This means Amazon has the customer's cash in hand for weeks before it needs to pay its vendors. The business actually generates cash from operations — the faster it grows, the more cash it generates, because each new sale brings in cash before it creates a corresponding liability.</p>

<p>Subscription businesses exhibit the same dynamic. Customers pay upfront (monthly or annually), creating deferred revenue (a current liability) but also immediate cash. The service is delivered over time, but the cash is available now. SaaS companies with annual prepayment models are essentially running interest-free loans from their customers.</p>

<p>This negative working capital model is a competitive advantage because it eliminates the need for external financing to fund growth. Traditional businesses need to raise capital (debt or equity) to fund the working capital requirements of expansion. Negative-working-capital businesses self-fund — growth itself produces cash.</p>

<h2 id="working-capital-changes">Why Changes Matter More Than Levels</h2>

<p>On the cash flow statement, the change in working capital is a key adjustment when reconciling net income to operating cash flow. An increase in working capital (more cash tied up in operations) reduces operating cash flow. A decrease releases cash and boosts operating cash flow.</p>

<p>This is why rapidly growing companies sometimes struggle with cash flow even when profitable. Revenue is rising, profits look healthy, but the business is consuming cash to build inventory and fund receivables faster than payables are growing. Investors who focus only on the income statement miss this dynamic — the cash flow statement reveals it through the working capital adjustment line items.</p>

<p>Mature companies with stable growth should show relatively stable working capital requirements as a percentage of revenue. If working capital is growing significantly faster than revenue, it usually signals operational deterioration: inventory is piling up unsold, customers are paying more slowly, or the company is losing negotiating leverage with suppliers.</p>

<p>On Brefyr, company financial data from SEC filings lets you track balance sheet metrics including working capital components across thousands of public companies, alongside insider trading and filing analysis.</p>
`,
};
