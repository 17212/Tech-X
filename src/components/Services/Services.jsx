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

  return (
    <section id="services" className="services section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            خدماتنا <span className="gradient-text">وحلولنا</span>
          </h2>
          <p>Our Services And Solutions</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="services-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const IconComponent = LucideIcons[service.icon] || LucideIcons.Settings;
              return (
                <motion.div
                  key={service.id}
                  className="service-card"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="service-icon">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-title-en">{service.titleEn}</p>
                  <p className="service-desc">{service.description}</p>
                  <div className="service-hover-effect"></div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
