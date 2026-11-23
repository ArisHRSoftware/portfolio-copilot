import type { GlossaryTerm } from "../../types";

export const termAcquisitionHi: GlossaryTerm = {
  slug: "acquisition",
  term: "Acquisition (अधिग्रहण)",
  title: "Acquisition — जब एक Company दूसरी Company को खरीदती है",
  shortDefinition:
    "Acquisition एक corporate transaction है जिसमें एक company (acquirer) दूसरी company (target) में controlling interest purchase करती है, target की operations, assets, और liabilities absorb करती है।",
  metaDescription:
    "Acquisition क्या है? Friendly vs hostile takeovers, deal structures, due diligence process, और भारतीय निवेशक SEC filings में acquisitions कैसे track करें।",
  wordCount: 480,
  category: "Corporate Actions",
  tags: ["acquisition", "m-and-a", "corporate-action", "takeover", "due-diligence"],
  relatedSlugs: ["merger", "tender-offer", "leveraged-buyout", "goodwill", "8-k-filing"],
  relatedTerms: ["merger", "tender-offer", "leveraged-buyout", "goodwill", "8-k-filing"],
  faq: [
    {
      question: "Friendly और hostile acquisition में क्या difference है?",
      answer:
        "Friendly acquisition में target company का board transaction agree करता है और shareholders को recommend करता है। Hostile acquisition में acquirer directly shareholders के पास जाता है (usually tender offer से) board की approval बिना, या proxy fight launch करता है board replace करने के लिए। Hostile bids में usually higher premiums ज़रूरी होते हैं shareholders को convince करने के लिए।",
    },
    {
      question: "Indian companies के US acquisitions कैसे track करें?",
      answer:
        "Tata Motors (Jaguar Land Rover), Infosys, और Wipro ने multiple US acquisitions किए हैं। ये deals 8-K filings में announce होते हैं, DEF 14A में shareholder approval details होती हैं, और 10-K में post-closing purchase price allocation दिखती है। CFIUS (Committee on Foreign Investment) review cross-border deals के लिए important है — Indian companies acquiring US companies को CFIUS clearance लेनी पड़ सकती है।",
    },
  ],
  lastUpdated: "2026-11-19",
  body: `
<p>Acquisition तब होता है जब एक company दूसरी company में controlling interest purchase करती है। Acquirer target की operations, assets, employees, और liabilities absorb करता है। Closing के बाद, target company typically independent entity नहीं रहती — वो या तो acquirer की subsidiary बन जाती है या fully integrated हो जाती है। Acquisitions छोटे bolt-on purchases से लेकर hundreds of billions dollars की transformational deals तक हो सकती हैं जो entire industries reshape कर दें।</p>

<h2>Deal Structures</h2>

<p><strong>All-cash deal:</strong> Acquirer target shareholders को entirely cash में pay करता है। Target shareholders fixed dollar amount per share receive करते हैं और future exposure खो देते हैं। Simple और certain लेकिन significant capital ज़रूरी।</p>

<p><strong>All-stock deal:</strong> Target shareholders acquirer में shares receive करते हैं specified exchange ratio पर। Combined entity में participate करते हैं future upside (और downside) में। Cash conserve करने के लिए common structure।</p>

<p><strong>Cash-and-stock deal:</strong> Cash और acquirer shares का combination। Large acquisitions के लिए सबसे common structure — certainty (cash) और participation (stock) balance करता है।</p>

<p><strong>Leveraged acquisition:</strong> Acquirer purchase largely borrowed money से finance करता है। Private equity firms typically 60-80% purchase price debt से fund करती हैं।</p>

<h2>Acquisition Process</h2>

<p><strong>Target identification:</strong> Strategic analysis, industry mapping, या investment bank referrals से potential targets identify होते हैं।</p>

<p><strong>Due diligence:</strong> Financial audits, legal reviews, tax analysis, operational assessments — typically 4-12 weeks लगते हैं और dozens of professional advisors involve होते हैं।</p>

<p><strong>Negotiation:</strong> Price, structure, representations, warranties, indemnification, closing conditions negotiate होती हैं।</p>

<p><strong>Regulatory approval:</strong> Antitrust authorities (FTC/DOJ), industry-specific regulators, और CFIUS (cross-border deals) से approvals ज़रूरी हो सकती हैं।</p>

<p><strong>Shareholder approval:</strong> Target shareholders vote करते हैं transaction पर। Proxy statement सब material information provide करता है।</p>

<h2>क्या Acquisitions Value Create करती हैं?</h2>

<p>Research suggest करती है कि 50-70% acquisitions expected value create करने में fail होती हैं। Common causes: overpayment, cultural integration challenges, customer attrition, management departures, और integration costs exceeding estimates। लेकिन well-executed acquisitions — clear strategic logic, disciplined pricing के साथ — enormous value create कर सकती हैं। Berkshire Hathaway, Danaher, और Constellation Software ने disciplined acquisition strategies पर entire business models build किए हैं।</p>

<h2>भारतीय निवेशकों के लिए Context</h2>

<p>India में acquisitions SEBI के Takeover Regulations (SAST) govern करते हैं — 25% trigger threshold, 26% mandatory offer। US में rules different हैं — no mandatory offer requirement, लेकिन SEC disclosure comprehensive है। Indian companies जो US-listed firms acquire करती हैं (जैसे Tata's JLR acquisition) को दोनों jurisdictions के rules follow करने पड़ते हैं। Cross-border M&A में FEMA regulations, RBI approvals, और tax treaty implications भी consider करने ज़रूरी हैं।</p>

<p>Brefyr सभी acquisition-related filings track करता है — 8-K announcements, proxy filings, और regulatory developments — across 7,600+ SEC-reporting companies।</p>
`,
};
