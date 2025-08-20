import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  es: {
    // Header
    'header.brand': 'Diseño & Construcción • Para Empresas • Para Viviendas',
    'nav.inicio': 'Inicio',
    'nav.productos': 'Productos', 
    'nav.contactos': 'Contactos',
    
    // Hero
    'hero.title': 'Arquitectura con',
    'hero.titleHighlight': 'propósito',
    'hero.subtitle': 'Creamos espacios para vivir plenamente, no solo para habitar. Más que estructuras, diseñamos experiencias que transforman la vida de quienes las disfrutan.',
    'hero.contactButton': 'Contactar ahora',
    'hero.projectsButton': 'Ver proyectos',
    
    // About
    'about.title': 'Quiénes Somos',
    'about.description': 'En OPLA contamos con profesionales con más de 15 años de experiencia en el sector de la construcción. Nos especializamos en el diseño y construcción de espacios empresariales y residenciales. Hemos desarrollado más de 100 proyectos, tanto públicos como privados, incluyendo diseño urbano y estructuración de proyectos en Estados Unidos.',
    'about.feature1.title': 'Diseño Arquitectónico',
    'about.feature1.description': 'Creamos diseños innovadores y funcionales que optimizan cada espacio corporativo.',
    'about.feature2.title': 'Proyectos Residenciales',
    'about.feature2.description': 'Construcción de viviendas modernas y funcionales para familias.',
    'about.feature3.title': 'Calidad Garantizada',
    'about.feature3.description': 'Utilizamos los mejores materiales y técnicas de construcción del mercado.',
    'about.feature4.title': 'Entrega Puntual',
    'about.feature4.description': 'Cumplimos con los tiempos establecidos en cada proyecto sin comprometer la calidad.',
    
    // WhyChooseUs
    'whyChooseUs.title': '¿Por qué elegir OPLA?',
    'whyChooseUs.subtitle': 'Somos tu mejor opción en construcción por nuestra dedicación a la excelencia, innovación y compromiso con cada cliente.',
    'whyChooseUs.reason1.title': 'Calidad Garantizada',
    'whyChooseUs.reason1.description': 'Utilizamos materiales de primera calidad y seguimos estrictos controles de calidad en cada etapa del proyecto.',
    'whyChooseUs.reason2.title': 'Experiencia Comprobada',
    'whyChooseUs.reason2.description': 'Contamos con profesionales con más de 15 años de experiencia en el área de la construcción, creando proyectos exitosos para empresas y familias en Cali y sus alrededores.',
    'whyChooseUs.reason3.title': 'Cumplimiento Total',
    'whyChooseUs.reason3.description': 'Entregamos todos nuestros proyectos en los tiempos acordados, respetando presupuestos y especificaciones.',
    'whyChooseUs.reason4.title': 'Equipo Profesional',
    'whyChooseUs.reason4.description': 'Contamos con arquitectos, ingenieros y constructores certificados con amplia experiencia en el sector.',
    
    // Gallery/Projects
    'gallery.title': 'Nuestros Proyectos',
    'gallery.subtitle': 'Descubre algunos de nuestros proyectos más destacados en construcción empresarial y residencial',
    'gallery.project1.title': 'Diseño de casas y apartamentos',
    'gallery.project1.description': 'Planos arquitectónicos personalizados que reflejan tu estilo de vida ideal. Trabajamos contigo para crear espacios que se adapten a tus necesidades específicas, considerando la funcionalidad, estética y sostenibilidad. Nuestros diseños incluyen distribución óptima de espacios, iluminación natural, ventilación cruzada y selección de materiales de alta calidad.',
    'gallery.project2.title': 'Diseño comercial de oficinas y bodegas',
    'gallery.project2.description': 'Espacios de trabajo innovadores y funcionales que inspiran productividad y bienestar. Diseñamos oficinas modernas que promueven la colaboración, creatividad y eficiencia. Incluimos áreas de trabajo flexibles, zonas de descanso, salas de reuniones y espacios verdes que mejoran el ambiente laboral.',
    'gallery.project3.title': 'Diseño de planos constructivos',
    'gallery.project3.description': 'Planos técnicos detallados para la construcción de tu proyecto. Elaboramos documentos constructivos completos que incluyen plantas arquitectónicas, cortes, fachadas, detalles constructivos y especificaciones técnicas. Todos nuestros planos cumplen con la normativa vigente y facilitan el proceso de construcción.',
    'gallery.project4.title': 'Construcción de casas y apartamentos',
    'gallery.project4.description': 'Construcción integral de viviendas con los más altos estándares de calidad. Manejamos todo el proceso constructivo desde los cimientos hasta los acabados finales, utilizando materiales de primera calidad y técnicas modernas. Garantizamos entregas puntuales y construcciones duraderas.',
    'gallery.project5.title': 'Construcción de locales comerciales, oficinas y bodegas',
    'gallery.project5.description': 'Construcción especializada para espacios comerciales e industriales. Desarrollamos proyectos que optimizan la operación comercial, considerando flujos de trabajo, seguridad industrial, accesibilidad y normativas específicas. Especializados en construcción rápida y eficiente.',
    'gallery.project6.title': 'Coordinación de proyectos',
    'gallery.project6.description': 'Gestión integral y coordinación profesional de tu proyecto de construcción. Nos encargamos de planificar, supervisar y coordinar todas las fases del proyecto, desde el diseño hasta la entrega final. Incluye control de calidad, tiempos, presupuestos y comunicación constante con el cliente.',
    'gallery.project7.title': 'Estructuración de proyectos',
    'gallery.project7.description': 'Análisis y diseño estructural para garantizar la seguridad de tu construcción. Realizamos estudios de suelos, cálculos estructurales, diseño de cimentaciones y sistemas de soporte. Trabajamos con ingenieros especializados para asegurar la estabilidad y durabilidad de la estructura.',
    'gallery.project8.title': 'Licencia de construcción y consultoría normativa urbana',
    'gallery.project8.description': 'Asesoría completa en trámites y normativas para tu proyecto. Te acompañamos en todo el proceso legal y administrativo, incluyendo licencias de construcción, permisos municipales, estudios de impacto y cumplimiento de normativas urbanas. Garantizamos que tu proyecto cumpla con todos los requerimientos legales.',
    'gallery.project9.title': 'Diseño paramétrico',
    'gallery.project9.description': 'Diseño avanzado utilizando tecnología paramétrica para optimizar tu proyecto. Empleamos software especializado y algoritmos de diseño para crear soluciones arquitectónicas innovadoras y eficientes. Permite explorar múltiples opciones de diseño y optimizar aspectos como iluminación, ventilación y uso de materiales.',
    'gallery.knowMore': 'Conocer más',
    'gallery.requestQuote': 'Solicitar cotización',
    'gallery.serviceDescription': 'Descripción del Servicio',
    
    // Metrics
    'metrics.title': 'Nuestros números hablan',
    'metrics.subtitle': 'La confianza de nuestros clientes se refleja en estos resultados',
    'metrics.projects': 'Proyectos Realizados',
    'metrics.projectsDescription': 'Proyectos exitosos en construcción empresarial y residencial',
    'metrics.area': 'Área Total Construida',
    'metrics.areaDescription': 'Metros cuadrados de construcción de alta calidad',
    'metrics.coverage': 'Cobertura Completa',
    'metrics.coverageDescription': 'Cobertura total en todas las fases del proyecto',
    'metrics.clients': 'Clientes Satisfechos',
    'metrics.clientsDescription': 'Familias y empresas que confían en nosotros',
    
    // Contact
    'contact.title': 'Contactos en Cali',
    'contact.subtitle': '¿Tienes un proyecto en mente? Contáctanos y te ayudaremos a hacerlo realidad.',
    'contact.formTitle': 'Envíanos un mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.message': 'Inquietud o mensaje',
    'contact.messagePlaceholder': 'Cuéntanos sobre tu proyecto...',
    'contact.captcha': 'Verificación anti-robot: ¿Cuánto es',
    'contact.newCaptcha': 'Nuevo',
    'contact.sendMessage': 'Enviar mensaje',
    'contact.captchaError': 'Por favor resuelve correctamente la operación matemática.',
    'contact.sendError': 'No pudimos enviar tu mensaje. Inténtalo de nuevo.',
    'contact.sendSuccess': '¡Gracias! Hemos recibido tu mensaje y te contactaremos pronto.',
    'contact.verificationError': 'Error en verificación',
    'contact.sendErrorTitle': 'Error al enviar',
    'contact.sendSuccessTitle': 'Mensaje enviado',
    
    // Footer
    'footer.description': 'Construimos espacios que transforman vidas y negocios. Contamos con profesionales con más de 15 años de experiencia, lo que nos convierte en tu aliado confiable para proyectos de construcción empresarial y residencial.',
    'footer.contactTitle': 'Contactos en Cali',
    'footer.servicesTitle': 'Nuestros Servicios',
    'footer.rights': '© 2024 OPLA - Todos los derechos reservados',
    'footer.location': 'Cali, Colombia • Construcción profesional desde 2020',
  },
  en: {
    // Header
    'header.brand': 'Design & Construction • For Businesses • For Homes',
    'nav.inicio': 'Home',
    'nav.productos': 'Projects',
    'nav.contactos': 'Contact',
    
    // Hero
    'hero.title': 'Architecture with',
    'hero.titleHighlight': 'purpose',
    'hero.subtitle': 'We create spaces for full living, not just inhabiting. More than structures, we design experiences that transform the lives of those who enjoy them.',
    'hero.contactButton': 'Contact now',
    'hero.projectsButton': 'View projects',
    
    // About
    'about.title': 'Who We Are',
    'about.description': 'At OPLA we have professionals with more than 15 years of experience in the construction sector. We specialize in the design and construction of business and residential spaces. We have developed more than 100 projects, both public and private, including urban design and project structuring in the United States.',
    'about.feature1.title': 'Architectural Design',
    'about.feature1.description': 'We create innovative and functional designs that optimize every corporate space.',
    'about.feature2.title': 'Residential Projects',
    'about.feature2.description': 'Construction of modern and functional homes for families.',
    'about.feature3.title': 'Guaranteed Quality',
    'about.feature3.description': 'We use the best materials and construction techniques in the market.',
    'about.feature4.title': 'Timely Delivery',
    'about.feature4.description': 'We meet established timelines in each project without compromising quality.',
    
    // WhyChooseUs
    'whyChooseUs.title': 'Why choose OPLA?',
    'whyChooseUs.subtitle': 'We are your best option in construction for our dedication to excellence, innovation and commitment to each client.',
    'whyChooseUs.reason1.title': 'Guaranteed Quality',
    'whyChooseUs.reason1.description': 'We use top quality materials and follow strict quality controls at every stage of the project.',
    'whyChooseUs.reason2.title': 'Proven Experience',
    'whyChooseUs.reason2.description': 'We have professionals with more than 15 years of experience in construction, creating successful projects for companies and families in Cali and its surroundings.',
    'whyChooseUs.reason3.title': 'Total Compliance',
    'whyChooseUs.reason3.description': 'We deliver all our projects on agreed timelines, respecting budgets and specifications.',
    'whyChooseUs.reason4.title': 'Professional Team',
    'whyChooseUs.reason4.description': 'We have certified architects, engineers and builders with extensive experience in the sector.',
    
    // Gallery/Projects
    'gallery.title': 'Our Projects',
    'gallery.subtitle': 'Discover some of our most outstanding projects in business and residential construction',
    'gallery.project1.title': 'Design of houses and apartments',
    'gallery.project1.description': 'Personalized architectural plans that reflect your ideal lifestyle. We work with you to create spaces that adapt to your specific needs, considering functionality, aesthetics and sustainability. Our designs include optimal space distribution, natural lighting, cross ventilation and selection of high quality materials.',
    'gallery.project2.title': 'Commercial design of offices and warehouses',
    'gallery.project2.description': 'Innovative and functional work spaces that inspire productivity and well-being. We design modern offices that promote collaboration, creativity and efficiency. We include flexible work areas, rest areas, meeting rooms and green spaces that improve the work environment.',
    'gallery.project3.title': 'Design of construction plans',
    'gallery.project3.description': 'Detailed technical plans for the construction of your project. We prepare complete construction documents that include architectural plans, sections, facades, construction details and technical specifications. All our plans comply with current regulations and facilitate the construction process.',
    'gallery.project4.title': 'Construction of houses and apartments',
    'gallery.project4.description': 'Integral construction of homes with the highest quality standards. We handle the entire construction process from foundations to final finishes, using top quality materials and modern techniques. We guarantee timely deliveries and durable constructions.',
    'gallery.project5.title': 'Construction of commercial premises, offices and warehouses',
    'gallery.project5.description': 'Specialized construction for commercial and industrial spaces. We develop projects that optimize commercial operation, considering work flows, industrial safety, accessibility and specific regulations. Specialized in fast and efficient construction.',
    'gallery.project6.title': 'Project coordination',
    'gallery.project6.description': 'Integral management and professional coordination of your construction project. We take care of planning, supervising and coordinating all phases of the project, from design to final delivery. Includes quality control, timing, budgets and constant communication with the client.',
    'gallery.project7.title': 'Project structuring',
    'gallery.project7.description': 'Structural analysis and design to guarantee the safety of your construction. We carry out soil studies, structural calculations, foundation design and support systems. We work with specialized engineers to ensure the stability and durability of the structure.',
    'gallery.project8.title': 'Construction license and urban regulatory consulting',
    'gallery.project8.description': 'Complete advice on procedures and regulations for your project. We accompany you throughout the legal and administrative process, including construction licenses, municipal permits, impact studies and compliance with urban regulations. We guarantee that your project complies with all legal requirements.',
    'gallery.project9.title': 'Parametric design',
    'gallery.project9.description': 'Advanced design using parametric technology to optimize your project. We use specialized software and design algorithms to create innovative and efficient architectural solutions. Allows you to explore multiple design options and optimize aspects such as lighting, ventilation and use of materials.',
    'gallery.knowMore': 'Learn more',
    'gallery.requestQuote': 'Request quote',
    'gallery.serviceDescription': 'Service Description',
    
    // Metrics
    'metrics.title': 'Our numbers speak',
    'metrics.subtitle': 'Our clients\' trust is reflected in these results',
    'metrics.projects': 'Completed Projects',
    'metrics.projectsDescription': 'Successful projects in business and residential construction',
    'metrics.area': 'Total Built Area',
    'metrics.areaDescription': 'Square meters of high quality construction',
    'metrics.coverage': 'Complete Coverage',
    'metrics.coverageDescription': 'Total coverage in all project phases',
    'metrics.clients': 'Satisfied Clients',
    'metrics.clientsDescription': 'Families and companies that trust us',
    
    // Contact
    'contact.title': 'Contact in Cali',
    'contact.subtitle': 'Do you have a project in mind? Contact us and we will help you make it a reality.',
    'contact.formTitle': 'Send us a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Inquiry or message',
    'contact.messagePlaceholder': 'Tell us about your project...',
    'contact.captcha': 'Anti-robot verification: How much is',
    'contact.newCaptcha': 'New',
    'contact.sendMessage': 'Send message',
    'contact.captchaError': 'Please solve the math operation correctly.',
    'contact.sendError': 'We couldn\'t send your message. Try again.',
    'contact.sendSuccess': 'Thank you! We have received your message and will contact you soon.',
    'contact.verificationError': 'Verification error',
    'contact.sendErrorTitle': 'Error sending',
    'contact.sendSuccessTitle': 'Message sent',
    
    // Footer
    'footer.description': 'We build spaces that transform lives and businesses. We have professionals with more than 15 years of experience, which makes us your reliable partner for business and residential construction projects.',
    'footer.contactTitle': 'Contact in Cali',
    'footer.servicesTitle': 'Our Services',
    'footer.rights': '© 2024 OPLA - All rights reserved',
    'footer.location': 'Cali, Colombia • Professional construction since 2020',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish

  const t = (key: string): string => {
    const text = translations[language][key as keyof typeof translations['es']] || key;
    // Replace dynamic year in footer rights
    if (key === 'footer.rights') {
      const currentYear = new Date().getFullYear();
      return text.replace('2024', currentYear.toString());
    }
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};