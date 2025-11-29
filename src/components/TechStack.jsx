import { motion } from 'framer-motion'

const TechStack = () => {
  const categories = [
    {
      title: 'Frontend',
      tech: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      tech: ['Node.js', 'Python', 'Go', 'Express', 'FastAPI', 'GraphQL'],
    },
    {
      title: 'Database',
      tech: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM'],
    },
    {
      title: 'DevOps',
      tech: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions'],
    },
  ]

  return (
    <section id="tech" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technology <span className="gradient-text">Stack</span>
          </h2>
          <div className="h-1 w-20 bg-orchid-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-lg font-bold mb-4 text-orchid-500">{category.title}</h3>
              <div className="flex flex-col gap-2">
                {category.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-2 glass rounded-lg text-sm font-mono text-gray-300 hover:border-orchid-500/50 transition text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack



