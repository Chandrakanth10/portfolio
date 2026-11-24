import { createContext, use } from 'react'
import Rich from './Rich.jsx'

const Variant = createContext('page')

const rowsClass = {
  home: 'grid gap-y-[.6rem] max-[34rem]:gap-y-[.85rem]',
  page: 'grid gap-y-6',
  // A faint line, like the one under the top bar, halfway between each row and the next.
  divided: 'grid gap-y-6 [&>*+*]:border-t [&>*+*]:border-chip-border [&>*+*]:pt-6',
  tight: 'grid gap-y-[.6rem]',
}

// Under 34rem a home row is one wrapping line: the row becomes a flex line and
// the dd (and any wrapper inside it) dissolves, so its chips flow after the label.
const rowClass = {
  home: 'grid grid-cols-[8.25rem_minmax(0,1fr)] items-baseline gap-x-4 max-[34rem]:flex max-[34rem]:flex-wrap max-[34rem]:gap-x-[.45rem] max-[34rem]:gap-y-[.4rem]',
  page: 'grid grid-cols-[12.5rem_minmax(0,1fr)] items-baseline gap-x-4 max-[34rem]:grid-cols-1 max-[34rem]:gap-y-[.35rem]',
}

const dtClass = {
  home: 'text-sm text-muted whitespace-nowrap max-[34rem]:mr-[.15rem]',
  page: 'text-sm text-muted',
}

const ddClass = {
  home: 'flex flex-wrap gap-[.4rem] [&>:not(a)]:contents max-[34rem]:contents',
  page: 'min-w-0',
}

export function Rows({ variant = 'page', children }) {
  return (
    <Variant value={variant}>
      <dl className={rowsClass[variant]}>{children}</dl>
    </Variant>
  )
}

// The parts that stack inside an inner-page row's content. In the title and the body, a word
// too long for its line, as with very large text on a narrow screen, breaks instead of
// running off the page.
export function ItemTitle({ children }) {
  return <h3 className="text-[.9375rem] font-medium wrap-break-word text-fg">{children}</h3>
}

export function Body({ className = '', children }) {
  return <p className={`text-sm leading-[1.6] wrap-break-word text-soft ${className}`}>{children}</p>
}

export function Detail({ className = '', children }) {
  return <p className={`text-[.8125rem] text-muted ${className}`}>{children}</p>
}

// A tight list with a dash before each item, as the Reviews and Media rows list their titles.
// Each item is { key, content }. A word too long for its line breaks, as in a title.
export function DashList({ className = '', items }) {
  return (
    <ul role="list" className={`grid gap-y-[.35rem] ${className}`}>
      {items.map(({ key, content }) => (
        <li key={key} className="grid grid-cols-[1.5em_minmax(0,1fr)] text-sm leading-[1.55] wrap-break-word text-fg">
          <span aria-hidden="true" className="text-muted">
            –
          </span>
          <span>{content}</span>
        </li>
      ))}
    </ul>
  )
}

// Each item is an array of parts (see Rich.jsx).
export function Bullets({ items }) {
  return (
    <ul role="list" className="mt-[.7rem] grid gap-y-[.3rem] text-[.8125rem] leading-[1.7] text-soft max-[34rem]:text-sm">
      {items.map((item, i) => (
        <li key={i} className="grid grid-cols-[1.5em_minmax(0,1fr)]">
          <span aria-hidden="true" className="text-muted">
            –
          </span>
          <span className="@container">
            <Rich parts={item} />
          </span>
        </li>
      ))}
    </ul>
  )
}

// `order` is the row's own turn in a page's entrance (index.css).
export function Row({ id, label, order, children }) {
  const kind = use(Variant) === 'home' ? 'home' : 'page'
  return (
    <div id={id} className={`group ${rowClass[kind]} [&:target>dt]:text-accent`} style={{ '--i': order }}>
      <dt className={dtClass[kind]}>{label}</dt>
      <dd className={ddClass[kind]}>{children}</dd>
    </div>
  )
}
