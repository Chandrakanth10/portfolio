import Shell, { PageTitle } from '../components/Shell.jsx'
import { Rows, Row } from '../components/Row.jsx'
import Chip from '../components/Chip.jsx'
import ContactRow from '../components/ContactRow.jsx'
import Rich from '../components/Rich.jsx'
import { profile } from '../content/profile.js'
import { roles } from '../content/work.js'
import { papers, reviewVenues, reviewCount } from '../content/research.js'
import { publications, writing } from '../content/media.js'
import { pageUrl } from '../lib/url.js'

// The first entry for each distinct value of `key`, in order.
const firstOfEach = (list, key) => list.filter((item, i) => list.findIndex((other) => other[key] === item[key]) === i)

const currentRole = roles.find((role) => role.current)
const pastRoles = roles.filter((role) => role.onHome && !role.current)
const paperChips = firstOfEach(papers, 'chip')
const shownPublications = publications.slice(0, 6)
const morePublications = publications.length - shownPublications.length

const Num = ({ children }) => <span className="text-[.92em] text-accent tabular-nums">{children}</span>

export default function Home() {
  return (
    <Shell page="home">
      <PageTitle>{profile.name}</PageTitle>
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
              <Rich parts={bullet} />
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
            <Chip key={venue.id} href={pageUrl('reviews', venue.id)}>
              {venue.chip}
            </Chip>
          ))}
        </Row>
        <Row label="Quoted in">
          {shownPublications.map((item) => (
            <Chip key={item.id} href={pageUrl('media', item.id)}>
              {item.name}
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
