import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { WhatsAppIcon } from '@/components/ui/whatsapp-icon';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from "@/integrations/supabase/client";
const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' });
  
  // Generate new captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1, num2, answer: '' });
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);
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
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Verify captcha
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer) !== correctAnswer) {
      toast({
        title: t('contact.verificationError'),
        description: t('contact.captchaError'),
        variant: 'destructive',
      });
      return;
    }

    const { error } = await supabase.functions.invoke('send-contact-email', {
      body: {
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        mensaje: formData.mensaje,
      },
    });

    if (error) {
      console.error('Error enviando correo:', error);
      toast({
        title: t('contact.sendErrorTitle'),
        description: t('contact.sendError'),
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: t('contact.sendSuccessTitle'),
      description: t('contact.sendSuccess'),
    });

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
    
    // Generate new captcha after successful submission
    generateCaptcha();
  };
  const contactInfo = [{
    icon: WhatsAppIcon,
    title: <WhatsAppIcon className="h-5 w-5" />,
    content: '+57 316 2260266',
    href: 'https://web.whatsapp.com/send?phone=573162260266&text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20diseño%20y%20construcción.'
  }, {
    icon: Mail,
    title: 'Email',
    content: 'oplaconstruccion@gmail.com',
    href: 'mailto:oplaconstruccion@gmail.com?subject=Consulta%20sobre%20servicios%20de%20diseño%20y%20construcción&body=Hola,%0D%0A%0D%0AMe%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20diseño%20y%20construcción.%0D%0A%0D%0AGracias.'
  }, {
    icon: MapPin,
    title: 'Dirección',
    content: 'Cra. 9 # 24-46, Cali, Colombia',
    href: 'https://maps.google.com/maps?q=Cra.+9+%23+24-46,+Cali,+Colombia'
  }];
  return <section id="contactos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-dark">
                {t('contact.formTitle')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    {t('contact.name')}
                  </label>
                  <Input id="nombre" name="nombre" type="text" required value={formData.nombre} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    {t('contact.email')}
                  </label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    {t('contact.phone')}
                  </label>
                  <Input id="telefono" name="telefono" type="tel" required value={formData.telefono} onChange={handleInputChange} className="border-construction-gray focus:border-primary" />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-construction-gray-dark mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea id="mensaje" name="mensaje" rows={4} required value={formData.mensaje} onChange={handleInputChange} className="border-construction-gray focus:border-primary" placeholder={t('contact.messagePlaceholder')} />
                </div>
                
                {/* Captcha Anti-Bot */}
                <div className="bg-construction-light p-4 rounded-lg border border-construction-gray">
                  <label className="block text-sm font-medium text-construction-gray-dark mb-2">
                    {t('contact.captcha')} {captcha.num1} + {captcha.num2}?
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      required
                      value={captcha.answer}
                      onChange={(e) => setCaptcha(prev => ({ ...prev, answer: e.target.value }))}
                      className="w-20 border-construction-gray focus:border-primary"
                      placeholder="?"
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={generateCaptcha}
                      className="text-xs"
                    >
                      {t('contact.newCaptcha')}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-construction" size="lg">
                  {t('contact.sendMessage')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de Contacto */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return <a key={index} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-construction-dark mb-1">
                          {typeof info.title === 'string' ? info.title : ''}
                        </h4>
                        <p className="text-construction-gray-dark">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;