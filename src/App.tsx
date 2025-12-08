import './App.css'
import { Canvas } from '@react-three/fiber'
import { Gengar } from './components/Gengar'
import { useRef, useEffect, useState, useCallback } from 'react'
import { gsap } from 'gsap'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { About } from './components/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { SECTIONS } from './types'
import { CursorTrail } from './components/CursorTrail'

function AppContent() {
  const overlayRef = useRef<HTMLDivElement>(null)
  const overlay2Ref = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const location = useLocation()

  const [sceneReady, setSceneReady] = useState(false)

  const handleSceneReady = useCallback(() => {
    setSceneReady(true)
  }, [])

  useEffect(() => {
    if (!sceneReady) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      if (navRef.current) {
        tl.from(navRef.current, {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
        }).from(
          '.nav-button',
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(2)',
          },
          '-=0.3'
        )
      }
    }, overlayRef)

    return () => ctx.revert()
  }, [sceneReady])

  useEffect(() => {
    if (!sceneReady) return

    const content = document.querySelector('.content-area')
    if (content) {
      gsap.set(content, { opacity: 1, y: 0 })
      gsap.from(content, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'power2.out',
      })
    }
  }, [location.pathname, sceneReady])

  useEffect(() => {
    if (!sceneReady || !overlay2Ref.current) return

    const ctx = gsap.context(() => {
      const chars = gsap.utils.toArray<HTMLElement>('.name-char')
      if (!chars.length) return

      const intro = gsap.from(chars, {
        x: 50,
        y: 20,
        rotation: 8,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(2)',
        stagger: 0.05,
      })

      const wave = gsap.to(chars, {
        y: -4,
        rotation: 2,
        duration: 1.4,
        ease: 'sine.inOut',
        stagger: {
          each: 0.08,
          from: 'start',
        },
        repeat: -1,
        yoyo: true,
        paused: true,
      })

      intro.eventCallback('onComplete', () => {
        wave.play()
      })
    }, overlay2Ref)

    return () => ctx.revert()
  }, [sceneReady])


  return (
    <div className="app-container">
      <Canvas
        className="scene-canvas"
        shadows
        camera={{ position: [-2, 2, 5], fov: 30 }}
      >
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          castShadow
        />
        <color attach="background" args={['#A29CBB']} />

        <Gengar onReady={handleSceneReady} />
      </Canvas>

      {sceneReady && (
        <>
          <div className="overlay-2" ref={overlay2Ref}>
            <h1 ref={nameRef} className="name">
              {'LAWRENCE'.split('').map((char, idx) => (
                <span key={`first-${idx}`} className="name-char">
                  {char}
                </span>
              ))}
              <br />
              {'SHEN'.split('').map((char, idx) => (
                <span key={`last-${idx}`} className="name-char">
                  {char}
                </span>
              ))}
            </h1>
          </div>

          <div className="overlay" ref={overlayRef}>
            <div className="glass" ref={navRef}>
              {SECTIONS.map((section) => (
                <Link
                  key={section.path}
                  to={section.path}
                  className={`nav-button ${
                    location.pathname === section.path ? 'active' : ''
                  }`}
                >
                  {section.label}
                </Link>
              ))}
            </div>

            <div className="content-area">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </div>
        </>
      )}

      <CursorTrail />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
