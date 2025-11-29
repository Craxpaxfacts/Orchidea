import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Clean Code <br />
              <span className="text-orchid-500">Is Our DNA.</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              We don't just write code; we compose it. Like an orchid requires the perfect environment to bloom, your software requires the perfect architecture to scale.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Our team combines technical excellence with creative problem-solving to deliver solutions that not only work flawlessly but also inspire.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass rounded-lg text-sm font-mono text-gray-300 hover:border-orchid-500/50 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong rounded-xl p-6 font-mono text-sm relative"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-300">
              <p>
                <span className="text-orchid-500">const</span>{' '}
                <span className="text-blue-400">orchidea</span> ={' '}
                <span className="text-yellow-300">new</span>{' '}
                <span className="text-green-400">Agency</span>({'{'}
              </p>
              <p className="pl-4">
                name: <span className="text-orange-300">'Orchidea'</span>,
              </p>
              <p className="pl-4">
                expertise: [
                <span className="text-orange-300">'Full Stack'</span>,{' '}
                <span className="text-orange-300">'UI/UX'</span>],
              </p>
              <p className="pl-4">
                mission: <span className="text-orange-300">'Harmony in Every Byte'</span>,
              </p>
              <p className="pl-4">
                status: <span className="text-blue-400">true</span>
              </p>
              <p>{'}'});</p>
              <br />
              <p>
                <span className="text-orchid-500">await</span> orchidea.
                <span className="text-blue-400">createFuture</span>();
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

