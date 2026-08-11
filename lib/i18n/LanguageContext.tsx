'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react'
import { dictionary, locales, type Locale, type Dictionary } from './dictionary'

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
)

const STORAGE_KEY = 'alpha-locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es'

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && locales.includes(stored as Locale)) {
    return stored as Locale
  }

  const browserLang = window.navigator.language.slice(0, 2)
  if (locales.includes(browserLang as Locale)) {
    return browserLang as Locale
  }

  return 'es'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es')

  useEffect(() => {
    setLocaleState(detectInitialLocale())
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionary[locale] }),
    [locale]
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
