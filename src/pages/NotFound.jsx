import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <span className="font-display text-8xl tracking-wide text-stamp">VOID</span>
      <p className="mt-4 font-mono text-sm uppercase tracking-widest2 text-muted">
        This ticket doesn't scan — page not found
      </p>
      <Link
        to="/"
        className="mt-8 rounded-sm border border-gold/60 px-5 py-2 font-mono text-xs uppercase tracking-widest2 text-gold hover:bg-gold hover:text-ink"
      >
        Back to gate
      </Link>
    </section>
  )
}
