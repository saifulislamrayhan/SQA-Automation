// @ts-check
import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
  await page.locator('a:has-text("Get started")').click();
  await page.screenshot({ path: 'screenshot.png' });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

//Testing Puspose
/*
import {test,expect} from '@playwright/test';
test('hase tilte', async ({page})=>{
await page.goto("https://playwright.dev/");
await expect(page).toHaveTitle(/Playwright/);
test.beforeAll("have beforeall function ", async({page}) => {
test.afterAll()
test.beforeEach()
test.afterEach()

test.describe.only
test.describe.skip
test.describe

  })


});



*/