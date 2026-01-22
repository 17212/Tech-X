import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-accent mb-8 backdrop-blur-sm">
              Global Technology Leader
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight"
          >
            Forging the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x">
              Digital Frontier
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We engineer the impossible. From quantum-ready security to immersive digital twins, we build the infrastructure of tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate Partnership <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
            </Link>
            
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors backdrop-blur-sm"
            >
              Explore Capabilities
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
