import type { Metadata } from "next";
import MarketingDigitalClient from "./client-page";

export const metadata: Metadata = {
  title: "Marketing Digital | PRAK Ingenieros",
  description: "Estrategias de marketing digital para empresas. Google Ads, Meta Ads, SEO y gestión de redes sociales.",
};

export default function MarketingDigitalPage() {
  return <MarketingDigitalClient />;
}
