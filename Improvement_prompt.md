# ROLE & MISSION
You are acting simultaneously as a Principal Product Design Director, Enterprise UX Auditor, Senior Angular Architect, and QA Automation Engineer.

Your mission is to inspect the actual repository powering the **Digital Egypt for Investment (DEFI)** corporate website (`https://defi.com.eg/`), audit the running Angular application against the visual evidence and architectural constraints below, re-architect the homepage visual system and components to achieve an executive, trustworthy, bilingual (English LTR / Arabic RTL) institutional standard, and verify the result across **at least three (3) and up to five (5) rigorous Audit -> Plan -> Implement -> Verify -> Independent Re-Audit cycles**.

Do NOT stop after writing a plan or completing a single pass. You must execute the code changes, run the builds/tests, capture real browser screenshots across viewports and languages, perform independent re-audits, and produce all required documentation and visual artifacts before declaring completion.

---

# 1. PROJECT CONTEXT & BRAND POSITIONING
- **Company:** Digital Egypt for Investment (DEFI), an Egyptian enterprise/public-sector technology company serving as a strategic and technical execution partner within Egypt's digital transformation ecosystem (associated with MCIT and ITIDA under Prime Minister Decree No. 132/2020).
- **Primary Audience:** Ministers, government and institutional stakeholders, enterprise technology partners, and prospective senior talent evaluating DEFI's credibility and execution capabilities.
- **Target Brand Character:** Confident, premium, institutional, architectural, clear, and human.
- **Strict Anti-Persona (What to Eliminate):** The website must **NOT** look like a dark cybersecurity SOC monitoring console, a tactical military HUD, a SaaS admin dashboard, or an endless wall of glowing dark navy cards.
- **Scope:** **Homepage quality first** (including shared Header, Mobile Drawer, Footer, Design Tokens, and Homepage Sections/Diagrams). Do not redesign interior pages unless shared layout, token, or routing fixes are required to keep the app compiling and coherent.

## Factual Integrity & Content Guardrails
- Preserve verified institutional facts already established in approved project content (such as founding under Prime Minister Decree No. 132/2020, relationship with MCIT and ITIDA, headquarters at Smart Village, and core architecture/operational pillars).
- **Remove all fake live telemetry and operational simulation:** Eliminate labels that claim the website itself is a live government command console or live data bus (e.g., remove `"Live Sovereign Bus: Standby / Operational"`, `"National Command Center"`, fake military GPS coordinates like `31°12'N - 29°55'E [MEDITERRANEAN SECTOR]`, and pulsing green `"ACTIVE"` / `"READY"` system telemetry lights). Reframe interactive diagrams honestly as **Interactive Architectural Blueprints** or **Illustrative Capability Models** (e.g., `"Explore Interoperability Flow"` instead of `"Live Sovereign Bus"`).
- Do not invent statistics, unverified SLAs, client logos, awards, certifications, or testimonials. Flag any uncertain factual claims in `docs/homepage-ui-audit.md`.

---

# 2. VISUAL EVIDENCE FROM CURRENT IMPLEMENTATION SCREENSHOTS
*(Note: If the user has attached the reference screenshots to this prompt, inspect them directly alongside your live browser captures. Even without attachments, the exact defects observed in the current screenshots are documented below and must be fixed.)*

1. **Monotonous Dark-Navy Dashboard Overload (All Sections):**
   - Currently, 100% of the homepage—from Header and Hero down through Mandate, Pillars, 5-Phase Lifecycle, Diagram D, Sectors, National Grid, Careers, Contact Form, and Footer—uses a continuous dark navy background (`#060D1A`–`#0F1B33`) with glowing cyan/blue 1px borders and dark nested boxes. There is zero light/dark editorial rhythm.
2. **Hero Section Desktop Horizontal Clipping & Overflow (`1440px` / Desktop view):**
   - In the Hero section (`"Architecting the Digital Foundations for Egypt's Public Sector"`), the right column containing **Diagram A (`"The Connected National Digital Ecosystem"`)** overflows the right edge of the container/viewport. The top-right button (`"Simulate..."`), the third tab (`"Sovereign..."`), the right-side nodes (`"Government Entities & Ministries"`, `"Secure Cloud & Infrastructure"`), and the bottom status pill are visibly clipped off on the right.
3. **Hero Section Mobile Text Truncation (`390x844` and `360x800` viewports):**
   - At the bottom of the mobile Hero, the 2×2 grid of institutional highlights truncates critical text with ellipses (`text-overflow: ellipsis` / `nowrap`), producing unreadable labels:
     - `"Decree 132... / Official Cabin..."` (and `"Decree 1... / Official Ca..."` on 360px)
     - `"Public Enter... / MCIT & ITIDA P..."`
     - `"Interopera... / National Data ..."`
     - `"Sovereign ... / Data Residenc..."`
   - **Rule:** Never truncate institutional headlines, card titles, or key value propositions with ellipses (`...`) on any viewport. Let text wrap naturally with clean line-height and adequate card padding.
4. **Mobile Header & Logo Cramping (`390px` and `360px`):**
   - The multi-line geometric DEFI logo on the left is rendered too small with inadequate vertical/horizontal padding, and its tiny subtitle text becomes illegible on dark backgrounds. Ensure the official logo has proper sizing, clear space, and high contrast, and is never squeezed or clipped inside decorative pills.
5. **Mobile Full-Page Vertical Voids & Horizontal Button Clipping:**
   - Full-page mobile captures show huge, unintentional empty dark vertical gaps between sections (especially beneath `"Explore Full Mandate & Governance ->"` and between the Sectors section and National Grid).
   - Several full-width or right-aligned CTA buttons in the lower half of the mobile page (`"View Verified National Milestones & Impact..."`, `"Explore All Sovereign Sectors & Case Studies..."`) overflow off the right edge of the mobile viewport.
6. **Excessive "Box-in-Box-in-Box" Nesting & Redundant Diagram Chrome:**
   - **Mandate Section (`"Empowering Egypt's Public Sector Under Decree No. 132/2020"`):** Left column has two bordered dark cards; right column (`"Official Mandate & Operating Scope"`) is a heavy bordered dark card containing three text items and four boxed `"CORPORATE VALUES"` pills. This section is pure editorial corporate storytelling and should be presented on a clean, high-contrast light/warm-stone institutional surface with strong typographic hierarchy—not dark dashboard boxes.
   - **Capability Pillars (`Diagram C - Enterprise Solution Architecture`):** Uses 6 boxed top tabs, a large boxed outer container, two nested boxed sub-panels on the left (`"STRATEGIC INSTITUTIONAL IMPACT"` and `"KEY VERIFIED DELIVERABLES"`), and a large dark inner box on the right where a small 4-node schematic floats in empty space.
   - **5-Phase Blueprint (`Diagram B - Assess & Align` to `Elevate & Evolve`):** Renders 5 large phase cards (`01` to `05`) in a top row, and immediately below them renders a giant bordered box containing a redundant horizontal `01 — 02 — 03 — 04 — 05` circle timeline with huge empty dark padding above and below the circles. Consolidate this so the 5 phase cards *are* the interactive stepper, and the detail panel below immediately displays the selected phase's architectural blueprint, stakeholders, governance standard, and deliverables without duplicating the 1–5 circles.
   - **Interoperability Engine (`Diagram D`):** Deeply nested dark containers with small uppercase labels, cramped key-value boxes, and a mobile layout where the 5-step flow context is lost.
   - **National Digital Grid (`Diagram A / Regional Map`):** Uses tactical radar styling, coordinate watermarks, and boxed 2×2 metric cards next to the Egypt node map.

---

# 3. REPOSITORY INSPECTION, SKILLS & ARCHITECTURE CONSTRAINTS
Before writing any application code, you must establish ground truth:

1. **Check & Invoke Installed Frontend/Design Skills:**
   - Inspect the environment and repository for installed agent skills, specifically checking for `using-superpowers` (from `https://github.com/obra/superpowers`) and frontend/design skills such as `modern-web-guidance`, `design-taste-frontend`, `high-end-visual-design`, `impeccable`, or equivalent.
   - If missing, check if official installation is supported in this environment and install only via a supported method. If available, invoke the `using-superpowers` and relevant design workflows before implementation. Do not claim a skill was installed or used unless it actually was; document the exact status in `docs/homepage-refinement-log.md`.
2. **Establish Repository Truth & Protect Git State:**
   - Inspect `package.json`, `angular.json`, `tsconfig.json`, routing files, `src/`, and `scripts/` (including `scripts/verify-angular-app.js` if present).
   - Check `git status` and create a clean rollback point or feature branch (without discarding any uncommitted work).
   - Verify that **Angular** is the single source of truth powering the application build and dev server. Do NOT create standalone `.html` files or vanilla JS routers. Ensure any legacy static HTML/Vite leftovers are not mistaken for the active Angular app.
3. **Angular & UI Library Strategy:**
   - Check the current Angular and Node.js versions. Keep the existing stable Angular setup unless a safe, compatible minor update is warranted (document your decision).
   - Inspect existing styling dependencies (CSS variables, SCSS, Tailwind CSS, Angular CDK, etc.). Use **one coherent styling architecture** built on semantic CSS Custom Properties (design tokens) and clean Angular component styles. Do not install overlapping component frameworks or pile on `!important` overrides.

---

# 4. TARGET DESIGN SYSTEM & HOMEPAGE ARCHITECTURE

## A. Intentional Page-Wide Color & Surface Rhythm
Break the monotonous dark-navy wall by establishing a deliberate **Alternating Institutional Surface Rhythm** using semantic CSS custom properties:

1. **Header & Section 1 — Hero + Diagram A (Connected National Ecosystem):**
   - **Surface:** Deep Institutional Navy (`--surface-hero: #071120` with subtle architectural grid texture at low opacity, no floating random dots).
   - **Why Dark:** Creates an authoritative, high-contrast executive opening where the interactive National Ecosystem architecture diagram shines.
2. **Section 2 — Legal Authority & Mandate (`Decree No. 132/2020`):**
   - **Surface:** Warm Institutional Alabaster / Crisp Light Surface (`--surface-light-primary: #F8FAFC` or `#F4F6F9`, text `#0F172A`, muted text `#475569`, subtle warm gold/cobalt accents).
   - **Why Light:** Transitions immediately from the dark hero into an open, high-trust editorial layout appropriate for legal mandate, MCIT/ITIDA sponsorship, and corporate values. Replace dark dashboard boxes with clean editorial columns, crisphairline dividers (`#E2E8F0`), and elevated white surface cards (`#FFFFFF`) where needed.
3. **Section 3 — Core Capability Pillars + Diagram C (`6 Pillars Interactive Explorer`):**
   - **Surface:** Crisp White / Subtle Slate (`--surface-light-secondary: #FFFFFF` with `#F1F5F9` interactive stage container).
   - **Why Light:** Keeps capability reading effortless and scannable. The 6 pillar selector tabs become clean, high-contrast architectural tabs; the right-hand schematic (`Diagram C`) sits in a refined blueprint panel (either crisp light architectural blueprint or a purposefully framed high-contrast dark slate canvas `#0F172A` with generous internal proportions so it acts as a focal illustration, not an empty box).
4. **Section 4 — Public-Sector Transformation Blueprint (`Diagram B — 5-Phase Methodology`):**
   - **Surface:** Soft Architectural Stone / Slate (`--surface-light-muted: #F1F5F9`).
   - **Why Light/Muted:** Allows the 5-Phase progression (`01 Assess & Align` through `05 Elevate & Evolve`) to read like an executive consulting blueprint. Eliminate the redundant second `01–05` circle box; integrate the phase indicator, deliverables, stakeholders, and governance gate into one cohesive, compact interactive blueprint board.
5. **Section 5 — National Interoperability & Regional Infrastructure (`Diagram D: Interoperability Bus` + `National Digital Grid`):**
   - **Surface:** Deep Sovereign Slate/Navy (`--surface-dark-feature: #0A1628`).
   - **Why Dark:** Purposeful return to a dark architectural canvas specifically to showcase technical infrastructure (the 5-stage Interoperability Flow and the Egypt Multi-Governorate Regional Grid). Visually unify or clearly transition between Diagram D and the Regional Map so they feel like a cohesive **"National Infrastructure & Interoperability"** showcase rather than two repetitive dashboard widgets.
6. **Section 6 — Institutional Impact / Sectors in Focus (`MOE, IDSC, MCIT & ITIDA, Ministries`):**
   - **Surface:** Light Editorial Surface (`--surface-light-primary: #F8FAFC`).
   - **Why Light:** Returns to a bright, trustworthy editorial grid for reading ministry partner scopes and institutional outcomes.
7. **Section 7 — Careers (`"Be Part of Egypt's Digital Future"`) & Institutional Inquiry (Contact):**
   - **Surface:** Structured Light/Subtle Contrast for Inquiry Form (`#FFFFFF` / `#F8FAFC`) with an authoritative Executive Navy Banner for the Careers callout and Footer (`#050C17`).

## B. Typography, Spacing & Card Hierarchy Tokens
- **Typography Scale:** Use `clamp()` fluid sizing for `h1` (`clamp(2.25rem, 4vw + 1rem, 3.75rem)`, line-height `1.12`), `h2` (`clamp(1.75rem, 2.5vw + 0.75rem, 2.5rem)`, line-height `1.2`), `h3` (`1.25rem–1.5rem`), and body (`1rem–1.125rem`, line-height `1.65`, max line width `65ch`).
- **Arabic Typography (`[dir="rtl"]`):** Use a high-legibility contemporary Arabic geometric/humanist font stack (e.g., `'Cairo'`, `'IBM Plex Sans Arabic'`, or `'Tajawal'`, verify what is loaded in `index.html`/assets and optimize it). Adjust Arabic line-height (`1.7–1.8`) and letter-spacing (`0` — never apply positive English `letter-spacing` to Arabic uppercase-style badges!).
- **Eliminate Over-Nesting:** Maximum 2 surface layers per section (Section Background -> Primary Content Card/Panel). Replace nested sub-boxes inside cards with clean typographic hierarchy, top borders, or subtle background tints.
- **Spacing Scale:** Enforce consistent vertical section padding (`clamp(4rem, 7vw, 7rem)` on desktop; `3.5rem` on mobile—zero unexplained 200px blank gaps) and consistent container max-width (`1280px` or `1320px` with `clamp(1.25rem, 4vw, 3rem)` horizontal padding).

## C. Header, Hero & Navigation Requirements
- **Header:** Sticky/fixed institutional header with clear backdrop blur or solid surface, generous logo sizing (ensure DEFI mark is crisp and legible), well-spaced navigation links with visible hover/focus/active states, prominent Language Toggle (`عربي` / `English`), and an accessible mobile drawer (`aria-expanded`, `Escape` key support, focus management, no viewport overflow).
- **Hero Layout:**
  - Desktop (`1440px` & `1024px`): Balanced 12-column grid (e.g., 6 columns left for copy + CTAs + 4 institutional pillars; 6 columns right for Diagram A). **Fix the horizontal overflow on Diagram A** so all tabs, nodes, connectors, and buttons fit comfortably within the right column at both `1440px` and `1024px`.
  - Mobile (`390px` & `360px`): Full-bleed responsive stack. **Fix the 4 institutional highlight cards** (`Decree 132/2020`, `Public Enterprise`, `Interoperability`, `Sovereign Cloud`) so all titles and subtitles wrap cleanly without `...` truncation.

## D. Diagrams (A, B, C, D & National Grid) & Motion Rules
- **Diagram Readability:** All diagram labels must be real DOM/SVG text (accessible, translatable between EN and AR, min `12px–13px` font size, WCAG AA contrast).
- **Mobile Diagram Adaptation:** On `390px` and `360px`, diagrams must deliberately reflow into vertical steppers, swipeable/tabbed views, or simplified vertical schematics—never shrink a wide desktop diagram into unreadable micro-text or clip nodes off-screen.
- **Diagram D Mobile Fix:** Ensure all 5 stages (`01` through `05`) are visible and selectable on mobile (e.g., via a compact horizontal step bar or vertical accordion/stepper) so users understand the full 5-stage pipeline, not just Stage 01 in isolation.
- **Restrained Motion:**
  - Replace autonomous, continuous, or distracting animations with purposeful state transitions (`200ms–350ms cubic-bezier(0.22, 1, 0.36, 1)`).
  - Interactive diagram step progressions (`"Explore Flow"` / `"Step Through Lifecycle"`) must be user-initiated or calm, clearly pauseable, and strictly honor `@media (prefers-reduced-motion: reduce)`.

## E. Genuine Bilingual Arabic RTL Support
- Switching to Arabic (`ar`) must set `dir="rtl"` and `lang="ar"` on the document/app root.
- Verify that flex/grid layouts, CSS logical properties (`margin-inline`, `padding-inline`, `inset-inline`, `border-inline-start`), directional arrows (`->` must flip to `<-` in RTL), diagram flow directions (Step 01 -> 05 flows Right-to-Left in Arabic), and mobile drawer animations mirror properly.
- Ensure zero `letter-spacing` is applied to Arabic text badges (`SOVEREIGN INTEGRATION BUS`, `MANDATE 132/2020`, etc.) so Arabic characters remain properly connected and legible.

---

# 5. MANDATORY ITERATIVE WORKFLOW (MINIMUM 3 CYCLES, MAX 5 CYCLES)
You are strictly forbidden from making a single pass and declaring completion. You must execute **at least three (3) complete improvement cycles** (and up to 5 if high/medium issues remain).

Every single cycle **MUST** follow these 5 steps in order:

### Step 1 — Capture & Visual/Code Audit
1. Start the real Angular application and run headless browser screenshot capture across **all 5 required viewports** in **both English (LTR) and Arabic (RTL)**:
   - `1440x900` (Desktop)
   - `1024x768` (Tablet Landscape)
   - `768x1024` (Tablet Portrait)
   - `390x844` (Mobile)
   - `360x800` (Compact Mobile)
   *(Capture both above-the-fold and full-page/section screenshots, saving them to `artifacts/homepage-audit/cycle-N/`).*
2. Inspect the captured screenshots visually (using your multimodal vision capabilities) alongside the Angular component templates and styles.
3. Log a prioritized list of concrete defects in `docs/homepage-ui-audit.md` with:
   - Defect ID, Severity (`Critical` / `High` / `Medium` / `Low`), Affected Section/Component, Viewport(s) & Language, Screenshot path evidence, Root Cause in code, and Target Fix.

### Step 2 — Implementation Plan for the Cycle
1. Record the cycle's implementation plan in `docs/homepage-refinement-log.md` before editing code.
2. Prioritize structural, design-token, surface-rhythm, overflow, truncation, diagram, and RTL defects before cosmetic polish.

### Step 3 — Implement Root-Cause Fixes in Angular
1. Refactor design tokens, shared styles, and Angular components cleanly.
2. Recommended focus across your minimum 3 cycles:
   - **Cycle 1 (Foundation, Surface Rhythm, Hero/Header & Critical Overflows):** Establish semantic design tokens and the light/dark alternating section rhythm; fix Header logo/nav; fix Hero Diagram A desktop right-edge clipping; fix Hero mobile 2×2 card text truncation (`...`); remove fake telemetry/SOC console framing; fix mobile full-page vertical voids and overflowing CTA buttons.
   - **Cycle 2 (Diagrams A, B, C, D, Regional Map & Card De-Nesting):** Eliminate box-in-box-in-box nesting across Mandate, Pillars, Blueprint, and Interoperability sections; remove the redundant second `01–05` circle box in Diagram B; improve Diagram C schematic proportions; ensure Diagram D shows all 5 stages clearly on mobile; refine Sectors, Careers, and Inquiry Form surfaces.
   - **Cycle 3 (Bilingual Arabic RTL Deep Polish, Motion Restraint, Accessibility & Micro-Rhythm):** Fix all Arabic RTL layout mirroring, Arabic typography/letter-spacing, directional icons/diagrams, keyboard focus rings, mobile drawer accessibility, `prefers-reduced-motion` compliance, and cross-viewport alignment at `1024px`, `768px`, and `360px`.
   - **Cycles 4–5 (If needed):** Resolve any remaining High or Medium defects flagged by the Independent Reviewer.

### Step 4 — Automated & Visual Verification
1. Run unit tests (`ng test --watch=false`), production build (`ng build --configuration production`), and end-to-end verification (`node scripts/verify-angular-app.js` or updated Playwright/Puppeteer audit script).
2. Re-capture all screenshots across the 5 viewports in EN and AR into `artifacts/homepage-audit/cycle-N/`.
3. Verify zero console errors, zero failed network requests, zero horizontal scroll (`document.documentElement.scrollWidth <= document.documentElement.clientWidth`), and zero truncated critical titles.

### Step 5 — Independent Re-Audit in a Fresh Context
1. **Do NOT grade your own homework in the same implementation mindset.**
2. If sub-agents or separate review contexts are available in Antigravity, spawn an **Independent UX & Code Reviewer Sub-Agent** that did not write the cycle's code. Pass it:
   - The original defect baseline and design requirements
   - `docs/homepage-design-direction.md`
   - The newly captured screenshots in `artifacts/homepage-audit/cycle-N/` (EN + AR, all 5 viewports)
   - The modified component files
   Instruct the reviewer to perform a skeptical, adversarial visual inspection of the new screenshots and code, looking specifically for clipped elements, awkward spacing, inconsistent surfaces, broken RTL, unreadable diagram text, or dashboard anti-patterns.
3. If a sub-agent tool is unavailable, write a complete handoff state into `docs/homepage-ui-audit.md` and `docs/homepage-refinement-log.md` and execute a dedicated, adversarial self-audit pass solely inspecting the newly rendered PNG screenshots pixel-by-pixel against every acceptance criterion.
4. Feed all findings from the Independent Review directly into the next cycle's Step 1 & Step 2.

---

# 6. COMPLETION GATE & REQUIRED DELIVERABLES
You may **NOT** stop until at least **3 full cycles** are completed AND all of the following gates pass:
- [ ] **Zero Critical or High-Severity Visual Issues** across `1440x900`, `1024x768`, `768x1024`, `390x844`, and `360x800` in both English LTR and Arabic RTL.
- [ ] **Intentional Light/Dark Surface Rhythm** is implemented across the homepage—no longer an all-dark SOC dashboard.
- [ ] **Zero Horizontal Overflow or Clipped Diagrams** (Hero Diagram A fits cleanly on desktop; mobile CTA buttons and diagrams fit cleanly within `360px` and `390px`).
- [ ] **Zero Ellipsis Truncation (`...`) on Key Labels** (Hero mobile capability cards display full text cleanly).
- [ ] **Diagrams A, B, C, D & Regional Grid** are clear, non-redundant (Diagram B duplicate 1–5 circles removed), responsive on mobile, and free of fake live telemetry claims.
- [ ] **Arabic RTL** has proper typography, zero positive letter-spacing on Arabic text, mirrored icons/diagrams, and full layout integrity.
- [ ] **Build & Tests Pass:** `ng build --configuration production`, unit tests, and E2E verification script pass with zero console/page errors.

## Required Repository Artifacts
Ensure these files are created/updated with real, evidence-backed content before finishing:
1. `docs/homepage-ui-audit.md` — Initial baseline audit from screenshots + live app, per-cycle defect logs with severity and screenshot paths, and final resolution status.
2. `docs/homepage-design-direction.md` — Documented design system: semantic color/surface tokens, section-by-section surface rhythm table, typography scale (EN/AR), spacing scale, card hierarchy rules, and motion guidelines.
3. `docs/homepage-refinement-log.md` — Chronological log of Cycle 1, Cycle 2, Cycle 3 (+ Cycles 4–5 if run): plan, exact files modified, build/test outputs, screenshot paths, independent reviewer critique, and how each critique was resolved.
4. `artifacts/homepage-audit/cycle-1/`, `cycle-2/`, `cycle-3/` (etc.) — Organized PNG screenshots covering all 5 viewports and both languages.
5. **Final Handoff Summary** in your closing response: list every modified file/component, architectural/library choices, exact build & test results, before/after visual improvements, any remaining low-severity limitations, and exact commands to run and verify the app locally.

Begin immediately with **Pre-Flight Inspection (Skills check, Git status, Repository & Angular verification)** and **Cycle 1 — Step 1 (Capture & Audit)**.