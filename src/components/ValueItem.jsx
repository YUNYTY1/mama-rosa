import { Flame, Drumstick, Heart } from 'lucide-react'

const ICONS = { flame: Flame, chicken: Drumstick, heart: Heart }

export default function ValueItem({ icon, title, text }) {
  const Icon = ICONS[icon] ?? Flame
  return (
    <div className="group flex flex-col items-start">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gold transition duration-300 group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:scale-110">
        <Icon
          className={`h-8 w-8 ${icon === 'heart' ? 'fill-brand-red text-brand-red' : 'text-brand-ink'}`}
          aria-hidden="true"
        />
      </span>
      <h3 className="mt-4 text-base font-bold uppercase leading-tight">{title}</h3>
      <p className="mt-2 max-w-[11rem] text-sm leading-snug text-brand-ink/80">{text}</p>
    </div>
  )
}