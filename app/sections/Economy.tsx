'use client'

import SectionWrapper from '../components/SectionWrapper'
import AnimatedText from '../components/AnimatedText'
import CountUpNumber from '../components/CountUpNumber'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// Extrae el valor numerico y el sufijo (K, M) de un string como "1M" o "500"
function parseStat(value: string): { end: number; suffix: string } {
  const match = value.match(/^(\d+)([A-Za-z]*)$/)
  if (!match) return { end: 0, suffix: '' }
  return { end: parseInt(match[1], 10), suffix: match[2] }
}

export default function Economy() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="economia" bg="alpha-900">
      <AnimatedText as="h2" className="font-serif font-light text-3xl md:text-4xl text-alpha-100 text-center">
        {t.economy.title}
      </AnimatedText>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {t.economy.stats.map((s) => {
          const { end, suffix } = parseStat(s.value)
          return (
            <div key={s.label}>
              <div className="font-serif text-5xl md:text-6xl text-alpha-100">
                <CountUpNumber end={end} suffix={suffix} duration={2} />
              </div>
              <p className="mt-4 text-xs tracking-widest uppercase text-alpha-500">
                {s.label}
              </p>
            </div>
          )
        })}
      </div>

      <AnimatedText
        as="p"
        delay={0.2}
        className="mt-16 text-center text-sm text-alpha-500 leading-relaxed max-w-xl mx-auto"
      >
        {t.economy.description}
      </AnimatedText>
    </SectionWrapper>
  )
}
