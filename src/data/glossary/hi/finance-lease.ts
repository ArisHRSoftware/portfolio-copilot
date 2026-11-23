import type { GlossaryTerm } from "../../types";

export const termFinanceLeaseHi: GlossaryTerm = {
  slug: "finance-lease",
  term: "Finance Lease (फाइनेंस लीज़)",
  title: "Finance Lease — Lease Financial Statements पर Purchase जैसी Treat हो",
  shortDefinition: "Finance lease (पहले capital lease) lease arrangement है जो substantially सभी ownership risks और rewards lessee को transfer करती है, balance sheet पर record separate depreciation और interest expense income statement पर।",
  metaDescription: "Finance lease क्या है? Operating lease से कैसे different, classification criteria, income statement impact, और SEC filings में finance lease details कहाँ find करें।",
  wordCount: 420, category: "Accounting & Audit", tags: ["finance-lease", "capital-lease", "asc-842", "depreciation", "interest-expense"],
  relatedSlugs: ["operating-lease", "right-of-use-asset", "gaap", "10-k-filing"], relatedTerms: ["operating-lease", "right-of-use-asset", "gaap", "10-k-filing"],
  faq: [{ question: "Lease finance lease कब classify होती है?", answer: "ASC 842 under पाँच criteria में कोई एक meet: (1) lease term end ownership transfer, (2) purchase option reasonably certain exercise, (3) lease term asset remaining economic life major part (75%+), (4) present value lease payments asset fair value substantially all (90%+), (5) asset so specialized no alternative use lessor। None meet = operating lease।" },
  { question: "Income statement treatment finance और operating lease different क्यों?", answer: "Finance leases financed purchases treat — depreciation (owned asset जैसे) और interest (loan जैसे)। Front-loaded — interest higher early years। Operating leases single straight-line rent expense। Total expense lease term identical; timing pattern different।" }],
  lastUpdated: "2026-11-19",
  body: `
<p>Finance lease — prior standard (ASC 840) capital lease — lease जो effectively economic risks और rewards ownership lessor से lessee transfer। Operating lease (essentially rental) unlike, finance lease account as if lessee purchased asset financing use। Right-of-use asset और lease liability record (similar operating lease ASC 842 under), लेकिन income statement markedly different: single straight-line expense बजाय, separate depreciation expense ROU asset और interest expense lease liability।</p>

<h2>Classification Criteria</h2>
<p>ASC 842 पाँच criteria — कोई एक meet finance lease:</p>
<ul>
<li><strong>Ownership transfer:</strong> Lease end underlying asset ownership lessee transfer।</li>
<li><strong>Purchase option:</strong> Below fair value purchase option reasonably certain exercise।</li>
<li><strong>Lease term:</strong> Asset remaining economic life major part (75%+)।</li>
<li><strong>Present value:</strong> Lease payments PV asset fair value substantially all (90%+)।</li>
<li><strong>Specialization:</strong> Asset so specialized no alternative use lessor।</li>
</ul>

<h2>Income Statement Impact</h2>
<p><strong>Depreciation:</strong> ROU asset depreciated shorter of lease term या useful life। Typically straight-line, operating expense।</p>
<p><strong>Interest:</strong> Lease liability accrue interest discount rate। Higher early years (largest liability), declines। Front-loaded expense pattern — total expense identical finance/operating, timing different।</p>

<h2>Cash Flow Classification</h2>
<p>Key difference: finance leases — interest portion operating cash flow, principal portion financing cash flow। Operating leases — entire payment operating cash flow। Converting operating to finance shifts cash outflows operating से financing, operating cash flow metrics improve without actual cash change।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>
<p>India में Ind-AS 116 (IFRS 16 equivalent) similar lease accounting framework provide करता है — single lessee model जहाँ virtually सभी leases balance sheet recognize। Indian companies (airlines, retail, IT with office leases) significant lease liabilities रखती हैं। Finance lease vs operating lease distinction Ind-AS 116 under slightly different US ASC 842 — India में income statement treatment सभी leases single model (IFRS approach), US में dual model (finance vs operating distinction maintain)।</p>

<p>US companies evaluate करते समय lease footnote 10-K carefully पढ़ें — finance lease classification company leverage metrics inflate कर सकती है। Airlines (massive aircraft finance leases), retail (store leases) heavy lease users। Brefyr 10-K/10-Q lease disclosures process, finance/operating lease obligations distinguish complete picture provide।</p>
`,
};
