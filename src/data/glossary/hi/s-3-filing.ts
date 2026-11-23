import type { GlossaryTerm } from "../../types";

export const termS3FilingHi: GlossaryTerm = {
  slug: "s-3-filing",
  term: "S-3 फाइलिंग (S-3 Filing)",
  title: "S-3 फाइलिंग — Shelf Registration क्या है और निवेशकों के लिए क्यों ज़रूरी है",
  shortDefinition:
    "S-3 एक simplified SEC registration form है जो eligible public companies को securities को shelf पर register करके future में बेचने की अनुमति देता है — हर बार नई registration file किए बिना तेज़ी से capital raise करने के लिए।",
  metaDescription:
    "S-3 filing क्या है? Shelf registration कैसे काम करती है, कौन इसे use कर सकता है, और companies इसे capital raise करने के लिए क्यों file करती हैं। भारतीय निवेशकों के लिए गाइड।",
  wordCount: 1200,
  category: "SEC Filings",
  tags: ["sec-filing", "shelf-registration", "equity-offering", "edgar", "secondary-offering"],
  relatedSlugs: ["s-1-filing", "form-424b", "10-k-filing", "sec-edgar", "dilution"],
  relatedTerms: ["s-1-filing", "form-424b", "10-k-filing", "sec-edgar", "dilution"],
  faq: [
    {
      question: "S-3 और S-1 में क्या अंतर है?",
      answer:
        "S-1 एक full registration statement है जो primarily IPOs के लिए use होती है और उन companies के लिए जो S-3 की eligibility requirements पूरी नहीं करतीं। S-3 एक short-form registration है जो company की existing SEC filings (10-Ks, 10-Qs, 8-Ks) को incorporate by reference करती है। इसका मतलब S-3 बहुत छोटी होती है क्योंकि detailed disclosures पहले से public record में हैं। Practical effect यह है कि S-3 filer दिनों में नई offering market में ला सकता है, महीनों में नहीं।",
    },
    {
      question: "Shelf registration क्या होती है?",
      answer:
        "Shelf registration SEC Rule 415 के तहत एक technique है जो company को advance में बड़ी amount की securities register करने और फिर तीन साल की अवधि में छोटे-छोटे हिस्सों में बेचने की अनुमति देती है। Company एक बार S-3 file करती है, और हर बार जब securities बेचना चाहती है, तो एक prospectus supplement (Form 424B) file करती है। इससे हर offering के लिए नई registration file करने की cost और delay बच जाती है।",
    },
    {
      question: "क्या S-3 filing से investors को चिंतित होना चाहिए?",
      answer:
        "S-3 file करने का मतलब यह नहीं कि company तुरंत shares issue करेगी। बहुत सी companies active shelf registration बनाए रखती हैं financial flexibility के तौर पर। लेकिन जब company S-3 के बाद actual prospectus supplement (424B) file करती है, तो dilution imminent है। Investors को 424B filing monitor करनी चाहिए, सिर्फ S-3 नहीं।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>S-3 registration statement वो tool है जो established public companies को बिना IPO जैसी full registration process के equity और debt markets से capital raise करने देता है। Securities Act of 1933 के तहत SEC के पास file होने वाली यह short-form registration company की existing public filings पर heavily rely करती है। Investors के लिए S-3 — और खास तौर पर shelf registration mechanism — को समझना dilution anticipate करने और company की capital strategy evaluate करने के लिए essential है।</p>

<h2>S-3 कौन file कर सकता है</h2>

<p>हर public company S-3 use नहीं कर सकती। SEC eligibility requirements लगाता है: company को कम से कम 12 महीने से reporting company होना चाहिए, सभी required reports (10-K, 10-Q, 8-K) समय पर file किए हों, preferred stock dividends या debt पर default न हो। Primary offerings के लिए public float $75 million या ज़्यादा होना चाहिए। जो companies इन requirements को पूरा नहीं करतीं, उन्हें comprehensive S-1 form use करना होता है।</p>

<h2>Shelf Registration कैसे काम करती है</h2>

<p>S-3 की defining feature है SEC Rule 415 के तहत shelf registration। Company एक maximum dollar amount की securities register करती है — मान लीजिए $500 million — और फिर तीन साल में हिस्सों में बेचती है। हर बार बेचने पर Form 424B prospectus supplement file होती है जिसमें specific amount, price, और underwriters बताए जाते हैं।</p>

<p>Well-known seasoned issuers (WKSIs) — $700 million या ज़्यादा public float वाली companies — को additional advantages मिलते हैं। वो automatic shelf registrations file कर सकती हैं जो filing पर तुरंत effective हो जाती हैं, SEC review के बिना। यानी सबसे बड़ी public companies घंटों में offerings execute कर सकती हैं।</p>

<h2>S-3 में क्या होता है</h2>

<p>S-3 incorporation by reference की वजह से relatively छोटी होती है — typically 20-40 pages, जबकि S-1 200+ pages की होती है। इसमें prospectus summary, offering-specific risk factors, securities description, distribution plan, और legal/tax considerations शामिल हैं। Incorporation by reference एक living document बनाता है — जब company नई 10-K या 8-K file करती है, वो automatically S-3 registration statement का हिस्सा बन जाती है।</p>

<h2>S-3 के तहत Offering Types</h2>

<ul>
<li><strong>Follow-on equity offerings</strong> — Company नए shares बेचती है। Existing shareholders directly dilute होते हैं।</li>
<li><strong>At-the-market (ATM) offerings</strong> — Company broker-dealer के through gradually open market में shares बेचती है, एक बड़े block में नहीं। ATM programs महीनों तक चल सकते हैं।</li>
<li><strong>Debt offerings</strong> — Company bonds या notes issue करती है। Directly dilutive नहीं, लेकिन leverage बढ़ता है।</li>
<li><strong>Secondary offerings</strong> — Existing shareholders (insiders/early investors) अपने shares बेचते हैं। Company को proceeds नहीं मिलता।</li>
<li><strong>Convertible securities</strong> — Bonds या preferred shares जो common stock में convert हो सकते हैं — future dilution का risk।</li>
</ul>

<h2>Dilution का सवाल — भारतीय निवेशकों के लिए</h2>

<p>Equity investors के लिए S-3 filing का सबसे important implication potential dilution है। जब $200 million market cap वाली company $100 million shelf registration file करती है, तो theoretically share count 50% बढ़ सकता है। भले company पूरी shelf use न करे, overhang stock price पर दबाव डाल सकता है।</p>

<p>अगर आप Vested, INDMoney, या Groww से US small-cap या mid-cap stocks में invest करते हैं, तो S-3 filings monitor करना ज़रूरी है। RBI LRS के $250,000 (करीब ₹2 करोड़) annual limit में आपका हर dollar important है। S-3 file होने पर पूछें: maximum amount कितना है? Market cap की तुलना में कैसा है? Company को तुरंत capital की ज़रूरत है या routine shelf renewal है?</p>

<h2>S-3 कहाँ देखें</h2>

<p>सभी S-3 filings <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=S-3&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> पर available हैं। Brefyr पर shelf registration filings अन्य material SEC filings के साथ flag की जाती हैं, AI-generated summaries के साथ जो maximum offering amount और registered securities के types highlight करती हैं।</p>
`,
};
