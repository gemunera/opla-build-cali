import { Card, CardContent } from '@/components/ui/card';
import officeImage from '@/assets/office-construction.jpg';
import houseImage from '@/assets/house-construction.jpg';

const Gallery = () => {
  const projects = [
    {
      category: 'Construcción para Empresas',
      projects: [
        {
          image: officeImage,
          title: 'Centro Empresarial ModernoPlex',
          description: 'Moderno edificio corporativo de 8 pisos con espacios de oficina de última generación y tecnología sostenible.'
        },
        {
          image: officeImage,
          title: 'Complejo Industrial TechHub',
          description: 'Instalaciones industriales especializadas con infraestructura tecnológica avanzada para empresas del sector IT.'
        }
      ]
    },
    {
      category: 'Construcción de Viviendas',
      projects: [
        {
          image: houseImage,
          title: 'Conjunto Residencial Vista Verde',
          description: 'Hermoso conjunto de 40 casas con diseño contemporáneo, zonas verdes y espacios recreativos familiares.'
        },
        {
          image: houseImage,
          title: 'Casas Campestres Los Robles',
          description: 'Exclusivas casas campestres con amplios jardines, diseño ecológico y acabados de lujo en zona privilegiada.'
        }
      ]
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

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-bold text-construction-dark mb-8 pl-4 border-l-4 border-primary">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
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
                      <p className="text-construction-gray-dark leading-relaxed">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;