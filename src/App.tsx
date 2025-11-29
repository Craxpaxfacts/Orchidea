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
      
      {/* Ambient Background Blobs */}
      <div className="blob bg-orchid-700 w-96 h-96 rounded-full top-0 left-0 mix-blend-screen animate-pulse-slow"></div>
      <div className="blob bg-indigo-900 w-96 h-96 rounded-full bottom-0 right-0 mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="blob bg-purple-900 w-80 h-80 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-screen animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <Navigation />
      <Hero />
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



