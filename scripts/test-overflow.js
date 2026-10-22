import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const DIST_DIR = path.resolve('dist/defi-angular/browser');

function startSpaServer(port = 4289) {
  const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json'
  };

  const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://localhost:${port}`);
    let filePath = path.join(DIST_DIR, parsedUrl.pathname);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      const indexPath = path.join(DIST_DIR, 'index.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(indexPath).pipe(res);
    }
  });

  return new Promise((resolve) => server.listen(port, () => resolve(server)));
}

async function run() {
  const server = await startSpaServer(4289);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:4289', { waitUntil: 'networkidle0' });

  const overflows = await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button, a.btn'));
    return btns.map(b => {
      const r = b.getBoundingClientRect();
      return {
        tag: b.tagName,
        cls: b.className,
        id: b.id,
        text: (b.innerText || b.textContent || '').trim().slice(0, 40),
        html: b.outerHTML.slice(0, 150),
        right: r.right,
        width: r.width,
        left: r.left
      };
    }).filter(b => b.right > 392 || b.left < -2);
  });

  console.log('OVERFLOW DETAILS (390px):', JSON.stringify(overflows, null, 2));

  await browser.close();
  server.close();
}

run();
