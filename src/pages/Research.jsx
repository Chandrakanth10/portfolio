import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Body, Detail } from '../components/Row.jsx'
import { Tags, Tag } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import TimelineEntry from '../components/Timeline.jsx'
import { profile } from '../content/profile.js'
import { xploreUrl, papersNote, papers } from '../content/research.js'

// A page opened at a paper goes straight there, with no entrance.
const enter = !location.hash

// Pointing at or tabbing into an entry lights its title and nudges the arrow.
const titleLink =
  'text-fg group-hover:text-accent group-focus-within:text-accent [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-[.15em] group-hover:[&_svg]:-translate-y-[.15em] group-focus-within:[&_svg]:translate-x-[.15em] group-focus-within:[&_svg]:-translate-y-[.15em] motion-reduce:[&_svg]:transition-none'

const Authors = ({ names }) => (
  <Detail className="mt-[.45rem] leading-[1.6]">
    {names.map((name, i) => (
      <span key={name}>
        {i > 0 && ', '}
        {name === profile.authorName ? <span className="text-fg">{name}</span> : name}
      </span>
    ))}
  </Detail>
)

export default function Research() {
  return (
    <Shell page="research" enter={enter}>
      <PageTitle>Research</PageTitle>

      <Section
        id="papers"
        title="Papers"
        order={1}
        lead={
          <>
            <p>
              {papers.length} {papersNote}
            </p>
            <ExternalLink href={xploreUrl}>IEEE Xplore Profile</ExternalLink>
          </>
        }
      >
        <ol role="list">
          {papers.map((paper, i) => (
            <TimelineEntry key={paper.id} id={paper.id} logo={paper.logo} order={3 + i}>
              {/* The title comes first for screen readers and heading jumps; the venue line shows above it. */}
              <div className="flex flex-col">
                <h3 className="mt-[.3rem] text-base leading-[1.5] font-medium text-pretty">
                  <ExternalLink href={xploreUrl} className={titleLink}>
                    {paper.title}
                  </ExternalLink>
                </h3>
                <div className="order-first flex flex-wrap items-center justify-between gap-x-6 gap-y-[.3rem]">
                  <p className="flex flex-wrap items-center gap-x-[.6rem] gap-y-[.15rem]">
                    <span className="text-[.8125rem] font-medium text-soft group-target:text-accent">{paper.venue}</span>
                    <Tag>{paper.sole ? 'Sole author' : 'Co-author'}</Tag>
                  </p>
                  {paper.presented && <Tag accent>Presented</Tag>}
                </div>
              </div>
              <Body className="mt-[.35rem]">{paper.description}</Body>
              <Tags className="mt-[.6rem]" items={paper.topics} />
              {paper.authors && <Authors names={paper.authors} />}
            </TimelineEntry>
          ))}
        </ol>
      </Section>
    </Shell>
  )
}
