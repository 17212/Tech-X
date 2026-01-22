import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../core/constants';

const Contact = () => {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready to start your next project? Contact us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-text-secondary">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-text-secondary">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-text-secondary">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">First Name</label>
                  <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-secondary">Last Name</label>
                  <input type="text" className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Email</label>
                <input type="email" className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary">Message</label>
                <textarea rows={4} className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Tell us about your project..." />
              </div>

              <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
