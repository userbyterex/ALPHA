'use client'

import { locales, localeLabels } from '@/lib/i18n/dictionary'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  className?: string
}

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  return (
    <div className={cn('flex items-center gap-1 text-xs tracking-widest', className)}>
      {locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          <button
            onClick={() => setLocale(loc)}
            aria-current={locale === loc}
            className={cn(
              'px-1.5 py-1 uppercase transition-colors duration-300',
              locale === loc
                ? 'text-alpha-100'
                : 'text-alpha-600 hover:text-alpha-300'
            )}
          >
            {localeLabels[loc]}
          </button>
          {i < locales.length - 1 && (
            <span className="text-alpha-800" aria-hidden="true">
              /
            </span>
          )}
        </span>
      ))}
    </div>
  )
}
