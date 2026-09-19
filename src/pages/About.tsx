import { Reveal } from '@/components/Reveal'

const ABOUT_PARAGRAPHS = [
  'Full-stack developer with 3+ years of hands-on experience building modern web applications using React, Spring Boot, and cloud infrastructure.',
  'From systems administration to full-stack development — I specialize in creating scalable backends, responsive frontends, and deploying production-ready apps on AWS EC2.',
  'Trilingual engineer (English, Japanese N1, Korean Native) seeking to join Japanese tech teams where I can bridge cultures and build impactful software.',
]

export default function About() {
  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            Case File No. 02 — Background
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            About
          </h1>
        </Reveal>

        <div className="mt-10 flex max-w-[680px] flex-col gap-6 md:mt-12">
          {ABOUT_PARAGRAPHS.map((text, i) => (
            <Reveal key={text} index={i + 2}>
              <p className="border-l-2 border-rule pl-5 text-base leading-[1.7] text-muted md:text-lg">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal index={ABOUT_PARAGRAPHS.length + 2}>
          <p className="mt-10 font-mono text-[12px] uppercase tracking-[0.04em] text-accent">
            &ldquo;Code is my language. Culture is my bridge.&rdquo;
          </p>
        </Reveal>
      </section>
    </div>
  )
}
