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

    // Programmatic DOM Assertions
    const domCheck = await page.evaluate(() => {
      const doc = document.documentElement;
      const issues = [];

      // 1. Check document scrollWidth vs clientWidth (no horizontal blowout)
      if (doc.scrollWidth > doc.clientWidth + 1) {
        issues.push(`Horizontal overflow detected: scrollWidth (${doc.scrollWidth}px) > clientWidth (${doc.clientWidth}px)`);
      }

      // 2. Check button boundaries (no button clips outside window)
      const buttons = Array.from(document.querySelectorAll('button, a.btn'));
      for (const btn of buttons) {
        const rect = btn.getBoundingClientRect();
        // Ignore hidden elements and closed off-screen mobile drawer
        const style = window.getComputedStyle(btn);
        if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden' || btn.closest('.mobile-nav-drawer:not(.open)')) continue;
        if (rect.right > window.innerWidth + 2) {
          issues.push(`Button overflows right: "${btn.innerText.slice(0, 30)}" (${rect.right}px > ${window.innerWidth}px)`);
        }
        if (rect.left < -2) {
          issues.push(`Button overflows left: "${btn.innerText.slice(0, 30)}" (${rect.left}px < 0)`);
        }
      }

      // 3. Check for Hero visual vs Mandate cards collision
      const heroVisual = document.querySelector('.hero-visual');
      const mandateCards = document.querySelectorAll('.mandate-item, .hero-stat-card');
      if (heroVisual && mandateCards.length > 0) {
        const vRect = heroVisual.getBoundingClientRect();
        for (const card of mandateCards) {
          const cRect = card.getBoundingClientRect();
          const overlapX = Math.max(0, Math.min(vRect.right, cRect.right) - Math.max(vRect.left, cRect.left));
          const overlapY = Math.max(0, Math.min(vRect.bottom, cRect.bottom) - Math.max(vRect.top, cRect.top));
          if (overlapX > 5 && overlapY > 5) {
            issues.push(`Collision between hero visual and mandate card "${card.innerText.slice(0, 20)}": overlap (${overlapX}x${overlapY}px)`);
          }
        }
      }

      // 4. Hardened Contrast Ratio (Porter-Duff Alpha Compositing + Gradient Stop Parsing, WCAG AA >= 4.5:1)
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

      const headings = Array.from(document.querySelectorAll('.section-title, .section-subtitle, .section-desc, .section-tag, .gradient-text, h2'));
      for (const h of headings) {
        const style = window.getComputedStyle(h);
        const rect = h.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden') continue;

        if (parseFloat(style.opacity) < 0.8) {
          issues.push(`Invisible heading element (opacity: ${style.opacity}): "${h.innerText.slice(0, 30)}"`);
        }

        const isGradient = style.webkitBackgroundClip === 'text' || style.backgroundClip === 'text';
        const secBg = getEffectiveBg(isGradient ? h.parentElement : h);
        if (isGradient) {
          const stops = parseGradientStops(style.backgroundImage);
          for (const stop of stops) {
            const ratio = getContrastRatio(stop, secBg);
            if (ratio < 4.5) {
              issues.push(`Gradient stop contrast failure on "${h.innerText.slice(0, 25)}": ratio ${ratio.toFixed(2)}:1 < 4.5:1 (stop: rgb(${stop.slice(0,3).join(',')}), bg: rgb(${secBg.slice(0,3).join(',')}))`);
            }
          }
        } else {
          const textColor = parseRgb(style.color);
          const ratio = getContrastRatio(textColor, secBg);
          if (ratio < 4.5) {
            issues.push(`Contrast failure on "${h.innerText.slice(0, 25)}": ratio ${ratio.toFixed(2)}:1 < 4.5:1 (color: ${style.color}, bg: rgba(${secBg.join(',')}))`);
          }
        }
      }

      // 5. SVG <text> Bounding-Box Containment Check
      const svgs = Array.from(document.querySelectorAll('svg.cap-schematic-svg, svg.national-grid-svg'));
      for (const svg of svgs) {
        const svgRect = svg.getBoundingClientRect();
        if (svgRect.width === 0 || svgRect.height === 0) continue;
        const texts = Array.from(svg.querySelectorAll('text'));
        for (const t of texts) {
          const tRect = t.getBoundingClientRect();
          if (tRect.width === 0) continue;
          if (tRect.left < svgRect.left - 4 || tRect.right > svgRect.right + 4) {
            issues.push(`SVG text clipped horizontally: "${t.textContent.trim()}" (text [${Math.round(tRect.left)}..${Math.round(tRect.right)}] outside svg [${Math.round(svgRect.left)}..${Math.round(svgRect.right)}])`);
          }
        }
      }

      return issues;
    });

    if (domCheck.length > 0) {
      console.warn(`[DOM Check Warning for ${vp.name}]:`, domCheck);
    } else {
      console.log(`[DOM Check Passed for ${vp.name}] - 0 horizontal overflows, 0 button blowouts, 0 hero collisions, 100% text & gradient stops >= 4.5:1 contrast, 0 SVG text clips.`);
    }

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

    // Programmatic DOM Assertions for Arabic RTL
    const domCheckAr = await page.evaluate(() => {
      const doc = document.documentElement;
      const issues = [];
      if (doc.scrollWidth > doc.clientWidth + 1) {
        issues.push(`Horizontal overflow detected in RTL: scrollWidth (${doc.scrollWidth}px) > clientWidth (${doc.clientWidth}px)`);
      }
      const buttons = Array.from(document.querySelectorAll('button, a.btn'));
      for (const btn of buttons) {
        const rect = btn.getBoundingClientRect();
        const style = window.getComputedStyle(btn);
        if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden' || btn.closest('.mobile-nav-drawer:not(.open)')) continue;
        if (rect.right > window.innerWidth + 2) {
          issues.push(`Button overflows right in RTL: "${btn.innerText.slice(0, 30)}" (${rect.right}px > ${window.innerWidth}px)`);
        }
        if (rect.left < -2) {
          issues.push(`Button overflows left in RTL: "${btn.innerText.slice(0, 30)}" (${rect.left}px < 0)`);
        }
      }

      // 2. Check RTL directional button arrows (must be mirrored AND positioned at the trailing/left edge of sibling text)
      const arrows = Array.from(document.querySelectorAll('.btn-arrow'));
      for (const arrow of arrows) {
        const style = window.getComputedStyle(arrow);
        const aRect = arrow.getBoundingClientRect();
        if (aRect.width === 0 || aRect.height === 0 || style.display === 'none' || style.visibility === 'hidden') continue;
        const transform = style.transform;
        const isFlipped = transform.includes('matrix(-1') || transform.includes('scaleX(-1)');
        const parentBtn = arrow.closest('button, a');
        if (!isFlipped) {
          issues.push(`Unmirrored RTL arrow detected in "${parentBtn?.innerText.slice(0, 25)}": transform is "${transform}"`);
        }
        if (parentBtn) {
          const textSpan = Array.from(parentBtn.children).find(el => el !== arrow && !el.classList.contains('btn-arrow'));
          if (textSpan) {
            const tRect = textSpan.getBoundingClientRect();
            if (tRect.width > 0 && aRect.left > tRect.left + 4) {
              issues.push(`RTL arrow on wrong side (right instead of trailing left) in "${parentBtn.innerText.slice(0, 25)}": arrow.left=${Math.round(aRect.left)} > text.left=${Math.round(tRect.left)}`);
            }
          }
        }
      }

      // 3. Check RTL Right-to-Left Horizontal Flow on Desktop (>= 1024px)
      if (window.innerWidth >= 1024) {
        const rtlRowSelectors = [
          { name: 'Operating Model Phases', sel: '.journey-track .journey-step-item' },
          { name: 'Interoperability Nodes', sel: '.interop-pipeline-flow .interop-node' },
          { name: 'Capability Pillars', sel: '.cap-selector-grid .cap-card' },
          { name: 'Mandate Pillars', sel: '.pillars-row .pillar-box' },
          { name: 'Scale Metrics', sel: '.metrics-grid .metric-card' }
        ];
        for (const group of rtlRowSelectors) {
          const items = Array.from(document.querySelectorAll(group.sel));
          if (items.length >= 2) {
            const r0 = items[0].getBoundingClientRect();
            const r1 = items[1].getBoundingClientRect();
            if (Math.abs(r0.top - r1.top) < 20 && r0.left < r1.left) {
              issues.push(`RTL horizontal order inverted (flowing LTR instead of RTL) in ${group.name}: item[0].left (${Math.round(r0.left)}) < item[1].left (${Math.round(r1.left)})`);
            }
          }
        }
      }

      // 4. Check for Untranslated English Strings in RTL Mode
      const i18nTargets = Array.from(document.querySelectorAll('.section-tag, .section-title, .section-desc, .spec-badge, .spec-standard-tag, .meta-item-value, .cap-schematic-svg text'));
      for (const el of i18nTargets) {
        const txt = (el.textContent || '').trim();
        if (!txt) continue;
        // Flag if text contains 2+ English words without any Arabic characters
        const hasArabic = /[\u0600-\u06FF]/.test(txt);
        const hasMultiEnglishWords = /[A-Za-z]{3,}\s+[A-Za-z]{3,}/.test(txt);
        if (!hasArabic && hasMultiEnglishWords) {
          issues.push(`Untranslated English text in RTL mode: "${txt.slice(0, 45)}"`);
        }
      }

      // 5. Hardened Contrast Ratio & Gradient Stop Assertion in RTL (WCAG AA >= 4.5:1)
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
        let base = [238, 242, 246, 1];
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

      const headings = Array.from(document.querySelectorAll('.section-title, .section-subtitle, .section-desc, .section-tag, .gradient-text, h2'));
      for (const h of headings) {
        const style = window.getComputedStyle(h);
        const rect = h.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0 || style.display === 'none' || style.visibility === 'hidden') continue;

        if (parseFloat(style.opacity) < 0.8) {
          issues.push(`Invisible heading in RTL (opacity: ${style.opacity}): "${h.innerText.slice(0, 30)}"`);
        }

        const isGradient = style.webkitBackgroundClip === 'text' || style.backgroundClip === 'text';
        const secBg = getEffectiveBg(isGradient ? h.parentElement : h);
        if (isGradient) {
          const stops = parseGradientStops(style.backgroundImage);
          for (const stop of stops) {
            const ratio = getContrastRatio(stop, secBg);
            if (ratio < 4.5) {
              issues.push(`RTL Gradient stop contrast failure on "${h.innerText.slice(0, 25)}": ratio ${ratio.toFixed(2)}:1 < 4.5:1 (stop: rgb(${stop.slice(0,3).join(',')}), bg: rgb(${secBg.slice(0,3).join(',')}))`);
            }
          }
        } else {
          const textColor = parseRgb(style.color);
          const ratio = getContrastRatio(textColor, secBg);
          if (ratio < 4.5) {
            issues.push(`RTL Contrast failure on "${h.innerText.slice(0, 25)}": ratio ${ratio.toFixed(2)}:1 < 4.5:1 (color: ${style.color}, bg: rgba(${secBg.join(',')}))`);
          }
        }
      }

      // 6. SVG <text> Bounding-Box Containment Check in RTL
      const svgs = Array.from(document.querySelectorAll('svg.cap-schematic-svg, svg.national-grid-svg'));
      for (const svg of svgs) {
        const svgRect = svg.getBoundingClientRect();
        if (svgRect.width === 0 || svgRect.height === 0) continue;
        const texts = Array.from(svg.querySelectorAll('text'));
        for (const t of texts) {
          const tRect = t.getBoundingClientRect();
          if (tRect.width === 0) continue;
          if (tRect.left < svgRect.left - 4 || tRect.right > svgRect.right + 4) {
            issues.push(`RTL SVG text clipped horizontally: "${t.textContent.trim()}" (text [${Math.round(tRect.left)}..${Math.round(tRect.right)}] outside svg [${Math.round(svgRect.left)}..${Math.round(svgRect.right)}])`);
          }
        }
      }

      return issues;
    });

    if (domCheckAr.length > 0) {
      console.warn(`[DOM Check Warning for ${avp.name}]:`, domCheckAr);
    } else {
      console.log(`[DOM Check Passed for ${avp.name}] - 0 overflows, 100% arrows mirrored at trailing left edge, 100% RTL card progression, 0 English leaks, 100% contrast & SVG containment.`);
    }

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
    { id: 'impact', name: 'closeup-06-scale-metrics' },
    { id: 'national-grid', name: 'closeup-07-national-grid' },
    { id: 'contact', name: 'closeup-08-executive-inquiry' }
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
