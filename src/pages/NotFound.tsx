import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="text-center px-4">
          <h1 className="mb-4 text-6xl md:text-8xl font-bold text-primary">404</h1>
          <p className="mb-8 text-2xl md:text-3xl text-foreground font-medium">Página não encontrada</p>
          <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Button size="lg" asChild>
            <Link to="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Voltar para o início
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
