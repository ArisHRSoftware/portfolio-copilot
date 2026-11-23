import type { GlossaryTerm } from "../../types";

export const termTreasuryStockHi: GlossaryTerm = {
  slug: "treasury-stock",
  term: "Treasury Stock (ट्रेज़री स्टॉक)",
  title: "Treasury Stock — Company ने Repurchase करके Reserve में रखे Shares",
  shortDefinition:
    "Treasury stock वो shares हैं जो company ने issue करके बाद में open market से repurchase किए, retire करने की बजाय अपनी treasury में hold करती है — public investors के लिए available outstanding shares reduce।",
  metaDescription:
    "Treasury stock क्या है? Retired shares से कैसे different, financial statements पर impact, companies treasury shares क्यों hold करती हैं, और SEC filings में data कहाँ मिलता है।",
  wordCount: 420,
  category: "Corporate Actions",
  tags: ["treasury-stock", "share-repurchase", "equity", "balance-sheet", "corporate-action"],
  relatedSlugs: ["share-repurchase", "stock-split", "dilution", "book-value"],
  relatedTerms: ["share-repurchase", "stock-split", "dilution", "book-value"],
  faq: [
    {
      question: "Treasury stock dividends receive करते हैं?",
      answer:
        "नहीं। Treasury shares outstanding consider नहीं होतीं — dividends नहीं, shareholder meetings में vote नहीं, EPS calculation में include नहीं। Essentially dormant shares। Company reissue करे (employee stock option exercises satisfy करने) तो outstanding बन जाते हैं और सभी shareholder rights regain।",
    },
    {
      question: "Treasury stock balance sheet कैसे affect करता है?",
      answer:
        "Treasury stock contra-equity account है — total shareholders' equity reduce। Equity section में negative number। $5 billion paid-in capital/retained earnings, $2 billion treasury stock: total equity $3 billion। Aggressively repurchase करने वाली companies negative total equity भी हो सकता है — Apple और कई large companies demonstrate करती हैं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Treasury stock वो shares represent करता है जो company ने public को issue किए, फिर share repurchase programs से वापस खरीदे। Retired shares permanently cancel — treasury shares company possession में रहते हैं, future में reissue हो सकते हैं। Treasury में hold होने पर <strong>outstanding consider नहीं — vote नहीं, dividends नहीं, per-share calculations में factor नहीं</strong>। Company flexibility देता है — shares अभी repurchase, बाद में specific purposes reissue बिना new public offering।</p>

<h2>Companies Treasury Stock क्यों Hold करती हैं</h2>

<p><strong>Employee compensation programs।</strong> Treasury shares reissue employee stock option exercises, RSU vestings, ESPP purchases satisfy करने। New shares issue करने avoid।</p>

<p><strong>Acquisition currency।</strong> M&A में consideration — treasury shares target shareholders deliver। New share issuance से further dilution avoid।</p>

<p><strong>Future flexibility।</strong> Retire करने की बजाय treasury hold — reissue option preserve। Retired shares authorized count reduce — increase करने shareholder vote required। Treasury stock board को ज़्यादा options।</p>

<h2>Treasury vs Retired Shares</h2>

<p>Treasury stock authorized और issued remain करता है लेकिन outstanding नहीं। Retired shares issued और outstanding दोनों counts से remove। Cost method (सबसे common): treasury stock repurchase price पर negative equity item record। Apple $100 billion+ treasury stock hold — total shareholders' equity कभी-कभी negative, entirely massive buyback program से explain।</p>

<h2>Financial Metrics पर Impact</h2>

<p><strong>EPS:</strong> Treasury shares basic EPS shares outstanding से excluded — denominator reduce, EPS increase।</p>

<p><strong>Book value per share:</strong> Treasury stock total equity reduce — book value per share depress, even negative possible।</p>

<p><strong>ROE:</strong> Lower equity treasury stock से — ROE mechanically higher दिखता है। Large buyback programs inflated ROE — genuine operational improvement reflect नहीं necessarily।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में Companies Act buyback shares require करती है extinguish (retire) — treasury stock concept directly applicable नहीं। US companies analyze करते समय treasury stock balance sheet implications समझना critical। Negative equity (Apple) alarm signal नहीं — massive buyback indicator। Brefyr balance sheet data extract करता है treasury stock balances सहित।</p>
`,
};
