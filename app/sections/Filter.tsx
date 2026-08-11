'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import AnimatedText from '../components/AnimatedText'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const cardContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

interface TierCardProps {
  label: string
  amount: string
  description: string
  benefits: readonly string[]
}

function TierCard({ label, amount, description, benefits }: TierCardProps) {
  return (
    <motion.div
      variants={cardItem}
      className="border border-alpha-800 p-8 md:p-10 transition-colors duration-300 hover:border-alpha-600"
    >
      <span className="text-xs tracking-widest uppercase text-alpha-500">
        {label}
      </span>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-4xl md:text-5xl text-alpha-100">
          {amount}
        </span>
        <span className="text-sm text-alpha-600">$ALPHA</span>
      </div>

      <p className="mt-6 text-sm text-alpha-400 leading-relaxed">
        {description}
      </p>

      <ul className="mt-8 space-y-3">
        {benefits.map((b) => (
          <li
            key={b}
            className="text-sm text-alpha-300 pl-4 border-l border-alpha-700"
          >
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function Filter() {
  const { t } = useLanguage()

  return (
    <SectionWrapper id="filtro" bg="alpha-900">
      <AnimatedText as="div" className="text-center mb-16">
        <h2 className="font-serif font-light text-3xl md:text-4xl text-alpha-100">
          {t.filter.title}
        </h2>
        <p className="mt-3 text-sm tracking-widest uppercase text-alpha-500">
          {t.filter.subtitle}
        </p>
      </AnimatedText>

      <motion.div
        variants={cardContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="grid md:grid-cols-2 gap-6"
      >
        <TierCard
          label={t.filter.founder.label}
          amount="1.000.000"
          description={t.filter.founder.description}
          benefits={t.filter.founder.benefits}
        />
        <TierCard
          label={t.filter.entry.label}
          amount="100.000"
          description={t.filter.entry.description}
          benefits={t.filter.entry.benefits}
        />
      </motion.div>

      <AnimatedText
        as="p"
        delay={0.2}
        className="mt-12 text-center text-xs tracking-widest uppercase text-alpha-600"
      >
        {t.filter.footnote}
      </AnimatedText>
    </SectionWrapper>
  )
}
