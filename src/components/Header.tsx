import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-prak-gray/30 z-50 shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/737bfbe6-84b7-4196-a5f4-82679c06ed8a.png" 
              alt="PRAK Ingenieros" 
              className="h-14 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              INICIO
            </button>
            <button 
              onClick={() => scrollToSection("servicios")}
              className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              SERVICIOS
            </button>
            <button 
              onClick={() => scrollToSection("proyectos")}
              className="text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold text-lg hover:scale-105"
            >
              PROYECTOS
            </button>
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="bg-gradient-premium hover:shadow-premium text-prak-dark font-bold px-8 py-3 hover:scale-105 transition-all duration-300"
            >
              CONTACTO
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
          <nav className="md:hidden mt-4 pb-4 border-t border-prak-gray/30 pt-4 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold"
              >
                INICIO
              </button>
              <button 
                onClick={() => scrollToSection("servicios")}
                className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold"
              >
                SERVICIOS
              </button>
              <button 
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-prak-dark hover:text-prak-teal transition-all duration-300 font-semibold"
              >
                PROYECTOS
              </button>
              <Button 
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-premium hover:shadow-premium text-prak-dark font-bold w-fit px-6"
              >
                CONTACTO
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;