import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, Body, Detail } from '../components/Row.jsx'
import Chip, { Tags, LogoName } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import { profile } from '../content/profile.js'
import { researchProfiles, papersNote, papers } from '../content/research.js'

// A page opened at a paper goes straight there, with no entrance.
const enter = !location.hash

// Pointing at or tabbing into a row lights its title and nudges the arrow.
const titleLink =
  'group-hover:text-accent group-focus-within:text-accent [&_svg]:transition-transform [&_svg]:duration-200 group-hover:[&_svg]:translate-x-[.15em] group-hover:[&_svg]:-translate-y-[.15em] group-focus-within:[&_svg]:translate-x-[.15em] group-focus-within:[&_svg]:-translate-y-[.15em] motion-reduce:[&_svg]:transition-none'

// A name stays on one line (lines break between names), unless it is wider than the line
// itself, as with very large text on a narrow screen.
const Authors = ({ names }) => (
  <Detail className="mt-[.45rem] leading-[1.6] wrap-break-word">
    {names.map((name, i) => (
      <span key={name}>
        {i > 0 && ', '}
        <span className={name === profile.authorName ? 'text-fg' : undefined}>{name.replaceAll(' ', '\u00a0')}</span>
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
        hideTitle
        order={0}
        lead={
          <>
            <Chip>
              {papers.length} {papersNote}
            </Chip>
            {researchProfiles.map(({ name, url }) => (
              <ExternalLink key={url} href={url}>{name}</ExternalLink>
            ))}
          </>
        }
      >
        <Rows variant="divided">
          {papers.map((paper, i) => (
            <Row key={paper.id} id={paper.id} order={1 + i} label={<LogoName logo={paper.logo}>{paper.venue}</LogoName>}>
              <ItemTitle>
                <ExternalLink href={paper.url} className={titleLink}>
                  {paper.title}
                </ExternalLink>
              </ItemTitle>
              <Body className="mt-[.35rem]">{paper.description}</Body>
              <Tags className="mt-[.6rem]" items={paper.topics} />
              {paper.authors && <Authors names={paper.authors} />}
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
