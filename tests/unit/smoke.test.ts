import { describe, it, expect } from "vitest";

describe("Test infrastructure smoke test", () => {
  it("vitest runs successfully", () => {
    expect(1 + 1).toBe(2);
  });

  it("path alias resolves", async () => {
    const { TIERS } = await import("@/lib/constants/tiers");
    expect(TIERS.free.stocks).toBe(3);
    expect(TIERS.pro.stocks).toBe(-1);
  });
});
