import { test, expect } from '@playwright/test';

test('Validate checkbox visibility and interaction', async ({ page }) => {

  test.setTimeout(70000);

  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();

  await expect(checkbox).toBeVisible();

  await checkbox.check();

  await expect(checkbox).toBeChecked();

  await page.waitForTimeout(60000); // Wait for 1 minute
  await page.close();
});