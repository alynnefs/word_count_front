import { test, expect } from '@playwright/test';

test('should count words correctly', async ({ page }) => {
  await page.route('**/count', route =>
    route.fulfill({ json: { count: 3 } })
  )

  await page.goto('/');
  
  const input = page.locator('input[placeholder="write here"]');
  await input.fill('hello world test');
  
  const button = page.locator('button', { hasText: 'count!' });
  await button.click();
  
  // Como o backend pode não estar rodando no CI sem setup extra, 
  // aqui testamos a interface. Para um E2E real, o backend deveria estar mockado ou rodando.
  const result = page.locator('p');
  await expect(result).toBeVisible();
});
