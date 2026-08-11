import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        alpha: {
          950: '#0c0a09', // fondo principal
          900: '#1c1917', // secciones alternas
          800: '#292524', // bordes suaves
          700: '#44403c', // bordes
          600: '#57534e', // texto secundario
          500: '#78716c', // texto terciario
          400: '#a8a29e', // texto medio
          300: '#d6d3d1', // texto claro
          200: '#e7e5e4', // texto principal
          100: '#f5f5f4', // blanco piedra
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
