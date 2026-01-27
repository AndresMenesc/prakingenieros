import type { Metadata } from "next";
import AsesoriaConstruccionClient from "./client-page";

export const metadata: Metadata = {
  title: "Asesoría Sector Construcción | PRAK Ingenieros",
  description: "Asesoría especializada para el sector construcción. Gestión de proyectos, sostenibilidad y cumplimiento ambiental.",
};

export default function AsesoriaConstruccionPage() {
  return <AsesoriaConstruccionClient />;
}
