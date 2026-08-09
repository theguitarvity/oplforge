import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321/oplforge/',
    trace: 'on-first-retry'
  },
  webServer: {
    command: 'pnpm build && pnpm preview',
    url: 'http://localhost:4321/oplforge/',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  },
  projects: [
    {
      // Pixel 7 (Chromium) rather than an iPhone/WebKit preset: only the
      // Chromium browser is installed in this environment (WebKit requires
      // system libraries unavailable without root access).
      name: 'mobile',
      use: { ...devices['Pixel 7'] }
    },
    {
      // Galaxy Tab S4 (Chromium) rather than an iPad/WebKit preset, for the
      // same reason as above.
      name: 'tablet',
      use: { ...devices['Galaxy Tab S4'] }
    },
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});
