import { FileText } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { CARTA, LINKS } from '../data/site'

export default function Carta() {
  return (
    <section id="carta" aria-labelledby="carta-title" className="overflow-hidden bg-brand-cream py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal direction="left">
          <SectionTitle
            id="carta-title"
            lead={CARTA.lead}
            leadClass="font-sans text-3xl font-bold sm:text-4xl"
            main={CARTA.title}
            mainClass="font-display text-6xl leading-[0.95] text-brand-red sm:text-7xl"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {CARTA.text[0]}
            <br />
            {CARTA.text[1]}
          </p>
          <Button href={LINKS.cartaPdf} variant="gold" icon={FileText} className="mt-7">
            {CARTA.button}
          </Button>
        </Reveal>

        <Reveal direction="right" delay={150} className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Mancha dorada detrás de la carta */}
          <div
            aria-hidden="true"
            className="absolute -left-4 top-10 h-4/5 w-3/4 rounded-[45%_55%_50%_50%] bg-brand-gold lg:left-8"
          />
          <img
            src={CARTA.image}
            alt={CARTA.alt}
            loading="lazy"
            className="relative mx-auto max-h-[26rem] animate-float object-contain"
          />
        </Reveal>
      </div>
    </section>
  )
}