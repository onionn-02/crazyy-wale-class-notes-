// Minimal geometric brand mark shared by the navbar and footer — three
// lines of decreasing width, echoing the numbered-row rhythm used
// throughout the site, instead of a literal "education" glyph.
export default function Logomark({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 7H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 17H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}
