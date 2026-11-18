import type { LearnArticle } from "../../types";

export const articleHowToReadSecFilingsHi: LearnArticle = {
  slug: "how-to-read-sec-filings",
  pillar: "sec-filings",
  title: "SEC Filings Kaise Padhein: Investors Ke Liye Practical Guide",
  metaDescription:
    "SEC filings padhne ki step-by-step guide — kaunsi filings important hain, har section mein kya hota hai, aur 10-K, 10-Q, 8-K se investment insights kaise nikalein.",
  readingTime: 18,
  difficulty: "beginner",
  wordCount: 900,
  category: "Getting Started",
  tags: ["sec-filings", "how-to", "beginner", "edgar", "10-k", "10-q", "8-k"],
  relatedSlugs: ["sec-filing-types-explained", "how-to-use-edgar"],
  faq: [
    {
      question: "Kya SEC filings padhne ke liye finance degree zaroori hai?",
      answer:
        "Bilkul nahi. SEC filings ek standardized format mein likhi jaati hain jo do-teen baar padhne ke baad predictable ho jaati hain. Business description aur risk factors plain English mein hote hain. MD&A (Management Discussion & Analysis) narrative prose hota hai. Financial statements ke liye basic accounting knowledge chahiye, lekin woh bhi dheere-dheere develop ho jaati hai. Pehle kisi aisi company ka 10-K padhein jisko aap already jaante hain — familiarity se filing samajhna bahut aasaan ho jaata hai.",
    },
    {
      question: "Ek 10-K padhne mein kitna time lagta hai?",
      answer:
        "Pehli baar thoroughly padhne mein 2-3 ghante lagte hain ek typical 10-K ke liye. Practice ke baad aap ek priority system develop kar lete hain: 15 minute risk factors aur MD&A ke liye (story), 30 minute financial statements ke liye (numbers), aur notes ke liye extra time sirf tab jab kuch unusual dikhe. Experienced investors poora filing nahi padhte — unko pata hota hai ki kaunse sections unke investment thesis ke liye matter karte hain.",
    },
    {
      question: "Kisi stock ki research ke liye pehle kaunsi SEC filing padhni chahiye?",
      answer:
        "Sabse recent 10-K (annual report) se shuru karein. Yeh complete picture deta hai: business description, puri saal ki financials, risk factors, aur management ka assessment. Phir latest 10-Q check karein quarterly updates ke liye. Uske baad recent 8-K filings scan karein kisi bhi material event ke liye. Aakhir mein Form 4 filings dekhein insider trading activity ke liye.",
    },
    {
      question: "Kya koi tool hai jo SEC filings automatically summarize kar sake?",
      answer:
        "Haan. Brefyr AI use karke har SEC filing ko publish hone ke kuch hi minutes mein process karta hai, plain-English summaries generate karta hai, significance scores (1-10) deta hai, aur key facts extract karta hai. Yeh filing khud padhne ki jagah nahi hai, lekin isse aapko prioritize karne mein madad milti hai ki kaunsi filing deeply padhni hai aur kaunsi skim karni hai.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Har publicly traded U.S. company ko Securities and Exchange Commission (SEC) ke paas regular reports file karni hoti hain. Yeh filings — jo SEC ke EDGAR database par free available hain — kisi bhi analyst report, earnings call transcript, ya financial news article se zyada information contain karti hain company ki financial health, risks, aur management decisions ke baare mein. Phir bhi zyaadatar individual investors inhe kabhi padhte nahi hain.</p>

<p>Yeh ek badi missed opportunity hai. SEC filings padhna investment superpower jaisa hai — iske liye na insider connections chahiye, na mehenge data terminals, na finance degree. Bas patience chahiye, ek systematic approach, aur aise documents padhne ki readiness jo entertaining nahi hain. Yeh guide aapko poora process step by step samjhayegi.</p>

<p><strong>Indian investors ke liye khaas baat:</strong> Agar aap Vested, INDMoney, ya Groww jaisi platforms se U.S. stocks mein invest karte hain, toh SEC filings aapki primary research source hain. RBI ke Liberalised Remittance Scheme (LRS) ke under aap $250,000 (lagbhag INR 2.1 crore) tak saalana invest kar sakte hain U.S. equities mein. Yeh paisa lagane se pehle company ki SEC filings padhna zaroori hai.</p>

<h2 id="filing-types">Chaar Sabse Important Filings</h2>

<p>SEC dozens of form types require karti hai, lekin chaar filings investment ke liye sabse zyada relevant information contain karti hain:</p>

<h3>10-K (Annual Report)</h3>

<p>Sabse comprehensive filing. Saal mein ek baar publish hoti hai. 10-K mein audited financial statements, complete business description, risk factor disclosures, management's discussion and analysis (MD&A), executive compensation details, aur legal proceedings hoti hain. Kisi company ko pehli baar evaluate karte waqt, 10-K hamesha starting point hoti hai.</p>

<p>10-K ko company ki "poori confession" samjho — business ke baare mein har material baat, jo federal securities law ke penalty ke under likhi gayi hai. Agar aap ek Indian investor hain jo Apple ya Microsoft mein invest karna chahte hain, toh unka 10-K aapki research ka foundation hai.</p>

<h3>10-Q (Quarterly Report)</h3>

<p>10-K ka lighter version, saal mein teen baar file hota hai (Q1, Q2, Q3 — Q4 ko 10-K cover karta hai). 10-Q mein unaudited quarterly financial statements aur condensed MD&A hota hai. Isse track karo ki annual reports ke beech business trajectory change toh nahi ho raha.</p>

<h3>8-K (Current Report)</h3>

<p>Real-time filing. 8-K kisi material event ke chaar business days ke andar submit hoti hai — acquisition, CEO departure, bankruptcy filing, auditor change, ya koi bhi significant development. 8-Ks aapka early warning system hain opportunities aur risks dono ke liye. Jab Vested ya INDMoney par aapke portfolio ki koi company ek major 8-K file karti hai, toh immediately padhein.</p>

<h3>Form 4 (Insider Transaction)</h3>

<p>Kisi bhi stock purchase ya sale ke do business days ke andar file hoti hai company insider (officers, directors, 10%+ shareholders) dwara. Form 4 batata hai ki company ko sabse zyada jaanne wale log apne paise ka kya kar rahe hain. CEO ke open-market purchases particularly informative hote hain.</p>

<h2 id="reading-10k">10-K Kaise Padhein: Section by Section</h2>

<p>10-K ko front to back mat padho. Apne research goals ke hisaab se ek priority system develop karo.</p>

<h3>Pehli Priority: Risk Factors (Item 1A)</h3>

<p>Yahaan se shuru karo. Risk factors mein company batati hai ki kya-kya galat ho sakta hai. Law ke under inhe comprehensive hona zaroori hai, matlab yahan operational risks, financial risks, regulatory risks, competitive threats, aur industry-specific dangers sab milenge.</p>

<p>Risk factors ke saath kya karein:</p>
<ul>
<li><strong>Pichle saal se compare karo.</strong> Naye risk factors jo pehle ke 10-K mein nahi the, emerging threats signal karte hain. Agar company add karti hai "we may not be able to continue as a going concern" toh yeh bahut bada red flag hai.</li>
<li><strong>Severity assess karo.</strong> "Competition in our industry is intense" boilerplate hai jo har company likhti hai. "Our largest customer, representing 35% of revenue, has notified us of their intention to evaluate alternative suppliers" — yeh specific aur alarming hai.</li>
<li><strong>Count karo.</strong> Risk factors ki number badhna ya existing ones ka significantly lamba hona suggest karta hai ki management ko aage zyada uncertainty dikh rahi hai.</li>
</ul>

<h3>Doosri Priority: MD&A (Item 7)</h3>

<p>Management's Discussion and Analysis 10-K ka narrative heart hai. Management apne shabdon mein batati hai ki saal mein kya hua — regulated framework ke andar. Inhe discuss karna zaroori hai:</p>
<ul>
<li>Revenue aur expense trends, changes ki explanations ke saath</li>
<li>Cash flow aur liquidity position</li>
<li>Capital expenditure plans</li>
<li>Known trends, demands, aur uncertainties</li>
<li>Off-balance-sheet arrangements</li>
</ul>

<p>MD&A healthy skepticism ke saath padhein. Management ka natural incentive hai results par positive spin daalna. Jab aap phrases dekhein jaise "excluding certain one-time items, adjusted operating income grew 12%," toh check karo ki woh "one-time items" kya hain — aur kya woh har saal recur karte hain.</p>

<p>Sabse valuable MD&A paragraphs woh hote hain jo negative results ko candidly discuss karte hain. Management jo revenue declines, margin compression, ya cash flow deterioration ko seedha address karti hai — specific explanations aur remediation plans ke saath — woh zyada trustworthy hai banaav se kaam chalaane wale management se.</p>

<h3>Teesri Priority: Financial Statements (Item 8)</h3>

<p>Income statement, balance sheet, aur cash flow statement quantitative foundation hain. Jo investors trained accountants nahi hain, unke liye inn paanch numbers par focus karein:</p>

<ol>
<li><strong>Revenue</strong> (income statement, top line). Kya grow ho raha hai? Kitna? Growth accelerate ho raha hai ya decelerate?</li>
<li><strong>Operating income</strong> (income statement). Revenue minus COGS minus operating expenses. Yeh dikhata hai ki core business profitable hai ya nahi interest aur taxes se pehle.</li>
<li><strong>Free cash flow</strong> (cash flow statement). Operating cash flow minus capital expenditures. Yeh woh cash hai jo business apne assets maintain karne ke baad generate karta hai. Ek Indian investor ke liye, INR mein calculate karo — agar Apple $100 billion free cash flow generate karti hai, toh woh lagbhag INR 8.4 lakh crore hai.</li>
<li><strong>Total debt</strong> (balance sheet). Company par kitna karz hai. Cash aur equivalents se compare karo — difference net debt hai. Net debt ko EBITDA se compare karo leverage ratio ke liye.</li>
<li><strong>Shares outstanding</strong> (balance sheet ya cover page). Kya share count badh raha hai (dilution stock-based compensation ya equity raises se) ya ghat raha hai (share buybacks)? Badhta share count matlab aapka ownership percentage ghat raha hai.</li>
</ol>

<h3>Chauthi Priority: Notes to Financial Statements</h3>

<p>Notes mein real detail hoti hai — accounting policies, debt maturities, lease obligations, contingent liabilities, segment breakdowns, aur revenue recognition methods. Yeh 30-50 pages tak ho sakti hain. Har note padhna zaroori nahi, lekin kuch check karne chahiye:</p>

<ul>
<li><strong>Revenue recognition.</strong> Company revenue kaise count karti hai? Aggressive revenue recognition (delivery se pehle revenue recognize karna) top line inflate kar sakti hai.</li>
<li><strong>Debt maturities.</strong> Agar company par $200 million ka debt agley saal mature ho raha hai aur cash sirf $50 million hai, toh refinancing problem hai.</li>
<li><strong>Contingent liabilities.</strong> Lawsuits, regulatory investigations, aur potential future obligations. Note mein possible outcomes ki range aur reserves describe hoti hain.</li>
<li><strong>Related party transactions.</strong> Company aur uske officers, directors, ya unke families ke beech business dealings.</li>
</ul>

<h2 id="reading-8k">8-K Kaise Padhein</h2>

<p>8-Ks chhoti hoti hain — typically 1-5 pages — aur item number se structured hain. Item number event ki category batata hai. Aapka triage system aisa hona chahiye:</p>

<p><strong>Turant padhein:</strong></p>
<ul>
<li>Item 1.03 — Bankruptcy</li>
<li>Item 4.01 — Auditor change</li>
<li>Item 4.02 — Restatement (pehle ki financials par non-reliance)</li>
<li>Item 5.02 — CEO/CFO departure</li>
</ul>

<p><strong>Aaj hi padhein:</strong></p>
<ul>
<li>Item 1.01/1.02 — Material contract entered ya terminated</li>
<li>Item 2.01 — Acquisition ya disposition complete</li>
<li>Item 2.06 — Material impairment</li>
</ul>

<p><strong>Jab time mile padhein:</strong></p>
<ul>
<li>Item 2.02 — Earnings release</li>
<li>Item 7.01 — Regulation FD disclosure</li>
<li>Item 8.01 — Other events</li>
</ul>

<h2 id="reading-form4">Form 4 Kaise Padhein</h2>

<p>Form 4 structured data hai, narrative text nahi. Teen fields par focus karo:</p>

<ol>
<li><strong>Transaction code.</strong> P = purchase (bullish), S = sale (ambiguous), M = option exercise (neutral), F = tax withholding (ignore karo), A = grant/award (ignore karo).</li>
<li><strong>Dollar value.</strong> Shares ko price se multiply karo. $2 million ka open-market purchase conviction dikhata hai. $10,000 ka purchase formality ho sakti hai. Indian rupees mein sochein: $2 million matlab lagbhag INR 1.68 crore — yeh serious money hai.</li>
<li><strong>Footnotes.</strong> Check karo ki transaction 10b5-1 plan (pre-arranged, kam informative) ke under hua ya discretionary (zyada informative).</li>
</ol>

<p>Sabse powerful Form 4 signal: cluster buying — teen ya zyada insiders ek hi 30-day window mein purchase karte hain. Yeh multiple informed individuals hain jo independently same conclusion par pahunch rahe hain stock ki value ke baare mein.</p>

<h2 id="where-to-start">Kahaan Se Shuru Karein: Practical Workflow</h2>

<p>Koi aisi company choose karo jisko aap already jaante hain — jiski products aap use karte hain ya jiski industry aap samajhte hain. Indian investors ke liye, Apple, Microsoft, Google, Amazon, ya Tesla achhe starting points hain kyunki yeh familiar companies hain.</p>

<p><a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">SEC EDGAR</a> par jaayein aur unka latest 10-K pull karo.</p>

<ol>
<li><strong>Risk factors padhein.</strong> Time: 10 minute. Jo bhi surprise kare note karo.</li>
<li><strong>MD&A padhein.</strong> Time: 15 minute. Note karo kahaan management ka tone confident hai aur kahaan hedging kar rahi hai.</li>
<li><strong>Paanch numbers check karo</strong> financial statements se. Time: 10 minute. Revenue, operating income, free cash flow, total debt, shares outstanding.</li>
<li><strong>Notes mein red flags search karo.</strong> Time: 10 minute. Revenue recognition, debt maturities, related party transactions.</li>
<li><strong>Recent 8-Ks pull karo.</strong> Time: 5 minute. 10-K ke baad koi material event?</li>
<li><strong>Form 4 filings check karo.</strong> Time: 5 minute. Insiders buy kar rahe hain ya sell?</li>
</ol>

<p>Total: lagbhag 55 minute. Teen-chaar companies ke liye yeh karne ke baad, structure familiar ho jaata hai aur aap filings mein bahut tezi se move karoge.</p>

<h2 id="common-mistakes">SEC Filings Padhte Waqt Common Mistakes</h2>

<p><strong>Sirf press release padhna.</strong> Earnings press release (8-K Item 2.02 ke roop mein file hoti hai) ek marketing document hai. Yeh positive numbers se shuru hoti hai aur "adjusted" metrics use karti hai jo inconvenient expenses exclude karti hain. 10-Q, jo kuch din ya hafton baad file hoti hai, complete picture deti hai GAAP numbers aur detailed notes ke saath.</p>

<p><strong>Management commentary ko face value par trust karna.</strong> Management ko disclose karna zaroori hai, lekin woh stock price maintain karne ke liye bhi motivated hain. "We see continued momentum" fact nahi hai — yeh opinion hai. Numbers aur risk factors par focus karo, jinke misrepresentation ke legal consequences hote hain.</p>

<p><strong>Auditor ka report ignore karna.</strong> Zyaadatar investors auditor ka report skip karte hain kyunki woh usually clean opinion hota hai. Lekin jab woh clean nahi hai — jab going concern paragraph hai, qualification hai, ya scope limitation hai — toh woh filing ka sabse important page hai.</p>

<p><strong>Accounting differences adjust kiye bina companies compare karna.</strong> Same industry ki do companies bahut alag numbers report kar sakti hain sirf isliye ki woh different accounting methods use karti hain (inventory ke liye FIFO vs LIFO, depreciation ke liye straight-line vs accelerated). Notes to financial statements har company ki accounting policies explain karti hain — compare karne se pehle padhein.</p>

<p><strong>Depth ki jagah volume chase karna.</strong> Dus 10-Ks superficially padhna do 10-Ks deeply padhne se kam valuable hai. Insights details se aati hain — ek specific risk factor, ek unusual footnote, quarterly numbers mein trend — headlines scan karne se nahi.</p>

<h2 id="tools-and-resources">Tools Aur Resources</h2>

<p><strong>SEC EDGAR</strong> (<a href="https://www.sec.gov/edgar" target="_blank" rel="noopener noreferrer">sec.gov/edgar</a>): Primary source. Free, comprehensive, real time mein update hota hai.</p>

<p><strong>EDGAR Full-Text Search</strong> (<a href="https://efts.sec.gov/LATEST/search-index" target="_blank" rel="noopener noreferrer">efts.sec.gov</a>): Filings ke content mein keyword se search karo. Specific disclosures dhundhne ke liye bohot powerful hai.</p>

<p><strong>Brefyr</strong>: 7,600+ companies ki har filing ko minutes mein process karta hai, AI-generated summaries, significance scores, aur insider trading analysis add karta hai. Small-cap stocks ke liye khaas taur par useful hai jinpar zero analyst coverage hai, jahaan SEC filing hi investment-grade information ka ek matra source hai.</p>

<p><strong>Indian platforms:</strong> Vested, INDMoney, aur Groww U.S. stock access provide karti hain, lekin deep research ke liye EDGAR aur Brefyr direct use karna best practice hai. RBI LRS limit ($250,000/year) ke andar invest karte waqt, filing-level research aapko better decisions lene mein madad karegi.</p>
`,
};

export const articleHowToUseEdgarHi: LearnArticle = {
  slug: "how-to-use-edgar",
  pillar: "sec-filings",
  title: "SEC EDGAR Kaise Use Karein: Investors Ke Liye Step-by-Step Walkthrough",
  metaDescription:
    "SEC EDGAR ka practical walkthrough — companies search karna, specific filings dhundhna, full-text search use karna, aur alerts set karna sikhein.",
  readingTime: 14,
  difficulty: "beginner",
  wordCount: 850,
  category: "Getting Started",
  tags: ["edgar", "sec", "how-to", "research-tools", "beginner"],
  relatedSlugs: ["how-to-read-sec-filings", "sec-filing-types-explained"],
  faq: [
    {
      question: "Kya SEC EDGAR free hai?",
      answer:
        "Haan, bilkul free hai. EDGAR SEC dwara public funds se maintain hota hai. Koi registration nahi, koi login nahi, koi paywall nahi, aur manual browsing ke liye koi usage limit nahi. Data public domain hai — koi bhi access, download, aur redistribute kar sakta hai SEC filings. India se bhi aap isse freely access kar sakte hain — Vested ya INDMoney se U.S. stocks invest karte waqt yeh aapki primary research tool hai.",
    },
    {
      question: "Kya SEC filings ke andar ka actual text search kar sakte hain?",
      answer:
        "Haan. EDGAR ka Full-Text Search System (EFTS) efts.sec.gov/LATEST/search-index par filings ke content mein keyword se search karne deta hai. Aap koi specific phrase ('going concern'), kisi person ka naam, koi contract term, ya koi bhi text jo kisi filing mein hai search kar sakte hain. Yeh EDGAR ka sabse powerful aur sabse underused feature hai.",
    },
    {
      question: "EDGAR par company ka sabse recent 10-K kaise dhundhein?",
      answer:
        "sec.gov/cgi-bin/browse-edgar par jaayein, company name ya ticker search box mein enter karein, filing type '10-K' set karein, aur Search click karein. Sabse recent 10-K top par dikhai degi. Filing date click karein filing index kholne ke liye, phir main document (usually pehla .htm file) click karein full 10-K padhne ke liye.",
    },
    {
      question: "Kya company file karne par email alerts mil sakte hain?",
      answer:
        "EDGAR per-company RSS feeds offer karta hai, lekin native email alerts nahi. Brefyr jaise third-party services EDGAR filings process karke company, filing type, aur significance level ke hisaab se filtered email notifications provide karte hain. Aap EDGAR ke RSS feeds ko RSS reader (Feedly, Inoreader) mein bhi use kar sakte hain near-real-time notifications ke liye.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>SEC EDGAR individual investors ke liye available sabse comprehensive free financial research tool hai. Har U.S. public company ki har SEC filing — 10-Ks, 10-Qs, 8-Ks, insider transactions, institutional holdings, proxy statements, aur registration documents — yahaan stored aur searchable hai. Phir bhi zyaadatar retail investors ne kabhi directly use nahi kiya, third-party summaries par depend karte hain jo raw data ko filter aur interpret karti hain.</p>

<p>Indian investors ke liye yeh khaas taur par relevant hai: jab aap Vested, INDMoney, ya Groww se U.S. equities mein invest karte hain RBI ke LRS ($250,000/year) ke under, toh EDGAR aapka primary source hai company ki actual financial reality jaanne ke liye.</p>

<p>Yeh walkthrough EDGAR ke core features step by step le jayega. End tak, aap kisi bhi company ki filing dhundh sakenge, sabhi filings mein keyword se search kar sakenge, aur primary source use karke basic research workflow bana sakenge.</p>

<h2 id="company-search">Step 1: Company Ki Filings Dhundhna</h2>

<p><a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">EDGAR Company Search page</a> se shuru karein.</p>

<h3>Company Name Ya Ticker Se Search</h3>

<p>"Company name" field mein full company name ya ticker symbol enter karein. EDGAR case-sensitive nahi hai. "apple" ya "AAPL" dono kaam karte hain.</p>

<p>Name se search karne par EDGAR sabhi matching companies return karta hai. "Apple" se Apple Inc., Apple Hospitality REIT, aur kayi aur entities aayengi. Company name click karein unki filing page access karne ke liye.</p>

<p>Ticker se search karne par EDGAR exact company return karta hai. Tickers zyada fast aur precise hain.</p>

<h3>Filing Type Se Filter</h3>

<p>"Filing type" field results ko specific form tak narrow karta hai. "10-K" enter karein sirf annual reports dekhne ke liye, "8-K" material events ke liye, ya "4" insider transactions ke liye. Blank chhod dein sab filings dekhne ke liye.</p>

<p>Useful filing type searches:</p>
<ul>
<li><strong>10-K</strong> — Annual reports (10-K/A amendments bhi include)</li>
<li><strong>10-Q</strong> — Quarterly reports</li>
<li><strong>8-K</strong> — Material events</li>
<li><strong>4</strong> — Insider trading (Form 4)</li>
<li><strong>DEF 14A</strong> — Proxy statements</li>
<li><strong>SC 13D</strong> — Activist ownership disclosures</li>
<li><strong>13F-HR</strong> — Institutional holdings</li>
<li><strong>S-1</strong> — IPO registration statements</li>
</ul>

<h3>Results Padhna</h3>

<p>Search results reverse chronological order mein dikhte hain (newest pehle). Har row mein filing date, form type, aur filing ka link hota hai. "Documents" column filing index page ka link hai, jo filing ke andar ke individual files list karta hai — main document, exhibits, certifications, aur XBRL data.</p>

<h2 id="reading-filing">Step 2: Specific Filing Padhna</h2>

<p>Search results se filing date ya document link click karein. Yeh filing index page kholega.</p>

<h3>Filing Index Samajhna</h3>

<p>Filing index page par top mein metadata hota hai (company name, CIK, accession number, filing date) aur neeche documents ka table. Har filing mein multiple documents hote hain:</p>

<ul>
<li><strong>Main filing document.</strong> Usually pehla .htm file. 10-K ke liye, yeh actual annual report hai — potentially 100+ pages. Browser mein full filing padhne ke liye click karein.</li>
<li><strong>Exhibits.</strong> Supporting documents jaise material contracts, legal opinions, aur certifications. ex-21 (subsidiary list), ex-31 (CEO/CFO certifications), ex-32 (SOX certifications) ke roop mein numbered.</li>
<li><strong>XBRL files.</strong> Machine-readable financial data. .xml ya .xsd extension wale. Jab tak aap programmatic analysis nahi kar rahe, skip kar sakte hain.</li>
</ul>

<p>Zyaadatar research ke liye sirf main document chahiye. Exhibits tab useful hain jab aap filing mein referenced kisi contract, loan agreement, ya legal settlement ka actual text padhna chahein.</p>

<h2 id="full-text-search">Step 3: Filing Content Search Karna (Full-Text Search)</h2>

<p>Yeh EDGAR ka sabse powerful feature hai aur sabse kam jaana jaata hai. <a href="https://efts.sec.gov/LATEST/search-index" target="_blank" rel="noopener noreferrer">EDGAR Full-Text Search System (EFTS)</a> database ki har filing ka actual content search karne deta hai.</p>

<h3>Basic Keyword Search</h3>

<p>Koi bhi keyword ya phrase enter karein. EFTS sab filings mein search karke relevance ke hisaab se results return karta hai, filing type, company name, date, aur matching text ka snippet dikhata hai.</p>

<p>Practical examples:</p>
<ul>
<li><strong>"going concern"</strong> — Har filing dhundhein jo going concern issues mention karti hai. Date range se filter karein recent warnings ke liye.</li>
<li><strong>"material weakness"</strong> — Sab companies jo internal control failures disclose kar rahi hain.</li>
<li><strong>"cybersecurity incident"</strong> — Companies jinhone data breaches ya cyber attacks disclose kiye hain.</li>
<li><strong>"significant customer"</strong> — Companies jo customer concentration risk discuss kar rahi hain.</li>
<li><strong>[Person ka naam]</strong> — Kisi specific executive, board member, ya related party ko sabhi filings mein search karein.</li>
</ul>

<h3>Advanced Filters</h3>

<p>EFTS in se filter karne ki facility deta hai:</p>
<ul>
<li><strong>Date range:</strong> Last year, quarter, ya custom range ki filings tak narrow karein.</li>
<li><strong>Form type:</strong> Sirf 10-Ks mein search, sirf 8-Ks mein, etc.</li>
<li><strong>Company name ya CIK:</strong> Specific company tak limit karein.</li>
</ul>

<p>Inn filters ko combine karke powerful screening capabilities milti hain. Example: last 12 months ki 10-K filings mein "going concern" search karein, pharmaceutical manufacturing SIC codes (2830-2836) tak filtered. Aapne abhi financially distressed pharma companies screen kar liya — ek kaam jo kisi aur platform par ghanton lagta.</p>

<h2 id="insider-transactions">Step 4: Insider Transactions Track Karna</h2>

<p>Company search karein aur filing type "4" se filter karein sab Form 4 filings (insider transactions) dekhne ke liye. Har filing dikhati hai kisne trade kiya, kya kiya (buy/sell/exercise), kitne shares, aur kis price par.</p>

<p>Complete insider trading picture ke liye aapko time ke saath multiple Form 4 filings dekhni hoti hain. EDGAR inhe chronologically display karta hai, lekin data ko spreadsheet mein extract karna manual effort maangta hai. Yahaan Brefyr jaise tools significant value add karte hain — platform har Form 4 filing automatically parse karke har stock page par structured format mein insider trading history display karta hai.</p>

<h2 id="institutional-holdings">Step 5: Institutional Holdings Check Karna</h2>

<p>Company search karein aur 13F-HR filings dhundhein (ya SC 13D/13G filings 5%+ holders ke liye). Alternatively, kisi specific institution ko name se search karein unki 13F-HR filings aur full portfolio holdings dekhne ke liye.</p>

<p>Jaanna chahte hain Berkshire Hathaway ke paas kya hai? EDGAR par "Berkshire Hathaway" search karein, filing type "13F-HR" se filter karein, aur sabse recent filing kholein. Aapko table milega jo har U.S. stock list karta hai jo unke paas hai, share counts aur approximate values ke saath. Indian investors ke liye yeh valuable hai — agar Warren Buffett kisi company mein invest kar rahe hain, toh woh research karne layak hai.</p>

<h2 id="sec-comment-letters">Step 6: SEC Comment Letters Padhna</h2>

<p>EDGAR ka hidden gem. SEC ki Division of Corporation Finance filings review karti hai aur companies ko comment letters bhejti hai, sawaal poochti hai ya additional disclosure maangti hai. Company ke responses bhi EDGAR par file hote hain form type "CORRESP" ke under.</p>

<p>Comment letters dhundhne ke liye: company search karein, "CORRESP" se filter karein. Results SEC aur company ke beech ki back-and-forth correspondence dikhate hain. Yeh letters reveal karte hain ki SEC ne kya question kiya — accounting treatments, revenue recognition, executive compensation, related party transactions — aur company ne kaise respond kiya.</p>

<p>Agar SEC kisi company ki revenue recognition methodology ke baare mein pointed questions pooch rahi hai, toh yeh woh information hai jo zyaadatar investors kabhi nahi dekhte. Yeh sawaal aksar un issues ka pehle se sign hote hain jo baad mein restatements ya enforcement actions mein surface hote hain.</p>

<h2 id="rss-feeds">Step 7: Filing Alerts Set Karna</h2>

<p>EDGAR individual companies ke liye RSS feeds provide karta hai. Kisi company ke EDGAR page par RSS icon dhundhein. RSS reader (Feedly, Inoreader, ya kayi email clients mein built-in) mein feed subscribe karein company ki koi bhi nayi filing aane par notification paane ke liye.</p>

<p>RSS feed mein sab filing types aati hain — 10-Ks, 8-Ks, Form 4s, aur baaki sab. Zyada filtered alerts ke liye — sirf ek certain significance threshold se oopar material events, sirf insider purchases, sirf specific filing types — aapko EDGAR ki raw feed ke oopar ek processing layer chahiye. Brefyr apne alert rule system ke zariye yeh filtering provide karta hai.</p>

<h2 id="research-workflow">Sab Milaakar: Ek Research Workflow</h2>

<p>Stock kharidne se pehle complete research workflow yeh hai:</p>

<ol>
<li><strong>Company search.</strong> EDGAR par company dhundhein. Unka CIK, SIC code, aur filer category note karein.</li>
<li><strong>Latest 10-K padhein.</strong> Risk factors (Item 1A), MD&A (Item 7), aur financial statements (Item 8) par focus.</li>
<li><strong>Latest 10-Q check karein.</strong> Annual report ke baad kuch change hua? Naye risk factors? Revenue trajectory shift?</li>
<li><strong>Recent 8-Ks scan karein.</strong> Koi material events — acquisitions, management changes, covenant breaches?</li>
<li><strong>Form 4 filings review karein.</strong> Insiders buy kar rahe hain ya sell? Koi cluster activity?</li>
<li><strong>Proxy statement (DEF 14A) padhein.</strong> Executive compensation reasonable hai? Board independent hai?</li>
<li><strong>Full-text search.</strong> Company name plus "going concern," "material weakness," "restatement," aur "SEC investigation" search karein. Saaf results matlab company ka track record clean hai.</li>
<li><strong>Comment letters check karein.</strong> SEC ne company ki disclosures question kiye hain? Company ne kaise respond kiya?</li>
</ol>

<p>Thorough initial assessment ke liye yeh process 2-3 ghante leta hai. Pehle research session ke baad, ongoing monitoring — nayi 8-Ks aur Form 4s check karna jaise file hoti hain — hafta mein kuch hi minute leta hai. Indian investors ke liye jo Vested ya INDMoney se U.S. stocks hold karte hain, yeh weekly check bahut zaroori hai.</p>

<h2 id="edgar-limitations">EDGAR Kya Nahi Kar Sakta</h2>

<p>EDGAR filing repository hai, analysis platform nahi. Yeh raw documents store karta hai lekin interpret nahi karta. Yahan nahi milega:</p>
<ul>
<li>Stock price charts ya trading data</li>
<li>Analyst estimates ya consensus forecasts</li>
<li>Peer comparison tools</li>
<li>Financial ratio calculations</li>
<li>Filing summaries ya significance ratings</li>
</ul>

<p>Yeh gaps woh jagah hain jahaan third-party tools value add karte hain. Brefyr EDGAR filings ko publication ke minutes mein process karke AI-generated summaries, significance scores, aur structured data extraction add karta hai — raw filing ko 7,600+ tracked companies ke liye actionable intelligence mein badalta hai.</p>

<p>Lekin EDGAR source rehta hai. Har financial data provider, har research platform, aur har analyst ultimately wohi EDGAR filings se data lete hain jo aap free mein padh sakte hain. Professional aur retail investors ke beech fark data ki access nahi — paddhne ki readiness hai.</p>
`,
};

export const articleHowToTrackInsiderTradingHi: LearnArticle = {
  slug: "how-to-track-insider-trading",
  pillar: "sec-filings",
  title: "Insider Trading Kaise Track Karein: Form 4 Filings Ki Practical Guide",
  metaDescription:
    "SEC Form 4 filings se insider buying aur selling track karne ki step-by-step guide. EDGAR par insider trades dhundhna, transaction codes samajhna sikhein.",
  readingTime: 12,
  difficulty: "intermediate",
  wordCount: 870,
  category: "Research Strategies",
  tags: ["insider-trading", "form-4", "research", "intermediate", "strategy"],
  relatedSlugs: ["how-to-read-sec-filings", "sec-filing-types-explained", "how-to-use-edgar"],
  faq: [
    {
      question: "Kya insider buying data ke basis par trade karna legal hai?",
      answer:
        "Haan, bilkul. Form 4 filings public information hain jo EDGAR par available hain. Publicly disclosed insider transaction data use karke investment decisions lena completely legal hai. Jo illegal hai woh material non-public information par trade karna hai — woh information jo public ko disclose nahi hui hai. Form 4 data, by definition, already public hai. Indian investors bhi yeh data freely use kar sakte hain Vested, INDMoney ya Groww se U.S. stocks trade karte waqt.",
    },
    {
      question: "Insider trade ke kitne time baad Form 4 dikhai deta hai?",
      answer:
        "Insiders ko transaction ke do business days ke andar Form 4 file karna hota hai. Filing EDGAR par electronic submission ke almost turant baad dikhai deti hai. Practice mein, aap typically ek insider ka trade hone ke 48-72 ghanton ke andar dekh sakte hain. Brefyr Form 4 filings ko EDGAR publication ke minutes mein process karta hai.",
    },
    {
      question: "Kya har insider purchase copy karni chahiye?",
      answer:
        "Nahi. Insider buying ek useful signal hai, guaranteed winner nahi. Har insider purchase informative nahi hoti — newly appointed directors ki chhoti purchases, board policies ke required purchases, aur low-ranking officers ki purchases kam weight rakhti hain. Large-dollar open-market purchases par focus karein CEO aur CFO ki, cluster buying (multiple insiders), aur significant stock price decline ke baad ki purchases.",
    },
    {
      question: "Kaunse insiders ki trades sabse zyada matter karti hain?",
      answer:
        "CEO aur CFO ki purchases sabse strong signals hain kyunki inn individuals ke paas company ki financial position aur prospects ka sabse comprehensive view hota hai. Board members ki purchases meaningful hain lekin kam informed. VP-level officers ki visibility narrow hoti hai. 10%+ shareholders ki trades conviction reflect karti hain lekin zaroori nahi ki operations ki insider knowledge ho.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Insider trading data retail investors ke liye available kuch legal edges mein se ek hai. Jab ek CEO apne $2 million kharch karke open market mein shares kharidta hai, toh yeh stock tip nahi hai — yeh real dollars ke saath backed revealed preference hai. Academic research consistently dikhata hai ki insider purchases above-average returns se pehle aati hain, khaas taur par small-cap stocks mein jahaan signal ko broader market ke catch karne se pehle develop hone ka time milta hai.</p>

<p>Indian investors ke liye yeh khaas taur par relevant hai: jab aap RBI ke LRS ($250,000/year, lagbhag INR 2.1 crore) ke under U.S. stocks mein invest karte hain Vested, INDMoney, ya Groww ke through, toh insider trading data ek powerful research tool hai jo free mein available hai.</p>

<p>Yeh guide systematically insider trades track karne ki mechanics walk through karegi: data kahaan milega, noise se signal kaise filter karein, aur insider activity ko apni research process mein kaise incorporate karein.</p>

<h2 id="where-to-find">Insider Trading Data Kahaan Milega</h2>

<h3>SEC EDGAR (Primary Source)</h3>

<p>Har insider transaction Form 4 par file hoti hai, <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&type=4&dateb=&owner=include&count=40" target="_blank" rel="noopener noreferrer">EDGAR</a> par free available. Kisi specific company ke insider trades dekhne ke liye:</p>

<ol>
<li>EDGAR Company Search par jaayein</li>
<li>Company name ya ticker enter karein</li>
<li>Filing type "4" set karein</li>
<li>Search click karein</li>
</ol>

<p>Results har Form 4 filing reverse chronological order mein dikhate hain. Har filing ek ya zyada transactions represent karti hai ek single insider ki. Filing mein click karke transaction details dekhein: kisne trade kiya, kya kiya, kitne shares, kis price par, aur unki resulting ownership.</p>

<h3>Brefyr (Processed Data)</h3>

<p>Brefyr 7,600+ companies ke liye har Form 4 filing ko EDGAR publication ke minutes mein process karta hai. Har stock page insider trading history structured format mein display karta hai — individual Form 4 documents padhne ki zaroorat nahi. Platform transaction type, dollar value, aur insider ki remaining position extract karta hai, aur yeh data filing significance score mein factor hota hai.</p>

<h2 id="reading-form4">Form 4 Filing Padhna</h2>

<p>Form 4 ek structured document hai specific fields ke saath. Yahaan focus karein:</p>

<h3>Table I: Non-Derivative Securities</h3>

<p>Yeh table common stock mein transactions dikhata hai — zyaadatar investors ke liye sabse relevant section. Key columns:</p>

<ul>
<li><strong>Transaction Date.</strong> Trade kab hua.</li>
<li><strong>Transaction Code.</strong> Sabse important field.
  <ul>
  <li><strong>P = Purchase.</strong> Open-market buy. Sabse strong bullish signal. Insider ne apne paise kharch kiye.</li>
  <li><strong>S = Sale.</strong> Open-market sell. Ambiguous — insiders kayi non-investment reasons se bhi sell karte hain.</li>
  <li><strong>A = Award/Grant.</strong> Company ne insider ko compensation ke roop mein shares ya options diye. Market signal nahi.</li>
  <li><strong>M = Exercise.</strong> Insider ne stock options exercise kiye. Aksar S (cashless exercise) se followed hota hai. Neutral.</li>
  <li><strong>F = Tax withholding.</strong> Vesting equity awards par taxes cover karne ke liye shares surrender kiye. Automatic, meaningful nahi.</li>
  <li><strong>G = Gift.</strong> Insider ne shares donate kiye. Tax planning, bearish signal nahi.</li>
  </ul>
</li>
<li><strong>Amount.</strong> Kitne shares transact hue.</li>
<li><strong>Price.</strong> Per share price. Dollar value ke liye amount se multiply karein. INR mein sochein: $500,000 ka purchase matlab lagbhag INR 42 lakh.</li>
<li><strong>Shares Owned Following Transaction.</strong> Trade ke baad insider ki total position. Critical context — 500,000 mein se 5,000 shares sell karna noise hai; 6,000 mein se 5,000 sell karna exit hai.</li>
</ul>

<h3>Table II: Derivative Securities</h3>

<p>Options, warrants, aur other derivative securities mein transactions dikhata hai. Sabse relevant jab insiders options exercise karte hain (code M) — check karein ki unhone shares hold kiye ya immediately sell kiye (same date ke liye Table I mein code S).</p>

<h3>Footnotes</h3>

<p>Hamesha footnotes check karein. Yeh disclose karte hain ki transaction <strong>10b5-1 plan</strong> (pre-arranged trading schedule) ke under hua ya nahi. 10b5-1 plan ke under transactions advance mein set hote hain aur insider ki current view reflect nahi karte. Non-10b5-1 transactions discretionary aur zyada informative hain.</p>

<h2 id="signal-framework">Signal Hierarchy: Kya Sabse Zyada Matter Karta Hai</h2>

<p>Sab insider trades equal nahi hain. Most se least informative ki ranking:</p>

<h3>Tier 1: Highest Signal (Action Lo)</h3>

<p><strong>Cluster buying.</strong> Teen ya zyada insiders ek 30-day window mein purchase karte hain. Multiple informed individuals independently yeh conclude karte hain ki stock current prices par kharidne layak hai — yeh sabse strong insider signal hai. Studies dikhate hain ki cluster buying 12-month outperformance predict karti hai market se 5-8% oopar.</p>

<p><strong>CEO/CFO ki badi purchases decline ke baad.</strong> Jab stock 20%+ gir chuka hai aur CEO ya CFO $500,000+ shares kharidta hai, toh woh apne vishwas ke peeche real money laga rahe hain ki market ne overreact kiya hai. Inn contrarian purchases ki predictive value sabse zyada hai.</p>

<h3>Tier 2: Strong Signal (Aur Research Karo)</h3>

<p><strong>CEO/CFO ki purchases kisi bhi waqt.</strong> Price decline ke bina bhi, CEO ya CFO ki open-market purchases management confidence indicate karti hain. Dollar amount se weight karein — $1 million ka matlab $50,000 se zyada hai.</p>

<p><strong>Long-tenured insider ki pehli-baar purchase.</strong> Ek executive jo 10 saal se company mein hai aur kabhi open market mein shares nahi kharide, achanak purchase karna — yeh unki soch mein regime change represent karta hai.</p>

<p><strong>Board minimums se oopar director purchases.</strong> Kayi boards directors ke liye minimum stock position rakhna zaroori karte hain. Us minimum se oopar ki purchases voluntary aur meaningful hain.</p>

<h3>Tier 3: Moderate Signal (Context Ke Liye Note Karo)</h3>

<p><strong>VP-level officers ki single purchases.</strong> Informative lekin inn individuals ki visibility C-suite se narrow hoti hai. Kam weight do.</p>

<p><strong>10%+ shareholder purchases.</strong> Bade holder ki conviction indicate karti hain lekin officer purchases jaisi inside-knowledge signal nahi laati.</p>

<h3>Tier 4: Low/No Signal (Usually Ignore Karo)</h3>

<p><strong>Option exercises (M) followed by sales (S).</strong> Cashless exercises compensation collection hain, market bets nahi.</p>

<p><strong>Tax withholding (F).</strong> Tax ke liye automatic shares surrender. Discretionary nahi.</p>

<p><strong>Grants aur awards (A).</strong> Company equity compensation de rahi hai. Insider ne buy nahi kiya.</p>

<p><strong>10b5-1 plan transactions.</strong> Pre-arranged, current views reflect nahi karti.</p>

<p><strong>Newly appointed directors ki chhoti purchases.</strong> Aksar board policy ke under pehle saal mein required hoti hain.</p>

<h2 id="selling-signals">Insider Selling Kya Batati Hai (Aur Kya Nahi)</h2>

<p>Insider selling inherently ambiguous hai. Insiders legitimate personal reasons se sell karte hain: diversification, tax planning, ghar kharidna, tuition, charitable giving, divorce. Ek single insider ka sell karna almost kabhi informative nahi hai.</p>

<p>Jo selling patterns attention deserve karte hain:</p>

<ul>
<li><strong>Cluster selling (3+ insiders 30 din mein).</strong> Collective action shared pessimism suggest karti hai, personal financial needs nahi.</li>
<li><strong>Accelerating pace.</strong> Insider jo $100K/quarter se salon se bech raha tha achanak ek quarter mein $2M bech deta hai.</li>
<li><strong>Complete exits.</strong> Insider jo apni poori remaining position bech deta hai definitively done hai.</li>
<li><strong>Scheduled catalysts se pehle selling.</strong> Earnings report, FDA decision, ya product launch ke pehle heavy insider sales.</li>
<li><strong>CFO selling.</strong> CFO ke paas company ki financial trajectory ka sabse detailed view hota hai. CFO ki sales zyada weight rakhti hain.</li>
</ul>

<h2 id="building-watchlist">Insider Trading Watchlist Banana</h2>

<p>Investment process mein insider data incorporate karne ka systematic approach:</p>

<h3>Opportunities Screen Karna</h3>

<ol>
<li><strong>Cluster buying identify karein.</strong> Companies dhundhein jahaan 3+ insiders ne last 30 din mein purchase kiye. EDGAR ka full-text search ya Brefyr jaise service use karein jo sabhi companies ka Form 4 data aggregate karti hai.</li>
<li><strong>Dollar value se filter karein.</strong> $100,000 se neeche transactions ignore karein. Strongest signal ke liye $500,000+ par focus karein. INR mein: INR 42 lakh se zyada ki purchases par dhyan dein.</li>
<li><strong>Transaction type se filter karein.</strong> Sirf open-market purchases (code P). Exercises, awards, gifts, aur 10b5-1 plan transactions exclude karein.</li>
<li><strong>Business fundamentals check karein.</strong> Deteriorating fundamentals wali company mein insider buying ka matlab ho sakta hai insider galat hai (aisa hota hai). Insider signal ko apni 10-K, 10-Q, aur recent 8-K filings ki analysis ke saath combine karein.</li>
</ol>

<h3>Positions Monitor Karna</h3>

<p>Stocks jo aap already own karte hain, unke liye watch karein:</p>
<ul>
<li>Nayi insider purchases (aapke thesis ki confirmation)</li>
<li>Cluster selling (potential warning)</li>
<li>CFO selling accelerate hona (fundamentals review karein)</li>
<li>Bade 10b5-1 plan initiations (insider bahut sell karne ki expect karta hai — review karein kyun)</li>
</ul>

<h3>Red Flag Checklist</h3>

<p>Insider activity ke basis par koi stock kharidne se pehle:</p>
<ul>
<li>Kya yeh P (purchase) hai ya kuch aur? Sirf P count hota hai.</li>
<li>Dollar amount meaningful hai? CEOs ke liye $1M+, directors ke liye $200K+.</li>
<li>10b5-1 plan ke under hai? Agar haan, kam informative.</li>
<li>Yeh unki holdings ka kitna percentage represent karta hai?</li>
<li>Kya aur insiders bhi buy kar rahe hain (cluster)?</li>
<li>Fundamentals thesis support karti hain? Latest 10-K/10-Q padhein.</li>
<li>Stock price unusual level par hai (post-decline = stronger signal)?</li>
</ul>

<h2 id="academic-evidence">Research Kya Kehti Hai</h2>

<p>Insider trading profitability par academic literature extensive aur largely consistent hai:</p>

<ul>
<li><strong>Lakonishok & Lee (2001):</strong> Insider purchases 12 months mein 7.5% abnormal returns predict karti hain. Insider sales ki predictive power minimal hai.</li>
<li><strong>Jeng, Metrick & Zeckhauser (2003):</strong> Insider purchases purchase ke baad ke saal mein 11.2% abnormal returns earn karti hain.</li>
<li><strong>Cohen, Malloy & Pomorski (2012):</strong> "Opportunistic" insider trades (non-routine, 10b5-1 plans ke under nahi) future returns predict karti hain. "Routine" trades nahi.</li>
<li><strong>Cziraki, De Goeij & Renneboog (2014):</strong> Insider trading profits chhoti firms mein zyada hain, consistent hai ki information advantage zyada hota hai jab kam external analysis hoti hai.</li>
</ul>

<p>Consistent finding: insider buying predictive hai, khaas taur par small-caps ke liye, khaas taur par jab buying discretionary hai (10b5-1 nahi), aur khaas taur par clusters mein. Insider selling bahut kam predictive hai kyunki selling ke kayi non-investment reasons hain.</p>

<p>Brefyr specifically isi use case ke liye bana hai — 7,600+ companies ki har Form 4 filing ko EDGAR publication ke minutes mein process karna, key transaction data extract karna, aur isse AI-generated significance scores aur filing history ke saath har stock page par present karna.</p>
`,
};

export const articleSecFilingTypesHi: LearnArticle = {
  slug: "sec-filing-types-explained",
  pillar: "sec-filings",
  title: "SEC Filing Types Samjhein: Har Form Jo Investors Ko Jaanna Chahiye",
  metaDescription:
    "SEC filing types ki complete reference guide — 10-K, 10-Q, 8-K, Form 4, DEF 14A, S-1, 13F, SC 13D/G aur zyada. Kab file hoti, kya hota hai, kyun important.",
  readingTime: 15,
  difficulty: "beginner",
  wordCount: 900,
  category: "Getting Started",
  tags: ["sec-filings", "filing-types", "reference", "beginner", "edgar"],
  relatedSlugs: ["how-to-read-sec-filings", "how-to-use-edgar"],
  faq: [
    {
      question: "Kitne SEC filing types hain?",
      answer:
        "SEC ke EDGAR system mein 150 se zyada alag form types accept hote hain. Lekin zyaadatar investors ko sirf 8-10 jaanne ki zaroorat hai. Core filings — 10-K, 10-Q, 8-K, Form 4, DEF 14A, S-1, 13F-HR, aur SC 13D/13G — investment-relevant disclosures ka vast majority cover karti hain.",
    },
    {
      question: "Investors ke liye sabse important SEC filing kaunsi hai?",
      answer:
        "10-K (annual report) sabse important filing hai kyunki ismein sabse comprehensive information hoti hai: audited financial statements, full business description, risk factors, management discussion, aur governance disclosures. Agar aap saal mein company ki sirf ek filing padh sakte hain, toh 10-K padhein.",
    },
    {
      question: "SEC ke saath 'filed' aur 'furnished' mein kya fark hai?",
      answer:
        "Jab koi document SEC ke saath 'file' hota hai, toh company Securities Exchange Act ke under uske contents ki poori legal liability assume karti hai. Jab document 'furnish' hota hai (jaise earnings press release 8-K ke Item 2.02 ke under), toh company ko somewhat reduced liability face hoti hai. Yeh distinction important hai kyunki companies filed documents ke saath zyada careful hoti hain furnished ones se.",
    },
    {
      question: "Kya specific company file karne par alerts mil sakte hain?",
      answer:
        "EDGAR basic RSS feeds per company offer karta hai. Brefyr aur aage jaata hai — har filing ko AI se process karke summaries aur significance scores generate karta hai, phir filing type, significance level, ya insider activity ke basis par filtered email alerts bhejta hai aapke custom rules ke according.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>SEC ka filing system corporate disclosure ki taxonomy hai. Har form type ek specific purpose serve karta hai — annual financials, quarterly updates, material events, insider transactions, institutional holdings, beneficial ownership, aur nayi securities ki registration. Form types aur unke triggers jaanna filing-based investment research ki foundation hai.</p>

<p>Indian investors ke liye jo Vested, INDMoney, ya Groww se U.S. equities mein invest karte hain, yeh forms samajhna utna hi zaroori hai jitna SEBI filings samajhna Indian stocks ke liye. Fark sirf yeh hai ki SEC filings zyada detailed aur free mein available hain.</p>

<p>Yeh reference har wo filing type cover karti hai jo equity investors ke liye matter karti hai, sabse zyada se sabse kam saamne aane wali ke order mein.</p>

<h2 id="periodic-filings">Periodic Filings: Regular Reports</h2>

<h3>10-K — Annual Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Saal mein ek baar, fiscal year end ke baad</td></tr>
<tr><td><strong>Deadline</strong></td><td>60 din (large accelerated), 75 din (accelerated), 90 din (others)</td></tr>
<tr><td><strong>Audited?</strong></td><td>Haan — full external audit</td></tr>
<tr><td><strong>Typical length</strong></td><td>80-250 pages</td></tr>
</tbody>
</table>

<p>10-K sabse comprehensive filing hai. Ismein chaar parts hain jo business description, risk factors, selected financial data, management's discussion and analysis (MD&A), audited financial statements, governance information, aur executive compensation (aksar proxy statement ke reference se) cover karte hain.</p>

<p>Har investment thesis U.S. public company ke liye latest 10-K se shuru honi chahiye. Agar aapne nahi padhi, toh aap secondhand information par operate kar rahe hain. SEBI ki annual reports jaisi hai, lekin zyada detailed.</p>

<h3>10-Q — Quarterly Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Saal mein teen baar (Q1, Q2, Q3)</td></tr>
<tr><td><strong>Deadline</strong></td><td>40 din (large accelerated), 45 din (others)</td></tr>
<tr><td><strong>Audited?</strong></td><td>Nahi — reviewed, audited nahi</td></tr>
<tr><td><strong>Typical length</strong></td><td>30-80 pages</td></tr>
</tbody>
</table>

<p>Annual reports ke beech condensed update. Unaudited quarterly financials, chhota MD&A, aur risk factors aur legal proceedings ke updates. Fourth quarter 10-K mein cover hota hai, alag 10-Q nahi hoti.</p>

<p>10-Q se quarter-over-quarter trends track karo: Revenue accelerate ho raha hai? Margins expand ho rahe hain ya compress? Management ka tone change hua?</p>

<h3>20-F — Annual Report (Foreign Private Issuers)</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Saal mein ek baar</td></tr>
<tr><td><strong>Kaun file karta hai</strong></td><td>Non-U.S. companies jo U.S. exchanges par listed hain</td></tr>
<tr><td><strong>Deadline</strong></td><td>Fiscal year end ke chaar mahine baad</td></tr>
</tbody>
</table>

<p>Foreign companies ke liye 10-K ka equivalent. Similar information lekin IFRS follow kar sakta hai U.S. GAAP ki jagah. Indian companies jaise Infosys aur HDFC Bank jo U.S. mein listed hain, 20-F file karti hain. Yeh Indian investors ke liye khaas taur par relevant hai.</p>

<h2 id="event-driven-filings">Event-Driven Filings: Material Developments</h2>

<h3>8-K — Current Report</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Zarorat ke mutabiq, triggering event ke 4 business days mein</td></tr>
<tr><td><strong>Common triggers</strong></td><td>Acquisitions, CEO changes, earnings releases, bankruptcy, auditor changes</td></tr>
<tr><td><strong>Typical length</strong></td><td>1-10 pages (plus exhibits)</td></tr>
</tbody>
</table>

<p>Real-time disclosure mechanism. 8-K tab file hoti hai jab regular filings ke beech kuch significant hota hai. SEC nau categories of reportable events define karti hai (Items 1.01 through 8.01), har ek ka specific item number. Item number aapka triage tool hai — Item 4.01 (auditor change) aur Item 4.02 (restatement) immediate attention maangte hain. Item 2.02 (earnings release) aur Item 8.01 (other events) usually kam urgent hain.</p>

<h3>6-K — Current Report (Foreign Private Issuers)</h3>

<p>8-K ka foreign equivalent. U.S. mein listed non-U.S. companies 6-K use karti hain material events, earnings releases, aur 20-F filings ke beech ki developments report karne ke liye.</p>

<h2 id="insider-filings">Insider Aur Ownership Filings</h2>

<h3>Form 3 — Initial Statement of Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Naye officers, directors, aur 10%+ shareholders</td></tr>
<tr><td><strong>Deadline</strong></td><td>Insider banne ke 10 din mein</td></tr>
</tbody>
</table>

<p>Insider ki initial ownership position establish karti hai. Ek baar file hoti hai jab koi reporting person banta hai.</p>

<h3>Form 4 — Changes in Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Officers, directors, aur 10%+ shareholders</td></tr>
<tr><td><strong>Deadline</strong></td><td>Kisi bhi transaction ke 2 business days mein</td></tr>
</tbody>
</table>

<p>Sabse actionable insider filing. Har purchase, sale, option exercise, grant, aur gift insider dwara yahaan disclose hoti hai. Transaction codes (P = purchase, S = sale, M = option exercise) trade ki nature batate hain. CEO ya CFO ki open-market purchases (P) public market investing ke sabse strong positive signals mein se hain.</p>

<h3>Form 5 — Annual Statement of Beneficial Ownership</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Insiders jinki transactions Form 4 reporting se exempt thin</td></tr>
<tr><td><strong>Deadline</strong></td><td>Fiscal year end ke 45 din mein</td></tr>
</tbody>
</table>

<p>Catch-all un transactions ke liye jo saal ke dauraan Form 4 par report nahi hui — typically chhoti gifts, inheritance transfers, aur certain exempt transactions. Investment purposes ke liye Form 4 se kam informative.</p>

<h3>SC 13D — Beneficial Ownership (Activist)</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Koi bhi jo influence karne ki intent se company ke 5%+ shares acquire kare</td></tr>
<tr><td><strong>Deadline</strong></td><td>5% threshold cross karne ke 10 business days mein</td></tr>
</tbody>
</table>

<p>Activist investor ka announcement. SC 13D signal karti hai ki kisine significant position banayi hai aur changes push kar sakta hai — board seats, company ki sale, strategic shifts, ya management changes. Filing mein investor ki identity, funds ka source, acquisition ka purpose, aur company ki governance ya operations change karne ki koi bhi plans hoti hain.</p>

<p>Well-known activist investors (Carl Icahn, Elliott Management, Starboard Value) ki SC 13D filings routinely filing date par stock prices 5-15% move karti hain.</p>

<h3>SC 13G — Beneficial Ownership (Passive)</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Passive investors jo 5% ownership threshold cross karein</td></tr>
<tr><td><strong>Deadline</strong></td><td>Calendar year end ke 45 din mein (passive investors ke liye)</td></tr>
</tbody>
</table>

<p>SC 13D ka passive version. Investors jo 5% ownership cross kar gaye lekin company influence karne ka irada nahi — typically index funds, mutual funds, aur pension funds. SC 13D se kam market-moving kyunki activist intent signal nahi karti.</p>

<h3>13F-HR — Institutional Holdings</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>$100M+ AUM wale institutional investment managers</td></tr>
<tr><td><strong>Deadline</strong></td><td>Quarter end ke 45 din mein</td></tr>
</tbody>
</table>

<p>Hedge fund disclosure filing. Har institutional investor jo $100 million se zyada manage karta hai, quarterly apni U.S. equity holdings Form 13F par report karta hai. Isse aap track kar sakte hain ki Berkshire Hathaway, Bridgewater, Renaissance Technologies, aur aur major investors ke paas kya hai.</p>

<p>Caveats: 13F filings delayed hain (45 din tak purani), sirf long equity positions report karti hain (shorts nahi, options strategies partially visible), aur sirf U.S. exchange-listed securities cover karti hain.</p>

<h2 id="governance-filings">Governance Filings</h2>

<h3>DEF 14A — Definitive Proxy Statement</h3>

<table>
<tbody>
<tr><td><strong>Frequency</strong></td><td>Saal mein ek baar, annual shareholders' meeting se pehle</td></tr>
<tr><td><strong>Deadline</strong></td><td>Meeting date se kam se kam 40 din pehle</td></tr>
<tr><td><strong>Typical length</strong></td><td>40-120 pages</td></tr>
</tbody>
</table>

<p>Governance filing. Executive compensation tables (Summary Compensation Table jo CEO pay dikhata hai), director biographies, board committee composition, related party transactions, shareholder proposals, aur voting procedures contain karti hai. Agar aapko CEO ki kamaai, board independence, ya shareholders kya propose kar rahe hain — proxy padhein.</p>

<h2 id="registration-filings">Registration Aur Offering Filings</h2>

<h3>S-1 — Registration Statement (IPO)</h3>

<table>
<tbody>
<tr><td><strong>Kaun file karta hai</strong></td><td>Companies jo pehli baar public ho rahi hain</td></tr>
<tr><td><strong>Contains</strong></td><td>Prospectus with full business description, financials, risk factors, use of proceeds</td></tr>
</tbody>
</table>

<p>IPO filing. Company public mein shares bechne se pehle SEC ke saath S-1 register karti hai. Filing mein woh sab kuch hai jo prospective investor ko offering evaluate karne ke liye chahiye: business description, financial statements (aksar 2-3 saal ka audited data), risk factors, management bios, ownership structure, IPO proceeds ka planned use, aur offering price range.</p>

<p>S-1 filings information ke treasure troves hain kyunki public hone wali companies ko apni poori history disclose karni hoti hai, including details jo baad mein 10-Ks mein summarize ya omit ho sakti hain.</p>

<h3>S-3 — Shelf Registration</h3>

<p>Streamlined registration statement jo companies ko future issuance ke liye securities register karne deti hai. S-3 effective hone ke baad, company bina nayi registration file kiye kisi bhi waqt shares issue kar sakti hai. S-3 filing ka matlab shares issue honge nahi — matlab hai kar sakte hain. Lekin surprise S-3 ek aisi company se jo capital ki zaroorat nahi rakhti, management ki plans ke baare mein sawaal uthata hai.</p>

<h2 id="other-filings">Aur Notable Filings</h2>

<h3>NT 10-K / NT 10-Q — Late Filing Ki Notification</h3>
<p>File hoti hai jab company apni 10-K ya 10-Q deadline meet nahi kar sakti. 15-din ka extension deti hai. Late filing ek mild yellow flag hai — accounting complications, auditor disagreements, ya staffing issues indicate kar sakti hai.</p>

<h3>Form 144 — Securities Sale Ki Proposed Notice</h3>
<p>File hoti hai jab insider SEC Rule 144 ke under restricted ya control securities bechne ka irada rakhta hai. Filing intent ki notice hai, sale hone ki confirmation nahi. Actual transaction dekhne ke liye Form 4 follow karein.</p>

<h3>CORRESP — SEC Comment Letters</h3>
<p>SEC ki Division of Corporation Finance aur company ke beech filings ke baare mein correspondence. Yeh letters reveal karte hain SEC ne kya question kiya — aksar accounting treatments, disclosure completeness, ya revenue recognition methods. EDGAR par available aur specific companies ki regulatory scrutiny samajhne ke liye invaluable.</p>

<h2 id="quick-reference">Quick Reference Table</h2>

<table>
<thead><tr><th>Filing</th><th>Type</th><th>Frequency</th><th>Key Content</th></tr></thead>
<tbody>
<tr><td>10-K</td><td>Periodic</td><td>Annual</td><td>Full audited financials, business description, risks</td></tr>
<tr><td>10-Q</td><td>Periodic</td><td>Quarterly (x3)</td><td>Unaudited quarterly financials, condensed MD&A</td></tr>
<tr><td>8-K</td><td>Event</td><td>As needed</td><td>Material events (acquisitions, CEO changes, etc.)</td></tr>
<tr><td>Form 4</td><td>Insider</td><td>Per transaction</td><td>Insider buys/sells 2 din mein</td></tr>
<tr><td>DEF 14A</td><td>Governance</td><td>Annual</td><td>Executive pay, board, shareholder votes</td></tr>
<tr><td>SC 13D</td><td>Ownership</td><td>Trigger-based</td><td>5%+ activist ownership disclosure</td></tr>
<tr><td>SC 13G</td><td>Ownership</td><td>Trigger-based</td><td>5%+ passive ownership disclosure</td></tr>
<tr><td>13F-HR</td><td>Institutional</td><td>Quarterly</td><td>Institutional holdings ($100M+ managers)</td></tr>
<tr><td>S-1</td><td>Registration</td><td>One-time</td><td>IPO prospectus with full history</td></tr>
</tbody>
</table>

<p>Small-cap investors ke liye, chaar core filings — 10-K, 10-Q, 8-K, aur Form 4 — 90%+ investment-relevant information provide karti hain. Brefyr inn sabko 7,600+ companies ke liye monitor karta hai, har filing ko significance scores assign karta hai taaki aap prioritize kar sakein ki aapke portfolio ke liye kaunsi sabse zyada matter karti hain.</p>
`,
};

/** All SEC filing education articles (Hindi), sorted by difficulty then title */
export const secFilingArticlesHi: LearnArticle[] = [
  articleHowToReadSecFilingsHi,
  articleHowToUseEdgarHi,
  articleHowToTrackInsiderTradingHi,
  articleSecFilingTypesHi,
].sort((a, b) => {
  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  const diffDiff = diffOrder[a.difficulty] - diffOrder[b.difficulty];
  if (diffDiff !== 0) return diffDiff;
  return a.title.localeCompare(b.title);
});

/** Look up a Hindi learn article by slug */
export function getSecFilingArticleHi(slug: string): LearnArticle | undefined {
  return secFilingArticlesHi.find((a) => a.slug === slug);
}
