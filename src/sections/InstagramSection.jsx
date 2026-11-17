import { Instagram } from 'lucide-react'
import Reveal from '../components/Reveal'
import { INSTAGRAM, LINKS } from '../data/site'

export default function InstagramSection() {
  return (
    <section aria-labelledby="instagram-title" className="bg-brand-gold text-brand-ink">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 py-8 lg:grid-cols-[1fr_1.7fr] lg:px-8">
        <Reveal direction="left" className="flex items-start gap-4">
          <Instagram className="mt-1 h-10 w-10 shrink-0" aria-hidden="true" />
          <div>
            <p className="text-sm font-bold">{INSTAGRAM.lead}</p>
            <h2 id="instagram-title" className="font-display text-5xl leading-none text-brand-red sm:text-6xl">
              {INSTAGRAM.title}
            </h2>
            <p className="mt-2 text-sm">{INSTAGRAM.text}</p>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-base font-bold underline-offset-4 hover:underline"
            >
              {INSTAGRAM.handle}
            </a>
          </div>
        </Reveal>

        <ul className="grid grid-cols-2 overflow-hidden rounded-lg sm:grid-cols-4">
          {INSTAGRAM.photos.map((p, i) => (
            <Reveal as="li" key={p.alt} direction="zoom" delay={i * 120}>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver en Instagram: ${p.alt}`}
                className="group block overflow-hidden"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110 sm:aspect-[4/5]"
                />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}