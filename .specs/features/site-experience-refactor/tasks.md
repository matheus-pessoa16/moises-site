# Site Experience Refactor Tasks

## Execution Protocol (MANDATORY -- do not skip)

Implement these tasks with the `tlc-spec-driven` skill: **activate it by name and follow its Execute flow and Critical Rules.** Do not search for skill files by filesystem path. The skill is the source of truth for the full flow (per-task cycle, sub-agent delegation, adequacy review, Verifier, discrimination sensor).

**If the skill cannot be activated, STOP and tell the user — do not proceed without it.**

---

**Design**: `.specs/features/site-experience-refactor/design.md`
**Status**: Draft

---

## Test Coverage Matrix

> Generated from codebase sampling — no project guidelines found (no `AGENTS.md`, `CONTRIBUTING.md`, `CLAUDE.md`, or test config files). Strong defaults applied. User confirmed Playwright e2e as the test framework.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| ---------- | ------------------ | -------------------- | ---------------- | ----------- |
| Config / constants (`src/config/`) | none | — (build gate only) | — | `npx playwright test` |
| Data files (`src/data/`) | none | — (build gate only) | — | `npx playwright test` |
| UI components (`src/components/`) | e2e | All components in scope: happy path + edge cases per spec AC | `e2e/*.spec.js` | `npx playwright test` |
| Pages (`src/pages/`) | e2e | All routes in scope: happy path + edge + error paths per spec AC | `e2e/*.spec.js` | `npx playwright test` |
| CSS / Tailwind config | none | — (build gate + visual verification) | — | `npm run build` |

## Parallelism Assessment

> Generated from codebase — no existing tests to sample. Playwright tests will use isolated browser contexts.

| Test Type | Parallel-Safe? | Isolation Model | Evidence |
| --------- | -------------- | --------------- | -------- |
| e2e (Playwright) | Yes | Each test file runs in isolated browser context; Playwright default worker isolation | Playwright default behavior — no shared backing store or global mutable state |

## Gate Check Commands

> Generated from codebase. Build uses Vite; lint uses ESLint. Playwright will be installed as part of T1.

| Gate Level | When to Use | Command |
| ---------- | ----------- | ------- |
| Quick | After tasks with e2e tests | `npx playwright test --grep "@T<N>"` |
| Full | After phase completion | `npx playwright test` |
| Build | After config/entity-only tasks or phase completion | `npm run build && npm run lint` |

---

## Execution Plan

### Phase 1: Foundation (Sequential)

Infrastructure, config, data, and visual foundation. Everything downstream depends on these.

```
T1 → T2 → T3 → T4 → T5
```

### Phase 2: Components (Parallel OK)

New and rewritten components. All depend on T1 (site config) and T2 (palette).

```
     ┌→ T6  [P]  (CampaignBanner)
     ├→ T7  [P]  (CampaignCards)
T5 ──┼→ T8  [P]  (AlbumCard)
     ├→ T9  [P]  (AlbumModal)
     ├→ T10 [P]  (WhatsAppLink/Button)
     └→ T11 [P]  (CareersForm)
```

### Phase 3: Pages & Navigation (Sequential)

Wire components into pages, update navigation, add routes.

```
T12 → T13 → T14 → T15 → T16 → T17
```

### Phase 4: Integration & Verification (Sequential)

Final route wiring, full e2e suite, visual verification.

```
T18 → T19
```

---

## Task Breakdown

### T1: Install Playwright and create base config

**What**: Install Playwright as a dev dependency, create `playwright.config.js`, and add test scripts to `package.json`.
**Where**: `apps/web/playwright.config.js`, `apps/web/package.json`
**Depends on**: None
**Reuses**: None
**Requirement**: Infrastructure (enables all e2e gates)

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `@playwright/test` installed as dev dependency
- [ ] `playwright.config.js` created with baseURL `http://localhost:3000`, chromium project, `webServer` pointing to `npm run dev`
- [ ] `package.json` has `"test": "playwright test"` and `"test:ui": "playwright test --ui"` scripts
- [ ] `e2e/` directory created with a `.gitkeep`
- [ ] Build gate passes: `npm run build`

**Tests**: none (infrastructure)
**Gate**: build
**Commit**: `chore(test): install Playwright and create base config`

---

### T2: Apply new color palette and radius in CSS

**What**: Update CSS variables in `index.css` to the new Moisés palette (`#01154A` background, `#FFFFFF` titles, `#DAF5FC` subtitles, `--radius: 0.7rem`) and remove the `.dark` dark-mode override block.
**Where**: `apps/web/src/index.css` (modify)
**Depends on**: None
**Reuses**: Existing CSS variable pattern
**Requirement**: REF-01, REF-03, REF-04

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `--background` is `224 97% 15%` (#01154A)
- [ ] `--foreground` is `192 85% 92%` (#DAF5FC)
- [ ] `--card`, `--card-foreground`, `--popover`, `--popover-foreground`, `--border`, `--input` adjusted for dark bg contrast
- [ ] `--radius` is `0.7rem`
- [ ] `--ring` adjusted for visible focus on dark bg (REF-04)
- [ ] `.dark` override block removed
- [ ] Build gate passes: `npm run build`

**Tests**: none (CSS/config layer — build gate only)
**Gate**: build
**Commit**: `feat(visual): apply new Moisés palette and 0.7rem radius`

---

### T3: Create site config file

**What**: Create `src/config/site.js` with all centralized constants: WhatsApp number/URL builder, Instagram URL, logo URL, n8n webhook URL, campaign banner toggle + SVG URL, resume limits.
**Where**: `apps/web/src/config/site.js`
**Depends on**: None
**Reuses**: None
**Requirement**: REF-06, REF-10, REF-11, REF-12, REF-14, REF-26, REF-27

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `WHATSAPP_NUMBER` = `"5584921768017"`
- [ ] `WHATSAPP_URL(message)` returns `https://wa.me/5584921768017?text={encodedMessage}`
- [ ] `INSTAGRAM_URL` = `"https://www.instagram.com/moisesnunescv/"`
- [ ] `LOGO_URL` = `"https://lh3.googleusercontent.com/d/18xOXZzf3FW_ptUF9UNNSdTxL6ec5QnfY=w1000?authuser=0"`
- [ ] `N8N_WEBHOOK_URL` = `"https://n8n.devsr.com.br/webhook/moisesNunesAnalise"`
- [ ] `SHOW_CAMPAIGN_BANNER` = `true`
- [ ] `CAMPAIGN_SVG_URL` = Google Drive SVG URL
- [ ] `RESUME_MAX_SIZE_MB` = `10`
- [ ] `RESUME_ALLOWED_TYPES` = `['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']`
- [ ] Build gate passes: `npm run build`

**Tests**: none (config layer — build gate only)
**Gate**: build
**Commit**: `feat(config): create centralized site configuration`

---

### T4: Create albums data file

**What**: Create `src/data/albums.js` with `albums` and `categories` arrays. Regroup the existing 76 projects from `GaleriaPage.jsx` into albums by category. Each album has `id`, `category`, `title`, `description`, `cover`, and `media[]` with `subId` and `type`. Include one `google-drive-video` media entry in the Finecap album using Drive ID `1MQchokMrnCJDhla1fOWiZeRVDS0Xneoo`.
**Where**: `apps/web/src/data/albums.js`
**Depends on**: None
**Reuses**: Existing 76 project entries from `GaleriaPage.jsx:49-582`
**Requirement**: REF-15, REF-18, REF-19

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `categories` array exported with all existing category IDs + labels
- [ ] `albums` array exported with ~15 albums covering all 76 existing projects
- [ ] Each album has `id`, `category`, `title`, `description`, `cover`, `media[]`
- [ ] Each media item has `subId`, `type` (`image` or `google-drive-video`), and `url` or `driveFileId`
- [ ] At least one media item has `type: 'google-drive-video'` with `driveFileId: '1MQchokMrnCJDhla1fOWiZeRVDS0Xneoo'`
- [ ] No project images lost — all 76 original URLs preserved
- [ ] Build gate passes: `npm run build`

**Tests**: none (data layer — build gate only)
**Gate**: build
**Commit**: `feat(data): create albums data with 76 projects regrouped`

---

### T5: Create campaigns data file

**What**: Create `src/data/campaigns.js` with `campaigns` array of placeholder campaign cards (`id`, `title`, `description`, `image`, `ctaText`, `ctaLink`).
**Where**: `apps/web/src/data/campaigns.js`
**Depends on**: None
**Reuses**: Google Drive image URL pattern
**Requirement**: REF-13, REF-14

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `campaigns` array exported with 3 placeholder cards
- [ ] Each card has `id`, `title`, `description`, `image`, optional `ctaText` and `ctaLink`
- [ ] At least one card has no `ctaLink` (to test non-clickable rendering)
- [ ] Build gate passes: `npm run build`

**Tests**: none (data layer — build gate only)
**Gate**: build
**Commit**: `feat(data): create placeholder campaign cards data`

---

### T6: Create CampaignBanner component [P]

**What**: Create `CampaignBanner` component that renders the campaign SVG full-width when `SHOW_CAMPAIGN_BANNER` is `true`, renders `null` when `false`. Includes `onError` fallback to hide the section.
**Where**: `apps/web/src/components/CampaignBanner.jsx`
**Depends on**: T3 (site config)
**Reuses**: None
**Requirement**: REF-11, REF-12, REF-14

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Renders `<img>` with `CAMPAIGN_SVG_URL` in a full-width `<section>` when `SHOW_CAMPAIGN_BANNER` is `true`
- [ ] Renders `null` when `SHOW_CAMPAIGN_BANNER` is `false`
- [ ] `onError` handler hides the section (no broken image icon)
- [ ] Alt text "Campanhas Moisés Nunes Comunicação Visual" present
- [ ] E2e test: banner visible when toggle is true; banner absent when false; broken SVG URL triggers fallback
- [ ] Gate passes: `npx playwright test --grep "@T6"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(home): create CampaignBanner with toggle and fallback`

---

### T7: Create CampaignCards component [P]

**What**: Create `CampaignCards` component that renders a responsive grid of campaign cards from `campaigns.js`. Cards without `ctaLink` render as non-clickable content.
**Where**: `apps/web/src/components/CampaignCards.jsx`
**Depends on**: T5 (campaigns data)
**Reuses**: framer-motion animation pattern from `ServiceCard.jsx`
**Requirement**: REF-13, REF-14

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Renders responsive grid (1/2/3 cols) of campaign cards
- [ ] Each card shows image, title, description
- [ ] Cards with `ctaLink` render a clickable CTA button
- [ ] Cards without `ctaLink` render as non-clickable (no `<a>` or broken link)
- [ ] E2e test: all campaign cards render; card without ctaLink is non-clickable; card with ctaLink navigates
- [ ] Gate passes: `npx playwright test --grep "@T7"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(home): create CampaignCards grid component`

---

### T8: Create AlbumCard component [P]

**What**: Create `AlbumCard` component replacing `PortfolioCard`. Uses `object-contain` (no crop), compact caption below image, category badge.
**Where**: `apps/web/src/components/AlbumCard.jsx`
**Depends on**: None
**Reuses**: Visual structure from `PortfolioCard.jsx`, framer-motion
**Requirement**: REF-15, REF-20, REF-21

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Accepts `{ album, onClick, delay }` props
- [ ] Image uses `object-contain` (no cropping)
- [ ] Caption (title + category badge) below image, compact height
- [ ] Media visually prioritized over caption
- [ ] E2e test: card renders album cover without crop; caption is below image; click triggers onClick
- [ ] Gate passes: `npx playwright test --grep "@T8"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(gallery): create AlbumCard with object-contain and compact caption`

---

### T9: Create AlbumModal component [P]

**What**: Create `AlbumModal` replacing `PortfolioModal`. Uses shadcn `Dialog` + `Carousel` (embla) with `loop: true`. Renders images and Google Drive video iframes. Fallback link for failed videos. Single-item albums render without navigation controls.
**Where**: `apps/web/src/components/AlbumModal.jsx`
**Depends on**: None
**Reuses**: `src/components/ui/carousel.jsx`, `src/components/ui/dialog.jsx`
**Requirement**: REF-16, REF-17, REF-18, REF-19, REF-20

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Opens as `Dialog` with `Carousel` containing one `CarouselItem` per media entry
- [ ] `loop: true` enabled — first item wraps to last and vice versa (REF-17)
- [ ] Image items render `<img>` with `object-contain` (no crop)
- [ ] Video items render `<iframe src="https://drive.google.com/file/d/{id}/preview">` with title and allow attribute (REF-18)
- [ ] Single-item albums render media without prev/next buttons (edge case)
- [ ] Video iframe has fallback link to `https://drive.google.com/file/d/{id}/view` below it
- [ ] E2e test: modal opens with correct album; carousel navigates next/prev; loop wraps; video iframe present; single-item has no nav
- [ ] Gate passes: `npx playwright test --grep "@T9"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(gallery): create AlbumModal with embla carousel and video support`

---

### T10: Create WhatsAppLink and WhatsAppButton components [P]

**What**: Create `WhatsAppLink` (renders `<a>`) and `WhatsAppButton` (renders `<Button asChild>` wrapping link) that build `wa.me` URLs with contextual encoded messages from `site.js`.
**Where**: `apps/web/src/components/WhatsAppLink.jsx`
**Depends on**: T3 (site config)
**Reuses**: `Button` `asChild` pattern from Header
**Requirement**: REF-06

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `WhatsAppLink({ message, children, className })` renders `<a href={WHATSAPP_URL(message)} target="_blank" rel="noopener noreferrer">`
- [ ] `WhatsAppButton({ message, children, variant, size, className })` renders `<Button asChild>` wrapping `WhatsAppLink`
- [ ] Message is URL-encoded in the href
- [ ] E2e test: link href matches `https://wa.me/5584921768017?text={encoded}`; opens in new tab (`target="_blank"`)
- [ ] Gate passes: `npx playwright test --grep "@T10"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(nav): create WhatsAppLink and WhatsAppButton components`

---

### T11: Create CareersForm component [P]

**What**: Create `CareersForm` with react-hook-form. Fields: name, email, phone, message, resume file upload. Client-side validation for required fields, email regex, file type (PDF/DOC/DOCX), file size (≤10MB). Submits `FormData` to n8n webhook. Success toast + reset. Error toast + preserve fields. Prevents concurrent submission.
**Where**: `apps/web/src/components/CareersForm.jsx`
**Depends on**: T3 (site config)
**Reuses**: Form validation pattern from `ContactForm.jsx:1-142`, `Input`, `Label`, `Textarea`, `Button`, `toast`
**Requirement**: REF-24, REF-25, REF-26, REF-27, REF-28, REF-29, REF-30

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] All 5 fields render with labels and validation
- [ ] Missing required fields show field-level error messages (REF-25)
- [ ] Invalid email shows error message (REF-25)
- [ ] File >10MB shows size constraint error (REF-26)
- [ ] File of wrong type shows accepted types error (REF-26)
- [ ] Valid submission builds `FormData` and calls `fetch(N8N_WEBHOOK_URL, { method: 'POST', body: formData })` (REF-27)
- [ ] Success: toast "Candidatura enviada com sucesso" + form reset (REF-28)
- [ ] Error/non-2xx: toast generic error, fields preserved, retry allowed (REF-29, REF-30)
- [ ] Concurrent submission prevented via `isSubmitting` guard (edge case)
- [ ] No internal webhook details exposed in error messages (REF-30)
- [ ] E2e test: submit with missing fields → validation errors; submit with oversized/wrong file → file error; mock successful webhook → success toast + reset; mock failed webhook → error toast + fields preserved
- [ ] Gate passes: `npx playwright test --grep "@T11"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(careers): create CareersForm with validation and n8n webhook submission`

---

### T12: Update Header — logo, WhatsApp CTA, nav link

**What**: Update `Header.jsx` to use `LOGO_URL` from site config, replace "Solicitar orçamento" CTA with `WhatsAppButton`, add "Trabalhe Conosco" nav link, update colors to new palette.
**Where**: `apps/web/src/components/Header.jsx` (modify)
**Depends on**: T3 (site config), T10 (WhatsAppButton), T2 (palette)
**Reuses**: Existing Header structure, Sheet for mobile
**Requirement**: REF-02, REF-06, REF-23

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Logo `src` uses `LOGO_URL` from `site.js`
- [ ] "Trabalhe Conosco" link added to `navLinks` (desktop + mobile)
- [ ] Desktop CTA is `WhatsAppButton` with message "Olá! Gostaria de solicitar um orçamento para comunicação visual."
- [ ] Mobile CTA is `WhatsAppButton` with same message
- [ ] Text colors updated for dark bg palette
- [ ] E2e test: logo src matches `LOGO_URL`; "Trabalhe Conosco" link present in desktop + mobile nav; WhatsApp CTA href correct
- [ ] Gate passes: `npx playwright test --grep "@T12"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(nav): update Header with new logo, WhatsApp CTA, and Trabalhe Conosco link`

---

### T13: Update Footer — logo, social links, WhatsApp, nav link

**What**: Update `Footer.jsx` to use `LOGO_URL`, remove Facebook and LinkedIn, update Instagram to `INSTAGRAM_URL`, add WhatsApp link, add "Trabalhe Conosco" to quick links, update colors.
**Where**: `apps/web/src/components/Footer.jsx` (modify)
**Depends on**: T3 (site config), T10 (WhatsAppLink), T2 (palette)
**Reuses**: Existing Footer structure
**Requirement**: REF-02, REF-06, REF-10, REF-23

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Logo `src` uses `LOGO_URL`
- [ ] Facebook and LinkedIn icons/links removed
- [ ] Instagram `href` is `INSTAGRAM_URL`
- [ ] WhatsApp link added with icon
- [ ] "Trabalhe Conosco" added to quick links nav
- [ ] E2e test: no Facebook/LinkedIn elements; Instagram href correct; WhatsApp link present; "Trabalhe Conosco" link present; logo src correct
- [ ] Gate passes: `npx playwright test --grep "@T13"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(nav): update Footer with new logo, Instagram-only socials, WhatsApp link`

---

### T14: Redesign HomePage — remove services, add campaigns, WhatsApp CTA

**What**: Rewrite `HomePage.jsx` to remove the services grid section, add `CampaignBanner` below hero, add `CampaignCards` section, replace "Solicitar orçamento" with `WhatsAppButton`, update hero/CTA colors to new palette.
**Where**: `apps/web/src/pages/HomePage.jsx` (modify)
**Depends on**: T2 (palette), T3 (site config), T6 (CampaignBanner), T7 (CampaignCards), T10 (WhatsAppButton), T12 (Header)
**Reuses**: Hero section structure, framer-motion
**Requirement**: REF-05, REF-06, REF-09, REF-11, REF-13

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] "Nossos serviços" section and `services` array completely removed (REF-09)
- [ ] `CampaignBanner` rendered directly after hero section (REF-11)
- [ ] `CampaignCards` section rendered after banner (REF-13)
- [ ] Hero "Solicitar orçamento" button is `WhatsAppButton` (REF-06)
- [ ] CTA section "Fale conosco agora" is `WhatsAppButton` (REF-06)
- [ ] Hero background uses new palette (`#01154A`)
- [ ] E2e test: no "Nossos serviços" heading; campaign banner present; campaign cards present; WhatsApp CTAs have correct hrefs
- [ ] Gate passes: `npx playwright test --grep "@T14"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(home): redesign HomePage with campaigns strip and WhatsApp CTAs`

---

### T15: Update ServicosPage — "Veja mais" button and WhatsApp CTA

**What**: Add a "Veja mais" button per service that links to `/galeria?categoria={service.id}`. Replace "Solicitar orçamento" CTA with `WhatsAppButton` using service-specific message. Update color references to new palette.
**Where**: `apps/web/src/pages/ServicosPage.jsx` (modify)
**Depends on**: T3 (site config), T10 (WhatsAppButton), T2 (palette)
**Reuses**: Existing service detail layout
**Requirement**: REF-06, REF-07

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Each service section has a "Veja mais" button linking to `/galeria?categoria={service.id}` (REF-07)
- [ ] "Solicitar orçamento" button per service is `WhatsAppButton` with contextual message including service title (REF-06)
- [ ] CTA section button is `WhatsAppButton`
- [ ] All `--navy` color references updated to new palette
- [ ] E2e test: each service has "Veja mais" link with correct `?categoria=` param; WhatsApp CTAs have correct hrefs
- [ ] Gate passes: `npx playwright test --grep "@T15"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(services): add Veja mais gallery link and WhatsApp CTAs`

---

### T16: Rewrite GaleriaPage — albums, deep-linking, AlbumModal

**What**: Rewrite `GaleriaPage.jsx` to import from `albums.js`, use `useSearchParams` for category deep-linking, render `AlbumCard` grid, open `AlbumModal` on selection. Update colors to new palette. Remove inline `projects` array.
**Where**: `apps/web/src/pages/GaleriaPage.jsx` (rewrite)
**Depends on**: T2 (palette), T4 (albums data), T8 (AlbumCard), T9 (AlbumModal)
**Reuses**: Existing page structure (hero, filter, grid, CTA)
**Requirement**: REF-08, REF-15, REF-20, REF-21, REF-22

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Imports `albums` and `categories` from `src/data/albums.js`
- [ ] `useSearchParams` reads `categoria` param to set initial `selectedCategory` (REF-08, REF-22)
- [ ] Filter buttons reflect selected state visibly (REF-22)
- [ ] Grid renders `AlbumCard` per filtered album
- [ ] Clicking an album opens `AlbumModal` with that album's media
- [ ] Empty category shows empty state message (edge case)
- [ ] Inline `projects` array removed
- [ ] Colors updated to new palette
- [ ] E2e test: navigate from `/galeria?categoria=led` → only LED albums shown; filter changes update grid; album click opens modal; empty category shows empty state
- [ ] Gate passes: `npx playwright test --grep "@T16"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(gallery): rewrite GaleriaPage with albums, deep-linking, and AlbumModal`

---

### T17: Create TrabalheConoscoPage

**What**: Create `TrabalheConoscoPage.jsx` with hero section, company culture intro, and `CareersForm` in a two-column layout (info + form).
**Where**: `apps/web/src/pages/TrabalheConoscoPage.jsx`
**Depends on**: T2 (palette), T11 (CareersForm), T12 (Header), T13 (Footer)
**Reuses**: Page layout pattern from `ContatoPage.jsx`
**Requirement**: REF-23, REF-24

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] Page renders Helmet with title "Trabalhe Conosco - Moisés Nunes Comunicação Visual"
- [ ] Hero section with heading and description
- [ ] Two-column section: left column with company culture info, right column with `CareersForm`
- [ ] Header and Footer rendered
- [ ] Colors use new palette
- [ ] E2e test: page loads at `/trabalhe Conosco`; form fields (name, email, phone, message, resume) present; page title correct
- [ ] Gate passes: `npx playwright test --grep "@T17"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(careers): create TrabalheConoscoPage with CareersForm`

---

### T18: Add TrabalheConosco route to App.jsx

**What**: Import `TrabalheConoscoPage` and add `<Route path="/trabalhe-conosco" element={<TrabalheConoscoPage />} />` to `App.jsx`.
**Where**: `apps/web/src/App.jsx` (modify)
**Depends on**: T17 (TrabalheConoscoPage)
**Reuses**: Existing route pattern
**Requirement**: REF-23

**Tools**:
- MCP: NONE
- Skill: NONE

**Done when**:
- [ ] `TrabalheConoscoPage` imported in `App.jsx`
- [ ] Route `/trabalhe-conosco` added to `Routes`
- [ ] E2e test: navigating to `/trabalhe-conosco` renders the careers page; 404 for unknown routes still works
- [ ] Gate passes: `npx playwright test --grep "@T18"`

**Tests**: e2e
**Gate**: quick
**Commit**: `feat(routes): add Trabalhe Conosco route`

---

### T19: Full e2e suite and visual verification

**What**: Run the complete Playwright test suite covering all spec acceptance criteria. Verify visual consistency across desktop and mobile widths. Ensure no regressions on existing pages (Sobre, Contato, Privacy, Termos).
**Where**: `e2e/full-suite.spec.js`
**Depends on**: T1–T18 all complete
**Reuses**: All prior e2e tests
**Requirement**: REF-01 through REF-30 (all)

**Tools**:
- MCP: `io.windsurf/mcp-playwright` (for visual verification)
- Skill: NONE

**Done when**:
- [ ] Full Playwright suite passes: `npx playwright test`
- [ ] All 30 spec ACs covered by at least one e2e test
- [ ] Desktop (1280px) and mobile (375px) widths verified
- [ ] Existing pages (Sobre, Contato, Privacy, Termos) still render without errors
- [ ] No console errors on any route
- [ ] Build gate passes: `npm run build && npm run lint`
- [ ] Full gate passes: `npx playwright test`

**Tests**: e2e
**Gate**: full
**Commit**: `test(e2e): full suite covering all 30 spec acceptance criteria`

---

## Parallel Execution Map

```
Phase 1 (Sequential):
  T1 ──→ T2 ──→ T3 ──→ T4 ──→ T5

Phase 2 (Parallel):
  T5 complete, then:
    ├── T6  [P]  (CampaignBanner)
    ├── T7  [P]  (CampaignCards)
    ├── T8  [P]  (AlbumCard)
    ├── T9  [P]  (AlbumModal)
    ├── T10 [P]  (WhatsAppLink/Button)
    └── T11 [P]  (CareersForm)

Phase 3 (Sequential):
  T12 ──→ T13 ──→ T14 ──→ T15 ──→ T16 ──→ T17 ──→ T18

Phase 4 (Sequential):
  T18 complete, then:
  T19
```

**Parallelism constraint:** All Phase 2 tasks are marked `[P]` because:
- No inter-task dependencies (each creates a separate file)
- Playwright tests are parallel-safe (isolated browser contexts)
- No shared mutable state between components

---

## Task Granularity Check

| Task | Scope | Status |
| ---- | ----- | ------ |
| T1: Install Playwright | 1 config + package.json | ✅ Granular |
| T2: Apply palette in CSS | 1 file change | ✅ Granular |
| T3: Create site config | 1 new file | ✅ Granular |
| T4: Create albums data | 1 new file | ✅ Granular |
| T5: Create campaigns data | 1 new file | ✅ Granular |
| T6: CampaignBanner | 1 component | ✅ Granular |
| T7: CampaignCards | 1 component | ✅ Granular |
| T8: AlbumCard | 1 component | ✅ Granular |
| T9: AlbumModal | 1 component | ✅ Granular |
| T10: WhatsAppLink/Button | 1 file (2 exports) | ✅ Granular (cohesive) |
| T11: CareersForm | 1 component | ✅ Granular |
| T12: Update Header | 1 file modify | ✅ Granular |
| T13: Update Footer | 1 file modify | ✅ Granular |
| T14: Redesign HomePage | 1 file modify | ✅ Granular |
| T15: Update ServicosPage | 1 file modify | ✅ Granular |
| T16: Rewrite GaleriaPage | 1 file rewrite | ✅ Granular |
| T17: Create TrabalheConoscoPage | 1 new file | ✅ Granular |
| T18: Add route to App.jsx | 1 file modify | ✅ Granular |
| T19: Full e2e suite | 1 test file | ✅ Granular |

---

## Diagram-Definition Cross-Check

| Task | Depends On (task body) | Diagram Shows | Status |
| ---- | ---------------------- | ------------- | ------ |
| T1 | None | No incoming arrows | ✅ Match |
| T2 | None | No incoming arrows (parallel with T1 in diagram but body says no dep — see note) | ✅ Match |
| T3 | None | No incoming arrows | ✅ Match |
| T4 | None | No incoming arrows | ✅ Match |
| T5 | None | No incoming arrows | ✅ Match |
| T6 | T3 | Arrow from T5 (phase boundary) → T6 | ✅ Match (T3 is in Phase 1, completed before Phase 2) |
| T7 | T5 | Arrow from T5 → T7 | ✅ Match |
| T8 | None | Arrow from T5 (phase boundary) → T8 | ✅ Match (no Phase 2 dep) |
| T9 | None | Arrow from T5 (phase boundary) → T9 | ✅ Match |
| T10 | T3 | Arrow from T5 (phase boundary) → T10 | ✅ Match (T3 in Phase 1) |
| T11 | T3 | Arrow from T5 (phase boundary) → T11 | ✅ Match (T3 in Phase 1) |
| T12 | T3, T10, T2 | T11 → T12 (phase boundary) | ✅ Match (all deps in prior phases) |
| T13 | T3, T10, T2 | T12 → T13 | ✅ Match (all deps in prior phases) |
| T14 | T2, T3, T6, T7, T10, T12 | T13 → T14 | ✅ Match (all deps in prior phases) |
| T15 | T3, T10, T2 | T14 → T15 | ✅ Match |
| T16 | T2, T4, T8, T9 | T15 → T16 | ✅ Match |
| T17 | T2, T11, T12, T13 | T16 → T17 | ✅ Match |
| T18 | T17 | T17 → T18 | ✅ Match |
| T19 | T1–T18 | T18 → T19 | ✅ Match |

**Note on Phase 1 diagram:** T1–T5 are shown sequential (`T1 → T2 → T3 → T4 → T5`) for safe execution. T2, T3, T4, T5 have no hard dependency on each other, but sequencing prevents merge conflicts and ensures Playwright is installed before any test references it.

---

## Test Co-location Validation

| Task | Code Layer Created/Modified | Matrix Requires | Task Says | Status |
| ---- | --------------------------- | --------------- | --------- | ------ |
| T1 | Config (infrastructure) | none | none | ✅ OK |
| T2 | CSS / Tailwind config | none | none | ✅ OK |
| T3 | Config (`src/config/`) | none | none | ✅ OK |
| T4 | Data (`src/data/`) | none | none | ✅ OK |
| T5 | Data (`src/data/`) | none | none | ✅ OK |
| T6 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T7 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T8 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T9 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T10 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T11 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T12 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T13 | UI component (`src/components/`) | e2e | e2e | ✅ OK |
| T14 | Page (`src/pages/`) | e2e | e2e | ✅ OK |
| T15 | Page (`src/pages/`) | e2e | e2e | ✅ OK |
| T16 | Page (`src/pages/`) | e2e | e2e | ✅ OK |
| T17 | Page (`src/pages/`) | e2e | e2e | ✅ OK |
| T18 | Page (`src/App.jsx`) | e2e | e2e | ✅ OK |
| T19 | Test file (`e2e/`) | e2e | e2e | ✅ OK |

---

## Requirement Coverage Map

| Requirement | Task(s) | Status |
| ----------- | ------- | ------ |
| REF-01 | T2 | Pending |
| REF-02 | T12, T13 | Pending |
| REF-03 | T2 | Pending |
| REF-04 | T2 | Pending |
| REF-05 | T14 | Pending |
| REF-06 | T10, T12, T13, T14, T15 | Pending |
| REF-07 | T15 | Pending |
| REF-08 | T16 | Pending |
| REF-09 | T14 | Pending |
| REF-10 | T13 | Pending |
| REF-11 | T6, T14 | Pending |
| REF-12 | T6 | Pending |
| REF-13 | T7, T14 | Pending |
| REF-14 | T3, T5, T6, T7 | Pending |
| REF-15 | T4, T8, T16 | Pending |
| REF-16 | T9, T16 | Pending |
| REF-17 | T9 | Pending |
| REF-18 | T4, T9 | Pending |
| REF-19 | T4, T9 | Pending |
| REF-20 | T8, T9 | Pending |
| REF-21 | T8 | Pending |
| REF-22 | T16 | Pending |
| REF-23 | T12, T13, T17, T18 | Pending |
| REF-24 | T11, T17 | Pending |
| REF-25 | T11 | Pending |
| REF-26 | T3, T11 | Pending |
| REF-27 | T3, T11 | Pending |
| REF-28 | T11 | Pending |
| REF-29 | T11 | Pending |
| REF-30 | T11 | Pending |
