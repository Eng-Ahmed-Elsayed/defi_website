import puppeteer from 'puppeteer-core';
import fs from 'fs';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

async function findOverflow() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });

  const overflows = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const elements = document.querySelectorAll('*');
    const bad = [];
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 1 || rect.width > docWidth + 1) {
        bad.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          right: rect.right,
          width: rect.width,
          docWidth: docWidth
        });
      }
    });
    return bad.slice(0, 15);
  });

  console.log('Overflowing elements on 390px:', JSON.stringify(overflows, null, 2));
  await browser.close();
}

findOverflow().catch(console.error);
