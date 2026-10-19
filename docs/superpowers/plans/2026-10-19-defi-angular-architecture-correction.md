# DEFI Website — Angular Architecture Correction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the DEFI website into a complete, standalone, production-ready Angular application powered by Angular 22 CLI, eliminating the legacy Vite multi-page HTML build while elevating design quality, removing fake telemetry, ensuring full bilingual support, and validating all routes and responsive viewports.

**Architecture:** Modern Angular 22 standalone architecture with Angular Router, signals-based state management (`LanguageService`, `SeoService`), clean core/shared/features modularization, CSS logical properties for seamless LTR/RTL, and official `@angular/build:application` pipeline configured for production deployment on Vercel.

**Tech Stack:** Angular 22.2.3, TypeScript 6.0.3, RxJS 7.8.2, Zone.js 0.15.0, Angular CLI 22.2.3, Puppeteer Core (verification test suite), CSS custom properties design system.

**Spec:** `DEFI_Angular_Architecture_Correction_Prompt.md`

## Global Constraints

- Angular Version: Angular 22.2.3 (latest stable official release compatible with Node.js v24.19.0).
- Build Pipeline: Angular CLI (`ng build`) is the sole production build owner; Vite multi-page HTML build is completely retired from production path.
- Routing: Angular Router owns all page routing with standalone components; no navigation to `.html` files. Direct route access and page refresh must work seamlessly.
- Design: Premium, high-contrast, bilingual (EN/AR with full RTL and Cairo typography), mobile-responsive (360px to 1440px+ without horizontal overflow).
- Content Integrity: Eliminate all simulated telemetry, fake RPS counters, fake operational graphs, and unverified data claims.

## Review Focus

1. Direct URL navigation to inner routes (e.g. `/capabilities`, `/contact`) returns 200 with matching page content, not 404 or a fallback to home.
2. Language switching to Arabic updates `document.documentElement.dir = 'rtl'`, flips layout logically, and maintains contrast and readability.
3. Mobile drawer navigation opens cleanly, traps/handles focus, closes on `Escape` or link click, and prevents background overflow.
4. No fake telemetry (RPS numbers, animated fake server ticks, simulated infrastructure counters) remains on any page or diagram.
5. Production `ng build` completes with zero errors, zero budget violations, and outputs to `dist/defi-angular/browser`.

---

### Task 1: Environment & Package Manifest Realignment for Angular 22

**Files:**
- Modify: `package.json`
- Modify: `angular.json`
- Modify: `tsconfig.json`
- Modify: `tsconfig.app.json`

**Interfaces:**
- Consumes: Node.js v24.19.0, npm 11.17.0
- Produces: Installed Angular 22 dependencies, working `ng build` and `ng serve` npm scripts

- [ ] **Step 1: Update `package.json` with official Angular 22 dependencies and npm scripts**
  Add `@angular/core`, `@angular/common`, `@angular/router`, `@angular/forms`, `@angular/platform-browser`, `@angular/compiler`, `@angular/cli`, `@angular/build`, `@angular/compiler-cli`, `rxjs`, `zone.js`, `tslib`, and `typescript@~6.0.3`.
  Set scripts: `"build": "ng build"`, `"start": "ng serve"`, `"watch": "ng build --watch --configuration development"`.

- [ ] **Step 2: Run `npm install` and verify node_modules integrity**
  Run: `npm install`
  Expected: Clean installation of Angular 22 packages.

- [ ] **Step 3: Verify Angular CLI execution**
  Run: `npx ng version`
  Expected: Shows Angular CLI 22.2.3, Angular 22.2.3, Node 24.19.0.

- [ ] **Step 4: Commit dependencies**
  ```bash
  git add package.json package-lock.json angular.json tsconfig.json tsconfig.app.json
  git commit -m "build(angular): install Angular 22 dependencies and configure Angular CLI pipeline"
  ```

---

### Task 2: Core State Management, SEO Service, and Content Data Cleansing

**Files:**
- Modify: `src/app/core/models/defi-content.model.ts`
- Modify: `src/app/core/data/defi-content.data.ts`
- Modify: `src/app/core/services/language.service.ts`
- Modify: `src/app/core/services/seo.service.ts`

**Interfaces:**
- Consumes: Angular signal/effect APIs, Browser Title & Meta services
- Produces: `LanguageService` (currentLang, dir, t, isArabic), `SeoService.updateTags()`, cleansed `DEFI_TRANSLATIONS`

- [ ] **Step 1: Audit and remove fake telemetry from `defi-content.data.ts`**
  Remove fake live transaction throughput, fabricated RPS numbers, automated ticker increments, and unsupported operational claims. Replace with verified institutional mandate (Decree 132/2020), core capabilities, strategic sector descriptions, and authentic enterprise advisory roles.

- [ ] **Step 2: Ensure complete bilingual coverage in `defi-content.data.ts`**
  Ensure all pages (Home, About, Capabilities, Sectors, Impact, News, Careers, Contact, 404) have fully populated English and Arabic content with correct contextual translations.

- [ ] **Step 3: Enhance `SeoService` for dynamic route title and metadata updates**
  Configure Open Graph, Twitter cards, meta descriptions, and canonical tags per route.

- [ ] **Step 4: Commit core data and services**
  ```bash
  git add src/app/core/
  git commit -m "feat(core): cleanse telemetry data, complete bilingual translations, and enhance SEO service"
  ```

---

### Task 3: Shared Layout Components (Header, Footer, Navigation, Breadcrumbs)

**Files:**
- Modify: `src/app/shared/components/header/header.component.ts`
- Modify: `src/app/shared/components/header/header.component.html`
- Modify: `src/app/shared/components/header/header.component.css`
- Modify: `src/app/shared/components/footer/footer.component.ts`
- Modify: `src/app/shared/components/footer/footer.component.html`
- Modify: `src/app/shared/components/footer/footer.component.css`

**Interfaces:**
- Consumes: `LanguageService`, Angular Router (`routerLink`, `routerLinkActive`)
- Produces: `<app-header>` and `<app-footer>` with responsive navigation, accessible mobile drawer, language switcher, and unclipped brand identity

- [ ] **Step 1: Upgrade `HeaderComponent` with robust mobile menu state, keyboard dismissal, and active route indicators**
  Implement accessible mobile menu toggle with `aria-expanded`, Esc key listener, focus trap/management, and unclipped brand logo styling.

- [ ] **Step 2: Upgrade `FooterComponent` with structured links to all Angular routes, institutional attribution, and decree badge**
  Ensure all links use `[routerLink]` targeting internal Angular routes `/about`, `/capabilities`, etc.

- [ ] **Step 3: Verify styles across light/dark contrast and RTL mirroring**
  Use CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline-start`) for seamless Arabic mirroring.

- [ ] **Step 4: Commit shared layout**
  ```bash
  git add src/app/shared/components/header/ src/app/shared/components/footer/
  git commit -m "feat(layout): implement accessible header with mobile drawer and verified footer navigation"
  ```

---

### Task 4: Illustrative Architectural Diagrams (Replacing Fake Telemetry)

**Files:**
- Modify: `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.ts`
- Modify: `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.html`
- Modify: `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.css`
- Modify: `src/app/shared/components/diagram-capabilities/diagram-capabilities.component.ts`
- Modify: `src/app/shared/components/diagram-capabilities/diagram-capabilities.component.html`
- Modify: `src/app/shared/components/diagram-capabilities/diagram-capabilities.component.css`
- Modify: `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.ts`
- Modify: `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.html`
- Modify: `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.css`

**Interfaces:**
- Consumes: `LanguageService` translations
- Produces: Informative, responsive SVG architectural diagrams explaining DEFI's role without fake live operations

- [ ] **Step 1: Redesign Ecosystem Diagram**
  Show interactive 5-layer architecture (Touchpoints -> Sectoral Ministries -> DEFI Enablement Backbone -> National Registries -> Sovereign Cloud Infrastructure) with explanatory inspection panel on hover/tap. No animated fake throughput or fake server counters.

- [ ] **Step 2: Redesign Capabilities and Operating Model Diagrams**
  Clear, accessible SVG visualizations of enterprise transformation cycles and governance gates.

- [ ] **Step 3: Commit diagram updates**
  ```bash
  git add src/app/shared/components/diagram-*
  git commit -m "feat(diagrams): convert diagrams to authentic explanatory architectural models"
  ```

---

### Task 5: Feature Pages Implementation & Angular Routing

**Files:**
- Modify: `src/app/app.routes.ts`
- Modify: `src/app/features/home/home.component.*`
- Modify: `src/app/features/about/about.component.*`
- Modify: `src/app/features/capabilities/capabilities.component.*`
- Modify: `src/app/features/sectors/sectors.component.*`
- Modify: `src/app/features/impact/impact.component.*`
- Modify: `src/app/features/news/news.component.*`
- Modify: `src/app/features/careers/careers.component.*`
- Modify: `src/app/features/contact/contact.component.*`
- Modify: `src/app/features/not-found/not-found.component.*`

**Interfaces:**
- Consumes: `LanguageService`, `SeoService`, Angular Reactive Forms (for Contact), Router
- Produces: Standalone component pages for all 8 core routes + 404 handler

- [ ] **Step 1: Refactor `HomeComponent`**
  Integrate revised hero (clear value proposition, verified credentials, single architecture showcase), mandate pillars, ecosystem diagram, strategic sectors preview, and prominent CTA.

- [ ] **Step 2: Refactor `AboutComponent` and `CapabilitiesComponent`**
  Decree 132/2020 legal background, executive governance framework, core capability matrices, and architectural advisory models.

- [ ] **Step 3: Refactor `SectorsComponent` and `ImpactComponent`**
  Strategic sectors (Government Operations, Digital Economy, Citizen Services, Sovereign Platforms) and verified collaboration areas.

- [ ] **Step 4: Refactor `NewsComponent` and `CareersComponent`**
  Authentic announcements, press releases, culture pillars, talent application workflow, and honest recruitment states.

- [ ] **Step 5: Refactor `ContactComponent` with Angular Reactive Forms**
  Validation (name, official entity, email, phone, message topic), clear accessible error states, simulated submission feedback with clear disclaimer that this is a frontend demonstration.

- [ ] **Step 6: Configure router with lazy-loading and SEO title hooks**
  In `app.routes.ts`, ensure all routes are cleanly configured and update document title & meta tags on navigation.

- [ ] **Step 7: Commit all feature routes**
  ```bash
  git add src/app/features/ src/app/app.routes.ts
  git commit -m "feat(pages): implement complete set of standalone Angular feature pages with reactive forms"
  ```

---

### Task 6: Global Styles, Responsive Polish, and Legacy Vite MPA Deprecation

**Files:**
- Modify: `src/styles.css`
- Modify: `src/index.html`
- Create: `vercel.json`
- Remove / Move: Standalone legacy HTML files (`index.html`, `about.html`, etc. at root) to archive or deprecate from build

**Interfaces:**
- Consumes: Modern CSS design system
- Produces: Clean root layout, zero horizontal overflow at 360px-1440px, Vercel SPA deployment configuration

- [ ] **Step 1: Refine `src/styles.css` for typography, spacing, contrast, and fluid responsiveness**
  Ensure fluid typography (`clamp()`), accessible color contrast ratios (WCAG AA), polished focus rings (`:focus-visible`), and smooth micro-interactions.

- [ ] **Step 2: Configure `src/index.html` as the single Angular application host**
  Include preconnected Google Fonts (Plus Jakarta Sans, Cairo), favicon, meta tags, and `<app-root>`.

- [ ] **Step 3: Create `vercel.json` for Angular SPA deployment**
  Configure `cleanUrls: true`, `framework: null`, `outputDirectory: "dist/defi-angular/browser"`, and rewrite rules `{"source": "/(.*)", "destination": "/index.html"}`.

- [ ] **Step 4: Clean up build configuration and retire standalone HTML pages from build path**
  Ensure root `package.json` build command is `ng build`. Archive or update legacy HTML pages so only Angular CLI controls the public application build.

- [ ] **Step 5: Commit styles, hosting config, and pipeline deprecation**
  ```bash
  git add src/ styles.css vercel.json package.json
  git commit -m "build(deploy): configure Vercel SPA deployment and retire legacy Vite build from production path"
  ```

---

### Task 7: Comprehensive Verification, Testing, and Browser Audits

**Files:**
- Create / Update: `scripts/verify-angular-app.js`
- Test: Component unit tests in `src/app/app.spec.ts`
- Verification: Headless Chrome / Puppeteer across 8 routes, 5 viewports (1440, 1024, 768, 390, 360), English & Arabic, mobile drawer, contact form validation

- [ ] **Step 1: Execute `npm run build` and verify output**
  Run: `npm run build`
  Expected: Success, generated bundles in `dist/defi-angular/browser`.

- [ ] **Step 2: Run Angular unit tests**
  Run: `npm test -- --watch=false` or configured test runner.
  Expected: PASS.

- [ ] **Step 3: Run comprehensive headless browser verification suite on the Angular production build**
  Serve `dist/defi-angular/browser` and run Puppeteer audit verifying:
  - Direct URL access to all 8 routes (`/`, `/about`, `/capabilities`, `/sectors`, `/impact`, `/news`, `/careers`, `/contact`)
  - Browser refresh on inner routes
  - Header & footer link navigation
  - Language toggle (English <-> Arabic RTL)
  - Mobile menu open/close and keyboard Esc handling
  - Contact form validation and submission feedback
  - No horizontal page overflow at 1440px, 1024px, 768px, 390px, and 360px
  - Capture verification screenshots for documentation

- [ ] **Step 4: Commit verification suite and updated screenshots**
  ```bash
  git add scripts/ verification-screenshots/
  git commit -m "test: comprehensive verification of Angular application across all routes and viewports"
  ```
