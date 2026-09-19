import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'

const JOURNEY_IDS = [
  'diploma-it',
  'bachelor-sysadmin',
  'career-break',
  'independent-projects',
  'bootcamp',
  'hr-audit',
  'android-nav',
  'vocalocart-nextjs',
] as const

export default function Journey() {
  const { t } = useTranslation()

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            {t('journey.eyebrow')}
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            {t('journey.heading')}
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            {t('journey.intro')}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col md:mt-16">
          {JOURNEY_IDS.map((id, i) => (
            <Reveal
              key={id}
              index={i + 3}
              className="grid grid-cols-1 gap-2 border-t border-rule py-6 first:border-t-0 md:grid-cols-12 md:gap-6 md:py-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[12px] uppercase tracking-[0.04em] text-accent">
                  {t(`journey.items.${id}.year`)}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                  {t(`journey.items.${id}.location`)}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-fg md:text-[22px]">
                  {t(`journey.items.${id}.title`)}
                </h3>
                <p className="mt-2 max-w-[680px] text-[15px] leading-[1.65] text-muted md:text-base">
                  {t(`journey.items.${id}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
