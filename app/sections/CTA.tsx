'use client'

import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedText from '../components/AnimatedText'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()
  const [code, setCode] = useState('')

  // Input decorativo: no hay backend real, pero se comporta como un formulario funcional
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <SectionWrapper id="acceso" bg="alpha-900" className="max-w-lg text-center">
      <AnimatedText as="h2" className="font-serif font-light text-3xl md:text-4xl text-alpha-100">
        {t.cta.title}
      </AnimatedText>

      <AnimatedText as="p" delay={0.1} className="mt-4 text-sm text-alpha-500 leading-relaxed">
        {t.cta.description}
      </AnimatedText>

      <AnimatedText as="div" delay={0.2} className="mt-10 flex flex-col items-center gap-4">
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={t.cta.placeholder}
            className="w-full max-w-xs bg-transparent border border-alpha-700 text-alpha-200 placeholder-alpha-600 text-center tracking-wider text-sm py-3 px-4 focus:border-alpha-400 focus:outline-none transition-colors duration-300"
          />
          <button
            type="submit"
            className="bg-alpha-100 text-alpha-900 hover:bg-alpha-300 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] w-full max-w-xs"
          >
            {t.cta.button}
          </button>
        </form>
      </AnimatedText>

      <AnimatedText as="p" delay={0.3} className="mt-8 text-xs tracking-widest uppercase text-alpha-600">
        {t.cta.footnote}
      </AnimatedText>
    </SectionWrapper>
  )
}
