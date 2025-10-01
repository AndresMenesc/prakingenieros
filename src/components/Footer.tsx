import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-hero text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/logomain.png"
                alt="PRAK Ingenieros"
                className="h-16 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-white/80 leading-relaxed">
                Especialistas en consultoría ambiental, sostenibilidad y marketing digital.
                Transformamos proyectos con soluciones innovadoras.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-prak-orange flex-shrink-0" />
                <span className="text-white/90">Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-prak-orange flex-shrink-0" />
                <span className="text-white/90">+57 302 349 0488</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-prak-orange flex-shrink-0" />
                <span className="text-white/90">prakingenieros@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-prak-orange flex-shrink-0" />
                <span className="text-white/90">Lun - Vie: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Servicios</h3>
            <div className="space-y-3">
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Consultoría Ambiental
              </a>
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Planes de Gestión RCD
              </a>
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Certificación ISO 14001
              </a>
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Marketing Digital
              </a>
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Google Ads & Meta Ads
              </a>
              <a href="#servicios" className="block text-white/80 hover:text-prak-orange transition-colors">
                Analítica Avanzada
              </a>
            </div>
          </div>

        </div>

        <Separator className="bg-white/20 mb-8" />

        <div className="text-center text-white/60">
          <p>&copy; 2024 PRAK Ingenieros S.A.S. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;