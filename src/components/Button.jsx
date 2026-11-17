const VARIANTS = {
  gold: 'bg-brand-gold text-brand-ink hover:brightness-95',
  red: 'bg-brand-red text-white hover:bg-brand-red-dark',
  white: 'bg-white text-brand-red hover:bg-brand-cream',
}

export default function Button({
  href,
  variant = 'gold',
  icon: Icon,
  iconAfter = false,
  children,
  className = '',
  ...rest
}) {
  const external = href?.startsWith('http')
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-lg px-5 py-3.5 text-sm font-semibold shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 ${VARIANTS[variant]} ${className}`}
      {...rest}
    >
      {Icon && !iconAfter && (
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
      )}
      {children}
      {Icon && iconAfter && (
        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      )}
    </a>
  )
}