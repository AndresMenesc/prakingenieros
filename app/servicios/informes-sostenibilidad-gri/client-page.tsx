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

export default InformesSostenibilidadGRI;
