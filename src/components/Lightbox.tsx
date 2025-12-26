type Props = { src: string | null; onClose: () => void }

export default function Lightbox({ src, onClose }: Props) {
  if (!src) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="w-[92%] max-w-lg sm:max-w-3xl" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Photo" className="w-full max-h-[80vh] object-contain rounded-2xl shadow-xl" />
        <div className="mt-4 flex justify-center">
          <button onClick={onClose} className="rounded-full bg-white/90 soft-border px-5 py-2 text-rose-700 hover:shadow transition">Close</button>
        </div>
      </div>
    </div>
  )
}
