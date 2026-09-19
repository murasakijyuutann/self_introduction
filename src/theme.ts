export const THEME_STORAGE_KEY = 'theme'

export type Theme = 'light' | 'dark'

export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return

  if (theme === 'dark') {
    document.documentElement.dataset.theme = 'dark'
  } else {
    delete document.documentElement.dataset.theme
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

/** Phase 1 default is light; only `localStorage` overrides. */
export function getInitialTheme(): Theme {
  return getStoredTheme() ?? 'light'
}
