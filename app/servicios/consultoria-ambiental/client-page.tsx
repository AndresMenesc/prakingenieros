"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Leaf,
  Scale,
  FileCheck,
  Settings,
  BarChart3,
  PieChart,
} from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";

const ConsultoriaAmbiental = () => {
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const openWhatsApp = (title: string) => {
    const message = `Hola, me gustaría más información en ${title}`;
    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const consultoriaAmbientalItems = [
    {
      title: "Cumplimiento legal ambiental",
      description: "Elaboración de matrices legales ambientales y trámites de permisos ambientales ante las autoridades competentes.",
    },
    {
      title: "Planes de gestión ambiental",
      description: "Elaboración de los planes de gestión ambiental aplicables a la compañía enmarcados en el ciclo PHVA.",
    },
    {
      title: "ISO 14001 y RUC",
      description: "Auditorías internas al sistema de gestión ISO 14001 y preparación/acompañamiento de auditoría RUC.",
    },
    {
      title: "Diagnóstico ambiental inicial",
      description: "Diagnóstico integral del cumplimiento actual de la compañía y propuesta de mejoras en manejo ambiental interno.",
    },
    {
      title: "Análisis de materialidad y reportes GRI",
      description: "Te ayudamos a identificar los temas clave de sostenibilidad a través del análisis de materialidad, aplicamos los estándares GRI pertinentes y elaboramos tu reporte de sostenibilidad con enfoque estratégico y cumplimiento normativo.",
    },
  ];

  const environmentalIcons = [
    <Scale className="h-8 w-8 text-prak-teal" />,
    <FileCheck className="h-8 w-8 text-prak-teal" />,
    <Settings className="h-8 w-8 text-prak-teal" />,
    <BarChart3 className="h-8 w-8 text-prak-teal" />,
    <PieChart className="h-8 w-8 text-prak-teal" />,
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-prak-light to-white">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4">
              {/* Section Header */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <Leaf className="h-5 w-5" />
                  CONSULTORÍA AMBIENTAL
                </motion.div>
              </motion.div>

              <div className="text-center mb-20">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Leaf className="h-12 w-12 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Consultoría Ambiental
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Acompañamos a tu empresa en la implementación de buenas prácticas, certificaciones y diagnósticos ambientales.
                </motion.p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {consultoriaAmbientalItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                        onClick={() => toggleCard(`consultoria-${index}`)}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-prak-teal/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                              {environmentalIcons[index]}
                            </div>
                            <div className="flex items-center gap-2 p-2 text-sm font-medium text-prak-gray-dark">
                              <span className="text-lg font-bold">{expandedCards[`consultoria-${index}`] ? '−' : '+'}</span>
                              <span>ver más</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {item.title}
                          </h3>
                          {expandedCards[`consultoria-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <p className="text-sm text-prak-gray-dark/80 mb-4">
                                {item.description}
                              </p>
                              <Button
                                onClick={(e) => { e.stopPropagation(); openWhatsApp(item.title); }}
                                className="bg-prak-teal hover:bg-prak-teal/90 text-white text-xs px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                              >
                                Más información
                              </Button>
                            </motion.div>
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

export default ConsultoriaAmbiental;
