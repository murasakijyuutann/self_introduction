import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { projects } from '@/data/projects'
import { RESUME_DOWNLOADS } from '@/data/downloads'
import { useFileExists } from '@/hooks/useFileExists'

const META_KEYS = ['location', 'languages', 'focus', 'status'] as const

function ResumeDownloadButton({ href, labelKey }: { href: string; labelKey: string }) {
  const { t } = useTranslation()
  const exists = useFileExists(href)

  if (!exists) return null

  return (
    <Button
      asChild
      variant="outline"
      className="rounded-[4px] border-rule font-mono text-xs uppercase tracking-[0.04em]"
    >
      <a href={href} download>
        <Download className="size-3.5" aria-hidden="true" />
        {t(labelKey)}
      </a>
    </Button>
  )
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const isJapanese = i18n.language === 'ja'

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-8">
            <Reveal index={0}>
              <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
                {t('home.eyebrow')}
              </p>
            </Reveal>

            <Reveal index={1}>
              <h1 className="mt-4 text-[40px] font-semibold leading-[1.1] tracking-[-0.02em] text-fg md:text-[64px] md:leading-[1.08] [&_rt]:font-mono [&_rt]:text-[13px] [&_rt]:font-normal [&_rt]:tracking-normal [&_rt]:text-muted md:[&_rt]:text-[16px]">
                {isJapanese ? (
                  <>
                    <ruby>
                      禹<rt>ウ</rt>
                    </ruby>{' '}
                    <ruby>
                      善明<rt>ソンミョン</rt>
                    </ruby>
                  </>
                ) : (
                  t('home.name')
                )}
              </h1>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-5 max-w-[640px] text-base leading-[1.65] text-muted md:text-lg md:leading-[1.7]">
                {t('home.intro')}
              </p>
            </Reveal>

            <Reveal index={3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-[4px] font-mono text-xs uppercase tracking-[0.04em]"
                >
                  <Link to="/projects">{t('home.viewCaseStudies')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-[4px] border-rule font-mono text-xs uppercase tracking-[0.04em]"
                >
                  <Link to="/contact">{t('home.getInTouch')}</Link>
                </Button>
                {RESUME_DOWNLOADS.map((file) => (
                  <ResumeDownloadButton key={file.id} href={file.href} labelKey={file.labelKey} />
                ))}
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal index={2} className="flex flex-col divide-y divide-rule border-t border-rule">
              {META_KEYS.map((key) => (
                <div key={key} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                    {t(`home.meta.${key}`)}
                  </span>
                  <span
                    className={`font-mono text-[12px] uppercase tracking-[0.02em] ${
                      key === 'status' ? 'text-accent' : 'text-fg'
                    }`}
                  >
                    {t(`home.meta.${key}Value`)}
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
            {t('home.selectedWork')}
          </span>
          <span aria-hidden="true" className="hidden h-px flex-1 bg-rule md:block" />
          <p className="font-mono text-[11px] uppercase leading-[1.8] tracking-[0.02em] text-muted">
            {projects.map((project, i) => (
              <span key={project.id}>
                {i > 0 && <span aria-hidden="true" className="mx-3 text-rule">/</span>}
                {String(i + 1).padStart(2, '0')} — {t(`projects.items.${project.id}.title`)}
              </span>
            ))}
          </p>
        </Reveal>
      </section>
    </div>
  )
}
