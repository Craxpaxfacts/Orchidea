import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-2' : 'glass py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold font-mono tracking-tighter">
              <span className="text-orchid-500">&lt;</span>
              Orchidea
              <span className="text-orchid-500">/&gt;</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#services"
                className="hover:text-orchid-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="hover:text-orchid-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                Portfolio
              </a>
              <a
                href="#tech"
                className="hover:text-orchid-500 transition px-3 py-2 rounded-md text-sm font-medium"
              >
                Stack
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-orchid-500 text-orchid-500 hover:bg-orchid-500 hover:text-white transition text-sm font-medium"
              >
                Get in touch
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-orchid-500">
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation



