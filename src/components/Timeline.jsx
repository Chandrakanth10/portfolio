import { Tile } from './Chip.jsx'

// An entry hangs on a vertical line through the logo tiles. The line runs on into the
// next entry; on the last one it fades out, and an entry alone has none.
const entryClass =
  'group relative pb-9 pl-[3.4rem] last:pb-0 wrap-anywhere max-[34rem]:pl-11 before:absolute before:top-2 before:-bottom-2 before:left-[calc(1.125rem-.5px)] before:w-px before:bg-chip-border max-[34rem]:before:left-[calc(.9rem-.5px)] last:before:bottom-0 last:before:bg-transparent last:before:bg-[linear-gradient(var(--color-chip-border)_35%,transparent)] only:before:hidden'

// The tile's shadow, in the page's colour, cuts the line around it. A current entry's
// tile also has an accent ring.
const tileClass =
  'absolute top-[.15rem] left-0 flex size-9 items-center justify-center overflow-hidden rounded-[.3rem] max-[34rem]:size-[1.8rem]'
const tileShadow = 'shadow-[0_0_0_.4rem_var(--color-bg)]'
const currentTileShadow =
  'shadow-[0_0_0_.18rem_var(--color-bg),0_0_0_calc(.18rem+1.5px)_var(--color-accent),0_0_0_.45rem_var(--color-bg)]'

// One entry of an <ol>. `order` is its turn when the page's parts arrive (index.css).
export default function TimelineEntry({ id, logo, current, order, children }) {
  return (
    <li id={id} className={entryClass} style={{ '--i': order }}>
      {logo ? (
        <Tile logo={logo} className={`${tileClass} ${current ? currentTileShadow : tileShadow}`} />
      ) : (
        <span aria-hidden="true" className={`${tileClass} ${tileShadow} bg-bg`}>
          <span className="size-2 rounded-full bg-muted" />
        </span>
      )}
      {children}
    </li>
  )
}
