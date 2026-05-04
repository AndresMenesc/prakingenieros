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
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const openWhatsApp = (title?: string) => {
    const message = title
      ? `Hola, me gustaría más información en ${title}`
      : "Hola, necesito información sobre el Plan de Gestión RCD para mi proyecto.";

    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const rcdItems = [
    {
      title: "Elaboración del Plan de Gestión RCD",
      description:
        "Creamos el Plan de Gestión Integral de Residuos de Construcción y Demolición adaptado a los requerimientos de tu proyecto.",
    },
    {
      title: "Cumplimiento normativo garantizado",
      description:
        "Cumple con la Resolución 472 de 2017 y evita sanciones ambientales, retrasos o problemas ante autoridades competentes.",
    },
    {
      title: "Optimización de costos",
      description:
        "Implementamos estrategias para optimizar el manejo y disposición final de residuos de construcción.",
    },
    {
      title: "Acompañamiento técnico",
      description:
        "Te asesoramos durante el desarrollo del proyecto para garantizar cumplimiento ambiental continuo.",
    },
    {
      title: "Seguimiento y reportes",
      description:
        "Realizamos seguimiento del manejo de RCD y generación de reportes requeridos por entidades ambientales.",
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

              {/* HEADER IGUAL A CONSULTORÍA */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Recycle className="h-5 w-5" />
                  PLAN DE GESTIÓN RCD
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Recycle className="h-12 w-12 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Plan de Gestión RCD
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Elaboramos Planes de Gestión Integral de Residuos de Construcción y Demolición (RCD) para constructoras, obras civiles y proyectos que requieren cumplimiento ambiental en Colombia.
                </motion.p>

                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Solicitar asesoría inmediata
                </Button>
              </motion.div>

              {/* ALERTA (MISMO CONTENIDO, MEJOR ESTILO) */}
              <motion.div
                className="bg-red-50 border border-red-200 p-6 rounded-2xl mb-12 text-center shadow-soft"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  ⚠️ Evita sanciones ambientales en tu proyecto
                </h2>
                <p className="text-prak-gray-dark">
                  No contar con un Plan de Gestión RCD puede generar multas,
                  retrasos en licencias y problemas ante autoridades ambientales.
                </p>
              </motion.div>

              {/* CARDS (ESTILO CONSULTORÍA) */}
              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {rcdItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                        onClick={() => toggleCard(`rcd-${index}`)}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-prak-teal/10 rounded-xl group-hover:scale-110 transition-all">
                              {icons[index]}
                            </div>

                            <div className="flex items-center gap-2 text-sm font-medium text-prak-gray-dark">
                              <span className="text-lg font-bold">
                                {expandedCards[`rcd-${index}`] ? "−" : "+"}
                              </span>
                              <span>ver más</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {item.title}
                          </h3>

                          {expandedCards[`rcd-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-sm text-prak-gray-dark/80 mb-4">
                                {item.description}
                              </p>

                              <Button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openWhatsApp(item.title);
                                }}
                                className="bg-prak-teal text-white text-xs px-4 py-2 rounded-lg"
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

              {/* SEO + FAQ + CTA → intactos pero animados */}
              <div className="max-w-5xl mx-auto mt-20 space-y-10 text-white">
                {[ 
                  {
                    title: "¿Qué es un Plan de Gestión RCD?",
                    text: "El Plan de Gestión de Residuos de Construcción y Demolición (RCD) es un documento obligatorio..."
                  },
                  {
                    title: "Cumplimiento de la Resolución 472 de 2017",
                    text: "En PRAK Ingenieros desarrollamos planes RCD alineados con la normativa ambiental colombiana..."
                  },
                  {
                    title: "Servicios para constructoras y proyectos civiles",
                    text: "Trabajamos con constructoras, urbanizadores, contratistas y proyectos..."
                  }
                ].map((sec, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
                    <h2 className="text-3xl font-bold mb-4">{sec.title}</h2>
                    <p className="text-lg leading-relaxed text-white/90">{sec.text}</p>
                  </motion.div>
                ))}
              </div>

              {/* FAQ */}
              <div className="mt-24 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  Preguntas frecuentes
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      q: "¿Quién necesita un Plan de Gestión RCD?",
                      a: "Constructoras, proyectos de demolición, urbanismo..."
                    },
                    {
                      q: "¿Qué pasa si mi proyecto no tiene Plan RCD?",
                      a: "El proyecto puede enfrentar sanciones ambientales..."
                    },
                    {
                      q: "¿PRAK Ingenieros realiza acompañamiento?",
                      a: "Sí. Realizamos acompañamiento técnico..."
                    }
                  ].map((item, i) => (
                    <motion.div key={i} className="bg-white/10 rounded-2xl p-6" whileInView={{ opacity: 1 }}>
                      <h3 className="font-bold text-xl mb-3">{item.q}</h3>
                      <p className="text-white/90">{item.a}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA FINAL */}
              <div className="text-center mt-20">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Solicita tu Plan de Gestión RCD hoy mismo
                </h2>

                <Button
                  onClick={() => openWhatsApp()}
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
