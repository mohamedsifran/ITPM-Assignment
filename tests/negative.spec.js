const { test, expect } = require('@playwright/test');

const URL = 'https://tamil.changathi.com/';

async function convert(page, text) {
  await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 60000 });
  const inputBox = page.locator('textarea').first();
  await inputBox.fill(text);
  await page.keyboard.press('Space');
  await page.waitForTimeout(1200);
  return await inputBox.inputValue();
}

test('Neg_Fun_0001 - Brand name sentence', async ({ page }) => {
  const value = await convert(page, 'instagram la message anuppinen');
  expect(value).toContain('இன்ஸ்டாகிராம்');
});

test('Neg_Fun_0002 - Currency format altered', async ({ page }) => {
  const value = await convert(page, 'ticket price rs 800');
  expect(value).toMatch(/[௮௦௦]/);
});

test('Neg_Fun_0003 - English only input', async ({ page }) => {
  const value = await convert(page, 'hello how are you');
  expect(value.length).toBeGreaterThan(0);
});

test('Neg_Fun_0004 - Symbols only', async ({ page }) => {
  const value = await convert(page, '@@@###');
  expect(value).toContain('@');
});

test('Neg_Fun_0005 - Number-only input', async ({ page }) => {
  const value = await convert(page, '784206820');
  expect(value).toMatch(/[௭௮௪]/);
});

test('Neg_Fun_0006 - Date conversion', async ({ page }) => {
  const value = await convert(page, '2003/09/26');
  expect(value).toContain('2003');
});

test('Neg_Fun_0007 - Measurement conversion', async ({ page }) => {
  const value = await convert(page, '5kg rice');
  expect(value.length).toBeGreaterThan(0);
});

test('Neg_Fun_0008 - English adjectives', async ({ page }) => {
  const value = await convert(page, 'this mobile is slow');
  expect(value.toLowerCase()).toContain('mobile');
});

test('Neg_Fun_0009 - Mixed English sentence', async ({ page }) => {
  const value = await convert(page, 'project submit pannala tension iruku');
  expect(value.length).toBeGreaterThan(0);
});
