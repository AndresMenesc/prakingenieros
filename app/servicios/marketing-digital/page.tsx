"use client";

import { useEffect } from "react";
import MarketingDigitalClient from "./client-page";

export const dynamic = 'force-dynamic';

export default function MarketingDigitalPage() {
  useEffect(() => {
    document.title = "Marketing Digital | PRAK Ingenieros";
  }, []);

  return <MarketingDigitalClient />;
}
