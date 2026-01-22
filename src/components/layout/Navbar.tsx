import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../../core/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">X</span>
            </div>
            {COMPANY_NAME}
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group ${
                  location.pathname === link.path ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-300">
              Start Project
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-bold text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
