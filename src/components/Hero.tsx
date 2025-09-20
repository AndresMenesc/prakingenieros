import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BannerCarousel from "./BannerCarousel";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Banner Carousel Background */}
      <BannerCarousel />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 lg:py-32">
          <div className="flex items-center justify-center">
            {/* Content */}
            <motion.div
              className="space-y-12 text-white text-center max-w-6xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="text-sm font-semibold tracking-[0.15em] uppercase text-prak-yellow mb-4 inline-flex items-center gap-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="w-12 h-[2px] bg-prak-yellow"></div>
                  PRAK INGENIEROS
                </motion.div>
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="block text-white mb-2">Segura, Confiable</span>
                  <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-yellow/90 bg-clip-text text-transparent mb-2">
                    & Alta Calidad
                  </span>
                  <span className="block text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light">
                    Ingeniería
                  </span>
                </motion.h1>
                <motion.p
                  className="text-base md:text-lg text-white/75 leading-relaxed max-w-3xl font-normal mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  Especialistas en consultoría ambiental, sostenibilidad y marketing digital.
                  Transformamos proyectos con soluciones innovadoras y cumplimiento normativo.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
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
                  size="lg"
                  className="bg-prak-dark hover:bg-prak-dark/90 text-white border-0 px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300"
                >
                  VER PROYECTOS
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/15"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <motion.div
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">7</div>
                  <div className="text-sm text-white/70 font-medium uppercase tracking-wide">CLIENTES ACTIVOS</div>
                </motion.div>
                <motion.div
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">14</div>
                  <div className="text-sm text-white/70 font-medium uppercase tracking-wide">PROYECTOS</div>
                </motion.div>
                <motion.div
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">100%</div>
                  <div className="text-sm text-white/70 font-medium uppercase tracking-wide">CUMPLIMIENTO</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;