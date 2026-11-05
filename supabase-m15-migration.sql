-- ============================================================================
-- M15 Migration — Add columns to companies table for rich stock pages
-- Paste into Supabase SQL Editor and click Run
-- ============================================================================

ALTER TABLE public.companies
  ADD COLUMN IF NOT EXISTS sic_code text,
  ADD COLUMN IF NOT EXISTS sic_description text,
  ADD COLUMN IF NOT EXISTS industry text,
  ADD COLUMN IF NOT EXISTS state_of_incorporation text,
  ADD COLUMN IF NOT EXISTS filer_category text,
  ADD COLUMN IF NOT EXISTS fiscal_year_end text,
  ADD COLUMN IF NOT EXISTS description text,
  ADD COLUMN IF NOT EXISTS phone text,
  ADD COLUMN IF NOT EXISTS business_address jsonb;
