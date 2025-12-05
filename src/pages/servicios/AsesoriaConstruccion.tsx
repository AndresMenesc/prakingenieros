import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building,
  FileText,
  Calendar,
  CheckCircle2,
  Eye,
  BookOpen,
  Shield,
  Calculator,
  Award,
  Leaf,
  Scale,
  FileCheck,
  Settings,
  BarChart3,
  PieChart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";

const AsesoriaConstruccion = () => {
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
      description: "Elaboramos el PG-RCD en cumplimiento de la normatividad ambiental vigente a nivel nacional y distrital, como requisito para la solicitud del PIN ambiental.",
    },
    {
      title: "Actualización mensual de la plataforma de reporte de RCDs",
      description: "Cargamos y verificamos mensualmente la información de RCD en la plataforma exigida por la autoridad ambiental.",
    },
    {
      title: "Cierre de PIN del proyecto",
      description: "Preparamos soportes y gestionamos el cierre del PIN ante la entidad competente, con seguimiento hasta su aprobación.",
    },
    {
      title: "Evaluación de requisitos de construcción sostenible aplicables al proyecto",
      description: "Evaluamos los requisitos de construcción sostenible que aplican a tu proyecto e integramos desde el diseño aquellos que son obligatorios, garantizando el cumplimiento normativo y evitando posibles sanciones.",
    },
    {
      title: "Evaluación de sistemas con posibles Beneficios Tributarios ante la UPME",
      description: "Acompañamiento práctico y enfocado en cumplimiento, con base en normatividad ambiental colombiana vigente.",
    },
  ];

  const supportItems = [
    {
      title: "Capacitaciones",
      description: "Ofrecemos capacitación en la temática ambiental o de sostenibilidad de su interés.",
    },
    {
      title: "Visitas de verificación de cumplimiento de medidas ambientales",
      description: "Realizamos visitas técnicas para verificar cumplimiento in situ y emitir recomendaciones puntuales de mejora.",
    },
    {
      title: "Certificación EDGE y CASA",
      description: "Analizamos el potencial de tu proyecto para obtener la certificación EDGE o CASA, y te asesoramos integralmente durante todo el proceso, desde la evaluación inicial hasta la obtención del certificado.",
    },
  ];

  const constructionIcons = [
    <FileText className="h-8 w-8 text-prak-yellow" />,
    <Calendar className="h-8 w-8 text-prak-yellow" />,
    <CheckCircle2 className="h-8 w-8 text-prak-yellow" />,
    <Eye className="h-8 w-8 text-prak-yellow" />,
    <Calculator className="h-8 w-8 text-prak-yellow" />,
  ];

  const supportIcons = [
    <BookOpen className="h-8 w-8 text-prak-teal" />,
    <Shield className="h-8 w-8 text-prak-teal" />,
    <Award className="h-8 w-8 text-prak-teal" />,
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Asesoría Sector Construcción | PRAK Ingenieros"
        description="Consultoría especializada en cumplimiento ambiental para el sector construcción. Planes de gestión de RCD, PIN ambiental, certificaciones EDGE y CASA."
        canonical="https://prakingenieros.com/servicios/asesoria-construccion"
      />
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
                  <Building className="h-5 w-5" />
                  ASESORÍA SECTOR CONSTRUCCIÓN
                </motion.div>
              </motion.div>

              <div className="text-center mb-8">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Asesoría en sector construcción
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Somos una consultora independiente especializada en el sector construcción. Acompañamos a las constructoras en el cumplimiento ambiental, la gestión de residuos y la sostenibilidad.
                </motion.p>
              </div>

              {/* Toggle buttons */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <button
                  onClick={() => setSelectedTab('mandatory')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${selectedTab === 'mandatory' ? 'bg-prak-teal text-white border-prak-teal shadow-elegant' : 'bg-white text-prak-dark border-prak-gray/30 hover:bg-prak-light'}`}
                >
                  Trámites obligatorios (PIN, reportes, cierres)
                </button>
                <button
                  onClick={() => setSelectedTab('support')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${selectedTab === 'support' ? 'bg-prak-teal text-white border-prak-teal shadow-elegant' : 'bg-white text-prak-dark border-prak-gray/30 hover:bg-prak-light'}`}
                >
                  Acompañamiento y Sostenibilidad
                </button>
              </div>

              {/* Mandatory Items */}
              {selectedTab === 'mandatory' && (
                <div className="mb-32">
                  <div className="text-center mb-20">
                    <motion.h2
                      className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Building className="h-10 w-10 text-prak-yellow" />
                      <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                        Trámites Obligatorios
                      </span>
                    </motion.h2>
                    <motion.p
                      className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
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
                          viewport={{ once: true }}
                        >
                          <Card
                            className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                            onClick={() => toggleCard(`mandatory-${index}`)}
                          >
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-prak-yellow/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                                  {constructionIcons[index]}
                                </div>
                                <div className="flex items-center gap-2 p-2 text-sm font-medium text-prak-gray-dark">
                                  <span className="text-lg font-bold">{expandedCards[`mandatory-${index}`] ? '−' : '+'}</span>
                                  <span>ver más</span>
                                </div>
                              </div>
                              <h3 className="text-lg font-bold mb-4 group-hover:text-prak-yellow transition-colors text-prak-dark">
                                {item.title}
                              </h3>
                              {expandedCards[`mandatory-${index}`] && (
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
              )}

              {/* Support Items */}
              {selectedTab === 'support' && (
                <div className="mb-32">
                  <div className="text-center mb-20">
                    <motion.h2
                      className="text-4xl md:text-5xl font-black mb-6 flex items-center justify-center gap-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true }}
                    >
                      <Leaf className="h-10 w-10 text-prak-teal" />
                      <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                        Acompañamiento y Sostenibilidad
                      </span>
                    </motion.h2>
                    <motion.p
                      className="text-white max-w-3xl mx-auto font-medium leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
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
                          viewport={{ once: true }}
                        >
                          <Card
                            className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                            onClick={() => toggleCard(`support-${index}`)}
                          >
                            <CardContent className="p-6 flex flex-col h-full">
                              <div className="flex items-center justify-between mb-4">
                                <div className="p-3 bg-prak-teal/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                                  {supportIcons[index]}
                                </div>
                                <div className="flex items-center gap-2 p-2 text-sm font-medium text-prak-gray-dark">
                                  <span className="text-lg font-bold">{expandedCards[`support-${index}`] ? '−' : '+'}</span>
                                  <span>ver más</span>
                                </div>
                              </div>
                              <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                                {item.title}
                              </h3>
                              {expandedCards[`support-${index}`] && (
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
              )}
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

export default AsesoriaConstruccion;
