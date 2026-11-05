"use client"

import * as React from "react"
import { cn } from "cn"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table"
import { Card, CardContent } from "./card"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Column<T> {
  key: string
  header: string
  cell: (row: T) => React.ReactNode
  /** Hide this column on mobile when mobileMode is "column-hide". */
  mobileHidden?: boolean
  /** Lower number = higher priority. Controls display order in card mode. */
  priority?: number
  sortable?: boolean
  className?: string
}

export interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  /** How the table adapts on screens narrower than `mobileBreakpoint`.
   *  - "column-hide" (default): hides columns flagged with `mobileHidden`.
   *  - "card": renders each row as a stacked key-value Card.
   *  - "scroll": preserves all columns with horizontal scroll + shadow hint.
   */
  mobileMode?: "column-hide" | "card" | "scroll"
  /** Pixel width below which mobile layout activates. Default: 768. */
  mobileBreakpoint?: number
  /** Enable column-header sorting across all sortable columns. */
  sortable?: boolean
  /** Shown when `data` is empty. */
  emptyMessage?: string
  /** Stable unique key for each row — used as React key. */
  keyExtractor: (row: T) => string
}

// ---------------------------------------------------------------------------
// useMediaQuery — generalised from the existing useIsMobile hook
// ---------------------------------------------------------------------------

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(false)

  React.useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    mql.addEventListener("change", onChange)
    setMatches(mql.matches)
    return () => mql.removeEventListener("change", onChange)
  }, [query])

  return matches
}

// ---------------------------------------------------------------------------
// Sort helpers
// ---------------------------------------------------------------------------

type SortDirection = "asc" | "desc"

function SortIndicator({ direction }: { direction: SortDirection | null }) {
  if (!direction) {
    return (
      <svg
        aria-hidden
        className="ml-1 inline-block h-4 w-4 shrink-0 opacity-30"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 3l4 5H4zM8 13l-4-5h8z" />
      </svg>
    )
  }
  return (
    <svg
      aria-hidden
      className="ml-1 inline-block h-4 w-4 shrink-0"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      {direction === "asc" ? (
        <path d="M8 3l4 5H4z" />
      ) : (
        <path d="M8 13l-4-5h8z" />
      )}
    </svg>
  )
}

// ---------------------------------------------------------------------------
// DataTable
// ---------------------------------------------------------------------------

export function DataTable<T>({
  columns,
  data,
  mobileMode = "column-hide",
  mobileBreakpoint = 768,
  sortable = false,
  emptyMessage = "No results.",
  keyExtractor,
}: DataTableProps<T>) {
  // ---- media query -------------------------------------------------------
  const isMobile = useMediaQuery(`(max-width: ${mobileBreakpoint - 1}px)`)

  // ---- sort state --------------------------------------------------------
  const [sortKey, setSortKey] = React.useState<string | null>(null)
  const [sortDir, setSortDir] = React.useState<SortDirection>("asc")

  const handleSort = React.useCallback(
    (key: string) => {
      if (sortKey === key) {
        setSortDir((d) => (d === "asc" ? "desc" : "asc"))
      } else {
        setSortKey(key)
        setSortDir("asc")
      }
    },
    [sortKey],
  )

  // ---- sorted data -------------------------------------------------------
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data

    const col = columns.find((c) => c.key === sortKey)
    if (!col) return data

    return [...data].sort((a, b) => {
      const aVal = col.cell(a)
      const bVal = col.cell(b)
      const aStr = typeof aVal === "string" ? aVal : String(aVal ?? "")
      const bStr = typeof bVal === "string" ? bVal : String(bVal ?? "")
      const cmp = aStr.localeCompare(bStr, undefined, { numeric: true })
      return sortDir === "asc" ? cmp : -cmp
    })
  }, [data, sortKey, sortDir, columns])

  // ---- empty state -------------------------------------------------------
  if (data.length === 0) {
    return (
      <div className="flex min-h-[120px] items-center justify-center text-base text-muted-foreground">
        {emptyMessage}
      </div>
    )
  }

  // ---- mobile: card mode -------------------------------------------------
  if (isMobile && mobileMode === "card") {
    const cardColumns = [...columns].sort(
      (a, b) => (a.priority ?? 999) - (b.priority ?? 999),
    )

    return (
      <div className="flex flex-col gap-3" role="list">
        {sortedData.map((row) => (
          <Card key={keyExtractor(row)} role="listitem">
            <CardContent className="space-y-2 py-3">
              {cardColumns.map((col) => (
                <div
                  key={col.key}
                  className="flex items-baseline justify-between gap-2 text-base"
                >
                  <span className="shrink-0 text-muted-foreground">
                    {col.header}
                  </span>
                  <span className="text-right font-medium">
                    {col.cell(row)}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  // ---- mobile: scroll mode -----------------------------------------------
  if (isMobile && mobileMode === "scroll") {
    return (
      <div className="relative">
        {/* Scroll container */}
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <Table className="min-w-max">
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className={cn(
                      "min-w-[120px] text-base",
                      sortable && col.sortable !== false && "cursor-pointer select-none",
                      col.className,
                    )}
                    onClick={
                      sortable && col.sortable !== false
                        ? () => handleSort(col.key)
                        : undefined
                    }
                    aria-sort={
                      sortKey === col.key
                        ? sortDir === "asc"
                          ? "ascending"
                          : "descending"
                        : undefined
                    }
                  >
                    <span className="inline-flex min-h-[44px] items-center">
                      {col.header}
                      {sortable && col.sortable !== false && (
                        <SortIndicator
                          direction={sortKey === col.key ? sortDir : null}
                        />
                      )}
                    </span>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedData.map((row) => (
                <TableRow key={keyExtractor(row)}>
                  {columns.map((col) => (
                    <TableCell
                      key={col.key}
                      className={cn(
                        "min-w-[120px] text-base",
                        col.className,
                      )}
                    >
                      {col.cell(row)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Right-edge scroll shadow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    )
  }

  // ---- desktop / column-hide mode ----------------------------------------
  // In column-hide mode on mobile, columns with mobileHidden are hidden via
  // Tailwind responsive classes so the switch is purely CSS (no layout shift
  // during SSR hydration).

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((col) => {
            const isColumnHide = mobileMode === "column-hide"
            const hidden = isColumnHide && col.mobileHidden
            const isSortable = sortable && col.sortable !== false

            return (
              <TableHead
                key={col.key}
                className={cn(
                  hidden && "hidden md:table-cell",
                  isSortable && "cursor-pointer select-none",
                  col.className,
                )}
                onClick={isSortable ? () => handleSort(col.key) : undefined}
                aria-sort={
                  sortKey === col.key
                    ? sortDir === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                <span className="inline-flex min-h-[44px] items-center">
                  {col.header}
                  {isSortable && (
                    <SortIndicator
                      direction={sortKey === col.key ? sortDir : null}
                    />
                  )}
                </span>
              </TableHead>
            )
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {sortedData.map((row) => (
          <TableRow key={keyExtractor(row)}>
            {columns.map((col) => {
              const isColumnHide = mobileMode === "column-hide"
              const hidden = isColumnHide && col.mobileHidden

              return (
                <TableCell
                  key={col.key}
                  className={cn(
                    hidden && "hidden md:table-cell",
                    col.className,
                  )}
                >
                  {col.cell(row)}
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
