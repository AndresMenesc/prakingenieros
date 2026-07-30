"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";

import {
  AlertTriangle,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  FileCheck,
  FilePlus2,
  FileText,
  HardHat,
  MapPin,
} from "lucide-react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";

const PinAmbiental = () => {
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
      ? `Hola, necesito información sobre ${title} para un PIN Ambiental.`
      : "Hola, necesito asesoría para apertura o cierre de un PIN Ambiental.";

    const whatsappUrl = `https://wa.me/573023490488?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const pinItems = [
    {
      title: "Registro y apertura del PIN Ambiental",
      description:
        "Gestionamos el registro de tu proyecto y la apertura del PIN Ambiental ante la Secretaría Distrital de Ambiente, verificando que la información requerida sea coherente con las características de la obra.",
    },
    {
      title: "Elaboración del Plan de Gestión RCD requerido",
      description:
        "Preparamos el Plan de Gestión de Residuos de Construcción y Demolición (RCD) que soporta la gestión ambiental de tu proyecto y cumple con los requerimientos aplicables de la SDA.",
    },
    {
      title: "Reporte periódico en la plataforma SDA",
      description:
        "Acompañamos la preparación y presentación de los reportes periódicos requeridos en la plataforma de la Secretaría Distrital de Ambiente para mantener actualizado el expediente ambiental.",
    },
    {
      title: "Seguimiento técnico durante la ejecución de la obra",
      description:
        "Realizamos acompañamiento técnico para verificar el manejo de RCD, la trazabilidad de la información reportada y el cumplimiento de las obligaciones ambientales durante la obra.",
    },
    {
      title: "Gestión del cierre del PIN Ambiental",
      description:
        "Gestionamos el cierre oportuno del PIN Ambiental una vez finaliza el proyecto, organizando los soportes necesarios para evitar pendientes administrativos ante la SDA.",
    },
  ];

  const icons = [
    <FilePlus2 className="h-8 w-8 text-prak-teal" />,
    <FileText className="h-8 w-8 text-prak-teal" />,
    <ClipboardCheck className="h-8 w-8 text-prak-teal" />,
    <HardHat className="h-8 w-8 text-prak-teal" />,
    <CircleCheck className="h-8 w-8 text-prak-teal" />,
  ];

  const whyPrakItems = [
    {
      title: "Experiencia en proyectos de construcción",
      description:
        "Conocemos las necesidades ambientales y administrativas de constructoras, contratistas, urbanizadores y proyectos de obra civil en Bogotá.",
      icon: <HardHat className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Cumplimiento de la normativa ambiental",
      description:
        "Orientamos cada proceso conforme a los requerimientos de la Secretaría Distrital de Ambiente, la Resolución 1115 de 2012 y la Resolución 932 de 2015.",
      icon: <FileCheck className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Acompañamiento personalizado",
      description:
        "Analizamos las particularidades de tu obra para brindar una gestión ambiental alineada con el estado real del proyecto.",
      icon: <MapPin className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Respuesta rápida y soporte técnico",
      description:
        "Nuestro equipo acompaña tus requerimientos con atención oportuna y soporte técnico durante las etapas de apertura, seguimiento y cierre.",
      icon: <AlertTriangle className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const faqs = [
    {
      question: "¿Qué es el PIN Ambiental?",
      answer:
        "El PIN Ambiental es el identificador único asignado por la Secretaría Distrital de Ambiente (SDA) para realizar el seguimiento ambiental a los proyectos de construcción y demolición en Bogotá. A través de este registro se controlan obligaciones relacionadas con el manejo de residuos de construcción y demolición (RCD), reportes y cierre del proyecto.",
    },
    {
      question: "¿Quién debe tramitar el PIN Ambiental?",
      answer:
        "El trámite aplica a proyectos de construcción, demolición y obras que, por sus características y obligaciones ambientales, deben registrar y reportar la gestión de RCD ante la Secretaría Distrital de Ambiente. Constructoras, contratistas, urbanizadores y responsables de obra deben revisar si su proyecto requiere este proceso.",
    },
    {
      question: "¿Cuáles son los requisitos para cerrar un PIN?",
      answer:
        "Para el cierre normalmente se requiere tener actualizada la información del proyecto, los reportes correspondientes, los soportes del manejo y disposición de RCD y demás documentos solicitados por la SDA. Los requisitos pueden variar según las condiciones y el historial del proyecto.",
    },
    {
      question: "¿Qué sucede si no cierro el PIN?",
      answer:
        "Un PIN Ambiental sin cierre puede dejar obligaciones ambientales y administrativas pendientes ante la Secretaría Distrital de Ambiente. Esto puede generar requerimientos, demoras en procesos posteriores y dificultades para acreditar el cumplimiento ambiental al finalizar la obra.",
    },
    {
      question: "¿Cuánto tarda el trámite?",
      answer:
        "El tiempo depende del estado de la documentación, la complejidad del proyecto, la disponibilidad de soportes y los tiempos de revisión de la entidad. En PRAK Ingenieros revisamos el caso desde el inicio para organizar la información y avanzar el proceso de manera eficiente.",
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
                  <FileCheck className="h-5 w-5" />
                  PIN AMBIENTAL
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 flex items-center justify-center gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <FileCheck className="h-12 w-12 text-prak-teal" />
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Apertura y Cierre de PIN Ambiental para tu Obra
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Gestionamos el registro, seguimiento y cierre del PIN Ambiental
                  ante la Secretaría Distrital de Ambiente (SDA), asegurando que tu
                  proyecto cumpla con la normativa vigente sin retrasos ni
                  sanciones.
                </motion.p>

                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
                >
                  Solicitar asesoría inmediata
                </Button>
              </motion.div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-xl mb-12 text-center">
                <h2 className="text-xl font-bold text-red-600 mb-2">
                  ⚠️ ¿Tu proyecto tiene un PIN Ambiental pendiente?
                </h2>
                <p>
                  No realizar correctamente la apertura, seguimiento o cierre del
                  PIN Ambiental puede generar requerimientos por parte de la
                  Secretaría Distrital de Ambiente, retrasos administrativos y
                  dificultades para finalizar tu proyecto.
                </p>
              </div>

              <div className="bg-gray-100 rounded-3xl p-8 md:p-10 border border-prak-teal/20 shadow-soft">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                  {pinItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        className="bg-white/90 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 group rounded-2xl hover:-translate-y-2 h-full flex flex-col cursor-pointer"
                        onClick={() => toggleCard(`pin-${index}`)}
                      >
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <div className="p-3 bg-prak-teal/10 rounded-xl group-hover:scale-110 transition-all">
                              {icons[index]}
                            </div>

                            <div className="flex items-center gap-2 text-sm font-medium text-prak-gray-dark">
                              <span className="text-lg font-bold">
                                {expandedCards[`pin-${index}`] ? "−" : "+"}
                              </span>
                              <span>ver más</span>
                            </div>
                          </div>

                          <h3 className="text-lg font-bold mb-4 group-hover:text-prak-teal transition-colors text-prak-dark">
                            {item.title}
                          </h3>

                          {expandedCards[`pin-${index}`] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                            >
                              <p className="text-sm text-prak-gray-dark/80 mb-4">
                                {item.description}
                              </p>

                              <Button
                                onClick={(event) => {
                                  event.stopPropagation();
                                  openWhatsApp(item.title);
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

              <div className="max-w-5xl mx-auto mt-20 space-y-10 text-white">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    ¿Qué es el PIN Ambiental?
                  </h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    El PIN Ambiental es el identificador único otorgado por la
                    Secretaría Distrital de Ambiente (SDA) para realizar el
                    seguimiento ambiental a los proyectos de construcción y
                    demolición en Bogotá.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Su gestión está regulada mediante la Resolución 1115 de 2012
                    y la Resolución 932 de 2015, normas que establecen las
                    obligaciones relacionadas con el manejo de residuos de
                    construcción y demolición (RCD) y el cumplimiento ambiental
                    durante la ejecución de las obras.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    ¿Por qué es importante mantener actualizado el PIN Ambiental?
                  </h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    Mantener actualizado el PIN Ambiental permite demostrar el
                    cumplimiento de las obligaciones ambientales de tu proyecto
                    ante la Secretaría Distrital de Ambiente. La apertura es solo
                    el primer paso: durante la ejecución de la obra se debe
                    conservar información organizada, actualizada y soportada.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    La SDA realiza seguimiento a los proyectos registrados y puede
                    solicitar aclaraciones, reportes o soportes relacionados con
                    el manejo de residuos de construcción y demolición. Por eso,
                    los reportes periódicos y la trazabilidad de los RCD son
                    fundamentales para una correcta gestión ambiental.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Un adecuado control del manejo de RCD contribuye a que los
                    residuos sean aprovechados, transportados y dispuestos según
                    las condiciones aplicables al proyecto. También facilita la
                    preparación de los documentos requeridos en caso de una visita
                    o requerimiento de la autoridad ambiental.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    Gestionar oportunamente el cierre del PIN Ambiental evita que
                    el proyecto quede con obligaciones pendientes al finalizar la
                    obra. Este proceso es importante para prevenir retrasos,
                    requerimientos administrativos o eventuales sanciones por
                    incumplimientos ante la SDA.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Consultoría Ambiental para constructoras en Bogotá
                  </h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    En PRAK Ingenieros acompañamos a constructoras, contratistas,
                    urbanizadores y responsables de obra en la apertura de PIN
                    Ambiental, la elaboración del Plan de Gestión RCD, el
                    seguimiento de reportes y el cierre ante la Secretaría
                    Distrital de Ambiente.
                  </p>
                </div>
              </div>

              <div className="mt-24">
                <h2 className="text-3xl font-bold text-center text-white mb-10">
                  ¿Por qué elegir PRAK Ingenieros?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
                  ¿Necesitas abrir o cerrar un PIN Ambiental?
                </h2>
                <p className="text-lg leading-relaxed text-white/90 mb-8">
                  Nuestro equipo te acompaña durante todo el proceso para cumplir
                  con los requisitos exigidos por la Secretaría Distrital de
                  Ambiente.
                </p>
                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl"
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

export default PinAmbiental;
