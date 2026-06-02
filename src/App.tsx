import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { WorkIndex } from './components/WorkIndex'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <div className="grain" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <WorkIndex />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
