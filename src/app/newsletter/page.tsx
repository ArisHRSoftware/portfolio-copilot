import { redirect } from "next/navigation";

/**
 * /newsletter redirects to /archive (newsletter archive).
 * This prevents 404s when users navigate to /newsletter.
 */
export default function NewsletterPage() {
  redirect("/archive");
}
