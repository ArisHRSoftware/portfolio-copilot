export { cn } from "cn"

/** Escape PostgREST pattern characters to prevent filter injection in ilike queries. */
export function escapeIlike(input: string): string {
  return input.replace(/[%_\\]/g, (ch) => `\\${ch}`);
}
