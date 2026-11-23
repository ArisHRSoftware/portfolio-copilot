import type { GlossaryTerm } from "../../types";

export const termFormARSHi: GlossaryTerm = {
  slug: "form-ars",
  term: "ARS (एआरएस)",
  title: "ARS — Annual Report to Shareholders और 10-K में क्या Difference है",
  shortDefinition:
    "ARS (Annual Report to Shareholders) वो document है जो companies shareholders को proxy statement के साथ भेजती हैं — साल के financial results, business highlights, और management outlook summarize करती है 10-K से ज़्यादा accessible format में।",
  metaDescription:
    "ARS filing क्या है? Annual report to shareholders और 10-K में difference, CEO letter का importance, और भारतीय निवेशक इसे कैसे use करें।",
  wordCount: 420,
  category: "SEC Filings",
  tags: ["sec-filing", "annual-report", "shareholder-communication", "edgar", "financial-statements"],
  relatedSlugs: ["10-k-filing", "def-14a", "proxy-statement", "sec-edgar", "8-k-filing"],
  relatedTerms: ["10-k-filing", "def-14a", "proxy-statement", "sec-edgar", "8-k-filing"],
  faq: [
    {
      question: "ARS और 10-K same हैं क्या?",
      answer:
        "नहीं। 10-K SEC required regulatory filing है strict formatting और comprehensive disclosure requirements के साथ। ARS shareholder communication है जो companies voluntarily prepare करती हैं — financial highlights, CEO letter, photographs, marketing content audited financial statements के साथ। कई companies 10-K को ARS के section में include करती हैं ('10-K wrap')।",
    },
    {
      question: "ARS EDGAR पर file होती है?",
      answer:
        "Full ARS standalone document के रूप में EDGAR पर file करना required नहीं। लेकिन shareholders को proxy statement के साथ भेजने पर SEC require करती है कि EDGAR पर furnish (filed नहीं) करें 'ARS' form type से। 10-K wrap में 10-K portion EDGAR पर officially file होती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Annual Report to Shareholders (ARS) public company life का original disclosure document है — SEC के standardized filing system से decades पुराना। आज ARS unique position occupy करती है: partly regulatory obligation (SEC require करती है कि annual meeting से पहले certain financial information shareholders को provide हो) और partly marketing document (companies इसमें अपनी story बताती हैं जो 10-K में possible नहीं)।</p>

<p>Indian context: India में भी listed companies annual reports shareholders को भेजती हैं जो regulatory compliance और corporate marketing document दोनों serve करती हैं। US system similar है बस SEC oversight ज़्यादा structured है।</p>

<h2>ARS में क्या होता है</h2>

<p><strong>CEO/Chairman letter:</strong> Annual report की opening pages। साल के results, company strategy, और future outlook। Best CEO letters substantive और specific होती हैं — Warren Buffett की Berkshire Hathaway letters industry standard हैं। Worst ones boilerplate celebrations हैं।</p>

<p><strong>Business highlights:</strong> Operations, strategy, market position, key achievements — photographs, infographics, और marketing language के साथ जो 10-K में नहीं होती।</p>

<p><strong>Financial statements:</strong> Audited financial statements — income statement, balance sheet, cash flow statement past two years के लिए, plus auditor's report। Five-year या ten-year financial summaries भी common हैं।</p>

<p><strong>Selected financial data:</strong> Charts और tables — revenue growth, profitability margins, return metrics — visually accessible format में non-specialist shareholders के लिए।</p>

<h2>ARS vs 10-K: कौन क्या Provide करती है</h2>

<p><strong>ARS:</strong> Context, narrative, accessibility। Company क्या चाहती है कि आप जानें — best light में। CEO letter management priorities reveal कर सकती है। Visual presentation financial trends grasp करना easy बनाती है।</p>

<p><strong>10-K:</strong> Completeness, detail, legal accountability। SEC require करती है सब disclose करें — including things company prefer करे highlight न करना। Risk factors, legal proceedings, related-party transactions, material weaknesses। CEO/CFO personally certify करते हैं accuracy Sarbanes-Oxley के under।</p>

<p>Sophisticated investors दोनों read करते हैं। ARS narrative context देती है, 10-K full unvarnished disclosure। Discrepancies revealing होती हैं — management क्या emphasize करती है versus regulation क्या disclose कराती है।</p>

<h2>CEO Letter का Importance</h2>

<p>Long-term shareholders के लिए CEO letter हर साल read करने लायक है। Tone, emphasis, strategy में changes year-to-year important shifts signal कर सकते हैं। तीन साल growth की बात करने के बाद अचानक "cost discipline" और "capital allocation" पर pivot — शायद growth story slow हो रहा है।</p>

<h2>ARS कहाँ मिलती है</h2>

<p>EDGAR पर 'ARS' form type से furnished filings मिलती हैं। Company websites often better source हैं full designed version के लिए। Brefyr पर annual report data 10-K filings के साथ aggregated होता है।</p>
`,
};
