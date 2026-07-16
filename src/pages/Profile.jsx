import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export default function Profile() {
  const { user, loading } = useAuth()

  if (loading) return null
  if (!user) return <Navigate to="/login" replace />

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <span className="font-mono text-xs uppercase tracking-widest2 text-stamp">
        Ticket Wallet
      </span>
      <h1 className="mt-3 font-display text-5xl tracking-wide text-paper">
        {user.name}
      </h1>
      <p className="mt-2 font-mono text-sm text-muted">{user.email}</p>

      <div className="mt-10 rounded-sm border border-dashed border-ink-line bg-ink-soft p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">
          Booking History
        </p>
        <p className="mt-3 font-body text-sm text-muted">
          Past and upcoming bookings will list here once connected to the API.
        </p>
      </div>
    </section>
  )
}
