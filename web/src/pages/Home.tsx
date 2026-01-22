import Hero from '../components/sections/Hero';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, ShieldCheck } from 'lucide-react';

const Home = () => {
  const features = [
    { icon: <Globe size={32} />, title: "Web Development", desc: "Modern, responsive, and high-performance websites." },
    { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native and cross-platform mobile applications." },
    { icon: <Code size={32} />, title: "Custom Software", desc: "Tailored software solutions for your business needs." },
    { icon: <ShieldCheck size={32} />, title: "Cyber Security", desc: "Protecting your digital assets with advanced security." },
  ];

  return (
    <>
      <Hero />
      
      {/* Features Preview */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
