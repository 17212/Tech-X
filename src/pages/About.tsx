import { motion } from 'framer-motion';
import { VISION_TEXT } from '../core/constants';

const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-gradient">X Tech</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-10 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              {VISION_TEXT}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-3xl overflow-hidden glass-panel border-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
             <span className="text-white/20 text-9xl font-bold font-display">X</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
