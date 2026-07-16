import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/events', label: 'Events' },
  { to: '/events?category=trending', label: 'Trending' },
  { to: '/favorites', label: 'Favorites' },
]

export default function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-40 border-b border-ink-line bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-3xl tracking-widest2 text-paper">
            TICKET<span className="text-stamp">·AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest2 transition-colors ${
                  isActive ? 'text-gold' : 'text-muted hover:text-paper'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/profile"
                className="font-mono text-xs uppercase tracking-widest2 text-muted hover:text-paper"
              >
                {user.name?.split(' ')[0] || 'Account'}
              </Link>
              <button
                onClick={logout}
                className="rounded-sm border border-ink-line px-3 py-2 font-mono text-xs uppercase tracking-widest2 text-muted transition-colors hover:border-stamp hover:text-stamp"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-sm border border-gold/60 bg-gold/10 px-4 py-2 font-mono text-xs uppercase tracking-widest2 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Admit One →
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
