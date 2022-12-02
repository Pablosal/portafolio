import { test, expect, chromium, firefox, webkit } from '@playwright/test';

test('Go to main page ', async ({ context }) => {
  const browser = await chromium.launch(); // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/');
});
