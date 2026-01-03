'use client'

import { useState, useEffect, useRef, lazy, Suspense } from 'react'
import gsap from 'gsap'
import { Dock, Home, Navbar, Welcome } from '#components'
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, LeetCodeWindow, GithubWindow, LinkedInWindow } from '#windows'
import WallpaperWindowWrapper from '#windows/WallpaperWindow'
import DesktopWidgets from '#components/DesktopWidget'
import useWindowStore from '#store/window'
import FrontPageIntro from '#components/FrontPageIntro'

// Lazy load Photos window only
const Photos = lazy(() => import('#windows/Photos'))

const App = () => {
  const dockRefs = useRef({})
  const { openWindow, windows } = useWindowStore()
  const [showIntro, setShowIntro] = useState(false)
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })

  // Show intro on reload
  useEffect(() => {
    setShowIntro(true)
  }, [])

  // Context menu handlers
  useEffect(() => {
    const handleClick = () => setContextMenu(prev => ({ ...prev, visible: false }))
    const handleContextMenu = (e) => {
      e.preventDefault()
      setContextMenu({ visible: true, x: e.pageX, y: e.pageY })
    }
    document.addEventListener('click', handleClick)
    document.addEventListener('contextmenu', handleContextMenu)
    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  

  return (
    <>
      {/* Intro animation */}
      {showIntro && <FrontPageIntro  backgroundImage="/images/wallpaper-1.png" onFinish={() => setShowIntro(false)} />}

      {/* Main App */}
      {!showIntro && (
        <main
  id="main-app"
  className={`relative w-full h-screen transition-opacity duration-1000 ${
    showIntro ? 'opacity-0' : 'opacity-100'
  }`}
>
          <Navbar />
          <Welcome />
          <Dock dockRefs={dockRefs} />

          {/* Always loaded windows */}
          <Terminal dockRefs={dockRefs} />
          <Safari dockRefs={dockRefs} />
          <Resume dockRefs={dockRefs} />
          <Finder dockRefs={dockRefs} />
          <Text dockRefs={dockRefs} />
          <Image dockRefs={dockRefs} />
          <Contact dockRefs={dockRefs} />
          <Home />
          <DesktopWidgets />
          <LeetCodeWindow />
          <GithubWindow />
          <LinkedInWindow />

          {/* Lazy loaded Photos */}
          <Suspense fallback={<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500">Loading Photos...</div>}>
            {windows.photos && <Photos dockRefs={dockRefs} />}
          </Suspense>

          {/* Context Menu */}
          {contextMenu.visible && (
            <ul
              style={{ top: contextMenu.y, left: contextMenu.x }}
              className="absolute bg-white/70 backdrop-blur-lg rounded shadow-md z-[999] p-2"
            >
              <li
                className="cursor-pointer px-4 py-1 hover:bg-gray-200"
                onClick={() => {
                  openWindow('wallpaper')
                  setContextMenu(prev => ({ ...prev, visible: false }))
                }}
              >
                Change Wallpaper
              </li>
            </ul>
          )}

          {/* Wallpaper Window */}
          {windows.wallpaper && (
            <WallpaperWindowWrapper dockRefs={dockRefs} zIndex={1000} />
          )}
        </main>
      )}
    </>
  )
}

export default App
