import { logo } from '../assets'

// variant="dark": para fondos claros (header) | "light": para fondos oscuros (footer)
export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light'
  return (
    <a href="#inicio" className={`inline-block ${className}`}>
      <img
        src={logo}
        alt="Mamá Rosa Pollería, ir al inicio"
        className={`h-16 w-auto object-contain sm:h-20 ${
          isLight ? 'rounded-lg bg-brand-cream p-2' : 'mix-blend-multiply'
        }`}
      />
    </a>
  )
}