// Vitest global setup — runs before all unit/integration tests

// Stub env vars for test environment
process.env.NEXT_PUBLIC_SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "http://localhost:54321";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "test-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || "test-service-key";
process.env.NEXT_PUBLIC_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
