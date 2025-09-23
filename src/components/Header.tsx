import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building, Leaf, Target } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const offsetTop = element.offsetTop - 100; // Account for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-prak-gray/30 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logomain.png"
              alt="PRAK Ingenieros"
              className="h-10 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-sm md:text-base hover:scale-105"
            >
              Inicio
            </button>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-sm md:text-base hover:scale-105 flex items-center gap-1.5"
              >
                Servicios
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Services Dropdown Menu */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white/95 backdrop-blur-sm border border-prak-gray/20 rounded-2xl shadow-elegant z-50"
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

            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-sm md:text-base hover:scale-105"
            >
              Proyectos
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-premium hover:shadow-premium text-prak-dark font-bold px-6 py-2 text-sm md:text-base hover:scale-105 transition-all duration-300"
            >
              Contacto
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 pb-3 border-t border-prak-gray/30 pt-3 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-sm"
              >
                Inicio
              </button>

              {/* Mobile Services Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold flex items-center justify-between w-full text-sm"
                >
                  Servicios
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Services Dropdown Menu */}
                <AnimatePresence>
                  {isServicesDropdownOpen && (
                    <motion.div
                      className="ml-3 space-y-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {serviceSections.map((service, index) => (
                        <motion.button
                          key={service.id}
                          onClick={() => scrollToSection(service.id)}
                          className="w-full text-left p-2 rounded-lg transition-all duration-200 hover:bg-prak-light/50 group flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.1 }}
                        >
                          <div className="p-2 rounded-lg bg-prak-light text-prak-gray-dark group-hover:bg-prak-yellow/20 transition-colors duration-200">
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-prak-dark text-sm">
                              {service.title}
                            </h4>
                            <p className="text-xs text-prak-gray-dark/70">
                              {service.description}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-sm"
              >
                Proyectos
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-premium hover:shadow-premium text-prak-dark font-bold w-fit px-5 py-2 text-sm"
              >
                Contacto
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;