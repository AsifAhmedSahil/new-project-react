'use client'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { Dock, Home, Navbar, Welcome } from '#components'
import { Safari, Terminal, Resume, Finder, Text, Image, Contact, Photos } from '#windows'
import { useEffect, useRef, useState } from 'react'
import useWindowStore from '#store/window'
import WallpaperWindowWrapper from '#windows/WallpaperWindow'

gsap.registerPlugin(Draggable)

const App = () => {
  const dockRefs = useRef({})
  const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })
  const { openWindow, windows } = useWindowStore() // assuming useWindowStore tracks open windows

  // Context menu handlers
  useEffect(() => {
    const handleClick = () => setContextMenu((prev) => ({ ...prev, visible: false }))
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
      {/* Navbar + Welcome */}
      <Navbar />
      <Welcome />
      <Dock dockRefs={dockRefs} />

      {/* All Windows */}
      <Terminal dockRefs={dockRefs} />
      <Safari dockRefs={dockRefs} />
      <Resume dockRefs={dockRefs} />
      <Finder dockRefs={dockRefs} />
      <Text dockRefs={dockRefs} />
      <Image dockRefs={dockRefs} />
      <Contact dockRefs={dockRefs} />
      <Photos dockRefs={dockRefs} />
      <Home />

      {/* Context Menu */}
      {contextMenu.visible && (
        <ul
          style={{ top: contextMenu.y, left: contextMenu.x }}
          className="absolute bg-white/70 backdrop-blur-lg rounded shadow-md z-[999] p-2"
        >
          <li
            className="cursor-pointer px-4 py-1 hover:bg-gray-200"
            onClick={() => {
              openWindow('wallpaper') // <-- Window opens
              setContextMenu((prev) => ({ ...prev, visible: false }))
            }}
          >
            Change Wallpaper
          </li>
        </ul>
      )}

      {/* Wallpaper Window */}
      {windows['wallpaper'] && (
        <WallpaperWindowWrapper dockRefs={dockRefs} zIndex={1000} />
      )}
    </main>
  )
}

export default App
