import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, LineTitle, Body, Detail } from '../components/Row.jsx'
import { Tags } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import { profile } from '../content/profile.js'
import { xploreUrl, papersNote, papers, reviewsNote, reviewVenues } from '../content/research.js'

const paperCount = (count) => `${count} ${count === 1 ? 'Paper' : 'Papers'}`
const venuePapers = (venue) => venue.groups.flatMap((group) => group.papers)
const reviewCount = reviewVenues.reduce((count, venue) => count + venuePapers(venue).length, 0)

const Authors = ({ names }) => (
  <Detail className="mt-[.35rem]">
    {names.map((name, i) => (
      <span key={name}>
        {i > 0 && ', '}
        {name === profile.authorName ? <span className="text-fg">{name}</span> : name}
      </span>
    ))}
  </Detail>
)

// The venue name, its kind and its count, stacked. On a targeted row the name turns the accent.
const VenueLabel = ({ venue }) => (
  <span className="grid gap-y-[.15rem]">
    <span className="font-medium text-fg in-target:text-accent">{venue.name}</span>
    <span className="text-[13px] text-muted">{venue.kind}</span>
    <span className="text-[13px] text-muted">{paperCount(venuePapers(venue).length)}</span>
  </span>
)

const Reviewed = ({ paper }) => (
  <div className="mt-3 first-of-type:mt-0">
    <LineTitle>{paper.title}</LineTitle>
    <Body className="mt-[.35rem]">{paper.note}</Body>
    {paper.ref && <Detail className="mt-[.35rem]">{paper.ref}</Detail>}
  </div>
)

export default function Research() {
  return (
    <Shell page="research">
      <PageTitle>Research</PageTitle>

      <Section
        id="papers"
        title="Papers"
        lead={
          <>
            <p>
              {papers.length} {papersNote}
            </p>
            <ExternalLink href={xploreUrl}>IEEE Xplore Profile</ExternalLink>
          </>
        }
      >
        <Rows>
          {papers.map((paper) => (
            <Row key={paper.id} id={paper.id} label={paper.venue}>
              <ItemTitle>
                <ExternalLink href={xploreUrl}>{paper.title}</ExternalLink>
              </ItemTitle>
              <Body className="mt-[.35rem]">{paper.description}</Body>
              {paper.tags.length > 0 && <Tags className="mt-2" items={paper.tags} />}
              {paper.authors && <Authors names={paper.authors} />}
            </Row>
          ))}
        </Rows>
      </Section>

      <Section
        id="reviews"
        title="Peer reviews"
        lead={
          <>
            <p>
              {reviewCount} papers across {reviewVenues.length} venues
            </p>
            <p>{reviewsNote}</p>
          </>
        }
      >
        <Rows>
          {reviewVenues.map((venue) => (
            <Row key={venue.id} id={venue.id} label={<VenueLabel venue={venue} />}>
              {venue.groups.map((group, i) => (
                <div key={group.name ?? i} className="mt-4 first:mt-0">
                  {group.name && <Detail className="mb-[.35rem]">{group.name}</Detail>}
                  {group.papers.map((paper) => (
                    <Reviewed key={paper.title} paper={paper} />
                  ))}
                </div>
              ))}
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
