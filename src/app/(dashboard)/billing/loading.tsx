import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Skeleton className="h-8 w-24" />
        <Skeleton className="mt-1 h-4 w-64" />
      </div>

      {/* Current plan summary */}
      <Card>
        <CardHeader>
          <Skeleton className="h-5 w-28" />
          <Skeleton className="h-4 w-80" />
        </CardHeader>
      </Card>

      {/* Plan cards grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Skeleton className="size-4 rounded" />
                <Skeleton className="h-5 w-20" />
              </div>
              <div className="flex items-baseline gap-1">
                <Skeleton className="h-8 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Array.from({ length: i === 0 ? 2 : i === 1 ? 3 : i === 2 ? 5 : 7 }).map(
                  (_, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <Skeleton className="size-3.5 shrink-0 rounded-full" />
                      <Skeleton className="h-4 w-full" />
                    </div>
                  )
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Skeleton className="h-9 w-full rounded-md" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
