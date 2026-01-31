const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Convert a Brand name sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Instagram la message anuppinen');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('Instagram message');

  expect(value).toContain('இன்ஸ்டாகிராம் ');
  expect(value).toContain('மெசேஜ் '); 
  
});

test('Neg_Fun_0002 - Currency format altered', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('ticket price Rs.800');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();
  
  expect(value).not.toContain('Rs.800');
  expect(value).toContain('௮௦௦');


});

test('Neg_Fun_0003 - Volume unit formatting issue', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Paal 250ml vaanganum');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('250ml');


  expect(value).toContain('௨௫௦மல் ');

});

test('Neg_Fun_0004 - Converting english abriviation', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Unnoda employee ID enga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('employee ID');


  expect(value).toContain('எம்ப்லாய் ');
  expect(value).toContain('ஈத் ');

});

test('Neg_Fun_0005 - Number-only input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('784206820');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('784206820');


  expect(value).toContain('௭௮௪௨௦௬௮௨௦ ');

});

test('Neg_Fun_0006 - convert date', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naan pirantha thihathi 2003/09/26');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('2003/09/26');


  expect(value).not.toContain('2003/09/26');
  expect(value).toContain('௨௦௦௩/௦௯/');


});

test('Neg_Fun_0007 - Converting measurements', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('Enaku 5kg arisi thaanga');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('5kg');


  expect(value).toContain('௫க்க்');

});

test('Neg_Fun_0008 - Converting english adjectives', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('intha mobile romba slow aa iruku');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('mobile');
  expect(value).not.toContain('slow');
  expect(value).toContain('மொபைல்');
  expect(value).toContain('ஸ்லொவ்');

});

test('Neg_Fun_0009 - Compound sentence with multiple english words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('naan project submit pannala athanala tension aa iruku');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).toContain('ப்ராஜெக்ட்');
  expect(value).toContain('சப்மிட்');
  expect(value).toContain('tension');

  
  expect(value).not.toContain('ப்ராஜெக்ட்');
  expect(value).not.toContain('சப்மிட்');
  expect(value).not.toContain('டென்ஷன்');
});

test('Neg_Fun_0010 - Convert a sentence with place name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const inputBox = page.locator('textarea').first();
  
  await inputBox.type('avan chennai to colombo flight book panninaan');
  await page.keyboard.press('Space');
  await page.waitForTimeout(1000);

  const value = await inputBox.inputValue();

  
  expect(value).not.toContain('chennai colombo flight book');


  expect(value).toContain('சென்னை');
  expect(value).toContain('கொலோம்போ');
  expect(value).toContain('பிளிக்ட்');
  expect(value).toContain('புக்');

});