import { useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { Nav } from './components/Nav'
import { HeroIntro } from './components/HeroIntro'
import { HeroName } from './components/HeroName'
import { Work } from './components/Work'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  const reduce = useReducedMotion()
  const [ready, setReady] = useState(false)

  return (
    <>
      <Nav revealed={ready || !!reduce} />
      <HeroIntro onDone={() => setReady(true)} />
      <main>
        <HeroName ready={ready} />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
