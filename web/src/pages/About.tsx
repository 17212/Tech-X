import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-gradient">Tech-X</span></h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            We are a team of passionate developers, designers, and innovators dedicated to building the digital future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              To empower businesses with technology that is not just functional, but transformative. We believe in creating digital experiences that leave a lasting impact.
            </p>
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-text-secondary leading-relaxed">
              To be the global leader in innovative software solutions, setting new standards for quality, design, and performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-2xl overflow-hidden glass border-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-white/20 text-9xl font-bold">X</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
