import puppeteer from 'puppeteer-core';
import fs from 'fs';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:4200', { waitUntil: 'networkidle0' });
const btn = await page.$('.lang-switch-btn');
if (btn) {
  await btn.click();
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: 'verification-screenshots/04-desktop-arabic-rtl.png' });
  await page.screenshot({ path: 'C:\\Users\\L\\.gemini\\antigravity-ide\\brain\\99c94123-b843-49c2-b3d2-81463f180380\\04-desktop-arabic-rtl.png' });
  console.log('✓ Arabic RTL screenshot captured successfully');
}
await browser.close();
