import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyChooseUs from '@/components/WhyChooseUs';
import Metrics from '@/components/Metrics';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InstagramButton from '@/components/InstagramButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Metrics />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <InstagramButton />
    </div>
  );
};

export default Index;