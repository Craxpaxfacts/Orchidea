import { motion } from 'framer-motion'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'SaaS Dashboard',
      description: 'Analytics dashboard with advanced data visualization',
      tech: ['Next.js', 'TypeScript', 'Tailwind'],
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Mobile App',
      description: 'Cross-platform mobile application for iOS and Android',
      tech: ['React Native', 'Firebase'],
      color: 'from-green-500/20 to-emerald-500/20',
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-black/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Work</span>
          </h2>
          <div className="h-1 w-20 bg-orchid-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div className="relative z-10">
                <div className="h-12 w-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="fas fa-code text-orchid-500 text-xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orchid-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 glass rounded text-xs font-mono text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio



