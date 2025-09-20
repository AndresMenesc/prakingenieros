import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesNavigation from "./ServicesNavigation";
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

const Services = () => {
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
        "Capacitación al personal en la normatividad vigente",
        "Visitas de verificación de cumplimiento de medidas ambientales",
        "Evaluación de sistemas con posibles Beneficios Tributarios ante la UPME",
        "Certificación EDGE"
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
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-10 leading-[0.9]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="text-prak-dark">Brindando soluciones para</span>
            <span className="text-prak-yellow block bg-gradient-to-r from-prak-yellow to-prak-teal bg-clip-text text-transparent">
              construcción, gestión,
            </span>
            <span className="block text-prak-teal font-light">y sostenibilidad.</span>
          </motion.h2>
          <motion.p
            className="text-xl text-prak-gray-dark max-w-4xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Somos una empresa de servicios de consultoría e ingeniería establecida e independiente.
            Tenemos una gran experiencia trabajando en todo tipo de proyectos, con un fuerte enfoque en el sector constructor.
          </motion.p>
        </motion.div>

        {/* Services Navigation */}
        <ServicesNavigation />

        {/* Asesoría Sector Construcción */}
        <div id="asesoria-construccion" className="mb-32">
          <div className="text-center mb-20">
            <motion.h3
              className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Building className="h-12 w-12 text-prak-yellow" />
              <span className="bg-gradient-to-r from-prak-yellow to-prak-teal bg-clip-text text-transparent">
                ASESORÍA SECTOR CONSTRUCCIÓN
              </span>
            </motion.h3>
            <motion.p
              className="text-xl text-prak-gray-dark max-w-3xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Minimizamos los riesgos asociados a cierres y multas por incumplimiento de la normatividad ambiental y de sostenibilidad vigente.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {environmentalServices[0].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="p-10 flex flex-col h-full">
                    <motion.div
                      className="mb-8 flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="p-5 bg-prak-yellow/10 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-all duration-300">
                        {constructionIcons[index]}
                      </div>
                      <h4 className="text-xl font-bold mb-6 group-hover:text-prak-yellow transition-colors text-prak-dark">
                        {feature.split(':')[0] || feature.split(' - ')[0] || feature}
                      </h4>
                    </motion.div>
                    <motion.div
                      className="flex-1 flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <p className="text-lg text-prak-gray-dark leading-relaxed font-medium">
                        {feature}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consultoría Ambiental y Sostenibilidad */}
        <div id="consultoria-ambiental" className="mb-32">
          <div className="text-center mb-20">
            <motion.h3
              className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Leaf className="h-12 w-12 text-prak-teal" />
              <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                CONSULTORÍA AMBIENTAL Y SOSTENIBILIDAD
              </span>
            </motion.h3>
            <motion.p
              className="text-xl text-prak-gray-dark max-w-3xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Contamos con expertos en temas ambientales para asesorar en cumplimiento y mejores prácticas.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {environmentalServices[1].features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="p-10 flex flex-col h-full">
                    <motion.div
                      className="mb-8 flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="p-5 bg-prak-teal/10 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-all duration-300">
                        {environmentalIcons[index]}
                      </div>
                      <h4 className="text-xl font-bold mb-6 group-hover:text-prak-teal transition-colors text-prak-dark">
                        {feature.split(':')[0] || feature.split(' - ')[0] || feature}
                      </h4>
                    </motion.div>
                    <motion.div
                      className="flex-1 flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.05, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <p className="text-lg text-prak-gray-dark leading-relaxed font-medium">
                        {feature}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Services */}
        <div id="marketing-digital">
          <div className="text-center mb-20">
            <motion.h3
              className="text-4xl md:text-5xl font-black mb-8 flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <TrendingUp className="h-12 w-12 text-prak-teal" />
              <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                MARKETING DIGITAL
              </span>
            </motion.h3>
            <motion.p
              className="text-xl text-prak-gray-dark max-w-3xl mx-auto font-medium leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Estrategias digitales integrales para maximizar su presencia online y ROI.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {digitalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col">
                  <CardContent className="p-10 flex flex-col h-full">
                    <motion.div
                      className="mb-8 flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <div className="p-5 bg-gradient-to-br from-prak-teal/10 to-prak-yellow/10 rounded-2xl inline-block mb-6 group-hover:scale-110 transition-all duration-300">
                        {React.cloneElement(service.icon, { className: "h-8 w-8 text-prak-teal" })}
                      </div>
                      <h4 className="text-xl font-bold mb-6 group-hover:text-prak-teal transition-colors text-prak-dark">
                        {service.title}
                      </h4>
                    </motion.div>
                    <motion.div
                      className="flex-1 flex items-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <ul className="space-y-4 w-full">
                        {service.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-start gap-4 hover:bg-prak-teal/5 p-2 rounded-lg transition-all duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 + itemIndex * 0.05, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            <div className="w-2 h-2 bg-prak-yellow rounded-full mt-3 flex-shrink-0"></div>
                            <span className="text-prak-gray-dark leading-relaxed font-medium hover:text-prak-dark transition-colors">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;