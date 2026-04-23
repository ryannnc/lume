import { useState } from 'react'
import { joinWaitlist } from '../services/waitlist'
import SlideUp from '../animation/slideup'
import './waitlistcta.css'

export default function WaitlistCTA() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setSuccess('')

    try {
      setLoading(true)
      await joinWaitlist(email)
      setSuccess("You're on the list. We'll email you when the beta launches.")
      setEmail('')
    } catch (err: any) {
      console.error('Waitlist error:', err)

      if (err?.code === 'permission-denied') {
        setError('This email may already be on the waitlist.')
      } else {
        setError('Something went wrong. Try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <SlideUp className="waitlist-cta" delay={0.2}>
      <p className="waitlist-cta__text">
        The app is in development. Take the first step toward becoming the best creative you can be
        join the waitlist and we’ll email you when the first drop launches.
      </p>

      <form className="waitlist-cta__form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          className="waitlist-cta__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="waitlist-cta__button"
          disabled={loading}
        >
          {loading ? 'Joining...' : 'Join Waitlist'}
        </button>
      </form>

      {success && <p className="waitlist-cta__success">{success}</p>}
      {error && <p className="waitlist-cta__error">{error}</p>}
    </SlideUp>
  )
}