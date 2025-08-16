import { Shield, Clock, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Utilizamos materiales de primera calidad y seguimos estrictos controles de calidad en cada etapa del proyecto.'
    },
    {
      icon: Clock,
      title: 'Experiencia Comprobada',
      description: 'Más de 10 años construyendo proyectos exitosos para empresas y familias en Cali y sus alrededores.'
    },
    {
      icon: Users,
      title: 'Cumplimiento Total',
      description: 'Entregamos todos nuestros proyectos en los tiempos acordados, respetando presupuestos y especificaciones.'
    },
    {
      icon: Award,
      title: 'Equipo Profesional',
      description: 'Contamos con profesionales con más de 15 años de experiencia en el área de la construcción, creando proyectos exitosos para empresas y familias en Cali y sus alrededores.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir OPLA?
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Somos tu mejor opción en construcción por nuestra dedicación a la excelencia, 
            innovación y compromiso con cada cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="flex items-start space-x-6 p-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-construction">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;