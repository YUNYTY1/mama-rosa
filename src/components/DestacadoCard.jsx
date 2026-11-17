import { Flame, UtensilsCrossed } from 'lucide-react'

const ICONS = { flame: Flame, fries: UtensilsCrossed }

export default function DestacadoCard({ title, text, image, alt, icon }) {
  const Icon = ICONS[icon] ?? Flame
  return (
    <article className="group overflow-hidden rounded-3xl border border-brand-gold/40 bg-brand-red shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-48 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-52"
        />
        <span className="absolute left-4 top-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gold text-brand-ink transition duration-300 group-hover:rotate-12 group-hover:scale-110">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
      </div>
      <div className="px-6 pb-6 pt-4 text-white">
        <h3 className="whitespace-pre-line font-sans text-2xl font-bold leading-tight">{title}</h3>
        <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-white/90">{text}</p>
      </div>
    </article>
  )
}