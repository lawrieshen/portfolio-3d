import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import type { GengarProps } from '../types'

export const Gengar = ({ onReady }: GengarProps) => {
  const { scene, animations } = useGLTF('/models/gengar/gengar.glb')
  const gengarRef = useRef<THREE.Object3D | null>(null)

  const { actions, names } = useAnimations(animations, gengarRef)

  const isDraggingRef = useRef(false)
  const lastXRef = useRef(0)
  const lastYRef = useRef(0)

  useEffect(() => {
    if (!names.length) return

    const action = actions[names[0]]
    if (!action) return

    action.reset()
    action.paused = false
    action.play()

    // 🔔 Tell parent that the scene is ready
    onReady?.()

    return () => {
      action.stop()
    }
  }, [actions, names, onReady])

  const handlePointerDown = (e: any) => {
    e.stopPropagation()
    isDraggingRef.current = true
    lastXRef.current = e.clientX
    lastYRef.current = e.clientY
  }

  const handlePointerUp = (e: any) => {
    e.stopPropagation()
    isDraggingRef.current = false
  }

  const handlePointerMove = (e: any) => {
    if (!isDraggingRef.current || !gengarRef.current) return

    e.stopPropagation()

    const deltaX = e.clientX - lastXRef.current
    const deltaY = e.clientY - lastYRef.current
    lastXRef.current = e.clientX
    lastYRef.current = e.clientY

    gengarRef.current.rotation.y += deltaX * 0.01

    const newX = gengarRef.current.rotation.x + deltaY * 0.01
    const maxTilt = Math.PI / 3
    gengarRef.current.rotation.x = Math.max(-maxTilt, Math.min(maxTilt, newX))
  }

  const handlePointerOver = (e: any) => {
    e.stopPropagation()
    document.body.style.cursor = 'pointer'
  }

  const handlePointerOut = (e: any) => {
    e.stopPropagation()
    document.body.style.cursor = 'default'
    isDraggingRef.current = false
  }

  return (
    <primitive
      ref={gengarRef}
      object={scene}
      scale={1}
      position={[-1.6, -0.5, 0]}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOut={handlePointerOut}
      onPointerMove={handlePointerMove}
      onPointerOver={handlePointerOver}
    />
  )
}
