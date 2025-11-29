import { motion } from 'framer-motion'
import { ShaderAnimation } from '@/components/ui/shader-animation'

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      style={{ pointerEvents: 'none' }}
    >
      {/* Shader background – quick orchid flash */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          times: [0, 0.3, 1],
          ease: 'easeOut',
        }}
      >
        <ShaderAnimation />
      </motion.div>

      {/* Logo on top */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        <img
          src="/logo.png"
          alt="Orchidea Logo"
          className="w-48 md:w-64 mx-auto mb-4 object-contain"
          style={{
            imageRendering: 'auto'
          }}
        />
      </motion.div>
    </motion.div>
  )
}

export default Preloader

