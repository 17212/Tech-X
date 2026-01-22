import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, MapPin, Send, User, MessageSquare, Loader2, CheckCircle, ArrowLeft } from 'lucide-react';
import { contactInfo } from '../../data/content';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactItems = [
    { icon: Phone, label: 'الهاتف', value: contactInfo.phone, href: `tel:${contactInfo.phone}`, dir: 'ltr' },
    { icon: Mail, label: 'البريد الإلكتروني', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Globe, label: 'الموقع الإلكتروني', value: contactInfo.website, href: `https://${contactInfo.website}`, external: true },
    { icon: MapPin, label: 'العنوان', value: contactInfo.address }
  ];

  return (
    <section id="contact" className="contact section">
      {/* Background */}
      <div className="contact-bg">
        <div className="contact-glow"></div>
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
          <span className="section-tag">Contact Us</span>
          <h2>
            تواصل <span className="gradient-text">معنا</span>
          </h2>
          <p className="section-desc">
            نحن هنا لمساعدتك في تحقيق أهدافك التقنية. تواصل معنا الآن!
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="contact-info-inner">
              <h3>معلومات التواصل</h3>
              <p>لا تتردد في التواصل معنا في أي وقت. فريقنا جاهز لمساعدتك!</p>

              <div className="contact-items">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="contact-item"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <div className="contact-icon">
                          <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="contact-text">
                          <span className="label">{item.label}</span>
                          <span className="value" dir={item.dir}>{item.value}</span>
                        </div>
                        <ArrowLeft size={16} className="item-arrow" />
                      </a>
                    ) : (
                      <div className="contact-item static">
                        <div className="contact-icon">
                          <item.icon size={20} strokeWidth={1.5} />
                        </div>
                        <div className="contact-text">
                          <span className="label">{item.label}</span>
                          <span className="value">{item.value}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="working-hours">
                <h4>ساعات العمل</h4>
                <div className="hours-grid">
                  <div className="hours-item">
                    <span>الأحد - الخميس</span>
                    <span>9:00 ص - 6:00 م</span>
                  </div>
                  <div className="hours-item">
                    <span>الجمعة - السبت</span>
                    <span>مغلق</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-info-border"></div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <User size={16} />
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

                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={16} />
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={16} />
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

                <div className="form-group">
                  <label htmlFor="subject">
                    <MessageSquare size={16} />
                    <span>الموضوع</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="موضوع الرسالة"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={16} />
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

              <motion.button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''} ${submitted ? 'success' : ''}`}
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="spinner" size={20} />
                    <span>جاري الإرسال...</span>
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>تم الإرسال بنجاح!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>إرسال الرسالة</span>
                  </>
                )}
              </motion.button>
            </form>
            <div className="form-border"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
