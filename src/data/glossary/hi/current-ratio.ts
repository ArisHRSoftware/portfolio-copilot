import type { GlossaryTerm } from "../../types";

export const termCurrentRatioHi: GlossaryTerm = {
  slug: "current-ratio",
  term: "Current Ratio (करंट रेशियो)",
  title: "Current Ratio — क्या यह Company अगले साल अपने Bills Pay कर सकती है?",
  shortDefinition:
    "Current ratio current assets को current liabilities से divide करता है — measure करता है कि company के पास एक साल के भीतर due obligations cover करने के लिए enough short-term resources हैं या नहीं।",
  metaDescription:
    "Current ratio क्या है? Calculate करना सीखें, अच्छा current ratio कितना होता है, quick ratio से कैसे compare करें, और कब यह mislead करता है।",
  wordCount: 470,
  category: "Financial Metrics",
  tags: ["current-ratio", "liquidity", "financial-metrics", "balance-sheet", "solvency"],
  relatedSlugs: ["quick-ratio", "working-capital", "debt-to-equity", "cash-conversion-cycle"],
  relatedTerms: ["quick-ratio", "working-capital", "debt-to-equity", "cash-conversion-cycle"],
  faq: [
    {
      question: "अच्छा current ratio कितना होता है?",
      answer:
        "1.5 और 3.0 के बीच current ratio generally healthy माना जाता है। 1.0 से नीचे मतलब short-term obligations short-term resources से ज़्यादा हैं — liquidity concern। 3.0 से ऊपर indicate कर सकता है कि company assets efficiently use नहीं कर रही — excess cash या inventory idle बैठी है। Ideal ratio industry पर depend करता है: fast-turning inventory वाले retailers lower ratios पर safely operate कर सकते हैं।",
    },
    {
      question: "Current ratio और quick ratio में क्या difference है?",
      answer:
        "Quick ratio numerator से inventory और prepaid expenses exclude करता है, सिर्फ most liquid assets include करता है: cash, marketable securities, और accounts receivable। Current ratio सभी current assets include करता है। Large inventory balances वाली companies (manufacturers, retailers) के लिए quick ratio ज़्यादा conservative liquidity measure देता है।",
    },
    {
      question: "अच्छे current ratio वाली company को भी cash problems हो सकती हैं?",
      answer:
        "बिल्कुल। Current ratio balance sheet date का snapshot है। अगर ज़्यादातर current assets slow-paying customers से receivables या obsolete inventory में हैं, तो company assets को cash में convert करने में struggle कर सकती है। Timing भी matter करता है — अगर बड़ा debt payment अगले हफ्ते due है लेकिन receivables 60 days बाद collect होंगे, current ratio यह mismatch miss करता है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Current ratio short-term financial health का सबसे widely used measure है। यह एक question answer करता है जो creditors, suppliers, और investors सभी care करते हैं: क्या इस company के पास अगले बारह महीनों में अपनी obligations meet करने के लिए enough liquid resources हैं? 1.0 से ऊपर current ratio मतलब current assets current liabilities exceed करते हैं। 1.0 से नीचे potential liquidity stress का warning flag है।</p>

<h2>Calculation कैसे करें</h2>

<p><strong>Current Ratio = Current Assets / Current Liabilities</strong></p>

<p>दोनों figures directly balance sheet से आते हैं 10-K या 10-Q में। Current assets में cash, marketable securities, accounts receivable, inventory, और prepaid expenses शामिल हैं — कुछ भी जो एक साल में cash में convert होने या consume होने की उम्मीद है। Current liabilities में accounts payable, short-term debt, accrued expenses, और deferred revenue शामिल हैं।</p>

<p>2.0 current ratio मतलब company के पास current liabilities के हर $1 के लिए $2 current assets हैं।</p>

<h2>Current Ratio कैसे Interpret करें</h2>

<p>Current ratio quick liquidity check provide करता है, लेकिन context determine करता है कि given number healthy है या concerning। Industry norms dramatically vary करते हैं:</p>

<ul>
<li><strong>Grocery chains और fast-food:</strong> Current ratio 1.0 के near operate करते हैं क्योंकि customers से immediately cash collect करते हैं जबकि suppliers को extended payment terms negotiate करते हैं।</li>
<li><strong>Manufacturing:</strong> 1.5-2.5 typical है क्योंकि large inventories maintain करते हैं जो cash में convert होने में time लेती हैं।</li>
<li><strong>Technology:</strong> Cash-rich software companies 3.0 या higher दिखा सकती हैं क्योंकि massive cash reserves hold करती हैं।</li>
</ul>

<h2>Trend Analysis</h2>

<p>Single current ratio reading isolation में कम मतलब रखता है। Multiple quarters और years का trend कहीं ज़्यादा reveal करता है। Declining current ratio — 2.5 से 2.0 से 1.3 तीन सालों में — deteriorating liquidity signal कर सकता है भले ही हर individual reading acceptable दिखे। Possible causes में shrinking cash balances, rising short-term debt, या inventory buildup शामिल हैं।</p>

<p>Conversely, rising current ratio improving financial health indicate कर सकता है, लेकिन inefficiency भी signal कर सकता है। Cash hoard करने वाली company जो growth में invest नहीं कर रही, climbing current ratio दिखाएगी — liquidity के लिए अच्छा, returns के लिए potentially बुरा।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में liquidity analysis के लिए current ratio बहुत familiar metric है। US stocks evaluate करते समय Vested या INDMoney पर, SEC filings (10-K, 10-Q) में balance sheet data check करें। RBI LRS limit के तहत invest करते समय, strong current ratio (1.5+) वाली companies liquidity risk कम करती हैं — आपके limited capital को protect करती हैं।</p>

<h2>Limitations</h2>

<p>Current ratio सभी current assets को equally liquid treat करता है, जो वो नहीं हैं। Bank में cash आज bill pay कर सकता है। 90 days दूर receivable नहीं कर सकता। Warehouse में inventory months लग सकती है sell होने में, और कुछ inventory obsolete हो सकती है। Quick ratio inventory और prepaid expenses exclude करके ज़्यादा stringent liquidity test provide करता है।</p>

<p>Timing another limitation है। Current ratio single point in time reflect करता है। Companies quarter-end से पहले receivables aggressively collect करके या purchases delay करके healthier ratio present कर सकती हैं — window dressing common practice है।</p>

<p>Brefyr पर SEC filings से balance sheet data thousands of public companies के लिए available है, जहाँ liquidity metrics calculate और compare कर सकते हैं filing history और insider trades के साथ।</p>
`,
};
