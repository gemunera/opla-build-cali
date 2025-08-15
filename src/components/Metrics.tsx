import { useState, useEffect } from 'react';
import { Building, Ruler, CheckCircle, Users } from 'lucide-react';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: Building,
      value: 100,
      suffix: '+',
      label: 'Proyectos Realizados',
      description: 'Proyectos exitosos en construcción empresarial y residencial'
    },
    {
      icon: Ruler,
      value: 50000,
      suffix: 'm²',
      label: 'Área Total Construida',
      description: 'Metros cuadrados de construcción de alta calidad'
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: '%',
      label: 'Cobertura Completa',
      description: 'Cobertura total en todas las fases del proyecto'
    },
    {
      icon: Users,
      value: 300,
      suffix: '+',
      label: 'Clientes Satisfechos',
      description: 'Familias y empresas que confían en nosotros'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;
      const endValue = end;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section id="metrics-section" className="py-20 bg-construction-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            Nuestros números hablan
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            La confianza de nuestros clientes se refleja en estos resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-lg shadow-card-custom hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-construction">
                  <Icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-construction-dark mb-2">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <h3 className="text-xl font-semibold text-construction-dark mb-3">
                  {metric.label}
                </h3>
                <p className="text-construction-gray-dark leading-relaxed">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;