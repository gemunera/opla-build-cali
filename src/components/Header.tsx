import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
const oplaLogo = '/lovable-uploads/6809c0d7-7ca3-473c-866c-efc9f47d9454.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={oplaLogo} alt="OPLA" className="h-12 w-12 p-1 bg-white rounded-lg shadow-lg border-2 border-primary/20" />
            <div className="hidden md:block">
              <span className="text-lg font-bold text-primary">OPLA</span>
              <span className="text-sm text-muted-foreground ml-2">Diseño & Construcción • Para Empresas • Para Viviendas</span>
            </div>
            <div className="md:hidden">
              <span className="text-lg font-bold text-primary">OPLA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('productos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection('contactos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contactos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection('productos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Productos
              </button>
              <button
                onClick={() => scrollToSection('contactos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contactos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;