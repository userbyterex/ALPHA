'use client'

import AlphaMark from './AlphaMark'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-alpha-950 border-t border-alpha-800 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="flex items-center gap-2 text-alpha-300">
          <AlphaMark size={18} />
          <span className="tracking-widest text-sm">ALPHA</span>
          <span className="text-alpha-600 text-sm">© {new Date().getFullYear()}</span>
        </div>

        <ul className="flex gap-8 md:justify-center">
          {t.footer.links.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-xs tracking-widest uppercase text-alpha-500 hover:text-alpha-300 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs tracking-widest uppercase text-alpha-600 md:text-right">
          {t.footer.note}
        </p>
      </div>
    </footer>
  )
}
