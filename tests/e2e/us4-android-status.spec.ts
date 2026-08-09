import { test, expect } from '@playwright/test';

test.describe('US4: Android status', () => {
  test('Android is clearly labeled Planned without implying current availability', async ({
    page
  }) => {
    await page.goto('features/');
    const androidRow = page.getByText('Android', { exact: true }).first();
    await expect(androidRow).toBeVisible();
    await expect(page.getByText('Planned', { exact: false }).first()).toBeVisible();
  });

  test('Tablet is not presented as a shipped app platform', async ({ page }) => {
    await page.goto('features/');
    await expect(page.getByRole('cell', { name: 'Not a distinct product platform', exact: false })).toBeVisible();
  });
});
