module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:3000/",
        "http://localhost:3000/pricing",
        "http://localhost:3000/disclaimer",
        "http://localhost:3000/blog",
        "http://localhost:3000/archive",
        "http://localhost:3000/api-docs",
        "http://localhost:3000/insider-buying",
        "http://localhost:3000/insider-selling",
        "http://localhost:3000/earnings-this-week",
        "http://localhost:3000/recent-filings",
        "http://localhost:3000/trending",
      ],
      numberOfRuns: 1,
      startServerCommand: "npm run build && npm run start",
      startServerReadyPattern: "Ready in",
      startServerReadyTimeout: 60000,
      settings: {
        preset: "desktop",
        chromeFlags: "--headless --no-sandbox --disable-gpu",
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["error", { minScore: 0.95 }],
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
