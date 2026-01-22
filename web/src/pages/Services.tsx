import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Database, Cloud, Lock } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Globe size={40} />, title: "Web Development", desc: "Custom websites built with React, Next.js, and modern technologies." },
    { icon: <Smartphone size={40} />, title: "Mobile Apps", desc: "iOS and Android applications using Flutter and React Native." },
    { icon: <Code size={40} />, title: "Software Engineering", desc: "Scalable enterprise software solutions and API development." },
    { icon: <Database size={40} />, title: "Database Design", desc: "Efficient and secure database architectures for your data." },
    { icon: <Cloud size={40} />, title: "Cloud Solutions", desc: "AWS, Azure, and Google Cloud infrastructure management." },
    { icon: <Lock size={40} />, title: "Cyber Security", desc: "Penetration testing and security audits to keep you safe." },
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-gradient">Services</span></h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
