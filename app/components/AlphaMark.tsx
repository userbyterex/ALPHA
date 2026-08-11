interface AlphaMarkProps {
  className?: string
  size?: number
}

// Marca geométrica minimalista: un triángulo abierto (referencia a "Alpha" / A)
// atravesado por una línea, evocando un umbral o filtro más que un logo cripto.
export default function AlphaMark({ className, size = 28 }: AlphaMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 3L29 28H3L16 3Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <line x1="9" y1="19" x2="23" y2="19" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}
