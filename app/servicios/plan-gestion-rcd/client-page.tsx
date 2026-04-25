"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Truck,
  FileCheck,
  AlertTriangle,
  Recycle,
  ClipboardCheck,
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
    const message = `Hola, necesito información sobre ${title}`;
    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const rcdItems = [
    {
      title: "Elaboración del Plan de Gestión RCD",
      description: "Desarrollamos el plan requerido para el manejo adecuado de residuos de construcción y demolición según normativa vigente.",
    },
    {
      title: "Cumplimiento normativo",
      description: "Aseguramos que tu proyecto cumpla con todas las exigencias ambientales para evitar sanciones.",
    },
    {
      title: "Optimización de residuos",
      description: "Diseñamos estrategias para reducir, reutilizar y disponer correctamente los residuos generados en obra.",
    },
    {
      title: "Acompañamiento técnico",
      description: "Brindamos asesoría durante todo el proceso del proyecto para garantizar cumplimiento continuo.",
    },
    {
      title: "Seguimiento y control",
      description: "Monitoreamos la correcta ejecución del plan y generamos reportes necesarios para autoridades.",
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

              <motion.div className="text-center mb-16">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium">
                  PLAN RCD
                </div>
              </motion.div>

              <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                  Plan de Gestión RCD
                </h1>
                <p className="text-xl text-white max-w-4xl mx-auto">
                  Elaboramos el Plan de Gestión de Residuos de Construcción y Demolición (RCD) para que tu proyecto cumpla con la normativa ambiental en Colombia.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
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
