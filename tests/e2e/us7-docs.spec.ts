import { test, expect } from '@playwright/test';

test.describe('US7: Documentation', () => {
  test('documentation is reachable in one interaction from the homepage', async ({ page }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'Documentation' }).first().click();
    await expect(page).toHaveURL(/\/docs\/$/);
  });

  test('topic URLs remain stable and reachable', async ({ page }) => {
    await page.goto('docs/getting-started/');
    await expect(page.getByRole('heading', { name: 'Getting Started' })).toBeVisible();
  });
});
