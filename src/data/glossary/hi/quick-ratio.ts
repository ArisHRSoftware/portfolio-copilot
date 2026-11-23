import type { GlossaryTerm } from "../../types";

export const termQuickRatioHi: GlossaryTerm = {
  slug: "quick-ratio",
  term: "Quick Ratio (क्विक रेशियो / Acid Test)",
  title: "Quick Ratio — क्या Company Inventory बेचे बिना Bills Pay कर सकती है?",
  shortDefinition:
    "Quick ratio, जिसे acid-test ratio भी कहते हैं, measure करता है कि company सिर्फ most liquid assets — cash, marketable securities, और receivables — से short-term obligations meet कर सकती है या नहीं।",
  metaDescription:
    "Quick ratio क्या है? Acid test कैसे काम करता है, current ratio से कैसे अलग है, अच्छा quick ratio कितना होता है, और कब कौन सा use करें।",
  wordCount: 460,
  category: "Financial Metrics",
  tags: ["quick-ratio", "acid-test", "liquidity", "financial-metrics", "balance-sheet"],
  relatedSlugs: ["current-ratio", "working-capital", "cash-conversion-cycle", "debt-to-equity"],
  relatedTerms: ["current-ratio", "working-capital", "cash-conversion-cycle", "debt-to-equity"],
  faq: [
    {
      question: "इसे acid test क्यों कहते हैं?",
      answer:
        "नाम gold mining era से आया है। Miners nitric acid use करते थे test करने कि metal असली gold है या नहीं — gold acid resist करता है जबकि दूसरे metals dissolve हो जाते हैं। Quick ratio same logic company finances पर apply करता है: less liquid assets (inventory, prepaid expenses) हटाकर देखो कि company सिर्फ virtually guaranteed liquid assets से obligations meet कर सकती है या नहीं।",
    },
    {
      question: "अच्छा quick ratio कितना होता है?",
      answer:
        "1.0 या higher generally adequate माना जाता है — मतलब company inventory sell किए बिना सिर्फ liquid assets से सभी current liabilities cover कर सकती है। 0.5 और 1.0 के बीच fast-turning inventory models वाली companies (retailers, restaurants) के लिए common है। 0.5 से नीचे close attention warrant करता है, हालाँकि certain business models के लिए normal हो सकता है।",
    },
    {
      question: "Quick ratio कब use करना चाहिए current ratio की बजाय?",
      answer:
        "Quick ratio use करें जब large inventory balances वाली companies evaluate कर रहे हों जो quickly liquidate करना difficult हो — manufacturers, seasonal goods retailers, या perishable products वाली companies। अगर current ratio healthy दिखता है लेकिन ज़्यादातर current assets slow-moving inventory में tied up हैं, तो quick ratio true liquidity picture reveal करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Quick ratio current ratio का stricter version है जो tougher question पूछता है: क्या company short-term debts pay कर सकती है सिर्फ उन assets से जो almost immediately cash में convert हो सकते हैं? Inventory और prepaid expenses — जो liquidate होने में weeks या months लग सकते हैं — exclude करके, quick ratio company की short-term financial stress handle करने की ability का ज़्यादा conservative और often realistic assessment provide करता है।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>Quick Ratio = (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities</strong></p>

<p>या equivalently: <strong>Quick Ratio = (Current Assets - Inventory - Prepaid Expenses) / Current Liabilities</strong></p>

<p>सभी components balance sheet से आते हैं। Cash में cash equivalents (money market funds, 90 days के भीतर mature होने वाली Treasury bills) शामिल हैं। Marketable securities short-term investments हैं जो public markets पर days में sell हो सकते हैं। Accounts receivable customers द्वारा already delivered goods या services के लिए owed money है।</p>

<p>1.5 quick ratio मतलब company current liabilities के हर $1.00 के लिए $1.50 liquid assets hold करती है।</p>

<h2>Current Ratio vs Quick Ratio</h2>

<p>दोनों ratios का difference reveal करता है कि company की liquidity कितनी inventory पर depend करती है। अगर current ratio 2.5 है लेकिन quick ratio 0.8, तो company की apparent liquidity almost entirely inventory में tied up है। Weekly inventory turnover वाले grocery store के लिए ठीक हो सकता है। 180-day inventory cycles वाले heavy equipment manufacturer के लिए trouble spell कर सकता है।</p>

<p>दोनों ratios का gap itself diagnostic है। Large gap (current ratio quick ratio से काफी ज़्यादा) heavy inventory dependence signal करता है। Small gap indicate करता है कि ज़्यादातर current assets already liquid form में हैं — ऐसी companies inherently ज़्यादा financially flexible हैं।</p>

<h2>Industry Context</h2>

<p>Quick ratio current ratio से भी ज़्यादा industry by industry vary करता है क्योंकि industries inventory intensity में dramatically differ करती हैं:</p>

<ul>
<li><strong>Software और Professional Services:</strong> Quick ratios 2.0-4.0, virtually no inventory</li>
<li><strong>Retailers और Manufacturers:</strong> Current ratio 2.0 लेकिन quick ratio only 0.4 — most assets seasonal inventory में</li>
<li><strong>Restaurants और Fast-food:</strong> Quick ratio 0.5 से नीचे — alarming लगता है लेकिन cash-intensive business model reflect करता है</li>
</ul>

<h2>भारतीय निवेशकों के लिए</h2>

<p>Indian investors जो Vested या INDMoney के through US stocks invest करते हैं, उनके लिए quick ratio एक essential screening tool है। RBI LRS limit के तहत invest करते समय, liquidity risk minimize करना ज़रूरी है। Manufacturing companies या retailers evaluate करते समय quick ratio current ratio से ज़्यादा reliable liquidity picture देता है।</p>

<p>India में FMCG companies (HUL, ITC) और US counterparts (P&G, Coca-Cola) compare करते समय quick ratio use करें — दोनों markets में liquidity dynamics अलग हो सकते हैं।</p>

<h2>Limitations और Nuances</h2>

<p>Quick ratio assume करता है accounts receivable fully collectible और quickly convertible to cash हैं। यह हमेशा true नहीं। अगर significant portion receivables overdue, disputed, या financially distressed customers से owed हैं, quick ratio true liquidity overstate करता है। SEC filing footnotes में receivables aging schedule check करना reality check provide करता है।</p>

<p>Current ratio की तरह, quick ratio point-in-time snapshot है जो window dressing subject है। Available but undrawn credit facilities भी ignore होती हैं — 0.5 quick ratio लेकिन $500 million revolving credit facility वाली company ratio suggest करता है उससे कहीं ज़्यादा liquidity रखती है।</p>

<p>Brefyr पर SEC filings से balance sheet data liquidity assess करने देता है thousands of companies across, quick ratios और current ratios compare करें insider activity और filing history के साथ।</p>
`,
};
