import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Zap, Shield, Cpu } from 'lucide-react';
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
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
        <div className="hero-grid"></div>
        
        {/* Floating Tech Icons */}
        <div className="floating-icons">
          <motion.div
            className="floating-icon icon-1"
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu size={32} />
          </motion.div>
          <motion.div
            className="floating-icon icon-2"
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Shield size={28} />
          </motion.div>
          <motion.div
            className="floating-icon icon-3"
            animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Zap size={24} />
          </motion.div>
        </div>

        {/* Animated Particles */}
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                y: [0, -150, 0],
                x: [0, (Math.random() - 0.5) * 100, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${50 + Math.random() * 50}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Premium Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="badge-glow"></span>
            <Sparkles size={16} />
            <span>الحلول التقنية المتكاملة</span>
          </motion.div>

          {/* Main Title with Animation */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="title-line">نحوّل أفكارك إلى</span>
            <span className="title-gradient">
              <span className="gradient-animate">واقع تقني مبتكر</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            في X-Tech، نقدم حلولاً تقنية متكاملة تدفع نمو أعمالك. نتعاون مع المؤسسات
            والشركات ورواد الأعمال لتحقيق التميز في العصر الرقمي.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#contact" className="btn btn-primary btn-lg">
              <span>ابدأ مشروعك الآن</span>
              <Zap size={18} />
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              <span>استكشف خدماتنا</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="stat-item">
              <motion.span
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                +18
              </motion.span>
              <span className="stat-label">خدمة متكاملة</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.span
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                +500
              </motion.span>
              <span className="stat-sublabel">اكتشف المزيد</span>
              <span className="stat-label">مشروع منجز</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <motion.span
                className="stat-number"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                24/7
              </motion.span>
              <span className="stat-label">دعم فني</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          className="scroll-indicator"
          onClick={scrollToServices}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>اكتشف المزيد</span>
          <ChevronDown size={22} />
        </motion.button>
      </div>

      {/* Bottom Gradient Line */}
      <div className="hero-bottom-line"></div>
    </section>
  );
}
