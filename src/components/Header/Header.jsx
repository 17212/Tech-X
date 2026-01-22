import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#about', label: 'من نحن' },
  { href: '#services', label: 'خدماتنا' },
  { href: '#products', label: 'منتجاتنا' },
  { href: '#contact', label: 'تواصل معنا' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
          <div className="logo-icon">
            <span className="logo-x">X</span>
          </div>
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
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="tel:+966567415419" className="header-cta">
          <Phone size={18} />
          <span>اتصل بنا</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              className="nav-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="nav-link-mobile"
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="tel:+966567415419" className="mobile-cta btn btn-primary">
                <Phone size={18} />
                <span>اتصل بنا</span>
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
