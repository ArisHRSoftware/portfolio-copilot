import type { GlossaryTerm } from "../../types";

export const termDividendHi: GlossaryTerm = {
  slug: "dividend",
  term: "Dividend (डिविडेंड)",
  title: "Dividend — कंपनी अपने मुनाफे का हिस्सा Shareholders को कैसे देती है",
  shortDefinition:
    "Dividend कंपनी की earnings का वो हिस्सा है जो shareholders को cash में distribute किया जाता है — typically quarterly basis पर, board of directors की approval से।",
  metaDescription:
    "Dividend क्या है? Dividends कैसे काम करते हैं, investors को कौन-सी key dates पता होनी चाहिए, dividend types, और SEC filings में dividend information कहाँ मिलती है।",
  wordCount: 480,
  category: "Corporate Actions",
  tags: ["dividend", "income-investing", "corporate-action", "shareholder", "payout"],
  relatedSlugs: ["dividend-yield", "special-dividend", "share-repurchase", "drip", "free-cash-flow"],
  relatedTerms: ["dividend-yield", "special-dividend", "share-repurchase", "drip", "free-cash-flow"],
  faq: [
    {
      question: "Dividends कितनी बार मिलते हैं?",
      answer:
        "ज़्यादातर US companies quarterly (साल में 4 बार) dividend देती हैं। कुछ monthly (REITs में common), semi-annually, या annually pay करती हैं। India में companies typically annual या interim dividend declare करती हैं। US stocks hold करने वाले Indian investors को dividend पर US withholding tax (DTAA से 15% reduced) लगता है।",
    },
    {
      question: "Dividend की important dates कौन-सी हैं?",
      answer:
        "चार dates matter करती हैं: (1) Declaration date — board dividend announce करता है। (2) Ex-dividend date — इस date या बाद stock खरीदने पर upcoming dividend नहीं मिलेगा। (3) Record date — company check करती है कि shareholder कौन हैं। (4) Payment date — cash account में आता है। Vested/INDMoney पर US dividend receive करने के लिए ex-dividend date से पहले stock own करना ज़रूरी है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Dividend कंपनी से shareholders को cash payment है, company की earnings या accumulated profits से funded। जब कंपनी operations और reinvestment से ज़्यादा cash generate करती है, board of directors कुछ cash shareholders को dividends के रूप में return करने का decide कर सकता है। यह stock price changes से independent income stream create करता है — <strong>income investing strategies की foundation</strong>।</p>

<h2>Dividends कैसे काम करते हैं</h2>

<p>Dividend process एक specific sequence follow करता है। Board of directors dividend declare करने का vote करता है — amount per share, record date, और payment date specify करते हैं। Declaration SEC के पास 8-K filing में और publicly announce होती है।</p>

<p><strong>Declaration date:</strong> Board dividend approve करता है — legal obligation create होती है।</p>
<p><strong>Ex-dividend date:</strong> Stock exchange set करता है, typically record date से एक business day पहले। Ex-date या बाद stock buy करने पर upcoming dividend नहीं मिलेगा।</p>
<p><strong>Record date:</strong> Company shareholder register review करती है। केवल इस date के shareholders dividend receive करते हैं।</p>
<p><strong>Payment date:</strong> Cash brokerage accounts में distribute होता है।</p>

<h2>Dividend Types</h2>

<p><strong>Cash dividends</strong> सबसे common form हैं। S&P 500 dividend-paying companies typically quarterly cash dividends pay करती हैं।</p>
<p><strong>Stock dividends</strong> cash की बजाय additional shares distribute करते हैं। India में bonus issue similar concept है।</p>
<p><strong>Special dividends</strong> one-time payments हैं regular schedule के बाहर — asset sales या exceptionally profitable periods से funded।</p>

<h2>कौन Pay करता है, कौन नहीं</h2>

<p><strong>Pay करने वाली:</strong> Mature, profitable businesses — utilities, consumer staples, banks, REITs। "Dividend Aristocrats" S&P 500 members हैं जिन्होंने 25+ consecutive years dividend बढ़ाया।</p>
<p><strong>नहीं pay करने वाली:</strong> High-growth companies — tech startups, early-stage biotech। Amazon और Alphabet ने पहले 20+ years dividend नहीं दिया।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI-regulated companies annual/interim dividends declare करती हैं। US dividends पर India-US DTAA rate 15% withholding tax लगता है। RBI LRS से invest किया पैसा — Vested, INDMoney, Groww पर dividend automatically credit होता है withholding deduction के बाद। India में इस income को ITR में report करना ज़रूरी है, DTAA credit claim कर सकते हैं। Currency fluctuation (USD/INR) effective yield को impact करता है।</p>

<p>Payout ratio (dividends per share / earnings per share) sustainability measure करता है। 50% से कम ratio dividend growth की ample room suggest करता है। 100% से ऊपर unsustainable situation indicate करता है।</p>

<h2>SEC Filings में Dividends</h2>

<ul>
<li><strong>8-K filing:</strong> हर dividend declaration — amount, record date, payment date।</li>
<li><strong>10-K और 10-Q:</strong> Cash flow statement total dividends paid दिखाता है। MD&A dividend policy discuss करता है।</li>
<li><strong>DEF 14A:</strong> Board's capital allocation philosophy — dividends vs buybacks vs investment।</li>
</ul>

<p>Brefyr 7,600+ companies के SEC filings process करता है और dividend declarations track करता है।</p>
`,
};
