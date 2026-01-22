import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { contactInfo } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#products', label: 'منتجاتنا' },
    { href: '#clients', label: 'عملاؤنا' },
    { href: '#contact', label: 'تواصل معنا' }
  ];

  const services = [
    'الأنظمة الإلكترونية',
    'تطبيقات الهاتف والويب',
    'أنظمة الأمن والمراقبة',
    'المنازل الذكية',
    'بوابات الدفع الإلكتروني',
    'التسويق الرقمي'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer">
      {/* Footer Top Gradient */}
      <div className="footer-top-line"></div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <div className="logo-icon">
                <span className="logo-x">X</span>
              </div>
              <div className="logo-text">
                <span className="logo-tech">TECH</span>
                <span className="logo-zone">Xtech zone</span>
              </div>
            </a>
            <p>
              شركة X-Tech للحلول التقنية المتكاملة في جدة. نقدم خدمات متميزة
              في مجال التقنية والأنظمة الإلكترونية وأنظمة الأمن والحلول الذكية.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="social-link"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>روابط سريعة</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4>خدماتنا</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4>تواصل معنا</h4>
            <ul className="contact-list">
              <li>
                <Phone size={16} strokeWidth={1.5} />
                <a href={`tel:${contactInfo.phone}`} dir="ltr">{contactInfo.phone}</a>
              </li>
              <li>
                <Mail size={16} strokeWidth={1.5} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Globe size={16} strokeWidth={1.5} />
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </li>
              <li>
                <MapPin size={16} strokeWidth={1.5} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} <span className="gradient-text">X-Tech</span>. جميع الحقوق محفوظة.
          </p>
          <p className="credits">
           <span className="heart">Powered by IDRISIUM</span>
          </p>
          <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
