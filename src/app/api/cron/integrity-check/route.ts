// Content Integrity Monitor
// Schedule: Weekly — Sunday 3:00 AM UTC via QStash
// Checks: dead EDGAR URLs, amended filings, stale sitemap entries

import { createWebhookClient } from "@/lib/supabase/server";
import { verifyQStash } from "@/lib/qstash";
import type { Database } from "@/lib/types/database";

type Filing = Database["public"]["Tables"]["filings"]["Row"];

interface IntegrityResult {
  deadEdgarUrls: string[];
  staleSitemapEntries: string[];
  amendedFilings: Array<{ original: string; amended: string }>;
  totalChecked: number;
}

export async function POST(request: Request): Promise<Response> {
  const qstashError = await verifyQStash(request);
  if (qstashError) return qstashError;

  const supabase = createWebhookClient();
  const result: IntegrityResult = {
    deadEdgarUrls: [],
    staleSitemapEntries: [],
    amendedFilings: [],
    totalChecked: 0,
  };

  const startedAt = new Date().toISOString();

  try {
    // 1. Sample 20 random filings and HEAD-request their raw_url
    const { data: rawSample } = await supabase
      .from("filings")
      .select("*")
      .not("raw_url", "is", null)
      .limit(20);

    const sampleFilings = rawSample as Filing[] | null;

    if (sampleFilings) {
      const checks = await Promise.allSettled(
        sampleFilings.map(async (f) => {
          result.totalChecked++;
          try {
            const resp = await fetch(f.raw_url, {
              method: "HEAD",
              signal: AbortSignal.timeout(10000),
            });
            if (!resp.ok) {
              result.deadEdgarUrls.push(
                `${f.slug}: ${f.raw_url} (${resp.status})`
              );
            }
          } catch {
            result.deadEdgarUrls.push(
              `${f.slug}: ${f.raw_url} (timeout/error)`
            );
          }
        })
      );
      // Settled — all results captured
      void checks;
    }

    // 2. Check for amended filings (types ending in /A)
    const { data: rawAmended } = await supabase
      .from("filings")
      .select("*")
      .like("filing_type", "%/A")
      .order("filed_date", { ascending: false })
      .limit(50);

    const amendedFilingsList = rawAmended as Filing[] | null;

    if (amendedFilingsList) {
      for (const amended of amendedFilingsList) {
        const originalType = amended.filing_type.replace(/\/A$/, "");
        const { data: rawOriginal } = await supabase
          .from("filings")
          .select("*")
          .eq("company_id", amended.company_id)
          .eq("filing_type", originalType)
          .lt("filed_date", amended.filed_date)
          .order("filed_date", { ascending: false })
          .limit(1)
          .single();

        const original = rawOriginal as Filing | null;

        if (original) {
          result.amendedFilings.push({
            original: original.slug,
            amended: amended.slug,
          });
        }
      }
    }

    // 3. Check for filings with slugs but no content (stale sitemap candidates)
    const { data: rawEmpty } = await supabase
      .from("filings")
      .select("*")
      .is("ai_summary_prose", null)
      .not("slug", "is", null)
      .limit(20);

    const emptyFilings = rawEmpty as Filing[] | null;

    if (emptyFilings) {
      result.staleSitemapEntries = emptyFilings.map((f) => f.slug);
    }

    // Log results to pipeline_runs
    const errorsCount =
      result.deadEdgarUrls.length + result.staleSitemapEntries.length;

    await supabase.from("pipeline_runs").insert({
      type: "integrity",
      status: errorsCount > 0 ? "completed_with_errors" : "completed",
      started_at: startedAt,
      completed_at: new Date().toISOString(),
      filings_processed: result.totalChecked,
      errors_count: errorsCount,
      error_details:
        errorsCount > 0
          ? JSON.stringify({
              dead_edgar_urls: result.deadEdgarUrls,
              stale_sitemap_entries: result.staleSitemapEntries,
              amended_filings: result.amendedFilings,
            })
          : null,
    } as never);

    return Response.json({
      success: true,
      ...result,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Integrity check error:", message);

    await supabase.from("pipeline_runs").insert({
      type: "integrity",
      status: "failed",
      started_at: startedAt,
      completed_at: new Date().toISOString(),
      filings_processed: result.totalChecked,
      errors_count: 1,
      error_details: JSON.stringify({ error: message }),
    } as never);

    return Response.json({ success: false, error: message }, { status: 500 });
  }
}
