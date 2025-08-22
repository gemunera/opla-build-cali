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
  const projectTitles = ["Diseño de casas y apartamentos", "Diseños comercial, oficina y bodegas", "Construcción de casas y apartamentos", "Construcción de L.comercial y bodegas", "Coordinación Bim de proyectos", "Estructuración de proyectos", "Licencia de contratación y consultoría urbana", "Diseño Parametrico y en Guadua"];
  const projects = [{
    title: "Vivienda Multifamiliar San Mateo",
    image: '/lovable-uploads/2c99befe-7fbb-41fc-8c29-6d4cf3a8c746.png',
    description: t('gallery.project1.description'),
    gallery: ['/lovable-uploads/a0231876-44ff-404e-89f9-4a16ce9a1136.png', '/lovable-uploads/05b466a7-7e69-4b83-9839-aa10a6b3aba8.png', '/lovable-uploads/8af2e020-6417-42c4-bb4c-8abfdf7a18b7.png', '/lovable-uploads/c4eb8b3b-fcae-40f1-a097-5baf617bbd0e.png', '/lovable-uploads/f85ef43e-c33e-4ea6-9622-71c12f29c5b4.png', '/lovable-uploads/d1188f14-5216-4585-8a90-9c9be22cb36b.png']
  }, {
    title: "Zona Húmeda – Casa 29, Pance",
    image: '/lovable-uploads/f86c3e6b-f148-4229-934f-75ff872a6baa.png',
    description: t('gallery.project2.description'),
    gallery: ['/lovable-uploads/5d08e8df-3e3a-4cca-b61d-b137b2ea2dc1.png', '/lovable-uploads/bef0e36a-1c35-4020-830b-3c1794f3e047.png', '/lovable-uploads/906e0622-d3f7-49ee-acca-c2c48209433a.png', '/lovable-uploads/a3385894-373f-4f7f-9462-38c2f7779d80.png', '/lovable-uploads/a3163fb2-f351-4b2a-bf34-ce274d784d23.png']
  }, {
    title: t('gallery.project4.title'),
    image: '/lovable-uploads/05fc68d0-bea2-4165-92c4-192dedbbcf82.png',
    description: t('gallery.project4.description'),
    gallery: ['/lovable-uploads/05fc68d0-bea2-4165-92c4-192dedbbcf82.png', heroImage, officeImage]
  }, {
    title: t('gallery.project5.title'),
    image: '/lovable-uploads/87e6fd68-ce7f-43e5-ab9a-ed039b31907f.png',
    description: t('gallery.project5.description'),
    gallery: [officeImage, heroImage, houseImage]
  }, {
    title: t('gallery.project6.title'),
    image: '/lovable-uploads/12956598-345d-44a8-95ca-9021c916fa36.png',
    description: t('gallery.project6.description'),
    gallery: [officeImage, houseImage, heroImage]
  }, {
    title: t('gallery.project7.title'),
    image: '/lovable-uploads/67a3798b-622d-4e20-977c-958189bce540.png',
    description: t('gallery.project7.description'),
    gallery: ['/lovable-uploads/67a3798b-622d-4e20-977c-958189bce540.png', '/lovable-uploads/2ac6802f-6cc5-41a1-a541-9365627518b0.png', '/lovable-uploads/37bb20a0-95c0-4b0d-9980-d2f0c3db9272.png', '/lovable-uploads/581ac8c7-d1c0-4691-8a06-eef94244f682.png']
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
  const openModal = (project: any, index: number) => {
    setSelectedProject({
      ...project,
      index
    });
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
              
            </DialogHeader>
            
            {selectedProject && <div className="space-y-8">
                {/* Contenido específico por proyecto */}
                {selectedProject.index === 0 && <div className="space-y-8">
                    {/* Vivienda Multifamiliar San Mateo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Vivienda Multifamiliar San Mateo</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Valle del Cauca, Cali<br /><br />
                        El proyecto se desarrolla en un barrio de estrato 3, donde el mayor desafío es ajustarse a un presupuesto limitado sin sacrificar la calidad espacial ni el impacto arquitectónico. La propuesta busca generar una experiencia enriquecedora tanto para los residentes —al habitar y recorrer el edificio— como para los transeúntes que lo observan en su vida cotidiana, despertando asombro y promoviendo una conexión armónica with el entorno urbano.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedProject.gallery.map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Adecuación de Zona Húmeda – Casa Cifuentes */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Adecuación de Zona Húmeda – Casa Cifuentes</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                        Este proyecto busca generar un equilibrio entre una visión contemporánea —simbolizada en "la piscina en la casa"— y la esencia clásica de una vivienda colonial. La propuesta integra la piscina como un componente esencial del espacio, combinándola con los rasgos distintivos del estilo colonial, como los patios centrales, las galerías abiertas y el uso de materiales autóctonos.<br /><br />
                        El reto consiste en lograr una armonía entre ambas corrientes, conservando la sofisticación y el carácter histórico de la arquitectura colonial, mientras se incorpora la piscina como un recurso estético y funcional de lenguaje actual. El diseño respeta las proporciones, los detalles ornamentales y la atmósfera acogedora del estilo colonial, pero a su vez transforma la piscina en un espejo de agua que enriquece el entorno, reflejando tanto la naturaleza circundante como los elementos arquitectónicos.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/11a04318-e224-41a5-a617-6cb431fae3da.png', '/lovable-uploads/541f8ffc-309f-481f-9f62-2b96ebb3a219.png', '/lovable-uploads/e22ccf67-445b-466b-9820-4e157f01afe7.png', '/lovable-uploads/78c33503-fda1-416e-906f-378a63da7813.png', '/lovable-uploads/5a89946d-1216-4323-bca2-7e431be3bb94.png', '/lovable-uploads/dea26742-d744-49c2-9abc-8494d1ead752.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Casa Cifuentes - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Zona Húmeda – Casa 29 Pance */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Zona Húmeda – Casa 29 Pance</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Pance, Cali, Colombia<br /><br />
                        Se proyecta una piscina y una zona húmeda concebidas para transmitir la sensación de haber existido siempre en el lugar, integrándose de manera orgánica con el entorno. El diseño se inspira en la topografía natural, adoptando formas fluidas que evocan las curvas suaves e impredecibles de la naturaleza.<br /><br />
                        La intención es que el espacio se perciba como una extensión del paisaje, evitando líneas rígidas o artificiosas y logrando una armonía visual que evoque un ambiente natural, atemporal y contemplativo. Esta propuesta refleja los principios de la arquitectura paramétrica generativa, donde el diseño emerge en diálogo con la naturaleza y su geometría orgánica.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/a360cff6-773e-4ed4-aa19-852e2b143ebc.png', '/lovable-uploads/e4e19ff1-9614-4e3b-8ac0-ab06aced84e8.png', '/lovable-uploads/202a1a46-2d96-4b13-a476-b355ac8ec421.png', '/lovable-uploads/830908ed-8c9f-4600-820e-f7b2976b8189.png', '/lovable-uploads/1a9ee01b-d0e2-4ade-9cc7-7504b70bab57.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Casa 29 Pance - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Adecuación de Zona Húmeda – Casa 29 Las Mercedes */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Adecuación de Zona Húmeda – Casa 29 Las Mercedes</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                        La piscina plantea una propuesta disruptiva al reinterpretar la relación entre el entorno selvático y la vivienda. Concebida como un espejo de agua, busca reflejar la caída de las ramas y el movimiento de los árboles, incorporando un enfoque de paisajismo sutil y oculto.<br /><br />
                        A lo largo del día, los habitantes descubren gradualmente estos matices naturales, generando una conexión dinámica entre la arquitectura y el paisaje. El diseño no solo resalta la integración del agua y la vegetación, sino que también ofrece una experiencia sensorial inmersiva que evoca la serenidad y el asombro de un ambiente selvático.<br /><br />
                        Se trata de un enfoque creativo que transforma el espacio en un lugar de contemplación y descubrimiento constante.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/8ab54efe-26c6-4f98-8084-a68a7e0b6b65.png', '/lovable-uploads/aa9b863b-8778-4493-b53f-abfccf49f5bd.png', '/lovable-uploads/aa8b0560-8d61-4553-bb32-5ceb6569f8ee.png', '/lovable-uploads/0cb224bb-a1ae-408f-b627-8b333b58055f.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Casa 29 Las Mercedes - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Vivienda Multifamiliar Edward Castillo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Vivienda Multifamiliar Edward Castillo</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        Este proyecto, desarrollado en la ciudad de Cali, consiste en un edificio multifamiliar con una propuesta innovadora: dos apartamentos por piso, diseñados como dúplex en los niveles intermedios. Esta decisión arquitectónica surge tras un análisis exhaustivo de las necesidades de la población del sector, conformada principalmente por familias pequeñas que, sin embargo, valoran espacios amplios y funcionales.<br /><br />
                        El diseño responde de manera eficiente a las servidumbres externas e internas, optimizando las visuales mediante elementos arquitectónicos estratégicamente ubicados. Esto permite una adecuada separación entre las áreas privadas y los espacios compartidos, garantizando privacidad y confort en la vida cotidiana.<br /><br />
                        La propuesta combina funcionalidad, estética y una comprensión profunda de las dinámicas familiares propias de esta zona de la ciudad, logrando un proyecto equilibrado y contemporáneo.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/232772ab-c02b-477c-8269-27b51820fc27.png', '/lovable-uploads/63438572-4677-4b74-a3b3-01f19633eb2a.png', '/lovable-uploads/078d2bac-0b7a-471c-bf27-95690c4fb917.png', '/lovable-uploads/b55e96b5-75bf-463d-9d58-e0dbc5904227.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Vivienda Multifamiliar Edward Castillo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 1 && <div className="space-y-8">
                    {/* Zona Húmeda – Casa 29, Pance */}
                    <div className="space-y-6">
                      
                      
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {selectedProject.gallery.map((image: string, index: number) => <CarouselItem key={index}>
                                
                              </CarouselItem>)}
                          </CarouselContent>
                          
                          
                        </Carousel>
                      </div>
                    </div>

                    {/* Renovación Urbana de la Galería Santa Elena */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Renovación Urbana de la Galería Santa Elena + Edificio Complementario de Comercio y Servicios</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Valle del Cauca, Cali<br /><br />
                        Esta propuesta plantea la revitalización de la Galería Santa Elena, el principal centro de acopio de alimentos de la ciudad de Cali y un nodo estratégico para la distribución hacia otras galerías de escala barrial. En la actualidad, este importante espacio se encuentra en un contexto de abandono, rodeado de comercio informal, problemáticas sociales como el microtráfico y un marcado deterioro de su valor patrimonial.<br /><br />
                        La intervención cobra aún mayor relevancia al tratarse de una obra emblemática diseñada en los años 40 por el arquitecto Félix Candela, cuyo legado arquitectónico merece ser recuperado y potenciado en beneficio de la ciudad y sus habitantes.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/0073a662-9d17-4579-8f72-edb56d676b70.png', '/lovable-uploads/5c6a0f1e-f287-4a47-9691-5220b46c30b5.png', '/lovable-uploads/ef8139be-5e45-4ad6-a9e8-fc7cc2de7d60.png', '/lovable-uploads/2f683ba5-f121-4938-b205-12035dc8299b.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Renovación Urbana Galería Santa Elena - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Proyecto Comercial Trunchet, París */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Proyecto Comercial Trunchet, París + Mobiliario</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> París, Francia<br /><br />
                        El espacio juega un papel fundamental al articular el diseño arquitectónico con la identidad de la marca. El desafío consiste en lograr que el concepto de la marca se exprese en cada detalle, desde su integración en el contexto urbano hasta la experiencia interior del local.<br /><br />
                        La propuesta busca generar una vivencia inmersiva, en la que tanto los productos como el mobiliario personalizado refuercen el relato que se desea transmitir, creando así una conexión emocional y sensorial con los usuarios. Bajo este enfoque narrativo, el espacio trasciende la idea de ser únicamente un lugar de transacción comercial y se convierte en una extensión física de la marca, donde cada elemento —desde la entrada hasta la disposición de los productos— contribuye a una coherencia visual y experiencial única.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/5679bbf1-4b1a-4e9b-a724-1a11bdc3298c.png', '/lovable-uploads/d5691c69-3275-4cc8-a938-1521d1c96c96.png', '/lovable-uploads/7f51c728-d321-4986-8877-c93a49ed8d60.png', '/lovable-uploads/c347f207-3832-4f67-8e0d-c741d829ec37.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Proyecto Comercial Trunchet París - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Proyecto Comercial – Bodegas de San Nicolás */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Proyecto Comercial – Bodegas de San Nicolás</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        Las bodegas comerciales se han consolidado como una alternativa en crecimiento dentro del sector inmobiliario gracias a su versatilidad, tanto en el ámbito normativo como en el constructivo. Estos proyectos permiten una dinámica comercial mixta, ofreciendo flexibilidad para distintos tipos de negocios y ampliando así sus posibilidades de uso.<br /><br />
                        La clave de la propuesta radica en priorizar la funcionalidad y mantener una inversión inicial reducida, lo que se traduce en un alto retorno de utilidades una vez en operación. Este enfoque convierte a las bodegas comerciales en una opción atractiva tanto para inversionistas como para empresas, al adaptarse a diversas necesidades comerciales y optimizar los costos de desarrollo.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/7199d69c-0a0d-4136-8760-f836ef2837e5.png', '/lovable-uploads/0f4b0a1b-e60f-4e5a-8bc9-a80c71847176.png', '/lovable-uploads/47a706cc-3cad-4f1e-8772-e98bec7d17ea.png', '/lovable-uploads/ed6b849a-fd20-499a-9f58-c752ff8312ac.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Bodegas de San Nicolás - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* CAF Alberto Galindo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">CAF Alberto Galindo</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Unidad Deportiva Alberto Galindo, Cali, Colombia<br /><br />
                        Este proyecto constituye una propuesta arquitectónica destinada a enriquecer el complejo deportivo Alberto Galindo mediante la incorporación de un nuevo edificio, ubicado estratégicamente entre el velódromo y el Coliseo del Pueblo.<br /><br />
                        La edificación, concebida con una forma en "H", se integra de manera armónica al entorno, generando múltiples accesos que fortalecen la conectividad del complejo. Dos de estos accesos, jerárquicos en su diseño, estructuran un flujo continuo de sur a norte, enmarcando y realzando a los edificios adyacentes, al tiempo que refuerzan la identidad del conjunto deportivo.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/356b164b-2492-4e83-9ccc-9fc62cce64e1.png', '/lovable-uploads/2c12a308-7ddd-4f69-af83-a27b8c7da66c.png', '/lovable-uploads/c0d1c364-048c-41bd-9e25-02f3c31ec72b.png', '/lovable-uploads/01987550-a0bb-4660-aef2-b95183f8e860.png', '/lovable-uploads/b2807da5-df39-418e-98ea-1c164324d720.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`CAF Alberto Galindo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 2 && <div className="space-y-6">
                    {/* Proyecto de adecuación de zona húmeda Alto Pance */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Proyecto de adecuación de zona húmeda Alto Pance</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Pance, Valle del Cauca – Colombia<br /><br />
                        Este proyecto parte de un análisis cuidadoso de las estructuras hidrosanitarias, eléctricas y arquitectónicas existentes en la vivienda, con el fin de integrarlas de manera armónica al nuevo diseño. La propuesta prioriza el aprovechamiento del paisaje y de las zonas verdes subutilizadas, que poseen un gran potencial para transformarse en escenarios de disfrute y bienestar.<br /><br />
                        La piscina se plantea como el elemento jerárquico del conjunto, orientada hacia el horizonte de la ciudad. Más que un espacio recreativo, se concibe como un lugar de contemplación y encuentro, donde la topografía se convierte en aliada para generar amplitud visual y un diálogo constante con el entorno. El resultado es un balance entre las áreas de permanencia y las visuales, ofreciendo una experiencia que invita tanto a la relajación como a la conexión profunda con el paisaje.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/ba15f946-8078-4955-9ccb-427386555d44.png', '/lovable-uploads/70b7fb32-1ccc-405b-8979-08b3750a4a3d.png', '/lovable-uploads/61b2cfa3-095a-4ad9-8103-921adbb37ad2.png', '/lovable-uploads/fc2bcc19-7543-455a-871a-52eef719c2d0.png', '/lovable-uploads/a093f147-f279-46a2-b6f5-2b184b295471.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Alto Pance - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Adecuación Cocina Jiménez Carrillo */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Adecuación Cocina Jiménez Carrillo</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Barranquilla, Colombia<br /><br />
                        En la vibrante ciudad de Barranquilla, esta vivienda fue renovada a través de una cuidadosa adecuación que refleja y potencia la dinámica familiar de sus residentes. Cada detalle del diseño fue personalizado para responder a sus necesidades, con especial énfasis en la integración del amplio y hermoso patio, convertido en el verdadero corazón del hogar.<br /><br />
                        Este espacio al aire libre, perfectamente adaptado al clima cálido de la región, invita a disfrutar momentos de convivencia y relajación, logrando un equilibrio armónico entre funcionalidad, estética y confort.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/a271a4de-04d6-4d53-9b35-f2febf506fce.png', '/lovable-uploads/bb447689-3c7e-4588-a24f-4e816fd94840.png', '/lovable-uploads/1de09e36-5961-475b-90e6-99ea2b494383.png', '/lovable-uploads/b3673c7c-76ce-40e3-b98b-bc07e39b0671.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Adecuación Cocina Jiménez Carrillo - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 3 && <div className="space-y-8">
                    {/* Proyecto Comercial – Bodegas de San Nicolás */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Proyecto Comercial – Bodegas de San Nicolás</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        Las bodegas comerciales están adquiriendo cada vez mayor relevancia en el sector de inversión inmobiliaria gracias a su versatilidad, tanto en el ámbito normativo como en el constructivo. Estos proyectos permiten una dinámica comercial mixta, brindando flexibilidad para diferentes tipos de negocios y ampliando sus posibilidades de uso.<br /><br />
                        La clave de esta propuesta radica en priorizar la funcionalidad y mantener una inversión inicial reducida, lo que se traduce en un alto retorno una vez que las bodegas entran en operación. Este enfoque convierte a las bodegas comerciales en una alternativa altamente atractiva tanto para inversionistas como para empresas, al adaptarse a diversas necesidades y optimizar los costos de desarrollo.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/060c3f23-b2bb-471f-b5f2-7854445da081.png', '/lovable-uploads/754f5784-ba20-4256-85ca-8fbdbd4ed07d.png', '/lovable-uploads/8ab7bae7-2e0b-4b80-8eff-637381a3ae92.png', '/lovable-uploads/9bd4b9e4-0686-4c2a-bf8f-b9571cd754fd.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Bodegas de San Nicolás - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>

                    {/* Adecuación de Local Comercial "Doble Dosis de Licor" */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Adecuación de Local Comercial "Doble Dosis de Licor"</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        El proyecto se centra en la rehabilitación de un local comercial en estado de deterioro, ubicado en una zona de alto tránsito y con un potencial significativo para el negocio de expendio de licores. La propuesta busca transformar este espacio en un ambiente acogedor y atractivo, capaz de captar la atención de una clientela diversa y fomentar un entorno social dinámico y vibrante.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/e8eeb114-2dbe-4633-8e48-d51aead7a491.png', '/lovable-uploads/7f7b92ac-9919-4dab-a672-711c7ee1037e.png', '/lovable-uploads/8e2bc59a-0ddd-4a90-8fb9-74045be09e8b.png', '/lovable-uploads/aa19cc32-7322-45b0-bf1b-8be72b9ad09d.png', '/lovable-uploads/7a2352ce-a4bb-430a-834a-944a3e2189da.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Doble Dosis de Licor - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 4 && <div className="space-y-8">
                    {/* Coordinación de Diseños BIM para Celsia – Endress and Hauser */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Coordinación de Diseños BIM para Celsia – Endress and Hauser</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        Fuimos invitados a participar en este destacado proyecto, reconocido por su alto impacto económico y social en el Valle del Cauca. Nuestra labor principal consistió en la coordinación de las instalaciones eléctricas en conjunto con todos los sistemas MEP (mecánicos, eléctricos y de plomería), un desafío técnico que asumimos con total compromiso y profesionalismo.<br /><br />
                        El objetivo fundamental del desarrollo fue disminuir los riesgos durante la etapa de construcción, a través de una planificación detallada que integrara cada sistema de manera armónica y eficiente. Este enfoque no solo garantizó la seguridad en la ejecución de la obra, sino que también optimizó el uso de recursos, redujo posibles interferencias técnicas y minimizó retrasos en el cronograma.<br /><br />
                        Adicionalmente, nuestra labor incluyó la supervisión de la correcta implementación de los sistemas, asegurando el cumplimiento de los estándares de calidad, la normativa vigente y las expectativas del cliente.<br /><br />
                        Este proyecto constituye una valiosa contribución al desarrollo sostenible y a la infraestructura del Valle, consolidándose como un ejemplo de cómo la colaboración y la excelencia técnica pueden generar un impacto positivo y duradero en la región.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/70553293-d7ba-445e-91ed-79750a89b943.png', '/lovable-uploads/819e945a-844c-499b-a2f3-3ce37f640b71.png', '/lovable-uploads/4c814a1b-cd3e-45f4-a854-65ce2987ec22.png', '/lovable-uploads/e093ef25-8c50-457d-8acd-1331dfc09608.png', '/lovable-uploads/75c5b081-1dd8-4eea-824a-bf83d92e320e.png', '/lovable-uploads/3eb2e96a-f96b-4b3a-a898-21445fb18605.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Coordinación BIM Celsia - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 5 && <div className="space-y-8">
                    {/* Torres Lirios del Limonar */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Torres Lirios del Limonar</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Valle del Cauca, Cali<br />
                        <strong>OBJETIVO DEL PROYECTO:</strong> Inversión Multifamiliar<br />
                        <strong>CLIENTE:</strong> Privado<br /><br />
                        El proyecto plantea un aprovechamiento óptimo del lote, procurando preservar al máximo sus zonas verdes. A través de una configuración orgánica, la propuesta integra múltiples patios internos y externos dentro de la torre, lo que favorece la ventilación cruzada y la oxigenación de todos los espacios.<br /><br />
                        De esta manera, se busca ofrecer a los residentes una experiencia de vida en la ciudad rodeada de vegetación, generando una unidad habitacional fresca, sostenible y en estrecha conexión con la naturaleza.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/282f5022-29f6-4f0e-8205-87a9e9e1589d.png', '/lovable-uploads/5eab3187-fd25-4748-8cca-c88576560201.png', '/lovable-uploads/4f083e4d-903a-4a96-94ca-ff289036f9d7.png', '/lovable-uploads/ceb107c0-c93d-4658-9325-8eaa9c990e1a.png', '/lovable-uploads/2566bcc5-935d-4829-a111-b44d35d190e0.png', '/lovable-uploads/817c9531-9038-4448-82cb-e4fb67390f92.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Torres Lirios del Limonar - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 6 && <div className="space-y-8">
                    {/* Bodegas San Luis Gonzaga */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-bold text-construction-dark">Bodegas San Luis Gonzaga</h3>
                      <p className="text-lg text-construction-gray-dark leading-relaxed">
                        <strong>UBICACIÓN:</strong> Cali, Colombia<br /><br />
                        Este proyecto representa un reto singular debido a la complejidad de la normativa urbana y legal asociada, convirtiéndose en uno de los primeros grandes desafíos para nuestra oficina. En esta ocasión, asumimos el rol de consultores en normativa urbana, poniendo en práctica la experiencia y el conocimiento especializado de nuestro equipo.<br /><br />
                        Nuestro objetivo principal fue diseñar una estrategia sólida que garantizara la continuidad del uso comercial del inmueble, asegurando su funcionamiento bajo el cumplimiento estricto de las regulaciones vigentes. El proceso contempló la gestión y reconocimiento ante el DAPM y la Curaduría, respondiendo de manera precisa a las exigencias del contexto urbano.<br /><br />
                        Este proyecto reafirma nuestra capacidad para transformar los retos normativos en soluciones viables y sostenibles, aportando seguridad jurídica y funcionalidad a las iniciativas de nuestros clientes.
                      </p>
                      <div className="relative">
                        <Carousel className="w-full">
                          <CarouselContent>
                            {['/lovable-uploads/2ac6802f-6cc5-41a1-a541-9365627518b0.png', '/lovable-uploads/37bb20a0-95c0-4b0d-9980-d2f0c3db9272.png', '/lovable-uploads/581ac8c7-d1c0-4691-8a06-eef94244f682.png'].map((image: string, index: number) => <CarouselItem key={index}>
                                <div className="aspect-video overflow-hidden rounded-lg">
                                  <img src={image} alt={`Bodegas San Luis Gonzaga - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                              </CarouselItem>)}
                          </CarouselContent>
                          <CarouselPrevious className="left-4" />
                          <CarouselNext className="right-4" />
                        </Carousel>
                      </div>
                    </div>
                  </div>}

                {selectedProject.index === 7 && <div className="space-y-6">
                    <p className="text-lg text-construction-gray-dark leading-relaxed">
                      <strong>UBICACIÓN:</strong> Jamundí, Colombia<br /><br />
                      Diseño paramétrico y en Guadua que aprovecha las propiedades únicas de este material sostenible. La guadua ofrece resistencia, flexibilidad y belleza natural, creando estructuras innovadoras y ecológicamente responsables.
                    </p>
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {selectedProject.gallery.map((image: string, index: number) => <CarouselItem key={index}>
                              <div className="aspect-video overflow-hidden rounded-lg">
                                <img src={image} alt={`${selectedProject.title} - Imagen ${index + 1}`} className="w-full h-full object-cover" />
                              </div>
                            </CarouselItem>)}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    </div>
                  </div>}

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