import { test, expect } from '@playwright/test';

test.describe('US9: Support', () => {
  test('frames funding as optional and non-gating', async ({ page }) => {
    await page.goto('support/');
    await expect(page.getByText(/optional and never required/i)).toBeVisible();
  });
});
