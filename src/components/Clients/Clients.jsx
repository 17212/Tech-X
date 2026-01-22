import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import './Clients.css';

const testimonials = [
  {
    id: 1,
    name: 'محمد العتيبي',
    role: 'مدير عام شركة البناء الحديث',
    content: 'تعاملنا مع X-Tech كان من أفضل القرارات. نفذوا لنا نظام أمن متكامل بأعلى جودة وبدعم فني متميز.',
    rating: 5
  },
  {
    id: 2,
    name: 'فهد الشمري',
    role: 'رئيس قسم التقنية - مجموعة الريادة',
    content: 'حلول المنازل الذكية من X-Tech غيرت حياتنا. التقنيات المتطورة والتركيب الاحترافي يستحق كل ريال.',
    rating: 5
  },
  {
    id: 3,
    name: 'سارة القحطاني',
    role: 'مديرة تطوير الأعمال',
    content: 'التطبيق الذي طوروه لنا ساعدنا في زيادة مبيعاتنا 150%. فريق محترف وسريع في التنفيذ.',
    rating: 5
  }
];

const partners = [
  { name: '3D Secure', category: 'Payment' },
  { name: 'VISA', category: 'Payment' },
  { name: 'MasterCard', category: 'Payment' },
  { name: 'STC', category: 'Telecom' },
  { name: 'Mobily', category: 'Telecom' },
  { name: 'Zain', category: 'Telecom' }
];

export default function Clients() {
  return (
    <section id="clients" className="clients section">
      <div className="container">
        {/* Section Title */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Testimonials</span>
          <h2>
            ماذا يقول <span className="gradient-text">عملاؤنا</span>
          </h2>
          <p className="section-desc">
            نفخر بثقة عملائنا وشهاداتهم على جودة خدماتنا
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
              <div className="card-border"></div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          className="partners-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3>شركاؤنا في النجاح</h3>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="partner-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.08 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span className="partner-name">{partner.name}</span>
                <span className="partner-category">{partner.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
