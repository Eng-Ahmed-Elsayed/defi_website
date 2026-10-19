# DEFI Corporate Website — Angular 22 Full Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a modern, credible, premium corporate website for Digital Egypt For Investment (DEFI) built with latest stable Angular (v22.2.3), featuring bilingual English/Arabic RTL, responsive interactive SVG diagrams, refined homepage, and complete verified inner pages.

**Architecture:** Modern Angular 22 standalone components with zoneless/signal-driven state, centralized typed content models (`defi-content.model.ts`), reactive `LanguageService` with native HTML `dir` and CSS Logical Properties, modular SVG diagram components with ARIA text alternatives, and lazy-loaded routes with comprehensive SEO metadata.

**Tech Stack:** Angular 22.2.3 (latest stable release), TypeScript 5.8+, CSS3 (CSS Logical Properties, CSS Grid, Glassmorphism, compositor-driven motion), Responsive SVG, Node.js 24.

**Spec:** [DESIGN.md](file:///c:/Users/L/Documents/src/defi_website/DESIGN.md), [CONTENT-QUESTIONS.md](file:///c:/Users/L/Documents/src/defi_website/CONTENT-QUESTIONS.md), and user requirements.

---

## Global Constraints

- **Angular Version:** Strictly Angular v22.2.3 (latest verified stable release from npm/releases). No preview/RC versions.
- **Brand Assets:** Strictly use authentic DEFI logos (`defi-logo-gradient.png`, `defi-logo-black.jpg`) with brand-consistent institutional palette (`#0B192C`, `#1E5FD8`, `#6366F1`, `#087E8B`, `#D4AF37`).
- **Verified Facts Only:**
  - Establishment: Prime Minister Decree No. 132/2020.
  - Auspices: Ministry of Communications and Information Technology (MCIT) and Information Technology Industry Development Agency (ITIDA).
  - Headquarters: Smart Village, Building B145, Cairo-Alexandria Desert Road, Giza, Egypt.
  - Official Email: `info@defi.com.eg`.
  - Metrics: 50+ Clients, 200+ Expert Consultants, 25+ Government Entities Served, 200+ Digital Services Modernized.
  - References: Ministry of Education and Technical Education (MOE), The Egyptian Cabinet Information and Decision Support Center (IDSC).
  - 6 Capability Pillars: Business Architecture, Solution Architecture, IT Operations, Citizen Experience, Project Management, Quality Governance.
  - 4 Core Values: Innovation, Excellence, Collaboration, Integrity.
- **No Hallucinations:** Strictly no invented client logos, fake case studies, fictional statistics, or unverified awards.
- **Bilingual & RTL:** Authentic dual-language support (English and Arabic) with true RTL layout flipping, logical CSS properties, and appropriate fonts (`Plus Jakarta Sans` for EN, `IBM Plex Sans Arabic` & `Cairo` for AR).
- **Diagrams First:** Minimum 2 rich, responsive SVG diagrams on the homepage (National Digital Ecosystem & Operating Model Flow), plus capability matrix and inner page architectural diagrams.
- **All Routes Working:** `/`, `/about`, `/capabilities`, `/sectors`, `/impact`, `/news`, `/careers`, `/contact`, and `**` (404).

---

## Review Focus

1. **RTL Directional Inversion:** When toggling from English (`ltr`) to Arabic (`rtl`), diagram data flows, navigation chevrons, form inputs, and margin/padding must correctly invert without horizontal layout overflow or clipped text.
2. **Interactive SVG Accessibility:** Diagram interactive nodes and data buses must have accessible keyboard focus, high contrast, ARIA labels, and descriptive text alternatives so screen readers and search engines parse them seamlessly.
3. **Mobile Viewport Overflow:** Large SVG diagrams and grid matrices must gracefully transform on small mobile screens (360px & 390px) into scrollable or responsive stacked vertical cards without horizontal page scroll.
4. **Direct Route Reload (SPA Navigation):** Every Angular route (`/about`, `/capabilities`, etc.) must render properly when loaded directly or reloaded in the browser without 404 server errors.
5. **Reduced Motion Compliance:** All animated SVG pulses, circuit traces, and transitions must strictly respect `@media (prefers-reduced-motion: reduce)` by falling back to static visual representations.

---

## Implementation Tasks

### Task 1: Angular 22 Project Foundation & Asset Migration
**Files:**
- Create/Configure: `angular.json`, `tsconfig.json`, `package.json`, `src/index.html`, `src/styles.css`
- Copy/Preserve: `public/defi-logo-gradient.png`, `public/defi-logo-black.jpg`, `src/assets/`
- Interfaces: Base Angular 22 runtime, CSS tokens, Google Fonts preconnect (`Plus Jakarta Sans`, `Cairo`, `IBM Plex Sans Arabic`)

- [ ] **Step 1: Verify Angular 22 workspace generation and dependencies**
- [ ] **Step 2: Configure design tokens, CSS variables, and global reset with CSS Logical Properties**
- [ ] **Step 3: Transfer brand assets to Angular assets directory and configure favicon**
- [ ] **Step 4: Run initial `ng build` to confirm clean compilation**

### Task 2: Centralized Typed Content & Reactive Language Service
**Files:**
- Create: `src/app/core/models/defi-content.model.ts`
- Create: `src/app/core/services/language.service.ts`
- Create: `src/app/core/data/defi-content.data.ts`
- Interfaces:
  - `LanguageService`: `currentLang: Signal<'en' | 'ar'>`, `dir: Signal<'ltr' | 'rtl'>`, `toggleLanguage()`, `setLanguage(lang: 'en' | 'ar')`
  - `DefiContent`: Strongly-typed interface containing verified facts, translations, navigation items, metrics, and diagram descriptions.

- [ ] **Step 1: Define `defi-content.model.ts` with strict types for all verified facts and bilingual content**
- [ ] **Step 2: Implement `defi-content.data.ts` with verified English and Arabic copy**
- [ ] **Step 3: Implement `language.service.ts` using Angular Signals and localStorage persistence**
- [ ] **Step 4: Verify language toggle switches document direction (`document.documentElement.dir`) and emits reactive updates**

### Task 3: Shared Navigation Header & Corporate Footer Components
**Files:**
- Create: `src/app/shared/components/header/header.component.ts`
- Create: `src/app/shared/components/header/header.component.html`
- Create: `src/app/shared/components/header/header.component.css`
- Create: `src/app/shared/components/footer/footer.component.ts`
- Create: `src/app/shared/components/footer/footer.component.html`
- Create: `src/app/shared/components/footer/footer.component.css`
- Interfaces:
  - `HeaderComponent`: Responsive desktop nav, active route indicators, accessible mobile drawer with keyboard trap and ARIA attributes, language toggle button, official decree notice banner.
  - `FooterComponent`: Institutional branding, decree reference, Smart Village headquarters, verified contact, sitemap links, copyright.

- [ ] **Step 1: Implement `HeaderComponent` with decree announcement bar, brand logo, navigation links, and mobile drawer**
- [ ] **Step 2: Implement `FooterComponent` with verified organizational credentials, direct links, and bilingual footer navigation**
- [ ] **Step 3: Test keyboard navigation (Tab/Esc), focus indicators, and mobile drawer toggle behavior**

### Task 4: Interactive SVG Diagram Components
**Files:**
- Create: `src/app/shared/components/diagram-ecosystem/diagram-ecosystem.component.ts` (Diagram A)
- Create: `src/app/shared/components/diagram-operating-model/diagram-operating-model.component.ts` (Diagram B)
- Create: `src/app/shared/components/diagram-capabilities/diagram-capabilities.component.ts` (Diagram C)
- Interfaces:
  - `DiagramEcosystemComponent`: Responsive SVG showing DEFI bridging Citizens/Businesses, Government Entities, Integration Core, Registries, and Sovereign Cloud. Interactive node inspection, pulse animations, text alternatives.
  - `DiagramOperatingModelComponent`: 5-step transformation journey (Assess & Align, Architect & Govern, Build & Interoperate, Deploy & Operate, Elevate & Scale).
  - `DiagramCapabilitiesComponent`: 6 verified capability pillars with interactive detail drawer and deliverables.

- [ ] **Step 1: Implement `DiagramEcosystemComponent` with clean responsive SVG vectors, interactive node highlights, and ARIA descriptions**
- [ ] **Step 2: Implement `DiagramOperatingModelComponent` with step progression, responsive layout, and accessible labels**
- [ ] **Step 3: Implement `DiagramCapabilitiesComponent` with dynamic pillar selection and verified outcome details**
- [ ] **Step 4: Verify reduced-motion queries disable pulse/flow animations**

### Task 5: Phase A — Homepage Refinement & Visual Storytelling
**Files:**
- Create: `src/app/features/home/home.component.ts`
- Create: `src/app/features/home/home.component.html`
- Create: `src/app/features/home/home.component.css`
- Interfaces:
  - Hero section with clear positioning, verified metrics (50+ clients, 200+ consultants, 25+ government entities, 200+ services), primary/secondary CTAs.
  - Embedded Diagram A (Ecosystem) with interactive architectural inspection.
  - Institutional Authority Section highlighting Prime Minister Decree No. 132/2020.
  - Embedded Diagram C (6 Capability Pillars).
  - Embedded Diagram B (Operating Model Transformation Journey).
  - Verified Impact & Partners Section (MOE, IDSC, national achievements).
  - Executive Contact & Consultation CTA.

- [ ] **Step 1: Assemble and refine `HomeComponent` template with editorial visual rhythm, high contrast, and refined typography**
- [ ] **Step 2: Connect `LanguageService` for real-time EN/AR text switching**
- [ ] **Step 3: Inspect homepage in browser across desktop (1440px) and mobile (390px) viewports**
- [ ] **Step 4: Refine spacing, typography, and diagram interaction responsiveness**

### Task 6: Phase B — About DEFI Page (`/about`)
**Files:**
- Create: `src/app/features/about/about.component.ts`
- Create: `src/app/features/about/about.component.html`
- Create: `src/app/features/about/about.component.css`
- Content:
  - Historical mandate under Prime Minister Decree No. 132/2020.
  - Strategic role supporting MCIT & ITIDA national modernization policies.
  - Corporate Values: Innovation, Excellence, Collaboration, Integrity.
  - Governance and institutional alignment diagram.

- [ ] **Step 1: Implement `AboutComponent` with verified mandate narrative, decree details, and institutional purpose**
- [ ] **Step 2: Add values grid and governance diagram**
- [ ] **Step 3: Connect bilingual copy and test route navigation**

### Task 7: Capabilities & Services Page (`/capabilities`)
**Files:**
- Create: `src/app/features/capabilities/capabilities.component.ts`
- Create: `src/app/features/capabilities/capabilities.component.html`
- Create: `src/app/features/capabilities/capabilities.component.css`
- Content:
  - Detailed architectural breakdown of the 6 verified pillars:
    1. Business Architecture
    2. Solution Architecture
    3. IT Operations & Continuity
    4. Citizen Experience (CX)
    5. Project Management
    6. Quality Governance
  - Key deliverables and measurable institutional outcomes per pillar.
  - Enterprise architecture capability visual diagram.

- [ ] **Step 1: Implement `CapabilitiesComponent` with deep-dive tabs or accordion architecture**
- [ ] **Step 2: Integrate deliverable artifacts and enterprise governance details**
- [ ] **Step 3: Test responsiveness and bilingual translation**

### Task 8: Sectors & Solutions Page (`/sectors`)
**Files:**
- Create: `src/app/features/sectors/sectors.component.ts`
- Create: `src/app/features/sectors/sectors.component.html`
- Create: `src/app/features/sectors/sectors.component.css`
- Content:
  - Focus areas aligned with DEFI's verified public-sector scope:
    - Government & Public Administration (Cross-ministerial integration & portals)
    - Education & Human Capital (Ministry of Education & Technical Education collaboration)
    - Decision Support Systems (Cabinet IDSC information infrastructure)
    - National Digital Platforms & Registries
  - Visual sector integration matrix.

- [ ] **Step 1: Implement `SectorsComponent` highlighting verified public sectors**
- [ ] **Step 2: Add architectural use-case diagrams explaining public value delivery**
- [ ] **Step 3: Validate responsive grid and RTL alignment**

### Task 9: Impact & Partners Page (`/impact`)
**Files:**
- Create: `src/app/features/impact/impact.component.ts`
- Create: `src/app/features/impact/impact.component.html`
- Create: `src/app/features/impact/impact.component.css`
- Content:
  - Verified quantitative impact metrics: 50+ clients, 200+ expert consultants, 25+ government entities, 200+ modernized digital services.
  - Verified partner institutions: Ministry of Education and Technical Education (MOE), The Egyptian Cabinet Information and Decision Support Center (IDSC).
  - Honest, verified transformation outcomes without fabricated testimonials or case studies.

- [ ] **Step 1: Implement `ImpactComponent` with animated counter metrics and verified institutional credentials**
- [ ] **Step 2: Highlight confirmed ministerial partners with official context**
- [ ] **Step 3: Test accessibility and contrast**

### Task 10: News & Announcements Page (`/news`)
**Files:**
- Create: `src/app/features/news/news.component.ts`
- Create: `src/app/features/news/news.component.html`
- Create: `src/app/features/news/news.component.css`
- Content:
  - Verified official updates: Decree 132/2020 foundation, national transformation initiatives, MCIT/ITIDA collaborative frameworks, expansion in Smart Village.
  - Filter by category (Institutional, Transformation, Announcements).

- [ ] **Step 1: Implement `NewsComponent` with structured news cards, publication dates, and tags**
- [ ] **Step 2: Add bilingual article summaries and verified references**
- [ ] **Step 3: Test card grid layout and responsiveness**

### Task 11: Careers Page (`/careers`)
**Files:**
- Create: `src/app/features/careers/careers.component.ts`
- Create: `src/app/features/careers/careers.component.html`
- Create: `src/app/features/careers/careers.component.css`
- Content:
  - Working at DEFI: National-impact engineering, mission-driven public technology, culture of excellence.
  - Key engineering domains (Enterprise Architecture, Cloud Infrastructure, Security & Compliance, CX Design).
  - Direct recruitment contact (`info@defi.com.eg`) and Smart Village office details.

- [ ] **Step 1: Implement `CareersComponent` with talent value proposition and engineering domains**
- [ ] **Step 2: Include recruitment application guidance and direct email link**
- [ ] **Step 3: Test mobile readability and RTL layout**

### Task 12: Contact & Inquiry Page (`/contact`)
**Files:**
- Create: `src/app/features/contact/contact.component.ts`
- Create: `src/app/features/contact/contact.component.html`
- Create: `src/app/features/contact/contact.component.css`
- Content:
  - Verified Headquarters: Smart Village, Building B145, Cairo-Alexandria Desert Road, Giza, Egypt.
  - Verified Official Email: `info@defi.com.eg`.
  - Institutional Inquiry Form with fields: Full Name, Organization / Ministry, Official Email, Subject, Message, Privacy Acceptance.
  - Form validation, accessible error announcements, and success feedback state.

- [ ] **Step 1: Implement `ContactComponent` with verified address card and interactive inquiry form**
- [ ] **Step 2: Add client-side validation, accessible ARIA alert messages, and submit simulation**
- [ ] **Step 3: Test keyboard focus, form submission feedback, and bilingual labels**

### Task 13: 404 Not Found Page & Angular Routing Configuration
**Files:**
- Create: `src/app/features/not-found/not-found.component.ts`
- Create: `src/app/app.routes.ts`
- Create: `src/app/app.component.ts`, `src/app/app.component.html`
- Content:
  - Angular Router configuration with lazy loading for all feature components.
  - Considerate 404 Not Found page with helpful pathways back to Home, Capabilities, and Contact.
  - Dynamic page title and meta description updates on route change (`Title`, `Meta` services).

- [ ] **Step 1: Configure `app.routes.ts` with all 8 routes + 404 wildcard route**
- [ ] **Step 2: Implement dynamic SEO title/description updater service**
- [ ] **Step 3: Implement `NotFoundComponent` with clean institutional styling and bilingual text**
- [ ] **Step 4: Verify direct navigation to all routes and 404 handling**

### Task 14: Multi-Viewport Quality Gates, Browser Testing & Polish Pass
**Files:**
- All application files
- Test Scripts / Browser Automation: Viewport captures at 1440x900, 1024x768, 768x1024, 390x844, 360x800
- SEO & Performance: Lighthouse / DevTools audit, sitemap, Open Graph tags

- [ ] **Step 1: Execute `ng build` for production and verify zero build errors or warnings**
- [ ] **Step 2: Run local server and inspect desktop (1440x900) layout in real browser**
- [ ] **Step 3: Inspect tablet (1024x768, 768x1024) and mobile (390x844, 360x800) layouts**
- [ ] **Step 4: Test Arabic RTL mode across all pages and verify diagram mirroring and typography**
- [ ] **Step 5: Verify SEO meta tags, Open Graph images, and accessibility focus management**
- [ ] **Step 6: Document results, screenshots, and verified deliverables in completion report**
