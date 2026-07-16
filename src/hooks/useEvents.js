import { useEffect, useState } from 'react'
import api from '../services/api'

const MOCK_EVENTS = [
  { id: '1', title: 'Neon Wave Festival', city: 'Mumbai', date: 'Aug 02', price: 1499, category: 'Music' },
  { id: '2', title: 'Midnight Comedy Hour', city: 'Bengaluru', date: 'Jul 28', price: 499, category: 'Comedy' },
  { id: '3', title: 'Studio Ghibli Marathon', city: 'Chennai', date: 'Jul 20', price: 350, category: 'Movie' },
  { id: '4', title: 'Indie Theatre Night', city: 'Delhi', date: 'Aug 10', price: 699, category: 'Theatre' },
  { id: '5', title: 'Sunburn Warmup', city: 'Goa', date: 'Aug 15', price: 1999, category: 'Music' },
  { id: '6', title: 'Stand-Up Sundays', city: 'Pune', date: 'Jul 27', price: 399, category: 'Comedy' },
]

export function useEvents() {
  const [events, setEvents] = useState(MOCK_EVENTS)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    api
      .get('/events')
      .then((res) => {
        if (!cancelled && Array.isArray(res.data) && res.data.length) {
          setEvents(res.data)
        }
      })
      .catch(() => {
        // Backend not up yet — keep showing mock events instead of an empty page.
        if (!cancelled) setError('Showing sample events — connect the API to go live.')
      })
      .finally(() => !cancelled && setLoading(false))
    return () => {
      cancelled = true
    }
  }, [])

  return { events, loading, error }
}
