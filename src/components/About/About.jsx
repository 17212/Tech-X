import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
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
            معلومات <span className="gradient-text">عنا</span>
          </h2>
          <p>About Us</p>
        </motion.div>

        <div className="about-grid">
          {/* Vision Card */}
          <motion.div
            className="about-card vision-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-card-icon">
              <Eye size={32} />
            </div>
            <h3>رؤيتنا</h3>
            <p>
              في إكس تك، رؤيتنا هي تحويل الأفكار إلى واقع ملموس والريادة في الابتكار.
              نصل الحلول التي تُشكل الأفراد والمؤسسات من الازدهار في العصر الرقمي،
              مستقبلاً حيث لا حدود للابتكار.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="about-card mission-card"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="about-card-icon">
              <Target size={32} />
            </div>
            <h3>رسالتنا</h3>
            <p>
              نحن في X-Tech نقود نمو الأعمال من خلال الأفكار المبتكرة والتقنيات المتطورة.
              نتعاون مع المؤسسات والشركات ورواد الأعمال في مختلف القطاعات، لتمكينهم من
              التميز في عالم اليوم القائم على البيانات.
            </p>
          </motion.div>
        </div>

        {/* About Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
          </div>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>حلول تقنية متكاملة</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>فريق خبراء محترف</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>دعم فني على مدار الساعة</span>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <span>أسعار تنافسية</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
