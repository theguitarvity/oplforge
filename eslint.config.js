// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist/**', '.astro/**', 'node_modules/**', 'playwright-report/**', 'test-results/**']
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      'astro/no-set-html-directive': 'error'
    }
  }
];
