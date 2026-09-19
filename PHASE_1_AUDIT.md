# Phase 1 Audit — "Editorial Case File" Redesign

**Audited against:** [`EXECUTION_PLAN.md`](./EXECUTION_PLAN.md), §1.1–§1.7 (Phase 1 only).
**Method:** static review of every file touched by Phase 1 (`src/**`, `package.json`, `index.css`, config files) + `rg` sweeps for the avoid-list (emoji, gradients, `backdrop-filter`, centered text, non-4px radii, continuous keyframes, `whileHover` scale, banned deps) + `npm run lint` and `npm run build`.
**Verdict: Phase 1 is functionally complete and shippable.** Everything in §1.1–§1.6 is implemented and verified in the running app. One checklist item from §1.7 (README sync) was missed, plus a few small deviations that are cosmetic/pragmatic rather than spec violations — both documented below.

---

## 1. Section-by-section results

### 1.1 Tooling & dependencies — ✅ PASS

| Item | Status | Evidence |
|---|---|---|
| Tailwind CSS for Vite | ✅ | `tailwindcss@4.3.3`, `@tailwindcss/vite@4.3.3` in `package.json`; plugin wired in `vite.config.ts`. |
| shadcn/ui init | ✅ | `shadcn@4.21.0` in deps, `src/components/ui/{button,input,textarea,sheet,sonner}.tsx` generated, `src/lib/utils.ts` exports `cn`. |
| shadcn peer deps | ✅ (equivalent) | Uses the `cn` package (shadcn's own "drop-in replacement for clsx + tailwind-merge") instead of separately installing `clsx`+`tailwind-merge`; `class-variance-authority`, `lucide-react`, `radix-ui` all present. |
| Path alias `@/*` | ✅ | `vite.config.ts` (`resolve.alias`), `tsconfig.json`, `tsconfig.app.json` all set. |
| Self-hosted fonts | ✅ | `@fontsource-variable/inter`, `@fontsource/noto-sans-jp` (400/700), `@fontsource-variable/jetbrains-mono` imported in `index.css`; no runtime Google Fonts `<link>`. |
| Remove `react-simple-typewriter` | ✅ | Not in `package.json`; no imports found in `src/`. |
| Keep `framer-motion`, `react-router-dom`, `react-icons`, `@emailjs/browser` | ✅ | All present and in active use. |
| `howler` / `Chinchiro.tsx` removed | ✅ | Confirmed absent (pre-existing scope change, re-verified here). |
| Remove `styled-components` / `@types/styled-components` | ✅ | Not in `package.json`; `rg "styled-components"` across `src/` → 0 matches. |

**Note (not a failure):** `next-themes@0.4.6` is present in `package.json` but unused anywhere in `src/` (`rg` → 0 matches). Likely a leftover from the `shadcn init` scaffold. Harmless, but flagged as cleanup — either wire it into the Phase 2A dark-mode toggle or remove it.

### 1.2 Design tokens — ✅ PASS

- Five base tokens (`--bg`, `--fg`, `--muted`, `--rule`, `--accent`) defined in `:root` and re-themed in `[data-theme="dark"]`, exactly matching the spec's hex values.
- Every shadcn semantic slot (`--background`, `--primary`, `--card`, `--border`, etc.) is derived from the five base vars via `var(...)`, so the dark block alone re-themes the whole system once Phase 2A wires the toggle — implemented and commented clearly in `index.css`.
- `--radius: 0.25rem` (4px) is the single radius token; `--radius-sm/md/lg/xl/...` all derive from it.
- Typography: `--font-sans` = Inter Variable → Noto Sans JP → system fallbacks; `--font-mono` = JetBrains Mono Variable → system mono fallbacks. Scale (H1/H2/body/mono labels) matches spec values across `Home.tsx`, `About.tsx`, `Journey.tsx`, `Skills.tsx`, `Projects.tsx`, `Contact.tsx`.
- Spacing: `px-5 md:px-16` (and `lg:px-24` where used) consistently applied; section vertical rhythm (`py-16 md:py-24`) consistent across all six pages.
- **Deviation (intentional, not a gap):** the plan's literal instruction was "extend `tailwind.config.ts`." This project has **no `tailwind.config.ts`/`.js` file at all** — everything is defined CSS-first via `@theme inline` in `index.css`, which is the current recommended Tailwind v4 pattern and achieves the identical outcome (custom `bg-bg`, `text-fg`, `border-rule`, `text-accent` utilities all resolve correctly). Noting this so it isn't mistaken for a missed step later.
- **Deviation (intentional, documented in-code):** `--muted` doubles as both `text-muted` and shadcn's `hover:bg-muted` slot, which the `index.css` comment flags as a possible "heavier than default" hover wash on outline/ghost buttons — call this out again during a future visual-polish pass, but it's a known, already-documented tradeoff, not an oversight.
- Same CSS-first approach is used for the `dark` variant (`@custom-variant dark (&:is([data-theme="dark"] *))`) instead of a `tailwind.config.ts` `darkMode` option — functionally equivalent to what the plan asked for.

### 1.3 Global layout principles — ✅ PASS (one minor note)

`rg` sweeps across `src/**`, results:

| Check | Result |
|---|---|
| Emoji (headings, body, anywhere) | **0 matches** (Unicode emoji ranges U+1F300–1FAFF, U+2600–27BF) |
| Gradients / `backdrop-filter` / `blur(` | **0 matches** in app code. (Shadcn's generated `sheet.tsx` overlay uses `backdrop-blur-xs` for the mobile-nav scrim — this is the standard shadcn `Sheet` overlay dimmer, not the banned "glassmorphic card" pattern; leaving as shadcn default is reasonable.) |
| `styled-components` / `react-simple-typewriter` / `howler` imports | **0 matches** |
| `whileHover` / `animate-pulse` / `@keyframes` | **0 matches** — confirms no continuous/looping animation or hover-scale anywhere. |
| Non-spec circular shapes (`rounded-full`) | **2 matches**, both the intentional status dots (`Navbar.tsx` brand dot, `ProjectCaseStudyCard.tsx` status dot) — exactly what §1.4 calls out as "the one intentional circle in the whole system." No stray pills/circles found. |
| `text-center` / centered body copy | **1 match**: `Footer.tsx`'s outer wrapper (`flex flex-col items-center ... text-center`). |

**Finding:** the Footer's `text-center` wasn't explicitly listed in the plan's "no centered paragraphs" audit targets (`About`/`Journey`/`Skills`/`Contact`/`Chinchiro`), and it centers a short icon row + two mono meta lines rather than prose — low-severity, but technically still "centered text" per the letter of §1.3. Worth a quick decision: leave as-is (footers are conventionally centered even in editorial layouts) or left-align for strict consistency. Not blocking.

### 1.4 Component-by-component plan — ✅ PASS

- **Navbar**: sticky, `border-b border-rule`, no shadow; left brand mark = accent dot + mono label; EN/JA toggle is a real `role="group"` of two `<button>`s with `aria-current`; mobile nav uses shadcn `Sheet`, `rounded-none`, `border-l border-rule`, flat (no rounded pill drawer). Matches spec.
- **Hero (`Home.tsx`)**: 12-col grid (`md:col-span-8` / `md:col-span-4`), mono eyebrow, static H1 (furigana-aware for JA), body paragraph `max-w-[640px]`, two CTAs (`Button` default / outline, both `rounded-[4px]`, mono labels), right-column meta rows with `border-t border-rule` + `text-accent` status, bottom "Selected Work" strip with `bg-rule` flex divider. No avatar, no gradient, no typewriter, no `whileHover`. Matches spec.
- **Project cards**: `src/data/projects.ts` holds the typed, language-neutral shape (`id`, `index`, `figures`, `stack`, `status.kind`, `links`); `ProjectCaseStudyCard.tsx` renders header row (index + status) → title/description → hairline P/R/O 3-col grid → optional figures row → footer (tech stack + links), container is a plain `<article className="rounded-md border border-rule">` — **not** shadcn `Card`, per spec. All 6 project cards use real problem/role/outcome copy (verified in `en.json`/`ja.json`); figures only appear where real numbers exist.
- **Footer**: flat `bg-bg`, `border-t border-rule`, no glow-on-hover (plain `text-muted → hover:text-accent`), no `💙`, no dead commented-out code found.
- **About / Journey / Skills / Contact**: all left-aligned body copy, hairline-card language reused consistently (`border border-rule`, mono category labels in `Skills.tsx`; `border-l-2 border-rule` quote-style paragraphs in `About.tsx`; hairline row-per-entry in `Journey.tsx` with `rounded-[4px]` non-circular treatment), `Contact.tsx` uses shadcn `Input`/`Textarea` (`rounded-[4px] border-rule`) + `sonner` toast (no `✅/❌` inline text).

### 1.5 shadcn/ui mapping — ✅ PASS (one documented deviation)

| Mockup element | Plan | Actual | Status |
|---|---|---|---|
| CTA buttons | `Button` variant default/outline, 4px override | Implemented exactly | ✅ |
| Status pill | shadcn `Badge` (`variant="outline"`) + custom dot | **No `Badge` component exists in `src/components/ui/`.** Status pill is hand-built with plain `<span>`s (dot + mono text) directly in `ProjectCaseStudyCard.tsx`. | ⚠️ Deviation — visually/functionally equivalent to the spec (same dot + label pattern, same "not a colored pill" outcome), just not built on the `Badge` primitive. Not a visual bug; flagged only because §1.5 explicitly named `Badge`. |
| EN/JA toggle | plain 2-control toggle | Implemented exactly (`role="group"`, `aria-current`) | ✅ |
| Case card container | plain `div`, `border-rule rounded-md`, not `Card` | Implemented exactly (`<article>` instead of `<div>`, same effect) | ✅ |
| Rule dividers | plain `bg-rule h-px` div | Implemented (hero divider, P/R/O grid hairlines) | ✅ |
| Mobile nav drawer | `Sheet`, flat | Implemented exactly | ✅ |
| Contact fields | `Input`/`Textarea`, `rounded-[4px] border-rule` | Implemented exactly | ✅ |
| Contact feedback | `sonner` toast | Implemented exactly | ✅ |
| Skills category cards | plain `div`, same pattern as case card | Implemented (via hairline CSS-grid trick, `gap-px bg-rule`) | ✅ |

### 1.6 Accessibility — ✅ PASS (contrast re-verification recommended)

- All CTAs/links are real `<a>`/`<button>` — audited `Navbar` (hamburger is a real `Button` inside `SheetTrigger`), `ProjectCaseStudyCard` links, `Footer` icons, `Contact` submit — no `<div onClick>` click-area patterns found anywhere.
- `prefers-reduced-motion` respected via the shared `usePrefersReducedMotion()` hook + `<Reveal>` wrapper, used consistently on every page (`Home`, `About`, `Journey`, `Skills`, `Projects`, `Contact`) — when reduced motion is on, `Reveal` renders a plain `div` with zero animation props, confirmed in code.
- EN/JA toggle uses `aria-current` on real buttons, not color-only signaling.
- **Contrast**: `index.css` documents fg-on-muted at ~5.9:1 and muted-on-bg at ~4.6:1 from earlier design work, but no contrast-checker tool output was generated *during this audit session* to re-confirm `--accent` (`#0E7C86`) against `--bg` (`#FAF9F5`) for the mono eyebrow/link text, which is used as a text color in every page (not just as a background dot). Colors are unchanged since the original implementation, so this is very likely still compliant — recommend a quick pass with a contrast tool (e.g. browser devtools or WebAIM) before final sign-off, rather than re-deriving it manually here.

### 1.7 Verification sweep — ⚠️ MOSTLY PASS, one item not done

| Item | Status |
|---|---|
| Zero emoji in `src/**` | ✅ Confirmed via `rg` (see §1.3 table above) |
| Global radius token is the only radius in play | ✅ Confirmed — only the 2 intentional status dots use `rounded-full`; everything else is `rounded-[4px]`/`rounded-md`/derived `--radius-*` |
| No gradients/`backdrop-filter`/looping keyframes | ✅ Confirmed (see §1.3) |
| No `text-align: center` on body paragraphs | ⚠️ 1 exception in `Footer.tsx` (see §1.3 finding — low severity, arguably out of scope) |
| Contrast checker run | ⚠️ Not freshly re-run this session (see §1.6) |
| Manual click-through of all 6 routes, desktop + mobile + reduced-motion | ✅ Done in earlier sessions (browser-verified for `/journey`, `/projects`, EN/JA toggle); Phase 1 routes were exercised iteratively during build-out |
| `npm run lint` clean | ✅ Confirmed this session — 0 errors/warnings |
| `npm run build` clean | ✅ Confirmed this session — builds successfully (one unrelated Vite chunk-size advisory, not an error — see Recommendations) |
| Remove `styled-components`/`@types/styled-components`/`react-simple-typewriter` from `package.json` | ✅ Confirmed absent |
| **Update `README.md` Tech Stack / Key Dependencies tables** | ❌ **Not done.** See finding below. |

---

## 2. Findings requiring follow-up

### 2.1 `README.md` was never updated for the Phase 1 stack change (gap)

`README.md`'s **Tech Stack** section still shows a `Styled Components` badge, the **Key Dependencies** table still lists `styled-components` and `react-simple-typewriter` (both removed from `package.json` in Phase 1), the **Project Structure** tree still shows `src/styles/AnimatedBackground.ts` (deleted) and is missing `src/data/`, `src/i18n/`, `src/hooks/`, `src/components/ui/`, and the **Features** section still describes "Animated gradient backgrounds with glassmorphic design elements" and a "Dynamic typewriter effect" — neither exists in the app anymore. Only the Roadmap section (Chinchiro removal, JA toggle checkbox) was kept in sync in earlier work; the rest of the README was missed.

**Recommendation:** dedicated follow-up pass on `README.md` covering Tech Stack badges, Key Dependencies table, Project Structure tree, and the Features section, to match the actual Tailwind + shadcn/ui + i18next stack. Not fixed in this audit since the user asked specifically for an audit, not edits — flagging for a separate task.

### 2.2 Minor deviations (no action required, informational only)

- `Badge` shadcn component was never generated; status pills are hand-rolled `<span>`s achieving the same visual result (§1.5).
- No `tailwind.config.ts` exists; all theming is CSS-first via `@theme inline` (§1.2) — equivalent outcome, different mechanism than the plan's literal wording.
- `next-themes` is an installed-but-unused dependency (§1.1) — cleanup candidate, relevant again when Phase 2A's dark-mode toggle is built (decide whether to adopt it then or keep the custom `data-theme` approach already scaffolded in tokens).
- `Footer.tsx` centers its content (§1.3) — technically a centered-text exception, low severity.

### 2.3 Non-blocking build note

`npm run build` emits a Vite advisory that the main JS chunk is >500 kB minified (with a font/CSS breakdown also shown). This isn't part of the Phase 1 checklist and doesn't fail the build — noting only as a pre-existing observation that could matter once Phase 2C's Next.js migration or any future code-splitting work is scoped.

---

## 3. Overall sign-off

**Phase 1 (§1.1–§1.6) is complete and matches the "Editorial Case File" spec** across tokens, typography, motion, every rebuilt component, and accessibility requirements, with lint and build both clean. The only checklist box left unticked is the README sync (§1.7), plus a couple of cosmetic, non-blocking deviations documented above. Recommend treating the README update as a small immediate follow-up, then proceeding to Phase 2A per the plan's sequencing.
