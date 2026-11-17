import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, Bullets } from '../components/Row.jsx'
import { Tags, Tag, Tile } from '../components/Chip.jsx'
import Rich from '../components/Rich.jsx'
import { roles, education, skills } from '../content/work.js'

// An entry hangs on a vertical line through the logo tiles. The line runs on into the
// next entry; on the last one it fades out, and an entry alone has none.
const entryClass =
  'group relative pb-9 pl-[3.4rem] last:pb-0 wrap-anywhere max-[34rem]:pl-11 before:absolute before:top-2 before:-bottom-2 before:left-[calc(1.125rem-.5px)] before:w-px before:bg-chip-border max-[34rem]:before:left-[calc(.9rem-.5px)] last:before:bottom-0 last:before:bg-transparent last:before:bg-[linear-gradient(var(--color-chip-border)_35%,transparent)] only:before:hidden'

// The tile's shadow, in the page's colour, cuts the line around it. The current job's
// tile also has an accent ring.
const tileClass =
  'absolute top-[.15rem] left-0 flex size-9 items-center justify-center overflow-hidden rounded-[.3rem] max-[34rem]:size-[1.8rem]'
const tileShadow = 'shadow-[0_0_0_.4rem_var(--color-bg)]'
const currentTileShadow =
  'shadow-[0_0_0_.18rem_var(--color-bg),0_0_0_calc(.18rem+1.5px)_var(--color-accent),0_0_0_.45rem_var(--color-bg)]'

function Entry({ id, logo, name, tag, title, date, current, children }) {
  return (
    <li id={id} className={entryClass}>
      <Tile logo={logo} className={`${tileClass} ${current ? currentTileShadow : tileShadow}`} />
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-[.1rem]">
        <div>
          <div className="flex flex-wrap items-center gap-x-[.6rem] gap-y-[.15rem]">
            <h3 className="text-base font-medium text-fg group-target:text-accent">{name}</h3>
            {tag && <Tag>{tag}</Tag>}
          </div>
          <p className="text-sm leading-[1.6] text-soft">{title}</p>
        </div>
        <p className="flex flex-wrap items-center gap-x-[.6rem] gap-y-[.3rem] pt-[.15rem] text-[.8125rem] leading-[1.6] whitespace-nowrap text-muted max-[34rem]:basis-full max-[34rem]:pt-0 max-[34rem]:whitespace-normal">
          <span>{date}</span>
          {current && <Tag now>Now</Tag>}
        </p>
      </div>
      {children}
    </li>
  )
}

export default function Work() {
  return (
    <Shell page="work">
      <PageTitle>Work</PageTitle>

      <Section id="experience" title="Experience" loose>
        <ol role="list">
          {roles.map((role) => (
            <Entry
              key={role.id}
              id={role.id}
              logo={role.logo}
              name={role.company}
              tag={role.tag}
              title={role.title}
              date={role.date}
              current={role.current}
            >
              <Bullets items={role.bullets} />
            </Entry>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education" loose>
        <ol role="list">
          {education.map((school) => (
            <Entry
              key={school.id}
              id={school.id}
              logo={school.logo}
              name={school.school}
              title={school.degree}
              date={school.date}
            >
              {school.notes.map((note, i) => (
                <p key={i} className="mt-2 text-sm leading-[1.7] text-soft">
                  <Rich parts={note} />
                </p>
              ))}
            </Entry>
          ))}
        </ol>
      </Section>

      <Section id="skills" title="Skills" loose>
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
