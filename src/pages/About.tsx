import { useTranslation } from 'react-i18next'
import { Reveal } from '@/components/Reveal'

export default function About() {
  const { t } = useTranslation()
  const paragraphs = t('about.paragraphs', { returnObjects: true }) as string[]

  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            {t('about.eyebrow')}
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            {t('about.heading')}
          </h1>
        </Reveal>

        <div className="mt-10 flex max-w-[680px] flex-col gap-6 md:mt-12">
          {paragraphs.map((text, i) => (
            <Reveal key={text} index={i + 2}>
              <p className="border-l-2 border-rule pl-5 text-base leading-[1.7] text-muted md:text-lg">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal index={paragraphs.length + 2}>
          <p className="mt-10 font-mono text-[12px] uppercase tracking-[0.04em] text-accent">
            {t('about.quote')}
          </p>
        </Reveal>
      </section>
    </div>
  )
}
