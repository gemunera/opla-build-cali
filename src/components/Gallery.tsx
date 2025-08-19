import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import officeImage from '@/assets/office-construction.jpg';
import houseImage from '@/assets/house-construction.jpg';
import heroImage from '@/assets/hero-construction.jpg';

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Diseño de casas y apartamentos',
      image: houseImage,
      description: 'Planos arquitectónicos personalizados que reflejan tu estilo de vida ideal. Trabajamos contigo para crear espacios que se adapten a tus necesidades específicas, considerando la funcionalidad, estética y sostenibilidad. Nuestros diseños incluyen distribución óptima de espacios, iluminación natural, ventilación cruzada y selección de materiales de alta calidad.',
      gallery: [houseImage, heroImage, officeImage]
    },
    {
      title: 'Diseño comercial de oficinas y bodegas',
      image: officeImage,
      description: 'Espacios de trabajo innovadores y funcionales que inspiran productividad y bienestar. Diseñamos oficinas modernas que promueven la colaboración, creatividad y eficiencia. Incluimos áreas de trabajo flexibles, zonas de descanso, salas de reuniones y espacios verdes que mejoran el ambiente laboral.',
      gallery: [officeImage, houseImage, heroImage]
    },
    {
      title: 'Diseño de planos constructivos',
      image: houseImage,
      description: 'Planos técnicos detallados para la construcción de tu proyecto. Elaboramos documentos constructivos completos que incluyen plantas arquitectónicas, cortes, fachadas, detalles constructivos y especificaciones técnicas. Todos nuestros planos cumplen con la normativa vigente y facilitan el proceso de construcción.',
      gallery: [houseImage, officeImage, heroImage]
    },
    {
      title: 'Construcción de casas y apartamentos',
      image: houseImage,
      description: 'Construcción integral de viviendas con los más altos estándares de calidad. Manejamos todo el proceso constructivo desde los cimientos hasta los acabados finales, utilizando materiales de primera calidad y técnicas modernas. Garantizamos entregas puntuales y construcciones duraderas.',
      gallery: [houseImage, heroImage, officeImage]
    },
    {
      title: 'Construcción de locales comerciales, oficinas y bodegas',
      image: officeImage,
      description: 'Construcción especializada para espacios comerciales e industriales. Desarrollamos proyectos que optimizan la operación comercial, considerando flujos de trabajo, seguridad industrial, accesibilidad y normativas específicas. Especializados en construcción rápida y eficiente.',
      gallery: [officeImage, heroImage, houseImage]
    },
    {
      title: 'Coordinación de proyectos',
      image: officeImage,
      description: 'Gestión integral y coordinación profesional de tu proyecto de construcción. Nos encargamos de planificar, supervisar y coordinar todas las fases del proyecto, desde el diseño hasta la entrega final. Incluye control de calidad, tiempos, presupuestos y comunicación constante con el cliente.',
      gallery: [officeImage, houseImage, heroImage]
    },
    {
      title: 'Estructuración de proyectos',
      image: houseImage,
      description: 'Análisis y diseño estructural para garantizar la seguridad de tu construcción. Realizamos estudios de suelos, cálculos estructurales, diseño de cimentaciones y sistemas de soporte. Trabajamos con ingenieros especializados para asegurar la estabilidad y durabilidad de la estructura.',
      gallery: [houseImage, officeImage, heroImage]
    },
    {
      title: 'Licencia de construcción y consultoría normativa urbana',
      image: officeImage,
      description: 'Asesoría completa en trámites y normativas para tu proyecto. Te acompañamos en todo el proceso legal y administrativo, incluyendo licencias de construcción, permisos municipales, estudios de impacto y cumplimiento de normativas urbanas. Garantizamos que tu proyecto cumpla con todos los requerimientos legales.',
      gallery: [officeImage, heroImage, houseImage]
    },
    {
      title: 'Diseño paramétrico',
      image: houseImage,
      description: 'Diseño avanzado utilizando tecnología paramétrica para optimizar tu proyecto. Empleamos software especializado y algoritmos de diseño para crear soluciones arquitectónicas innovadoras y eficientes. Permite explorar múltiples opciones de diseño y optimizar aspectos como iluminación, ventilación y uso de materiales.',
      gallery: [houseImage, heroImage, officeImage]
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            Nuestros Proyectos
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            Descubre algunos de nuestros proyectos más destacados en construcción empresarial y residencial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => (
            <Card
              key={projectIndex}
              className="overflow-hidden shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h4 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {project.title}
                </h4>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-construction-gray-dark leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white mt-auto"
                  onClick={() => openModal(project)}
                >
                  Conocer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal con carrusel */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-construction-dark">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                {/* Carrusel de imágenes */}
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.gallery.map((image: string, index: number) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video overflow-hidden rounded-lg">
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Imagen ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                  </Carousel>
                </div>

                {/* Descripción detallada */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-construction-dark mb-4">
                    Descripción del Servicio
                  </h3>
                  <p className="text-construction-gray-dark leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Botón de contacto */}
                <div className="flex justify-center pt-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction"
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById('contactos')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;