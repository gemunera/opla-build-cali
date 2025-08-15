import { Instagram } from 'lucide-react';

const InstagramButton = () => {
  const instagramUrl = 'https://www.instagram.com/opla_construccion/';

  return (
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-24 z-50 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white p-4 rounded-full shadow-elevated transition-all duration-300 hover:scale-110 group animate-bounce"
      aria-label="Síguenos en Instagram"
    >
      <Instagram className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <div className="absolute -top-12 right-0 bg-construction-dark text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Síguenos en Instagram
      </div>
    </a>
  );
};

export default InstagramButton;