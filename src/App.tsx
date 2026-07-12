import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Raven from './components/Raven'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div id="top" className="overflow-x-clip bg-black text-primary">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Raven />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
