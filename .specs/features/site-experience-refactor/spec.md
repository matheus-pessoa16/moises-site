# Site Experience Refactor Specification

## Problem Statement

The current site uses a visual language that does not match the supplied Moisés identity reference, presents a flat, image-only gallery, and misses conversion paths for WhatsApp, campaigns, and job candidates. This refactor aligns the visual system and navigation with the new brand direction while making portfolio content easier to explore by service.

## Goals

- [ ] Deliver a responsive site experience using the specified blue, white, and light-blue base palette and the supplied logo.
- [ ] Improve conversion with contextual WhatsApp CTAs, a campaigns area, service-to-gallery navigation, and a careers application form.
- [ ] Organize the existing portfolio into filterable media albums with image carousels and Google Drive video support.

## Out of Scope

| Feature | Reason |
| --- | --- |
| CMS or admin dashboard | Campaigns, services, and gallery content remain code-managed in this refactor. |
| User accounts or candidate tracking dashboard | Applications are delivered by email only. |
| Automatic media ingestion from Google Drive | Editors manually provide an image URL or a Google Drive video ID. |
| Social feeds or social sharing | Only the official Instagram link is retained. |
| Replacing the existing contact form's delivery flow | Careers delivery is in scope; the existing quote form is not migrated unless separately requested. |

---

## Assumptions & Open Questions

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| WhatsApp destination | Use `https://wa.me/5584921768017` and a contextual, URL-encoded message per CTA. | The provided phone number is the official WhatsApp number. | Yes |
| Careers recipient | Send applications to `moises.nunes.cvisual@outlook.com`. | Provided by stakeholder. | Yes |
| Careers delivery architecture | The client submits application data and résumé as `multipart/form-data` to an n8n webhook (`https://n8n.devsr.com.br/webhook/moisesNunesAnalise`). The webhook URL is stored in a single easy-to-change code constant. n8n handles email routing, résumé analysis, and destination. | Stakeholder controls all downstream logic in n8n; no API keys or mail credentials are exposed in the client. | Yes |
| Resume upload limit | Allow PDF, DOC, and DOCX files up to 10 MB. | Keeps multipart payloads reasonable while accommodating standard résumés. | Yes |
| n8n routing | n8n receives the webhook payload and routes the application to the appropriate destination (email, storage, analysis). | Stakeholder manages destination inside n8n. | Yes |
| Campaign content | Supply code-managed placeholder campaign cards that can be replaced later. | Requested by stakeholder. | Yes |
| Campaign SVG | Render an externally hosted SVG URL as a full-width strip immediately below the hero, controlled by a code constant. | The stakeholder supplied the Google-hosted SVG pattern and requested a visibility condition. | Yes |
| Campaign visibility | A boolean constant defaults to `true`; changing it to `false` hides the SVG without affecting campaign cards. | Provides the requested explicit display control. | Yes |
| Gallery grouping | Convert existing flat projects into albums grouped by their existing category; album media use an `id` and `subId`. | Requested by stakeholder and preserves existing content. | Yes |
| Gallery video source | Build Google Drive preview URLs from an editor-provided Drive file ID. | The provided Drive URL and iframe demonstrate the required format. | Yes |
| Logo asset | Use `https://lh3.googleusercontent.com/d/18xOXZzf3FW_ptUF9UNNSdTxL6ec5QnfY=w1000?authuser=0` as the logo URL. | Provided by stakeholder. | Yes |

**Open questions:** none — all resolved.

---

## User Stories

### P1: Brand-aligned visual foundation

**User Story**: As a visitor, I want a site that uses the Moisés visual identity so that I recognize the business and can read its content comfortably.

**Why P1**: The new visual identity is the primary purpose of the refactor.

**Acceptance Criteria**:

1. **REF-01** — WHEN a visitor loads any public route THEN the system SHALL use `#01154A` as the primary site background, `#FFFFFF` for primary titles, and `#DAF5FC` for subtitles and supporting prominent text.
2. **REF-02** — WHEN a visitor views the header or footer THEN the system SHALL display the supplied Moisés logo rather than the currently referenced logo.
3. **REF-03** — WHEN a visitor views common cards, controls, panels, and media containers THEN the system SHALL use a default corner radius of `0.7rem` unless a non-rounded shape is explicitly required.
4. **REF-04** — WHEN interactive controls receive keyboard focus THEN the system SHALL expose a visible focus indicator with sufficient contrast against the blue background.
5. **REF-05** — WHEN a visitor opens the home page THEN the header and hero SHALL follow the supplied reference's dark-blue visual hierarchy: logo/navigation above a large hero image and headline content.

**Independent Test**: Open the home page and a secondary route at desktop and mobile widths; verify palette, logo, readable focus state, and radius treatment.

---

### P1: Direct commercial navigation

**User Story**: As a prospective customer, I want direct WhatsApp contact and a path from a service to relevant work so that I can request a quote quickly and assess the company's work.

**Why P1**: This provides the core lead-generation flow.

**Acceptance Criteria**:

1. **REF-06** — WHEN a visitor selects a WhatsApp CTA in the header, hero, service page, footer, or contact page THEN the system SHALL open `https://wa.me/5584921768017` in a new browsing context with a contextual prefilled message.
2. **REF-07** — WHEN a visitor views a service detail THEN the system SHALL see a “Veja mais” action that navigates to `/galeria` with that service's category selected.
3. **REF-08** — WHEN the gallery opens from a service action THEN the system SHALL render only albums whose category matches the requested service category.
4. **REF-09** — WHEN a visitor views the home page THEN the system SHALL not render the existing “Nossos serviços” card grid.
5. **REF-10** — WHEN a visitor views the footer THEN the system SHALL display the official Instagram destination `https://www.instagram.com/moisesnunescv/` and SHALL NOT display Facebook or LinkedIn actions.

**Independent Test**: Navigate from each service to the gallery, inspect the selected category, and activate each WhatsApp CTA to verify the generated destination and message.

---

### P1: Campaigns strip

**User Story**: As a visitor, I want to see current campaigns below the hero so that I can discover highlighted offers or projects.

**Why P1**: Campaigns are a requested new home-page conversion surface.

**Acceptance Criteria**:

1. **REF-11** — WHEN the campaign banner visibility constant is `true` THEN the home page SHALL render the configured SVG directly below the hero across the full viewport width.
2. **REF-12** — WHEN the campaign banner visibility constant is `false` THEN the home page SHALL not render the SVG strip and SHALL preserve the page layout without empty reserved space.
3. **REF-13** — WHEN a visitor views the campaign area THEN the system SHALL render replaceable example campaign cards with title, description, visual, and CTA data defined in code.
4. **REF-14** — WHEN an editor replaces the campaign SVG URL or campaign card data THEN the site SHALL render the replacement without requiring structural component changes.

**Independent Test**: Toggle the visibility constant and verify both states; replace one sample campaign data item and confirm it renders correctly.

---

### P1: Gallery albums and media

**User Story**: As a visitor, I want portfolio media organized in albums that I can navigate without cropped images so that I can inspect related work effectively.

**Why P1**: The gallery is central to demonstrating the company's services.

**Acceptance Criteria**:

1. **REF-15** — WHEN the gallery loads THEN the system SHALL render existing portfolio content as albums containing `id`, category, title, cover media, and an ordered set of media items with `subId`.
2. **REF-16** — WHEN a visitor selects an album THEN the system SHALL open a modal with the complete ordered media set for that album and next/previous controls whenever more than one item exists.
3. **REF-17** — WHEN the visitor reaches the first or last media item THEN the carousel SHALL continue cyclically to the last or first item respectively.
4. **REF-18** — WHEN an album media item has `type: 'google-drive-video'` and a Drive file ID THEN the system SHALL render an iframe whose source is `https://drive.google.com/file/d/{id}/preview` with a descriptive title and allow attribute.
5. **REF-19** — WHEN an editor supplies only a Google Drive video ID THEN the system SHALL construct the preview URL without requiring pasted iframe markup.
6. **REF-20** — WHEN an image is rendered in the gallery grid or modal THEN the system SHALL preserve the complete image without cropping it; empty space around non-matching proportions is acceptable.
7. **REF-21** — WHEN a gallery card renders THEN its caption SHALL occupy less visual height than in the current hover-overlay presentation and media SHALL be visually prioritized.
8. **REF-22** — WHEN the visitor uses a category filter or a gallery deep-link THEN the system SHALL show only albums in the selected category and shall retain a visible selected-filter state.

**Independent Test**: Select an album with multiple media entries, cycle from first to last and last to first, inspect a portrait/landscape image for cropping, and add a Drive ID item to confirm it plays in the modal.

---

### P1: Careers application

**User Story**: As a job candidate, I want to submit my contact details and résumé from a careers page so that Moisés Nunes receives my application by email.

**Why P1**: This is a requested new public conversion path.

**Acceptance Criteria**:

1. **REF-23** — WHEN a visitor uses site navigation THEN the system SHALL expose a “Trabalhe Conosco” destination that resolves to `/trabalhe-conosco`.
2. **REF-24** — WHEN a visitor opens `/trabalhe-conosco` THEN the system SHALL show a candidate form with required name, email, phone, message, and résumé upload controls.
3. **REF-25** — WHEN the candidate submits missing or invalid required values THEN the system SHALL prevent submission and display field-level validation feedback.
4. **REF-26** — WHEN the candidate uploads a résumé outside the allowed type or size THEN the system SHALL prevent submission and describe the accepted constraint.
5. **REF-27** — WHEN a valid application is submitted THEN the system SHALL send the application details and résumé file as `multipart/form-data` to the configured n8n webhook URL.
6. **REF-28** — WHEN the n8n webhook accepts the application delivery request THEN the system SHALL show a success confirmation and clear the form.
7. **REF-29** — WHEN application delivery fails or times out THEN the system SHALL preserve entered fields and résumé selection where browser security permits, show an actionable error message, and allow a retry without creating a duplicate client submission while a request is in flight.
8. **REF-30** — WHEN the n8n webhook returns an error or non-2xx status THEN the system SHALL display a generic retryable error message and SHALL NOT expose internal webhook or n8n implementation details to the visitor.

**Independent Test**: Submit a valid PDF résumé to the n8n webhook and verify delivery; submit invalid type/size and missing fields; simulate a failed webhook response and verify retry behavior and preserved form values.

---

## Edge Cases

- WHEN the supplied logo or campaign SVG cannot load THEN the system SHALL show an accessible textual fallback and maintain layout stability.
- WHEN a gallery category has no albums THEN the system SHALL show an explicit empty state rather than an empty grid.
- WHEN an album has one media item THEN the system SHALL render the media without disabled-looking or nonfunctional carousel navigation.
- WHEN a Google Drive video fails to load in its iframe THEN the system SHALL keep the modal usable and display a fallback link to the Drive file view URL.
- WHEN a campaign card has no CTA destination THEN the system SHALL render it as non-clickable content rather than a broken link.
- WHEN a candidate submits the form multiple times while delivery is pending THEN the system SHALL permit only one in-flight delivery request.
- WHEN the n8n webhook rejects a malformed or oversized attachment THEN the system SHALL display a safe validation error without exposing webhook internals or provider response details.

---

## Implicit-Requirement Dimensions

| Dimension | Requirement / resolution |
| --- | --- |
| Input validation & bounds | Careers fields, file type, and file-size validation are enforced client-side before submitting to the n8n webhook (REF-25, REF-26, REF-30). |
| Failure / partial-failure states | Careers delivery failure preserves candidate data and offers retry (REF-29); media failures use fallbacks. |
| Idempotency / retry / duplicate handling | Client prevents concurrent submission; server endpoint should accept an idempotency key or equivalent duplicate guard during a bounded retry window. |
| Auth boundaries & rate limits | The n8n webhook URL is the only server-side credential; it is stored in a single code constant. n8n handles abuse protection and rate limiting on its side. |
| Concurrency / ordering | Album media ordering follows source data order; one application can be in flight per form. |
| Data lifecycle / expiry | The site does not persist applications or résumés; n8n and downstream email retention are controlled outside this application. |
| Observability | n8n logs delivery outcome metadata; the client logs only success/failure status. |
| External-dependency failure | n8n webhook failure returns a generic retryable message; webhook internals and n8n response details stay private. |
| State-transition integrity | Campaign banner rendering has a Boolean show/hide state; gallery selection transitions between filter, album, and media indices. |

---

## Requirement Traceability

| Requirement ID | Story | Phase | Status |
| --- | --- | --- | --- |
| REF-01 to REF-05 | Brand-aligned visual foundation | Design | Pending |
| REF-06 to REF-10 | Direct commercial navigation | Design | Pending |
| REF-11 to REF-14 | Campaigns strip | Design | Pending |
| REF-15 to REF-22 | Gallery albums and media | Design | Pending |
| REF-23 to REF-30 | Careers application | Design | Pending |

**Coverage:** 30 total requirements; 30 pending design mapping.

---

## Success Criteria

- [ ] Public routes consistently apply the supplied visual identity and responsive layout.
- [ ] Every specified WhatsApp CTA opens the official destination with context.
- [ ] A visitor can reach category-filtered gallery albums from a service and browse all media without cropped images.
- [ ] An editor can add a Google Drive video by entering only its file ID.
- [ ] A candidate can submit a validated résumé application that reaches the n8n webhook for downstream routing without client-side secret exposure.
- [ ] Campaign content can be shown or hidden through a single code constant and replaced through data/URL changes.
