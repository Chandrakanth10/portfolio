import Shell, { PageTitle } from '../components/Shell.jsx'
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

// A phrase stays on one line while the intro is at least 19 characters wide (the
// longest phrase and its comma); with very large text it wraps instead of overflowing.
const introUnderline =
  '@min-[19ch]:whitespace-nowrap underline decoration-1 decoration-[color:color-mix(in_oklab,var(--color-muted)_60%,transparent)] underline-offset-[.28em]'

const Num = ({ children }) => <span className="text-[.92em] text-accent tabular-nums">{children}</span>

export default function Home() {
  return (
    <Shell page="home">
      <PageTitle>{profile.name}</PageTitle>
      <p className="@container mt-[1.1rem] mb-9 max-w-[34rem] text-[.9375rem] leading-[1.65] text-pretty text-soft max-[34rem]:mb-7">
        {profile.intro.map((part) =>
          typeof part === 'string' ? (
            part
          ) : (
            <span key={part.underline} className={introUnderline}>
              {part.underline}
            </span>
          ),
        )}
      </p>
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
