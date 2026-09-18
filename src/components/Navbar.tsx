import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import Logomark from './Logomark'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/subjects', label: 'Subjects' },
  { to: '/search', label: 'Search' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-canvas/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-edge-strong text-brand-400 transition-colors group-hover:border-brand-400/60">
            <Logomark className="h-4 w-4" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink">Topper Tapri</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-2 text-xs font-medium uppercase tracking-widest transition-colors ${
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && <span className="h-1 w-1 rounded-full bg-brand-400" aria-hidden="true" />}
                  {link.label}
                </>
              )}
            </NavLink>
          ))}
          <span className="h-4 w-px bg-edge" aria-hidden="true" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-edge text-ink transition-colors hover:border-edge-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-edge bg-canvas/98 px-4 pb-6 pt-2 backdrop-blur-xl sm:hidden">
          <div className="flex flex-col divide-y divide-edge">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 text-base font-display font-medium uppercase tracking-wide transition-colors ${
                    isActive ? 'text-ink' : 'text-ink-muted'
                  }`
                }
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
