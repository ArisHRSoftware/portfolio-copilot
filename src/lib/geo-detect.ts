import { headers } from "next/headers";

export type { Currency } from "./currency";
export { formatPrice } from "./currency";

export async function detectCurrency(): Promise<import("./currency").Currency> {
  const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country");
  return country === "IN" ? "INR" : "USD";
}
