import { test, expect } from '@playwright/test';

test.describe('US1: Homepage hero', () => {
  test('conveys product imagery, platforms, and CTAs on desktop', async ({ page }) => {
    await page.goto('');
    const hero = page.locator('section').first();
    await expect(hero.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(hero.getByRole('img')).toBeVisible();
    await expect(hero.getByText('Windows')).toBeVisible();
    await expect(hero.getByText('macOS')).toBeVisible();
    await expect(hero.getByText('Linux')).toBeVisible();
    await expect(hero.getByRole('link', { name: 'Download' })).toBeVisible();
    await expect(hero.getByRole('link', { name: 'GitHub' })).toBeVisible();
    await expect(hero.getByRole('link', { name: 'Documentation' })).toBeVisible();
  });

  test('hero content fits without horizontal scrolling on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('');
    const hasHorizontalScroll = await page.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth
    );
    expect(hasHorizontalScroll).toBe(false);
  });
});
