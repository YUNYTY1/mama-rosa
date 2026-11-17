import { Bike, ChevronRight, Flame } from 'lucide-react'
import Button from '../components/Button'
import HeroCarousel from '../components/HeroCarousel'
import { HERO, LINKS } from '../data/site'

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex flex-col overflow-hidden bg-brand-cream"
    >
      {/* Carrusel: abajo en móvil, a la derecha en desktop */}
      <div className="relative order-2 h-72 animate-fade-in sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[62%]">
        <HeroCarousel images={HERO.images} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-cream via-brand-cream/10 to-transparent lg:bg-gradient-to-r lg:from-brand-cream lg:via-brand-cream/30 lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-10 pt-10 lg:min-h-[34rem] lg:justify-center lg:px-8 lg:py-16">
        <h1 id="hero-title" className="font-display leading-[0.88]">
          <span className="block animate-fade-up text-[3.6rem] sm:text-8xl lg:text-[6.5rem] xl:text-[8rem]">
            EL VERDADERO
          </span>
          <span className="block animate-fade-up text-[3.6rem] [animation-delay:150ms] sm:text-8xl lg:text-[6.5rem] xl:text-[8rem]">
            SABOR
          </span>
          <span className="block animate-fade-up text-[4.6rem] text-brand-red [animation-delay:300ms] sm:text-9xl lg:text-[8rem] xl:text-[10rem]">
            A LA BRASA
          </span>
        </h1>

        <div className="mt-5 flex items-center gap-2" aria-hidden="true">
          <span className="h-0.5 animate-line-grow bg-brand-gold [animation-delay:600ms]" />
          <Flame className="h-5 w-5 origin-bottom animate-flicker text-brand-gold" />
        </div>

        <p className="mt-5 max-w-sm animate-fade-up text-sm leading-relaxed [animation-delay:700ms]">
          {HERO.text[0]}
          <br />
          {HERO.text[1]}
        </p>

        <div className="mt-7 flex animate-fade-up flex-wrap gap-3 [animation-delay:850ms]">
          <Button href="#carta" variant="gold" icon={ChevronRight} iconAfter className="min-w-[8.5rem] justify-between">
            Ver carta
          </Button>
          <Button href={LINKS.rappi} variant="red" icon={Bike}>
            Pedir por Rappi
          </Button>
        </div>
      </div>
    </section>
  )
}