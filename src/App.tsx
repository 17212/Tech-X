import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { applyTheme } from "./theme/theme";
import {
  coreServices,
  infraServices,
  controlServices,
  otherProducts,
  payments,
  contactInfo,
  Service,
  Product,
} from "./data/services";
import {
  ArrowUpRight,
  Info,
  Mail,
  Phone,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import "./styles/global.css";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const ServiceCard = ({ item }: { item: Service }) => (
  <motion.div
    className="card"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.35 }}
    variants={fadeIn}
    style={{ background: "var(--gradient-card)" }}
  >
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <div
        className="glass"
        style={{
          width: 42,
          height: 42,
          display: "grid",
          placeItems: "center",
          borderRadius: 12,
        }}
      >
        <item.icon size={22} color="var(--primary)" />
      </div>
      <div>
        <div style={{ fontWeight: 700 }}>{item.title}</div>
        <div className="arabic" style={{ color: "var(--muted)", fontSize: 13 }}>
          {item.ar}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 12, color: "var(--muted)" }}>{item.desc}</div>
  </motion.div>
);

const ProductCard = ({ item }: { item: Product }) => (
  <motion.div
    className="card"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeIn}
    transition={{ duration: 0.35 }}
    style={{ gap: 10, display: "grid", gridTemplateColumns: "auto 1fr", alignItems: "center" }}
  >
    <div
      className="glass"
      style={{
        width: 44,
        height: 44,
        display: "grid",
        placeItems: "center",
        borderRadius: 14,
      }}
    >
      <item.icon size={22} color="var(--primary)" />
    </div>
    <div>
      <div style={{ fontWeight: 700 }}>{item.title}</div>
      <div className="arabic" style={{ color: "var(--muted)", fontSize: 13 }}>
        {item.subtitle}
      </div>
    </div>
  </motion.div>
);

const AboutModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        display: "grid",
        placeItems: "center",
        zIndex: 999,
        padding: "16px",
      }}
      onClick={onClose}
    >
      <motion.div
        className="card"
        style={{
          maxWidth: 520,
          width: "100%",
          background: "rgba(15,12,36,0.85)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
        }}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="gradient-text" style={{ fontSize: 18, fontWeight: 700 }}>
              About Idris Ghamid (إدريس غامد)
            </div>
            <div style={{ color: "var(--muted)", marginTop: 6 }}>Founder · IDRISIUM Corp</div>
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost"
            style={{ width: 42, height: 42, padding: 0, justifyContent: "center" }}
          >
            <X size={18} />
          </button>
        </div>
        <div className="divider" />
        <div style={{ display: "grid", gap: 10 }}>
          <p style={{ color: "var(--muted)" }}>
            Visionary leader elevating digital experiences with premium design, robust engineering,
            and relentless execution. Obsessed with clean code, pixel-perfect craft, and measurable
            business impact.
          </p>
          <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
            <a className="badge" href="mailto:idris.ghamid@gmail.com" target="_blank" rel="noreferrer">
              <Mail size={16} /> idris.ghamid@gmail.com
            </a>
            <a className="badge" href="https://t.me/IDRV72" target="_blank" rel="noreferrer">
              <Send size={16} /> @IDRV72 (Telegram)
            </a>
            <a className="badge" href="https://www.instagram.com/idris.ghamid" target="_blank" rel="noreferrer">
              <Sparkles size={16} /> @idris.ghamid (Insta/TikTok)
            </a>
            <a className="badge" href="https://github.com/IDRISIUM" target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} /> github.com/IDRISIUM
            </a>
            <a className="badge" href="http://idrisium.linkpc.net/" target="_blank" rel="noreferrer">
              <ArrowUpRight size={16} /> idrisium.linkpc.net
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Hero = ({ onOpenAbout }: { onOpenAbout: () => void }) => (
  <section className="section" style={{ background: "var(--gradient-hero)", position: "relative" }}>
    <div className="orb" style={{ width: 320, height: 320, top: 60, left: -80, background: "#ff2d92" }} />
    <div className="orb" style={{ width: 260, height: 260, bottom: 20, right: -40, background: "#8f4aff" }} />
    <div className="section-content" style={{ display: "grid", gap: 24, alignItems: "center" }}>
      <div className="badge">
        <Sparkles size={16} color="var(--primary)" />
        Premium Tech · Saudi Vision
      </div>
      <motion.h1
        className="gradient-text"
        style={{ fontSize: "clamp(32px, 4vw, 48px)", margin: 0, lineHeight: 1.1 }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        X TECH — حلول تقنية مستقبلية تربط الأفكار بالنتائج
      </motion.h1>
      <p style={{ color: "var(--muted)", maxWidth: 720, fontSize: 17, margin: 0 }}>
        نقدم حلولاً متكاملة للأنظمة الإلكترونية، التطبيقات، الأمن، والدفع الإلكتروني بلمسة تصميم
        فاخرة ومعايير أمان عالية، لنضع أعمالك في طليعة العصر الرقمي.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-primary" href="tel:+966567415419">
          <Phone size={18} /> تواصل معنا الآن
        </a>
        <button className="btn btn-ghost" onClick={onOpenAbout}>
          <Info size={18} /> عن المؤسس
        </button>
      </div>
      <div
        className="card"
        style={{
          padding: 16,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))",
          gap: 12,
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <img src="/IMG-20260117-WA0035.jpg.jpeg" alt="Logo card" style={{ borderRadius: 14, width: "100%" }} />
        <img src="/IMG-20260117-WA0036.jpg.jpeg" alt="Business card" style={{ borderRadius: 14, width: "100%" }} />
      </div>
    </div>
  </section>
);

const ServicesBlock = ({ title, services }: { title: string; services: Service[] }) => (
  <section className="section">
    <div className="section-content" style={{ display: "grid", gap: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
        <h2 style={{ margin: 0, fontSize: 26 }}>{title}</h2>
        <div className="badge arabic">خدماتنا وحلولنا</div>
      </div>
      <div className="cards-grid">
        {services.map((item) => (
          <ServiceCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="section" style={{ background: "var(--bg-alt)" }}>
    <div className="section-content" style={{ display: "grid", gap: 18 }}>
      <h2 style={{ margin: 0, fontSize: 26 }} className="gradient-text">
        About Us · معلومات عنا
      </h2>
      <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
        <div className="card">
          <p style={{ color: "var(--muted)" }}>
            Welcome to XTECH, where we drive business growth through innovative ideas and
            cutting-edge technology. We stay ahead of the curve to unlock potential and drive
            success.
          </p>
        </div>
        <div className="card arabic">
          <p style={{ color: "var(--muted)" }}>
            أهلاً بك في شركة إكس تيك حيث نقدم نمو الأعمال عبر الأفكار المبتكرة والتكنولوجيا المتقدمة،
            نبقى على السبق لنقدم حلولًا مخصصة تدفع نجاحك وتصنع مستقبل رقمي بلا حدود.
          </p>
        </div>
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src="/IMG-20260117-WA0045.jpg.jpeg"
          alt="About visual"
          style={{ width: "100%", display: "block", objectFit: "cover" }}
        />
      </div>
    </div>
  </section>
);

const DIASection = () => (
  <section className="section">
    <div className="section-content" style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <h2 style={{ margin: 0, fontSize: 26 }}>DIA & Internet Solutions</h2>
        <div className="badge arabic">ماذا نقدم؟</div>
      </div>
      <div className="card" style={{ display: "grid", gap: 10 }}>
        <p className="arabic" style={{ color: "var(--muted)", margin: 0 }}>
          هذا الحل الفوري والقابل للتوسع لخدمة الإنترنت يضمن أن يكون لدى عملك اتصال آمن وسريع وموثوقية
          عالية. يتم توفيره عبر مجموعة من أحدث تقنيات الوصول مثل: الألياف البصرية، الميكروويف، و5G، وVSAT.
        </p>
        <div className="divider" />
        <p style={{ color: "var(--muted)", margin: 0 }}>
          High-speed dedicated internet access with optimized latency, delivered over fiber, 5G,
          microwave, and VSAT with resilient failover. Designed for enterprises that cannot afford
          downtime.
        </p>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <img src="/IMG-20260117-WA0043.jpg.jpeg" alt="DIA visual" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  </section>
);

const PaymentsSection = () => (
  <section className="section" style={{ background: "var(--bg-alt)" }}>
    <div className="section-content" style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0, fontSize: 26 }}>E-Payment Gateway · بوابات الدفع</h2>
      <div className="card" style={{ display: "grid", gap: 12 }}>
        <p className="arabic" style={{ color: "var(--muted)", margin: 0 }}>
          نحن نقدم خدمات تكنولوجيا المال المخصصة التي توفر مجموعة واسعة من حلول الدفع عبر الإنترنت
          والمتاجر في المملكة العربية السعودية. نساعد الشركات بجميع الأحجام على الانتقال إلى جمع
          الأموال عبر الإنترنت بتكلفة مضبوطة.
        </p>
        <p style={{ color: "var(--muted)", margin: 0 }}>
          We add value through frictionless payments, 3D Secure compliance, and local rails support
          so you can scale faster.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {payments.map((p) => (
            <div key={p} className="badge">
              {p}
            </div>
          ))}
        </div>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <img src="/IMG-20260117-WA0047.jpg.jpeg" alt="Payments visual" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  </section>
);

const ProductsSection = () => (
  <section className="section">
    <div className="section-content" style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0, fontSize: 26 }}>Other Products · خدمات أخرى</h2>
      <div className="cards-grid">
        {otherProducts.map((item) => (
          <ProductCard key={item.title} item={item} />
        ))}
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <img src="/IMG-20260117-WA0048.jpg.jpeg" alt="Other products visual" style={{ width: "100%" }} />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section className="section" style={{ background: "var(--bg-alt)" }}>
    <div className="section-content" style={{ display: "grid", gap: 16 }}>
      <h2 style={{ margin: 0, fontSize: 26 }}>اتصل بنا · Contact</h2>
      <div className="cards-grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))" }}>
        <a className="card" href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}>
          <div className="badge">
            <Phone size={16} /> Phone
          </div>
          <div style={{ fontWeight: 700 }}>{contactInfo.phone}</div>
        </a>
        <a className="card" href={`mailto:${contactInfo.email}`}>
          <div className="badge">
            <Mail size={16} /> Email
          </div>
          <div style={{ fontWeight: 700 }}>{contactInfo.email}</div>
        </a>
        <a className="card" href={contactInfo.website} target="_blank" rel="noreferrer">
          <div className="badge">
            <ArrowUpRight size={16} /> Website
          </div>
          <div style={{ fontWeight: 700 }}>{contactInfo.website}</div>
        </a>
        <div className="card">
          <div className="badge arabic">الموقع</div>
          <div style={{ fontWeight: 700 }}>{contactInfo.location}</div>
        </div>
      </div>
      <div className="divider" />
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <a className="btn btn-primary" href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
          واتساب فوري
        </a>
        <a className="btn btn-ghost" href={contactInfo.telegram} target="_blank" rel="noreferrer">
          Telegram
        </a>
      </div>
    </div>
  </section>
);

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    applyTheme();
  }, []);

  return (
    <div className="app-shell" style={{ background: "var(--bg)" }}>
      <Hero onOpenAbout={() => setAboutOpen(true)} />
      <ServicesBlock title="Core Services" services={coreServices} />
      <ServicesBlock title="Infrastructure & Smart" services={infraServices} />
      <ServicesBlock title="Access, Control, and Tracking" services={controlServices} />
      <DIASection />
      <AboutSection />
      <PaymentsSection />
      <ProductsSection />
      <ContactSection />
      <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
      <footer className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="section-content" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <div style={{ color: "var(--muted)" }}>© {new Date().getFullYear()} X TECH — Crafted with pride.</div>
          <div className="arabic" style={{ color: "var(--muted)" }}>هوية بصرية حديثة · جودة آبل في الوضع الليلي</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
