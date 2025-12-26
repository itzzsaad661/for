import { useState } from 'react'

// Edit messages here
const MESSAGES = [
  "You're more than gorgeous, and you don't even try.",
  "You're hot. Like… distractingly hot.",
  "Your figure is so f**king amazing, I still can't believe you're mine.",
  "I love you more than I know how to explain, bubu.",
  "You feel like home to me, always.",
  "I'm proud of you — for who you are and how far you've come.",
  "Love your 🍑 heheh yumy",
  "LOVE YOUR BALLOONS, my fav hehe 🤭",
  "You choose me, and that still means everything to me.",
  "You stayed with me when things were hard, and I'll never forget that.",
  "You make even boring days feel special.",
  "You're not just beautiful — you're comforting, strong, and real.",
  "I'll always choose you, bubu ❤️",
  "I love it when you sit on my lap — that moment feels like i own everybit of you",
  "You make life feel lighter just by being in it.",
]

export default function LoveGenerator() {
  const [index, setIndex] = useState<number | null>(null)
  const [key, setKey] = useState(0)
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  const nextIndex = () => {
    if (MESSAGES.length === 0) return null
    if (MESSAGES.length === 1) return 0
    let i = Math.floor(Math.random() * MESSAGES.length)
    if (index !== null) {
      while (i === index) {
        i = Math.floor(Math.random() * MESSAGES.length)
      }
    }
    return i
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-semibold text-rose-700">A little reminder 💖</h2>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => {
            const i = nextIndex()
            if (i === null) return
            setIndex(i)
            setKey((k) => k + 1)
            setClosing(false)
            setOpen(true)
          }}
          className="rounded-full bg-rose-500 text-white px-6 py-3 font-semibold shadow-glow hover:bg-rose-600 transition"
        >
          click me harder babes 
        </button>
      </div>

      {open && index !== null && (
        <div
          className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-200 ${closing ? 'opacity-0' : 'opacity-100'}`}
          onClick={() => {
            setClosing(true)
            setTimeout(() => setOpen(false), 180)
          }}
        >
          <div
            key={key}
            onClick={(e) => e.stopPropagation()}
            className="w-[92%] max-w-md sm:max-w-lg bg-white/90 soft-border rounded-2xl shadow-lg animate-fade-in motion-safe:animate-slide-up relative"
          >
            <button
              aria-label="Close"
              onClick={() => {
                setClosing(true)
                setTimeout(() => setOpen(false), 180)
              }}
              className="absolute top-3 right-3 rounded-full bg-rose-500 text-white px-3 py-1 text-sm hover:bg-rose-600 transition"
            >
              ×
            </button>
            <div className="p-5">
              <p className="text-rose-700/95 text-base sm:text-lg">{MESSAGES[index]}</p>
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => {
                    const i = nextIndex()
                    if (i === null) return
                    setIndex(i)
                    setKey((k) => k + 1)
                  }}
                  className="rounded-full bg-rose-500 text-white px-5 py-2 font-medium hover:bg-rose-600 transition"
                >
                  Press me harder
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
