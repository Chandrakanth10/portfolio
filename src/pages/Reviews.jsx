import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, Detail, DashList } from '../components/Row.jsx'
import Chip, { LogoName } from '../components/Chip.jsx'
import { reviewsNote, reviewVenues, reviewCount, reviewVenueCount } from '../content/research.js'
// Empty on the live site; the titles show only on `npm run dev` (vite.config.js).
import reviewTitles from 'review-titles'

// A page opened at a venue goes straight there, with no entrance.
const enter = !location.hash

// The venue with its logo, and its kind under it. On a targeted row the name turns the accent.
// On a phone the groups go under the label, so a little more space keeps the kind apart
// from a workshop's name under it.
const VenueLabel = ({ venue }) => (
  <span className="grid gap-y-[.15rem] max-[34rem]:mb-[.4rem]">
    <LogoName logo={venue.logo} className="font-medium text-fg in-target:text-accent">
      {venue.name}
    </LogoName>
    <span className="text-[.8125rem] text-muted">{venue.kind}</span>
  </span>
)

const plural = (count) => `${count} ${count === 1 ? 'paper' : 'papers'}`

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
            <Chip>
              {reviewCount} papers across {reviewVenueCount} venues
            </Chip>
            <p>{reviewsNote}</p>
          </>
        }
      >
        <Rows variant="divided">
          {reviewVenues.map((venue, i) => (
            <Row key={venue.id} id={venue.id} order={1 + i} label={<VenueLabel venue={venue} />}>
              {venue.groups.map((group, g) => (
                <div key={group.name ?? g} className="mt-4 first:mt-0">
                  {group.name && <Detail className="mb-[.15rem]">{group.name}</Detail>}
                  <p className="text-sm text-soft">{plural(group.papers)}</p>
                  {reviewTitles[venue.id]?.[g] && (
                    <DashList
                      className="mt-[.35rem]"
                      items={reviewTitles[venue.id][g].map((title) => ({ key: title, content: title }))}
                    />
                  )}
                </div>
              ))}
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
