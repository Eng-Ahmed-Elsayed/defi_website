import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('--- DEFI PORTAL TASK VERIFICATION ---');

// Check Task 1: IconComponent
const iconFile = path.join(__dirname, '../src/app/shared/components/icon/icon.component.ts');
if (!fs.existsSync(iconFile)) {
  console.error('FAIL: icon.component.ts does not exist');
  process.exit(1);
}
const iconSrc = fs.readFileSync(iconFile, 'utf8');
const requiredIcons = [
  'government', 'decree', 'ministry', 'hq', 'partners', 'vision', 'mission',
  'star', 'shield', 'bolt', 'layers', 'education', 'analytics', 'server',
  'healthcare', 'justice', 'iot', 'mail', 'map-pin', 'info', 'briefcase', 'code', 'check',
  'globe', 'users', 'award'
];
for (const key of requiredIcons) {
  if (!iconSrc.includes(`'${key}'`)) {
    console.error(`FAIL: Missing icon key '${key}' in icon.component.ts`);
    process.exit(1);
  }
}
console.log('PASS: Task 1 - IconComponent verified with all 26 vector icon keys.');

// Check Task 2: defi-content.data.ts & seo.service.ts
const dataFile = path.join(__dirname, '../src/app/core/data/defi-content.data.ts');
const dataSrc = fs.readFileSync(dataFile, 'utf8');
if (!dataSrc.includes("categoryId: 'institutional'") || !dataSrc.includes("categoryId: 'partnership'") || !dataSrc.includes("categoryId: 'transformation'")) {
  console.error('FAIL: Missing categoryId in defi-content.data.ts');
  process.exit(1);
}
if (!dataSrc.includes('investmentMandate:')) {
  console.error('FAIL: Missing investmentMandate in defi-content.data.ts');
  process.exit(1);
}

const seoFile = path.join(__dirname, '../src/app/core/services/seo.service.ts');
const seoSrc = fs.readFileSync(seoFile, 'utf8');
if (!seoSrc.includes('updateBilingualTags')) {
  console.error('FAIL: Missing updateBilingualTags in seo.service.ts');
  process.exit(1);
}
console.log('PASS: Task 2 - defi-content.data.ts and seo.service.ts verified.');

// Check Task 3: news.component.{ts,html,css}
const newsTsFile = path.join(__dirname, '../src/app/features/news/news.component.ts');
const newsTs = fs.readFileSync(newsTsFile, 'utf8');
if (newsTs.includes('n.category.toLowerCase().includes')) {
  console.error('FAIL: news.component.ts still uses substring category filter');
  process.exit(1);
}
if (!newsTs.includes('categoryId === cat')) {
  console.error('FAIL: news.component.ts does not use categoryId filter');
  process.exit(1);
}
if (!newsTs.includes('activeArticle')) {
  console.error('FAIL: news.component.ts missing activeArticle modal state');
  process.exit(1);
}

const newsHtmlFile = path.join(__dirname, '../src/app/features/news/news.component.html');
const newsHtml = fs.readFileSync(newsHtmlFile, 'utf8');
if (newsHtml.includes('🏛️')) {
  console.error('FAIL: news.component.html still contains raw emoji');
  process.exit(1);
}
if (!newsHtml.includes('section-light') || !newsHtml.includes('role="dialog"')) {
  console.error('FAIL: news.component.html missing section-light or modal dialog');
  process.exit(1);
}
console.log('PASS: Task 3 - news component verified with categoryId filter and briefing modal.');

// Check Task 4: Shared Inquiry Form & Contact Component
const formFile = path.join(__dirname, '../src/app/shared/components/institutional-inquiry-form/institutional-inquiry-form.component.ts');
if (!fs.existsSync(formFile)) {
  console.error('FAIL: institutional-inquiry-form.component.ts does not exist');
  process.exit(1);
}
const formSrc = fs.readFileSync(formFile, 'utf8');
if (!formSrc.includes('mailto:') || !formSrc.includes('copyToClipboard')) {
  console.error('FAIL: institutional-inquiry-form.component.ts missing mailto bridge or copyToClipboard');
  process.exit(1);
}

const contactHtmlFile = path.join(__dirname, '../src/app/features/contact/contact.component.html');
const contactHtml = fs.readFileSync(contactHtmlFile, 'utf8');
if (contactHtml.includes('placeholder="e.g.') || contactHtml.includes('📍') || contactHtml.includes('✉️')) {
  console.error('FAIL: contact.component.html contains hardcoded English placeholder or raw emoji');
  process.exit(1);
}
if (!contactHtml.includes('app-institutional-inquiry-form')) {
  console.error('FAIL: contact.component.html missing app-institutional-inquiry-form');
  process.exit(1);
}
console.log('PASS: Task 4 - institutional-inquiry-form and contact component verified.');

// Check Task 5: about.component & not-found.component
const aboutHtmlFile = path.join(__dirname, '../src/app/features/about/about.component.html');
const aboutHtml = fs.readFileSync(aboutHtmlFile, 'utf8');
const forbiddenEmojis = ['🏛️', '📡', '🏢', '🤝', '⚡', '💡', '⭐', '🛡️'];
for (const emoji of forbiddenEmojis) {
  if (aboutHtml.includes(emoji)) {
    console.error(`FAIL: about.component.html still contains raw emoji: ${emoji}`);
    process.exit(1);
  }
}
if (!aboutHtml.includes('app-diagram-ecosystem') || !aboutHtml.includes('investmentMandate')) {
  console.error('FAIL: about.component.html missing app-diagram-ecosystem or investmentMandate');
  process.exit(1);
}

const notFoundHtmlFile = path.join(__dirname, '../src/app/features/not-found/not-found.component.html');
const notFoundHtml = fs.readFileSync(notFoundHtmlFile, 'utf8');
if (notFoundHtml.includes('>404 · ERROR<')) {
  console.error('FAIL: not-found.component.html has untranslated 404 · ERROR');
  process.exit(1);
}
console.log('PASS: Task 5 - about and not-found components verified.');

// Check Task 6: capabilities.component & footer
const footerHtmlFile = path.join(__dirname, '../src/app/shared/components/footer/footer.component.html');
const footerHtml = fs.readFileSync(footerHtmlFile, 'utf8');
if (!footerHtml.includes('[queryParams]="{ pillar:')) {
  console.error('FAIL: footer.component.html missing pillar queryParams');
  process.exit(1);
}

const capTsFile = path.join(__dirname, '../src/app/features/capabilities/capabilities.component.ts');
const capTs = fs.readFileSync(capTsFile, 'utf8');
if (!capTs.includes('ActivatedRoute') || !capTs.includes('queryParamMap')) {
  console.error('FAIL: capabilities.component.ts does not subscribe to queryParamMap');
  process.exit(1);
}

const capHtmlFile = path.join(__dirname, '../src/app/features/capabilities/capabilities.component.html');
const capHtml = fs.readFileSync(capHtmlFile, 'utf8');
if (!capHtml.includes('>05<') || !capHtml.includes('>06<')) {
  console.error('FAIL: capabilities.component.html lifecycle grid missing pillar 05 or 06');
  process.exit(1);
}
if (!capHtml.includes('app-diagram-interop')) {
  console.error('FAIL: capabilities.component.html missing app-diagram-interop');
  process.exit(1);
}
console.log('PASS: Task 6 - capabilities and footer deep linking verified.');

// Check Task 7: sectors, impact, and careers components
const sectorsHtmlFile = path.join(__dirname, '../src/app/features/sectors/sectors.component.html');
const sectorsHtml = fs.readFileSync(sectorsHtmlFile, 'utf8');
if (sectorsHtml.includes('🏛️') || !sectorsHtml.includes('app-national-grid') || !sectorsHtml.includes('section-light')) {
  console.error('FAIL: sectors.component.html missing app-national-grid, section-light, or contains emoji');
  process.exit(1);
}

const impactHtmlFile = path.join(__dirname, '../src/app/features/impact/impact.component.html');
const impactHtml = fs.readFileSync(impactHtmlFile, 'utf8');
if (impactHtml.includes('🛡️') || !impactHtml.includes('section-light')) {
  console.error('FAIL: impact.component.html missing section-light or contains emoji');
  process.exit(1);
}

const careersHtmlFile = path.join(__dirname, '../src/app/features/careers/careers.component.html');
const careersHtml = fs.readFileSync(careersHtmlFile, 'utf8');
if (careersHtml.includes('info@defi.com.eg') || !careersHtml.includes('careers@defi.com.eg') || careersHtml.includes('📍')) {
  console.error('FAIL: careers.component.html still references info@defi.com.eg or contains raw emoji');
  process.exit(1);
}
console.log('PASS: Task 7 - sectors, impact, and careers components verified.');

// Check Task 8: Homepage IA streamlining & Keyboard Accessibility
const homeHtmlFile = path.join(__dirname, '../src/app/features/home/home.component.html');
const homeHtml = fs.readFileSync(homeHtmlFile, 'utf8');
if (homeHtml.includes('app-diagram-interop') || homeHtml.includes('app-national-grid')) {
  console.error('FAIL: home.component.html still includes duplicate app-diagram-interop or app-national-grid');
  process.exit(1);
}
if (!homeHtml.includes('app-institutional-inquiry-form')) {
  console.error('FAIL: home.component.html missing app-institutional-inquiry-form');
  process.exit(1);
}
const homeForbiddenEmojis = ['📍', '✉️', '📜'];
for (const emoji of homeForbiddenEmojis) {
  if (homeHtml.includes(emoji)) {
    console.error(`FAIL: home.component.html still contains raw emoji: ${emoji}`);
    process.exit(1);
  }
}

// Diagram keyboard accessibility checks
const ecoHtml = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.html'), 'utf8');
if (!ecoHtml.includes('(keydown.enter)') || !ecoHtml.includes('(keydown.space)')) {
  console.error('FAIL: diagram-ecosystem.component.html missing keyboard accessibility (keydown.enter/space)');
  process.exit(1);
}

const opHtml = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/diagram-operating-model/diagram-operating-model.component.html'), 'utf8');
if (!opHtml.includes('(keydown.enter)') || !opHtml.includes('(keydown.space)')) {
  console.error('FAIL: diagram-operating-model.component.html missing keyboard accessibility (keydown.enter/space)');
  process.exit(1);
}

const interopHtml = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/diagram-interop/diagram-interop.component.html'), 'utf8');
if (!interopHtml.includes('(keydown.enter)') || !interopHtml.includes('(keydown.space)')) {
  console.error('FAIL: diagram-interop.component.html missing keyboard accessibility (keydown.enter/space)');
  process.exit(1);
}

const gridHtml = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/national-grid/national-grid.component.html'), 'utf8');
if (!gridHtml.includes('(keydown.enter)') || !gridHtml.includes('(keydown.space)')) {
  console.error('FAIL: national-grid.component.html missing keyboard accessibility (keydown.enter/space)');
  process.exit(1);
}

const headerTs = fs.readFileSync(path.join(__dirname, '../src/app/shared/components/header/header.component.ts'), 'utf8');
if (!headerTs.includes('escape') && !headerTs.includes('Escape')) {
  console.error('FAIL: header.component.ts missing escape key listener');
  process.exit(1);
}
console.log('PASS: Task 8 - Homepage IA and Diagram Keyboard Accessibility verified.');

