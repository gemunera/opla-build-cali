import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto."
    });
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };
  const contactInfo = [{
    icon: MessageCircle,
    title: 'WhatsApp',
    content: '+57 316 2260266',
    href: 'https://wa.me/573162260266'
  }, {
    icon: Phone,
    title: 'Teléfono',
    content: '+57 316 2260266',
    href: 'tel:+573162260266'
  }, {
    icon: Mail,
    title: 'Email',
    content: 'oplaconstruccion@gmail.com',
    href: 'mailto:oplaconstruccion@gmail.com'
  }, {
    icon: MapPin,
    title: 'Dirección',
    content: 'Cra. 9 # 24-46, Cali, Colombia',
    href: 'https://maps.google.com'
  }];
  return <section id="contactos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            Contactos en Cali
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Contáctanos y te ayudaremos a hacerlo realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-dark">
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    Nombre
                  </label>
                  <Input id="nombre" name="nombre" type="text" required value={formData.nombre} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    Teléfono
                  </label>
                  <Input id="telefono" name="telefono" type="tel" required value={formData.telefono} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    Inquietud o mensaje
                  </label>
                  <Textarea id="mensaje" name="mensaje" rows={4} required value={formData.mensaje} onChange={handleInputChange} className="border-construction-gray focus:border-primary" placeholder="Cuéntanos sobre tu proyecto..." />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction" size="lg">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return <Card key={index} className="shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      
                      <div className="flex-1">
                        
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;