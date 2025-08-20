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
      title: t('gallery.project1.title'),
      image: houseImage,
      description: t('gallery.project1.description'),
      gallery: [houseImage, heroImage, officeImage]
    },
    {
      title: t('gallery.project2.title'),
      image: officeImage,
      description: t('gallery.project2.description'),
      gallery: [officeImage, houseImage, heroImage]
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
                Vivienda Multifamiliar San Mateo
              </DialogTitle>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                {/* Carrusel de imágenes */}
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