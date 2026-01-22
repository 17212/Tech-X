import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send, User, MessageSquare, Loader2 } from 'lucide-react';
import { contactInfo } from '../../data/content';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact section">
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
            تواصل <span className="gradient-text">معنا</span>
          </h2>
          <p>نحن هنا لمساعدتك في تحقيق أهدافك التقنية</p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>معلومات التواصل</h3>
            <p>لا تتردد في التواصل معنا في أي وقت. فريقنا جاهز لمساعدتك!</p>

            <div className="contact-items">
              <a href={`tel:${contactInfo.phone}`} className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-text">
                  <span className="label">الهاتف</span>
                  <span className="value" dir="ltr">{contactInfo.phone}</span>
                </div>
              </a>

              <a href={`mailto:${contactInfo.email}`} className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-text">
                  <span className="label">البريد الإلكتروني</span>
                  <span className="value">{contactInfo.email}</span>
                </div>
              </a>

              <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-icon">
                  <Globe size={20} />
                </div>
                <div className="contact-text">
                  <span className="label">الموقع الإلكتروني</span>
                  <span className="value">{contactInfo.website}</span>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-text">
                  <span className="label">العنوان</span>
                  <span className="value">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Payment Partners */}
            <div className="payment-partners">
              <p>شركاء الدفع الإلكتروني</p>
              <div className="partners-logos">
                <div className="partner-badge">3D Secure</div>
                <div className="partner-badge">VISA</div>
                <div className="partner-badge">MasterCard</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <User size={18} />
                  <span>الاسم الكامل</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    <span>البريد الإلكتروني</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={18} />
                    <span>رقم الهاتف</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 5XX XXX XXXX"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={18} />
                  <span>رسالتك</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="اكتب رسالتك هنا..."
                ></textarea>
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitted ? 'success' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="spinner" size={20} />
                    <span>جاري الإرسال...</span>
                  </>
                ) : submitted ? (
                  <>
                    <span>✓</span>
                    <span>تم الإرسال بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
