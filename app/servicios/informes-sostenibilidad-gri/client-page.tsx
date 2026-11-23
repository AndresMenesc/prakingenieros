"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileCheck,
  FileText,
  Globe2,
  Handshake,
  Leaf,
  MessageCircle,
  Search,
  Users,
  Workflow,
} from "lucide-react";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import BackToTop from "@/app/components/BackToTop";


const InformesSostenibilidadGRI = () => {
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({});
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({});

  const toggleService = (id: string) =>
    setExpandedServices((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleFaq = (id: string) =>
    setExpandedFaqs((prev) => ({ ...prev, [id]: !prev[id] }));

  const openWhatsApp = (topic?: string) => {
    const message = topic
      ? `Hola, deseo recibir asesoría sobre ${topic}.`
      : "Hola, deseo recibir información sobre la elaboración de informes de sostenibilidad bajo estándares GRI.";
    window.open(
      `https://wa.me/573023490488?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };


  const services = [
    {
      title: "Coordinación y gestión de información",
      description:
        "Coordinamos con las áreas y responsables de la organización la recopilación de insumos, definimos herramientas de seguimiento y facilitamos el cumplimiento del cronograma de entrega de información.",
      icon: <Workflow className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Materialidad y grupos de interés",
      description:
        "Apoyamos la actualización de la materialidad mediante la definición de herramientas de consulta, participación de grupos de interés, análisis y priorización de temas materiales, y articulación con los Objetivos de Desarrollo Sostenible (ODS) cuando corresponda.",
      icon: <Users className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Revisión y consolidación de contenidos",
      description:
        "Revisamos la información y los textos de los capítulos, identificando oportunidades de mejora en claridad, estructura, coherencia y consistencia entre las diferentes secciones del reporte.",
      icon: <Search className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Estructuración y mapeo GRI",
      description:
        "Identificamos los contenidos GRI aplicables, revisamos brechas frente a reportes anteriores cuando existen, organizamos los contenidos generales y temáticos y elaboramos el Índice de contenidos GRI.",
      icon: <FileCheck className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Revisión de consistencia y cifras",
      description:
        "Realizamos revisiones cruzadas de cifras, datos y referencias entre capítulos, documentando diferencias para que sean revisadas y validadas por los responsables de la organización.",
      icon: <BarChart3 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Redacción y ajustes editoriales",
      description:
        "Desarrollamos y ajustamos los textos del reporte a partir de los insumos recibidos, incluyendo revisiones con responsables de información y ajustes editoriales consolidados.",
      icon: <FileText className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Contenidos corporativos e infografías",
      description:
        "Organizamos textos y datos para piezas de síntesis, indicadores destacados y contenidos corporativos como infografías de cifras, dejando recomendaciones de ubicación de elementos visuales.",
      icon: <Globe2 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Entrega de documentos editables",
      description:
        "Entregamos los textos finales aprobados en formato editable, con sugerencias de ubicación para tablas, gráficas, infografías y otros recursos visuales.",
      icon: <ClipboardList className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const benefits = [
    {
      title: "Información organizada",
      description:
        "Facilitamos la consolidación de información de diferentes áreas en una estructura de reporte clara y coherente.",
      icon: <ClipboardList className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Gestión de impactos",
      description:
        "El proceso permite reconocer y priorizar los impactos relevantes de la organización en las personas, el ambiente y la economía.",
      icon: <Leaf className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Transparencia y confianza",
      description:
        "Fortalece la comunicación de resultados, avances, compromisos y retos con los grupos de interés.",
      icon: <Handshake className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Apoyo a la toma de decisiones",
      description:
        "Contar con información estructurada contribuye a identificar oportunidades y orientar decisiones organizacionales.",
      icon: <BarChart3 className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Mejor relacionamiento",
      description:
        "Permite comunicar de manera más clara el desempeño de sostenibilidad a clientes, colaboradores, proveedores y otros actores.",
      icon: <Users className="h-8 w-8 text-prak-teal" />,
    },
    {
      title: "Marco reconocido de reporte",
      description:
        "La estructuración con estándares GRI ofrece una referencia ampliamente utilizada para comunicar impactos de sostenibilidad.",
      icon: <CheckCircle2 className="h-8 w-8 text-prak-teal" />,
    },
  ];

  const processSteps = [
    {
      title: "Diagnóstico y planificación",
      description:
        "Revisamos antecedentes, alcance, información disponible, responsables y necesidades del reporte.",
      icon: <Search className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Materialidad",
      description:
        "Definimos y desarrollamos el proceso de consulta, análisis y priorización de temas materiales.",
      icon: <Users className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Recopilación y revisión",
      description:
        "Coordinamos la entrega de información y revisamos los insumos de las diferentes áreas.",
      icon: <BarChart3 className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Elaboración del reporte",
      description:
        "Estructuramos capítulos, redactamos contenidos y organizamos el mapeo e índice GRI.",
      icon: <FileText className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Revisión y entrega",
      description:
        "Integramos ajustes, revisamos consistencia y entregamos los contenidos finales editables.",
      icon: <CheckCircle2 className="h-7 w-7 text-prak-teal" />,
    },
  ];


  const whyPrak = [
    {
      title: "Acompañamiento integral",
      description:
        "Apoyamos el proceso desde la planificación y coordinación de información hasta la consolidación de los contenidos finales.",
      icon: <Workflow className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Enfoque técnico",
      description:
        "Trabajamos para que los contenidos tengan claridad, coherencia y una adecuada articulación con la información suministrada.",
      icon: <Search className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Trabajo con las áreas",
      description:
        "Facilitamos la coordinación de responsables, insumos y tiempos de entrega durante el desarrollo del reporte.",
      icon: <Users className="h-7 w-7 text-prak-teal" />,
    },
    {
      title: "Consistencia del reporte",
      description:
        "Realizamos revisión cruzada de contenidos y cifras para facilitar la identificación de diferencias que requieren validación.",
      icon: <CheckCircle2 className="h-7 w-7 text-prak-teal" />,
    },
  ];

  const faqs = [
    {
      question: "¿Qué son los estándares GRI?",
      answer:
        "Los estándares GRI son un marco para que las organizaciones reporten sus impactos en la economía, el medio ambiente y las personas. Permiten estructurar y comunicar información de sostenibilidad de forma consistente y transparente.",
    },
    {
      question: "¿Qué empresas pueden elaborar un informe bajo GRI?",
      answer:
        "Organizaciones de diferentes tamaños y sectores pueden utilizar los estándares GRI para comunicar sus impactos. El alcance y los contenidos del reporte se definen de acuerdo con el contexto y los temas relevantes de cada organización.",
    },
    {
      question: "¿Qué incluye el servicio de PRAK Ingenieros?",
      answer:
        "El servicio puede incluir coordinación de responsables e insumos, actualización de materialidad, revisión de contenidos, mapeo de estándares GRI, índice de contenidos, revisión de consistencia y entrega de textos finales editables. El alcance se define para cada proyecto.",
    },
    {
      question: "¿PRAK genera o valida los indicadores de la empresa?",
      answer:
        "La generación, medición y validación de cifras e indicadores corresponde a las áreas responsables de la organización. PRAK acompaña la organización, revisión de consistencia y estructuración de la información recibida dentro del alcance acordado.",
    },
    {
      question: "¿El servicio incluye diseño y diagramación del informe?",
      answer:
        "No necesariamente. El servicio de elaboración de contenidos contempla la entrega de textos editables y sugerencias de ubicación para recursos visuales. El diseño gráfico, diagramación e infografías pueden contratarse por separado.",
    },
    {
      question: "¿El reporte incluye verificación externa?",
      answer:
        "La verificación externa independiente no está incluida en el servicio de elaboración de contenidos. Si la organización requiere este proceso, deberá contratarlo con un tercero especializado.",
    },
  ];


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* HERO */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-prak-light to-white">
          <div className="bg-gradient-hero py-16 md:py-24">
            <div className="container mx-auto px-4">
              <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
              >
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-premium text-prak-dark text-sm font-bold rounded-full mb-8 uppercase tracking-[0.15em] shadow-premium">
                  <Leaf className="h-5 w-5" />
                  SOSTENIBILIDAD EMPRESARIAL
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                  <span className="bg-gradient-to-r from-prak-teal to-prak-yellow bg-clip-text text-transparent">
                    Informes de sostenibilidad bajo estándares GRI
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed font-medium mb-8">
                  Transformamos la información de sostenibilidad de tu organización en un reporte estructurado, coherente y alineado con los estándares GRI.
                </p>
                <Button
                  onClick={() => openWhatsApp("la elaboración de informes de sostenibilidad GRI")}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl hover:opacity-90"
                >
                  Solicitar asesoría <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>


              {/* INTRO */}
              <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10 items-center text-white">
                <div>
                  <h2 className="text-3xl font-bold mb-5">Reportar sostenibilidad es comunicar impactos</h2>
                  <p className="text-lg leading-relaxed text-white/90">
                    Un informe de sostenibilidad permite a las organizaciones comunicar sus impactos económicos, ambientales y sociales, así como sus avances, compromisos y desafíos.
                  </p>
                  <p className="text-lg leading-relaxed text-white/90 mt-4">
                    A través de un proceso estructurado, facilitamos la organización de información, la identificación de temas relevantes y la elaboración de contenidos que permitan comunicar el desempeño de sostenibilidad a los grupos de interés.
                  </p>
                </div>
                <div className="rounded-3xl bg-white/10 border border-white/15 p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-4">¿Qué aportan los estándares GRI?</h3>
                  <ul className="space-y-3 text-white/90">
                    {[
                      "Una estructura para comunicar impactos",
                      "Identificación de temas relevantes",
                      "Información organizada y trazable",
                      "Mayor transparencia con grupos de interés",
                    ].map((item) => (
                      <li key={item} className="flex gap-3 items-start">
                        <CheckCircle2 className="h-5 w-5 text-prak-yellow shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


              {/* PROCESS */}
              <div className="mt-20 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-4">¿Cómo desarrollamos un informe de sostenibilidad?</h2>
                <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
                  Un proceso organizado que integra las áreas de la empresa, la información disponible y los contenidos del reporte.
                </p>
                <div className="grid md:grid-cols-5 gap-6">
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="text-center"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <div className="p-4 bg-white rounded-2xl w-fit mx-auto mb-4 shadow-soft">{step.icon}</div>
                      <h3 className="font-bold text-lg mb-3 text-white">{step.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* SERVICES */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-white mb-4">Nuestros servicios</h2>
                <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
                  Acompañamiento técnico y editorial para organizar, revisar y comunicar la información de sostenibilidad de tu organización.
                </p>
                <div className="bg-gray-100 rounded-3xl p-6 md:p-10 border border-prak-teal/20 shadow-soft">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.06 }}
                        viewport={{ once: true }}
                      >
                        <Card
                          className="bg-white border-0 shadow-soft hover:shadow-elegant transition-all duration-300 group rounded-2xl hover:-translate-y-1 h-full flex flex-col cursor-pointer"
                          onClick={() => toggleService(`service-${index}`)}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4">
                              <div className="p-3 bg-prak-teal/10 rounded-xl group-hover:scale-110 transition-all">{service.icon}</div>
                              <div className="flex items-center gap-2 text-sm font-medium text-prak-gray-dark">
                                <span className="text-lg font-bold">{expandedServices[`service-${index}`] ? "−" : "+"}</span>
                                <span>{expandedServices[`service-${index}`] ? "menos" : "ver más"}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-prak-dark group-hover:text-prak-teal transition-colors">{service.title}</h3>
                            {expandedServices[`service-${index}`] && (
                              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                                <p className="text-sm text-prak-gray-dark/80 mb-4 leading-relaxed">{service.description}</p>
                                <Button
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    openWhatsApp(service.title);
                                  }}
                                  className="bg-prak-teal text-white text-xs px-4 py-2 rounded-lg"
                                >
                                  Consultar servicio
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


              {/* BENEFITS */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Beneficios de elaborar un informe de sostenibilidad</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/90 border-0 shadow-soft hover:shadow-elegant transition-all rounded-2xl h-full">
                        <CardContent className="p-6">
                          <div className="p-3 bg-prak-teal/10 rounded-xl w-fit mb-4">{benefit.icon}</div>
                          <h3 className="text-lg font-bold mb-3 text-prak-dark">{benefit.title}</h3>
                          <p className="text-sm text-prak-gray-dark/80 leading-relaxed">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* WHY PRAK */}
              <div className="mt-20">
                <h2 className="text-3xl font-bold text-center text-white mb-10">¿Por qué trabajar con PRAK Ingenieros?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                  {whyPrak.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      viewport={{ once: true }}
                    >
                      <Card className="bg-white/90 border-0 shadow-soft hover:shadow-elegant rounded-2xl h-full">
                        <CardContent className="p-6">
                          <div className="p-3 bg-prak-teal/10 rounded-xl w-fit mb-4">{item.icon}</div>
                          <h3 className="text-lg font-bold mb-3 text-prak-dark">{item.title}</h3>
                          <p className="text-sm text-prak-gray-dark/80 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>


              {/* SCOPE */}
              <div className="mt-20 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Alcance del servicio</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-0 rounded-2xl bg-white/95 shadow-soft h-full">
                    <CardContent className="p-7">
                      <h3 className="text-2xl font-bold text-prak-dark mb-5 flex items-center gap-2"><CheckCircle2 className="text-prak-teal" /> Incluye</h3>
                      <ul className="space-y-3 text-prak-gray-dark">
                        {[
                          "Coordinación de responsables, insumos y entregas",
                          "Proceso de materialidad y grupos de interés",
                          "Revisión de información y contenidos de capítulos",
                          "Mapeo de contenidos GRI e índice de contenidos",
                          "Revisión cruzada de cifras y consistencia",
                          "Ajustes de texto y consolidación editorial",
                          "Entrega de contenidos finales editables",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-prak-teal shrink-0 mt-0.5" /><span>{item}</span></li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-0 rounded-2xl bg-white/95 shadow-soft h-full">
                    <CardContent className="p-7">
                      <h3 className="text-2xl font-bold text-prak-dark mb-5 flex items-center gap-2"><FileText className="text-prak-teal" /> No incluye</h3>
                      <ul className="space-y-3 text-prak-gray-dark">
                        {[
                          "Diseño gráfico, diagramación e infografías",
                          "Fotografía, video, ilustración o impresión",
                          "Generación, medición o validación de indicadores",
                          "Verificación externa independiente",
                          "Traducción a otros idiomas",
                          "Revisión de textos ya diagramados",
                          "Cambios de alcance posteriores a su aprobación",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2"><span className="text-prak-teal font-bold mt-0.5">–</span><span>{item}</span></li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-white/70 text-sm text-center mt-5 max-w-4xl mx-auto">
                  El alcance, cronograma y entregables se definen de acuerdo con las necesidades y características de cada organización.
                </p>
              </div>


              {/* FAQ */}
              <div className="mt-20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-white mb-10">Preguntas frecuentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.question}
                      className="bg-white/10 rounded-2xl p-6 cursor-pointer border border-white/10"
                      onClick={() => toggleFaq(`faq-${index}`)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-bold text-lg text-white">{faq.question}</h3>
                        <ChevronDown className={`h-6 w-6 text-prak-yellow shrink-0 transition-transform ${expandedFaqs[`faq-${index}`] ? "rotate-180" : ""}`} />
                      </div>
                      {expandedFaqs[`faq-${index}`] && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                          <p className="text-white/90 mt-4 leading-relaxed">{faq.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>


              {/* CTA */}
              <div className="mt-20 max-w-4xl mx-auto bg-white/10 rounded-3xl p-8 md:p-12 text-center border border-prak-teal/20">
                <div className="p-4 bg-white/90 rounded-2xl w-fit mx-auto mb-5"><MessageCircle className="h-8 w-8 text-prak-teal" /></div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Tu organización está preparando su informe de sostenibilidad?</h2>
                <p className="text-lg leading-relaxed text-white/90 mb-8">
                  Te acompañamos en la organización, revisión y elaboración de contenidos bajo estándares GRI, adaptando el proceso a las necesidades de tu organización.
                </p>
                <Button
                  onClick={() => openWhatsApp()}
                  className="bg-prak-yellow text-black font-bold px-8 py-4 text-lg rounded-xl hover:opacity-90"
                >
                  Hablar con un asesor
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


export default InformesSostenibilidadGRI;

