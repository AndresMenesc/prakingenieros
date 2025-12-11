import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const Contacto = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contacto | PRAK Ingenieros - Consultoría Ambiental y Construcción Sostenible"
        description="Contáctanos para asesoría en gestión ambiental, construcción sostenible y marketing digital. Respuesta en menos de 24 horas. Bogotá, Colombia."
        canonical="https://prakingenieros.com/contacto"
      />
      
      {/* JSON-LD Schema for Contact Page */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto - PRAK Ingenieros",
          "description": "Página de contacto de PRAK Ingenieros para consultas sobre servicios de consultoría ambiental y construcción sostenible.",
          "url": "https://prakingenieros.com/contacto",
          "mainEntity": {
            "@type": "Organization",
            "name": "PRAK Ingenieros",
            "email": "coordinador@prakingenieros.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bogotá",
              "addressCountry": "CO"
            },
            "openingHours": "Mo-Fr 08:00-18:00"
          }
        })}
      </script>

      <Header />
      
      <main>
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Contacto;
