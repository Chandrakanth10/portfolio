import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Shell, { PageTitle, Section } from '../components/Shell.jsx'
import { Rows, Row, Bullets } from '../components/Row.jsx'
import { Tags, Tag, Tile } from '../components/Chip.jsx'
import Rich from '../components/Rich.jsx'
import TimelineEntry from '../components/Timeline.jsx'
import { roles, education, skills } from '../content/work.js'

function Entry({ id, logo, name, tag, title, date, current, order, children }) {
  return (
    <TimelineEntry id={id} logo={logo} current={current} order={order}>
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
          {current && <Tag accent>Now</Tag>}
        </p>
      </div>
      {children}
    </TimelineEntry>
  )
}

const sections = { experience: 'Experience', education: 'Education', skills: 'Skills' }

// Opened at its top, the page's parts arrive in turn (index.css): the title, then each
// heading and entry in the order below. Opened at a line, everything is in place at once,
// so that the browser's jump there measures the page as it will stand.
const enter = !location.hash
const order = {
  experience: 1,
  roles: 2,
  education: 2 + roles.length,
  schools: 3 + roles.length,
  skills: 3 + roles.length + education.length,
}

// The outline's lines, in page order: each section, with the jobs under Experience.
const outline = [
  { id: 'experience', name: sections.experience },
  ...roles.map((role) => ({ id: role.id, name: role.short ?? role.company, logo: role.logo })),
  { id: 'education', name: sections.education },
  { id: 'skills', name: sections.skills },
]
const outlineIds = outline.map((item) => item.id)
const hashId = () => {
  const id = location.hash.slice(1)
  return outlineIds.includes(id) ? id : null
}

const lineClass =
  'group flex items-center gap-[.5em] border-l border-chip-border py-[.22rem] transition-colors duration-150 hover:text-fg aria-[current=true]:text-fg'
const logoClass =
  'flex size-4 shrink-0 items-center justify-center overflow-hidden rounded-[.1875rem] opacity-55 transition-opacity duration-150 group-hover:opacity-100 group-aria-[current=true]:opacity-100'

// The line the scroll position marks. A line becomes the current one when the top of its
// section or job comes up to a reading line a little under the bar. The page's last ones
// cannot scroll that high, so each becomes current early enough to leave every line after
// it some scrolling of its own (`gap`) before the page ends.
function spot() {
  const root = document.documentElement
  const style = getComputedStyle(root)
  const rem = parseFloat(style.fontSize)
  const bar = parseFloat(style.getPropertyValue('--bar-height')) || 0
  const max = root.scrollHeight - window.innerHeight
  if (max <= 0) return outlineIds[0]
  const gap = Math.min(2 * rem, max / outlineIds.length)
  // Going back from the last line, `from` is where the page is when a line becomes current.
  let from = max
  for (let i = outlineIds.length - 1; i > 0; i--) {
    const top = document.getElementById(outlineIds[i]).getBoundingClientRect().top
    from = Math.min(window.scrollY + top - bar - 4 * rem, from - gap)
    if (window.scrollY >= from) return outlineIds[i]
  }
  return outlineIds[0]
}

// Whether the page stands where a jump to a line leaves it: the line's top under the bar,
// or the page's end when it cannot scroll that far.
function reached(id) {
  const root = document.documentElement
  const target = document.getElementById(id)
  const top =
    target.getBoundingClientRect().top -
    parseFloat(getComputedStyle(root).scrollPaddingTop) -
    parseFloat(getComputedStyle(target).scrollMarginTop)
  return Math.abs(top) < 2 || (top > 0 && window.scrollY >= root.scrollHeight - window.innerHeight - 2)
}

// Moves the accent mark onto the current line. While the outline is not shown its lines
// have no size, and the mark stays as it is.
function place(box, mark) {
  const link = box.querySelector('[aria-current]').getBoundingClientRect()
  if (!link.height) return
  mark.style.transform = `translateY(${link.top - box.getBoundingClientRect().top}px)`
  mark.style.height = `${link.height}px`
}

// "On this page", in the left margin of a wide window.
function Outline() {
  const [current, setCurrent] = useState(() => hashId() ?? 'experience')
  // With text enlarged on its own, the margin can be too narrow for the outline; it then
  // hides, so that no link takes keyboard focus where it cannot be seen.
  const links = useRef(null)
  const mark = useRef(null)
  const [fits, setFits] = useState(true)

  useLayoutEffect(() => place(links.current, mark.current), [current])

  useEffect(() => {
    // A clicked line, or the one named in the address, is held as the current one: while
    // the page is on its way there (`seen` is null), and then for as long as the scroll
    // position marks the line it marked on arrival (`seen`).
    let held = hashId() ? { id: hashId(), seen: null } : null
    let timer
    // The page has arrived once it has stood still for a moment: a glide is many scrolls,
    // a jump is one, and a line already in place is none. The hold lasts only if the page
    // did go to the line; after Back, Forward or a reload it can stand somewhere else.
    const arrive = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if (held && reached(held.id)) {
          held.seen = spot()
          setCurrent(held.id)
        } else {
          held = null
          setCurrent(spot())
        }
      }, 150)
    }
    const onScroll = () => {
      if (held && !held.seen) return arrive()
      const next = spot()
      if (held && next === held.seen) return
      held = null
      setCurrent(next)
    }
    const onClick = (event) => {
      const link = event.target.closest('a')
      // A click that opens the line in another tab or window moves nothing here.
      if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      held = { id: link.hash.slice(1), seen: null }
      setCurrent(held.id)
      arrive()
    }
    // Back and Forward between jumps; the mark waits to see where the page comes to rest.
    const onHash = () => {
      const id = hashId()
      if (!id) return
      held = { id, seen: null }
      arrive()
    }
    const measure = () => {
      setFits(box.getBoundingClientRect().left >= 0)
      place(box, mark.current)
    }
    const onResize = () => {
      held = null
      measure()
      setCurrent(spot())
    }
    const box = links.current
    const observer = new ResizeObserver(measure)
    observer.observe(box)
    // Once the page has loaded: one opened at a line is on its way there, and any other
    // marks the line where it stands.
    if (document.readyState === 'complete') arrive()
    else window.addEventListener('load', arrive, { once: true })
    box.addEventListener('click', onClick)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('hashchange', onHash)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
      window.removeEventListener('load', arrive)
      box.removeEventListener('click', onClick)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('hashchange', onHash)
    }
  }, [])

  const jobCurrent = roles.some((role) => role.id === current)

  // z-1 paints the outline after the column, which then draws exactly as without it;
  // with z-auto, Chrome composites the positioned parts painted after a sticky box.
  // The outline keeps its place in the margin: its offset from the column is the 1.75rem
  // gap plus the 5.5rem that Shell's narrow column moves right.
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[calc(var(--bar-height,0px)+2.1rem)] z-1 hidden h-0 min-[88rem]:block"
    >
      <div
        ref={links}
        className={`absolute top-8 right-[calc(100%+7.25rem)] grid w-32 text-[.8125rem] leading-[1.5] ${fits ? '' : 'invisible'}`}
      >
        <span
          ref={mark}
          aria-hidden="true"
          className="absolute top-0 left-0 border-l border-accent transition-[transform,height] duration-200 ease-out motion-reduce:transition-none"
        />
        {outline.map((item) => {
          const indent = item.logo ? 'pl-7' : 'pl-[.9rem]'
          const space = item.id === 'education' || item.id === 'skills' ? 'mt-[.55rem]' : ''
          const colour = item.id === 'experience' && jobCurrent ? 'text-soft' : 'text-muted'
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={item.id === current ? 'true' : undefined}
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
    <Shell page="work" narrow enter={enter}>
      <PageTitle>Work</PageTitle>
      <Outline />

      <Section id="experience" title={sections.experience} loose order={order.experience}>
        <ol role="list">
          {roles.map((role, i) => (
            <Entry
              key={role.id}
              order={order.roles + i}
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

      <Section id="education" title={sections.education} loose order={order.education}>
        <ol role="list">
          {education.map((school, i) => (
            <Entry
              key={school.id}
              order={order.schools + i}
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

      <Section id="skills" title={sections.skills} loose order={order.skills}>
        <Rows variant="tight">
          {skills.map((group, i) => (
            <Row key={group.group} order={order.skills + i} label={group.group}>
              <Tags items={group.items} />
            </Row>
          ))}
        </Rows>
      </Section>
    </Shell>
  )
}
