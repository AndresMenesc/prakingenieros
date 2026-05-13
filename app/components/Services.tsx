"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  Leaf,
  Building,
  Shield,
  BarChart3,
  Users,
  Globe,
  Zap,
  FileText,
  Calendar,
  CheckCircle2,
  BookOpen,
  Eye,
  Calculator,
  Award,
  Scale,
  FileCheck,
  Settings,
  PieChart,
} from "lucide-react";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState<'mandatory' | 'support'>('mandatory');
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

  const mandatoryItems = [
    {
      title: "Planes de gestión de RCD para PIN ambiental",
      description:
        "Elaboramos el PG-RCD en cumplimiento de la normatividad ambiental vigente a nivel nacional y distrital.",
    },
    {
      title: "Actualización mensual de la plataforma de reporte de RCDs",
      description:
        "Cargamos y verificamos mensualmente la información de RCD.",
    },
    {
      title: "Cierre de PIN del proyecto",
      description:
        "Preparamos soportes y gestionamos el cierre del PIN.",
    },
    {
      title: "Evaluación de requisitos de construcción sostenible",
      description:
        "Evaluamos los requisitos aplicables a tu proyecto.",
    },
    {
      title: "Evaluación de sistemas con Beneficios Tributarios UPME",
      description:
        "Acompañamiento práctico enfocado en cumplimiento normativo.",
    },
  ];

  const supportItems = [
    {
      title: "Capacitaciones",
      description:
        "Capacitación en temática ambiental o sostenibilidad.",
    },
    {
      title: "Visitas de verificación ambiental",
      description:
        "Visitas técnicas para verificar cumplimiento ambiental.",
    },
    {
      title: "Certificación EDGE y CASA",
      description:
        "Asesoría integral para obtención de certificaciones.",
    },
  ];

  const consultoriaAmbientalItems = [
    {
      title: "Cumplimiento legal ambiental",
      description:
        "Matrices legales ambientales y permisos.",
    },
    {
      title: "Planes de gestión ambiental",
      description:
        "Planes ambientales bajo ciclo PHVA.",
    },
    {
      title: "ISO 14001 y RUC",
      description:
        "Auditorías y acompañamiento.",
    },
    {
      title: "Diagnóstico ambiental inicial",
      description:
        "Diagnóstico integral y propuesta de mejoras.",
    },
    {
      title: "Análisis de materialidad y reportes GRI",
      description:
        "Reporte de sostenibilidad y estándares GRI.",
    },
  ];

  const constructionIcons = [
    <FileText className="h-8 w-8 text-prak-yellow" />,
    <Calendar className="h-8 w-8 text-prak-yellow" />,
    <CheckCircle2 className="h-8 w-8 text-prak-yellow" />,
    <Eye className="h-8 w-8 text-prak-yellow" />,
    <Calculator className="h-8 w-8 text-prak-yellow" />,
  ];

  const environmentalIcons = [
    <BookOpen className="h-8 w-8 text-prak-teal" />,
    <Shield className="h-8 w-8 text-prak-teal" />,
    <Award className="h-8 w-8 text-prak-teal" />,
  ];

  return (
    <section id="servicios" className="py-40 bg-gradient-to-b from-prak-light to-white">
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium">
              <div className="w-2 h-2 bg-prak-dark rounded-full"></div>
              LO QUE OFRECEMOS
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                Servicios de consultoría ambiental para empresas
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Elaboración y seguimiento de planes de manejo ambiental y residuos de construcción.
            </motion.p>
          </div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              onClick={() => setSelectedTab('mandatory')}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                selectedTab === 'mandatory'
                  ? 'bg-prak-teal text-white border-prak-teal'
                  : 'bg-white text-prak-dark border-prak-gray/30'
              }`}
            >
              Trámites obligatorios
            </button>

            <button
              onClick={() => setSelectedTab('support')}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                selectedTab === 'support'
                  ? 'bg-prak-teal text-white border-prak-teal'
                  : 'bg-white text-prak-dark border-prak-gray/30'
              }`}
            >
              Acompañamiento y sostenibilidad
            </button>
          </div>

          {selectedTab === 'mandatory' && (
            <div className="mb-32">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {mandatoryItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500"
                    onClick={() => toggleCard(`mandatory-${index}`)}
                  >
                    <CardContent className="p-6">

                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-prak-yellow/10 rounded-xl">
                          {constructionIcons[index]}
                        </div>

                        <span className="text-lg font-bold">
                          {expandedCards[`mandatory-${index}`] ? '−' : '+'}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-4">
                        {item.title}
                      </h3>

                      {expandedCards[`mandatory-${index}`] && (
                        <>
                          <p className="text-sm text-prak-gray-dark/80 mb-4">
                            {item.description}
                          </p>

                          <Button
                            onClick={() => openWhatsApp(item.title)}
                            className="bg-prak-teal text-white"
                          >
                            Más información
                          </Button>
                        </>
                      )}

                    </CardContent>
                  </Card>
                ))}

              </div>
            </div>
          )}

          {selectedTab === 'support' && (
            <div className="mb-32">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                {supportItems.map((item, index) => (
                  <Card
                    key={index}
                    className="bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500"
                    onClick={() => toggleCard(`support-${index}`)}
                  >
                    <CardContent className="p-6">

                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-prak-teal/10 rounded-xl">
                          {environmentalIcons[index]}
                        </div>

                        <span className="text-lg font-bold">
                          {expandedCards[`support-${index}`] ? '−' : '+'}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold mb-4">
                        {item.title}
                      </h3>

                      {expandedCards[`support-${index}`] && (
                        <>
                          <p className="text-sm text-prak-gray-dark/80 mb-4">
                            {item.description}
                          </p>

                          <Button
                            onClick={() => openWhatsApp(item.title)}
                            className="bg-prak-teal text-white"
                          >
                            Más información
                          </Button>
                        </>
                      )}

                    </CardContent>
                  </Card>
                ))}

              </div>
            </div>
          )}

          <div className="mb-32">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {consultoriaAmbientalItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500"
                  onClick={() => toggleCard(`consultoria-${index}`)}
                >
                  <CardContent className="p-6">

                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-prak-teal/10 rounded-xl">
                        <Leaf className="h-8 w-8 text-prak-teal" />
                      </div>

                      <span className="text-lg font-bold">
                        {expandedCards[`consultoria-${index}`] ? '−' : '+'}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-4">
                      {item.title}
                    </h3>

                    {expandedCards[`consultoria-${index}`] && (
                      <>
                        <p className="text-sm text-prak-gray-dark/80 mb-4">
                          {item.description}
                        </p>

                        <Button
                          onClick={() => openWhatsApp(item.title)}
                          className="bg-prak-teal text-white"
                        >
                          Más información
                        </Button>
                      </>
                    )}

                  </CardContent>
                </Card>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
