import { test, expect } from '@playwright/test';

test.describe('US8: Open source', () => {
  test('GitHub link is reachable from navigation, the open-source section, and the footer', async ({
    page
  }) => {
    await page.goto('');
    const navGithub = page.locator('nav a[href*="github.com"]');
    await expect(navGithub.first()).toBeAttached();

    const openSourceSection = page.locator('#open-source');
    await expect(openSourceSection.getByRole('link', { name: /view on github/i })).toBeVisible();

    const footer = page.locator('footer');
    await expect(footer.getByRole('link', { name: 'GitHub', exact: true })).toBeVisible();
  });
});
