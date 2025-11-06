import { Mail, Phone, MapPin, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(12) 99250-0194",
      link: "https://wa.me/5512992500194",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@lelepepe.com.br",
      link: "mailto:contato@lelepepe.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Rua Cocanha, 295",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda à sexta das 8hs às 17hs",
      link: null,
    },
  ];

  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Entre em contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atender você com carinho e atenção
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 text-foreground">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-8 rounded-2xl border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Siga-nos no Instagram
            </h3>
            <p className="text-muted-foreground mb-6">
              Acompanhe nossas novidades, produtos e bastidores
            </p>
            <Button size="lg" variant="outline" className="gap-2 bg-background/50 hover:bg-primary hover:text-primary-foreground border-primary/60" asChild>
              <a
                href="https://instagram.com/lelepepeoficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
                @lelepepeoficial
              </a>
            </Button>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a
                href="https://wa.me/5512992500194"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fale conosco pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
