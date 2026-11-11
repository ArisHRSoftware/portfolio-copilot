import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  /** Base path like "/recent-filings" */
  basePath: string;
  /** Extra query params to preserve, e.g. { type: "8-K" } */
  params?: Record<string, string>;
}

function buildHref(
  basePath: string,
  page: number,
  params?: Record<string, string>
) {
  const sp = new URLSearchParams();
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      if (v) sp.set(k, v);
    }
  }
  if (page > 1) sp.set("page", String(page));
  const qs = sp.toString();
  return qs ? `${basePath}?${qs}` : basePath;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);
  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  params,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1"
    >
      {currentPage > 1 ? (
        <Button
          variant="outline"
          size="sm"
          render={
            <Link href={buildHref(basePath, currentPage - 1, params)} />
          }
        >
          Previous
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
      )}

      <div className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="px-2 text-sm text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <Button
              key={p}
              variant={p === currentPage ? "default" : "outline"}
              size="icon-sm"
              render={
                p === currentPage ? undefined : (
                  <Link href={buildHref(basePath, p, params)} />
                )
              }
              aria-current={p === currentPage ? "page" : undefined}
            >
              {p}
            </Button>
          )
        )}
      </div>

      {currentPage < totalPages ? (
        <Button
          variant="outline"
          size="sm"
          render={
            <Link href={buildHref(basePath, currentPage + 1, params)} />
          }
        >
          Next
        </Button>
      ) : (
        <Button variant="outline" size="sm" disabled>
          Next
        </Button>
      )}
    </nav>
  );
}
