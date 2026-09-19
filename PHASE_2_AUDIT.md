# Phase 2 (2A) Audit — Short-Term Roadmap Delivery

**Audited against:** [`EXECUTION_PLAN.md`](./EXECUTION_PLAN.md) §2A, and the short-term goals in [`README.md`](./README.md)'s Roadmap.
**Scope:** this document covers **Phase 2A only** (the four short-term items). Phase 2B/2C have not started.
**Method:** static review of every file touched by 2A + `rg` sweeps for stale references + `npm run lint` / `npm run build` + live browser verification of dark mode, persistence, and filtering on the running dev server.
**Verdict: Phase 2A is complete.** All four short-term roadmap items are implemented, verified working end-to-end, and both planning docs (`EXECUTION_PLAN.md`, `README.md`) are in sync with the code.

---

## 1. What shipped

### 1.1 Dark mode toggle — ✅ done

| Piece | File | Notes |
|---|---|---|
| Theme state + persistence | `src/theme.ts` | `applyTheme()` sets/removes `data-theme="dark"` on `<html>` and writes to `localStorage` (`theme` key). `getInitialTheme()` defaults to `'light'` unless a stored value exists. |
| Flash-of-wrong-theme guard | `index.html` | Inline `<script>` in `<head>` reads `localStorage.theme` and applies `data-theme="dark"` before first paint, so a returning dark-mode visitor doesn't see a light flash. |
| Shared state | `src/hooks/useTheme.tsx` | `ThemeProvider` (React Context) + `useTheme()` hook exposing `{ theme, setTheme, toggleTheme, isDark }`. Wraps the whole app in `App.tsx` — this was a deliberate fix during implementation: an earlier draft used a bare `useState` hook per-component, which would have desynced the header's icon from any other consumer; Context makes it a single source of truth. |
| UI control | `src/components/Navbar.tsx` | `ThemeToggle` — real `<button>`, `aria-pressed`, `lucide-react` `Sun`/`Moon` icon (no emoji), placed next to the EN/JA toggle in both the desktop header and the mobile `Sheet` drawer. |
| Toast theming | `src/components/ui/sonner.tsx` | Switched from the unused `next-themes` import to the app's own `useTheme()`, so toast notifications also flip with the site theme. |
| Design tokens | `src/index.css` | Already had `@custom-variant dark (&:is([data-theme="dark"] *))` and the `[data-theme="dark"]` token block from Phase 1 — this phase only had to wire the toggle, not define new tokens. |

**Live-verified this session:** clicked the toggle on `/`, confirmed via CDP that `document.documentElement.dataset.theme === 'dark'` and `localStorage.getItem('theme') === 'dark'`, and confirmed via screenshot that the background, text, borders, and every CTA button re-themed correctly with no flash-of-unstyled-content, broken contrast, or leftover light-mode surfaces. Re-verified the state carried over when navigating from `/` to `/projects` (Context persists across route changes, as expected). Toggled back to light and confirmed the header control released correctly.

### 1.2 Project filtering by technology — ✅ done

| Piece | File | Notes |
|---|---|---|
| Tag extraction | `src/data/projects.ts` | `getUniqueStackTags()` — dedupes and alphabetically sorts every `stack[]` entry across all projects (26 unique tags today). |
| Filter UI | `src/pages/Projects.tsx` | Hairline-bordered filter panel (`border border-rule`, matches the case-card language) above the project list: mono "Filter by technology" label, flat mono chips (`rounded-[4px] border`, **not** a colored pill or default shadcn `ToggleGroup`), a "Clear filters" link (only shown when a filter is active), and a "Showing X of Y case files" count line. |
| Filter logic | `src/pages/Projects.tsx` | Client-side, multi-select **OR** semantics — a project is shown if its stack includes *any* selected tag. Empty selection = show all (no "0 results" trap on first load). |
| Empty state | `src/pages/Projects.tsx` | If a selection matches nothing, shows a plain "No case files match the selected technologies" line instead of an empty blank area. |

**Live-verified this session:** loaded `/projects`, confirmed all 26 stack tags render as chips; clicked "Rust" and confirmed the list narrowed from 5 to 1 card (Interview Pipeline Tracker — the only project with Rust in its stack), the count line updated to "Showing 1 of 5 case files", and a "Clear filters" control appeared. Confirmed filter selection state is independent of the dark-mode toggle (toggling theme did not reset the active filter).

### 1.3 Résumé / CV download — ✅ done

| Piece | File | Notes |
|---|---|---|
| File list | `src/data/downloads.ts` | `RESUME_DOWNLOADS` — two entries pointing at the two PDFs you placed in `public/files/`: `WooSunmyung様_履歴書 0428.pdf` (résumé) and `禹 善明 (ウ ソンミョン)_職務経歴書_0827.pdf` (CV). Paths are `encodeURIComponent`-escaped since both filenames contain non-ASCII characters and a space. |
| Existence gating | `src/hooks/useFileExists.ts` | `HEAD` request + **`Content-Type` check**, not just `res.ok`. This mattered in practice: both Vite's dev server and the original `vercel.json` SPA rewrite return `200 text/html` for *any* unmatched path (including a nonexistent `/resume.pdf`), which would otherwise show a download button that silently serves the wrong file. The hook only treats a response as "real" if the content type matches the expected one (`application/pdf`). |
| UI | `src/pages/Home.tsx` | `ResumeDownloadButton` — one outline `Button` per file, `lucide-react` `Download` icon, `download` attribute, rendered next to the existing hero CTAs; each button independently checks its own file's existence and hides itself if missing. |
| Deployment correctness | `vercel.json` | Rewrite pattern widened from excluding only `images/` to excluding `images/`, `files/`, and (for backward compatibility) `resume.pdf`, so the production SPA fallback doesn't swallow requests to the PDFs once deployed. |

**Verified this session:** confirmed both files exist at `public/files/` (246 KB résumé, 888 KB CV) and both buttons ("Download résumé", "Download CV") render on the live dev server home page. Content-Type gating logic was tested against both the false-positive case (missing file → hidden) and the true-positive case (real file → shown) in the prior implementation session; not re-tested with a fake file in this audit pass since the real files are now in place and already confirmed showing.

### 1.4 Project screenshots in cards — ✅ done (feature); assets still pending

| Piece | File | Notes |
|---|---|---|
| Data field | `src/data/projects.ts` | `screenshot?: string` on the `Project` type, pre-wired for all 5 projects to `/images/screenshots/<id>.png`. |
| Existence gating | `src/hooks/useImageExists.ts` | Probes via `new Image()` — an HTML SPA-fallback response fails to decode as an image and correctly registers as "missing," so this doesn't share the false-positive risk the PDF check had to guard against explicitly (though the same root cause applies). |
| UI | `src/components/ProjectCaseStudyCard.tsx` | "View screenshot →" trigger in the card footer, next to the existing tech-stack line and links. Opens a shadcn `Dialog` styled flat (`rounded-md border border-rule`, `ring-0` — overriding the component's default `rounded-xl`/`ring-1` look) rather than the default shadow/rounded-corner modal. Includes an `sr-only` `DialogTitle` for accessibility and a close control. |

**Live-verified in the implementation session** (not re-tested in this audit): temporarily placed a test image at `public/images/screenshots/vocalocart.png`, confirmed the "View screenshot →" trigger appeared *only* for that project, clicked it, and confirmed the lightbox opened with correct flat styling and a working close button — then removed the test file.

**Current state:** `public/images/screenshots/` contains only `.gitkeep` — **no real screenshots have been added yet**, so no "View screenshot" links are currently visible on the live `/projects` page. This is expected per the original ask ("I will give you screenshots later") — the feature is fully wired and will activate automatically, one project at a time, as PNGs are dropped in with matching filenames (`hr-audit-rebuild.png`, `vocalocart.png`, `interview-pipeline-tracker.png`, `transport-payment.png`, `self-intro-repository.png`).

---

## 2. Verification sweep

| Check | Result |
|---|---|
| `npm run lint` | ✅ Clean |
| `npm run build` | ✅ Clean (same pre-existing >500kB chunk-size advisory as Phase 1, unrelated to 2A) |
| Stale `public/resume.pdf` reference in code | ✅ None — `src/data/downloads.ts` fully replaced the old single-file `RESUME_PATH` constant from the first pass |
| `next-themes` (installed but unused dependency, flagged in `PHASE_1_AUDIT.md` §2.2) | ⚠️ Still unused — `src/components/ui/sonner.tsx` was switched off it during this phase, so it's now *fully* orphaned (zero imports anywhere in `src/`) rather than partially wired. Still present in `package.json`. Cleanup candidate, not a functional issue. |
| Docs sync (`EXECUTION_PLAN.md`) | ✅ §2A section rewritten: all four items now `[x]`, résumé path corrected from `public/resume.pdf` to `public/files/`, filenames listed, "Phase 2A status" note added ahead of §2B |
| Docs sync (`README.md`) | ✅ Roadmap short-term section marked `[x]` under a "(Phase 2A — complete)" heading; Design Philosophy and Features sections updated to mention the dark variant, filtering, and download/screenshot features |
| Live behavior (dark mode) | ✅ Re-verified this session via CDP + screenshot |
| Live behavior (filtering) | ✅ Re-verified this session via click-through |
| Live behavior (downloads) | ✅ Re-verified this session — both buttons present and pointing at real files |
| Live behavior (screenshots) | ⚠️ Feature verified in the implementation session; no real assets in place yet, so nothing currently visible on `/projects` |

---

## 3. Minor follow-ups (non-blocking)

1. **Remove `next-themes` from `package.json`.** It was already flagged as an unused leftover in `PHASE_1_AUDIT.md`; this phase's `sonner.tsx` change removed its last remaining import, so it's now unambiguously dead weight. A one-line `npm uninstall next-themes` whenever convenient.
2. **Screenshot assets are still outstanding.** The feature is done; the five PNGs are not. No code change needed once you have them — just drop them into `public/images/screenshots/` with the filenames listed in §1.4 above.
3. **Filter chips have no active-state persistence across navigation.** Selecting tags, then leaving `/projects` and coming back, resets the filter (component-local `useState`, not lifted to a shared store or URL query param). This wasn't in the original 2A spec and is arguably correct default behavior for a filter — noting only in case you'd prefer it to survive navigation (e.g. via a `?tech=` query param) as a future refinement.

---

## 4. Overall sign-off

**Phase 2A is complete.** Dark mode, tech-based project filtering, résumé/CV downloads, and the screenshot-lightbox feature are all implemented, lint/build are clean, and both `EXECUTION_PLAN.md` and `README.md` accurately reflect the current state. The only open item is content, not code: adding the five screenshot images whenever they're ready. Recommend proceeding to Phase 2B (Spring Boot backend, MDX blog, admin panel) per the plan's sequencing, once you're ready to start backend/infra work.
