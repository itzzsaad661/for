export default function FloatingHearts() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: 24 }).map((_, i) => (
        <span
          key={i}
          className="heart animate-float-heart"
          style={{ left: `${Math.random() * 100}%`, bottom: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s`, opacity: 0.25 + Math.random() * 0.5 }}
        />
      ))}
    </div>
  )
}

