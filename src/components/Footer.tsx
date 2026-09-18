import { Link } from 'react-router-dom'
import Logomark from './Logomark'

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/search', label: 'Search' },
]

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-edge-strong text-brand-400">
                <Logomark className="h-4 w-4" />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">Topper Tapri</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Notes, PYQs and academic resources, all in one place.
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs font-medium uppercase tracking-widest text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-edge pt-6 text-center text-xs text-ink-faint sm:text-left">
          <p>Made by an unemployed guy, for upcoming unemployed students.</p>
          <p className="mt-1">
            Found an outdated link? Contact{' '}
            <a href="mailto:orynzerotwo@gmail.com" className="text-ink-muted underline decoration-edge-strong underline-offset-2 transition-colors hover:text-ink">
              that unemployed guy
            </a>{' '}
            so it can be updated.
          </p>
          <p className="mt-1">
            <a href="mailto:orynzerotwo@gmail.com" className="transition-colors hover:text-ink">
              orynzerotwo@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
