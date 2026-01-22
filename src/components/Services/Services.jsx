import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { services, serviceCategories } from '../../data/content';
import './Services.css';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <section id="services" className="services section">
      {/* Background Decoration */}
      <div className="services-bg">
        <div className="glow-spot glow-1"></div>
        <div className="glow-spot glow-2"></div>
      </div>

      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="section-tag"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <h2>
            خدماتنا <span className="gradient-text">وحلولنا</span>
          </h2>
          <p className="section-desc">
            نقدم مجموعة شاملة من الحلول التقنية المتكاملة لتلبية جميع احتياجاتك
          </p>
        </motion.div>

        {/* Category Tabs - Premium */}
        <motion.div
          className="services-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="tabs-container">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="tab-text">{cat.label}</span>
                {activeCategory === cat.id && (
                  <motion.div
                    className="tab-active-bg"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid - Premium Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="services-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredServices.map((service, index) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Settings;
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Card Glow Effect */}
                  <div className="card-glow"></div>
                  
                  {/* Card Border Gradient */}
                  <div className="card-border"></div>
                  
                  {/* Card Content */}
                  <div className="card-content">
                    <div className="service-icon-wrapper">
                      <div className="service-icon">
                        <IconComponent size={26} strokeWidth={1.5} />
                      </div>
                      <div className="icon-ring"></div>
                    </div>
                    
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-title-en">{service.titleEn}</p>
                    <p className="service-desc">{service.description}</p>
                    
                    <div className="service-link">
                      <span>اعرف المزيد</span>
                      <LucideIcons.ArrowLeft size={16} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p>هل تحتاج خدمة مخصصة؟</p>
          <a href="#contact" className="btn btn-primary">
            <span>تواصل معنا الآن</span>
            <LucideIcons.ArrowLeft size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
