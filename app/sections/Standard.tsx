'use client'

import SectionWrapper from '../components/SectionWrapper'
import AnimatedText from '../components/AnimatedText'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function Standard() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="estandar" bg="alpha-950" className="max-w-3xl text-center">
      <AnimatedText as="div">
        <blockquote className="font-serif font-light text-2xl md:text-3xl text-alpha-200 leading-snug text-balance">
          {t.standard.quote}
        </blockquote>
      </AnimatedText>

      <AnimatedText as="div" delay={0.15} className="mt-12 flex flex-col items-center gap-6">
        <div className="w-12 h-px bg-alpha-700" />
        <p className="text-sm text-alpha-500">
          {t.standard.footnote}
        </p>
      </AnimatedText>
    </SectionWrapper>
  )
}
