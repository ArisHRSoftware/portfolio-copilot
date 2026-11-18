import type { GlossaryTerm } from "../../types";

export const term10KFilingHi: GlossaryTerm = {
  slug: "10-k-filing",
  term: "10-K फाइलिंग (10-K Filing)",
  title: "10-K फाइलिंग — यह क्या है, इसमें क्या होता है, और निवेशक इसे कैसे इस्तेमाल करें",
  shortDefinition:
    "10-K एक annual report है जो हर publicly traded US company को SEC के पास file करनी होती है। इसमें audited financial statements, risk factors, और business की पूरी जानकारी होती है।",
  metaDescription:
    "10-K filing क्या होती है? SEC की annual report requirement को समझें — हर section में क्या होता है, investors इसे क्यों पढ़ते हैं, और EDGAR पर कैसे ढूंढें। भारतीय निवेशकों के लिए गाइड।",
  wordCount: 1200,
  category: "SEC Filings",
  tags: ["sec-filing", "annual-report", "financial-statements", "edgar"],
  relatedSlugs: ["10-q-filing", "8-k-filing", "sec-edgar", "form-4"],
  relatedTerms: ["10-q-filing", "8-k-filing", "sec-edgar", "form-4", "going-concern"],
  faq: [
    {
      question: "10-K और annual report में क्या difference है?",
      answer:
        "10-K एक regulatory filing है जो SEC के rules के हिसाब से बनती है — इसमें audited financials और strict formatting होती है। Annual report एक marketing document है जो companies shareholders को भेजती हैं। 10-K में annual report से काफी ज़्यादा detail होती है। ज़्यादातर serious investors annual report skip करके सीधे 10-K पढ़ते हैं क्योंकि SEC full disclosure mandate करता है।",
    },
    {
      question: "किसी company की 10-K free में कहाँ मिलेगी?",
      answer:
        "हर 10-K SEC की EDGAR database (sec.gov/edgar) पर free में available है। Company name या ticker symbol से search करें। Filing submit होने के एक business day के अंदर EDGAR पर आ जाती है। Brefyr पर भी हर company की EDGAR filing का direct link मिलता है, साथ में AI-generated summary भी।",
    },
    {
      question: "10-K filing की deadline कब होती है?",
      answer:
        "Deadline company के size पर depend करती है। Large accelerated filers (public float $700 million से ऊपर) को fiscal year end के 60 days में file करना होता है। Accelerated filers ($75M-$700M) को 75 days मिलते हैं। Smaller companies को 90 days मिलते हैं। ज़्यादातर companies का fiscal year 31 December को end होता है, तो February-March में सबसे ज़्यादा 10-K filings आती हैं।",
    },
    {
      question: "भारतीय निवेशक 10-K कैसे पढ़ सकते हैं?",
      answer:
        "EDGAR database पूरी दुनिया में free access है — कोई registration ज़रूरी नहीं। अगर आप Vested, INDMoney, या Groww International से US stocks में invest करते हैं, तो अपनी holdings की 10-K ज़रूर पढ़ें। Brefyr पर हर 10-K की AI summary Hindi-friendly format में मिलती है, जिससे आपको पूरी filing पढ़ने की ज़रूरत नहीं।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>10-K filing किसी भी US-listed company का सबसे comprehensive public document है। यह हर साल Securities and Exchange Commission (SEC) के पास file होती है और इसमें company की पूरी कहानी होती है — operations, finances, risks, legal proceedings, और management का अपना assessment कि चीज़ें कैसी चल रही हैं।</p>

<p>SEC के rule के तहत हर वो company जिसका stock किसी US exchange पर trade होता है, उसे 10-K file करनी होती है। कोई exception नहीं — size, profitability, या industry से फ़र्क नहीं पड़ता। और सबसे अच्छी बात यह है कि हर 10-K EDGAR पर free में पढ़ने के लिए available है।</p>

<h2>10-K में क्या-क्या होता है</h2>

<p>SEC 10-K को चार parts में divide करता है। हर part का अपना purpose है।</p>

<h3>Part I — Business Description</h3>

<p><strong>Item 1: Business.</strong> यह section बताता है कि company क्या करती है — marketing language में नहीं, plain facts में। Products, services, customers, suppliers, competition, employees — सब कुछ। किसी नई company को समझने के लिए यहाँ से शुरू करें।</p>

<p><strong>Item 1A: Risk Factors.</strong> यहाँ management list करता है कि क्या-क्या गलत हो सकता है। SEC legally require करता है कि companies thorough हों। Pharmaceutical company clinical trial failures list करेगी। Tech company single customer dependency बताएगी। <strong>Tip:</strong> पिछले साल की 10-K से compare करें — नए risk factors एक warning signal हैं।</p>

<h3>Part II — Financial Data</h3>

<p><strong>Item 7: Management's Discussion and Analysis (MD&A).</strong> बहुत से investors इसे सबसे important section मानते हैं। Management अपने शब्दों में बताता है कि साल में क्या हुआ — revenue क्यों बढ़ा या घटा, expenses कहाँ गए, cash flow कैसा रहा। Financial statements numbers हैं, MD&A कहानी है।</p>

<p><strong>Item 8: Financial Statements.</strong> Audited income statement, balance sheet, cash flow statement — GAAP के हिसाब से बने और independent auditor ने review किए। Notes to financial statements (अक्सर 30-50 pages) में debt terms, lease obligations, और contingent liabilities की critical details होती हैं।</p>

<h3>Part III — Governance</h3>

<p><strong>Item 11: Executive Compensation.</strong> CEO, CFO और top executives को कितना pay किया गया — salary, bonuses, stock awards सब। अगर CEO $20 million earn कर रहा है जबकि stock 40% गिर गया है, तो यह governance red flag है।</p>

<p><strong>Item 12: Security Ownership.</strong> किसके पास कितने shares हैं। Directors, officers, और 5% से ऊपर के institutional holders की list मिलती है। ज़्यादा insider ownership generally positive signal है — इसका मतलब management का अपना पैसा भी लगा है।</p>

<h2>10-K कैसे efficiently पढ़ें</h2>

<p>पूरी 10-K पढ़ने में घंटे लग सकते हैं। Smart investors एक priority system follow करते हैं:</p>

<p><strong>पहला round (15 minutes):</strong> Risk factors और MD&A पढ़ें। ये बताते हैं कि क्या सही हुआ, क्या गलत हुआ, और management किस बात से worried है।</p>

<p><strong>दूसरा round (30 minutes):</strong> Financial statements review करें। Revenue growth, operating margins, free cash flow, और debt levels पर focus करें।</p>

<p><strong>तीसरा round (ज़रूरत के हिसाब से):</strong> Notes to financial statements में specifics देखें — revenue recognition policies, legal proceedings, related party transactions।</p>

<h2>भारतीय निवेशकों के लिए 10-K क्यों ज़रूरी है</h2>

<p>अगर आप Vested, INDMoney, Groww International, या किसी अन्य platform से US stocks में invest करते हैं, तो आपकी portfolio companies की 10-K पढ़ना critical है। भारत में RBI LRS scheme के तहत आप हर साल $250,000 तक US markets में invest कर सकते हैं — और यह पैसा सही जगह लगाने के लिए 10-K सबसे reliable source है।</p>

<p>Large-cap stocks (Apple, Microsoft) की 10-K को दर्ज़नों analysts parse करते हैं। लेकिन small-cap stocks में अक्सर zero analyst coverage होती है। इनकी 10-K दिनों तक unread रहती है। जो investor small-cap 10-K को ध्यान से पढ़ता है, उसके पास एक information advantage होता है।</p>

<p>Brefyr इसी gap को भरता है — हमारा AI pipeline हर 10-K को publish होने के minutes में process करता है और 1-10 significance score देता है। आपको वही depth of analysis मिलती है जो institutional investors को, लेकिन उन stocks के लिए जिन पर कोई और नज़र नहीं रख रहा।</p>

<h2>10-K में Red Flags</h2>

<ul>
<li><strong>Going concern language</strong> — अगर auditor "substantial doubt about ability to continue as a going concern" लिखता है, तो company bankruptcy risk में हो सकती है।</li>
<li><strong>Auditor change</strong> — Big 4 से smaller firm में switch करना accounting disagreements का signal हो सकता है।</li>
<li><strong>Restatements</strong> — अगर company पुराने financials restate करती है, तो original numbers में कुछ गलत था।</li>
<li><strong>बढ़ता accounts receivable</strong> — Revenue के comparison में AR बढ़ना channel stuffing का signal हो सकता है।</li>
<li><strong>Related party transactions</strong> — जब company executives या उनके family members की entities के साथ business करती है।</li>
</ul>

<h2>10-K कहाँ देखें</h2>

<p>हर 10-K <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=10-K&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> पर free में available है। Company name, ticker symbol, या CIK number से search करें। Brefyr पर हर stock page में EDGAR filing का direct link और AI-generated summary मिलती है।</p>
`,
};
