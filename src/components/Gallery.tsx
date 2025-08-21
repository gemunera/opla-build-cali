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
      case 0: // Diseño de casas y apartamentos - Todos los proyectos
        return (
          <div className="space-y-8">
            {/* Primer proyecto: Vivienda Multifamiliar San Mateo */}
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

            {/* Segundo proyecto: Zona Húmeda de Pance – Casa 29 */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-construction-dark">
                Zona Húmeda de Pance – Casa 29
              </h3>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {['/lovable-uploads/b365ec34-d208-4ea0-b1dc-6915a503ccea.png', '/lovable-uploads/6eadfce8-32d3-48eb-aed2-8b990d1e503c.png', '/lovable-uploads/2f97a21d-a5a5-42ca-8392-94a9a6aab462.png', '/lovable-uploads/d3344449-6ddb-40ef-af52-794a313b4888.png', '/lovable-uploads/612d311e-bccd-4607-801b-70446a3feff5.png'].map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={image} alt={`Zona Húmeda de Pance – Casa 29 - Imagen ${index + 1}`} className="w-full h-full object-cover" />
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
                <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                La piscina propone una visión innovadora al reinterpretar la relación entre la vivienda y el entorno selvático. Concebida como un espejo de agua, busca reflejar la caída de las ramas y el movimiento de los árboles, integrándose a través de un diseño de paisajismo sutil y casi oculto. A lo largo del día, los habitantes descubren gradualmente estos matices naturales, generando una conexión viva y cambiante entre la arquitectura y la naturaleza.<br /><br />
                El diseño no solo enfatiza la integración armónica entre agua y vegetación, sino que también ofrece una experiencia sensorial inmersiva que evoca la serenidad, el asombro y la magia de un ambiente selvático. Se trata de un enfoque creativo que convierte el espacio en un lugar de contemplación y descubrimiento constante.
              </p>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {['/lovable-uploads/e6624fef-2972-4ab4-ae4e-cc63006c8df4.png', '/lovable-uploads/0c441a8a-bd41-41c1-bcf5-8d61093064c1.png', '/lovable-uploads/aa785578-c4f2-4e98-80e6-c3fb65710e87.png', '/lovable-uploads/d814aabc-bc34-469b-8026-cae90d597a60.png', '/lovable-uploads/5014029d-c4e0-45e2-acf2-82b351f619ef.png', '/lovable-uploads/f6fbf69e-186f-482f-8ce1-9f67596a591b.png'].map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={image} alt={`Zona Húmeda Familia Cifuentes - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>

            {/* Cuarto proyecto: Diseño zona húmeda las Mercedes */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-construction-dark">
                Zona Húmeda familia Cifuentes
              </h3>
              <p className="text-lg text-construction-gray-dark leading-relaxed">
                 <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                Este proyecto busca equilibrar una visión contemporánea —representada por "la piscina en la casa"— con la esencia de la arquitectura colonial. La propuesta integra la piscina como un elemento protagónico del espacio, al tiempo que rescata los rasgos característicos del estilo colonial: patios centrales, galerías abiertas y el uso de materiales autóctonos.<br /><br />
                El desafío radica en lograr una armonía entre ambas corrientes, conservando la sofisticación y el carácter histórico de la arquitectura colonial, mientras se incorpora la piscina como un recurso estético y funcional de lenguaje actual. El planteamiento respeta las proporciones, los detalles ornamentales y la atmósfera acogedora del estilo colonial, a la vez que convierte la piscina en un espejo de agua que enriquece el entorno, reflejando tanto la naturaleza circundante como los elementos arquitectónicos.
              </p>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {['/lovable-uploads/79b25a4e-c126-491a-9946-c41118b6705f.png', '/lovable-uploads/a88cb4bd-391a-4f98-8db4-9aa824e3774b.png', '/lovable-uploads/34ce2885-b17b-4d7a-8832-8dba07fe545b.png', '/lovable-uploads/7117a904-df7a-4afc-824a-4ab0ca019e5c.png', '/lovable-uploads/19882f85-23ae-419b-9270-826cc50759db.png'].map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={image} alt={`Diseño zona húmeda las Mercedes - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>

            {/* Quinto proyecto: Vivienda Edward Castillo */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-construction-dark">
                Diseño zona húmeda las Mercedes
              </h3>
              <p className="text-lg text-construction-gray-dark leading-relaxed">
                <strong>UBICACIÓN:</strong> Pance; Cali, Colombia<br /><br />
                Se propone una piscina y una zona húmeda concebidas para dar la sensación de haber estado siempre ahí, integrándose de manera orgánica con el entorno. Su diseño se inspira en la naturalidad de la topografía, adoptando formas fluidas que evocan las curvas suaves e impredecibles propias de la perfección de la naturaleza.<br /><br />
                La intención es que el espacio se perciba como una prolongación del paisaje, evitando líneas rígidas o artificiosas y alcanzando una armonía visual que evoque un ambiente natural, atemporal y contemplativo. Este planteamiento refleja los principios de la arquitectura paramétrica generativa, donde el diseño surge en diálogo con la naturaleza y su geometría orgánica.
              </p>
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {['/lovable-uploads/a15298d1-f0f6-4c72-951f-1c30633ee370.png', '/lovable-uploads/0ac60b32-17d3-43b9-a2d2-0c5cca6a555f.png', '/lovable-uploads/310b8617-f29c-44dc-918a-44f3b61d94b4.png', '/lovable-uploads/a429a50a-be25-4f01-a32e-97cc4b72c375.png'].map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={image} alt={`Vivienda Edward Castillo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>

            {/* Sexto proyecto: CAF Alberto Galindo */}
            <div className="space-y-6">
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {['/lovable-uploads/8796140c-01ce-4a46-a8bc-4f7e5e086d85.png', '/lovable-uploads/4ef43303-d16e-4e6c-b369-52f8d253919f.png', '/lovable-uploads/9418429a-c330-44f1-aaf2-bc43ab0f6111.png', '/lovable-uploads/a3552261-6df8-4241-a37c-cd0a0972b3c0.png', '/lovable-uploads/a442d29f-5314-4f86-82e5-c9333f9fc201.png'].map((image: string, index: number) => (
                      <CarouselItem key={index}>
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img src={image} alt={`CAF Alberto Galindo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>
            </div>

            {/* Descripción detallada final */}
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-construction-dark mb-4">
                Vivienda Edward Castillo
              </h3>
              <p className="text-construction-gray-dark leading-relaxed">
                <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                Este proyecto, ubicado en la ciudad de Cali, consiste en un edificio multifamiliar con una propuesta innovadora: dos apartamentos por piso, diseñados como dúplex en los niveles intermedios. Esta decisión surge tras un análisis exhaustivo de las necesidades de la población del sector, conformada principalmente por familias pequeñas que valoran los espacios amplios, cómodos y funcionales.<br /><br />
                El diseño responde de manera eficiente a las servidumbres externas e internas, optimizando las visuales mediante elementos arquitectónicos estratégicamente dispuestos. Esto permite una adecuada separación entre las áreas privadas y los espacios compartidos, garantizando tanto la privacidad como el confort en las actividades cotidianas.<br /><br />
                La propuesta logra un balance entre funcionalidad, estética y una comprensión profunda de las dinámicas familiares propias de esta zona de la ciudad.
              </p>
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