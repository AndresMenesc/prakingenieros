"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Building,
  Leaf,
  FileCheck
} from "lucide-react";

import Link from "next/link";

import { Button } from "@/app/components/ui/button";

interface ServiceSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const ServicesNavigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState<string | null>(null);

  const serviceSections: ServiceSection[] = [

    {
      id: "plan-gestion-rcd",
      title: "Plan de Gestión RCD",
      icon: <FileCheck className="h-5 w-5" />,
      description:
        "Planes RCD para cumplir normativa y evitar sanciones"
    },

    {
      id: "asesoria-construccion",
      title: "Asesoría Sector Construcción",
      icon: <Building className="h-5 w-5" />,
      description:
        "Gestión de RCDs y cumplimiento normativo"
    },

    {
      id: "consultoria-ambiental",
      title: "Consultoría Ambiental y Sostenibilidad",
      icon: <Leaf className="h-5 w-5" />,
      description:
        "Certificaciones y planes de gestión ambiental"
    }
  ];

  useEffect(() => {

    const handleHashChange = () => {

      const hash = window.location.hash.slice(1);

      if (
        serviceSections.some(
          section => section.id === hash
        )
      ) {
        setActiveSection(hash);
      }
    };

    handleHashChange();

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange
      );

  }, []);

  return (
    <div className="relative">

      <motion.div
        className="flex justify-center mb-20 md:mb-28 lg:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut"
        }}
        viewport={{
          once: true,
          amount: 0.3
        }}
      >

        <div className="relative">

          <Button
            onClick={() => setIsOpen(!isOpen)}
            variant="outline"
            className="bg-white/90 backdrop-blur-sm border-prak-gray/20 hover:bg-white hover:border-prak-yellow text-prak-dark font-semibold px-8 py-4 rounded-xl shadow-elegant hover:shadow-premium transition-all duration-300 group"
          >

            <span className="flex items-center gap-3">

              <Building className="h-5 w-5 text-prak-yellow" />

              Navegar Servicios

              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </span>
          </Button>

          <AnimatePresence>

            {isOpen && (

              <motion.div
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white/95 backdrop-blur-sm border border-prak-gray/20 rounded-2xl shadow-elegant z-50"
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut"
                }}
              >

                <div className="p-2">

                  {serviceSections.map(
                    (section, index) => (

                      <Link
                        key={section.id}
                        href={`/servicios/${section.id}`}
                        onClick={() => setIsOpen(false)}
                      >

                        <motion.div
                          className={`w-full text-left p-4 rounded-xl transition-all duration-200 group cursor-pointer ${
                            activeSection === section.id
                              ? "bg-prak-yellow/10 border border-prak-yellow/30"
                              : "hover:bg-prak-light/50"
                          }`}
                          initial={{
                            opacity: 0,
                            x: -20
                          }}
                          animate={{
                            opacity: 1,
                            x: 0
                          }}
                          transition={{
                            duration: 0.2,
                            delay: index * 0.1
                          }}
                          whileHover={{
                            scale: 1.02
                          }}
                          whileTap={{
                            scale: 0.98
                          }}
                        >

                          <div className="flex items-start gap-3">

                            <div
                              className={`p-2 rounded-lg ${
                                activeSection === section.id
                                  ? "bg-prak-yellow text-prak-dark"
                                  : "bg-prak-light text-prak-gray-dark group-hover:bg-prak-yellow/20"
                              }`}
                            >
                              {section.icon}
                            </div>

                            <div className="flex-1">

                              <h4 className="font-semibold text-prak-dark mb-1">
                                {section.title}
                              </h4>

                              <p className="text-sm text-prak-gray-dark/70">
                                {section.description}
                              </p>

                            </div>
                          </div>
                        </motion.div>
                      </Link>
                    )
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ServicesNavigation;
