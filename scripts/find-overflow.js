import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const DIST_DIR = path.resolve('dist/defi-angular/browser');

function startServer(port = 4281) {
  const server = http.createServer((req, res) => {
    let filePath = path.join(DIST_DIR, new URL(req.url, `http://localhost:${port}`).pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      fs.createReadStream(filePath).pipe(res);
    } else {
      fs.createReadStream(path.join(DIST_DIR, 'index.html')).pipe(res);
    }
  });
  return new Promise(r => server.listen(port, () => r(server)));
}

async function debugOverflow() {
  const port = 4281;
  const server = await startServer(port);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0' });

  const badElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const all = document.querySelectorAll('*');
    const res = [];
    all.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 1 || rect.width > docWidth + 1) {
        res.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          docWidth
        });
      }
    });
    return res;
  });

  console.log('Bad elements count:', badElements.length);
  console.log('Top bad elements:', JSON.stringify(badElements.slice(0, 10), null, 2));

  await browser.close();
  server.close();
}

debugOverflow().catch(console.error);
