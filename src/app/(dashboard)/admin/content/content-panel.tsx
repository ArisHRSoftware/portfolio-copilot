"use client";

import { useState, useTransition } from "react";
import type { ContentQueueItem } from "@/lib/supabase/queries";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Check, X, Eye, Archive, FileText } from "lucide-react";
import {
  approveContent,
  rejectContent,
  publishContent,
  archiveContent,
  batchApproveContent,
} from "./content-actions";

type Status = ContentQueueItem["status"];

const STATUS_TABS: { label: string; value: Status | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending Review", value: "pending_review" },
  { label: "Approved", value: "approved" },
  { label: "Published", value: "published" },
  { label: "Rejected", value: "rejected" },
];

function statusBadgeVariant(status: Status) {
  switch (status) {
    case "pending_review":
      return "outline" as const;
    case "approved":
      return "default" as const;
    case "published":
      return "secondary" as const;
    case "rejected":
      return "destructive" as const;
    case "archived":
      return "secondary" as const;
    case "draft":
      return "outline" as const;
    default:
      return "outline" as const;
  }
}

function typeBadgeVariant(type: ContentQueueItem["type"]) {
  switch (type) {
    case "newsletter":
      return "default" as const;
    case "blog":
      return "secondary" as const;
    case "social":
      return "outline" as const;
    default:
      return "outline" as const;
  }
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

function getBodyPreview(item: ContentQueueItem): string {
  if (item.preview_html) {
    // Strip HTML tags for text preview
    const text = item.preview_html.replace(/<[^>]*>/g, "");
    return truncateText(text, 200);
  }
  if (typeof item.body === "string") {
    return truncateText(item.body, 200);
  }
  const bodyStr = JSON.stringify(item.body);
  return truncateText(bodyStr, 200);
}

function ContentItemCard({
  item,
  isSelected,
  onToggleSelect,
}: {
  item: ContentQueueItem;
  isSelected: boolean;
  onToggleSelect: (id: string) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [founderNote, setFounderNote] = useState(item.founder_note ?? "");
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectField, setShowRejectField] = useState(false);

  function handleApprove() {
    startTransition(async () => {
      await approveContent(item.id, founderNote || undefined);
    });
  }

  function handleReject() {
    if (!rejectReason.trim()) return;
    startTransition(async () => {
      await rejectContent(item.id, rejectReason);
    });
  }

  function handlePublish() {
    startTransition(async () => {
      await publishContent(item.id);
    });
  }

  function handleArchive() {
    startTransition(async () => {
      await archiveContent(item.id);
    });
  }

  return (
    <Card className={isPending ? "opacity-60 pointer-events-none" : ""}>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            {item.status === "pending_review" && (
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => onToggleSelect(item.id)}
                className="size-4 rounded border-border accent-primary shrink-0"
                aria-label={`Select ${item.title}`}
              />
            )}
            <CardTitle className="truncate">{item.title}</CardTitle>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <Badge variant={typeBadgeVariant(item.type)}>{item.type}</Badge>
            <Badge variant={statusBadgeVariant(item.status)}>
              {item.status.replace("_", " ")}
            </Badge>
          </div>
        </div>
        <CardDescription className="flex items-center gap-2">
          <span>Created {formatDate(item.created_at)}</span>
          {item.significance_score !== null && (
            <>
              <span className="text-muted-foreground/40">|</span>
              <span>Score: {item.significance_score}</span>
            </>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Body preview */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {getBodyPreview(item)}
        </p>

        {/* Founder note field */}
        {(item.status === "pending_review" || item.status === "draft") && (
          <div className="space-y-1.5">
            <label
              htmlFor={`note-${item.id}`}
              className="text-xs font-medium text-muted-foreground"
            >
              Founder note
            </label>
            <Textarea
              id={`note-${item.id}`}
              value={founderNote}
              onChange={(e) => setFounderNote(e.target.value)}
              placeholder="Add a note before approving..."
              className="min-h-12 text-sm"
            />
          </div>
        )}

        {/* Show existing founder note for non-pending items */}
        {item.founder_note &&
          item.status !== "pending_review" &&
          item.status !== "draft" && (
            <div className="rounded-md bg-muted/50 p-2.5 text-sm">
              <span className="text-xs font-medium text-muted-foreground">
                Founder note:
              </span>
              <p className="mt-0.5">{item.founder_note}</p>
            </div>
          )}

        {/* Rejection reason display */}
        {item.rejection_reason && (
          <div className="rounded-md bg-destructive/5 border border-destructive/20 p-2.5 text-sm">
            <span className="text-xs font-medium text-destructive">
              Rejection reason:
            </span>
            <p className="mt-0.5 text-destructive/80">
              {item.rejection_reason}
            </p>
          </div>
        )}

        {/* Reject reason input (toggled) */}
        {showRejectField && item.status === "pending_review" && (
          <div className="space-y-2">
            <Textarea
              value={rejectReason}
              onChange={(e) => setRejectReason(e.target.value)}
              placeholder="Reason for rejection (required)..."
              className="min-h-12 text-sm"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="destructive"
                onClick={handleReject}
                disabled={!rejectReason.trim()}
              >
                Confirm Reject
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  setShowRejectField(false);
                  setRejectReason("");
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      {/* Action buttons based on status */}
      {(item.status === "pending_review" ||
        item.status === "approved" ||
        item.status === "published") && (
        <CardFooter>
          <div className="flex items-center gap-2 flex-wrap">
            {item.status === "pending_review" && !showRejectField && (
              <>
                <Button size="sm" onClick={handleApprove}>
                  <Check className="size-3.5" data-icon="inline-start" />
                  Approve
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => setShowRejectField(true)}
                >
                  <X className="size-3.5" data-icon="inline-start" />
                  Reject
                </Button>
              </>
            )}
            {item.status === "approved" && (
              <Button size="sm" onClick={handlePublish}>
                <Eye className="size-3.5" data-icon="inline-start" />
                Publish
              </Button>
            )}
            {item.status === "published" && (
              <Button size="sm" variant="outline" onClick={handleArchive}>
                <Archive className="size-3.5" data-icon="inline-start" />
                Archive
              </Button>
            )}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export function ContentApprovalPanel({
  items,
}: {
  items: ContentQueueItem[];
}) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isPending, startTransition] = useTransition();
  const [batchNote, setBatchNote] = useState("");

  function toggleSelect(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function selectAllPending() {
    const pendingIds = items
      .filter((i) => i.status === "pending_review")
      .map((i) => i.id);
    setSelectedIds(new Set(pendingIds));
  }

  function clearSelection() {
    setSelectedIds(new Set());
  }

  function handleBatchApprove() {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) return;
    startTransition(async () => {
      await batchApproveContent(ids, batchNote || undefined);
      setSelectedIds(new Set());
      setBatchNote("");
    });
  }

  function filterItems(tab: Status | "all") {
    if (tab === "all") return items;
    return items.filter((i) => i.status === tab);
  }

  const pendingCount = items.filter(
    (i) => i.status === "pending_review"
  ).length;

  return (
    <div className="space-y-4">
      {/* Batch actions bar */}
      {selectedIds.size > 0 && (
        <Card
          size="sm"
          className={isPending ? "opacity-60 pointer-events-none" : ""}
        >
          <CardContent className="flex items-center gap-3 flex-wrap pt-3">
            <span className="text-sm font-medium">
              {selectedIds.size} selected
            </span>
            <Separator orientation="vertical" className="h-4" />
            <Textarea
              value={batchNote}
              onChange={(e) => setBatchNote(e.target.value)}
              placeholder="Optional batch note..."
              className="min-h-8 max-w-xs text-sm flex-1"
            />
            <Button size="sm" onClick={handleBatchApprove}>
              <Check className="size-3.5" data-icon="inline-start" />
              Approve All
            </Button>
            <Button size="sm" variant="ghost" onClick={clearSelection}>
              Clear
            </Button>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="all">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <TabsList>
            {STATUS_TABS.map((tab) => {
              const count = filterItems(tab.value).length;
              return (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                  {count > 0 && (
                    <span className="ml-1 text-xs text-muted-foreground">
                      ({count})
                    </span>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {pendingCount > 0 && selectedIds.size === 0 && (
            <Button size="sm" variant="outline" onClick={selectAllPending}>
              Select all pending
            </Button>
          )}
        </div>

        {STATUS_TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {filterItems(tab.value).length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                <div className="rounded-full bg-muted p-4">
                  <FileText className="size-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">
                  No {tab.value === "all" ? "" : tab.label.toLowerCase() + " "}
                  content items.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filterItems(tab.value).map((item) => (
                  <ContentItemCard
                    key={item.id}
                    item={item}
                    isSelected={selectedIds.has(item.id)}
                    onToggleSelect={toggleSelect}
                  />
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
