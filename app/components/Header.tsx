"use client";

import { Button } from "@/app/components/ui/button";
import { Menu, X, ChevronDown, Building, Leaf, Target, FileCheck } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

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
    if (pathname !== '/') {
      router.push('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const handleServiceClick = (url: string) => {
    router.push(url);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const serviceSections = [
    {
      url: "/servicios/plan-gestion-rcd",
      title: "Plan de Gestión RCD",
      icon: <FileCheck className="h-4 w-4" />,
      description: "Evita multas y cumple normativa ambiental"
    },
    {
      url: "/servicios/asesoria-construccion",
      title: "Asesoría Sector Construcción",
      icon: <Building className="h-4 w-4" />,
      description: "Gestión de RCDs y cumplimiento"
    },
    {
      url: "/servicios/consultoria-ambiental",
      title: "Consultoría Ambiental",
      icon: <Leaf className="h-4 w-4" />,
      description: "Certificaciones y sostenibilidad"
    },
    {
      url: "/servicios/marketing-digital",
      title: "Marketing Digital",
      icon: <Target className="h-4 w-4" />,
      description: "Publicidad y analítica"
    }
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-prak-gray/30 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logomain.png"
              alt="PRAK Ingenieros"
              className="h-10 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-prak-dark hover:text-prak-teal font-semibold hover:scale-105 transition-all"
            >
              Inicio
            </button>

            {/* Dropdown Servicios */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-prak-dark hover:text-prak-teal font-semibold flex items-center gap-1.5"
              >
                Servicios
                <ChevronDown className={`h-4 w-4 transition ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-elegant z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="p-2">
                      {serviceSections.map((service, index) => (
                        <motion.button
                          key={service.url}
                          onClick={() => handleServiceClick(service.url)}
                          className="w-full text-left p-3 rounded-xl hover:bg-prak-light flex gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          {service.icon}
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-gray-500">{service.description}</p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => scrollToSection("proyectos")}>
              Proyectos
            </button>

            <Link href="/contacto">
              <Button>Contacto</Button>
            </Link>
          </nav>

          {/* Mobile button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
