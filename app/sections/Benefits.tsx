'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedText from '../components/AnimatedText'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const fadeItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

function ConcentricVisual({ edition }: { edition: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-0">
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative flex items-center justify-center"
      >
        <div className="w-64 h-64 rounded-full border border-alpha-700 flex items-center justify-center">
          <div className="w-44 h-44 rounded-full border border-alpha-700 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border border-alpha-500 flex items-center justify-center">
              <span className="font-serif text-sm tracking-widest text-alpha-200">
                Alpha
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="mt-8 text-xs tracking-widest uppercase text-alpha-600">
        {edition}
      </p>
    </div>
  )
}

export default function Benefits() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="beneficios" bg="alpha-950">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <AnimatedText as="h2" className="font-serif font-light text-3xl md:text-4xl text-alpha-100">
            {t.benefits.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.1}
            className="mt-4 text-sm text-alpha-500 leading-relaxed max-w-md"
          >
            {t.benefits.subtitle}
          </AnimatedText>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12 space-y-8"
          >
            {t.benefits.items.map((it) => (
              <motion.div key={it.title} variants={fadeItem} className="flex gap-4">
                <div className="w-1 bg-alpha-700 flex-shrink-0" />
                <div>
                  <h3 className="text-alpha-200 text-base">{it.title}</h3>
                  <p className="mt-1 text-sm text-alpha-500 leading-relaxed">
                    {it.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <ConcentricVisual edition={t.benefits.edition} />
      </div>
    </SectionWrapper>
  )
}
