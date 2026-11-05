import { Metadata } from "next";
import { LoginForm } from "./login-form";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your Portfolio Copilot account",
};

export default function LoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-16">
      <LoginForm />
    </main>
  );
}
