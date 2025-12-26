import { useEffect, useRef, useState } from 'react'
import PasswordGate from './components/PasswordGate'
import Landing from './components/Landing'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import LoveLetter from './components/LoveLetter'
import ReasonsModal from './components/ReasonsModal'
import FinalScreen from './components/FinalScreen'
import AudioPlayer from './components/AudioPlayer'
import RelationshipCounter from './components/RelationshipCounter'
import EndgameOverlay from './components/EndgameOverlay'
import EndgameButton from './components/EndgameButton'
import LoveGenerator from './components/LoveGenerator'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [reasonsOpen, setReasonsOpen] = useState(false)
  const [endgame, setEndgame] = useState(false)
  const audioRef = useRef<{ play: () => void; pause: () => void } | null>(null)

  useEffect(() => {
    document.title = unlocked ? 'Our Anniversary' : 'Welcome'
  }, [unlocked])

  useEffect(() => {
    if (unlocked) {
      let tries = 0
      const id = setInterval(() => {
        tries++
        if (audioRef.current) {
          audioRef.current.play()
          clearInterval(id)
        }
        if (tries > 30) clearInterval(id)
      }, 150)
      return () => clearInterval(id)
    }
  }, [unlocked])

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-rose-100 to-rose-50">
      {endgame ? (
        <EndgameOverlay />
      ) : !unlocked ? (
        <PasswordGate onUnlocked={() => setUnlocked(true)} />
      ) : (
        <>
          {(() => {
            const SONG_FILE = 'Sajna Door  Teefa in trouble  Ali Zafar ft Aima Baig  Lyrics and English Translation.mp3'
            const url = encodeURI(`${import.meta.env.BASE_URL}audio/${SONG_FILE}`)
            return <AudioPlayer ref={audioRef} sourceUrl={url} autoPlay />
          })()}
          <Landing
            onStart={() => {
              // Auto-play starts after user interaction if audio exists
              audioRef.current?.play()
              const el = document.getElementById('timeline')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            onReasons={() => setReasonsOpen(true)}
          />
          <main className="container-padded space-y-16 pb-28">
            <section id="timeline">
              <Timeline />
            </section>
            <section id="gallery">
              <Gallery />
            </section>
            <section id="letter">
              <LoveLetter />
            </section>
            <section id="reminder">
              <LoveGenerator />
            </section>
            <section id="counter">
              <RelationshipCounter />
            </section>
            <section id="final">
              <FinalScreen />
            </section>
            <section id="endgame">
              <EndgameButton onClick={() => setEndgame(true)} />
            </section>
          </main>
          <ReasonsModal open={reasonsOpen} onClose={() => setReasonsOpen(false)} />
        </>
      )}
    </div>
  )
}
