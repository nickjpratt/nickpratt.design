import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { HeroIntro } from './components/HeroIntro'
import { Work } from './components/Work'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <HeroIntro />
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
