import { useState, useEffect } from 'react';
import { Building, Ruler, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Metrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  const metrics = [
    {
      icon: Building,
      value: 100,
      suffix: '+',
      label: t('metrics.projects'),
      description: t('metrics.projectsDescription')
    },
    {
      icon: Ruler,
      value: 50000,
      suffix: 'm²',
      label: t('metrics.area'),
      description: t('metrics.areaDescription')
    },
    {
      icon: CheckCircle,
      value: 100,
      suffix: '%',
      label: t('metrics.coverage'),
      description: t('metrics.coverageDescription')
    },
    {
      icon: Users,
      value: 300,
      suffix: '+',
      label: t('metrics.clients'),
      description: t('metrics.clientsDescription')
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.disconnect(); // Desconecta después de activarse una vez
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('metrics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) {
        setCount(0);
        return;
      }

      let animationFrameId: number;
      let startTime: number;
      const startValue = 0;
      const endValue = end;
      let isAnimating = true;

      const updateCount = (timestamp: number) => {
        if (!isAnimating) return;
        
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
        
        setCount(currentCount);

        if (progress < 1 && isAnimating) {
          animationFrameId = requestAnimationFrame(updateCount);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);

      return () => {
        isAnimating = false;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [isVisible, end, duration]);

    return <span>{count.toLocaleString()}{suffix}</span>;
  };

  return (
    <section id="metrics-section" className="py-20 bg-construction-gray-light">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-construction-dark mb-4">
            {t('metrics.title')}
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-construction-gray-dark max-w-2xl mx-auto">
            {t('metrics.subtitle')}
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