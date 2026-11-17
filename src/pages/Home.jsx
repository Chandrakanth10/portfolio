import Shell from '../components/Shell.jsx'
import { Rows, Row } from '../components/Row.jsx'
import Chip from '../components/Chip.jsx'
import ContactRow from '../components/ContactRow.jsx'
import { profile } from '../content/profile.js'
import { roles } from '../content/work.js'
import { papers, reviewVenues } from '../content/research.js'
import { press, writing } from '../content/media.js'
import { pageUrl } from '../lib/url.js'

// The first entry for each distinct value of `key`, in order.
const firstOfEach = (list, key) => list.filter((item, i) => list.findIndex((other) => other[key] === item[key]) === i)

const currentRole = roles.find((role) => role.current)
const pastRoles = roles.filter((role) => role.onHome && !role.current)
const paperChips = firstOfEach(papers, 'chip')
const reviewCount = reviewVenues
  .flatMap((venue) => venue.groups)
  .reduce((count, group) => count + group.papers.length, 0)
const publications = firstOfEach(press, 'pub')
const shownPublications = publications.slice(0, 6)
const morePublications = publications.length - shownPublications.length

// A phrase stays on one line while its bullet's text is at least 18 characters wide
// (the longest phrase); with very large text it wraps instead of overflowing.
const introUnderline =
  '@min-[18ch]:whitespace-nowrap underline decoration-1 decoration-[color:color-mix(in_oklab,var(--color-muted)_60%,transparent)] underline-offset-[.28em]'

const Num = ({ children }) => <span className="text-[.92em] text-accent tabular-nums">{children}</span>

// A name with its logo in a small box. It stays on one line while its bullet's text is
// at least 15 characters wide (the widest box, Albertsons); below that it may break.
const Named = ({ name, logo }) => (
  <span className="@min-[15ch]:whitespace-nowrap wrap-anywhere rounded-[.1875rem] border border-chip-border bg-chip pt-[.04em] pr-[.45em] pb-[.1em] pl-[.4em] text-fg">
    <span
      aria-hidden="true"
      className="mr-[.4em] inline-flex size-[1.05em] items-center justify-center rounded-[.1875rem] align-[-.18em]"
      style={{ backgroundColor: logo.tile }}
    >
      <img
        src={logo.src}
        alt=""
        className="object-contain"
        style={{ width: `${logo.fit * 100}%`, height: `${logo.fit * 100}%` }}
      />
    </span>
    {name}
  </span>
)

export default function Home() {
  return (
    <Shell page="home">
      <h1 className="text-[1.5rem] leading-[1.25] font-medium tracking-[-.012em] text-balance wrap-break-word text-fg max-[34rem]:text-[1.3rem]">
        {profile.name}
      </h1>
      <p className="mt-2 flex items-center gap-[.4em] text-[.9375rem] leading-[1.6] text-soft">
        {/* Lucide map-pin, ISC licence */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-[1em] shrink-0 -translate-y-[.04em] text-accent"
        >
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="sr-only">Location: </span>
        {profile.location}
      </p>
      <ul role="list" className="mt-[1.1rem] mb-9 grid gap-y-[.35rem] pl-[.9rem] text-[.9375rem] leading-[1.8] text-soft max-[34rem]:mb-7">
        {profile.intro.map((bullet) => (
          <li key={bullet[0].underline} className="grid grid-cols-[1.6em_minmax(0,1fr)]">
            <span aria-hidden="true" className="text-muted">
              –
            </span>
            <span className="@container">
              {bullet.map((part) => {
                if (typeof part === 'string') return part
                if (part.underline) {
                  return (
                    <span key={part.underline} className={introUnderline}>
                      {part.underline}
                    </span>
                  )
                }
                return <Named key={part.name} {...part} />
              })}
            </span>
          </li>
        ))}
      </ul>
      <Rows variant="home">
        <Row label="Working at">
          <Chip href={pageUrl('work', currentRole.id)} current logo={currentRole.logo}>
            {currentRole.chip}
          </Chip>
        </Row>
        <Row label="Before that">
          {pastRoles.map((role) => (
            <Chip key={role.id} href={pageUrl('work', role.id)} logo={role.logo}>
              {role.chip}
            </Chip>
          ))}
        </Row>
        <Row label={<><Num>{papers.length}</Num> papers in</>}>
          {paperChips.map((paper) => (
            <Chip key={paper.id} href={pageUrl('research', paper.id)}>
              {paper.chip}
            </Chip>
          ))}
        </Row>
        <Row label={<><Num>{reviewCount}</Num> reviews for</>}>
          {reviewVenues.map((venue) => (
            <Chip key={venue.id} href={pageUrl('research', venue.id)}>
              {venue.chip}
            </Chip>
          ))}
        </Row>
        <Row label="Quoted in">
          {shownPublications.map((item) => (
            <Chip key={item.pubId} href={pageUrl('media', item.pubId)}>
              {item.pub}
            </Chip>
          ))}
          {morePublications > 0 && (
            <Chip href={pageUrl('media', 'press')} more>
              +{morePublications} more
            </Chip>
          )}
        </Row>
        <Row label="Writing on">
          <Chip href={pageUrl('media', 'writing')}>{writing.outlet}</Chip>
        </Row>
        <ContactRow />
      </Rows>
    </Shell>
  )
}
