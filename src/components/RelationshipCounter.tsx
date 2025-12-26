import { useEffect, useMemo, useRef, useState } from 'react'

function lastDayOfMonth(y: number, m: number) {
  return new Date(y, m + 1, 0).getDate()
}

function diffParts(start: Date, now: Date) {
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()

  if (months < 0 || (months === 0 && days < 0)) years--
  months = now.getMonth() - start.getMonth()
  if (days < 0) months--
  if (months < 0) months += 12

  const anchorYear = start.getFullYear() + years
  const anchorMonth = start.getMonth() + months
  const anchorDay = Math.min(start.getDate(), lastDayOfMonth(anchorYear, anchorMonth))
  const anchor = new Date(
    anchorYear,
    anchorMonth,
    anchorDay,
    start.getHours(),
    start.getMinutes(),
    start.getSeconds()
  )

  const ms = now.getTime() - anchor.getTime()
  const hourMs = 1000 * 60 * 60
  const minMs = 1000 * 60
  days = Math.floor(ms / (24 * hourMs))
  const hours = Math.floor((ms % (24 * hourMs)) / hourMs)
  const minutes = Math.floor((ms % hourMs) / minMs)
  const seconds = Math.floor((ms % minMs) / 1000)

  return { years, months, days, hours, minutes, seconds }
}

export default function RelationshipCounter() {
  const START_DATE = useMemo(() => new Date('2020-12-27 00:00'), [])
  const [now, setNow] = useState<Date>(() => new Date())
  const tick = useRef(0)

  useEffect(() => {
    const i = setInterval(() => {
      tick.current++
      setNow(new Date())
    }, 1000)
    return () => clearInterval(i)
  }, [])

  const d = diffParts(START_DATE, now)

  return (
    <div className="card soft-border text-center">
      <p className="text-rose-700 font-medium">We’ve been together for</p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {[
          { label: 'years', value: d.years },
          { label: 'months', value: d.months },
          { label: 'days', value: d.days },
          { label: 'hours', value: d.hours },
          { label: 'minutes', value: d.minutes },
          { label: 'seconds', value: d.seconds },
        ].map((item, i) => (
          <div key={item.label + '-' + tick.current + '-' + item.value} className="count-pulse">
            <span className="text-xl sm:text-2xl text-rose-700 font-semibold">{item.value}</span>
            <span className="ml-1 text-rose-700/80">{item.label}</span>
          </div>
        ))}
        <span className="ml-2 text-rose-500 heart-pulse">❤️</span>
      </div>
    </div>
  )
}
