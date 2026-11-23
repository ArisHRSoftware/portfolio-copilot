import type { GlossaryTerm } from "../../types";

export const termWashSaleRuleHi: GlossaryTerm = {
  slug: "wash-sale-rule",
  term: "Wash Sale Rule (वॉश सेल रूल)",
  title: "Wash Sale Rule — Tax-Loss Harvesting Gaming Prevent करने वाला IRS Rule",
  shortDefinition:
    "Wash sale rule IRS regulation है जो capital loss deduction disallow करता है अगर investor substantially identical security sale से 30 days पहले या बाद purchase करे — effectively same investment position maintain करते हुए tax benefits claim prevent।",
  metaDescription:
    "Wash sale rule क्या है? 30-day window कैसे काम करता है, substantially identical security क्या constitute करता है, cost basis पर impact, और wash sale violations avoid कैसे करें।",
  wordCount: 420,
  category: "Investment Strategy",
  tags: ["wash-sale", "tax-rule", "capital-loss", "irs", "tax-loss-harvesting"],
  relatedSlugs: ["tax-loss-harvesting", "rebalancing", "etf", "index-fund"],
  relatedTerms: ["tax-loss-harvesting", "rebalancing", "etf", "index-fund"],
  faq: [
    {
      question: "Wash sale rule trigger हो जाए तो क्या होता है?",
      answer:
        "Capital loss current tax year disallow। लेकिन permanently lost नहीं — disallowed loss replacement purchase cost basis में add। Eventually replacement security sell करें: larger gain (या smaller loss) recognize। Broker wash sales track करता है Form 1099-B report, replacement shares cost basis adjust। Loss deferred — eliminated नहीं — लेकिन timing advantage lost।",
    },
    {
      question: "Wash sale rule different accounts across apply होता है?",
      answer:
        "हाँ। सभी accounts across apply — taxable brokerage account में loss sell, 30 days में IRA में same stock buy: wash sale triggered। Worse: IRA repurchase — disallowed loss IRA cost basis add नहीं हो सकता (IRAs track नहीं करतीं) — loss permanently lost possible। Spouses' accounts भी certain circumstances subject। सभी accounts coordinate — unintentional violations avoid।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Wash sale rule, Internal Revenue Code Section 1091, prevent करता है investors capital loss tax deduction claim करें while essentially same economic position maintain। बिना rule: stock loss पर December 30 sell, tax deduction claim, December 31 same stock buy back — <strong>tax benefit बिना investment actually change किए</strong>। Wash sale rule loophole close — "substantially identical" security 61-day window (sale date centered 30 days before, 30 after) में purchase पर loss disallow।</p>

<h2>61-Day Window</h2>

<p>Wash sale period 61 calendar days cover: sale से 30 days पहले, sale day, 30 days बाद। Window में substantially identical security purchase rule trigger। Pre-sale purchases भी include — December 1 buy, December 20 original loss sell: loss disallow (replacement purchase 30-day pre-sale window)।</p>

<p>Rule apply: open market purchases, automatic dividend reinvestment (DRIP), 401(k) payroll contributions, option exercises, share class conversions। Comprehensive scope — सभी acquisition activity सभी accounts vigilant।</p>

<h2>"Substantially Identical" क्या है</h2>

<p>IRS precise definition provide नहीं — gray area। Clear wash sales: exact same stock sell और repurchase। Generally NOT identical: S&P 500 index fund sell, total stock market fund buy (different indexes); company stock sell, competitor stock buy। Gray area: एक provider का S&P 500 fund sell, another provider का same index fund buy — many tax advisors risky consider।</p>

<h2>Cost Basis Adjustment</h2>

<p>Wash sale: disallowed loss replacement shares cost basis add, original holding period transfer। Example: 100 shares $10/share loss ($1,000) sell, wash sale trigger, replacement $50/share purchase: adjusted cost basis $60/share। Eventually sell: higher basis reduces taxable gain by previously disallowed amount।</p>

<h2>Violations Avoid Strategies</h2>

<p><strong>31 days wait।</strong> Simplest — sell, 31 days wait, repurchase। Risk: appreciation waiting period।</p>

<p><strong>Similar investments substitute।</strong> Immediately buy similar but not identical — Vanguard Total Stock sell, Schwab Total Stock buy (different index)।</p>

<p><strong>Accounts coordinate।</strong> DRIP, 401(k) contributions 61-day window wash sales inadvertently trigger न करें।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में wash sale rule concept directly applicable नहीं — Indian tax laws different। लेकिन US investments tax-loss harvest करें तो US wash sale rules apply। Brefyr fundamental data replacement investments evaluate करने में help — portfolio exposure maintain, wash sale violations avoid।</p>
`,
};
