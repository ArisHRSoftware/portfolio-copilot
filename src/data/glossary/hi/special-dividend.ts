import type { GlossaryTerm } from "../../types";

export const termSpecialDividendHi: GlossaryTerm = {
  slug: "special-dividend",
  term: "Special Dividend (स्पेशल डिविडेंड)",
  title: "Special Dividend — One-Time Cash Payout और यह क्या Signal देता है",
  shortDefinition:
    "Special dividend एक non-recurring, one-time cash payment है shareholders को, जो company के regular dividend schedule से अलग होता है — अक्सर asset sales, excess cash, या unusually profitable periods से funded।",
  metaDescription:
    "Special dividend क्या है? कंपनियाँ one-time payouts क्यों issue करती हैं, regular dividends से कैसे different, tax implications, और SEC filings में कैसे track करें।",
  wordCount: 430,
  category: "Corporate Actions",
  tags: ["special-dividend", "dividend", "corporate-action", "cash-distribution", "shareholder"],
  relatedSlugs: ["dividend", "dividend-yield", "share-repurchase", "free-cash-flow", "8-k-filing"],
  relatedTerms: ["dividend", "dividend-yield", "share-repurchase", "free-cash-flow", "8-k-filing"],
  faq: [
    {
      question: "Special dividend taxable है क्या?",
      answer:
        "हाँ। Special dividend receive करने के year में taxable है। Indian investors के लिए US special dividends पर DTAA rate 15% withholding tax लगता है। India में इस income को ITR में report करना ज़रूरी है।",
    },
    {
      question: "Special dividend stock price को कैसे affect करता है?",
      answer:
        "Ex-dividend date पर stock price typically special dividend amount से drop होती है। Large special dividends ($50 stock पर $10 per share) में drop बहुत noticeable होता है। Vested/INDMoney पर held stocks में price drop automatically reflect होगा।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Special dividend — extraordinary dividend भी कहा जाता है — shareholders को one-time cash distribution है जो company के regular dividend schedule से बाहर होता है। Regular quarterly dividends के विपरीत, special dividend explicitly <strong>non-recurring</strong> होता है। Companies special dividends issue करती हैं जब उनके पास excess cash accumulate हो जाता है जो operations, growth, या debt repayment के लिए ज़रूरी नहीं।</p>

<h2>Special Dividend कब Trigger होता है</h2>

<p><strong>Asset sales.</strong> Company division, subsidiary, या significant asset sell करती है — proceeds distribute।</p>
<p><strong>Excess cash accumulation.</strong> Highly profitable businesses ज़रूरत से ज़्यादा cash accumulate कर लेती हैं।</p>
<p><strong>Tax-motivated distributions.</strong> Tax law changes से पहले distributions accelerate।</p>
<p><strong>Restructuring.</strong> Cash-rich से growth-oriented model में pivot — excess cash distribute।</p>

<h2>Special vs Regular Dividends</h2>

<p>Critical distinction <strong>expectation</strong> है। Regular dividends implicit commitment create करते हैं — cut करना severely punished होता है। Special dividends कोई ongoing commitment नहीं रखते। Windfall year में regular dividend increase की बजाय special dividend — permanent higher baseline create नहीं होता, financial flexibility preserve होती है।</p>

<h2>Special Dividends vs Share Buybacks</h2>

<p>दोनों cash shareholders को return करते हैं, लेकिन mechanics different हैं। Special dividend सभी shareholders को equally pay करता है। Buyback non-selling shareholders को benefit करता है (ownership percentage increase)। Special dividends receipt पर taxable हैं। Buybacks tax defer करते हैं जब तक shareholder sell न करे।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Reliance, TCS, Infosys जैसी SEBI-regulated companies one-time dividends declare करती हैं। US market में Costco ने multiple $7-15 per share special dividends दिए, Microsoft का 2004 special dividend approximately $32 billion return किया।</p>

<p>Indian investors के लिए key considerations: US special dividend पर DTAA rate 15% withholding। Large dividend receive होने पर advance tax liability India में बन सकती है। RBI LRS remittance limits ($250,000/year) repatriation पर dividend income freely remit। Vested और INDMoney platforms पर dividend net of withholding credit होता है।</p>

<h2>SEC Filings में Special Dividends</h2>

<ul>
<li><strong>8-K filing:</strong> Declaration — amount, record date, payment date, one-time/special label।</li>
<li><strong>10-K और 10-Q:</strong> Cash flow statement financing activities में payment।</li>
<li><strong>DEF 14A:</strong> Board's decision-making process।</li>
</ul>

<p>Brefyr 8-K filings में special dividend announcements flag करता है और regular declarations से distinguish करता है।</p>
`,
};
