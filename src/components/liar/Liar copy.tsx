import './liar.css'
import { useEffect, useRef, useState } from "react"
import Liar1 from '@/assets/images/liar1.gif'
import Liar2 from '@/assets/images/liar2.gif'
import Liar3 from '@/assets/images/liar3.gif'

const GIFS = [
  { src: Liar1, duration: 8000 },
  { src: Liar2, duration: 3500 },
  { src: Liar3, duration: 2990 },
]

export function Liar() {
  const [liarIdx, setLiarIdx] = useState(0);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setLiarIdx((prev) => {
        let next
        next = Math.floor(Math.random() * (GIFS.length - 1))
        while (next === prev) {
          next = Math.floor(Math.random() * (GIFS.length - 1))
        }
        return next
      })
    }, GIFS[liarIdx].duration)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [liarIdx])

  return (
    <div className="liar-wrapper">
      <img key={liarIdx} src={GIFS[liarIdx].src} alt="Menteur" />
    </div>
  );
}

