-- ============================================================================
-- Brefyr — Complete Database Migration
-- Paste this into Supabase SQL Editor: Dashboard > SQL Editor > New Query
-- Run all 3 blocks in order (migration, seed, trigger)
-- ============================================================================

-- ============================================================================
-- BLOCK 1: TABLES + RLS + POLICIES
-- ============================================================================

-- 1. profiles
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  full_name text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.profiles enable row level security;
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

-- 2. companies
create table public.companies (
  id uuid primary key default gen_random_uuid(),
  ticker text not null unique,
  name text not null,
  sector text not null default '',
  market_cap bigint,
  exchange text not null default '',
  cik_number text not null default '',
  last_filing_date date,
  status text not null default 'active' check (status in ('active', 'inactive')),
  previous_tickers text[],
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.companies enable row level security;
create policy "Public read companies" on public.companies for select to anon, authenticated using (true);
create policy "Service role manages companies" on public.companies for all to service_role using (true) with check (true);

-- 3. filings
create table public.filings (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public.companies on delete cascade,
  slug text not null unique,
  filing_type text not null,
  filed_date date not null,
  accepted_date date,
  accession_number text not null unique,
  raw_url text not null default '',
  ai_summary_json jsonb,
  ai_summary_prose text,
  one_line_summary text,
  significance_score integer not null default 0,
  insider_data jsonb,
  has_earnings_data boolean not null default false,
  input_tokens integer,
  output_tokens integer,
  superseded_by uuid references public.filings(id),
  processed_at timestamptz,
  created_at timestamptz not null default now()
);
create index idx_filings_company_id on public.filings(company_id);
create index idx_filings_filed_date on public.filings(filed_date desc);
create index idx_filings_filing_type on public.filings(filing_type);
create index idx_filings_significance on public.filings(significance_score desc);
alter table public.filings enable row level security;
create policy "Public read filings" on public.filings for select to anon, authenticated using (true);
create policy "Service role manages filings" on public.filings for all to service_role using (true) with check (true);

-- 4. user_stocks
create table public.user_stocks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  company_id uuid not null references public.companies on delete cascade,
  shares numeric,
  added_at timestamptz not null default now(),
  unique(user_id, company_id)
);
alter table public.user_stocks enable row level security;
create policy "Users CRUD own stocks" on public.user_stocks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 5. subscriptions
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  plan text not null default 'free' check (plan in ('free', 'starter', 'plus', 'pro')),
  razorpay_subscription_id text,
  status text not null default 'active' check (status in ('active', 'canceled', 'past_due', 'trialing')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.subscriptions enable row level security;
create policy "Users read own subscription" on public.subscriptions for select using (auth.uid() = user_id);
create policy "Service role manages subscriptions" on public.subscriptions for all to service_role using (true) with check (true);

-- 6. alert_rules
create table public.alert_rules (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  rule_json jsonb not null default '{}',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.alert_rules enable row level security;
create policy "Users CRUD own alert rules" on public.alert_rules for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 7. alerts
create table public.alerts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  filing_id uuid not null references public.filings on delete cascade,
  sent_at timestamptz not null default now(),
  channel text not null check (channel in ('email', 'push', 'webhook')),
  created_at timestamptz not null default now()
);
create index idx_alerts_user_id on public.alerts(user_id);
alter table public.alerts enable row level security;
create policy "Users read own alerts" on public.alerts for select using (auth.uid() = user_id);
create policy "Service role inserts alerts" on public.alerts for insert to service_role with check (true);

-- 8. api_keys
create table public.api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  key_hash text not null,
  name text not null default '',
  tier text not null default 'pro',
  calls_today integer not null default 0,
  last_used_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.api_keys enable row level security;
create policy "Users CRUD own api keys" on public.api_keys for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 9. blog_posts
create table public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  body text not null default '',
  meta_description text,
  published_at timestamptz,
  auto_generated boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.blog_posts enable row level security;
create policy "Public read blog posts" on public.blog_posts for select to anon, authenticated using (true);
create policy "Service role manages blog posts" on public.blog_posts for all to service_role using (true) with check (true);

-- 10. newsletter_issues
create table public.newsletter_issues (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  body_html text not null default '',
  sent_at timestamptz,
  recipient_count integer not null default 0,
  created_at timestamptz not null default now()
);
alter table public.newsletter_issues enable row level security;
create policy "Public read newsletter issues" on public.newsletter_issues for select to anon, authenticated using (true);
create policy "Service role manages newsletters" on public.newsletter_issues for all to service_role using (true) with check (true);

-- 11. newsletter_subscribers
create table public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz,
  source text
);
alter table public.newsletter_subscribers enable row level security;
create policy "Service role manages subscribers" on public.newsletter_subscribers for all to service_role using (true) with check (true);

-- 12. content_queue
create table public.content_queue (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('newsletter', 'blog', 'social')),
  title text not null,
  body jsonb not null default '{}',
  preview_html text,
  status text not null default 'draft' check (status in ('draft', 'pending_review', 'approved', 'published', 'rejected', 'archived')),
  significance_score integer,
  founder_note text,
  rejection_reason text,
  scheduled_at timestamptz,
  approved_at timestamptz,
  published_at timestamptz,
  archived_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.content_queue enable row level security;
create policy "Service role manages content queue" on public.content_queue for all to service_role using (true) with check (true);
-- Note: admin pages use cookie-based client (RLS-enabled), so authenticated SELECT is needed.
-- Application layer enforces admin-only access via ADMIN_EMAIL check in page components.
create policy "Authenticated reads content queue" on public.content_queue for select to authenticated using (true);

-- 13. pipeline_runs
create table public.pipeline_runs (
  id uuid primary key default gen_random_uuid(),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  filings_processed integer not null default 0,
  errors_count integer not null default 0,
  status text not null default 'running' check (status in ('running', 'completed', 'failed'))
);
alter table public.pipeline_runs enable row level security;
create policy "Service role manages pipeline runs" on public.pipeline_runs for all to service_role using (true) with check (true);
create policy "Authenticated reads pipeline runs" on public.pipeline_runs for select to authenticated using (true);

-- 14. pipeline_errors
create table public.pipeline_errors (
  id uuid primary key default gen_random_uuid(),
  pipeline_run_id uuid not null references public.pipeline_runs on delete cascade,
  filing_accession text,
  error_message text not null,
  created_at timestamptz not null default now()
);
alter table public.pipeline_errors enable row level security;
create policy "Service role manages pipeline errors" on public.pipeline_errors for all to service_role using (true) with check (true);
create policy "Authenticated reads pipeline errors" on public.pipeline_errors for select to authenticated using (true);

-- 15. referrals
create table public.referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_user_id uuid not null references auth.users on delete cascade,
  referred_user_id uuid not null references auth.users on delete cascade,
  status text not null default 'pending',
  reward_applied_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.referrals enable row level security;
create policy "Users read own referrals" on public.referrals for select using (auth.uid() = referrer_user_id);
create policy "Service role manages referrals" on public.referrals for all to service_role using (true) with check (true);

-- 16. page_views
create table public.page_views (
  id serial primary key,
  page_path text not null,
  date date not null default current_date,
  count integer not null default 0,
  unique(page_path, date)
);
alter table public.page_views enable row level security;
create policy "Public read page views" on public.page_views for select to anon, authenticated using (true);
create policy "Service role manages page views" on public.page_views for all to service_role using (true) with check (true);

-- 17. redirects
create table public.redirects (
  id uuid primary key default gen_random_uuid(),
  old_path text not null,
  new_path text not null,
  created_at timestamptz not null default now()
);
alter table public.redirects enable row level security;
create policy "Public read redirects" on public.redirects for select to anon, authenticated using (true);
create policy "Service role manages redirects" on public.redirects for all to service_role using (true) with check (true);


-- ============================================================================
-- BLOCK 2: AUTH TRIGGER — auto-create profile on signup
-- ============================================================================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', ''));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();


-- ============================================================================
-- BLOCK 3: SEED DATA — 10 real US companies with real CIK numbers
-- ============================================================================

insert into public.companies (ticker, name, sector, exchange, cik_number, market_cap, status) values
  ('AAPL',  'Apple Inc.',                 'Technology',              'NASDAQ', '0000320193',  3400000000000, 'active'),
  ('MSFT',  'Microsoft Corporation',      'Technology',              'NASDAQ', '0000789019',  3100000000000, 'active'),
  ('TSLA',  'Tesla Inc.',                 'Consumer Cyclical',       'NASDAQ', '0001318605',   780000000000, 'active'),
  ('NVDA',  'NVIDIA Corporation',         'Technology',              'NASDAQ', '0001045810',  3200000000000, 'active'),
  ('AMZN',  'Amazon.com Inc.',            'Consumer Cyclical',       'NASDAQ', '0001018724',  2000000000000, 'active'),
  ('GOOGL', 'Alphabet Inc.',              'Communication Services',  'NASDAQ', '0001652044',  2100000000000, 'active'),
  ('META',  'Meta Platforms Inc.',        'Communication Services',  'NASDAQ', '0001326801',  1500000000000, 'active'),
  ('JPM',   'JPMorgan Chase & Co.',       'Financial Services',      'NYSE',   '0000019617',   600000000000, 'active'),
  ('V',     'Visa Inc.',                  'Financial Services',      'NYSE',   '0001403161',   550000000000, 'active'),
  ('DIS',   'The Walt Disney Company',    'Communication Services',  'NYSE',   '0001744489',   200000000000, 'active');
