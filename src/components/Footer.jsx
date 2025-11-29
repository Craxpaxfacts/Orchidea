import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold font-mono mb-2">
              <span className="text-orchid-500">&lt;</span>
              Orchidea
              <span className="text-orchid-500">/&gt;</span>
            </div>
            <p className="text-gray-500 text-sm">Harmony in Every Byte</p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="glass p-3 rounded-lg hover:bg-orchid-500/20 hover:border-orchid-500/50 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-gray-400 hover:text-orchid-500 transition"></i>
            </a>
            <a
              href="#"
              className="glass p-3 rounded-lg hover:bg-orchid-500/20 hover:border-orchid-500/50 transition"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-gray-400 hover:text-orchid-500 transition"></i>
            </a>
            <a
              href="#"
              className="glass p-3 rounded-lg hover:bg-orchid-500/20 hover:border-orchid-500/50 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-gray-400 hover:text-orchid-500 transition"></i>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Orchidea. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer



