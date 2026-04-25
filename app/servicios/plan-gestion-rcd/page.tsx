import type { Metadata } from "next";
import PlanGestionRCDClient from "./client-page";

export const metadata: Metadata = {
  title: "Plan de Gestión RCD en Colombia | PRAK Ingenieros",
  description:
    "Elaboración del Plan de Gestión de Residuos de Construcción y Demolición (RCD). Cumple normativa ambiental y evita sanciones.",
};

export default function PlanGestionRCDPage() {
  return <PlanGestionRCDClient />;
}
