import type { Metadata } from "next";
import InformesSostenibilidadGRIClient from "./client-page";

export const metadata: Metadata = {
  title: "Informes de Sostenibilidad GRI en Colombia | PRAK Ingenieros",
  description:
    "Acompañamos a las organizaciones en la elaboración de informes de sostenibilidad bajo estándares GRI: materialidad, gestión de información, revisión de contenidos e índice GRI.",
  keywords: [
    "Informes de sostenibilidad GRI",
    "Elaboración de informes GRI",
    "Reporte de sostenibilidad Colombia",
    "Consultoría en sostenibilidad empresarial",
    "Estándares GRI",
    "Materialidad de sostenibilidad",
    "Reportes ESG",
    "Índice de contenidos GRI",
    "Sostenibilidad empresarial",
    "PRAK Ingenieros",
  ],
  alternates: {
    canonical: "https://prakingenieros.com/servicios/informes-sostenibilidad-gri",
  },
  openGraph: {
    title: "Informes de Sostenibilidad GRI en Colombia | PRAK Ingenieros",
    description:
      "Elaboración y acompañamiento de informes de sostenibilidad bajo estándares GRI. Materialidad, gestión de información, revisión de contenidos e índice GRI.",
    url: "https://prakingenieros.com/servicios/informes-sostenibilidad-gri",
    siteName: "PRAK Ingenieros",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Informes de Sostenibilidad GRI en Colombia | PRAK Ingenieros",
    description:
      "Acompañamiento en la elaboración de informes de sostenibilidad bajo estándares GRI.",
  },
};


export default function InformesSostenibilidadGRIPage() {
  return <InformesSostenibilidadGRIClient />;
}
