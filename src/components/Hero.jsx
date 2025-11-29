import { motion } from 'framer-motion'
import { SparklesCore } from '@/components/ui/sparkles'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 pt-20">
      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* Многослойное плавное свечение */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(168, 85, 247, 0.3) 15%, rgba(192, 132, 252, 0.25) 30%, rgba(192, 132, 252, 0.18) 45%, rgba(139, 92, 246, 0.15) 60%, rgba(139, 92, 246, 0.08) 75%, transparent 100%)',
                filter: 'blur(120px)',
                transform: 'scale(1.2)'
              }}
            />
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(192, 132, 252, 0.15) 25%, rgba(139, 92, 246, 0.1) 50%, transparent 75%)',
                filter: 'blur(80px)',
                transform: 'scale(1.1)'
              }}
            />
            <motion.img
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              src="/logo.png"
              alt="Orchidea"
              className="relative w-full h-full object-contain logo-glow"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <div className="mb-6 inline-block glass px-4 py-1 rounded-full text-xs font-mono text-orchid-500 tracking-widest uppercase">
            Harmony in Every Byte ♥
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
            Digital Growth.<br />
            <span className="gradient-text">Organic Code.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 font-light mb-6">
            Full Stack Development. We build scalable web ecosystems where logic meets elegance.
          </p>
          
          {/* Sparkles effect under hero text (Acme-style) */}
          <div className="w-full flex justify-center mb-10">
            <div className="w-full max-w-3xl h-32 relative">
              {/* Gradient lines above particles */}
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 mx-auto blur-sm" />
              <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 mx-auto" />
              <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 mx-auto blur-sm" />
              <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 mx-auto" />

              {/* Core sparkles */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#ffffff"
                speed={4}
              />

              {/* Radial mask to avoid sharp edges – background matches page (#050505) */}
              <div className="pointer-events-none absolute inset-0 w-full h-full bg-[#050505] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#portfolio"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="glass text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

