import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
              Let's Build <br /> the <span className="text-primary">Future</span>
            </h1>
            <p className="text-text-secondary text-xl max-w-lg mb-12">
              Ready to transform your digital infrastructure? Our team of experts is standing by to engineer your vision.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-2">General Inquiries</h3>
                <p className="text-text-secondary">hello@tech-x.global</p>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">Career Opportunities</h3>
                <p className="text-text-secondary">careers@tech-x.global</p>
              </div>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-10 rounded-3xl"
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">First Name</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Last Name</label>
                  <input type="text" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Email Address</label>
                <input type="email" className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-text-secondary">Project Details</label>
                <textarea rows={4} className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none" />
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
