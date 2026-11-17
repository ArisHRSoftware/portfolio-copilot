/**
 * Wrapper that repeatedly runs process-unprocessed.mjs --type 4 --reprocess
 * until all Form 4 filings have insider_data.
 *
 * Each round processes a batch of 200 filings. Runs until no more remain.
 *
 * Usage: node scripts/reprocess-all-form4.mjs
 */

import { execSync } from "child_process";
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env for DB check
function loadEnv() {
  const envPath = resolve(__dirname, "..", ".env");
  const lines = readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) v = v.slice(1, -1);
    if (!process.env[k]) process.env[k] = v;
  }
}
loadEnv();

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function getRemaining() {
  const r = await fetch(
    `${SUPABASE_URL}/rest/v1/filings?select=id&filing_type=eq.4&insider_data=is.null&processed_at=not.is.null&limit=1`,
    { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, Prefer: "count=exact" } }
  );
  return parseInt(r.headers.get("content-range")?.split("/")[1] || "0", 10);
}

async function main() {
  const startTime = Date.now();
  let round = 0;
  let totalUpdated = 0;

  while (true) {
    round++;
    const remaining = await getRemaining();
    if (remaining === 0) {
      console.log(`\nAll Form 4 filings have insider data. Done!`);
      break;
    }

    const elapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
    console.log(`\n=== Round ${round} | ${remaining} remaining | ${totalUpdated} updated so far | ${elapsed}m elapsed ===`);

    try {
      const output = execSync(
        `node scripts/process-unprocessed.mjs --type 4 --reprocess --limit 200`,
        { cwd: resolve(__dirname, ".."), encoding: "utf-8", timeout: 600_000 }
      );

      // Parse the "Updated: N" line from output
      const updatedMatch = output.match(/Updated:\s*(\d+)/);
      const updated = updatedMatch ? parseInt(updatedMatch[1], 10) : 0;
      totalUpdated += updated;

      // Parse skipped
      const skippedMatch = output.match(/Skipped.*?:\s*(\d+)/);
      const skipped = skippedMatch ? parseInt(skippedMatch[1], 10) : 0;

      console.log(`  → ${updated} updated, ${skipped} skipped`);

      // If nothing was updated, we've exhausted extractable filings
      if (updated === 0) {
        console.log(`No more extractable filings (${skipped} skipped this round). Done.`);
        break;
      }
    } catch (err) {
      console.error(`  Round ${round} error:`, err.message?.slice(0, 200));
      // Continue to next round — transient errors are expected
    }

    // Brief pause between rounds
    await new Promise((r) => setTimeout(r, 2000));
  }

  const totalElapsed = ((Date.now() - startTime) / 1000 / 60).toFixed(1);
  console.log(`\n=== Complete ===`);
  console.log(`Rounds: ${round}`);
  console.log(`Total updated: ${totalUpdated}`);
  console.log(`Total time: ${totalElapsed} minutes`);
}

main().catch((err) => {
  console.error("Fatal:", err.message);
  process.exit(1);
});
