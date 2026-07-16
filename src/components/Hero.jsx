import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative overflow-hidden border-b border-ink-line">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-[1fr_auto_280px]">
        {/* Main stub */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center px-6 py-20 md:py-28"
        >
          <span className="font-mono text-xs uppercase tracking-widest2 text-stamp">
            Admit One · Everywhere
          </span>
          <h1 className="mt-4 font-display text-6xl leading-[0.95] tracking-wide text-paper md:text-8xl">
            Find your
            <br />
            next night out.
          </h1>
          <p className="mt-6 max-w-md font-body text-muted">
            Tell the AI what you're in the mood for — genre, budget, city, day —
            and it books the search for you. No filters to wrestle with.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-lg items-stretch overflow-hidden rounded-sm border border-ink-line bg-ink-soft"
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="A family movie tomorrow evening under ₹500…"
              className="flex-1 bg-transparent px-4 py-3 font-body text-sm text-paper placeholder:text-muted/70 focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap bg-stamp px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-paper transition-colors hover:bg-stamp-dark"
            >
              Search
            </button>
          </form>
        </motion.div>

        {/* Perforated tear line */}
        <div
          aria-hidden="true"
          className="hidden w-px bg-perforate bg-[length:2px_14px] bg-repeat-y opacity-40 md:block"
        />

        {/* Stub side panel */}
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative flex flex-col justify-center gap-6 px-6 py-20 md:py-28"
        >
          <div className="rotate-6 self-start rounded-sm border-2 border-gold px-3 py-1 font-mono text-[10px] uppercase tracking-widest2 text-gold">
            AI Matched
          </div>
          <dl className="space-y-4">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Gate
              </dt>
              <dd className="font-display text-2xl tracking-wide text-paper">
                Recommendations
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
                Seat
              </dt>
              <dd className="font-display text-2xl tracking-wide text-paper">
                Smart Picks
              </dd>
            </div>
          </dl>
          <p className="font-mono text-[11px] leading-relaxed text-muted">
            Powered by TicketAI's recommendation engine — tuned to what you've
            booked before.
          </p>
        </motion.aside>
      </div>
    </section>
  )
}
