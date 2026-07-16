import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../services/api'

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const [serverError, setServerError] = useState('')

  async function onSubmit(data) {
    try {
      setServerError('')
      await api.post('/auth/register', data)
      navigate('/login')
    } catch (err) {
      setServerError('Could not create your account — try a different email.')
    }
  }

  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-24">
      <span className="font-mono text-xs uppercase tracking-widest2 text-stamp">
        First Time Here
      </span>
      <h1 className="mt-3 font-display text-5xl tracking-wide text-paper">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-4">
        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            Full Name
          </label>
          <input
            {...register('name', { required: true })}
            className="mt-1 w-full rounded-sm border border-ink-line bg-ink-soft px-3 py-2 font-body text-sm text-paper focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 font-mono text-[10px] text-stamp">Name is required.</p>
          )}
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            Email
          </label>
          <input
            type="email"
            {...register('email', { required: true })}
            className="mt-1 w-full rounded-sm border border-ink-line bg-ink-soft px-3 py-2 font-body text-sm text-paper focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 font-mono text-[10px] text-stamp">Email is required.</p>
          )}
        </div>

        <div>
          <label className="font-mono text-[10px] uppercase tracking-widest2 text-muted">
            Password
          </label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 6 })}
            className="mt-1 w-full rounded-sm border border-ink-line bg-ink-soft px-3 py-2 font-body text-sm text-paper focus:outline-none"
          />
          {errors.password && (
            <p className="mt-1 font-mono text-[10px] text-stamp">
              Password must be at least 6 characters.
            </p>
          )}
        </div>

        {serverError && (
          <p className="font-mono text-[11px] text-stamp">{serverError}</p>
        )}

        <button
          type="submit"
          className="mt-2 rounded-sm bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
        >
          Create Account
        </button>
      </form>

      <p className="mt-6 font-mono text-xs text-muted">
        Already have an account?{' '}
        <Link to="/login" className="text-gold">
          Log in
        </Link>
      </p>
    </section>
  )
}
