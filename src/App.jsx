
import gsap from 'gsap'
import { Draggable } from 'gsap/draggable'
import {Dock, Home, Navbar,Welcome} from '#components'
import { Safari, Terminal,Resume, Finder, Text, Image, Contact, Photos } from '#windows'

gsap.registerPlugin(Draggable)



const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Photos/>

      <Home/>
    </main>
  )
}

export default App