import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ja from './locales/ja.json'

export type SupportedLocale = 'en' | 'ja'

const STORAGE_KEY = 'locale'

function getInitialLocale(): SupportedLocale {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ja') return stored

  // Fall back to the browser's language if it's Japanese; default to English otherwise.
  return window.navigator.language?.toLowerCase().startsWith('ja') ? 'ja' : 'en'
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ja: { translation: ja },
  },
  lng: getInitialLocale(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng)
    document.documentElement.lang = lng
  }
})

document.documentElement.lang = i18n.language

export default i18n
