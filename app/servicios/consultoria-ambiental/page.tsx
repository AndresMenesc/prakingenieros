import type { Metadata } from "next";
import ConsultoriaAmbientalClient from "./client-page";

export const metadata: Metadata = {
  title: "Consultoría Ambiental Empresarial | PRAK Ingenieros",
  description: "Consultoría ambiental especializada para empresas. Gestión RCD, certificaciones ISO 14001 y sostenibilidad.",
};

export default function ConsultoriaAmbientalPage() {
  return <ConsultoriaAmbientalClient />;
}
