// A chip wraps only when it is wider than its line, as with very large text.
const base =
  'inline-block wrap-anywhere rounded-[.1875rem] border pt-[.16rem] pb-[.18rem] text-[.8125rem] leading-[1.45]'

// A logo tile sits in the left padding, so a chip with one is as tall as one without.
const padding = (logo) => (logo ? 'relative pl-[calc(1.5rem+.5em)] pr-[.55rem]' : 'px-[.55rem]')

const Logo = ({ logo }) => (
  <span
    aria-hidden="true"
    className="absolute top-1/2 left-[.5rem] flex size-4 -translate-y-1/2 items-center justify-center rounded-[.1875rem]"
    style={{ backgroundColor: logo.tile }}
  >
    <img
      src={logo.src}
      alt=""
      className="object-contain"
      style={{ width: `${logo.fit * 100}%`, height: `${logo.fit * 100}%` }}
    />
  </span>
)

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

export default function Chip({ href, newTab, current, more, logo, children }) {
  const className = `${base} ${padding(logo)} ${look(current, more)}`
  if (!href) return <span className={className}>{children}</span>
  return (
    <a
      href={href}
      className={`${className} ${linkHover}`}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {logo && <Logo logo={logo} />}
      {children}
      {newTab && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  )
}
