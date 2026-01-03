'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const FrontPageIntro = ({ onFinish }) => {
  const introRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const audioRef = useRef(null)
  const particlesRef = useRef([])
  const [showEnter, setShowEnter] = useState(false)

  useEffect(() => {
    const introEl = introRef.current

    /* ---------- Particles ---------- */
    const count = 50
    const particles = []

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.className = 'absolute rounded-full bg-white/40 pointer-events-none'
      const size = Math.random() * 3 + 2
      p.style.width = `${size}px`
      p.style.height = `${size}px`
      p.style.top = `${Math.random() * 100}%`
      p.style.left = `${Math.random() * 100}%`
      introEl.appendChild(p)

      gsap.to(p, {
        x: (Math.random() - 0.5) * 40,
        y: (Math.random() - 0.5) * 40,
        duration: Math.random() * 3 + 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      particles.push(p)
    }

    particlesRef.current = particles

    /* ---------- Intro Timeline ---------- */
    gsap.timeline({
      onComplete: () => setShowEnter(true),
    })
      .fromTo(introEl, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.6, ease: 'power3.out' }
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' },
        '-=0.8'
      )

    return () => {
      particles.forEach(p => introEl.contains(p) && introEl.removeChild(p))
    }
  }, [])

  /* ---------- Enter Action ---------- */
  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.volume = 1
      audioRef.current.play().catch(() => {})
      gsap.to(audioRef.current, {
        volume: 0,
        duration: 0.6,
        delay: 1.9,
        ease: 'power1.out',
      })
    }

    gsap.to(introRef.current, {
      opacity: 0,
      scale: 1.08,
      duration: 2.5,
      ease: 'power2.inOut',
      onComplete: () => onFinish?.(),
    })
  }

  /* ---------- Keyboard Enter ---------- */
  useEffect(() => {
    const onKey = (e) => e.key === 'Enter' && handleEnter()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/30 backdrop-blur-md text-center"
      style={{
        backgroundImage: "url('/images/your-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title */}
      <h1
        ref={titleRef}
        className="text-6xl md:text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]"
      >
        Welcome
      </h1>

      {/* Subtitle */}
      <p
        ref={subtitleRef}
        className="mt-6 max-w-xl text-sm md:text-base text-white/80 leading-relaxed tracking-wide"
      >
        I design interfaces that feel alive — <br />
 where engineering meets experience.
      </p>

      {/* Enter CTA */}
      {showEnter && (
        <button
          onClick={handleEnter}
          className="mt-12 px-8 py-3 text-sm uppercase tracking-widest text-white/80 border cursor-pointer border-white/40 rounded-full backdrop-blur-md hover:bg-white/10 transition"
        >
          Click to Enter Experiences
        </button>
      )}

      <audio ref={audioRef} src="/images/macopen.mp3" preload="auto" />
    </div>
  )
}

export default FrontPageIntro
