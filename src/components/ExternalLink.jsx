// An arrow up and to the right, drawn in two strokes, since the font has no such glyph.
const Arrow = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-[.3em] inline-block size-[.7em] align-baseline"
  >
    <path d="M2.5 7.5 7.5 2.5" />
    <path d="M3.5 2.5h4v4" />
  </svg>
)

export default function ExternalLink({ href, className = '', children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors duration-150 hover:text-accent ${className}`}
    >
      {children}
      <Arrow />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}
