import { createContext, use } from 'react'
import Rich from './Rich.jsx'

const Variant = createContext('page')

const rowsClass = {
  home: 'grid gap-y-[.6rem] max-[34rem]:gap-y-[.85rem]',
  page: 'grid gap-y-6',
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

// The parts that stack inside an inner-page row's content.
export function ItemTitle({ children }) {
  return <h3 className="text-[.9375rem] font-medium text-fg">{children}</h3>
}

export function LineTitle({ children }) {
  return <p className="text-sm text-fg">{children}</p>
}

export function Body({ className = '', children }) {
  return <p className={`text-sm leading-[1.6] text-soft ${className}`}>{children}</p>
}

export function Detail({ className = '', children }) {
  return <p className={`text-[.8125rem] text-muted ${className}`}>{children}</p>
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

export function Row({ id, label, children }) {
  const kind = use(Variant) === 'home' ? 'home' : 'page'
  return (
    <div id={id} className={`group ${rowClass[kind]} [&:target>dt]:text-accent`}>
      <dt className={dtClass[kind]}>{label}</dt>
      <dd className={ddClass[kind]}>{children}</dd>
    </div>
  )
}
