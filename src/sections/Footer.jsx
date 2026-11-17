import { Heart, Instagram, Mail, MessageCircle } from 'lucide-react'
import Logo from '../components/Logo'
import PaymentBadge from '../components/PaymentBadge'
import Reveal from '../components/Reveal'
import { FOOTER, LINKS, NAV_ITEMS } from '../data/site'

export default function Footer() {
  const contacts = [
    { icon: MessageCircle, text: FOOTER.phone, href: LINKS.whatsapp, label: 'Escribir por WhatsApp' },
    { icon: Instagram, text: FOOTER.instagramHandle, href: LINKS.instagram, label: 'Abrir Instagram' },
    { icon: Mail, text: FOOTER.email, href: LINKS.email, label: 'Enviar un correo' },
  ]

  return (
    <footer className="bg-brand-ink text-white">
      <Reveal className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.3fr_1.4fr] lg:px-8">
        <Logo variant="light" className="self-start justify-self-start" />

        <nav aria-label="Enlaces rápidos">
          <h2 className="text-xs font-bold tracking-wide text-white/80">{FOOTER.quickLinksTitle}</h2>
          <ul className="mt-3 space-y-1.5 text-xs">
            {NAV_ITEMS.map((i) => (
              <li key={i.href}>
                <a href={i.href} className="transition hover:text-brand-gold">
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-wide text-white/80">{FOOTER.contactTitle}</h2>
          <ul className="mt-3 space-y-2 text-xs">
            {contacts.map(({ icon: Icon, text, href, label }) => (
              <li key={text}>
                <a
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2.5 transition hover:text-brand-gold"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-wide text-white/80">{FOOTER.paymentsTitle}</h2>
          <ul className="mt-3 flex flex-wrap items-center gap-3">
            {FOOTER.payments.map((p) => (
              <PaymentBadge key={p} name={p} />
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-5 py-4 text-xs text-white/80 sm:flex-row sm:justify-between lg:px-8">
        <p>{FOOTER.copyright}</p>
        <p className="inline-flex items-center gap-1.5">
          {FOOTER.credit} <Heart className="h-3.5 w-3.5 fill-brand-red text-brand-red" aria-label="amor" /> {FOOTER.creditBrand}
        </p>
      </div>
    </footer>
  )
}