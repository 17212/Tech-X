import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Zap } from 'lucide-react';
import './Header.css';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#products', label: 'منتجاتنا' },
  { href: '#clients', label: 'عملاؤنا' },
  { href: '#contact', label: 'تواصل معنا' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
          <motion.div
            className="logo-icon"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-x">X</span>
            <div className="logo-glow"></div>
          </motion.div>
          <div className="logo-text">
            <span className="logo-tech">TECH</span>
            <span className="logo-zone">Xtech zone</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <motion.div
                  className="nav-indicator"
                  layoutId="navIndicator"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="tel:+966567415419"
          className="header-cta"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Phone size={18} />
          <span>اتصل بنا</span>
        </motion.a>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                className="mobile-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
              />
              <motion.nav
                className="nav-mobile"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="mobile-nav-header">
                  <span>القائمة</span>
                </div>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className={`nav-link-mobile ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:+966567415419"
                  className="mobile-cta btn btn-primary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Phone size={18} />
                  <span>اتصل بنا</span>
                </motion.a>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
