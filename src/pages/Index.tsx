import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  // Handle route-based scrolling
  useEffect(() => {
    const handleRouteScroll = () => {
      const path = location.pathname;
      let targetSection = '';

      switch (path) {
        case '/asesoria-construccion':
          targetSection = 'asesoria-construccion';
          break;
        case '/consultoria-ambiental':
          targetSection = 'consultoria-ambiental';
          break;
        case '/marketing-digital':
          targetSection = 'marketing-digital';
          break;
        default:
          return;
      }

      // Scroll to the target section after a short delay to ensure the page is loaded
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          const offsetTop = element.offsetTop - 100; // Account for header height
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
          });
        }
      }, 500);
    };

    handleRouteScroll();
  }, [location.pathname]);
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
    </div>
  );
};

export default Index;
