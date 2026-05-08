import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Process from './components/Process'
import Stack from './components/Stack'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-dm">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Process />
        <Stack />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
