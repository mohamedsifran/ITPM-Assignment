const { test, expect } = require('@playwright/test');

const URL = 'https://tamil.changathi.com/';

test('Pos_Fun_0001 - Convert a short daily greeting phrase', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('vanakkam');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('vanakkam');
});

test('Pos_Fun_0002 - Convert a short interrogative question', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('eppadi irukkiraai?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('eppadi irukkiraai?');
});

test('Pos_Fun_0003 - Convert a short imperative command', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  expect(value.trim()).toBe('inga vaa');

  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('inga vaa');
});

test('Pos_Fun_0004 - Convert a sentence in present tense', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan sappidukiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan sappidukiren');
});

test('Pos_Fun_0005 - Convert a sentence in past tense', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan netru vanthen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan netru vanthen');
});

test('Pos_Fun_0006 - Convert a sentence in future tense', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan naalaiku varuven');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan naalaiku varuven');
});

test('Pos_Fun_0007 - Convert a sentence in negative form', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('enakku theriyaadhu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('enakku theriyaadhu');
});

test('Pos_Fun_0008 - Convert a compound sentence with conjunction', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan sappitten matrum thoonginen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan sappitten matrum thoonginen');
});

test('Pos_Fun_0009 - Convert a complex sentence with a condition', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('mazhai peydhaal naan vara maatten');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('mazhai peydhaal naan vara maatten');
});

test('Pos_Fun_0010 - Convert input with mixed technical terms', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('zoom link anuppu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('zoom link anuppu');
});

test('Pos_Fun_0011 - Convert input containing proper names', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('ramesh matrum siva');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('ramesh matrum siva');
});

test('Pos_Fun_0012 - Convert input containing place names', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan jaffna pogiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan jaffna pogiren');
});

test('Pos_Fun_0013 - Convert input with currency and numbers', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('idhu 500 roobai');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('idhu 500 roobai');
});

test('Pos_Fun_0014 - Convert input with time formats', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('meeting 10.30 AM');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('meeting 10.30 AM');
});

test('Pos_Fun_0015 - Convert words repeated for emphasis', async ({ page }) => {
  await page.goto(URL, { timeout: 60000, waitUntil: 'domcontentloaded' });
  const inputBox = page.locator('textarea').first();
  expect(value.trim()).toBe('seekiram seekiram vaa');

  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('seekiram seekiram vaa');
});

test('Pos_Fun_0016 - Confirming Response', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('sari, naan seigiren');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('sari, naan seigiren');
});

test('Pos_Fun_0017 - Convert input with pronoun variations', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('avargal padikkiraargal');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('avargal padikkiraargal');
});

test('Pos_Fun_0018 - Convert informal slang phrases', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('enna machan eppadi?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('enna machan eppadi?');
});

test('Pos_Fun_0019 - Convert input with various punctuation', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('enna! (unmaiya?)');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('enna! (unmaiya?)');
});

test('Pos_Fun_0020 - Convert mixed-case abbreviations', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('ennoda NIC card edu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('ennoda NIC card edu');
});

test('Pos_Fun_0021 - Convert a natural conversation phrase', async ({ page }) => {
  await page.goto(URL, { timeout: 60000, waitUntil: 'load' });

  const inputBox = page.locator('textarea').first();
  await inputBox.type('naan ungalai naalai sandhikka mudiyumaa?');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('naan ungalai naalai sandhikka mudiyumaa?');
});

test('Pos_Fun_0022 - Convert mixed business terminology', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('email anuppiya pin call pannu');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('email anuppiya pin call pannu');
});

test('Pos_Fun_0023 - Convert a long input paragraph', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('Netru nadanththa college aandu vizhaavil maanavargal, peraasiriyargal matrum sirappa virundhinargal kalandhu kondu pala kalaachara nigazhchigalai rasiththu, nigazhchiyin sirappai anaivarum paaraattinaargal.');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('Netru nadanththa college aandu vizhaavil maanavargal, peraasiriyargal matrum sirappa virundhinargal kalandhu kondu pala kalaachara nigazhchigalai rasiththu, nigazhchiyin sirappai anaivarum paaraattinaargal.');
});

test('Pos_Fun_0024 - Convert input with line breaks', async ({ page }) => {
  await page.goto(URL);
  const inputBox = page.locator('textarea').first();
  await inputBox.type('vanakkam\n naan ramesh');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);
  const value = await inputBox.inputValue();
  expect(value).not.toContain('vanakkam\n naan ramesh');
});