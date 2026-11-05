import { Metadata } from "next";
import { SignupForm } from "./signup-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your free Portfolio Copilot account and start tracking SEC filings",
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan } = await searchParams;
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16">
      <SignupForm plan={plan} />
    </main>
  );
}
