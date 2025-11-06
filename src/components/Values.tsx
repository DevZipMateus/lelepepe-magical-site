import { Heart, Shield, Sparkles, Award, Users, Leaf, Scale } from "lucide-react";

const Values = () => {
  const mission = {
    title: "Missão",
    description: "Criar acessórios infantis seguros, coloridos e funcionais que tragam conforto e alegria às crianças, com atendimento afetuoso e responsabilidade socioambiental.",
    icon: Heart,
  };

  const vision = {
    title: "Visão",
    description: "Ser a marca referência nacional em acessórios infantis, reconhecida pela criatividade, segurança e carinho em cada produto.",
    icon: Sparkles,
  };

  const values = [
    {
      icon: Heart,
      title: "Amor pela infância",
      description: "Tudo pensado para o bem-estar da criança",
    },
    {
      icon: Shield,
      title: "Segurança em primeiro lugar",
      description: "Produtos testados e certificados",
    },
    {
      icon: Sparkles,
      title: "Criatividade que inspira",
      description: "Designs que estimulam a imaginação",
    },
    {
      icon: Award,
      title: "Compromisso com a qualidade",
      description: "Excelência em cada detalhe",
    },
    {
      icon: Users,
      title: "Atendimento humano",
      description: "Próximo e acolhedor",
    },
    {
      icon: Leaf,
      title: "Responsabilidade socioambiental",
      description: "Cuidado com o planeta",
    },
    {
      icon: Scale,
      title: "Transparência e ética",
      description: "Honestidade em todos os negócios",
    },
  ];

  return (
    <section id="valores" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Nossos valores e propósito
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6">
                <mission.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{mission.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{mission.description}</p>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-8 rounded-2xl border border-accent/20">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                <vision.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{vision.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{vision.description}</p>
            </div>
          </div>

          {/* Values */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center text-foreground">Valores que nos guiam</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-muted/30 p-6 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
