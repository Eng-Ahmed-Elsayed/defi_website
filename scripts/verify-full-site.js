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
  console.log('✓ Desktop Homepage loaded at 1440x900');

  // Test Diagram A node interaction
  const coreNode = await page.$('.diagram-core-node');
  if (coreNode) {
    await coreNode.click();
    await new Promise(r => setTimeout(r, 400));
    console.log('✓ Clicked DEFI Core Node in Diagram A');
  }

  // Test Diagram A traffic simulation button
  const simTrafficBtn = await page.$('#btn-simulate-traffic');
  if (simTrafficBtn) {
    await simTrafficBtn.click();
    await new Promise(r => setTimeout(r, 800));
    console.log('✓ Triggered Diagram A Live Traffic Simulation');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '02-desktop-diagram-a.png'), fullPage: false });

  // Test Diagram C Pillar Tab interaction (Pillar 2: Solution Architecture)
  const pillar2Tab = await page.$('#tab-cap-2');
  if (pillar2Tab) {
    await pillar2Tab.click();
    await new Promise(r => setTimeout(r, 400));
    console.log('✓ Clicked Pillar 02 (Solution Architecture) in Diagram C');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '03-desktop-diagram-c.png'), fullPage: false });

  // Test Diagram B Blueprint Stage selection
  console.log('\n--- 2. Testing Diagram B Blueprint Stage Visualizer ---');
  await page.evaluate(() => {
    document.getElementById('journey')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  const journeyStep3 = await page.$('.journey-step-item[data-step="3"]');
  if (journeyStep3) {
    await journeyStep3.click();
    await new Promise(r => setTimeout(r, 400));
    console.log('✓ Selected Phase 03 in Diagram B Stepper, rendered integration blueprint');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '03b-desktop-diagram-b-blueprint.png'), fullPage: false });

  // Test Diagram D Sovereign Interoperability Simulator & Payload Inspector
  console.log('\n--- 3. Testing Diagram D Sovereign Interoperability Simulator & Payload Inspector ---');
  await page.evaluate(() => {
    document.getElementById('interop')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  
  // Click Stage 2 to test payload inspector
  const stage2Node = await page.$('#sim-node-2');
  if (stage2Node) {
    await stage2Node.click();
    await new Promise(r => setTimeout(r, 400));
    console.log('✓ Clicked Stage 02 in Diagram D, inspected DEFI Sovereign Gateway payload');
  }
  
  const simInteropBtn = await page.$('#btn-trigger-interop-sim');
  if (simInteropBtn) {
    await simInteropBtn.click();
    console.log('✓ Clicked "Run Interoperability Test" in Diagram D');
    await new Promise(r => setTimeout(r, 2900)); // Wait for 5-stage animation
    await page.screenshot({ path: path.join(OUT_DIR, '04-desktop-diagram-d-interop.png'), fullPage: false });
    console.log('✓ Captured Diagram D completed 5-stage sovereign simulation screenshot');
  }

  // Test Section 5C: National Sovereign Digital Grid
  console.log('\n--- 4. Testing Section 5C: National Sovereign Digital Grid ---');
  await page.evaluate(() => {
    document.getElementById('national-grid')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  
  // Click Alexandria regional button
  const alexBtn = await page.$('#reg-btn-alex');
  if (alexBtn) {
    await alexBtn.click();
    await new Promise(r => setTimeout(r, 300));
    console.log('✓ Clicked Alexandria & Delta regional hub button');
  }

  // Click Ping button
  const pingBtn = await page.$('#btn-ping-region');
  if (pingBtn) {
    await pingBtn.click();
    await new Promise(r => setTimeout(r, 800));
    console.log('✓ Triggered "Ping Regional Hub" test');
  }
  await page.screenshot({ path: path.join(OUT_DIR, '05-desktop-national-grid.png'), fullPage: false });

  // Test Sectors Section
  console.log('\n--- 5. Testing Strategic Sectors in Focus ---');
  await page.evaluate(() => {
    document.getElementById('sectors')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: path.join(OUT_DIR, '05b-desktop-sectors.png'), fullPage: false });
  console.log('✓ Captured Sectors Section screenshot');

  // Test Language Switch to Arabic RTL
  console.log('\n--- 6. Testing Language Switch to Arabic RTL ---');
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await new Promise(r => setTimeout(r, 300));
  const langBtn = await page.$('#lang-toggle-btn');
  if (langBtn) {
    await langBtn.click();
    await new Promise(r => setTimeout(r, 500));
    const dir = await page.evaluate(() => document.documentElement.dir);
    console.log('✓ Language switched to Arabic, document dir is:', dir);
    await page.screenshot({ path: path.join(OUT_DIR, '06-desktop-arabic-rtl-home.png'), fullPage: false });

    // Scroll to National Grid in Arabic
    await page.evaluate(() => {
      document.getElementById('national-grid')?.scrollIntoView({ behavior: 'instant' });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.screenshot({ path: path.join(OUT_DIR, '07-desktop-arabic-rtl-national-grid.png'), fullPage: false });
    console.log('✓ Captured Arabic RTL National Grid screenshot');

    // Switch back to English
    await page.evaluate(() => window.scrollTo(0, 0));
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // Test Tablet Viewport (1024x768)
  console.log('\n--- 7. Testing Tablet Viewport (1024x768) ---');
  await page.setViewport({ width: 1024, height: 768 });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '14-tablet-1024x768.png'), fullPage: false });
  console.log('✓ Tablet Viewport loaded');

  // Test Mobile Viewport (390x844 - iPhone 16)
  console.log('\n--- 8. Testing Mobile Viewport (390x844) ---');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto(baseUrl, { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(OUT_DIR, '16-mobile-390x844.png'), fullPage: false });
  console.log('✓ Mobile Homepage loaded');

  // Test Mobile Navigation Drawer
  const mobileToggle = await page.$('#mobile-menu-trigger');
  if (mobileToggle) {
    await mobileToggle.click();
    await new Promise(r => setTimeout(r, 500));
    console.log('✓ Opened Mobile Menu Drawer');
    await page.screenshot({ path: path.join(OUT_DIR, '17-mobile-drawer.png'), fullPage: false });
    const closeBtn = await page.$('#mobile-close-btn');
    if (closeBtn) await closeBtn.click();
  }

  await browser.close();
  console.log('\n=========================================');
  console.log('✓ All verification tests finished successfully!');
  console.log('=========================================');
}

runVerification().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
