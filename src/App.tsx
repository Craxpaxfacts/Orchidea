// @ts-nocheck
import { useState, useEffect } from 'react'
import Preloader from './components/Preloader.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import TechStack from './components/TechStack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import DarkVeil from './components/ui/DarkVeil'

function App() {
  const [preloaderVisible, setPreloaderVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      {preloaderVisible && <Preloader />}
      
      {/* Hero section wrapper with DarkVeil background */}
      <section className="relative min-h-screen flex flex-col">
        {/* DarkVeil fills entire hero block */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.03}
            scanlineIntensity={0.1}
            scanlineFrequency={2.0}
            warpAmount={0.2}
            speed={0.4}
            resolutionScale={1}
          />
          {/* Gradient fade at bottom to blend into next section */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>

        <Navigation />
        <Hero />
      </section>
      <Services />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  )
}

export default App



