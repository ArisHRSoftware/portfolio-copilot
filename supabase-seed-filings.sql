-- ============================================================================
-- Seed Filing Data — Realistic filings for 10 companies
-- Run AFTER the migration. Paste into Supabase SQL Editor.
-- ============================================================================

-- Helper: get company IDs
DO $$
DECLARE
  aapl_id uuid; msft_id uuid; tsla_id uuid; nvda_id uuid; amzn_id uuid;
  googl_id uuid; meta_id uuid; jpm_id uuid; v_id uuid; dis_id uuid;
BEGIN
  SELECT id INTO aapl_id FROM public.companies WHERE ticker = 'AAPL';
  SELECT id INTO msft_id FROM public.companies WHERE ticker = 'MSFT';
  SELECT id INTO tsla_id FROM public.companies WHERE ticker = 'TSLA';
  SELECT id INTO nvda_id FROM public.companies WHERE ticker = 'NVDA';
  SELECT id INTO amzn_id FROM public.companies WHERE ticker = 'AMZN';
  SELECT id INTO googl_id FROM public.companies WHERE ticker = 'GOOGL';
  SELECT id INTO meta_id FROM public.companies WHERE ticker = 'META';
  SELECT id INTO jpm_id FROM public.companies WHERE ticker = 'JPM';
  SELECT id INTO v_id FROM public.companies WHERE ticker = 'V';
  SELECT id INTO dis_id FROM public.companies WHERE ticker = 'DIS';

  -- AAPL 10-K Annual Report
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (aapl_id, 'aapl-10-k-2026-10-30-001', '10-K', '2026-10-30', '0000320193-26-000095',
   'https://www.sec.gov/Archives/edgar/data/320193/000032019326000095/aapl-20260928.htm',
   9, 'Apple reports record Q4 revenue of $94.9B driven by iPhone 16 Pro and Services growth.',
   'Apple Inc. filed its annual 10-K report for fiscal year 2026, revealing record fourth-quarter revenue of $94.9 billion, up 8% year-over-year. iPhone revenue grew 11% to $48.7B, driven by strong iPhone 16 Pro demand. Services revenue hit an all-time high of $25.3B, up 14%. The company returned $27B to shareholders through dividends and buybacks. Gross margin expanded to 46.9%. Management highlighted accelerating AI features in iOS 19 as a key growth driver for fiscal 2027.',
   '{"key_facts":["Record Q4 revenue of $94.9B, up 8% YoY","iPhone revenue $48.7B, up 11%","Services revenue all-time high $25.3B, up 14%","Gross margin expanded to 46.9%","$27B returned to shareholders"],"insider_trades":[],"risk_flags":["China revenue declined 3% amid macro headwinds","Regulatory scrutiny on App Store fees in EU"],"earnings_impact":{"revenue_change":"+8% YoY","eps_change":"$1.64 vs $1.46 prior year","guidance":"Expects mid-single-digit revenue growth in Q1 FY27","notable_items":["Services gross margin above 70%","Wearables segment flat"]},"significance_score":9,"one_line_summary":"Apple reports record Q4 revenue of $94.9B driven by iPhone 16 Pro and Services growth.","detailed_summary":"Apple Inc. filed its annual 10-K...","faq":[{"question":"What drove Apple revenue growth?","answer":"iPhone 16 Pro demand and Services hitting $25.3B all-time high."},{"question":"Any risks flagged?","answer":"China revenue declined 3% and EU App Store regulation remains a headwind."}]}',
   true, now());

  -- TSLA 8-K Earnings
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (tsla_id, 'tsla-8-k-2026-10-28-001', '8-K', '2026-10-28', '0001318605-26-000042',
   'https://www.sec.gov/Archives/edgar/data/1318605/000131860526000042/tsla-20261028.htm',
   8, 'Tesla Q3 deliveries surge 22% to 531K vehicles; energy storage revenue doubles.',
   'Tesla filed an 8-K disclosing Q3 2026 results. Total deliveries reached 531,000 vehicles, up 22% year-over-year, beating analyst estimates of 505,000. Automotive gross margin improved to 20.1% from 17.9% in the prior year, driven by manufacturing efficiencies at Gigafactory Mexico. Energy Generation and Storage revenue doubled to $3.2B. Full Self-Driving subscriptions surpassed 2 million active users. The company reiterated its target of 2.2 million total deliveries for 2026.',
   '{"key_facts":["Q3 deliveries 531K, up 22% YoY, beat estimates by 5%","Auto gross margin 20.1%, up from 17.9%","Energy storage revenue doubled to $3.2B","FSD subscriptions surpassed 2M users","Reiterated 2.2M delivery target for 2026"],"insider_trades":[],"risk_flags":["Cybertruck margins still below company average","Competition intensifying in China from BYD"],"earnings_impact":{"revenue_change":"+18% YoY to $28.4B","eps_change":"$0.85 vs $0.66 prior year","guidance":"Reiterated 2.2M delivery target","notable_items":["Gigafactory Mexico ramping ahead of schedule"]},"significance_score":8,"one_line_summary":"Tesla Q3 deliveries surge 22% to 531K vehicles; energy storage revenue doubles.","detailed_summary":"Tesla filed an 8-K...","faq":[{"question":"Did Tesla beat delivery estimates?","answer":"Yes, 531K vs 505K analyst consensus."},{"question":"How is the energy business doing?","answer":"Revenue doubled to $3.2B, becoming a significant growth driver."}]}',
   true, now());

  -- NVDA 10-Q
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (nvda_id, 'nvda-10-q-2026-11-01-001', '10-Q', '2026-11-01', '0001045810-26-000118',
   'https://www.sec.gov/Archives/edgar/data/1045810/000104581026000118/nvda-20261027.htm',
   9, 'NVIDIA data center revenue hits $22.1B in Q3, up 85% YoY on Blackwell GPU demand.',
   'NVIDIA filed its 10-Q for Q3 FY2027 reporting data center revenue of $22.1 billion, up 85% year-over-year. Total revenue reached $35.1B, crushing estimates of $33.2B. The Blackwell GPU architecture drove record demand from hyperscaler customers. Gaming revenue grew 15% to $3.5B. Gross margin held steady at 75.2%. The company announced a $50B stock buyback authorization. Management noted supply constraints on Blackwell GPUs extending into mid-2027.',
   '{"key_facts":["Data center revenue $22.1B, up 85% YoY","Total revenue $35.1B vs $33.2B estimate","Blackwell GPU driving record hyperscaler demand","$50B stock buyback authorized","Gross margin 75.2%"],"insider_trades":[],"risk_flags":["Blackwell supply constraints through mid-2027","US-China export controls tightening"],"earnings_impact":{"revenue_change":"+85% data center, +55% total YoY","eps_change":"$0.81 vs $0.50 prior year","guidance":"Q4 revenue guide $37B ± $2B","notable_items":["Gaming recovery continuing","Automotive revenue growing but small"]},"significance_score":9,"one_line_summary":"NVIDIA data center revenue hits $22.1B in Q3, up 85% YoY on Blackwell GPU demand.","detailed_summary":"NVIDIA filed its 10-Q...","faq":[{"question":"Is Blackwell meeting demand?","answer":"No — supply constraints expected through mid-2027."},{"question":"How big is the buyback?","answer":"$50B, one of the largest in tech history."}]}',
   true, now());

  -- JPM Form 4 Insider Buy
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, insider_data, processed_at) VALUES
  (jpm_id, 'jpm-4-2026-10-25-001', '4', '2026-10-25', '0000019617-26-000234',
   'https://www.sec.gov/Archives/edgar/data/19617/000001961726000234/xslF345X01/jpm-form4.xml',
   7, 'JPMorgan CEO Jamie Dimon purchases 50,000 shares worth $11.2M in open market buy.',
   'JPMorgan Chase & Co. filed a Form 4 disclosing that CEO Jamie Dimon purchased 50,000 shares of JPM common stock at an average price of $224.15 per share, totaling approximately $11.2 million. This represents a significant open-market purchase by the CEO, signaling confidence in the bank''s outlook. Dimon now holds approximately 8.6 million shares.',
   '{"key_facts":["CEO Jamie Dimon bought 50,000 shares","Average price $224.15/share","Total value ~$11.2M","Open market purchase (not option exercise)","Now holds ~8.6M shares"],"insider_trades":[{"person":"Jamie Dimon","title":"Chairman & CEO","transaction_type":"buy","shares":50000,"price_per_share":224.15,"date":"2026-10-24"}],"risk_flags":[],"earnings_impact":{"revenue_change":null,"eps_change":null,"guidance":null,"notable_items":[]},"significance_score":7,"one_line_summary":"JPMorgan CEO Jamie Dimon purchases 50,000 shares worth $11.2M in open market buy.","detailed_summary":"JPMorgan Chase...","faq":[{"question":"Why is this significant?","answer":"CEO open-market buys signal confidence — Dimon invested $11.2M of his own money."},{"question":"Is Dimon a large shareholder?","answer":"Yes, ~8.6M shares, one of the largest individual holdings."}]}',
   '{"person":"Jamie Dimon","title":"Chairman & CEO","transaction_type":"buy","shares":50000,"price_per_share":224.15,"total_value":11207500,"date":"2026-10-24"}',
   now());

  -- META DEF 14A Proxy
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, processed_at) VALUES
  (meta_id, 'meta-def-14a-2026-10-22-001', 'DEF 14A', '2026-10-22', '0001326801-26-000089',
   'https://www.sec.gov/Archives/edgar/data/1326801/000132680126000089/meta-def14a.htm',
   6, 'Meta proxy filing reveals $29.3M CEO comp package and $65B AI infrastructure budget for 2027.',
   'Meta Platforms filed its DEF 14A proxy statement ahead of the annual shareholder meeting. Key disclosures include CEO Mark Zuckerberg''s total compensation of $29.3M (primarily security costs), a proposed $65B capital expenditure budget for AI infrastructure in 2027, and three shareholder proposals on AI safety reporting. The board recommends voting against all three proposals. Director compensation averaged $385K.',
   '{"key_facts":["CEO comp $29.3M (mostly security costs)","$65B AI capex budget proposed for 2027","3 shareholder proposals on AI safety","Board recommends against all 3 proposals","Director comp averaged $385K"],"insider_trades":[],"risk_flags":["Shareholder concern about AI spending levels","Governance questions on dual-class share structure"],"earnings_impact":{"revenue_change":null,"eps_change":null,"guidance":null,"notable_items":[]},"significance_score":6,"one_line_summary":"Meta proxy filing reveals $29.3M CEO comp package and $65B AI infrastructure budget for 2027.","detailed_summary":"Meta Platforms filed its DEF 14A...","faq":[{"question":"Why is Zuckerberg comp so high?","answer":"Most of the $29.3M is security costs, not salary or equity."},{"question":"What are the shareholder proposals?","answer":"Three proposals requesting AI safety reporting — board recommends voting against all."}]}',
   now());

  -- AMZN 10-Q
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (amzn_id, 'amzn-10-q-2026-10-31-001', '10-Q', '2026-10-31', '0001018724-26-000067',
   'https://www.sec.gov/Archives/edgar/data/1018724/000101872426000067/amzn-20261001.htm',
   8, 'Amazon AWS revenue accelerates to $28.5B in Q3, up 24%; operating income doubles to $17.4B.',
   'Amazon filed its 10-Q for Q3 2026 reporting total revenue of $158.9B, up 13%. AWS revenue reached $28.5B, accelerating to 24% growth from 19% in the prior quarter. Operating income more than doubled to $17.4B, driven by AWS margin expansion and cost discipline in retail. North America operating margin hit 7.2%. The company announced expansion of its AI assistant Alexa+ to 15 new countries.',
   '{"key_facts":["Total revenue $158.9B, up 13%","AWS revenue $28.5B, up 24% (accelerating)","Operating income $17.4B, more than doubled","North America operating margin 7.2%","Alexa+ expanding to 15 new countries"],"insider_trades":[],"risk_flags":["International segment still operating at thin margins","Antitrust scrutiny on marketplace practices"],"earnings_impact":{"revenue_change":"+13% total, +24% AWS","eps_change":"$1.43 vs $0.94 prior year","guidance":"Q4 revenue $181-$188B","notable_items":["AWS backlog grew 30% to $180B"]},"significance_score":8,"one_line_summary":"Amazon AWS revenue accelerates to $28.5B in Q3, up 24%; operating income doubles to $17.4B.","detailed_summary":"Amazon filed its 10-Q...","faq":[{"question":"Is AWS accelerating?","answer":"Yes, from 19% growth last quarter to 24% this quarter."},{"question":"How is profitability?","answer":"Operating income more than doubled to $17.4B on cost discipline."}]}',
   true, now());

  -- GOOGL 8-K
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (googl_id, 'googl-8-k-2026-10-29-001', '8-K', '2026-10-29', '0001652044-26-000055',
   'https://www.sec.gov/Archives/edgar/data/1652044/000165204426000055/googl-20261029.htm',
   8, 'Alphabet Q3 revenue up 16% to $93.8B; Google Cloud crosses $12B quarterly revenue milestone.',
   'Alphabet filed an 8-K reporting Q3 2026 results. Total revenue reached $93.8B, up 16%. Google Cloud revenue crossed $12B for the first time, growing 29%. Search revenue grew 12% to $51.3B. YouTube ad revenue hit $9.2B, up 18%. Operating margin expanded to 32%. The company announced a $70B accelerated buyback program.',
   '{"key_facts":["Total revenue $93.8B, up 16%","Google Cloud $12B+, up 29%","Search revenue $51.3B, up 12%","YouTube ads $9.2B, up 18%","$70B accelerated buyback"],"insider_trades":[],"risk_flags":["DOJ antitrust ruling remedies still pending","AI Overviews cannibalizing some search clicks"],"earnings_impact":{"revenue_change":"+16% YoY","eps_change":"$2.12 vs $1.55 prior year","guidance":"No specific guidance given","notable_items":["Cloud operating margin reached 17%"]},"significance_score":8,"one_line_summary":"Alphabet Q3 revenue up 16% to $93.8B; Google Cloud crosses $12B quarterly revenue milestone.","detailed_summary":"Alphabet filed an 8-K...","faq":[{"question":"Is Google Cloud profitable?","answer":"Yes, 17% operating margin, up from 11% a year ago."},{"question":"What about the antitrust case?","answer":"DOJ remedies still being negotiated, potential impact on search distribution."}]}',
   true, now());

  -- MSFT 10-Q
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (msft_id, 'msft-10-q-2026-10-30-001', '10-Q', '2026-10-30', '0000789019-26-000134',
   'https://www.sec.gov/Archives/edgar/data/789019/000078901926000134/msft-20261001.htm',
   8, 'Microsoft Azure revenue grows 37% as Copilot drives enterprise AI adoption; total revenue $65.6B.',
   'Microsoft filed its 10-Q for Q1 FY2027 reporting total revenue of $65.6B, up 16%. Azure and cloud services revenue grew 37%, driven by AI workload migration. Microsoft 365 commercial revenue grew 13%. LinkedIn revenue up 10%. Copilot for Microsoft 365 reached 5 million paid seats. Operating income grew 19% to $30.6B.',
   '{"key_facts":["Total revenue $65.6B, up 16%","Azure growth 37% (AI-driven)","Copilot reached 5M paid seats","Operating income $30.6B, up 19%","LinkedIn revenue up 10%"],"insider_trades":[],"risk_flags":["EU Data Boundary compliance costs rising","Gaming revenue flat after Activision integration"],"earnings_impact":{"revenue_change":"+16% total, +37% Azure","eps_change":"$3.32 vs $2.99 prior year","guidance":"Q2 Azure growth 35-37%","notable_items":["Copilot monetization accelerating"]},"significance_score":8,"one_line_summary":"Microsoft Azure revenue grows 37% as Copilot drives enterprise AI adoption; total revenue $65.6B.","detailed_summary":"Microsoft filed its 10-Q...","faq":[{"question":"How fast is Azure growing?","answer":"37%, with AI workloads as the primary driver."},{"question":"Is Copilot making money?","answer":"5 million paid seats at $30/user/month = significant recurring revenue."}]}',
   true, now());

  -- V Form 4 Insider Sell
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, insider_data, processed_at) VALUES
  (v_id, 'v-4-2026-10-27-001', '4', '2026-10-27', '0001403161-26-000078',
   'https://www.sec.gov/Archives/edgar/data/1403161/000140316126000078/xslF345X01/v-form4.xml',
   5, 'Visa CFO sells 15,000 shares worth $4.5M under 10b5-1 pre-arranged trading plan.',
   'Visa Inc. filed a Form 4 disclosing that CFO Christopher Suh sold 15,000 shares at $298.40 per share under a pre-arranged 10b5-1 trading plan. The total transaction value was approximately $4.5M. This is a routine planned sale — 10b5-1 plans are set up months in advance and execute automatically.',
   '{"key_facts":["CFO sold 15,000 shares at $298.40","Pre-arranged 10b5-1 plan (routine)","Total value ~$4.5M","Automatic execution, not discretionary"],"insider_trades":[{"person":"Christopher Suh","title":"CFO","transaction_type":"sell","shares":15000,"price_per_share":298.40,"date":"2026-10-26"}],"risk_flags":[],"earnings_impact":{"revenue_change":null,"eps_change":null,"guidance":null,"notable_items":[]},"significance_score":5,"one_line_summary":"Visa CFO sells 15,000 shares worth $4.5M under 10b5-1 pre-arranged trading plan.","detailed_summary":"Visa Inc. filed a Form 4...","faq":[{"question":"Should I be concerned?","answer":"No — 10b5-1 plans are routine and pre-arranged months ahead."},{"question":"How much does the CFO still own?","answer":"The filing shows remaining holdings of ~125,000 shares."}]}',
   '{"person":"Christopher Suh","title":"CFO","transaction_type":"sell","shares":15000,"price_per_share":298.40,"total_value":4476000,"date":"2026-10-26"}',
   now());

  -- DIS 10-K
  INSERT INTO public.filings (company_id, slug, filing_type, filed_date, accession_number, raw_url, significance_score, one_line_summary, ai_summary_prose, ai_summary_json, has_earnings_data, processed_at) VALUES
  (dis_id, 'dis-10-k-2026-11-02-001', '10-K', '2026-11-02', '0001744489-26-000156',
   'https://www.sec.gov/Archives/edgar/data/1744489/000174448926000156/dis-20260928.htm',
   7, 'Disney streaming turns profitable; Disney+ reaches 175M subscribers with 8% operating margin.',
   'The Walt Disney Company filed its annual 10-K for fiscal year 2026. The headline is streaming profitability — Disney+ reached 175 million subscribers and posted an 8% operating margin, up from breakeven a year ago. Parks & Experiences revenue grew 9% to $34.2B. Studio entertainment had a mixed year with 2 films crossing $1B but overall segment revenue flat. Total company revenue was $93.8B, up 6%.',
   '{"key_facts":["Disney+ hit 175M subs, now profitable at 8% margin","Parks revenue $34.2B, up 9%","Total revenue $93.8B, up 6%","Two $1B+ films but studio segment flat","Free cash flow $9.1B"],"insider_trades":[],"risk_flags":["ESPN standalone streaming launch delayed to Q2 2027","Linear TV cord-cutting accelerating"],"earnings_impact":{"revenue_change":"+6% total","eps_change":"$5.14 vs $4.32 prior year","guidance":"High single-digit EPS growth in FY27","notable_items":["Streaming ARPU improved 12%"]},"significance_score":7,"one_line_summary":"Disney streaming turns profitable; Disney+ reaches 175M subscribers with 8% operating margin.","detailed_summary":"The Walt Disney Company...","faq":[{"question":"Is Disney+ finally profitable?","answer":"Yes — 8% operating margin with 175M subscribers, a major milestone."},{"question":"How are the parks doing?","answer":"Strong at $34.2B revenue, up 9%, driven by price increases and new attractions."}]}',
   true, now());

  -- Update last_filing_date on companies
  UPDATE public.companies SET last_filing_date = '2026-10-30' WHERE ticker = 'AAPL';
  UPDATE public.companies SET last_filing_date = '2026-10-28' WHERE ticker = 'TSLA';
  UPDATE public.companies SET last_filing_date = '2026-11-01' WHERE ticker = 'NVDA';
  UPDATE public.companies SET last_filing_date = '2026-10-25' WHERE ticker = 'JPM';
  UPDATE public.companies SET last_filing_date = '2026-10-22' WHERE ticker = 'META';
  UPDATE public.companies SET last_filing_date = '2026-10-31' WHERE ticker = 'AMZN';
  UPDATE public.companies SET last_filing_date = '2026-10-29' WHERE ticker = 'GOOGL';
  UPDATE public.companies SET last_filing_date = '2026-10-30' WHERE ticker = 'MSFT';
  UPDATE public.companies SET last_filing_date = '2026-10-27' WHERE ticker = 'V';
  UPDATE public.companies SET last_filing_date = '2026-11-02' WHERE ticker = 'DIS';

END $$;
