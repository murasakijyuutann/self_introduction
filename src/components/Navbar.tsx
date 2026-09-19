import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { SupportedLocale } from '@/i18n'

const NAV_LINKS = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/journey', key: 'journey' },
  { to: '/skills', key: 'skills' },
  { to: '/projects', key: 'projects' },
  { to: '/contact', key: 'contact' },
] as const

function navLinkClass(isActive: boolean) {
  return isActive
    ? 'text-accent underline underline-offset-4'
    : 'text-muted transition-colors hover:text-fg'
}

function ThemeToggle({ className = '' }: { className?: string }) {
  const { t } = useTranslation()
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center text-muted transition-colors hover:text-accent ${className}`}
      aria-label={t('nav.toggleTheme')}
      aria-pressed={isDark}
    >
      {isDark ? <Sun className="size-4" aria-hidden="true" /> : <Moon className="size-4" aria-hidden="true" />}
    </button>
  )
}

function LocaleToggle({
  locale,
  onChange,
  label,
  className = '',
}: {
  locale: SupportedLocale
  onChange: (locale: SupportedLocale) => void
  label: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] ${className}`}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        aria-current={locale === 'en' ? 'true' : undefined}
        onClick={() => onChange('en')}
        className={navLinkClass(locale === 'en')}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-rule">
        /
      </span>
      <button
        type="button"
        aria-current={locale === 'ja' ? 'true' : undefined}
        onClick={() => onChange('ja')}
        className={navLinkClass(locale === 'ja')}
      >
        JA
      </button>
    </div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation()
  const locale = (i18n.language === 'ja' ? 'ja' : 'en') as SupportedLocale
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:px-16">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          <span className="truncate font-mono text-[11px] uppercase tracking-[0.06em] text-fg md:text-[13px]">
            {t('nav.brand')}
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.to
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive ? 'page' : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.04em] md:text-[12px] ${navLinkClass(isActive)}`}
              >
                {t(`nav.${link.key}`)}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <LocaleToggle
              locale={locale}
              onChange={(l) => i18n.changeLanguage(l)}
              label={t('nav.language')}
            />
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-[4px] md:hidden"
                aria-label={t('nav.openMenu')}
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-72 gap-0 rounded-none border-l border-rule bg-bg p-0 shadow-none"
            >
              <SheetTitle className="sr-only">{t('nav.menuTitle')}</SheetTitle>

              <div className="flex items-center justify-between border-b border-rule px-6 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                  {t('nav.menu')}
                </span>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-[4px]"
                    aria-label={t('nav.closeMenu')}
                  >
                    <span aria-hidden="true" className="font-mono text-xs">
                      ×
                    </span>
                  </Button>
                </SheetClose>
              </div>

              <nav aria-label="Primary" className="flex flex-1 flex-col gap-4 px-6 py-6">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.to
                  return (
                    <SheetClose asChild key={link.to}>
                      <Link
                        to={link.to}
                        aria-current={isActive ? 'page' : undefined}
                        className={`font-mono text-sm uppercase tracking-[0.04em] ${navLinkClass(isActive)}`}
                      >
                        {t(`nav.${link.key}`)}
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>

              <div className="flex flex-col gap-4 border-t border-rule px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-muted">
                    {t('nav.theme')}
                  </span>
                  <ThemeToggle />
                </div>
                <LocaleToggle
                  locale={locale}
                  onChange={(l) => i18n.changeLanguage(l)}
                  label={t('nav.language')}
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
