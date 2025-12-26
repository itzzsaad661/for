import { useEffect, useRef } from 'react'

type Item = { year: string; title: string; text: string; emoji?: string }

const timeline: Item[] = [
  { year: 'Year 1', title: 'Just Friends, Forever Close', text: 'We started as just friends, but so deeply connected. Laughing endlessly, sharing everything — some of the best days of my life were born here.', emoji: '🥰' },
  { year: 'Year 2', title: 'Our Golden Moments', text: 'This year gave us memories we’ll always hold close. Everything felt brighter, happier, and full of love.', emoji: '🌿' },
  { year: 'Year 3', title: 'Growing Through It All', text: 'Not everything was easy — there were ups and downs. But those moments made us stronger, closer, and better together.', emoji: '☕️' },
  { year: 'Year 4', title: 'Moments That Meant Everything', text: 'Our meetups became the highlight of everything. Time with you felt special, comforting, and unforgettable.', emoji: '💪' },
  { year: 'Year 5', title: 'Deeply Us', text: 'Now we’re completely into each other — connected, longing, and choosing one another every day. Our love feels deeper than ever', emoji: '🏡' },
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.querySelectorAll('.reveal'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('show')
        })
      },
      { threshold: 0.2 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative">
      <h2 className="text-2xl sm:text-3xl font-semibold text-rose-700 mb-6">Our timeline</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {timeline.map((t, idx) => (
          <div key={t.year} className="card soft-border reveal">
            <div className="flex items-center gap-3">
              <span className="text-xl">{t.emoji}</span>
              <h3 className="text-lg sm:text-xl font-semibold text-rose-700">{t.year} · {t.title}</h3>
            </div>
            <p className="mt-2 text-rose-700/90">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
