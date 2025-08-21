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
  const projectTitles = ["Diseño de casas y apartamentos", "Diseños comercial, oficina y bodegas", "Diseño de planos constructivos", "Construcción de casas y apartamentos", "Construcción de L.comercial y bodegas", "Coordinación Bim de proyectos", "Estructuración de proyectos", "Licencia de contratación y consultoría urbana", "Diseño Parametrico y en Guadua", "Adecuación de Zona Húmeda – Casa Cifuentes"];
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
  }, {
    title: "Adecuación de Zona Húmeda – Casa Cifuentes",
    image: '/lovable-uploads/11a04318-e224-41a5-a617-6cb431fae3da.png',
    description: "Proyecto que busca generar un equilibrio entre una visión contemporánea y la esencia clásica de una vivienda colonial.",
    gallery: [
      '/lovable-uploads/11a04318-e224-41a5-a617-6cb431fae3da.png',
      '/lovable-uploads/541f8ffc-309f-481f-9f62-2b96ebb3a219.png',
      '/lovable-uploads/e22ccf67-445b-466b-9820-4e157f01afe7.png',
      '/lovable-uploads/78c33503-fda1-416e-906f-378a63da7813.png',
      '/lovable-uploads/5a89946d-1216-4323-bca2-7e431be3bb94.png',
      '/lovable-uploads/dea26742-d744-49c2-9abc-8494d1ead752.png'
    ]
  }];
  const openModal = (project: any, index: number) => {
    setSelectedProject({ ...project, index });
    setIsModalOpen(true);
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
            
            {selectedProject && <div className="space-y-8">
                {/* Contenido específico por proyecto */}
                {selectedProject.index === 0 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      <strong>UBICACIÓN:</strong> Valle del Cauca, Cali<br /><br />
                      El proyecto se desarrolla en un barrio de estrato 3, donde el mayor desafío es ajustarse a un presupuesto limitado sin sacrificar la calidad espacial ni el impacto arquitectónico. La propuesta busca generar una experiencia enriquecedora tanto para los residentes —al habitar y recorrer el edificio— como para los transeúntes que lo observan en su vida cotidiana, despertando asombro y promoviendo una conexión armónica with el entorno urbano.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 1 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      <strong>UBICACIÓN:</strong> Pance, Cali<br /><br />
                      Proyecto de zona húmeda en Pance que integra elementos naturales con diseño contemporáneo. La propuesta busca crear una experiencia inmersiva que conecte con el entorno natural del sector.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 2 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Diseño de planos constructivos que integran innovación técnica con funcionalidad práctica. Nuestros planos detallan cada aspecto del proyecto asegurando una construcción eficiente y de calidad.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 3 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Construcción de casas y apartamentos que combinan calidad, funcionalidad y diseño estético. Cada proyecto se desarrolla con materiales de primera calidad y técnicas constructivas modernas.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 4 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Construcción de locales comerciales y bodegas diseñados para maximizar la funcionalidad y eficiencia operativa. Espacios optimizados para diferentes tipos de negocio.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 5 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Coordinación BIM de proyectos utilizando tecnología de modelado de información de construcción para optimizar el proceso de diseño y construcción, reduciendo errores y mejorando la eficiencia.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 6 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Estructuración de proyectos con análisis detallado de carga, diseño de cimentaciones y sistemas estructurales que garantizan la seguridad y durabilidad de la construcción.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 7 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      Licencias de contratación y consultoría urbana, gestionando todos los permisos y trámites necesarios para el desarrollo de proyectos constructivos, cumpliendo con las normativas locales.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 8 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                      Diseño paramétrico y en Guadua que aprovecha las propiedades únicas de este material sostenible. La guadua ofrece resistencia, flexibilidad y belleza natural, creando estructuras innovadoras y ecológicamente responsables.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

                {selectedProject.index === 9 && (
                  <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                      Este proyecto busca generar un equilibrio entre una visión contemporánea —simbolizada en "la piscina en la casa"— y la esencia clásica de una vivienda colonial. La propuesta integra la piscina como un componente esencial del espacio, combinándola con los rasgos distintivos del estilo colonial, como los patios centrales, las galerías abiertas y el uso de materiales autóctonos.<br /><br />
                      El reto consiste en lograr una armonía entre ambas corrientes, conservando la sofisticación y el carácter histórico de la arquitectura colonial, mientras se incorpora la piscina como un recurso estético y funcional de lenguaje actual. El diseño respeta las proporciones, los detalles ornamentales y la atmósfera acogedora del estilo colonial, pero a su vez transforma la piscina en un espejo de agua que enriquece el entorno, reflejando tanto la naturaleza circundante como los elementos arquitectónicos.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => (
                            <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>
                )}

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
              </div>}
          </DialogContent>
        </Dialog>
      </div>
    </section>;
};
export default Gallery;