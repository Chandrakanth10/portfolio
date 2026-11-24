import { Tile } from './Chip.jsx'

// A phrase stays on one line while its bullet's text is at least 27 characters wide
// (the longest phrase, "Build data and ML pipelines"); with very large text it wraps
// instead of overflowing.
const introUnderline =
  '@min-[27ch]:whitespace-nowrap underline decoration-1 decoration-[color:color-mix(in_oklab,var(--color-muted)_60%,transparent)] underline-offset-[.28em]'

// A name with its logo in a small box. It stays on one line while its bullet's text is
// at least 24 characters wide (the widest box, Walmart Global Tech); below that it may break.
const Named = ({ name, logo }) => (
  <span className="@min-[24ch]:whitespace-nowrap wrap-anywhere rounded-[.1875rem] border border-chip-border bg-chip pt-[.04em] pr-[.45em] pb-[.1em] pl-[.4em] text-fg">
    <Tile
      logo={logo}
      className="mr-[.4em] inline-flex size-[1.05em] items-center justify-center rounded-[.1875rem] relative -top-[.09em] align-middle"
    />
    {name}
  </span>
)

// A line of text in parts: a string, { underline } (a phrase), { fig } (a figure in the
// accent colour) or { name, logo } (a name in a box with its logo). It belongs inside an
// @container, so a Named or an underlined phrase can wrap when its line is very narrow.
export default function Rich({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return part
    if (part.fig) {
      return (
        <span key={i} className="text-accent">
          {part.fig}
        </span>
      )
    }
    if (part.underline) {
      return (
        <span key={i} className={introUnderline}>
          {part.underline}
        </span>
      )
    }
    return <Named key={i} {...part} />
  })
}
