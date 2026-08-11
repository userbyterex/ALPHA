'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import AlphaMark from './AlphaMark'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#filtro', label: t.nav.filter },
    { href: '#beneficios', label: t.nav.benefits },
    { href: '#economia', label: t.nav.economy },
    { href: '#estandar', label: t.nav.standard },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-alpha-950/80 backdrop-blur-md border-b border-alpha-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 text-alpha-100 tracking-widest text-sm"
        >
          <AlphaMark size={18} />
          <span>ALPHA</span>
        </a>

        {/* Navegacion desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-widest uppercase text-alpha-400 hover:text-alpha-200 transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href="#acceso"
            className="inline-flex border border-alpha-600 text-alpha-300 hover:bg-alpha-100 hover:text-alpha-900 px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
          >
            {t.nav.access}
          </a>
        </div>

        {/* Boton menu movil */}
        <button
          className="md:hidden text-alpha-200"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={t.nav.menuOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu movil desplegable */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden overflow-hidden bg-alpha-950 border-b border-alpha-800"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-xs tracking-widest uppercase text-alpha-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <LanguageSwitcher />
              </li>
              <li>
                <a
                  href="#acceso"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex border border-alpha-600 text-alpha-300 px-6 py-2.5 text-xs tracking-widest uppercase"
                >
                  {t.nav.access}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
