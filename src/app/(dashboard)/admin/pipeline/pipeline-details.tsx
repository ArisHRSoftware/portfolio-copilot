"use client";

import { useState } from "react";
import type { PipelineRun, PipelineError } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/client";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronRight,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "\u2014";
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function statusVariant(status: string) {
  switch (status) {
    case "completed":
      return "secondary" as const;
    case "running":
      return "default" as const;
    case "failed":
      return "destructive" as const;
    default:
      return "outline" as const;
  }
}

export function PipelineRunDetails({ run }: { run: PipelineRun }) {
  const [expanded, setExpanded] = useState(false);
  const [errors, setErrors] = useState<PipelineError[]>([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  async function loadErrors() {
    if (loaded) {
      setExpanded(!expanded);
      return;
    }

    setLoading(true);
    try {
      const supabase = createClient();
      const { data } = await supabase
        .from("pipeline_errors")
        .select("*")
        .eq("pipeline_run_id", run.id)
        .order("created_at", { ascending: false });

      setErrors((data ?? []) as PipelineError[]);
      setLoaded(true);
      setExpanded(true);
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data } = await supabase
        .from("pipeline_errors")
        .select("*")
        .eq("pipeline_run_id", run.id)
        .order("created_at", { ascending: false });

      setErrors((data ?? []) as PipelineError[]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TableRow
        className="cursor-pointer"
        onClick={loadErrors}
        aria-expanded={expanded}
      >
        <TableCell className="w-8 px-2">
          {loading ? (
            <RefreshCw className="size-3.5 animate-spin text-muted-foreground" />
          ) : expanded ? (
            <ChevronDown className="size-3.5 text-muted-foreground" />
          ) : (
            <ChevronRight className="size-3.5 text-muted-foreground" />
          )}
        </TableCell>
        <TableCell>{formatDate(run.started_at)}</TableCell>
        <TableCell>{formatDate(run.completed_at)}</TableCell>
        <TableCell>
          <Badge variant={statusVariant(run.status)}>{run.status}</Badge>
        </TableCell>
        <TableCell className="text-right">{run.filings_processed}</TableCell>
        <TableCell className="text-right">{run.errors_count}</TableCell>
      </TableRow>

      {expanded && (
        <TableRow>
          <TableCell colSpan={6} className="bg-muted/30 p-0">
            <div className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">
                  Errors for run {run.id.slice(0, 8)}...
                </h4>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={(e) => {
                    e.stopPropagation();
                    refresh();
                  }}
                  disabled={loading}
                >
                  <RefreshCw
                    className={`size-3 ${loading ? "animate-spin" : ""}`}
                    data-icon="inline-start"
                  />
                  Refresh
                </Button>
              </div>

              {errors.length === 0 ? (
                <p className="text-sm text-muted-foreground py-2">
                  No errors recorded for this run.
                </p>
              ) : (
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {errors.map((err) => (
                    <Alert key={err.id} variant="destructive">
                      <AlertTriangle className="size-4" />
                      <AlertTitle className="text-xs">
                        {err.filing_accession
                          ? `Filing: ${err.filing_accession}`
                          : "General error"}
                      </AlertTitle>
                      <AlertDescription className="text-xs mt-1 font-mono break-all">
                        {err.error_message}
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
              )}
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
}
