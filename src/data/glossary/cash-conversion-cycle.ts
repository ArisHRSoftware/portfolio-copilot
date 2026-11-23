import type { GlossaryTerm } from "../types";

export const termCashConversionCycle: GlossaryTerm = {
  slug: "cash-conversion-cycle",
  term: "Cash Conversion Cycle",
  title: "Cash Conversion Cycle — How Long It Takes to Turn Inventory Into Cash",
  shortDefinition:
    "The cash conversion cycle measures the number of days between paying for inventory and collecting cash from customers, revealing how efficiently a company manages its working capital cycle.",
  metaDescription:
    "What is the cash conversion cycle? Learn its three components, why a negative CCC is powerful, and how to use CCC for working capital analysis.",
  wordCount: 450,
  category: "Financial Metrics",
  tags: ["cash-conversion-cycle", "working-capital", "efficiency", "financial-metrics", "cash-flow"],
  relatedSlugs: ["inventory-turnover", "receivables-turnover", "working-capital", "current-ratio"],
  relatedTerms: ["inventory-turnover", "receivables-turnover", "working-capital", "current-ratio"],
  faq: [
    {
      question: "What are the three components of the cash conversion cycle?",
      answer:
        "CCC = Days Inventory Outstanding (DIO) + Days Sales Outstanding (DSO) - Days Payable Outstanding (DPO). DIO measures how long inventory sits before being sold. DSO measures how long customers take to pay after a sale. DPO measures how long the company takes to pay its suppliers. The cycle starts when cash goes out (paying suppliers) and ends when cash comes back in (collecting from customers).",
    },
    {
      question: "What does a negative cash conversion cycle mean?",
      answer:
        "A negative CCC means the company collects cash from customers before it pays suppliers — the business generates cash from its operating cycle rather than consuming it. Amazon is the classic example: customers pay immediately (low DSO), but Amazon negotiates 60-90 day payment terms with suppliers (high DPO). The company earns interest on float and uses supplier credit to fund operations. A negative CCC is a significant competitive advantage, especially for rapidly growing businesses.",
    },
    {
      question: "How can a company improve its cash conversion cycle?",
      answer:
        "Three levers: reduce DIO by improving inventory management (faster turnover, better demand forecasting), reduce DSO by tightening credit terms or improving collection processes, and increase DPO by negotiating longer payment terms with suppliers. Each day shaved off the cycle releases cash. For a company with $1 billion in revenue, reducing CCC by 10 days frees approximately $27 million in working capital.",
    },
  ],
  lastUpdated: "2026-11-18",
  body: `
<p>The cash conversion cycle is the most comprehensive single metric for working capital efficiency. It captures the entire journey of cash through a business: from paying for raw materials, through production and sale, to collecting payment from customers. A shorter cycle means less capital is locked up in operations. A negative cycle means the business actually generates cash from its operating process — a rare and powerful advantage that enables growth without external financing.</p>

<h2 id="calculation">The Calculation</h2>

<p><strong>CCC = Days Inventory Outstanding + Days Sales Outstanding - Days Payable Outstanding</strong></p>

<p><strong>DIO</strong> = (Average Inventory / COGS) x 365 — how many days inventory sits before sale.</p>
<p><strong>DSO</strong> = (Average Accounts Receivable / Revenue) x 365 — how many days customers take to pay.</p>
<p><strong>DPO</strong> = (Average Accounts Payable / COGS) x 365 — how many days the company takes to pay suppliers.</p>

<p>All inputs come from the income statement and balance sheet. A CCC of 45 days means 45 days elapse between cash outflow to suppliers and cash inflow from customers. During those 45 days, the company must finance the gap from working capital or credit facilities.</p>

<h2 id="three-levers">The Three Levers</h2>

<p>Each component of the CCC represents a different operational lever that management can pull to improve cash efficiency.</p>

<p><strong>Reducing DIO</strong> means selling inventory faster. This can come from better demand forecasting, leaner supply chains, just-in-time production, or faster product development cycles. Every day removed from DIO releases cash equal to roughly one day's COGS. The risk: cutting inventory too aggressively can lead to stockouts and lost sales.</p>

<p><strong>Reducing DSO</strong> means collecting from customers faster. Options include tightening credit terms, offering early payment discounts (like 2/10 net 30 — a 2% discount for payment within 10 days), automating invoicing, or improving the collections process. The risk: aggressive collection practices can damage customer relationships.</p>

<p><strong>Increasing DPO</strong> means paying suppliers more slowly. Companies with market power negotiate longer payment terms — 60, 90, even 120 days. This keeps cash in the business longer, effectively using suppliers as an interest-free financing source. The risk: stretching payables too far can damage supplier relationships, risk supply disruptions, and in extreme cases signal financial distress to the market.</p>

<h2 id="negative-ccc">The Power of a Negative CCC</h2>

<p>A negative CCC is one of the most powerful financial characteristics a business can possess. It means the company receives customer cash before it pays suppliers, turning the operating cycle into a cash-generating engine. The faster the company grows, the more cash it generates — the exact opposite of typical businesses where growth consumes working capital.</p>

<p>Amazon's negative CCC has been a central pillar of its strategy. Customers pay at checkout (DSO near zero), inventory moves quickly (moderate DIO), and suppliers wait 60-90 days for payment (high DPO). The result: Amazon uses supplier credit and customer prepayments to fund billions in investment without proportional external financing.</p>

<p>Insurance companies achieve a similar effect through the "float" concept — they collect premiums upfront and pay claims months or years later. Warren Buffett has described Berkshire Hathaway's insurance float as equivalent to a permanent, cost-free loan that funds the entire company's investment portfolio.</p>

<h2 id="industry-benchmarks">Industry Benchmarks</h2>

<p>CCC varies dramatically by industry. Grocery retailers operate at CCC near zero or slightly negative because inventory turns daily and customers pay cash, while supplier terms provide a payable buffer. Manufacturing companies typically show CCCs of 40-80 days due to longer production cycles and credit-based B2B sales. Construction and aerospace companies may exceed 100 days because project timelines are long and payment milestones are spread over months.</p>

<p>Within an industry, CCC differences reveal operational quality. Two manufacturers in the same sector with CCCs of 50 days and 80 days may have similar revenues, but the first converts inventory to cash 30 days faster — a meaningful competitive advantage in cash flow generation and capital efficiency.</p>

<p>On Brefyr, working capital component data from SEC filings enables cash conversion cycle analysis across thousands of public companies alongside insider trading and filing history.</p>
`,
};
