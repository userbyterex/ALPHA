import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  id?: string
  bg?: 'alpha-950' | 'alpha-900'
}

// Envoltorio con padding y ancho consistentes para cada sección de la página
export default function SectionWrapper({
  children,
  className,
  id,
  bg = 'alpha-950',
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        bg === 'alpha-950' ? 'bg-alpha-950' : 'bg-alpha-900',
        'py-24 md:py-32 px-6'
      )}
    >
      <div className={cn('max-w-5xl mx-auto', className)}>{children}</div>
    </section>
  )
}
