import { test, expect } from '@playwright/test';

const routes = ['', 'features/', 'downloads/', 'roadmap/', 'docs/', 'support/'];

test.describe('Broken internal link check', () => {
  for (const route of routes) {
    test(`all internal links on ${route} resolve`, async ({ page, request, baseURL }) => {
      await page.goto(route);
      const hrefs = await page
        .locator('a[href]')
        .evaluateAll((elements) => elements.map((el) => el.getAttribute('href')));

      const internalHrefs = hrefs.filter(
        (href): href is string => !!href && !href.startsWith('http') && !href.startsWith('mailto:')
      );

      for (const href of internalHrefs) {
        const target = new URL(href, baseURL).toString();
        const response = await request.get(target);
        expect(response.ok(), `${href} should resolve (status ${response.status()})`).toBe(true);
      }
    });
  }
});
