import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getPipelineRuns } from "@/lib/supabase/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { Activity, Clock, FileText, AlertTriangle, DollarSign } from "lucide-react";
import { PipelineRunDetails } from "./pipeline-details";
import { getCostForPeriod, calculateCost } from "@/lib/claude-cost";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Pipeline Monitor",
};

function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function PipelineMonitorPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  if (!process.env.ADMIN_EMAIL || user.email !== process.env.ADMIN_EMAIL) {
    redirect("/dashboard");
  }

  const [runs, dailyCost, monthlyCost] = await Promise.all([
    getPipelineRuns(supabase),
    getCostForPeriod({ days: 1 }),
    getCostForPeriod({ days: 30 }),
  ]);

  const totalRuns = runs.length;
  const totalFilings = runs.reduce((sum, r) => sum + r.filings_processed, 0);
  const totalErrors = runs.reduce((sum, r) => sum + r.errors_count, 0);
  const errorRate =
    totalFilings > 0
      ? ((totalErrors / totalFilings) * 100).toFixed(1)
      : "0.0";
  const lastRunTime = runs.length > 0 ? runs[0].started_at : null;

  return (
    <main className="flex-1 px-4 py-8 max-w-6xl mx-auto w-full space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">Pipeline Monitor</h1>
        <p className="text-sm text-muted-foreground">
          Track SEC filing pipeline runs, processing stats, and errors.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Card size="sm">
          <CardHeader>
            <CardDescription>Total Runs</CardDescription>
            <CardTitle className="text-2xl">{totalRuns}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Activity className="size-3" />
              <span>Recent 20 runs</span>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardDescription>Filings Processed</CardDescription>
            <CardTitle className="text-2xl">
              {totalFilings.toLocaleString()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <FileText className="size-3" />
              <span>Across all runs</span>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardDescription>Error Rate</CardDescription>
            <CardTitle className="text-2xl">{errorRate}%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <AlertTriangle className="size-3" />
              <span>
                {totalErrors} error{totalErrors !== 1 ? "s" : ""} total
              </span>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardDescription>Last Run</CardDescription>
            <CardTitle className="text-lg">{formatDate(lastRunTime)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="size-3" />
              <span>
                {runs.length > 0 && runs[0].status === "running"
                  ? "In progress"
                  : "Completed"}
              </span>
            </div>
          </CardContent>
        </Card>

        <Card size="sm">
          <CardHeader>
            <CardDescription>Claude API Cost</CardDescription>
            <CardTitle className="text-2xl">
              ${dailyCost.totalCost.toFixed(2)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <DollarSign className="size-3" />
              <span>
                Today ({dailyCost.filingsAnalyzed} filings) &middot; ${monthlyCost.totalCost.toFixed(2)}/30d
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Runs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Runs</CardTitle>
          <CardDescription>
            Click a row to expand and view error details.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {runs.length === 0 ? (
            <p className="py-8 text-center text-sm text-muted-foreground">
              No pipeline runs recorded yet.
            </p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8" />
                  <TableHead>Started</TableHead>
                  <TableHead>Completed</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Filings</TableHead>
                  <TableHead className="text-right">Errors</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {runs.map((run) => (
                  <PipelineRunDetails key={run.id} run={run} />
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
