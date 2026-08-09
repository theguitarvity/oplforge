import { test, expect } from '@playwright/test';

test.describe('US2: Product tour', () => {
  test('homepage shows a condensed tour with a link to the full tour', async ({ page }) => {
    await page.goto('');
    await expect(page.getByRole('link', { name: /see full tour/i })).toBeVisible();
  });

  test('features page shows real screenshots with captions and status labels', async ({ page }) => {
    await page.goto('features/');
    await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
    await expect(page.getByText('Available', { exact: false }).first()).toBeVisible();
    const images = page.getByRole('img');
    await expect(images.first()).toBeVisible();
  });
});
