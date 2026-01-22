import { motion } from 'framer-motion';
import { Target, Eye, Rocket, Award, Users, Clock } from 'lucide-react';
import './About.css';

export default function About() {
  const features = [
    { icon: Award, text: 'جودة عالمية' },
    { icon: Users, text: 'فريق محترف' },
    { icon: Clock, text: 'دعم 24/7' },
    { icon: Rocket, text: 'تقنيات حديثة' }
  ];

  return (
    <section id="about" className="about section">
      {/* Background Elements */}
      <div className="about-bg">
        <div className="about-line line-1"></div>
        <div className="about-line line-2"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Us</span>
          <h2>
            معلومات <span className="gradient-text">عنا</span>
          </h2>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div className="vision-mission-grid">
          {/* Vision Card */}
          <motion.div
            className="vm-card vision-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="vm-card-inner">
              <div className="vm-icon-wrapper">
                <div className="vm-icon">
                  <Eye size={28} strokeWidth={1.5} />
                </div>
                <div className="vm-icon-glow"></div>
              </div>
              <div className="vm-content">
                <h3>رؤيتنا</h3>
                <p>
                  في إكس تك، رؤيتنا هي تحويل الأفكار إلى واقع ملموس والريادة في الابتكار.
                  نسعى لتمكين الأفراد والمؤسسات من الازدهار في العصر الرقمي،
                  مستقبلاً حيث لا حدود للابتكار.
                </p>
              </div>
            </div>
            <div className="vm-card-border"></div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="vm-card mission-card"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="vm-card-inner">
              <div className="vm-icon-wrapper">
                <div className="vm-icon">
                  <Target size={28} strokeWidth={1.5} />
                </div>
                <div className="vm-icon-glow"></div>
              </div>
              <div className="vm-content">
                <h3>رسالتنا</h3>
                <p>
                  نحن في X-Tech نقود نمو الأعمال من خلال الأفكار المبتكرة والتقنيات المتطورة.
                  نتعاون مع المؤسسات والشركات ورواد الأعمال في مختلف القطاعات،
                  لتمكينهم من التميز في عالم اليوم القائم على البيانات.
                </p>
              </div>
            </div>
            <div className="vm-card-border"></div>
          </motion.div>
        </div>

        {/* About Content */}
        <motion.div
          className="about-main"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="about-text">
            <h3>مرحباً بكم في <span className="gradient-text">X-Tech</span></h3>
            <p>
              أهلاً بكم في شركة إكس تك، حيث نسعى لنقل تميز الأعمال من خلال الأفكار
              المبتكرة والتقنيات المتطورة. نتعاون مع المؤسسات والشركات ورجال الأعمال في
              مختلف الصناعات، مما يمكنهم من الازدهار في عالم اليوم القائم على البيانات.
            </p>
            <p>
              فريقنا ملتزم بالبقاء في مقدمة التطور، وتقديم حلول مخصصة تُطلق الإمكانات
              وتحقق النجاح. انضموا إلينا في تشكيل مستقبل التكنولوجيا والأعمال.
            </p>
            <a href="#contact" className="btn btn-outline">
              تواصل معنا
            </a>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, x: -5 }}
              >
                <div className="feature-icon">
                  <feature.icon size={22} strokeWidth={1.5} />
                </div>
                <span>{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat-box">
            <span className="stat-value">10+</span>
            <span className="stat-text">سنوات خبرة</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">500+</span>
            <span className="stat-text">مشروع منجز</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">200+</span>
            <span className="stat-text">عميل سعيد</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">18+</span>
            <span className="stat-text">خدمة متكاملة</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
