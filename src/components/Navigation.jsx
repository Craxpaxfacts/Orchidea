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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.2, duration: 0.7 }}
      className="fixed inset-x-0 top-6 z-50 flex justify-center pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-3xl px-6 transition-all duration-300 ${
          scrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
        }`}
      >
        {/* Glass nav bar (React Bits style) */}
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/70 px-6 py-3 backdrop-blur-2xl shadow-[0_18px_45px_rgba(0,0,0,0.9)]">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-white"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-orchid-500 text-lg">
              &lt;/&gt;
            </span>
            <span className="font-mono text-base md:text-lg">
              <span className="text-orchid-300">&lt;</span>
              Orchidea
              <span className="text-orchid-300">/&gt;</span>
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#tech" className="hover:text-white transition-colors">
              Stack
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 bg-white/5 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/15 hover:border-white/60 transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center">
            <button className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-orchid-100">
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation

