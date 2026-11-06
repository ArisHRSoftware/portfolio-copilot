import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MailX } from "lucide-react";

export const metadata: Metadata = {
  title: "Unsubscribed",
  robots: { index: false },
};

export default function UnsubscribedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <Card className="max-w-md text-center">
        <CardHeader>
          <MailX className="mx-auto h-10 w-10 text-muted-foreground mb-2" />
          <CardTitle>You've been unsubscribed</CardTitle>
          <CardDescription>
            You will no longer receive newsletter emails from Brefyr.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" render={<Link href="/" />}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
