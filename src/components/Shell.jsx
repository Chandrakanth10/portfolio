import { useEffect, useRef, useState } from 'react'
import { Rows } from './Row.jsx'
import ContactRow from './ContactRow.jsx'
import { profile } from '../content/profile.js'
import { pageUrl } from '../lib/url.js'

const links = [
  { page: 'home', label: 'Home', href: pageUrl() },
  { page: 'work', label: 'Work', href: pageUrl('work') },
  { page: 'research', label: 'Research', href: pageUrl('research') },
  { page: 'reviews', label: 'Reviews', href: pageUrl('reviews') },
  { page: 'media', label: 'Media', href: pageUrl('media') },
]

const column = 'mx-auto w-full max-w-[54rem] px-7 max-[34rem]:px-[1.1rem]'
// For a page with an outline in its left margin: a narrower column. Where the outline
// shows (from 88rem wide) it moves right, away from the outline, to a little past the
// middle; on smaller windows it keeps the left edge the other pages have.
const narrowColumn = '*:max-w-[43.5rem] min-[88rem]:*:ml-22'

export function PageTitle({ children }) {
  return (
    <h1 className="text-[1.5rem] leading-[1.25] font-medium tracking-[-.012em] text-balance wrap-break-word text-fg max-[34rem]:text-[1.3rem]">
      {children}
    </h1>
  )
}

// A section of an inner page: its h2 (which carries the id), an optional line
// of sentences and links under it, then its rows. A loose section has more space
// above it and under its h2. `order` is its turn when the page's parts arrive (index.css).
export function Section({ id, title, lead, loose, order, children }) {
  return (
    <section className={`${loose ? 'mt-12' : 'mt-11'} first-of-type:mt-8`} style={{ '--i': order }}>
      <h2 id={id} className={`${loose ? 'mb-5' : 'mb-4'} text-sm font-medium text-fg`}>
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

export default function Shell({ page, narrow, enter, children }) {
  const home = page === 'home'
  const inner = narrow ? narrowColumn : ''
  const bar = useRef(null)
  const [pinned, setPinned] = useState(true)

  // The bar stays in view while it takes up no more than a quarter of the window's height.
  // With very large text or on a very short window it scrolls away, so it cannot cover the
  // page. index.css uses --bar-height to stop a section reached from a link below the bar.
  useEffect(() => {
    const update = () => {
      const height = bar.current.offsetHeight
      const fits = height <= window.innerHeight / 4
      setPinned(fits)
      document.documentElement.style.setProperty('--bar-height', fits ? `${height}px` : '0px')
    }
    const observer = new ResizeObserver(update)
    observer.observe(bar.current)
    window.addEventListener('resize', update)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="flex min-h-dvh flex-col">
      {/* The same bar on every page. */}
      <header
        ref={bar}
        className={`${pinned ? 'sticky' : ''} top-0 z-10 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-bg px-7 pt-[1.4rem] pb-3 max-[34rem]:px-[1.1rem] max-[34rem]:pt-[1.1rem]`}
      >
        <a
          href={pageUrl()}
          className="text-sm font-medium text-fg transition-colors duration-150 hover:text-accent"
        >
          {profile.name}
        </a>
        {/* Below 22rem the gaps narrow so that all five tabs still fit on one line at 320px. */}
        <nav aria-label="Pages" className="flex flex-wrap justify-end gap-6 max-[34rem]:gap-[1.1rem] max-[22rem]:gap-[.7rem]">
          {links.map((link) => {
            const current = link.page === page
            return (
              <a
                key={link.page}
                href={link.href}
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
        <main className={`${column} flex flex-1 flex-col justify-center pt-6 pb-16 max-[34rem]:pt-3 max-[34rem]:pb-10`}>
          <div className="home">{children}</div>
        </main>
      ) : (
        <>
          <main className={`${column} ${inner} ${enter ? 'enter' : ''} pt-6 pb-14 max-[34rem]:pt-3`}>{children}</main>
          <footer className={`${column} ${inner} pb-16 max-[34rem]:pb-10`}>
            <Rows>
              <ContactRow />
            </Rows>
          </footer>
        </>
      )}
    </div>
  )
}
