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
      <div className="absolute inset-0 bg-gradient-to-br from-prak-dark/90 via-prak-teal/80 to-prak-dark/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-prak-dark/40 via-transparent to-transparent"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="space-y-12 text-white">
            <div className="space-y-6">
              <div className="text-sm font-semibold tracking-[0.15em] uppercase text-prak-yellow mb-4 inline-flex items-center gap-3">
                <div className="w-12 h-[2px] bg-prak-yellow"></div>
                PRAK INGENIEROS
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white mb-2">Segura, Confiable</span>
                <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-yellow/90 bg-clip-text text-transparent mb-2">
                  & Alta Calidad
                </span>
                <span className="block text-white text-2xl md:text-3xl lg:text-4xl font-light">
                  Ingeniería
                </span>
              </h1>
              <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-lg font-normal">
                Especialistas en consultoría ambiental, sostenibilidad y marketing digital. 
                Transformamos proyectos con soluciones innovadoras y cumplimiento normativo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("servicios")}
                size="lg" 
                className="bg-prak-yellow hover:bg-prak-yellow/90 text-prak-dark shadow-premium group px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300"
              >
                NUESTROS SERVICIOS
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("proyectos")}
                variant="outline" 
                size="lg"
                className="border-2 border-prak-yellow/40 text-prak-yellow hover:bg-prak-yellow hover:text-prak-dark backdrop-blur-sm px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300"
              >
                VER PROYECTOS
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/15">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">7</div>
                <div className="text-sm text-white/70 font-medium uppercase tracking-wide">CLIENTES ACTIVOS</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">14</div>
                <div className="text-sm text-white/70 font-medium uppercase tracking-wide">PROYECTOS</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
                <div className="text-sm text-white/70 font-medium uppercase tracking-wide">CUMPLIMIENTO</div>
              </div>
            </div>
          </div>

          {/* Premium Info Card */}
          <div className="relative">
            <div className="bg-white/96 backdrop-blur-xl p-8 lg:p-10 rounded-2xl border border-prak-gray/15 shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-prak-dark leading-tight">
                  Construcción Segura
                  <span className="block text-prak-teal mt-1">& Confiable</span>
                </h3>
                <Button 
                  size="icon" 
                  className="bg-gradient-premium hover:shadow-premium rounded-full w-12 h-12 hover:scale-105 transition-all duration-300 flex-shrink-0"
                >
                  <Play className="h-4 w-4 text-prak-dark ml-0.5" />
                </Button>
              </div>
              <p className="text-prak-gray-dark text-base leading-relaxed mb-6 font-normal">
                La calidad en construcción es un factor crucial para hacer crecer su
                negocio y mantener la rentabilidad a largo plazo.
              </p>
              <div className="flex items-center gap-2 text-prak-teal font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300 cursor-pointer group">
                VER MÁS 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;