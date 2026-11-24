// A chip wraps only when it is wider than its line, as with very large text.
const base =
  'inline-block wrap-anywhere rounded-[.1875rem] border pt-[.16rem] pb-[.18rem] text-[.8125rem] leading-[1.45]'

// A logo tile sits in the left padding, so a chip with one is as tall as one without.
const padding = (logo) => (logo ? 'relative pl-[calc(1.5rem+.5em)] pr-[.55rem]' : 'px-[.55rem]')

// A logo on its coloured tile. The tile is decoration: the name next to it is the text.
export function Tile({ logo, className }) {
  return (
    <span aria-hidden="true" className={className} style={{ backgroundColor: logo.tile }}>
      <img
        src={logo.src}
        alt=""
        className="object-contain"
        style={{ width: `${logo.fit * 100}%`, height: `${logo.fit * 100}%` }}
      />
    </span>
  )
}

const Logo = ({ logo }) => (
  <Tile
    logo={logo}
    className="absolute top-1/2 left-[.5rem] flex size-4 -translate-y-1/2 items-center justify-center rounded-[.1875rem]"
  />
)

const accentLook =
  'border-[color-mix(in_oklab,var(--color-accent)_40%,var(--color-chip-border))] bg-[color-mix(in_oklab,var(--color-accent)_13%,var(--color-chip))] text-accent'

const look = (current, more) => {
  if (current) return accentLook
  if (more) return 'border-dashed border-chip-border bg-transparent text-muted'
  return 'border-chip-border bg-chip text-chip-fg'
}

const linkHover = 'transition-colors duration-150 hover:border-accent hover:text-fg'

// A small label beside a name or a date, such as Contract or Now.
export function Tag({ accent, children }) {
  return (
    <span
      className={`rounded-[.1875rem] border px-[.4rem] pt-[.02rem] pb-[.06rem] text-[.6875rem] leading-[1.45] tracking-[.05em] uppercase ${accent ? accentLook : 'border-chip-border text-muted'}`}
    >
      {children}
    </span>
  )
}

// Each item is a string or { name, logo }.
export function Tags({ className = '', items }) {
  return (
    <div className={`flex flex-wrap gap-[.4rem] ${className}`}>
      {items.map((item) => {
        const { name, logo } = typeof item === 'string' ? { name: item } : item
        return (
          <Chip key={name} logo={logo}>
            {name}
          </Chip>
        )
      })}
    </div>
  )
}

export default function Chip({ href, newTab, current, more, logo, children }) {
  const className = `${base} ${padding(logo)} ${look(current, more)}`
  if (!href) {
    return (
      <span className={className}>
        {logo && <Logo logo={logo} />}
        {children}
      </span>
    )
  }
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
