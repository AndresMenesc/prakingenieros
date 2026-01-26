"use client";

import { useEffect } from "react";
import AsesoriaConstruccionClient from "./client-page";

export const dynamic = 'force-dynamic';

export default function AsesoriaConstruccionPage() {
  useEffect(() => {
    document.title = "Asesoría Sector Construcción | PRAK Ingenieros";
  }, []);

  return <AsesoriaConstruccionClient />;
}
