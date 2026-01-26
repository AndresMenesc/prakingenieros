"use client";

import { useEffect } from "react";
import MarketingDigitalClient from "./client-page";


export default function MarketingDigitalPage() {
  useEffect(() => {
    document.title = "Marketing Digital | PRAK Ingenieros";
  }, []);

  return <MarketingDigitalClient />;
}
