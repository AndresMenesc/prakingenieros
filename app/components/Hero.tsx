"use client";

import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
  ChevronDown,
  Building,
  Leaf,
  Recycle,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import BannerCarousel from "./BannerCarousel";

const Hero = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openWhatsApp = () => {
    const message =
      "Hola, quiero solicitar una asesoría con PRAK Ingenieros";

    const url =
      `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  const serviceSections = [
    {
      href: "/servicios/plan-gestion-rcd",
      title: "Planes de Gestión RCD",
      icon: <Recycle className="h-4 w-4" />,
      description: "Cumplimiento Resolución 472",
    },

    {
      href: "/servicios/asesoria-construccion",
      title: "Asesoría Sector Construcción",
      icon: <Building className="h-4 w-4" />,
      description: "Gestión de RCDs y cumplimiento",
    },

    {
      href: "/servicios/consultoria-ambiental",
      title: "Consultoría Ambiental",
      icon: <Leaf className="h-4 w-4" />,
      description: "Certificaciones y sostenibilidad",
    },
  ];

  return (
    <section id="inicio" className="relative min-h-screen">

      <BannerCarousel />

      <div className="absolute inset-0 z-20 flex items-center justify-center">

        <div className="container mx-auto px-6 py-32 lg:py-40">

          <div className="flex items-center justify-center">

            <motion.div
              className="space-y-12 text-white text-center max-w-6xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >

              {/* CONTENIDO */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >

                <motion.div className="text-sm font-semibold tracking-[0.15em] uppercase text-prak-yellow mb-4 inline-flex items-center gap-3">

                  <div className="w-12 h-[2px] bg-prak-yellow"></div>

                  PRAK INGENIEROS

                </motion.div>

                <motion.h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] tracking-tight">

                  <span className="block text-white">
                    Consultoría ambiental y sostenibilidad para empresas en Colombia
                  </span>

                </motion.h1>

                <motion.p className="text-base md:text-lg text-white leading-relaxed max-w-3xl font-normal mx-auto italic">

                  Acompañamos empresas de diferentes sectores en el cumplimiento normativo, sostenibilidad y gestión ambiental responsable.

                </motion.p>

              </motion.div>

              {/* BOTONES */}
              <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-prak-yellow hover:bg-prak-yellow/90 text-prak-dark shadow-premium group px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300"
                >

                  Solicita tu asesoría

                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />

                </Button>

                {/* DROPDOWN */}
                <div className="relative" ref={dropdownRef}>

                  <Button
                    onClick={() =>
                      setIsServicesDropdownOpen(!isServicesDropdownOpen)
                    }
                    size="lg"
                    className="bg-prak-dark hover:bg-prak-dark/90 text-white border-0 px-8 py-4 text-base font-semibold tracking-wide hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
                  >

                    VER NUESTROS SERVICIOS

                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isServicesDropdownOpen ? "rotate-180" : ""
                      }`}
                    />

                  </Button>

                  <AnimatePresence>

                    {isServicesDropdownOpen && (

                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-prak-gray/20 rounded-2xl shadow-elegant z-50"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      >

                        <div className="p-2">

                          {serviceSections.map((service) => (

                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() =>
                                setIsServicesDropdownOpen(false)
                              }
                              className="block"
                            >

                              <motion.div className="w-full text-left p-3 rounded-xl transition-all duration-200 hover:bg-prak-light/50 group">

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

                              </motion.div>

                            </Link>

                          ))}

                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>

              </motion.div>

              {/* STATS */}
              <motion.div className="pt-12 mt-12 border-t border-white/15">

                <div className="text-center mb-6">

                  <div className="text-white text-lg md:text-2xl font-bold tracking-tight">

                    Nuestra experiencia en el sector

                  </div>

                </div>

                <div className="grid grid-cols-3 gap-6">

                  <div className="text-center">

                    <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2">
                      7
                    </div>

                    <div className="text-sm text-white/70 font-medium uppercase tracking-wide">
                      CLIENTES ACTIVOS
                    </div>

                  </div>

                  <div className="text-center">

                    <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2">
                      14
                    </div>

                    <div className="text-sm text-white/70 font-medium uppercase tracking-wide">
                      PROYECTOS
                    </div>

                  </div>

                  <div className="text-center">

                    <div className="text-3xl md:text-4xl font-bold text-prak-yellow mb-2">
                      5+
                    </div>

                    <div className="text-sm text-white/70 font-medium uppercase tracking-wide">
                      AÑOS DE EXPERIENCIA
                    </div>

                  </div>

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
