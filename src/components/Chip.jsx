const base =
  'inline-block whitespace-nowrap rounded-[3px] border px-[.55rem] pt-[.16rem] pb-[.18rem] text-[13px] leading-[1.45]'

const look = (current, more) => {
  if (current) {
    return 'border-[color-mix(in_oklab,var(--color-accent)_40%,var(--color-chip-border))] bg-[color-mix(in_oklab,var(--color-accent)_13%,var(--color-chip))] text-accent'
  }
  if (more) return 'border-dashed border-chip-border bg-transparent text-muted'
  return 'border-chip-border bg-chip text-chip-fg'
}

const linkHover = 'transition-colors duration-150 hover:border-accent hover:text-fg'

export function Tags({ className = '', items }) {
  return (
    <div className={`flex flex-wrap gap-[.4rem] ${className}`}>
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </div>
  )
}

export default function Chip({ href, newTab, current, more, children }) {
  const className = `${base} ${look(current, more)}`
  if (!href) return <span className={className}>{children}</span>
  return (
    <a
      href={href}
      className={`${className} ${linkHover}`}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
