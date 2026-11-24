import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, Detail } from '../components/Row.jsx'
import { LogoName } from '../components/Chip.jsx'
import { reviewsNote, reviewVenues, reviewCount } from '../content/research.js'

// A page opened at a venue goes straight there, with no entrance.
const enter = !location.hash

// The venue with its logo, and its kind under it. On a targeted row the name turns the accent.
// On a phone the titles go under the label, so a little more space keeps the kind apart
// from a workshop's name under it.
const VenueLabel = ({ venue }) => (
  <span className="grid gap-y-[.15rem] max-[34rem]:mb-[.4rem]">
    <LogoName logo={venue.logo} className="font-medium text-fg in-target:text-accent">
      {venue.name}
    </LogoName>
    <span className="text-[.8125rem] text-muted">{venue.kind}</span>
  </span>
)

const Titles = ({ papers }) => (
  <ul role="list" className="grid gap-y-[.35rem]">
    {papers.map((paper) => (
      <li key={paper.title} className="grid grid-cols-[1.5em_minmax(0,1fr)] text-sm leading-[1.55] text-fg">
        <span aria-hidden="true" className="text-muted">
          –
        </span>
        <span>{paper.title}</span>
      </li>
    ))}
  </ul>
)

export default function Reviews() {
  return (
    <Shell page="reviews" enter={enter}>
      <PageTitle>Reviews</PageTitle>

      <Section
        id="reviews"
        title="Peer reviews"
        hideTitle
        order={0}
        lead={
          <>
            <p>
              {reviewCount} papers across {reviewVenues.length} venues.
            </p>
            <p>{reviewsNote}</p>
          </>
        }
      >
        <Rows variant="divided">
          {reviewVenues.map((venue, i) => (
            <Row key={venue.id} id={venue.id} order={1 + i} label={<VenueLabel venue={venue} />}>
              {venue.groups.map((group, g) => (
                <div key={group.name ?? g} className="mt-4 first:mt-0">
                  {group.name && <Detail className="mb-[.35rem]">{group.name}</Detail>}
                  <Titles papers={group.papers} />
                </div>
              ))}
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
