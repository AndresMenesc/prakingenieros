import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Leaf, TrendingUp, Play } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-prak-dark/90 via-prak-dark/70 to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-semibold tracking-wide uppercase text-prak-orange mb-4">
                  PRAK Ingenieros
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Segura, Confiable,
                  <span className="text-prak-orange block">
                    & Alta Calidad
                  </span>
                  <span className="block text-4xl md:text-5xl lg:text-6xl mt-2">
                    Ingeniería
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                  Especialistas en consultoría ambiental, sostenibilidad y marketing digital. 
                  Transformamos proyectos con soluciones innovadoras y cumplimiento normativo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={() => scrollToSection("servicios")}
                size="lg" 
                className="bg-prak-orange hover:bg-prak-orange/90 text-white shadow-orange group px-8 py-6 text-lg font-semibold"
              >
                Nuestros Servicios
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("proyectos")}
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-prak-dark backdrop-blur-sm px-8 py-6 text-lg font-semibold"
              >
                Ver Proyectos
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-prak-orange mb-2">7</div>
                <div className="text-lg text-white/70 font-medium">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-prak-orange mb-2">14</div>
                <div className="text-lg text-white/70 font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-prak-orange mb-2">100%</div>
                <div className="text-lg text-white/70 font-medium">Cumplimiento</div>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="relative lg:ml-8">
            <div className="bg-prak-dark/80 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Construcción Segura & Confiable</h3>
                <Button 
                  size="icon" 
                  className="bg-prak-orange hover:bg-prak-orange/90 rounded-full w-12 h-12"
                >
                  <Play className="h-5 w-5 text-white" />
                </Button>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                La calidad en construcción es un factor crucial para hacer crecer su
                negocio y mantener la rentabilidad.
              </p>
              <div className="text-prak-orange font-semibold text-sm uppercase tracking-wider">
                VER MÁS →
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;