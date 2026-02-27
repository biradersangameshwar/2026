const { test, expect } = require('@playwright/test');

test('Login to Shopify demo account', async ({ page }) => {
  // Go to the login page
  await page.goto('https://sauce-demo.myshopify.com/account/login');

  // Fill in email
  await page.fill('input[name="customer[email]"], input[placeholder="Email Address"]', 'sangam@0423gmail.com');

  // Fill in password
  await page.fill('input[name="customer[password]"], input[placeholder="Password"]', 'sangam@124');

  // Click on sign in
  await page.click('text=Sign In');

  // Optionally, you can add an assertion to check for successful login
  // For example, check if the account page or an error message appears
  // await expect(page).toHaveURL(/account/);
});
