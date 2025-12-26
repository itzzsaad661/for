import FloatingHearts from './FloatingHearts'

type Props = {
  onStart: () => void
  onReasons: () => void
}

export default function Landing({ onStart, onReasons }: Props) {
  return (
    <header className="relative min-h-[68vh] sm:min-h-[72vh] flex items-center justify-center">
      <FloatingHearts />
      <div className="container-padded text-center py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-700 drop-shadow-sm animate-slide-up">
          Happy 5 Years, My Love ❤️
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-rose-600 mx-auto max-w-2xl overflow-hidden whitespace-nowrap border-r-2 border-rose-400 motion-safe:animate-typewriter">
          Five years of choosing you — quiet mornings, late walks, and home in your smile.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={onStart}
            className="rounded-full bg-rose-500 text-white px-6 py-3 font-semibold shadow-glow hover:bg-rose-600 transition"
          >
            Start Our Story
          </button>
          <button
            onClick={onReasons}
            className="rounded-full bg-white/80 soft-border text-rose-700 px-5 py-3 font-medium hover:bg-white shadow hover:shadow-glow transition"
          >
            Click to see why I choose you every day 💖
          </button>
        </div>
      </div>
    </header>
  )
}
