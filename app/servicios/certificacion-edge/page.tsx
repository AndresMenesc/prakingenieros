import type { Metadata } from "next";
import CertificacionEdgeClient from "./client-page";

export const metadata: Metadata = {
  title: "Certificación EDGE en Colombia | Consultoría EDGE | PRAK Ingenieros",
  description:
    "Acompañamos proyectos inmobiliarios y constructoras durante todo el proceso de Certificación EDGE. Modelación, optimización y acompañamiento técnico especializado.",
  keywords: [
    "Certificación EDGE",
    "EDGE Colombia",
    "Consultoría EDGE",
    "Construcción sostenible",
    "Edificaciones sostenibles",
    "IFC",
    "Banco Mundial",
    "EDGE Expert",
    "Sostenibilidad",
    "Constructoras",
    "Desarrolladores inmobiliarios",
  ],
  alternates: {
    canonical: "https://prakingenieros.com/servicios/certificacion-edge",
  },
  openGraph: {
    title: "Certificación EDGE en Colombia | Consultoría EDGE | PRAK Ingenieros",
    description:
      "Acompañamos proyectos inmobiliarios y constructoras durante todo el proceso de Certificación EDGE. Modelación, optimización y acompañamiento técnico especializado.",
    url: "https://prakingenieros.com/servicios/certificacion-edge",
    siteName: "PRAK Ingenieros",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certificación EDGE en Colombia | Consultoría EDGE | PRAK Ingenieros",
    description:
      "Acompañamiento técnico especializado para obtener la Certificación EDGE en Colombia.",
  },
};

export default function CertificacionEdgePage() {
  return <CertificacionEdgeClient />;
}
