# Execution Plan — "Editorial Case File" Redesign → Roadmap Delivery

This plan is split into two phases that **must run strictly in order**:

- **Phase 1 — UI/Theme Overhaul**: migrate off `styled-components` to Tailwind CSS + shadcn/ui and rebuild the site per the **"Editorial Case File" spec** (Swiss/International typographic style + 間 (ma) — space carries meaning, not decoration).
- **Phase 2 — Roadmap Delivery**: implement the outstanding checklist items from the `Roadmap` section of [`README.md`](./README.md), on top of the new design system.

Phase 2 assumes Phase 1 is fully merged first — several Phase 2 items (dark mode toggle, project filtering, project screenshots) are built with the new tokens/components, so building them before the overhaul would mean redoing them twice.

> **Design source update:** Phase 1 below now implements the "Editorial Case File" spec supplied by the user (warm off-white ground, hairline borders, mono metadata type, restructured project cards) instead of the earlier generic "dark base theme + fully sharp (0px) edges" draft. See **§0 Deltas from the original brief** before executing — a few things intentionally changed.

Checkboxes are for tracking progress as each step is actually executed; nothing in this plan has been applied to the code yet.

---

## 0. Deltas from the original brief (read this first)

The user's very first ask (turn 1) said "base theme into darker theme" and "roundy boxes → sharp edged shapes." The detailed "Editorial Case File" spec that follows supersedes both, more precisely:

| Original ask | Editorial Case File spec | Resolution |
|---|---|---|
| Base theme = dark | Base theme = **light**, warm off-white `#FAF9F5` ground, near-black `#141413` text. Dark is an *optional* `[data-theme="dark"]` variant, not the default. | Follow the spec: **light is the Phase 1 base theme.** Dark-mode tokens are defined now but the toggle to switch into them stays a Phase 2A deliverable (unchanged sequencing decision, just applied to the new palette). |
| Fully sharp edges (`radius: 0`) | Buttons "rounded 4px", card container "`rounded-md`" — a small, consistent radius, not fully square. | Follow the spec: global radius token ≈ `4px` (buttons/pills/cards), not `0`. This still reads as "sharp" next to the current 12–50px pill/circle shapes. |
| Remove emojis (general) | "No emoji in headings" (explicit), plus a broader avoid-list (gradients, glass, particles, skill bars, typing animation, centered paragraphs, bento grids). | Superset: apply the full original "remove emojis everywhere" **and** the new avoid-list. |
| Tailwind + shadcn/ui | Same stack, plus explicit component mapping (§5 below) and instruction to **override shadcn's default `Card` look** (shadow/rounded-xl/padding) rather than use it as-is. | Adopt as specified. |

Two open decisions flagged for the user before/while executing (not blocking the plan, just called out so they don't get silently decided):

1. **Naming mismatch**: the spec's §4 "remaining cards" list says *Vocaloid Shopping Mall, Public Transport Payment System, Self Intro Repository*, but the live `Projects.tsx` has no "Vocaloid Shopping Mall" card — it has **`VocaloCart`** (already given its own full problem/role/outcome treatment earlier in §4) and **`Interview Pipeline Tracker`** (also already detailed). Treating "Vocaloid Shopping Mall" as a stray reference to the old README name for the same repo (`vocaloidshop-fullstack`) — so the actual "restructure with existing copy" set is just **`Public Transport Payment System`** and **`Self Intro Repository`** (2 cards, not 3).
2. **Project screenshots**: the Phase 2A roadmap item "Include project screenshots in portfolio cards" has no slot in the spec's `ProjectCaseStudyCard` structure (header row → title/desc → problem/role/outcome grid → figures → footer — no image). This is consistent with the spec's "forensic, text-forward" philosophy, but conflicts with that roadmap line item. **Recommendation:** drop or heavily de-emphasize inline screenshots (e.g., an optional "View screenshot" link in the footer row instead of an inline image) to stay consistent with the editorial minimalism. Revisit explicitly at the start of Phase 2A.

---

## 1. Current state (for reference)

- Styling: `styled-components` (CSS-in-JS) everywhere, one shared `animatedGradient` (`src/styles/AnimatedBackground.ts`) used as the full-page background on almost every route.
- Shapes: heavy `border-radius` use — pill buttons/badges (20–50px), circular avatars/icons (50%), rounded cards (12–24px), glassmorphism (`backdrop-filter: blur(...)` + translucent white).
- Theme: colorful gradient (teal `#39c5bb`, purple `#764ba2`/`#667eea`, pink `#ff66cc`) on animated backgrounds; centered text on every page (`Home`, `About`, `Journey`, `Skills`, `Projects`, `Contact`, `Chinchiro`).
- Violations of the new avoid-list already in the codebase: gradient backgrounds (all pages), glassmorphism (all cards), a typing animation (`react-simple-typewriter` in `Home.tsx`), centered paragraphs (all pages), emoji in headings/body (`Home`, `Projects`, `Journey`, `Contact`, `Chinchiro`, `Footer`). No literal skill-percentage bars or bento grids exist today, so those two are non-issues.
- Icons: `react-icons` (`Fa*`, `SiQiita`).
- Projects data (`src/pages/Projects.tsx`, hardcoded array): `HR System Audit & Rebuild`, `Interview Pipeline Tracker`, `VocaloCart`, `Public Transport Payment System`, `Self Intro Repository` — 5 cards today, each currently a single paragraph + tech line + one link.

---

## Phase 1 — Editorial Case File redesign

### 1.1 Tooling & dependencies

- [ ] Add Tailwind CSS for Vite: `tailwindcss`, `@tailwindcss/vite`.
- [ ] Add shadcn/ui: `npx shadcn@latest init` → `components.json`, `src/lib/utils.ts` (`cn()`), Radix-based primitives.
- [ ] Add shadcn peer deps: `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`.
- [ ] Configure path alias `@/*` → `src/*` in `tsconfig.app.json` and `vite.config.ts` (`resolve.alias`), required by shadcn's generated imports.
- [ ] Add self-hosted fonts (no runtime Google Fonts `<link>`, per spec): `@fontsource/inter`, `@fontsource/noto-sans-jp`, `@fontsource-variable/jetbrains-mono` (or the non-variable `@fontsource/jetbrains-mono`) — import the needed weights in `src/main.tsx`/`src/index.css`.
- [ ] **Remove** `react-simple-typewriter` — the hero's typing animation is explicitly on the avoid-list; the new hero (§1.4) has a static H1 instead.
- [ ] Keep: `framer-motion` (used, but restrained — see §1.3 Motion), `react-router-dom`, `react-icons`/`lucide-react`, `howler` (Chinchiro game audio, unrelated to this redesign), `@emailjs/browser`.
- [ ] Remove once migration is verified: `styled-components`, `@types/styled-components`.

### 1.2 Design tokens

**Colors** — implement as CSS variables in `src/index.css`, mapped into `tailwind.config.ts`:

```css
:root {
  --bg: #FAF9F5;
  --fg: #141413;
  --muted: #6B6A66;
  --rule: #E4E2DC;
  --accent: #0E7C86;
}
[data-theme="dark"] {
  --bg: #141413;
  --fg: #FAF9F5;
  --muted: #9B9A94;
  --rule: #2A2A27;
  --accent: #2DD4C7;
}
```

- [ ] `:root` (light) is the **default/base theme** for Phase 1 — no `dark` class or `data-theme` attribute set on `<html>` out of the box.
- [ ] `[data-theme="dark"]` block is defined now but **unused** until Phase 2A wires up the toggle. Tailwind `darkMode` config needs to target the attribute selector (`darkMode: ['selector', '[data-theme="dark"]']` in Tailwind v3.4+/v4, or an equivalent `variant` config) instead of the shadcn-default `.dark` class, since the spec uses `data-theme` — note this explicitly in the shadcn setup so generated `dark:` utilities in installed components actually key off the right selector.
- [ ] Extend `tailwind.config.ts` colors: `bg`, `fg`, `muted`, `rule`, `accent` → `var(--bg)` etc., extending (not replacing) the default palette.
- [ ] Global radius token ≈ `4px` (buttons, badges, card container) — set via a `--radius: 0.25rem` variable and/or a shared `rounded-[4px]`/`rounded-md` utility, consistently reused rather than per-component ad hoc values.

**Typography**:

- [ ] `fontFamily.sans`: `['Inter', 'Noto Sans JP', '-apple-system', 'Segoe UI', 'sans-serif']`.
- [ ] `fontFamily.mono`: `['"JetBrains Mono"', 'ui-monospace', '"SF Mono"', 'Menlo', 'monospace']`.
- [ ] Scale (implement as Tailwind utility combinations, not ad hoc inline styles): H1 `text-[64px] font-semibold tracking-[-0.02em] leading-[1.08]`; H2 `text-[30px] font-semibold tracking-[-0.01em]`; body `text-base md:text-lg leading-[1.65] text-muted`; mono labels `text-[11px] md:text-[13px] uppercase tracking-[0.04em] font-mono`.
- [ ] Hierarchy via size/weight only — never color, except mono labels which may use `text-accent` or `text-muted`.
- [ ] Japanese text (if/when Phase 2B's JA toggle lands) uses the same `font-sans` stack (Noto Sans JP is in the fallback chain) with `leading-[1.8]` and a single weight — don't mix many weights in JA copy.

**Spacing**:

- [ ] 8px base unit throughout (Tailwind's default scale already is 4px-based/multiples of 8 for most steps — just standardize on multiples of 8 for section rhythm).
- [ ] Section horizontal padding: `px-5 md:px-16 lg:px-24` (20–24px mobile → 64–96px desktop).
- [ ] Generous vertical rhythm between sections — don't compress; avoid the current tight `padding: 6rem 1.5rem` one-size-fits-all pattern.

**Motion**:

- [ ] Keep `framer-motion`, but restrict to fade + translate-Y (8–12px) on scroll entry only, 200–300ms, ease-out — remove all continuous/looping animation (`float`, `pulse`, `gradientShift` keyframes, dice-roll spin) and all hover-scale effects (`whileHover={{ scale: ... }}` throughout `Home`, `Contact`, `Chinchiro`).
- [ ] Add a small `usePrefersReducedMotion()` hook (or inline `window.matchMedia('(prefers-reduced-motion: reduce)')` check) and skip/short-circuit the Framer Motion `initial`/`animate`/`transition` props when it's set — apply this once, e.g. via a shared `<Reveal>` wrapper component so every page reuses the same reduced-motion-aware fade/translate instead of hand-rolling it per page.

### 1.3 Global layout principles (apply to every page)

- [ ] No gradient backgrounds, no glassmorphism/`backdrop-filter: blur`, no particle/animated backgrounds — flat `bg-bg` (or `bg-fg`/`bg-card`-equivalent surface) everywhere. Delete `src/styles/AnimatedBackground.ts` once all consumers are migrated.
- [ ] No skill-percentage bars (n/a today, keep it that way if `Skills.tsx` is touched).
- [ ] No typing animation (remove `react-simple-typewriter` usage in `Home.tsx`).
- [ ] No centered paragraphs — left-align body copy on every page (`About`, `Journey`, `Skills`, `Contact`, `Chinchiro` all currently use `text-align: center`).
- [ ] No bento grids (n/a today).
- [ ] No emoji in headings, and — per the original broader ask — no emoji anywhere in the UI (titles, buttons, status text, results, code comments). Heaviest offenders: `Chinchiro.tsx`, `Projects.tsx` titles, `Home.tsx`, `Contact.tsx`, `Footer.tsx`.
- [ ] Hierarchy via size/weight, never color (except mono labels/`text-accent`).

### 1.4 Component-by-component plan

**Header / `Navbar.tsx`** (rebuild):
- [ ] Sticky, `border-b border-rule` (1px hairline, no shadow).
- [ ] Left: small `bg-accent` dot (`size-1.5 rounded-full`, the one intentional circle in the whole system — a status/eyebrow dot, not a shape motif) + mono label, e.g. `PORTFOLIO / DOSSIER — 2026`.
- [ ] Right: `EN / JA` toggle — mono text, active = `underline text-accent` + `aria-current="page"` (or `true`), inactive = `text-muted`. Implement as a plain accessible toggle now (2 buttons/links); actual locale switching is a Phase 2B item (`react-i18next`) — for Phase 1 it can be a static/non-functional or single-locale-only control, but must already be a real `<button>`/`<a>` pair, not a styled `<div>`.
- [ ] Mobile: reuse the same hairline/mono language; a shadcn `Sheet` is acceptable for the nav-links drawer, but keep it flat (no rounded pill dropdown like today's).

**Hero / `Home.tsx`** (full rebuild, replacing the gradient/typewriter/circular-avatar hero):
- [ ] 12-column grid (`grid grid-cols-12`), main content in left `col-span-8`, metadata block in right `col-span-4` (stack to 1 column on mobile).
- [ ] Mono eyebrow above the name: `CASE FILE No. 01 — SOFTWARE ENGINEER`.
- [ ] H1 = name (static, no typewriter).
- [ ] Body paragraph, `max-w-[640px]`, `text-muted`, left-aligned.
- [ ] Two CTAs: primary = shadcn `Button` (`variant="default"`, `bg-fg text-bg`, `rounded-[4px]`, mono label) "View case studies" → scrolls/links to `/projects`; secondary = `Button variant="outline"` (`border-rule`) "Get in touch" → `/contact`. No gradient/shadow on either.
- [ ] Right column: label/value rows (`Location`, `Languages`, `Focus`, `Status`) separated by a top `border-t border-rule`; `Status` value in `text-accent`.
- [ ] Bottom strip: mono `SELECTED WORK` index line listing project titles, with a `flex-grow` 1px `bg-rule` divider filling the remaining space (a plain `<div className="h-px bg-rule flex-1" />`, not a `Separator` with default styling).
- [ ] Remove: `Avatar`/circular photo, animated gradient wrapper, `StatsGrid`, `HighlightsCard`, `float`/`fadeInUp` keyframes, all emoji, all `whileHover={{ scale }}`.

**Project cards / `Projects.tsx`** (structural rewrite — largest content change in Phase 1):
- [ ] Extract the project list into `src/data/projects.ts` with a richer shape per project: `{ id, index, title, problem, role, outcome, figures?: {value, label}[], stack: string[], status: { kind: 'archived' | 'active' | 'live', label: string }, links: { source?: string, live?: string } }` — this also sets up Phase 2A's filtering/screenshots work to extend the same data file instead of another rewrite.
- [ ] Build a shared `ProjectCaseStudyCard` component (plain `div` with `border border-rule rounded-md` — **not** shadcn `Card` as-is, per §5) with, top to bottom:
  - Header row: mono index (e.g. `01 / SELECTED WORK`) left, status pill right, `border-b border-rule`.
  - Title (H2, no emoji) + description paragraph (`max-w-[680px]`, `text-muted`).
  - Problem/Role/Outcome 3-column grid, 1px gap filled with `bg-rule` (hairline dividers via grid-gap background trick), each cell: mono `text-accent` micro-label (`PROBLEM`/`ROLE`/`OUTCOME`) + one sentence at 14px.
  - Key figures row (optional per card — see below): number blocks, big number `text-[28px] font-semibold`, mono muted label underneath.
  - Footer row: mono tech-stack line (`·`-separated, `text-muted`) left, `READ CASE FILE →` (underlined link) right — becomes `VIEW LIVE →` + `SOURCE →` for `status.kind === 'live'`.
- [ ] Status pill variants (shadcn `Badge variant="outline"` + a manual dot span, per §5 — not `Badge`'s default filled look):
  - `archived`: `text-muted` label, neutral (`bg-muted`) dot.
  - `active`: `text-fg`/`text-muted` label, `bg-accent` dot, e.g. `IN PROGRESS — FRONTEND REDESIGN`.
  - `live`: `bg-accent` dot, label `LIVE`.
- [ ] Per-project content (per spec §4, resolving the naming note in §0):
  - **HR System Audit & Rebuild** (lead project): Problem "No source, no docs, no schema — only a deployed WAR"; Role "Independently initiated audit and rebuild lead"; Outcome "Findings informed a commercial build-vs-buy decision"; Figures `70+ backend issues · 28 security vulns · 28 schema issues · 142 files decompiled`; Status `Archived — Phase 3 of 7`.
  - **VocaloCart**: Problem "Spring Boot + Vite/React split slowing iteration"; Role "Solo migration to a unified Next.js monorepo"; Outcome "Backend/architecture solid; frontend redesign in progress"; Figures — pick 2–3 real, verifiable ones from the current stack list, or omit the figures row entirely if nothing honest fits; Status `In progress — frontend redesign`.
  - **Interview Pipeline Tracker**: Problem "Needed a fully local way to track interview pipelines with reminders"; Role "Solo build — Rust backend, React frontend"; Outcome "Shipped installers (NSIS/MSI); in daily personal use"; Figures optional (e.g. `60s poll interval · 0 cloud dependencies`); Status `Live (personal tool)`.
  - **Public Transport Payment System** and **Self Intro Repository**: keep existing description copy but restructure into the same problem/role/outcome + stack-footer shape instead of a single paragraph (write 1 sentence each for problem/role/outcome using the existing description as source material); these can skip the figures row.
- [ ] Only ever show real, verifiable numbers in the figures row — never invented stats (already satisfied by the copy above; keep this constraint when writing the two restructured cards).
- [ ] Resolve the **project screenshots** open decision (§0) before/while doing this section — default assumption if not revisited: no inline screenshots, optional "View screenshot" link only.

**Footer / `Footer.tsx`**:
- [ ] Flat `bg-bg` (or a slightly different neutral surface) with `border-t border-rule` (drop the current dark `#1f1f2e` slab + glow-on-hover icons).
- [ ] Delete the commented-out dead `ModeLinks` block (also removes stray emojis).
- [ ] Remove `💙` from the tagline copy; keep icon row (`react-icons`), drop the colored hover glow in favor of a simple `text-muted` → `text-fg`/`text-accent` hover per the "no color-only signaling except mono/accent" rule.

**Other pages (`About.tsx`, `Journey.tsx`, `Skills.tsx`, `Contact.tsx`, `Chinchiro.tsx`)** — not covered by the spec's explicit component breakdown (only Header/Hero/ProjectCaseStudyCard are spec'd in detail), so Phase 1 applies the same tokens/typography/motion/avoid-list rules for visual consistency, using Header/Hero/Projects as the reference language:
- [ ] `About.tsx`: left-align (currently already `text-align: left` for the paragraphs, good — just needs the color/type tokens and remove the gradient section background), drop the pulsing `::after` underline keyframe under "About Me" (continuous animation is on the avoid-list).
- [ ] `Journey.tsx`: replace circular timeline icon tiles with square/sharp tiles (`rounded-[4px]`, not `rounded-full`); replace the pill `Year` badge with a mono label (`text-accent font-mono text-xs`) instead of a colored pill; remove `🌏` from the subtitle; drop the gradient vertical rule line in favor of `bg-rule`.
- [ ] `Skills.tsx`: convert each category `Section` into the same hairline-bordered card language as the project cards (`border border-rule rounded-[4px]`, mono category label) and each `Badge` into a flat mono tag (`border border-rule text-xs font-mono uppercase`, not a colored pill) instead of the current gradient pill.
- [ ] `Contact.tsx`: left-align the form/copy, flat `bg-bg` section (no gradient wrapper), inputs/textarea as shadcn `Input`/`Textarea` with `rounded-[4px] border-rule`, submit as the primary `Button` style from the hero; replace the inline `✅/❌` status text with a `sonner` toast, and remove `💌` from the button label.
- [ ] `Chinchiro.tsx`: lowest priority for the editorial treatment (it's a standalone game page, not part of the recruiter-facing narrative) — apply the token/emoji rules (flat background, no emoji in title/results/buttons/rules, square dice tiles already close to sharp) but it does not need the 12-col/mono-label case-file layout; keep as a simpler flat-card game screen.

### 1.5 shadcn/ui mapping

| Mockup element | shadcn component | Notes |
|---|---|---|
| Primary/secondary CTA buttons | `Button` (`variant="default"` / `"outline"`) | Override radius to 4px via `className`, no shadow. |
| Status pill | `Badge` (`variant="outline"`) | Custom dot via `::before` or an inline `<span>`, colored per status kind. |
| EN/JA toggle | Plain custom toggle (2 controls) | `Tabs` is overkill with no content switch beyond a future locale route. |
| Case study card container | Plain `div` with `border-rule rounded-md` | **Not** `Card` as-is — its default shadow/rounded-xl/padding conventions are too generic; compose manually to match the hairline header/body/footer structure. |
| Rule dividers | Plain `div` with `bg-rule h-px` | Used for the hero's growing rule and the PRO grid's hairline dividers. |
| Mobile nav drawer | `Sheet` | Flat styling, no rounded pill panel. |
| Contact form fields | `Input`, `Textarea` | `rounded-[4px] border-rule`. |
| Contact submit feedback | `sonner` (toast) | Replaces inline `✅/❌` status text. |
| Skills category cards | Plain `div` (same pattern as case study card container) | Not `Card`. |

- [ ] Keep Radix primitives underneath where interactivity is needed (e.g. a future filter/tag system in Phase 2A), but don't let shadcn's default `Card` visual style leak into the case-file components.

### 1.6 Accessibility

- [ ] Verify contrast: `--fg` on `--bg` and `--muted` (`#6B6A66`) on `--bg` (`#FAF9F5`) both ≥ 4.5:1 (spec notes ~4.6:1 for muted — re-check with a contrast tool once implemented, and again if any token value is adjusted).
- [ ] All CTAs/links are real `<a>`/`<button>` elements, never a styled `<div onClick>` (audit `Navbar`'s hamburger and any card "click area" patterns during rebuild).
- [ ] `prefers-reduced-motion` respected for every Framer Motion entry (via the shared `<Reveal>`/hook from §1.2 Motion).
- [ ] EN/JA language toggle is a real control with `aria-current` (or equivalent), not color-only styling.

### 1.7 Verification sweep

- [ ] `rg` for emoji ranges across `src/**` — confirm zero remain (comments included).
- [ ] Confirm the global radius token is the *only* radius in play (no more `border-radius: 50%`/`50px` pill or circle shapes outside the intentional header status dot).
- [ ] Confirm no gradients, `backdrop-filter: blur`, or continuous/looping CSS keyframes (`float`, `pulse`, `gradientShift`, dice roll spin) remain.
- [ ] Confirm no `text-align: center` on body paragraphs (headings/hero eyebrow labels may still be intentionally centered only if the layout calls for it — the spec's hero is left-aligned, so this should be rare).
- [ ] Run a contrast checker against the final `--fg`/`--muted`/`--bg`/`--accent` values.
- [ ] Manually click through all 7 routes (`/`, `/about`, `/journey`, `/skills`, `/projects`, `/chinchiro`, `/contact`) at desktop and mobile widths, plus a `prefers-reduced-motion: reduce` pass.
- [ ] `npm run lint`, `npm run build` both clean.
- [ ] Remove `styled-components`/`@types/styled-components` and `react-simple-typewriter` from `package.json`, `npm install`, confirm no leftover imports (`rg "from 'styled-components'"`, `rg "react-simple-typewriter"`).
- [ ] Update `README.md` Tech Stack / Key Dependencies tables to say Tailwind CSS + shadcn/ui instead of Styled Components, and drop the typewriter library mention.

---

## Phase 2 — Roadmap delivery (per `README.md` → Roadmap)

Source checklist (today's `README.md`):

```text
Short-term:  dark mode toggle · project filtering by tech · resume/CV download button · project screenshots in cards
Medium-term: blog section w/ MDX · Japanese language toggle (日本語版) · Spring Boot backend for dynamic content · admin panel
Long-term:   migrate to Next.js (SSR/SSG) · analytics dashboard · real-time chat feature · custom domain + SSL (Route 53 + CloudFront)
```

Work through the sub-phases below **in order** (2A → 2B → 2C); each builds on assumptions from the previous one.

### 2A. Short-term goals (do first — pure frontend, builds directly on Phase 1's tokens/components)

- [ ] **Dark mode toggle**
  - The `[data-theme="dark"]` token block already exists from Phase 1 §1.2 — just need: a small theme context/hook that toggles `document.documentElement.dataset.theme` and persists to `localStorage`; a mono toggle control in `Navbar.tsx` (sun/moon `lucide-react` icon, no emoji), placed next to the EN/JA toggle.
  - Double-check the Tailwind `darkMode` selector config (set in Phase 1 to target `[data-theme="dark"]`) is actually wired correctly once real toggling is exercised — this was defined but inert in Phase 1.
- [ ] **Project filtering by technology**
  - `src/data/projects.ts` (from Phase 1) already has a `stack: string[]` per project — add a filter row above the case-study list using flat mono tag chips (same visual language as the Skills badges from §1.4), not a colored pill/`ToggleGroup` with default shadcn styling.
  - Client-side filter by selected tag(s); no backend needed yet.
- [ ] **Resume/CV download button**
  - Static PDF in `public/`; a `Button variant="outline"` (with `lucide-react` `Download` icon, mono label) on the Hero and/or header.
- [ ] **Project screenshots in cards** — **resolve the §0 open decision first.** If proceeding: add an `screenshot?: string` field to `src/data/projects.ts` and either (a) an optional expandable/lightbox trigger from the footer row ("View screenshot") to preserve the text-forward card shape, or (b) a deliberate visual exception discussed with the user before adding an image block to the otherwise imageless card structure.

### 2B. Medium-term goals (backend-dependent — start once 2A ships)

- [ ] **Spring Boot backend for dynamic content** (foundational for the rest of 2B)
  - New service exposing REST endpoints for projects/blog/skills content, so `src/data/projects.ts` becomes a fetched resource instead of a hardcoded file.
  - Decide hosting and CORS config so the Vercel-hosted frontend can call it.
- [ ] **Blog section with MDX**
  - New `/blog` and `/blog/:slug` routes; render MDX via `@mdx-js/rollup` (Vite plugin) or fetch from the new backend.
  - Reuse the Phase 1 hairline-card list pattern for the index, and `@tailwindcss/typography` (with radius/spacing overrides to match the 4px/rule tokens) for post bodies.
- [ ] **Japanese language toggle (日本語版)**
  - `react-i18next` (or a lightweight custom dictionary) wired into the already-present `Navbar.tsx` EN/JA control from Phase 1 (built as a real toggle then, functional now).
  - Extract all page copy into translation keys — largest content-migration item in this phase. JA copy uses the same `font-sans` stack (Noto Sans JP fallback) with `leading-[1.8]`, one weight, per Phase 1 typography tokens.
- [ ] **Admin panel for project management**
  - Minimal authenticated UI (flat hairline tables/forms matching the design system, not shadcn defaults) against the backend's CRUD endpoints.
  - Needs an auth decision (simple single-admin JWT vs. an identity provider) — flag for a decision before implementation.

### 2C. Long-term vision (largest scope — sequence last)

- [ ] **Migrate to Next.js (SSR/SSG)** — port routes/components (largely a lift-and-shift of the Phase 1 design system, which has first-class shadcn/Next support) off Vite/React Router.
- [ ] **Analytics dashboard** — add after the Next.js migration; private view reusing 2B's admin auth.
- [ ] **Real-time chat feature** — scope (visitor-to-owner contact chat vs. something else) needs clarifying with the user before design.
- [ ] **Custom domain with SSL (Route 53 + CloudFront)** — infra task requiring user-owned AWS access/billing; not to be automated unattended.

### 2D. Wrap-up

- [ ] As each roadmap item ships, tick it off in `README.md`'s Roadmap section (or move it to a "Shipped" list).
- [ ] Re-run the Phase 1 verification sweep (§1.7) after each sub-phase, since new pages/components are added throughout Phase 2 and must keep matching the design tokens.

---

## Sequencing summary

| Order | Phase | Depends on |
|---|---|---|
| 1 | Editorial Case File redesign: tokens, Header, Hero, ProjectCaseStudyCard, remaining pages, Tailwind + shadcn/ui migration | — |
| 2A | Dark mode toggle, project filtering, resume download, screenshots (decision pending) | Phase 1 |
| 2B | Spring Boot backend, MDX blog, Japanese toggle, admin panel | 2A |
| 2C | Next.js migration, analytics, real-time chat, custom domain/SSL | 2B |

Only Phase 1 is to be executed next; Phase 2's sub-phases are scoped now so the plan is visible end-to-end, but each will be re-confirmed before work starts given their growing infrastructure/decision dependencies (backend hosting, auth strategy, domain ownership, and the two open decisions flagged in §0).
