"use client";

import { useEffect } from "react";
import ConsultoriaAmbientalClient from "./client-page";


export default function ConsultoriaAmbientalPage() {
  useEffect(() => {
    document.title = "Consultoría Ambiental Empresarial | PRAK Ingenieros";
  }, []);

  return <ConsultoriaAmbientalClient />;
}
