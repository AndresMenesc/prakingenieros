import type { Metadata } from "next";
import PlanGestionRCDClient from "./client-page";

export const metadata: Metadata = {
  title: "Plan de Gestión RCD en Colombia | Evita Multas | PRAK Ingenieros",
  description:
    "Elaboramos tu Plan de Gestión RCD rápido y conforme a la normativa ambiental en Colombia. Evita sanciones y cumple requisitos legales en tu obra.",
};

export default function PlanGestionRCDPage() {
  return <PlanGestionRCDClient />;
}
