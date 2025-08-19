import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';
const oplaLogo = '/lovable-uploads/6809c0d7-7ca3-473c-866c-efc9f47d9454.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
    return <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <img src={oplaLogo} alt="OPLA" className="h-12 w-12" />
            <div className="hidden md:block">
              <span className="text-lg font-bold text-primary">OPLA</span>
              <span className="text-sm text-muted-foreground ml-2">{t('header.brand')}</span>
            </div>
            <div className="md:hidden">
              <span className="text-lg font-bold text-primary">OPLA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.inicio')}
            </button>
            <button onClick={() => scrollToSection('productos')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.productos')}
            </button>
            <button onClick={() => scrollToSection('contactos')} className="text-foreground hover:text-primary transition-colors">
              {t('nav.contactos')}
            </button>
            <LanguageSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t('nav.inicio')}
              </button>
              <button onClick={() => scrollToSection('productos')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t('nav.productos')}
              </button>
              <button onClick={() => scrollToSection('contactos')} className="text-left text-foreground hover:text-primary transition-colors py-2">
                {t('nav.contactos')}
              </button>
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;