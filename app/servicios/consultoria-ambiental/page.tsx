"use client";

import { useEffect } from "react";
import ConsultoriaAmbientalClient from "./client-page";

export const dynamic = 'force-dynamic';

export default function ConsultoriaAmbientalPage() {
  useEffect(() => {
    document.title = "Consultoría Ambiental Empresarial | PRAK Ingenieros";
  }, []);

  return <ConsultoriaAmbientalClient />;
}
