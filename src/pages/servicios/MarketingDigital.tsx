import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Target,
  Globe,
  Zap,
  BarChart3,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import SEOHead from "@/components/SEOHead";

const MarketingDigital = () => {
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
    <div className="min-h-screen">
      <SEOHead
        title="Marketing Digital | PRAK Ingenieros"
        description="Servicios de marketing digital: Google Ads, Meta Ads, publicidad programática, analítica web y estrategia digital para maximizar tu ROI."
        canonical="https://prakingenieros.com/servicios/marketing-digital"
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
                  <TrendingUp className="h-5 w-5" />
                  MARKETING DIGITAL
                </motion.div>
              </motion.div>

              <div className="text-center mb-20">
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <TrendingUp className="h-10 w-10 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Marketing digital
                  </span>
                </motion.h1>
                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto font-medium leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                      viewport={{ once: true }}
                    >
                      <Card
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-gradient-to-br from-prak-teal/10 to-prak-yellow/10 rounded-xl inline-block group-hover:scale-110 transition-all duration-300">
                              {React.cloneElement(service.icon, { className: "h-8 w-8 text-prak-teal" })}
                            </div>
                            <button
                              onClick={() => toggleCard(`marketing-${index}`)}
                              className="flex items-center gap-2 p-2 hover:bg-prak-gray/10 rounded-lg transition-colors text-sm font-medium text-prak-gray-dark cursor-pointer"
                            >
                              <span className="text-lg font-bold">{expandedCards[`marketing-${index}`] ? '−' : '+'}</span>
                              <span>ver más</span>
                            </button>
                          </div>
                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {service.title}
                          </h3>
                          {expandedCards[`marketing-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.3 }}
                              className="mb-4"
                            >
                              <ul className="space-y-3 w-full mb-4">
                                {service.items.map((item, itemIndex) => (
                                  <motion.li
                                    key={itemIndex}
                                    className="flex items-start gap-3 hover:bg-prak-teal/5 p-2 rounded-lg transition-all duration-300"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: itemIndex * 0.05, ease: "easeOut" }}
                                  >
                                    <div className="w-2 h-2 bg-prak-yellow rounded-full mt-3 flex-shrink-0"></div>
                                    <span className="text-sm text-prak-gray-dark leading-relaxed font-medium hover:text-prak-dark transition-colors">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                              <Button
                                onClick={() => openWhatsApp(service.title)}
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

export default MarketingDigital;
