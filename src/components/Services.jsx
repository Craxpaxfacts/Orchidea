import { motion } from 'framer-motion'

const AnimatedCodeBackground = () => {
  const codeBlocks = [
    [
      'const orchidea = {',
      '  name: "Orchidea",',
      '  services: [',
      '    "Frontend Architecture",',
      '    "Robust Backend",',
      '    "Mobile & Cross-Platform"',
      '  ]',
      '};',
    ],
    [
      'function createSolution() {',
      '  return {',
      '    frontend: buildReactApp(),',
      '    backend: buildNodeAPI(),',
      '    mobile: buildFlutterApp()',
      '  };',
      '}',
    ],
    [
      'const stack = {',
      '  frontend: ["React", "Vue", "Next.js"],',
      '  backend: ["Node.js", "Python", "Go"],',
      '  mobile: ["React Native", "Flutter"]',
      '};',
    ],
    [
      'async function deliver() {',
      '  const solution = await createSolution();',
      '  return solution.map(enhance);',
      '}',
    ],
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Первый слой кода - более заметный */}
      <motion.div
        className="absolute inset-0 font-mono text-[10px] md:text-xs text-purple-500/8 leading-relaxed p-8"
        style={{
          filter: 'blur(3px)',
        }}
        animate={{
          y: [0, -200],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {codeBlocks.flat().map((line, index) => (
          <div key={`layer1-${index}`} className="whitespace-pre">
            {line}
          </div>
        ))}
      </motion.div>

      {/* Второй слой кода - более размытый */}
      <motion.div
        className="absolute inset-0 font-mono text-[10px] md:text-xs text-purple-400/6 leading-relaxed p-8"
        style={{
          filter: 'blur(5px)',
          top: '30%',
        }}
        animate={{
          y: [0, -200],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
          delay: 10,
        }}
      >
        {codeBlocks.flat().map((line, index) => (
          <div key={`layer2-${index}`} className="whitespace-pre">
            {line}
          </div>
        ))}
      </motion.div>

      {/* Третий слой кода - самый размытый */}
      <motion.div
        className="absolute inset-0 font-mono text-[10px] md:text-xs text-purple-300/4 leading-relaxed p-8"
        style={{
          filter: 'blur(8px)',
          top: '60%',
        }}
        animate={{
          y: [0, -200],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
          delay: 20,
        }}
      >
        {codeBlocks.flat().map((line, index) => (
          <div key={`layer3-${index}`} className="whitespace-pre">
            {line}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const Services = () => {
  const services = [
    {
      icon: 'fa-layer-group',
      title: 'Frontend Architecture',
      description: 'Responsive, reactive, and beautiful interfaces using React, Vue, and modern CSS frameworks. Harmony in every pixel.',
    },
    {
      icon: 'fa-server',
      title: 'Robust Backend',
      description: 'Secure and scalable server-side logic. Node.js, Python, Go. We ensure your data flows seamlessly.',
    },
    {
      icon: 'fa-mobile-screen',
      title: 'Mobile & Cross-Platform',
      description: 'Extending your reach with React Native and Flutter. One codebase, harmony across all devices.',
    },
  ]

  return (
    <section id="services" className="py-24 bg-black/50 relative overflow-hidden">
      {/* Анимированный фон с кодом */}
      <AnimatedCodeBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Cultivating Solutions</h2>
          <div className="h-1 w-20 bg-orchid-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer"
            >
              <div className="h-14 w-14 bg-orchid-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orchid-500 transition-all duration-300 group-hover:scale-110">
                <i className={`fa-solid ${service.icon} text-orchid-500 group-hover:text-white text-2xl transition-colors`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-orchid-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

