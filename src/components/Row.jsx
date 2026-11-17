import { createContext, use } from 'react'

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
  return <h3 className="text-[15px] font-medium text-fg">{children}</h3>
}

export function LineTitle({ children }) {
  return <p className="text-sm text-fg">{children}</p>
}

export function Body({ className = '', children }) {
  return <p className={`text-sm leading-[1.6] text-soft ${className}`}>{children}</p>
}

export function Detail({ className = '', children }) {
  return <p className={`text-[13px] text-muted ${className}`}>{children}</p>
}

export function Bullets({ className = '', items }) {
  return (
    <ul role="list" className={`grid list-none gap-y-[.2rem] text-sm leading-[1.6] text-soft ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-[1.1rem] before:absolute before:left-0 before:text-muted before:content-['\2013']"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export function Row({ id, label, children }) {
  const kind = use(Variant) === 'home' ? 'home' : 'page'
  return (
    <div id={id} className={`${rowClass[kind]} [&:target>dt]:text-accent`}>
      <dt className={dtClass[kind]}>{label}</dt>
      <dd className={ddClass[kind]}>{children}</dd>
    </div>
  )
}
