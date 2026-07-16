import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import EventCard from '../components/EventCard'
import { useEvents } from '../hooks/useEvents'

const CATEGORIES = ['All', 'Music', 'Comedy', 'Movie', 'Theatre']

export default function Events() {
  const { events } = useEvents()
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(
    searchParams.get('category') === 'trending' ? 'All' : 'All',
  )
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return events.filter((e) => {
      const matchesCategory = category === 'All' || e.category === category
      const matchesQuery = e.title.toLowerCase().includes(query.toLowerCase())
      return matchesCategory && matchesQuery
    })
  }, [events, category, query])

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-display text-5xl tracking-wide text-paper">
        All Events
      </h1>

      <div className="mt-6 flex flex-col gap-4 border-b border-ink-line pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-sm border px-3 py-1.5 font-mono text-xs uppercase tracking-widest2 transition-colors ${
                category === c
                  ? 'border-gold bg-gold/10 text-gold'
                  : 'border-ink-line text-muted hover:text-paper'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events…"
          className="w-full rounded-sm border border-ink-line bg-ink-soft px-3 py-2 font-body text-sm text-paper placeholder:text-muted/70 focus:outline-none md:w-64"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full font-mono text-sm text-muted">
            No events match that search yet — try another keyword or category.
          </p>
        )}
      </div>
    </section>
  )
}
