"use client";

import { useEffect } from "react";
import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";


export default function ContactoPage() {
  useEffect(() => {
    // Set page title
    document.title = "Contacto | PRAK Ingenieros - Consultoría Ambiental y Construcción Sostenible";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* JSON-LD Schema for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - PRAK Ingenieros",
            description:
              "Página de contacto de PRAK Ingenieros para consultas sobre servicios de consultoría ambiental y construcción sostenible.",
            url: "https://prakingenieros.com/contacto",
            mainEntity: {
              "@type": "Organization",
              name: "PRAK Ingenieros",
              email: "coordinador@prakingenieros.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              openingHours: "Mo-Fr 08:00-18:00",
            },
          }),
        }}
      />

      <Header />

      <main>
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
