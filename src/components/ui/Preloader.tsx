import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[10000] bg-background flex items-center justify-center"
    >
      <div className="relative">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 rounded-full border-2 border-primary/30"
        />
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 w-24 h-24 rounded-full border-t-2 border-primary"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold font-display tracking-widest text-white">TX</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
