import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Volume2, Monitor, Projector, PenTool, Camera } from 'lucide-react';
import './Products.css';

const products = [
  {
    id: 1,
    icon: Volume2,
    title: 'سماعات للاجتماعات',
    titleEn: 'Smart Speakers for Meeting Rooms',
    description: 'سماعات احترافية عالية الجودة لغرف الاجتماعات والمؤتمرات'
  },
  {
    id: 2,
    icon: Monitor,
    title: 'شاشات العرض',
    titleEn: 'Interactive Screens for Malls',
    description: 'شاشات تفاعلية للمولات والمراكز التجارية والإعلانات'
  },
  {
    id: 3,
    icon: Projector,
    title: 'البروجكتور',
    titleEn: 'Projectors',
    description: 'أجهزة عرض بدقة عالية للعروض التقديمية والفعاليات'
  },
  {
    id: 4,
    icon: PenTool,
    title: 'السبورات الذكية',
    titleEn: 'Smart Boards',
    description: 'سبورات تفاعلية ذكية للتعليم والتدريب والأعمال'
  },
  {
    id: 5,
    icon: Camera,
    title: 'كاميرات المراقبة',
    titleEn: 'Security Cameras',
    description: 'كاميرات أمنية عالية الدقة للحماية والمراقبة على مدار الساعة'
  }
];

export default function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="products" className="products section">
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
            خدمات <span className="gradient-text">أخرى</span>
          </h2>
          <p>Other Products</p>
        </motion.div>

        {/* Products Carousel */}
        <div className="products-wrapper">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronRight size={24} />
          </button>

          <div className="products-carousel" ref={containerRef}>
            <motion.div
              className="products-track"
              animate={{ x: `${currentIndex * -100 / products.length}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    className={`product-card ${index === currentIndex ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="product-image">
                      <IconComponent size={64} />
                    </div>
                    <div className="product-content">
                      <h3>{product.title}</h3>
                      <p className="product-title-en">{product.titleEn}</p>
                      <p className="product-desc">{product.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronLeft size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="carousel-dots">
          {products.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
