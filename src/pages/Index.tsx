import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Values from "@/components/Values";
import VitrineSection from "@/components/VitrineSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MonteSiteBadge from "@/components/MonteSiteBadge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Values />
        <VitrineSection />
        <Contact />
      </main>
      <Footer />
      <MonteSiteBadge fixed={false} />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
