import { Button } from "@/components/ui/button";
import { ShoppingBag, Sparkles, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const VitrineSection = () => {
  return (
    <section id="vitrine" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Nossa loja online</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Explore nossa vitrine
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
            Descubra nossa coleção completa de acessórios infantis. Produtos seguros, coloridos e funcionais para deixar o dia a dia das crianças ainda mais especial.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Produtos criativos</h3>
              <p className="text-muted-foreground text-sm">
                Designs exclusivos e coloridos que inspiram a imaginação infantil
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Segurança garantida</h3>
              <p className="text-muted-foreground text-sm">
                Todos os produtos são testados e certificados para uso infantil
              </p>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">Feito com carinho</h3>
              <p className="text-muted-foreground text-sm">
                Cada peça é produzida manualmente com atenção aos detalhes
              </p>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-6 hover-scale" asChild>
            <Link to="/vitrine" className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Acessar vitrine completa
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VitrineSection;
