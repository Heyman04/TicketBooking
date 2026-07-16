import { useParams, Link } from 'react-router-dom'
import { useEvents } from '../hooks/useEvents'

export default function EventDetails() {
  const { id } = useParams()
  const { events } = useEvents()
  const event = events.find((e) => e.id === id)

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="font-mono text-sm text-muted">Event not found.</p>
        <Link to="/events" className="mt-4 inline-block font-mono text-xs uppercase tracking-widest2 text-gold">
          ← Back to events
        </Link>
      </div>
    )
  }

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest2 text-stamp">
        {event.category} · {event.city}
      </span>
      <h1 className="mt-3 font-display text-6xl tracking-wide text-paper">
        {event.title}
      </h1>
      <p className="mt-2 font-mono text-sm text-muted">{event.date}</p>

      <div className="mt-10 rounded-sm border border-dashed border-ink-line bg-ink-soft p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
          AI Summary
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-paper">
          Generated highlights, target audience, and estimated duration will
          render here once the AI summary endpoint is connected.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-2xl tracking-wide text-paper">
          Choose Your Seats
        </h2>
        <div className="mt-4 grid grid-cols-8 gap-2 rounded-sm border border-ink-line bg-ink-soft p-6">
          {Array.from({ length: 32 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm border border-ink-line bg-ink transition-colors hover:border-gold hover:bg-gold/10"
            />
          ))}
        </div>
        <p className="mt-3 font-mono text-[11px] text-muted">
          Live availability and AI seat recommendations connect here.
        </p>
      </div>

      <button className="mt-10 w-full rounded-sm bg-stamp px-6 py-4 font-mono text-sm uppercase tracking-widest2 text-paper transition-colors hover:bg-stamp-dark md:w-auto">
        Continue to Payment — ₹{event.price}
      </button>
    </section>
  )
}
