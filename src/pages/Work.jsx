import { useEffect, useRef, useState } from 'react'
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
          <p className="text-[.8125rem] leading-[1.6] text-soft max-[34rem]:text-sm">{title}</p>
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

const sections = { experience: 'Experience', education: 'Education', skills: 'Skills' }

// The outline's lines, in page order: each section, with the jobs under Experience.
const outline = [
  { id: 'experience', name: sections.experience },
  ...roles.map((role) => ({ id: role.id, name: role.company, logo: role.logo })),
  { id: 'education', name: sections.education },
  { id: 'skills', name: sections.skills },
]
const outlineIds = outline.map((item) => item.id)
const hashId = () => {
  const id = location.hash.slice(1)
  return outlineIds.includes(id) ? id : null
}

const lineClass =
  'group flex items-center gap-[.5em] border-l border-chip-border py-[.22rem] transition-colors duration-150 hover:text-fg aria-[current=true]:border-accent aria-[current=true]:text-fg'
const logoClass =
  'flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[.1875rem] opacity-55 transition-opacity duration-150 group-hover:opacity-100 group-aria-[current=true]:opacity-100'

// "On this page", in the left margin of a wide window. The current line is the last
// section or job whose top has passed a reading line, which moves from under the bar
// to the window's bottom as the page scrolls, so the last lines are reached at the end.
// A clicked line, or one named in the address, stays current until the reader scrolls.
function Outline() {
  const [current, setCurrent] = useState(() => hashId() ?? 'experience')
  const hold = useRef(hashId() ? { y: null } : null)
  // With text enlarged on its own, the margin can be too narrow for the outline; it then
  // hides, so that no link takes keyboard focus where it cannot be seen.
  const links = useRef(null)
  const [fits, setFits] = useState(true)

  // After a jump that did not scroll, the hold starts from where the page already is.
  const settle = () => {
    if (hold.current?.y === null) hold.current.y = window.scrollY
  }

  useEffect(() => {
    const compute = () => {
      const root = document.documentElement
      const style = getComputedStyle(root)
      const rem = parseFloat(style.fontSize)
      const bar = parseFloat(style.getPropertyValue('--bar-height')) || 0
      const max = root.scrollHeight - window.innerHeight
      const p = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0
      const start = bar + 5 * rem
      const line = start + (window.innerHeight - start) * p
      let next = 'experience'
      for (const id of outlineIds) {
        const target = document.getElementById(id)
        if (target && target.getBoundingClientRect().top <= line) next = id
      }
      setCurrent(next)
    }
    // The first scroll after a jump is the jump itself; the next one is the reader's.
    const onScroll = () => {
      if (hold.current) {
        if (hold.current.y === null) {
          hold.current.y = window.scrollY
          return
        }
        if (window.scrollY === hold.current.y) return
        hold.current = null
      }
      compute()
    }
    const measure = () => setFits(links.current.getBoundingClientRect().left >= 0)
    const onResize = () => {
      hold.current = null
      measure()
      compute()
    }
    const observer = new ResizeObserver(measure)
    observer.observe(links.current)
    // Back and Forward between jumps: the address names the line the page now shows.
    const onHash = () => {
      const id = hashId()
      if (!id) return
      setCurrent(id)
      hold.current = { y: window.scrollY }
    }
    // A page opened at a line keeps its hold until the browser's own jump has happened.
    const frame = requestAnimationFrame(() => {
      if (!hold.current) compute()
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('hashchange', onHash)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  const jobCurrent = roles.some((role) => role.id === current)

  // z-1 paints the outline after the column, which then draws exactly as without it;
  // with z-auto, Chrome composites the positioned parts painted after a sticky box.
  // The outline keeps its place in the margin: its offset from the column is the 1.75rem
  // gap plus the 3.5rem that Shell's narrow column moves right.
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[calc(var(--bar-height,0px)+2.1rem)] z-1 hidden h-0 min-[88rem]:block"
    >
      <div
        ref={links}
        className={`absolute top-8 right-[calc(100%+5.25rem)] grid w-32 text-[.8125rem] leading-[1.5] ${fits ? '' : 'invisible'}`}
      >
        {outline.map((item) => {
          const indent = item.logo ? 'pl-7' : 'pl-[.9rem]'
          const space = item.id === 'education' || item.id === 'skills' ? 'mt-[.55rem]' : ''
          const colour = item.id === 'experience' && jobCurrent ? 'text-soft' : 'text-muted'
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={item.id === current ? 'true' : undefined}
              onClick={(event) => {
                // A click that opens the line in another tab or window moves nothing here.
                if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
                setCurrent(item.id)
                hold.current = { y: null }
                requestAnimationFrame(settle)
              }}
              className={`${lineClass} ${indent} ${space} ${colour}`}
            >
              {item.logo && <Tile logo={item.logo} className={logoClass} />}
              {item.name}
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default function Work() {
  return (
    <Shell page="work" narrow>
      <PageTitle>Work</PageTitle>
      <Outline />

      <Section id="experience" title={sections.experience} loose>
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

      <Section id="education" title={sections.education} loose>
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
                <p key={i} className="mt-2 text-[.8125rem] leading-[1.7] text-soft max-[34rem]:text-sm">
                  <Rich parts={note} />
                </p>
              ))}
            </Entry>
          ))}
        </ol>
      </Section>

      <Section id="skills" title={sections.skills} loose>
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
