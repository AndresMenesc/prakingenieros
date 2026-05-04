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

  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const openWhatsApp = () => {

    const message =
      "Hola, necesito información sobre el Plan de Gestión RCD para mi proyecto.";

    const whatsappUrl =
      `https://wa.me/573023490488?text=${encodeURIComponent(message)}`;

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

              {/* HERO */}

              <div className="text-center mb-16">

                <h1 className="text-4xl md:text-6xl font-black mb-6">
                  Plan de Gestión RCD para Constructoras en Bogotá
                </h1>

                <p className="text-xl text-white max-w-4xl mx-auto mb-8">

                  Elaboramos Planes de Gestión Integral de Residuos de Construcción
                  y Demolición (RCD) para constructoras, obras civiles y proyectos
                  que requieren cumplimiento ambiental en Colombia.

                </p>

                <Button
                  onClick={openWhatsApp}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Solicitar asesoría inmediata
                </Button>

              </div>

              {/* ALERTA */}

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-12 text-center">

                <h2 className="text-xl font-bold text-red-600 mb-2">
                  ⚠️ Evita sanciones ambientales en tu proyecto
                </h2>

                <p>
                  No contar con un Plan de Gestión RCD puede generar multas,
                  retrasos en licencias y problemas ante autoridades ambientales.
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

                            <span>
                              {expandedCards[`rcd-${index}`] ? "−" : "+"}
                            </span>

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
                                  openWhatsApp();
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

              {/* SECCIÓN SEO */}

              <div className="max-w-5xl mx-auto mt-20 space-y-10 text-white">

                <div>

                  <h2 className="text-3xl font-bold mb-4">
                    ¿Qué es un Plan de Gestión RCD?
                  </h2>

                  <p className="text-lg leading-relaxed text-white/90">

                    El Plan de Gestión de Residuos de Construcción y Demolición
                    (RCD) es un documento obligatorio para proyectos de construcción,
                    demolición y obras civiles que generan residuos derivados de sus actividades.

                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-bold mb-4">
                    Cumplimiento de la Resolución 472 de 2017
                  </h2>

                  <p className="text-lg leading-relaxed text-white/90">

                    En PRAK Ingenieros desarrollamos planes RCD alineados con la
                    normativa ambiental colombiana, incluyendo lineamientos de la
                    Resolución 472 de 2017 y requerimientos exigidos por autoridades ambientales.

                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-bold mb-4">
                    Servicios para constructoras y proyectos civiles
                  </h2>

                  <p className="text-lg leading-relaxed text-white/90">

                    Trabajamos con constructoras, urbanizadores, contratistas y
                    proyectos de infraestructura que necesitan garantizar manejo,
                    transporte y disposición adecuada de residuos de construcción.

                  </p>

                </div>

              </div>

              {/* FAQ */}

              <div className="mt-24 max-w-4xl mx-auto">

                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  Preguntas frecuentes
                </h2>

                <div className="space-y-6">

                  <div className="bg-white/10 rounded-2xl p-6">

                    <h3 className="font-bold text-xl mb-3">
                      ¿Quién necesita un Plan de Gestión RCD?
                    </h3>

                    <p className="text-white/90">
                      Constructoras, proyectos de demolición, urbanismo,
                      infraestructura y obras civiles que generen residuos de construcción.
                    </p>

                  </div>

                  <div className="bg-white/10 rounded-2xl p-6">

                    <h3 className="font-bold text-xl mb-3">
                      ¿Qué pasa si mi proyecto no tiene Plan RCD?
                    </h3>

                    <p className="text-white/90">
                      El proyecto puede enfrentar sanciones ambientales,
                      retrasos operativos y requerimientos de autoridades competentes.
                    </p>

                  </div>

                  <div className="bg-white/10 rounded-2xl p-6">

                    <h3 className="font-bold text-xl mb-3">
                      ¿PRAK Ingenieros realiza acompañamiento?
                    </h3>

                    <p className="text-white/90">
                      Sí. Realizamos acompañamiento técnico, seguimiento y soporte
                      durante la ejecución del proyecto.
                    </p>

                  </div>

                </div>

              </div>

              {/* CTA FINAL */}

              <div className="text-center mt-20">

                <h2 className="text-2xl font-bold mb-4">
                  Solicita tu Plan de Gestión RCD hoy mismo
                </h2>

                <Button
                  onClick={openWhatsApp}
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
