import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import officeImage from '@/assets/office-construction.jpg';
import houseImage from '@/assets/house-construction.jpg';

const Gallery = () => {
  const projects = [
    {
      title: 'Diseño de oficinas',
      image: officeImage,
      description: 'Espacios de trabajo innovadores y funcionales que inspiran productividad y bienestar.'
    },
    {
      title: 'Diseño y planos de casa',
      image: houseImage,
      description: 'Planos arquitectónicos personalizados que reflejan tu estilo de vida ideal.'
    },
    {
      title: 'Construcción de viviendas',
      image: houseImage,
      description: 'Construcción integral de casas con los más altos estándares de calidad.'
    },
    {
      title: 'Remodelación y adecuación de oficinas',
      image: officeImage,
      description: 'Transformamos espacios corporativos para optimizar funcionalidad y estética.'
    },
    {
      title: 'Remodelación de casas y apartamentos',
      image: houseImage,
      description: 'Renovamos tu hogar con diseño contemporáneo y materiales de primera calidad.'
    },
    {
      title: 'Brasil Ingeniería Estructural',
      image: officeImage,
      description: 'Servicios especializados en ingeniería estructural para proyectos internacionales.'
    }
  ];

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
              className="overflow-hidden shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
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
              <CardContent className="p-6">
                <p className="text-construction-gray-dark leading-relaxed mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Conocer más
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;