import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { SiQiita } from 'react-icons/si'

const SOCIAL_LINKS = [
  { href: 'https://github.com/murasakijyuutann/', label: 'GitHub', icon: FaGithub },
  { href: 'https://www.linkedin.com/in/sunmyung-woo-44b175221/', label: 'LinkedIn', icon: FaLinkedin },
  { href: 'https://x.com/hBE9ck3QAY1931', label: 'Twitter', icon: FaTwitter },
  { href: 'https://www.youtube.com/@%E8%8A%B1%E5%BC%81-d1d', label: 'YouTube', icon: FaYoutube },
  { href: 'https://qiita.com/murasakijyuutann', label: 'Qiita', icon: SiQiita },
  { href: 'mailto:neneke.emu@gmail.com', labelKey: 'footer.sendEmail', icon: FaEnvelope },
] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-rule bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-center md:px-16">
        <div className="flex items-center gap-5">
          {SOCIAL_LINKS.map(({ href, icon: Icon, ...link }) => {
            const isMail = href.startsWith('mailto:')
            const label = 'labelKey' in link ? t(link.labelKey) : link.label
            return (
              <a
                key={href}
                href={href}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="text-lg text-muted transition-colors hover:text-accent"
              >
                <Icon />
              </a>
            )
          })}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
          {t('footer.builtWith')}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  )
}
