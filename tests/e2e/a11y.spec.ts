import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

const routes = ['', 'features/', 'downloads/', 'roadmap/', 'docs/', 'docs/getting-started/', 'support/'];

test.describe('Accessibility audit', () => {
  for (const route of routes) {
    test(`${route} has no critical axe violations`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page }).analyze();
      const critical = results.violations.filter(
        (violation) => violation.impact === 'critical' || violation.impact === 'serious'
      );
      expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
    });
  }
});
