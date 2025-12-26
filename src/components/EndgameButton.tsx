type Props = { onClick: () => void }

export default function EndgameButton({ onClick }: Props) {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="rounded-full bg-rose-500 text-white px-6 py-3 font-semibold shadow-glow hover:bg-rose-600 transition"
      >
        One last click, bubu
      </button>
    </div>
  )
}

