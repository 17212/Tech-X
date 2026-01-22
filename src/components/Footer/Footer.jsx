import { Phone, Mail, Globe, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#products', label: 'منتجاتنا' },
    { href: '#contact', label: 'تواصل معنا' }
  ];

  const services = [
    'الأنظمة الإلكترونية',
    'تطبيقات الهاتف والويب',
    'أنظمة الأمن والمراقبة',
    'المنازل الذكية',
    'بوابات الدفع'
  ];

  return (
    <footer className="footer">
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
              في مجال التقنية والأنظمة الإلكترونية.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
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
                <Phone size={16} />
                <a href={`tel:${contactInfo.phone}`} dir="ltr">{contactInfo.phone}</a>
              </li>
              <li>
                <Mail size={16} />
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </li>
              <li>
                <Globe size={16} />
                <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer">
                  {contactInfo.website}
                </a>
              </li>
              <li>
                <MapPin size={16} />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            © {currentYear} X-Tech. جميع الحقوق محفوظة.
          </p>
          <p className="credits">
            صُمم بـ ❤️ في المملكة العربية السعودية
          </p>
        </div>
      </div>
    </footer>
  );
}
