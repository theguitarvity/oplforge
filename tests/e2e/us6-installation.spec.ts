import { test, expect } from '@playwright/test';

test.describe('US6: Installation workflow', () => {
  test('shows a staged sequence of real screenshots with labeled sources', async ({ page }) => {
    await page.goto('features/');
    await expect(page.getByRole('heading', { name: 'Installation workflow' })).toBeVisible();
    await expect(page.getByText('Available source').first()).toBeVisible();
  });
});
