const { test, expect } = require('@playwright/test');

test('Login to Shopify Sauce Demo', async ({ page }) => {
  // Go to the login page
  await page.goto('https://sauce-demo.myshopify.com/account/login');

  // Fill in email

  // Fill in email (Shopify uses input[name="customer[email]"])
  await page.fill('input[name="customer[email]"]', 'sangam@0423gmail.com');

  // Fill in password (Shopify uses input[name="customer[password]"])
  await page.fill('input[name="customer[password]"]', 'sangam@124');

  // Click on sign in
  // Click on sign in (button with text 'Sign In')
  await page.click('button:has-text("Sign In")');

  // Optionally, you can add an assertion to check for successful login
  // Example: await expect(page).toHaveURL(/account/);
});
