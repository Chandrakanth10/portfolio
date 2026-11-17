import { Rows } from './Row.jsx'
import ContactRow from './ContactRow.jsx'
import { profile } from '../content/profile.js'
import { pageUrl } from '../lib/url.js'

const links = [
  { page: 'work', label: 'Work' },
  { page: 'research', label: 'Research' },
  { page: 'media', label: 'Media' },
]

const column = 'mx-auto w-full max-w-[54rem] px-7 max-[34rem]:px-[1.1rem]'

export function PageTitle({ children }) {
  return <h1 className="text-[1.0625rem] leading-normal font-medium text-balance text-fg">{children}</h1>
}

// A section of an inner page: its h2 (which carries the id), an optional line
// of sentences and links under it, then its rows.
export function Section({ id, title, lead, children }) {
  return (
    <section className="mt-11 first-of-type:mt-8">
      <h2 id={id} className="mb-4 text-sm font-medium text-fg">
        {title}
      </h2>
      {lead && (
        <div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm leading-[1.6] text-soft">
          {lead}
        </div>
      )}
      {children}
    </section>
  )
}

export default function Shell({ page, children }) {
  const home = page === 'home'
  return (
    <div className="flex min-h-dvh flex-col">
      <header
        className={`flex flex-wrap items-baseline gap-x-4 gap-y-2 px-7 pt-[1.4rem] max-[34rem]:px-[1.1rem] max-[34rem]:pt-[1.1rem] ${home ? 'justify-end' : 'justify-between'}`}
      >
        {!home && (
          <a
            href={pageUrl()}
            className="text-sm font-medium text-fg transition-colors duration-150 hover:text-accent"
          >
            {profile.name}
          </a>
        )}
        <nav aria-label="Pages" className="flex gap-6 max-[34rem]:gap-[1.1rem]">
          {links.map((link) => {
            const current = link.page === page
            return (
              <a
                key={link.page}
                href={pageUrl(link.page)}
                aria-current={current ? 'page' : undefined}
                className={`text-sm font-medium transition-colors duration-150 hover:text-accent ${current ? 'text-fg' : 'text-muted'}`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </header>
      {home ? (
        <main className={`${column} flex flex-1 flex-col justify-center pt-9 pb-16 max-[34rem]:pt-6 max-[34rem]:pb-10`}>
          <div className="home">{children}</div>
        </main>
      ) : (
        <>
          <main className={`${column} pt-9 pb-14 max-[34rem]:pt-6`}>{children}</main>
          <footer className={`${column} pb-16 max-[34rem]:pb-10`}>
            <Rows>
              <ContactRow />
            </Rows>
          </footer>
        </>
      )}
    </div>
  )
}
