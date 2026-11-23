import type { GlossaryTerm } from "../../types";

export const termBlackoutPeriodHi: GlossaryTerm = {
  slug: "blackout-period",
  term: "Blackout Period (ब्लैकआउट पीरियड)",
  title: "Blackout Period — जब Company Insiders अपना Stock Trade नहीं कर सकते",
  shortDefinition:
    "Blackout period एक time window है जिसमें company insiders — officers, directors, और designated employees — company का stock buy या sell करने से prohibited हैं, typically earnings releases से पहले और major corporate events के दौरान।",
  metaDescription:
    "Trading blackout period क्या है? Insiders कब company stock trade नहीं कर सकते, SEC rules, insider trading laws से relationship, और investors को क्या जानना चाहिए।",
  wordCount: 420,
  category: "Regulatory & Compliance",
  tags: ["blackout-period", "insider-trading", "trading-restrictions", "corporate-governance", "earnings"],
  relatedSlugs: ["quiet-period", "insider-trading", "section-16", "form-4", "rule-10b5"],
  relatedTerms: ["quiet-period", "insider-trading", "section-16", "form-4", "rule-10b5"],
  faq: [
    {
      question: "Typical blackout period कितनी लंबी होती है?",
      answer:
        "Pre-earnings blackout periods typically expected earnings announcement से 2-4 weeks पहले start होती हैं और earnings release और conference call के 1-2 business days बाद end होती हैं। Event-driven blackouts material nonpublic information publicly disclose होने तक last करती हैं। कुछ companies 'open window' policy maintain करती हैं जहाँ insiders सिर्फ earnings release के बाद 2-4 weeks में trade कर सकते हैं।",
    },
    {
      question: "Pre-arranged trading plan हो तो insiders blackout में trade कर सकते हैं?",
      answer:
        "हाँ। Rule 10b5-1 trading plans, जो insider material nonpublic information possess नहीं करता तब adopt किए जाते हैं, pre-planned trades automatically execute होने देते हैं blackout periods में। लेकिन 2023 SEC amendments ने requirements add किए: 90-day cooling-off period, overlapping plans prohibition, single-trade plan limits, और mandatory disclosure।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Blackout period एक corporate-imposed restriction है जो company insiders को company securities trade करने से specified time windows में prohibit करती है। Insider trading laws already material nonpublic information पर trading prohibit करते हैं, लेकिन blackout periods further जाती हैं — prophylactic trading bans create करती हैं जब insiders most likely material nonpublic information possess करते हैं, regardless कि particular insider actually करता है या नहीं।</p>

<h2>Blackout Periods के Types</h2>

<p><strong>Pre-earnings blackout:</strong> सबसे common type। Companies quarterly earnings announcement से 2-4 weeks पहले trading blackout impose करती हैं। इस window में management quarter के financial results जानती है (या suspect करती है) publicly release होने से पहले।</p>

<p><strong>Event-driven blackout:</strong> Material corporate event inside information create करता है — pending merger, restructuring, product recall। Information publicly disclose होने तक blackout last करती है।</p>

<p><strong>Retirement plan blackout (Regulation BTR):</strong> SOX Section 306(a) specific requirements impose करता है जब company का 401(k) plan company stock trading restrict करता है। Directors और executive officers भी prohibited होते हैं।</p>

<h2>कौन Covered होता है</h2>

<p>Blackout policies typically broad group cover करती हैं: senior management, finance और accounting staff, board members, earnings preparation में involved employees, और sometimes extended family members। Specific list company की insider trading policy define करती है।</p>

<h2>Rule 10b5-1 Trading Plans</h2>

<p>Blackout restrictions का primary exception। ये plans advance में adopt होते हैं — जब insider material nonpublic information possess नहीं करता — और predetermined schedule specify करते हैं। Trades automatically execute होती हैं, blackout periods में भी। 2023 SEC amendments ने abuse address किए: 90-day cooling-off period, overlapping plans prohibition, single-trade plan limits।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में SEBI (PIT Regulations — Prohibition of Insider Trading) similar trading window concept है। Indian listed companies भी insiders के लिए trading windows define करती हैं — typically financial results announce होने के 48 hours बाद open होती हैं और next quarter results announce होने से 2-3 days पहले close। US blackout periods similar logic follow करती हैं लेकिन rules ज़्यादा detailed हैं।</p>

<p>Indian investors US stocks में insider activity evaluate करते समय Form 4 filings देखें — ये indicate करती हैं trades 10b5-1 plans under हुई या नहीं। Blackout period के तुरंत बाद heavy insider selling meaningful signal हो सकता है।</p>

<p>Brefyr Form 4 filings और 8-K disclosures monitor करता है, insider trades flag करता है और 10b5-1 plan context note करता है।</p>
`,
};
