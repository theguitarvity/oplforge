import { test, expect } from '@playwright/test';

test.describe('US3: Downloads', () => {
  test('visitor reaches a working download or GitHub Releases link within 3 interactions', async ({
    page,
  }) => {
    await page.goto('');
    await page.getByRole('link', { name: 'Download' }).first().click(); // 1
    await expect(page).toHaveURL(/\/downloads\/$/);
    const releaseLink = page.getByRole('link', { name: /^download$/i }).first();
    await expect(releaseLink).toBeVisible(); // 2
    await expect(releaseLink).toHaveAttribute('href', /releases\/download\/continuous/); // 3
  });

  test('downloads page identifies automated builds as continuous and unsigned', async ({
    page,
  }) => {
    await page.goto('downloads/');
    await expect(page.getByText(/continuous installers/i)).toBeVisible();
    await expect(page.getByText(/not code-signed/i)).toBeVisible();
  });
});
