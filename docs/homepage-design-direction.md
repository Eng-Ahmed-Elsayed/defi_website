# DEFI Corporate Website — Homepage Design Direction & Token Specification

**Entity:** Digital Egypt for Investment (DEFI) — شركة مصر الرقمية للاستثمار  
**Institutional Mandate:** Established under Prime Minister Decree No. 132/2020  
**Target Brand Character:** Confident, executive, institutional, architectural, trustworthy, bilingual (EN LTR / AR RTL).  
**Strict Anti-Persona:** Not a dark cybersecurity SOC monitoring console, tactical military HUD, or an endless wall of glowing dark navy boxes.

---

## 1. Page-Wide Alternating Surface Rhythm

To eliminate the visual fatigue of a 100% dark navy dashboard, the homepage transitions deliberately between authoritative institutional navy and bright, high-trust editorial stone/white surfaces.

| Section # | Section Name & Purpose | Visual Surface Role | Background Token | Primary Text | Secondary Text | Card/Panel Surface | Border / Hairline |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **00 & 01** | **Header & Hero** (Mandate, Diagram A Ecosystem) | Authoritative Institutional Opening | `--surface-hero: #071120` | `#FFFFFF` | `#94A3B8` | `--surface-hero-card: #0E1B30` | `rgba(255,255,255,0.12)` |
| **02** | **Legal Authority & Mandate** (Decree 132/2020) | High-Trust Editorial Alabaster | `--surface-light-primary: #F8FAFC` | `#0F172A` | `#475569` | `#FFFFFF` | `#E2E8F0` |
| **03** | **Core Capability Pillars** (6 Pillars + Diagram C) | Crisp Modern White / Architectural | `--surface-light-secondary: #FFFFFF` | `#0F172A` | `#475569` | `#F8FAFC` stage container | `#E2E8F0` |
| **04** | **Transformation Methodology** (5-Phase Blueprint, Diagram B) | Soft Consulting Stone / Slate | `--surface-light-muted: #F1F5F9` | `#0F172A` | `#475569` | `#FFFFFF` blueprint card | `#E2E8F0` |
| **05** | **National Interoperability & Grid** (Diagram D + Regional Map) | Deep Sovereign Infrastructure Canvas | `--surface-dark-feature: #0A1628` | `#FFFFFF` | `#94A3B8` | `#11223B` | `rgba(255,255,255,0.1)` |
| **06** | **Institutional Impact & Sectors** (MOE, IDSC, MCIT, Health, Finance) | Editorial Outcomes Grid | `--surface-light-primary: #F8FAFC` | `#0F172A` | `#475569` | `#FFFFFF` | `#E2E8F0` |
| **07** | **Careers & Inquiry** (Executive Careers Banner + Inquiry Form) | Executive Callout + Crisp Structured Form | Banner: `#071120`<br>Form: `#FFFFFF` | Form: `#0F172A`<br>Banner: `#FFFFFF` | Form: `#475569`<br>Banner: `#94A3B8` | Form Card: `#F8FAFC` | Form: `#E2E8F0` |
| **08** | **Institutional Footer** | Sovereign Foundation Base | `--surface-footer: #050C17` | `#FFFFFF` | `#64748B` | N/A | `rgba(255,255,255,0.08)` |

---

## 2. Semantic Color & Design Tokens

### Core Color Palette
- **Deep Sovereign Navy:** `#071120` (Hero, Careers Banner, Footer)
- **Deep Feature Slate:** `#0A1628` (Interoperability & National Grid)
- **Warm Alabaster / Light Primary:** `#F8FAFC`
- **Architectural Stone / Light Muted:** `#F1F5F9`
- **Pure Surface White:** `#FFFFFF`
- **Digital Blue (Primary Brand Accent):** `#1E5FD8` (Hover: `#174BB0`)
- **Egypt Institutional Gold:** `#C5A059` (Hover/Accent: `#DFB76C`)
- **Teal Verification Accent:** `#0D9488`
- **Dark Text Primary:** `#0F172A`
- **Dark Text Secondary (Muted):** `#475569`
- **Dark Text Tertiary (Light):** `#64748B`
- **Light Border Hairline:** `#E2E8F0`
- **Light Border Hover:** `#CBD5E1`
- **Dark Border Hairline:** `rgba(255, 255, 255, 0.1)`

---

## 3. Typography Scale & Fluid Hierarchy

- **H1 (Hero Headline):** `clamp(2.25rem, 4vw + 1rem, 3.75rem)` | line-height `1.15` | tracking `-0.02em`
- **H2 (Section Titles):** `clamp(1.75rem, 2.5vw + 0.75rem, 2.5rem)` | line-height `1.22` | tracking `-0.015em`
- **H3 (Card/Phase Titles):** `clamp(1.15rem, 1.5vw + 0.5rem, 1.35rem)` | line-height `1.3`
- **Body Large / Lead:** `clamp(1.05rem, 1.2vw + 0.2rem, 1.2rem)` | line-height `1.65` | max-width `68ch`
- **Body Regular:** `1rem` | line-height `1.6`
- **Caption / Badge:** `0.8125rem` (13px) | font-weight `600` | uppercase in EN; standard in AR.

### Arabic Typography Rules (`[dir="rtl"]`)
- **Font Stack:** `'Cairo'`, `'IBM Plex Sans Arabic'`, -apple-system, sans-serif
- **Line Height:** Increased to `1.7`–`1.8` for Arabic script legibility
- **Letter Spacing:** Strictly `0` (`letter-spacing: 0 !important;`) on all badges, pills, and headlines. Never apply positive tracking to connected Arabic script.
- **Directional Mirroring:** Arrows flip (`→` in LTR becomes `←` in RTL). Flow indicators flow right-to-left.

---

## 4. Spacing, Layout & Card Hierarchy Rules

- **Section Vertical Padding:**
  - Desktop: `clamp(4.5rem, 6vw, 6.5rem)`
  - Tablet: `4rem`
  - Mobile: `3.25rem`
  - **Zero Unintentional Voids:** Eliminate excessive margins between consecutive sections.
- **Max Container Width:** `1240px` with `clamp(1.25rem, 3vw, 2.5rem)` horizontal inline padding.
- **Card Nesting Ceiling:** Maximum 2 surface layers (Section Background → Primary Surface Card). Replace sub-boxed elements with clean typographic hierarchy, hairline dividers (`#E2E8F0`), or subtle background tints.
- **Anti-Truncation Rule:** Never apply `text-overflow: ellipsis` or `nowrap` to institutional card titles or headlines on any viewport. Text must wrap naturally with proper line-height.

---

## 5. Architectural Diagram Polish & Honesty Guardrails

1. **Diagram A (Connected Digital Ecosystem):**
   - Must fit within right column of 12-column grid at `1440px` and `1024px` with zero right-side clipping.
   - Reflow cleanly on mobile into an adaptive vertical/stacked card flow.
2. **Diagram B (5-Phase Public-Sector Blueprint):**
   - Eliminate redundant duplicate `01–05` circle timeline inside detail box.
   - The 5 phase cards act as the primary stepper selector. Detail panel below displays blueprint specifications, stakeholders, governance gates, and deliverables cleanly.
3. **Diagram C (Capability Architecture Matrix):**
   - Clean architectural tabs on light surface; generous schematic proportions.
4. **Diagram D (National Interoperability Flow):**
   - Mobile: display all 5 stages (`01` to `05`) cleanly so the full pipeline context is visible and accessible.
5. **Diagram E / National Digital Grid:**
   - Remove tactical radar styling, fake military coordinate watermarks (`31°12'N [MEDITERRANEAN SECTOR]`), and fake live status lights.
   - Present honestly as an **Illustrative Sovereign Infrastructure & Inter-Agency Coordination Map**.
