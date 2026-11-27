import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 py-16 min-h-[60vh]">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground text-center max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-3">
          <Button render={<Link href="/" />}>Go Home</Button>
          <Button variant="outline" render={<Link href="/glossary" />}>
            Browse Glossary
          </Button>
        </div>
      </main>
    </>
  );
}
