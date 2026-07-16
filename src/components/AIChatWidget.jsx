import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'ai', text: "Hi, I'm the TicketAI assistant. Ask me to find shows, seats, or anything about your booking." },
  ])
  const [draft, setDraft] = useState('')

  function send(e) {
    e.preventDefault()
    if (!draft.trim()) return
    setMessages((m) => [...m, { from: 'user', text: draft }])
    setDraft('')
    // TODO: wire to POST /api/ai/chat
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex h-96 w-80 flex-col overflow-hidden rounded-sm border border-ink-line bg-ink-soft shadow-xl"
          >
            <div className="border-b border-ink-line px-4 py-3">
              <p className="font-mono text-xs uppercase tracking-widest2 text-gold">
                TicketAI Assistant
              </p>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={`font-body text-sm ${
                    m.from === 'ai' ? 'text-paper' : 'ml-auto max-w-[80%] text-right text-gold'
                  }`}
                >
                  {m.text}
                </p>
              ))}
            </div>
            <form onSubmit={send} className="flex border-t border-ink-line">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about events, seats, refunds…"
                className="flex-1 bg-transparent px-3 py-3 font-body text-sm text-paper placeholder:text-muted/70 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 font-mono text-xs uppercase text-stamp hover:text-gold"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI assistant"
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-ink font-display text-xl tracking-wide text-gold shadow-lg transition-transform hover:scale-105"
      >
        AI
      </button>
    </div>
  )
}
