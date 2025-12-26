import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

type Handle = { play: () => void; pause: () => void }
type Props = { sourceUrl: string; autoPlay?: boolean }

export default forwardRef<Handle, Props>(function AudioPlayer({ sourceUrl, autoPlay }, ref) {
  const audio = useRef<HTMLAudioElement | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const el = new Audio(sourceUrl)
    el.preload = 'auto'
    el.volume = 0.45
    el.addEventListener('canplay', () => {
      setReady(true)
      if (autoPlay) {
        el.play().then(() => setPlaying(true)).catch(() => {})
      }
    })
    el.addEventListener('ended', () => setPlaying(false))
    audio.current = el
    return () => {
      el.pause()
      audio.current = null
    }
  }, [sourceUrl])

  useImperativeHandle(ref, () => ({
    play: () => {
      if (!audio.current) return
      audio.current.play().then(() => setPlaying(true)).catch(() => {})
    },
    pause: () => {
      if (!audio.current) return
      audio.current.pause()
      setPlaying(false)
    },
  }))

  return (
    <div className="fixed bottom-5 right-5 z-50 w-[92%] max-w-sm sm:max-w-md">
      <div className="card soft-border flex items-center gap-3 w-full">
        <span className="text-rose-700 font-medium">Music</span>
        {ready ? (
          playing ? (
            <button onClick={() => ref && (audio.current?.pause(), setPlaying(false))} className="rounded-full bg-rose-500 text-white px-3 py-1">Pause</button>
          ) : (
            <button onClick={() => ref && (audio.current?.play(), setPlaying(true))} className="rounded-full bg-rose-500 text-white px-3 py-1">Play</button>
          )
        ) : (
          <span className="text-rose-400 text-sm">Add your song in <code>/public/audio/</code> as an <code>.mp3</code></span>
        )}
      </div>
      <p className="mt-2 text-center text-xs sm:text-sm text-rose-600 animate-fade-in w-full">
        {/* REPLACE: Edit caption if needed */}
        This song reminds me of you.
        <br />
        I play it when I miss you… even when you’re right here.
      </p>
    </div>
  )
})
