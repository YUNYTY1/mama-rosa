import { Flame } from 'lucide-react'

// variant="dark": "MAMÁ" en negro (fondos claros) | "light": en blanco (fondos oscuros)
export default function Logo({ variant = 'dark', className = '' }) {
  const top = variant === 'light' ? 'text-white' : 'text-brand-ink'
  return (
    <a
      href="#inicio"
      aria-label="Mamá Rosa Pollería, ir al inicio"
      className={`inline-flex flex-col items-center leading-[0.82] ${className}`}
    >
      <span className={`logo-text font-display text-[2.6rem] ${top}`}>MAMÁ</span>
      <span className="logo-text font-display text-[2.6rem] text-brand-red">ROSA</span>
      <span className={`mt-1 flex items-center gap-1.5 text-[0.62rem] font-semibold tracking-[0.35em] ${top}`}>
        <Flame className="h-3.5 w-3.5 origin-bottom animate-flicker text-brand-gold" aria-hidden="true" />
        POLLERÍA
        <Flame
          className="h-3.5 w-3.5 origin-bottom animate-flicker text-brand-gold [animation-delay:400ms]"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}