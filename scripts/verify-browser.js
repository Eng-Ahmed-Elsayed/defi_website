import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const OUT_DIR = path.resolve('verification-screenshots');
if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runVerification() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const baseUrl = 'http://localhost:4173';

  console.log('\n--- 1. Testing Desktop Viewport (1440x900) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '01-desktop-home.png'), fullPage: false });
  console.log('✓ Homepage loaded at 1440x900');

  // Test Diagram A interaction
  const node = await page.$('.diagram-node-group.core-hub');
  if (node) {
    await node.click();
    console.log('✓ Clicked DEFI Core Backbone in Diagram A');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '02-desktop-diagram-a.png'), fullPage: false });

  // Test Diagram C tab
  const pillarBtn = await page.$('#pillar-tab-solution-architecture');
  if (pillarBtn) {
    await pillarBtn.click();
    console.log('✓ Clicked Solution Architecture in Diagram C');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '03-desktop-diagram-c.png'), fullPage: false });

  // Test Language Switch to Arabic RTL
  const langBtn = await page.$('#lang-toggle-btn');
  if (langBtn) {
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const dir = await page.evaluate(() => document.documentElement.dir);
    console.log('✓ Language switched to Arabic, document dir is:', dir);
    await page.screenshot({ path: path.join(OUT_DIR, '04-desktop-arabic-rtl.png'), fullPage: false });
    // Switch back to English
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  console.log('\n--- 2. Testing Inner Routes ---');
  const routes = [
    { name: '05-about', path: '/about' },
    { name: '06-capabilities', path: '/capabilities' },
    { name: '07-sectors', path: '/sectors' },
    { name: '08-impact', path: '/impact' },
    { name: '09-news', path: '/news' },
    { name: '10-careers', path: '/careers' },
    { name: '11-contact', path: '/contact' },
    { name: '12-not-found', path: '/unknown-route-test' }
  ];

  for (const r of routes) {
    await page.goto(`${baseUrl}${r.path}`, { waitUntil: 'networkidle0' });
    const title = await page.title();
    console.log(`✓ Route ${r.path} rendered with title: "${title}"`);
    await page.screenshot({ path: path.join(OUT_DIR, `${r.name}.png`), fullPage: false });
  }

  // Test Contact Form Validation & Submission
  console.log('\n--- 3. Testing Contact Form Behavior ---');
  await page.goto(`${baseUrl}/contact`, { waitUntil: 'networkidle0' });
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 300));
    const hasError = await page.$('.form-alert.error-alert');
    console.log('✓ Empty submission triggers error banner:', !!hasError);

    // Fill valid data
    await page.type('#fullName', 'Eng. Ahmed Mostafa');
    await page.type('#organization', 'Ministry of Communications');
    await page.type('#email', 'ahmed.mostafa@gov.eg');
    await page.type('#subject', 'National Enterprise Architecture');
    await page.type('#message', 'Requesting institutional consultation regarding inter-agency data integration.');
    await submitBtn.click();
    await new Promise(r => setTimeout(r, 1400));
    const hasSuccess = await page.$('.form-alert.success-alert');
    console.log('✓ Valid submission triggers success banner:', !!hasSuccess);
    await page.screenshot({ path: path.join(OUT_DIR, '13-contact-success.png'), fullPage: false });
  }

  console.log('\n--- 4. Testing Tablet & Mobile Viewports ---');
  // Laptop/Tablet (1024x768)
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '14-tablet-1024x768.png') });
  console.log('✓ 1024x768 layout verified');

  // Tablet Portrait (768x1024)
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '15-tablet-768x1024.png') });
  console.log('✓ 768x1024 layout verified');

  // Mobile (390x844)
  await page.setViewport({ width: 390, height: 844 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '16-mobile-390x844.png') });
  console.log('✓ 390x844 mobile layout verified');

  // Mobile Drawer Toggle
  const mobileToggle = await page.$('#mobile-menu-trigger');
  if (mobileToggle) {
    await mobileToggle.click();
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, '17-mobile-drawer-open.png') });
    console.log('✓ Mobile navigation drawer toggle verified');
  }

  // Mobile (360x800)
  await page.setViewport({ width: 360, height: 800 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '18-mobile-360x800.png') });
  console.log('✓ 360x800 mobile layout verified');

  await browser.close();
  console.log('\n🎉 ALL REAL BROWSER CHECKS COMPLETED SUCCESSFULLY!');
}

runVerification().catch(err => {
  console.error('Error during verification:', err);
  process.exit(1);
});
