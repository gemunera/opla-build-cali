import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';
import officeImage from '@/assets/office-construction.jpg';
import houseImage from '@/assets/house-construction.jpg';
import heroImage from '@/assets/hero-construction.jpg';
const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    t
  } = useLanguage();
  const projectTitles = ["Diseño de casas y apartamentos", "Diseños comercial, oficina y bodegas", "Diseño de planos constructivos", "Construcción de casas y apartamentos", "Construcción de L.comercial y bodegas", "Coordinación Bim de proyectos", "Estructuración de proyectos", "Licencia de contratación y consultoría urbana", "Diseño Parametrico y en Guadua"];
  const projects = [{
    title: "Vivienda Multifamiliar San Mateo",
    image: '/lovable-uploads/bd43a32b-90c3-4ad4-a56e-76e6b72ae80e.png',
    description: t('gallery.project1.description'),
    gallery: ['/lovable-uploads/a0231876-44ff-404e-89f9-4a16ce9a1136.png', '/lovable-uploads/05b466a7-7e69-4b83-9839-aa10a6b3aba8.png', '/lovable-uploads/8af2e020-6417-42c4-bb4c-8abfdf7a18b7.png', '/lovable-uploads/c4eb8b3b-fcae-40f1-a097-5baf617bbd0e.png', '/lovable-uploads/f85ef43e-c33e-4ea6-9622-71c12f29c5b4.png', '/lovable-uploads/d1188f14-5216-4585-8a90-9c9be22cb36b.png']
  }, {
    title: "Zona Húmeda – Casa 29, Pance",
    image: '/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png',
    description: t('gallery.project2.description'),
    gallery: ['/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png', '/lovable-uploads/bef0e36a-1c35-4020-830b-3c1794f3e047.png', '/lovable-uploads/906e0622-d3f7-49ee-acca-c2c48209433a.png', '/lovable-uploads/a3385894-373f-4f7f-9462-38c2f7779d80.png', '/lovable-uploads/a3163fb2-f351-4b2a-bf34-ce274d784d23.png']
  }, {
    title: t('gallery.project3.title'),
    image: houseImage,
    description: t('gallery.project3.description'),
    gallery: [houseImage, officeImage, heroImage]
  }, {
    title: t('gallery.project4.title'),
    image: houseImage,
    description: t('gallery.project4.description'),
    gallery: [houseImage, heroImage, officeImage]
  }, {
    title: t('gallery.project5.title'),
    image: officeImage,
    description: t('gallery.project5.description'),
    gallery: [officeImage, heroImage, houseImage]
  }, {
    title: t('gallery.project6.title'),
    image: officeImage,
    description: t('gallery.project6.description'),
    gallery: [officeImage, houseImage, heroImage]
  }, {
    title: t('gallery.project7.title'),
    image: houseImage,
    description: t('gallery.project7.description'),
    gallery: [houseImage, officeImage, heroImage]
  }, {
    title: t('gallery.project8.title'),
    image: officeImage,
    description: t('gallery.project8.description'),
    gallery: [officeImage, heroImage, houseImage]
  }, {
    title: t('gallery.project9.title'),
    image: houseImage,
    description: t('gallery.project9.description'),
    gallery: [houseImage, heroImage, officeImage]
  }];
  const openModal = (project: any, projectIndex: number) => {
    setSelectedProject({...project, index: projectIndex});
    setIsModalOpen(true);
  };

  const getModalContent = (projectIndex: number) => {
    switch(projectIndex) {
      case 0: // Diseño de casas y apartamentos - Vivienda Multifamiliar San Mateo
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              <strong>UBICACIÓN:</strong> Valle del Cauca, Cali<br /><br />
              El proyecto se desarrolla en un barrio de estrato 3, donde el mayor desafío es ajustarse a un presupuesto limitado sin sacrificar la calidad espacial ni el impacto arquitectónico. La propuesta busca generar una experiencia enriquecedora tanto para los residentes —al habitar y recorrer el edificio— como para los transeúntes que lo observan en su vida cotidiana, despertando asombro y promoviendo una conexión armónica con el entorno urbano.
            </p>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {['/lovable-uploads/a0231876-44ff-404e-89f9-4a16ce9a1136.png', '/lovable-uploads/05b466a7-7e69-4b83-9839-aa10a6b3aba8.png', '/lovable-uploads/8af2e020-6417-42c4-bb4c-8abfdf7a18b7.png', '/lovable-uploads/c4eb8b3b-fcae-40f1-a097-5baf617bbd0e.png', '/lovable-uploads/f85ef43e-c33e-4ea6-9622-71c12f29c5b4.png', '/lovable-uploads/d1188f14-5216-4585-8a90-9c9be22cb36b.png'].map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img src={image} alt={`Vivienda Multifamiliar San Mateo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        );

      case 1: // Diseños comercial, oficina y bodegas
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Contenido próximamente disponible para diseños comerciales, oficinas y bodegas.
            </p>
          </div>
        );

      case 2: // Diseño de planos constructivos - Zona Húmeda – Casa 29, Pance
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              <strong>UBICACIÓN:</strong> Pance, Cali<br /><br />
              Proyecto de zona húmeda que integra elementos naturales con diseño contemporáneo, creando un espacio de relajación y conexión con el entorno.
            </p>
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {['/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png', '/lovable-uploads/bef0e36a-1c35-4020-830b-3c1794f3e047.png', '/lovable-uploads/906e0622-d3f7-49ee-acca-c2c48209433a.png', '/lovable-uploads/a3385894-373f-4f7f-9462-38c2f7779d80.png', '/lovable-uploads/a3163fb2-f351-4b2a-bf34-ce274d784d23.png'].map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img src={image} alt={`Zona Húmeda Casa 29 - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </div>
          </div>
        );

      case 3: // Construcción de casas y apartamentos
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Servicios especializados en construcción de viviendas unifamiliares y multifamiliares con altos estándares de calidad y eficiencia.
            </p>
          </div>
        );

      case 4: // Construcción de L.comercial y bodegas
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Construcción especializada en locales comerciales y bodegas industriales con diseños funcionales y eficientes.
            </p>
          </div>
        );

      case 5: // Coordinación Bim de proyectos
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Coordinación avanzada de proyectos utilizando metodología BIM para optimización de tiempos, costos y calidad constructiva.
            </p>
          </div>
        );

      case 6: // Estructuración de proyectos
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Servicios de estructuración integral de proyectos arquitectónicos y constructivos desde la conceptualización hasta la ejecución.
            </p>
          </div>
        );

      case 7: // Licencia de contratación y consultoría urbana
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Asesoría especializada en trámites de licencias de construcción y consultoría en normatividad urbana y territorial.
            </p>
          </div>
        );

      case 8: // Diseño Parametrico y en Guadua
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
              Diseños innovadores utilizando arquitectura paramétrica y construcción sostenible con guadua como material principal, integrando tecnología y tradición.
            </p>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <p className="text-lg text-construction-gray-dark leading-relaxed">
              Información del proyecto próximamente disponible.
            </p>
          </div>
        );
    }
  };
  return <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            {t('gallery.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, projectIndex) => <Card key={projectIndex} className="overflow-hidden shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h4 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                  {projectTitles[projectIndex]}
                </h4>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <p className="text-construction-gray-dark leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white mt-auto" onClick={() => openModal(project, projectIndex)}>
                  {t('gallery.knowMore')}
                </Button>
              </CardContent>
            </Card>)}
        </div>

        {/* Modal con carrusel */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-construction-dark">
                {selectedProject?.title || 'Proyecto'}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-8">
                {getModalContent(selectedProject.index)}
                
                {/* Botón de contacto */}
                <div className="flex justify-center pt-4">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction" onClick={() => {
                    setIsModalOpen(false);
                    document.getElementById('contactos')?.scrollIntoView({
                      behavior: 'smooth'
                    });
                  }}>
                    {t('gallery.requestQuote')}
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Gallery;