'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import AlphaMark from '../components/AlphaMark'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 50% 40%, #292524 0%, #0c0a09 70%)',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center max-w-2xl"
      >
        <motion.div variants={item} className="mb-8 text-alpha-400">
          <AlphaMark size={40} />
        </motion.div>

        <motion.h1
          variants={item}
          className="font-serif font-light tracking-tight text-5xl md:text-7xl text-alpha-100"
        >
          ALPHA
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-lg md:text-xl text-alpha-300">
          {t.hero.tagline}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-sm md:text-base text-alpha-500 leading-relaxed max-w-lg"
        >
          {t.hero.description}
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-col items-center gap-4">
          <a
            href="#acceso"
            className="border border-alpha-600 text-alpha-300 hover:bg-alpha-100 hover:text-alpha-900 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] inline-block"
          >
            {t.hero.cta}
          </a>
          <span className="text-xs tracking-widest uppercase text-alpha-600">
            {t.hero.ctaNote}
          </span>
        </motion.div>
      </motion.div>

      <motion.a
        href="#filtro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 text-alpha-600 animate-float"
        aria-label={t.hero.scrollDown}
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
