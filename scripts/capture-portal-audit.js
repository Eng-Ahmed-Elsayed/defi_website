import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-core';

const CHROME_PATH = fs.existsSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe')
  ? 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  : 'C:\\Users\\L\\AppData\\Local\\ms-playwright\\chromium-1243\\chrome-win\\chrome.exe';

const DIST_DIR = path.resolve('dist/defi-angular/browser');
const OUT_DIR = path.resolve('artifacts/portal-audit');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
} else {
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.endsWith('.png') || f.endsWith('.json')) {
      try { fs.unlinkSync(path.join(OUT_DIR, f)); } catch (e) {}
    }
  }
}

function startSpaServer(port = 4289) {
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
      console.log(`✓ Audit SPA server running on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function runPortalAudit() {
  console.log('=================================================================');
  console.log('DEFI FULL-PORTAL AUTOMATED UI/UX & ADVERSARIAL AUDIT');
  console.log('=================================================================');

  const PORT = 4289;
  const server = await startSpaServer(PORT);
  const BASE_URL = `http://localhost:${PORT}`;

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.error('Browser Console Error:', msg.text());
    }
  });

  const routes = [
    { id: '01-home', path: '/', name: 'Homepage' },
    { id: '02-about', path: '/about', name: 'About & Governance' },
    { id: '03-capabilities', path: '/capabilities', name: 'Institutional Capabilities' },
    { id: '04-sectors', path: '/sectors', name: 'Sovereign Sectors' },
    { id: '05-impact', path: '/impact', name: 'Verified National Impact' },
    { id: '06-news', path: '/news', name: 'News & Institutional Briefings' },
    { id: '07-careers', path: '/careers', name: 'Executive Careers' },
    { id: '08-contact', path: '/contact', name: 'Institutional Contact' },
    { id: '09-404', path: '/not-found-test-page', name: 'Not Found (404)' }
  ];

  const languages = ['en', 'ar'];
  let totalIssues = 0;
  const auditReport = [];

  for (const lang of languages) {
    console.log(`\n-------------------------------------------------------------`);
    console.log(`Auditing Language Mode: [${lang.toUpperCase()}] (${lang === 'ar' ? 'RTL' : 'LTR'})`);
    console.log(`-------------------------------------------------------------`);

    for (const route of routes) {
      const targetUrl = `${BASE_URL}${route.path}`;
      process.stdout.write(`Testing [${route.name}] (${lang.toUpperCase()}) -> ${route.path} ... `);

      await page.goto(targetUrl, { waitUntil: 'networkidle0' });
      await new Promise(r => setTimeout(r, 400));

      // Ensure proper language state
      await page.evaluate((desiredLang) => {
        const docDir = document.documentElement.getAttribute('dir');
        const isCurrentlyAr = docDir === 'rtl';
        const wantAr = desiredLang === 'ar';
        if (isCurrentlyAr !== wantAr) {
          const btn = document.querySelector('.lang-switch-btn');
          if (btn) btn.click();
        }
      }, lang);
      await new Promise(r => setTimeout(r, 400));

      // Comprehensive in-page adversarial assertions
      const assertions = await page.evaluate((currentLang, routePath) => {
        const issues = [];
        const doc = document.documentElement;

        // 1. Horizontal overflow check
        if (doc.scrollWidth > doc.clientWidth + 1) {
          issues.push(`Horizontal overflow: scrollWidth (${doc.scrollWidth}px) > clientWidth (${doc.clientWidth}px)`);
        }

        // 2. Raw Unicode emoji check (body text)
        const forbiddenEmojis = ['🏛️', '📡', '🏢', '⚡', '💡', '⭐', '🤝', '🛡️', '📦', '🎓', '📊', '🗄️', '📍', '✉️', 'ℹ️'];
        const bodyText = document.body.innerText;
        for (const emoji of forbiddenEmojis) {
          if (bodyText.includes(emoji)) {
            issues.push(`Raw emoji found in page text: "${emoji}"`);
          }
        }

        // 3. Language parity & untranslated placeholder checks
        if (currentLang === 'ar') {
          const inputs = Array.from(document.querySelectorAll('input, textarea'));
          for (const input of inputs) {
            const ph = input.getAttribute('placeholder') || '';
            if (ph.toLowerCase().includes('e.g.') || ph.includes('Dr.') || ph.includes('Ministry / Public Authority') || ph.includes('name@entity.gov.eg')) {
              issues.push(`Untranslated Latin placeholder found in Arabic mode: "${ph}"`);
            }
          }
        }

        // 4. Directional Arrow Mirroring check in RTL
        if (currentLang === 'ar') {
          const arrows = Array.from(document.querySelectorAll('.btn-arrow'));
          for (const arrow of arrows) {
            const style = window.getComputedStyle(arrow);
            if (!style.transform || style.transform === 'none') {
              issues.push(`RTL arrow missing scaleX(-1) mirroring: tag=${arrow.tagName}, class=${arrow.className}`);
            }
          }
        }

        // 5. Button & CTA off-screen clipping check
        const buttons = Array.from(document.querySelectorAll('button, a.btn'));
        for (const btn of buttons) {
          const rect = btn.getBoundingClientRect();
          const style = window.getComputedStyle(btn);
          if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden' || btn.closest('.mobile-nav-drawer:not(.open)')) continue;
          if (rect.right > window.innerWidth + 2) {
            issues.push(`Button clipped right: "${btn.innerText.slice(0, 25)}" (${rect.right}px > ${window.innerWidth}px)`);
          }
          if (rect.left < -2) {
            issues.push(`Button clipped left: "${btn.innerText.slice(0, 25)}" (${rect.left}px < 0)`);
          }
        }

        // 6. WCAG AA Contrast check for key typography
        function parseRgb(colorStr) {
          if (!colorStr) return [0, 0, 0, 0];
          const match = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
          if (!match) return [0, 0, 0, 0];
          return [
            parseInt(match[1], 10),
            parseInt(match[2], 10),
            parseInt(match[3], 10),
            match[4] !== undefined ? parseFloat(match[4]) : 1
          ];
        }

        function parseGradientStops(bgImageStr) {
          if (!bgImageStr || bgImageStr === 'none') return [];
          const stops = [];
          const rgbRegex = /rgba?\(\d+,\s*\d+,\s*\d+(?:,\s*[\d.]+)?\)/g;
          let m;
          while ((m = rgbRegex.exec(bgImageStr)) !== null) {
            stops.push(parseRgb(m[0]));
          }
          const hexRegex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
          while ((m = hexRegex.exec(bgImageStr)) !== null) {
            let hex = m[1];
            if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
            stops.push([
              parseInt(hex.slice(0, 2), 16),
              parseInt(hex.slice(2, 4), 16),
              parseInt(hex.slice(4, 6), 16),
              1
            ]);
          }
          return stops;
        }

        function blendRgba(fg, bg) {
          const a = fg[3];
          if (a >= 0.999) return [fg[0], fg[1], fg[2], 1];
          if (a <= 0.001) return bg;
          return [
            Math.round(fg[0] * a + bg[0] * (1 - a)),
            Math.round(fg[1] * a + bg[1] * (1 - a)),
            Math.round(fg[2] * a + bg[2] * (1 - a)),
            1
          ];
        }

        function getEffectiveBg(el) {
          const layers = [];
          let curr = el;
          while (curr && curr !== document.documentElement) {
            const style = window.getComputedStyle(curr);
            const rgba = parseRgb(style.backgroundColor);
            if (rgba[3] > 0) {
              layers.push(rgba);
              if (rgba[3] >= 0.999) break;
            } else if (style.backgroundImage && style.backgroundImage !== 'none' && style.webkitBackgroundClip !== 'text' && style.backgroundClip !== 'text') {
              const stops = parseGradientStops(style.backgroundImage);
              if (stops.length > 0 && stops[0][3] > 0.5) {
                layers.push(stops[0]);
                if (stops[0][3] >= 0.999) break;
              }
            }
            curr = curr.parentElement;
          }
          let base = [238, 242, 246, 1]; // Root fallback #EEF2F6
          for (let i = layers.length - 1; i >= 0; i--) {
            base = blendRgba(layers[i], base);
          }
          return base;
        }

        function getLuminance(r, g, b) {
          const [rs, gs, bs] = [r, g, b].map(c => {
            c = c / 255;
            return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
          });
          return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
        }

        function getContrastRatio(rgb1, rgb2) {
          const l1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
          const l2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
          const lighter = Math.max(l1, l2);
          const darker = Math.min(l1, l2);
          return (lighter + 0.05) / (darker + 0.05);
        }

        const headings = Array.from(document.querySelectorAll('.section-title, .page-title, h1, h2, .section-tag'));
        for (const el of headings) {
          const style = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden') continue;
          
          if (style.webkitBackgroundClip !== 'text' && style.backgroundClip !== 'text') {
            const fg = parseRgb(style.color);
            const bg = getEffectiveBg(el);
            const ratio = getContrastRatio(fg, bg);
            if (ratio < 3.0) {
              issues.push(`Low contrast (${ratio.toFixed(2)}:1 < 3.0:1) on "${el.innerText.slice(0, 30)}"`);
            }
          }
        }

        // 7. Route-specific architectural assertions
        if (routePath === '/news') {
          const cards = document.querySelectorAll('.news-card');
          if (cards.length === 0) issues.push('No news cards rendered on /news');
          const filterTabs = document.querySelectorAll('.filter-pill');
          if (filterTabs.length < 4) issues.push(`Expected 4 news filter tabs, found ${filterTabs.length}`);
        }

        if (routePath === '/capabilities') {
          const lifecycleCards = document.querySelectorAll('.lifecycle-card');
          if (lifecycleCards.length !== 6) issues.push(`Expected 6 lifecycle cards, found ${lifecycleCards.length}`);
          const interop = document.querySelector('app-diagram-interop');
          if (!interop) issues.push('Missing app-diagram-interop on /capabilities');
        }

        if (routePath === '/sectors') {
          const sectorCards = document.querySelectorAll('.sector-card');
          if (sectorCards.length !== 5) issues.push(`Expected 5 sector cards, found ${sectorCards.length}`);
          const grid = document.querySelector('app-national-grid');
          if (!grid) issues.push('Missing app-national-grid on /sectors');
        }

        if (routePath === '/impact') {
          const partnerCards = document.querySelectorAll('.partner-detailed-card');
          if (partnerCards.length === 0) issues.push('No partner transformation cards rendered on /impact');
        }

        if (routePath === '/about') {
          const mandateCards = document.querySelectorAll('.investment-card');
          if (mandateCards.length !== 3) issues.push(`Expected 3 investment mandate cards, found ${mandateCards.length}`);
          const eco = document.querySelector('app-diagram-ecosystem');
          if (!eco) issues.push('Missing app-diagram-ecosystem on /about');
        }

        if (routePath === '/contact') {
          const form = document.querySelector('app-institutional-inquiry-form');
          if (!form) issues.push('Missing app-institutional-inquiry-form on /contact');
        }

        if (routePath === '/careers') {
          if (bodyText.includes('info@defi.com.eg') && bodyText.includes('Send your CV / Portfolio directly')) {
            issues.push('Careers page still uses info@defi.com.eg for resume submission instead of careers@defi.com.eg');
          }
        }

        return issues;
      }, lang, route.path);

      // Route-specific functional interaction tests
      if (route.path === '/news') {
        // Test clicking each category tab to ensure Arabic filtering works 100%
        const tabFilters = ['institutional', 'partnership', 'transformation'];
        for (const cat of tabFilters) {
          const count = await page.evaluate((targetCat) => {
            const tabs = Array.from(document.querySelectorAll('.filter-pill'));
            const tab = tabs.find(t => t.getAttribute('data-cat') === targetCat || t.innerText.toLowerCase().includes(targetCat) || t.getAttribute('id')?.includes(targetCat));
            if (tab) tab.click();
            return document.querySelectorAll('.news-card').length;
          }, cat);
          if (count === 0) {
            assertions.push(`Category filter '${cat}' returned 0 news cards in ${lang.toUpperCase()}`);
          }
        }
      }

      if (route.path === '/capabilities') {
        // Test queryParam deep linking
        await page.goto(`${BASE_URL}/capabilities?pillar=05`, { waitUntil: 'networkidle0' });
        await new Promise(r => setTimeout(r, 400));
        const activePillar = await page.evaluate(() => {
          const activeBtn = document.querySelector('.cap-tab-btn.active');
          return activeBtn ? activeBtn.id : null;
        });
        if (!activePillar || !activePillar.includes('project-management')) {
          assertions.push(`Query param ?pillar=05 failed to activate project-management pillar, got "${activePillar}"`);
        }
      }

      // Save screenshot artifact
      const screenshotFilename = `${route.id}-${lang}.png`;
      await page.screenshot({
        path: path.join(OUT_DIR, screenshotFilename),
        fullPage: true
      });

      if (assertions.length === 0) {
        console.log(`✓ PASS (Saved ${screenshotFilename})`);
      } else {
        console.log(`✗ FAIL (${assertions.length} issues)`);
        for (const issue of assertions) {
          console.log(`    ! ${issue}`);
        }
        totalIssues += assertions.length;
      }

      auditReport.push({
        route: route.name,
        path: route.path,
        lang,
        screenshot: screenshotFilename,
        issues: assertions,
        pass: assertions.length === 0
      });
    }
  }

  await browser.close();
  server.close();

  // Save JSON summary
  fs.writeFileSync(
    path.join(OUT_DIR, 'portal-audit-report.json'),
    JSON.stringify({ timestamp: new Date().toISOString(), totalIssues, auditReport }, null, 2),
    'utf8'
  );

  console.log('\n=================================================================');
  console.log(`AUDIT SUMMARY: ${totalIssues === 0 ? 'ALL 18 VIEWPORT RUNS PASSED 100%' : `${totalIssues} ISSUES FOUND`}`);
  console.log(`Screenshots saved to: ${OUT_DIR}`);
  console.log('=================================================================\n');

  if (totalIssues > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runPortalAudit().catch(err => {
  console.error('Fatal Audit Error:', err);
  process.exit(1);
});
