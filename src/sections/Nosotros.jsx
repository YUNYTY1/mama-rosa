import ValueItem from '../components/ValueItem'
import Reveal from '../components/Reveal'
import { NOSOTROS } from '../data/site'

export default function Nosotros() {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-brand-cream py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <Reveal direction="left">
          <p className="text-sm font-bold text-brand-red">{NOSOTROS.label}</p>
          <h2 id="nosotros-title" className="mt-1 max-w-xs font-display text-6xl leading-[0.92]">
            {NOSOTROS.title}
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {NOSOTROS.text.map((part, i) =>
              typeof part === 'string' ? part : <strong key={i}>{part.strong}</strong>,
            )}
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:pt-2">
          {NOSOTROS.values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 150}>
              <ValueItem {...v} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}