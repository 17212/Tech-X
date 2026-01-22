import {
  BadgeCheck,
  Camera,
  Cpu,
  CreditCard,
  Eye,
  Fingerprint,
  Flame,
  Home,
  Laptop,
  Radar,
  Satellite,
  Scan,
  Server,
  Shield,
  Smartphone,
  Speaker,
  SquareGanttChart,
  TowerControl,
  Wallet,
  Waves,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  ar: string;
  desc: string;
  icon: LucideIcon;
  tag?: string;
};

export const coreServices: Service[] = [
  {
    title: "Electronic Systems",
    ar: "الأنظمة الإلكترونية",
    desc: "حلول متكاملة تدعم التحول الرقمي بأمان واعتمادية.",
    icon: Cpu,
  },
  {
    title: "Attendance Programs",
    ar: "برامج الحضور والانصراف",
    desc: "إدارة موارد بشرية دقيقة مع لوحات بيانات لحظية.",
    icon: Scan,
  },
  {
    title: "Mobile & Web Apps",
    ar: "تطبيقات الجوال والويب",
    desc: "تجارب رقمية سلسة للمتاجر، الخدمات، والمنتجات.",
    icon: Smartphone,
  },
  {
    title: "Digital Marketing",
    ar: "إدارة التسويق الإلكتروني",
    desc: "حملات أداء، هوية بصرية، وتحليلات مدفوعة بالبيانات.",
    icon: Flame,
  },
  {
    title: "E-Payment Gateway",
    ar: "خدمات بوابات الدفع",
    desc: "تكامل دفع آمن (3D Secure) يدعم النمو السريع.",
    icon: CreditCard,
  },
  {
    title: "Security & Surveillance",
    ar: "أنظمة الأمن والمراقبة",
    desc: "كاميرات، مراكز تحكم، وتنبيهات ذكية في الوقت الحقيقي.",
    icon: Camera,
  },
];

export const infraServices: Service[] = [
  {
    title: "DIA Solutions",
    ar: "حلول DIA",
    desc: "وصول إنترنت مخصص سريع وموثوق عبر ألياف و5G و VSAT.",
    icon: Satellite,
  },
  {
    title: "Low Current",
    ar: "أنظمة التيار الخفيف",
    desc: "تكامل أنظمة تحكم، إنذار، واتصال مع بنية تحتية حديثة.",
    icon: Radar,
  },
  {
    title: "Security & Protection",
    ar: "أنظمة الأمن والحماية",
    desc: "حماية متقدمة للمؤسسات بتركيب وتشغيل شامل.",
    icon: Shield,
  },
  {
    title: "Sound Systems",
    ar: "أنظمة الصوت",
    desc: "تغطية صوتية احترافية للقاعات، المكاتب، والمساجد.",
    icon: Speaker,
  },
  {
    title: "Smart Home & Buildings",
    ar: "البيوت والمباني الذكية",
    desc: "أتمتة إضاءة، مناخ، وأمن بواجهة موحدة.",
    icon: Home,
  },
  {
    title: "Smart Office",
    ar: "المكاتب الذكية",
    desc: "أماكن عمل مترابطة بحجوزات وغرف اجتماعات ذكية.",
    icon: Laptop,
  },
];

export const controlServices: Service[] = [
  {
    title: "Smart Mobo",
    ar: "أنظمة الدخول الذكية",
    desc: "حلول وصول سلسة عبر بطاقات وهواتف بموثوقية عالية.",
    icon: BadgeCheck,
  },
  {
    title: "Access Control Gates",
    ar: "بوابات التحكم في الدخول",
    desc: "بوابات متقدمة مع بصمة وRFID وربط آمن.",
    icon: Fingerprint,
  },
  {
    title: "Private Branch Exchange",
    ar: "شبكات الاتصال الداخلية",
    desc: "مقاسم حديثة مع تسجيل مكالمات وتوجيه ذكي.",
    icon: TowerControl,
  },
  {
    title: "Timekeeping Software",
    ar: "إدارة الحضور والانصراف",
    desc: "تحكم مركزي مع تكامل الرواتب والتقارير.",
    icon: SquareGanttChart,
  },
  {
    title: "Car Surveillance Cameras",
    ar: "كاميرات مراقبة السيارات",
    desc: "رصد مباشر للسيارات مع تخزين سحابي آمن.",
    icon: Eye,
  },
  {
    title: "Vehicle Tracking",
    ar: "أجهزة تتبع المركبات",
    desc: "تتبع لحظي، حدود جغرافية، وتنبيهات فورية.",
    icon: Waves,
  },
];

export type Product = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

export const otherProducts: Product[] = [
  {
    title: "Smart Speakers",
    subtitle: "حلول قاعات الاجتماعات الذكية",
    icon: Speaker,
  },
  {
    title: "Indicative Screens",
    subtitle: "شاشات تفاعلية للعرض والإرشاد",
    icon: Server,
  },
  {
    title: "Projectors",
    subtitle: "إسقاط احترافي للمؤتمرات والتدريب",
    icon: Radar,
  },
  {
    title: "Smart Boards",
    subtitle: "ألواح تفاعلية للمكاتب والقاعات",
    icon: BadgeCheck,
  },
  {
    title: "Security Cameras",
    subtitle: "رصد شامل بدقة عالية وتنبيهات آنية",
    icon: Camera,
  },
];

export const payments = [
  "3D Secure",
  "Verified by Visa",
  "Mastercard SecureCode",
];

export const contactInfo = {
  phone: "+966 567415419",
  email: "X.tech.est@gmail.com",
  website: "https://www.X.tech.com.sa",
  location: "Jeddah, KSA",
  whatsapp: "+966567415419",
  telegram: "https://t.me/IDRV72",
};
