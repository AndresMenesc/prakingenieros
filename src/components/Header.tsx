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
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/737bfbe6-84b7-4196-a5f4-82679c06ed8a.png" 
              alt="PRAK Ingenieros" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-prak-orange transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-prak-orange transition-colors"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection("proyectos")}
              className="text-foreground hover:text-prak-orange transition-colors"
            >
              Proyectos
            </button>
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="bg-prak-orange hover:bg-prak-orange/90 text-white"
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
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-prak-orange transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground hover:text-prak-orange transition-colors"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-foreground hover:text-prak-orange transition-colors"
              >
                Proyectos
              </button>
              <Button 
                onClick={() => scrollToSection("contacto")}
                className="bg-prak-orange hover:bg-prak-orange/90 text-white w-fit"
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