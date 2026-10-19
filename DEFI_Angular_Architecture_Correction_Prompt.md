# DEFI Website — Mandatory Angular Architecture Correction

## Context

The previous implementation report states that the public website is currently a Vite 5.4 multi-page app made from standalone HTML pages (`index.html`, `about.html`, `capabilities.html`, etc.) with shared CSS and JavaScript. It also says Angular components exist under `src/app/` but are not the active application.

That is not the architecture requested for this project. I do not want an HTML/CSS/vanilla-JavaScript multi-page website with an unused Angular scaffold sitting beside it. We are using Angular so the site is actually built, composed, routed, tested, and maintained as an Angular application.

Your task is to correct the implementation in the existing repository—not just write an audit or propose a plan. Keep the visual work and useful assets that already exist where they are genuinely good, but move the real application onto the correct architecture.

## Non-negotiable outcome

**The public DEFI website must be a real Angular application, using the latest stable Angular major version that is officially supported and compatible with the available Node.js environment.** Check the official release and version-compatibility documentation before choosing versions:

- https://angular.dev/reference/releases
- https://angular.dev/reference/versions
- https://angular.dev/tools/cli/build

At the time this prompt was prepared, Angular 22 is the active major line. Verify the current latest stable patch and compatibility when you execute; do not blindly copy a version number if official information has changed.

Use Angular CLI and a supported Angular build pipeline. Do not keep Vite's separate multi-page HTML build as the production website. Angular CLI may use modern build tools internally; the requirement is that **Angular CLI owns the application build**, rather than a separate hand-built Vite MPA.

## Phase 0 — Superpowers and repository reality check

1. Start by invoking/following the `using-superpowers` skill before inspecting or changing the implementation. Use the available Superpowers workflow and relevant skills for planning, implementation, testing, debugging, and review.
2. Official Superpowers repository: https://github.com/obra/superpowers
3. If Superpowers is not installed/available in Antigravity, install it using the current official instructions. The documented Antigravity command is:

   ```powershell
   agy plugin install https://github.com/obra/superpowers
   ```

   If `agy` is unavailable in the current terminal, do not keep retrying a missing command. Check the current Antigravity CLI/setup and install the official plugin through the supported Antigravity plugin/marketplace route, or explain the actual blocker. Verify that Superpowers and `using-superpowers` are visible/active before proceeding.
4. Inspect the real repository: `package.json`, lockfile, `angular.json`, `vite.config.*`, `vercel.json`, `src/`, route files, `scripts/`, tests, and deployment configuration. Do not rely exclusively on the previous report—it may be incomplete or inaccurate.
5. Identify which code is actually compiled and served today, what the current deploy command does, and where the Angular scaffold lives. Write a concise migration plan with risks, but then proceed to implementation without waiting for approval unless you encounter a destructive or genuinely blocking decision.
6. Create a safe Git checkpoint/branch or equivalent rollback point before changing the build pipeline. Do not overwrite environment-specific configuration or delete project files before their purpose is understood.

## Phase 1 — Make Angular the source of truth

Migrate the complete public site to Angular. Prefer modern standalone components and Angular Router.

### Required structure

Use a maintainable structure such as:

- `src/app/core/` — app shell, shared navigation/header, footer, locale/metadata services if needed.
- `src/app/shared/` — reusable buttons, breadcrumbs, section headings, cards only where useful, diagrams, and other genuinely shared UI.
- `src/app/features/home/` — homepage sections and diagrams.
- `src/app/features/about/`
- `src/app/features/capabilities/`
- `src/app/features/sectors/`
- `src/app/features/impact/`
- `src/app/features/news/`
- `src/app/features/careers/`
- `src/app/features/contact/`
- `src/app/app.routes.ts` (or the correct modern route configuration for the generated Angular version).

Adapt this to the existing project's real conventions; do not create needless folders just to match a template. Keep page-specific content and behavior inside Angular components. Use shared layout components for the header/footer, not copies of their markup in every page.

### Required routes

Create working Angular routes for at least:

- `/` — Home
- `/about` — About DEFI
- `/capabilities` — Capabilities
- `/sectors` — Strategic Sectors
- `/impact` — Impact / verified work
- `/news` — Insights / News
- `/careers` — Careers
- `/contact` — Contact

Use Angular Router (`routerLink`, `routerLinkActive`, `RouterOutlet`) for in-app navigation. Do not use navigation links to manually authored `.html` files. Directly opening a route, refreshing it, and using browser back/forward must work. Lazy-load page routes when appropriate.

`src/index.html` as Angular's single document host is expected and fine. HTML files generated by Angular prerender/build are also fine. **What is not acceptable is manually maintaining `about.html`, `capabilities.html`, and other standalone production pages as a second application beside Angular.**

### Move behavior into Angular

- Use template bindings, component state, Angular event bindings, services, and lifecycle APIs for website behavior.
- Do not use ad hoc scripts that query the DOM and manually mutate Angular-owned UI (`document.querySelector`, `innerHTML`, `onclick`, etc.) where Angular bindings/components should be used.
- Do not keep a separate `scripts.js` responsible for the menu, language toggle, tabs, form interactions, diagrams, or page routing. Migrate such behavior into Angular components/services. Normal JavaScript output compiled/bundled from Angular TypeScript is expected.
- Implement mobile navigation with Angular state and accessible behavior, including keyboard dismissal, focus handling where appropriate, and correct ARIA attributes.
- Implement language switching in Angular. If full Arabic support remains, use correct document `lang` and `dir`, RTL-aware CSS, and mirrored layout where needed. Do not claim a fully translated Arabic experience if only the direction changes.
- Build diagrams as Angular components using responsive SVG or HTML/CSS where appropriate. Any animation should be illustrative, not impersonate live government systems or real telemetry.

## Phase 1.5 — Choose and use UI libraries when they improve the result

Do not interpret the Angular requirement as a requirement to build every interface primitive from scratch. **You are free to use suitable, maintained UI/CSS libraries** when they improve visual quality, accessibility, responsiveness, consistency, or implementation speed. Make the decision based on the actual repository, the selected Angular version, and the needs of this corporate website.

Possible options include, but are not limited to:

- **Tailwind CSS** for a deliberate utility-first styling system, responsive layout, design tokens, and controlled custom visual design.
- **Angular Material** when its accessible Angular-native components fit the design and interaction requirements.
- **PrimeNG** when useful production-ready Angular components justify using a component library.
- **Bootstrap / ng-bootstrap** when its grid or selected components are genuinely helpful; avoid letting default Bootstrap styling make the site look generic.
- **Angular CDK** for accessible interaction primitives when custom presentation is needed without a full component library.
- A suitable Angular-compatible icon library, or custom inline SVGs, for consistent icons and diagrams.

### Required library decision process

1. Inspect `package.json`, the lockfile, existing CSS, current design tokens, and the Angular version before installing anything.
2. Choose the smallest coherent set of libraries that supports the design. Explain the choice briefly in the implementation notes.
3. Verify each package's current official installation instructions, Angular compatibility, maintenance status, and version requirements before adding it. Do not assume a package or an older setup guide supports the selected Angular release.
4. **Tailwind is explicitly allowed** if it helps. Configure it properly for the chosen Angular CLI/build setup, define DEFI's design tokens and reusable component patterns, and verify generated production styles. Do not simply install Tailwind and leave it unused, or scatter arbitrary utility classes without a consistent design system.
5. You may combine Tailwind with a focused library such as Angular CDK or a small number of selected components, but avoid mixing multiple overlapping design systems (for example, full Tailwind styling plus several competing component libraries) without a clear technical reason.
6. Do not add a library just for its own sake. Prefer accessible, maintainable Angular-compatible choices and native HTML/SVG/CSS for simple needs. Avoid excessive dependencies and unused packages.
7. Keep the site visually distinctive and consistent regardless of the selected library. Library defaults must not dictate an off-the-shelf dashboard aesthetic. Customize colors, typography, spacing, states, responsive breakpoints, focus rings, and component density to match DEFI's design direction.
8. After changes, run the production build and inspect real browser output to confirm styles, icons, menus, dialogs, and other components work in production—not just in the development server.

The goal is **the best maintainable Angular implementation**, not Angular with no libraries and not a pile of libraries. Select tools that serve the design and architecture.

## Phase 2 — Improve the actual design, not just the code structure

Keep the goal: a premium, credible, modern, bilingual corporate website for Digital Egypt for Investment. Review the current implementation in the browser before redesigning. Preserve only the parts that withstand a serious design critique.

### Design priorities

1. Redesign the header/navigation first: clear logo sizing, generous spacing, legible labels, restrained active states, strong CTA hierarchy, and a polished mobile menu. No logo pill clipping, crushed nav links, or tiny utility text.
2. Improve the hero with a clear value proposition, concise copy, one primary action, one secondary action, and one meaningful visual/system diagram. Avoid a hero that resembles a monitoring dashboard.
3. Create visual rhythm across the page: alternate light editorial sections with occasional dark technical showcases. Avoid a wall of identically colored navy cards.
4. Keep diagrams prominent and easy to understand. They should explain DEFI's role, verified capability groups, or a clearly labelled illustrative transformation journey. Diagrams are communication tools, not fake monitoring interfaces.
5. Increase typography, whitespace, and contrast. At typical laptop and mobile widths, labels and body text must not be microscopic.
6. Keep the page focused. Avoid repeating the same service list as a hero diagram, three card grids, a capability map, and another section. Each section must earn its place.
7. Make every viewport intentional: wide desktop, laptop, tablet, and mobile. Prevent horizontal overflow and squeezed columns.
8. Use polished transitions sparingly and respect `prefers-reduced-motion`.
9. Maintain semantic HTML, keyboard access, visible focus, accessible color contrast, useful alt text, and a clear heading hierarchy.

## Phase 3 — Remove fabricated or misleading content

The previous report describes simulated telemetry such as request-per-second values increasing automatically, fake progress percentages, changing transaction logs, and rotating infrastructure hubs. Do not present these as real DEFI operations. Remove them unless an actual connected and authorized data source exists.

- No invented KPIs, service levels, number of clients, consultants, institutions, data volumes, uptime claims, or live system statuses.
- Do not imply that illustrative diagrams depict deployed national infrastructure if that has not been verified.
- Verify legal decree, governance, institutional relationships, named entities, services, office details, emails, and project claims against reliable official sources or assets already in the repository.
- Where information cannot be verified, use clearly neutral copy or omit the claim. Do not turn an assumption into a fact to make the website look more authoritative.
- Do not invent news posts, open job vacancies, executive leadership details, testimonials, or project case studies. Show a respectful empty state or a clear official contact route when there is no verified material.

## Phase 4 — Angular build, SEO, and deployment

1. Use the official Angular CLI build pipeline (`ng build`) as the source of production assets. Remove the old standalone Vite MPA build from the production path when the Angular migration is complete.
2. Because this is a public corporate site, evaluate Angular prerendering/static generation for the public routes for SEO and fast first paint. Choose a supported Angular CLI SSR/prerender approach if compatible with the repo and deployment. Do not add SSR complexity without configuring and verifying it end to end.
3. Configure Vercel based on the actual Angular build output and chosen rendering mode. Keep hosting and deployment working; do not preserve the legacy pipeline solely because it already deploys. Configure route fallback/rewrites only as appropriate for the chosen Angular output.
4. Set page-specific titles, meta descriptions, canonical URLs where suitable, social preview metadata, favicon, and sensible heading structure. Ensure direct route access produces correct page metadata; if prerendering is used, ensure each route has its own generated HTML and metadata.
5. Check image optimization, font loading, bundle size, and console warnings. Avoid adding large dependencies for effects that can be implemented simply.
6. Ensure no conflicting scripts, duplicate app shells, or duplicate navigation systems remain.

## Phase 5 — Tests and evidence, not self-reported success

Update or replace old verification scripts so they test the real Angular app—not the retired HTML pages. Run the actual commands and report their real output.

### Required checks

- Clean dependency installation from the committed lockfile.
- Angular production build succeeds.
- Unit/component tests that exist in the project run successfully; add useful tests for route navigation and shared UI behavior.
- Every required route works on direct navigation and browser refresh.
- Internal nav and footer links target real Angular routes or valid external destinations.
- Mobile menu opens/closes, supports keyboard interaction, and does not leak off-screen.
- Contact form validation works. Do not claim form submissions reach a backend unless an actual endpoint/service is configured; otherwise state clearly that it is frontend-only.
- English and Arabic mode work correctly if offered.
- Check 1440px, 1024px, 768px, 390px, and 360px viewports for visual issues, horizontal overflow, clipped content, and console errors.
- Check the production build preview in a browser, not only the development server.
- Inspect screenshots and fix visible problems before completion.

### Required acceptance criteria

The task is **not complete** unless all the following are true:

- Angular is the application that renders every public page.
- Angular Router owns all internal navigation.
- The production site is built through the Angular CLI pipeline.
- The legacy manually maintained multi-page Vite HTML app is no longer the production source of truth.
- All required routes work directly and after refresh.
- Shared header and footer come from reusable Angular components.
- No fake telemetry or unverified numeric/company claims remain.
- Desktop and mobile screenshots have been reviewed, and major visible issues have been fixed.
- Deployment configuration is updated and the production build has been validated.

If one of these criteria cannot be met, do not call the task “100% complete.” Explain exactly what is blocked, show the evidence, and state the remaining work.

## Final deliverables

When the work is actually complete, report:

1. The Angular version and Node.js version used, with the reason they are compatible.
2. The final application architecture and list of Angular routes/components created or migrated.
3. Which standalone HTML pages, Vite scripts/configuration, and legacy behaviors were removed from the production path.
4. The actual build/test commands run and their pass/fail results.
5. The deployment configuration and production output directory.
6. Browser screenshots for desktop, mobile, and at least one inner route.
7. Remaining limitations or unverified company content, without hiding them.

Do not finish after writing a plan or this report. Inspect the project, make the code changes, run the real checks, review the UI, and iterate until the acceptance criteria are met.
