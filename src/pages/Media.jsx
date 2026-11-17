import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, LineTitle, Body } from '../components/Row.jsx'
import { Tags } from '../components/Chip.jsx'
import ExternalLink from '../components/ExternalLink.jsx'
import { pressNote, press, writing } from '../content/media.js'

export default function Media() {
  return (
    <Shell page="media">
      <PageTitle>Media</PageTitle>

      <Section id="press" title="Press" lead={<p>{pressNote}</p>}>
        <Rows variant="tight">
          {press.map((item, i) => (
            <Row
              key={item.url}
              id={press.findIndex((other) => other.pub === item.pub) === i ? item.pubId : undefined}
              label={item.pub}
            >
              <LineTitle>
                <ExternalLink href={item.url}>{item.title}</ExternalLink>
              </LineTitle>
            </Row>
          ))}
        </Rows>
      </Section>

      <Section
        id="writing"
        title="Writing"
        lead={<ExternalLink href={writing.profileUrl}>{writing.outlet}</ExternalLink>}
      >
        <Rows>
          {writing.articles.map((article) => (
            <Row key={article.url} label={writing.outlet}>
              <ItemTitle>
                <ExternalLink href={article.url}>{article.title}</ExternalLink>
              </ItemTitle>
              <Body className="mt-[.35rem]">{article.description}</Body>
              <Tags className="mt-2" items={article.tags} />
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
