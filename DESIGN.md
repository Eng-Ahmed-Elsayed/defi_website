# DEFI Corporate Website — Design System & Architecture Specification (Angular 22)

**Organization:** Digital Egypt For Investment Co. (DEFI) — شركة مصر الرقمية للاستثمار  
**Legal Mandate:** Established by Prime Minister Decree No. 132/2020 under the auspices of the Ministry of Communications and Information Technology (MCIT) and Information Technology Industry Development Agency (ITIDA).  
**Headquarters:** Smart Village, Building B145, Cairo-Alexandria Desert Road, Giza, Egypt.  
**Official Email:** `info@defi.com.eg`  
**Current Tech Stack:** Angular 22.2.3 (Standalone Components, Signals, Lazy Routing, CSS Logical Properties).  

---

## 1. Verified Institutional Context & Facts

DEFI is Egypt’s dedicated public-sector digital transformation, enterprise architecture, and IT infrastructure execution partner. Its mission is to modernize government workflows, engineer robust interoperability frameworks, and guarantee 24/7 operational continuity for mission-critical national platforms.

### Confirmed Official Metrics:
- **50+ Enterprise Clients:** Ministries, public authorities, and national agencies.
- **200+ Expert Consultants:** Enterprise architects, solution engineers, and cybersecurity specialists.
- **25+ Government Entities Served:** Direct executive engagements across ministries.
- **200+ Digital Services Modernized:** Citizen-facing and internal administrative workflows automated.

### Verified Ministerial Partners:
1. **Ministry of Education and Technical Education (MOE):** Educational platforms, nation-wide digital examinations, and administrative infrastructure.
2. **The Egyptian Cabinet Information and Decision Support Center (IDSC):** Strategic decision-support platforms, national data synthesis, and socioeconomic indicator tracking.

### Core Corporate Values:
- **Innovation:** Modern architectural paradigms solving complex public sector challenges.
- **Excellence:** State-grade software engineering, rigorous testing, and 99.99% operational continuity.
- **Collaboration:** Hand-in-hand partnership with ministries as a unified national team.
- **Integrity:** Strict data sovereignty, transparency, and ethical public governance.

---

## 2. Complete Information Architecture & Route Map

The full public website is structured into 8 distinct, verified routes with full bilingual (English & Arabic RTL) support:

| Route | Page Title | Primary Institutional Role |
| :--- | :--- | :--- |
| `/` | **Home** | Strategic positioning, verified metrics, 3 interactive SVG diagrams, partner seals, executive CTA |
| `/about` | **About DEFI** | Prime Minister Decree No. 132/2020 foundation, MCIT/ITIDA auspices, institutional governance hierarchy |
| `/capabilities` | **Capabilities** | Deep-dive into the 6 verified capability pillars with deliverables, strategic impact, and lifecycle flow |
| `/sectors` | **Sectors & Solutions** | Public Admin, Education (MOE), Decision Support (IDSC), National Digital Infrastructure |
| `/impact` | **Impact & Partners** | Quantitative scale indicators, verified ministerial partner credentials, operational standards |
| `/news` | **News & Insights** | Verified institutional releases, decree execution updates, category filter pills |
| `/careers` | **Careers** | "Why DEFI" value proposition, 4 core engineering domains, Smart Village HQ, recruitment channel |
| `/contact` | **Contact** | Smart Village B145 headquarters, delegation notice, interactive validated consultation form |
| `**` | **404 Not Found** | Considered institutional error screen with recovery navigation back to Home and Capabilities |

---

## 3. Diagram-First Visual Storytelling Architecture

To communicate complex public-sector engineering without long walls of text, three interactive diagrams are integrated into the architecture:

### Diagram A — National Digital Ecosystem (النظام الرقمي الوطني المتكامل)
- **Component:** `app-diagram-ecosystem`
- **Concept:** Demonstrates how DEFI bridges Citizen Touchpoints (Digital Egypt, Apps), Government Ministries (MOE, IDSC), DEFI Enablement Backbone, National Registries, and Sovereign Cloud.
- **Interactivity:** Interactive SVG vector nodes with pulse animations and an accessible dynamic inspection drawer displaying the selected layer's mandate and scope.

### Diagram B — Institutional Operating Model Flow (النموذج التشغيلي المؤسسي)
- **Component:** `app-diagram-operating-model`
- **Concept:** A 5-phase delivery lifecycle that converts ministerial mandates into resilient digital platforms:
  1. *01 Assess & Align* (Discovery & Strategic Mandate)
  2. *02 Architect & Govern* (Enterprise Architecture & Standards)
  3. *03 Build & Interoperate* (Platform Modernization & API Integration)
  4. *04 Deploy & Operate* (Mission-Critical 24/7 Operations)
  5. *05 Elevate & Scale* (Citizen Experience & Continuous Optimization)

### Diagram C — The 6 Capability Pillars Matrix (مصفوفة القدرات المؤسسية)
- **Component:** `app-diagram-capabilities`
- **Concept:** 6 interconnected pillars replacing generic card lists:
  1. *Business Architecture* (Target operating models & process blueprints)
  2. *Solution Architecture* (Scalable platforms & cross-agency API standards)
  3. *IT Operations & Continuity* (24/7 monitoring & disaster recovery protocols)
  4. *Citizen Experience (CX)* (Universal design & multi-channel accessibility)
  5. *Project Management* (Governance frameworks & milestone tracking)
  6. *Quality Governance* (Automated QA & regulatory compliance audits)

---

## 4. Bilingual Architecture (English & Arabic RTL)

- Driven by a reactive, signal-based `LanguageService`.
- Native bidirectional document switching: `document.documentElement.dir = 'rtl' | 'ltr'` and `document.documentElement.lang = 'ar' | 'en'`.
- Direction-aware CSS Logical Properties (`margin-inline`, `padding-inline`, `border-inline`, `inset-inline-start/end`).
- Proper vector flipping for chevron arrows, navigation drawers, and flow diagram direction in Arabic.
- Premium typography:
  - English: `Plus Jakarta Sans`
  - Arabic: `Cairo` and `IBM Plex Sans Arabic`

---

## 5. Multi-Viewport & Accessibility Standards

- **Tested Viewports:**
  - Desktop: 1440 × 900
  - Laptop / Tablet Landscape: 1024 × 768
  - Tablet Portrait: 768 × 1024
  - Mobile: 390 × 844 and 360 × 800
- **Accessibility:**
  - Keyboard navigation with visible focus rings (`:focus-visible`).
  - Skip to main content link (`.skip-link`).
  - Screen reader semantic landmark regions (`<header>`, `<main>`, `<aside>`, `<nav>`, `<footer>`).
  - `@media (prefers-reduced-motion: reduce)` dampening all SVG pulse animations and transitions.
  - Zero unverified metrics, fake case studies, or dead navigation links.
