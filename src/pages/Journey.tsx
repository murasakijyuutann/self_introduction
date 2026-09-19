import { Reveal } from '@/components/Reveal'

const JOURNEY = [
  {
    year: '2015–2016',
    title: 'Diploma of IT — UTS:INSEARCH',
    description:
      'Built foundations in networking, databases, Java, and Cisco. First exposure to systems thinking that would shape how I approach architecture later.',
    location: 'Sydney, Australia',
  },
  {
    year: '2017–2019',
    title: "Bachelor's in Systems Administration — Charles Sturt University",
    description:
      'Specialised in cloud infrastructure, Linux, and network security. Completed a VoIP/SIP deployment on GCP that earned a Distinction — my first taste of real infrastructure work.',
    location: 'Sydney, Australia',
  },
  {
    year: '2020–2022',
    title: 'Career Break & Self-Study',
    description:
      'Stepped back from formal work after returning from Australia. Used the time to revisit fundamentals and reflect on direction before committing to a full-stack career path.',
    location: 'Seoul, South Korea',
  },
  {
    year: '2023',
    title: 'Back to Code — Full-Stack Bootcamp',
    description:
      'Led a team of 4 to build a cafe kiosk system (Spring Boot + React + AWS) as capstone. Also independently built VocaloCart, an e-commerce platform with auth, cart, and order management — deployed to production via Docker and Railway.',
    location: 'Seoul, South Korea',
  },
  {
    year: '2024',
    title: 'Independent Projects & Deepening the Stack',
    description:
      'Migrated VocaloCart to Next.js, built a transport payment API, and a movie review app. Focused on production-quality architecture: JWT, OAuth, CI/CD with GitHub Actions, and PostgreSQL.',
    location: 'Seoul, South Korea',
  },
  {
    year: 'Feb–Mar 2026',
    title: 'Security Audit — Production HR System',
    description:
      'Reverse-engineered a production HR system from a WAR file with no source access. Documented 70+ issues including 28 security vulnerabilities (IDOR, path traversal, hardcoded AES keys). The audit directly influenced a business decision to replace the system entirely.',
    location: 'Osaka, Japan',
  },
  {
    year: 'Mar 2026–',
    title: 'Android Engineer — Yamaha Navigation System',
    description:
      'Embedded in a product team building a Bluetooth/GPS Android navigation system for Yamaha motorcycles. Working in Kotlin, Jetpack Compose, Dagger 2, and BLE — reading a production codebase and contributing to a greenfield rebuild.',
    location: 'Osaka, Japan',
  },
]

export default function Journey() {
  return (
    <div className="bg-bg">
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-16 md:py-24">
        <Reveal index={0}>
          <p className="font-mono text-[11px] uppercase tracking-[0.06em] text-accent md:text-[13px]">
            Case File No. 03 — Timeline
          </p>
        </Reveal>

        <Reveal index={1}>
          <h1 className="mt-4 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-fg md:text-[48px]">
            Journey
          </h1>
        </Reveal>

        <Reveal index={2}>
          <p className="mt-4 max-w-[640px] text-base leading-[1.65] text-muted">
            From Australia to Korea, building toward a career in Japan.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col md:mt-16">
          {JOURNEY.map((item, i) => (
            <Reveal
              key={item.year}
              index={i + 3}
              className="grid grid-cols-1 gap-2 border-t border-rule py-6 first:border-t-0 md:grid-cols-12 md:gap-6 md:py-8"
            >
              <div className="md:col-span-3">
                <p className="font-mono text-[12px] uppercase tracking-[0.04em] text-accent">
                  {item.year}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                  {item.location}
                </p>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-[19px] font-semibold leading-[1.3] tracking-[-0.01em] text-fg md:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[680px] text-[15px] leading-[1.65] text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
