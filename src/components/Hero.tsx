import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Leaf, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ingeniería de 
                <span className="text-prak-orange block">
                  Excelencia
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Especialistas en consultoría ambiental, sostenibilidad y marketing digital. 
                Transformamos proyectos con soluciones innovadoras y cumplimiento normativo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("servicios")}
                size="lg" 
                className="bg-prak-orange hover:bg-prak-orange/90 text-white shadow-orange group"
              >
                Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("proyectos")}
                variant="outline" 
                size="lg"
                className="border-prak-orange text-prak-orange hover:bg-prak-orange hover:text-white"
              >
                Ver Proyectos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-prak-orange">7</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-prak-orange">14</div>
                <div className="text-sm text-muted-foreground">Obras</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-prak-orange">100%</div>
                <div className="text-sm text-muted-foreground">Cumplimiento</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-orange transition-all duration-300 animate-float">
                  <Building className="h-8 w-8 text-prak-orange mb-4" />
                  <h3 className="font-semibold mb-2">Construcción</h3>
                  <p className="text-sm text-muted-foreground">
                    Planes de gestión RCD y certificaciones ambientales
                  </p>
                </div>
                <div className="bg-gradient-accent p-6 rounded-xl text-white shadow-orange">
                  <TrendingUp className="h-8 w-8 mb-4" />
                  <h3 className="font-semibold mb-2">Marketing Digital</h3>
                  <p className="text-sm opacity-90">
                    Estrategias publicitarias y analítica avanzada
                  </p>
                </div>
              </div>
              <div className="pt-12">
                <div className="bg-card p-6 rounded-xl shadow-card hover:shadow-orange transition-all duration-300">
                  <Leaf className="h-8 w-8 text-prak-orange mb-4" />
                  <h3 className="font-semibold mb-2">Sostenibilidad</h3>
                  <p className="text-sm text-muted-foreground">
                    Consultoría ISO 14001 y reportes de sostenibilidad GRI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;