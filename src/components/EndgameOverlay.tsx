import { useEffect, useRef, useState } from 'react'

type Props = { onMount?: () => void }

export default function EndgameOverlay({ onMount }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [hasImage, setHasImage] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    onMount?.()
    return () => {
      document.body.style.overflow = ''
    }
  }, [onMount])

  useEffect(() => {
    const url = `${import.meta.env.BASE_URL}images/endgame.jpg`
    const img = new Image()
    img.onload = () => setHasImage(true)
    img.onerror = () => setHasImage(false)
    img.src = url
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    const particles: { x: number; y: number; vx: number; vy: number; life: number }[] = []
    let cursorX = width / 2
    let cursorY = height / 2

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    const onMove = (e: MouseEvent) => {
      cursorX = e.clientX
      cursorY = e.clientY
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: cursorX + (Math.random() - 0.5) * 12,
          y: cursorY + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -0.6 - Math.random() * 0.6,
          life: 1,
        })
      }
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMove)

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01
        if (p.life <= 0) {
          particles.splice(i, 1)
          continue
        }
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 14)
        grd.addColorStop(0, 'rgba(255,109,149,0.8)')
        grd.addColorStop(1, 'rgba(255,109,149,0)')
        ctx.fillStyle = grd
        ctx.beginPath()
        ctx.arc(p.x, p.y, 8, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  const bgUrl = `${import.meta.env.BASE_URL}images/Gemini_Generated_Image_vvq3qrvvq3qrvvq3.png`
  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center gradient-motion"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 bg-rose-50/70" />
      <div className="text-center breathe relative">
        <div className="opacity-0 animate-fade-in motion-safe:animate-slide-up text-rose-700 text-2xl sm:text-3xl font-semibold" style={{ animationDelay: '200ms' }}>
          No matter what changes…
        </div>
        <div className="mt-3 opacity-0 animate-fade-in motion-safe:animate-slide-up text-rose-700 text-2xl sm:text-3xl font-semibold" style={{ animationDelay: '1200ms' }}>
          one thing won’t.
        </div>
        <div className="mt-6 opacity-0 animate-fade-in motion-safe:animate-slide-up text-rose-700 text-3xl sm:text-4xl font-bold" style={{ animationDelay: '2200ms' }}>
          It’s you.
        </div>
        {hasImage && (
          <img
            src={`${import.meta.env.BASE_URL}images/endgame.jpg`}
            alt=""
            className="mt-10 mx-auto w-[92%] max-w-xl rounded-2xl shadow-xl float-slow"
          />
        )}
      </div>
    </div>
  )
}
