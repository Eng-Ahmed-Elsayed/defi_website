# DEFI Corporate Portal UI/UX Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remediate all 14 prioritized UI/UX, functional, bilingual (`EN`/`AR`), accessibility, and design-system findings (`F-01` through `F-14`) across all 9 routes of the Digital Egypt for Investment (DEFI) corporate portal so every inner page matches the Cycle 6 Sovereign Architectural Tonal System and passes automated multi-viewport verification.

**Architecture:** Unify the portal around shared standalone Angular 19 components (`<app-icon>` for vector SVG iconography, `<app-institutional-inquiry-form>` for verified consultation dispatch, and relocated `<app-diagram-interop>` / `<app-national-grid>` schematics), reactive bilingual metadata in `SeoService`, canonical language-independent category keys in `defi-content.data.ts`, and a shared Warm Architectural Stone (`#EEF2F6`) + Deep Sovereign Navy (`#071120`) tonal system for inner pages.

**Tech Stack:** Angular 19.2 (Standalone Components, Signals, Control Flow `@for`/`@if`), TypeScript 5.7, CSS Custom Properties, Puppeteer (Zero-Trust Automated Portal Verification).

**Spec:** `docs/ui-audit/portal-comprehensive-ui-ux-audit.md`

## Global Constraints

- **ZERO Raw System Emojis (`F-04`):** Never use Unicode emojis (`🏛️`, `📡`, `🏢`, `⚡`, `💡`, `⭐`, `🤝`, `🛡️`, `📦`, `🎓`, `📊`, `🗄️`, `📍`, `✉️`, `ℹ️`) anywhere in `.html` templates or `.ts` data files. Every icon must render via `<app-icon [name]="..." [size]="..."></app-icon>`.
- **ZERO Hardcoded English Strings in Templates (`F-06`):** Every visible string, badge, `placeholder`, `aria-label`, SVG `<text>`, and `<title>` tag must bind through `ls.t('English', 'Arabic')` or `ls.c.<key>`.
- **ZERO Brute-Force CSS `!important` Visibility Hacks (`F-12`):** Do not add `opacity: 1 !important; transform: none !important;` to bypass animations. Compiled `src/styles.css` must stay below the `75 kB` Angular build warning budget.
- **Sovereign Architectural Tonal System Contrast Rules (`F-04`):**
  - On Light Stone (`#EEF2F6`) / White (`#FFFFFF`) surfaces: Primary headings must use `#0A1628` (`16.8:1`), body text `#334155` (`9.4:1`), muted text `#475569` (`7.1:1`), card borders `1px solid #CBD5E1`, and `.gradient-text` must use deep institutional stops (`linear-gradient(135deg, #1E40AF 0%, #1E5FD8 55%, #0F766E 100%)`).
  - On Dark Navy (`#071120` / `#0D1B2E`) surfaces: Primary headings must use `#F8FAFC`, body text `#CBD5E1`, card borders `1px solid rgba(255, 255, 255, 0.12)`, and `.gradient-text` must use high-luminance stops (`linear-gradient(135deg, #60A5FA 0%, #2DD4BF 100%)` or Egypt Gold `#FDE68A` → `#38BDF8`).
- **RTL Directional Arrow Rule:** All directional CTA buttons must place `<span class="btn-arrow" aria-hidden="true">→</span>` **after** the button text in DOM order so `[dir="rtl"] .btn-arrow { transform: scaleX(-1); }` renders a leftward-pointing arrow (`←`) at the trailing left edge in Arabic.

## Review Focus

- **Arabic Category Filtering on `/news` (`F-01`):** Clicking `'institutional'`, `'partnership'`, or `'transformation'` when `ls.lang() === 'ar'` must filter by a language-agnostic `categoryId` property (`n.categoryId === cat`), never by `n.category.toLowerCase().includes(cat)` which fails 100% of the time on Arabic text.
- **Arabic Form Placeholders on `/contact` & `/` (`F-06`, `F-10`):** Switching language to `'ar'` on `/contact` must immediately switch all 5 input `placeholder` attributes to Arabic without any Latin characters (`e.g.`) remaining.
- **Footer Capability Pillar Deep-Linking (`F-13`):** Clicking any of the 6 capability links in `<app-footer>` (`?pillar=01` through `?pillar=06`) while already on `/capabilities` or from another route must update `activePillar` on `CapabilitiesComponent` immediately.
- **Keyboard Operability on Custom Diagram Nodes & Mobile Drawer (`F-11`):** Focusing any stage/node in `Diagram A`, `Diagram B`, `Diagram D`, or `National Grid` and pressing `Enter` or `Space` must activate that node; pressing `Escape` when the mobile navigation drawer is open must close the drawer.
- **Inner-Page Light Section Gradient Contrast (`F-04`):** Any `.section-light` added to secondary routes (`/about`, `/capabilities`, `/sectors`, `/impact`, `/news`, `/careers`, `/contact`) must inherit dark `#0A1628` headings and deep `#1E40AF → #0F766E` gradient text, never white text on `#EEF2F6` light backgrounds.

---

## File Structure & Responsibility Map

| File Path | Action | Responsibility |
| :--- | :---: | :--- |
| `src/app/shared/components/icon/icon.component.ts` | **Create** | Standalone SVG icon component (`<app-icon>`) rendering 20+ institutional vector icons (`decree`, `ministry`, `hq`, `partners`, `vision`, `mission`, `star`, `shield`, `bolt`, `layers`, `education`, `analytics`, `server`, `healthcare`, `justice`, `iot`, `mail`, `map-pin`, `info`, `briefcase`, `code`, `check`). |
| `src/app/shared/components/institutional-inquiry-form/institutional-inquiry-form.component.ts` | **Create** | Reusable bilingual consultation inquiry form used on both `/` and `/contact`, with localized placeholders, domain `<select>`, validation, and verified `mailto:info@defi.com.eg` dispatch + clipboard fallback (`F-02`, `F-06`, `F-10`). |
| `src/app/core/data/defi-content.data.ts` | **Modify** | Add `categoryId`, `dateLabel`, `readTime`, and `fullBriefing` to `news` items (`F-01`, `F-09`); add `iconName` (SVG keys replacing emojis) across `capabilities`, `sectors`, `partners`, `careers` (`F-04`); unify the 5-sector taxonomy & `careers@defi.com.eg` email (`F-05`); add `investmentMandate` (`F-03`); standardize Arabic numerals (`F-14`). |
| `src/app/core/services/seo.service.ts` | **Modify** | Add `updateBilingualTags(config: { titleEn: string; titleAr: string; descEn: string; descAr: string })` reactive to `LanguageService.lang()` (`F-06`). |
| `src/app/features/news/news.component.{ts,html,css}` | **Modify** | Fix `getFilteredNews()` to use `n.categoryId === cat` (`F-01`), add expandable briefing modal/drawer (`F-09`), and apply Sovereign Architectural Tonal System (`F-04`). |
| `src/app/features/about/about.component.{ts,html,css}` | **Modify** | Localize all hardcoded English strings (`F-06`), replace emojis with `<app-icon>` (`F-04`), embed `<app-diagram-ecosystem>`, add the 3-card Investment & PPP Mandate section (`F-03`), and apply Light Stone (`#EEF2F6`) tonal rhythm. |
| `src/app/features/not-found/not-found.component.{ts,html,css}` | **Modify** | Localize `404 · ERROR` badge (`F-06`) and use `<span class="btn-arrow">→</span>`. |
| `src/app/features/capabilities/capabilities.component.{ts,html,css}` & `footer.component.html` | **Modify** | Add missing 5th card (`05 Project Management`) to `.lifecycle-grid` (`F-08`), subscribe to `ActivatedRoute.queryParams['pillar']` (`F-13`), embed `<app-diagram-interop>` (`F-07`), replace emojis with `<app-icon>`, and apply Light Stone tonal system (`F-04`). |
| `src/app/features/sectors/sectors.component.{ts,html,css}` | **Modify** | Render unified 5-sector taxonomy (`F-05`), embed `<app-national-grid>` relocated from Homepage (`F-07`), replace emojis with `<app-icon>`, and apply Light Stone tonal system (`F-04`). |
| `src/app/features/impact/impact.component.{ts,html,css}` | **Modify** | Upgrade `MOE` and `IDSC` blocks into structured 3-stage transformation cards (`Challenge → Architecture Deployed → Verified Outcome`), replace emojis with `<app-icon>`, and apply Light Stone tonal system (`F-04`). |
| `src/app/features/careers/careers.component.{ts,html,css}` | **Modify** | Standardize email to `careers@defi.com.eg` (`F-05`), replace practice area emojis with `<app-icon>`, and apply Light Stone tonal system (`F-04`). |
| `src/app/features/contact/contact.component.{ts,html,css}` | **Modify** | Replace duplicate form with `<app-institutional-inquiry-form>` (`F-02`, `F-06`, `F-10`), replace emojis with `<app-icon>`, and apply Light Stone tonal system (`F-04`). |
| `src/app/features/home/home.component.{ts,html}` & Shared Diagrams / Header | **Modify** | Streamline Homepage to 6 sections by removing duplicate `<app-diagram-interop>` and `<app-national-grid>` (now on `/capabilities` and `/sectors`) (`F-07`), replace inline form with `<app-institutional-inquiry-form>`, and add `(keydown.enter)` / `(keydown.space)` + mobile drawer `Escape` handler (`F-11`). |
| `src/styles.css` & `scripts/capture-portal-audit.js` | **Modify / Create** | Prune redundant CSS overrides in `src/styles.css` (`< 75 kB` budget) (`F-12`), add global `.page-hero` / `.section-light` inner-page utilities, and create `scripts/capture-portal-audit.js` to verify all 9 routes in `EN` and `AR`. |

---

### Task 1: Create Shared `<app-icon>` Institutional SVG Component (`F-04`)

**Files:**
- Create: `src/app/shared/components/icon/icon.component.ts`
- Test: `scripts/verify-tasks.js` (Node assertion script for tasks)

**Interfaces:**
- Produces: `IconComponent` (`selector: 'app-icon'`, standalone: `true`) with inputs `@Input() name: string = 'shield'` and `@Input() size: number = 22`. Supported icon names: `'government' | 'decree' | 'ministry' | 'hq' | 'partners' | 'vision' | 'mission' | 'star' | 'shield' | 'bolt' | 'layers' | 'education' | 'analytics' | 'server' | 'healthcare' | 'justice' | 'iot' | 'mail' | 'map-pin' | 'info' | 'briefcase' | 'code' | 'check' | 'globe' | 'users' | 'award'`.

- [ ] **Step 1: Write the verification test for `IconComponent` in `scripts/verify-tasks.js`**

Create `scripts/verify-tasks.js` to check that `src/app/shared/components/icon/icon.component.ts` exists, exports `IconComponent`, supports all 26 icon keys, and contains zero Unicode emoji characters:

```js
const fs = require('fs');
const path = require('path');

const iconFile = path.join(__dirname, '../src/app/shared/components/icon/icon.component.ts');
if (!fs.existsSync(iconFile)) {
  console.error('FAIL: icon.component.ts does not exist');
  process.exit(1);
}
const src = fs.readFileSync(iconFile, 'utf8');
const requiredIcons = [
  'government', 'decree', 'ministry', 'hq', 'partners', 'vision', 'mission',
  'star', 'shield', 'bolt', 'layers', 'education', 'analytics', 'server',
  'healthcare', 'justice', 'iot', 'mail', 'map-pin', 'info', 'briefcase', 'code', 'check'
];
for (const key of requiredIcons) {
  if (!src.includes(`'${key}'`)) {
    console.error(`FAIL: Missing icon key '${key}' in icon.component.ts`);
    process.exit(1);
  }
}
console.log('PASS: IconComponent verified');
```

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to verify it fails**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: icon.component.ts does not exist`

- [ ] **Step 3: Implement `IconComponent` in `src/app/shared/components/icon/icon.component.ts`**

Create `src/app/shared/components/icon/icon.component.ts` as an `@Component({ selector: 'app-icon', standalone: true })` rendering clean `viewBox="0 0 24 24"` `fill="none"` `stroke="currentColor"` `stroke-width="1.75"` `stroke-linecap="round"` `stroke-linejoin="round"` SVG paths switched by `name` (with `aria-hidden="true"` and `[attr.width]="size"` `[attr.height]="size"`).

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js`
Expected: `PASS: IconComponent verified`

---

### Task 2: Update `defi-content.data.ts` & `SeoService` for Canonical IDs, Unified Taxonomy, Investment Mandate & Reactive Bilingual SEO (`F-01`, `F-03`, `F-04`, `F-05`, `F-06`, `F-09`, `F-14`)

**Files:**
- Modify: `src/app/core/data/defi-content.data.ts`
- Modify: `src/app/core/services/seo.service.ts`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Produces in `src/app/core/data/defi-content.data.ts`:
  - `news`: Each item in `en.news` and `ar.news` includes:
    - `id: string` (`'news-01' | 'news-02' | 'news-03'`)
    - `categoryId: 'institutional' | 'partnership' | 'transformation'`
    - `category: string`
    - `title: string`
    - `summary: string`
    - `date: string` (`'Q1 2026'` / `'الربع الأول ٢٠٢٦'`, `'Q2 2026'` / `'الربع الثاني ٢٠٢٦'`, `'Q3 2026'` / `'الربع الثالث ٢٠٢٦'`)
    - `readTime: string` (`'3 min briefing'` / `'إيجاز ٣ دقائق'`)
    - `highlights: string[]` (3 bullet points for the expandable briefing modal)
    - `impactDomain: string`
  - `investmentMandate`: Array of 3 structured investment/PPP execution vehicles in `en` and `ar`:
    1. `id: 'ppp'`, `icon: 'partners'`, `title` (`'Public-Private Partnership (PPP) Structuring'` / `'هيكلة الشراكات بين القطاعين العام والخاص (PPP)'`), `desc`, `mechanism`
    2. `id: 'coinvest'`, `icon: 'layers'`, `title` (`'Sovereign Digital Platform Co-Investment'` / `'الاستثمار المشترك في المنصات الرقمية السيادية'`), `desc`, `mechanism`
    3. `id: 'operations'`, `icon: 'shield'`, `title` (`'Sustainable Digital Asset Operations'` / `'التشغيل المستدام للأصول الرقمية الوطنية'`), `desc`, `mechanism`
  - `sectors`: Unified 5-sector array in both `en.sectors` and `ar.sectors` matching the 5 sectors on the homepage (`Government & Public Administration`, `Education & Human Capital`, `Strategic Decision Support`, `Universal Healthcare & Medical Registry`, `Justice, Cadastre & Smart Governance`), with `icon` set to `<app-icon>` names (`'government'`, `'education'`, `'analytics'`, `'healthcare'`, `'justice'`) instead of emojis (`🏛️`, `🎓`, `📊`, `🗄️`).
  - `capabilities`: Each of the 6 capability pillars in `en.capabilities` and `ar.capabilities` adds `icon: 'briefcase' | 'layers' | 'shield' | 'server' | 'award' | 'users'`.
  - `partners`: Each partner in `en.partners` and `ar.partners` replaces emoji `icon` (`🎓`, `📊`) with `'education'` and `'analytics'`, and adds `challenge: string`, `pillarsUsed: string[]` (`['01', '02', '03', '06']`), and `outcomeSummary: string`.
  - `careers.email`: Standardized to `'careers@defi.com.eg'` in both `en` and `ar`.
- Produces in `src/app/core/services/seo.service.ts`:
  - Injects `LanguageService` (`private ls = inject(LanguageService)`).
  - Adds method `updateBilingualTags(config: { titleEn: string; titleAr: string; descriptionEn: string; descriptionAr: string; url?: string }): void` which stores `currentConfig` and uses an Angular `effect()` in the `SeoService` constructor so switching `this.ls.lang()` immediately updates `Title` and `Meta` tags to Arabic or English.

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `defi-content.data.ts` and `seo.service.ts`**

Add checks in `scripts/verify-tasks.js` verifying:
1. `defi-content.data.ts` contains `categoryId: 'institutional'`, `categoryId: 'partnership'`, `categoryId: 'transformation'`.
2. `defi-content.data.ts` contains `investmentMandate:` in both `en` and `ar`.
3. `defi-content.data.ts` has `en.sectors.length === 5` and `ar.sectors.length === 5` and zero emoji literals (`🏛️`, `🎓`, `📊`, `🗄️`).
4. `seo.service.ts` defines `updateBilingualTags` and uses `effect(`.

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: Missing categoryId in defi-content.data.ts`

- [ ] **Step 3: Update `src/app/core/data/defi-content.data.ts` and `src/app/core/services/seo.service.ts`**

Modify `src/app/core/data/defi-content.data.ts` and `src/app/core/services/seo.service.ts` to implement the exact interfaces specified above. Keep `updateTags()` on `SeoService` for backward compatibility while adding `updateBilingualTags()`.

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS` and zero TypeScript compilation errors.

---

### Task 3: Remediate `/news` — Fix `P0` Category Filter Bug (`F-01`), Add Expandable Briefing Drawer/Modal (`F-09`), and Apply Sovereign Tonal System (`F-04`)

**Files:**
- Modify: `src/app/features/news/news.component.ts`
- Modify: `src/app/features/news/news.component.html`
- Modify: `src/app/features/news/news.component.css`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Consumes: `ls.c.news` (`categoryId`, `date`, `readTime`, `highlights`, `impactDomain`) from Task 2; `SeoService.updateBilingualTags()` from Task 2; `<app-icon>` from Task 1.
- Produces in `NewsComponent`:
  - `selectedCategory = signal<'all' | 'institutional' | 'partnership' | 'transformation'>('all')`
  - `activeArticle = signal<any | null>(null)`
  - `getFilteredNews()`: returns `items` when `cat === 'all'`, otherwise `items.filter((n: any) => n.categoryId === cat)`
  - `openArticle(item: any): void` and `closeArticle(): void` (plus `@HostListener('document:keydown.escape')` to close modal).

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `news.component.ts` and `news.component.html`**

Assert in `scripts/verify-tasks.js` that:
1. `news.component.ts` filters using `n.categoryId === cat` (and does NOT contain `n.category.toLowerCase().includes`).
2. `news.component.html` includes an accessible modal/drawer (`role="dialog" aria-modal="true"`) bound to `activeArticle()` and applies `.section-light` to the news listing section.

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: news.component.ts still uses substring category filter`

- [ ] **Step 3: Implement `news.component.ts`, `news.component.html`, and `news.component.css`**

1. In `src/app/features/news/news.component.ts`:
   - Import `HostListener` from `@angular/core` and `IconComponent` from `../../shared/components/icon/icon.component`.
   - Call `this.seo.updateBilingualTags({ titleEn: 'News & Institutional Briefings | DEFI', titleAr: 'الأخبار والإصدارات المؤسسية | مصر الرقمية للاستثمار', descriptionEn: 'Official institutional announcements, national partnership updates, and transformation briefings from Digital Egypt for Investment.', descriptionAr: 'البيانات المؤسسية الرسمية وتحديثات الشراكات الوطنية وإيجازات التحول الرقمي من شركة مصر الرقمية للاستثمار.' })`.
   - Replace `getFilteredNews()` with:
     ```ts
     getFilteredNews() {
       const items = this.ls.c.news;
       const cat = this.selectedCategory();
       if (cat === 'all') return items;
       return items.filter((n: any) => n.categoryId === cat);
     }
     ```
   - Add `activeArticle = signal<any | null>(null)`, `openArticle(item: any) { this.activeArticle.set(item); }`, `closeArticle() { this.activeArticle.set(null); }`, and `@HostListener('document:keydown.escape') onEsc() { this.closeArticle(); }`.
2. In `src/app/features/news/news.component.html`:
   - Keep `.page-hero` dark navy (`#071120`), add `.section-light` to the main news grid section (`#EEF2F6` Warm Stone background with `#FFFFFF` cards and `#CBD5E1` border).
   - Add a clear interactive CTA button on each `.news-card` (`(click)="openArticle(item)"`) with `{{ ls.t('Read Full Institutional Briefing', 'قراءة الإيجاز المؤسسي الكامل') }} <span class="btn-arrow" aria-hidden="true">→</span>`.
   - Render an accessible briefing modal when `@if (activeArticle(); as article)` displaying `article.category`, `article.date`, `article.title`, `article.summary`, `article.highlights` (3 structured key takeaways), `article.impactDomain`, and a close button.
3. Update `src/app/features/news/news.component.css` so `.news-card`, `.filter-btn`, and `.briefing-modal` adhere strictly to the Sovereign Architectural Tonal System (`#FFFFFF` cards on `#EEF2F6` stone, `#0A1628` headings, `#334155` body text, `#1E5FD8` active filter pills).

- [ ] **Step 4: Verify build and test script**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 4: Create Shared `<app-institutional-inquiry-form>` & Remediate `/contact` (`F-02`, `F-04`, `F-06`, `F-10`)

**Files:**
- Create: `src/app/shared/components/institutional-inquiry-form/institutional-inquiry-form.component.ts`
- Modify: `src/app/features/contact/contact.component.ts`
- Modify: `src/app/features/contact/contact.component.html`
- Modify: `src/app/features/contact/contact.component.css`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Produces: `InstitutionalInquiryFormComponent` (`selector: 'app-institutional-inquiry-form'`, standalone: `true`):
  - `@Input() surface: 'light' | 'dark' = 'light'`
  - Fields: `name`, `organization`, `email`, `domain` (`<select>` with 4 localized institutional options: `'Enterprise & National Architecture'`, `'Public-Private Partnership (PPP) & Investment'`, `'24/7 Mission-Critical Operations & Cloud'`, `'Digital Service Modernization'`), and `message` (`<textarea>`).
  - Localized placeholders via `ls.t(...)` for every field (zero hardcoded English placeholders).
  - On valid submit (`onSubmit()`):
    - Sets `submitted.set(true)` and constructs a `mailto:info@defi.com.eg?subject=...&body=...` link stored in `mailtoUrl` signal.
    - Triggers `window.location.href = url` (guarded so automated headless tests can also inspect the confirmation card) AND renders an explicit confirmation state showing:
      1. The formatted inquiry summary.
      2. A direct `<a [href]="mailtoUrl()" class="btn btn-primary">` button (`ls.t('Open in Email Client (info@defi.com.eg)', 'فتح في تطبيق البريد الرسمي (info@defi.com.eg)')`).
      3. A `"Copy Inquiry Details"` button (`copyToClipboard()`) so zero inquiry data is ever lost even if the user lacks a desktop mail client.

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `<app-institutional-inquiry-form>` and `contact.component.html`**

Assert in `scripts/verify-tasks.js` that:
1. `src/app/shared/components/institutional-inquiry-form/institutional-inquiry-form.component.ts` exists and binds all `placeholder` attributes via `ls.t(`.
2. `src/app/features/contact/contact.component.html` uses `<app-institutional-inquiry-form>`, contains zero hardcoded `placeholder="e.g.` strings, and contains zero raw emojis (`📍`, `✉️`, `🏛️`, `ℹ️`).

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: institutional-inquiry-form.component.ts does not exist`

- [ ] **Step 3: Implement `InstitutionalInquiryFormComponent` and update `contact.component.{ts,html,css}`**

1. Create `src/app/shared/components/institutional-inquiry-form/institutional-inquiry-form.component.ts` with complete bilingual labels, localized placeholders (`ls.t('e.g. Dr. Ahmed Mostafa', 'مثال: د. أحمد مصطفى')`, `ls.t('e.g. Ministry / Authority / Investment Entity', 'مثال: اسم الوزارة / الهيئة / المؤسسة الاستثمارية')`, `ls.t('name@organization.gov.eg', 'name@organization.gov.eg')`, `ls.t('Outline your institutional consultation, PPP investment, or architecture requirements...', 'يرجى توضيح نطاق الاستشارة المؤسسية أو الشراكة الاستثمارية أو المتطلبات المعمارية...')`), inline validation error alerts (`role="alert"`), and the verified `mailto:` + clipboard confirmation panel.
2. Update `src/app/features/contact/contact.component.ts`, `contact.component.html`, and `contact.component.css`:
   - Import `IconComponent` and `InstitutionalInquiryFormComponent`.
   - Use `this.seo.updateBilingualTags(...)`.
   - Apply `.section-light` (`#EEF2F6` Warm Stone) to the main contact grid section, replace all 4 emojis (`📍`, `✉️`, `🏛️`, `ℹ️`) with `<app-icon name="map-pin">`, `<app-icon name="mail">`, `<app-icon name="government">`, `<app-icon name="info">`, list both `info@defi.com.eg` (Institutional & PPP Inquiries) and `careers@defi.com.eg` (Executive Talent & Recruitment), and render `<app-institutional-inquiry-form [surface]="'light'"></app-institutional-inquiry-form>`.

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 5: Remediate `/about` & `/404` — Localize Hardcoded Strings (`F-06`), Add Investment & PPP Mandate (`F-03`), Embed `<app-diagram-ecosystem>`, and Apply Sovereign Tonal System (`F-04`)

**Files:**
- Modify: `src/app/features/about/about.component.ts`
- Modify: `src/app/features/about/about.component.html`
- Modify: `src/app/features/about/about.component.css`
- Modify: `src/app/features/not-found/not-found.component.ts`
- Modify: `src/app/features/not-found/not-found.component.html`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Consumes: `IconComponent` (Task 1), `DiagramEcosystemComponent` (`src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.ts`), `ls.c.investmentMandate` (Task 2), `SeoService.updateBilingualTags()` (Task 2).

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `about.component.html` and `not-found.component.html`**

Assert in `scripts/verify-tasks.js` that:
1. `about.component.html` contains zero raw emojis (`🏛️`, `📡`, `🏢`, `🤝`, `⚡`, `💡`, `⭐`, `🛡️`).
2. `about.component.html` contains zero hardcoded English strings (`No. 132 / 2020`, `MCIT & ITIDA`, `Smart Village, B145, Giza`, `MOE · IDSC · 25+ Entities`, `Data Interoperability Bus`, `Digital Services & Portals`) outside `ls.t(...)`.
3. `about.component.html` renders `<app-diagram-ecosystem></app-diagram-ecosystem>` and iterates over `ls.c.investmentMandate`.
4. `not-found.component.html` localizes the `404` badge via `ls.t('404 · ROUTE NOT FOUND', '٤٠٤ · المسار غير موجود')` and includes `<span class="btn-arrow" aria-hidden="true">→</span>`.

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: about.component.html contains raw emojis or hardcoded English`

- [ ] **Step 3: Implement updates in `about.component.{ts,html,css}` and `not-found.component.{ts,html}`**

1. In `src/app/features/about/about.component.ts`:
   - Import `IconComponent` and `DiagramEcosystemComponent`.
   - Call `this.seo.updateBilingualTags(...)`.
2. In `src/app/features/about/about.component.html`:
   - Replace all mandate strip emojis with `<app-icon name="decree">`, `<app-icon name="ministry">`, `<app-icon name="hq">`, `<app-icon name="partners">`.
   - Localize all 4 mandate strip values with `ls.t('No. 132 / 2020', 'رقم ١٣٢ / ٢٠٢٠')`, `ls.t('MCIT & ITIDA', 'وزارة الاتصالات وهيئة إيتيدا')`, `ls.t('Smart Village, B145, Giza', 'القرية الذكية، مبنى B145، الجيزة')`, `ls.t('MOE · IDSC · 25+ Entities', 'وزارة التعليم · مركز دعم القرار · +٢٥ جهة')`.
   - Apply `.section-light` (`#EEF2F6` Warm Stone) to the Story/Vision/Mission section and the new **Investment & PPP Execution Framework** section (`ls.c.investmentMandate`).
   - Keep the Strategic Objectives section on Elevated Dark Navy (`#0D1B2E`) for tonal alternation, and replace the static hardcoded-English ecosystem box with `<app-diagram-ecosystem></app-diagram-ecosystem>` inside a `.section-light` container.
3. Update `src/app/features/about/about.component.css` for crisp `#FFFFFF` surface cards on `.section-light` (`border: 1px solid #CBD5E1`, `#0A1628` headings, `#334155` body text).
4. Update `src/app/features/not-found/not-found.component.ts` (`updateBilingualTags`) and `not-found.component.html` (localize `404` tag and add `<span class="btn-arrow" aria-hidden="true">→</span>`).

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 6: Remediate `/capabilities` & Footer Deep-Linking (`F-04`, `F-07`, `F-08`, `F-13`)

**Files:**
- Modify: `src/app/features/capabilities/capabilities.component.ts`
- Modify: `src/app/features/capabilities/capabilities.component.html`
- Modify: `src/app/features/capabilities/capabilities.component.css`
- Modify: `src/app/shared/components/footer/footer.component.html`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Consumes: `ActivatedRoute` from `@angular/router`, `IconComponent` (Task 1), `DiagramInteropComponent` (`src/app/shared/components/diagram-interop/diagram-interop.component.ts`), `SeoService.updateBilingualTags()` (Task 2).
- Produces:
  - `CapabilitiesComponent` subscribes to `this.route.queryParamMap` in `ngOnInit()` and sets `this.activePillar.set(pillar)` whenever `?pillar=01`..`06` is present.
  - `footer.component.html` links each capability pillar with `routerLink="/capabilities" [queryParams]="{ pillar: p.number }"`.
  - `.lifecycle-grid` in `capabilities.component.html` renders all **6** capability stages (`01 Business Architecture`, `02 Solution Architecture`, `03 Quality & Governance`, `04 IT Operations`, `05 Project Management`, `06 Citizen Experience`).
  - Embeds `<app-diagram-interop></app-diagram-interop>` (`Diagram D: Sovereign Interoperability Architecture`) on `/capabilities`.

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `/capabilities` and `footer.component.html`**

Assert in `scripts/verify-tasks.js` that:
1. `footer.component.html` includes `[queryParams]="{ pillar: p.number }"`.
2. `capabilities.component.ts` injects `ActivatedRoute` and reads `queryParamMap`.
3. `capabilities.component.html` renders all 6 `.lifecycle-card` items (`01` through `06` including `Project Management` / `إدارة المشروعات`), includes `<app-diagram-interop></app-diagram-interop>`, and contains zero raw emojis (`⚡`, `🛡️`).

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: footer.component.html missing queryParams`

- [ ] **Step 3: Implement updates in `footer.component.html` and `capabilities.component.{ts,html,css}`**

1. In `src/app/shared/components/footer/footer.component.html` (line 38), update the capability link to:
   `<a routerLink="/capabilities" [queryParams]="{ pillar: p.number }">{{ p.title }}</a>`
2. In `src/app/features/capabilities/capabilities.component.ts`:
   - Inject `ActivatedRoute` and subscribe to `this.route.queryParamMap.subscribe(params => { const p = params.get('pillar'); if (p && ['01','02','03','04','05','06'].includes(p)) { this.activePillar.set(p); } })`.
   - Import `IconComponent` and `DiagramInteropComponent`.
   - Call `this.seo.updateBilingualTags(...)`.
3. In `src/app/features/capabilities/capabilities.component.html`:
   - Apply `.section-light` (`#EEF2F6` Warm Stone) to the Pillar Selector & Detail Panel section, replacing `⚡` and `🛡️` with `<app-icon name="bolt">` and `<app-icon name="shield">`.
   - Fix `.lifecycle-grid` so all **6** pillars (`01` to `06`, adding `05 Project Management` / `إدارة المشروعات` before `06 Citizen Experience` / `تجربة المواطن`) are rendered.
   - Add a dedicated section rendering `<app-diagram-interop></app-diagram-interop>` so technical architects can inspect the 5-stage interoperability packet flow on `/capabilities`.
4. Update `src/app/features/capabilities/capabilities.component.css` to style `.section-light` cards (`#FFFFFF` background, `#CBD5E1` border, `#0A1628` headings) and update `.lifecycle-grid` to `grid-template-columns: repeat(6, 1fr)` on desktop (`repeat(3, 1fr)` at `<= 1100px`, `1fr` at `<= 640px`).

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 7: Remediate `/sectors`, `/impact`, and `/careers` (`F-04`, `F-05`, `F-07`)

**Files:**
- Modify: `src/app/features/sectors/sectors.component.{ts,html,css}`
- Modify: `src/app/features/impact/impact.component.{ts,html,css}`
- Modify: `src/app/features/careers/careers.component.{ts,html,css}`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Consumes: `IconComponent` (Task 1), `NationalGridComponent` (`src/app/shared/components/national-grid/national-grid.component.ts`), unified 5-sector `ls.c.sectors`, enriched `ls.c.partners` (`challenge`, `pillarsUsed`, `outcomeSummary`), and standardized `ls.c.careers.email` (`careers@defi.com.eg`) from Task 2.

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for `/sectors`, `/impact`, and `/careers`**

Assert in `scripts/verify-tasks.js` that:
1. `sectors.component.html` uses `<app-icon [name]="sector.icon">`, embeds `<app-national-grid></app-national-grid>`, uses `.section-light`, and has zero raw emojis.
2. `impact.component.html` renders structured 3-stage transformation cards (`challenge`, `pillarsUsed`, `outcomeSummary`), uses `<app-icon>`, uses `.section-light`, and has zero raw emojis (`🎓`, `📊`, `📦`).
3. `careers.component.html` uses `careers@defi.com.eg` (zero `info@defi.com.eg` references on `/careers`), uses `<app-icon>`, uses `.section-light`, and has zero raw emojis (`🏛️`, `⚡`, `🛡️`, `🗄️`, `📊`, `🎨`).

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: sectors/impact/careers still contain raw emojis`

- [ ] **Step 3: Implement updates in `/sectors`, `/impact`, and `/careers`**

1. **Sectors (`src/app/features/sectors/sectors.component.{ts,html,css}`):**
   - Import `IconComponent` and `NationalGridComponent`, and call `this.seo.updateBilingualTags(...)`.
   - Apply `.section-light` (`#EEF2F6`) to the 5-sector matrix (`ls.c.sectors`), replacing emoji `{{ sector.icon }}` with `<app-icon [name]="sector.icon" [size]="24"></app-icon>` and `⚡` with `<app-icon name="bolt" [size]="16"></app-icon>`.
   - Embed `<app-national-grid></app-national-grid>` beneath the sector matrix so `/sectors` features the interactive Egypt National Infrastructure Grid Map.
2. **Impact (`src/app/features/impact/impact.component.{ts,html,css}`):**
   - Import `IconComponent` and call `this.seo.updateBilingualTags(...)`.
   - Apply `.section-light` (`#EEF2F6`) to the Partner Engagements section and render each partner (`MOE` and `IDSC`) as a structured 3-stage institutional card:
     - **Stage 1: Institutional Challenge** (`partner.challenge`)
     - **Stage 2: Capability Pillars Deployed** (`partner.pillarsUsed` badge chips + `partner.deliverables`)
     - **Stage 3: Verified National Outcome** (`partner.outcomeSummary`)
   - Replace all emojis (`🎓`, `📊`, `📦`) with `<app-icon [name]="partner.icon">` and `<app-icon name="layers">`.
3. **Careers (`src/app/features/careers/careers.component.{ts,html,css}`):**
   - Import `IconComponent` and call `this.seo.updateBilingualTags(...)`.
   - Apply `.section-light` (`#EEF2F6`) to the Why Join DEFI & Practice Areas section, replace the 6 practice area emojis with `<app-icon>` (`'government'`, `'layers'`, `'shield'`, `'server'`, `'award'`, `'users'`), and replace `mailto:info@defi.com.eg` with `mailto:{{ ls.c.careers.email }}` (`careers@defi.com.eg`).

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 8: Streamline Homepage (`/`) IA & Harden WCAG 2.1 AA Keyboard Accessibility (`F-07`, `F-10`, `F-11`)

**Files:**
- Modify: `src/app/features/home/home.component.html`
- Modify: `src/app/features/home/home.component.ts`
- Modify: `src/app/shared/components/header/header.component.ts`
- Modify: `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.html`
- Modify: `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.html`
- Modify: `src/app/shared/components/diagram-interop/diagram-interop.component.html`
- Modify: `src/app/shared/components/national-grid/national-grid.component.html`
- Test: `scripts/verify-tasks.js`

**Interfaces:**
- Consumes: `InstitutionalInquiryFormComponent` (Task 4), `SeoService.updateBilingualTags()` (Task 2).
- Produces:
  - Streamlined 6-section Homepage (`home.component.html`):
    1. Hero & Trust Bar + `<app-diagram-ecosystem>` (`#071120` Dark Navy)
    2. National Mandate & Investment/PPP Framework (`#EEF2F6` Light Stone)
    3. The 6 Capability Pillars (`<app-diagram-capabilities>`) (`#EEF2F6` Light Stone) with deep-link CTA to `/capabilities`
    4. Institutional Operating Model (`<app-diagram-operating-model>`) (`#0D1B2E` Dark Navy)
    5. Verified Impact, Priority Sectors & Executive Talent (`#EEF2F6` Light Stone) with deep-link CTAs to `/impact`, `/sectors`, and `/careers`
    6. Executive Consultation Gateway (`#071120` Dark Navy) using `<app-institutional-inquiry-form [surface]="'light'"></app-institutional-inquiry-form>`
  - Keyboard accessibility (`(keydown.enter)` and `(keydown.space)`) on all interactive nodes in `diagram-ecosystem.component.html`, `diagram-operating-model.component.html`, `diagram-interop.component.html`, and `national-grid.component.html`.
  - `@HostListener('document:keydown.escape')` on `HeaderComponent` to close the mobile navigation drawer when `Escape` is pressed.

- [ ] **Step 1: Add test assertions to `scripts/verify-tasks.js` for Homepage IA & Keyboard Accessibility**

Assert in `scripts/verify-tasks.js` that:
1. `home.component.html` uses `<app-institutional-inquiry-form>` and no longer renders duplicate `<app-diagram-interop>` or `<app-national-grid>` (which now live on `/capabilities` and `/sectors`).
2. `diagram-interop.component.html`, `diagram-operating-model.component.html`, `diagram-ecosystem.component.html`, and `national-grid.component.html` include `(keydown.enter)` and `(keydown.space)` handlers on their `tabindex="0"` interactive nodes.
3. `header.component.ts` includes `@HostListener('document:keydown.escape')`.

- [ ] **Step 2: Run `node scripts/verify-tasks.js` to confirm failure**

Run: `node scripts/verify-tasks.js`
Expected: `FAIL: Missing keyboard handlers on diagram nodes`

- [ ] **Step 3: Implement Homepage IA streamlining and keyboard accessibility handlers**

1. In `src/app/shared/components/header/header.component.ts`, import `HostListener` and add:
   ```ts
   @HostListener('document:keydown.escape')
   onEscapeKey() {
     if (this.mobileMenuOpen()) {
       this.closeMobileMenu();
     }
   }
   ```
2. Add `(keydown.enter)="..."` and `(keydown.space)="$event.preventDefault(); ..."` to every `[tabindex="0"]` interactive node in:
   - `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.html` (`selectNode(...)`)
   - `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.html` (`setStep(...)`)
   - `src/app/shared/components/diagram-interop/diagram-interop.component.html` (`setActiveStage(...)`)
   - `src/app/shared/components/national-grid/national-grid.component.html` (`selectHub(...)`)
3. In `src/app/features/home/home.component.ts` and `home.component.html`:
   - Import `InstitutionalInquiryFormComponent` and `IconComponent`.
   - Call `this.seo.updateBilingualTags(...)`.
   - Remove the redundant `<section id="interoperability">` (`<app-diagram-interop>`, now on `/capabilities`) and `<section id="national-grid">` (`<app-national-grid>`, now on `/sectors`), and update `sectionIds` in `home.component.ts` to match the exact section IDs present in `home.component.html`.
   - Replace the inline homepage `<form>` with `<app-institutional-inquiry-form [surface]="'light'"></app-institutional-inquiry-form>`.

- [ ] **Step 4: Run `node scripts/verify-tasks.js` and `npx ng build --configuration=development`**

Run: `node scripts/verify-tasks.js && npx ng build --configuration=development`
Expected: `PASS`

---

### Task 9: CSS Bundle Budget Cleanup (`F-12`) & Full-Portal Automated Verification Suite (`scripts/capture-portal-audit.js`)

**Files:**
- Modify: `src/styles.css`
- Create: `scripts/capture-portal-audit.js`

**Interfaces:**
- Produces:
  - Cleaned `src/styles.css` with shared `.section-light` inner-page card rules and compiled raw size `< 75 kB` (zero Angular build budget warnings).
  - `scripts/capture-portal-audit.js`: Automated Puppeteer verification script that navigates across all 9 routes (`/`, `/about`, `/capabilities`, `/sectors`, `/impact`, `/news`, `/careers`, `/contact`, `/404`) in both `EN` (`dir="ltr"`) and `AR` (`dir="rtl"`), asserting:
    1. Zero raw Unicode emojis anywhere in rendered `document.body.innerText`.
    2. Zero hardcoded English placeholders or untranslated headers when `AR` is active.
    3. `/news` category filtering returns `> 0` cards for every filter tab in both `EN` and `AR`.
    4. `/capabilities?pillar=05` selects Pillar `05` and `.lifecycle-grid` renders `6` cards.
    5. Zero horizontal overflow (`scrollWidth <= innerWidth`) and WCAG AA contrast compliance (`>= 4.5:1` normal text, `>= 3.0:1` large text) across all 9 routes.

- [ ] **Step 1: Prune dead duplicate override blocks in `src/styles.css` so `npx ng build` produces zero budget warnings**

Consolidate duplicate Cycle 1–5 override blocks in `src/styles.css` while preserving all active Sovereign Architectural Tonal System rules, `.section-light` typography/card rules, `.gradient-text` contrast rules, and `[dir="rtl"] .btn-arrow` mirroring.

- [ ] **Step 2: Run production build `npx ng build` to verify CSS bundle is under `75 kB`**

Run: `npx ng build`
Expected: Build succeeds with `0 errors` and `0 budget warnings` (`styles-*.css < 75.00 kB`).

- [ ] **Step 3: Create and run `scripts/capture-portal-audit.js` across all 9 routes in `EN` and `AR`**

Create `scripts/capture-portal-audit.js` (modeled on `scripts/capture-homepage-audit.js`) to test `/`, `/about`, `/capabilities`, `/sectors`, `/impact`, `/news`, `/careers`, `/contact`, and `/404` in `EN` and `AR`, saving verification screenshots to `artifacts/portal-audit/` and exiting with code `1` on any assertion failure.

- [ ] **Step 4: Execute full verification suite**

Run: `node scripts/verify-tasks.js && node scripts/capture-portal-audit.js`
Expected: `100% PASS` across all 9 routes in both `EN` and `AR` with zero contrast, overflow, emoji, filter, or i18n failures.
