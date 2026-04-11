import { Navbar } from '@/components/navbar';
import { HeroSlider } from '@/components/hero-slider';
import { AboutSection } from '@/components/about-section';
import { ProductsSection } from '@/components/products-section';
import { DistributorsSection } from '@/components/distributors-section';
import { DealersSection } from '@/components/dealers-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { FloatingContact } from '@/components/floating-contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <DistributorsSection />
      <DealersSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </main>
  );
}
