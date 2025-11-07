import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-background relative"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Criatividade</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Amor pela infância</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Segurança</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Lelê Pepê
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
            Acessórios infantis seguros, coloridos e funcionais que trazem conforto e alegria para a infância
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Com mais de uma década de dedicação, criamos peças manuais com carinho e qualidade, fazendo parte dos momentos especiais de cada criança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wa.me/5512992500194" target="_blank" rel="noopener noreferrer">
                Entre em contato
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 bg-background/50 hover:bg-primary hover:text-primary-foreground border-primary/60"
              asChild
            >
              <a href="#sobre">
                Conheça nossa história
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
