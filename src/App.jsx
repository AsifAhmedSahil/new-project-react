
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import {Dock, Home, Navbar,Welcome} from '#components'
import { Safari, Terminal,Resume, Finder, Text, Image, Contact, Photos } from '#windows'
import { useRef } from 'react'

gsap.registerPlugin(Draggable)



const App = () => {
  const dockRefs = useRef({}); 
  return (
    <main>
      <Navbar/>
      <Welcome />
      {/* <Dock/>
       */}
       <Dock dockRefs={dockRefs} />

      <Terminal dockRefs={dockRefs} />
      <Safari dockRefs={dockRefs} />
      <Resume dockRefs={dockRefs} />
      <Finder dockRefs={dockRefs}/>
      <Text dockRefs={dockRefs} />
      <Image dockRefs={dockRefs} />
      <Contact dockRefs={dockRefs} />
      <Photos dockRefs={dockRefs} />

      <Home  />
    </main>
  )
}

export default App