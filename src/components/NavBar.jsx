export default function NavBar({ items, active, onSelect, orientation = 'horizontal' }) {
  const isRow = orientation === 'horizontal'
  return (
    <nav aria-label="Principal">
      <ul className={isRow ? 'flex items-center gap-8' : 'flex flex-col gap-1'}>
        {items.map((item) => {
          const isActive = active === item.href
          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => onSelect?.(item.href)}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isRow
                    ? `border-b-2 pb-1 text-sm font-medium transition ${
                        isActive ? 'border-brand-red text-brand-red' : 'border-transparent hover:text-brand-red'
                      }`
                    : `block rounded-lg px-3 py-3 text-base font-medium ${
                        isActive ? 'bg-brand-red/10 text-brand-red' : 'hover:bg-black/5'
                      }`
                }
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
