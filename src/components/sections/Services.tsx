import { motion } from 'framer-motion';
import { Brain, Smartphone, Globe, Shield, CreditCard, Camera, Users, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../core/constants';

const iconMap: Record<string, any> = {
  Brain, Smartphone, Globe, Shield, CreditCard, Camera, Users
};

const Services = () => {
  return (
    <section className="py-32 bg-background relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Engineering the <span className="text-primary">Impossible</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Our capabilities span the entire digital spectrum, delivering solutions that define industry standards.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white border-b border-primary pb-1 hover:text-primary transition-colors">
            View All Solutions <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
