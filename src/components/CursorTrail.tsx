import { useEffect, useRef, useState } from 'react'
import { BUBBLE_LIFETIME, type Bubble } from '../types'

export const CursorTrail = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const id = idRef.current++
      const x = e.clientX
      const y = e.clientY

      setBubbles(prev => {
        const next = [...prev, { id, x, y }]
        // limit number of bubbles to avoid DOM explosion
        return next.slice(-30)
      })

      // remove after lifetime
      setTimeout(() => {
        setBubbles(prev => prev.filter(b => b.id !== id))
      }, BUBBLE_LIFETIME)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <>
      {bubbles.map(b => (
        <div
          key={b.id}
          className="cursor-bubble"
          style={{ left: b.x, top: b.y }}
        />
      ))}
    </>
  )
}
