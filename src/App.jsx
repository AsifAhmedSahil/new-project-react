'use client'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Dock, Home, Navbar, Welcome } from '#components'
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, LeetCodeWindow, GithubWindow, LinkedInWindow } from '#windows'
import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import useWindowStore from '#store/window'
import WallpaperWindowWrapper from '#windows/WallpaperWindow'
import DesktopWidgets from '#components/DesktopWidget'

// Lazy load only the Photos window UI
const Photos = lazy(() => import('#windows/Photos'))

gsap.registerPlugin(Draggable)

const App = () => {
  const dockRefs = useRef({})
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })
  const { openWindow, windows } = useWindowStore()

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
    <main className="relative w-full h-screen">
      <Navbar />
      <Welcome />
      <Dock dockRefs={dockRefs} />

      {/* Always loaded windows */}
      <Terminal dockRefs={dockRefs} />
      <Safari dockRefs={dockRefs} />
      <Resume dockRefs={dockRefs} />
      <Finder dockRefs={dockRefs} />
      <Text dockRefs={dockRefs} />
      <Image dockRefs={dockRefs} /> {/* Must always be loaded */}
      <Contact dockRefs={dockRefs} />
      <Home />
      <DesktopWidgets/>
      <LeetCodeWindow/>
      <GithubWindow/>
      <LinkedInWindow/>

      {/* Lazy load Photos UI only */}
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
  )
}

export default App
