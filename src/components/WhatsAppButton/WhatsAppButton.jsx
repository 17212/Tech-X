import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const phoneNumber = '966567415419';
  const message = 'مرحباً، أرغب في الاستفسار عن خدماتكم';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="تواصل معنا عبر واتساب"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">تواصل عبر واتساب</span>
    </a>
  );
}
