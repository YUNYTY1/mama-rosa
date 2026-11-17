import { Clock, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import { UBICACION, LINKS } from '../data/site'

export default function Ubicacion() {
  return (
    <section id="ubicacion" aria-labelledby="ubicacion-title" className="bg-brand-ink py-12 text-white lg:py-10">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 lg:grid-cols-[1fr_1.6fr] lg:px-8">
        <Reveal direction="left">
          <p className="text-sm font-bold text-brand-gold">{UBICACION.label}</p>
          <h2 id="ubicacion-title" className="mt-1 font-display text-5xl leading-none sm:text-6xl">
            {UBICACION.title}
          </h2>

          <div className="mt-6 flex items-start gap-4">
            <MapPin className="mt-1 h-9 w-9 shrink-0 animate-float text-brand-gold" aria-hidden="true" />
            <address className="text-xl font-semibold not-italic leading-snug">{UBICACION.address}</address>
          </div>

          <div className="mt-5 flex items-start gap-4">
            <Clock className="mt-1 h-9 w-9 shrink-0 text-brand-gold" aria-hidden="true" />
            <div>
              <p className="text-sm font-bold">{UBICACION.hoursLabel}</p>
              <p className="text-xl font-semibold">{UBICACION.hours}</p>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
  <div className="group block overflow-hidden rounded-2xl border-2 border-white/20">
    <iframe
      title="Ubicación de Mamá Rosa Pollería en Google Maps"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.6961358999997!2d-76.9189!3d-12.0315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c75000000001%3A0x0!2zUGFyYWNhcyA0MjksIEF0ZSwgTGltYSwgUGVyw7o!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="h-60 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-72"
    ></iframe>
  </div>
</Reveal>
      </div>
    </section>
  )
}