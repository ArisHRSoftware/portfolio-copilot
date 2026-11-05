// Lightweight Supabase client mock for Tier 1 unit tests
// Returns chainable query builder that resolves to configured data

type MockResponse = { data: unknown; error: unknown; count?: number };

function createChainableQuery(response: MockResponse) {
  const chain: Record<string, unknown> = {};
  const methods = [
    "select",
    "insert",
    "update",
    "delete",
    "eq",
    "neq",
    "gt",
    "gte",
    "lt",
    "lte",
    "in",
    "is",
    "order",
    "limit",
    "range",
    "single",
    "maybeSingle",
    "filter",
    "match",
    "not",
    "or",
    "contains",
    "overlaps",
    "textSearch",
    "head",
  ];

  for (const method of methods) {
    chain[method] = () => chain;
  }

  // Make it thenable so `await` works
  chain.then = (resolve: (value: MockResponse) => void) =>
    Promise.resolve(response).then(resolve);

  return chain;
}

export function createMockSupabase(tableResponses: Record<string, MockResponse> = {}) {
  return {
    from: (table: string) => {
      const response = tableResponses[table] ?? { data: null, error: null };
      return createChainableQuery(response);
    },
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
    },
  } as unknown;
}
