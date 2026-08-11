# Alpha — Landing Page

Landing page de una sola página para **Alpha**, un token de círculo cerrado con
mecánicas de acceso. Construido como una marca de lifestyle exclusivo, no como
un dapp cripto convencional.

## Idiomas

El sitio está disponible en **español, inglés y francés**, con un selector
(ES / EN / FR) en la esquina superior derecha del navbar (y en el menú móvil).
El idioma se detecta automáticamente según el navegador y se recuerda en
`localStorage` en visitas futuras. Todo el contenido —textos, botones,
placeholders— vive en `lib/i18n/dictionary.ts`.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS con paleta custom "alpha" (tonos piedra/negro)
- Framer Motion para animaciones (fade-in, scroll reveal, count-up)
- Lucide React para iconos
- Fuentes: Inter (body) + Playfair Display (títulos)
- Exportación estática (`output: 'export'`) lista para Vercel

## Instalación local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
```

Esto genera la carpeta `out/` con el sitio estático, listo para desplegar en
cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc.).

## Deploy en Vercel

### Opción A — CLI

```bash
npm install -g vercel
vercel --prod
```

### Opción B — Dashboard de Vercel

1. Sube este repositorio a GitHub.
2. En [vercel.com](https://vercel.com), haz clic en "Add New Project" e
   importa el repositorio.
3. Vercel detectará automáticamente el framework Next.js y usará la
   configuración de `vercel.json`.
4. Deploy.

No se requieren variables de entorno: el input de código de invitación es
decorativo (sin backend).

## Estructura del proyecto

```
app/
  page.tsx              # Landing page con todas las secciones
  layout.tsx            # Root layout con fuentes y metadata
  globals.css           # Tailwind + estilos base
  sections/              # Hero, Filter, Benefits, Economy, Standard, CTA
  components/            # Navbar, Footer, SectionWrapper, AnimatedText, CountUpNumber, AlphaMark
lib/
  utils.ts              # Helper cn() para clases condicionales
  i18n/
    dictionary.ts        # Traducciones ES/EN/FR
    LanguageContext.tsx  # Contexto de idioma (detección + persistencia)
```

## Notas de diseño

- Todo el contenido visual es SVG/CSS — no hay imágenes externas.
- Tipografía siempre `font-light`, sin negritas salvo en botones CTA.
- Animaciones sutiles: fade + slide-up, sin efectos excesivos.
- Accesibilidad: `focus-visible` definido y `prefers-reduced-motion` respetado.
