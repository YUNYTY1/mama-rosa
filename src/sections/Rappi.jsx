import { Bike } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { RAPPI, LINKS } from '../data/site'

export default function Rappi() {
  return (
    <section aria-labelledby="rappi-title" className="overflow-hidden bg-brand-red text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-10">
        <Reveal direction="left">
          <SectionTitle
            id="rappi-title"
            lead={RAPPI.lead}
            leadClass="font-sans text-2xl font-bold sm:text-3xl"
            main={RAPPI.title}
            mainClass="font-display text-7xl leading-[0.9] text-brand-gold sm:text-8xl"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{RAPPI.text}</p>
          <Button href={LINKS.rappi} variant="white" icon={Bike} className="mt-6">
            {RAPPI.button}
          </Button>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <img
            src={RAPPI.image}
            alt={RAPPI.alt}
            loading="lazy"
            className="mx-auto max-h-80 w-full animate-float object-contain"
          />
        </Reveal>
      </div>
    </section>
  )
}