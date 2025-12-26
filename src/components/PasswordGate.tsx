import { useMemo, useState } from 'react'

type Props = { onUnlocked: () => void }

export default function PasswordGate({ onUnlocked }: Props) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  // REPLACE: Anniversary date exactly as typed, including slashes
  const ANNIVERSARY_PASSWORD = useMemo(() => '27/12/2020', [])

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="heart animate-float-heart"
            style={{ left: `${(i * 100) % 100}%`, bottom: `${(i * 30) % 100}%`, animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>
      <div className="card soft-border w-[92%] max-w-md text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-rose-700">For us only</h1>
        <p className="mt-2 text-sm text-rose-600">Enter the date we started (DD/MM/YYYY)</p>
        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            if (value.trim() === ANNIVERSARY_PASSWORD) {
              onUnlocked()
            } else {
              setError("Almost there. Think of the day we first chose us.")
            }
          }}
        >
          <input
            inputMode="text"
            autoFocus
            maxLength={10}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="DD/MM/YYYY"
            className="w-full rounded-xl border border-rose-200 bg-white/70 px-4 py-3 text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-rose-500 text-white py-3 font-medium hover:bg-rose-600 transition"
          >
            Enter
          </button>
          {error && (
            <p className="text-rose-600 text-sm mt-2 animate-fade-in">{error}</p>
          )}
          <p className="text-xs text-rose-400 mt-3">Password stays on your device only.</p>
        </form>
      </div>
    </div>
  )
}
