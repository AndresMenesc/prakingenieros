import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Building,
  Shield,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle,
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
import { Separator } from "@/components/ui/separator";

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

  // Explicit items per section
  const mandatoryItems: { title: string; description: string }[] = [
    {
      title: "Planes de gestión de RCD para PIN ambiental",
      description:
        "Elaboramos el PG-RCD en cumplimiento de la normatividad ambiental vigente a nivel nacional y distrital, como requisito para la solicitud del PIN ambiental.",
    },
    {
      title: "Actualización mensual de la plataforma de reporte de RCDs",
      description:
        "Cargamos y verificamos mensualmente la información de RCD en la plataforma exigida por la autoridad ambiental.",
    },
    {
      title: "Cierre de PIN del proyecto",
      description:
        "Preparamos soportes y gestionamos el cierre del PIN ante la entidad competente, con seguimiento hasta su aprobación.",
    },
    {
      title: "Evaluación de requisitos de construcción sostenible aplicables al proyecto",
      description:
        "Evaluamos los requisitos de construcción sostenible que aplican a tu proyecto e integramos desde el diseño aquellos que son obligatorios, garantizando el cumplimiento normativo y evitando posibles sanciones.",
    },
    {
      title: "Evaluación de sistemas con posibles Beneficios Tributarios ante la UPME",
      description:
        "Acompañamiento práctico y enfocado en cumplimiento, con base en normatividad ambiental colombiana vigente.",
    },
  ];

  const supportItems: { title: string; description: string }[] = [
    {
      title: "Capacitaciones",
      description:
        "Ofrecemos capacitación en la temática ambiental o de sostenibilidad de su interés.",
    },
    {
      title: "Visitas de verificación de cumplimiento de medidas ambientales",
      description:
        "Realizamos visitas técnicas para verificar cumplimiento in situ y emitir recomendaciones puntuales de mejora.",
    },
    {
      title: "Certificación EDGE y CASA",
      description:
        "Analizamos el potencial de tu proyecto para obtener la certificación EDGE o CASA, y te asesoramos integralmente durante todo el proceso, desde la evaluación inicial hasta la obtención del certificado.",
    },
  ];

  const consultoriaAmbientalItems: { title: string; description: string }[] = [
    {
      title: "Cumplimiento legal ambiental",
      description:
        "Elaboración de matrices legales ambientales y trámites de permisos ambientales ante las autoridades competentes.",
    },
    {
      title: "Planes de gestión ambiental",
      description:
        "Elaboración de los planes de gestión ambiental aplicables a la compañía enmarcados en el ciclo PHVA.",
    },
    {
      title: "ISO 14001 y RUC",
      description:
        "Auditorías internas al sistema de gestión ISO 14001 y preparación/acompañamiento de auditoría RUC.",
    },
    {
      title: "Diagnóstico ambiental inicial",
      description:
        "Diagnóstico integral del cumplimiento actual de la compañía y propuesta de mejoras en manejo ambiental interno.",
    },
    {
      title: "Análisis de materialidad y reportes GRI",
      description:
        "Te ayudamos a identificar los temas clave de sostenibilidad a través del análisis de materialidad, aplicamos los estándares GRI pertinentes y elaboramos tu reporte de sostenibilidad con enfoque estratégico y cumplimiento normativo.",
    },
  ];
  // Icon mappings for construction services
  const constructionIcons = [
    <FileText className="h-8 w-8 text-prak-yellow" />, // Elaboración de planes
    <Calendar className="h-8 w-8 text-prak-yellow" />, // Actualización mensual
    <CheckCircle2 className="h-8 w-8 text-prak-yellow" />, // Cierre de PIN
    <Eye className="h-8 w-8 text-prak-yellow" />, // Evaluación de requisitos
    <BookOpen className="h-8 w-8 text-prak-yellow" />, // Capacitación
    <Shield className="h-8 w-8 text-prak-yellow" />, // Visitas de verificación
    <Calculator className="h-8 w-8 text-prak-yellow" />, // Evaluación de sistemas
    <Award className="h-8 w-8 text-prak-yellow" />, // Certificación EDGE
  ];

  // Icon mappings for environmental services
  const environmentalIcons = [
    <Scale className="h-8 w-8 text-prak-teal" />, // Cumplimiento legal
    <FileCheck className="h-8 w-8 text-prak-teal" />, // Planes de gestión
    <Settings className="h-8 w-8 text-prak-teal" />, // ISO 14001 y RUC
    <BarChart3 className="h-8 w-8 text-prak-teal" />, // Diagnóstico ambiental
    <PieChart className="h-8 w-8 text-prak-teal" />, // Análisis de materialidad
  ];

  const environmentalServices = [
    {
      icon: <Building className="h-12 w-12 text-prak-yellow" />,
      title: "Asesoría Sector Construcción",
      description: "Minimizamos los riesgos asociados a cierres y multas por incumplimiento de la normatividad ambiental y de sostenibilidad vigente.",
      features: [
        "Elaboración de planes de gestión de Residuos de Construcción y Demolición a nivel nacional para la obtención de PIN",
        "Actualización mensual de la plataforma de reporte de RCDs",
        "Cierre de PIN del proyecto",
        "Evaluación de requisitos de construcción sostenible aplicables al proyecto",
        "Capacitaciones",
        "Visitas de verificación de cumplimiento de medidas ambientales",
        "Evaluación de sistemas con posibles Beneficios Tributarios ante la UPME",
        "Certificación EDGE y CASA"
      ]
    },
    {
      icon: <Leaf className="h-12 w-12 text-prak-teal" />,
      title: "Consultoría Ambiental y Sostenibilidad",
      description: "Contamos con expertos en temas ambientales para asesorar en cumplimiento y mejores prácticas.",
      features: [
        "Cumplimiento legal ambiental: elaboración de matrices legales y trámites de permisos ambientales",
        "Planes de gestión ambiental: elaboración de los planes de gestión ambiental aplicables a la compañía enmarcados en el ciclo PHVA",
        "ISO 14001 y RUC: auditorías internas al sistema de gestión ISO14001 y preparación de auditoría RUC",
        "Diagnóstico ambiental inicial: diagnóstico integral del cumplimiento actual de la compañía y propuesta de mejoras a nivel de manejo ambiental interno",
        "Análisis de materialidad y elaboración de reportes de sostenibilidad estándar GRI"
      ]
    }
  ];

  const digitalServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Publicidad en Redes Sociales",
      items: [
        "Campañas en Meta Ads (Facebook & Instagram)",
        "Campañas en TikTok Ads",
        "Campañas en LinkedIn Ads",
        "Optimización de anuncios para ventas, leads y awareness",
        "Estrategias de remarketing en redes sociales"
      ]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Publicidad en Buscadores y Display",
      items: [
        "Campañas en Google Ads (Búsqueda, Display, Shopping, YouTube)",
        "Estrategias de Performance Max",
        "Campañas de remarketing en Google"
      ]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Programmatic Advertising",
      items: [
        "Compra programática de medios en DSPs (Mediasmart, Targetoo, DV360)",
        "Estrategias multicanal (Display, CTV, Audio, DOOH)",
        "Segmentación avanzada con data y audiencias personalizadas"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analítica y Medición",
      items: [
        "Implementación de Google Tag Manager (eventos, conversiones, píxeles)",
        "Configuración de píxeles publicitarios (Meta, TikTok, Google, LinkedIn)",
        "Integración y configuración de Google Analytics 4 (GA4)",
        "Dashboards personalizados de rendimiento"
      ]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Estrategia y Optimización",
      items: [
        "Auditoría de campañas publicitarias",
        "Diseño de embudos de conversión",
        "A/B Testing de creativos y landings",
        "Estrategias de optimización de inversión publicitaria (ROAS / CPA)"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoría & Acompañamiento",
      items: [
        "Asesorías personalizadas en marketing digital",
        "Capacitación a equipos internos en plataformas publicitarias",
        "Planes de crecimiento digital para marcas"
      ]
    }
  ];

  return (
    <section id="servicios" className="py-40 bg-gradient-to-b from-prak-light to-white">
      <div className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-2 h-2 bg-prak-dark rounded-full"></div>
              LO QUE OFRECEMOS
            </motion.div>
          </motion.div>


          {/* Section Title */}
          <div className="text-center mb-8">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Asesoría en sector construcción
            </motion.h2>
            <motion.p
              className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Somos una consultora independiente especializada en el sector construcción. Acompañamos a las constructoras en el cumplimiento ambiental, la gestión de residuos y la sostenibilidad.
            </motion.p>
          </div>

          {/* Toggle buttons for Mandatory vs Support */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <button
              id="services-tab-mandatory"
              onClick={() => setSelectedTab('mandatory')}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${selectedTab === 'mandatory' ? 'bg-prak-teal text-white border-prak-teal shadow-elegant' : 'bg-white text-prak-dark border-prak-gray/30 hover:bg-prak-light'}`}
            >
              Trámites obligatorios (PIN, reportes, cierres)
            </button>
            <button
              id="services-tab-support"
              onClick={() => setSelectedTab('support')}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${selectedTab === 'support' ? 'bg-prak-teal text-white border-prak-teal shadow-elegant' : 'bg-white text-prak-dark border-prak-gray/30 hover:bg-prak-light'}`}
            >
              Acompañamiento y Sostenibilidad
            </button>
          </div>

          {/* Asesoría Sector Construcción */}
          {selectedTab === 'mandatory' && (
            <div id="asesoria-construccion" className="mb-32">
              <div className="text-center mb-20">
                <motion.h3
                  className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Building className="h-10 w-10 text-prak-yellow" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Trámites Obligatorios
                  </span>
                </motion.h3>

                <motion.p
                  className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Evita sanciones y asegura la aprobación de tu proyecto.
                </motion.p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {mandatoryItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Card
                        id={`mandatory-service-card-${index}`}
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-prak-yellow/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                                {constructionIcons[index]}
                              </div>
                              <button
                                id={`mandatory-expand-btn-${index}`}
                                onClick={() => toggleCard(`mandatory-${index}`)}
                                className="flex items-center gap-2 p-2 hover:bg-prak-gray/10 rounded-lg transition-colors text-sm font-medium text-prak-gray-dark cursor-pointer"
                              >
                                <span className="text-lg font-bold">+</span>
                                <span>ver más</span>
                              </button>
                            </div>
                            <h4
                              id={`mandatory-title-${index}`}
                              className="text-lg font-bold mb-4 group-hover:text-prak-yellow transition-colors text-prak-dark cursor-pointer"
                            >
                              {item.title}
                            </h4>
                            {expandedCards[`mandatory-${index}`] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-4"
                              >
                                <p className="text-sm text-prak-gray-dark/80 mb-4">
                                  {item.description}
                                </p>
                                <Button
                                  id={`mandatory-whatsapp-btn-${index}`}
                                  onClick={() => openWhatsApp(item.title)}
                                  className="bg-prak-teal hover:bg-prak-teal/90 text-white text-xs px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                                >
                                  Más información
                                </Button>
                              </motion.div>
                            )}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}


          {/* Consultoría Ambiental y Sostenibilidad */}
          {selectedTab === 'support' && (
            <div id="consultoria-ambiental" className="mb-32">
              <div className="text-center mb-20">
                <motion.h3
                  className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Leaf className="h-10 w-10 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Acompañamiento y Sostenibilidad
                  </span>
                </motion.h3>

                <motion.p
                  className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  Acompañamiento técnico en obra (visitas), formación al personal y soporte para certificaciones y buenas prácticas de sostenibilidad.
                </motion.p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {supportItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <Card
                        id={`support-service-card-${index}`}
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <motion.div
                            className="flex-shrink-0"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-prak-teal/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                                {environmentalIcons[index]}
                              </div>
                              <button
                                id={`support-expand-btn-${index}`}
                                onClick={() => toggleCard(`support-${index}`)}
                                className="flex items-center gap-2 p-2 hover:bg-prak-gray/10 rounded-lg transition-colors text-sm font-medium text-prak-gray-dark cursor-pointer"
                              >
                                <span className="text-lg font-bold">+</span>
                                <span>ver más</span>
                              </button>
                            </div>
                            <h4
                              id={`support-title-${index}`}
                              className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark cursor-pointer"
                            >
                              {item.title}
                            </h4>
                            {expandedCards[`support-${index}`] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mb-4"
                              >
                                <p className="text-sm text-prak-gray-dark/80 mb-4">
                                  {item.description}
                                </p>
                                <Button
                                  id={`support-whatsapp-btn-${index}`}
                                  onClick={() => openWhatsApp(item.title)}
                                  className="bg-prak-teal hover:bg-prak-teal/90 text-white text-xs px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                                >
                                  Más información
                                </Button>
                              </motion.div>
                            )}
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Consultoria Ambiental (bloque adicional) */}
          <div id="consultoria-ambiental-extra" className="mb-32">
            <div className="text-center mb-20">
              <motion.h3
                className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Leaf className="h-12 w-12 text-prak-teal" />
                <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                  Consultoría Ambiental
                </span>
              </motion.h3>
              <motion.p
                className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Acompañamiento técnico en obra (visitas), formación al personal y soporte para certificaciones y buenas prácticas de sostenibilidad.
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
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card
                      id={`consultoria-service-card-${index}`}
                      className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <motion.div
                          className="flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-prak-teal/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                              <Leaf className="h-8 w-8 text-prak-teal" />
                            </div>
                            <button
                              id={`consultoria-expand-btn-${index}`}
                              onClick={() => toggleCard(`consultoria-${index}`)}
                              className="flex items-center gap-2 p-2 hover:bg-prak-gray/10 rounded-lg transition-colors text-sm font-medium text-prak-gray-dark cursor-pointer"
                            >
                              <span className="text-lg font-bold">+</span>
                              <span>ver más</span>
                            </button>
                          </div>
                          <h4
                            id={`consultoria-title-${index}`}
                            className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark cursor-pointer"
                          >
                            {item.title}
                          </h4>
                          {expandedCards[`consultoria-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <p className="text-sm text-prak-gray-dark/80 mb-4">
                                {item.description}
                              </p>
                              <Button
                                id={`consultoria-whatsapp-btn-${index}`}
                                onClick={() => openWhatsApp(item.title)}
                                className="bg-prak-teal hover:bg-prak-teal/90 text-white text-xs px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                              >
                                Más información
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div id="marketing-digital">
            <div className="text-center mb-20">
              <motion.h3
                className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <TrendingUp className="h-10 w-10 text-prak-teal" />
                <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                  Marketing digital
                </span>
              </motion.h3>
              <motion.p
                className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Estrategias digitales integrales para maximizar su presencia online y ROI.
              </motion.p>
            </div>

            <div className="bg-gray-100 rounded-3xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {digitalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card
                      id={`marketing-service-card-${index}`}
                      className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <motion.div
                          className="flex-shrink-0"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true, amount: 0.3 }}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-gradient-to-br from-prak-teal/10 to-prak-yellow/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                              {React.cloneElement(service.icon, { className: "h-8 w-8 text-prak-teal" })}
                            </div>
                            <button
                              id={`marketing-expand-btn-${index}`}
                              onClick={() => toggleCard(`marketing-${index}`)}
                              className="flex items-center gap-2 p-2 hover:bg-prak-gray/10 rounded-lg transition-colors text-sm font-medium text-prak-gray-dark cursor-pointer"
                            >
                              <span className="text-lg font-bold">+</span>
                              <span>ver más</span>
                            </button>
                          </div>
                          <h4
                            id={`marketing-title-${index}`}
                            className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark cursor-pointer"
                          >
                            {service.title}
                          </h4>
                          {expandedCards[`marketing-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <ul className="space-y-3 w-full mb-4">
                                {service.items.map((item, itemIndex) => (
                                  <motion.li
                                    key={itemIndex}
                                    id={`marketing-item-${index}-${itemIndex}`}
                                    className="flex items-start gap-3 hover:bg-prak-teal/5 p-2 rounded-lg transition-all duration-300 cursor-pointer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + itemIndex * 0.05, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}
                                  >
                                    <div className="w-2 h-2 bg-prak-yellow rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-sm text-prak-gray-dark leading-relaxed font-medium hover:text-prak-dark transition-colors">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                              <Button
                                id={`marketing-whatsapp-btn-${index}`}
                                onClick={() => openWhatsApp(service.title)}
                                className="bg-prak-teal hover:bg-prak-teal/90 text-white text-xs px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                              >
                                Más información
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;