import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-construction.jpg';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Construcción profesional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Arquitectura con{' '}
            <span className="text-transparent bg-gradient-primary bg-clip-text">propósito</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up">Creamos espacios para vivir plenamente, no solo para habitar. Más que estructuras, diseñamos experiencias que transforman la vida de quienes las disfrutan.</p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <Button size="lg" onClick={() => scrollToSection('contactos')} className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction group">
              Contactar ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('productos')} className="border-white text-white hover:bg-white hover:text-construction-dark">
              Ver proyectos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;