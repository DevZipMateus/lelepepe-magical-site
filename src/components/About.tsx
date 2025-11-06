import { Heart, Star, Award } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nossa história
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Com mais de uma década de dedicação ao universo dos acessórios infantis, a Lelê Pepê se destaca pelos valores que norteiam nossa jornada. Nosso compromisso com a qualidade e o carinho reflete-se em cada peça manualmente produzida.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              Acreditamos que a infância é repleta de momentos especiais, e é uma honra para nós fazer parte dessas ocasiões únicas. Em cada detalhe, buscamos criar acessórios que farão parte das experiências e momentos inesquecíveis para cada criança.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ao longo desses anos, construímos uma tradição de excelência, onde a inovação e a simplicidade se encontram. Convidamos você a explorar o mundo encantador da Lelê Pepê.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Feito com amor</h3>
              <p className="text-muted-foreground">
                Cada peça é produzida manualmente com todo carinho e atenção aos detalhes.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Qualidade garantida</h3>
              <p className="text-muted-foreground">
                Mais de 10 anos de experiência e excelência em acessórios infantis.
              </p>
            </div>

            <div className="bg-background p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Tradição e inovação</h3>
              <p className="text-muted-foreground">
                Unimos tradição artesanal com designs modernos e criativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
