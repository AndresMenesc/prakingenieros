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
      
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 text-white">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-sm font-bold tracking-[0.2em] uppercase text-prak-yellow mb-6 inline-flex items-center gap-2">
                  <div className="w-8 h-[2px] bg-prak-yellow"></div>
                  PRAK INGENIEROS
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.9] mb-6">
                  <span className="block text-white">Segura, Confiable</span>
                  <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-yellow/90 bg-clip-text text-transparent">
                    & Alta Calidad
                  </span>
                  <span className="block text-white text-3xl md:text-4xl lg:text-5xl mt-4 font-light">
                    Ingeniería
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                  Especialistas en consultoría ambiental, sostenibilidad y marketing digital. 
                  Transformamos proyectos con soluciones innovadoras y cumplimiento normativo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                onClick={() => scrollToSection("servicios")}
                size="lg" 
                className="bg-prak-yellow hover:bg-prak-yellow/90 text-prak-dark shadow-premium group px-10 py-7 text-lg font-bold tracking-wide hover:scale-[1.02] transition-all duration-300"
              >
                NUESTROS SERVICIOS
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("proyectos")}
                variant="outline" 
                size="lg"
                className="border-2 border-prak-yellow/50 text-prak-yellow hover:bg-prak-yellow hover:text-prak-dark backdrop-blur-sm px-10 py-7 text-lg font-bold tracking-wide hover:scale-[1.02] transition-all duration-300"
              >
                VER PROYECTOS
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 mt-8 border-t border-white/20">
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-prak-yellow mb-3 group-hover:scale-110 transition-transform duration-300">7</div>
                <div className="text-lg text-white/80 font-semibold tracking-wide">CLIENTES ACTIVOS</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-prak-yellow mb-3 group-hover:scale-110 transition-transform duration-300">14</div>
                <div className="text-lg text-white/80 font-semibold tracking-wide">PROYECTOS</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-prak-yellow mb-3 group-hover:scale-110 transition-transform duration-300">100%</div>
                <div className="text-lg text-white/80 font-semibold tracking-wide">CUMPLIMIENTO</div>
              </div>
            </div>
          </div>

          {/* Premium Info Card */}
          <div className="relative lg:ml-8">
            <div className="bg-white/95 backdrop-blur-xl p-10 rounded-3xl border border-prak-gray/20 shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-black text-prak-dark leading-tight">
                  Construcción Segura
                  <span className="block text-prak-teal">& Confiable</span>
                </h3>
                <Button 
                  size="icon" 
                  className="bg-gradient-premium hover:shadow-premium rounded-full w-16 h-16 hover:scale-110 transition-all duration-300"
                >
                  <Play className="h-6 w-6 text-prak-dark ml-1" />
                </Button>
              </div>
              <p className="text-prak-gray-dark text-lg leading-relaxed mb-8 font-medium">
                La calidad en construcción es un factor crucial para hacer crecer su
                negocio y mantener la rentabilidad a largo plazo.
              </p>
              <div className="flex items-center gap-3 text-prak-teal font-bold text-base uppercase tracking-wider hover:gap-4 transition-all duration-300 cursor-pointer group">
                VER MÁS 
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;