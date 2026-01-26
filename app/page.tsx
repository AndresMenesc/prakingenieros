"use client";

import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Clients from "@/app/components/Clients";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import WhatsAppButton from "@/app/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
