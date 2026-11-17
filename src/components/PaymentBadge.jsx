// Marcas de pago. TODO: reemplazar por los logos oficiales (SVG) si los tienes.
const STYLES = {
  VISA: 'bg-white px-4 py-2 font-extrabold italic text-[#1A1F71]',
  Mastercard: 'px-2 py-2 text-xs font-semibold text-white',
  'Apple Pay': 'px-2 py-2 text-lg font-semibold text-white',
  BCP: 'bg-[#0B3D91] px-4 py-2 font-extrabold text-[#F58220]',
  yape: 'px-2 py-2 text-lg font-bold italic text-white',
}

export default function PaymentBadge({ name }) {
  return (
    <li
      className={`inline-flex items-center justify-center rounded-md text-sm ${STYLES[name] ?? 'text-white'}`}
      aria-label={name}
    >
      {name === 'Mastercard' ? (
        <span className="flex items-center gap-1.5">
          <span className="relative flex h-7 w-11" aria-hidden="true">
            <span className="absolute left-0 h-7 w-7 rounded-full bg-[#EB001B]" />
            <span className="absolute left-4 h-7 w-7 rounded-full bg-[#F79E1B] mix-blend-screen" />
          </span>
          <span className="sr-only">Mastercard</span>
        </span>
      ) : (
        name
      )}
    </li>
  )
}
