import SectionTitle from '../components/SectionTitle'
import DestacadoCard from '../components/DestacadoCard'
import Sello from '../components/Sello'
import Reveal from '../components/Reveal'
import { DESTACADOS } from '../data/site'

// Brasas decorativas (delays negativos para que arranquen ya en movimiento)
const EMBERS = [
  { left: '8%', delay: '-0.5s', duration: '3.4s' },
  { left: '22%', delay: '-2s', duration: '4.2s' },
  { left: '35%', delay: '-1.2s', duration: '3.1s' },
  { left: '48%', delay: '-3s', duration: '4.6s' },
  { left: '60%', delay: '-0.8s', duration: '3.6s' },
  { left: '72%', delay: '-2.6s', duration: '4s' },
  { left: '85%', delay: '-1.6s', duration: '3.3s' },
  { left: '94%', delay: '-3.4s', duration: '4.4s' },
]

export default function Destacados() {
  return (
    <section
      id="promociones"
      aria-labelledby="destacados-title"
      className="relative overflow-hidden bg-brand-ink py-12 text-white lg:py-14"
    >
      {/* Resplandor de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(255,110,20,0.28),transparent_45%),radial-gradient(circle_at_95%_80%,rgba(196,20,28,0.25),transparent_40%)]"
      />
      {/* Brasas que suben */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden md:block">
        {EMBERS.map((e) => (
          <span
            key={e.left}
            className="absolute bottom-0 h-1.5 w-1.5 animate-ember rounded-full bg-brand-gold"
            style={{ left: e.left, animationDelay: e.delay, animationDuration: e.duration }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionTitle
            id="destacados-title"
            lead={DESTACADOS.lead}
            leadClass="text-2xl font-bold sm:text-3xl"
            main={DESTACADOS.title}
            mainClass="text-3xl font-bold text-brand-gold sm:text-4xl"
          />
          <span className="mt-2 block h-1 w-14 bg-brand-red" aria-hidden="true" />
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_1fr_0.75fr] lg:items-center">
          {DESTACADOS.items.map((item, i) => (
            <Reveal key={item.alt} delay={i * 150}>
              <DestacadoCard {...item} />
            </Reveal>
          ))}
          <Reveal direction="zoom" delay={300} className="hidden justify-center lg:flex">
            <Sello className="h-44 w-44 animate-float" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}