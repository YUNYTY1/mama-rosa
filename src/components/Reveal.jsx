import { useEffect, useRef, useState } from 'react'

const HIDDEN = {
  up: 'translate-y-10',
  left: '-translate-x-10',
  right: 'translate-x-10',
  zoom: 'scale-90',
  none: '',
}

// Envuelve cualquier contenido y lo anima al entrar en pantalla.
// direction: 'up' | 'left' | 'right' | 'zoom' | 'none'   delay: milisegundos
export default function Reveal({
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  className = '',
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : `opacity-0 ${HIDDEN[direction]}`
      } ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}