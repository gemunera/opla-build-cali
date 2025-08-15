import { Building2, Users, Award, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      icon: Building2,
      title: 'Diseño Arquitectónico',
      description: 'Creamos diseños innovadores y funcionales que optimizan cada espacio corporativo.'
    },
    {
      icon: Users,
      title: 'Proyectos Residenciales',
      description: 'Construcción de viviendas modernas y funcionales para familias en Cali.'
    },
    {
      icon: Award,
      title: 'Calidad Garantizada',
      description: 'Utilizamos los mejores materiales y técnicas de construcción del mercado.'
    },
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Cumplimos con los tiempos establecidos en cada proyecto sin comprometer la calidad.'
    }
  ];

  return (
    <section className="py-20 bg-construction-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            Quiénes Somos
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-3xl mx-auto leading-relaxed">
            Con más de 10 años de experiencia en el sector de la construcción, en OPLA nos especializamos 
            en el diseño y construcción de espacios empresariales y residenciales. Hemos desarrollado más de 
            40 proyectos, públicos y privados, incluyendo diseño urbano y estructuración de proyectos en Estados Unidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-gradient-card">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-construction">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-construction-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-construction-gray-dark leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;