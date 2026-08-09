import { test, expect } from '@playwright/test';

test.describe('US5: Diagnostics showcase', () => {
  test('explains platform-specific verifiability without implying equal capability', async ({
    page
  }) => {
    await page.goto('features/');
    await expect(page.getByText('Unverifiable', { exact: false }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Fragmentation diagnostics' })).toBeVisible();
  });
});
