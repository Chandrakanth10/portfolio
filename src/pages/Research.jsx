import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, Body, Detail } from '../components/Row.jsx'
import { Tags } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import { profile } from '../content/profile.js'
import { xploreUrl, papersNote, papers } from '../content/research.js'

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
    </Shell>
  )
}
