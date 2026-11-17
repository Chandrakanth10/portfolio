import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, ItemTitle, Body, Bullets } from '../components/Row.jsx'
import { Tags } from '../components/Chip.jsx'
import { roles, education, skills } from '../content/work.js'

// The no-break space keeps the dot on the place's line when the title wraps.
const TitleAt = ({ title, place }) => (
  <ItemTitle>
    {title}
    <span className="font-normal text-soft"> ·{'\u00A0'}{place}</span>
  </ItemTitle>
)

export default function Work() {
  return (
    <Shell page="work">
      <PageTitle>Work</PageTitle>

      <Section id="experience" title="Experience">
        <Rows>
          {roles.map((role) => (
            <Row key={role.id} id={role.id} label={role.date}>
              <TitleAt title={role.title} place={role.company} />
              <Bullets className="mt-[.35rem]" items={role.bullets} />
            </Row>
          ))}
        </Rows>
      </Section>

      <Section id="education" title="Education">
        <Rows>
          {education.map((school) => (
            <Row key={school.id} id={school.id} label={school.date}>
              <TitleAt title={school.degree} place={school.school} />
              {school.notes.map((note) => (
                <Body key={note} className="mt-[.35rem]">
                  {note}
                </Body>
              ))}
            </Row>
          ))}
        </Rows>
      </Section>

      <Section id="skills" title="Skills">
        <Rows variant="tight">
          {skills.map((group) => (
            <Row key={group.group} label={group.group}>
              <Tags items={group.items} />
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
