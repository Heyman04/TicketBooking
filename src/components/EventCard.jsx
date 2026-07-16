import { Link } from 'react-router-dom'

export default function EventCard({ event }) {
  const { id, title, city, date, price, category } = event

  return (
    <Link
      to={`/events/${id}`}
      className="group relative flex flex-col overflow-hidden rounded-sm border border-ink-line bg-ink-soft transition-transform hover:-translate-y-1"
    >
      <div className="flex items-center justify-between border-b border-dashed border-ink-line px-4 py-3">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
          {category}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-stamp">
          {date}
        </span>
      </div>

      <div className="flex-1 px-4 py-5">
        <h3 className="font-display text-2xl leading-tight tracking-wide text-paper group-hover:text-gold">
          {title}
        </h3>
        <p className="mt-1 font-body text-sm text-muted">{city}</p>
      </div>

      {/* notches to sell the stub illusion */}
      <div className="absolute -left-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink" />
      <div className="absolute -right-2 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink" />

      <div className="flex items-center justify-between border-t border-dashed border-ink-line px-4 py-3">
        <span className="font-mono text-xs text-paper">₹{price}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-muted group-hover:text-gold">
          View →
        </span>
      </div>
    </Link>
  )
}
