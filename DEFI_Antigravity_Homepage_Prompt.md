# DEFI Website Redesign — Antigravity Master Prompt (Stage 1: Homepage Only)

Act as a senior digital-experience designer, UX strategist, visual storyteller, and frontend engineer. Your task is to research, design, implement, and verify **Stage 1 only: the DEFI corporate website homepage** in the current workspace.

## 1. Business context and objective

Company: **Digital Egypt For Investment Co. (DEFI)**  
Official website: https://defi.com.eg/  
Official LinkedIn: https://www.linkedin.com/company/digital-egypt-for-investment-co/posts/

The existing website needs a substantial quality upgrade. The goal is a credible, modern, enterprise-grade, responsive corporate homepage that communicates trust, capability, and the company’s contribution to digital transformation. It must feel appropriate for an Egyptian organization working with public-sector and institutional stakeholders—not like a generic SaaS landing page, a venture-capital fund, a crypto company, or an admin dashboard.

Public company information describes DEFI as an Egyptian company established by ITIDA under Prime Minister Decree No. 132/2020, with a purpose of supporting MCIT and ITIDA in information infrastructure, IT, and digital-transformation services. Verify this and all other company facts against accessible official sources before publishing them. Treat LinkedIn hiring posts as clues for research, not automatic proof that a capability is an official service line.

Primary audiences:
- Government and public-sector decision-makers.
- Institutional and enterprise partners.
- Organizations evaluating digital transformation and technology capabilities.
- Technology professionals and potential employees.
- General visitors looking to understand DEFI quickly.

Primary homepage job: **make visitors understand who DEFI is, what it helps enable, and why it is a credible partner within seconds**. Keep copy concise and use meaningful visuals and diagrams to explain complex ideas without long text sections.

## 2. Scope guardrails — important

- Implement **only the homepage in this stage**. Do not build inner pages, a CMS, backend APIs, authentication, a dashboard, or new product functionality.
- First inspect the existing workspace, framework, routes, dependencies, assets, logo, styling system, and build/test commands. Preserve the existing stack and conventions unless you find a concrete reason they block the task.
- Do not replace or restructure the whole application just to simplify the redesign. Do not delete unrelated code or break existing routes.
- Reuse official brand assets where available. If the official logo or brand rules cannot be found, use a clean temporary text wordmark and clearly document the assumption; do not invent a new official logo.
- Navigation must not point to non-existent pages. Use meaningful homepage section anchors where appropriate. Preserve any already-working links and routes.
- Make sensible decisions independently. Do not stop for clarification unless a genuinely blocking issue or risky destructive action requires it. Record assumptions and unresolved content questions.

## 3. Research before designing

Use Antigravity’s browser/research capability if available. Inspect:

1. DEFI’s current website: https://defi.com.eg/ . Audit the information architecture, content, visual hierarchy, accessibility, responsiveness, trust signals, and friction. The existing website is a source for facts and content—not a visual template to copy. If it fails to load, record that limitation and continue with other sources.
2. DEFI’s official LinkedIn company profile and recent public posts: https://www.linkedin.com/company/digital-egypt-for-investment-co/posts/ . Identify verified terminology, official announcements, actual initiatives, and approved imagery where accessible.
3. Study these reference websites for selected patterns, not for copying entire designs:
   - Elm, Saudi Arabia: https://elm.sa/en/ — institutional digital services and public-sector positioning.
   - e& enterprise: https://www.eandenterprise.com/en/index.html — organizing a broad enterprise technology portfolio clearly.
   - Presight: https://www.presight.ai/about — presenting advanced technology through outcomes and applications.
   - Saudi Digital Government Authority: https://dga.gov.sa/ — bilingual institutional communication, navigation, and accessibility.
4. Read the relevant design and implementation skills that are **actually installed or available in this workspace**. Check for `impeccable`, `modern-web-guidance`, `frontend-design`, `apple-design`, and any existing project-specific UI/UX skills. Use the most relevant ones; do not spend effort running every skill. If a skill is absent, do not claim to have used it. Do not install tools or run unfamiliar commands without checking the environment and its policies first.

Use `modern-web-guidance` at the start of frontend implementation if it is available, following its documented search/retrieve process for relevant responsive-layout, accessibility, image-performance, and motion guidance. Use `impeccable` (or an equivalent design critique skill) to review and polish the UI after the first implementation. Use `apple-design` only where its principles are appropriate; do not force Apple-platform conventions onto a corporate website.

Before implementation, produce a concise internal research/design plan or artifact containing:
- Facts confirmed from official sources.
- Brand and content assumptions that need confirmation.
- Reference patterns worth adapting and patterns to avoid.
- Proposed homepage section order and diagram concepts.
- The reason for the selected visual direction.

Cite source URLs in a small research note or `DESIGN.md` so choices can be reviewed later. Do not allow research to become an excuse for an extended report instead of implementation.

## 4. Brand and visual direction

Aim for **confident, contemporary, precise, institutional, human, and technology-literate**. The website should convey national-scale digital enablement and enterprise credibility while remaining approachable and easy to navigate.

Visual characteristics:
- Strong editorial typography and deliberate hierarchy.
- Generous whitespace and a clear grid.
- Sophisticated, restrained color use; avoid excessive gradients, glassmorphism, glowing blobs, neon accents, and decoration without purpose.
- Authentic, contextual imagery where it contributes meaning. Prefer genuine company assets and verifiable images. Avoid generic handshake/team-meeting stock photos and fake government seals or official logos.
- Use motion sparingly to clarify transitions or relationships, not to distract.
- Keep it visually distinctive; do not produce a default AI-generated template with identical cards repeated in every section.

Starting palette proposal only (not an official DEFI brand specification): midnight blue `#102A43`, digital teal `#087E8B`, restrained warm accent `#C89B45`, cool surface `#F5F8FA`, and white. First inspect DEFI’s official logo and existing brand assets. If their established colors differ, prioritize the authentic brand and document the final choice in `DESIGN.md`.

Typography proposal: use an existing project font if suitable; otherwise choose a professional English font and an Arabic font with excellent readability (for example, Manrope plus IBM Plex Sans Arabic or Noto Sans Arabic). Avoid loading many weights or fonts unnecessarily.

The result should feel like a real corporate digital-transformation company, not a startup template and not a dense government portal.

## 5. Diagram-first visual storytelling — a key requirement

My manager specifically asked for **diagrams that make the website attractive and explain the company with less text**. Treat this as a core design requirement, not an optional flourish. Include at least **two meaningful, polished diagrams** on the homepage, ideally three if the content supports them. They must communicate a story, be visually integrated into the design system, and work on mobile.

Potential concepts—validate the labels against official information before presenting them as DEFI’s actual capabilities or methodology:

### Diagram A — Hero: a connected digital ecosystem
Create a clean, elegant visual showing how institutions, information infrastructure, data/platforms, and digital services connect. This should be the signature visual that draws visitors into the site. It can be a custom SVG/CSS illustration or other lightweight, maintainable implementation. Keep it conceptual; do not portray an invented system architecture as DEFI’s actual internal architecture. Avoid a random globe made of glowing dots unless it communicates something specific.

### Diagram B — A transformation journey
Show a small, easy-to-scan sequence such as `Understand → Design → Integrate → Enable → Improve`, or a better sequence grounded in verified material. Clearly label it as a conceptual journey if DEFI has no published official methodology. Use a horizontal flow on large screens and a clean vertical/stacked flow on smaller screens. A visitor should grasp it in seconds.

### Diagram C — Capability map (only if supported by facts)
Use a connected capability map, layered diagram, or ecosystem model to present confirmed service areas rather than a pile of text cards. Possible research topics include information infrastructure, IT services/integration, digital transformation, enterprise architecture, data, GIS, and quality engineering. Do **not** publish a capability merely because DEFI once advertised a related job. Confirm which labels are supported by official company material; if evidence is not available, keep the language broad or document a proposed label as requiring internal confirmation.

Diagram implementation rules:
- Prefer hand-crafted, responsive SVG/HTML/CSS visuals with semantic labels and accessible descriptions. Use a chart library only if there is a demonstrated benefit; do not add large dependencies for static diagrams.
- They are explanatory visuals for corporate visitors, **not developer-facing architecture diagrams** and not Mermaid diagrams rendered as a code block.
- Use concise labels, clear relationships, legible contrast, good spacing, and a consistent visual language. No meaningless data, fake metrics, or decorative charts pretending to show real results.
- Diagrams must reflow gracefully on phones without tiny labels or horizontal overflow.
- Respect `prefers-reduced-motion`; animation must not be required to understand the visual.
- Add a text alternative or equivalent accessible explanation. The page must remain understandable if motion or decorative SVG is unavailable.

## 6. Suggested homepage structure

Adapt the order based on your research, but keep the page focused and relatively short:

1. **Header:** official DEFI logo/wordmark, concise navigation, visible language control if bilingual support is appropriate, and one clear contact/action link. Responsive mobile navigation must be usable by keyboard and touch.
2. **Hero:** a strong, factual headline; one concise supporting sentence; one primary action and optional secondary action; the connected-digital-ecosystem signature diagram. Avoid long paragraph copy and rotating carousels.
3. **Credibility / purpose:** explain DEFI’s role and institutional context in a few lines, using only verified facts. Logos or relationship statements require correct assets and careful wording.
4. **Capabilities:** a visually organized map or diagram, then concise labels and short explanations for verified service areas.
5. **Transformation journey or operating model:** a second diagram that explains how capabilities fit together. If there is no officially published delivery methodology, identify it as an illustrative model rather than a formal DEFI process.
6. **Evidence or impact:** use real, approved initiatives, case studies, announcements, or metrics only where reliable public evidence exists. If verified proof points are unavailable, do not fill the space with fabricated statistics or fake testimonials; use a restrained, factual section or omit it.
7. **Insights / latest updates:** optionally show a small number of authentic public updates if they can be reliably sourced. Do not fabricate article titles, dates, or links.
8. **Contact / careers CTA and footer:** clear next steps and verified company/contact/social links. Keep the footer useful rather than oversized.

Every section must earn its place. Keep copy short: one clear heading, a sentence or two, and a supporting visual wherever possible. Do not make visitors read an essay to understand DEFI.

## 7. Copy, evidence, and trust rules

- Write crisp, professional corporate English in plain language. Avoid vague claims such as “revolutionizing the future,” “cutting-edge solutions,” or “leading the industry” unless there is evidence and a reason to say them.
- Proposed hero copy to test, not blindly accept: **“Building the digital foundations for a more connected Egypt.”** Supporting copy could state that DEFI supports public-sector institutions with information infrastructure, IT, and digital-transformation services, subject to source verification and editorial refinement.
- Never invent clients, case studies, outcomes, KPI values, awards, certifications, team members, testimonials, partner logos, government endorsements, or project names.
- Do not infer impact numbers from company size, followers, hiring activity, or unrelated public statistics.
- Distinguish confirmed facts from design assumptions. If content cannot be confirmed, use restrained general wording or add it to a short `CONTENT-QUESTIONS.md` for internal review instead of publishing an unsupported claim.

## 8. Language and responsive behavior

- Inspect whether the existing site/project supports English and Arabic. Preserve and improve existing localization if it does.
- If bilingual support is part of the existing site or feasible within the homepage-only scope, implement a real English/Arabic homepage language switch—not just translated labels. Arabic must use correct RTL layout, typography, alignment, reading order, icons where direction matters, and responsive behavior. Preserve correct brand names and URLs.
- If robust bilingual implementation would require wider architectural changes, keep the homepage architecture localization-ready and document the smallest follow-up needed; do not destabilize the app.
- Design mobile-first and verify at phone, tablet, laptop, and wide-desktop widths. Prevent overflow, clipped diagrams, crowded navigation, tiny text, and oversized hero blocks.
- Make focus states, hover states, active states, and mobile menu states intentional.

## 9. Quality and implementation requirements

- Follow the workspace’s framework and conventions. Build reusable, maintainable components and design tokens where useful, without overengineering.
- Use semantic HTML, accessible naming, correct heading order, adequate contrast, keyboard support, and WCAG 2.2 AA-oriented practices where practical.
- Optimize images and font loading; avoid unnecessary JavaScript and dependencies. Use modern platform patterns and safe fallbacks where guidance recommends them.
- Include proper homepage title/meta description, social preview metadata if the app has a standard approach, and meaningful image alt text. Do not invent SEO claims or structured-data facts.
- Avoid placeholder buttons that do nothing, broken links, fake forms, unnecessary popups, autoplay video, and inaccessible carousels.
- Do not add a backend or persist contact-form data. If a contact form already exists, keep its integration intact; otherwise use a real contact link or clearly scoped front-end form only if there is a verified endpoint.

## 10. Required execution workflow

1. Inspect the project, current route, logo/assets, package scripts, existing UI conventions, and installed skills.
2. Research the current DEFI site, official LinkedIn material, and the reference websites. Summarize verified facts and proposed design decisions.
3. Define the homepage section order and the exact purpose/content of each diagram before implementation.
4. Create or update a concise root-level `DESIGN.md` documenting the final visual rationale, verified audience/purpose, palette, typography, spacing, diagram principles, responsive rules, and source links. Keep it aligned with the real implementation, not speculative or overly long.
5. Implement the homepage only. Reuse existing components and assets where appropriate.
6. Run the available formatter, lint, type checks, tests, and production build. Fix issues introduced by your changes.
7. Use the browser to inspect the actual rendered homepage at desktop and mobile widths (and in Arabic RTL if implemented). Take screenshots where available. Check every navigation item, CTA, responsive menu, diagram, and language switch.
8. Perform a design critique and polish pass using `impeccable` or the best available equivalent. Explicitly check for generic AI visuals, excessive cards, poor spacing, low contrast, unsupported copy, inaccessible diagrams, and mobile overflow.
9. Re-run relevant checks after polishing.

## 11. Definition of done

The task is complete when:
- Only the homepage and the small amount of shared styling/components needed for it have been changed.
- The design is clearly more polished, credible, and coherent than the existing website.
- Visitors can understand DEFI’s purpose quickly without reading large text blocks.
- At least two purposeful diagrams are implemented, responsive, accessible, and based on verified or clearly identified conceptual content.
- The homepage works at mobile, tablet, and desktop sizes; no horizontal overflow or clipped diagram labels remain.
- All visible links/actions have meaningful destinations or behaviors.
- No fake statistics, testimonials, case studies, client logos, or unsupported service claims have been added.
- Available checks/build pass, or any pre-existing failures are clearly distinguished from failures caused by this work.
- `DESIGN.md` reflects the actual design and records sources/assumptions.

## 12. Final report

When done, provide a concise report with:
- What changed on the homepage.
- The diagrams created and what each one communicates.
- The key design decisions and reference patterns applied.
- Which skills were actually used (and which were unavailable).
- Checks/build/browser viewports completed and their results.
- Any content assumptions, unverified service labels, missing official assets, or follow-up items for the company.

Start by inspecting the current workspace and available skills. Then research, plan, implement, test, and polish the homepage. **Do not implement other pages in this stage.**
