import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

// Fuente principal para body y UI
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Fuente serif para títulos con carácter editorial
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Alpha — Not a club. A filter. / No es un club, es un filtro.',
  description:
    'A closed circle of individuals who have already proven what they are made of. Un círculo cerrado de individuos que ya demostraron de qué están hechos. Un cercle fermé d\u2019individus qui ont déjà prouvé de quoi ils sont faits.',
  keywords:
    'alpha, token, closed circle, elite, private, invitation, círculo cerrado, élite, cercle fermé, invitation',
  openGraph: {
    title: 'Alpha — Not a club. A filter.',
    description:
      'A closed circle of individuals who have already proven what they are made of.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['es_ES', 'fr_FR'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
