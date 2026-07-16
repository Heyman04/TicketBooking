import Hero from '../components/Hero'
import EventCard from '../components/EventCard'
import { useEvents } from '../hooks/useEvents'

export default function Home() {
  const { events, error } = useEvents()

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-ink-line pb-4">
          <h2 className="font-display text-3xl tracking-wide text-paper">
            Trending This Week
          </h2>
          <span className="font-mono text-xs uppercase tracking-widest2 text-muted">
            {events.length} on sale
          </span>
        </div>

        {error && (
          <p className="mb-6 font-mono text-xs uppercase tracking-widest2 text-gold">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  )
}
