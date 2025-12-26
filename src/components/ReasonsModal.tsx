type Props = { open: boolean; onClose: () => void }

const reasons = [
  "You loved me when loving me wasn’t easy.",
  "You chose me, every day, even when life was heavy.",
  "You prayed for me when I didn’t even know how to pray for myself.",
  "You stayed with me in my bad times, not just the good ones.",
  "You stood beside me when my past and my traumas were loud.",
  "You cared for me in ways you didn’t have to — but you still did.",
  "You made me feel safe when I was breaking inside.",
  "You never made me feel weak for what I was going through.",
  "You believed in me when I doubted myself.",
  "You loved me patiently, honestly, and deeply.",
]

export default function ReasonsModal({ open, onClose }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="card soft-border max-w-xl w-full" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-semibold text-rose-700">Why I choose you</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map((r, i) => (
            <div key={i} className="bg-white/80 rounded-2xl p-4 shadow transition transform motion-safe:hover:scale-[1.02] motion-safe:animate-slide-up">
              <p className="text-rose-700/90">{r}</p>
            </div>
          ))}
          <div className="bg-rose-50 rounded-2xl p-4 shadow border border-rose-200 text-center motion-safe:animate-fade-in">
            <p className="text-rose-700 font-semibold">I will always choose you.</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button onClick={onClose} className="rounded-full bg-rose-500 text-white px-5 py-2 font-medium hover:bg-rose-600 transition">Close</button>
        </div>
      </div>
    </div>
  )
}
