import { Noto_Sans_Devanagari } from "next/font/google";
import { SiteHeaderHi } from "@/components/site-header-hi";

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  display: "swap",
});

export default function HindiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      lang="hi"
      dir="ltr"
      className={`${notoDevanagari.variable} font-[family-name:var(--font-noto-devanagari),var(--font-geist-sans)] leading-[1.625]`}
    >
      <SiteHeaderHi />
      {children}
    </div>
  );
}
