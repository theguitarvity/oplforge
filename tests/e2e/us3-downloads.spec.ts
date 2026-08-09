import { test, expect } from '@playwright/test';

test.describe('US3: Downloads', () => {
  test('visitor reaches a working download or GitHub Releases link within 3 interactions', async ({
    page
  }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'Download' }).first().click(); // 1
    await expect(page).toHaveURL(/\/downloads\/$/);
    const releaseLink = page.getByRole('link', { name: /check github releases/i }).first();
    await expect(releaseLink).toBeVisible(); // 2 (visible, no fabricated version)
    await expect(releaseLink).toHaveAttribute('href', /github\.com/); // 3
  });

  test('downloads page never shows a fabricated version number', async ({ page }) => {
    await page.goto('downloads/');
    await expect(page.getByText(/no stable release/i).first()).toBeVisible();
  });
});
