import type { GlossaryTerm } from "../../types";

export const termBeneficialOwnerHi: GlossaryTerm = {
  slug: "beneficial-owner",
  term: "Beneficial Owner (लाभकारी स्वामी)",
  title: "Beneficial Owner — Stock का असली मालिक कौन है",
  shortDefinition:
    "Beneficial owner वो person है जो shares के economic benefits enjoy करता है, चाहे shares किसी और के name पर registered हों। SEC 10%+ beneficial owners को filings require करता है।",
  metaDescription:
    "Beneficial owner क्या है? SEC beneficial ownership rules समझें — 10%+ shareholders की disclosure requirements, Schedule 13D/13G, और investor implications।",
  wordCount: 400,
  category: "Regulatory",
  tags: ["beneficial-owner", "sec", "ownership", "13d", "13g"],
  relatedSlugs: ["form-4", "insider-trading", "sec-edgar", "13f-filing"],
  relatedTerms: ["form-4", "insider-trading", "sec-edgar", "13f-filing"],
  faq: [
    {
      question: "Beneficial owner और registered owner में क्या difference है?",
      answer: "Registered owner वो है जिसके name पर shares company records में हैं। Beneficial owner वो है जो actually economic benefits (dividends, voting rights, sale proceeds) enjoy करता है। Example: आपके shares broker के name पर 'street name' में held हैं — broker registered owner है, आप beneficial owner।",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Beneficial ownership SEC regulation में एक fundamental concept है। Beneficial owner वो person या entity है जो shares के <strong>economic benefits</strong> (dividends, capital gains, voting power) enjoy करता है — चाहे shares technically किसी और के name पर registered हों।</p>

<h2>SEC Disclosure Requirements</h2>

<p>जब कोई person या group किसी public company के <strong>5% या ज़्यादा shares</strong> acquire करता है, उसे SEC के पास disclosure file करनी होती है:</p>

<ul>
<li><strong>Schedule 13D:</strong> 5%+ ownership with intent to influence company (activist investors)। 10 days में file करनी होती है।</li>
<li><strong>Schedule 13G:</strong> 5%+ ownership passive purpose। Less detailed, more time allowed।</li>
</ul>

<p>10%+ beneficial owners को <strong>Form 4</strong> भी file करनी होती है — हर buy/sell transaction 2 business days में report।</p>

<h2>Investors के लिए क्यों Important</h2>

<p><strong>Activist investors:</strong> जब Carl Icahn या Elliott Management किसी company में 5%+ stake file करता है (Schedule 13D), stock price usually jumps — market expect करता है activist changes push करेगा (cost cutting, board changes, spin-offs)।</p>

<p><strong>Insider alignment:</strong> High insider beneficial ownership (20%+ of shares) means management का significant personal wealth company performance से tied है। 10-K Item 12 में insider ownership details मिलती हैं।</p>

<p><strong>Institutional ownership:</strong> 13F filings से institutional beneficial ownership track होती है। High institutional ownership = smart money confidence।</p>

<h2>भारतीय निवेशकों के लिए</h2>

<p>India में SEBI beneficial ownership disclosure 1% threshold से शुरू होती है (US में 5%)। Indian "promoter holding" concept roughly US beneficial ownership से comparable है। High promoter (insider) holding Indian stocks में bullish signal माना जाता है — same logic US stocks पर apply करें। Brefyr 10-K से insider ownership data automatically extract करता है।</p>
`,
};
