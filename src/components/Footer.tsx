import { Mail, MapPin, MessageCircle } from 'lucide-react';
const oplaLogo = '/lovable-uploads/ba5b1bf2-20bf-4f54-a2dc-9e85014744e6.png';
const Footer = () => {
  const contactInfo = [{
    icon: MessageCircle,
    label: <MessageCircle className="h-4 w-4" />,
    value: '+57 316 2260266',
    href: 'https://wa.me/573162260266'
  }, {
    icon: Mail,
    label: 'Email',
    value: 'oplaconstruccion@gmail.com',
    href: 'mailto:oplaconstruccion@gmail.com'
  }, {
    icon: MapPin,
    label: 'Dirección',
    value: 'Cra. 9 # 24-46, Cali, Colombia',
    href: 'https://maps.google.com/maps?q=Cra.+9+%23+24-46,+Cali,+Colombia'
  }];
  return <footer className="bg-construction-dark text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Brand */}
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <img src={oplaLogo} alt="OPLA" className="h-40 w-40 object-contain" />
            </div>
            <p className="text-gray-300 leading-relaxed">Construimos espacios que transforman vidas y negocios.
Contamos con profesionales con más de 15 años de experiencia, lo que nos convierte en tu aliado confiable para proyectos de construcción empresarial y residencial.</p>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contactos en Cali
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return <a key={index} href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{typeof info.label === 'string' ? info.label : ''}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>;
            })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Nuestros Servicios
            </h3>
            <ul className="space-y-3">
              {[
                'Diseño de casas y apartamentos',
                'Diseño comercial de oficinas y bodegas', 
                'Diseño de planos constructivos',
                'Construcción de casas y apartamentos',
                'Construcción de locales comerciales, oficinas y bodegas',
                'Coordinación de proyectos',
                'Estructuración de proyectos',
                'Licencia de construcción y consultoría normativa urbana',
                'Diseño paramétrico'
              ].map((service, index) => <li key={index} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  • {service}
                </li>)}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 OPLA - Todos los derechos reservados
            </p>
            <p className="text-gray-400 text-sm">
              Cali, Colombia • Construcción profesional desde 2014
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;