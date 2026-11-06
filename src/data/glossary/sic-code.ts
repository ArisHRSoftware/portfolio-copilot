import type { GlossaryTerm } from "../types";

export const termSicCode: GlossaryTerm = {
  slug: "sic-code",
  term: "SIC Code",
  title: "SIC Codes — How the SEC Classifies Every Public Company by Industry",
  shortDefinition:
    "A Standard Industrial Classification (SIC) code is a four-digit number assigned by the SEC to every public company, categorizing it by industry based on its primary business activity.",
  metaDescription:
    "What is a SIC code? How the SEC uses Standard Industrial Classification codes to categorize companies, where to find them, and how investors use SIC codes for industry analysis.",
  wordCount: 2000,
  category: "SEC & Regulatory",
  tags: ["sic-code", "industry-classification", "sec", "company-data", "sectors"],
  relatedSlugs: ["sec-edgar", "10-k-filing", "small-cap", "filer-category"],
  relatedTerms: ["sec-edgar", "10-k-filing", "small-cap", "filer-category"],
  faq: [
    {
      question: "Where can I find a company's SIC code?",
      answer:
        "On SEC EDGAR, search for the company and look at the filing header — the SIC code appears at the top of the company's EDGAR page, along with the SIC description, state of incorporation, and fiscal year end. The SIC code is also listed on the cover page of the 10-K filing. On Brefyr, each stock page displays the company's SIC code and its industry classification.",
    },
    {
      question: "Are SIC codes still used or have they been replaced?",
      answer:
        "SIC codes are still actively used by the SEC for regulatory classification. However, the North American Industry Classification System (NAICS) has replaced SIC codes for most other government purposes (Census Bureau, Bureau of Labor Statistics). The SEC continues to use SIC codes because switching would require updating the regulatory framework. For investors, SIC codes remain the primary way the SEC categorizes public companies.",
    },
    {
      question: "How many SIC codes exist?",
      answer:
        "There are approximately 1,000 four-digit SIC codes organized into 10 major divisions (A through J). Division A is Agriculture, B is Mining, C is Construction, D is Manufacturing, E is Transportation/Utilities, F is Wholesale Trade, G is Retail Trade, H is Finance/Insurance/Real Estate, I is Services, and J is Public Administration. The first two digits indicate the major group, the third digit is the industry group, and the fourth digit is the specific industry.",
    },
    {
      question: "Can a company have the wrong SIC code?",
      answer:
        "Yes. SIC codes are assigned based on a company's primary business activity, but companies evolve. A company that started as a manufacturer might now derive most of its revenue from software services but still carry a manufacturing SIC code. The SEC periodically reviews and updates SIC assignments, but the process isn't automatic. If a company's SIC code seems wrong, check the actual business description in the 10-K rather than relying solely on the code.",
    },
  ],
  lastUpdated: "2026-11-06",
  body: `
<p>Every public company registered with the SEC gets a four-digit SIC code — a classification number that identifies the company's primary industry. These codes date back to 1937, when the U.S. government created the Standard Industrial Classification system to standardize how federal agencies collect and report economic data. The SEC adopted SIC codes for its own regulatory purposes and continues to use them today, even as other agencies have moved to the newer NAICS system.</p>

<p>For investors, SIC codes serve three practical purposes: finding companies in the same industry, understanding a company's regulatory classification, and comparing financial metrics across genuinely comparable businesses.</p>

<h2 id="how-sic-works">How the SIC System Works</h2>

<p>SIC codes are hierarchical. The four digits narrow progressively from broad division to specific industry:</p>

<table>
<thead><tr><th>Level</th><th>Digits</th><th>Example</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Division</td><td>Letter (A-J)</td><td>D</td><td>Manufacturing</td></tr>
<tr><td>Major Group</td><td>First 2 digits</td><td>28</td><td>Chemicals and Allied Products</td></tr>
<tr><td>Industry Group</td><td>First 3 digits</td><td>283</td><td>Drugs</td></tr>
<tr><td>Industry</td><td>All 4 digits</td><td>2834</td><td>Pharmaceutical Preparations</td></tr>
</tbody>
</table>

<p>So a company with SIC code 2834 is classified as a pharmaceutical preparations manufacturer within the chemicals division. Two companies that share the same 4-digit SIC code are in the same specific industry. Companies sharing the first 2 digits are in the same major group — broadly comparable but not necessarily direct competitors.</p>

<h3>Key SIC Ranges for Investors</h3>

<table>
<thead><tr><th>SIC Range</th><th>Sector</th><th>Examples</th></tr></thead>
<tbody>
<tr><td>2800-2899</td><td>Chemicals / Pharma</td><td>Drug manufacturers, biotech</td></tr>
<tr><td>3600-3699</td><td>Electronics</td><td>Semiconductors, electronic components</td></tr>
<tr><td>3800-3899</td><td>Medical Instruments</td><td>Medical devices, lab equipment</td></tr>
<tr><td>4800-4899</td><td>Telecom</td><td>Cable, wireless, internet services</td></tr>
<tr><td>6000-6199</td><td>Banking</td><td>Commercial banks, savings institutions</td></tr>
<tr><td>6200-6299</td><td>Securities</td><td>Broker-dealers, investment advisors</td></tr>
<tr><td>6500-6599</td><td>Real Estate</td><td>REITs, real estate operators</td></tr>
<tr><td>7370-7379</td><td>Software</td><td>Computer programming, data processing</td></tr>
<tr><td>8000-8099</td><td>Health Services</td><td>Hospitals, clinics, health practitioners</td></tr>
</tbody>
</table>

<h2 id="where-to-find">Where to Find SIC Codes</h2>

<p>On <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany" target="_blank" rel="noopener noreferrer">SEC EDGAR</a>, every company page displays the SIC code prominently in the header alongside the company name, CIK number, and state of incorporation. The SIC code is also printed on the cover page of the 10-K filing.</p>

<p>You can also search EDGAR by SIC code to find all companies in a specific industry. Go to the company search page and enter the 4-digit SIC code in the SIC field — EDGAR returns every company classified under that code. This is a powerful way to identify peers and potential competitors that you might not know about.</p>

<h2 id="investor-uses">How Investors Use SIC Codes</h2>

<h3>Finding Comparable Companies</h3>

<p>The most common use: identifying a company's peers. If you're evaluating a company with SIC 7372 (Prepackaged Software), searching EDGAR for all 7372 companies gives you a complete list of SEC-registered software companies. This is more precise than financial data providers' proprietary sector classifications, which can categorize the same company differently.</p>

<h3>Industry-Level Analysis</h3>

<p>SIC codes allow you to aggregate data across an industry. How many companies in SIC 2834 (Pharma) received going concern warnings last year? What's the median EBITDA margin for SIC 6020 (Commercial Banking)? How many insider purchases occurred across SIC 7372 (Software) this quarter? These industry-level queries require a consistent classification system, and SIC provides it.</p>

<h3>Understanding SEC Regulatory Requirements</h3>

<p>The SEC uses SIC codes to determine certain reporting requirements and industry-specific disclosure rules. Banks (SIC 6020-6099) have different financial statement formats than manufacturers. Insurance companies (SIC 6300-6399) follow specialized accounting standards. Real estate companies (SIC 6500-6599) report using REIT-specific metrics. Knowing the SIC code tells you which regulatory framework applies.</p>

<h3>Screening for Undiscovered Small-Caps</h3>

<p>This is where SIC codes become particularly powerful for small-cap investors. Searching EDGAR for a specific SIC code returns every company in that industry, including the micro-caps that don't appear in commercial screeners. A search for SIC 3674 (Semiconductors and Related Devices) might surface a $200 million company you've never heard of that competes in a niche you're interested in. Traditional stock screeners miss these companies; EDGAR doesn't.</p>

<h2 id="sic-vs-naics">SIC vs NAICS</h2>

<p>The North American Industry Classification System (NAICS), developed jointly by the U.S., Canada, and Mexico, replaced SIC for most government statistical purposes in 1997. NAICS uses a six-digit code (versus four digits for SIC) and better reflects modern industries — particularly technology and services sectors that barely existed when SIC was last updated in 1987.</p>

<p>However, the SEC continues to use SIC codes. All EDGAR filings, company classifications, and regulatory references use SIC. For investors, this means SIC is the classification system that matters when working with SEC data. NAICS is relevant for Census Bureau statistics and industry reports, but not for SEC filing research.</p>

<p>The mismatch creates occasional confusion. A company might be classified as SIC 7372 (Prepackaged Software) by the SEC but NAICS 518210 (Data Processing, Hosting) by the Census Bureau. Both are technically correct — they just slice the classification differently.</p>

<h2 id="limitations">Limitations of SIC Codes</h2>

<p><strong>Outdated categories.</strong> The SIC system was last substantially updated in 1987. There's no SIC code for "cloud computing," "social media," or "electric vehicle manufacturing." Companies in these industries get shoehorned into codes that don't fully describe their business. Tesla, for example, carries SIC 3711 (Motor Vehicles and Passenger Car Bodies) — technically accurate, but it doesn't capture the energy storage and solar business segments.</p>

<p><strong>Single classification.</strong> Each company gets one SIC code based on its primary business activity. A diversified conglomerate like Berkshire Hathaway (SIC 6331: Fire, Marine & Casualty Insurance) is classified by its insurance operations even though it owns railroads, utilities, and consumer brands.</p>

<p><strong>Assignment lag.</strong> When companies pivot their business model, the SIC code doesn't automatically update. A company that started as a retailer and became a software company might carry the retail SIC code for years until it's manually corrected.</p>

<p>Despite these limitations, SIC codes remain the standard for SEC data and the most practical tool for industry-level analysis of U.S. public companies. On Brefyr, each stock page displays the company's SIC code and maps it to one of 11 investment-relevant sectors, bridging the gap between the granular 4-digit SIC classification and the broader sector categories investors typically use.</p>
`,
};
