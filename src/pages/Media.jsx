import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, Body, DashList } from '../components/Row.jsx'
import Chip, { LogoName } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import { pressNote, publications, pressCount, writing } from '../content/media.js'

// A page opened at a publication goes straight there, with no entrance.
const enter = !location.hash

// The publication with its logo. On a targeted row the name turns the accent.
const Publication = ({ name, logo }) => (
  <LogoName logo={logo} className="font-medium text-fg in-target:text-accent">
    {name}
  </LogoName>
)

// Turns in the entrance (index.css): Press's heading and lead, its rows one by one, then Writing's,
// one turn after the last press row.
const writingOrder = 3 + publications.length

export default function Media() {
  return (
    <Shell page="media" enter={enter}>
      <PageTitle>Media</PageTitle>

      <Section
        id="press"
        title="Press"
        order={1}
        lead={
          <>
            <Chip>
              {pressCount} articles in {publications.length} publications
            </Chip>
            <p>{pressNote}</p>
          </>
        }
      >
        <Rows variant="divided">
          {publications.map((publication, i) => (
            <Row
              key={publication.id}
              id={publication.id}
              order={2 + i}
              label={<Publication name={publication.name} logo={publication.logo} />}
            >
              <DashList
                items={publication.articles.map((article) => ({
                  key: article.url,
                  content: <ExternalLink href={article.url}>{article.title}</ExternalLink>,
                }))}
              />
            </Row>
          ))}
        </Rows>
      </Section>

      <Section
        id="writing"
        title="Writing"
        order={writingOrder}
        lead={
          <>
            <Chip>{writing.articles.length} articles</Chip>
            <ExternalLink href={writing.profileUrl}>{writing.outlet} profile</ExternalLink>
          </>
        }
      >
        <Rows>
          <Row order={writingOrder + 1} label={<Publication name={writing.outlet} logo={writing.logo} />}>
            {writing.articles.map((article) => (
              <div key={article.url} className="mt-6 first:mt-0">
                <ItemTitle>
                  <ExternalLink href={article.url}>{article.title}</ExternalLink>
                </ItemTitle>
                <Body className="mt-[.35rem]">{article.description}</Body>
              </div>
            ))}
          </Row>
        </Rows>
      </Section>
    </Shell>
  )
}
