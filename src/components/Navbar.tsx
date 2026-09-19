import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
] as const

type Locale = 'en' | 'ja'

function navLinkClass(isActive: boolean) {
  return isActive
    ? 'text-accent underline underline-offset-4'
    : 'text-muted transition-colors hover:text-fg'
}

function LocaleToggle({
  locale,
  onChange,
  className = '',
}: {
  locale: Locale
  onChange: (locale: Locale) => void
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.04em] ${className}`}
      role="group"
      aria-label="Language"
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
  // Static toggle for now — real EN/JA content switching lands in Phase 2B (react-i18next).
  const [locale, setLocale] = useState<Locale>('en')
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 md:px-16">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2">
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
          <span className="truncate font-mono text-[11px] uppercase tracking-[0.06em] text-fg md:text-[13px]">
            Portfolio / Dossier — 2026
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
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LocaleToggle locale={locale} onChange={setLocale} className="hidden md:flex" />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-[4px] md:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-72 gap-0 rounded-none border-l border-rule bg-bg p-0 shadow-none"
            >
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>

              <div className="flex items-center justify-between border-b border-rule px-6 py-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                  Menu
                </span>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon-sm" className="rounded-[4px]" aria-label="Close menu">
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
                        {link.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>

              <div className="border-t border-rule px-6 py-4">
                <LocaleToggle locale={locale} onChange={setLocale} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
