import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroCarousel({ images, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const total = images.length

  const go = useCallback((i) => setIndex((i + total) % total), [total])

  // Autoplay (se detiene con el mouse encima, o si el usuario pidió menos movimiento)
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (paused || reduce || total < 2) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), interval)
    return () => clearInterval(id)
  }, [paused, total, interval, index])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const diff = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(diff) > 40) go(diff < 0 ? index + 1 : index - 1)
    touchX.current = null
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      role="group"
      aria-roledescription="carrusel"
      aria-label="Galería de platos"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          aria-hidden={i !== index}
          loading={i === 0 ? 'eager' : 'lazy'}
          className={`absolute inset-0 h-full w-full object-cover ${
            i === index ? 'scale-110 opacity-100' : 'scale-100 opacity-0'
          }`}
          style={{ transition: 'opacity 1000ms ease-in-out, transform 7000ms ease-out' }}
        />
      ))}

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/45 px-2 py-1.5 text-white backdrop-blur">
        <button
          type="button"
          aria-label="Imagen anterior"
          onClick={() => go(index - 1)}
          className="rounded-full p-1.5 transition hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir a la imagen ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-brand-gold' : 'w-2.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label="Imagen siguiente"
          onClick={() => go(index + 1)}
          className="rounded-full p-1.5 transition hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}