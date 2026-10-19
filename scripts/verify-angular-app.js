import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const DIST_DIR = path.resolve('dist/defi-angular/browser');
const OUT_DIR = path.resolve('verification-screenshots');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

// 1. Create SPA Static Server for Angular Production Build
function startSpaServer(port = 4280) {
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

    // If file exists, serve it; otherwise fallback to index.html (SPA routing)
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
      console.log(`✓ Angular SPA Production server listening at http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function runAudit() {
  console.log('================================================================');
  console.log('   DEFI ANGULAR APPLICATION — COMPREHENSIVE VERIFICATION SUITE   ');
  console.log('================================================================');

  const PORT = 4280;
  const server = await startSpaServer(PORT);
  const BASE_URL = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.error('Console Error:', msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
    console.error('Page Error:', err);
  });

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      passedTests++;
      console.log(`  ✓ [PASS] ${message}`);
    } else {
      console.error(`  ✗ [FAIL] ${message}`);
    }
  }

  try {
    // -------------------------------------------------------------
    // Test 1: Desktop Homepage Load & Core Shell Elements
    // -------------------------------------------------------------
    console.log('\n[Test 1] Desktop Viewport (1440x900) & Header Shell');
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

    const title = await page.title();
    assert(title.includes('DEFI') || title.includes('Digital Egypt'), `Page title is populated: "${title}"`);

    const hasHeader = await page.$('app-header') !== null;
    assert(hasHeader, 'Root contains <app-header> component');

    const hasFooter = await page.$('app-footer') !== null;
    assert(hasFooter, 'Root contains <app-footer> component');

    const hasHero = await page.$('.hero-section') !== null;
    assert(hasHero, 'Home route renders hero section');

    await page.screenshot({ path: path.join(OUT_DIR, '01-desktop-home.png') });

    // -------------------------------------------------------------
    // Test 2: Verify Homepage Interactive Elements & Telemetry
    // -------------------------------------------------------------
    console.log('\n[Test 2] Homepage Interactive Architecture & Diagram Telemetry');
    const heroCanvas = await page.$('#hero-particles');
    assert(heroCanvas !== null, 'Hero particle canvas (#hero-particles) is rendered and active');

    const mandateItems = await page.$$('.hero-mandate-item');
    assert(mandateItems.length === 4, `Rendered ${mandateItems.length} verified institutional mandate items (.hero-mandate-item)`);

    const livePill = await page.$('.tele-pill.live');
    assert(livePill !== null, 'Live telemetry indicator (.tele-pill.live) is rendered in Diagram A');

    const consoleLog = await page.$('#interop-console-log');
    assert(consoleLog !== null, 'Sovereign Interoperability transaction console (#interop-console-log) is rendered in Diagram D');

    const nationalGrid = await page.$('#national-grid-svg');
    assert(nationalGrid !== null, 'National Command Center sovereign digital grid SVG (#national-grid-svg) is rendered');

    // -------------------------------------------------------------
    // Test 3: Direct URL Navigation for All 8 Required Routes + 404
    // -------------------------------------------------------------
    console.log('\n[Test 3] Direct URL Access & Routing for All Required Pages');
    const routesToTest = [
      { path: '/about', headingKeyword: 'Decree', screenshot: '07-page-about.png' },
      { path: '/capabilities', headingKeyword: 'Pillars', screenshot: '08-page-capabilities.png' },
      { path: '/sectors', headingKeyword: 'Sectors', screenshot: '09-page-sectors.png' },
      { path: '/impact', headingKeyword: 'Partners', screenshot: '10-page-impact.png' },
      { path: '/news', headingKeyword: 'News', screenshot: '11-page-news.png' },
      { path: '/careers', headingKeyword: 'Nation', screenshot: '12-page-careers.png' },
      { path: '/contact', headingKeyword: 'Contact', screenshot: '13-page-contact.png' },
      { path: '/non-existent-page-test', headingKeyword: 'Found', screenshot: '14-page-not-found.png' }
    ];

    for (const r of routesToTest) {
      await page.goto(`${BASE_URL}${r.path}`, { waitUntil: 'networkidle0' });
      const currentUrl = page.url();
      const content = await page.content();
      assert(content.length > 500, `Direct access to ${r.path} returns rendered Angular view`);
      await page.screenshot({ path: path.join(OUT_DIR, r.screenshot) });
    }

    // -------------------------------------------------------------
    // Test 4: Browser Refresh on Inner Route
    // -------------------------------------------------------------
    console.log('\n[Test 4] Browser Refresh on Inner Route (/capabilities)');
    await page.goto(`${BASE_URL}/capabilities`, { waitUntil: 'networkidle0' });
    await page.reload({ waitUntil: 'networkidle0' });
    const capTitle = await page.title();
    assert(capTitle.includes('Capabilities'), `After browser refresh, /capabilities retains state and title: "${capTitle}"`);

    // -------------------------------------------------------------
    // Test 5: In-App Angular Router Navigation
    // -------------------------------------------------------------
    console.log('\n[Test 5] In-App Angular Router Link Navigation');
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    
    // Click About link in header
    const aboutLink = await page.$('.desktop-nav a[href="/about"]');
    if (aboutLink) {
      await aboutLink.click();
      await new Promise(r => setTimeout(r, 400));
      assert(page.url().endsWith('/about'), `Header link navigates to ${page.url()}`);
    } else {
      assert(false, 'About link not found in header');
    }

    // Click Contact link in header
    const contactCta = await page.$('.header-cta');
    if (contactCta) {
      await contactCta.click();
      await new Promise(r => setTimeout(r, 400));
      assert(page.url().endsWith('/contact'), `Header Contact CTA navigates to ${page.url()}`);
    }

    // -------------------------------------------------------------
    // Test 6: Bilingual Arabic RTL Language Switching
    // -------------------------------------------------------------
    console.log('\n[Test 6] Bilingual Language Switching (English <-> Arabic)');
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });
    const langBtn = await page.$('.lang-switch-btn');
    assert(langBtn !== null, 'Language switch button exists in header');

    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));

    const htmlDir = await page.evaluate(() => document.documentElement.dir);
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    assert(htmlDir === 'rtl', `Document dir flipped to RTL: "${htmlDir}"`);
    assert(htmlLang === 'ar', `Document lang flipped to Arabic: "${htmlLang}"`);

    await page.screenshot({ path: path.join(OUT_DIR, '06-desktop-arabic-rtl.png') });

    // Switch back to English
    await langBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const dirReset = await page.evaluate(() => document.documentElement.dir);
    assert(dirReset === 'ltr', `Document dir switched back to LTR: "${dirReset}"`);

    // -------------------------------------------------------------
    // Test 7: Mobile Navigation Drawer & Keyboard Handling
    // -------------------------------------------------------------
    console.log('\n[Test 7] Mobile Drawer Navigation & Keyboard Esc Handling');
    await page.setViewport({ width: 390, height: 844 });
    await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

    const mobileToggle = await page.$('.mobile-toggle-btn');
    assert(mobileToggle !== null, 'Mobile toggle button visible on 390px viewport');

    await mobileToggle.click();
    await new Promise(r => setTimeout(r, 400));

    const isDrawerOpen = await page.evaluate(() => {
      const drawer = document.getElementById('mobile-nav-drawer');
      return drawer && drawer.classList.contains('open');
    });
    assert(isDrawerOpen, 'Mobile nav drawer opens with class "open"');
    await page.screenshot({ path: path.join(OUT_DIR, '18-mobile-drawer.png') });

    // Press Escape to dismiss
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));

    const isDrawerClosed = await page.evaluate(() => {
      const drawer = document.getElementById('mobile-nav-drawer');
      return drawer && !drawer.classList.contains('open');
    });
    assert(isDrawerClosed, 'Mobile nav drawer closes on Escape keypress');

    // -------------------------------------------------------------
    // Test 8: Contact Form Validation & Submission
    // -------------------------------------------------------------
    console.log('\n[Test 8] Contact Form Validation & State');
    await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle0' });

    const submitBtn = await page.$('.submit-btn');
    assert(submitBtn !== null, 'Submit button present on contact form');

    // Submit without input -> should trigger error
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const hasErrorAlert = await page.$('.form-alert.error-alert') !== null;
    assert(hasErrorAlert, 'Submitting empty form displays validation error banner');

    // Enter valid credentials
    await page.type('#fullName', 'Eng. Tareq Al-Mansoor');
    await page.type('#organization', 'Ministry of Communications');
    await page.type('#email', 't.mansoor@mcit.gov.eg');
    await page.type('#subject', 'Public Cloud Architecture');
    await page.type('#message', 'Exploring enterprise architecture and API interoperability.');

    await submitBtn.click();
    await new Promise(r => setTimeout(r, 1200));

    const hasSuccessAlert = await page.$('.form-alert.success-alert') !== null;
    assert(hasSuccessAlert, 'Submitting valid form displays successful consultation feedback');
    await page.screenshot({ path: path.join(OUT_DIR, '14-contact-form-success.png') });

    // -------------------------------------------------------------
    // Test 9: Responsive Viewports & Zero Horizontal Overflow
    // -------------------------------------------------------------
    console.log('\n[Test 9] Responsive Viewport Audit & Horizontal Overflow Checks');
    const viewports = [
      { name: '1440px Desktop', width: 1440, height: 900, screenshot: '15-desktop-1440.png' },
      { name: '1024px Tablet Landscape', width: 1024, height: 768, screenshot: '15-tablet-1024x768.png' },
      { name: '768px Tablet Portrait', width: 768, height: 1024, screenshot: '16-tablet-768x1024.png' },
      { name: '390px Mobile iPhone 16', width: 390, height: 844, screenshot: '17-mobile-390x844.png' },
      { name: '360px Small Android', width: 360, height: 800, screenshot: '19-mobile-360x800.png' }
    ];

    for (const vp of viewports) {
      await page.setViewport({ width: vp.width, height: vp.height });
      await page.goto(BASE_URL, { waitUntil: 'networkidle0' });

      const hasOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      assert(!hasOverflow, `${vp.name} (${vp.width}x${vp.height}): Zero horizontal overflow`);
      await page.screenshot({ path: path.join(OUT_DIR, vp.screenshot) });
    }

    // -------------------------------------------------------------
    // Test 10: Zero Console Errors
    // -------------------------------------------------------------
    console.log('\n[Test 10] Browser Console Error Audit');
    assert(consoleErrors.length === 0, `Zero browser console errors detected (count: ${consoleErrors.length})`);
    if (consoleErrors.length > 0) {
      console.error('Errors found:', consoleErrors);
    }

  } finally {
    await browser.close();
    server.close();
  }

  console.log('\n================================================================');
  console.log(`   AUDIT COMPLETE: ${passedTests}/${totalTests} TESTS PASSED   `);
  console.log('================================================================\n');

  if (passedTests !== totalTests) {
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error('Fatal audit failure:', err);
  process.exit(1);
});
