import { useState } from 'react'
import { Bike, Menu, X } from 'lucide-react'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
import Button from '../components/Button'
import { NAV_ITEMS, LINKS } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  const handleSelect = (href) => {
    setActive(href)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Logo />

        <div className="hidden lg:block">
          <NavBar items={NAV_ITEMS} active={active} onSelect={handleSelect} />
        </div>

        <div className="flex items-center gap-3">
          <Button href={LINKS.rappi} variant="red" icon={Bike} className="hidden !py-3 sm:inline-flex">
            Pedir por Rappi
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-ink hover:bg-black/5 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="menu-movil" className="border-t border-black/5 bg-brand-cream px-5 pb-5 pt-2 lg:hidden">
          <NavBar items={NAV_ITEMS} active={active} onSelect={handleSelect} orientation="vertical" />
          <Button href={LINKS.rappi} variant="red" icon={Bike} className="mt-3 w-full sm:hidden">
            Pedir por Rappi
          </Button>
        </div>
      )}
    </header>
  )
}
