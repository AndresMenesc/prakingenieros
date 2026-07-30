import type { Metadata } from "next";
import PinAmbientalClient from "./client-page";

export const metadata: Metadata = {
  title: "Apertura y Cierre de PIN Ambiental en Bogotá | PRAK Ingenieros",
  description:
    "Gestionamos la apertura, seguimiento y cierre del PIN Ambiental ante la Secretaría Distrital de Ambiente (SDA). Cumple con la normativa vigente y evita retrasos o sanciones.",
  keywords: [
    "PIN Ambiental",
    "Apertura PIN",
    "Cierre PIN",
    "PIN Ambiental Bogotá",
    "Secretaría Distrital de Ambiente",
    "SDA",
    "Gestión Ambiental",
    "Plan Gestión RCD",
    "Constructoras",
    "Consultoría Ambiental",
  ],
  alternates: {
    canonical: "https://prakingenieros.com/servicios/pin-ambiental",
  },
  openGraph: {
    title: "Apertura y Cierre de PIN Ambiental en Bogotá | PRAK Ingenieros",
    description:
      "Gestionamos la apertura, seguimiento y cierre del PIN Ambiental ante la Secretaría Distrital de Ambiente (SDA). Cumple con la normativa vigente y evita retrasos o sanciones.",
    url: "https://prakingenieros.com/servicios/pin-ambiental",
    siteName: "PRAK Ingenieros",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apertura y Cierre de PIN Ambiental en Bogotá | PRAK Ingenieros",
    description:
      "Gestionamos la apertura, seguimiento y cierre del PIN Ambiental ante la Secretaría Distrital de Ambiente (SDA).",
  },
};

export default function PinAmbientalPage() {
  return <PinAmbientalClient />;
}
