import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';

const WhatsAppButton = () => {
  const phoneNumber = '573162260266';
  const message = 'Hola! Me interesa conocer más sobre sus servicios de construcción.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 group animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <div className="absolute -top-12 right-0 bg-construction-dark text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        👉 Chatear con nosotros
      </div>
    </a>
  );
};

export default WhatsAppButton;