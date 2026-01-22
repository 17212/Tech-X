import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} />
            <span>الحلول التقنية المتكاملة</span>
          </motion.div>

          {/* Main Title */}
          <h1 className="hero-title">
            <span className="hero-title-line">نحول أفكارك إلى</span>
            <span className="hero-title-gradient">واقع تقني مبتكر</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            في X-Tech، نقدم حلولاً تقنية متكاملة تدفع نمو أعمالك. نتعاون مع المؤسسات
            والشركات ورواد الأعمال لتحقيق التميز في العصر الرقمي.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              ابدأ مشروعك الآن
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              استكشف خدماتنا
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="stat">
              <span className="stat-number">18+</span>
              <span className="stat-label">خدمة متكاملة</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">مشروع منجز</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">دعم فني</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="scroll-indicator"
          onClick={scrollToServices}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>اكتشف المزيد</span>
          <ChevronDown size={24} />
        </motion.button>
      </div>
    </section>
  );
}
