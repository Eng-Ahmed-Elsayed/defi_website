import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const DIST_DIR = path.resolve('dist/defi-angular/browser');

const targetLoop = process.argv[2] || 'cycle-1';
let OUT_DIR;
if (targetLoop.startsWith('artifacts/') || targetLoop.startsWith('artifacts\\')) {
  OUT_DIR = path.resolve(targetLoop);
} else if (targetLoop.startsWith('cycle-')) {
  OUT_DIR = path.resolve(`artifacts/homepage-audit/${targetLoop}`);
} else if (targetLoop === 'latest') {
  OUT_DIR = path.resolve('verification-screenshots/latest');
} else {
  OUT_DIR = path.resolve(`artifacts/homepage-audit/${targetLoop}`);
}

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
} else {
  // Clear previous run files for this cycle to avoid stale screenshots
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith('.png') || f.endsWith('.json')) {
      try { fs.unlinkSync(path.join(OUT_DIR, f)); } catch (e) {}
    }
  }
}

function startSpaServer(port = 4288) {
  const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain'
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

  return new Promise((resolve) => {
    server.listen(port, () => {
      console.log(`✓ SPA server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function capture() {
  console.log(`Starting capture for target: [${targetLoop}]`);
  const PORT = 4288;
  const server = await startSpaServer(PORT);
  const BASE_URL = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Console error:', msg.text());
    }
  });

  const viewports = [
    { name: '01-desktop-1440x900', width: 1440, height: 900, fullPage: true },
    { name: '02-tablet-landscape-1024x768', width: 1024, height: 768, fullPage: true },
    { name: '03-tablet-portrait-768x1024', width: 768, height: 1024, fullPage: true },
    { name: '04-mobile-390x844', width: 390, height: 844, fullPage: true },
    { name: '05-compact-mobile-360x800', width: 360, height: 800, fullPage: true }
  ];

  for (const vp of viewports) {
    console.log(`Capturing viewport: ${vp.name}...`);
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));

    // Viewport above-the-fold screenshot
    await page.screenshot({
      path: path.join(OUT_DIR, `${vp.name}-viewport.png`),
      fullPage: false
    });

    // Full page screenshot
    if (vp.fullPage) {
      await page.screenshot({
        path: path.join(OUT_DIR, `${vp.name}-full.png`),
        fullPage: true
      });
    }
  }

  // Arabic RTL captures across all 5 viewports
  console.log('Capturing Arabic RTL mode across viewports...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
  const langToggle = await page.$('.lang-switch-btn, #lang-toggle-btn');
  if (langToggle) {
    await langToggle.click();
    await new Promise(r => setTimeout(r, 800));
  }

  const arabicViewports = [
    { name: '06-arabic-rtl-desktop-1440x900', width: 1440, height: 900, fullPage: true },
    { name: '07-arabic-rtl-tablet-landscape-1024x768', width: 1024, height: 768, fullPage: true },
    { name: '08-arabic-rtl-tablet-portrait-768x1024', width: 768, height: 1024, fullPage: true },
    { name: '09-arabic-rtl-mobile-390x844', width: 390, height: 844, fullPage: true },
    { name: '10-arabic-rtl-compact-mobile-360x800', width: 360, height: 800, fullPage: true }
  ];

  for (const avp of arabicViewports) {
    console.log(`Capturing Arabic viewport: ${avp.name}...`);
    await page.setViewport({ width: avp.width, height: avp.height });
    await new Promise(r => setTimeout(r, 500));

    await page.screenshot({
      path: path.join(OUT_DIR, `${avp.name}-viewport.png`),
      fullPage: false
    });

    if (avp.fullPage) {
      await page.screenshot({
        path: path.join(OUT_DIR, `${avp.name}-full.png`),
        fullPage: true
      });
    }
  }

  // Switch back to English for section close-ups
  await page.setViewport({ width: 1440, height: 900 });
  const langToggleEn = await page.$('.lang-switch-btn, #lang-toggle-btn');
  if (langToggleEn) {
    await langToggleEn.click();
    await new Promise(r => setTimeout(r, 600));
  }

  console.log('Capturing section closeups...');
  const sections = [
    { id: 'hero', name: 'closeup-01-hero' },
    { id: 'about', name: 'closeup-02-mandate-authority' },
    { id: 'capabilities', name: 'closeup-03-capabilities-matrix' },
    { id: 'journey', name: 'closeup-04-operating-model' },
    { id: 'interop', name: 'closeup-05-interoperability' },
    { id: 'metrics', name: 'closeup-06-scale-metrics' },
    { id: 'national-grid', name: 'closeup-07-national-grid' },
    { id: 'inquiry', name: 'closeup-08-executive-inquiry' }
  ];

  for (const sec of sections) {
    const el = await page.$(`#${sec.id}`);
    if (el) {
      await page.evaluate(sId => {
        const target = document.getElementById(sId);
        if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' });
      }, sec.id);
      await new Promise(r => setTimeout(r, 400));
      await el.screenshot({
        path: path.join(OUT_DIR, `${sec.name}.png`)
      });
    }
  }

  console.log(`✓ All screenshots saved to: ${OUT_DIR}`);
  await browser.close();
  server.close();
  process.exit(0);
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
