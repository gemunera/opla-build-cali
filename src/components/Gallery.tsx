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
  const { t } = useLanguage();

  const projects = [
    {
      title: "Vivienda Multifamiliar San Mateo",
      image: '/lovable-uploads/bd43a32b-90c3-4ad4-a56e-76e6b72ae80e.png',
      description: t('gallery.project1.description'),
      gallery: [
        '/lovable-uploads/a0231876-44ff-404e-89f9-4a16ce9a1136.png',
        '/lovable-uploads/05b466a7-7e69-4b83-9839-aa10a6b3aba8.png',
        '/lovable-uploads/8af2e020-6417-42c4-bb4c-8abfdf7a18b7.png',
        '/lovable-uploads/c4eb8b3b-fcae-40f1-a097-5baf617bbd0e.png',
        '/lovable-uploads/f85ef43e-c33e-4ea6-9622-71c12f29c5b4.png',
        '/lovable-uploads/d1188f14-5216-4585-8a90-9c9be22cb36b.png'
      ]
    },
    {
      title: "Zona Húmeda – Casa 29, Pance",
      image: '/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png',
      description: t('gallery.project2.description'),
      gallery: [
        '/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png',
        '/lovable-uploads/bef0e36a-1c35-4020-830b-3c1794f3e047.png',
        '/lovable-uploads/906e0622-d3f7-49ee-acca-c2c48209433a.png',
        '/lovable-uploads/a3385894-373f-4f7f-9462-38c2f7779d80.png',
        '/lovable-uploads/a3163fb2-f351-4b2a-bf34-ce274d784d23.png'
      ]
    },
    {
      title: t('gallery.project3.title'),
      image: houseImage,
      description: t('gallery.project3.description'),
      gallery: [houseImage, officeImage, heroImage]
    },
    {
      title: t('gallery.project4.title'),
      image: houseImage,
      description: t('gallery.project4.description'),
      gallery: [houseImage, heroImage, officeImage]
    },
    {
      title: t('gallery.project5.title'),
      image: officeImage,
      description: t('gallery.project5.description'),
      gallery: [officeImage, heroImage, houseImage]
    },
    {
      title: t('gallery.project6.title'),
      image: officeImage,
      description: t('gallery.project6.description'),
      gallery: [officeImage, houseImage, heroImage]
    },
    {
      title: t('gallery.project7.title'),
      image: houseImage,
      description: t('gallery.project7.description'),
      gallery: [houseImage, officeImage, heroImage]
    },
    {
      title: t('gallery.project8.title'),
      image: officeImage,
      description: t('gallery.project8.description'),
      gallery: [officeImage, heroImage, houseImage]
    },
    {
      title: t('gallery.project9.title'),
      image: houseImage,
      description: t('gallery.project9.description'),
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
            {t('gallery.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            {t('gallery.subtitle')}
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
                  Diseño de casas y apartamentos
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
                  {t('gallery.knowMore')}
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
                {selectedProject?.title || 'Proyecto'}
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-8">
                {/* Primer proyecto: Vivienda Multifamiliar San Mateo */}
                <div className="space-y-6">
                  <p className="text-lg text-construction-gray-dark leading-relaxed">
                    Proyecto residencial multifamiliar ubicado en San Mateo, caracterizado por su diseño moderno y funcional. Esta obra cuenta con espacios amplios, acabados de alta calidad y una distribución optimizada que maximiza el confort y la funcionalidad para las familias residentes.
                  </p>
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          '/lovable-uploads/a0231876-44ff-404e-89f9-4a16ce9a1136.png',
                          '/lovable-uploads/05b466a7-7e69-4b83-9839-aa10a6b3aba8.png',
                          '/lovable-uploads/8af2e020-6417-42c4-bb4c-8abfdf7a18b7.png',
                          '/lovable-uploads/c4eb8b3b-fcae-40f1-a097-5baf617bbd0e.png',
                          '/lovable-uploads/f85ef43e-c33e-4ea6-9622-71c12f29c5b4.png',
                          '/lovable-uploads/d1188f14-5216-4585-8a90-9c9be22cb36b.png'
                        ].map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Vivienda Multifamiliar San Mateo - Imagen ${index + 1}`}
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
                </div>

                {/* Segundo proyecto: Zona Húmeda de Pance – Casa 29 */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-construction-dark">
                    Zona Húmeda de Pance – Casa 29
                  </h3>
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          '/lovable-uploads/b365ec34-d208-4ea0-b1dc-6915a503ccea.png',
                          '/lovable-uploads/6eadfce8-32d3-48eb-aed2-8b990d1e503c.png',
                          '/lovable-uploads/2f97a21d-a5a5-42ca-8392-94a9a6aab462.png',
                          '/lovable-uploads/d3344449-6ddb-40ef-af52-794a313b4888.png',
                          '/lovable-uploads/612d311e-bccd-4607-801b-70446a3feff5.png'
                        ].map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Zona Húmeda de Pance – Casa 29 - Imagen ${index + 1}`}
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
                </div>

                {/* Tercer proyecto: Zona Húmeda Familia Cifuentes */}
                <div className="space-y-6">
                  <p className="text-lg text-construction-gray-dark leading-relaxed">
                    Proyecto de zona húmeda familiar diseñado con arquitectura contemporánea que integra armoniosamente espacios interiores y exteriores. Esta obra destaca por su diseño de piscina, áreas sociales techadas y un cuidado paisajismo que crea un ambiente de relajación y recreación familiar, maximizando el aprovechamiento de los espacios exteriores.
                  </p>
                  <div className="relative">
                    <Carousel className="w-full">
                      <CarouselContent>
                        {[
                          '/lovable-uploads/e6624fef-2972-4ab4-ae4e-cc63006c8df4.png',
                          '/lovable-uploads/0c441a8a-bd41-41c1-bcf5-8d61093064c1.png',
                          '/lovable-uploads/aa785578-c4f2-4e98-80e6-c3fb65710e87.png',
                          '/lovable-uploads/d814aabc-bc34-469b-8026-cae90d597a60.png',
                          '/lovable-uploads/5014029d-c4e0-45e2-acf2-82b351f619ef.png',
                          '/lovable-uploads/f6fbf69e-186f-482f-8ce1-9f67596a591b.png'
                        ].map((image: string, index: number) => (
                          <CarouselItem key={index}>
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img
                                src={image}
                                alt={`Zona Húmeda Familia Cifuentes - Imagen ${index + 1}`}
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
                </div>

                {/* Descripción detallada */}
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-construction-dark mb-4">
                    {t('gallery.serviceDescription')}
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
                    {t('gallery.requestQuote')}
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