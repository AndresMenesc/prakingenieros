"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  AlertTriangle,
  FileCheck,
  Recycle,
  ClipboardCheck,
  Truck,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";

const PlanGestionRCD = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const openWhatsApp = (title: string) => {
    const message = `Hola, necesito el Plan de Gestión RCD para mi proyecto`;
    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const rcdItems = [
    {
      title: "Elaboración del Plan de Gestión RCD",
      description: "Creamos tu plan completo listo para cumplir con los requisitos exigidos por autoridades ambientales en Colombia.",
    },
    {
      title: "Cumplimiento normativo garantizado",
      description: "Evita sanciones, multas o retrasos en tu obra asegurando cumplimiento total de la normativa RCD.",
    },
    {
      title: "Optimización de costos",
      description: "Reducimos costos en disposición de residuos mediante estrategias eficientes y sostenibles.",
    },
    {
      title: "Acompañamiento en tu proyecto",
      description: "Te asesoramos durante todo el proceso para garantizar que tu obra cumpla sin problemas.",
    },
    {
      title: "Seguimiento y reportes",
      description: "Control y monitoreo continuo del manejo de residuos con reportes para autoridades.",
    },
  ];

  const icons = [
    <FileCheck className="h-8 w-8 text-prak-teal" />,
    <AlertTriangle className="h-8 w-8 text-prak-teal" />,
    <Recycle className="h-8 w-8 text-prak-teal" />,
    <Truck className="h-8 w-8 text-prak-teal" />,
    <ClipboardCheck className="h-8 w-8 text-prak-teal" />,
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-prak-light to-white">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4">

              {/* HERO DE CONVERSIÓN */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-black mb-6">
                  Plan de Gestión RCD en Colombia
                </h1>

                <p className="text-xl text-white max-w-3xl mx-auto mb-8">
                  Evita multas, cumple la normativa ambiental y asegura tu proyecto con un plan RCD profesional.
                </p>

                {/* CTA PRINCIPAL */}
                <Button
                  onClick={() => openWhatsApp("Plan RCD")}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Solicitar asesoría inmediata
                </Button>
              </div>

              {/* DOLOR / URGENCIA */}
              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-12 text-center">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  ⚠️ ¿Tu proyecto puede ser sancionado?
                </h2>
                <p>
                  No contar con un Plan de Gestión RCD puede generar multas, retrasos y problemas legales en tu obra.
                </p>
              </div>

              {/* SERVICIOS */}
              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {rcdItems.map((item, index) => (
                    <motion.div key={item.title}>
                      <Card
                        className="bg-white shadow-soft hover:shadow-elegant transition-all duration-500 rounded-2xl h-full flex flex-col cursor-pointer"
                        onClick={() => toggleCard(`rcd-${index}`)}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-prak-teal/10 rounded-xl">
                              {icons[index]}
                            </div>
                            <span>{expandedCards[`rcd-${index}`] ? '−' : '+'}</span>
                          </div>

                          <h3 className="text-lg font-bold mb-4">
                            {item.title}
                          </h3>

                          {expandedCards[`rcd-${index}`] && (
                            <div>
                              <p className="text-sm mb-4">
                                {item.description}
                              </p>
                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openWhatsApp(item.title);
                                }}
                              >
                                Más información
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA FINAL */}
              <div className="text-center mt-16">
                <h2 className="text-2xl font-bold mb-4">
                  Solicita tu Plan de Gestión RCD hoy mismo
                </h2>
                <Button
                  onClick={() => openWhatsApp("Plan RCD")}
                  className="bg-prak-teal text-white px-8 py-4 text-lg rounded-xl"
                >
                  Hablar por WhatsApp
                </Button>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default PlanGestionRCD;
