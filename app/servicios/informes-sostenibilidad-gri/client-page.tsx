"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

import {
  ArrowDown,
  Award,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Droplets,
  FileCheck,
  FileText,
  Leaf,
  Lightbulb,
  LineChart,
  Medal,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  Timer,
  Trees,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";

const CertificacionEdge = () => {
  const [expandedCards, setExpandedCards] = useState<{
    [key: string]: boolean;
  }>({});
  const [expandedFaqs, setExpandedFaqs] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }));
  };

  const openWhatsApp = (title?: string) => {
    const message = title
      ? `Hola, deseo recibir información sobre ${title} para un proyecto de Certificación EDGE.`
      : "Hola, deseo recibir información sobre la Certificación EDGE para un proyecto.";

    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const edgeServices = [
    {
      title: "Diagnóstico inicial",
      description:
        "Analizamos las condiciones actuales del proyecto, sus metas de sostenibilidad y las oportunidades de mejora para definir una ruta clara hacia la Certificación EDGE.",
      icon: <Search className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Modelación EDGE",
      description:
        "Desarrollamos la modelación en la plataforma EDGE para evaluar el desempeño del proyecto en energía, agua y energía incorporada en materiales.",
      icon: <BarChart3 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Optimización energética",
      description:
        "Proponemos estrategias de diseño y especificación que permitan reducir el consumo de energía sin afectar la funcionalidad, confort o viabilidad del proyecto.",
      icon: <Zap className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Optimización hídrica",
      description:
        "Evaluamos alternativas para disminuir el consumo de agua mediante equipos, sistemas y decisiones de diseño eficientes para la edificación.",
      icon: <Droplets className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Optimización de materiales",
      description:
        "Identificamos estrategias para reducir la energía incorporada en los materiales seleccionados, de acuerdo con los criterios definidos por EDGE.",
      icon: <Trees className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Acompañamiento técnico",
      description:
        "Acompañamos al equipo de diseño, construcción y gerencia para integrar las decisiones de sostenibilidad durante las etapas clave del proyecto.",
      icon: <Users className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Preparación documental",
      description:
        "Organizamos y revisamos la documentación técnica requerida para respaldar las medidas incorporadas en la modelación y el proceso de certificación.",
      icon: <FileText className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Soporte durante auditorías",
      description:
        "Brindamos soporte técnico durante la revisión del auditor, atendiendo observaciones y sustentando la información del proyecto.",
      icon: <ShieldCheck className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Seguimiento hasta la certificación",
      description:
        "Acompañamos el proceso hasta la obtención de la Certificación EDGE, manteniendo seguimiento a los hitos técnicos y documentales.",
      icon: <Award className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const benefits = [
    {
      title: "Mayor valor comercial",
      description:
        "Una edificación sostenible fortalece la propuesta de valor del proyecto frente a compradores, usuarios e inversionistas.",
      icon: <Building2 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Reducción de costos operativos",
      description:
        "Las estrategias de eficiencia pueden reducir consumos durante la operación de la edificación.",
      icon: <WalletCards className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Mayor eficiencia energética",
      description:
        "EDGE promueve medidas verificables para optimizar el consumo de energía del proyecto.",
      icon: <Zap className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Menor consumo de agua",
      description:
        "La optimización hídrica contribuye a una operación más eficiente y responsable.",
      icon: <Droplets className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Acceso a financiación sostenible",
      description:
        "La certificación puede apoyar la estructuración de proyectos elegibles para alternativas de financiación sostenible.",
      icon: <LineChart className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Mayor atractivo para inversionistas",
      description:
        "Los criterios de sostenibilidad fortalecen la confianza de inversionistas y actores del sector inmobiliario.",
      icon: <Medal className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Contribución a objetivos ESG",
      description:
        "La Certificación EDGE respalda compromisos ambientales y de sostenibilidad corporativa.",
      icon: <Leaf className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const processSteps = [
    {
      title: "Diagnóstico",
      description:
        "Revisamos las características, metas y oportunidades de sostenibilidad del proyecto.",
      icon: <Search className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Modelación EDGE",
      description:
        "Evaluamos el desempeño del proyecto en energía, agua y materiales.",
      icon: <BarChart3 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Optimización",
      description:
        "Definimos estrategias técnicas para alcanzar los porcentajes de ahorro requeridos.",
      icon: <Settings2 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Auditoría",
      description:
        "Preparamos soportes y acompañamos la revisión independiente del proyecto.",
      icon: <ClipboardCheck className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Certificación",
      description:
        "Acompañamos el proceso hasta la obtención de la Certificación EDGE.",
      icon: <Award className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const projectProgress = [
    {
      title: "Diagnóstico",
      status: "Completado",
      icon: <Check className="h-5 w-5" />,
      className: "bg-prak-teal text-white",
    },
    {
      title: "Modelación EDGE",
      status: "Completado",
      icon: <Check className="h-5 w-5" />,
      className: "bg-prak-teal text-white",
    },
    {
      title: "Optimización",
      status: "En proceso",
      icon: <Sparkles className="h-5 w-5" />,
      className: "bg-prak-yellow text-prak-dark",
    },
    {
      title: "Auditoría",
      status: "Próximamente",
      icon: <Timer className="h-5 w-5" />,
      className: "bg-white/20 text-white",
    },
    {
      title: "Certificación",
      status: "Próximamente",
      icon: <Timer className="h-5 w-5" />,
      className: "bg-white/20 text-white",
    },
  ];

  const whyPrakItems = [
    {
      title: "Experiencia técnica",
      description:
        "Aportamos análisis técnico y una visión integral para proyectos de construcción sostenible.",
      icon: <Lightbulb className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Acompañamiento personalizado",
      description:
        "Trabajamos de forma cercana con el equipo responsable de cada proyecto.",
      icon: <Users className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Optimización de recursos",
      description:
        "Buscamos soluciones viables que mejoren el desempeño en energía, agua y materiales.",
      icon: <Settings2 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Cumplimiento normativo",
      description:
        "Estructuramos el proceso técnico y documental de acuerdo con los requerimientos de EDGE.",
      icon: <FileCheck className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Soporte durante todo el proceso",
      description:
        "Acompañamos el proyecto desde el diagnóstico inicial hasta la certificación.",
      icon: <CircleCheck className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const faqs = [
    {
      question: "¿Qué es EDGE?",
      answer:
        "EDGE significa Excellence in Design for Greater Efficiencies. Es un sistema de certificación de edificaciones sostenibles desarrollado por IFC, miembro del Grupo Banco Mundial, que evalúa reducciones verificables en consumo de energía, consumo de agua y energía incorporada en materiales.",
    },
    {
      question: "¿Quién puede certificarse?",
      answer:
        "Pueden certificarse proyectos nuevos o existentes de diferentes tipologías, incluyendo vivienda, oficinas, comercio, hoteles, hospitales, instituciones educativas y otros desarrollos inmobiliarios que implementen medidas de eficiencia evaluables en EDGE.",
    },
    {
      question: "¿Cuánto tarda una certificación?",
      answer:
        "El tiempo varía según la etapa del proyecto, la complejidad técnica, la disponibilidad de información y los tiempos de revisión de auditoría. Un acompañamiento desde etapas tempranas permite organizar decisiones y documentos con mayor eficiencia.",
    },
    {
      question: "¿Cuánto ahorro exige EDGE?",
      answer:
        "Para la certificación EDGE, el proyecto debe alcanzar como mínimo un 20% de ahorro en energía, un 20% de ahorro en agua y un 20% de reducción de energía incorporada en materiales, conforme a la evaluación realizada en la plataforma.",
    },
    {
      question: "¿Qué beneficios tiene para una constructora?",
      answer:
        "La Certificación EDGE ayuda a diferenciar el proyecto en el mercado, respaldar estrategias ESG, mejorar la eficiencia de recursos, aumentar el atractivo ante compradores e inversionistas y explorar oportunidades de financiación sostenible.",
    },
    {
      question: "¿Quién realiza la auditoría?",
      answer:
        "La auditoría es realizada por un auditor EDGE autorizado e independiente. PRAK Ingenieros acompaña al proyecto en la preparación técnica y documental, así como en la atención de observaciones durante la revisión.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="pt-32 pb-20 bg-gradient-to-b from-prak-light to-white">
          <div className="bg-gradient-hero py-20">
            <div className="container mx-auto px-4">
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
                  <Leaf className="h-5 w-5" />
                  CERTIFICACIÓN EDGE
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Leaf className="h-12 w-12 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Certificación EDGE para Proyectos de Construcción
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Ayudamos a constructoras y desarrolladores inmobiliarios a
                  obtener la Certificación EDGE mediante estrategias que reducen
                  el consumo de energía, agua y materiales, mejorando la
                  sostenibilidad y el valor de sus proyectos.
                </motion.p>

                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Solicitar asesoría especializada
                </Button>
              </motion.div>

              <div className="max-w-5xl mx-auto space-y-10 text-white">
                <div>
                  <h2 className="text-3xl font-bold mb-4">¿Qué es EDGE?</h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    EDGE significa Excellence in Design for Greater Efficiencies.
                    Es un sistema de certificación de edificaciones sostenibles
                    desarrollado por IFC, miembro del Grupo Banco Mundial.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Su objetivo es impulsar proyectos que incorporen reducciones
                    verificables en el consumo de energía, el consumo de agua y
                    la energía incorporada en los materiales. La Certificación
                    EDGE permite demostrar que una edificación integra decisiones
                    medibles de sostenibilidad desde su diseño hasta su ejecución.
                  </p>
                </div>

                <div className="bg-white/10 rounded-3xl p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-center mb-10">
                    ¿Cómo funciona EDGE?
                  </h2>

                  <div className="grid md:grid-cols-5 gap-6">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.title}
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="p-4 bg-white/90 rounded-2xl w-fit mx-auto mb-4 shadow-soft">
                          {step.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                        <p className="text-sm text-white/80">
                          {step.description}
                        </p>

                        {index < processSteps.length - 1 && (
                          <div className="hidden md:flex justify-center mt-6">
                            <ArrowDown className="h-5 w-5 text-prak-yellow rotate-[-90deg]" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  Beneficios de la Certificación EDGE
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full">
                        <CardContent className="p-6">
                          <div className="p-3 bg-prak-teal/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-all">
                            {benefit.icon}
                          </div>
                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-prak-gray-dark/80">
                            {benefit.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  Nuestros servicios
                </h2>

                <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {edgeServices.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                          onClick={() => toggleCard(`edge-${index}`)}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-prak-teal/10 rounded-xl group-hover:scale-110 transition-all">
                                {service.icon}
                              </div>

                              <div className="flex items-center gap-2 text-sm font-medium text-prak-gray-dark">
                                <span className="text-lg font-bold">
                                  {expandedCards[`edge-${index}`] ? "−" : "+"}
                                </span>
                                <span>ver más</span>
                              </div>
                            </div>

                            <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                              {service.title}
                            </h3>

                            {expandedCards[`edge-${index}`] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                              >
                                <p className="text-sm text-prak-gray-dark/80 mb-4">
                                  {service.description}
                                </p>

                                <Button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    openWhatsApp(service.title);
                                  }}
                                  className="bg-prak-teal text-white text-xs px-4 py-2 rounded-lg"
                                >
                                  Solicitar información
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

              <motion.section
                className="mt-24 max-w-7xl mx-auto bg-white/10 rounded-3xl p-8 md:p-12 border border-prak-teal/20 shadow-soft"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-center max-w-4xl mx-auto mb-12">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-6 uppercase tracking-[0.15em] shadow-premium">
                    <Sparkles className="h-5 w-5" />
                    CASO DE ÉXITO EN DESARROLLO
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Proyecto en desarrollo
                  </h2>

                  <p className="text-lg leading-relaxed text-white/90">
                    Actualmente PRAK Ingenieros acompaña un importante proyecto
                    residencial ubicado en Chía (Cundinamarca) durante su proceso
                    de Certificación EDGE.
                  </p>

                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Nuestro equipo participa en la modelación, optimización y
                    acompañamiento técnico para alcanzar los estándares de
                    sostenibilidad requeridos.
                  </p>
                </div>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-white text-center mb-4">
                    Galería del proyecto
                  </h3>

                  <p className="text-center text-white/80 max-w-3xl mx-auto mb-8">
                    Próximamente documentaremos el avance de este proyecto con
                    fotografías reales de las visitas técnicas, reuniones y
                    proceso de certificación.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <motion.div
                        key={`project-image-${index}`}
                        className="aspect-video rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-center p-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <div>
                          <Building2 className="h-8 w-8 text-prak-yellow mx-auto mb-3" />
                          <span className="font-semibold text-white">
                            Imagen del proyecto
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white text-center mb-10">
                    Avance del Proyecto
                  </h3>

                  <div className="grid md:grid-cols-5 gap-5">
                    {projectProgress.map((step, index) => (
                      <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="text-center">
                          <div
                            className={`h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4 ${step.className}`}
                          >
                            {step.icon}
                          </div>
                          <h4 className="font-bold text-white mb-1">
                            {step.title}
                          </h4>
                          <p className="text-sm text-white/80">
                            {step.status}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>

              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  ¿Por qué elegir PRAK Ingenieros?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                  {whyPrakItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full">
                        <CardContent className="p-6">
                          <div className="p-3 bg-prak-teal/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-all">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {item.title}
                          </h3>
                          <p className="text-sm text-prak-gray-dark/80">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-24 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  Preguntas frecuentes
                </h2>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.question}
                      className="bg-white/10 rounded-2xl p-6 cursor-pointer"
                      onClick={() => toggleFaq(`faq-${index}`)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-bold text-xl">{faq.question}</h3>
                        <ChevronDown
                          className={`h-6 w-6 shrink-0 transition-transform ${
                            expandedFaqs[`faq-${index}`] ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {expandedFaqs[`faq-${index}`] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                        >
                          <p className="text-white/90 mt-4">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-24 max-w-4xl mx-auto bg-white/10 rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  ¿Quieres certificar tu proyecto con EDGE?
                </h2>

                <p className="text-lg leading-relaxed text-white/90 mb-8">
                  Nuestro equipo puede acompañarte desde el diagnóstico inicial
                  hasta la obtención de la Certificación EDGE.
                </p>

                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Hablar con un especialista
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

export default CertificacionEdge;
