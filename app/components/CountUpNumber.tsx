'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface CountUpNumberProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  formatThousands?: boolean
  className?: string
}

// Anima un número desde 0 hasta su valor final cuando entra en el viewport
export default function CountUpNumber({
  end,
  duration = 2,
  suffix = '',
  prefix = '',
  formatThousands = false,
  className,
}: CountUpNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (startTimestamp === null) startTimestamp = timestamp
      const progress = Math.min(
        (timestamp - startTimestamp) / (duration * 1000),
        1
      )
      // ease-out cúbico
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(step)
  }, [isInView, end, duration])

  const display = formatThousands
    ? count.toLocaleString('es-ES')
    : count.toString()

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </motion.span>
  )
}
