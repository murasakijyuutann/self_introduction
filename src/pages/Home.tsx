import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'

// TODO(confirm with owner): "Status" is a placeholder — swap to whatever is
// actually true (e.g. "Employed — Osaka" vs "Open to opportunities") before
// shipping. Everything else here is grounded in Journey.tsx/About.tsx.
const META: { label: string; value: string; accent?: boolean }[] = [
  { label: 'Location', value: 'Osaka, JP' },
  { label: 'Languages', value: 'KO / JA / EN' },
  { label: 'Focus', value: 'TypeScript · React' },
  { label: 'Status', value: 'Open to opportunities', accent: true },
]

const SELECTED_WORK = [
  'HR System Audit & Rebuild',
  'VocaloCart',
  'Interview Pipeline Tracker',
  'Public Transport Payment System',
  'Self Intro Repository',
]

export default function Home() {
  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <Reveal index={0}>
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
                Case File No. 01 — Software Engineer
              </p>
            </Reveal>

            <Reveal index={1}>
              <h1 className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg md:text-[64px] md:leading-[1.08]">
                Farah Sinclair
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-5 max-w-[640px] text-base leading-[1.65] text-muted md:text-lg md:leading-[1.7]">
                Full-stack &amp; Android engineer based in Osaka. I work forensically — from a
                production system with no source and no documentation, to a shipped feature —
                and write it up the way I&apos;d want to read it back.
              </p>
            </Reveal>

            <Reveal index={3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
                >
                  <Link to="/projects">View case studies →</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-[4px] border-rule font-mono text-xs uppercase tracking-[0.04em]"
                >
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal index={2} className="flex flex-col divide-y divide-rule border-t border-rule">
              {META.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                    {row.label}
                  </span>
                  <span
                    className={`font-mono text-[12px] uppercase tracking-[0.02em] ${
                      row.accent ? 'text-accent' : 'text-fg'
                    }`}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </div>

        <Reveal
          index={4}
          className="mt-16 flex flex-col gap-4 border-t border-rule pt-6 md:mt-24 md:flex-row md:items-center"
        >
          <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
            Selected Work
          </span>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-rule md:block" />
          <p className="font-mono text-[11px] uppercase leading-[1.8] tracking-[0.02em] text-muted">
            {SELECTED_WORK.map((title, i) => (
              <span key={title}>
                {i > 0 && <span aria-hidden="true" className="mx-3 text-rule">/</span>}
                {String(i + 1).padStart(2, '0')} — {title}
              </span>
            ))}
          </p>
        </Reveal>
      </section>
    </div>
  )
}
