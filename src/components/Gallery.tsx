import { useState } from 'react'
import Lightbox from './Lightbox'

const base = import.meta.env.BASE_URL
const files = [
  'WhatsApp Image 2025-12-26 at 5.12.45 PM (1).jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.45 PM.jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.46 PM (1).jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.46 PM (2).jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.46 PM (3).jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.46 PM.jpeg',
  'WhatsApp Image 2025-12-26 at 5.12.47 PM.jpeg',
  'WhatsApp Image 2025-12-26 at 5.34.13 PM.jpeg',
]
const images = files.map((name) => `${base}images/${encodeURI(name)}`)

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null)
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold text-rose-700 mb-6">Photos I love</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(src)}
            className="relative overflow-hidden rounded-xl soft-border bg-white/80 shadow group"
          >
            <img src={src} alt="Our memory" className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-100/50 opacity-0 group-hover:opacity-100 transition" />
          </button>
        ))}
      </div>
      <Lightbox src={open} onClose={() => setOpen(null)} />
    </div>
  )
}
