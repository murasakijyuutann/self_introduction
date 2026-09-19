# Developer Portfolio — Sunmyung Woo

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-0E7C86?style=for-the-badge)](https://self-introduction-i11.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-murasakijyuutann-181717?style=for-the-badge&logo=github)](https://github.com/murasakijyuutann)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/sunmyung-woo-44b175221/)

**A full-stack developer portfolio, presented as a set of editorial case files rather than a conventional "personal site."**

[Design Philosophy](#design-philosophy) • [Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Projects](#featured-projects) • [Contact](#contact)

---

</div>

## About

This portfolio is a production React application that documents 3+ years of full-stack experience across React, Spring Boot, Next.js, and cloud infrastructure — presented as a series of dated case files (Home, About, Journey, Skills, Projects, Contact) rather than a marketing-style landing page.

The site traces a path from Systems Administration studies in Australia, through full-stack development work in Korea, to ongoing preparation for a software engineering career in Japan. Content is available in both English and Japanese, switchable at any time via the header toggle.

---

## Design Philosophy

The UI follows an **"Editorial Case File"** direction: Swiss/International typographic style combined with the Japanese concept of **間 (ma)** — the idea that empty space carries meaning rather than needing to be filled with decoration. In practice, that means:

- **Warm off-white base, near-black text** — light theme by default (`#FAF9F5` / `#141413`), with an optional dark variant (`[data-theme="dark"]`) toggled from the header and persisted in `localStorage`.
- **Sharp, consistent geometry** — a single small radius (4px) is used everywhere; the only intentional circle in the entire UI is a small accent-colored status dot in the header and on project status pills. No pill-shaped buttons, no circular avatars.
- **Hairline structure, not shadows or gradients** — 1px `border-rule` dividers do the work that boxes, drop-shadows, and gradient backgrounds would otherwise do. No glassmorphism, no animated backgrounds, no blur effects.
- **Type-led hierarchy** — headings and body copy are distinguished by size and weight, never by color. A monospaced type layer (JetBrains Mono) is reserved for metadata: navigation, eyebrows, labels, status text, and tech-stack lines.
- **Restrained motion** — a single shared fade + translate-Y entrance animation (200–300ms, ease-out) is used on scroll, and fully respects `prefers-reduced-motion`. No continuous/looping animation, no hover-scale effects.
- **No emoji, anywhere** — not in headings, buttons, status text, or this document. Status and outcomes are communicated through short, direct copy instead.
- **Forensic, text-forward case studies** — each project card states the Problem, the Role actually played, and the Outcome, plus only real and verifiable figures (never invented statistics). No inline screenshots by default, keeping the layout text-forward and consistent.
- **Bilingual by design, not an afterthought** — every page (including project case files) is fully translated via `react-i18next`, not machine-translated at render time, and persists the visitor's language choice.

---

## Features

### Editorial, case-file structure
- Header with a mono "dossier" label, hairline bottom border, and a real EN/JA toggle (`aria-current`, not color-only)
- Hero presented as a case file: mono eyebrow, static heading, left-aligned intro copy, and a metadata column (location, languages, focus, status)
- Journey presented as a chronological, hairline-divided timeline rather than a graphic timeline widget
- Skills grouped into hairline-bordered categories with flat monospaced tags (no gradient skill pills, no percentage bars)
- Project case files with a Problem / Role / Outcome breakdown, real supporting figures where available, tech-stack line, and status indicator
- Contact form built on accessible form primitives with toast-based submission feedback (no inline emoji status text)

### Technical
- Fully typed, component-based architecture (TypeScript throughout)
- Tailwind CSS v4 (CSS-first configuration) + shadcn/ui component primitives on top of Radix
- Full English/Japanese localization via `i18next`/`react-i18next`, persisted in `localStorage`
- Self-hosted variable fonts (no runtime Google Fonts requests)
- Scroll-entry motion via Framer Motion, gated by a shared `prefers-reduced-motion` hook
- EmailJS-backed contact form with toast notifications (`sonner`)
- Dark mode toggle (`ThemeProvider`, `data-theme` on `<html>`, sun/moon control in the header)
- Project list filtering by stack tags on `/projects` (client-side, multi-select chips)
- Hero résumé/CV downloads from `public/files/`; optional per-project screenshot lightboxes when assets exist
- Responsive layout from mobile through desktop, using a shadcn `Sheet` for the mobile navigation drawer

---

## Tech Stack

### Frontend
![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcnui&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat&logo=radixui&logoColor=white)

### Libraries & Tools
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-26A69A?style=flat&logo=i18next&logoColor=white)
![EmailJS](https://img.shields.io/badge/EmailJS-4285F4?style=flat&logo=gmail&logoColor=white)
![React Icons](https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white)

### Deployment & CI/CD
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)

---

## Project Structure

```
my/
├── public/
│   └── images/                    # Static assets
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn/ui primitives (Button, Input, Textarea, Sheet, Sonner)
│   │   ├── Navbar.tsx              # Sticky header, EN/JA toggle, mobile nav drawer
│   │   ├── Footer.tsx              # Social links and copyright
│   │   ├── ProjectCaseStudyCard.tsx # Problem/Role/Outcome case-file card
│   │   └── Reveal.tsx              # Shared scroll-entry motion wrapper (reduced-motion aware)
│   ├── data/
│   │   └── projects.ts             # Language-neutral project data (ids, stack, figures, links)
│   ├── hooks/
│   │   └── usePrefersReducedMotion.ts
│   ├── i18n/
│   │   ├── index.ts                 # i18next initialization, locale persistence
│   │   └── locales/
│   │       ├── en.json              # English copy
│   │       └── ja.json              # Japanese copy
│   ├── lib/
│   │   └── utils.ts                 # `cn()` class-name helper
│   ├── pages/
│   │   ├── Home.tsx                 # Hero case file
│   │   ├── About.tsx                # Background
│   │   ├── Journey.tsx              # Career timeline
│   │   ├── Skills.tsx               # Toolkit, grouped by category
│   │   ├── Projects.tsx             # Case-file list
│   │   └── Contact.tsx              # Contact form
│   ├── App.tsx                      # Router and layout shell
│   ├── main.tsx                     # Application entry point
│   └── index.css                    # Design tokens, Tailwind theme, base styles
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vercel.json                      # Deployment configuration
```

---

## Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** 9+
- **Git** for version control

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/murasakijyuutann/self_introduction.git
cd self_introduction/my
```

**2. Install dependencies**
```bash
npm install
```

**3. Configure environment variables** (optional, for the contact form)

Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get your EmailJS credentials at [emailjs.com](https://www.emailjs.com/)

**4. Run the development server**
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**5. Build for production**
```bash
npm run build
npm run preview  # Preview the production build locally
```

---

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.1 | UI framework |
| `typescript` | ~5.9.3 | Type safety |
| `vite` | ^7.1.7 | Build tool and dev server |
| `tailwindcss` | ^4.3.3 | Utility-first styling, CSS-first design tokens |
| `shadcn` | ^4.21.0 | Accessible component primitives (Button, Input, Sheet, etc.) |
| `radix-ui` | ^1.6.7 | Headless UI primitives underlying shadcn/ui |
| `class-variance-authority` | ^0.7.1 | Typed component style variants |
| `cn` | ^0.3.0 | Tailwind-aware class-name merging |
| `i18next` / `react-i18next` | ^26.4.2 / ^17.0.14 | English/Japanese localization |
| `framer-motion` | ^12.23.24 | Scroll-entry animation |
| `react-router-dom` | ^7.9.4 | Client-side routing |
| `@emailjs/browser` | ^4.4.1 | Contact form backend |
| `sonner` | ^2.0.8 | Toast notifications |
| `lucide-react` | ^1.47.0 | Icon set for UI controls |
| `react-icons` | ^5.5.0 | Social/brand icon set |

---

## Featured Projects

<table>
  <tr>
    <td width="50%">
      <h3>HR System Audit & Rebuild</h3>
      <p><strong>Problem:</strong> Inherited a production HR system with no source code, no documentation, and no schema — only a deployed WAR file.</p>
      <p><strong>Outcome:</strong> Reverse-engineered 142 compiled classes with CFR, led a ground-up rebuild on Spring Boot 3 + Vue 3, and the audit findings informed a commercial build-vs-buy decision.</p>
      <p><strong>Stack:</strong> Java 21 · Spring Boot 3 · Spring Security · Flyway · Vue 3 · TypeScript · MySQL</p>
      <p><a href="https://github.com/murasakijyuutann/hr_rebuild_project">View Repository →</a></p>
    </td>
    <td width="50%">
      <h3>VocaloCart</h3>
      <p><strong>Problem:</strong> Needed an online store for Vocaloid fan merchandise, originally split across Spring Boot and Vite/React.</p>
      <p><strong>Outcome:</strong> Full-stack e-commerce build covering auth, catalog, cart, checkout, Stripe payments, and transactional email; migrating to a unified Next.js monorepo.</p>
      <p><strong>Stack:</strong> Next.js 16 · TypeScript · Prisma · PostgreSQL · NextAuth v5 · Tailwind CSS · Stripe</p>
      <p><a href="https://github.com/murasakijyuutann/vocaloidshop-fullstack">View Repository →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>Interview Pipeline Tracker</h3>
      <p><strong>Problem:</strong> Needed a fully local way to track interview pipelines with reminders — no cloud account or server.</p>
      <p><strong>Outcome:</strong> Local-first desktop app with list/calendar views, stage filters, and a Rust background engine for native OS reminders. Shipped as an installer and in daily personal use.</p>
      <p><strong>Stack:</strong> Tauri 2 · Rust · React 19 · TypeScript · Tailwind CSS · SQLite</p>
      <p><a href="https://github.com/murasakijyuutann/interview-pipeline-tracker">View Repository →</a></p>
    </td>
    <td width="50%">
      <h3>Public Transport Payment System</h3>
      <p><strong>Problem:</strong> Fare and payment processing needed a reliable card-to-transaction flow.</p>
      <p><strong>Outcome:</strong> Spring Boot payment API with card management, fare calculation, and transaction processing, shipped with a Thymeleaf frontend on AWS RDS.</p>
      <p><strong>Stack:</strong> Spring Boot · Thymeleaf · Bootstrap · MySQL · AWS RDS</p>
      <p><a href="https://github.com/murasakijyuutann/transport_payment">View Repository →</a></p>
    </td>
  </tr>
  <tr>
    <td width="50%" colspan="2">
      <h3>Self Intro Repository (this site)</h3>
      <p><strong>Problem:</strong> Needed a single, up-to-date home for projects, skills, and story.</p>
      <p><strong>Outcome:</strong> This portfolio — an "Editorial Case File" redesign, fully bilingual (EN/JA), continuously iterated on.</p>
      <p><strong>Stack:</strong> React · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion · i18next · Vercel</p>
      <p><a href="https://self-introduction-i11.vercel.app/">View Live Demo →</a></p>
    </td>
  </tr>
</table>

---

## Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Environment Configuration
The `vercel.json` file includes routing configuration to support React Router:
```json
{
  "rewrites": [{
    "source": "/((?!images/).*)",
    "destination": "/index.html"
  }]
}
```

---

## Roadmap

### Short-term Goals (Phase 2A — complete)
- [x] Dark mode toggle — `data-theme="dark"` on `<html>`, persisted in `localStorage`; sun/moon control in the header
- [x] Project filtering by technology — mono stack chips on `/projects` (multi-select, client-side)
- [x] Resume/CV download — Hero buttons for PDFs in `public/files/` (履歴書 + 職務経歴書)
- [x] Project screenshots in cards — optional “View screenshot →” lightbox per case file when `public/images/screenshots/<project-id>.png` exists

### Medium-term Goals
- [ ] Integrate blog section with MDX support
- [x] Add Japanese language toggle (日本語版) — delivered ahead of schedule via `react-i18next`; full EN/JA content switching across every page, persisted in `localStorage`.
- [ ] Implement Spring Boot backend for dynamic content
- [ ] Create admin panel for project management

### Long-term Vision
- [ ] Migrate to Next.js for SSR/SSG benefits
- [ ] Add analytics dashboard
- [ ] Implement real-time chat feature
- [ ] Custom domain with SSL (Route 53 + CloudFront)

---

## Contact

**Sunmyung Woo** — Full-Stack Developer

- Email: [neneke.emu@gmail.com](mailto:neneke.emu@gmail.com)
- LinkedIn: [linkedin.com/in/sunmyung-woo-44b175221](https://www.linkedin.com/in/sunmyung-woo-44b175221/)
- GitHub: [github.com/murasakijyuutann](https://github.com/murasakijyuutann)
- Qiita: [qiita.com/murasakijyuutann](https://qiita.com/murasakijyuutann)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Acknowledgments

- Design direction: Swiss/International typographic style, combined with the Japanese concept of 間 (ma)
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/) and [Lucide](https://lucide.dev/)
- Component primitives by [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/)
- Deployment powered by [Vercel](https://vercel.com/)

---

<div align="center">

If you find this portfolio useful as a reference, consider starring the repository.

© 2026 Sunmyung Woo

</div>
