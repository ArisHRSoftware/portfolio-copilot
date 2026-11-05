import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 space-y-6 px-4 py-8">
      {/* Header */}
      <div className="space-y-1">
        <Skeleton className="h-8 w-44" />
        <Skeleton className="h-4 w-96" />
      </div>

      {/* Tabs filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="inline-flex h-8 items-center gap-1 rounded-lg bg-muted p-[3px]">
          <Skeleton className="h-7 w-12 rounded-md" />
          <Skeleton className="h-7 w-28 rounded-md" />
          <Skeleton className="h-7 w-20 rounded-md" />
          <Skeleton className="h-7 w-20 rounded-md" />
          <Skeleton className="h-7 w-20 rounded-md" />
        </div>
        <Skeleton className="h-8 w-32 rounded-md" />
      </div>

      {/* Content cards */}
      <div className="grid gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="size-4 rounded" />
                  <Skeleton className="h-5 w-64" />
                </div>
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-24 rounded-full" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <div className="space-y-1.5">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-16 w-full rounded-md" />
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-24 rounded-md" />
                <Skeleton className="h-8 w-20 rounded-md" />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
