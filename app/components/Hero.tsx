"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight, ChevronDown, Building, Leaf, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BannerCarousel from "./BannerCarousel";

const Hero = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsServicesDropdownOpen(false);
    }
  };

  const serviceSections = [
    {
      id: "asesoria-construccion",
      title: "Asesoría Sector Construcción",
      icon: <Building className="h-4 w-4" />,
      description: "Gestión de RCDs y cumplimiento"
    },
    {
      id: "consultoria-ambiental",
      title: "Consultoría Ambiental",
      icon: <Leaf className="h-4 w-4" />,
      description: "Certificaciones y sostenibilidad"
    },
    {
      id: "marketing-digital",
      title: "Marketing Digital",
      icon: <Target className="h-4 w-4" />,
      description: "Publicidad y analítica"
    }
  ];

  return (
    <section id="inicio" className="relative min-h-screen">
      {/* Banner Carousel Background */}
      <BannerCarousel />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-6 py-32 lg:py-40">
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
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                  <span className="block text-white">
                    Consultoría ambiental y sostenibilidad para empresas en Colombia
                  </span>
                </motion.h1>

                <motion.p
                  className="text-base md:text-lg text-white leading-relaxed max-w-3xl font-normal mx-auto italic"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  Acompañamos empresas de diferentes sectores en el cumplimiento normativo, sostenibilidad y gestión ambiental responsable.
                </motion.p>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
              >
                <Button
                  onClick={() => scrollToSection("contacto")}
                  size="lg"
                  className="bg-prak-yellow hover:bg-prak-yellow/90 text-prak-dark shadow-premium group px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300"
                >
                  Solicita tu asesoría
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Services Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <Button
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                    size="lg"
                    className="bg-prak-dark hover:bg-prak-dark/90 text-white border-0 px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                  >
                    VER NUESTROS SERVICIOS
                    <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </Button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesDropdownOpen && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-prak-gray/20 rounded-2xl shadow-elegant z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      >
                        <div className="p-2">
                          {serviceSections.map((service, index) => (
                            <motion.button
                              key={service.id}
                              onClick={() => scrollToSection(service.id)}
                              className="w-full text-left p-3 rounded-xl transition-all duration-200 hover:bg-prak-light/50 group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-prak-light text-prak-gray-dark group-hover:bg-prak-yellow/20 transition-colors duration-200">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-prak-dark mb-1 text-sm">
                                    {service.title}
                                  </h4>
                                  <p className="text-xs text-prak-gray-dark/70">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="pt-12 mt-12 border-t border-white/15"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <div className="text-center mb-6">
                  <div className="text-white text-lg md:text-2xl font-bold tracking-tight">Nuestra experiencia en el sector</div>
                </div>
                <div className="grid grid-cols-3 gap-6">
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
                    <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2 group-hover:scale-105 transition-transform duration-300">5+</div>
                    <div className="text-sm text-white/70 font-medium uppercase tracking-wide">AÑOS DE EXPERIENCIA</div>
                  </motion.div>

                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;