'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'form'
}

// Envuelve cualquier texto con un fade-in + slide-up al entrar en el viewport
export default function AnimatedText({
  children,
  className,
  delay = 0,
  as = 'div',
}: AnimatedTextProps) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  )
}
