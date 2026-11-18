import type { LearnArticle } from "../../types";

export const articleHowToAnalyzeTechnologyStocksHi: LearnArticle = {
  slug: "how-to-analyze-technology-stocks",
  pillar: "sectors",
  title: "Technology Stocks Ka Analysis SEC Filings Se Kaise Karein",
  metaDescription:
    "SEC filings se technology companies evaluate karna sikhein. SaaS revenue recognition, R&D capitalization, stock-based compensation aur key metrics cover hai.",
  readingTime: 14,
  difficulty: "intermediate",
  wordCount: 900,
  category: "Sector Deep Dives",
  tags: ["technology", "saas", "sector-analysis", "revenue-recognition", "10-k", "intermediate"],
  relatedSlugs: [
    "healthcare-sector-sec-filings-guide",
    "financial-sector-analysis-guide",
    "energy-sector-sec-filings",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Technology company ke 10-K mein sabse important metric kaunsa hai?",
      answer:
        "Subscription-based tech companies ke liye recurring revenue growth rate aur net revenue retention do sabse important numbers hain. Revenue growth batata hai ki company naye customers acquire kar rahi hai, jabki net revenue retention — jo MD&A ya business overview mein disclose hota hai — batata hai ki existing customers zyada ya kam spend kar rahe hain. 110% se oopar net retention rate ka matlab hai ki existing customers faster expand ho rahe hain churn se, jo growth compound karta hai bina proportional sales aur marketing spend ke.",
    },
    {
      question: "Tech filings mein aggressive revenue recognition kaise spot karein?",
      answer:
        "Financial statement footnotes mein revenue recognition note dekhein. Warning signs mein multi-year contracts ko ek period mein front-load karna, customer access se pehle license revenue recognize karna, aur gross margins inflate karne ke liye professional services revenue ko product revenue classify karna shamil hai. Deferred revenue ki growth ko reported revenue se compare karein — agar reported revenue badh raha hai lekin deferred revenue flat ya ghat raha hai, toh company future revenue pull forward kar rahi ho sakti hai.",
    },
    {
      question: "Stock-based compensation tech investors ke liye kyun matter karta hai?",
      answer:
        "Stock-based compensation (SBC) ek real cost hai jo shareholders ko dilute karti hai. Kayi tech companies 'adjusted' earnings report karti hain jo SBC exclude karti hain, jo unprofitable companies ko profitable dikha sakti hai. Cash flow statement check karein jahaan SBC net income mein add back hota hai, aur income statement par diluted share count dekhein. Agar share count saalana 3-5% badh raha hai, toh free cash flow per share total free cash flow se 3-5% dheere badh raha hai.",
    },
    {
      question: "SEC filings mein SaaS company ko hardware company se kaise compare karein?",
      answer:
        "Yeh fundamentally different business models hain. SaaS companies recurring subscription revenue generate karti hain high gross margins (70-85%) ke saath lekin bade upfront customer acquisition costs hote hain. Hardware companies revenue point of sale par recognize karti hain kam gross margins (30-50%) ke saath. SaaS companies ko SaaS peers se ARR growth, net retention, aur rule of 40 se compare karein. Hardware companies ko inventory turnover, gross margin trends, aur backlog disclosures se.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Technology stocks public markets mein dominate karti hain, lekin sector mein sab kuch hai — trillion-dollar cloud platforms se lekar unprofitable pre-revenue startups tak. SEC filings great equalizer hain — yeh har public tech company ko same financial realities disclose karne force karti hain, chahe pitch deck kitna bhi compelling raha ho. Yeh guide batayegi ki tech company filings ko skepticism aur precision ke saath kaise padhein jo sector demand karta hai.</p>

<p><strong>Indian investors ke liye context:</strong> Agar aap Vested, INDMoney, ya Groww se Apple, Microsoft, Google, Nvidia, ya koi bhi U.S. tech stock kharid rahe hain, toh yeh guide aapko SEC filings se better decisions lene mein madad karegi. RBI LRS limit ($250,000/year) ke under invest karte waqt, tech companies ki filing-level analysis zaroori hai.</p>

<h2 id="revenue-recognition">Revenue Recognition: Jahaan Tech Accounting Creative Hoti Hai</h2>

<p>Revenue recognition technology investors ke liye sabse important accounting concept hai. Tech company jis tarah revenue recognize karti hai, woh decide karta hai ki revenue income statement par kab dikhega — aur companies ke paas rules apply karne mein meaningful latitude hai.</p>

<h3>SaaS Aur Subscription Revenue</h3>

<p>Subscription-based companies revenue ko contract term ke over ratably recognize karti hain. $120,000 ka annual contract $10,000 per month recognize hota hai. Yeh <strong>deferred revenue</strong> create karta hai — cash collect ho gayi lekin abhi recognize nahi hui — jo balance sheet par liability ke roop mein dikhti hai. Growing deferred revenue ek leading indicator hai: matlab company ne aise contracts bechey hain jo future quarters mein recognized revenue mein convert honge.</p>

<p>Billings (cash collected) aur revenue (recognized) ke beech relationship watch karo. Agar billings growth decelerate ho rahi hai jabki revenue growth steady hai, toh company apne backlog par ji rahi hai, aur revenue growth eventually billings match karne ke liye slow hogi.</p>

<h3>License vs. Subscription Revenue Mix</h3>

<p>Kuch tech companies perpetual licenses aur subscriptions dono bechti hain. License revenue upfront recognize hota hai; subscription revenue time ke saath. License se subscription transition karti company temporary revenue decline dikhayegi even agar total bookings badh rahe hain. MD&A ko yeh transition explain karna chahiye — agar nahi karti, toh red flag hai.</p>

<h3>Professional Services Revenue</h3>

<p>Implementation aur consulting fees typically software revenue se kam-margin hoti hain. Kuch companies professional services ko software ke saath bundle karti hain total revenue inflate karne ke liye. Segment ke hisaab se gross margin breakdown check karein — 20% se neeche professional services margins common hain aur overall profitability ko drag karti hain.</p>

<h2 id="key-metrics">Tech 10-Ks Se Extract Karne Wale Key Metrics</h2>

<p>Standard financial statement analysis ke alawa, technology filings mein sector-specific metrics hote hain jo business ki health reveal karte hain.</p>

<h3>Annual Recurring Revenue (ARR) Aur Net Revenue Retention</h3>

<p>ARR active subscription contracts ki annualized value represent karta hai. Net revenue retention (NRR) ek customer cohort ki revenue measure karta hai expansions, contractions, aur churn ke baad. 120% se oopar NRR ka matlab hai ki company sirf existing customers se grow ho rahi hai — ek bhi naya customer acquire kiye bina. Yeh metric 10-K ke MD&A ya business overview section mein aata hai.</p>

<p>Indian investors ke liye comparison: Indian SaaS companies jaise Zoho ya Freshworks bhi yahi metrics use karti hain. U.S. listed tech companies ke NRR numbers directly comparable hain.</p>

<h3>Customer Concentration</h3>

<p>Risk factors aur revenue footnotes mein customer concentration disclosures check karein. Tech company jahaan ek customer 25% revenue represent karta hai — uska risk profile hazaaron chhote accounts wali company se bilkul alag hai. Woh single customer kho dena catastrophic hoga.</p>

<h3>Remaining Performance Obligations (RPO)</h3>

<p>RPO contracted lekin unrecognized revenue represent karta hai — essentially order backlog. Ismein deferred revenue aur future mein invoice hone wale amounts dono shamil hain existing contracts ke under. Growing RPO future revenue mein visibility provide karta hai, lekin footnotes check karein ki kitna RPO agley 12 months mein aur kitna uske baad recognize hone ki expect hai.</p>

<h2 id="rnd-spending">R&D Spending Aur Capitalization</h2>

<p>Research and development spending technology companies ki lifeblood hai. Income statement mein R&D expense dikhata hai ki company ne period mein kitna kharch kiya. Lekin kuch companies certain development costs capitalize karti hain — inhe balance sheet par intangible assets ke roop mein le jaati hain aur time ke saath amortize karti hain. Yeh current-period R&D expense kam karta hai aur reported earnings badhata hai.</p>

<p>Footnotes mein <strong>capitalized software development costs</strong> dhundhein. R&D expense ko revenue ke percentage ke roop mein peers se compare karein. Agar koi company significantly kam R&D intensity report karti hai competitors ke mukable, toh check karein ki woh costs capitalize toh nahi kar rahi jo peers expense karti hain. Koi bhi approach galat nahi hai, lekin adjustment ke bina direct comparisons misleading hain.</p>

<h3>Acquired Technology</h3>

<p>Acquisitive tech companies aksar bade goodwill aur intangible asset balances carry karti hain. Jab company doosri ko $500 million mein acquire karti hai, purchase price identifiable assets (technology, customer relationships, brand) ko allocate hota hai aur residual goodwill ban jaata hai. Goodwill impairment charge — 10-K mein disclosed — matlab acquired business jitna pay kiya tha usse kam worth thi. Yeh concrete admission hai ki acquisition ne value destroy ki. INR mein sochein: $500 million matlab lagbhag INR 4,200 crore — itna paisa waste hona serious matter hai.</p>

<h2 id="stock-compensation">Stock-Based Compensation: Hidden Cost</h2>

<p>Technology companies talent attract karne ke liye stock-based compensation (SBC) par heavily rely karti hain. GAAP ke under, SBC income statement par real expense hai. Lekin kayi tech companies "non-GAAP" ya "adjusted" earnings report karti hain jo SBC add back karti hain, argue karti hain ki yeh non-cash expense hai.</p>

<p>Problem: SBC existing shareholders ko share count badhaakar dilute karti hai. Filing mein do numbers check karein:</p>

<ul>
<li><strong>SBC expense</strong> (cash flow statement, net income mein add-back ke roop mein listed). SBC ko revenue ke percentage ke roop mein peers se compare karein. 20% se oopar aggressive hai.</li>
<li><strong>Diluted share count</strong> (income statement ya cover page). Agar shares outstanding saalana 3-5% badh rahe hain, toh free cash flow per share total free cash flow se 3-5% dheere badh raha hai.</li>
</ul>

<p>Kuch companies dilution ko share buybacks se offset karti hain. Cash flow from financing activities mein share repurchases check karein. Net dilution (naye shares issued minus shares repurchased) shareholders par real impact hai.</p>

<h2 id="cash-flow">Tech Companies Ke Liye Cash Flow Analysis</h2>

<p>Technology companies ke liye free cash flow aksar earnings se zyada informative hai. Kayi growing tech firms GAAP unprofitable hain lekin positive free cash flow generate karti hain kyunki subscription revenue upfront collect hoti hai jabki costs time mein spread hoti hain.</p>

<h3>Operating Cash Flow vs. Net Income</h3>

<p>Operating cash flow aur net income ke beech bada gap tech mein common hai. Primary drivers SBC (non-cash expense add back) aur working capital changes (khaas taur par deferred revenue growth) hain. Jab tak gap inn factors se explain ho, yeh healthy subscription business ki nishani hai. Agar operating cash flow net income se exceed kare aisi wajah se jo SBC ya deferred revenue se explain nahi hoti, toh aur investigate karein.</p>

<h3>Capital Expenditure Intensity</h3>

<p>Cloud infrastructure companies (data centers, network equipment) ki capex zyada hoti hai. Pure software companies ki minimal. Free cash flow (operating cash flow minus capex) yeh difference capture karta hai. High capex wali software company shayad infrastructure build kar rahi hai jo eventually returns generate karegi — ya cost structure problem hai. MD&A ko capital spending plan explain karna chahiye.</p>

<h2 id="red-flags">Technology-Specific Red Flags SEC Filings Mein</h2>

<ul>
<li><strong>Deferred revenue ghat rahi hai jabki reported revenue badh raha hai.</strong> Company backlog ko replenish karne se zyada tez recognize kar rahi hai — future quarters disappoint kar sakte hain.</li>
<li><strong>Non-GAAP earnings GAAP earnings se materially diverge ho rahi hain.</strong> Agar adjusted earnings positive hain lekin GAAP net income deeply negative hai, toh examine karein kya exclude kiya ja raha hai. Recurring "non-recurring" charges aur excessive SBC exclusion warning signs hain.</li>
<li><strong>Customer acquisition cost revenue se zyada tez badh rahi hai.</strong> Sales and marketing expense mein disclosed. Agar company progressively har dollar naye revenue ke liye zyada spend kar rahi hai, toh market saturate ho raha hai ya competition tez ho rahi hai.</li>
<li><strong>Founders ke saath related party transactions.</strong> Proxy statement mein company aur executives ke controlled entities ke beech transactions check karein — jaise CEO ki real estate holdings se office space lease karna.</li>
<li><strong>Auditor changes.</strong> Big Four auditor se chhoti firm mein switch karna investigation warrant karta hai. Auditor change disclose karne wali 8-K filing mein koi disagreements check karein.</li>
</ul>

<h2 id="practical-workflow">Practical Workflow: Tech Stock Analyze Karna</h2>

<ol>
<li><strong>Business description (Item 1) se shuru karein.</strong> Numbers touch karne se pehle product, customers, aur revenue model samjhein.</li>
<li><strong>MD&A (Item 7) padhein.</strong> Revenue growth drivers, key metrics (ARR, NRR, RPO), aur management ki trends ki explanation par focus.</li>
<li><strong>Revenue recognition footnote examine karein.</strong> Revenue kaise aur kab count hota hai samjhein.</li>
<li><strong>SBC aur dilution check karein.</strong> SBC ko revenue ke percentage aur net share dilution calculate karein.</li>
<li><strong>Free cash flow analyze karein.</strong> GAAP net income se compare karein aur difference ke drivers samjhein.</li>
<li><strong>Competitive aur technology risks ke liye risk factors review karein.</strong> New entrants, platform migration risks, aur customer concentration tech-specific concerns hain.</li>
</ol>

<p>Technology companies wohi forms file karti hain jo har doosri public company. Fark yeh jaanne mein hai ki kaunse line items sabse zyada matter karte hain. Revenue quality, cash flow generation, dilution management, aur R&D efficiency — yeh chaar pillars hain SEC filings se tech stock analysis ke. Inhe master karein, aur aap kisi bhi tech company ko uski public disclosures se evaluate kar sakte hain.</p>
`,
};

export const articleHealthcareSectorSecFilingsGuideHi: LearnArticle = {
  slug: "healthcare-sector-sec-filings-guide",
  pillar: "sectors",
  title: "Healthcare Sector SEC Filing Guide: Investors Ko Kya Jaanna Chahiye",
  metaDescription:
    "Healthcare aur biotech companies ko SEC filings se kaise analyze karein. Clinical trial disclosures, FDA risks, drug pipeline, aur pharma revenue recognition covered.",
  readingTime: 13,
  difficulty: "intermediate",
  wordCount: 870,
  category: "Sector Deep Dives",
  tags: ["healthcare", "biotech", "pharma", "fda", "sector-analysis", "clinical-trials", "intermediate"],
  relatedSlugs: [
    "how-to-analyze-technology-stocks",
    "financial-sector-analysis-guide",
    "energy-sector-sec-filings",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Biotech companies clinical trial results SEC filings mein kahaan disclose karti hain?",
      answer:
        "Clinical trial results typically 8-K filings (material events) mein data readout ke kuch dinon mein disclose hote hain, aur phir agley 10-Q ya 10-K ke MD&A section mein detail mein discuss hote hain. Risk factors section bhi ongoing trials aur unse judi uncertainties reference karta hai. Companies jinki poori value ek single drug candidate par depend karti hai, unki 8-K mein clinical trial disclosure aksar sabse zyada market-moving SEC filing hoti hai.",
    },
    {
      question: "Bina revenue wali biotech company ko kaise evaluate karein?",
      answer:
        "Balance sheet aur cash flow statement par focus karein. Cash runway calculate karein: cash aur equivalents ko quarterly cash burn rate (negative operating cash flow) se divide karein. Pre-revenue biotech jiski cash runway 18+ months hai, uske paas agley clinical milestone tak pahunchne ka time hai. 12 months se neeche, dilutive financing (share offerings) likely hoti hai. Business description mein pipeline disclosure bhi review karein har drug candidate ke stage aur timeline ke liye.",
    },
    {
      question: "Healthcare stock ke liye going concern warning ka kya matlab hai?",
      answer:
        "Auditor ke report mein going concern qualification ka matlab hai ki auditor ko company ki agley 12 months operate karne ki ability par substantial doubt hai. Pre-revenue biotechs ke liye yeh relatively common hai aur signal karti hai ki company ko jaldi capital raise karna hoga. Iska matlab yeh nahi ki company fail ho jayegi — kayi biotechs going concern opinions ke baad capital raise karti hain — lekin matlab hai dilution ya debt aa raha hai.",
    },
    {
      question: "Pharmaceutical companies revenue differently kaise recognize karti hain?",
      answer:
        "Pharmaceutical revenue recognition rebates, returns, aur chargebacks ki wajah se complicated hai. Jab drug company wholesaler ko product ship karti hai, toh gross revenue record hoti hai lekin estimate aur reserve karna padta hai: government-mandated rebates (Medicaid, Medicare Part D), commercial insurance rebates, product returns, aur wholesaler chargebacks ke liye. Yeh estimates revenue footnotes mein dikhte hain aur materially galat ho sakte hain.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Healthcare public markets ka sabse regulated sector hai. Har drug approval, clinical trial failure, FDA warning letter, aur reimbursement policy change stock prices ko ek session mein double-digit percentages move kar sakta hai. SEC filings woh jagah hain jahaan investors signal ko noise se alag karte hain — audited financial realities ko press release optimism se.</p>

<p><strong>Indian investors ke liye context:</strong> U.S. healthcare aur biotech stocks Indian investors mein popular hain — Pfizer, Johnson & Johnson, Moderna jaise companies Vested aur INDMoney par frequently traded hain. Healthcare sector ki SEC filings samajhna zaroori hai kyunki FDA decisions aur clinical trial results stock prices ko dramatically move karte hain. RBI LRS ($250,000/year) ke under invest karte waqt, yeh knowledge critical hai.</p>

<p>Yeh guide healthcare-specific sections cover karti hai jo general investing guides overlook karti hain: clinical pipeline disclosures, pharmaceutical revenue recognition, regulatory risk factors, aur balance sheet analysis jo decide karti hai ki biotech company apni drug market mein laane tak survive karegi ya nahi.</p>

<h2 id="pipeline-disclosure">Clinical Pipeline Disclosures</h2>

<p>Biotech companies ke liye drug pipeline hi business hai. 10-K ki business description (Item 1) mein sabse complete pipeline overview hota hai — har drug candidate, uska development stage, target indication, aur timeline. Yeh section accurate aur comprehensive hona required hai.</p>

<h3>Pipeline Tables Padhna</h3>

<p>Zyaadatar biotech 10-Ks mein pipeline table hota hai jo har candidate ka phase dikhata hai. Table se zyada important narrative hai har candidate ke baare mein:</p>

<ul>
<li><strong>Preclinical:</strong> Drug ne laboratory testing mein promise dikhaya hai lekin human trials mein nahi aayi. Preclinical se FDA approval tak success rates lagbhag 5-10% hain.</li>
<li><strong>Phase 1:</strong> Chhote group mein safety testing. Primary goal safe dosage determine karna hai, efficacy nahi. Lagbhag 60-70% drugs Phase 1 se aage badhti hain.</li>
<li><strong>Phase 2:</strong> Bade patient group mein efficacy testing. Yahaan zyaadatar drugs fail hoti hain — sirf 30-35% Phase 3 tak pahunchti hain. 8-K filings mein disclosed Phase 2 results biotech investors ke liye sabse important events mein se hain.</li>
<li><strong>Phase 3:</strong> Large-scale efficacy aur safety trials. Yeh mehenge ($100M+ aksar) aur saalon tak chalte hain. Success rates lagbhag 50-60% hain. 10-K mein enrollment status, expected data readout timing, aur trial design disclose hona chahiye.</li>
<li><strong>NDA/BLA Filed:</strong> Company ne FDA ko New Drug Application ya Biologics License Application submit kar di hai. Is stage par approval rates lagbhag 85-90% hain.</li>
</ul>

<h3>FDA Correspondence Aur PDUFA Dates</h3>

<p>Prescription Drug User Fee Act (PDUFA) FDA ko drug application par act karne ki deadline set karta hai. Yeh date 10-K aur subsequent 8-Ks mein disclosed hoti hai. Yeh public markets ke sabse definitive catalysts mein se ek hai — FDA ko is date tak approval, complete response letter (rejection with required changes), ya additional information ki request se respond karna hota hai.</p>

<p>Risk factors mein FDA communications ka koi bhi mention check karein. Complete response letters, clinical holds, aur additional data ki requests material events hain jo 8-K filings mein disclose honi chahiye.</p>

<h2 id="revenue-recognition">Pharmaceutical Revenue Recognition</h2>

<p>Commercial-stage pharmaceutical companies ka uniquely complex revenue recognition process hai. Jab drug company wholesaler ko product ship karti hai, shipment se net revenue tak ka safar kayi adjustments se guzarta hai.</p>

<h3>Gross-to-Net Adjustments</h3>

<p>Revenue footnote yeh adjustments disclose karti hai:</p>

<ul>
<li><strong>Government rebates:</strong> Medicaid, Medicare Part D, 340B program, aur doosre government programs ke under mandatory rebates. Branded drugs ke liye yeh gross revenue ka 20-40% consume kar sakte hain.</li>
<li><strong>Commercial rebates:</strong> Pharmacy benefit managers (PBMs) aur insurance companies ke saath negotiated rebates. Drug aur competitive dynamics ke hisaab se vary karti hain.</li>
<li><strong>Chargebacks:</strong> Wholesalers ko payments jo entities (jaise hospitals ya government agencies) ko wholesale acquisition cost se neeche bechte hain.</li>
<li><strong>Product returns:</strong> Wholesalers unsold product return kar sakte hain, typically expiration ke 6-12 months ke andar.</li>
<li><strong>Copay assistance:</strong> Manufacturer-funded programs jo patient ke out-of-pocket costs kam karte hain.</li>
</ul>

<p>Gross-to-net adjustments ko gross revenue ke percentage ke roop mein time ke saath track karein. Increasing adjustments — matlab company har dollar gross revenue ka kam hissa rakhti hai — aksar pricing pressure, increased government rebate exposure, ya competitive dynamics signal karti hain jo bade commercial rebates force karti hain.</p>

<h2 id="balance-sheet">Biotechs Ke Liye Balance Sheet Analysis</h2>

<p>Pre-revenue biotech companies balance sheet stories hain. Income statement losses dikhata hai (expected), aur cash flow statement cash burn dikhata hai (bhi expected). Critical sawaal hai: company apni current cash par kitne din survive kar sakti hai?</p>

<h3>Cash Runway Calculation</h3>

<p>Total cash, cash equivalents, aur short-term investments ko average quarterly cash burn (negative operating cash flow) se divide karein. Company jiski $200 million cash hai aur $15 million per quarter burn karti hai, uski lagbhag 13 quarters — teen saal — ki runway hai. INR mein: $200 million matlab lagbhag INR 1,680 crore. Yeh determine karta hai ki company additional capital raise kiye bina apne agley major milestone tak pahunch sakti hai ya nahi.</p>

<p>Cash flow from financing activities mein recent capital raises check karein. At-the-market (ATM) offering — jahaan company dheere-dheere open market mein shares bechti hai — footnotes mein disclosed hota hai aur bina kisi headline ke sustained selling pressure create kar sakta hai.</p>

<h3>Debt Structure</h3>

<p>Kuch biotechs equity ki jagah convertible notes ya venture debt use karti hain. Debt footnotes conversion prices, maturity dates, aur interest rates disclose karti hain. Convertible debt jo in-the-money hai (stock price conversion price se oopar) eventually shares mein convert hogi, existing shareholders ko dilute karegi. Out-of-the-money convertible debt maturity par repay ya refinance karni hogi — revenue ke bina company ke liye risk hai.</p>

<h2 id="regulatory-risks">Regulatory Risk Factors</h2>

<p>Healthcare risk factors khaas taur par dense hain kyunki sector ko financial aur regulatory dono risks face karne padte hain. Dhundhein:</p>

<ul>
<li><strong>Single drug mein concentration:</strong> Agar ek product 50% se zyada revenue generate karta hai, toh loss of exclusivity (patent expiration, generic competition) existential risk hai. 10-K mein patent expiration dates disclose honi chahiye.</li>
<li><strong>Regulatory changes:</strong> Medicare/Medicaid reimbursement changes, drug pricing legislation, aur FDA regulatory guidance changes. Inflation Reduction Act ke drug price negotiation provisions ab large pharma companies ke liye recurring risk factor hain.</li>
<li><strong>Manufacturing risks:</strong> FDA warning letters, consent decrees, ya manufacturing facility issues. Company ki key drug produce karne wali manufacturing site ke liye warning letter material risk hai.</li>
<li><strong>Patent litigation:</strong> Generic manufacturers ki Abbreviated New Drug Application (ANDA) filings Paragraph IV certifications aur patent litigation trigger karti hain. Legal proceedings section mein is litigation ki status aur timeline hoti hai.</li>
</ul>

<h2 id="healthcare-red-flags">Healthcare-Specific Red Flags</h2>

<ul>
<li><strong>12 months se kam cash runway bina disclosed financing plans ke.</strong> Company ko urgently capital chahiye, aur dilutive financing likely imminent hai.</li>
<li><strong>Auditor going concern opinion.</strong> Auditor ne viability risk flag kiya hai. Financing urgency badh jaati hai.</li>
<li><strong>Clinical trial protocol amendments mid-study.</strong> Primary endpoint ya patient population study ke beech change karna indicate kar sakta hai ki original design desired results produce nahi kar raha.</li>
<li><strong>Escalating gross-to-net adjustments.</strong> Commercial-stage pharma ke liye, matlab company per unit sold se kam revenue rakh rahi hai.</li>
<li><strong>Executives ke saath related party transactions.</strong> Chhoti biotechs mein khaas taur par common — proxy statement mein management ke controlled entities ke saath consulting agreements, real estate leases, ya licensing agreements check karein.</li>
<li><strong>Declining share prices par frequent capital raises.</strong> Successively kam prices par shares issue karna ek pattern hai jo continuous dilution se losses fund karna signal karta hai.</li>
</ul>

<h2 id="practical-approach">Practical Approach: Healthcare Stock Evaluate Karna</h2>

<ol>
<li><strong>Company type determine karein:</strong> Pre-revenue biotech, commercial-stage pharma, medical devices, healthcare services, ya managed care. Har ek ke different key metrics hain.</li>
<li><strong>Pre-revenue biotechs ke liye:</strong> Cash runway, pipeline stage aur timeline, aur agla major catalyst (data readout, FDA decision date) par focus.</li>
<li><strong>Commercial pharma ke liye:</strong> Product ke hisaab se revenue growth, gross-to-net trends, patent expiration dates, aur aging products ke liye pipeline replacements par focus.</li>
<li><strong>Medical devices ke liye:</strong> Geography ke hisaab se revenue growth, procedure volume trends, reimbursement rates, aur competitive product launches par focus.</li>
<li><strong>Sabhi healthcare companies ke liye:</strong> Risk factors section carefully padhein. Healthcare mein regulatory risks boilerplate nahi hain — business par specific, quantifiable impact hota hai.</li>
</ol>

<p>SEC filings se healthcare investing sector-specific knowledge maangti hai, lekin framework kisi bhi doosre sector jaisa hai: business model samjho, numbers verify karo, risks assess karo, aur apni khud ki view banaao ki company ki kya worth hai. Filings foundation hain — baaki sab commentary hai.</p>
`,
};

export const articleFinancialSectorAnalysisGuideHi: LearnArticle = {
  slug: "financial-sector-analysis-guide",
  pillar: "sectors",
  title: "Financial Sector SEC Filing Analysis: Banks, Insurance, Aur Fintech",
  metaDescription:
    "SEC filings se financial sector companies analyze karna sikhein. Net interest margin, loan loss provisions, insurance reserves, fintech unit economics covered.",
  readingTime: 14,
  difficulty: "advanced",
  wordCount: 900,
  category: "Sector Deep Dives",
  tags: ["financials", "banking", "insurance", "fintech", "sector-analysis", "advanced"],
  relatedSlugs: [
    "how-to-analyze-technology-stocks",
    "healthcare-sector-sec-filings-guide",
    "energy-sector-sec-filings",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Bank ke financial statements doosri companies se itne alag kyun hain?",
      answer:
        "Banks ka fundamentally different business model hai. Bank ki primary asset uska loan portfolio hai (jahaan zyaadatar companies property, equipment, aur inventory rakhti hain), aur primary liability customer deposits hain (jahaan zyaadatar companies ke accounts payable aur debt hain). Interest income product revenue ki jagah leti hai, aur interest earned aur paid ke beech ka spread — net interest margin — gross margin ki jagah. Banks ke unique regulatory capital requirements bhi hain jo constrain karte hain ki woh apne equity base ke relative kitna business kar sakte hain.",
    },
    {
      question: "Bank ke 10-K mein sabse important line item kaunsa hai?",
      answer:
        "Provision for credit losses. Yeh line item management ka estimate represent karti hai ki loan portfolio ka kitna hissa default hoga. Yeh directly earnings reduce karti hai aur balance sheet par allowance for loan losses banati hai. Increasing provisions signal karti hain ki management ko zyada borrowers default hone ki expect hai — credit deterioration ka leading indicator. Decreasing provisions short term mein earnings boost kar sakti hain lekin matlab ho sakta hai bank future losses ke liye under-reserving kar raha hai.",
    },
    {
      question: "SEC filings se insurance companies kaise compare karein?",
      answer:
        "Combined ratio property and casualty insurers ke liye key metric hai. MD&A mein disclosed hota hai aur loss ratio (claims paid divided by premiums earned) plus expense ratio (operating expenses divided by premiums earned) ke barabar hai. 100% se neeche combined ratio ka matlab hai insurer sirf underwriting se profitable hai, investment income se pehle. Life insurers ke liye investment portfolio quality, reserve adequacy, aur persistency ratios par focus karein.",
    },
    {
      question: "Fintech SEC filings mein traditional banks se alag kya dekhna chahiye?",
      answer:
        "Fintech companies aksar interest income ki jagah transaction fees se revenue generate karti hain, toh take rate (revenue per dollar of transaction volume), net revenue per active account, aur customer acquisition cost par focus karein. Kayi fintechs loans originate karke bechti hain — gain-on-sale margin check karein aur ki company servicing rights ya credit risk retain karti hai ya nahi. Risk factors section mein disclose hona chahiye ki company bank charter ke under operate karti hai ya partner banks par rely karti hai.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Financial sector companies — banks, insurance companies, asset managers, aur fintech firms — ke financial statements fundamentally doosre sectors ki companies se alag hain. Bank ki balance sheet retailer ki jaisi bilkul nahi dikhti. Insurance company ki income statement mein aise line items hain jo kaheen aur exist nahi karte. Aur fintech companies aksar traditional financial metrics ko technology metrics ke saath blend karti hain, jo bina jaane compare karna mushkil bana deta hai.</p>

<p><strong>Indian investors ke liye context:</strong> Agar aap JPMorgan, Goldman Sachs, Berkshire Hathaway, ya PayPal jaise U.S. financial stocks mein invest karte hain Vested ya INDMoney se, toh yeh guide zaroori hai. Indian banking (RBI regulated) aur U.S. banking (Federal Reserve regulated) mein kayi differences hain — net interest margin calculation, capital adequacy requirements (Basel III norms dono follow karte hain lekin implementation alag hai), aur loan loss provisioning methods. Yeh guide U.S.-specific nuances samjhayegi.</p>

<p>Yeh guide financial sector ko major subsectors mein todti hai aur har type ki company ki SEC filings mein kya focus karna hai explain karti hai.</p>

<h2 id="bank-analysis">Bank SEC Filings Analyze Karna</h2>

<p>Banks primarily paisa kamati hain cheaply borrow karke (customer deposits) aur zyada rates par lend karke (mortgages, commercial loans, credit cards). Inn rates ke beech ka difference — net interest margin — bank profitability ki foundation hai.</p>

<h3>Net Interest Margin (NIM)</h3>

<p>NIM har bank ki 10-K aur 10-Q ke MD&A mein disclosed hota hai. Yeh net interest income divided by average earning assets represent karta hai. Typical community bank 3.0% se 3.5% NIM par operate karti hai; large money center banks 2.0% se 2.5% par unke funding mix ki wajah se.</p>

<p>NIM ko time ke saath track karein aur interest rate environment se compare karein. Jab Federal Reserve rates badhata hai, banks generally benefit hoti hain kyunki loan yields deposit costs se tez badhti hain — initially. Lekin agar rates elevated rehte hain, deposit competition eventually NIM compress karti hai jab customers paisa higher-yielding accounts mein move karte hain. Yeh RBI ke repo rate changes ke impact jaisa hai Indian banks par, lekin U.S. mein dynamics thode alag hain.</p>

<h3>Credit Quality Aur Loan Loss Provisions</h3>

<p>Provision for credit losses bank ki income statement ka sabse important line item hai. Yeh management ka estimate represent karti hai future loan defaults ka. Yeh provision balance sheet par <strong>allowance for loan losses</strong> (ALLL) mein flow hota hai — ek reserve account jo actual defaults absorb karta hai.</p>

<p>Footnotes se extract karne wale key metrics:</p>

<ul>
<li><strong>Allowance total loans ke percentage ke roop mein:</strong> Well-reserved bank ke liye typically 1.0% se 1.5%. 0.8% se neeche under-reserving indicate kar sakta hai.</li>
<li><strong>Net charge-offs average loans ke percentage ke roop mein:</strong> Actually recognized losses. Provision se compare karein — agar provisions charge-offs se zyada hain, toh bank reserves build kar raha hai (aage worse conditions ki expect hai).</li>
<li><strong>Non-performing loans (NPLs) total loans ke percentage ke roop mein:</strong> Loans jo 90+ din overdue hain ya non-accrual par hain. Rising NPLs future charge-offs ka leading indicator hain. India mein yeh NPA (Non-Performing Assets) ke equivalent hai.</li>
<li><strong>Criticized aur classified loans:</strong> Banks jo regulatory exam data ke saath hain, yeh categories 10-K mein disclose karti hain. Examiners ne jinhe elevated risk flag kiya hai.</li>
</ul>

<h3>Regulatory Capital Ratios</h3>

<p>Banks ko minimum capital ratios maintain karne required hain, jo 10-K mein disclosed hote hain. Teen primary ratios hain:</p>

<ul>
<li><strong>Common Equity Tier 1 (CET1) ratio:</strong> Minimum 4.5%, plus 2.5% capital conservation buffer, effective minimum 7.0%. Large banks ko additional surcharges face karne hote hain.</li>
<li><strong>Tier 1 capital ratio:</strong> Minimum 6.0% plus buffers.</li>
<li><strong>Total capital ratio:</strong> Minimum 8.0% plus buffers.</li>
</ul>

<p>Banks jo minimum requirements ke kareeb hain, constrained hain — woh loan portfolio grow nahi kar sakte, dividends nahi de sakte, ya shares nahi kharid sakte bina additional capital raise kiye. Capital ratios aur minimums se oopar cushion check karein. India mein RBI ki CRAR (Capital to Risk-weighted Assets Ratio) requirement similar concept hai.</p>

<h2 id="insurance-analysis">Insurance Company Filings Analyze Karna</h2>

<p>Insurance companies premiums collect karti hain, proceeds invest karti hain, aur claims pay karti hain. Premium collection aur claims payment ke beech timing mismatch <strong>float</strong> create karta hai — paisa jo insurer claims ke liye chahiye hone se pehle invest kar sakti hai.</p>

<h3>Property and Casualty (P&C) Insurers</h3>

<p>Combined ratio essential metric hai:</p>

<ul>
<li><strong>Loss ratio:</strong> Claims aur loss adjustment expenses divided by net premiums earned. 65% loss ratio ka matlab har premium dollar ka 65 cents claims mein jaata hai.</li>
<li><strong>Expense ratio:</strong> Underwriting expenses divided by net premiums earned. Commissions, salaries, aur administrative costs include.</li>
<li><strong>Combined ratio = loss ratio + expense ratio.</strong> 100% se neeche matlab insurer sirf underwriting se profitable hai. 100% se oopar matlab insurer overall profitable hone ke liye investment income par depend karti hai.</li>
</ul>

<p>MD&A mein catastrophe loss disclosures check karein. Hurricanes, wildfires, aur doosri natural disasters lumpy claims create karti hain. Reserve development — prior-year claims ke estimates mein adjustments — footnotes mein disclosed hoti hai.</p>

<h3>Life Insurers</h3>

<p>Life insurance companies long-duration liabilities carry karti hain (policy obligations jo decades tak due nahi ho sakti). Unke investment portfolios — footnotes mein exhaustive detail mein disclosed — inn long-term obligations match karne ke liye manage kiye jaane chahiye. Focus karein:</p>

<ul>
<li><strong>Investment portfolio quality:</strong> Kitna percentage investment-grade bonds hai versus below-investment-grade? Commercial real estate ya alternatives mein significant holdings hain?</li>
<li><strong>Unrealized gains/losses:</strong> Life insurers bade bond portfolios hold karti hain. Rising interest rates unrealized losses create karti hain, jo balance sheet par other comprehensive income (OCI) mein dikhti hain.</li>
<li><strong>Policy reserve adequacy:</strong> Policy reserves ke underlying actuarial assumptions (mortality rates, lapse rates, discount rates) footnotes mein disclosed hote hain.</li>
</ul>

<h2 id="fintech-analysis">Fintech Filings Analyze Karna</h2>

<p>Fintech companies hybrid hain — technology company business models (platforms, networks, subscription services) use karke financial services deliver karti hain. Unki SEC filings ko technology aur financial services dono lens se padhna padta hai.</p>

<h3>Revenue Model</h3>

<p>Business description aur revenue footnotes mein primary revenue source identify karein:</p>

<ul>
<li><strong>Transaction fees:</strong> Revenue payment volume ya transaction count ke saath scale hoti hai. Metric: take rate (revenue divided by total payment volume).</li>
<li><strong>Interest income:</strong> Lending se revenue. Loan loss provisioning aur credit quality analysis chahiye, bilkul bank jaisi.</li>
<li><strong>Subscription fees:</strong> Platform access se revenue. SaaS company jaisi analyze karein — retention, expansion, churn.</li>
<li><strong>Gain on sale:</strong> Loans originate karke bechne se revenue. Volatile hai aur capital markets conditions par depend karti hai.</li>
</ul>

<h3>Regulatory Status</h3>

<p>Risk factors mein company ka regulatory framework check karein. Bank charter wali fintech (jaise kuch neobanks) ko different capital aur compliance requirements face karne padte hain partner bank arrangements se operate karne wali se. Partner banks par rely karne wali companies ko risk hai ki banking partner relationship terminate kar sakta hai.</p>

<h3>Unit Economics</h3>

<p>Fintech MD&A sections increasingly unit economics disclose karti hain: revenue per active account, customer acquire karne ki cost, aur lifetime value. Yeh metrics decide karti hain ki company scale par profitability achieve kar sakti hai ya nahi.</p>

<h2 id="financial-red-flags">Financial Sector Red Flags</h2>

<ul>
<li><strong>Economic slowdown ke dauraan declining loan loss provisions.</strong> Agar economy weaken ho rahi hai lekin bank provisions reduce kar raha hai, management short-term earnings ko prudent reserving par priority de raha hai.</li>
<li><strong>Single category mein rapid loan growth.</strong> Commercial real estate portfolio ko 30% annually grow karna risk concentrate kar raha hai.</li>
<li><strong>Insurance reserve releases se earnings growth drive hona.</strong> Agar insurer ki earnings growth primarily prior-year reserves reduce karne se aa rahi hai, toh growth sustainable nahi hai.</li>
<li><strong>Fintech surging revenue ke saath surging losses report karna.</strong> Growth at any cost tab tak kaam karti hai jab tak capital markets band nahi ho jaate. Cash runway aur burn rate check karein.</li>
<li><strong>Capital ratios declining minimums ki taraf.</strong> Bank jiska CET1 ratio teen saalon mein 12% se 8% gir gaya hai, regulatory floor ke kareeb pahunch raha hai.</li>
</ul>

<h2 id="comparative-framework">Comparative Framework</h2>

<p>Financial sector companies compare karte waqt sahi metrics sahi subsector ke liye use karein:</p>

<ul>
<li><strong>Banks:</strong> Return on equity, return on assets, NIM, efficiency ratio (non-interest expense / revenue), credit quality ratios.</li>
<li><strong>P&C Insurance:</strong> Combined ratio, premium growth, reserve adequacy, investment yield.</li>
<li><strong>Life Insurance:</strong> Book value growth, investment portfolio quality, policy persistency, embedded value.</li>
<li><strong>Fintech:</strong> Revenue growth, take rate ya revenue per account, contribution margin, customer acquisition cost, active user growth.</li>
</ul>

<p>SEC filings se financial sector analysis specialized knowledge demand karti hai, lekin payoff significant hai. Yeh filings exactly woh data contain karti hain jo credit risk, capital adequacy, underwriting profitability, aur growth sustainability evaluate karne ke liye chahiye. Koi analyst report ya earnings call transcript itna detail nahi deta — 10-K definitive source hai.</p>
`,
};

export const articleEnergySectorSecFilingsHi: LearnArticle = {
  slug: "energy-sector-sec-filings",
  pillar: "sectors",
  title: "Energy Sector SEC Filing Guide: Oil, Gas, Aur Renewables",
  metaDescription:
    "SEC filings se energy companies analyze karna sikhein. Reserve disclosures, production metrics, capital allocation, commodity price sensitivity covered.",
  readingTime: 13,
  difficulty: "intermediate",
  wordCount: 870,
  category: "Sector Deep Dives",
  tags: ["energy", "oil-gas", "renewables", "sector-analysis", "reserves", "intermediate"],
  relatedSlugs: [
    "how-to-analyze-technology-stocks",
    "healthcare-sector-sec-filings-guide",
    "financial-sector-analysis-guide",
    "how-to-read-sec-filings",
  ],
  faq: [
    {
      question: "Oil aur gas companies apne reserves kahaan disclose karti hain?",
      answer:
        "Proved reserves saalana 10-K ke supplemental information section mein disclosed hain, jaise SEC Regulation S-X Rule 4-10 require karti hai. Yeh disclosure mein proved developed aur proved undeveloped reserves geographic area ke hisaab se, production volumes, average received prices, aur discounted future net cash flows ka standardized measure shamil hai. Reserves independent petroleum engineers audit karte hain. Kuch companies probable aur possible reserves bhi voluntarily disclose karti hain, lekin sirf proved reserves SEC ko required hain.",
    },
    {
      question: "Upstream, midstream, aur downstream energy companies mein kya fark hai?",
      answer:
        "Upstream companies oil aur gas explore aur produce karti hain — revenue directly commodity prices aur production volumes par depend karti hai. Midstream companies hydrocarbons transport, store, aur process karti hain — typically fee-based revenue kamaati hain jo commodity prices se kam sensitive hai. Downstream companies crude oil ko products (gasoline, diesel, jet fuel) mein refine karke bechti hain — profitability crack spread (crude oil cost aur refined product prices ka difference) par depend karti hai.",
    },
    {
      question: "Commodity prices energy SEC filings ko kaise affect karti hain?",
      answer:
        "Commodity prices energy filings ko multiple tareekon se affect karti hain. Revenue directly prices ke saath rise aur fall hoti hai. Reserve estimates change hote hain kyunki SEC proved reserves trailing 12-month average prices se calculate require karti hai — kam prices matlab kam reserves economically producible hain. Impairment charges trigger ho sakte hain. Footnotes mein hedging disclosures dikhati hain ki future production kitni fixed prices par locked hai.",
    },
    {
      question: "Renewable energy investors ko SEC filings mein kya focus karna chahiye?",
      answer:
        "Renewable energy companies ke liye power purchase agreement (PPA) terms (contract length, price per MWh, escalation clauses), capacity factors (actual vs theoretical maximum energy production), aur owned versus contracted capacity ka distinction focus karein. Tax equity financing structure — solar aur wind projects mein common — footnotes mein hai. Risk factors mein government subsidy aur tax credit dependencies track karein.",
    },
  ],
  lastUpdated: "2026-11-17",
  body: `
<p>Energy companies public markets mein kisi bhi doosre sector se alag hain. Unki value zameen ke neeche gaade reserves, commodity prices jinhe woh control nahi karte, capital-intensive infrastructure jo banane mein saalon lagti hai, aur regulatory environments jo political cycles ke saath shift hoti hain — sab par depend karti hai. Energy companies ki SEC filings mein aise disclosures hain jo kisi aur sector mein nahi milte — proved reserve estimates, production decline curves, hedging positions, aur environmental remediation liabilities.</p>

<p><strong>Indian investors ke liye context:</strong> Energy stocks — ExxonMobil, Chevron, NextEra Energy — Vested aur INDMoney par available hain. India apni energy needs ka bada hissa import karta hai, toh global oil aur gas prices ka seedha asar Indian economy par padta hai. U.S. energy companies ki SEC filings samajhna aapko global energy market ki better understanding degi, jo aapke overall portfolio decisions mein madad karegi — chahe aap directly U.S. energy stocks invest karein ya nahi. Crude oil ki price INR mein sochein: $80/barrel matlab lagbhag INR 6,720/barrel.</p>

<p>Yeh guide teen major subsectors mein energy company filings padhna sikhayegi: upstream (exploration and production), midstream (transportation and processing), aur downstream (refining and marketing), plus growing renewable energy subsector.</p>

<h2 id="upstream-analysis">Upstream (E&P) Companies: Reserves Aur Production</h2>

<p>Exploration and production companies ki value primarily oil aur gas reserves par based hai — hydrocarbons ki estimated quantities jo economically recoverable hain. SEC detailed reserve disclosures require karti hai 10-K mein jo public company filings ki sabse specialized disclosures mein se hain.</p>

<h3>Proved Reserve Disclosures</h3>

<p>10-K ki supplemental oil and gas information (FASB ASC 932 ke required) disclose karti hai:</p>

<ul>
<li><strong>Proved developed reserves:</strong> Reserves jo existing wells se existing equipment aur operating methods se recover hone ki expect hain. Yeh highest-confidence reserves hain.</li>
<li><strong>Proved undeveloped reserves (PUDs):</strong> Reserves jo undrilled acreage par nayi wells se ya existing wells se major expenditure ke saath recover hone ki expect hain. PUDs ko production mein convert karne ke liye capital investment chahiye — check karein ki company ke paas capital aur plan dono hain inhe paanch saal mein develop karne ke liye, jaise SEC require karti hai.</li>
<li><strong>Reserve replacement ratio:</strong> Nayi reserves added divided by production volume. 100% se oopar ratio matlab company production se zyada tez reserves add kar rahi hai — long-term sustainability ke liye essential.</li>
</ul>

<p>Reserves SEC ki pricing methodology se calculate hoti hain: trailing 12-month average first-day-of-month commodity prices. Matlab reserve estimates commodity prices ke saath change hote hain chahe zameen ke neeche kuch bhi nahi badla. Kam-price environment mein, reserves paper par shrink hoti hain kyunki kam reserves kam price par produce karna economic hai.</p>

<h3>Production Aur Cost Metrics</h3>

<p>MD&A production volumes (barrels of oil equivalent per day), average realized prices, aur per-unit costs disclose karta hai. Key cost metrics:</p>

<ul>
<li><strong>Lease operating expense (LOE) per BOE:</strong> Existing wells operate karne ki cost. Kam better hai, lekin rising LOE per unit par watch karein, jo aging wells indicate kar sakti hai jinhe zyada maintenance chahiye.</li>
<li><strong>Finding and development cost (F&D) per BOE:</strong> Nayi reserves add karne ki cost. Capital expenditure ko reserve additions se divide karein. F&D cost jo current commodity price se oopar hai matlab company oil dhundhne mein uski worth se zyada kharch kar rahi hai.</li>
<li><strong>All-in sustaining cost:</strong> LOE plus G&A plus maintenance capex per BOE. Yeh batata hai ki company kis commodity price par break even hoti hai.</li>
</ul>

<h3>Decline Rates Aur Capital Needs</h3>

<p>Sab oil aur gas wells time ke saath decline karti hain — reservoir pressure girne se production ghatti hai. Shale wells khaas taur par tezi se decline karti hain, aksar pehle saal mein initial production ka 50-70% kho deti hain. 10-K area ke hisaab se production trends disclose karti hai, aur MD&A declines offset karne ke liye capital expenditure plans discuss karta hai. High decline rates wali company ko sirf flat production maintain karne ke liye continuous capital investment chahiye — yeh maintenance capex hai, growth capex nahi.</p>

<h2 id="midstream-analysis">Midstream Companies: Fee-Based Revenue Aur Contracts</h2>

<p>Midstream companies pipelines, processing plants, aur storage facilities operate karti hain. Unka business model upstream companies se fundamentally alag hai kyunki revenue typically fee-based hai commodity-price-dependent ki jagah.</p>

<h3>Contract Structure</h3>

<p>Business description aur MD&A contract mix disclose karti hain:</p>

<ul>
<li><strong>Fee-based contracts:</strong> Revenue transported ya processed volume par based, commodity price ki parwaah nahi. Sabse stable revenue type.</li>
<li><strong>Percent-of-proceeds contracts:</strong> Revenue processed hydrocarbons ki value ke percentage par based. Midstream company ko commodity price risk expose karti hai.</li>
<li><strong>Minimum volume commitments (MVCs):</strong> Customers minimum volumes ship karne agree karte hain, revenue floor protection provide karte hain. Footnotes MVC terms aur counterparty credit quality disclose karti hain.</li>
</ul>

<p>Midstream company jiski 85%+ fee-based revenue hai, woh 50% commodity-exposed contracts wali se significantly kam volatile hai. Contract mix disclosure aur weighted average remaining contract term check karein.</p>

<h3>Distribution Coverage Aur Leverage</h3>

<p>Kayi midstream companies master limited partnerships (MLPs) ya C-corps ke roop mein structured hain jo significant distributions/dividends deti hain. Distribution coverage ratio — distributable cash flow divided by distributions paid — 1.0x se zyada hona chahiye. 1.0x se neeche matlab company distribution fund karne ke liye borrow ya assets sell kar rahi hai, jo unsustainable hai.</p>

<p>Leverage (total debt divided by EBITDA) doosra critical metric hai. Midstream companies typically 3.0x se 4.5x leverage par operate karti hain. 5.0x se oopar refinancing aur credit rating risk badhata hai. Footnotes mein debt maturity schedule check karein — agley 2-3 saal mein maturities ka wall limited cash flow ke saath refinancing risk create karta hai.</p>

<h2 id="downstream-renewables">Downstream Aur Renewable Energy</h2>

<h3>Refining Companies</h3>

<p>Refining profitability <strong>crack spread</strong> par depend karti hai — crude oil input costs aur refined product output prices ke beech ka difference. MD&A refinery ke hisaab se realized crack spreads, utilization rates (actual throughput versus nameplate capacity), aur maintenance turnaround schedules disclose karta hai. Turnarounds planned shutdowns hain maintenance ke liye aur quarterly results ko significantly impact kar sakte hain.</p>

<h3>Renewable Energy Companies</h3>

<p>Renewable energy filings mein unique disclosures hain business ki project-based nature se judi:</p>

<ul>
<li><strong>Power purchase agreements (PPAs):</strong> Long-term contracts (typically 10-25 saal) fixed ya escalating prices par electricity bechne ke. Contract terms revenue visibility determine karti hain.</li>
<li><strong>Capacity factor:</strong> Actual energy generated divided by theoretical maximum. Wind farms typically 25-45% capacity factors achieve karti hain; utility-scale solar 20-30%.</li>
<li><strong>Tax equity financing:</strong> Kayi renewable projects tax equity structures se funded hain jo investors ko federal tax credits capture karne deti hain. Yeh complex arrangements footnotes mein disclosed hain.</li>
<li><strong>Government incentives:</strong> Production Tax Credits (PTC) aur Investment Tax Credits (ITC) significant revenue components hain. Inn programs mein changes — risk factors mein disclosed — directly project economics aur development pipelines impact karti hain. India ke solar subsidies jaisa concept hai, lekin U.S. mein scale aur structure alag hai.</li>
</ul>

<h2 id="energy-red-flags">Energy Sector Red Flags</h2>

<ul>
<li><strong>Development plans ke bina proved undeveloped reserves badhna.</strong> PUDs jo books par saalon se baithe hain developed reserves mein convert hue bina, company ki true reserve base overstate kar rahe ho sakte hain.</li>
<li><strong>Finding and development costs commodity prices se zyada.</strong> $80/barrel par crude ke waqt $80/barrel kharch karke oil dhundhna har drilled well ke saath value destroy kar rahi hai.</li>
<li><strong>Midstream companies ke liye distribution coverage 1.0x se neeche.</strong> Distribution cash flow se supported nahi hai aur eventually cut hogi.</li>
<li><strong>Hedging book bina replacements ke roll off hona.</strong> Agar company ki hedges agley do quarters mein expire hoti hain aur current commodity price hedged price se bahut neeche hai, earnings significantly decline hone wali hain.</li>
<li><strong>Environmental remediation liabilities badhna.</strong> Contingent liabilities footnote mein environmental cleanup obligations check karein. Yeh tezi se escalate ho sakti hain aur real cash outflows represent karti hain.</li>
<li><strong>Consecutive years mein asset impairments.</strong> Same asset category ke repeated write-downs suggest karte hain ki company systematically assets ke liye overpay kar rahi hai.</li>
</ul>

<h2 id="energy-workflow">Energy Stock Analysis Workflow</h2>

<ol>
<li><strong>Subsector identify karein</strong> (upstream, midstream, downstream, ya renewable) aur appropriate framework apply karein.</li>
<li><strong>Upstream ke liye:</strong> Reserve report se shuru karein. Reserve life (proved reserves divided by annual production), F&D costs, aur all-in breakeven price calculate karein.</li>
<li><strong>Midstream ke liye:</strong> Contract mix se shuru karein. Distribution coverage, leverage, aur weighted average contract life calculate karein.</li>
<li><strong>Sabhi energy companies ke liye:</strong> Hedging disclosures padhein near-term earnings visibility samajhne ke liye, aur capital expenditure plan check karein maintenance needs versus growth spending samajhne ke liye.</li>
<li><strong>Commodity strip pricing se compare karein.</strong> Oil, gas, aur refined products ke current futures curve batate hain market kya expect karti hai. Agar company ki economics strip se oopar prices require karti hai, toh market investment thesis se disagree karti hai.</li>
</ol>

<p>Energy sector SEC filings careful reading reward karti hain kyunki disclosures actionable data se dense hain. Reserve estimates, production costs, contract terms, aur hedging positions sab audited, specific, aur forward-looking hain. Koi doosri information source energy company ki financial reality ke baare mein itna detail nahi deti.</p>
`,
};

/** All sector analysis articles (Hindi), sorted by difficulty then title */
export const sectorArticlesHi: LearnArticle[] = [
  articleHowToAnalyzeTechnologyStocksHi,
  articleHealthcareSectorSecFilingsGuideHi,
  articleFinancialSectorAnalysisGuideHi,
  articleEnergySectorSecFilingsHi,
].sort((a, b) => {
  const diffOrder = { beginner: 0, intermediate: 1, advanced: 2 };
  const diffDiff = diffOrder[a.difficulty] - diffOrder[b.difficulty];
  if (diffDiff !== 0) return diffDiff;
  return a.title.localeCompare(b.title);
});

/** Look up a Hindi sector article by slug */
export function getSectorArticleHi(slug: string): LearnArticle | undefined {
  return sectorArticlesHi.find((a) => a.slug === slug);
}
