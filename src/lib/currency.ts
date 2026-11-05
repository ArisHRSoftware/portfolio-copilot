export type Currency = "INR" | "USD";

export function formatPrice(amount: number, currency: Currency): string {
  if (currency === "INR") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
  return `$${amount}`;
}
