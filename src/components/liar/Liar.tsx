import './liar.css'
import { useEffect, useState } from 'react'
import Liar1 from '@/assets/images/liar1.gif'
import Liar2 from '@/assets/images/liar2.gif'
import Liar3 from '@/assets/images/liar3.gif'
import Liar4 from '@/assets/images/liar4.gif'
import Liar5 from '@/assets/images/liar5.gif'
import Liar6 from '@/assets/images/liar6.gif'

const GIFS = [Liar1, Liar2, Liar3, Liar4, Liar5, Liar6]

export function Liar() {
  const [liarIdx, setLiarIdx] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      let next = Math.floor(Math.random() * GIFS.length)
      while (next === liarIdx) {
        next = Math.floor(Math.random() * GIFS.length)
      }
      setLiarIdx(next)
    }, 1200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="liar-wrapper">
      <img key={liarIdx} src={GIFS[liarIdx]} alt="Menteur" />
    </div>
  )
}